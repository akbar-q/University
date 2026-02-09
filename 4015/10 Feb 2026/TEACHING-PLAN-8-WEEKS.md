# Unit 4015: Automation, Robotics and Programmable Logic Controllers (PLCs) (Level 4, 15 credits)
## 8-Week Teaching Plan (1 teaching day per week, 4 hours per week)

This version is designed for **one 4-hour session per week** over 8 weeks.

Key idea: the 4-hour weekly session is for **teaching, modelling, guided practice, and evidence checks**. Most **practice/programming/write-up** time happens **between weeks** and is logged as independent study.

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

## Assessment mapping (what gets produced when)
- **LO1 (P1, P2, P3, M1, D1):** Mainly Weeks 1–2 (PLC types, I/O, comms, languages, internal architecture analysis)
- **LO2 (P4, P5, M2, D2):** Mainly Weeks 3–4 (PLC program design + comms use + test/debug + performance analysis)
- **LO3 (P6, P7, M3, D3):** Mainly Weeks 5–6 (robot tools/sensors/end effectors + robot program + improvements scope)
- **LO4 (P8, M4, D4):** Mainly Weeks 6–8 (cell safety systems + safe operation analysis + safe working plan + full risk assessment)

---

## Standard weekly session template (4 hours)
Use this same structure every week to keep students on track:

- **Block A (0:00–0:40) – Teach & model:** new concepts + worked exemplar
- **Block B (0:40–1:40) – Guided build:** students apply the concept to the common brief while you circulate
- **Break (1:40–1:50)**
- **Block C (1:50–2:50) – Evidence clinic:** you check evidence quality against the criteria and give targeted corrections
- **Block D (2:50–4:00) – Documentation + next actions:** tidy artefacts, screenshots, versioning, and next-week tasks

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

# Week 1 — Unit launch + automation context + PLC types and applications (LO1: P1)

**Week goal:** students understand unit expectations and can describe PLC configurations and typical applications.

**Targets this week:** LO1 P1 evidence started.

### Teach (Block A, 0:00–0:40)
- Unit overview: learning outcomes and pass/merit/distinction in plain language
- Automation and Industry 4.0 context (what changes and why it matters)
- PLC system overview: controller + I/O + power + comms + programming device
- PLC types/configurations:
  - modular, unitary (compact), rack mounted
  - typical applications, constraints, and selection factors

### Guided build (Block B, 0:40–1:40)
- Activity: **PLC selection mini-case**
  - given 2–3 scenarios (simple machine, small cell, multi-rack line)
  - choose a PLC configuration and justify selection

### Evidence clinic (Block C, 1:50–2:50)
- Check each student has:
  - a comparison table covering PLC types/configurations
  - at least 3 application examples with justification

### Documentation + next actions (Block D, 2:50–4:00)
- Start the LO1 Fundamentals Pack structure (headings + template)
- Independent work set:
  - gather manufacturer references/datasheets (minimum 3)
  - draft P1 narrative (PLC types/configurations + applications)

---

# Week 2 — PLC I/O devices + comms links + programming languages + internal architecture (LO1: P2, P3, M1, D1)

**Week goal:** students can classify I/O, describe comms links, explain IEC 61131-3 languages, and analyse internal PLC architecture.

**Targets this week:** LO1 P2/P3/M1/D1 evidence.

### Teach (Block A, 0:00–0:40)
- Inputs/outputs:
  - digital vs analogue, sourcing/sinking concepts (as appropriate)
  - voltage/current limits and practical constraints
  - interface requirements and signal conditioning (high-level, Level 4 appropriate)
- Communications:
  - serial links (RS-232/RS-422/RS-485) vs Ethernet
  - supervisory/cell/field network levels
  - example industrial protocols (e.g., PROFINET, EtherNet/IP)
  - Centre context for this cohort: **USB serial** PLC ↔ Node-RED SCADA/HMI link
- IEC 61131-3 language overview:
  - when LD/FBD/ST/SFC are typically used
- Internal architecture (for D1):
  - scan cycle basics, memory areas, I/O image table, CPU and comms modules

### Guided build (Block B, 0:40–1:40)
- Activity: **I/O and comms mapping for the common brief**
  - create an I/O list (sensors/actuators) and label digital/analogue
  - choose a comms link between PLC and HMI/SCADA/simulator and justify

### Evidence clinic (Block C, 1:50–2:50)
- Check for:
  - P2: I/O device types with examples
  - P3: comms links described with purpose and constraints
  - M1: a clear comparison of IEC 61131-3 languages
  - D1: internal architecture analysis linked to operational application (speed, scan time, memory, I/O update behaviour)

### Documentation + next actions (Block D, 2:50–4:00)
- Independent work set:
  - complete LO1 Fundamentals Pack draft
  - create 1 internal architecture diagram and a scan-cycle explanation

