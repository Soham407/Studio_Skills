# Studio Skills Repository

A curated collection of Claude skills and workflows organized by domain. Use the sync-script to pull modules into your projects.

## Structure

```
studio-skills/
├── .github/skills/      SKILL.md files (the actual skill definitions)
├── coding/              Framework-specific logic (Next.js, Expo, etc.)
├── architecture/        PRD, Schema, System Design templates
├── business/            Agency ops, SEO, Pitching workflows
├── design/              Open Design & Tailwind tokens
└── sync-script.sh       Update everything in one go
```

## Quick Start

```bash
./sync-script.sh --type next.js --target ~/projects/my-project
./sync-script.sh --type expo --target ~/projects/mobile-app
./sync-script.sh --sync    # Update all synced projects
```

## Adding Skills

1. Create your skill in the appropriate folder
2. Follow the SKILL.md template format
3. Run `sync-script.sh --sync` to distribute

## Available Skill Categories

- **coding/** — Framework bootstrps, patterns, hooks
- **architecture/** — System design, schemas, PRDs
- **business/** — Client workflows, pitching, ops
- **design/** — Component systems, tokens, guidelines
