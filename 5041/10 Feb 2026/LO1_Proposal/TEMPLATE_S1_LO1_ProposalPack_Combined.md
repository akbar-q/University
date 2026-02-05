# S1 — LO1 Proposal Pack (Combined Template)

\[Write in a report style. Replace all bracketed text like \[this\].\]

This single document is designed to cover:
- **P1** Project brief aligned to regulatory/ethical frameworks
- **P2** Aims and objectives
- **M1** Feasibility study (justified)
- **D1** Effects of legislation, ethics and risk illustrated

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
Write 3–6 lines explaining what this proposal pack is trying to achieve:
- What is being proposed? (your individual project)
- Why is it needed? (the problem/need it addresses)
- What evidence will be used? (sources, diagrams, feasibility justification, risk register)

Suggested sentence starters:
- “This proposal pack defines an individual engineering project, including the project aims/objectives, feasibility justification, and the legislation/ethical/risk factors that shaped the design decisions.”
- “The proposal is justified using datasheet evidence, a requirements capture, a feasibility study, and a risk register with mitigations and residual risk.”

\[Insert: system overview diagram showing boundaries: sensors, ESP32, drivers, power supplies, UI, enclosure.\]

---

## 2. Project brief and background (P1)
### 2.1 Problem statement
\[1–3 sentences. Describe the engineering problem, not the topic.\]

### 2.2 Proposed solution (high level)
\[1 short paragraph: state machine + sensing + actuation + UI + fault handling.\]

### 2.3 Stakeholders and user needs
\[Define user/maintainer/assessor and what they need.\]

| Stakeholder | Need | Why it matters | How you’ll test/verify |
|---|---|---|---|
| User | \[e.g., start brew easily\] | \[reason\] | \[UI test\] |
| Maintainer | \[e.g., clear fault reason\] | \[reason\] | \[fault test\] |

### 2.4 Existing research / technical review
\[Summarise what you learned from sources: datasheets, app notes, guidance, similar systems.\]

Minimum expectation:
- At least 5 credible sources per student (datasheets count)

---

## 3. System description (recommended)
### 3.1 Process narrative (write as steps)
Write the full cycle as numbered steps (minimum 10 steps). Be specific.

Example structure (edit for your design):
1) User presses START.
2) Controller checks safe conditions (e.g., E-stop healthy, water OK).
3) Controller enters Ready.
4) User selects brew option (if applicable).
5) Controller enters Brewing.
6) Pump/valve output energises via driver stage.
7) Sensor sampling continues (water/temperature/flow simulated or real).
8) On completion condition (time/volume), controller de-energises outputs.
9) Controller enters Complete and notifies user.
10) If any fault occurs (low water, overcurrent, sensor fault), controller enters Fault and outputs go OFF.
11) RESET clears fault only when safe conditions are true.

### 3.2 State diagram / flow chart (required)
\[Insert state machine diagram: IDLE → READY → BREWING → COMPLETE, plus FAULT branches and RESET conditions.\]

---

## 4. Aims and objectives (P2)
### 4.1 Aims
\[List 1–2 aims.\]

### 4.2 SMART objectives (6–10)
Each objective must be measurable and include a threshold.

Use this structure for each objective:
- Objective ID: OBJ-XX
- Statement: \[SMART statement\]
- Measurement method: \[serial log, test harness, data capture\]
- Pass criteria: \[threshold\]

\[Insert: objectives table if preferred.\]

---

## 5. Scope, deliverables and constraints (P1)
### 5.1 In-scope / out-of-scope
**In scope:**
- \[list\]

**Out of scope (explicitly):**
- \[list — e.g., mains heater control, food-safe plumbing\]

### 5.2 Deliverables
\[List what will be delivered and what “done” means.\]

### 5.3 Constraints
\[Time, lab access, safety policy, hardware availability, skills.\]

---

## 6. Feasibility study (M1)
### 6.1 Feasibility summary (required)
Cover:
- Technical feasibility
- Schedule feasibility
- Cost/resource feasibility
- Operational feasibility
- Integration feasibility

