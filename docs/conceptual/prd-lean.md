---
title: Product Requirements Document (Lean)
project: DocForge
status: draft
version: 0.3
created: 2026-02-19
updated: 2026-02-20
author: Dale Rogers
depends_on:
  - docs/strategic/solution-concept.md
  - docs/conceptual/conops.md
---

# Product Requirements Document (Lean) — Phase 0

This PRD is scoped to **Phase 0 only**: the personal tool. Phase 1 and Phase 2 requirements are out of scope and will be drafted when those phases are planned.

---

## Goals

1. **Professional PDF from rich Markdown without post-export touch.** The author produces client-ready PDF (and optionally DOCX) from Pandoc Markdown without manually fixing styles after export.

2. **Rich Markdown authoring.** The author writes in a GUI that supports Pandoc extended syntax: fenced divs for semantic blocks, YAML frontmatter, headings, lists, tables, footnotes. The output is valid Pandoc Markdown.

3. **Project-aware context.** Documents are authored within a project. The LLM has access to the brief and selected project files when assisting. The project folder schema (inputs/, working/, context/, deliverables/) is established and used.

4. **Author controls output.** The author owns the print stylesheet (CSS) and optional reference DOCX template. Export quality is under their control.

---

## Non-Goals (Phase 0)

- **Clause library.** Deterministic insertion of approved content. Phase 1+.
- **Brand manifest.** Versioned, multi-brand theme system. Phase 2.
- **Multi-user collaboration.** Branch/merge, sharing, real-time co-editing. Phase 1+.
- **PPTX export.** Phase 1+.
- **Server-hosted deployment.** Phase 0 is local-first. Phase 1+.
- **DMS integration.** Phase 2.
- **Accessibility validation (PDF/UA).** Phase 2.

---

## Success Criteria

**The author uses DocForge for their next real client deliverable instead of VS Code + manual pandoc.** That is the Phase 0 success metric. If the author reverts to the old workflow, Phase 0 has not succeeded.

---

## Requirements

### Project and Document Management

Create and open projects with the standard folder schema. Documents persist as Pandoc Markdown with YAML frontmatter in the project folder.

| ID | Requirement |
|----|-------------|
| FR-1.1 | The system shall support creating a new project with the standard folder schema (inputs/, working/, context/, deliverables/). |
| FR-1.2 | The system shall allow opening a document from a project and saving changes to the same file. |
| FR-1.3 | The system shall persist documents as Pandoc Markdown with YAML frontmatter. |

### Authoring

Rich Markdown editor with Pandoc extended syntax: semantic blocks (callout, executive summary), headings H1–H4, lists, tables, footnotes, and minimum viable character formatting (bold, italic). Print preview approximates final PDF appearance.

| ID | Requirement |
|----|-------------|
| FR-2.1 | The editor shall support Pandoc fenced divs for at least callout and executive summary (or equivalent semantic blocks). |
| FR-2.2 | The editor shall support headings (H1–H4), lists, tables, and footnotes as per Pandoc extended Markdown. |
| FR-2.3 | The editor shall provide a print preview that approximates the final PDF appearance. |

### Export

One-click PDF and DOCX export via Pandoc. Author-configurable print stylesheet (CSS) and optional reference DOCX template. pandoc-crossref or equivalent for captions/cross-refs if needed for Phase 0. Output is deliverable as-is without manual post-processing.

| ID | Requirement |
|----|-------------|
| FR-3.1 | The system shall export the current document to PDF using Pandoc and the author-configured print stylesheet. |
| FR-3.2 | The system shall export the current document to DOCX using Pandoc and an optional reference DOCX template. |
| FR-3.3 | Export shall complete without manual post-processing; the output shall be deliverable as-is for the author's use case. |

### LLM Integration

On-demand assistance only; the user initiates each request. Direct API calls with document content and selected project context (brief, files from inputs/ or context/). AI-generated content is presented as a suggestion; the user must explicitly accept before it enters the document. Pluggable provider (provider, region, model as config).

| ID | Requirement |
|----|-------------|
| FR-4.1 | The system shall support on-demand LLM assistance. The user initiates each request. |
| FR-4.2 | Each LLM request shall include the current document content and selected project context (brief, files from inputs/ or context/). |
| FR-4.3 | AI-generated content shall be presented as a suggestion; the user must explicitly accept before it enters the document. |

### Deployment

Desktop application (Electron or Tauri). Local-first; no server required. Documents are plain-text files in the project folder.

| ID | Requirement |
|----|-------------|
| FR-5.1 | The application shall run as a desktop application (Electron or Tauri). No server or cloud dependency for core operation. |
| FR-5.2 | Documents shall be stored as plain-text files in the project folder. No database or proprietary storage. |

---

## Non-Functional Requirements

| Area | Requirement |
|------|--------------|
| **Performance** | Editor interactions (typing, style application) shall respond in under 500 ms. Export shall complete in under 30 seconds for documents up to 50 pages. |
| **Usability** | A Markdown-native user shall be able to create a project, author a document with semantic blocks, and export to PDF in under 15 minutes without external documentation. |
| **Export fidelity** | PDF and DOCX export shall be client deliverable quality (particularly PDF). The export output shall be relatively true to the GUI representation, similar to Word or Google Docs. |
| **Portability** | The storage format (Pandoc Markdown) shall be editable with any text editor and processable with Pandoc directly. No lock-in. |

---

## Constraints

| Constraint | Source |
|------------|--------|
| **Pandoc dependency** | Export quality is bounded by Pandoc's DOCX and PDF output. The print stylesheet and reference DOCX template must be tuned for professional quality. See [RAID R-007](../governance/raid.md#risks). |
| **TipTap/Pandoc semantic block mapping** | Rendering fenced divs as WYSIWYG nodes requires custom TipTap node types. Non-trivial. See [RAID R-008](../governance/raid.md#risks). |
| **Electron vs Tauri** | Choice affects build size, performance, and distribution. ADR pending. See [RAID DEC-011](../governance/raid.md#decisions). |

---

## Assumptions

| Assumption | Validated? | Impact if Wrong |
|------------|------------|-----------------|
| The author will use a Pandoc Markdown GUI for client deliverables if output quality is professional | Unvalidated — Phase 0 validates this | Phase 0 fails; pivot or iterate |
| Pandoc + CSS + reference DOCX can achieve professional PDF/DOCX without custom renderer | Unvalidated | May require significant stylesheet investment or alternative approach |
| Project folder schema (inputs/, working/, context/, deliverables/) is sufficient for Phase 0 | Unvalidated | May need to evolve before Phase 1 |
| Direct API calls with explicit context (no RAG) are sufficient for Phase 0 LLM assistance | Unvalidated | RAG may be required earlier than Phase 1 |

---

## Open Questions

1. **Minimum semantic block set.** Which fenced div types are essential for Phase 0? Callout and executive summary are candidates; others?
2. **Reference DOCX vs CSS.** How much DOCX styling can be achieved with reference DOCX alone? What requires Lua filters or post-processing?
3. **Electron vs Tauri.** Build complexity, binary size, and distribution differ. ADR required.

---

*Previous: [ConOps](conops.md) · Next: [High-Level Architecture](../architectural/hla.md)*
