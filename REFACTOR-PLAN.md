# DocForge — Documentation Refactor Plan

**Created:** 2026-02-20  
**Status:** Approved for execution  
**Trigger:** Concept evolution — the project scope narrowed and sharpened significantly after the initial documentation was written.

---

## Why This Refactor Is Needed

The initial documentation was written against the **enterprise platform vision** — a full Word replacement targeting professional services firms and government agencies, with a custom document object model, brand governance, clause libraries, and DOCX/PPTX export fidelity as primary concerns.

The concept has since evolved materially. The refined understanding is:

1. **The immediate problem is personal and specific.** The primary user is a code consultant whose workflow is Markdown-native and LLM-native. The pain is that standard Markdown is too flat for professional client deliverables — not that Word lacks semantic structure.

2. **The format question is answered.** Pandoc's extended Markdown is the right backing format. It already supports semantic block types (fenced divs), rich YAML frontmatter, footnotes, citations, multi-level lists, captions, and cross-references. No custom document object model is needed. No format invention is required.

3. **The Phase 0 scope is a GUI, not a platform.** A professional-grade Markdown GUI editor that produces high-quality PDF output via Pandoc — with a print stylesheet you control — is the actual Phase 0. Everything else is roadmap.

4. **The project container insight.** Documents are not authored alone. They are produced within the context of a project (interviews, meeting transcripts, research, ideation). The project is the unit of work; the document is the output. This shapes how Phase 0 is designed even if full RAG/project-memory is not Phase 0 scope.

5. **The market gap is real and recent.** No good Pandoc GUI editor exists because the people who could build it haven't needed it — until LLM-assisted consulting workflows created a new user class that needs exactly this. This is a better commercial story than the enterprise platform vision.

**The documentation as written does not reflect this understanding.** It needs to be refactored before development work begins, so that the documents Claude and Cursor use as context are accurate.

---

## What's Good — Keep As-Is

These elements are well-executed and do not need revision:

| Asset | Notes |
|-------|-------|
| `NOTES.md` | Comprehensive concept capture. Needs addendum only (see below). |
| `docs/governance/raidd/` | RAIDD-as-code structure is excellent. Schema, generator, and Cursor rules are solid. |
| `scripts/generate_raidd.py` + `requirements.txt` | Working tooling, keep. |
| `.cursor/rules/frontmatter.mdc` | Good standards, keep. |
| `.cursor/rules/raidd-management.mdc` | Excellent, keep. |
| `.cursor/rules/markdown-links.mdc` | Keep. |
| `.cursor/rules/backlog-management.mdc` | Keep. |
| `.cursor/rules/australian-standards.mdc` | Keep. |
| `docs/architectural/adrs/ADR-0000-template.md` | Keep. |
| `skills/docforge-drafter/SKILL.md` | Keep — update dependency map only (see below). |

---

## What Needs Refactoring

### 1. `docs/strategic/problem-statement.md` — REWRITE

