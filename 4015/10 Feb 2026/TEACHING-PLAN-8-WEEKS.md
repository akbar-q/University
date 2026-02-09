# Unit 4015: Automation, Robotics and Programmable Logic Controllers (PLCs) (Level 4, 15 credits)
## 8-Week Teaching Plan (2 classes per week, 4 hours per class)

This version is designed for **two 4-hour classes per week** over 8 weeks (**8 contact hours/week total**).

Key idea: Class time is for **teaching, modelling, guided practice, and evidence checks**. Most **practice/programming/write-up** time still happens **between weeks** and is logged as independent study.

---

## Delivery model for this cohort (guided practical + common brief)
This unit works best when all students follow a **common industrial-style brief** so the assessment evidence is comparable and the lab setup is manageable.

**Default common brief (recommended):**
- A small **automated cell** with:
  - a PLC controlling a simple process (start/stop, sensors, actuator sequence, interlocks)
  - **SCADA/HMI (required):** comms to an HMI/SCADA screen for monitoring and control
  - an industrial robot program performing a straightforward task (e.g., pick/place, palletise pattern, or toolpath)
  - safety features and safe working plan (risk assessment + control measures)

Students can implement using either:
- **Path A — Simulation-first:** OpenPLC + SCADA/HMI + robot simulation (recommended where hardware access is limited).
- **Path B — Lab hardware:** Controlino Mega PLC + SCADA/HMI + pick-and-place robot arm (only if the centre policy and supervision allow).

### Tooling for this cohort (confirmed)
This plan assumes the following environment is used across the cohort.

- **PLC environment:** OpenPLC Editor + OpenPLC Runtime
- **PLC hardware:** Controlino Mega PLC
- **IEC 61131-3 languages used:** Ladder Diagram (LD) and/or Structured Text (ST) (others optional if your OpenPLC setup supports them)
- **HMI/SCADA (mandatory):** Node-RED Dashboard (SCADA-style HMI)
- **PLC ↔ SCADA/HMI comms (mandatory):** USB serial protocol between Node-RED and the hardware PLC
- **Robot hardware:** pick-and-place robot arm (teach pendant or offline programming depending on platform)

Where comms standards are needed for evidence, evidence should reflect the actual link used (USB serial) and show reliable read/write behaviour.

### Safety scope (recommended default)
To keep sessions safe and repeatable:
- Use **extra-low voltage** where possible.
- Avoid mains-powered machinery unless your centre has explicit policy, supervision, and appropriate guarding.
- If a real robot is used: enforce **restricted mode**, safe speed, controlled access, and a clear stop procedure.

---

## Tutor split (LO ownership)
Teaching is split by Learning Outcome so each tutor owns two LOs end-to-end.

- **Miss Anu (Theory lead):** **LO1 + LO4**
  - LO1: PLC design/operational characteristics, I/O, comms, IEC 61131-3 languages, internal architecture
  - LO4: robot cell safety systems, safe operation analysis, safe working plan + full risk assessment

- **Mr Akbar (Technical lead):** **LO2 + LO3**
  - LO2: PLC program design + comms implementation (OpenPLC + Node-RED serial), testing/debugging, performance analysis
  - LO3: robot tools/sensors/end effectors + robot programming for a given task + improvements scope

---

## Assessment mapping (what gets produced when)
- **LO1 (P1, P2, P3, M1, D1) — Miss Anu:** Mainly Weeks 1–2 (PLC types, I/O, comms, languages, internal architecture analysis)
- **LO2 (P4, P5, M2, D2) — Mr Akbar:** Mainly Weeks 1–4 (setup + PLC program design/implementation + Node-RED comms + test/debug + performance analysis)
- **LO3 (P6, P7, M3, D3) — Mr Akbar:** Mainly Weeks 5–6 (robot tools/sensors/end effectors + robot program + improvements scope)
- **LO4 (P8, M4, D4) — Miss Anu:** Seed safety early, then mainly Weeks 5–8 (cell safety systems + safe operation analysis + safe working plan + full risk assessment)

---

## Standard weekly delivery pattern (2 × 4 hours)
Each week has two sessions.

- **Session 1 (4 hours) — Miss Anu (Theory):** LO1/LO4 teaching, modelling, and evidence clinic
- **Session 2 (4 hours) — Mr Akbar (Technical):** LO2/LO3 implementation, programming, and evidence clinic

