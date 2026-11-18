# EEE4015 Introductory Embedded Systems

## Ten-Week Teaching Plan

**Audience:** HE4 / first-year Electrical and Electronic Engineering students encountering microcontrollers for the first time  
**Primary platforms:** Arduino Uno R3 and an approved ESP32-family development board  
**Project context:** automated seedling propagation cabinet controller  
**Assessment alignment:** Assessment 001 (design and practical investigation), followed by Assessment 002 (secure operation, refinement, teamwork, and development)

## 1. Purpose and Delivery Assumptions

This plan moves students from basic embedded-system concepts and safe microcontroller use to a tested, documented prototype and a proportionate security and resilience review. The propagation cabinet is a teaching context, not a safety-certified product. All practical work is low voltage. Students must not connect a prototype directly to mains electricity, mains-powered heaters, pumps, or fans.

The module specification allocates 67.5 scheduled hours and 132.5 independent-study hours across 200 total learning hours. For planning purposes, this document models ten teaching weeks at an average of **6.75 scheduled hours and 13.25 independent-study hours per week**. A suggested weekly pattern is 1.75 hours of concept teaching and worked examples, 4 hours of supervised practical work, and 1 hour of team/tutorial activity. Tutors should adjust the pattern to the actual timetable and confirm assessment dates. The weekly independent-study allowance is indicative, not a requirement to spend every hour on one task.

The two assessments each carry 50% of the module mark. Weeks 1–5 principally prepare students for Assessment 001; weeks 6–10 principally prepare them for Assessment 002. The individual logbook, evidence of contribution, collaboration, and CPD are developed throughout rather than left until the final week.

## 2. Intended Learning Progression

By the end of the ten weeks, students should be able to:

1. Explain an embedded system as a coordinated combination of controller, inputs, outputs, software, power, operating environment, and users.
2. Select and justify a suitable beginner controller against requirements, identifying relevant I/O, analogue input, timing, memory, power, and communication constraints.
3. Write, upload, read, and debug introductory Arduino C/C++ programs using variables, selection, repetition, functions, and serial output.
4. Connect and use basic digital and analogue inputs and low-voltage outputs safely, including recognition of logic-voltage, current, grounding, and driver constraints.
5. Describe and use introductory UART, I2C, and SPI interfaces at a conceptual and practical level appropriate to the selected hardware.
6. Design a simple controller with measurable requirements, a pin map, a clear control algorithm, status indication, and a manual/test mode.
7. Test normal, boundary, invalid-input, reset, and recovery behaviour; record expected and observed results and use evidence to debug the design.
8. Identify realistic security and resilience risks, score and prioritise them, and select proportionate software, hardware, and procedural controls.
9. Contribute effectively to a small design team and maintain an individual record of activity, learning, feedback, and next development actions.
10. Communicate a design and its limitations through diagrams, code, test evidence, a user guide, and a concise portfolio.

## 3. Assessment and Evidence Map

| Assessment / learning outcome | Evidence developed during teaching |
| --- | --- |
| A001, LO1: integrated or systems approach | Requirements and context; system and signal-flow diagrams; controller and component choices; pin allocation; algorithm or state diagram; trade-offs; traceable requirements. |
| A001, LO2: practical investigation skills | Safe assembly; incremental build record; sensor and output checks; use of serial tools and measurement equipment; test plan and results; debugging and retest evidence. |
| A002, LO3: proportionate security-risk mitigation | Asset inventory; threats and consequences; likelihood/impact ratings; selected controls; defined safe state; fault-response flow; residual-risk evaluation. |
| A002, LO4: effective individual and team contribution | Agreed roles and task plan; meeting and decision records; peer review; handovers; contribution statement; evidence of practical and communication work. |
| A002, LO5: self-learning and CPD | Dated individual logbook; feedback response; skills reflection; identified gap; SMART actions with dates and success measures. |

### Evidence habits to establish from week 1

- Date and title logbook entries; record the aim, what was attempted, what happened, evidence location, and next action.
- Keep original code and design files under version control where available; use meaningful filenames and record versions for submitted revisions.
- Photograph or capture work only when it adds evidence, and label the image with the test or requirement it supports.
- Distinguish an intended result from an observed result. A test is not evidence merely because the code compiled.
- Cite official board documentation and component datasheets for pin limits, voltage, timing, ranges, and accuracy. Verify exact board variants and component modules before wiring.

## 4. Safety and Platform Ground Rules

These points are revisited whenever students change a circuit or platform.

