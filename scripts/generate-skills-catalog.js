#!/usr/bin/env node

import { writeFile } from 'node:fs/promises'
import { readSkills } from '../lib/skill-catalog.js'

const skills = await readSkills(process.cwd())
await writeFile('skills.json', `${JSON.stringify({ generatedAt: new Date().toISOString(), skills }, null, 2)}\n`)
console.log(`Wrote skills.json with ${skills.length} skills.`)