**Current state:** Describes the enterprise problem (Word's structural failure at organisational scale, market gap for government and professional services).

**Problem:** The primary user is not an organisation buying a Word replacement. The primary user is a consultant whose *own* workflow is broken — not because of brand governance failures, but because Markdown is too flat for client-grade deliverables, and the existing tooling forces a choice between LLM-friendly and client-friendly.

**Required content:**
- The personal/consultant workflow problem first (primary user is the author)
- The format gap: standard Markdown → flat output; DOCX/PPTX → LLM-opaque
- The current workaround: write in Markdown, run through pandoc, post-style manually
- The market gap: no Pandoc GUI editor exists because the technical user who could build it didn't need it, and the non-technical user who needed it couldn't build it
- The LLM workflow context: documents are produced within projects (interviews, transcripts, research), not in isolation
- The enterprise/government use case can remain as a secondary section (the problem exists there too) but must not lead

---

### 2. `docs/strategic/solution-concept.md` — REWRITE

**Current state:** Describes a custom document object model (YAML/JSON), four-layer architecture (storage / style / AI / rendering), brand manifest system, clause library, assembly engine. Designed as an enterprise platform.

**Problem:** This is the wrong solution for Phase 0. It's over-engineered for the personal tool phase and it's also solving a format problem that Pandoc already solves. A consultant starting in a new chat who reads this document will build the wrong thing.

**Required content:**
- **The backing format is Pandoc Markdown** — not a custom DOM. This is the central architectural decision that supersedes the previous solution concept. Pandoc's extended syntax (fenced divs, YAML frontmatter, pandoc-crossref, citeproc) handles all the semantic richness required.
- **Three-phase structure:**
  - Phase 0 — Personal tool (weeks): Rich Pandoc Markdown GUI editor → professional PDF. Solves the author's own problem first.
  - Phase 1 — Shareable tool (months): Polish, project-context awareness, initial sharing. Validates whether the problem is shared.
  - Phase 2 — Product (years): Enterprise features, brand governance, clause library, government market.
- **Phase 0 architecture:** GUI editor (TipTap/ProseMirror base, Electron/Tauri wrapper), print stylesheet (CSS, controlled), Pandoc export pipeline, YAML frontmatter schema for document metadata.
- **The project-as-container concept:** Even in Phase 0, the editor is project-aware. A project folder has inputs/ (transcripts, research), working/ (rough notes), context/ (brief, constraints), deliverables/ (final documents). The LLM has access to all layers. Full RAG is Phase 1; the folder schema is Phase 0.
- The longer-term vision (enterprise platform) can remain but clearly labelled as Phase 2+.

---

### 3. `docs/architectural/principles.md` — PARTIAL REWRITE

**Current state:** Seven principles derived from the enterprise platform vision. Most are sound but several assume the custom DOM.

**Specific changes needed:**
- **Principle 1 (Document is data):** Keep the thesis; update the implementation detail. The storage format is Pandoc Markdown + YAML, not custom YAML/JSON. The principle holds — the format is still human-readable, diff-able, and LLM-consumable.
- **Principle 2 (Semantic over cosmetic):** Keep. Pandoc's fenced divs are the implementation mechanism, not a custom style layer.
- **Principle 3 (Deterministic where correctness matters):** Keep for Phase 2+; add note that this applies from Phase 1 when clause library features are introduced.
- **Principle 4 (Brand as first-class object):** Reframe for Phase 0. Brand in Phase 0 = a print stylesheet (CSS) + Pandoc reference DOCX template. The full brand manifest concept is Phase 2.
- **Principle 5 (Export fidelity):** Keep. Strengthen — this is actually *more* achievable with Pandoc than with a custom renderer.
- **Principle 6 (Portable format, organisation-hosted):** Revise. Phase 0 is local-first (personal tool). Server-hosted is Phase 1+. The principle should say "portable format at all phases; deployment model evolves with phase."
- **Principle 7 (Open format, closed renderer):** Keep. Pandoc Markdown is already an open format.
- **Add Principle 8:** *Solve your own problem first.* The primary design authority for Phase 0 is the author's own consulting workflow. Features that don't serve that workflow are Phase 1+ regardless of how compelling they seem.

---

### 4. `docs/architectural/hla.md` — REWRITE

**Current state:** Stub with technology decisions listed as pending ADRs. The layer model references the custom DOM.

**Required content:** Document the actual Phase 0 architecture:
- GUI layer: TipTap (ProseMirror-based), custom node types for Pandoc semantic blocks, Electron/Tauri wrapper
- Storage layer: Pandoc Markdown files + YAML frontmatter, project folder schema
- Export pipeline: Pandoc CLI, print CSS stylesheet, reference DOCX template, pandoc-crossref filter
- LLM integration (Phase 0): direct API calls with project context; no RAG yet
- Future layers (Phase 1+): RAG over project folder, brand manifest, clause library

---

### 5. `docs/conceptual/conops.md` — REWRITE

**Current state:** Stub with placeholder sections for enterprise personas and workflows.

**Required content:** Ground in the real user and real workflow:
- **Primary persona:** Technical consultant, Markdown-native, LLM-native, produces client deliverables (reports, advisory notes, proposals, SOWs)
- **Current workflow (pain):** Write in VS Code → raw Markdown → manual pandoc → post-style in Word → deliver DOCX
- **Target workflow (DocForge):** Open project → load context (transcripts, brief) → author in rich Markdown GUI → preview in print view → one-click export to styled PDF/DOCX → deliver
- **Project lifecycle:** New project → inputs drop (transcripts, research) → working notes → deliverables drafted → exported and delivered
- Secondary personas can include enterprise users but should not lead

---

### 6. `docs/conceptual/prd-lean.md` — REWRITE

**Current state:** Stub.

**Required content:** Now that Phase 0 is defined, this can be written. Scope explicitly to Phase 0 only:
- Goals: author produces professional PDF from rich Markdown without touching output after export
- Non-goals: clause library, brand governance, multi-user collaboration, PPTX export (Phase 1+)
- Feature list scoped to Phase 0 (Pandoc Markdown syntax + GUI + print stylesheet + export)
- Success criteria: the author uses this tool for their next real client deliverable instead of VS Code + manual pandoc

---

### 7. `docs/planning/roadmap.md` — UPDATE

**Current state:** Three-horizon structure (Foundation / Professional / Platform) with no phase 0.

**Required change:** Prepend Phase 0 (Personal Tool) as the explicit first phase. Rename Horizon 1 → Phase 1, etc. Add explicit success criteria and exit conditions for each phase (what has to be true before moving to the next phase).

---

### 8. `docs/governance/raidd/risks.yaml` — UPDATE

**Changes needed:**
- R-003 (behaviour change resistance) — reduce priority for Phase 0. The primary user is also the designer; behaviour change resistance is not a Phase 0 risk.
- R-005 (government procurement / IRAP) — mark as Phase 2 risk; not relevant to Phase 0 or Phase 1.
- **Add R-007:** Pandoc export fidelity insufficient — the print stylesheet and reference DOCX template may not produce professional output without significant CSS/template investment.
- **Add R-008:** GUI complexity for Pandoc semantic blocks — rendering `:::callout` etc. as WYSIWYG nodes in TipTap requires custom node types; this is non-trivial.

---

### 9. `docs/governance/raidd/decisions.yaml` — UPDATE

**Add new decisions:**
- DEC-009: Backing format is Pandoc Markdown, not custom DOM (supersedes implied custom DOM in original solution concept)
- DEC-010: Phase 0 is local-first personal tool; server-hosted is Phase 1+ (supersedes DEC-001 for Phase 0)
- DEC-011: Phase 0 GUI base is TipTap/ProseMirror wrapped in Electron or Tauri (pending ADR)

**Update DEC-001:** Mark as "Accepted for Phase 1+; superseded for Phase 0 by DEC-010."

---

### 10. `NOTES.md` — ADDENDUM

Do not rewrite. Append a new session section capturing:
- The Pandoc format decision and why
- The Phase 0 scope clarification (personal tool first)
- Why no Pandoc GUI editor exists (the target user problem)
- The project-as-container insight
- The revised commercial framing (new LLM-assisted consulting workflow user base)

---

### 11. `skills/docforge-drafter/SKILL.md` — MINOR UPDATE

Update the dependency map to reflect the revised document structure. Update the "Key Concepts to Stay Grounded In" section to include the Pandoc format decision and the Phase 0 scope.

---

## Documents Unchanged (Stubs — Refactor When Drafting)

These stubs were written against the original vision but haven't been drafted yet. They need updating when their time comes, not now:

- `docs/strategic/options-analysis.md` — needs Phase 0 / Phase 1 / Phase 2 framing
- `docs/strategic/business-case.md` — needs personal tool → shareable → product arc
- `docs/strategic/benefits-map.md` — needs Phase 0 benefit owner (the author himself)
- `docs/architectural/nfrs.md` — needs Phase 0 NFRs (Pandoc output quality, GUI response time)
- `docs/architectural/security-data.md` — Phase 2 concern mostly; stub is fine
- `docs/planning/operating-model.md` — Phase 1+ concern
- `docs/planning/release-plan.md` — after roadmap is updated
- `docs/execution/backlog.md` — needs complete rewrite against Phase 0 epics; do when PRD is done

---

## Execution Order

Work through this in dependency order. Each document should be drafted in a fresh chat using the docforge-drafter skill.

```
1. NOTES.md addendum          ← no dependencies; do first to capture the evolved thinking
2. problem-statement.md       ← foundational; everything else depends on it
3. solution-concept.md        ← depends on problem-statement
4. principles.md              ← depends on solution-concept
5. hla.md                     ← depends on principles
6. RAIDD updates              ← risks.yaml + decisions.yaml; run generate_raidd.py after
7. conops.md                  ← depends on solution-concept
8. prd-lean.md                ← depends on conops + solution-concept
9. roadmap.md                 ← depends on prd-lean
10. skills/docforge-drafter   ← update after all above are done
```

---

## What This Refactor Does Not Change

- The long-term vision remains valid. Phase 2 is still the enterprise platform — brand governance, clause library, government market, server-hosted deployment. The refactor doesn't abandon this; it sequences correctly.
- The RAIDD-as-code infrastructure stays exactly as is. It's good work and the schema is right.
- The cursor rules all stay. They're format and process rules that apply regardless of phase.
- The artefact hierarchy stays. The document structure is correct; the content inside several documents needs updating.

---

## Definition of Done

The refactor is complete when:

- A new LLM session reading only `NOTES.md` + `docs/strategic/problem-statement.md` + `docs/strategic/solution-concept.md` would correctly understand: Pandoc Markdown is the format, Phase 0 is a personal GUI editor, the primary user is the author himself, and the enterprise platform is Phase 2.
- No document contradicts the Pandoc format decision.
- The RAIDD decisions log includes DEC-009, DEC-010, DEC-011.
- The roadmap includes Phase 0 with explicit exit criteria.
- The PRD (lean) is drafted and scoped to Phase 0 only.
