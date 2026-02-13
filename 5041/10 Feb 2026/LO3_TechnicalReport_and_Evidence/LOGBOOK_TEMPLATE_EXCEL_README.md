# Excel Logbook Templates (Unit 5041 - LO3)

These templates are designed to produce **strong LO3 evidence**: planned work, actual work, outputs, tests, issues, decisions, and reflection.

Files:
- `LOGBOOK_TEMPLATE_EXCEL.tsv` (recommended) - one row per **week** (matches the LO3 weekly logbook expectation).
- `DAILY_SESSION_LOG_TEMPLATE_EXCEL.tsv` (optional) - one row per **work session**; great for detailed proof of contribution.

---

## What it looks like (preview tables)

These preview tables are for **visual reference**. For copying into Excel, use the `.tsv` templates (tabs split into columns cleanly).

### Weekly log preview (1 row per week)

| Week# | EntryDate | PeriodStart | PeriodEnd | Planned_JiraIssues | Planned_Objectives | Actual_WorkDone | Deliverables_Output | EvidenceIDs_or_Files | Repo_or_Link | Commit_or_Tag | Hours_Spent | Tools_Software | Hardware_Used | Tests_Run | Results_Summary | AcceptanceCriteria_Status | Problems_Blockers | Actions_Taken | Decisions_Tradeoffs | Changes_vs_Plan | Risks_Safety_Notes | Standards_Compliance_Notes | What_I_Learned | Next_Actions_Jira | Feedback_Received | Signoff_Name | Signoff_Date |
|---:|---|---|---|---|---|---|---|---|---|---|---:|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | 2026-02-13 | 2026-02-10 | 2026-02-13 | PROJ-12; PROJ-14 | Define requirements; set acceptance criteria | Built first Simulink plant model; implemented baseline PI loop | Simulink model v0.1; results plot | EVID-001 (model); EVID-002 (plot) | repo/link | v0.1.0 | 6.5 | MATLAB/Simulink; VS Code | N/A (simulation) | Step response test | Rise time=0.35 s; overshoot=8% | Partial (overshoot > 5%) | Controller oscillation at high gain | Reduced Kp; added anti-windup | Higher bandwidth vs overshoot | Planned 1 test; ran 3 (added noise case) | None | IEEE-style reporting format | Better tuning workflow; documenting tests | PROJ-15 | Tutor: add noise sensitivity | Akbar | 2026-02-13 |

### Daily session preview (1 row per work session)

| Date | StartTime | EndTime | Duration_h | Location | Work_Package_or_Jira | Objective | Work_Done | Evidence_Files | Tools | Test_Notes | Issues_and_Fixes | Next_Session_Plan |
|---|---|---|---:|---|---|---|---|---|---|---|---|---|
| 2026-02-13 | 14:00 | 16:00 | 2.0 | Home | PROJ-14 | Implement baseline controller | Implemented PI control + logging; updated model parameters | EVID-002.png; EVID-003.slx | MATLAB/Simulink | Step response; noise injection | Overshoot high -> tuned gains | Add acceptance criteria table; re-test |

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
- **Planned_JiraIssues / Planned_Objectives**: copy from your Jira sprint/backlog (proves LO2->LO3 traceability).
- **Actual_WorkDone**: write what you actually did, not what you intended.
- **Deliverables_Output**: concrete outputs (schematic, Simulink model, PCB rev, firmware feature, report section).
- **EvidenceIDs_or_Files**: reference your evidence pack or evidence index IDs.
- **Repo_or_Link / Commit_or_Tag**: link to your repo folder and note the commit/tag that matches this entry.
- **Tests_Run / Results_Summary / AcceptanceCriteria_Status**: list what you tested and the key numbers; mark Pass/Partial/Fail.
- **Problems_Blockers / Actions_Taken**: show engineering judgement and troubleshooting.
- **Decisions_Tradeoffs**: at least 1 meaningful trade-off across the project (e.g., sensor choice, filter method, topology, sampling rate).
- **Changes_vs_Plan**: explain variance vs your plan (this directly supports LO3 critical evaluation).
- **Risks_Safety_Notes**: what hazards existed and how you controlled them (especially for mains, rotating parts, heat, batteries).
- **Standards_Compliance_Notes**: mention any relevant standards/guidance you considered (even if you stayed low-voltage only).
- **What_I_Learned**: reflect technical + project management learning.
- **Next_Actions_Jira**: link forward to next tasks.
- **Feedback_Received**: short note of any tutor/peer/user feedback.

### Daily session log (`DAILY_SESSION_LOG_TEMPLATE_EXCEL.tsv`)
Use it to back up the weekly logbook with more granular proof, especially when you want to show lots of testing and debugging effort.

---

## Tip for writing multi-line cells
In Excel, use `Alt+Enter` inside a cell to add new lines (useful for bullet-style notes in objectives, work done, and test results).
