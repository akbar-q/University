# Unit 5013: Embedded Systems - Comprehensive Learning Plan (Expanded)

This document expands the unit README to provide detailed teaching guidance, assessment mapping, lab instructions, templates and checklists so any qualified person can pick up the materials and deliver the unit to meet the assignment brief and Pearson BTEC descriptors.

---

Contents
- Unit summary & vocational scenario
- Learning Outcomes (LOs) mapped to assessment criteria
- Week-by-week detailed teaching plan (learning aims, resources, practical labs, deliverables)
- Practical lab sheets (objectives, wiring, code skeletons, test steps)
- Assessment guidance and marking rubrics (report, code, professional discussion, presentation)
- Templates: Report structure (.ODT), Code conventions (.ino), Test plan, Risk assessment, Professional discussion notes, Presentation slide structure
- Safety, reliability & standards checklist
- Suggested equipment, BOM and costs
- References & resources

---

Unit summary and vocational scenario
- Vocational scenario: EcoSmart Solutions Ltd. needs an ESP32-based indoor air quality & comfort monitor for commercial buildings. Students act as Embedded Systems Engineers to design, implement, test and evaluate a prototype, then present impact and trends.
- Deliverables (mandatory): Report (.ODT), Source Code (.ino), Professional Discussion Notes, Presentation (.ODP or .PDF), Offline programming test deliverable (see Assessment updates).
- All references must use Harvard style.

Learning Outcomes and final mapping (corrected)
- LO1 Examine embedded system technology
  - P1 Examine the main architecture of a selected microcontroller.
  - P2 Explain the function of main microcontroller elements.
  - M1 Analyse methods by which controllers communicate with the external environment.
  - D1 Critically analyse the selected microcontroller architecture: limitations & suitability.
- LO2 Design an embedded system using available interfaces
  - P3 Design an embedded system to meet specified functional requirements.
  - M2 Review selected devices (peripherals/sensors) in terms of functionality for the design.
  - M3 Discuss trade-offs (performance, power, cost) for component choices.
  - D2 Critically appraise overall functionality and propose improvements.
- LO3 Implement embedded system design by writing code
  - P4 Implement well-structured code to perform a selection of functions.
  - P5 Develop an initial test plan demonstrating subset functionality.
  - M4 Produce a refined test plan covering all functions.
  - D3 Evaluate a fully working system with real peripherals in a peer review.
- LO4 Evaluate applications of embedded systems in wider environment
  - P6 Evaluate current uses in a chosen sector.
  - M5 Explore emerging trends (IoT, AI, sustainability).
  - D4 Critically appraise ongoing research and societal/economic implications.

Note: corrected numbering to avoid duplicate M4. Use M5 for LO4 trend exploration (consistent with earlier content).

Assessment mapping: which deliverable covers which criteria
- Technical Report (.ODT) — primary evidence for LO1, LO2 (P1–P3, M1–M3, D1–D2), Part 1 & Part 2
- Source Code (.ino) — LO3 P4 and evidence for implementation; include comments and architecture diagram
- Test Plans (.ODT section + test logs) — LO3 P5, M4
- Professional Discussion Notes — LO3 D3 evidence and process reflection
- Presentation (.ODP/.PDF) — LO4 P6, M5, D4
- Offline Programming Test (live, no internet/resources) — assessed practical for LO3 P4 (see Assessment updates)
- KiCad PCB project (optional/where required) — evidence for LO2 design outcomes and LO3 hardware integration

Grading guidance (recommended)
- Pass: meets all P criteria with clear evidence (report, working code demo, initial test plan).
- Merit: strong justification, refined test coverage, good analysis.
- Distinction: critical appraisal, peer-reviewed working system, in-depth evaluation of impact and future directions.

---

Detailed weekly teaching plan (expanded & aligned to taught sessions)
Each week contains: learning aims, lecture topics, practical lab, expected outputs, assessment links.

