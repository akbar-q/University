# Unit 5041 (Level 5) — Deliverables & Submission Map

This document defines **exactly what to submit**, **in what format**, and **which Learning Outcome (LO) and criteria** each deliverable supports.

Design principle used here (matches your preference):
- **Primary rule:** avoid mixing multiple LOs into one document.
- **Allowed:** one LO can have **multiple submission types** (e.g., document + Jira export + evidence pack).
- This pack is written for **individual projects** (each student has their own project idea), but informal peer support is fine as long as **all submitted evidence is individually produced**.

---

## Submission overview (recommended split)

| Submission ID | Primary LO | Submission type | Individual | Why this split works |
|---|---|---|---|---|
| S1 | LO1 | Proposal pack (document) + compliance/ethics/risk section | Yes | Keeps LO1 clean: proposal/feasibility/legislation-risk in one place |
| S2 | LO2 | Project management plan report + Jira plan exports | Yes | LO2 is “planning in PM software”; Jira evidence is essential |
| S3 | LO3 | Technical engineering report + implementation evidence pack + logbook | Yes | LO3 requires execution evidence + a full technical report |
| S4 | LO4 | Individual presentation + feedback record | Yes | P7 is explicitly presentation + feedback (it can be delivered individually) |
| S5 | LO4 | Professional Discussion (PD) + individual reflection + action plan | Individual | Cleanly assesses P8/M6/D4 via oral + reflection |

---

## Required folder structure (students)
Students submit a single zipped folder per student:

```
5041_<Cohort>_<StudentID>_SubmissionPack.zip
  S1_LO1_Proposal/
  S2_LO2_ProjectManagementPlan/
  S3_LO3_TechnicalReport_and_Evidence/
  S4_LO4_Presentation_and_Feedback/
  S5_LO4_PD_and_Reflection/
  Shared_Evidence/  (optional: datasheets, standards extracts, generic references)
```

> If your centre prefers one combined submission, keep the same internal folders but package once.

---

# S1 — LO1 Proposal Pack (P1, P2, M1, D1)

## Purpose
To propose an **individual engineering project** (hardware-based or MATLAB simulation) in line with **engineering regulatory and ethical frameworks**, including feasibility, aims/objectives, and the effects of legislation/ethics/risk.

## What to submit
### Individual submission
- `S1_LO1_ProposalPack_<StudentID>.pdf` (or `.docx`) — includes proposal + feasibility + compliance/ethics/risk

\[If your centre requires the appendix as a separate file\]
Export the same document as two files by splitting the “Compliance/ethics/risk” section into a separate appendix document at submission time.

### Minimum contents checklist
**Main proposal document (P1 + P2):**
- Project brief (problem, solution, impact)
- Background and research summary (primary/secondary research evidence)
- Stakeholders/user needs
- Project aims (1–2) and SMART objectives (6–10)
- Deliverables and constraints

**Feasibility study (M1):**
- Technical feasibility (tools, skills, hardware availability)
- Schedule feasibility (time estimate, integration risk)
- Cost/resource feasibility (BOM estimate + contingency)
- Operational feasibility (lab constraints, safety constraints)

**Legislation/ethics/risk (D1):**
- Identify relevant legislation/standards/ethical expectations
- Illustrate how these directly affected design choices
  - e.g., low voltage only, simulated heater, containment for water, isolation of moving parts
- Risk register v1 (hazards, likelihood/severity, mitigations, residual risk)

### Individual requirement (to protect individual grading)
- (Optional but recommended) `S1_LO1_IndividualContribution_<StudentID>.pdf`
  - what you researched/decided
  - one key trade-off you chose (with justification)

---

# S2 — LO2 Project Management Plan (P3, M2, D2)

## Purpose
To demonstrate use of **project management software, tools, techniques** (Jira) to create a comprehensive plan with evaluation criteria.

## What to submit
### Individual submission
- `S2_LO2_ProjectManagementPlan_<StudentID>.pdf` (or `.docx`)
- `S2_LO2_Jira_Exports/`
  - board screenshots, backlog export, dependency view screenshots
  - weekly sprint configuration screenshots (if used)
  - dashboard/report screenshots (status summaries)
- `S2_LO2_EvaluationCriteria` (included inside the plan document as the KPI section/table, or exported separately as `.pdf` if your centre prefers)

### Minimum contents checklist
**Project plan (P3):**
- Lifecycle stages (initiation → planning → execution → close)
- WBS/backlog with tasks and ownership
- Milestones and timeline (Gantt if used, otherwise Jira timeline screenshots)
- Roles and responsibilities (you as project owner; any external stakeholders/users)
- Risk plan (how risks are tracked/updated)

**Comprehensive Jira usage (M2):**
- Dependencies (`blocks/is blocked by`) used meaningfully (e.g., hardware lead times, waiting on parts, learning prerequisites, tool availability)
- Change control process (baseline + change issues)
- Regular updates regime (weekly status reports)

