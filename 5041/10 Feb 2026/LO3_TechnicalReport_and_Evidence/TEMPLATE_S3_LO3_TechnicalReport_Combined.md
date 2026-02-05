# S3 — LO3 Technical Engineering Report (Combined Template)

\[Write in a report style. Replace all bracketed text like \[this\].\]

This document is designed to cover:
- **P4** Monitor project activities against the plan and record progress.
- **P5** Produce a coherent engineering project report covering all stages.
- **P6** Undertake planned activities to generate outcomes (tests/simulations/results).
- **M3** Analyse monitoring data and adjust activities where required.
- **M4** Present coherent, well-structured technical report with evidence traceability.
- **M5** Provide practical examples of resolving performance/structural issues.
- **D3** Critically analyse outcomes vs original plan/objectives and justify improvements.

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
Write 5–10 lines:
- What was built (system-level description)
- What success means (link to LO1 objectives / LO2 KPIs)
- What evidence is included (logs, videos, test tables, photos, Jira exports)

Suggested sentence starters:
- “This report documents the implementation and evaluation of an individual engineering project. It covers requirements, design, build/simulation, test/validation, and evaluation against predefined KPIs.”
- “Progress was monitored against the baseline plan using Jira, and changes were controlled through documented change and decision logs.”

\[Insert Figure 1: System block diagram/model diagram (show your system boundary and major modules).\]

---

## 2. Requirements and objectives recap
### 2.1 Aims and SMART objectives (from LO1)
\[Copy your aims + objectives and include objective IDs.\]

### 2.2 Evaluation criteria / KPIs (from LO2)
\[List KPIs with targets and measurement methods.\]

| KPI/OBJ ID | Target | Measurement method | Evidence produced |
|---|---|---|---|
| KPI-01 / OBJ-03 | \[≤ 1000 ms\] | \[serial timestamp diff\] | \[log file\] |

---

## 3. Design and architecture
### 3.1 System architecture
\[Describe architecture appropriate to your project (hardware or MATLAB model): modules/blocks, signals/units, safety/fault/edge-case handling.\]

\[Insert: architecture diagram.\]

### 3.2 Hardware design
Include:
- I/O list (final)
- driver stage approach (MOSFET/relay, flyback, fusing)
- wiring approach and safety decisions

\[Insert: wiring diagram/schematic and a labelled photo of the build.\]

### 3.3 Software design
Include:
- state machine diagram
- timing approach (non-blocking vs blocking)
- fault handling strategy
- logging strategy (timestamps, event IDs)

\[Insert: state machine diagram.\]

---

## 4. Implementation
### 4.1 Build process (what you actually did)
Write as numbered steps (minimum 10 steps):
1) \[step\]
2) \[step\]
...

### 4.2 Key implementation details
Describe the important technical choices with evidence-based language:
- why you chose your sensor approach
- why your driver stage is safe
- how you ensured GPIO limitations were respected

\[Insert: code structure diagram or module list.\]

### 4.3 Version control and configuration
- Tools/versions: \[MATLAB version/toolboxes OR embedded toolchain versions\]
- libraries/dependencies: \[list\]
- how runs/builds were reproducible: \[repo tag / zip release\]

---

## 5. Monitoring progress against the plan (P4 + M3)
### 5.1 Baseline plan summary
\[Summarise your LO2 baseline: milestones, key tasks, dates.\]

### 5.2 Planned vs actual (required table)

| Milestone / Task | Planned date | Actual date | Status | Variance | Root cause | Action taken |
|---|---|---|---|---|---|---|
| MS-01 Plan baseline frozen |  |  |  |  |  |  |

### 5.3 Monitoring evidence
\[Insert: screenshots of Jira dashboards / timeline / board showing progress.\]

### 5.4 Adjustments made (M3)
Write 2–4 paragraphs describing:
- what monitoring revealed (blocked work, late dependency, test failures)
- what you changed (re-sequencing tasks, using stubs/mocks, scope change)
- what evidence proves the change was controlled (Change/Decision issues)