Week 1 — Introduction & Platform selection (LO1)
- Aims: Understand embedded systems, objectives of the vocational scenario, select microcontroller.
- Lecture: Definitions, MCU vs MPU, CPU, memory types, peripherals, ADC, DAC, timers, interrupts, power domains.
- Practical: ESP32 block-level architecture taught in detail (CPU cores, RTC, ULP coprocessor, Wi‑Fi/BLE radio, flash/PSRAM, ADC blocks, DAC, ADC attenuation, timers, PWM/LEDC, RTC, GPIO matrix, ADC calibration). Students must reference Espressif TRM and datasheet.
- Lab deliverable: Datasheet-based microcontroller summary (1 page) — maps to P1/P2.
- Resources: ESP32 datasheet, technical reference manual, community boards, Wokwi.

Week 2 — GPIO, digital I/O and PWM fundamentals (LO2, LO3)
- Aims: Digital I/O, hardware pull-ups/pull-downs, debouncing, PWM basics.
- Lecture: pinMode/digitalRead/digitalWrite semantics; ESP32-specific GPIO matrix and recommended pins; internal/external pull-up/pull-down hardware; current limits; PWM on ESP32 (LEDC) vs analogWrite differences.
- Practical taught content (already delivered): digitalWrite to LED, PWM brightness control (ledcSetup/ledcWrite), correct frequency and channel usage for LED and speaker.
- Deliverable: Circuit diagram, annotated code (.ino) showing ledcSetup/ledcAttachPin/ledcWrite, initial test cases for LED brightness and button debounce — P3, P4.

Week 3 — Switch interfacing, ADC and analog sensors (LO2, LO3)
- Aims: Mechanical switches, pull resistors, analog inputs and ADC behaviour.
- Lecture: input conditioning, switch debouncing (hardware RC, software), ADC range/resolution, ADC non-linearity and attenuation on ESP32, mapping ADC values to engineering units.
- Practical taught content (already delivered): switch interfacing with proper hardware pull-up/pull-down; analogRead usage for LDR in voltage divider; calibration of LDR for curtain-open detection.
- Deliverable: Sensor calibration notes, ADC range/resolution calculations, code with ADC scaling, threshold derivation — LO2 M2 evidence.

Week 4 — I2C devices and display interfacing (LO2, LO3)
- Aims: I2C bus principles, addressing, pull-ups, device drivers.
- Lecture: I2C on ESP32 (Wire library), common pitfalls (address conflicts, bus speed, pull-up resistor values), using LiquidCrystal_I2C or equivalent for I2C LCDs.
- Practical taught content (already delivered): interfacing and driving an I2C LCD (address scan, init, write), showing sensor values on LCD.
- Deliverable: I2C scan log, display screenshots, annotated library usage and wiring diagram.

Week 5 — Alarm application: LDR, alarm tone, control logic (LO2, LO3)
- Aims: Combine analog sensing and actuator control into an application.
- Lecture: control flow choices (if, while loops, state machines), timing and watchdog strategies to avoid blocking code.
- Practical taught content (already delivered): LDR-based curtain detection in a voltage divider; analogRead used to detect low light; speaker drive for alarm tone using PWM/LEDC or DAC; software logic: while loop/if to generate alarm until LDR threshold crossed (curtains opened), use of non-blocking timers recommended.
- Deliverable: Complete alarm demo code (.ino) with comments, wiring photo, short video of alarm behavior and disabling by opening curtains — evidence for P4/P5.

Week 6 — Code structure, modularisation and testing (LO3)
- Aims: Modular software, separation of hardware drivers and application logic, simple unit testing/mocks.
- Lecture: file layout (main.ino, sensors.*, display.*, comms.*, control.*), API contracts for modules, replacing blocking while loops with state machines or FreeRTOS tasks.
- Practical: Refactor alarm project into modules; add unit-test stubs or host-based tests (PlatformIO) for algorithms (threshold detection, mapping).
- Deliverable: Refactored repository, unit test examples, refined test plan (M4).

Week 7 — KiCad project, PCB basics & hardware reliability (LO2, LO3, LO4)
- Aims: Introduce KiCad workflow for PCB prototyping and BOM export.
- Lecture: schematic capture, footprints, decoupling capacitors, power rails, connectors, mounting, DFM and EMC notes.
- Practical suggestion (new/optional): full KiCad project for the alarm board (ESP32 breakout, sensor connectors, speaker driver, power protection). This provides evidence for design outcomes where required.
- Deliverable: KiCad schematic and board (or annotated mockup), BOM and cost analysis.

