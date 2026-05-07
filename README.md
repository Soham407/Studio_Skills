# Studio Kickstart

One command to bootstrap a new serious app with the frameworks, tools, guardrails, agent docs, and reusable skills already wired in.

`kickstart` is for developers who are tired of repeating the same project setup: create the app, install the framework stack, add auth/database packages, configure tests and formatting, copy agent instructions, install skills, and set up basic guardrails.

## Quick Start

Install the CLI:

```bash
npm install -g @studio-skills/kickstart
kickstart --init
```

Create a new project with guided choices:

```bash
kickstart
```

The CLI asks for:

- Project type: Next.js web, Expo mobile, or Turborepo + Solito universal
- Project name
- Local model preference, or no local model assumption
- GitHub repo mode: skip, private, or public

For automation, pass choices as flags:

```bash
kickstart --web my-app --github skip
kickstart --mobile my-mobile-app --github private
kickstart --universal my-platform --github public
```

## What Gets Set Up

- Next.js, Expo, or Turborepo + Solito project scaffold
- Optional GitHub repo creation through `gh`
- Supabase client starter
- Better-Auth starter
- WatermelonDB starter for mobile and universal projects
- Husky, lint-staged, Vitest, Playwright, and Prettier
- `AGENTS.md`, `CLAUDE.md`, and `GEMINI.md` with project and agent guidance
- Studio Skills injected into `.claude/skills/` by default
- Cross-agent skill install targets for Claude Code, Codex, Gemini CLI, Cursor, OpenCode, Windsurf, Aider, Goose, and Pi-style local agents
- Local model guidance for Ollama, LM Studio, llama.cpp, Open WebUI, or any local runtime exposed through your chosen agent
- Docker-compatible runtime guidance for macOS, Windows, and Linux through Docker Desktop, Docker Engine, Podman, or OrbStack

Local model support is optional. If a user selects "Do not assume local models", the generated agent docs tell Claude Code, Codex, Gemini CLI, or another active agent to use its configured model instead.

## Included Skills

The skills are included so new projects start with repeatable workflows already available. They are not the whole product; they are part of the bootstrap.

Current library: **23 skills** across:

- `architecture/`: diagnosis, TDD, planning, triage, architecture improvement, token discipline
- `coding/`: TypeScript and offline-first implementation patterns
- `business/`: studio operations, security, SEO, demos, outreach, presentations
- `design/`: design tokens and UI system guidance

List available skills:

```bash
kickstart skills list
```

Install one skill into an existing project:

```bash
kickstart skills install tdd
kickstart skills install tdd --agent codex
kickstart skills install hue --agent gemini
```

Use a fork or custom skills repo:

```bash
kickstart --skills https://github.com/your-org/your-skills.git --web custom-app
kickstart skills list --skills https://github.com/your-org/your-skills.git
```

## CLI Reference

```bash
kickstart --init
kickstart
kickstart --web <name> [--github private|public|skip]
kickstart --mobile <name> [--github private|public|skip]
kickstart --universal <name> [--github private|public|skip]
kickstart skills list
kickstart skills install <skill> [--agent claude|codex|gemini|cursor|opencode|windsurf|aider|goose|pi]
```

## Requirements

- Node.js 20+
- pnpm
- GitHub CLI authenticated with `gh auth login` when using `--github private` or `--github public`
- Docker-compatible runtime optional for container workloads: Docker Desktop, Docker Engine, Podman, or OrbStack
- Local model runtime optional: Ollama, LM Studio, llama.cpp, Open WebUI, or a provider supported by your agent

## Similar Projects

Compare the pieces with:

- `create-next-app`, `create-expo-app`, and Solito starters for framework scaffolding
- `create-t3-app` for opinionated full-stack setup
- `anthropics/skills` and `openai/skills` for agent skill packaging
- `obra/superpowers` for workflow-oriented agent skills
- Aider, OpenCode, Gemini CLI, Cline, Roo Code, Continue, Cursor, and Windsurf for agent workflow expectations

Studio Kickstart should differentiate by combining project scaffolding, tool setup, agent docs, and reusable skills into one guided bootstrapper.

## Local Development

```bash
npm install
npm test
npm run skills:lint
npm run skills:catalog
npm pack --dry-run
```

## Contributing

Contributions are welcome. Start with [CONTRIBUTING.md](CONTRIBUTING.md) for skill structure and pull request expectations, and [ARCHITECTURE.md](ARCHITECTURE.md) for how the CLI and skills library fit together.

## License

MIT
