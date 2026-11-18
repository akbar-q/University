# EEE4015 Introductory Embedded Systems

## Ten-Week Teaching Plan

**Audience:** HE4 / first-year Electrical and Electronic Engineering students encountering microcontrollers for the first time  
**Primary platforms:** Arduino Uno R3 and an approved ESP32-family development board  
**Project context:** automated seedling propagation cabinet controller  
**Assessment alignment:** Assessment 001 (design and practical investigation), followed by Assessment 002 (secure operation, refinement, teamwork, and development)

## 1. Purpose and Delivery Assumptions

This plan moves students from basic embedded-system concepts and safe microcontroller use to a tested, documented prototype and a proportionate security and resilience review. The propagation cabinet is a teaching context, not a safety-certified product. All practical work is low voltage. Students must not connect a prototype directly to mains electricity, mains-powered heaters, pumps, or fans.

The module specification allocates 67.5 scheduled hours and 132.5 independent-study hours across 200 total learning hours. For planning purposes, this document models ten teaching weeks at an average of **6.75 scheduled hours and 13.25 independent-study hours per week**. Four consecutive weeks (Weeks 2–5) are reserved for simulation-led practical learning. On each simulation day, teach a short concept block, run a guided simulation, pause to interpret the result, then apply the idea in one or more further simulations. Several short circuits can therefore be completed in one day; do not treat each circuit as a separate week. Tutors should adjust session splits to the actual timetable and confirm assessment dates. Weekly independent study is indicative, not a requirement to spend every hour on one task.

The two assessments each carry 50% of the module mark. Weeks 1–6 principally prepare students for Assessment 001; Weeks 7–10 principally prepare them for Assessment 002. The individual logbook, evidence of contribution, collaboration, and CPD are developed throughout rather than left until the final week.

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
| A001, LO2: practical investigation skills | Simulation records from Weeks 2–5 plus supervised physical hardware work in Week 6: safe assembly, incremental build, sensor/output measurements, test results, debugging, and retest evidence. Clearly label simulated and physical evidence; simulation alone does not demonstrate all workshop skills. |
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

### Four-Week Simulation-Led Practical Block (Weeks 2–5)

Use the existing [EEE4015 TinkerCAD Circuits library](TinkerCAD%20Circuits/README.md). Each circuit folder contains a diagram, a TinkerCAD share link, the original code text, a commented `.ino` teaching sketch, and a circuit-specific README. Tutors should open each circuit guide before class: it records pin assignments, simulator/source discrepancies, library needs, and relevant safety cautions.

The simulation block is deliberately interleaved with theory. Teach only the concepts needed for the next circuit, have students predict the result, then let them wire/run/modify the simulation and explain the evidence. Where a class day includes several short simulations, use the same repeatable cycle rather than delivering one long lecture followed by an unstructured lab.

**Suggested 6.75-hour simulation-day pattern (adapt to the actual timetable):**

| Activity | Scheduled time | Learning move |
|---|---:|---|
| Mini-lesson and prediction | 0.75 h | Introduce one concept; students predict pin state, signal, or output before running. |
| Guided simulation A | 1.25 h | Build/open the circuit, inspect the pin map, run the supplied sketch, capture one observation. |
| Compare and explain | 0.5 h | Compare prediction with simulator output; connect behaviour to the circuit and code. |
| Guided simulation B | 1.25 h | Change one variable or input, rerun, and record expected versus observed behaviour. |
| Mini-lesson bridge | 0.5 h | Explain the next concept using the result just observed. |
| Simulation C / extension | 1.25 h | Complete a second circuit or a fault/boundary extension; more than one simulation can be completed in this block. |
| Team debrief | 0.75 h | Compare designs, explain a failure, and connect the circuit to the seedling-controller project. |
| Evidence and logbook | 0.5 h | Label screenshots, pin maps, code version, findings, and next question. |
| **Total** | **6.75 h** | |