- Work only with tutor-approved low-voltage supplies and loads. Disconnect power before changing wiring. Inspect the circuit before power-up.
- A microcontroller GPIO pin is a logic signal, not a general-purpose power supply. Respect the board's documented pin-voltage and current limits; never assume a pin can drive a motor or other substantial load directly.
- Use a suitable current-limiting resistor with a bare LED. Use an appropriate transistor or MOSFET driver and protection arrangement for inductive loads such as a DC motor or relay. Follow the component and module documentation.
- Establish a common reference ground where required by the circuit, while keeping power wiring appropriate to the load. Do not mix supply rails based on wire colour alone; label and measure them.
- The Uno R3 commonly uses 5 V logic, while ESP32 GPIO is 3.3 V logic and is not generally 5 V tolerant. Never connect a 5 V output directly to an ESP32 input. Check any sensor breakout's supply and signal specifications independently.
- Board variants differ. Confirm the exact ESP32 model, pinout, ADC behaviour, PWM API, and permitted pins using its official documentation. Do not assume a pin number or Arduino function behaves identically across all boards.
- Treat relay modules, fans, servos, and other actuators as specific components with specific supply and interface requirements. The prototype must not switch mains loads.
- Provide a defined output state for startup, reset, invalid readings, and recovery. Avoid leaving actuators in an undocumented or unpredictable state.
- Wireless connectivity is optional for the learning objectives. If used on an ESP32, use a tutor-approved network and avoid placing credentials or private data in a public repository or presentation.

## 5. Weekly Delivery Plan

### Week 1: What Makes a System Embedded?

**Purpose:** Build the system-level mental model and establish safe, observable development practice before students begin wiring project hardware.

**Concepts to teach**

- Embedded system versus general-purpose computer: a dedicated function, physical inputs and outputs, constrained resources, interaction with a real environment, and often timing or reliability requirements.
- A simple input–process–output model, extended to include power, users, environment, communications, and feedback. Introduce the idea that a sensor reading is not itself a decision and an output does not happen without an interface and energy source.
- Basic control-loop vocabulary: plant/process, measurement, controller, setpoint or threshold, actuator, disturbance, and feedback. Use a cabinet example such as measuring soil moisture and deciding whether to show a warning or activate a low-voltage indicator.
- Requirements versus implementation: state what the system must achieve before choosing the board or writing code. Introduce functional and non-functional requirements, measurable acceptance criteria, project boundaries, and verification methods.
- Controller overview: CPU, memory, clock, GPIO, ADC, timers/PWM, and communication peripherals. Explain that a development board adds connectors, power regulation, USB/programming support, and other circuitry around a microcontroller.
- Compare Uno R3 and ESP32-family boards as candidates, not as interchangeable objects. Consider logic voltage, number and kind of pins, ADC/PWM features, memory, USB/programming workflow, power, and whether wireless is actually required. The exact board variant must be identified.
- Breadboard anatomy, supply rails, row/column connections, polarity, continuity, and the purpose of a common signal reference. Introduce safe setup and power isolation.

**Suggested scheduled sequence (6.75 hours)**

1. Concept session (1.75 h): map a familiar embedded product; build a cabinet system context diagram; compare two board datasheets or official board pages.
2. Supervised practical (4 h): identify board, USB cable, breadboard, resistors, and LED; install or check the approved IDE and board support; connect to a sample sketch; run a serial-output or tutor-prepared board check; inspect a printed or simulated circuit before wiring.
3. Team/tutorial (1 h): form teams, agree communication norms and initial roles, create a shared task list, and start individual logbooks.

**Practical outcome:** A verified development setup, a first system context diagram, and a dated logbook entry. No assumption that students already know C/C++ or electronics notation.

**Formative check:** Ask students to trace one complete signal-and-power path from a physical condition to a user-visible output. Check that they can distinguish a requirement (what) from a design choice (how).

**Interactive presentation idea:** An SVG system map where students reveal or connect user, sensor, controller, output, and supply nodes. A board-comparison view can highlight only the specification relevant to a selected requirement. Keep exact board facts linked to official references rather than treating a generic comparison as definitive.

**Independent study and evidence:** Read the assessment brief; draft the problem statement, users, operating environment, and project boundary; compare the exact available boards; record one skill goal and one question for the next lab.

**Assessment link:** A001 Task 1.1 begins: context, requirements, candidate platform, and team plan.

### Week 2: First Programs, Digital Output, and Digital Input

**Purpose:** Introduce the programming and electrical patterns students need to make the board observably respond to a simple input.

**Concepts to teach**

- Sketch structure and execution: `setup()` runs for initial configuration; `loop()` repeats. Explain compile, upload, reset, and runtime as separate stages, and distinguish compiler messages from program output.
- Values and types: variables, constants, integer and floating-point values, Boolean logic, meaningful names, and the difference between storing a value and displaying it. Introduce units in names or documentation where that improves clarity.
- Basic expressions and control flow: assignment, comparison, `if`/`else`, and a simple repeated action. Use a truth table or decision table before coding a threshold.
- Digital logic at the GPIO level: HIGH/LOW as logic states whose actual voltages depend on the board; input versus output direction; active-high and active-low circuits.
- LED interface: current-limiting resistor, polarity, and why GPIO current limits matter. Use the resistor and board documentation to choose a safe, approved circuit; do not make students infer a safe value from appearance alone.
- Button input: open circuit, pull-up or pull-down, floating input, internal pull-up where supported, and why an input must have a defined state. Introduce mechanical switch bounce as a source of multiple transitions, with software debounce reserved for later if needed.
- Serial monitor as an observation and debugging tool. Print labelled values and units where appropriate; avoid treating serial output as a substitute for a user-facing design requirement.

**Suggested scheduled sequence**

