---
title: Solution Concept
project: DocForge
status: draft
version: 0.4
created: 2026-02-19
updated: 2026-02-20
author: Dale Rogers
depends_on:
  - docs/strategic/problem-statement.md
  - NOTES.md
---

# Solution Concept

## Core Insight — The Document Is the Data

The semantic structure that renders a polished PDF is the same structure an LLM can traverse and manipulate. Storage format, AI exchange format, and rendered document are one. There is no lossy conversion between what the AI knows, what the system stores, and what the user sees.

**So what:** Microsoft adds AI to Word. DocForge builds from first principles for AI, with a Word-like interface as the accessibility layer. Microsoft cannot reach this architecture from Word without breaking thirty years of backwards compatibility.

---

## The Format Decision — Pandoc Markdown

The backing format is **Pandoc's extended Markdown**, not a custom document object model. Pandoc already provides:

- **Fenced divs** for semantic blocks (callouts, executive summaries, sidebars)
- **YAML frontmatter** for document metadata
- **Footnotes, citations** (citeproc), **cross-references** (pandoc-crossref)
- **Multi-level lists, captions, tables**

No format invention is required. Documents are plain text, human-readable, diff-able, version-control friendly, and directly consumable by LLMs. Export to PDF and DOCX is a rendering step — Pandoc performs it — not a lossy conversion. See [NOTES.md](../../NOTES.md) — REFACTOR-PLAN session (2026-02-20) for the rationale that superseded the custom DOM approach.

**Styling.** Style is applied via Pandoc's element vocabulary (`h1`–`h6`, `p`, `ul`/`ol`, `blockquote`, `table`, etc.) plus custom semantic divs (`.callout`, `.executive-summary`) where meaning exceeds structure. Multi-level heading numbering uses CSS counters. Phase 0: single print stylesheet; Phase 2: full brand manifest.

---

## Three-Phase Structure

| Phase | Scope | Success Criteria |
|-------|-------|------------------|
| **Phase 0** | Personal tool (weeks) | The author uses DocForge for their next real client deliverable instead of VS Code + manual pandoc |
| **Phase 1** | Shareable tool (months) | Validates whether the problem is shared; adds what small teams need |
| **Phase 2** | Product (years) | Enterprise features: brand governance, clause library, government market, server-hosted deployment |

Phase 0 is weeks of scope, not months or years. Build it; use it; then decide what to extend. Server-hosted deployment, clause library, and brand manifest are Phase 1+.

---

## Phase 0 Architecture

### Project Folder Schema

Documents live in projects. A project folder:

| Folder | Purpose |
|--------|---------|
| `inputs/` | Transcripts, research, source material |
| `working/` | Rough notes, drafts in progress |
| `context/` | Brief, constraints, project parameters |
| `deliverables/` | Final documents ready for export |

The LLM has access to all layers. Full RAG is Phase 1; the folder schema and context loading are Phase 0.

### GUI Layer

- **Editor:** TipTap (ProseMirror-based) with custom node types for Pandoc semantic blocks (`:::callout`, `:::executive-summary`, etc.). See [ADR-0004](../architectural/adrs/ADR-0004-tiptap-editor-framework.md).
- **Desktop:** Tauri. See [ADR-0003](../architectural/adrs/ADR-0003-tauri-desktop-framework.md).
- **Behaviour:** Produces valid Pandoc Markdown; round-trip editing preserves structure.

### Export Pipeline

Pandoc CLI for PDF and DOCX. A print stylesheet (CSS) the author controls. Optional reference DOCX template. Filters such as pandoc-crossref. Export is deterministic and reproducible.

### LLM Integration

Direct API calls with project context (brief, selected files from `inputs/` and `context/`). No RAG yet. The LLM receives document content plus chosen project files on each request.

---

## Phase 2 Vision (Deferred, Not Abandoned)

- **Brand manifest** — Semantic roles mapped to visual properties; swappable without touching documents.
- **Clause library** — Deterministic insertion of approved content; assembly engine; fixed vs variable zones.
- **Server-hosted deployment** — Collaboration, DMS integration (iManage → NetDocuments → Content Manager), multi-tenancy.
- **Government market** — IRAP, ISM, procurement; pluggable LLM provider with Azure Australia East for data sovereignty.

The architecture extends into Phase 1 and Phase 2 without fundamental rework. Pandoc Markdown is the stable foundation.

---

## Competitive Position

DocForge does not replace Word. It occupies the authoring position; Office formats remain the distribution standard. Create and edit in DocForge; export to DOCX/PDF for delivery. This is the InDesign model.

**Phase 0 advantage:** A Pandoc GUI editor that does not exist elsewhere, built for the new LLM-assisted consulting workflow user class.

**Phase 2 advantage:** Every document is a structured AI knowledge asset; the platform compounds in value at organisational scale. An organisation using DocForge has, as a side effect, a semantically tagged institutional knowledge corpus that is immediately queryable by AI.

**Strategic caveat:** Technical superiority is necessary but not sufficient. Distribution and adoption matter (see the WordPerfect lesson in [NOTES.md](../../NOTES.md)). The go-to-market must be "the authoring environment for documents that get exported to Word" — not "replace Word."

---

## Open Questions

- Cross-reference: [NOTES.md](../../NOTES.md) open questions (branding, monetisation, open source format strategy).

**Resolved — Export fidelity target:** Client deliverable quality (particularly PDF); relatively true to the GUI representation, similar to Word or Google Docs. See [PRD NFRs](../conceptual/prd-lean.md#non-functional-requirements).

---

*Previous: [Problem Statement](problem-statement.md) · Next: [Options Analysis](options-analysis.md)*