Week 8 — Evaluation, offline programming test & final presentation (LO3, LO4)
- Aims: Final testing, peer review, stakeholder presentation, and live assessment.
- Lecture: test strategies, acceptance testing, impact assessment, exam/test logistics.
- Practical: Offline programming test (students program a small project live without internet/resources) to evaluate individual programming skills; live demonstration or recorded evidence for peer review and assessor discussion.
- Deliverable: Final report, code, test logs, professional discussion notes, presentation slides, offline test results.

---

Practical lab sheet template (use per lab)
- Objective:
- Required parts (BOM):
- Safety notes:
- Wiring diagram (text + photo):
- Code skeleton (see below):
- Step-by-step test procedure:
- Data to collect:
- Pass criteria:
- Teacher checks (sign & date):

Code skeleton (use in .ino deliverable)
- Provide header comment: purpose, author, hardware version, date, license.
- Use modular structure:
  - main.ino: setup(), loop(), high-level scheduler
  - sensors.h/.cpp: init(), read(), calibrate() — include ADC handling and calibration notes
  - display.h/.cpp: init(), update() — I2C init and error handling
  - comms.h/.cpp: init(), publish() — placeholder for MQTT/HTTP
  - control.h/.cpp: alarm logic, non-blocking timers, state machine
  - util.h/.cpp: debounce helpers, map/scale functions, logging
- Include unit test harness (if using PlatformIO) or mock functions for sensor input.

Example minimal .ino skeleton (place in code file)
```markdown
// filepath: k:\... \project\src\main.ino
/*
  Project: EcoSmart: Air Quality & Comfort Monitor (Alarm demo)
  Board: ESP32
  Notes:
  - Use ledcSetup/ledcAttachPin/ledcWrite for PWM (LED and speaker)
  - Use analogRead for LDR; apply attenuation and calibration
  - Use Wire (I2C) for LCD with proper pull-ups
  - Avoid long blocking while loops; use state machine or watchdog
*/
#include "sensors.h"
#include "display.h"
#include "control.h"

void setup() {
  Serial.begin(115200);
  sensors_init();    // config ADC attenuation, calibrate LDR
  display_init();    // I2C init, clear
  control_init();    // init PWM channels, state machine
}

void loop() {
  control_task();     // non-blocking: read sensors, update display, manage alarm state
  delay(50);          // small sleep; replace with FreeRTOS tasks as needed
}
```

Implementation notes (explicit)
- ESP32 PWM: use ledcSetup(channel, freq, resolutionBits) and ledcWrite(channel, duty).
- Speaker tone: generate square wave via LEDC or use DAC channels for sine-ish output; avoid blocking tone() loops — implement tone bursts with timers.
- ADC: read multiple samples and average; be aware of ADC non-linearity on ESP32 — document calibration method.
- Switches: prefer external pull resistors for noisy environments; demonstrate both hardware and software debouncing.
- I2C LCD: run an I2C scanner first; include common addresses (0x27, 0x3F) and note bus pull-ups.
- Alarm control: implement hysteresis on LDR threshold to avoid chattering; provide manual override button and disable latch.

Test plan template (for P5 → M4)
- Test ID, Objective, Procedure, Inputs, Expected Output, Pass/Fail, Test Date, Tester
- Unit tests: sensor range, ADC linearity, button debounce, PWM duty response
- Integration tests: full alarm trigger under combined conditions (dark + air condition)
- System acceptance tests: stable 24-hour run, Wi‑Fi reconnect handling
- Offline programming test: defined task, scoring rubric, pass/fail thresholds

Risk assessment & safety (Part 2 guidance)
- Identify hazards (overcurrent, overvoltage, overheating, data breach, environmental effects).
- For each: likelihood, severity, mitigations (fuse, TVS diodes, thermal cutouts, watchdog, input validation, HTTPS/MQTT authentication).
- Provide emergency plan: immediate disconnect, fail-safe mode (e.g., buzzer off), logs preserved, incident report template.
- Map mitigations to standards (IEC 61508 concepts for safety functions, ISO 26262 for automotive if applicable — state applicability).