---

# Week 3 — PLC program preparation: requirements, allocation lists, number systems, logic elements (LO2: P4 start)

**Week goal:** students can design key preparation elements before coding and can justify them.

**Targets this week:** LO2 P4 evidence started.

### Teach (Block A, 0:00–0:40)
- Translating a functional requirement into PLC program structure
- Signal types and tagging conventions
- Number systems used in PLC contexts (binary/hex basics) and why they appear
- Allocation lists:
  - mapping inputs/outputs and naming consistently
- Logic building blocks:
  - AND/OR/XOR concepts
  - timers, counters, latches (core use cases)

### Guided build (Block B, 0:40–1:40)
- Activity: **Design pack v1 for the common brief**
  - functional requirement statement
  - I/O allocation list with tags
  - sequence description (steps/interlocks)
  - initial logic elements required (timers/counters/latches)

### Evidence clinic (Block C, 1:50–2:50)
- Check P4 coverage:
  - requirements captured clearly
  - allocation list is complete and consistent
  - logic elements chosen are appropriate and justified

### Documentation + next actions (Block D, 2:50–4:00)
- Independent work set:
  - refine the design pack based on feedback
  - prepare to implement the PLC program next week

---

# Week 4 — PLC implementation + comms connections + testing/debugging + performance notes (LO2: P4, P5, M2, D2)

**Week goal:** students implement a working PLC program for the given task, use comms correctly, and produce a defensible test/debug record and basic performance analysis.

**Targets this week:** LO2 P4/P5/M2/D2 evidence.

### Teach (Block A, 0:00–0:40)
- Communication connections (P5):
  - what “correctly used” means (addressing, device setup, basic diagnostics)
  - common failure modes (wrong IP/subnet, mismatch tags, wrong device, wrong driver)
- HMI/SCADA as a required deliverable:
  - minimum expected screens (Level 4): status + basic control
  - confirming read/write behaviour (a control action changes PLC state; PLC state is shown correctly)
- Node-RED implementation pattern (minimum):
  - a flow that reads PLC status from serial and updates dashboard widgets
  - dashboard controls that write commands back to the PLC via serial
  - basic comms robustness: timeouts/default states if serial data is missing
- Testing/debugging methods (M2):
  - systematic test approach (test cases, expected vs actual)
  - online monitoring/forcing (policy-dependent), trace tools, watch tables
  - fault finding workflow and recording evidence
- Performance analysis for D2 (Level 4 appropriate):
  - scan time awareness (where visible)
  - response time observations, timing accuracy for sequences

### Guided build (Block B, 0:40–1:40)
- Activity: **Build PLC program v1 and connect SCADA/HMI**
  - implement sequence and interlocks
  - implement at least 1 timer and 1 counter (if applicable)
  - implement start/stop, E-stop/safety input behaviour (simulated if necessary)
  - build the required SCADA/HMI page(s):
    - live status indicators (minimum: a few key inputs/outputs)
    - basic controls (minimum: start/stop/reset or mode select, as appropriate)
  - integrate Node-RED over USB serial:
    - prove the serial link works (connect, correct port settings)
    - prove a command from HMI changes PLC behaviour

### Evidence clinic (Block C, 1:50–2:50)
- Students must show:
  - a working demonstration (live or simulated)
  - SCADA/HMI evidence (Node-RED):
    - dashboard screenshot(s)
    - Node-RED flow screenshot
    - PLC ↔ HMI comms working with at least one read and one write demonstrated (USB serial)
  - test cases executed with results (pass/fail)
  - at least 2 debug examples (what went wrong, how it was found, how it was fixed)
  - brief performance notes (timing, response, stability, and HMI update responsiveness where observable)

### Documentation + next actions (Block D, 2:50–4:00)
- Independent work set:
  - finish LO2 pack: final program screenshots/export + test/debug log
  - write D2 narrative: design choices + performance observations + limitations

---

# Week 5 — Industrial robotics fundamentals + tools/sensors/end effectors + basic robot commands (LO3: P7, P6 start)

**Week goal:** students can explain tools/sensors/end effectors and begin a robot program using straightforward commands.

**Targets this week:** LO3 P7 evidence + start P6.

### Teach (Block A, 0:00–0:40)
- Types of robots (articulated, SCARA, cartesian, collaborative; match what you have)
- Robot tools and end effectors:
  - grippers, vacuum, tooling, tool frames (conceptual)
- Sensors and applications:
  - proximity, vision (high-level), force/torque (high-level)
- Programming methods:
  - teach pendant vs offline programming vs simulation
- Safety note (preview LO4): operating envelope, modes, and why risk assessment matters