1. Worked examples (1.75 h): predict a short sketch's behaviour; trace variables through a decision; inspect a wiring diagram and identify the current path.
2. Supervised practical (4 h): upload a basic sketch; configure and blink an LED; add a button with a defined input state; print the button state to serial; change behaviour using an `if` statement; practise correcting one deliberately introduced compile or wiring error.
3. Team/tutorial (1 h): assign a small requirement-writing task and review whether its acceptance criterion can be tested.

**Practical outcome:** A digital input changes a visible output, with labelled serial evidence and a circuit diagram or annotated wiring image.

**Formative check:** Students explain what the resistor does, what happens to an unconnected input, and what the program does when the input is HIGH versus LOW. Tutor checks the powered circuit before operation.

**Interactive presentation idea:** A step-through code visualiser shows the current line, variable values, and resulting pin state. An SVG button circuit lets students toggle the switch and observe a pulled-up input, including the floating-input case as an explanatory simulation rather than unsafe hardware experimentation.

**Independent study and evidence:** Rebuild the sketch from a blank file; make a short fault-and-fix note; write two test cases with setup, input, expected result, and observed result.

**Assessment link:** A001 Task 1.3 starts with board/serial checks and incremental output/input implementation. Team role and logbook evidence continues for A002.

### Week 3: Analogue Signals and Sensor Measurement

**Purpose:** Teach that sensor data is a physical measurement requiring interpretation, calibration, range checks, and an understanding of the ADC.

**Concepts to teach**

- Sensor, transducer, signal conditioning, and measurement chain: physical quantity to electrical signal, interface, sampled digital value, conversion or calibration, and engineering interpretation.
- Analogue versus digital signal. Introduce voltage dividers using a sensor or potentiometer, the reference voltage, ground, and how the ADC measures a voltage rather than directly measuring temperature, light, or moisture.
- Sampling and quantisation at an introductory level. Relate nominal ADC bit depth to the number of representable codes, while explaining that real-world accuracy also depends on reference stability, noise, board implementation, sensor tolerance, and wiring. Do not assume ADC characteristics are identical on Uno and ESP32 variants.
- Convert a raw reading to a useful quantity only when the sensor and calibration method support it. Distinguish raw counts, voltage, and calibrated engineering units. Cite the chosen component documentation for operating range and accuracy.
- Threshold decisions, equality/boundary cases, hysteresis, and noise. Show how a single threshold can cause rapid switching when a reading fluctuates near the decision boundary; use a two-threshold example to introduce hysteresis.
- Plausibility and validity: permitted range, disconnected or shorted sensor symptoms, stale or implausible readings, and the difference between a valid-looking number and a trustworthy measurement.
- Safe sensor selection: potentiometer or approved low-voltage sensor module for initial investigations; verify whether the module's output can safely connect to the selected board's input.

**Suggested scheduled sequence**

1. Concept session (1.75 h): derive a simple voltage-divider relationship; examine ADC code ranges for the selected board; analyse a sample data trace around a control threshold.
2. Supervised practical (4 h): read a potentiometer or approved sensor; stream raw values to serial; observe the serial plotter; vary the input; document minimum/maximum observed values; implement a threshold and test below, at, and above it; add a basic plausible-range check or hysteresis demonstration.
3. Team/tutorial (1 h): select and justify at least one candidate project sensor and record what must be verified from its datasheet.

**Practical outcome:** A sensor/input subsystem with labelled measurements, an initial calibration or mapping note, and test evidence for normal and boundary values.

**Formative check:** Given a raw ADC value and a stated calibration, students estimate the corresponding quantity and state one reason the real measurement may differ. Ask what safe behaviour follows if the sensor is disconnected.

**Interactive presentation idea:** A Plotly.js graph pairs a simulated sensor voltage or raw ADC code with a calibrated value and threshold bands. Add controls for noise, sample interval, and hysteresis so the effect is visible. Clearly label simulated data and do not imply it is a datasheet guarantee.

**Independent study and evidence:** Research the selected sensor from a manufacturer or official source; document supply and output voltage, range, accuracy/resolution, pinout, and calibration limitations. Add one sensor fault case to the requirements or operating narrative.

**Assessment link:** A001 Tasks 1.1–1.2: measurable input requirements, sensor choice, interface, and acceptance evidence. Validity checking introduces A002 resilience thinking.

### Week 4: Outputs, Actuators, PWM, and Communication Interfaces

**Purpose:** Extend the input/output model to safe actuation and introduce common interfaces students will encounter in an integrated prototype.

**Concepts to teach**

- Indicator outputs versus actuators: LEDs and buzzers communicate status; motors, fans, servos, and relays produce physical action and may need more current or a separate supply.
- GPIO current and voltage limits; why a GPIO signal usually controls a driver rather than powering a motor. Introduce transistor/MOSFET switching as a controlled low-side driver at a conceptual level, including the need to follow the selected component circuit and protect against inductive transients where applicable.
- PWM as a digital waveform with duty cycle. Relate duty cycle to average delivered energy for suitable loads, while noting that PWM is not a true analogue voltage and not every actuator responds linearly. Explain frequency and timer/channel differences at a level appropriate to the board selected.
- Servo control as a timed control signal to a specific compatible servo; separate servo power considerations from the logic signal and follow the servo's documentation.
- Communication purpose and topology: UART TX/RX, I2C shared clock/data with addressing, and SPI clock/data/chip-select. Identify the wires, direction, shared ground, and common debugging clues. Students need an interface-selection rationale, not protocol implementation expertise in every protocol.
- Optional status display: use an approved I2C display module to show measured state or fault. Explain that module logic voltage and pull-up arrangement must be checked.
- Timing and control responsiveness: introduce the difference between continuously checking a condition and waiting in a long blocking delay. Defer detailed non-blocking timing implementation to week 5.