Use a consistent in-session structure for both sessions:
- **Block A (0:00–0:40) – Teach & model:** new concepts + worked exemplar
- **Block B (0:40–1:40) – Guided build:** students apply the concept while you circulate
- **Break (1:40–1:50)**
- **Block C (1:50–2:50) – Evidence clinic:** check evidence quality against criteria and fix gaps
- **Block D (2:50–4:00) – Documentation + next actions:** tidy artefacts, screenshots, and set next-week tasks

---

## Core evidence pack (students maintain throughout)
Keep evidence lightweight but structured. The aim is that each LO has a clear evidence trail.

- **LO1 PLC Fundamentals Pack:** PLC types/configurations, I/O devices, comms links, IEC 61131-3 language comparison, internal architecture analysis
- **LO2 PLC Design & Implementation Pack:** allocation list, program design notes, comms configuration, test/debug record, performance notes/results
- **LO3 Robotics Pack:** robot program (with explanation), tool/sensor/end effector discussion, investigation and improvement recommendations
- **LO4 Safety Pack:** safety systems investigation, safe operation analysis, safe working plan, full risk assessment

Documentation control expectation (supports LO3 essential content):
- consistent filenames, version history, and storage location
- screenshots/data labelled with date and purpose

---

# Week 1 — Kick-off + LO1 foundations + technical environment setup

**Week goal:** students understand unit expectations, start LO1 evidence, and get the technical toolchain ready for LO2.

**Targets this week:** LO1 P1 started (Anu). LO2 setup started (Akbar).

## Session 1 (Miss Anu — LO1)
### Block A (0:00–0:40) – Teach & model
- Unit overview: learning outcomes and pass/merit/distinction in plain language
- Automation and Industry 4.0 context (what changes and why it matters)
- PLC system overview: controller + I/O + power + comms + programming device
- PLC types/configurations (P1): modular, unitary (compact), rack mounted + typical applications

### Block B (0:40–1:40) – Guided build
- Activity: **PLC selection mini-case**
  - given 2–3 scenarios (simple machine, small cell, multi-rack line)
  - choose a PLC configuration and justify selection

### Block C (1:50–2:50) – Evidence clinic
- P1 evidence quality check:
  - comparison table covers modular/unitary/rack with realistic pros/cons
  - applications are justified (why this PLC type fits the scenario)

### Block D (2:50–4:00) – Documentation + next actions
- Start LO1 Fundamentals Pack structure (headings + template)
- Set independent study tasks and show how to reference sources properly



## Session 2 (Mr Akbar — LO2)
### Block A (0:00–0:40) – Teach & model
- OpenPLC workflow overview (Editor → Runtime) and good practice for versioning/exports
- Node-RED overview for SCADA/HMI (dashboard concept + flows + serial nodes)
- USB serial basics: ports, baud, framing, why serial is used in industry

### Block B (0:40–1:40) – Guided build
- Activity: **Environment bring-up**
  - verify OpenPLC Editor is installed and can create a basic LD/ST project
  - verify Node-RED + Dashboard runs and a dashboard page can be opened
  - verify the lab PC can see the Controlino Mega as a COM port

### Block C (1:50–2:50) – Evidence clinic
- Required evidence captured:
  - OpenPLC project created (screenshot/export)
  - Node-RED dashboard visible (screenshot)
  - serial device visible (COM port evidence)

### Block D (2:50–4:00) – Documentation + next actions
- Create the LO2 pack structure (design pack + comms + test/debug log)
- Set expectations for what will count as P5 evidence later (serial read + serial write)



**Independent work (between Week 1 and Week 2):**
- LO1: gather manufacturer references/datasheets (minimum 3) and draft P1 narrative
- LO2: capture a short “toolchain checklist” page (what versions/settings were used)

---

# Week 2 — LO1 I/O + comms + languages + architecture, and LO2 requirements + I/O allocation

**Week goal:** students complete most LO1 evidence and begin LO2 design preparation.

**Targets this week:** LO1 P2/P3/M1/D1 progress (Anu). LO2 P4 started (Akbar).