When a week is split over multiple class days, repeat the mini-lesson → simulation → explanation cycle each day. Do not postpone all theory until after the simulation: students should have the vocabulary and a prediction before each new circuit. Tutors may assign different circuits to stations/teams and rotate groups, provided every student records an individual contribution.

**Simulation versus hardware:** TinkerCAD supports safe repetition and fast fault exploration, but it does not by itself evidence the module's LO2 laboratory/workshop skills. Week 6 therefore includes supervised physical low-voltage assembly, measurement, and testing using tutor-approved equipment. If hardware availability is limited, arrange an equivalent supervised physical investigation; do not label simulator output as physical test evidence. A simulated fault is not permission to create a real short circuit, overload, reverse polarity, or unsafe motor supply.

| Simulation week | Circuit set from the folder | Concept-to-simulation emphasis |
|---|---|---|
| Week 2 | [01 LED](TinkerCAD%20Circuits/01%20LED%20Interfacing/README.md), [02 Button](TinkerCAD%20Circuits/02%20Button%20Interfacing/README.md), [03 Button → LED](TinkerCAD%20Circuits/03%20Button%20Controlled%20LED/README.md) | GPIO setup, current path, resistor, pull-up, active-low logic, and input-to-output control. |
| Week 3 | [11 LDR → PWM](TinkerCAD%20Circuits/11%20LDR%20Controlled%20PWM/README.md), [10 Moisture → Servo](TinkerCAD%20Circuits/10%20Moisture%20Sensor%20Controlled%20Servo/README.md) | Voltage-divider measurement, ADC values, calibration, thresholds, PWM mapping, servo output, and hysteresis. |
| Week 4 | [04 Keypad](TinkerCAD%20Circuits/04%204x4%20Keypad%20Interfacing/README.md), [05 Buzzer PWM](TinkerCAD%20Circuits/05%20Buzzer%20Interfacing%20PWM/README.md), [06 Seven-segment](TinkerCAD%20Circuits/06%207-Segment%20Display%20Interfacing/README.md) | Matrix scanning, event values, duty cycle versus tone, segment maps, polarity, and per-segment current limiting. |
| Week 5 | [08 Parallel LCD](TinkerCAD%20Circuits/08%20Parallel%2016x2%20Display%20Interfacing/README.md), [09 I2C LCD](TinkerCAD%20Circuits/09%20I2C%2016x2%20Display%20Interfacing/README.md), [07 H-bridge motor](TinkerCAD%20Circuits/07%20Single%20Motor%20H-Bridge/README.md) | Parallel versus serialised display wiring, interface selection, driver logic, separate load power, and system integration. |

For every simulator exercise, students should capture: circuit/pin map, sketch version, the input or control change, observed output, and one explanation. Label screenshots **SIMULATION**. If the class adapts a circuit for a different ESP32 or Uno variant, students must re-check the exact board pinout and logic voltage; do not assume the Uno diagrams transfer directly.

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

### Week 2: Simulation Lab 1 — Digital I/O and First Code

**Purpose:** Pair short C/C++ and electrical mini-lessons with three linked simulations so students progress from an output pin to an input-controlled response.

**Concepts to teach in short blocks**

- Sketch structure: `setup()` configures once; `loop()` repeats. Separate compile, upload, reset, and observed runtime behaviour.
- GPIO modes and logic states: output, input, active-high, active-low, and why an input must not float.
- LED polarity and current path. A bare LED requires a correctly sized series resistor; GPIO is not a general-purpose supply.
- `INPUT_PULLUP`: a released switch reads HIGH and a pressed switch to GND reads LOW. Introduce Boolean state, `if` conditions, and `digitalRead()`/`digitalWrite()`.
- Testing discipline: predict before running, change one thing, compare expected and observed state, then record evidence.

**Simulations to complete in this week**