Suggested table:

| Area | Status (Green/Amber/Red) | Evidence | Main risk | Mitigation |
|---|---|---|---|---|
| Technical | \[G/A/R\] | \[hardware + prior tests\] | \[risk\] | \[mitigation\] |
| Schedule | \[G/A/R\] | \[milestones\] | \[risk\] | \[mitigation\] |
| Cost/resources | \[G/A/R\] | \[BOM estimate\] | \[risk\] | \[mitigation\] |
| Operational | \[G/A/R\] | \[lab access/policy\] | \[risk\] | \[mitigation\] |
| Integration/test | \[G/A/R\] | \[interface definition + test harness plan\] | \[risk\] | \[mitigation\] |

### 6.2 Bill of materials (high level)

| Item | Quantity | Cost estimate | Notes |
|---|---:|---:|---|
| ESP32 dev board |  |  |  |
| Sensor(s) |  |  |  |
| Actuator driver |  |  |  |

### 6.3 Integration feasibility (required)
Write ~300–600 words explaining:
- what modules/interfaces you will define clearly (e.g., pin map, data formats, units)
- what dependencies may block you (parts lead time, tool access, learning prerequisites)
- how end-to-end behaviour will be proven (integration checklist + acceptance tests)

---

## 7. Compliance, ethics, legislation & risk (D1)
### 7.1 System context and assumptions
\[State key safety constraints: ELV only, liquid/heat policy, Wi‑Fi policy, supervised demo.\]

### 7.2 Regulatory, standards and policy basics
List what applies:
- Centre/lab policies: \[PPE, safe isolation, no mains, liquids rules, supervision\]
- Manufacturer documentation: \[ESP32 board, driver board, pump/solenoid, sensors\]

### 7.3 Requirements capture table (required)

| Item (policy/standard/datasheet) | Why it is relevant | What requirement it implies | Design decision | Evidence you will include |
|---|---|---|---|---|
| \[Centre policy: no mains\] | \[why\] | \[ELV only\] | \[12 V + 5 V only\] | \[photo + wiring diagram\] |
| \[ESP32 GPIO limits\] | \[why\] | \[no direct load drive\] | \[MOSFET/relay driver\] | \[schematic + datasheet cite\] |

### 7.4 Ethical considerations
\[Short paragraphs or bullets: harm prevention, honesty in results, safe demonstration practice.\]

### 7.5 Risk method + risk matrix
- Method: \[Likelihood × Severity\]
- Scales: \[L 1–5, S 1–5\]
- Score: \[R = L × S\]

\[Insert: risk matrix figure/table.\]

### 7.6 Risk register v1 (required)
Create at least **8 hazards**.

| Risk ID | Hazard | Harm | L | S | Initial risk | Mitigation/control | Residual risk | Owner | Evidence |
|---|---|---|---:|---:|---:|---|---:|---|---|
| R-01 | \[e.g., spill near electronics\] | \[short\] |  |  |  |  |  |  |  |

### 7.7 Illustrate effects on design (D1 — required)
Minimum expectation: **5 effects**.

Use this structure:

#### Effect X: \[title\]
- Rule/concern/risk: \[what is it?\]
- Engineering impact: \[what it forced you to do\]
- Trade-off: \[time/cost/complexity vs safety/quality\]
- Evidence: \[datasheet cite, photo, diagram, test log\]

Suggested effect topics:
- ELV-only policy → no mains heater control → heater simulated
- GPIO limitations → driver stage + separate load supply
- Inductive loads → flyback + fusing + wiring choices
- Liquid hazard → enclosure separation/drip control OR full sensor simulation
- Controlled restart requirement → reset logic only when safe

---

## 8. Summary
\[6–10 lines summarising aims, feasibility status, top risks, and the biggest D1 effects.\]

---

## Bibliography / references
\[List all sources cited (policies, datasheets, guidance).\]