**Evaluation criteria (D2):**
- Explicit, measurable KPIs at:
  - module/subsystem level (e.g., sensor sampling rate, estimator stability margin, controller rise time)
  - overall system level (e.g., fault response time, end-to-end response time, simulation-vs-measurement fit)
- Decision matrix/AHP/HES matrix used for at least one major decision

### Individual requirement
- `S2_LO2_IndividualJiraEvidence_<StudentID>.pdf`
  - screenshots of tasks you owned
  - comments/attachments proving work + progress tracking

---

# S3 — LO3 Technical Engineering Report + Evidence (P4, P5, P6, M3, M4, M5, D3)

## Purpose
To show the project was implemented (or simulated), monitored against the plan, and documented in a structured technical engineering report with critical analysis and improvement recommendations.

## What to submit
### Individual submission
- `S3_LO3_TechnicalEngineeringReport_<StudentID>.pdf` (or `.docx`)
  - includes test plan, results tables, evidence index (appendix) where possible
- `S3_LO3_EvidencePack/`
  - photos of hardware
  - videos of demos
  - serial logs
  - test data files
  - CAD/STLs (if applicable)
  - schematics/wiring diagrams
  - source code archive (or repo link + tagged release)

### Minimum contents checklist
**Implementation + progress tracking (P4/M3):**
- What was built/simulated each week
- Comparison against baseline plan (what changed and why)
- Weekly status reports referenced

**Coherent report (P5/M4):**
- All stages covered: requirements → planning → implementation → test → evaluation → closure
- Clear structure with figures/tables and evidence traceability
- Justified outcomes (not just claims)

**Planned activities generating outcomes (P6):**
- Tests/simulations executed as planned
- Results recorded with units and pass/fail against acceptance criteria

**Practical examples for issues (M5):**
- Show at least 2 examples of solving performance/structural issues
  - e.g., debouncing strategy comparison, sensor filtering options, actuator switching issues, enclosure redesign

**Critical analysis and improvements (D3):**
- Analyse outcomes vs original plan and objectives
- Explain variances (root cause, trade-offs)
- Provide justified recommendations for further improvement

### Individual requirement (non-negotiable)
- `S3_LO3_Logbook_<StudentID>.pdf` (weekly project diary)
  - what you did, evidence links, reflections on skills, changes, blockers

---

# S4 — LO4 Individual Presentation + Feedback (P7)

## Purpose
To present the integrated engineering project to a technically literate audience and conduct a feedback session.

## What to submit (individual)
- `S4_LO4_PresentationSlides_<StudentID>.pdf` (and/or `.pptx`)
- `S4_LO4_DemoVideo.mp4` (recommended)
- `S4_LO4_FeedbackRecord_<StudentID>.pdf`
  - who attended, what they said, Q&A notes

\[Template support\]
Use the slide-by-slide outline in `LO4_Presentation_and_PD/TEMPLATE_S4_LO4_Presentation_PPT_Outline.md`.

### Minimum contents checklist
- Architecture (your system/modules)
- Live demo (or recorded demo)
- At least 1 system/integration test shown (hardware or MATLAB)
- At least 1 fault response shown
- Q&A captured and summarised

---

# S5 — LO4 Professional Discussion (PD) + Reflection + Action Plan (P8, M6, D4)

## Purpose
To individually reflect on outcomes and evaluate end-to-end delivery, including how third-party feedback is addressed.

## What to submit (individual)
- `S5_LO4_PD_Notes_<StudentID>.pdf`
  - your prep notes (not a script), plus a summary of questions asked and your responses
- `S5_LO4_Reflection_and_ActionPlan_<StudentID>.pdf`
  - reflective model used (e.g., Gibbs/Kolb/5R)
  - critical evaluation of performance
  - action plan responding to feedback (specific actions + timelines)

\[Examiner + student support\]
- Question sets for a 10–15 minute PD are in `LO4_Presentation_and_PD/LO4_PD_QuestionBank_10-15min_ExaminerSheet.md`.
- Sample Q&A with critical answers is in `LO4_Presentation_and_PD/TEMPLATE_S5_LO4_PD_SampleQnA_WithCriticalAnswers.md`.

### Minimum PD coverage (suggested question bank)
- What did you deliver personally and what evidence supports it?
- Which risk had the biggest impact and how did you mitigate it?
- What would you change in the plan if you started again?
- Evidence of engineering judgement (trade-offs, standards, safety)
- How did you use Jira to manage progress and change?

---

## Submission timing (typical for an 8-week delivery)
- **End of Week 2:** S1 (LO1)
- **End of Week 3:** S2 (LO2)
- **End of Week 7:** S3 draft ready for final edits
- **Week 8:** S4 (presentation) + S5 (PD + reflection)

---

## Quick criteria-to-deliverable map
- **LO1 (P1, P2, M1, D1)** → S1
- **LO2 (P3, M2, D2)** → S2
- **LO3 (P4–P6, M3–M5, D3)** → S3
- **LO4 (P7)** → S4
- **LO4 (P8, M6, D4)** → S5
