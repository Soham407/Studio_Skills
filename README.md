# Studio Skills Kickstart

Bootstrap Studio-Grade Claude Code projects in 30 seconds.

`@studio-skills/kickstart` is an open-source npm CLI that creates production-ready Next.js, Expo, or universal Solito projects, injects 35+ Claude skills, and wires sensible guardrails for serious project work.

## Install

```bash
npm install -g @studio-skills/kickstart
```

## First Run

```bash
kickstart --init
```

The wizard checks your local tools, helps with GitHub CLI authentication, asks how each project should treat Ollama, and saves config to `~/.studio-skills/config.json`.

## Create a Project

```bash
kickstart --web my-app
kickstart --mobile my-mobile-app
kickstart --universal my-platform
```

Then:

```bash
cd my-app
pnpm dev
```

## What You Get

- Next.js web, Expo mobile, or Turborepo + Solito universal scaffold
- Private GitHub repo creation through `gh`
- Studio Skills injected into `.claude/skills/`
- Supabase client setup
- Better-Auth starter setup
- WatermelonDB starter setup for mobile and universal projects
- Husky, lint-staged, Vitest, Playwright, and Prettier
- `CLAUDE.md` with project context and model routing guidance
- Silent daily npm update checks

## Skills Library

The CLI fetches skills at runtime from this repository, or from your configured custom repo.

```bash
kickstart --skills https://github.com/Soham407/Studio_Skills.git --web custom-app
```

Skills are organized by domain:

- `architecture/`: engineering workflows, diagnosis, TDD, planning, triage, architecture improvement
- `coding/`: TypeScript, framework, and offline-first implementation patterns
- `business/`: studio operations, security, SEO, demos, outreach
- `design/`: design tokens and UI system guidance

## Requirements

- Node.js 20+
- pnpm
- GitHub CLI authenticated with `gh auth login`
- OrbStack optional, recommended for Docker workloads
- Ollama optional, useful for local routine coding tasks

## Configuration

`kickstart --init` writes:

```json
{
  "skillsRepo": "https://github.com/Soham407/Studio_Skills.git",
  "ollama": "ask",
  "ollamaModel": "qwen2.5-coder:14b",
  "version": "1.0.0"
}
```

Use `--skills <url>` to override the configured skills repo for one project.

## Local Development

```bash
npm install
npm link
kickstart --help
kickstart --init
```

Package check:

```bash
npm pack
npm install -g studio-skills-kickstart-1.0.0.tgz
kickstart --version
```

## Contributing

Contributions are welcome. Start with [CONTRIBUTING.md](CONTRIBUTING.md) for skill structure and pull request expectations, and [ARCHITECTURE.md](ARCHITECTURE.md) for how the CLI and skills library fit together.

## License

MIT
