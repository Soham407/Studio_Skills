#!/usr/bin/env node

import { Command } from 'commander'
import { checkForUpdate } from '../lib/updater.js'
import { runWizard } from '../lib/wizard.js'
import { scaffold } from '../lib/scaffold.js'
import { readPackageVersion } from '../lib/config.js'

const program = new Command()

program
  .name('kickstart')
  .description('Studio-Grade project bootstrapper with Claude skills')
  .version(readPackageVersion())
  .option('--init', 'Run the first-time setup wizard')
  .option('--web', 'Scaffold a Next.js web project')
  .option('--mobile', 'Scaffold an Expo mobile project')
  .option('--universal', 'Scaffold a Turborepo + Solito universal project')
  .option('--skills <url>', 'Custom skills repo URL')
  .argument('[name]', 'Project name')
  .action(async (name, options) => {
    if (options.init) {
      await runWizard()
      return
    }

    await scaffold(name, options)
  })

checkForUpdate()
program.parseAsync().catch((error) => {
  console.error(error.message)
  process.exit(1)
})
