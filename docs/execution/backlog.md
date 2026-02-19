---
title: Backlog
project: DocForge
status: draft
version: 0.2
created: 2026-02-19
updated: 2026-02-20
depends_on:
  - docs/conceptual/prd-lean.md
  - docs/planning/roadmap.md
---

# Backlog

Execution artefacts for DocForge, derived from the [PRD](../conceptual/prd-lean.md) and [Roadmap](../planning/roadmap.md). Phase 0 is the current focus.

---

## Phase 0 — Personal Tool (Current)

| ID | Title | Status | Epic |
|----|-------|--------|------|
| EP-001 | Author can create and edit rich Markdown documents with Pandoc extended syntax | Not started | [EP-001](epics/EP-001-rich-markdown-editor.md) |
| EP-002 | Author can apply element-based styling and preview print output | Not started | [EP-002](epics/EP-002-element-based-styling-preview.md) |
| EP-003 | Author can work within a project with standard folder schema | Not started | [EP-003](epics/EP-003-project-folder-context.md) |
| EP-004 | Author can export documents to professional PDF and DOCX without post-processing | Not started | [EP-004](epics/EP-004-export-pdf-docx.md) |
| EP-005 | Author can request LLM assistance with document and project context | Not started | [EP-005](epics/EP-005-llm-assistance.md) |
| EP-006 | Author can run DocForge as a local Tauri desktop application | Not started | [EP-006](epics/EP-006-tauri-desktop-shell.md) |

**Phase 0 success:** The author uses DocForge for their next real client deliverable instead of VS Code + manual pandoc.

---

## Phase 1+ — Backlog (Deferred)

| ID | Title | Status |
|----|-------|--------|
| EP-101 | Users can share documents and collaborate (small team) | Backlog |
| EP-102 | Users can use RAG over project folder for LLM context | Backlog |
| EP-103 | Users can export to PPTX | Backlog |
| EP-104 | Users can deploy server-hosted or sync | Backlog |

---

## Phase 2+ — Backlog (Deferred)

| ID | Title | Status |
|----|-------|--------|
| EP-201 | Organisation can apply brand manifest and theme governance | Backlog |
| EP-202 | Users can assemble documents from clause library | Backlog |
| EP-203 | Organisation can deploy with DMS integration | Backlog |
| EP-204 | Organisation can meet government accessibility and security requirements | Backlog |

---

## Epic Index (Phase 0)

| ID | Title | Status |
|----|-------|--------|
| EP-001 | Rich Markdown editor (Pandoc extended syntax) | Not started |
| EP-002 | Element-based styling and print preview | Not started |
| EP-003 | Project folder schema and context | Not started |
| EP-004 | Export to PDF and DOCX | Not started |
| EP-005 | LLM assistance with project context | Not started |
| EP-006 | Tauri desktop shell | Not started |

Epics are in [epics/](epics/). Stories are in [stories/](stories/).

---

## Related

- [PRD Lean](../conceptual/prd-lean.md) — Phase 0 requirements
- [FRS](../architectural/frs.md) — Functional requirements specification; FR-ID traceability
- [Roadmap](../planning/roadmap.md) — Phase sequencing and success criteria
- [Solution Concept](../strategic/solution-concept.md) — Phase 0 architecture

---

*Previous: [Release Plan](../planning/release-plan.md) · Next: [RAIDD](../governance/raid.md)*
