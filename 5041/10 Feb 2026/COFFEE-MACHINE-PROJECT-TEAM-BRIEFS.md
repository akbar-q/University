# Unit 5041 – Embedded Coffee Machine Project (ESP32)
## Multi-team brief (2–4 teams, parallel development with dependencies)

This project is intentionally structured to simulate professional engineering delivery: **parallel teams**, **dependencies**, **interface contracts**, **integration milestones**, and **evidence-first engineering**.

---

## 1) Project scenario (what you are building)
Build an **ESP32-based “coffee machine controller” demonstrator**.

The demonstrator does not need to produce drinkable coffee. The emphasis is on:
- **embedded control** (state machine, sensing, actuation, fault handling)
- **safe engineering practice** (risk assessment, low-voltage design)
- **integration** (teams dependent on each other, managed in Jira)
- **verification/validation** (test plans and measured outcomes)

### Minimum viable integrated behaviours (baseline)
The integrated system must demonstrate:
1. **State machine**: `Idle → Ready → Brewing → Complete → Fault`
2. **UI**: Start/Stop + at least 1 selectable “drink profile” (e.g., Espresso vs Long)
3. **Sensing**: Water level + temperature input (real or simulated)
4. **Actuation**: Pump/valve output (real or simulated load)
5. **Fault handling** (minimum 3 faults): safe shutdown + clear reason shown/logged
6. **Logging**: serial log showing state transitions, key sensor values, and fault reasons

### Safety constraint (default)
Unless your supervisor approves otherwise:
- Use **extra-low voltage** only.
- If liquids are used, implement containment (drip tray) and treat “heater” as simulated.

---

## 2) Teams and parallel work model
You will be split into **2–4 teams**. Each team owns a subsystem but must deliver a working integrated system.

### If the class has 4 teams (recommended)
- **Team A – Firmware & Control (ESP32 Core)**
- **Team B – Hardware I/O & Sensors/Actuators**
- **Team C – UI/UX & Connectivity**
- **Team D – Mechanical/Enclosure (3D printing) & Human Factors**

### If the class has 3 teams
- Combine Team C + Team D (UI + Mechanical)

### If the class has 2 teams
- **Team 1:** Firmware + Hardware
- **Team 2:** UI + Mechanical + Integration management

### System Integration ownership
Regardless of team count:
- Nominate 1 “**Systems Integrator**” per team.
- One person (or a small subgroup) maintains the **Interface Control Document (ICD)** and controls changes.

---

## 3) How Jira must be used (non-negotiable)
Your Jira usage is assessed indirectly via evidence quality (LO2/LO3).

### Required Jira artefacts
- **Epics**: Proposal & Compliance, Planning, (one Epic per Team), Integration & Test, Technical Report, Presentation
- **Issue types** (minimum): Task, Bug, Risk, Change, Decision, Status Report
- **Dependencies**: use `blocks / is blocked by` for cross-team work
- **Weekly “Status Report” issue**: plan vs actual, blockers, risks, changes, next week actions
- **Change control**: any interface change after ICD v1.0 requires a “Change” issue with justification

### Required evidence attachments
- screenshots/exports of:
  - backlog and board
  - dependency links
  - burndown/status summaries
  - weekly status reports

---

## 4) Shared Interface Control Document (ICD) – minimum contents
The ICD is the contract between teams.

### Electrical interface (minimum)
- ESP32 pin assignments (GPIO map)
- voltage levels and protection assumptions
- connectors/wiring plan
- power budget (rough)

### Software interface (minimum)
Pick ONE approach and standardise it:
- **Option 1: Serial protocol** (recommended for simplicity)
  - message frames + checksum (optional) + rate
- **Option 2: Wi‑Fi + HTTP/WebSocket**
  - endpoints/events + payload formats

### System behaviours
- state machine definition (states, transitions, triggers)
- fault list (fault IDs, triggers, required safe response)

---

# 5) Team briefs (deliverables, interfaces, acceptance tests)

## Team A – Firmware & Control (ESP32 Core)
### Mission
Deliver the ESP32 control firmware implementing the state machine, control loops (simple), and fault handling.

### Deliverables
- State machine implementation with clearly logged transitions
- Hardware abstraction layer (HAL) stubs to allow integration even if hardware isn’t ready
- Fault handling module with at least 3 faults
- Test harness (unit-ish tests or scripted serial command tests)

### Inputs you depend on
- Team B: final pinout, sensor signal characteristics, actuator control requirements
- Team C: UI commands/events definition
- Team D: any constraints on physical button layout, indicators, enclosure limitations

### Outputs you provide
- State machine spec (authoritative)
- Serial/API command set for UI
- Logging format (so other teams can parse/understand logs)

### Acceptance tests (minimum)
- Demonstrate each state transition with timestamps
- Demonstrate safe behaviour on fault injection:
  - low water → stop pump/disable outputs → Fault state + reason
  - overtemp (simulated) → safe shutdown → Fault state + reason
  - sensor disconnected (simulated) → safe shutdown → Fault state + reason

