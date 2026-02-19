---
title: Concept of Operations (ConOps)
project: DocForge
status: draft
version: 0.3
created: 2026-02-19
updated: 2026-02-20
author: Dale Rogers
depends_on:
  - docs/strategic/solution-concept.md
---

# Concept of Operations

## Purpose

This document describes how DocForge is used in practice. It grounds the [Solution Concept](../strategic/solution-concept.md) in real people doing real work. Phase 0 is scoped to a single persona — the technical consultant with a Markdown-native, LLM-native workflow — and reflects that scope.

---

## Primary Persona — Technical Consultant (Phase 0)

**Context.** A code consultant or technical advisor who produces client deliverables: reports, advisory notes, proposals, statements of work. Their workflow is Markdown-native and LLM-native. They use VS Code, Cursor, or similar tools for drafting. Plain-text source works with version control, LLMs, and automation.

**Current pain.** Write in VS Code or Cursor → raw Markdown → run Pandoc manually from the terminal → post-style output in Word → deliver DOCX. Or: write in Markdown, export to PDF with basic styling, and accept unprofessional output. The process is brittle. Every export is manual. The print stylesheet is not under their control. No GUI understands rich Markdown semantics and produces client-grade output.

**Target workflow (DocForge Phase 0).** Create a project → add brief to `context/`, source material to `inputs/` → author in a rich Markdown GUI with Pandoc semantic blocks (fenced divs for callouts, executive summaries) → preview in print view → one-click export to styled PDF or DOCX → deliver. No post-export touch. The author owns the stylesheet and template. The LLM has access to project context when assisting.

**What they want.** Produce professional client deliverables from Markdown without leaving the Markdown ecosystem. Control the output. Stop manual pandoc runs and Word touch-ups. One tool that bridges LLM-friendly authoring and client-ready output.

---

## Workflow Comparison

| Step | Current (Pain) | Target (DocForge Phase 0) |
|------|----------------|---------------------------|
| Create project | Ad hoc folder structure | New project with standard schema: `inputs/`, `working/`, `context/`, `deliverables/` |
| Load context | Manually open files, copy-paste | Editor loads brief and selected files from project |
| Author | VS Code + raw Markdown | Rich Markdown GUI (TipTap) with Pandoc semantic blocks |
| Preview | None, or separate viewer | Integrated print preview |
| Export | Terminal pandoc, manual options | One-click PDF/DOCX with configured stylesheet |
| Post-process | Open in Word, fix styles | None — output is ready to deliver |

---

## Project Lifecycle

Documents are produced within projects. The project folder is the container; see [Solution Concept](../strategic/solution-concept.md) for the schema.

1. **New project.** Create project with standard folder schema. Add brief to `context/`. Drop source material (transcripts, research) into `inputs/`.
2. **Working notes.** Draft in `working/` or directly in `deliverables/`. Use LLM assistance with access to brief and selected inputs.
3. **Deliverables drafted.** Create or move final documents in `deliverables/`. Structure with Pandoc Markdown: headings, fenced divs (`.callout`, `.executive-summary`), lists, tables.
4. **Exported and delivered.** One-click export to PDF or DOCX. No post-processing. Deliver to client.

Phase 0 uses a local project folder. The editor runs as a Tauri desktop app. Full RAG over the project is Phase 1; Phase 0 passes context explicitly (brief + selected files).

---

## AI Interaction Model (Phase 0)

**On-demand only.** The LLM does not act without explicit user request. The user initiates: "refine this section," "expand this into a callout," "summarise the transcript."

**Context.** On each request, the client sends: current document content, brief (from `context/`), and optionally selected files from `inputs/` or `working/`. The LLM has project context; it does not have RAG over the full project.

**Confirmation.** AI-generated content is presented as a suggestion. The user accepts, rejects, or edits before it enters the document. The user is always the last editor.

---

## Secondary Personas (Phase 1+)

These personas are relevant for Phase 1 and Phase 2. Phase 0 serves only the technical consultant.

| Persona | Role | Phase 1 | Phase 2 |
|---------|------|---------|---------|
| Maya | Senior Consultant, Professional Services | Shareable tool, project-context | Clause library, brand manifest |
| Priya | Senior Policy Officer, Government | — | Mandatory clauses, accessibility, IRAP |
| James | Business Development, Legal/Advisory | — | Clause library, assembly engine |
| Sarah | Brand and Communications Lead | — | Brand manifest, theme management |

---

## Phase 0 Scope Boundaries

**In scope.** Single-author document creation. Project folder schema. Rich Pandoc Markdown GUI (TipTap). Print stylesheet. One-click PDF/DOCX export via Pandoc. LLM assistance with project context. Local-first Tauri desktop app.

**Out of scope (Phase 0).** Clause library, assembly engine, brand manifest, multi-user collaboration, server-hosted deployment, DMS integration, accessibility validation. These are Phase 1+.

---

## Open Questions

1. **Reference DOCX template.** How much styling can be delegated to a reference DOCX vs CSS for PDF? Affects Phase 0 export quality.
2. **Context loading UX.** How does the user specify which project files to include when requesting LLM assistance? Simple file picker vs automatic relevance?
3. Cross-reference: [Solution Concept](../strategic/solution-concept.md) open questions (export fidelity, branding, monetisation).

---

*Previous: [Solution Concept](../strategic/solution-concept.md) · Next: [PRD (Lean)](prd-lean.md)*
