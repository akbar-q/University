# Excel Logbook Templates (Unit 5041 - LO3)

These templates are designed to produce **strong LO3 evidence**: planned work, actual work, outputs, tests, issues, decisions, and reflection.

Files:
- `LOGBOOK_TEMPLATE_EXCEL.tsv` (recommended) - one row per **week** (matches the LO3 weekly logbook expectation).
- `DAILY_SESSION_LOG_TEMPLATE_EXCEL.tsv` (optional) - one row per **work session**; great for detailed proof of contribution.

---

## What it looks like (preview tables)

These preview tables are for **visual reference**. For copying into Excel, use the `.tsv` templates (tabs split into columns cleanly).

### Weekly log preview (1 row per week)

| Week# | EntryDate | PeriodStart | PeriodEnd | Planned Work | Work Completed | Evidence Attached | Tests and Results | Issues and Resolutions | Hours Spent | What I Learned | Next Steps | Feedback |
|---:|---|---|---|---|---|---|---|---|---:|---|---|---|
| 1 | 2026-02-13 | 2026-02-10 | 2026-02-13 | Define requirements; set success criteria; build first model/prototype | Wrote requirements and criteria; built first working model/prototype and recorded baseline behaviour | requirements.docx; photo_01.jpg; baseline_plot.png | Baseline test run; recorded key numbers | Issue: performance not meeting target; Fix: adjusted settings and re-tested | 6.5 | Turn vague aims into measurable tests | Run 2 more tests; document results table | Tutor: include sensitivity/noise case |

### Daily session preview (1 row per work session)

| Date | Hours Spent | Planned | Work Done | Evidence | Tests or Checks | Issues and Fixes | Next Steps | Learning |
|---|---:|---|---|---|---|---|---|---|
| 2026-02-13 | 2.0 | Build first model/prototype | Built first working version; recorded baseline behaviour | photo_01.jpg; baseline_plot.png | Baseline test run | Overshoot too high -> adjusted setting and re-tested | Add noise/stress test | Repeatable tests matter |

---

## How to use in Excel

### Option A (copy/paste)
1. Open the `.tsv` file in VS Code.
2. Select all (`Ctrl+A`) and copy.
3. In Excel, click cell `A1` and paste.

Excel will automatically split columns because the file uses **tab** separators.

### Option B (import)
Excel: `Data` -> `From Text/CSV` -> select the `.tsv` file -> ensure delimiter is **Tab** -> `Load`.

---

## What to write (guidance by column)

### Weekly log (`LOGBOOK_TEMPLATE_EXCEL.tsv`)
- **Week#, EntryDate, PeriodStart/End**: keep consistent with your teaching plan weeks.
- **Planned Work**: a short list of what you intended to do this week.
- **Work Completed**: what you actually did (be specific, but plain language is fine).
- **Evidence Attached**: filenames of photos, screenshots, plots, tables, drawings, notes.
- **Tests and Results**: what you tested/checked and the key outcome (pass/partial/fail + a number if possible).
- **Issues and Resolutions**: what went wrong and what you did about it.
- **Hours Spent**: rough hours for the week.
- **What I Learned**: 1–3 short points (technical + project management).
- **Next Steps**: what you will do next week.
- **Feedback**: any tutor/peer/user feedback you received.

### Daily session log (`DAILY_SESSION_LOG_TEMPLATE_EXCEL.tsv`)
Use it to back up the weekly logbook with more granular proof, especially when you want to show lots of testing and debugging effort.

---

## Tip for writing multi-line cells
In Excel, use `Alt+Enter` inside a cell to add new lines (useful for bullet-style notes in objectives, work done, and test results).
