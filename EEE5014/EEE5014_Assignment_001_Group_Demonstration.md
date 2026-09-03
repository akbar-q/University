# Assignment Brief: EEE5014 Assessment 001

## Module and Assessment Information

| Item | Details |
| --- | --- |
| Programme | BEng (Hons) Electrical and Electronic Engineering |
| Level | HE5 (Year 2) |
| Module | EEE5014: Intermediate Embedded Systems |
| Assessment | 001: Group Demonstration of Project Outcomes |
| Weighting | 50% of the module |
| Format | 15-25 minute group demonstration plus 5 minutes of questions |
| Learning outcomes assessed | LO1, LO3, and LO4 |
| Module tutor | [To be confirmed] |
| Hand-out date | [To be confirmed] |
| Demonstration window | [To be confirmed] |
| Presentation limit | <mark>**PROVISIONAL: maximum 12 content slides for the demonstration pack; 15-25 minutes plus 5 minutes of questions. Edit before issue.**</mark> |

## Aim

Design, build, test, demonstrate, and professionally evaluate a **laboratory pump condition-monitoring and protective-interlock system**. This HE5 project builds on introductory work through requirements traceability, integrated sensing and control, structured software, systematic testing, manufacture/sustainability awareness, and communication with technical and non-technical audiences.

## Learning Outcomes

- **LO1:** Apply an integrated or systems approach to the solution of embedded systems problems. (C6)
- **LO3:** Communicate effectively on embedded systems matters with technical and non-technical audiences. (C17)
- **LO4:** Adopt an inclusive approach to engineering practice and recognise the responsibilities, benefits and importance of supporting equality, diversity and inclusion. (C11)

## Vocational Scenario

An engineering teaching laboratory uses a recirculating low-voltage process-water rig to demonstrate flow and pressure. A technician currently relies on visual checks to identify low flow, an empty reservoir, overheating, or loose sensor connections. The School requires a condition-monitoring prototype that presents clear status, logs events, and inhibits a simulated pump system when a credible abnormal condition occurs.

Your team is an embedded-systems consultancy asked to deliver a prototype and explain how it could mature into a maintainable product. The system must distinguish normal, warning, and fault states; support controlled recovery; and communicate clearly to operators and technicians.

The prototype is a low-voltage educational demonstrator. It may use a small DC pump, motor simulator, LEDs, or tutor-approved substitute. It must not control a mains-powered motor or be represented as a safety-certified industrial protection system.

Minimum technical requirements:

- Use an Arduino Uno R3, ESP32-S1, ESP32-C3, or tutor-approved microcontroller platform with a documented development toolchain.
- Acquire at least three inputs, including two sensors or one sensor plus a realistic simulated analogue/digital condition.
- Use at least one digital and one analogue or timed/PWM interface.
- Drive an operator-facing status interface and a low-voltage pump/motor simulator or inhibit output.
- Implement start-up/self-check, normal, warning, fault/inhibited, and recovery states.
- Record timestamped or sequence-numbered events by serial output, non-volatile storage, or approved equivalent.
- Demonstrate a communication interface beyond program upload: UART logging, I2C, SPI, Bluetooth, Wi-Fi, or CAN simulation where facilities permit.
- Demonstrate unit testing, system testing, fault injection or safe simulation, and requirement-to-test traceability.
- Evaluate manufacturability, maintainability, RoHS/WEEE, power use, and end-of-life disposal.

## Platform Guidance

Select one controller and justify its fitness for the completed system. Arduino Uno R3, ESP32-S1, and ESP32-C3 are common laboratory options. Compare the required I/O, ADC channels, timers/PWM, memory, communication interfaces, power constraints, development environment, and cost against your requirements.

An ESP32 platform may be appropriate where wireless communication, greater processing capability, or expanded peripherals are justified, but its 3.3 V logic limits and credential/data-handling implications must be designed for. An Arduino Uno R3 may be appropriate for a simpler wired design, but limitations around memory, connectivity, and I/O expansion must be considered. Document voltage compatibility and any level shifting, driver stage, or pull-up requirements.

## Team Working Expectations

Teams normally contain three to five students. Teams appoint a coordinator and agree a working structure while retaining shared responsibility for technical quality. Keep evidence of planning, review, version control, peer support, inclusive participation, and decisions. Tutors may question any group member to confirm their technical understanding and contribution.

