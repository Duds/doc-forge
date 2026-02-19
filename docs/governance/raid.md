---
title: RAIDD Log
project: DocForge
status: draft
version: 0.2
created: 2026-02-19
updated: 2026-02-20
depends_on:
  - docs/strategic/solution-concept.md
  - docs/conceptual/conops.md
  - docs/conceptual/prd-lean.md
  - NOTES.md
---

# RAIDD Log

**Risks, Assumptions, Issues, Dependencies, and Decisions**

This document is generated from `docs/governance/raidd/*.yaml` (RAIDD as code). Edit the YAML source and run `python scripts/generate_raidd.py` to regenerate. Be honest about likelihood and impact; avoid defaulting everything to "medium". Flag which assumptions are validated vs unvalidated.

---

## Risks

| ID | Risk | Likelihood | Impact | Mitigation | Owner | Status | Date Added |
| ---- | ----- | ------------ | ------ | ----------- | ----- | ------ | ----------- |
| R-001 | DOCX/PPTX export fidelity insufficient for professional use (manual correction required) | High | Critical | Technical spike against Engagement Letter, Board Paper, Cabinet Submission before customer commitment; validate with selected export library | TBD | Open | 2026-02-19 |
| R-002 | LLM hallucination in clause-adjacent or variable content | Medium | High | Deterministic clause insertion only; human confirmation for all AI-generated content; AI scoped to variable zones only | TBD | Open | 2026-02-19 |
| R-003 | Behaviour change resistance — users revert to ad hoc formatting | Low | Low | Phase 1+ risk; primary user is also designer in Phase 0, so resistance is minimal. For Phase 1+: template-first UX; style picker primary; character formatting behind friction notice | TBD | Open | 2026-02-19 |
| R-004 | Microsoft adds competing AI-native document mode to Word | Medium | High | Accelerate time to market; deepen vertical integration and compliance story; InDesign positioning (authoring vs distribution) | TBD | Open | 2026-02-19 |
| R-005 | Government procurement delayed by security certification (ISM, IRAP) | High | Medium | Phase 2 risk; not relevant to Phase 0 or Phase 1. Complete ADR for LLM provider and data sovereignty before government engagement; plan certification into roadmap | TBD | Open | 2026-02-19 |
| R-006 | Clause library onboarding friction slows initial sales | Medium | Medium | Validate with 1–2 target accounts; define pricing and partner model before go-to-market | TBD | Open | 2026-02-19 |
| R-007 | Pandoc export fidelity insufficient — print stylesheet and reference DOCX may not produce professional output without significant investment | Medium | High | Invest in CSS and reference DOCX template; validate against representative document types before Phase 0 completion | TBD | Open | 2026-02-20 |
| R-008 | GUI complexity for Pandoc semantic blocks — rendering fenced divs (e.g. :::callout) as WYSIWYG nodes in TipTap requires custom node types; non-trivial | Medium | High | Technical spike on TipTap custom nodes for Pandoc fenced divs; consider progressive enhancement (raw block initially) if full WYSIWYG is deferred | TBD | Open | 2026-02-20 |

---

## Assumptions

| ID | Assumption | Validated? | Impact if False | Owner | Status | Date Added |
| ---- | ---------- | ---------- | ---------------- | ----- | ------ | ----------- |
| A-001 | Target market (professional services, government) prefers server-hosted over local-first | No | Rearchitect deployment and collaboration | TBD | Open | 2026-02-19 |
| A-002 | Target users will accept a new authoring tool if export quality is high | No | Pivot value proposition or distribution | TBD | Open | 2026-02-19 |
| A-003 | DOCX and PPTX remain dominant distribution formats for target market | Reasonable | Minimal; export format can be extended | TBD | Open | 2026-02-19 |
| A-004 | Australian-region frontier LLM APIs (e.g. Azure Australia East) satisfy government data sovereignty for most agencies | Partially (Azure enterprise agreements exist) | May need self-hosted model earlier for some agencies | TBD | Open | 2026-02-19 |
| A-005 | Professional services onboarding engagement (clause library import) is acceptable to initial target accounts | No | Higher friction; slower sales cycles | TBD | Open | 2026-02-19 |
| A-006 | Export fidelity ceiling (professionally acceptable without manual correction) is achievable with current DOCX/PPTX libraries | No — highest technical risk | Bespoke rendering pipeline; significant cost and timeline | TBD | Open | 2026-02-19 |
| A-007 | Branch/merge collaboration, surfaced as Send for Review / Incorporate Comments, is sufficient for 95%+ of target workflows | Supported by ConOps decision | Significant UX rework if wrong | TBD | Open | 2026-02-19 |
| A-008 | LLM APIs will remain affordable for document-scale generation | No | Affects unit economics and pricing | TBD | Open | 2026-02-19 |