## Session 1 (Miss Anu — LO1)
### Block A (0:00–0:40) – Teach & model
- Inputs/outputs (P2): digital vs analogue, voltage/current limits, interface requirements
- Communications (P3): serial vs Ethernet, network levels, and the centre’s USB serial PLC ↔ Node-RED link
- IEC 61131-3 languages (M1): LD/FBD/ST/SFC — strengths and typical use
- Internal architecture (D1): scan cycle, memory areas, I/O image table, CPU/comms modules

### Block B (0:40–1:40) – Guided build
- Activity: **I/O and comms mapping for the common brief**
  - create an I/O list (sensors/actuators) and label digital/analogue
  - write a short comms link description for the USB serial setup (purpose + constraints)

### Block C (1:50–2:50) – Evidence clinic
- P2/P3/M1 check:
  - I/O examples match realistic sensors/actuators
  - comms description includes why USB serial is suitable/limited
  - language comparison includes a scenario-based justification (why LD vs ST)
- D1 check:
  - architecture diagram + scan cycle explanation
  - explicit link to operational application (e.g., scan time vs response)

### Block D (2:50–4:00) – Documentation + next actions
- Show students how to present tables/diagrams cleanly for LO1
- Set LO1 completion tasks (pack ready by Week 3)



## Session 2 (Mr Akbar — LO2)
### Block A (0:00–0:40) – Teach & model
- Converting a functional requirement into an implementable PLC design pack
- Tagging conventions and building an I/O allocation list that matches OpenPLC variables

### Block B (0:40–1:40) – Guided build
- Activity: **LO2 design pack v1**
  - functional requirement statement
  - I/O allocation list with tags
  - sequence description (steps/interlocks)
  - identify timers/counters/latches needed

### Block C (1:50–2:50) – Evidence clinic
- P4 design pack review:
  - requirements are measurable and unambiguous
  - tags/names are consistent and match intended wiring/simulation
  - sequence has clear start/stop/reset behaviour

### Block D (2:50–4:00) – Documentation + next actions
- Lock the design pack baseline (v1) and define what can change later (with justification)
- Prepare students for Week 3 coding (starter project scaffold)



**Independent work (between Week 2 and Week 3):**
- LO1: complete the LO1 Fundamentals Pack draft
- LO2: refine the design pack so coding can start Week 3

---

# Week 3 — LO1 consolidation + LO4 safety seed, and LO2 PLC program build begins

**Week goal:** LO1 is consolidated and LO2 implementation starts with early testing.

**Targets this week:** LO1 completion/check (Anu). LO2 P4 build in progress (Akbar). LO4 safety introduced (Anu).

## Session 1 (Miss Anu — LO1 + LO4 seed)
### Block A (0:00–0:40) – Teach & model
- LO1 consolidation clinic: common weak spots and how to write D1 analysis clearly
- LO4 safety seed: policies/procedures, hazards, hierarchy of control, why safety is assessed in robotics cells

### Block B (0:40–1:40) – Guided build
- Activity: **D1 write-up improvement**
  - strengthen “architecture → operational application” links (scan time/memory/I-O update)
- Activity: **hazard spotting** (for your lab cell)
  - identify 5 plausible hazards and propose controls (not the full D4 yet)

### Block C (1:50–2:50) – Evidence clinic
- LO1 sign-off check:
  - P1–P3 complete
  - M1 language explanation is clear and justified
  - D1 analysis is written (not just diagram)
- LO4 starter check:
  - hazards list is realistic and control measures follow hierarchy of control

### Block D (2:50–4:00) – Documentation + next actions
- Set LO4 evidence capture expectations for later weeks (what photos/diagrams are allowed)
- Assign LO4 reading/tasks (centre policy + lab safety rules)



## Session 2 (Mr Akbar — LO2)
### Block A (0:00–0:40) – Teach & model
- PLC coding patterns in OpenPLC (LD/ST) for sequences and interlocks
- Timers/counters/latches: typical patterns and mistakes

### Block B (0:40–1:40) – Guided build
- Activity: **Implement PLC program v0.5**
  - implement core sequence + interlocks
  - implement at least one timer and one counter (if applicable)

### Block C (1:50–2:50) – Evidence clinic
- Run structured test steps:
  - expected vs actual behaviour for each step
  - capture at least one fault found and fixed (early M2 habit)

### Block D (2:50–4:00) – Documentation + next actions
- Update the test/debug log template (students fill as they go)
- Set Week 4 target: PLC ↔ Node-RED integration with read/write proof



