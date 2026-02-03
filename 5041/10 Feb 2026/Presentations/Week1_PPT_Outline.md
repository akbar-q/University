# Week 1 Presentation Outline — Unit 5041
## Coffee Machine Controller (ESP32) — Project Launch, Team Split, Architecture

Session length: **4 hours** (recommended split: 40m teach, 60m guided build, 10m break, 60m evidence clinic, 70m Jira/logbook).

Audience assumption: students have basic programming/electronics, but may not have done a full engineering project with dependencies.

---

## Slide 1 — Title
**On-slide:**
- Unit 5041: Engineering Project
- Week 1: Project launch + architecture + team responsibilities
- Project: ESP32 “coffee machine controller” demonstrator

**Speaker notes (2–3 min):**
- Set the tone: this unit is about *delivery* (spec → plan → build/test → evaluate → communicate).
- Emphasize: this is not just coding; it’s engineering evidence.

---

## Slide 2 — What you will achieve by end of Week 8
**On-slide:**
- Integrated demonstrator running on ESP32
- State machine + sensors + actuators + UI
- Fault handling + logged evidence
- Technical report + presentation + PD + reflection

**Speaker notes (4–5 min):**
- Explain the system-level behaviours expected.
- Reinforce: “demo that works once” is not enough; we need repeatable tests + documented results.

---

## Slide 3 — Unit structure: Learning Outcomes (LO1–LO4)
**On-slide:**
- LO1: propose project (ethics/regulation)
- LO2: plan using PM software/tools
- LO3: implement plan + technical report
- LO4: present + reflect

**Speaker notes (5–7 min):**
- Translate into student language:
  - LO1 = justification and safe/legal/ethical framing
  - LO2 = planning discipline in Jira + evaluation criteria
  - LO3 = doing the work + showing it with evidence + report
  - LO4 = communicating + improving yourself

---

## Slide 4 — Pass/Merit/Distinction: what changes?
**On-slide:**
- Pass: do the required artefacts
- Merit: do them comprehensively + consistently
- Distinction: show impact of ethics/legislation/risk + critical analysis + measurable evaluation criteria

**Speaker notes (6–8 min):**
- Give examples:
  - Pass LO2: “we have tasks”
  - Merit LO2: “tasks have owners, estimates, dependencies, updates”
  - Distinction LO2: “evaluation criteria/KPIs defined and used; change control; evidence of decisions”

---

## Slide 5 — Professional engineering reality: integration is the #1 risk
**On-slide:**
- Parallel teams → dependencies
- Dependencies create schedule risk
- Interface contracts reduce rework

**Speaker notes (5 min):**
- Use a simple story: “UI team can’t finish until firmware messages are defined.”
- Introduce the Interface Control Document (ICD) concept now.

---

## Slide 6 — Project scenario (what we’re building)
**On-slide:**
- Coffee-machine-like controller, not necessarily drinkable coffee
- Focus: embedded control + safe design + testing
- ESP32 + optional 3D-printed enclosure

- Toolchain (standardised): Arduino IDE + Arduino-ESP32 core

**Speaker notes (5–6 min):**
- Be explicit: if centre policy prohibits liquids/heat/mains → we simulate.
- Explain why simulation is valid engineering: you can validate behaviour without hazard.

---

## Slide 7 — Minimum Viable Product (MVP) behaviours
**On-slide:**
- States: Idle → Ready → Brewing → Complete → Fault
- UI: Start/Stop + profile select
- Sensors: water level + temperature input
- Outputs: pump/valve control (or simulated)
- Faults: 3+ with safe shutdown + reason

**Speaker notes (8–10 min):**
- Define *what counts* as each behaviour.
- “Fault reason” must be actionable (“Refill tank and reset”), not vague.
- Logging requirement: state transitions must be visible in serial logs.

---

## Slide 8 — Systems engineering view: requirements vs design
**On-slide:**
- Requirement = what the system must do
- Design decision = how we implement it
- Tests verify requirements

**Speaker notes (6–8 min):**
- Example:
  - Requirement: “Fault on low water within 1 second”
  - Design: “Float switch on GPIO with pull-up; sampled every 100 ms; debounce 50 ms”
  - Test: “simulate switch open during Brewing and measure response time”

---

## Slide 9 — Embedded architecture (reference model)
**On-slide:**
- Inputs → state machine → outputs
- Drivers/HAL isolate hardware details
- UI/Comms publish commands + telemetry
- Logging for evidence

**Speaker notes (8–10 min):**
- Show how good architecture supports team work:
  - Team B can change hardware; Team A only updates HAL.
  - Team C can build UI using the message spec.

---

## Slide 9A — Arduino IDE + ESP32: what you must standardise now
**On-slide:**
- Arduino IDE version (pick one) + board package
- Board profile (ESP32 Dev Module or specific board)
- Serial settings (baud rate, line endings)
- Library policy (which libs allowed, version pinning)

