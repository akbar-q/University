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
- Project: ESP32 Coffee Machine Controller (multi-team)
- Team name: [Team]
- Team members: [Names + IDs]
- Date: [DD Mon YYYY]
- Version: [v0.x]

---

## 1. Introduction
Write 3–6 lines explaining what LO2 is trying to achieve:
- What is being planned? (integrated ESP32 controller + demo)
- What tool will you use? (Jira)
- What evidence will you use? (exports/screenshots: backlog, dependencies, timeline, dashboards, risks/changes/decisions)

Suggested sentence starters:
- “This report presents a comprehensive project plan for an ESP32-based coffee machine controller demonstrator using Jira to define tasks, owners, dependencies, milestones, and control mechanisms.”
- “The plan includes measurable evaluation criteria (KPIs) and a control process for risks, changes, and decisions, evidenced through Jira exports and weekly status updates.”

\[Insert: one-page project overview figure (architecture/team boundaries + milestone timeline).\]

---

## 2. Project scope and deliverables (P3)
### 2.1 Scope recap
\[One short paragraph summarising in-scope vs out-of-scope from LO1.\]

### 2.2 Deliverables
List the deliverables and what “done” means.

| Deliverable | Owner (role/team) | Done definition | Evidence |
|---|---|---|---|
| Integrated demonstrator | [Integrator] | [definition] | [video + logs] |
| Test plan + results | [QA lead] | [definition] | [PDF + data files] |
| Technical report | [Doc lead] | [definition] | [report PDF] |

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
- Epics = Subsystems (Firmware, Hardware I/O, UI/Connectivity, Mechanical/Enclosure, Integration/Test)
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
| MS-01 | ICD v1.0 frozen | Week [x] | Protocol + pinout published |
| MS-02 | Subsystem demos complete | Week [x] | Demo evidence recorded |
| MS-03 | Integration demo | Week [x] | End-to-end run shown |

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
### 6.1 Team roles
Define roles clearly.

| Role | Person | Responsibilities | Backup |
|---|---|---|---|
| Systems integrator | [name] | ICD, integration, interface conflicts | [name] |
| QA/test lead | [name] | test plan, results tables | [name] |
| Jira admin | [name] | workflows, fields, dashboards | [name] |

### 6.2 Communication plan
- Meeting cadence: [weekly]
- Stand-up format: [what is reported]
- Where decisions are recorded: [Jira Decision issues]
- How evidence is stored: [folder + naming]

---

## 7. Dependencies and interface control (M2 focus)
### 7.1 Dependency management approach
Explain how you will use Jira links:
- `blocks` / `is blocked by`
- why dependencies exist (protocol, pinout, mechanical dimensions)

### 7.2 Dependency map (required evidence)
\[Insert: screenshot of dependency view OR a table summary of key dependencies.\]

Suggested dependency table:

| Dependency | Blocks what? | Owned by | Needed by date | Risk if late | Mitigation |
|---|---|---|---|---|---|
| Serial protocol v1 | UI integration | Firmware | Week [x] | UI can’t test | Use stub generator |

### 7.3 ICD (interface control document) plan
State what your ICD includes:
- Pinout
- Signal levels
- Serial protocol messages
- Fault codes

\[Insert: ICD v1.0 screenshot/link (or a short excerpt as a figure).\]

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
- who approves (teacher + integrator)

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
Provide subsystem and system-level KPIs.

| KPI ID | KPI | Target | Measurement method | Frequency | Evidence output |
|---|---|---|---|---|---|
| KPI-01 | Fault response time | \[≤ 1000 ms\] | serial timestamps | per test | log file |
| KPI-02 | Brew cycle repeatability | \[± X s\] | timed trials (n≥5) | per build | results table |
| KPI-03 | UI response | \[≤ X ms\] | event-to-update timing | per test | log/screen recording |

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
