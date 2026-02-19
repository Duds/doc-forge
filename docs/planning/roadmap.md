---
title: Roadmap
project: DocForge
status: draft
version: 0.3
created: 2026-02-19
updated: 2026-02-20
depends_on:
  - docs/conceptual/prd-lean.md
  - docs/planning/operating-model.md
---

# Roadmap

DocForge is sequenced into four phases. Each phase has explicit success criteria and exit conditions — what must be true before moving to the next phase.

---

## Phase 0 — Personal Tool (weeks)

**Scope.** A professional-grade Pandoc Markdown GUI editor that produces high-quality PDF (and optionally DOCX) via Pandoc. Local-first. Single author. Project-aware. The author solves their own problem first.

**Capabilities.**
- Rich Markdown editor (TipTap/ProseMirror) with Pandoc semantic block support
- Project folder schema (inputs/, working/, context/, deliverables/); optional config override (e.g. docforge.yaml) for custom structure
- Print stylesheet (CSS) and optional reference DOCX template
- One-click export to PDF and DOCX
- LLM assistance with project context (direct API calls, no RAG)

**Success criteria.** The author uses DocForge for their next real client deliverable instead of VS Code + manual pandoc.

**Exit conditions (before Phase 1).**
- Author has delivered at least one real client document using DocForge
- Export quality (PDF/DOCX) is acceptable without post-processing for the author's use case
- No blocking bugs or UX failures that force reversion to the old workflow
- Decision made: proceed to Phase 1 or iterate on Phase 0

---

## Phase 1 — Shareable Tool (months)

**Scope.** Polish, project-context awareness (RAG over project folder), initial sharing. Validates whether the problem is shared by others.

**Capabilities (proposed).**
- RAG over project folder (retrieval, summarisation of inputs)
- User-defined project conventions (UX for choosing and defining folder structure when creating projects)
- Templated conventions for different workflows (consulting report, legal matter, government submission)
- Sharing with a small team or early adopters
- Possibly: server-hosted or sync option
- PPTX export
- Refined UX based on Phase 0 usage

**Success criteria.** At least one other user (besides the author) uses DocForge for a real deliverable.

**Exit conditions (before Phase 2).**
- Problem validated as shared; demand for enterprise features is clear
- Architecture supports extension to clause library, brand manifest, server-hosted
- Decision made: proceed to Phase 2 or sustain Phase 1

---

## Phase 2 — Professional (months to years)

**Scope.** Enterprise features: brand governance, clause library, assembly engine. Government and professional services market.

**Capabilities (proposed).**
- Brand manifest (versioned, multi-brand)
- Clause library and assembly engine
- Server-hosted deployment
- DMS integration (iManage, NetDocuments, Content Manager)
- Accessibility (PDF/UA, WCAG for editor)
- Government security (ISM, IRAP)

**Success criteria.** First reference customers (professional services firm or government agency) using DocForge for production documents.

**Exit conditions (before Phase 3).**
- Product-market fit demonstrated in target segment
- Scalable deployment and support model in place

---

## Phase 3 — Platform (years)

**Scope.** Marketplace, API, advanced collaboration, analytics.

**Capabilities (proposed).**
- Theme and clause library marketplace
- API for third-party integration
- Advanced collaboration (real-time or richer branch/merge)
- Analytics and document intelligence

**Success criteria.** DocForge is a platform others build on; revenue and adoption support ongoing investment.

---

## Phase Summary

| Phase | Duration | Primary outcome |
|-------|----------|-----------------|
| Phase 0 | Weeks | Author uses DocForge for real client deliverable |
| Phase 1 | Months | Problem validated as shared; others adopt |
| Phase 2 | Months–years | Enterprise customers; clause library; server-hosted |
| Phase 3 | Years | Platform; marketplace; ecosystem |

---

*Previous: [Operating Model](operating-model.md) · Next: [Release Plan](release-plan.md)*
