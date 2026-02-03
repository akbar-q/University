# Week 2 Presentation Outline — Unit 5041
## LO1 Proposal Pack: SMART objectives, feasibility, ethics/legislation/risk (D1 focus)

Session length: **4 hours**.

Main outcome: by end of this session, teams have a near-complete **LO1 submission pack**: proposal brief + aims/objectives + feasibility + legislation/ethics/risk impacts + risk register v1.

---

## Slide 1 — Title
**On-slide:**
- Week 2: LO1 proposal + feasibility + ethics/risk
- Project: ESP32 coffee machine controller

**Speaker notes (2 min):**
- Frame it: today is where you turn ideas into an assessable engineering proposal.

---

## Slide 2 — What LO1 is really asking you to prove
**On-slide:**
- You can define a project properly
- You can justify it (research + feasibility)
- You can design responsibly (standards, ethics, risk)

**Speaker notes (5–6 min):**
- Connect to the criteria:
  - P1 = brief aligned to regulatory/ethical frameworks
  - P2 = aims/objectives
  - M1 = feasibility study justification
  - D1 = effects of legislation/ethics/risk on your proposal

---

## Slide 3 — What is a “project brief” (P1) and what is NOT
**On-slide:**
- Brief includes: problem, user need, solution concept, impact
- Not: a vague topic area or shopping list of parts

**Speaker notes (6–8 min):**
- Provide a good vs bad example.
- Emphasise: the brief must be understandable to a technically literate audience.

---

## Slide 4 — Background/research: primary vs secondary
**On-slide:**
- Secondary: papers, datasheets, standards, manuals
- Primary: interviews, lab measurements, observations
- You must cite sources

**Speaker notes (8–10 min):**
- For embedded projects:
  - datasheets count as strong technical sources
  - app notes and reference designs are valuable
  - lab measurements (current draw, sensor noise) are strong primary evidence

---

## Slide 5 — Stakeholders and user needs
**On-slide:**
- Who uses it? who maintains it?
- What does “safe” and “usable” mean here?

**Speaker notes (6–8 min):**
- Introduce a simple stakeholder matrix:
  - user, technician, supervisor, assessor
- Connect to requirements that are testable.

---

## Slide 6 — Aims vs objectives (P2) — technical definition
**On-slide:**
- Aim = what you want to achieve (high level)
- Objective = how you will achieve it (measurable steps)

**Speaker notes (8–10 min):**
- Give coffee-machine specific examples:
  - Aim: “Design and validate an ESP32-based appliance controller with safe fault handling.”
  - Objective: “Detect low-water condition and enter Fault state within 1 second, verified by test logs.”

Add one Arduino-specific evidence cue:
- Objective evidence example: “Serial logs captured from Arduino IDE Serial Monitor showing timestamps and state transitions.”

---

## Slide 7 — SMART objectives: making them measurable
**On-slide:**
- Specific, Measurable, Achievable, Relevant, Time-bound
- Must imply a test

**Speaker notes (10–12 min):**
- Show 3 rewrites from weak to strong:
  - Weak: “Have a UI.”
  - Strong: “UI shall display state changes within 500 ms of event, verified by timestamped logs.”
- Explain: measurable thresholds are what enable D2/D3 later.

---

## Slide 8 — Deliverables vs activities (common confusion)
**On-slide:**
- Deliverable = output you can hand over
- Activity = work you do to create deliverables

**Speaker notes (6–8 min):**
- Deliverable examples:
  - integrated demo
  - technical report
  - test plan + results
- Activity examples:
  - wire sensor
  - implement debounce
  - run 10 trials

---

## Slide 9 — Feasibility study (M1): what you must justify
**On-slide:**
- Technical feasibility
- Schedule feasibility
- Cost/resource feasibility
- Operational feasibility (lab constraints)
- Integration feasibility (multi-team)

**Speaker notes (10–12 min):**
- Explain: feasibility is a *structured argument*.
- Integration feasibility: stubs/mocks + ICD + change control.

---

## Slide 10 — Feasibility: technical (ESP32 toolchain + hardware access)
**On-slide:**
- Toolchain (standard): Arduino IDE + Arduino-ESP32
- Hardware availability (ESP32 boards, sensors, actuators)
- Skills and training plan

**Speaker notes (8–10 min):**

- State the cohort standard: Arduino IDE.
- What must be feasible by Week 4:
  - everyone can compile and upload a sketch
  - everyone can capture serial logs as evidence
  - at least one sensor read and one actuator output works (or is simulated)
- Feasibility risks to discuss:
  - library conflicts / version mismatch
  - unreliable wiring / breadboard issues
  - Wi‑Fi restrictions (if using web UI)
  - unstable power supply causing resets

---

## Slide 10A — Arduino library management (avoiding integration failure)
**On-slide:**
- Use Library Manager where possible
- Document library names + versions in the report
- Avoid “random GitHub zip” unless justified

**Speaker notes (8–10 min):**
- Explain the real problem: different library versions produce different behaviour.
- Simple rule for students:
  - if you use a library, record: name, version, why chosen
  - if a library is unstable, you must justify switching and log it as a Change in Jira

---

## Slide 11 — Feasibility: schedule (8 weeks, 1 day taught)
**On-slide:**
- Integration milestones are mandatory
- Freeze interfaces early (ICD v1.0)
- Time buffers for debugging

