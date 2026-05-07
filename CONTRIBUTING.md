# Contributing

Studio Skills welcomes improvements to the CLI, documentation, and skills library.

## Add a Skill

1. Choose the right category: `architecture/`, `coding/`, `business/`, or `design/`.
2. Create a folder with a descriptive kebab-case name.
3. Add a `SKILL.md` with clear trigger guidance and a focused workflow.
4. Add a `README.md` when the skill needs human-facing background, examples, or references.
5. Keep bundled scripts, templates, and assets inside the skill folder.

Use `.github/skills/SKILL_TEMPLATE.md` as the starting point when creating a new skill.

## Skill Checklist

- `SKILL.md` exists and explains when to use the skill.
- The skill has a narrow purpose and does not duplicate an existing skill.
- Extra references are loaded progressively instead of requiring the agent to read everything upfront.
- Scripts are executable where needed and documented in the skill.
- The category matches the work the skill supports.

## CLI Checklist

- Keep new dependencies small and justified.
- Preserve `scripts/kickstart.sh` as the bash fallback.
- Do not package the full skills library into npm; skills are fetched at runtime.
- Test `kickstart --help`, `kickstart --version`, and `npm pack` before opening a PR.

## Pull Requests

Open a PR with:

- A short description of the problem solved.
- Files changed and why.
- Manual verification steps.
- Screenshots or terminal output when CLI UX changes.

## Code of Conduct

Be direct, respectful, and specific. Keep feedback about the work, and help contributors leave the project clearer than they found it.
