# S2 — LO2 Project Management Plan (Template)

\[Write in a report style. Replace all bracketed text like \[this\].\]

This document is designed to cover:
- **P3** Use project management software, tools and techniques to produce a comprehensive engineering project plan.
- **M2** Demonstrate effective use of PM software/tools/techniques (dependencies, baselines, control).
- **D2** Produce evaluation criteria (measurable KPIs) and justify how success will be judged.

---

## Contents
\[Insert automatic Table of Contents if exporting to Word/PDF.\]

## Table of figures
\[Insert automatic Table of Figures if exporting to Word/PDF.\]

---

## Document control
- Unit: 5041 Engineering Project
- Project title: [Your project title]
- Student name: [Name]
- Student ID: [ID]
- Pathway: [MATLAB simulation/model-based OR hardware]
- Date: [DD Mon YYYY]
- Version: [v0.x]

---

## 1. Introduction
Write 3–6 lines explaining what LO2 is trying to achieve:
- What is being planned? (your individual project)
- What tool will you use? (Jira)
- What evidence will you use? (exports/screenshots: backlog, dependencies, timeline, dashboards, risks/changes/decisions)

Suggested sentence starters:
- “This report presents a comprehensive project plan for an individual engineering project using Jira to define tasks, dependencies, milestones, and control mechanisms.”
- “The plan includes measurable evaluation criteria (KPIs) and a control process for risks, changes, and decisions, evidenced through Jira exports and weekly status updates.”

\[Insert: one-page project overview figure (system/model diagram + milestone timeline).\]

---

## 2. Project scope and deliverables (P3)
### 2.1 Scope recap
\[One short paragraph summarising in-scope vs out-of-scope from LO1.\]

### 2.2 Deliverables
List the deliverables and what “done” means.

| Deliverable | Owner | Done definition | Evidence |
|---|---|---|---|
| Project implementation (hardware or MATLAB) | [Self] | [definition] | [video/plots/logs] |
| Test/simulation plan + results | [Self] | [definition] | [PDF + data files] |
| Technical report | [Self] | [definition] | [report PDF] |

---

## 3. Planning approach and lifecycle (P3)
### 3.1 Lifecycle stages
Describe the lifecycle you will follow (example):
- Initiation → Planning → Implementation → Integration → Test/Verification → Evaluation → Close

### 3.2 How Jira will be used
State clearly:
- Board type: \[Kanban/Scrum\]
- Sprint cadence (if Scrum): \[weekly\]
- Definition of Done (DoD): \[bullet list\]
- Issue types you will use: \[Task, Bug, Risk, Change, Decision\]

\[Insert: screenshot of Jira project settings/board setup.\]

---

## 4. Work breakdown structure (WBS) / Backlog (P3)
### 4.1 WBS/backlog structure
Explain how work is decomposed.

Recommended structure:
- Epics = Workstreams (Design/Model, Implement/Build, Test/Validate, Analysis/Report)
- Stories/Tasks = implementable work items
- Subtasks = specific steps

### 4.2 Backlog table (required summary)
Provide a summary table of your main epics and the key tasks.

| Epic | Key tasks included | Owner(s) | Notes |
|---|---|---|---|
| Firmware | [state machine, fault handling] | [names] | [dependencies] |
| Hardware | [drivers, wiring] | [names] | [dependencies] |

\[Insert: backlog export screenshot OR filtered backlog view screenshot.\]

---

## 5. Schedule, milestones and baseline (P3 + M2)
### 5.1 Milestones
Define 5–8 milestones.

| Milestone ID | Milestone | Date/week | Acceptance check |
|---|---|---|---|
| MS-01 | Plan baseline frozen | Week [x] | Baseline export captured |
| MS-02 | Prototype/model v1 produces results | Week [x] | First results table/plot/log |
| MS-03 | System/acceptance test run | Week [x] | End-to-end scenario evidence |

### 5.2 Timeline evidence
\[Insert: Jira Timeline view screenshot (or equivalent).\]

### 5.3 Baseline (required for M2)
State:
- Baseline date: [date]
- What was baselined: scope, milestones, task estimates, acceptance criteria
- How changes will be tracked: Change issues + versioned plan updates

\[Insert: baseline evidence (screenshot of version/tag, or exported snapshot).\]

---

