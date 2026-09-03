# Assignment Brief: EEE4015 Assessment 001

## Module and Assessment Information

| Item | Details |
| --- | --- |
| Programme | BEng (Hons) Electrical and Electronic Engineering |
| Level | HE4 (Year 1) |
| Module | EEE4015: Introductory Embedded Systems |
| Assessment | 001: Design and Practical Investigation Portfolio |
| Weighting | 50% of the module |
| Learning outcomes assessed | LO1 and LO2 |
| Module tutor | [To be confirmed] |
| Hand-out date | [To be confirmed] |
| Submission deadline | [To be confirmed] |
| Indicative word count | <mark>**PROVISIONAL: 2,000 words maximum, excluding code, figures, tables, captions, references, and appendices. Edit before issue.**</mark> |

## Aim

Working in a small team, specify, construct, program, test, and evaluate an **automated seedling propagation cabinet controller**. This introductory project develops practical embedded-systems capability using sensors, low-voltage actuators, Arduino C/C++, and documented testing.

## Learning Outcomes

- **LO1:** Demonstrate an integrated or systems approach to solving embedded systems problems. (C6)
- **LO2:** Demonstrate practical laboratory and workshop skills to investigate embedded systems problems. (C12)

## Vocational Scenario

The School of Engineering wishes to use small propagation cabinets for sustainability activities. Temperature, soil moisture, and lighting are currently checked manually. This produces inconsistent growing conditions and wastes energy.

Your team is an entry-level embedded-systems design group tasked with a benchtop prototype controller. It must monitor conditions, display its state clearly, and control low-voltage loads safely. The prototype must not connect directly to mains electricity, mains-powered heaters, pumps, or fans.

The team must agree its detailed design while meeting these minimum requirements:

- Use an Arduino Uno R3, ESP32-S1, ESP32-C3, or tutor-approved equivalent.
- Acquire two or more inputs, including at least one physical sensor.
- Control two or more low-voltage outputs, such as LEDs, a buzzer, servo, or tutor-approved fan/relay module.
- Implement automatic control using agreed thresholds and a manual override or test mode.
- Present status through serial output, LEDs, or a display.
- Use modular, readable Arduino C/C++ code.
- Test the prototype against agreed requirements.

## Platform Guidance

Arduino Uno R3, ESP32-S1, and ESP32-C3 are the usual project platforms. Choose one platform and justify it against the project requirements rather than selecting it by availability alone. Your justification should consider available GPIO and analogue inputs, PWM/timer needs, communication interfaces, memory/code complexity, power supply, development tools, and future connectivity.

Where an ESP32 board is used, identify its 3.3 V logic constraints and show how every connected sensor, display, and actuator interface is compatible. Where an Arduino Uno R3 is used, identify any limitation created by its available I/O, analogue inputs, memory, or lack of built-in wireless connectivity. Do not connect a 5 V output directly to a 3.3 V-only input.

## Team Working Expectations

Teams normally contain three or four students. Agree roles, maintain a shared task plan, and record meeting decisions. Every member must make a meaningful practical contribution and keep an individual logbook. Tutors may ask questions or request a short individual demonstration to verify contribution.

## Tasks

### Task 1.1: Requirements and System Context

Produce a concise design brief containing the following clearly labelled information:

- Intended users, operating environment, project boundaries, and problem statement.
- At least six functional requirements, each with an identifier, a clear action, a measurable acceptance criterion, and an intended verification method. For example, specify when a temperature warning is shown, when a moisture-based output changes state, and how manual override is enabled/disabled.
- At least four non-functional requirements addressing safety, usability, cost, power, reliability, or maintainability. Include a realistic prototype budget, safe operating voltage, and a clear definition of what the system must not do.
- A system-context diagram identifying users, sensors, controller, outputs, status interface, and power source.
- A simple operating narrative for normal operation, one abnormal condition, and manual/test mode. State the input values or simulated conditions used to trigger each state.
- A short requirements table that identifies the selected board and proposed inputs/outputs, for example temperature sensor, soil-moisture sensor or potentiometer, light sensor, status LEDs, buzzer, display, servo, or low-voltage fan.

### Task 1.2: Integrated Embedded-System Design

Design a complete solution. The design must be sufficiently detailed for another student to build and test it. Include:

- Labelled block diagram showing signal and power flow.
- Circuit diagram or legible wiring diagram showing supply rails, common ground, and any required pull-up, current-limiting, driver, or protection components.
- Pin-allocation table stating board pin, component, input/output direction, interface type, expected voltage, and purpose. Identify unused pins where relevant to demonstrate that the chosen board has sufficient capacity.
- Explanation of the selected controller's processor, memory, I/O, analogue input where used, timers/PWM, and communication interfaces. Connect each capability to a specific proposed feature.
- Explanation of each external interface, for example a digital sensor through GPIO, an analogue sensor through ADC, LED brightness/motor control through PWM, an I2C display, or UART serial monitoring.
- Component-selection table justified using datasheets or official technical sources. Include operating voltage, measuring/operating range, accuracy or resolution where relevant, and a reason for selection.
- Flowchart, state diagram, or pseudocode covering power-up, sensor read, range check, threshold decision, automatic output control, manual/test mode, error display, and return to normal operation.
- Brief trade-off discussion covering board selection and at least two choices such as cost versus capability, simplicity versus control precision, or power consumption versus lighting duration.