1. [01 LED Interfacing](TinkerCAD%20Circuits/01%20LED%20Interfacing/README.md): identify polarity and resistor/current path; change blink interval and predict the result.
2. [02 Button Interfacing](TinkerCAD%20Circuits/02%20Button%20Interfacing/README.md): read two pull-up buttons; observe released/pressed raw logic and serial output.
3. [03 Button Controlled LED](TinkerCAD%20Circuits/03%20Button%20Controlled%20LED/README.md): connect each input state to its corresponding LED; test one and both buttons.

**Suggested 6.75-hour delivery:** Use the simulation-day pattern above. Start with a brief pin/electrical mini-lesson, run LED Interfacing, compare the code and current path, teach pull-ups and active-low logic, then run Button Interfacing and Button-Controlled LED in the same class. Use the final simulation block for a deliberate wiring/code fault prediction and correction. Multiple simulations are expected within this teaching week and may occur on one class day.

**Practical/simulation outcomes:** Three working simulator states; a pin map; one LED resistor calculation using the selected LED datasheet; a button-state truth table; labelled before/after screenshots; and a short fault/fix note.

**Formative questions:** Why does an unconnected input behave unpredictably? Why does pressed read LOW with `INPUT_PULLUP`? What does the resistor limit? Does successful compilation prove the wiring is correct?

**Hardware option:** If the tutor has approved kits, students may wire one LED and one pull-up button on an Uno after checking the circuit and disconnecting power before changes. This supplements simulation; it does not replace the safety checks.

**Assessment link:** A001 incremental implementation evidence begins: board/serial check, input/output verification, testable requirement, and individual logbook entry.

### Week 3: Simulation Lab 2 — Analogue Sensing, Calibration, and PWM

**Purpose:** Teach the measurement chain and control thresholds by moving from raw analogue codes to an output students can interpret.

**Concepts to teach in short blocks**

- Sensor/transducer, voltage divider, reference voltage, analogue signal, ADC sampling, and quantisation. Distinguish code range from accuracy and resolution.
- Raw ADC value versus voltage versus calibrated physical measurement. The sensor/module and exact board determine the mapping; do not claim a moisture or lux value without calibration evidence.
- PWM duty cycle controls average output for suitable loads; it is not a true analogue voltage. Compare duty command to observed LED brightness.
- Threshold equality, noise, hysteresis, plausible range, and safe handling of missing or implausible readings.

**Simulations to complete in this week**

1. [11 LDR Controlled PWM](TinkerCAD%20Circuits/11%20LDR%20Controlled%20PWM/README.md): read a divider, observe dark/bright ADC changes, map values to LED PWM, and check the diagram's A5 versus original-code A0 discrepancy.
2. [10 Moisture Sensor Controlled Servo](TinkerCAD%20Circuits/10%20Moisture%20Sensor%20Controlled%20Servo/README.md): inspect raw sensor readings, exercise both sides of a threshold, and compare the servo/indicator response. Treat the starter threshold as uncalibrated until students record observed dry/wet values.
3. Repeat one sensor scenario with values below, at, and above the threshold; simulate a plausible but noisy reading and demonstrate why hysteresis is useful.

**Suggested 6.75-hour delivery:** Mini-lesson and voltage-divider prediction; LDR simulation; pause to translate one raw code using a stated example; short ADC/PWM lesson; adjust the light level and observe the PWM output; moisture/servo simulation; then test threshold boundaries and a simulated invalid reading. Close by comparing raw-code logs across groups and identifying what would need real sensor calibration.

**Practical/simulation outcomes:** A labelled sensor signal chain, raw-value table, graph/screenshot, provisional threshold with explicit units or counts, boundary test table, and a written calibration limitation.

**Formative questions:** What exactly does the ADC measure? Why can two boards report different values for a similar input? Can a single threshold chatter? What output state should be used if the reading is invalid?

**Hardware option:** If an approved analogue sensor or potentiometer is available, measure a small set of values on the physical Uno and compare with TinkerCAD. Label the datasets separately; do not present simulation readings as hardware measurements.

