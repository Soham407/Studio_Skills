import { execa } from 'execa'
import chalk from 'chalk'
import { intro, outro, select, text, confirm, spinner, isCancel, cancel } from '@clack/prompts'
import { CONFIG_PATH, DEFAULTS, saveConfig } from './config.js'

const TOOL_FIXES = {
  pnpm: 'brew install pnpm',
  gh: 'brew install gh',
  node: 'brew install node',
  orb: 'Install OrbStack from https://orbstack.dev',
  ollama: 'Install Ollama from https://ollama.com',
}

async function commandExists(command) {
  try {
    await execa(command, ['--version'])
    return true
  } catch {
    return false
  }
}

async function checkTool(command, label, required = true) {
  const exists = await commandExists(command)
  return {
    command,
    label,
    required,
    ok: exists,
    fix: TOOL_FIXES[command],
  }
}

function exitIfCancel(value) {
  if (isCancel(value)) {
    cancel('Setup cancelled.')
    process.exit(0)
  }
  return value
}

export async function runWizard() {
  intro(chalk.cyan('kickstart setup'))
  console.log('Studio Skills bootstraps Claude Code projects with shared skills, guardrails, database/auth defaults, and optional local Ollama guidance.\n')

  const s = spinner()
  s.start('Checking local tools')
  const checks = await Promise.all([
    checkTool('pnpm', 'pnpm'),
    checkTool('gh', 'GitHub CLI'),
    checkTool('node', 'Node.js'),
    checkTool('orb', 'OrbStack', false),
    checkTool('ollama', 'Ollama', false),
  ])
  s.stop('Tool check complete')

  for (const check of checks) {
    const mark = check.ok ? chalk.green('OK') : check.required ? chalk.red('MISSING') : chalk.yellow('OPTIONAL')
    console.log(`${mark} ${check.label}${check.ok ? '' : ` - ${check.fix}`}`)
  }

  const ghInstalled = checks.find((check) => check.command === 'gh')?.ok
  if (ghInstalled) {
    try {
      await execa('gh', ['auth', 'status'])
      console.log(`${chalk.green('OK')} GitHub CLI authenticated`)
    } catch {
      const login = exitIfCancel(await confirm({
        message: 'GitHub CLI is not authenticated. Run gh auth login now?',
        initialValue: true,
      }))
      if (login) {
        await execa('gh', ['auth', 'login'], { stdio: 'inherit' })
      }
    }
  }

  const ollama = exitIfCancel(await select({
    message: 'How should new projects describe Ollama usage?',
    options: [
      { value: 'ask', label: 'Ask me each new project' },
      { value: 'prefer', label: 'Prefer local Ollama for routine tasks' },
      { value: 'skip', label: 'Always use cloud Claude' },
    ],
    initialValue: 'ask',
  }))

  const skillsRepo = exitIfCancel(await text({
    message: 'Default skills repository',
    placeholder: DEFAULTS.skillsRepo,
    defaultValue: DEFAULTS.skillsRepo,
    validate(value) {
      if (!value.startsWith('https://') && !value.startsWith('git@')) {
        return 'Enter an HTTPS or SSH git repository URL.'
      }
    },
  }))

  saveConfig({
    skillsRepo,
    ollama,
    version: DEFAULTS.version,
  })

  outro(`Setup complete. Config saved at ${CONFIG_PATH}\nRun: kickstart --web my-app`)
}
