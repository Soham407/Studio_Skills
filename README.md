# Studio Skills Repository

A comprehensive library of 36+ Claude skills and workflows organized by domain. Use the sync-script to distribute modules to your projects.

**Now includes:** All 17 Matt Pocock "Skills For Real Engineers" + 19 domain-specific studio skills.

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
├── architecture/        Engineering frameworks, processes, and design patterns
│   ├── matt-pocock-*    Matt Pocock's "Skills for Real Engineers" (17 skills)
│   ├── superpowers-framework/
│   ├── context7-mcp/
│   └── [other architecture skills]
├── coding/              Framework-specific patterns (Next.js, Expo, TypeScript)
├── business/            Agency ops, pitching, marketing, client workflows
├── design/              Design tokens, UI systems, accessibility
└── sync-script.sh       Distribute skills to projects
```

---

## 🎯 Matt Pocock's "Skills For Real Engineers"

All 17 skills from https://github.com/mattpocock/skills for disciplined, composable, adaptable engineering.

### Engineering Skills (10)

Disciplined diagnosis loops, test-driven development, and code architecture practices.

| Skill | Purpose |
|-------|---------|
| **diagnose** | Disciplined diagnosis loop: reproduce → minimize → hypothesize → instrument → fix → regression-test |
| **grill-with-docs** | Challenge your plan against domain model, sharpen terminology, update CONTEXT.md and ADRs inline |
| **improve-codebase-architecture** | Find deepening opportunities informed by domain language and ADR decisions |
| **prototype** | Build throwaway prototypes to flush out designs (terminal apps or UI variations) |
| **setup-matt-pocock-skills** | Scaffold per-repo config (issue tracker, labels, domain doc layout) — run once per repo |
| **tdd** | Test-driven development with red-green-refactor loops, one vertical slice at a time |
| **to-issues** | Break plans, specs, and PRDs into independently-grabbable GitHub issues using vertical slices |
| **to-prd** | Turn conversation context into a PRD and submit as GitHub issue |
| **triage** | Triage issues through a state machine of triage roles |
| **zoom-out** | Get broader context or higher-level perspective on unfamiliar code sections |

### Productivity Skills (3)

General workflow tools for all projects.

| Skill | Purpose |
|-------|---------|
| **caveman** | Ultra-compressed communication mode (~75% fewer tokens) while keeping full technical accuracy |
| **grill-me** | Get relentlessly interviewed about a plan or design until every decision tree branch is resolved |
| **write-a-skill** | Create new skills with proper structure, progressive disclosure, and bundled resources |

### Misc Skills (4)

Specialized engineering tools.

| Skill | Purpose |
|-------|---------|
| **git-guardrails-claude-code** | Set up Claude Code hooks to block dangerous git commands (push, reset --hard, clean, etc.) |
| **migrate-to-shoehorn** | Migrate test files from `as` type assertions to `@total-typescript/shoehorn` |
| **scaffold-exercises** | Create exercise directory structures with sections, problems, solutions, and explainers |
| **setup-pre-commit** | Set up Husky pre-commit hooks with lint-staged, Prettier, type checking, and tests |

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

| Skill | Purpose | Source |
|-------|---------|--------|
| **Matt Pocock TypeScript Architecture** | Advanced TypeScript patterns and type system mastery | [mattpocock/skills](https://github.com/mattpocock/skills) |
| **WatermelonDB Sync Architecture** | Offline-first React Native DB with conflict resolution and optimistic updates | Custom Studio Skill (2026 WatermelonDB Docs) |
| **Writing Standards** | Documentation and code comment best practices | [Anbeeld/WRITING.md](https://github.com/Anbeeld/WRITING.md) |
| **Tech Debt Audit** | Identify, measure, and prioritize technical debt | [ksimback/tech-debt-skill](https://github.com/ksimback/tech-debt-skill) |
| **Hue Design Tokens** | Tailwind and design token configuration system | [dominikmartn/hue](https://github.com/dominikmartn/hue) |

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

Each category folder contains detailed README files:
- **architecture/** — Matt Pocock skills + system design frameworks + audit tools
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

### 3. Use Matt Pocock's Skills Immediately

Once synced, you have access to all 17 skills:

```bash
# Grill mode - interview yourself about your design
/grill-me

# Test-driven development
/tdd