**Assessment link:** A001 functional acceptance criteria, sensor/component choice, interface explanation, and first boundary/fault tests; starts the A002 sensor-validity risk discussion.

### Week 4: Simulation Lab 3 — Keypads, Buzzer PWM, and Seven-Segment Display

**Purpose:** Combine one short interface concept with several output/input simulations, helping students understand how a controller communicates with users.

**Concepts to teach in short blocks**

- Matrix keypad scanning: four rows plus four columns represent sixteen keys; libraries abstract scanning and return a key event. Introduce library dependency and pin mapping.
- PWM control: explain duty cycle, frequency, and the distinction between changing loudness/average drive and changing pitch. Passive and active buzzers may respond differently.
- Seven-segment structure: labels a–g and decimal point, common-anode versus common-cathode, and logic inversion where relevant.
- LED segment current limiting: each bare segment is an LED and needs its own appropriate resistor; verify the diagram and component type before hardware use.
- Serial output as interface/debug evidence; distinguish a key event from a continuously held state.

**Simulations to complete in this week**

1. [04 4×4 Keypad](TinkerCAD%20Circuits/04%204x4%20Keypad%20Interfacing/README.md): trace row/column pins; press numeric and special keys; record returned characters.
2. [05 Buzzer PWM](TinkerCAD%20Circuits/05%20Buzzer%20Interfacing%20PWM/README.md): sweep duty values and listen/observe; compare a PWM ramp with a tone-frequency example.
3. [06 Seven-Segment Display](TinkerCAD%20Circuits/06%207-Segment%20Display%20Interfacing/README.md): map segment labels to pins, show a character, and predict how common-anode logic would differ.

**Suggested 6.75-hour delivery:** Begin with a keypad matrix diagram, then simulate keypad input and capture the serial output; teach PWM and complete the buzzer activity; use a pinout mini-lesson before the seven-segment simulation; finish with a segment truth table and peer explanation. Teams can work through the three simulations as stations in one day, with a theory/debrief between stations.

**Practical/simulation outcomes:** Keypad pin map and key log; PWM observation table; seven-segment character truth table; resistor/current-limit note; and a code/library setup record.

**Formative questions:** Why does a matrix keypad need fewer pins than one GPIO per key? Does `analogWrite()` set sound pitch? How does display type change ON/OFF levels? Why are separate segment resistors required?

**Hardware option:** Tutor-approved physical keypad, buzzer, or display may be substituted for a simulator station. Validate the specific library, module voltage, pinout, and resistor arrangement before powering it.

**Assessment link:** A001 interface explanation, pin allocation, component justification, and user-facing status choices. Record each student's owned station and evidence in the individual logbook.

### Week 5: Simulation Lab 4 — Displays, Motor Drivers, and System Integration

**Purpose:** Compare communication interfaces and actuator control, then combine the simulation evidence into a defensible cabinet-system architecture.

**Concepts to teach in short blocks**

- Parallel versus I2C display wiring: signal count, bus roles, address/module dependence, library configuration, and voltage/pull-up compatibility.
- H-bridge operation: enable and direction inputs control motor polarity through a driver; GPIO does not supply motor current. Discuss separate logic/load supplies, common ground where required, stall current, and driver thermal limits.
- PWM and delays in a control sequence; identify why a long blocking sequence can miss inputs and how a state/timing design improves responsiveness.
- Integrated system view: requirements → input → validation → decision/state → driver/interface → output/status; define startup and safe states.

**Simulations to complete in this week**