---

## 6. Test plan and methods (P6)
### 6.1 Test strategy
Explain:
- unit testing (if any)
- module testing
- system/integration testing
- acceptance testing against KPIs

### 6.2 Test environment
- Power supplies used: \[details\]
- Instruments: \[multimeter/oscilloscope if used\]
- Safety controls: \[fuse, isolation, supervision\]

### 6.3 Test cases (required)
Create at least 10 test cases including faults.

| Test ID | Requirement/KPI | Test description | Input conditions | Procedure | Expected result | Pass/Fail |
|---|---|---|---|---|---|---|
| T-01 | KPI-01 | Fault response time | \[conditions\] | \[steps\] | \[≤ threshold\] |  |
| T-02 | OBJ-xx | End-to-end scenario | \[conditions\] | \[steps\] | \[expected outputs\] |  |
| T-03 | Safety | Output defaults off | \[conditions\] | \[steps\] | outputs OFF |  |

---

## 7. Results and discussion (P6 + M4)
### 7.1 Results tables
Report results with units and multiple trials where relevant.

| Test ID | Trial count (n) | Mean | Min | Max | Target | Pass/Fail | Evidence ref |
|---|---:|---:|---:|---:|---:|---|---|
| T-01 | 5 |  |  |  |  |  | \[log file name\] |

### 7.2 Discussion
Write 3–6 paragraphs:
- interpret results (what they mean)
- identify limitations (measurement error, simulation assumptions)
- compare to targets

\[Insert: graphs if you have timing or repeatability data.\]

---

## 8. Practical issue resolution (M5 — required)
Provide at least **two** real examples of solving issues. Each example must include evidence.

### 8.1 Issue example 1: \[title\]
- Symptom: \[what was observed\]
- Root cause analysis: \[why it happened\]
- Options considered: \[A/B\]
- Fix implemented: \[what you changed\]
- Before/after evidence: \[logs, scope capture, photos\]
- Impact on KPIs: \[which KPI improved\]

### 8.2 Issue example 2: \[title\]
\[Same structure as above.\]

---

## 9. Evaluation against objectives/KPIs (P5 + D3 support)
### 9.1 Compliance table (required)

| Objective/KPI | Target | Achieved | Meets? | Evidence ref | Notes/limitations |
|---|---:|---:|---|---|---|
| KPI-01 |  |  |  |  |  |

### 9.2 Trade-offs and remaining risks
Write 2–4 paragraphs:
- what trade-offs were made (safety vs features, speed vs robustness)
- what risks remain and how to mitigate them next

---

## 10. Critical analysis and justified improvements (D3 — required)
This section must be critical (not just descriptive).

Write 3–6 paragraphs addressing:
- outcomes vs original plan and why variances occurred
- what you would change if you restarted
- at least 3 justified improvements (technical + process)

Suggested structure:

### 10.1 Variance analysis
- Plan variance: \[what changed\]
- Root cause: \[why\]
- Evidence: \[Jira change, test logs\]

### 10.2 Improvement recommendations (minimum 3)
For each improvement:
- Improvement: \[what\]
- Justification: \[why it matters\]
- Expected KPI impact: \[which KPI and how\]
- Implementation effort: \[low/medium/high\]

---

## 11. Conclusion
Write 6–10 lines:
- what was achieved
- whether objectives/KPIs were met
- the strongest evidence items
- next steps

---

## Bibliography / references
\[List datasheets, policies, app notes, and any sources used for methods/analysis.\]

---

## Appendix A — Evidence index (required)
Use the evidence index template in `TEMPLATE_S3_LO3_EvidenceIndex.md` and paste it here or include as a separate appendix section.

## Appendix B — Change/decision log excerpts (recommended)
\[Insert key Jira Change/Decision screenshots or summaries.\]