**Suggested scheduled sequence**

1. Concept session (1.75 h): trace logic signal and load-current paths; compare UART, I2C, and SPI diagrams; calculate example PWM duty cycle from high and period times.
2. Supervised practical (4 h): dim an LED with supported PWM; inspect a tutor-approved driver circuit or module for a low-voltage load; optionally connect a compatible I2C display; document supply, signal, and ground connections; test output states independently before integration.
3. Team/tutorial (1 h): draft the project pin-allocation table and identify pin conflicts, voltage mismatches, and supply dependencies.

**Practical outcome:** At least one output interface is demonstrated safely; teams have a preliminary interface and pin plan.

**Formative check:** Students explain why a motor must not be driven directly from a GPIO pin, identify which communication lines are shared or directional, and calculate a simple PWM duty cycle.

**Interactive presentation idea:** Use SVG wiring diagrams with selectable signal/power overlays; a PWM timeline slider changes duty cycle and updates the graph; a protocol selector highlights the wires and roles for UART, I2C, or SPI. Use Three.js or React Three Fiber only if a spatial board/breadboard view materially clarifies placement; keep a labelled 2D alternative available.

**Independent study and evidence:** Check every selected component's official operating and signal specifications; update the pin map, block diagram, and component-selection table; record the reason for using a driver or display.

**Assessment link:** A001 Task 1.2: integrated design, pin allocation, component selection, signal/power flow, and trade-offs.

### Week 5: Control Logic, Integration, and Assessment 001 Portfolio

**Purpose:** Bring requirements, inputs, outputs, and software together into a small, explainable controller and an evidence-led first portfolio submission.

**Concepts to teach**

- Modular program structure: separate setup, input reading, validity checking, decision/state update, and output update into named functions. Explain single responsibility and why a function boundary helps testing and debugging.
- State-based control: states such as STARTUP, NORMAL, DRY_WARNING, HOT_WARNING, MANUAL_TEST, and SENSOR_FAULT. A state diagram makes allowed transitions and outputs explicit. Keep the actual state set small enough to understand and test.
- Decision tables, pseudocode, and flowcharts as design tools that should agree with the code. Include startup, range check, normal control, manual/test mode, error indication, and return/recovery paths.
- Time behaviour: sensor sampling interval, response time, and why long `delay()` calls can prevent timely input checks. Introduce `millis()`-style elapsed-time reasoning where supported, without requiring advanced scheduling.
- Requirements traceability: connect each requirement to design elements, code behaviour, test ID, and evidence. A requirement without an observable acceptance criterion is difficult to verify.
- Integration order: prove each input and output alone; combine one feature at a time; maintain a known working version; isolate faults instead of changing several parts at once.
- Test design: normal case, boundary case, invalid case, manual/test mode, and expected versus observed results. Introduce pass/fail criteria before running a test.
- Engineering communication: clear diagram labels, units, pin identifiers, code version, figure captions, source citations, and a concise explanation of limitations.

**Suggested scheduled sequence**

1. Concept session (1.75 h): transform a requirement into a state transition, pseudocode, and test case; discuss blocking versus elapsed-time control.
2. Supervised practical (4 h): teams integrate a minimum controller using at least two inputs (including a physical sensor) and two low-voltage outputs; implement automatic thresholds, status, and a manual/test mode; conduct a short initial test sequence.
3. Team/tutorial (1 h): portfolio clinic and individual demonstration check. Teams identify missing evidence, work allocation, and the next concrete action.

**Practical outcome:** A working minimum prototype or, where hardware availability constrains build completion, a working integrated subsystem plus a verified integration plan. The exact state and output mapping are documented.

**Formative check:** Each student explains one requirement, the code path that implements it, the hardware interface involved, and the test evidence that verifies it.

**Interactive presentation idea:** A state-machine explorer highlights transitions as students change sensor values or select manual mode. Pair it with a traceability view that opens the corresponding requirement, code function, and test. Use Motion for React for restrained step-by-step reveals; reserve GSAP for a genuinely complex timeline such as a complete sensor-to-actuator sequence.

**Independent study and evidence:** Complete A001 design and initial test evidence; review individual logbook entries and contribution records; prepare a short explanation of one design trade-off and one unresolved limitation.

**Assessment link:** A001 consolidation and portfolio checkpoint. Teams should confirm submission format and deadline with the tutor; the brief's example milestone table is not a substitute for the actual module calendar.

### Week 6: Security, Resilience, and Safe Fault Response

**Purpose:** Introduce security as part of dependable system operation, with controls proportionate to a local, low-cost teaching prototype.