---

## Issues

| ID | Issue | Severity | Impact | Owner | Status | Date Added | Resolution |
| ---- | ----- | -------- | ------ | ----- | ------ | ----------- | ---------- |
| I-001 | Export fidelity technical feasibility unvalidated | High | Blocks customer commitment on deliverable quality | TBD | Open | 2026-02-19 | — |
| I-002 | ADR for LLM provider pluggability and data sovereignty required before any government pilot | High | Blocks government engagement | TBD | Open | 2026-02-19 | — |
| I-003 | Clause library onboarding model undefined (pricing, resourcing, partner vs in-house) | Medium | Blocks go-to-market planning | TBD | Open | 2026-02-19 | — |
| I-004 | Minimum viable skeleton quality and brief-to-skeleton UX not tested with personas | Medium | Risk of poor fit for skeleton assembly value prop | TBD | Open | 2026-02-19 | — |
| I-005 | DOCX/PPTX export library selection not decided | Medium | Blocks export pipeline implementation | TBD | Open | 2026-02-19 | Pending ADR |
| I-006 | Relationship to BidWriter project not assessed (overlap, synergy, consolidation) | Medium | Affects roadmap and backlog | TBD | Open | 2026-02-19 | — |
| I-007 | Monetisation model unresolved (SaaS vs perpetual vs open-core) | Medium | Affects pricing and open-source format strategy | TBD | Open | 2026-02-19 | — |

---

## Dependencies

| ID | Dependency | Type | Provider | Impact if Delayed | Owner | Status | Date Added |
| ---- | ----------- | ---- | -------- | ------------------ | ----- | ------ | ----------- |
| D-001 | LLM provider API (Australian-region at launch — Azure Australia East or equivalent) | External | Cloud provider / enterprise agreement | High — blocks AI features and government path | TBD | Not contracted | 2026-02-19 |
| D-002 | DOCX/PPTX export library selection | Internal | Architecture decision | High — blocks export pipeline | TBD | Pending ADR | 2026-02-19 |
| D-003 | Government security certification (ISM, IRAP) for government pilot | External | Assessor / agency | High — blocks government pilot | TBD | Not started | 2026-02-19 |
| D-004 | Enterprise IAM integration (SAML/OIDC) | External | Customer / IdP | High — required for target market | TBD | Not started | 2026-02-19 |
| D-005 | BidWriter overlap assessment | Internal | Product / programme | Medium — affects scope and roadmap | TBD | Open | 2026-02-19 |

---

## Decisions

