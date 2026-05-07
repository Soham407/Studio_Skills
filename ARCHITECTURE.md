# Architecture

Studio Skills has two parts:

- The npm CLI package, published as `@studio-skills/kickstart`
- The skills library, fetched at runtime from a Git repository

Keeping skills out of the npm tarball keeps installs small and lets teams point `kickstart` at their own skills repo without forking the CLI.

## CLI Modules

- `bin/kickstart.js`: parses CLI flags, runs update checks, dispatches to wizard or scaffold
- `lib/wizard.js`: first-time setup wizard for tools, GitHub auth, local-model preference, and default skills repo
- `lib/config.js`: manages `~/.studio-skills/config.json`
- `lib/updater.js`: daily best-effort npm registry check
- `lib/scaffold.js`: project creation and setup orchestration
- `lib/skills.js`: shallow-clones a skills repo and copies supported categories into agent-specific skills directories
- `lib/skill-catalog.js`: reads skill frontmatter, produces catalog records, and powers skill linting
- `scripts/generate-skills-catalog.js`: writes the public `skills.json` index
- `scripts/lint-skills.js`: validates skill metadata consistency

## Skills Categories

Skills are grouped by the type of decision they support:

- `architecture/`: process, planning, debugging, TDD, system design, issue workflows
- `coding/`: concrete implementation patterns for TypeScript, Next.js, Expo, and data sync
- `business/`: studio workflows such as security, SEO, pitches, demos, and outreach
- `design/`: design tokens, UI systems, and product interface guidance

Every category is copied into a new scaffolded project under `.claude/skills/<category>/` by default. Individual skills can also be installed for Codex, Gemini CLI, Cursor, OpenCode, Windsurf, Aider, Goose, and Pi-style local agents with `kickstart skills install <skill> --agent <agent>`.

## Injection Flow

1. Resolve the skills repository from `--skills`, user config, or the default repository.
2. Clone the repo into a temporary directory with `git clone --depth 1`.
3. Copy `architecture/`, `coding/`, `business/`, and `design/` into the target project.
4. Copy `.github/skills/SKILL_TEMPLATE.md` when present.
5. Remove the temporary clone.

## Project Scaffold Flow

`kickstart` runs the same flow interactively when decisions are omitted. `kickstart --web|--mobile|--universal <name>` keeps the flow scriptable.

1. Validate required tools.
2. Create the framework project.
3. Create a GitHub repository when requested, or skip it with `--github skip` / `--no-github`.
4. Inject Studio Skills.
5. Install Supabase, Better-Auth, and WatermelonDB where applicable.
6. Install guardrails.
7. Write `AGENTS.md`, `CLAUDE.md`, and `GEMINI.md`.
8. Commit and push final bootstrap changes.

The legacy `scripts/kickstart.sh` remains as a readable bash fallback.

## Skill Catalog Flow

The generated `skills.json` file is the public discovery surface for humans, websites, and future installers.

1. Walk `architecture/`, `coding/`, `business/`, and `design/`.
2. Read each `SKILL.md` frontmatter.
3. Infer supported agents from the skill body.
4. Emit stable records with name, slug, category, description, readme path, and supported agents.

The catalog is generated from source rather than hand-edited:

```bash
npm run skills:catalog
```
