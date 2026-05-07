import { cp, mkdir, mkdtemp, rm } from 'node:fs/promises'
import { join } from 'node:path'
import { tmpdir } from 'node:os'
import { execa } from 'execa'
import chalk from 'chalk'

export const SKILL_CATEGORIES = ['architecture', 'coding', 'business', 'design']

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
