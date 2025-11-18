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
- Deliverables (mandatory): Report (.ODT), Source Code (.ino), Professional Discussion Notes, Presentation (.ODP or .PDF)
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

Grading guidance (recommended)
- Pass: meets all P criteria with clear evidence (report, working code demo, initial test plan).
- Merit: strong justification, refined test coverage, good analysis.
- Distinction: critical appraisal, peer-reviewed working system, in-depth evaluation of impact and future directions.

---

Detailed weekly teaching plan (expanded)
Each week contains: learning aims, lecture topics, practical lab, expected outputs, assessment links.

Week 1 — Introduction & Platform selection (LO1)
- Aims: Understand embedded systems, objectives of the vocational scenario, select microcontroller.
- Lecture: Definitions, MCU vs MPU, CPU, memory types, peripherals, ADC, DAC, timers, interrupts, power domains.
- Practical: ESP32 board familiarisation; install Arduino IDE + ESP32 support and VS Code + PlatformIO; blink LED, read pinout, load bootloader notes.
- Lab deliverable: Datasheet-based microcontroller summary (1 page) — maps to P1/P2.
- Resources: ESP32 datasheet, community boards, Wokwi.

Week 2 — GPIO and basic interfacing (LO2, LO3)
- Aims: Digital I/O, pull-ups/downs, debouncing, state machines.
- Lecture: pinMode/digitalRead/digitalWrite, input conditioning, safety (current limits).
- Practical: Build button+LED toggle, add software debouncing, record behavior.
- Deliverable: Circuit diagram, annotated code (.ino), initial test cases for button/LED — P3, P4.

Week 3 — Sensors, ADC & I2C LC Display (LO2, LO3)
- Aims: Analog sensing, ADC range/resolution, I2C fundamentals.
- Lecture: ADC sampling, reference voltages, I2C addressing, bus pull-ups.
- Practical: LDR voltage divider, read ambient light with ADC, show readings on I2C LCD; calibrate thresholds.
- Deliverable: Sensor calibration notes, code with ADC scaling, screenshot of LCD output — LO2 M2 evidence.

Week 4 — Actuators, PWM, motor control & communications (LO2, LO3, LO4)
- Aims: PWM, transistor drivers, motor power switching, comms (UART, SPI, I2C, Wi‑Fi, MQTT).
- Lecture: PWM frequency/resolution trade-offs, MOSFET/driver selection, Wi‑Fi/BLE basics for ESP32.
- Practical: Control small DC motor speed with PWM and MOSFET; ESP32 publishes sensor data to local MQTT broker.
- Deliverable: Motor control demo, MQTT publish/subscribe log; discuss power and safety choices (M3).

Week 5 — Integration: Alarm/comfort system (LO2, LO3)
- Aims: Integrate sensors (TMP36/BME280), LDR, buzzer, LCD, create comfort monitoring logic.
- Lecture: System integration, state machines, interrupts vs polling.
- Practical: Build alarm that activates buzzer when light and air quality cross thresholds; add software watchdog.
- Deliverable: Integrated code base, functional demo video or live demo, initial test plan (P5).

Week 6 — Code structure, RTOS basics, unit testing (LO3)
- Aims: Modular software, classes, FreeRTOS tasks on ESP32, unit testing strategies.
- Lecture: File structure, separation of concerns, test-driven approach, mock sensors.
- Practical: Refactor code into modules: sensor.c/h, display.c/h, comms.c/h; run simple FreeRTOS tasks for reading, UI, comms.
- Deliverable: Refactored repository, unit test examples, refined test plan (M4).

Week 7 — PCB design & hardware reliability (LO2, LO3, LO4)
- Aims: KiCad basics, footprint selection, DFM considerations, EMI, power delivery.
- Lecture: Schematic capture, ground planes, decoupling, connectors, component derating.
- Practical: Create schematic + PCB for prototype, produce Gerber export checklist.
- Deliverable: PCB schematic and layout for peer review; BOM and cost analysis.

Week 8 — Evaluation, presentation & live test (LO4)
- Aims: Final testing, peer review, stakeholder presentation.
- Lecture: Test strategies, acceptance testing, impact assessment.
- Practical: Full system test, professional discussion rehearsal, record findings.
- Deliverable: Final report, code, test logs, professional discussion notes, presentation slides.

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
  - sensors.h/.cpp: init(), read(), calibrate()
  - display.h/.cpp: init(), update()
  - comms.h/.cpp: init(), publish()
  - util.h/.cpp: watchdog, error codes, logging
- Include unit test harness (if using PlatformIO) or mock functions for sensor input.

Example minimal .ino skeleton (place in code file)
```arduino
// filepath: k:\... \project\src\main.ino
/*
  Project: EcoSmart: Air Quality Monitor
  Board: ESP32
  Modules: sensors, display, comms, control
  Author:
*/
#include "sensors.h"
#include "display.h"
#include "comms.h"
#include "control.h"

void setup() {
  Serial.begin(115200);
  sensors_init();
  display_init();
  comms_init();
  control_init();
}

void loop() {
  control_task();     // high level: read sensors, update display, handle alarm
  comms_task();       // handle MQTT transmissions
  delay(100);         // simple scheduler; replace with FreeRTOS in advanced tasks
}
```

Test plan template (for P5 → M4)
- Test ID, Objective, Procedure, Inputs, Expected Output, Pass/Fail, Test Date, Tester
- Unit tests: sensor range, ADC linearity, button debounce, PWM duty response
- Integration tests: full alarm trigger under combined conditions
- System acceptance tests: stable 24-hour run, Wi‑Fi reconnect handling

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
- 2. Microcontroller analysis (datasheet excerpts, reasoning) — LO1
- 3. System design (schematics, block diagrams) — LO2
- 4. Safety and reliability (risk assessment, mitigation) — LO2 Part 2
- 5. Implementation (code structure, key algorithms) — LO3
- 6. Test plan & results (unit, integration, system) — LO3
- 7. Cost analysis & BOM
- 8. Impact and trends (LO4)
- 9. Conclusions & recommendations
- References (Harvard)
- Appendices: full code listing, PCB Gerber screenshots, test logs, professional discussion notes

Suggested BOM & approximate cost (for one prototype)
- ESP32 development board — £7–£12
- BME280 or equivalent environmental sensor — £4–£10
- LDR + resistor pack — £1
- 16x2 I2C LCD module — £3–£8
- Small buzzer — £1
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
