---
name: claude-plugin-powerpack
description: Installs and documents the recommended Claude Code plugin stack for a high-leverage open-source agent setup. Use when setting up Claude plugins, when the user mentions skill-creator, superpowers, context-mode, claude-mem, frontend-design, get-shit-done-cc, or asks for the Studio Claude plugin pack.
type: workflow
category: architecture
tags: [claude-code, plugins, superpowers, memory, context, frontend]
---

# Claude Plugin Powerpack

## Purpose

Set up the recommended global Claude Code plugin stack for Studio projects.

This is a human-run setup workflow. Slash commands such as `/plugin install ...` must be pasted into Claude Code; shell commands such as `npx ...` run in a terminal.

## Install Order

Run these in Claude Code:

```text
/plugin install skill-creator@claude-plugins-official
/plugin install superpowers@claude-plugins-official
/plugin marketplace add mksglu/context-mode
/plugin install context-mode@context-mode
/plugin marketplace add thedotmack/claude-mem
/plugin install claude-mem
/plugin install frontend-design@claude-plugins-official
```

Run this in your terminal:

```bash
npx get-shit-done-cc --claude --global
```

## What Each Piece Adds

| Tool | Purpose |
| --- | --- |
| `skill-creator` | Create and refine reusable Claude skills. |
| `superpowers` | Adds structured agent workflows and skill-triggering conventions. |
| `get-shit-done-cc` | Adds global Claude Code productivity defaults. |
| `context-mode` | Helps switch and preserve working context. |
| `claude-mem` | Adds memory-oriented workflow support. |
| `frontend-design` | Improves frontend design implementation behavior. |

## Verification

After installation:

1. Restart Claude Code.
2. Run `/plugin list`.
3. Confirm each installed plugin appears.
4. Open a fresh Claude Code session in a project.
5. Check that plugin-provided commands or behaviors are available.

## Project Policy

Do not assume these plugins are installed in every contributor's environment. When a workflow depends on one of them, mention the dependency and provide the command to install it.

## Related Skills

- `write-a-skill` for creating repo-native skills.
- `setup-matt-pocock-skills` for adding repo-level agent docs.
- `frontend-design` plugin for UI-heavy work.