1. [08 Parallel 16×2 LCD](TinkerCAD%20Circuits/08%20Parallel%2016x2%20Display%20Interfacing/README.md): wire/configure a character display and show a measured or simulated value.
2. [09 I2C 16×2 LCD](TinkerCAD%20Circuits/09%20I2C%2016x2%20Display%20Interfacing/README.md): compare signal count and interface setup; inspect the simulator address versus real-module address caveat.
3. [07 Single Motor H-Bridge](TinkerCAD%20Circuits/07%20Single%20Motor%20H-Bridge/README.md): simulate forward/stop/reverse; trace logic and load-power paths; critique the drawn 9 V battery as a motor supply before proposing any physical version.
4. Team challenge: combine one sensor simulation from Week 3, one display/status output, and a safe actuator decision into a block diagram/state table for the seedling cabinet. This is a design exercise, not a claim that the separate TinkerCAD circuits are already one integrated simulation.

**Suggested 6.75-hour delivery:** Mini-lesson and parallel LCD simulation; compare with the I2C LCD simulation; teach H-bridge/current-path concepts; run motor-direction simulation; hold a guided risk review of the motor supply; teams then draw and explain their integrated architecture. Complete more than one simulation in the class day, pausing between circuits for concept explanation and evidence capture.

**Practical/simulation outcomes:** Two display-interface comparison notes; motor direction truth table; annotated logic/power diagram; cabinet block diagram; initial state/output table; and at least one explicit design trade-off.

**Formative questions:** Which LCD wiring uses fewer controller pins? Is an I2C address universal? Which circuit supplies motor current? What should happen if the sensor value is invalid or the controller resets?

**Hardware option:** Do not build the 9 V battery motor circuit as drawn. A physical motor/driver station is only permitted with a tutor-approved supply and load after checking the exact motor and driver datasheets. Display modules must also be checked for supply voltage and I2C pull-up levels.

**Assessment link:** A001 Task 1.2 design justification and Task 1.3 staged investigation preparation. Weeks 2–5 simulation evidence feeds diagrams, pin tables, interface trade-offs, and initial test cases, but does not replace physical LO2 evidence.

### Week 6: Physical Prototype, Integration, and A001 Evidence

**Purpose:** Translate the simulation learning into a supervised, low-voltage physical subsystem or prototype and collect genuine practical evidence for A001 LO2.

**Concepts to teach**

- Simulation versus hardware: simulator components are idealised models; physical parts add tolerance, noise, contact resistance, supply variation, and tool handling. Clearly distinguish simulated observations from measured hardware evidence.
- Safe transition from model to bench: re-check the exact board and module pinouts, operating voltages, GPIO limits, common grounds, resistor/driver needs, and supply rating before wiring.
- Incremental build sequence: board/serial check; one input; one output; status; automatic decision; then manual/test mode. Power off before rewiring and get the circuit checked before energising it.
- Measurement and investigation: use a multimeter or serial logs appropriately; record instrument/setup, units, observed values, expected values, and uncertainty. Do not infer sensor calibration from TinkerCAD values alone.
- Integration and debugging: reproduce an issue, isolate one subsystem, state a hypothesis, change one factor, retest, and record at least two issue/repair/retest examples.
- A001 requirements traceability: connect each requirement to the real or simulated subsystem, pin allocation, code function, verification method, and evidence reference.

**Suggested scheduled sequence (6.75 hours)**

1. Safety briefing and board/component compatibility check (0.75 h): inspect the approved hardware set and team circuit plans.
2. Tutor-demonstrated bench procedure and known-good board check (0.75 h): power, upload, serial output, and safe isolation.
3. Supervised team build (2 h): implement one sensor/input and one output/status subsystem; test each separately before connecting them.
4. Short theory bridge (0.5 h): discuss measured-versus-simulated values, tolerance, calibration, or an observed fault.
5. Continue build and integrate control logic/manual mode (1.5 h): follow the incremental plan and avoid unreviewed circuit changes.
6. Initial requirement tests and fault diagnosis (0.75 h): normal, threshold/boundary, manual mode, and a tutor-approved simulated invalid input.
7. Team demonstration, evidence capture, and logbook review (0.5 h): each student explains their own practical contribution.