**Speaker notes (8–10 min):**
- Explain why standardisation matters for integration:
  - “Works on my laptop” problems kill schedule.
- Recommend a cohort baseline:
  - Arduino IDE 2.x (stable)
  - ESP32 board package by Espressif (Arduino-ESP32)
  - Serial baud: 115200
  - Line endings: Newline
- If you will use Wi‑Fi later, tell them now (or say “serial-only”).

---

## Slide 9B — Arduino IDE + ESP32: step-by-step setup checklist (demo slide)
**On-slide:**
1) Install Arduino IDE 2.x
2) Add ESP32 boards URL in Preferences
3) Install “esp32 by Espressif Systems” in Boards Manager
4) Select board + COM port
5) Upload a known-good Serial test

**Speaker notes (10–15 min):**
- Walk them through the exact clicks (do live):
  - File → Preferences → Additional boards manager URLs
  - Tools → Board → Boards Manager → search “esp32” → install Espressif
  - Tools → Board → ESP32 Arduino → choose “ESP32 Dev Module” (or your exact board)
  - Tools → Port → pick COM
  - Run example: a minimal sketch that prints “BOOT OK” every second.
- Common failure triage:
  - Wrong port selected
  - Bad cable (charge-only)
  - Driver issues
  - Boot mode needed for some boards

---

## Slide 9C — ESP32 GPIO and pin naming (avoid integration mistakes)
**On-slide:**
- ESP32 uses GPIO numbers (e.g., GPIO25)
- Board silkscreen labels can be misleading
- Some pins are input-only / strapping pins
- Document pin choices in the ICD

**Speaker notes (8–10 min):**
- Tell them: “ICD pin map must use GPIO numbers, not ‘D1’ style names.”
- Warn about common gotchas:
  - strapping pins affecting boot
  - input-only pins (varies by module)
  - using GPIOs reserved by flash/PSRAM on some modules
- The action is not memorising: it’s documenting and validating.

---

## Slide 10 — State machine: a practical definition
**On-slide:**
- States: Idle, Ready, Brewing, Complete, Fault
- Events: Start, Stop, Timeout, LowWater, OverTemp, Done
- Transitions must be deterministic

**Speaker notes (10–12 min):**
- Define:
  - State: stable mode of operation
  - Event: trigger that causes transition
  - Guard: condition required to transition
- Stress: “no spaghetti if/else”; draw the diagram.

---

## Slide 11 — Fault handling: safe shutdown and clear reason
**On-slide:**
- Fault detection must stop unsafe outputs
- Log: fault ID + timestamp + context
- UI must show reason + user action

**Speaker notes (8–10 min):**
- Give examples of fault IDs:
  - F01: Low water
  - F02: Overtemp
  - F03: Sensor disconnected
- Explain “fail-safe” in low-voltage context.

---

## Slide 11A — Logging standard (so evidence is consistent across teams)
**On-slide:**
- All logs include: timestamp, state, event, key values
- One log line per transition
- Use a consistent format for parsing

**Speaker notes (8–10 min):**
- Give a concrete recommended format (say it out loud so everyone copies it):
  - `T=123456ms STATE=BREWING EVENT=LOW_WATER WLEVEL=0 TEMP=45.2 FAULT=F01`
- Explain: this supports LO3 evidence and makes UI team integration easier.

---

## Slide 12 — Safety scope (lab policy aligned)
**On-slide:**
- Prefer extra-low voltage only
- Simulate heater if needed
- Containment for liquids if used
- Risk register is mandatory

**Speaker notes (5–7 min):**
- Tie to LO1 D1: safety/legislation shapes design decisions.

---

## Slide 13 — Team model options (2–4 teams)
**On-slide:**
- Team A: Firmware & Control
- Team B: Hardware I/O
- Team C: UI/Connectivity
- Team D: Mechanical/3D print

**Speaker notes (5–7 min):**
- If fewer teams, explain merges.
- Assign a Systems Integrator role.

---

## Slide 14 — Interface Control Document (ICD): what it is
**On-slide:**
- Electrical contract: pins, voltages, connectors
- Software contract: commands, telemetry, message formats
- Behaviour contract: state machine + faults

**Speaker notes (8–10 min):**
- “If it’s not in the ICD, it doesn’t exist.”
- The ICD is how we avoid integration chaos.

---

## Slide 14A — ICD software protocol (recommended baseline: serial text frames)
**On-slide:**
- Transport: USB serial (115200 8N1)
- Frames: one command per line
- Key-value messages for telemetry
- Explicit error/fault codes

**Speaker notes (10–12 min):**
- Recommend a simple protocol so Team C can start immediately.
- Example commands (UI → ESP32):
  - `CMD START PROFILE=ESPRESSO`
  - `CMD STOP`
  - `CMD RESET_FAULT`
