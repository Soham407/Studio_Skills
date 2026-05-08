import test from 'node:test'
import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { DEFAULTS } from '../lib/config.js'

test('uses the Studio Skills repository as the default skills source', async () => {
  assert.equal(DEFAULTS.skillsRepo, 'https://github.com/soham407/studio_skills.git')

  const bash = await readFile('scripts/kickstart.sh', 'utf8')
  assert.match(bash, /STUDIO_SKILLS_REPO="https:\/\/github\.com\/soham407\/studio_skills\.git"/)
})

test('installs Sandcastle into scaffolded projects', async () => {
  const scaffold = await readFile('lib/scaffold.js', 'utf8')
  const bash = await readFile('scripts/kickstart.sh', 'utf8')

  assert.match(scaffold, /'@ai-hero\/sandcastle'/)
  assert.match(bash, /@ai-hero\/sandcastle/)
})

test('creates the design staging folder in scaffolded projects', async () => {
  const scaffold = await readFile('lib/scaffold.js', 'utf8')
  const bash = await readFile('scripts/kickstart.sh', 'utf8')

  assert.match(scaffold, /\.design-staging/)
  assert.match(scaffold, /\.gitkeep/)
  assert.match(bash, /mkdir -p \.design-staging/)
  assert.match(bash, /touch \.design-staging\/\.gitkeep/)
})