**Independent work (between Week 3 and Week 4):**
- LO2: finish PLC program v1.0 ready to connect to Node-RED
- LO4: gather evidence on safety features present (photos/diagrams where permitted)

---

# Week 4 — LO2 completion: PLC + Node-RED SCADA/HMI + testing/debugging + performance analysis

**Week goal:** students complete a fully functional PLC solution for the given task, integrated with Node-RED SCADA/HMI over USB serial, with testing/debugging evidence and performance notes.

**Targets this week:** LO2 P4/P5/M2/D2 evidence completed (Akbar). Miss Anu uses her session for LO4 prep work.

## Session 1 (Miss Anu — LO4 prep)
### Block A (0:00–0:40) – Teach & model
- How to write a safety investigation (P8) vs a safety analysis (M4)
- Risk assessment structure students will use for D4 (hazards → controls → residual risk)

### Block B (0:40–1:40) – Guided build
- Activity: **Safety evidence planning**
  - identify what safety features exist in the cell and what evidence can be captured
  - draft the outline headings for LO4 Safety Pack

### Block C (1:50–2:50) – Evidence clinic
- Check each student has a clear LO4 evidence plan:
  - what will be investigated (P8)
  - what will be analysed (M4)
  - what the safe working plan must cover (D4)

### Block D (2:50–4:00) – Documentation + next actions
- Start LO4 Safety Pack document structure
- Set target: by Week 5 they must have P8 evidence captured



## Session 2 (Mr Akbar — LO2)
### Block A (0:00–0:40) – Teach & model
- Communication connections (P5): correct COM port settings, data format consistency, basic diagnostics
- Node-RED pattern: read status → dashboard; dashboard controls → write commands; timeouts/default states
- Testing/debugging methods (M2): systematic test cases and recording fixes
- Performance analysis (D2, Level 4): timing accuracy/response observations + HMI update responsiveness

### Block B (0:40–1:40) – Guided build
- Activity: **Integrate PLC ↔ Node-RED and complete the task**
  - implement or finalise sequence and interlocks
  - build required dashboard screens (minimum: status + basic control)
  - prove at least one read and one write from HMI to PLC

### Block C (1:50–2:50) – Evidence clinic
- Required evidence set:
  - working demo (live/sim)
  - Node-RED flow screenshot + dashboard screenshot(s)
  - test cases with results
  - at least 2 debug examples recorded
  - short performance notes

### Block D (2:50–4:00) – Documentation + next actions
- Write-up clinic: turn screenshots into a coherent D2 narrative (design choices + performance + limitations)
- Set expectations for LO2 completion pack format


**Independent work (between Week 4 and Week 5):**
- LO2: finish the LO2 pack write-up (P4/P5/M2/D2 narrative)
- LO3: read the robot manual/simulator basics and collect tool/sensor/end-effector notes

---

# Week 5 — LO3 robotics fundamentals + LO4 safety systems investigation begins

**Week goal:** students start LO3 robotics evidence with a working basic routine, and Miss Anu begins LO4 safety systems investigation.

**Targets this week:** LO3 P7 + start P6 (Akbar). LO4 P8 started (Anu).

## Session 1 (Miss Anu — LO4)
### Block A (0:00–0:40) – Teach & model
- Safety systems used within an industrial robotic cell (P8): guarding, interlocks, E-stops, light curtains (as applicable)
- Operating envelope and operational modes (teach/auto/manual/reduced speed)

### Block B (0:40–1:40) – Guided build
- Activity: **Safety system investigation**
  - identify safety features on the pick-and-place cell (or a case study if access is limited)
  - map each feature to the hazard it controls

### Block C (1:50–2:50) – Evidence clinic
- P8 evidence quality check:
  - safety systems are correctly named and described
  - each system is linked to a specific hazard

### Block D (2:50–4:00) – Documentation + next actions
- Build the LO4 P8 evidence section (figures + short explanations)
- Set target: P8 evidence complete by Week 6



## Session 2 (Mr Akbar — LO3)
### Block A (0:00–0:40) – Teach & model
- Types of robots + programming methods (teach pendant vs offline vs simulation)
- Tools/sensors/end effectors and applications (P7)

### Block B (0:40–1:40) – Guided build
- Activity: **Robot program v0.1**
  - create a simple routine for the given pick-and-place task
  - include at least one IO action where supported (e.g., gripper open/close)