## Tasks

### Task 1.1: Requirements, Traceability, and Architecture

Prepare and present a design package containing:

- Stakeholders, operating context, system boundary, assumptions, constraints, and a clear separation between monitoring, control, and safety-inhibit functions.
- At least eight functional and six non-functional requirements, each with an identifier, measurable acceptance criterion, priority, verification method, and assigned system state where relevant.
- Requirements-traceability matrix linking each requirement to design elements and at least one planned test. Include requirements for start-up/self-check, normal monitoring, warning, fault inhibition, recovery, event logging, and operator information.
- Measurable trigger definitions for each warning/fault. State the sensor condition, simulated input, delay/debounce where used, expected status indication, event-log entry, and output/inhibit response.
- Block diagram showing sensors, interfaces, controller, storage/communications, HMI, actuator/inhibit output, and power subsystem.
- Hardware architecture identifying voltage domains, signal types, buses, protective components, common ground, and the method used to isolate or drive the low-voltage motor/pump simulator.
- Software architecture showing modules, state machine, timing approach, data flow, validity checking, fault latching, event logging, and recovery/reset logic.
- Reasoned selection of controller, sensors, communications, and storage/display components using official sources and stated trade-offs. Include a component/interface table with voltage, protocol, accuracy/range or resolution where relevant, and design rationale.

### Task 1.2: Build and Demonstrate the Prototype

During the live demonstration, show a planned sequence rather than isolated features. Each team member must explain or demonstrate a meaningful part of the system. Show:

- Start-up and self-check behaviour, including the expected safe output state before valid readings are accepted.
- Acquisition, scaling/validation, and presentation of each required input; show serial output, display, or log evidence for at least one live reading.
- Normal state with meaningful status information and the enabled output state.
- Warning condition and correct response, including the exact trigger condition and any changed HMI indication.
- Safely simulated fault that latches the fault/inhibited state, changes the pump/motor simulator output to safe condition, records an event, and communicates the condition.
- Controlled recovery that shows why accidental restart cannot occur. For example, show a valid-condition check followed by a deliberate reset or acknowledge action.
- The additional communication interface or logged data, including an example event record with time/sequence, state, and cause.
- Relevant code structure for sensing, state/decision logic, outputs, communication/logging, and fault handling. Be ready to locate the responsible function/module and explain its inputs and outputs.

Bring code, diagrams, circuit/wiring record, and test evidence. Tutors may ask any member to explain a design choice, demonstrate a subsystem, or explain fault diagnosis.

### Task 1.3: Test, Evaluate, and Communicate Responsibly

Show systematic evidence of:

- Unit tests for significant code modules, interfaces, or subsystems. Include a test identifier, purpose, inputs/setup, expected output, observed output, and evidence reference.
- System test plan covering every functional requirement, normal/boundary operation, communication/logging, warning/fault states, sensor disconnection/implausible values where safe, restart, and recovery.
- Expected and observed results, pass/fail decisions, evidence references, corrective actions, and a requirement-traceability link.
- At least two integration issues, their root causes, resolutions, retest outcomes, and the design/process lesson learned.
- Evaluation of reliability, response time, data validity, maintainability, cost, board/platform limitations, and limitations of the prototype compared with a deployable industrial product.
- Short non-technical explanation for a technician covering benefits, operating limitations, status indicators, and actions for warning/fault states.
- Accessible HMI decisions, such as clear labels, colour-independent status information, understandable alarms, accessible positioning, and plain-language instructions.
- How equitable participation was enabled in planning, task allocation, review, practical work, and the live demonstration.
- Sustainability evaluation covering component choice, power use in normal/fault states, repairability, avoiding unnecessary electronics, RoHS awareness, WEEE disposal, and reuse/recycling.
- Clear acknowledgement that this prototype does not replace formal industrial safety systems, risk assessment, or compliance validation.

## Milestone Tracker

Set the dates with the module tutor. Shade or tick the agreed task milestone as it is completed.

