---
title: EP-006 — Tauri Desktop Shell
project: DocForge
status: draft
version: 0.1
created: 2026-02-20
depends_on:
  - docs/architectural/adrs/ADR-0003-tauri-desktop-framework.md
  - docs/conceptual/prd-lean.md
---

# EP-006 — Author can run DocForge as a local Tauri desktop application

## Outcome

DocForge runs as a desktop application on macOS, Windows, and Linux. No server or cloud dependency for core operation. The Tauri shell hosts the TipTap editor, provides file system access for projects, and invokes Pandoc for export. Documents are plain-text files on disk.

## Scope

- Tauri application scaffold
- WebView hosting the editor UI
- Rust backend: project folder access, file read/write, Pandoc subprocess invocation
- Build for macOS, Windows, Linux
- Capability-based permissions for file system and subprocess
- No network required for core editing and export

## Non-scope (Phase 0)

- Auto-update
- Installer packaging (can be manual for Phase 0)
- Server-hosted or sync

## Success Criteria

- Application launches; editor loads
- Author can create/open projects and documents
- Author can export to PDF/DOCX
- Runs offline for core workflow

## Stories

| ID | Title | Status |
|----|-------|--------|
| US-050 | As an author, I want to launch DocForge as a desktop app so that I can use it like a native tool | Not started |
| US-051 | As an author, I want the app to access my project folder so that I can work with my documents | Not started |
| US-052 | As an author, I want export to invoke Pandoc so that PDF/DOCX are generated correctly | Not started |

## Related

- [ADR-0003](../../architectural/adrs/ADR-0003-tauri-desktop-framework.md) — Tauri decision
- [PRD Lean](../../conceptual/prd-lean.md) — FR-5 Deployment

---

*Previous: [EP-005](EP-005-llm-assistance.md) · Next: [Backlog](../backlog.md)*