Professional discussion (Part 3) preparation notes
- Prepare a 10–15 minute structured script covering:
  - Rationale for language (C++ on Arduino/ESP-IDF or MicroPython) with pros/cons.
  - Demonstrate initialization sequence, key functions and error handling.
  - Present timelines: planning → implementation → testing → iteration.
  - Evidence: annotated code snippets, test logs, video/snapshot of system running, peer feedback.
- Provide assessor with a checklist of criteria and page references in the report that evidence each P/M/D.

Presentation structure (Part 4)
- Slide 1: Title, team, aims
- Slide 2: Vocational scenario & system overview
- Slide 3: Functional requirements & chosen platform justification
- Slide 4: System architecture diagram
- Slide 5: Safety & reliability highlights
- Slide 6: Test strategy & key results
- Slide 7: Cost & BOM summary
- Slide 8: Economic/social/ethical impacts
- Slide 9: Trends: IoT, AI/ML at edge, sustainability
- Slide 10: Future work and recommendations
- Backup slides: detailed test logs, datasheets, code excerpts.

Report (.ODT) structure (use Open Sans 12)
- Title page (project title, authors, date, assessor)
- Executive summary (max 300 words)
- Table of contents
- 1. Introduction & requirements
- 2. Microcontroller analysis (datasheet excerpts, reasoning) — LO1 (include block-level ESP32 architecture details taught)
- 3. System design (schematics, block diagrams) — LO2 (include LDR voltage divider, pull-up/pull-down wiring, I2C bus notes)
- 4. Safety and reliability (risk assessment, mitigation) — LO2 Part 2
- 5. Implementation (code structure, key algorithms) — LO3 (include alarm logic, PWM implementation, ADC calibration)
- 6. Test plan & results (unit, integration, system) — LO3
- 7. Cost analysis & BOM
- 8. Impact and trends (LO4)
- 9. Conclusions & recommendations
- References (Harvard)
- Appendices: full code listing, KiCad files (if produced), PCB Gerber screenshots, test logs, professional discussion notes

Suggested BOM & approximate cost (for one prototype)
- ESP32 development board — £7–£12
- BME280 or equivalent environmental sensor — £4–£10
- LDR + resistor pack — £1
- 16x2 I2C LCD module — £3–£8
- Small buzzer / speaker — £1–£3
- MOSFET driver & MOSFET — £2–£5
- PCB prototype & header pins — £10–£30
- Misc (wires, breadboard, resistors) — £5–£10

Resources & references
- ESP32 datasheet, Espressif technical reference manual
- Arduino IDE, PlatformIO, ESP-IDF documentation
- KiCad tutorials, Wokwi, TinkerCAD
- Pearson Unit Descriptors (referenced)
- IEEE/IEC standards (as applicable)

Teacher/Assessor checklist
- Evidence for each P/M/D provided and cross-referenced
- Code compiles and runs on target hardware (or simulator with proof)
- Test plan executed and logs present
- Professional discussion minutes recorded and signed
- Presentation slides uploaded and consistent with report
- Offline programming test rubric and student score recorded
- KiCad deliverable (where required) included and reviewed

Quality-control tips
- Require students to include commit history or a change log.
- Use automated static analysis tools (clang-format, cpplint) where possible.
- Encourage peer code reviews and documented feedback.

---

Quick check of mistakes found in the original materials
- Duplicate criterion label: M4 appeared twice (in LO3 and LO4) in the prompt. Suggested fix: use M4 under LO3 and M5 under LO4. The README at top already used M5 for LO4 — ensure consistency across all documents.
- Ensure assessment criterion numbering in student brief matches the unit descriptor (update all references to M4/M5 to the corrected mapping).
- Minor formatting: ensure consistent use of Harvard referencing instructions in templates.

---

How to use this README
- Follow weekly plan and lab sheets; adapt times to delivery environment.
- Use templates for report, code and test plan to standardise submissions.
- Cross-check each student deliverable against the assessor checklist to ensure P/M/D evidence is present.

---