**Speaker notes (8–10 min):**
- Teach a realistic schedule rule:
  - integration takes longer than expected
  - allocate explicit “integration days” between weeks

---

## Slide 12 — Feasibility: cost/resources
**On-slide:**
- BOM estimate + contingency
- 3D printing time + failures
- Lab access constraints

**Speaker notes (6–8 min):**
- Show BOM example categories:
  - sensors, drivers, power, wiring/connectors, fasteners, filament

---

## Slide 13 — Compliance, ethics, and legislation (D1)
**On-slide:**
- Identify what applies
- Explain how it changes your design
- Show evidence of risk control

**Speaker notes (10–12 min):**
- Keep it practical:
  - electrical safety: low-voltage only, current limiting, isolation
  - water + electronics: containment, separation, no exposed conductors
  - data/privacy (if Wi‑Fi): avoid collecting personal data; secure credentials

Add Arduino/ESP32-specific D1 examples:
- Disabling unused peripherals and documenting power draw to reduce overheating risk
- Using GPIO-safe drive (transistor/driver) rather than powering loads directly from GPIO pins

---

## Slide 14 — Risk assessment: how to do it properly
**On-slide:**
- Hazard → harm → likelihood/severity → mitigation → residual risk
- Update as project evolves

**Speaker notes (10–12 min):**
- Use 2 concrete hazards and fill a risk register row live:
  - spilled water shorting electronics
  - exposed moving part pinching fingers
- Emphasise residual risk.

---

## Slide 15 — Risk register v1: minimum required hazards (starter list)
**On-slide:**
- Water near electronics
- Overcurrent/overheating
- Sharp edges / 3D print failures
- Loose wiring / strain relief
- Unexpected actuator motion

**Speaker notes (6–8 min):**
- Explain: students must add their own project-specific hazards.

---

## Slide 16 — Selection criteria and justification (closing LO1 logically)
**On-slide:**
- Time constraints
- Risk evaluation
- Cost
- Skills + materials availability
- User need fit

**Speaker notes (6–8 min):**
- Even though the overall project is fixed, teams must justify subsystem scope decisions.

---

## Slide 17 — ICD update: v0.2 → v1.0 (what to freeze)
**On-slide:**
- Pinout baseline
- Message formats baseline
- Fault IDs baseline

**Speaker notes (6–8 min):**
- Explain change control:
  - after freezing, any change needs a Jira Change issue + impact analysis.

Add a concrete serial protocol freeze example:
- Freeze at least these commands:
  - `CMD START PROFILE=<name>`
  - `CMD STOP`
  - `CMD RESET_FAULT`
- Freeze at least these telemetry fields:
  - `STATE`, `TEMP`, `WLEVEL`, `FAULT`

---

## Slide 18 — In-class Activity 1: write the P1 brief (team)
**On-slide:**
- 200–300 words
- include problem, solution concept, impact
- cite 2 sources

**Speaker notes (activity, 20–25 min):**
- Walk around and enforce specificity.

---

## Slide 19 — In-class Activity 2: aims + 8 SMART objectives
**On-slide:**
- 1–2 aims
- 8 objectives (measurable thresholds)
- map each objective to a test method

**Speaker notes (activity, 25–30 min):**
- Require at least:
  - 2 objectives about fault handling
  - 2 about timing/performance
  - 2 about sensors/actuation
  - 2 about usability/integration

---

## Slide 20 — In-class Activity 3: feasibility table + integration feasibility
**On-slide:**
- technical, schedule, cost, operational
- include integration risk + mitigation

**Speaker notes (activity, 25–30 min):**
- Push them to be honest about skills gaps and plan training.

---

## Slide 21 — In-class Activity 4: risk register v1
**On-slide:**
- minimum 8 hazards
- mitigations must be actionable
- assign owner

**Speaker notes (activity, 25–30 min):**
- Ensure “owner” is named.

---

## Slide 22 — Evidence clinic: LO1 submission readiness checklist
**On-slide:**
- brief complete
- objectives measurable
- feasibility justified
- D1 narrative: design impacted by risk/ethics
- risk register v1 complete

**Speaker notes (10–15 min):**
- Do rapid reviews and force fixes.

---

## Slide 23 — Between Week 2 and Week 3 (prep for LO2)
**On-slide:**
- convert objectives → backlog tasks
- define evaluation criteria/KPIs
- prepare Jira plan baseline

**Speaker notes (5 min):**
- Explain: next week is pure planning and evaluation criteria.

---

## Slide 24 — Resources
**On-slide:**
- ESP32 docs (Espressif)
- Sensor/actuator datasheets
- Jira planning docs
- Centre risk assessment templates

**Speaker notes (3–4 min):**
- Point them to datasheet sections they must use: absolute max ratings, typical circuits, timing.

**Resource pointers:**
- Espressif ESP-IDF Programming Guide
- Arduino-ESP32 documentation (Board package by Espressif)
- Arduino IDE 2.x docs (Library Manager, Serial Monitor)
- Jira Software docs (dependencies, dashboards)
- Manufacturer datasheets for selected sensors/actuators

---

## Slide 25 — Close
**On-slide:**
- LO1 evidence must be ready
- Next: LO2 plan in Jira + evaluation criteria

**Speaker notes (2 min):**
- Remind: LO1 is the foundation; poor objectives = weak tests later.
