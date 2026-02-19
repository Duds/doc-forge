# DocForge — TODO

Immediate and upcoming tasks. For the full backlog, see [docs/execution/backlog.md](docs/execution/backlog.md).

---

## Immediate (Phase 0 — Personal Tool)

### Setup and scaffold
- [ ] Initialise Tauri project (see [ADR-0003](docs/architectural/adrs/ADR-0003-tauri-desktop-framework.md))
- [ ] Add TipTap to frontend (see [ADR-0004](docs/architectural/adrs/ADR-0004-tiptap-editor-framework.md))
- [ ] Define project folder schema (inputs/, working/, context/, deliverables/)

### Editor (EP-001)
- [ ] Implement basic TipTap editor with headings, lists, paragraphs
- [ ] Add custom TipTap nodes for Pandoc fenced divs (callout, executive-summary)
- [ ] Persist as Pandoc Markdown with YAML frontmatter

### Styling (EP-002)
- [ ] Create base print stylesheet (element-based: h1–h6, p, ul, ol, blockquote, table, etc.)
- [ ] Add CSS counters for multi-level heading numbering
- [ ] Implement print preview in editor

### Project (EP-003)
- [ ] Project creation with folder schema
- [ ] Open project; list documents
- [ ] Load and save documents to project folder

### Export (EP-004)
- [ ] Integrate Pandoc CLI for PDF export
- [ ] Integrate Pandoc CLI for DOCX export
- [ ] Stylesheet and reference DOCX configuration

### LLM (EP-005)
- [ ] LLM API integration (pluggable provider)
- [ ] Context loading (document + selected project files)
- [ ] Suggestion UI with accept/reject

---

## Deferred

- ADR-0001: LLM provider pluggability and government deployment
- ADR-0002: DOCX/PPTX export library selection
- Phase 1 epics (RAG, sharing, PPTX)
- Phase 2 epics (brand manifest, clause library, DMS)

---

## Reference

- [Backlog](docs/execution/backlog.md)
- [PRD Lean](docs/conceptual/prd-lean.md)
- [Roadmap](docs/planning/roadmap.md)
