#!/usr/bin/env node

import { lintSkills } from '../lib/skill-catalog.js'

const { skills, issues } = await lintSkills(process.cwd())

if (issues.length > 0) {
  console.error(`Skill lint failed with ${issues.length} issue(s):`)
  for (const issue of issues) console.error(`- ${issue}`)
  process.exit(1)
}

console.log(`Skill lint passed for ${skills.length} skills.`)
