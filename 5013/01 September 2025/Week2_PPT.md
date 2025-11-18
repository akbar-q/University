# Week 2 — ESP32 Connectivity, Protocols & Design Workflow (3-4h)

Notes: Markdown slide deck for conversion to PPTX. Includes speaker notes for each slide and assessment details.

---

## Slide 1: Title

ESP32 Connectivity, Protocols & Design Workflow — Week 2

Speaker notes:
- Welcome back. Overview: Wi‑Fi/BLE basics, I2C vs SPI deep dive, KiCad PCB workflow, project assignment and offline test instructions.

---

## Slide 2: Learning Objectives

- Understand ESP32 networking capabilities (Wi‑Fi station/AP, BLE roles)
- Use I2C and SPI at a protocol level and in code
- Design a simple PCB in KiCad for the alarm circuit
- Be prepared for the offline programming test and project submission requirements

Speaker notes:
- Emphasise outcomes mapping to assessment: coding, schematic capture, PCB layout, and documentation.

---

## Slide 3: Wi‑Fi on ESP32 — Modes & Use-cases

- Station (STA), Access Point (AP), STA+AP
- Use-cases: data upload, remote control, local web UI, OTA updates
- Security basics: WPA2, proper credential storage

Speaker notes:
- Explain when to use STA vs AP. Show small architecture diagrams: device -> router -> cloud, or device as AP for local config.

---

## Slide 4: Wi‑Fi Programming Patterns

- Connecting to network with event handlers
- Reconnection strategies and exponential backoff
- Keepalive and watchdog integration

Speaker notes:
- Show event-driven model in ESP-IDF and Arduino examples. Warn about blocking on connect in main loop.

---

## Slide 5: BLE Basics — GATT and Advertising

- BLE roles: Central vs Peripheral
- GATT server and characteristics
- Advertising parameters and discovery

Speaker notes:
- Keep to practical BLE: advertise sensor data or accept remote control via characteristics.
- Mention tools: nRF Connect for testing.

---

## Slide 6: When to choose Wi‑Fi vs BLE

- Wi‑Fi: high throughput, networked, OTA
- BLE: low power, mobile phone pairing, short bursts

Speaker notes:
- Show real examples: BLE for phone app sensor reading; Wi‑Fi for cloud logging.

---

## Slide 7: I2C Deep Dive — Signals and Protocol

- Two-wire bus: SDA (data) and SCL (clock)
- Open-drain drivers and pull-ups
- 7-bit vs 10-bit addresses, ACK/NACK, repeated start

Speaker notes:
- Explain bus arbitration and why pull-ups are critical. Show logic-level timing diagram.

---

## Slide 8: I2C: Common Gotchas

- Wrong pull-up values, bus speed mismatches
- Address collisions and scan tool usage
- Long wires and capacitance affecting rise time

Speaker notes:
- Recommend 2.2k-10k pull-ups depending on bus speed and length. Demonstrate `i2cdetect` style scan in code.

---

## Slide 9: SPI Deep Dive — Modes and Timing

- Four signals: SCLK, MOSI, MISO, CS
- Modes 0-3: clock polarity and phase (CPOL/CPHA)
- Full-duplex and chip-select handling

Speaker notes:
- Explain how to pick mode for a peripheral and show a short oscilloscope timing example.

---

## Slide 10: I2C vs SPI — When to use which

- I2C: simpler wiring, multiple masters, slower
- SPI: faster, full-duplex, per-device chip-selects

Speaker notes:
- Give examples: I2C for sensors and EEPROMs; SPI for displays and fast ADCs.

---

## Slide 11: Interfacing an I2C LCD — Review & Advanced Tips

- Addressing, custom characters, backlight control
- Use buffered writes and rate limit updates to reduce bus load

Speaker notes:
- Show a code snippet for creating custom charset and refreshing only changed characters.

---

## Slide 12: Peripheral Integration Patterns

- Use dedicated tasks for blocking comms (e.g., SPI flash, I2C sensor scans)
- Protect shared buses with mutexes

Speaker notes:
- Show example: multiple sensors on I2C with polling task; avoid simultaneous bus access.

---

## Slide 13: KiCad Workflow — Overview

- Schematic capture, symbol selection, net labels
- Creating footprints or using library footprints
- ERC checks, PCB layout, design rules, DRC

Speaker notes:
- Outline the typical workflow: schematic -> annotate -> ERC -> assign footprints -> netlist -> PCB layout -> DRC -> export Gerbers.

---

## Slide 14: Designing a Simple Alarm PCB — Key considerations

- Power supply decoupling, regulator placement
- Trace widths for currents, connector placement
- Keep analog traces away from noisy digital/gnd returns

Speaker notes:
- Recommend placement: speaker connector and switching devices at board edge; keep ADC sensor inputs short.

---

## Slide 15: KiCad Demonstration Plan (in class)

- Build schematic for alarm: ESP32 module, LDR voltage divider, button, speaker (via transistor), power regulator, I2C LCD connector
- Assign footprints and start PCB layout

Speaker notes:
- Note: actual step-by-step to be a live demo; students should replicate on their machines.

---

## Slide 16: Offline Programming Test — Goals

- Assess programming and debugging under time pressure with no internet
- Focus on core skills: peripheral setup, ISR handling, ADC/PWM, protocol knowledge

Speaker notes:
- Explain test conditions: offline, 30-45 minutes, must submit code that compiles locally and a short README describing logic.

---

## Slide 17: Sample Offline Test Prompt

- Implement a device that:
  - Samples an analog sensor (thermistor or LDR) every 250ms
  - Toggles a PWM-controlled LED brightness based on sensor value (mapping function)
  - Uses a button to cycle modes (AUTO -> MAX -> OFF) with debouncing
  - Provide serial output of mode and values every 1s

Speaker notes:
- This task checks ADC reading, mapping, PWM control, button interrupts/debounce, and serial output for debugging.
- Provide constraints: must use ADC1, avoid floating in tight loops, ISR must be minimal.

---

## Slide 18: Assessment Rubric (40 points)

- Correct peripheral initialization and use: 12 pts
- Robust button handling and debouncing: 8 pts
- Correct sensor mapping to actuator: 8 pts
- Code clarity + README explanation: 6 pts
- Bonus (clean power layout / KiCad schematic snippet): 6 pts

Speaker notes:
- Be clear about deductions: blocking in ISR, unsafe API use in ISR, failure to handle ADC noise.

---

## Slide 19: Project Assignment & Submission Requirements

- Project: Complete alarm system with ESP32 + I2C LCD + LDR + button + speaker; optionally add Wi‑Fi reporting or PCB design
- Deliverables: Code (well-commented), README (design choices, pinout), KiCad files if PCB attempted, short demo video (2-3 minutes)
- Deadline and submission channel: specify your LMS or GitHub repo (instructor to fill)

Speaker notes:
- Mention academic integrity and allowed resources for project (libraries allowed, internet permitted for project work but not during offline test).

---

## Slide 20: Preparation Tips for Students

- Practice without internet: set up local dev environment and compile offline
- Test on hardware early
- Keep a checklist: pinout, ADC/GND reference, pull-ups, power decoupling

Speaker notes:
- Encourage pair-programming practice sessions and rehearsing demonstration.

---

## Slide 21: Q&A and Next Steps

- Recap: what to study and what to bring to next session
- Offer office hours for KiCad help and debugging

Speaker notes:
- Close with reminder of test format and deliverables.