### Block C (1:50–2:50) – Evidence clinic
- P7 check: tools/sensors/end effectors + correct applications
- P6 check: program runs in a safe mode and follows a sensible structure

### Block D (2:50–4:00) – Documentation + next actions
- Write-up clinic: explain the program structure and commands used (so it meets P6 evidence expectations)
- Set target: by Week 6 program runs end-to-end


**Independent work (between Week 5 and Week 6):**
- LO3: complete P7 write-up and refine robot program to run reliably
- LO4: continue collecting safety evidence and draft P8 text

---

# Week 6 — LO3 completion + LO4 safe operation analysis

**Week goal:** students complete a working robot program and improvements scope, and analyse how safety systems ensure safe operation.

**Targets this week:** LO3 P6/M3/D3 completed (Akbar). LO4 M4 started (Anu).

## Session 1 (Miss Anu — LO4)
### Block A (0:00–0:40) – Teach & model
- How systems ensure safe operation (M4): linking hazards → controls → operating modes → user interfaces

### Block B (0:40–1:40) – Guided build
- Activity: **M4 analysis writing workshop**
  - write 2–3 paragraphs analysing how the cell’s safety systems prevent/mitigate key hazards

### Block C (1:50–2:50) – Evidence clinic
- Improve M4 quality:
  - replace vague claims with hazard-specific analysis
  - reference P8 evidence explicitly

### Block D (2:50–4:00) – Documentation + next actions
- Start the D4 pack skeleton (safe working plan headings + risk assessment table)
- Set target: D4 draft ready by Week 7


## Session 2 (Mr Akbar — LO3)
### Block A (0:00–0:40) – Teach & model
- Key commands/functions (platform-specific): motion types, speed, zones/blending, frames, IO control
- Calibration/configuration basics (high-level): tool frame/work object concepts (as applicable)

### Block B (0:40–1:40) – Guided build
- Activity: **Robot program v1.0 + improvement options**
  - implement the full given task reliably
  - add at least 1 enhancement (e.g., reduced cycle time path, consistent approach/retreat)

### Block C (1:50–2:50) – Evidence clinic
- D3 readiness check:
  - capture end-to-end run evidence (video/screenshots)
  - write M3 investigation notes + improvement recommendations
  - illustrate “next complexity” scope (what extra sensors/logic would be needed)

### Block D (2:50–4:00) – Documentation + next actions
- Write-up clinic: turn the demo into D3 evidence + improvements scope
- Set target: LO3 pack completed by Week 7


**Independent work (between Week 6 and Week 7):**
- LO3: finalise the robotics pack (evidence, screenshots, write-up)
- LO4: draft D4 plan structure and start the risk assessment table

---

# Week 7 — LO4 D4 drafting + technical evidence tidy

**Week goal:** students draft the safe working plan and full risk assessment structure (D4), and tidy LO2/LO3 evidence readiness.

**Targets this week:** LO4 D4 drafting (Anu). LO2/LO3 evidence tidy (Akbar).

## Session 1 (Miss Anu — LO4)
### Block A (0:00–0:40) – Teach & model
- D4 expectations: safe working plan + full risk assessment for a production process
- Covering the full lifecycle in hazards: setup/teach/run/maintenance

### Block B (0:40–1:40) – Guided build
- Activity: **Write D4 draft v1**
  - safe working plan (method statement style)
  - risk assessment table (initial risk → controls → residual risk)

### Block C (1:50–2:50) – Evidence clinic
- D4 draft review:
  - hazards are realistic and cover the full process
  - control measures follow hierarchy of control
  - residual risk is plausible and explained

### Block D (2:50–4:00) – Documentation + next actions
- Improve the safe working plan so it is implementable (steps + stop conditions + emergency actions)
- Set target: final D4 sign-off next week


## Session 2 (Mr Akbar — LO2/LO3 tidy)
### Block A (0:00–0:40) – Teach & model
- What “submission-ready evidence” looks like for LO2 and LO3 (screenshots, exports, labelled figures)

### Block B (0:40–1:40) – Guided build
- Activity: **Evidence tidy sprint**
  - LO2: ensure Node-RED flow + dashboard + serial read/write proof are captured
  - LO2: ensure test cases + debug examples + performance notes are written up
  - LO3: ensure robot program evidence + investigation + improvements scope are complete

