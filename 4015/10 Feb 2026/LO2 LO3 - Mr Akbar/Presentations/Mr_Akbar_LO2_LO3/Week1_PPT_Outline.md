# Week 1 (Mr Akbar) Presentation Outline — Unit 4015
## LO2 setup: OpenPLC + Controlino Mega + Node-RED Dashboard + USB serial (foundation for P4/P5)

Session length: **4 hours**.

Targets (this session):
- Establish the technical environment that will be used throughout LO2:
  - OpenPLC project workflow
  - Node-RED Dashboard workflow
  - USB serial connectivity to the Controlino Mega
- Begin LO2 readiness (P4 foundations): understanding what must be designed before programming.

Evidence produced today:
- Toolchain evidence: OpenPLC project created + Node-RED dashboard running + serial port identified.
- A “toolchain checklist” page (versions, COM port, basic settings).

---

## Slide 1 — Title
**On-slide:**
- Unit 4015 Week 1 (Technical)
- LO2 setup: OpenPLC + Node-RED Dashboard + USB serial
- Tutor: Mr Akbar (LO2 + LO3)

**Speaker notes (2–3 min):**
- Set tone: build evidence as you build the system. No retroactive screenshots.

---

## Slide 2 — What you will build across LO2 (Weeks 1–4)
**On-slide:**
- A PLC-controlled process (OpenPLC)
- A SCADA/HMI (Node-RED Dashboard)
- A working serial link (read + write)
- A test/debug record + basic performance notes

**Speaker notes (5–6 min):**
- Make clear that Node-RED is mandatory: it’s the assessed SCADA/HMI.

---

## Slide 3 — LO2 assessment targets (preview)
**On-slide:**
- P4: design elements before writing PLC code
- P5: comms connections used correctly
- M2: systematic testing/debugging methods
- D2: fully functional PLC design for the task + performance analysis

**Speaker notes (6–8 min):**
- Explain what evidence looks like (screenshots, tables, test logs, short analysis).

---

## Slide 4 — The architecture we’re aiming for
**On-slide:**
- Sensors/Inputs → OpenPLC logic → Outputs/Actuators
- OpenPLC variables ↔ USB serial ↔ Node-RED flow ↔ Dashboard widgets

**Speaker notes (8–10 min):**
- Keep it practical: “what lives where” and “what data flows”.

---

## Slide 5 — OpenPLC workflow (minimum you must follow)
**On-slide:**
- Create project
- Define variables (I/O tags)
- Implement logic (LD/ST)
- Run in Runtime (sim or hardware)
- Export evidence (screenshots/exports)

**Speaker notes (8–10 min):**
- Emphasise naming consistency: it matters for HMI mapping.

---

## Slide 6 — Node-RED workflow (SCADA/HMI)
**On-slide:**
- Flow = logic
- Dashboard = UI
- Serial nodes = comms
- Debug sidebar = proof

**Speaker notes (8–10 min):**
- Show what counts as evidence: flow screenshot + dashboard screenshot + debug proof.

---

## Slide 7 — USB serial: what “correctly used” starts with
**On-slide:**
- Correct COM port
- Correct baud/framing (centre standard)
- Stable messages (consistent format)

**Speaker notes (8–10 min):**
- Keep it generic today: we’ll standardise exact settings once centre decides.

---

## Slide 8 — Documentation control (don’t lose marks on formatting)
**On-slide:**
- Folder naming
- Screenshot naming
- Versioning (v0.1, v0.2, v1.0)

**Speaker notes (6–8 min):**
- Demonstrate a file naming scheme:
  - `W1_OpenPLC_ProjectCreated.png`, `W1_NodeRED_Dashboard.png`.

---

## Slide 9 — Guided build: environment bring-up checklist
**On-slide:**
- OpenPLC Editor installed and launches
- OpenPLC Runtime runs
- Node-RED runs + dashboard loads
- Controlino appears as a COM port

**Speaker notes (5 min):**
- Explain: today’s goal is to remove all setup blockers early.

---

## Slide 10 — Activity 1: create a minimal OpenPLC project
**On-slide:**
- Create a new project
- Add 2 inputs + 2 outputs (tags)
- Write a tiny test logic (e.g., input → output)

**Speaker notes (10–15 min):**
- Students should be able to run in simulation first.

---

## Slide 11 — Activity 2: create a minimal Node-RED dashboard
**On-slide:**
- Create a dashboard page
- Add:
  - 1 indicator
  - 1 button

**Speaker notes (10–15 min):**
- This is UI scaffolding; it will be connected later.

---

## Slide 12 — Activity 3: confirm serial visibility
**On-slide:**
- Identify COM port
- Record evidence
- Note down any driver issues

**Speaker notes (10–15 min):**
- Students capture evidence of the COM port existing.

---

## Slide 13 — Evidence clinic (Week 1 technical)
**On-slide:**
- OpenPLC project exists
- Node-RED dashboard page exists
- COM port identified
- Toolchain checklist started

**Speaker notes (15–20 min):**
- Fix:
  - inconsistent naming
  - missing screenshots
  - students not recording versions/settings.

---

## Slide 14 — What to write up (minimum today)
**On-slide:**
- 1-page toolchain checklist:
  - software versions
  - COM port
  - (if known) serial settings
  - screenshots list

**Speaker notes (6–8 min):**
- Explain that this protects students later if things break.

---

## Slide 15 — Between-week tasks (Week 1 → Week 2)
**On-slide:**
- Confirm your toolchain works at home/lab
- Start LO2 design pack headings:
  - requirements
  - I/O allocation
  - sequence

**Speaker notes (3–5 min):**
- Week 2 is design pack (P4) build.

---

## Slide 16 — Close-out
**On-slide:**
- Save evidence
- Bring questions next week

**Speaker notes (2–3 min):**
- Remind: evidence is part of engineering.
