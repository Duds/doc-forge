---
title: Functional Requirements Specification
project: DocForge
status: draft
version: 0.1
created: 2026-02-20
depends_on:
  - docs/conceptual/prd-lean.md
  - docs/conceptual/conops.md
---

# Functional Requirements Specification

This document formalises the functional requirements for DocForge Phase 0. Requirements are derived from the [PRD (Lean)](../conceptual/prd-lean.md) and maintain traceability via the FR-ID scheme.

---

## Scope

Phase 0 only: the personal tool. The author produces client-ready PDF (and optionally DOCX) from Pandoc Markdown without manual post-processing. Phase 1+ requirements are out of scope.

---

## 1. Project and Document Management

| ID | Requirement | Priority | Verification |
|----|-------------|----------|--------------|
| FR-1.1 | The system shall support creating a new project with the standard folder schema (inputs/, working/, context/, deliverables/). | Must | Create project; verify folder structure exists |
| FR-1.2 | The system shall allow opening a document from a project and saving changes to the same file. | Must | Open, edit, save; verify file content persists |
| FR-1.3 | The system shall persist documents as Pandoc Markdown with YAML frontmatter. | Must | Inspect saved file; validate syntax |

*Source.* [PRD § Project and Document Management](../conceptual/prd-lean.md#project-and-document-management)

---

## 2. Authoring

| ID | Requirement | Priority | Verification |
|----|-------------|----------|--------------|
| FR-2.1 | The editor shall support Pandoc fenced divs for at least callout and executive summary (or equivalent semantic blocks). | Must | Insert blocks; round-trip to Markdown; re-open preserves structure |
| FR-2.2 | The editor shall support headings (H1–H4), lists, tables, and footnotes as per Pandoc extended Markdown. | Must | Insert each element; export to PDF/DOCX; verify output |
| FR-2.3 | The editor shall provide a print preview that approximates the final PDF appearance. | Must | Compare preview to exported PDF; structural match |

*Source.* [PRD § Authoring](../conceptual/prd-lean.md#authoring)

---

## 3. Export

| ID | Requirement | Priority | Verification |
|----|-------------|----------|--------------|
| FR-3.1 | The system shall export the current document to PDF using Pandoc and the author-configured print stylesheet. | Must | Export; verify PDF renders; stylesheet applied |
| FR-3.2 | The system shall export the current document to DOCX using Pandoc and an optional reference DOCX template. | Must | Export with and without template; verify DOCX opens in Word |
| FR-3.3 | Export shall complete without manual post-processing; the output shall be deliverable as-is for the author's use case. | Must | End-to-end: author document → export → deliver; no manual correction |

*Source.* [PRD § Export](../conceptual/prd-lean.md#export)

---

## 4. LLM Integration

| ID | Requirement | Priority | Verification |
|----|-------------|----------|--------------|
| FR-4.1 | The system shall support on-demand LLM assistance. The user initiates each request. | Must | Invoke assistance; verify no automatic calls |
| FR-4.2 | Each LLM request shall include the current document content and selected project context (brief, files from inputs/ or context/). | Must | Inspect request payload; verify context inclusion |
| FR-4.3 | AI-generated content shall be presented as a suggestion; the user must explicitly accept before it enters the document. | Must | Generate content; verify document unchanged until user accepts |

*Source.* [PRD § LLM Integration](../conceptual/prd-lean.md#llm-integration)

---

## 5. Deployment

| ID | Requirement | Priority | Verification |
|----|-------------|----------|--------------|
| FR-5.1 | The application shall run as a desktop application (Electron or Tauri). No server or cloud dependency for core operation. | Must | Run offline; create, edit, save, export without network |
| FR-5.2 | Documents shall be stored as plain-text files in the project folder. No database or proprietary storage. | Must | Inspect project folder; files are .md with readable content |

*Source.* [PRD § Deployment](../conceptual/prd-lean.md#deployment)

---

## Traceability to Backlog

| FR | Epic(s) |
|----|---------|
| FR-1.x | EP-003 Project folder context, EP-006 Tauri desktop shell |
| FR-2.x | EP-001 Rich Markdown editor, EP-002 Element-based styling & preview |
| FR-3.x | EP-004 Export PDF and DOCX |
| FR-4.x | EP-005 LLM assistance |
| FR-5.x | EP-006 Tauri desktop shell |

---

## Open Questions

1. **Minimum semantic block set.** FR-2.1 specifies callout and executive summary. Are additional fenced div types required for Phase 0? See [PRD Open Questions](../conceptual/prd-lean.md#open-questions).
2. **Reference DOCX format.** FR-3.2 allows optional reference DOCX. What schema or conventions must the reference template follow?

---

*Previous: [PRD (Lean)](../conceptual/prd-lean.md) · Next: [Backlog](../execution/backlog.md) · See also: [NFRs](nfrs.md) · [HLA](hla.md)*
