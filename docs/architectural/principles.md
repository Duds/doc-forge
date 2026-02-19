---
title: Architectural Principles
project: DocForge
status: draft
version: 0.4
created: 2026-02-19
updated: 2026-02-20
depends_on:
  - docs/strategic/solution-concept.md
---

# Architectural Principles

These principles guide design decisions for DocForge. Each states the principle, the rationale, and the implication for the system. They are derived from the [Solution Concept](../strategic/solution-concept.md).

---

## 1. Document is data

**Principle.** The storage format is the AI exchange format and the source of truth for rendering. There is no translation layer between storage, AI consumption, and what the user sees.

**Rationale.** Word conflates appearance with meaning; the result is not reliably transformable or AI-consumable. DocForge inverts this: the same semantic structure is stored, rendered, and exposed to LLMs. That single representation is the durable advantage.

**Implications.** The storage format is Pandoc Markdown plus YAML frontmatter — human-readable, diff-able, version-control friendly, and directly consumable by LLMs. It is not a custom YAML/JSON schema. Export to DOCX/PDF is a rendering concern; the storage format is never lossily converted. Version control, diffs, and AI prompts operate on the same artefact.

---

## 2. Semantic over cosmetic

**Principle.** Structure and meaning are stored; appearance is derived. Style is a theme concern, not a document concern.

**Rationale.** When formatting is stored directly, brand compliance is fragile and transformation fails. When semantic roles (callout, executive summary, data table) are stored and mapped to visual properties, documents survive theme changes and remain machine-interpretable.

**Implications.** Styling targets the Pandoc element vocabulary (`h1`–`h6`, `p`, `ul`/`ol`, `blockquote`, `table`, `figure`, etc.) plus custom semantic divs (`:::callout`, `:::executive-summary`) where meaning exceeds structure. The editor exposes a semantic style palette; character-level formatting is secondary. In Phase 0, style is applied via a print CSS stylesheet and optional reference DOCX template. A full brand manifest is Phase 2.

---

## 3. Deterministic where correctness matters

**Principle.** Clause library content is never LLM-generated at insertion time. Assembly is rule-based and auditable.

**Rationale.** Legal and regulated content must be exact. A model may recommend which clause applies; the actual text inserted is the approved, version-controlled clause. AI supports judgement; the system enforces correctness.

**Implications.** This principle applies from Phase 1 when clause library features are introduced. Phase 0 has no clause library; deterministic assembly is deferred. When built, the clause library holds locked content with metadata; insertion is a lookup plus paste of exact text. No LLM call alters clause content at assembly time.

---

## 4. Brand as a first-class object

**Principle.** Brand governs appearance; documents reference semantic roles. The separation between content and style is preserved.

**Rationale.** Professional users have brand requirements. If style is embedded in documents, rebranding requires touching every file. Separating style from content allows centralised control and document portability.

**Implications.** In Phase 0, brand = a print stylesheet (CSS) plus an optional Pandoc reference DOCX template. The author controls these files; documents remain structure-only. The full brand manifest concept (versioned, multi-brand, theme-level editing) is Phase 2. Phase 0 establishes the separation; Phase 2 expands it.

---

## 5. Export fidelity is a product requirement

**Principle.** PDF and DOCX export must be acceptable to the target user without manual correction.

**Rationale.** DocForge occupies the authoring position; Office formats remain the distribution standard (the InDesign model). If export is visibly degraded, adoption fails regardless of internal architecture.

**Implications.** Export is not best-effort. With Pandoc as the conversion engine, professional output is more achievable than with a custom renderer — Pandoc's DOCX and PDF output are mature and widely used. The print stylesheet and reference DOCX template must be tuned for professional quality. Measurable targets belong in NFRs.

---

## 6. Portable format; deployment model evolves with phase

**Principle.** The storage format is human-readable and portable at all phases. The deployment model (local vs server-hosted) varies by phase.

