# Week 4 Presentation Outline — Unit 5041
## LO3 starts: executing the plan + test/simulation design + reporting standards

Session length: **4 hours**.

Main outcome: students start LO3 execution with a defensible test/simulation method and correct evidence capture.

---

## Slide 1 — Title
**On-slide:**
- Week 4: LO3 execution + test/simulation plan + evidence quality

---

## Slide 2 — LO3: what you must evidence
**On-slide:**
- P4/M3: activities implemented + progress tracked vs plan
- P6/M5: planned tests/simulations + practical troubleshooting examples
- P5/M4: coherent technical report

**Speaker notes (6–8 min):**
- LO3 is where weak evidence habits fail. Capture as you go.

---

## Slide 3 — Test vs validation (simple rule)
**On-slide:**
- Verification: built it right
- Validation: built the right thing

**Speaker notes (6–8 min):**
- MATLAB validation can be “model matches expected behaviour” with justification.

---

## Slide 4 — Test/simulation plan v1 (required fields)
**On-slide:**
- Test ID + objective link
- Setup + parameters
- Metric + units + threshold
- Procedure + trials
- Evidence capture method

**Speaker notes (8–10 min):**
- Reproducibility is the quality bar.

---

## Slide 5 — Data capture conventions
**On-slide:**
- Tables with units
- Naming conventions
- Screenshots must have labels/meaning

---

## Slide 6 — Technical report structure (start writing now)
**On-slide:**
- Intro, Background, Requirements
- Method/Plan, Implementation
- Results, Discussion
- Evaluation, Conclusions, Recommendations

**Speaker notes (6–8 min):**
- Write Method while you still remember what you did.

---

## Slide 7 — Quality bar (hardware path)
**On-slide:**
- Safe wiring/power
- Sensor conditioning/calibration
- Logging of key variables
- One fault/edge-case test

---

## Slide 8 — Quality bar (MATLAB path)
**On-slide:**
- Assumptions stated and justified
- Solver/time step justified
- Parameter provenance
- Validation against expected behaviour

---

## Slide 9 — In-class Activity: create test/sim plan v1
**On-slide:**
- Draft 6–10 tests/runs
- Create results table templates
- Add Jira tasks for each test

**Speaker notes (40–60 min):**
- Make every objective testable.

---

## Slide 10 — Evidence clinic checklist (Week 4)
**On-slide:**
- Progress vs baseline recorded
- Test/sim plan is measurable + feasible
- Logbook entries include evidence links

---

## Slide 11 — Between-week tasks (Week 4 → Week 5)
**On-slide:**
- Execute first test/sim runs
- Capture evidence properly
- Start Results + Discussion draft paragraphs
# Week 4 Presentation Outline — Unit 5041
## LO3 Start: Implementation kickoff, test plan v1, evidence capture, Integration Milestone 1 (“Hello Integration”)

Project pathways: **MATLAB simulation/model-based OR hardware**.

Session length: **4 hours**.

Main outcome: by end of this session, students have started implementation, produced a defensible **test/simulation plan v1**, and demonstrated **Milestone 1**: a minimal end-to-end system path (real or stubbed).

---

## Slide 1 — Title
**On-slide:**
- Week 4: LO3 begins
- Build + test + evidence discipline
- Milestone 1: Hello Integration

**Speaker notes (2 min):**
- Today is where “engineering project” becomes real.
- The key skill: building while preserving evidence and traceability.

---

## Slide 2 — What LO3 requires (plain language)
**On-slide:**
- P4/M3: do the work and record progress vs plan
- P6/M5: run planned tests/simulations and solve issues
- P5/M4: write a structured technical report with justified outcomes
- D3: later, critically analyse outcomes vs the plan

**Speaker notes (6–8 min):**
- LO3 is about execution + proof.
- If you don’t log, you can’t prove.

---

## Slide 3 — What must exist by end of Week 4
**On-slide:**
- Code skeleton + serial protocol implemented
- Test plan v1 (with acceptance criteria)
- Evidence capture pipeline (logs/photos/videos)
- Milestone 1 demo (real or stubbed)

**Speaker notes (4–5 min):**
- Be strict: “skeleton” means compile/upload + log + basic command parsing.

---

## Slide 4 — Reference architecture (for Arduino codebase)
**On-slide:**
- `main.ino`: setup/loop only
- `StateMachine.*`: states/events/transitions
- `HAL.*`: sensors/actuators abstraction
- `Protocol.*`: CMD/TEL parsing and formatting
- `Faults.*`: fault detection + safe shutdown

**Speaker notes (10–12 min):**
- Explain why file/module split matters:
  - it enables parallel work
  - it supports testing
- If students insist on one .ino file, allow it but require clear sections.

---

## Slide 5 — Interface/protocol baseline (if applicable)
**On-slide:**
- Baud: 115200
- UI → ESP32: `CMD ...`
- ESP32 → UI: `TEL ...`
- One message per line

**Speaker notes (8–10 min):**
- Re-state the minimum command set:
  - `CMD START PROFILE=ESPRESSO`
  - `CMD STOP`
  - `CMD RESET_FAULT`
- Minimum telemetry fields:
  - `STATE`, `TEMP`, `WLEVEL`, `FAULT`

---

## Slide 6 — Logging: required format for evidence
**On-slide:**
- Every transition logs:
  - timestamp
  - old state → new state
  - event
  - key values

**Speaker notes (8–10 min):**
- Provide a standard log line students should copy:
  - `T=123456 STATE=BREWING EVENT=LOW_WATER TEMP=45.2 WLEVEL=0 FAULT=F01`
