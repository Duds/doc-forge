# RAIDD as code

The RAIDD log is maintained as structured YAML in this directory. The human-readable `../raid.md` is **generated** from these files. Do not edit `raid.md` by hand; edit the YAML and regenerate.

## Source files

| File | Contents |
|------|----------|
| `meta.yaml` | Title, project, version, dates, `depends_on`, review schedule, changelog, nav links |
| `risks.yaml` | Risks (id, risk, likelihood, impact, mitigation, owner, status, date_added) |
| `assumptions.yaml` | Assumptions (id, assumption, validated, impact_if_false, owner, status, date_added) |
| `issues.yaml` | Issues (id, issue, severity, impact, owner, status, date_added, resolution) |
| `dependencies.yaml` | Dependencies (id, dependency, type, provider, impact_if_delayed, owner, status, date_added) |
| `decisions.yaml` | Decisions (id, decision, rationale, alternatives_considered, impact, decision_maker, date_made, status) |

## Regenerate raid.md

From repo root:

```bash
python3 scripts/generate_raidd.py
```

If you use a virtual environment:

```bash
.venv/bin/python scripts/generate_raidd.py
```

Dependencies: `pip install -r scripts/requirements.txt` (PyYAML).

## ID conventions

- Risks: `R-001`, `R-002`, …
- Assumptions: `A-001`, `A-002`, …
- Issues: `I-001`, `I-002`, …
- Dependencies: `D-001`, `D-002`, …
- Decisions: `DEC-001`, `DEC-002`, …

Use the next available number when adding an item. When resolving or closing, set `status` and optionally `date_resolved` / `resolution` where the schema supports it.

## Changelog

Append a new entry to `meta.yaml` → `changelog` when you make substantive changes (new items, status changes, or bulk updates). Format:

```yaml
- date: "YYYY-MM-DD"
  change: "Short description of change"
  changed_by: Your name or Project
```