| ID | Decision | Rationale | Alternatives Considered | Impact | Decision Maker | Date Made | Status |
| -------- | -------- | --------- | ------------------------ | ------ | --------------- | ---------- | ------ |
| DEC-001 | Server-hosted primary; not local-first at launch | Target market wants documents on firm/agency infrastructure; collaboration and DMS integration require server-hosted | Local-first, Electron desktop | High — deployment and collaboration model | ConOps session | 2026-02-19 | Accepted for Phase 1+; superseded for Phase 0 by DEC-010 |
| DEC-002 | Pluggable LLM providers; Australian-region API at launch | Data sovereignty for government; provider, region, model as config | API-first only; local-only | High — architecture and government path | NOTES | 2026-02-19 | Accepted — ADR required before gov pilot |
| DEC-003 | DMS integration order: iManage → NetDocuments → Content Manager | Market coverage (legal then government); API maturity | Single DMS; different order | Medium — Tier 2 roadmap | NOTES | 2026-02-19 | Accepted |
| DEC-004 | Document types: three full-clause, three to five skeleton-only at launch | Full-clause: Engagement Letter, Board Paper, Cabinet Submission. Skeleton-only: Strategic Review, Proposal/Tender, Briefing Note | Fewer types; more types | High — scope and clause library | NOTES | 2026-02-19 | Accepted |
| DEC-005 | Clause library onboarding: professional services engagement at launch; self-service import Tier 2 | Initial accounts need structured import from Word/SharePoint; self-service later | Self-service from day one | High — onboarding and GTM | NOTES | 2026-02-19 | Accepted |
| DEC-006 | Branch/merge surfaced as Send for Review / Incorporate Comments; branch semantics not exposed | Sufficient for 95%+ workflows; simpler UX | Expose branch semantics to power users | Medium — collaboration UX | ConOps session | 2026-02-19 | Accepted |
| DEC-007 | Web application (server-hosted); Electron deprioritised | Aligns with server-hosted; target market does not require desktop-native | Electron, local-first | High — GUI and deployment | NOTES / ConOps | 2026-02-19 | Accepted |
| DEC-008 | DOCX Track Changes markup generated on export for reviewer compatibility only | Interoperability with Word-based reviewers; not used inside DocForge | No Track Changes; full internal Track Changes | Medium — export and collaboration | ConOps / PRD | 2026-02-19 | Accepted |
| DEC-009 | Backing format is Pandoc Markdown; not custom DOM | Pandoc already supports fenced divs, YAML frontmatter, footnotes, citations, cross-refs. No format invention required. Supersedes implied custom YAML/JSON in original solution concept | Custom document object model; Quarto format | High — storage and export architecture | REFACTOR-PLAN / concept evolution | 2026-02-20 | Accepted |
| DEC-010 | Phase 0 is local-first personal tool; server-hosted is Phase 1+ | Phase 0 primary user is the author; solve own problem first. Local-first aligns with personal tool scope. Server-hosted required for collaboration, clause library, DMS; deferred to Phase 1+ | Server-hosted from Phase 0 | High — deployment and Phase 0 scope | REFACTOR-PLAN / concept evolution | 2026-02-20 | Accepted |
| DEC-011 | Phase 0 GUI base is TipTap/ProseMirror wrapped in Electron or Tauri | ProseMirror is Pandoc-compatible; TipTap provides extension ecosystem. Electron/Tauri for desktop deployment. ADR required to choose Electron vs Tauri | Web-only; Slate; Lexical | High — GUI and desktop stack | REFACTOR-PLAN / concept evolution | 2026-02-20 | Proposed — ADR pending |

---

## Review Schedule

This RAIDD log should be reviewed:

- Weekly during active development
- Monthly during planning
- Before major milestones or releases
- When new risks, issues, or decisions arise

---

## Change Log

| Date | Change | Changed By |
| ------ | ------ | ----------- |
| 2026-02-20 | Concept refactor: DEC-009 (Pandoc format), DEC-010 (Phase 0 local-first), DEC-011 (TipTap/Electron/Tauri); R-007, R-008; R-003/R-005 phase applicability | REFACTOR-PLAN |
| 2026-02-19 | YAML/frontmatter audit: version on ADR template, depends_on on docs per dependency map, meta schema comment | Project |
| 2026-02-19 | RAIDD as code: YAML source, generator script, raidd-management.mdc | Project |
| 2026-02-19 | Expanded to full RAIDD; added Issues, Decisions; aligned with Between best practices | Project |
| 2026-02-19 | Initial RAID log (stub) | Project |

---

*[PRD (Lean)](../conceptual/prd-lean.md) · See also: [ADR Log](../architectural/adrs/README.md)*
