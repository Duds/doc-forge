---
title: EP-003 — Project Folder Schema and Context
project: DocForge
status: draft
version: 0.1
created: 2026-02-20
depends_on:
  - docs/conceptual/prd-lean.md
  - docs/strategic/solution-concept.md
---

# EP-003 — Author can work within a project with standard folder schema

## Outcome

The author creates and opens projects with the standard folder schema. Documents are authored in project context. The editor is project-aware; the LLM receives project context (brief, selected files) when assisting.

## Scope

- Create new project with folder schema: inputs/, working/, context/, deliverables/
- Open project; list and open documents from project
- Load context (brief, files from inputs/, context/) for LLM requests
- Documents stored as files in project folder; no database
- Project metadata (e.g. brief path) configurable

## Non-scope (Phase 0)

- RAG over project folder (Phase 1)
- Multi-user or sharing

## Success Criteria

- Author can create a project; folder structure is created
- Author can open a project and see documents in working/ and deliverables/
- Author can open a document; changes save to the file
- Context files are available for LLM integration (EP-005)

## Stories

| ID | Title | Status |
|----|-------|--------|
| US-020 | As an author, I want to create a new project so that I get the standard folder schema | Not started |
| US-021 | As an author, I want to open a project and see my documents so that I can work on them | Not started |
| US-022 | As an author, I want to open a document from a project and save changes so that my edits persist | Not started |
| US-023 | As an author, I want to add a brief or context files so that the LLM can use them when assisting | Not started |

## Related

- [Solution Concept](../../strategic/solution-concept.md) — Project folder schema
- [PRD Lean](../../conceptual/prd-lean.md) — FR-1, Project and Document Management

---

*Previous: [EP-002](EP-002-element-based-styling-preview.md) · Next: [EP-004](EP-004-export-pdf-docx.md)*