### Guided build (Block B, 0:40–1:40)
- Activity: **Robot program v0.1**
  - create a simple motion routine for a given task (e.g., move between points + open/close gripper)
  - introduce at least one IO action (e.g., gripper command) where supported

### Evidence clinic (Block C, 1:50–2:50)
- Check:
  - P7: tools/sensors/end effectors explained with appropriate applications
  - P6 progress: program structure exists and can run in simulation/training mode

### Documentation + next actions (Block D, 2:50–4:00)
- Independent work set:
  - complete P7 write-up
  - add 1 safety/robustness behaviour to the robot routine (e.g., home position, speed limit, safe start)

---

# Week 6 — Working robot program + investigate a robotic system + improvements (LO3: P6, M3, D3) + start LO4

**Week goal:** students produce a fully working robot program for a given task, investigate the system, and propose realistic improvements.

**Targets this week:** LO3 P6/M3/D3 evidence + LO4 started.

### Teach (Block A, 0:00–0:40)
- Key commands/functions (platform-specific):
  - motion types (joint/linear), speed, zones/blending, frames, IO control
- Calibration/configuration basics (high-level):
  - tool frame/work object concepts (as applicable)
- What makes D3 “distinction”: working program + illustrated scope for more complex tasks
- Start LO4: safety systems and operating modes (preview)

### Guided build (Block B, 0:40–1:40)
- Activity: **Robot program v1.0 + improvement options**
  - implement the full given task reliably
  - add at least 1 enhancement (e.g., reduced cycle time path, consistent approach/retreat, error handling pattern if available)

### Evidence clinic (Block C, 1:50–2:50)
- Students must show:
  - program runs end-to-end for the given task (video or live demo)
  - M3: short investigation of the system (layout, tools, sensors, constraints) with improvement recommendations
  - D3: an illustrated “next complexity” plan (what would be needed for more complex tasks and why)

### Documentation + next actions (Block D, 2:50–4:00)
- Independent work set:
  - finish LO3 pack (program evidence + investigation + improvements scope)
  - start LO4 safety evidence collection (cell safety features and hazards)

---

# Week 7 — Robot cell safety systems + safe operation analysis (LO4: P8, M4)

**Week goal:** students can investigate safety systems and analyse how they ensure safe operation for a given cell.

**Targets this week:** LO4 P8/M4 evidence.

### Teach (Block A, 0:00–0:40)
- Safety foundations:
  - policies/procedures/regulations (centre-specific)
  - hazards and risk concepts (severity/likelihood, hierarchy of control)
- Cell safety features:
  - guarding, interlocks, E-stops, light curtains (as applicable)
  - operating envelope and safe zones
  - operational modes (teach, auto, manual/reduced speed)
- User interfaces: how mode selection and access control reduce risk

### Guided build (Block B, 0:40–1:40)
- Activity: **Safety system investigation for a given cell**
  - use your real cell/trainer or a case-study/simulator cell
  - identify safety features and explain what hazard each controls

### Evidence clinic (Block C, 1:50–2:50)
- Check:
  - P8: safety systems investigated with evidence (photos/screenshots/diagrams)
  - M4: analysis of how safety systems ensure safe operation (not just listing)

### Documentation + next actions (Block D, 2:50–4:00)
- Independent work set:
  - write LO4 P8/M4 sections
  - draft a risk assessment structure ready for Week 8

---

# Week 8 — Safe working plan + full risk assessment for a robot cell in a production process (LO4: D4)

**Week goal:** students produce a safe working plan for a given production process, including a full risk assessment and control measures.

**Targets this week:** LO4 D4 evidence completed.

### Teach (Block A, 0:00–0:25)
- What “safe working plan” means in practice:
  - defined task, boundaries, and roles
  - step-by-step method statement
  - emergency procedures and stop conditions
  - evidence that risk controls are implemented and checked

### Guided build (Block B, 0:25–1:55)
- Activity: **Write and complete D4 pack**
  - safe working plan for the given production process
  - full risk assessment:
    - hazards, who is at risk, initial risk rating
    - control measures (engineering + administrative + PPE where relevant)
    - residual risk rating
    - verification checks (how you confirm controls are in place)

### Evidence clinic (Block C, 2:05–3:05)
- D4 quality check:
  - hazards are realistic and cover the full lifecycle (setup, teach, run, maintenance)
  - controls follow hierarchy (eliminate/substitute/engineer/admin/PPE)
  - plan is implementable in your centre context

### Documentation + next actions (Block D, 3:05–4:00)
- Final tidy:
  - ensure LO1–LO4 packs are complete
  - ensure screenshots/exports are labelled and referenced

---

## Weekly progress tracking (lightweight)
- Every week in-session: evidence clinic sign-off items
- Every week between sessions: at least one improvement pass on the evidence packs (fix quality, add diagrams, add references)

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