**Concepts to teach**

- Security and resilience in context: protect system behaviour, configuration, access, and availability; do not imply that a classroom prototype is a production or safety-certified system.
- Asset identification: controller, source code, configuration/thresholds, sensor values, user controls, USB/programming access, power/wiring, and—if used—wireless credentials and transmitted data.
- Threat, vulnerability, likelihood, impact, control, residual risk, and risk owner. Use the assessment's 1–5 likelihood and impact scales and calculate $R = L \times I$. Explain that a numerical score supports prioritisation but is not a precise probability.
- Threat categories grounded in the brief: implausible or manipulated sensor data; physical access or accidental reprogramming; power loss, wiring error, or incompatible voltage; software lockup or unsafe output state; and wireless or communication exposure where applicable.
- Failure versus attack: the same invalid sensor reading may arise from a loose wire, component failure, interference, or deliberate manipulation. Design controls should address plausible causes without overstating what has been proven.
- Safe state and recovery: define the required state of every output at startup, invalid measurement, reset, and power recovery. The safe state depends on the system requirements; make the choice explicit and verify it.
- Input validation, plausible ranges, safe defaults, bounded configuration, fault indication, watchdog concepts, physical access procedures, and labelled wiring. Select controls that students can implement and test.
- Uno and ESP32 context: for an Uno, consider physical USB/programming access and configuration protection; for ESP32, consider added wireless attack surface, credential handling, and whether connectivity is necessary. A non-networked design can be a justified risk-reduction choice.

**Suggested scheduled sequence**

1. Concept session (1.75 h): walk through an asset-to-threat-to-control example; score a sample risk and discuss uncertainty; define system safe-state outputs.
2. Supervised practical (4 h): inject safe, tutor-approved faults such as a disconnected sensor input or out-of-range simulated reading; verify validation, fault indication, output state, and recovery; test reset behaviour without creating hazardous conditions.
3. Team/tutorial (1 h): create the team's asset list and first risk table; review the division of individual evidence responsibilities.

**Practical outcome:** A documented safe-state definition and at least one implemented or demonstrably specified software control plus one hardware or procedural control.

**Formative check:** Students explain the consequence of an invalid sensor value, the selected output state, and how they would test recovery. Challenge a risk rating by asking what evidence justifies its likelihood and impact.

**Interactive presentation idea:** A risk-matrix interaction lets learners adjust likelihood and impact and see the rating update, with a note that the matrix is a prioritisation aid. An animated fault-response flow reveals detect, enter safe state, notify/log, recover, retest, and resume steps. Provide keyboard-operable controls and text descriptions.

**Independent study and evidence:** Complete the A002 asset inventory and at least five threats with initial and residual ratings; cite the source or design evidence for technical controls; update the fault-response diagram and safe-state table.

**Assessment link:** A002 Task 2.1: security and resilience review.

### Week 7: Communication, Access, and Sustainable Software

**Purpose:** Deepen students' understanding of communication and configuration risks while making maintainable, testable code and project records part of good engineering practice.

**Concepts to teach**

- Revisit UART, I2C, and SPI from an integration and diagnosis perspective: expected lines, addressing or selection, signal levels, common ground, bus sharing, and symptoms such as missing devices or garbled serial output.
- Optional ESP32 Wi-Fi concepts: access point versus client at a high level, network boundary, credentials, data flow, and newly exposed interfaces. Connectivity is not a requirement of the cabinet project. Do not publish credentials or personal data in source code, screenshots, logs, or public web presentations.
- Configuration security and physical access: who can change thresholds, who can upload firmware, how a device is reset, how configuration changes are recorded, and how accidental changes are detected. Choose controls that fit a classroom demonstrator.
- Proportionate security: identify what is in scope and out of scope, avoid claiming cryptographic security without implementing and validating it, and record residual risks honestly.
- Software sustainability and maintainability: meaningful names, small functions, consistent formatting, limited duplication, comments for non-obvious decisions, version identifiers, change records, and reproducible setup notes.
- Debugging as a method: reproduce, observe, form a hypothesis, change one factor, retest, and record. Distinguish a software defect from wiring, power, interface, sensor, and toolchain issues.
- Team operation: role rotation where useful, task ownership, short meeting records, respectful review, handover notes, and making individual contributions visible without fragmenting the design.
- Git or another version-control workflow if available: working copy, commits as checkpoints, meaningful messages, and review of changes. Avoid committing secrets or generated build clutter; follow the repository's local rules.

**Suggested scheduled sequence**

1. Concept session (1.75 h): trace project data across a communication boundary; compare a local-only and connected design; perform a peer review of a short code sample and risk control.
2. Supervised practical (4 h): diagnose a prepared interface or configuration problem; improve project code structure or error reporting; demonstrate that changes are traceable to a version and test.
3. Team/tutorial (1 h): peer review the risk table and each student's evidence plan; agree team actions and deadlines.

**Practical outcome:** A reviewed project version with a change record, one maintainability improvement, and communication/configuration risks considered for the actual selected board.

**Formative check:** Ask each student to explain one communication interface in terms of physical lines and roles, and one security control's limitation. Check that any wireless functionality is optional and its credentials are not exposed.