- Explain: this makes KPI measurement possible.

---

## Slide 7 — Timing in Arduino: how to avoid blocking bugs
**On-slide:**
- Prefer `millis()` scheduling
- Avoid long `delay()` in control loop
- Use periodic tasks (sensor read, telemetry)

**Speaker notes (10–12 min):**
- Explain the core rule:
  - blocking delays kill responsiveness and fault response time.
- Provide a simple approach:
  - sample sensors every 100 ms
  - publish telemetry every 200 ms
  - state machine tick every loop

---

## Slide 8 — Debounce and filtering (embedded realism)
**On-slide:**
- Debounce switches / float sensors
- Simple moving average / median filter (if needed)
- Document chosen method and why

**Speaker notes (8–10 min):**
- Tie to M5: you can compare two approaches and justify one.

---

## Slide 9 — Safe actuation: GPIO is not a power supply
**On-slide:**
- GPIO drives logic, not loads
- Use a driver: transistor/MOSFET/relay module
- Document current limits and protection

**Speaker notes (8–10 min):**
- Emphasize safe practice (also supports LO1 D1).
- If actuators are simulated, still document what would be needed.

---

## Slide 10 — Test plan v1: what it must contain
**On-slide:**
- Test ID
- Objective/KPI link
- Setup + steps
- Expected result (threshold)
- Evidence to capture

**Speaker notes (10–12 min):**
- Explain: the test plan is the bridge from objectives to evidence.

---

## Slide 11 — Example tests (students can copy)
**On-slide:**
- T01: Start command triggers Ready → Brewing within 1 s
- T02: Low water during Brewing triggers Fault within 1 s
- T03: UI shows Fault reason within 1 s

**Speaker notes (10–12 min):**
- Show what evidence looks like:
  - serial log excerpt with timestamps
  - short video showing UI + serial monitor

---

## Slide 12 — Fault injection: how to test faults safely
**On-slide:**
- Simulate sensor values in code (test mode)
- Disconnect sensor (if safe)
- Toggle input pin via jumper

**Speaker notes (8–10 min):**
- Explain: fault injection is required for convincing evidence.

---

## Slide 13 — Stubs/mocks for integration (how to integrate early)
**On-slide:**
- If hardware isn’t ready: stub sensor values
- If UI isn’t ready: use Serial Monitor as UI
- If mechanical isn’t ready: mount on breadboard temporarily

**Speaker notes (8–10 min):**
- This is how you reduce integration risk.

---

## Slide 14 — Milestone 1 definition: “Hello Integration”
**On-slide:**
- One end-to-end path works
- Example path:
  - CMD START → state changes → TEL update → UI reflects

**Speaker notes (6–8 min):**
- The demo can be partial, but it must be real and repeatable.

---

## Slide 15 — Jira evidence in LO3 (how to record progress)
**On-slide:**
- Close tasks with evidence attachments
- Weekly status report issue
- Change issues for deviations

**Speaker notes (8–10 min):**
- Show what to attach:
  - log excerpt
  - photo of wiring
  - test table screenshot

---

## Slide 16 — Technical report: start writing now
**On-slide:**
- Write as you build
- Keep headings stable
- Insert evidence progressively

**Speaker notes (6–8 min):**
- Tell them what sections can be written already:
  - Background, Requirements, Plan/Method

---

## Slide 17 — In-class Activity 1: run the Arduino baseline sketch
**On-slide:**
- Upload a sketch that:
  - prints BOOT OK
  - prints TEL state every 200 ms
  - parses CMD START/STOP

**Speaker notes (activity, 25–30 min):**
- If they don’t have a baseline, they create one today.
- Students must screenshot serial output as evidence.

---

## Slide 18 — In-class Activity 2: test plan v1 creation
**On-slide:**
- Write 10 tests minimum
- Link each to objective/KPI
- Define evidence capture

**Speaker notes (activity, 30–35 min):**
- Enforce coverage:
  - 3 state machine tests
  - 3 sensor/actuator tests
  - 2 UI tests
  - 2 fault tests

---

## Slide 19 — In-class Activity 3: Milestone 1 demo build
**On-slide:**
- Integrate one path end-to-end
- If blocked, use stubs and document the block

**Speaker notes (activity, 35–40 min):**
- This is the key session outcome.
- If you are blocked, you must:
  - create a Jira dependency
  - create a mitigation task
  - demo the stubbed version anyway

---

## Slide 20 — Evidence clinic: Week 4 checklist
**On-slide:**
- Code compiles/uploads
- Serial protocol working
- Test plan v1 exists
- Milestone 1 demo captured
- Jira updated with evidence

**Speaker notes (10–15 min):**
- You do quick inspections.

---

## Slide 21 — Between Week 4 and Week 5
**On-slide:**
- Build hardware/UI features
- Run 3 tests and record results
- Update risk register
- Start report sections

**Speaker notes (4–5 min):**
- Remind them: Week 5 expects real results.

---

## Slide 22 — Resources
**On-slide:**
- Arduino IDE docs (Serial Monitor, Library Manager)
- ESP32 Arduino core docs
- Datasheets for sensors/actuators

**Resource pointers:**
- Arduino IDE 2.x documentation
- Arduino-ESP32 docs (Espressif)
- Basic embedded testing principles (centre library notes)

---

## Slide 23 — Close
**On-slide:**
- LO3 started: build + test + evidence
- Milestone 1 achieved
- Next: results + troubleshooting + analysis

**Speaker notes (2 min):**
- Encourage them: “small working loop + tests beats big unfinished features.”
