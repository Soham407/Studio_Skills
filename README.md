# Studio Skills Repository

A comprehensive library of Claude skills, workflows, and frameworks organized by domain. Use the sync-script to distribute modules to your projects.

## Quick Start

```bash
# Sync skills to a specific project
./sync-script.sh --type next.js --target ~/projects/my-project

# Update all previously synced projects
./sync-script.sh --sync
```

## Repository Structure

```
studio-skills/
├── .github/skills/      Core skill templates
├── architecture/        System design, PRDs, schemas, frameworks
├── coding/              Framework-specific patterns (Next.js, Expo, TypeScript)
├── business/            Agency ops, pitching, marketing, client workflows
├── design/              Design tokens, UI systems, accessibility
└── sync-script.sh       Distribute skills to projects
```

---

## 🏆 Category 1: Elite 10 — Core Studio Logic

The foundational frameworks and patterns that define your studio's engineering and business standards.

### Architecture & Frameworks
| Skill | Purpose | Source |
|-------|---------|--------|
| **Superpowers Framework** | Master framework for skill workflows and AI orchestration | [obra/superpowers](https://github.com/obra/superpowers) |
| **Context7 MCP** | Documentation and MCP server integration for live API docs | [upstash/context7](https://github.com/upstash/context7) |
| **Awesome Claude Skills** | Curated reference of Claude skills and patterns | [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) |
| **Manual-SDD** | Structured System Design Document templates | [LIDR-academy/manual-SDD](https://github.com/LIDR-academy/manual-SDD) |
| **Antivibe Logic Gates** | Pattern-based logic and dependency validation | [mohi-devhub/antivibe](https://github.com/mohi-devhub/antivibe) |
| **Usage Limit Reducer** | Optimize token usage and API calls | [Dubibubii/usage-limit-reducer](https://github.com/Dubibubii/usage-limit-reducer) |
| **Agent Session Resume** | Resume agent state and continue long-running workflows | [hacktivist123/agent-session-resume](https://github.com/hacktivist123/agent-session-resume) |

### Business & Operations
| Skill | Purpose | Source |
|-------|---------|--------|
| **Agentic SEO** | AI-driven SEO audit and optimization workflows | [addyosmani/agentic-seo](https://github.com/addyosmani/agentic-seo) |
| **Founder Playbook** | Operational playbook for studio leadership and client management | [getagentseal/founder-playbook](https://github.com/getagentseal/founder-playbook) |
| **Shannon Security Audit** | Security assessment and vulnerability detection framework | [KeygraphHQ/shannon](https://github.com/KeygraphHQ/shannon) |

---

## 🏗️ Category 2: Production Engineering Pack

Enterprise-grade TypeScript, Next.js, and Expo patterns ensuring code quality and maintainability.

| Skill | Purpose | Category | Source |
|-------|---------|----------|--------|
| **Matt Pocock TypeScript Architecture** | Advanced TypeScript patterns and type system mastery | coding | [mattpocock/skills](https://github.com/mattpocock/skills) |
| **WatermelonDB Sync Architecture** | Offline-first React Native DB with conflict resolution and optimistic updates | coding | Custom Studio Skill (2026 WatermelonDB Docs) |
| **Writing Standards** | Documentation and code comment best practices | architecture | [Anbeeld/WRITING.md](https://github.com/Anbeeld/WRITING.md) |
| **Tech Debt Audit** | Identify, measure, and prioritize technical debt | architecture | [ksimback/tech-debt-skill](https://github.com/ksimback/tech-debt-skill) |
| **Hue Design Tokens** | Tailwind and design token configuration system | design | [dominikmartn/hue](https://github.com/dominikmartn/hue) |

---

## 🎯 Category 3: Agency Operational Skills

Client-facing tools for presentations, demos, lead generation, and outreach campaigns.

| Skill | Purpose | Source |
|-------|---------|--------|
| **Marp Pitching Slides** | Markdown-to-presentation framework for client pitches | [robonuggets/marp-slides](https://github.com/robonuggets/marp-slides) |
| **Friday Showcase Demos** | Interactive demo and client showcase framework | [missingus3r/friday-showcase](https://github.com/missingus3r/friday-showcase) |
| **Spider King Lead Extraction** | Web scraping and lead generation workflows | [aoyunyang/spider-king-skill](https://github.com/aoyunyang/spider-king-skill) |
| **Email Campaign Outreach** | Email template and outreach campaign automation | [irinabuht12-oss/email-campaigns-claude](https://github.com/irinabuht12-oss/email-campaigns-claude) |

---

## How to Use This Repository

### 1. Browse Skills by Category

Each category folder contains detailed `README.md` files:
- **architecture/** — System design, frameworks, audit tools
- **coding/** — Language and framework-specific patterns
- **business/** — Client workflows, operations, marketing
- **design/** — Design systems, tokens, UI guidelines

### 2. Sync to a Project

```bash
# Add skills to a Next.js project
./sync-script.sh --type next.js --target ~/projects/my-app

# Add skills to an Expo/React Native project
./sync-script.sh --type expo --target ~/projects/mobile-app
```

### 3. Create Your Own Skills

Use `.github/skills/SKILL_TEMPLATE.md` as a template for adding new skills:

```bash
cp .github/skills/SKILL_TEMPLATE.md architecture/my-skill/SKILL.md
```

### 4. Keep Everything in Sync

```bash
# Update all previously synced projects
./sync-script.sh --sync
```

This pulls the latest version from each skill and distributes to all registered projects.

---

## Skill Index by Category

### Architecture & System Design
- `architecture/superpowers-framework/` — Framework orchestration
- `architecture/context7-mcp/` — MCP and documentation integration
- `architecture/awesome-claude-skills/` — Skill patterns reference
- `architecture/manual-sdd/` — System design documents
- `architecture/antivibe-logic/` — Logic and dependency patterns
- `architecture/usage-limit-reducer/` — Token optimization
- `architecture/agent-session-resume/` — Agent state management
- `architecture/writing-standards/` — Documentation standards
- `architecture/tech-debt-audit/` — Code quality assessment

### Production Engineering (Coding)
- `coding/matt-pocock-typescript/` — Advanced TypeScript
- `coding/watermelon-sync/` — WatermelonDB offline-first architecture (custom skill)

### Design & UI
- `design/hue-design-tokens/` — Design token systems

### Business & Operations
- `business/agentic-seo/` — SEO optimization
- `business/founder-playbook/` — Leadership playbook
- `business/shannon-security/` — Security audits
- `business/marp-pitching/` — Pitch presentations
- `business/friday-showcase-demos/` — Client demos
- `business/spider-king-lead-extraction/` — Lead generation
- `business/email-campaigns/` — Email outreach

---

## Configuration & Customization

### Add a New Framework Type

Edit `sync-script.sh` to add support for new project types:

```bash
case $project_type in
  my-framework)
    [ -d "$STUDIO_SKILLS_DIR/coding/my-framework" ] && cp -r "$STUDIO_SKILLS_DIR/coding/my-framework"/* "$target_dir/.claude/skills/" 
    ;;
esac
```

### Create Framework-Specific Skills

Create framework subfolders in `coding/`:

```
coding/
├── nextjs/         → Next.js-specific skills
├── expo/           → React Native/Expo skills
├── typescript/     → TypeScript patterns
└── react/          → React component patterns
```

---

## Next Steps

1. **Explore skills** by category — each has detailed README.md files
2. **Sync to a project** — start using skills immediately
3. **Contribute** — add your own skills following SKILL_TEMPLATE.md
4. **Stay updated** — run `./sync-script.sh --sync` to refresh

---

## Contributing

To add a new skill:

1. Create a folder in the appropriate category (architecture/, coding/, business/, design/)
2. Add your `SKILL.md` using `.github/skills/SKILL_TEMPLATE.md` as a reference
3. Include a `README.md` explaining the skill
4. Run `./sync-script.sh --sync` to distribute to all projects

---

**Last Updated:** 2026-05-07  
**Total Skills:** 19 (9 Architecture, 2 Coding, 1 Design, 7 Business)  
**Custom Studio Skills:** 1 (WatermelonDB Sync)
