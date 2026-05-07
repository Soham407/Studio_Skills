# Studio Skills Kickstart

Studio Skills is an open-source skills library plus an npm CLI for bootstrapping agent-ready, local-model-friendly projects.

Use the skills directly in an existing repo, or use `kickstart` to create a new Next.js, Expo, or Solito project with the skills and guardrails already installed.

## Quick Start

Browse the library:

```bash
git clone https://github.com/Soham407/Studio_Skills.git
cd Studio_Skills
npm run skills:catalog
```

Install the CLI:

```bash
npm install -g @studio-skills/kickstart
kickstart --init
```

Install one skill into an existing project:

```bash
kickstart skills install tdd
kickstart skills install tdd --agent codex
kickstart skills install hue --agent gemini
```

Create a new project:

```bash
kickstart --web my-app --github skip
kickstart --mobile my-mobile-app --github private
kickstart --universal my-platform --github public
```

## What You Get

- A curated skills library for architecture, coding, business, and design workflows
- `skills.json`, a generated index of installable skills
- A small npm CLI that fetches skills at runtime instead of bundling the whole library
- Optional project scaffolds for Next.js, Expo, and Turborepo + Solito
- Optional GitHub repo creation with `private`, `public`, or `skip` modes
- Cross-agent skill install targets for Claude Code, Codex, Gemini CLI, Cursor, OpenCode, Windsurf, Aider, Goose, and Pi-style local agents
- Local model guidance that works with Ollama, LM Studio, llama.cpp, Open WebUI, or any local runtime exposed through your chosen agent
- Container guidance for macOS, Windows, and Linux through Docker Desktop, Docker Engine, Podman, or OrbStack
- Supabase, Better-Auth, WatermelonDB, Husky, lint-staged, Vitest, Playwright, and Prettier setup for scaffolded projects

## Skills Library

Skills are organized by domain:

- `architecture/`: diagnosis, TDD, planning, triage, architecture improvement, token discipline
- `coding/`: TypeScript and offline-first implementation patterns
- `business/`: studio operations, security, SEO, demos, outreach, presentations
- `design/`: design tokens and UI system guidance

List skills from the configured repo:

```bash
kickstart skills list
```

Use a fork or custom library for one command:

```bash
kickstart --skills https://github.com/your-org/your-skills.git --web custom-app
kickstart skills list --skills https://github.com/your-org/your-skills.git
```

## CLI Reference

```bash
kickstart --init
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
- Local model runtime optional but recommended: Ollama, LM Studio, llama.cpp, Open WebUI, or a provider supported by your agent

## Similar Projects

Compare Studio Skills with:

- `anthropics/skills`: official Agent Skills examples, spec, and template
- `openai/skills`: Codex skills catalog
- `obra/superpowers`: workflow-oriented engineering skills and methodology
- `obra/superpowers-marketplace`: Claude Code plugin marketplace pattern
- `jtianling/skills-manager`: multi-agent skill deployment
- `Aider-AI/aider`, `opencode-ai/opencode`, `google-gemini/gemini-cli`, Cline, Roo Code, and Continue: useful references for local/BYOK agent workflows

Studio Skills should differentiate by being an opinionated studio workflow distribution: useful skills plus a practical project bootstrapper.

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