**Interactive presentation idea:** A protocol comparison uses an SVG timing or wiring diagram with line-by-line narration. A repository-style change timeline can show how a test failure leads to a recorded code revision and retest. Use KaTeX for equations or notation where useful, including the module risk score; keep text equivalents for diagrams.

**Independent study and evidence:** Refine controls and residual-risk evaluations; update code/version and design records; collect meeting, peer-review, task-board, or handover evidence; record feedback and next actions in each logbook.

**Assessment link:** A002 Tasks 2.1 and 2.3: communication risk, software/procedural controls, teamwork, and individual records.

### Week 8: Test Engineering and Full-System Verification

**Purpose:** Move from informal demonstrations to systematic verification against requirements, including fault, boundary, reset, and recovery cases.

**Concepts to teach**

- Verification versus validation: whether implementation meets stated requirements versus whether the chosen requirements solve the intended user problem. At this level, use the terms accurately without overcomplicating the process.
- Test levels: component/subsystem checks, integration tests, and system/acceptance tests. A test should state requirement ID, setup, input/condition, expected outcome, observed outcome, pass/fail, evidence, and corrective action.
- Coverage categories: normal values, lower and upper boundaries, threshold equality, sensor invalid/disconnected simulation, manual/test mode, reset, power restart, safe recovery, and each required output. Test all functional requirements, not only the easiest examples.
- Repeatability and measurement: record setup and relevant conditions; use units; distinguish measured uncertainty from software logic; do not fabricate results or infer behaviour from code alone.
- Debugging with evidence: serial logging, a multimeter where appropriate and safe, visual indicators, known-good substitutions, and staged isolation. Reproduce the issue and retest after each correction.
- Fault injection boundaries: use only tutor-approved, low-risk simulated faults. Do not create shorts, overload pins, reverse supplies, or deliberately expose equipment to unsafe conditions.
- Test evidence quality: dated captures or photographs, readable labels, requirement linkage, and explanation of what the evidence demonstrates. A screenshot that omits the input condition or output result is weak evidence.

**Suggested scheduled sequence**

1. Concept session (1.75 h): critique weak test cases; convert functional requirements into a traceable test matrix; identify boundary and fault cases.
2. Supervised practical (4 h): run the full project test plan; record results as observed; investigate failures; carry out corrective action and retest; confirm reset and safe recovery.
3. Team/tutorial (1 h): hold a test review in which each member explains evidence for an owned requirement and another team member checks traceability.

**Practical outcome:** A complete or clearly gap-tracked test-results table covering every functional requirement and the required fault/restart scenarios.

**Formative check:** Tutor samples one test from each team and checks whether another person could reproduce it and decide pass/fail without guessing.

**Interactive presentation idea:** A test-case builder lets students select requirement, input condition, expected state, and observed state, then flags missing evidence fields. Plotly.js can show a sensor trace with marked samples and threshold crossings. Use actual project data only with consent and clear labelling; simulated data must be marked.

**Independent study and evidence:** Complete outstanding tests, correct failures, record retests, gather clearly annotated evidence, and draft the A002 operator guide for start-up, normal operation, test mode, fault response, and safe shutdown.

**Assessment link:** A002 Task 2.2: refined design and full-system testing.

### Week 9: Refinement, Evaluation, and Team Demonstration Readiness

**Purpose:** Improve the project based on test results and teach students to evaluate what the prototype does and does not prove.

**Concepts to teach**

- Change control: problem observed, evidence, proposed change, reason, modified design/code version, and retest outcome. Avoid unrecorded last-minute changes that invalidate earlier test evidence.
- Prioritisation: fix safety-relevant or requirement-breaking issues first; separate essential correction from optional enhancement. Evaluate the impact of a change on other requirements and tests.
- Performance and robustness: response time, sampling interval, noise, threshold stability, startup behaviour, reset handling, and repeated operation. Discuss trade-offs rather than claiming industrial reliability from a short lab test.
- Calibration and limitations: tolerances, environmental effects, sensor placement, sample size, uncertainty, component variation, and limits of a benchtop demonstration.
- Requirement evaluation: state met/not met/partially met with evidence; explain unresolved issues and propose feasible next improvements. Separate measured fact from future expectation.
- Security evaluation: residual risk after controls, control assumptions, real-installation needs outside the classroom scope (for example enclosure, electrical protection, authenticated update process, or formal safety assessment), and why the prototype does not claim certification.
- Operator-centred communication: clear startup/shutdown steps, normal indicators, test mode, fault response, and prohibited use. A user guide should be usable without relying on the author being present.
- Team contribution and reflection: describe specific work and its value, feedback acted on, collaboration evidence, skills learned, remaining gap, and SMART CPD action with a target date and measurable success criterion.

**Suggested scheduled sequence**

1. Concept session (1.75 h): review change-control examples; evaluate a mock requirement set; distinguish evidence, inference, and future work.
2. Supervised practical (4 h): implement only justified refinements; update the version and design evidence; rerun affected and regression tests; rehearse a demonstration and check the operator guide.
3. Team/tutorial (1 h): portfolio clinic, peer review, and individual contribution/CPD check-in.