### Evidence checklist
- firmware repo/zip + versioned builds
- screenshots/log excerpts mapping results to objectives
- Jira tasks closed with evidence links

---

## Team B – Hardware I/O & Sensors/Actuators
### Mission
Deliver the safe low-voltage hardware and wiring that supports sensing and actuation for the coffee machine demonstrator.

### Recommended hardware scope (choose appropriately)
- Sensors (choose at least 2):
  - water level: float switch, capacitive sensor, ultrasonic (if suitable)
  - temperature: DS18B20/NTC/thermistor module
  - optional: flow sensor, pressure sensor (only if feasible)
- Actuation (choose at least 1):
  - pump (peristaltic recommended) or simulated pump load
  - solenoid valve or LED/relay simulation (low voltage only)

### Deliverables
- Wiring diagram + bill of materials
- Pinout + signal conditioning notes
- Demonstrated sensor readings (realistic + stable)
- Demonstrated actuator control with safe switching

### Inputs you depend on
- Team A: firmware I/O expectations, sampling rates, pull-up/pull-down requirements
- Team D: enclosure constraints, mounting points, cable routing

### Outputs you provide
- Final pin map (ICD electrical section)
- Safety notes (max current, isolation, fusing if used)
- Calibration notes (if any)

### Acceptance tests (minimum)
- Water level sensor triggers reliably in 10 trials
- Temperature input produces repeatable readings across 3 conditions
- Actuator output switches safely and predictably (documented)

### Evidence checklist
- photos of build + wiring
- measurement notes (multimeter/current draw)
- Jira risks and mitigations (e.g., leaks, shorts, pinch points)

---

## Team C – UI/UX & Connectivity
### Mission
Deliver a user interface that commands the system and displays state, progress, and faults in a technically clear way.

### UI options (pick one)
- Physical UI: buttons + LEDs + small OLED
- Web UI: ESP32 hosted page / local network UI

### Deliverables
- UI command implementation aligned to Team A interface
- Status display for:
  - current state
  - selected drink profile
  - key sensor values (at least water + temperature)
  - fault reason with a clear user action (e.g., “Refill tank and reset”)

### Inputs you depend on
- Team A: command/event definitions, state machine messages
- Team B: what sensors exist and their units
- Team D: physical placement constraints if using buttons/display

### Outputs you provide
- UI spec (screens/states)
- Usability evaluation criteria (simple but measurable)

### Acceptance tests (minimum)
- From Idle, user starts a brew cycle in ≤ 2 actions
- UI shows Fault reason within 1 second of fault event
- UI shows Brewing progress indicator (even if approximate)

### Evidence checklist
- screenshots/photos/videos
- UI test script + results
- feedback captured from at least 1 third party (to support LO4)

---

## Team D – Mechanical/Enclosure (3D printing) & Human Factors
### Mission
Deliver a safe, functional physical build that houses components, supports basic liquid handling (if used), and improves the realism/usability of the demonstrator.

### Deliverables
- 3D printed enclosure design:
  - mounting for ESP32 and modules
  - cable routing
  - access panels
  - mounting for buttons/display (if applicable)
- If liquids are used: drip tray/containment + splash protection
- Assembly instructions (photos + steps)

### Inputs you depend on
- Team B: dimensions and placement needs for sensors/actuators
- Team C: UI component dimensions

### Outputs you provide
- CAD/STL files + print settings notes
- mechanical risk assessment notes (sharp edges, pinch points, spills)

### Acceptance tests (minimum)
- Components mount securely and can be serviced
- Cables are strain-relieved (no loose tension)
- If liquids used: demonstrate containment (no leaks in a short test)

### Evidence checklist
- CAD screenshots, STL files
- photos of assembly
- Jira tasks and risks closed with evidence

---

## 6) Integration milestones (what must integrate when)
- **Milestone 1 (end of Week 4):** “Hello Integration”
  - UI command triggers a firmware state change (real or simulated)
- **Milestone 2 (end of Week 6):** “System V&V run”
  - full cycle demonstrated + at least 1 fault injection test
- **Milestone 3 (Week 8):** “Presentation-ready system”
  - stable demo + clear evidence pack

---

## 7) Evidence and criteria check (how this project hits P/M/D)
### LO1 (P1/P2/M1/D1)
- Proposal covers ethics/regulatory/risk; feasibility justifies scope and safety constraints.

### LO2 (P3/M2/D2)
- Jira plan is comprehensive, includes dependencies, milestones, resources, and explicit evaluation criteria/KPIs.

### LO3 (P4–P6/M3–M5/D3)
- Execution evidence: Jira history + logbooks + tests + results.
- M5 supported by showing alternative solutions and troubleshooting using simulation/experiments.
- D3 supported by critical analysis vs original plan and justified improvement recommendations.

### LO4 (P7/P8/M6/D4)
- Presentation includes integrated demo + feedback session.
- Reflection uses a formal model and produces an action plan responding to feedback.
