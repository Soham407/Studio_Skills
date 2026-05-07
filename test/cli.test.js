import test from 'node:test'
import assert from 'node:assert/strict'
import { mkdtemp, rm } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { join } from 'node:path'
import { tmpdir } from 'node:os'
import { execa } from 'execa'

test('prints CLI help', async () => {
  const { stdout } = await execa('node', ['bin/kickstart.js', '--help'], { cwd: process.cwd() })

  assert.match(stdout, /kickstart/)
  assert.match(stdout, /--no-github/)
  assert.match(stdout, /skills/)
})

test('prints CLI version from package metadata', async () => {
  const { stdout } = await execa('node', ['bin/kickstart.js', '--version'], { cwd: process.cwd() })

  assert.equal(stdout.trim(), '1.0.0')
})

test('installs a skill into a selected agent target', async () => {
  const target = await mkdtemp(join(tmpdir(), 'studio-skills-test-'))

  try {
    await execa('node', [
      'bin/kickstart.js',
      'skills',
      'install',
      'tdd',
      '--agent',
      'codex',
      '--skills',
      `file://${process.cwd()}`,
      '--target',
      target,
    ], { cwd: process.cwd() })

    assert.equal(existsSync(join(target, '.agents', 'skills', 'architecture', 'matt-pocock-tdd', 'SKILL.md')), true)
  } finally {
    await rm(target, { recursive: true, force: true })
  }
})
