# Unit 5013 - Reconstructed 8-Week Teaching Plan

## Why This Sequence Exists

The retained student artefacts show the expected practical endpoint: an Arduino-style environmental alarm using an LDR on `A0`, a pull-up curtain switch, LED, buzzer and 16 x 2 I2C LCD. The code is organised around `setup()`, `loop()`, input reading, threshold logic, output updates and display updates. The original Week 1 and Week 2 decks start after these foundations, so they cannot be the opening teaching sequence.

This reconstructed plan begins with no assumed programming knowledge. It builds toward the assessed smart-environmental-monitoring solution in the assignment brief, its 3-hour blank-sketch programming test, and the LO3 individual professional-discussion video recording.

## Delivery Position

- **Primary beginner platform:** Arduino Uno in Tinkercad Circuits. It matches the surviving student code: `A0`, pins `2`, `9`, `13`, `INPUT_PULLUP`, `tone()` and `LiquidCrystal_I2C`.
- **Alternative simulator:** Wokwi. Use it where an I2C LCD, ESP32 component, serial monitor or shareable project link is needed.
- **Target-platform comparison:** ESP32, STM32 and Arduino-class boards remain essential for LO1. Students compare platforms in Task 1; beginner programming is not delayed by introducing ESP32-specific APIs on day one.
- **LO3 professional discussion:** individual 5-7 minute video recording, submitted with code, simulation/hardware evidence, initial and refined test plans, and a short issues-and-fixes log.
- **Programming test:** 3 hours, supervised, blank Arduino IDE sketch, no internet, as stated in the assignment brief.

## Assessment Evidence Map

| Assignment evidence | Teaching preparation |
| --- | --- |
| LO1 microcontroller architecture, elements, external communication and selection | Weeks 1-2 platform, I/O and protocol labs; data-sheet comparison task |
| LO2 functional embedded design, safety/reliability, device selection and trade-offs | Weeks 2-4 block diagram, pin map, component labs, risk and BoM workshops |
| LO3 code, testing, debugging and video professional discussion | Weeks 1-7 incremental simulator labs, test records, code reviews and final alarm integration |
| LO4 current uses, industrial robotics, trends and future applications | Week 8 research/presentation workshop plus independent presentation development |

## Weekly Delivery Overview

| Week | Core topic | Simulator labs | Assessed/evidence output |
| --- | --- | --- | --- |
| 1 | Embedded systems and programming foundations | L01 Blink; L02 traffic light | First sketch, code annotation, platform comparison launch |
| 2 | Digital inputs, logic and outputs | L03 button input; L04 button-controlled LED | Truth table, flowchart, initial system block diagram |
| 3 | Analogue sensing and decisions | L05 LDR voltage divider; L06 threshold alarm | Sensor data table, threshold rationale, initial test cases |
| 4 | Timing, sound and display | L07 non-blocking timing; L08 buzzer and I2C LCD | Interface plan, display/status prototype, updated code |
| 5 | Build the alarm application | L09 integrate LDR, switch, LED and buzzer; L10 LCD status | Working simulated alarm, initial test plan/results |
| 6 | Robustness, debounce and debugging | L11 debounce; L12 filter/hysteresis | Refined code, serial log, issues-and-fixes table |
| 7 | Design quality, safety and final verification | L13 fault handling; L14 full acceptance test | Refined test plan/results, risk controls, video rehearsal |
| 8 | Evidence, LO3 recording and wider impact | L15 programming-test rehearsal; L16 peer review | Individual PD video, programming-test preparation, LO4 research plan |

## Weekly Detail

### Week 1 - What Embedded Systems Do and How Code Runs

**Teach:** embedded-system examples; inputs, processing and outputs; the Arduino Uno pins; programme structure; variables; `setup()` and `loop()`; digital output; serial monitor.

**Labs:** L01 Blink an LED; L02 create a timed traffic-light sequence.

**Exit evidence:** screenshot of a working simulation, annotated code explaining each line, and a one-page comparison-research plan for ESP32, STM32 and Arduino-class boards.

### Week 2 - Digital Inputs, Decisions and Flowcharts

**Teach:** logic states, `HIGH`/`LOW`, `pinMode`, `digitalRead`, `if/else`, `INPUT_PULLUP`, pull-up resistors, safe LED use and simple flowcharts.