**Practical outcome:** A stable, versioned project candidate, evidence-backed evaluation, and a demonstration plan that includes a safe fallback if a live component fails.

**Formative check:** Each team answers: which requirement remains weakest, what evidence supports that judgement, what change is feasible, and what new test would verify it?

**Interactive presentation idea:** An evidence-linked project dashboard can connect each requirement to status, test result, and limitation. An animation can compare intended and observed state transitions; avoid implying that a simulated trace is measured evidence. A responsive SVG timeline can show the change, regression test, and retest sequence.

**Independent study and evidence:** Finalise A002 evaluation, guide, and appendices; complete dated logbooks and CPD actions; verify references, image captions, code version, and team contribution statement.

**Assessment link:** A002 Tasks 2.2 and 2.3: refinement, evaluation, operator communication, teamwork, and CPD.

### Week 10: Demonstration, Portfolio Review, and Continuing Development

**Purpose:** Consolidate learning by communicating and defending a tested design, then identify practical next steps for continued learning.

**Concepts to teach and revisit**

- Whole-system explanation: user need, requirements, architecture, signal and power flow, control logic, interfaces, security/resilience controls, test results, and remaining limitations.
- Demonstration discipline: state the test condition; show the actual behaviour; explain what it proves; identify what it does not prove; follow safe startup and shutdown procedures.
- Evidence integrity: distinguish live behaviour, recorded measurement, screenshot, simulation, and design intention. Do not present simulated or planned results as observed hardware results.
- Portfolio coherence: check that requirements, diagrams, pin tables, code/version, tests, risk table, operator guide, references, and individual records agree with one another.
- Individual reflection and CPD: relate skill claims to evidence; make next actions specific, achievable, relevant, time-bound, and measurable.
- Lifelong learning: identify authoritative sources for unfamiliar devices and protocols; read datasheets strategically; plan to verify assumptions on hardware; seek and respond to feedback.

**Suggested scheduled sequence**

1. Short synthesis (1 h): revisit the input–process–output–feedback model and connect it to all five module learning outcomes.
2. Team demonstrations and structured peer questions (4 h): each team presents the project and demonstrates agreed tests or uses clearly labelled recorded evidence; every student answers an individual technical or process question.
3. Portfolio and reflection workshop (1.75 h): final consistency check, peer/tutor feedback, individual logbook close-out, and CPD action review.

**Practical outcome:** A coherent, evidence-based technical portfolio and a defensible account of individual contribution, team operation, risk decisions, and further development.

**Formative check:** Individual exit explanation: name one design choice, one test that supports it, one limitation, one risk control, and one next learning action.

**Interactive presentation idea:** Build a presentation navigation view around the system lifecycle rather than a generic slide carousel: need → design → build → test → secure/refine → evaluate. Offer keyboard navigation, captions/transcripts for media, reduced-motion support, readable contrast, and a non-animated fallback. Provide the essential technical content as HTML text so it remains searchable and accessible.

**Independent study and evidence:** Submit in the tutor-directed format and by the confirmed deadline; retain a final copy of the student's own logbook and evidence in accordance with university guidance.

**Assessment link:** Final A001/A002 portfolio and demonstration readiness; LO1–LO5 evidence is reviewed as a coherent progression.

## 6. Presentation and Interactive Resource Guidance

The teaching plan is designed to be translated into interactive HTML presentations hosted as a static site on GitHub Pages. Presentations should teach and test concepts, not merely decorate a conventional slide deck.

### Suggested technology roles

| Technology | Suitable use in this teaching sequence | Practical guidance |
| --- | --- | --- |
| React + TypeScript | Reusable lesson, diagram, quiz, glossary, and code-trace components; typed content for the ten-week sequence. | Keep explanatory content as semantic HTML and model lesson data explicitly. Avoid making essential information available only through application state or hover. |
| Vite | Local development and static production build. | Configure the correct GitHub Pages base path for the repository or custom domain; test the production build at the deployed path, including refresh and asset loading. |
| Tailwind CSS | Consistent responsive layout, spacing, focus states, and accessible colour tokens. | Use a deliberate visual system with high contrast and readable code/diagram labels; avoid tiny text in dense diagrams. |
| Motion for React | Stepwise explanation, state transitions, and restrained entrance/reveal effects. | Respect reduced-motion preferences; animation must clarify sequence and must not be required to access the lesson. |
| GSAP | Complex, coordinated animation timelines such as a sensor-to-controller-to-output sequence. | Use selectively. Provide pause/replay and a static equivalent; do not animate every interaction. |
| SVG | Pin maps, state machines, block diagrams, timing diagrams, risk matrices, and labelled signal paths. | Prefer SVG when parts need labels, keyboard focus, highlighting, or screen-reader descriptions. Keep the diagram understandable at mobile widths. |
| Canvas | Dense or continuously updated visual demonstrations, such as a simulated noisy sensor trace. | Add a textual summary and accessible controls; Canvas pixels alone are not accessible. Do not use for static diagrams that SVG handles better. |
| Three.js / React Three Fiber | Optional 3D exploration of board/breadboard placement or a spatial cabinet model. | Use only where 3D adds learning value. Keep the scene lightweight, provide a 2D or text alternative, and ensure the lesson remains usable on modest devices. |
| Plotly.js | Interactive sensor traces, threshold crossings, raw-versus-calibrated data, and test-result plots. | Label axes, units, source, and whether data is measured or simulated; ensure controls and chart descriptions are keyboard-accessible. |
| KaTeX | ADC code-count examples, voltage-divider relationships, PWM duty cycle, and the assessment risk equation. | Render equations accessibly and accompany them with a verbal explanation and definitions of symbols. |