## 6. Roles, responsibilities and communication (P3)
### 6.1 Roles and responsibilities (individual)
Define responsibilities clearly:
- Project owner: you (planning, delivery, evidence)
- Stakeholders/users (if any): who provides requirements/feedback
- Tutor/supervisor: checkpoints/approvals (centre process)

### 6.2 Communication plan
- Check-in cadence: [weekly]
- Where decisions are recorded: [Jira Decision issues]
- How evidence is stored: [folder + naming]

---

## 7. Dependencies and interface control (M2 focus)
### 7.1 Dependency management approach
Explain how you will use Jira links:
- `blocks` / `is blocked by`
- why dependencies exist (parts lead time, lab access, learning prerequisites, data availability, module interface definition)

### 7.2 Dependency map (required evidence)
\[Insert: screenshot of dependency view OR a table summary of key dependencies.\]

Suggested dependency table:

| Dependency | Blocks what? | Owned by | Needed by date | Risk if late | Mitigation |
|---|---|---|---|---|---|
| Sensor arrives | Calibration + testing | Self | Week [x] | Tests slip | Order early / use simulated data |

### 7.3 Interface definition/spec (if applicable)
State what your interface definition includes (examples):
- Pinout and signal levels (hardware)
- Data formats between modules/functions (MATLAB or software)
- Units, naming conventions, timing requirements

\[Insert: interface definition excerpt/screenshot/link (optional).\]

---

## 8. Risk management (P3 + M2)
### 8.1 Risk method
- Method: [Likelihood × Severity]
- Review cadence: [weekly]

### 8.2 Risk register (required)
Include at least 8 risks.

| Risk ID | Risk | L | S | Score | Mitigation | Owner | Evidence |
|---|---|---:|---:|---:|---|---|---|
| R-01 | [integration delay] |  |  |  |  |  |  |

\[Insert: Jira risk list screenshot (filter).\]

---

## 9. Change control and decision logging (M2)
### 9.1 Change control process
Describe:
- how changes are proposed (Change issue)
- how impact is assessed (scope/schedule/cost/risk)
- who approves (you + tutor/supervisor, per centre process)

### 9.2 Decision log
Record key decisions.

| Decision ID | Decision | Options considered | Criteria | Chosen option | Justification | Evidence |
|---|---|---|---|---|---|---|
| D-01 | [simulate heater] | A/B | [safety/feasibility] | [option] | [why] | [policy cite] |

\[Insert: Jira change/decision issue screenshots.\]

---

## 10. Monitoring and control (M2)
### 10.1 What you will measure weekly
Define the weekly status metrics.

Examples:
- Planned vs done work items
- Burndown (if Scrum)
- Blocked items count
- Open risks / high risks
- Test pass rate (later weeks)

### 10.2 Weekly status report template (required)
Use this structure every week:

- Week: [x]
- Summary (3–5 lines): \[what changed?\]
- Completed:
  - \[list]\
- Planned next:
  - \[list]\
- Blockers:
  - \[list]\
- Risks/changes/decisions this week:
  - Risks: \[IDs]\
  - Changes: \[IDs]\
  - Decisions: \[IDs]\
- Evidence attached:
  - \[screenshots/exports]\

\[Insert: dashboard screenshot showing current project status.\]

---

## 11. Evaluation criteria (KPIs) and success judgement (D2)
This section must be measurable and tied to objectives.

### 11.1 KPI table (required)
Provide module-level and system-level KPIs.

| KPI ID | KPI | Target | Measurement method | Frequency | Evidence output |
|---|---|---|---|---|---|
| KPI-01 | Response time / rise time | \[≤ X\] | timing from logs/plots | per test | log/plot |
| KPI-02 | Accuracy / error metric (e.g., RMSE) | \[≤ X\] | calculation over trials | per run | results table |
| KPI-03 | Robustness (edge-case behaviour) | \[pass criteria\] | fault/edge-case test | per test | log/plot/video |

### 11.2 KPI justification
Write 2–4 paragraphs:
- why these KPIs represent “success”
- how they are feasible to measure
- what trade-offs they encourage (e.g., safety over speed)

### 11.3 Decision method (required for D2 strength)
\[Insert: weighted decision matrix/AHP for one major decision (e.g., sensor choice, UI choice, driver topology).\]

---

## 12. Summary
Write 6–10 lines summarising:
- the plan structure
- key milestones
- top dependencies and how they’re controlled
- how KPIs will be used to judge success

---

## Bibliography / references
\[List sources used for planning assumptions: policies, datasheets, guidance on PM methods.\]