**Labs:** L03 read a button; L04 build a button-controlled LED with a clear truth table.

**Exit evidence:** truth table, annotated flowchart, block diagram and first pin map for the monitoring system.

### Week 3 - Analogue Sensors and Threshold Decisions

**Teach:** voltage dividers, LDR behaviour, ADC values, `analogRead`, calibration, thresholds, range checking and serial logging.

**Labs:** L05 read/plot simulated LDR values; L06 create a threshold-controlled alarm indicator.

**Exit evidence:** sensor test data table, justified threshold and subset test plan covering the sensor and LED.

### Week 4 - Time, Sound and User Feedback

**Teach:** `delay()` limitations, `millis()`, state variables, `tone()`/`noTone()`, PWM concept, I2C principle and LCD status displays.

**Labs:** L07 blink without blocking; L08 buzzer alarm and I2C LCD status.

**Exit evidence:** timing/state diagram, display prototype and interface justification for Task 1/Task 2.

### Week 5 - Integrate the Smart Environmental Alarm

**Teach:** decomposition into functions, function parameters/returns, global versus local variables, system block diagram, integration order and safe wiring checks.

**Labs:** L09 integrate LDR, LED and buzzer; L10 add curtain switch and LCD indication.

**Exit evidence:** working simulation, code arranged into `readSensors()`, `updateOutputs()` and `updateDisplay()` or equivalent, and initial test plan/results for part functionality.

### Week 6 - Make It Reliable and Debuggable

**Teach:** switch bounce, software debounce, filtering, hysteresis, serial diagnostics, `lcd.clear()` flicker, fault isolation and non-blocking structure.

**Labs:** L11 implement/measure software debounce; L12 filter noisy LDR readings and introduce hysteresis.

**Exit evidence:** before/after code, serial log, revised test cases and issues-and-fixes table.

### Week 7 - Safety, Testing and Professional Evidence

**Teach:** test design, expected results, repeatability, acceptance criteria, invalid sensor readings, timeout/failsafe ideas, fuse/regulator/decoupling concepts, risk matrix and test documentation.

**Labs:** L13 create a safe response to an invalid input; L14 execute a full alarm acceptance test with at least eight cases.

**Exit evidence:** refined test plan covering all functions, test results, risk-control table, draft LO3 video storyboard and peer feedback.

### Week 8 - Individual Competence and Wider Embedded Systems

**Teach:** programming-test strategy, debugging from a blank sketch, explaining code honestly, recording a technical video, current industrial embedded applications, IoT, AI at the edge, cybersecurity and sustainability.

**Labs:** L15 timed programming-test rehearsal; L16 peer-review an alarm demonstration and practise the professional-discussion video.

**Exit evidence:** individual 5-7 minute LO3 video recording, programming-test checklist and LO4 presentation research plan.

## Core Lab Operating Rules

- Students save one simulator project per lab and submit a screenshot, code copy and short reflection.
- Each lab is completed first in simulation, then on real hardware when it is available.
- Students must state the pin mapping, expected behaviour and test result before requesting help.
- Troubleshooting follows a fixed order: power/ground, wiring, pin number, minimal code, serial evidence, then integration.
- No student begins the full alarm project until L01-L08 have been evidenced.

## Hardware and Software Minimum Set

- Tinkercad Circuits accounts; Wokwi accounts for ESP32/I2C extension work.
- Arduino Uno-compatible board, USB cable and Arduino IDE for the programming-test pathway.
- Breadboard, jumper wires, LEDs, 220 ohm resistors, pushbuttons, LDRs, 10 kOhm resistors, passive buzzer and 16 x 2 I2C LCD.
- Optional target extension: ESP32 development board, environmental sensor and regulated power module.

## Tutor Decision Points

- Use the Week 1 exit task to identify students who need a one-hour optional programming clinic before Week 2.
- Do not introduce interrupts, FreeRTOS, Wi-Fi, BLE, KiCad PCB layout or ESP32 ADC attenuation until students can complete L01-L10 independently.
- If the group is strong, use the prior advanced Week 1 and Week 2 decks as an optional extension after Week 8, not as prerequisite content.