**Hardware availability contingency:** Use only tutor-approved extra-low-voltage setups and suitable components. If a team cannot complete the full cabinet, require a physically built and tested subsystem plus a verified integration plan. If physical hardware is unavailable to the cohort, the tutor must arrange an equivalent supervised laboratory/workshop investigation for LO2; simulator evidence alone is not represented as practical hardware evidence.

**Practical outcome:** A safe physical subsystem or prototype; updated circuit/pin map; dated code version; requirement-linked test results; and at least two documented debugging/retest records.

**Formative check:** Each student demonstrates one connection safely, identifies the signal and power paths, and explains one observed difference between simulation and physical behaviour.

**Assessment link:** A001 Tasks 1.2–1.3 and LO1–LO2. This is the main physical-investigation checkpoint before the A001 portfolio milestone.

### Week 7: Security, Resilience, Communication, and Team Practice

**Purpose:** Begin A002 by reviewing the now-defined prototype's realistic risks, proportionate controls, interfaces, maintainability, and team access practices.

**Concepts to teach**

- Security and resilience in context: protect system behaviour, configuration, access, and availability; do not imply that a classroom prototype is a production or safety-certified system.
- Asset identification: controller, source code, configuration/thresholds, sensor values, user controls, USB/programming access, power/wiring, and—if used—wireless credentials and transmitted data.
- Threat, vulnerability, likelihood, impact, control, and residual risk. Use the assessment's 1–5 likelihood and impact scales and calculate $R = L \times I$. Explain that a numeric score supports prioritisation but is not a precise probability.
- Required threat categories: invalid/manipulated sensor data, physical/USB access, power/wiring fault, software/control failure, and communication risk if a network or bus interface is used.
- Define output safe states for startup, invalid readings, reset, and power recovery. The state must be justified against the prototype requirements and checked in a safe test.
- Proportionate controls: input validation, plausible ranges, bounded configuration, safe default outputs, fault indication, controlled programming access, labelled wiring, recovery procedure, and a watchdog concept where appropriate. State control limitations and residual risks.
- Communication/access: revisit UART, I2C, and SPI signal roles and failure symptoms. ESP32 Wi-Fi remains optional; if used, use a tutor-approved network and keep credentials and personal data out of public code/screenshots.
- Maintainable software and collaborative work: meaningful names, small functions, version identifiers, change notes, reproducible setup, role ownership, meeting decisions, peer review, and handovers.

**Suggested scheduled sequence (6.75 hours)**

1. Mini-lesson and asset mapping (1 h): identify what the team values and where information/energy crosses its boundary.
2. Guided risk-table workshop (1.25 h): rate five threats, identify causes/consequences, select controls, and estimate residual risk.
3. Theory bridge (0.5 h): compare a local-only Uno design with an optional connected ESP32 design and their access/configuration risks.
4. Supervised safe fault simulation on the prototype (1.5 h): invalid sensor input, reset/power restart where safe, observe defined output states, and document recovery.
5. Team review (1 h): peer-review risk/control claims against the actual circuit and software version; record questions and decisions.
6. Individual logbook and CPD planning (0.75 h): record contribution, feedback, skill evidence, a gap, and one next action.
7. Debrief/portfolio linking (0.75 h): identify A002 evidence still missing and assign owners/dates.

**Practical outcome:** Asset list, risk table with initial/residual ratings, output safe-state table, fault-response flow, and a team decision/change record.

**Formative check:** Students justify one risk rating and one mitigation with evidence, then explain what risk remains after the control.

**Interactive presentation idea:** Risk-matrix and fault-flow visuals; protocol wiring comparison; a configuration-access map. Keep visual data explicitly labelled as example/simulation unless based on an observed test.

**Assessment link:** A002 Task 2.1 and the teamwork/CPD evidence in Task 2.3. Continue to update individual records from Week 1 rather than backfilling at the end.

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