### Suggested reusable presentation modules

- **System map:** user, physical process, sensors, controller, outputs, power, environment, and communication boundaries.
- **Board facts panel:** exact board model, logic voltage, relevant pins/peripherals, source link, and limitations; content is specific to the hardware actually issued.
- **Circuit explorer:** selectable signal and power paths, with a persistent legend and safety note.
- **Code trace:** line-by-line execution with visible variable values and pin state; include a reset and step control.
- **Sensor laboratory:** simulated and/or explicitly identified measured data, threshold and hysteresis controls, calibration, and invalid-value scenarios.
- **State-machine viewer:** selectable input conditions that show current state, permitted transition, and output mapping.
- **Protocol comparison:** visual wiring and role map for UART, I2C, and SPI, linked to the physical devices used in labs.
- **Test-case builder:** structured fields for requirement, setup, expected result, observed result, decision, and evidence reference.
- **Risk review:** editable likelihood/impact example, risk score, control, and residual-risk explanation.
- **Portfolio checklist:** evidence status linked to A001/A002 requirements; never imply that a checked item has been verified unless a tutor or student has actually checked it.

### GitHub Pages and accessibility checks

- Treat the site as a static build. Avoid relying on server-side rendering, private API keys, hidden runtime services, or a backend unless deployment architecture is explicitly changed.
- Keep secrets, Wi-Fi credentials, student personal information, and private assessment data out of public source and generated assets.
- Test the built site under the actual project/repository URL path, not only at the local development root. Check direct navigation, refresh, images, fonts, and relative links after deployment.
- Use semantic headings, descriptive link text, keyboard-operable controls, visible focus, sufficient contrast, and text alternatives for diagrams and plots.
- Honour reduced-motion settings. Avoid flashing effects and do not communicate state through colour alone.
- Check desktop and mobile layouts, zoom, long code lines, chart labels, and SVG scaling. Provide transcripts or captions for any audio/video.
- Keep animations and 3D optional. The lesson's core definitions, equations, instructions, and assessment guidance should remain available if a visualisation fails or is disabled.
- Mark every source link and technical specification with its source and review date where appropriate. Board and sensor facts must be checked against the exact hardware version used in teaching.

## 7. Recommended Teaching and Feedback Rhythm

- **Before class:** publish a short preparation prompt, relevant assessment extract, safe-work reminder, and the week's expected evidence. Keep pre-reading focused and accessible.
- **During concept teaching:** alternate concise explanation with prediction questions, worked examples, and student explanation. Ask learners to state assumptions before revealing a simulation result.
- **During labs:** demonstrate once, then let teams build incrementally. Check wiring and supply before power-up; use short feedback loops and avoid making the tutor the only person who can debug a team's system.
- **At the end of each week:** run a brief exit check, update the individual logbook, and record one team action, one unresolved issue, and one evidence item.
- **Feedback:** provide specific, actionable comments on technical reasoning and evidence quality. Students should record feedback, their response, and whether a retest or portfolio change followed.
- **Inclusion:** make roles visible and rotate meaningful technical responsibilities; allow multiple ways to demonstrate understanding (explanation, diagram, code trace, measurement, or written record) while preserving the same learning outcomes.

## 8. Tutor Preparation Checklist

- Confirm exact board models, supported IDE/toolchain, USB/data cable availability, and board-specific pin documentation.
- Confirm a low-voltage, tutor-approved component set; check sensor module output levels and the safety of any driver/actuator circuits before lab use.
- Prepare working baseline sketches, wiring diagrams, a known-good test setup, and safe fault-simulation procedures.
- Confirm assessment hand-out/submission dates, team size, portfolio format, word-count instructions, and current university guidance before issuing them to students.
- Decide which optional components and communication interfaces are actually available; teach platform-specific details only when they match the hardware.
- Provide a process for recording team roles, individual contribution, feedback, and logbook evidence from the first week.
- Review all public presentation content for accessibility, source accuracy, repository-path deployment, privacy, and absence of credentials or student-identifying information.

## 9. Source and Specification Notes

This teaching plan is aligned with the supplied EEE4015 module specification and the supplied Assessment 001 and Assessment 002 briefs. Use the university's current module guide and tutor-confirmed assessment instructions as the final authority for dates, submission requirements, and policy.

Technical claims about a selected board, sensor, display, driver, or actuator should be sourced from the exact manufacturer's datasheet or official technical documentation. The module specification's recommended reading includes Bayle (2013), Marwedel (2022), McGrath (2018), and Monk (2023); consult the current library record for full bibliographic details and availability. Add current official Arduino and Espressif documentation appropriate to the exact boards used in class.