### Block C (1:50–2:50) – Evidence clinic
- Checklist sign-off:
  - LO2 includes P5 comms evidence + M2 debug evidence + D2 performance notes
  - LO3 includes P6 program evidence + M3 investigation + D3 improvements scope

### Block D (2:50–4:00) – Documentation + next actions
- Fix referencing/labels so every screenshot is explained and traceable
- Set final Week 8 demo schedule (who demonstrates what)


**Independent work (between Week 7 and Week 8):**
- LO4: refine D4 with clearer controls and residual risk justification
- LO2/LO3: final formatting and referencing of screenshots/exports

---

# Week 8 — LO4 D4 completion + final technical demonstrations

**Week goal:** students complete D4 to a high standard and complete any final technical demonstrations/evidence gaps.

**Targets this week:** LO4 D4 completed (Anu). LO2/LO3 final demonstrations (Akbar).

## Session 1 (Miss Anu — LO4)
### Block A (0:00–0:40) – Teach & model
- Final D4 quality bar:
  - hazards cover full lifecycle
  - controls follow hierarchy (eliminate/substitute/engineer/admin/PPE)
  - residual risk is justified
  - verification checks are realistic

### Block B (0:40–1:40) – Guided build
- Activity: **Complete D4 pack**
  - finalise safe working plan and risk assessment

### Block C (1:50–2:50) – Evidence clinic
- D4 sign-off checklist:
  - safe working plan is step-by-step and includes stop conditions
  - risk assessment has initial vs residual risk
  - control measures are specific (not generic)

### Block D (2:50–4:00) – Documentation + next actions
- Final formatting and referencing for LO4 submission
- Confirm what evidence is being submitted and where



## Session 2 (Mr Akbar — LO2/LO3)
### Block A (0:00–0:40) – Teach & model
- Demo discipline: what to show for LO2 vs LO3, and how to narrate evidence clearly

### Block B (0:40–1:40) – Guided build
- Activity: **Final demonstrations and evidence capture (round 1)**
  - LO2: PLC + Node-RED SCADA/HMI demo with read/write proof
  - LO3: robot program demo + improvements scope recap

### Block C (1:50–2:50) – Evidence clinic
- Gap closing:
  - capture missing screenshots/videos/logs
  - fix any unclear or unlabelled evidence

### Block D (2:50–4:00) – Documentation + next actions
- Submission-ready packaging: naming consistency, figure references, and completeness check

---

## Weekly progress tracking (lightweight)
- Every week: each tutor signs off evidence items for their LOs
- Between sessions: at least one improvement pass on evidence packs (fix quality, add diagrams, add references)

---

## Evidence checklist aligned to assessment criteria

### LO1
- **P1:** PLC types/configurations and typical applications
- **P2:** types of PLC input/output devices
- **P3:** communication links used with PLCs
- **M1:** explanation of IEC 61131-3 programming languages
- **D1:** analysis of internal PLC architecture linked to operational applications

### LO2
- **P4:** key elements considered in preparation of a PLC program (requirements, signals, I/O allocation, logic elements)
- **P5:** communication connections used correctly with PLC (setup + justification + basic diagnostics)
- **M2:** systematic testing and debugging methods applied and evidenced
- **D2:** fully functional PLC design for the given task, with performance analysis

### LO3
- **P6:** robot program using a selection of commands to perform the given task
- **P7:** tools/sensors/end effectors explained with applications
- **M3:** investigation of a given robotic system with recommendations for improvement
- **D3:** fully working robotic program for the task, with illustrated scope for more complex tasks

### LO4
- **P8:** investigation of safety systems used within an industrial robotic cell
- **M4:** analysis of how systems ensure safe operation
- **D4:** safe working plan for a given production process including full risk assessment

---

## Assumptions to confirm (so the plan matches your centre constraints)
If any of these are different, tell me and I will adjust the lab/simulation approach in Weeks 3–8.

- **Node-RED setup:** confirm Node-RED + Dashboard is available on lab PCs.
- **Serial settings/protocol:** baud rate + framing and the message format you want students to use (simple ASCII commands vs structured frames).
- **Safety policy constraints:** any restrictions on live IO forcing, guarding access, teach mode usage, or power limits?
