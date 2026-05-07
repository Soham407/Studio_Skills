import chalk from 'chalk'
import { loadConfig, readPackageVersion, saveConfig } from './config.js'

const ONE_DAY_MS = 24 * 60 * 60 * 1000
const REGISTRY_LATEST_URL = 'https://registry.npmjs.org/@studio-skills/kickstart/latest'

function compareVersions(left, right) {
  const leftParts = String(left).split('.').map((part) => Number.parseInt(part, 10) || 0)
  const rightParts = String(right).split('.').map((part) => Number.parseInt(part, 10) || 0)
  const length = Math.max(leftParts.length, rightParts.length)

  for (let index = 0; index < length; index += 1) {
    const diff = (leftParts[index] ?? 0) - (rightParts[index] ?? 0)
    if (diff !== 0) return diff
  }

  return 0
}

export function checkForUpdate() {
  const config = loadConfig()
  const now = Date.now()

  if (now - Number(config.lastUpdateCheck ?? 0) < ONE_DAY_MS) {
    return
  }

  setTimeout(async () => {
    try {
      const response = await fetch(REGISTRY_LATEST_URL, {
        headers: { accept: 'application/json' },
      })
      if (!response.ok) return

      const { version: latest } = await response.json()
      const current = readPackageVersion()
      saveConfig({ lastUpdateCheck: now })

      if (latest && compareVersions(latest, current) > 0) {
        console.log(chalk.yellow(`\nUpdate available: v${current} -> v${latest}\nRun: npm update -g @studio-skills/kickstart\n`))
      }
    } catch {
      // Update checks are best-effort and should never block project creation.
    }
  }, 0)
}