**Rationale.** Phase 0 is a personal tool — local-first. The author runs the editor on their own machine; documents live in a project folder. Server-hosted deployment, collaboration, and DMS integration are Phase 1+. Portability of the format is non-negotiable; lock-in is minimised by using plain-text Pandoc Markdown.

**Implications.** Phase 0: design for local-first. Documents are files on disk. No authentication, multi-tenancy, or server infrastructure. Phase 1+: introduce server-hosted options as needed. The format supports both; no redesign required.

---

## 7. Open format, closed renderer

**Principle.** The storage format is documented and portable; the rendering and AI layer is the product moat.

**Rationale.** Pandoc Markdown is already an open format — specified, tooled, and widely adopted. Portability builds trust. The value that cannot be easily replicated is the editor, the export pipeline integration, and the LLM workflow — not the file format.

**Implications.** Documents can be edited with any text editor and processed with Pandoc directly. The DocForge GUI, project-aware context loading, and integrated export pipeline are the differentiators. No proprietary schema; no lock-in at the format level.

---

## 8. Solve your own problem first

**Principle.** The primary design authority for Phase 0 is the author's own consulting workflow. Features that do not serve that workflow are Phase 1+ regardless of how compelling they seem.

**Rationale.** Phase 0 succeeds if the author uses it for their next real client deliverable. Enterprise features, clause libraries, and brand governance are valuable but not Phase 0. Scope discipline prevents over-engineering and keeps the first release tractable.

**Implications.** Every Phase 0 feature must answer: does this help the author produce a professional PDF from Markdown without post-export touch? If not, it waits. The roadmap exists; Phase 1 and Phase 2 have their place. Phase 0 stays focused.

---

## 9. Adoption and distribution matter

**Principle.** Technical superiority is necessary but not sufficient. Architecture must support the distribution and adoption strategy.

**Rationale.** WordPerfect had a technically superior document model ("reveal codes" exposed structure honestly) and lost to Word. Microsoft's distribution advantages (bundling, mouse-driven GUI adoption, enterprise lock-in) overwhelmed technical merit. The lesson: be right about the product and strategic about how it reaches users.

**Implications.** DocForge occupies the authoring position; Office formats remain the distribution standard (the InDesign model). Export fidelity and Office interoperability are product requirements, not afterthoughts. Go-to-market framing is "the authoring environment for documents exported to Word" — not "replace Word." Design for the niche (professional services, government) and instrument for adoption; do not optimise for technical purity alone.

---

## Format documentation and project conventions

DocForge-specific format documentation (frontmatter schema, project folder conventions) is **required** — not optional. It is a Phase 0 deliverable, not a roadmap feature. Pandoc Markdown is already documented; DocForge adds conventions that must be specified for portability and tool interop.

**User-defined project conventions** — Users should be able to create their own project folder structures and naming conventions. Phase 0: a single default convention (e.g. `inputs/`, `working/`, `context/`, `deliverables/`), optionally overridable via config (e.g. `docforge.yaml`). Phase 1: full UX for choosing and defining conventions when creating or configuring a project. Phase 2: enterprise-level conventions (e.g. per-brand, per-organisation).

**Templated conventions** — Pre-built project conventions for different workflows (consulting report, legal matter, government submission) are a Phase 1 roadmap feature. When creating a project, users can select a template that sets up the folder structure and optional default context files. This leverages the user-defined conventions capability and validates that the problem is shared across workflows.

---

## Open Questions

- Cross-reference: [NOTES.md](../../NOTES.md) open questions (branding, monetisation, open source format strategy).

*Export fidelity ceiling resolved:* Client deliverable quality (particularly PDF); relatively true to GUI representation (Word/Google Docs–like). See [PRD NFRs](../conceptual/prd-lean.md#non-functional-requirements).

---

*Previous: [Solution Concept](../strategic/solution-concept.md) · Next: [High-Level Architecture](hla.md)*