| Task | Week 1 / Date | Week 2 / Date | Week 3 / Date | Week 4 / Date | Week 5 / Date | Week 6 / Date |
| --- | --- | --- | --- | --- | --- | --- |
| Task 1.1: Requirements and architecture | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| Task 1.2: Prototype build and integration | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| Task 1.3: Testing, evaluation, and communication | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| Demonstration rehearsal and delivery | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |

## Deliverables

- **Live group demonstration:** all team members must attend and participate. Tutor-approved recorded contingency evidence may be used only where a live demonstration is impossible.
- **Demonstration pack:** one PDF containing the slides or display-board content submitted through Moodle/Turnitin as directed by the tutor. Normally this should contain no more than 12 content slides.
- **Technical project archive:** versioned source code, circuit/wiring record, pin map, and relevant original design files in the format directed by the tutor.
- **Operator guide:** a concise, non-technical guide explaining normal operation, warning/fault indications, and required operator action.

Use filenames such as `EEE5014_A1_TeamName_DemoPack.pdf` and `EEE5014_A1_TeamName_Code.zip`.

## Word Count and Research Expectations

<mark>**PROVISIONAL COURSE-DESIGN TEXT: This practical demonstration has no word count. Limit the demonstration pack to 12 content slides and use the 15-25 minute presentation period effectively. Speaker notes, appendices, source code, figures, tables, and references are not included in the slide limit. Edit or remove this guidance before publishing the brief.**</mark>

<mark>**PROVISIONAL COURSE-DESIGN TEXT: Use at least eight relevant, credible sources. Include official datasheets/documentation for the selected platform and key components, plus appropriate sources on testing, sustainability, RoHS/WEEE, accessibility, and manufacture. Edit the number and source mix before publishing the brief.**</mark>

## Report Structure

Organise the demonstration pack in the following order:

1. Cover slide/page with module, assessment, project title, team member names/numbers, tutor, and demonstration date.
2. Task 1.1: Requirements, traceability, and hardware/software architecture.
3. Task 1.2: Prototype build, integration, and live operating evidence.
4. Task 1.3: Testing, evaluation, communication, inclusive practice, and sustainability.
5. Team contribution summary.
6. Reference list and source/code acknowledgements.
7. Appendices or supplementary files: detailed circuit/wiring record, pin map, code, test records, and operator guide.

## Marking Scheme

| Criterion | Marks |
| --- | ---: |
| Requirements, traceability, and integrated architecture | 20 |
| Prototype functionality, integration quality, and demonstration | 25 |
| Testing, fault handling, debugging, and technical evaluation | 20 |
| Communication with technical and non-technical audiences | 15 |
| Inclusive design, teamwork, and sustainable practice | 10 |
| Professional organisation, evidence, and responses to questions | 10 |
| **Total** | **100** |

## Presentation, Referencing, and Academic Integrity

- Follow current University of Greater Manchester assessment guidance and module-tutor formatting instructions.
- Use legible diagrams, meaningful captions, correct units, and consistent terminology.
- Use University Harvard referencing. Cite official datasheets for technical specifications and authoritative sources for sustainability, RoHS, WEEE, accessibility, and manufacturing claims.
- All work must be accurately attributed. Acknowledge sources, shared artefacts, software, code libraries, and tools.
- The module specification does not state a specific generative-AI category; follow current University policy and module-tutor instructions on tool use and declarations.

## Starting Sources

- Brindley, K. (2005) *Practical Electronics Construction: Techniques, Equipment and Projects*. Newnes.
- Frenzel, L.E. (2020) *Practical Electronic Design for Experimenters*. McGraw-Hill Education.
- Horowitz, P. and Hill, W. (2015) *The Art of Electronics*. 3rd edn. Cambridge University Press.
- Monk, S. (2023) *Programming Arduino: Getting Started with Sketches*. 3rd edn. McGraw-Hill.
- Official controller, sensor, interface, storage, and actuator datasheets/technical documentation.

## Indicative Grade Standard

Work at 70% and above shows an integrated, robustly tested prototype; disciplined requirements traceability; thoughtful evaluation; effective communication; and inclusive, sustainable engineering judgement. Work at 50-69% meets requirements with a functioning, tested solution but less depth, autonomy, or critical insight. Work at 40-49% demonstrates essential achievement with limited integration or incomplete evidence. Work below 40% does not adequately meet the learning outcomes.