- Example telemetry (ESP32 → UI):
  - `TEL STATE=READY TEMP=43.2 WLEVEL=1`
  - `TEL STATE=FAULT FAULT=F01 MSG=LOW_WATER`
- Note: Later they can evolve to JSON/Wi‑Fi, but serial is the baseline.

---

## Slide 15 — Jira as your PM tool (why Jira, not just WhatsApp)
**On-slide:**
- Backlog = all work, visible
- Dependencies = explicit
- Evidence = attached to tasks
- Status reports = weekly truth

**Speaker notes (8–10 min):**
- Explain the audit trail: teachers/markers can see planning + execution.

---

## Slide 16 — Jira: required issue types
**On-slide:**
- Task, Bug
- Risk
- Change
- Decision
- Status Report

**Speaker notes (6–8 min):**
- Define each quickly.
- Emphasize: “Decision” issues are gold for distinction evidence.

---

## Slide 17 — Jira: dependencies and what “blocked” means
**On-slide:**
- Use `blocks / is blocked by`
- Blocked tasks must have a named dependency
- Blockers must have an owner + due date

**Speaker notes (6–8 min):**
- Give an example dependency chain:
  - UI task blocked by message format
  - Message format blocked by state machine definition

---

## Slide 18 — Evidence discipline (what to capture every week)
**On-slide:**
- Logbook entry (individual)
- Status report (team)
- Updated risk register
- Evidence attachments (photos/logs/data)

**Speaker notes (8–10 min):**
- Teach “evidence or it didn’t happen”.
- Distinction evidence comes from: traceability + justification.

---

## Slide 19 — In-class Activity 1: Draft system requirements (whole class)
**On-slide:**
- Write 10 functional requirements
- Write 6 non-functional requirements
- Convert 3 into measurable tests

**Speaker notes (activity, 25–30 min):**
- Functional examples:
  - “System shall enter Fault state within 1 s of LowWater during Brewing.”
- Non-functional examples:
  - “UI shall display fault reason within 1 s.”
  - “All operation shall remain under 12 V DC.”
- Insist on measurable wording.

---

## Slide 20 — In-class Activity 2: Team boundary + dependency map
**On-slide:**
- Choose subsystem boundaries
- Define inputs/outputs
- Identify 5 dependencies

**Speaker notes (activity, 25–30 min):**
- Each team draws a boundary diagram.
- Write dependency statements:
  - “Team C blocked by Team A command spec by date X.”

---

## Slide 21 — In-class Activity 3: Create ICD v0.1 (per team)
**On-slide:**
- Draft pinout assumptions
- Draft message formats
- Draft fault list

**Speaker notes (activity, 25–30 min):**
- Encourage “rough but explicit”.
- No perfection; just avoid ambiguity.

---

## Slide 22 — In-class Activity 4: Create Jira project skeleton
**On-slide:**
- Create Epics
- Create initial tasks
- Create 1 Decision + 3 Risks

**Speaker notes (activity, 25–30 min):**
- Ensure each team has an Epic.
- Add at least one dependency link before leaving.

---

## Slide 23 — Week 1 evidence checklist (what must exist today)
**On-slide:**
- Team list + roles
- System architecture sketch
- ICD v0.1 draft
- Jira project created + Epics
- Risk register started

**Speaker notes (5 min):**
- Explain you will check these in the evidence clinic.

---

## Slide 24 — Between now and Week 2 (homework / independent work)
**On-slide:**
- Research (5 sources per team)
- Draft subsystem background
- Draft standards/ethics/risk impacts
- Update ICD to v0.2

**Speaker notes (5 min):**
- Link to LO1: this work becomes proposal + feasibility evidence.

---

## Slide 25 — Resources (point students here)
**On-slide:**
- Espressif ESP32 docs
- Arduino-ESP32 docs (this cohort uses Arduino IDE)
- Jira official docs (issues, workflows, dependencies)
- Risk assessment templates (centre)

**Speaker notes (3–4 min):**
- If your centre standardises toolchain, state it here.

**Resource pointers (include as slide notes or handout):**
- Espressif Documentation portal (ESP32, ESP-IDF)
- Arduino-ESP32 core docs (Board Manager package by Espressif)
- Arduino IDE 2.x documentation (Boards Manager, Library Manager, Serial Monitor)
- Jira Software documentation: issues, workflows, boards, dependencies
- General: IEC/ISO/BS standards relevant to low-voltage electronics (use centre library access)

---

## Slide 26 — Close
**On-slide:**
- Today: define architecture + teams + Jira skeleton
- Next week: LO1 proposal + feasibility + ethics/risk

**Speaker notes (2 min):**
- Remind: bring evidence next week; no evidence = no marks.