### Task 1.3: Build, Program, and Investigate

Construct a safe low-voltage prototype in laboratory sessions. Build and test one subsystem at a time before integrating the complete system. Provide evidence of:

- Safe and tidy prototype assembly, power isolation before changes, and correct use of equipment.
- Incremental implementation record: board/serial-monitor check, each input, each output, status interface, automatic control, then manual/test mode.
- Well-structured Arduino C/C++ with separate functions for setup, reading inputs, checking validity, deciding the state, and updating outputs. Use meaningful names and succinct comments for non-obvious logic.
- Screenshots, photographs, serial logs, or annotated code extracts proving sensor values, threshold decisions, output changes, manual override, and a simulated invalid/fault input.
- Initial test plan covering a subset of functions. Include at least one normal reading, one threshold/boundary reading, one manual/test-mode check, and one invalid or disconnected-sensor simulation where safe.
- Test-results table comparing expected and observed behaviour, including a pass/fail outcome and evidence reference.
- At least two issues found, the diagnosis undertaken, corrective action, retest, and final result.

## Milestone Tracker

Set the dates with the module tutor. Shade or tick the agreed task milestone as it is completed.

| Task | Week 1 / Date | Week 2 / Date | Week 3 / Date | Week 4 / Date | Week 5 / Date | Week 6 / Date |
| --- | --- | --- | --- | --- | --- | --- |
| Task 1.1: Requirements and context | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| Task 1.2: Integrated design | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| Task 1.3: Build and initial testing | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| Portfolio review and submission | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |

## Deliverables

- **Group technical portfolio:** one PDF or Word document submitted through Moodle/Turnitin in the tutor-directed format.
- **Source code:** an `.ino` file or tutor-approved equivalent, with readable naming and comments where needed.
- **Design files:** circuit or wiring diagram, pin map, and flowchart/state diagram in their original or exported format, as directed by the tutor.
- **Individual logbook evidence:** a dated logbook extract from each team member, included in the portfolio appendix or submitted separately if directed by the tutor.

Use filenames such as `EEE4015_A1_TeamName_Portfolio.pdf` and `EEE4015_A1_TeamName_Code.ino`.

## Word Count and Research Expectations

<mark>**PROVISIONAL COURSE-DESIGN TEXT: The group portfolio should contain no more than 2,000 words of main narrative. The word count excludes code, figure/table captions, figures, tables, references, and appendices. Edit or remove this limit before publishing the brief.**</mark>

<mark>**PROVISIONAL COURSE-DESIGN TEXT: Use at least five relevant, credible sources. These must include official technical documentation or datasheets for the selected controller and key components, plus suitable textbooks, standards, academic, or professional sources where relevant. Edit the number and source mix before publishing the brief.**</mark>

## Report Structure

Organise the group technical portfolio in the following order:

1. Cover page with module, assessment, project title, student names/numbers, tutor, and submission date.
2. Team contribution statement with roles and evidence produced.
3. Task 1.1: Requirements and system context.
4. Task 1.2: Integrated embedded-system design.
5. Task 1.3: Build, program, and investigate.
6. Group conclusion identifying working features, limitations, and the next development priority.
7. Reference list.
8. Appendices: diagrams, code extracts, initial test plan/results, photographs/screenshots, and individual logbook extracts.

## Marking Scheme

| Criterion | Marks |
| --- | ---: |
| Clear, testable requirements and system context | 15 |
| Integrated design, interfaces, and component justification | 20 |
| Practical construction, laboratory practice, and implementation evidence | 25 |
| Initial testing, debugging evidence, and interpretation | 15 |
| Technical communication, figures/tables, and referencing | 10 |
| Individual logbook evidence and verified contribution | 15 |
| **Total** | **100** |

## Presentation, Referencing, and Academic Integrity

- Follow current University of Greater Manchester written-assessment guidance and module-tutor formatting instructions.
- Use numbered headings, legible diagrams, correctly labelled units, and University Harvard referencing.
- Cite manufacturer datasheets and official documentation when stating component capability, voltage range, timing, protocol, or other specifications.
- All work must be the students' own. Acknowledge sources, collaboration, code libraries, software, and tools used.
- The module specification does not state a specific generative-AI category; follow current University policy and module-tutor instructions on tool use and declarations.

## Starting Sources

- Bayle, J. (2013) *C Programming for Arduino*. Packt Publishing.
- Marwedel, P. (2022) *Embedded System Design: Embedded Systems Foundations of Cyber-Physical Systems, and the Internet of Things*. 4th edn. Springer.
- Monk, S. (2023) *Programming Arduino: Getting Started with Sketches*. 3rd edn. McGraw-Hill.
- Official datasheets and technical documentation for selected controllers, sensors, displays, and actuators.

## Indicative Grade Standard

Work at 70% and above presents a coherent and tested system with well-justified choices, reliable practical evidence, insightful evaluation, and highly professional records. Work at 50-69% meets requirements with sound design and testing but less depth or critical evaluation. Work at 40-49% shows essential achievement with limited analysis or incomplete evidence. Work below 40% does not adequately meet the stated learning outcomes or provide credible individual-contribution evidence.