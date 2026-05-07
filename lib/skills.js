import { cp, mkdir, mkdtemp, rm } from 'node:fs/promises'
import { join } from 'node:path'
import { tmpdir } from 'node:os'
import { execa } from 'execa'
import chalk from 'chalk'
import { readSkills, SKILL_CATEGORIES } from './skill-catalog.js'

export const AGENT_SKILL_TARGETS = {
  claude: join('.claude', 'skills'),
  codex: join('.agents', 'skills'),
  gemini: join('.gemini', 'skills'),
  cursor: join('.cursor', 'skills'),
  opencode: join('.opencode', 'skills'),
  windsurf: join('.windsurf', 'skills'),
  aider: join('.aider', 'skills'),
  goose: join('.goose', 'skills'),
  pi: join('.pi', 'skills'),
}

export async function injectSkills(projectDir, repoUrl) {
  const tmp = await mkdtemp(join(tmpdir(), 'studio-skills-'))

  try {
    await execa('git', ['clone', '--depth', '1', repoUrl, tmp], { stdio: 'inherit' })
    await mkdir(join(projectDir, '.claude', 'skills'), { recursive: true })

    for (const category of SKILL_CATEGORIES) {
      const source = join(tmp, category)
      const target = join(projectDir, '.claude', 'skills', category)
      try {
        await cp(source, target, { recursive: true, force: true })
        console.log(chalk.green(`[kickstart] injected ${category}/`))
      } catch {
        console.log(chalk.yellow(`[kickstart] skipped missing category: ${category}/`))
      }
    }

    await cp(join(tmp, '.github', 'skills', 'SKILL_TEMPLATE.md'), join(projectDir, '.claude', 'skills', 'SKILL_TEMPLATE.md'), {
      force: true,
    }).catch(() => {})
  } finally {
    await rm(tmp, { recursive: true, force: true })
  }
}

export async function withSkillsRepo(repoUrl, callback) {
  const tmp = await mkdtemp(join(tmpdir(), 'studio-skills-'))

  try {
    await execa('git', ['clone', '--depth', '1', repoUrl, tmp], { stdio: 'ignore' })
    return await callback(tmp)
  } finally {
    await rm(tmp, { recursive: true, force: true })
  }
}

export async function listRepoSkills(repoUrl) {
  return withSkillsRepo(repoUrl, (repoDir) => readSkills(repoDir))
}

export async function installSkill(projectDir, repoUrl, skillName, agent = 'claude') {
  return withSkillsRepo(repoUrl, async (repoDir) => {
    const skills = await readSkills(repoDir)
    const skill = skills.find((candidate) => candidate.name === skillName || candidate.slug === skillName)
    if (!skill) throw new Error(`Skill not found: ${skillName}`)
    if (!AGENT_SKILL_TARGETS[agent]) {
      throw new Error(`Unsupported agent target "${agent}". Use one of: ${Object.keys(AGENT_SKILL_TARGETS).join(', ')}`)
    }

    const sourceDir = join(repoDir, skill.category, skill.slug)
    const targetRoot = join(projectDir, AGENT_SKILL_TARGETS[agent])
    const targetDir = join(targetRoot, skill.category, skill.slug)
    await mkdir(join(targetRoot, skill.category), { recursive: true })
    await cp(sourceDir, targetDir, { recursive: true, force: true })
    return { ...skill, targetDir }
  })
}