# Challenge your plan against domain model
/grill-with-docs

# Triage issues through a state machine
/triage

# And 13 more...
```

### 4. Create Your Own Skills

Use `.github/skills/SKILL_TEMPLATE.md` as a template for adding new skills.

### 5. Keep Everything in Sync

```bash
# Update all previously synced projects
./sync-script.sh --sync
```

---

## Skill Totals

```
36+ Total Skills
├── 26 Architecture Skills
│   ├── 17 Matt Pocock "Skills For Real Engineers"
│   ├── 9 Elite 10 core frameworks
├── 2 Coding Skills (TypeScript + WatermelonDB)
├── 1 Design Skill (tokens)
└── 7 Business Skills (ops, pitching, marketing)

Plus: 1 Custom Studio Skill (WatermelonDB)
```

---

## Why This Repository

**Before:** Scattered skills across multiple repos, inconsistent setup, hard to discover what's available.

**After:** One source of truth. Sync what you need. Stay aligned across all your projects.

**Philosophy:** Based on Matt Pocock's "Skills for Real Engineers" — small, composable, adaptable skills that work with any model and respect your engineering fundamentals.

---

## Complete Skill Index

### Matt Pocock Engineering Skills (17)
- `architecture/matt-pocock-diagnose/` — Diagnosis loop
- `architecture/matt-pocock-grill-with-docs/` — Challenge plan against domain
- `architecture/matt-pocock-improve-codebase-architecture/` — Find deepening opportunities
- `architecture/matt-pocock-prototype/` — Build throwaway prototypes
- `architecture/matt-pocock-setup-matt-pocock-skills/` — Per-repo config scaffold
- `architecture/matt-pocock-tdd/` — Red-green-refactor
- `architecture/matt-pocock-to-issues/` — Break plans into issues
- `architecture/matt-pocock-to-prd/` — Convert context to PRD
- `architecture/matt-pocock-triage/` — Issue triage state machine
- `architecture/matt-pocock-zoom-out/` — Broader context
- `architecture/matt-pocock-caveman/` — Compressed communication
- `architecture/matt-pocock-grill-me/` — Relentless interview
- `architecture/matt-pocock-write-a-skill/` — Create new skills
- `architecture/matt-pocock-git-guardrails-claude-code/` — Block dangerous git
- `architecture/matt-pocock-migrate-to-shoehorn/` — Migrate type assertions
- `architecture/matt-pocock-scaffold-exercises/` — Create exercise structures
- `architecture/matt-pocock-setup-pre-commit/` — Husky + lint-staged setup

### Other Architecture Skills (9)
- `architecture/superpowers-framework/` — Framework orchestration
- `architecture/context7-mcp/` — MCP and documentation
- `architecture/awesome-claude-skills/` — Skill patterns reference
- `architecture/manual-sdd/` — System design documents
- `architecture/antivibe-logic/` — Logic patterns
- `architecture/usage-limit-reducer/` — Token optimization
- `architecture/agent-session-resume/` — Agent state management
- `architecture/writing-standards/` — Documentation standards
- `architecture/tech-debt-audit/` — Code quality assessment

### Coding Skills (2)
- `coding/matt-pocock-typescript/` — Advanced TypeScript
- `coding/watermelon-sync/` — WatermelonDB offline-first architecture

### Design Skills (1)
- `design/hue-design-tokens/` — Design token systems

### Business Skills (7)
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

Edit `sync-script.sh` to support new project types like `django`, `rails`, etc.

### Create Framework-Specific Skills

Create subfolders in `coding/`:
```
coding/
├── nextjs/
├── expo/
├── typescript/
└── react/
```

---

## Contributing

To add a new skill:

1. Create a folder in the appropriate category
2. Add your `SKILL.md` using `.github/skills/SKILL_TEMPLATE.md`
3. Include a `README.md`
4. Run `./sync-script.sh --sync` to distribute

---

## References

- **Matt Pocock Skills:** https://github.com/mattpocock/skills
- **WatermelonDB:** https://watermelondb.dev
- **Original repo sources:** See skill index above

---

**Last Updated:** 2026-05-07  
**Total Skills:** 36+ (26 Architecture, 2 Coding, 1 Design, 7 Business)  
**Status:** All Matt Pocock skills + Custom studio extensions
