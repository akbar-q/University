# Unit 5009 – Further Programmable Logic Controllers (PLCs)

## 8-Week Teaching Plan (2 Classes per Week)

**Structure:** 8 weeks × 2 sessions/week = **16 sessions**  
**Teaching split:** **Miss Anu (Theory / Principles)** and **Mr Akbar (Simulation Software / Practical)**  
**Primary tool for practical work:** OpenPLC Editor (with simulation)  

---

## Unit Learning Outcomes (LO)

- **LO1** Discuss the selection of a specific PLC for a given industrial application
- **LO2** Evaluate how PLCs exchange information and process signals with other devices
- **LO3** Design a PLC programme to solve an industrial process problem for a given application
- **LO4** Analyse alternative strategies for using other types of programmable control devices in industrial applications.

---

## Assessment Criteria Reference (for mapping)

### LO1
- **LO1.P1** Investigate the key industrial application characteristics of a given industrial application.
- **LO1.P2** Compare the operational features and characteristics of PLCs from several manufacturers.
- **LO1.M1** Justify the choice of a specific PLC suitable for a given industrial application.
- **LO1.D1** Evaluate and justify the selection of a specific PLC for an industrial application.

### LO2
- **LO2.P3** Illustrate the main differences between communication links and standards used within PLC systems.
- **LO2.P4** Review the advantages of using networked bus PLC systems.
- **LO2.M2** Show how PLCs in industry integrate with HMIs and SCADA.
- **LO2.M3** Evaluate the use of SCADA and HMIs in industry.
- **LO2.D2** Provide a justified and valid rationale for the convergence of PLCs/HMIs and SCADA control systems.

### LO3
- **LO3.P5** Design a PLC programme to solve an industrial application problem.
- **LO3.P6** Demonstrate the use of PLC programming and simulation software in a given application.
- **LO3.M4** Demonstrate the use of test and debug software to correct PLC program faults.
- **LO3.M5** Explore the practical uses of PLC advanced functions.
- **LO3.D3** Critically evaluate a PLC programme used to solve an industrial application problem.

### LO4
- **LO4.P7** Review the different types of programmable control devices available.
- **LO4.P8** Examine an industrial application to determine the required characteristics of a control device.
- **LO4.M6** Review the problems faced by using alternative devices in an industrial environment.
- **LO4.D4** Critically evaluate the selection of an alternative programmable device in a given application.

---

## Common Scenario Used Throughout (for consistency)

**MedPack Solutions Ltd.** high-throughput automated pharmaceutical packaging line for blister packs.

Typical station elements used in examples:
- Switched inputs: start, reset, emergency stop, pill sensor
- Relay outputs: actuator, buzzer
- Requirements: safety interlocks, reliability, basic fault handling

---

## Weekly Plan Overview (high-level)

- **Weeks 1–2:** Foundations + industrial application analysis + OpenPLC basics (LO1, LO3)
- **Weeks 3–4:** Communications, signals, bus systems, HMI/SCADA concepts + practical integration mindset (LO2)
- **Weeks 5–6:** PLC program design, simulation, test/debug, advanced functions (LO3)
- **Weeks 7–8:** Alternative devices and critical evaluation + consolidation and evidence packaging (LO4 + wrap-up)

---

# Week 1

## Session 1 (Class 1): Unit Orientation + Industrial Application Characteristics (LO1.P1)

**Session focus:** Understand the assignment scenario and what “industrial application characteristics” means in practice.

**Miss Anu (Theory – 60–75 min)**
- What a PLC system is in an industrial context (control, monitoring, safety interface)
- Break down the MedPack packaging station into:
  - Inputs, outputs, process steps, safety devices, operator interactions
  - Environmental and operational constraints (panel environment, wiring, maintenance expectations)
- Define “industrial application characteristics” and how to investigate them:
  - Process cycle description (step-by-step)
  - IO types, power levels, switching characteristics
  - Risk points (emergency stop, sensor stuck, actuator stall)
  - Reliability expectations and maintainability
- Evidence expectations for **LO1.P1**:
  - A clear process narrative
  - Basic IO requirement list and assumptions
  - Constraints and risks identified

**Mr Akbar (Practical – 45–60 min)**
- OpenPLC Editor: environment orientation
  - Create a project
  - Select language (ladder as default)
  - Basic compile/simulate workflow
- Build a first “IO map” skeleton:
  - Define digital inputs: `Start`, `Reset`, `EStop`, `PillSensor`
  - Define outputs: `Actuator`, `Buzzer`
  - Explain naming conventions and why consistent IO naming matters
- Quick simulation check:
  - Force/toggle inputs and observe mapped variables

**In-class activity**
- Students draft a 6–10 step “automation cycle” for the packaging station.

**Exit ticket / evidence**
- One-page (or slide) summary: process cycle + initial IO list + 3 constraints.

**Homework / independent study**
- Expand IO list into a first pass IO table (signals, type, notes).

**Criteria mapping**
- Primary: LO1.P1

---

## Session 2 (Class 2): PLC Features, Datasheets, and Manufacturer Comparison (LO1.P2)

**Session focus:** Compare PLCs using technical and practical selection factors.

**Miss Anu (Theory – 60–75 min)**
- What “operational features and characteristics” typically includes:
  - IO count and types, expansion, relay vs transistor outputs
  - Supply requirements, environmental rating, memory capacity, scan time
  - Comms (Ethernet/serial), protocol support, HMI/SCADA compatibility
  - Programming ecosystems, support, reliability, documentation
- How to structure a comparison:
  - A comparison matrix approach
  - Selecting comparable models (3 manufacturers)
  - What counts as “evidence” (datasheet extracts)

**Mr Akbar (Practical – 45–60 min)**
- Turn the IO table into PLC selection requirements:
  - Minimum DI/DO counts
  - Need for relay outputs (actuator/buzzer)
  - Expansion headroom
- Demonstrate what to look for in a datasheet quickly:
  - Output type, current ratings, wiring notes
  - Communication options

**In-class activity**
- Students start a PLC comparison table template (3 PLCs minimum).

**Exit ticket / evidence**
- Draft comparison table with at least 6 comparison attributes.

**Homework / independent study**
- Fill comparison table with datasheet citations (screenshots/links in report).

**Criteria mapping**
- Primary: LO1.P2

---

# Week 2

## Session 3 (Class 3): Selection Justification + System Layout Thinking (LO1.M1, LO1.D1)

**Session focus:** Move from comparison to justified selection, considering integration and expansion.

**Miss Anu (Theory – 60–75 min)**
- How to write a defensible selection justification:
  - Tie application requirements → PLC features → evidence
  - Discuss trade-offs (cost vs features, support vs flexibility)
- System layout and integration factors:
  - Panel layout constraints, wiring complexity, labelling
  - Maintainability considerations
  - Safety logic overview (emergency stop + reset expectations)
- What elevates work to Merit/Distinction:
  - A coherent rationale, not a list
  - Clear evaluation and justification language

**Mr Akbar (Practical – 45–60 min)**
- Create a simple block diagram (PLC + IO + power + sensor/actuator blocks)
- Convert a block diagram into practical IO mapping:
  - Identify what must be hardwired (E-Stop chain vs program logic)
  - Identify what is program-controlled

**In-class activity**
- Students outline their selection justification paragraph structure.

**Exit ticket / evidence**
- 1–2 paragraphs: “Why PLC X is selected” with at least 3 requirements referenced.

**Homework / independent study**
- Complete draft Task 1 report structure (headings + bullet content).

**Criteria mapping**
- Primary: LO1.M1, LO1.D1

---

## Session 4 (Class 4): Ladder Basics + First Working Cycle (LO3.P5, LO3.P6)

**Session focus:** Build a first functional ladder program implementing a basic packaging cycle.

**Miss Anu (Theory – 45–60 min)**
- Control logic principles:
  - Start/stop logic concepts
  - Latching and interlocks
  - Safety expectations: emergency stop dominates
- Translating the process narrative into logic:
  - Identify states (idle, running, fault)
  - Decide what outputs should do in each state

**Mr Akbar (Practical – 60–75 min)**
- Implement a simple ladder sequence:
  - Start latch enabling “Run” state
  - E-Stop to drop outputs immediately
  - Reset to clear alarms/state
  - Pill sensor triggers actuator logic (basic)
  - Buzzer logic for completion or error (basic)
- Demonstrate simulation workflow:
  - Toggle inputs
  - Observe outputs
  - Identify unexpected behavior

**In-class activity**
- Students run the program through 3 defined test cases:
  1) Normal start → sensor event → actuator → end
  2) E-Stop during run
  3) Sensor stuck simulation

**Exit ticket / evidence**
- Screenshot(s) / notes: successful run of test case 1 and 2.

**Homework / independent study**
- Document your program logic in plain English (short functional description).

**Criteria mapping**
- Primary: LO3.P5, LO3.P6

---

# Week 3

## Session 5 (Class 5): Signals, Noise, Filtering, and “What the PLC Sees” (LO2 foundations)

**Session focus:** Understand digital signals in industrial reality and how PLCs process them.

**Miss Anu (Theory – 60–75 min)**
- Digital signals and real-world issues:
  - Contact bounce, noise pickup, long cable effects
  - PNP/NPN sensors conceptually (as applicable)
  - Signal integrity and why false triggers happen
- Filtering/conditioning concepts:
  - Input filtering (hardware/software)
  - Debouncing strategies
- Tie back to the scenario:
  - Pill sensor reliability
  - Emergency stop wiring expectations (conceptual)

**Mr Akbar (Practical – 45–60 min)**
- Implement a simple software debouncing approach (where relevant):
  - Use timers to confirm stable input before acting
- Create a “noisy sensor” test in simulation:
  - Rapid toggling input
  - Show effect on outputs
  - Show improvement after debouncing

**In-class activity**
- Students compare behavior before vs after debouncing.

**Exit ticket / evidence**
- Short note: what changed and why it improved stability.

**Homework / independent study**
- Write a troubleshooting checklist for false triggers.

**Criteria mapping**
- Supports: LO2.P3 (preparation), LO3.P5/P6 (better program quality)

---

## Session 6 (Class 6): Communication Links and Standards (LO2.P3)

**Session focus:** Identify and explain communication links/standards used in PLC systems.

**Miss Anu (Theory – 60–75 min)**
- What is meant by “communication links and standards”:
  - Serial vs Ethernet vs fieldbus (high-level)
  - Typical industrial expectations: determinism, noise immunity, distance
- Differences to illustrate (for LO2.P3):
  - Data rate vs robustness
  - Topology and wiring complexity
  - Use case fit (simple IO expansion vs plant-wide monitoring)
- Scenario link:
  - Why a packaging line might use a bus network
  - What data might be exchanged

**Mr Akbar (Practical – 45–60 min)**
- Practical demonstration mindset (even if simulated):
  - What a PLC project needs configured when comms are used
  - What variables are typically exposed for monitoring
- Create a “signals to monitor” list for SCADA readiness:
  - States, alarms, counts, cycle time

**In-class activity**
- Students complete a short table: link/standard → typical use → pros/cons.

**Exit ticket / evidence**
- A one-page “communication comparison” summary for LO2.P3.

**Homework / independent study**
- Identify 2 standards used commonly with PLC/SCADA in industry and write 5 bullet points each.

**Criteria mapping**
- Primary: LO2.P3

---

# Week 4

## Session 7 (Class 7): Networked Bus PLC Systems (LO2.P4)

**Session focus:** Explain benefits of networked bus PLC systems.

**Miss Anu (Theory – 60–75 min)**
- What “networked bus PLC systems” means in industrial automation:
  - Distributed IO, reduced wiring, modularity
  - Diagnostics and maintenance benefits
- Advantages (LO2.P4) structured as:
  - Installation efficiency
  - Expansion flexibility
  - Fault finding and uptime
  - Standardization and interoperability
- Risks / limitations (supporting depth):
  - Single point of failure considerations
  - Network configuration complexity

**Mr Akbar (Practical – 45–60 min)**
- Translate bus-system advantages into a system layout:
  - What would change in panel wiring
  - What would change in documentation
- Build a “documentation pack” outline:
  - IO map, network map, addressing notes, variable list for SCADA

**In-class activity**
- Students draft a paragraph: “Advantages of using a bus PLC system for MedPack station.”

**Exit ticket / evidence**
- Draft LO2.P4 written response (minimum 200–300 words or equivalent slide content).

**Homework / independent study**
- Add a bus-system option section into Task 2 evidence notes.

**Criteria mapping**
- Primary: LO2.P4

---

## Session 8 (Class 8): HMI/SCADA Integration + Evaluation (LO2.M2, LO2.M3)

**Session focus:** Show how PLC integrates with HMI/SCADA; evaluate their use.

**Miss Anu (Theory – 60–75 min)**
- HMI fundamentals:
  - Operator needs: start/stop, status, alarms
  - Good practice: clear states, safe reset, alarm acknowledgement
- SCADA fundamentals:
  - Monitoring, trending, alarms, reporting
  - Why industries use SCADA (oversight, traceability)
- Evaluation prompts for LO2.M3:
  - Benefits vs costs
  - Human factors and risk
  - Maintenance and scalability

**Mr Akbar (Practical – 45–60 min)**
- Prepare PLC program variables for HMI/SCADA:
  - Expose run state, fault state, count, cycle timer
- Demonstrate a basic “SCADA-ready” variable list:
  - Tag naming conventions
  - What is read-only vs read/write
- If Node-RED material exists in the repo:
  - Identify what would be connected (conceptual connection plan)

**In-class activity**
- Students design an HMI screen layout on paper:
  - Must include start, reset, E-stop indicator, alarm banner, count display

**Exit ticket / evidence**
- HMI screen sketch + tag list for key variables.

**Homework / independent study**
- Write an evaluation paragraph: “Use of SCADA and HMIs in industry” mapped to the scenario.

**Criteria mapping**
- Primary: LO2.M2, LO2.M3

---

# Week 5

## Session 9 (Class 9): Convergence of PLC/HMI and SCADA (LO2.D2)

**Session focus:** Provide a justified rationale for convergence.

**Miss Anu (Theory – 60–75 min)**
- Define “convergence” in control systems:
  - Integrated platforms, unified data models, shared comms
- Rationale building blocks (LO2.D2):
  - Operational efficiency
  - Unified monitoring and control
  - Reduced integration friction
  - Lifecycle management benefits
- What makes the rationale “justified and valid”:
  - Use a scenario-driven argument
  - Address counterpoints (security, complexity)

**Mr Akbar (Practical – 45–60 min)**
- Evidence artifacts that strengthen D2:
  - A tag list and mapping table (PLC variable → HMI element → SCADA tag)
  - A simple architecture diagram
- Demonstrate how “tag thinking” improves clarity:
  - Consistent naming and documentation

**In-class activity**
- Students build an architecture diagram draft (PLC + HMI + SCADA + network).

**Exit ticket / evidence**
- One-page rationale outline (claim → evidence → conclusion).

**Homework / independent study**
- Write a full D2 response using your diagram and tag list.

**Criteria mapping**
- Primary: LO2.D2

---

## Session 10 (Class 10): Program Design Patterns + State Thinking (LO3.P5 strengthening)

**Session focus:** Improve program structure toward robust sequencing and safe operation.

**Miss Anu (Theory – 45–60 min)**
- Design approach:
  - Identify states and transitions
  - Define what constitutes a fault and how to recover
  - Define safe default behavior (outputs off)
- Safety and reliability thinking:
  - E-stop vs controlled stop (conceptual)
  - Reset behavior and operator expectation

**Mr Akbar (Practical – 60–75 min)**
- Refactor ladder program into clear structure:
  - Separate rungs: inputs conditioning, state logic, outputs
  - Add “Fault” latch with explicit reset
- Add a counter/timer component:
  - Pill counting concept with counter
  - Cycle timing with timer

**In-class activity**
- Students run 5 test scenarios and record results (table format):
  - normal cycle
  - E-stop mid-cycle
  - reset after fault
  - sensor stuck
  - start pressed during fault

**Exit ticket / evidence**
- A test table with expected vs actual outcomes.

**Homework / independent study**
- Prepare screenshots and notes suitable for Task 3 evidence.

**Criteria mapping**
- Primary: LO3.P5

---

# Week 6

## Session 11 (Class 11): Test and Debug Tools (LO3.M4)

**Session focus:** Use test/debug features to correct PLC program faults.

**Miss Anu (Theory – 45–60 min)**
- Fault types:
  - Logic faults (wrong interlock)
  - Timing faults (bounce, race)
  - Requirements faults (misinterpreted spec)
- Debug mindset:
  - Reproduce consistently
  - Isolate variables
  - Change one thing at a time

**Mr Akbar (Practical – 60–75 min)**
- Demonstrate debugging in OpenPLC Editor:
  - Monitoring live values
  - Forcing IO for diagnostics
  - Break down rungs to find where state changes incorrectly
- Introduce intentional faults and fix them:
  - Example fault: buzzer remains latched after reset
  - Example fault: actuator triggers on bounce

**In-class activity**
- Students receive (or create) one intentional bug and document:
  - symptom
  - root cause
  - fix
  - retest evidence

**Exit ticket / evidence**
- Debug report (short) with before/after behavior.

**Homework / independent study**
- Add a “Debugging evidence” appendix section for Task 3.

**Criteria mapping**
- Primary: LO3.M4

---

## Session 12 (Class 12): Advanced PLC Functions (LO3.M5)

**Session focus:** Explore practical uses of advanced functions for industrial control.

**Miss Anu (Theory – 45–60 min)**
- What qualifies as “advanced functions” in a PLC context:
  - Structured program organization
  - Additional timers/counters strategies
  - Diagnostics flags and fault codes
  - Modular logic blocks (where applicable)
- Why advanced functions matter:
  - Maintainability
  - Robustness
  - Scalability

**Mr Akbar (Practical – 60–75 min)**
- Implement 2–3 advanced features:
  - Fault codes (numeric/state encoding)
  - Cycle time measurement
  - Alarm acknowledgement behavior (where appropriate)
  - Optional: auto-timeout if sensor doesn’t trigger
- Show how to present variations:
  - Base version vs improved version
  - What changed and why

**In-class activity**
- Students create a “Version A / Version B” change log.

**Exit ticket / evidence**
- Screenshots + short functional description of at least one advanced feature.

**Homework / independent study**
- Prepare a short critical note: what the advanced feature improved, and any limitations.

**Criteria mapping**
- Primary: LO3.M5

---

# Week 7

## Session 13 (Class 13): Critical Evaluation of PLC Programme (LO3.D3)

**Session focus:** Critically evaluate the PLC programme used to solve the industrial application problem.

**Miss Anu (Theory – 60–75 min)**
- What “critical evaluation” looks like:
  - Does it meet the requirement reliably?
  - What are the limitations?
  - What evidence supports conclusions?
- Evaluation structure:
  - Requirements traceability (requirement → implementation → test)
  - Performance notes (timing, responsiveness)
  - Fault handling quality
- Writing quality expectations:
  - Be specific, evidence-based, scenario-linked

**Mr Akbar (Practical – 45–60 min)**
- Produce evaluation evidence:
  - Test results table
  - Screenshots of simulation results
  - Version comparisons (design changes)
- (If applicable) show effect of parameter changes:
  - timer preset changes
  - counter target changes
  - sensor bounce frequency changes

**In-class activity**
- Students draft D3 evaluation outline with headings:
  - Functionality
  - Reliability
  - Safety behavior
  - Maintainability
  - Limitations

**Exit ticket / evidence**
- Completed outline + one filled section (200–300 words).

**Homework / independent study**
- Write full D3 critical evaluation section for Task 3.

**Criteria mapping**
- Primary: LO3.D3

---

## Session 14 (Class 14): Alternative Programmable Devices (LO4.P7, LO4.P8)

**Session focus:** Review alternative devices and determine required characteristics for the application.

**Miss Anu (Theory – 60–75 min)**
- Alternative programmable control devices:
  - Programmable Logic Device (PLD)
  - Peripheral Interface Controller (PIC)
  - Microcontrollers
  - Industrial computers.
- Examine the application to determine required characteristics:
  - IO requirements and electrical interface
  - Real-time behavior expectations
  - Environmental robustness expectations
  - Maintainability and support expectations
  - Safety considerations (contextual)

**Mr Akbar (Practical – 45–60 min)**
- Practical comparison framing:
  - How the same “packaging cycle” could be represented on a microcontroller
  - What documentation would change
  - What tooling would be required
- Create a “requirements-to-device” mapping table template:
  - requirement → PLC fit → microcontroller fit → industrial PC fit

**In-class activity**
- Students fill a first draft of the mapping table for 2 alternatives.

**Exit ticket / evidence**
- List of required characteristics for the control device in this application.

**Homework / independent study**
- Expand the mapping table to include at least 3 device types.

**Criteria mapping**
- Primary: LO4.P7, LO4.P8

---

# Week 8

## Session 15 (Class 15): Problems Using Alternative Devices in Industrial Environments (LO4.M6)

**Session focus:** Review problems faced by using alternative devices in an industrial environment.

**Miss Anu (Theory – 60–75 min)**
- Industrial problems framing:
  - Electrical noise and EMI
  - Wiring and isolation requirements
  - Maintenance and troubleshooting expectations
  - Reliability, lifecycle support, documentation
  - Operator interface and safety integration challenges
- Discuss the packaging station context:
  - uptime expectations
  - fault recovery needs
  - regulatory and safety expectations (contextual)

**Mr Akbar (Practical – 45–60 min)**
- Evidence-building for M6:
  - A structured pros/cons table of alternatives
  - A short risk register (risk, likelihood, impact, mitigation)
- Practical examples:
  - What happens when sensors are noisy on a microcontroller input without conditioning
  - Interface methods:
    - relays and solid state relays
    - opto couplers
    - opto isolators
    - motor driver interface integrated circuits.

**In-class activity**
- Students build a 6–10 row risk register for one alternative device.

**Exit ticket / evidence**
- Completed “problems faced” table + 3 mitigations.

**Homework / independent study**
- Draft M6 write-up for the professional discussion notes.

**Criteria mapping**
- Primary: LO4.M6

---

## Session 16 (Class 16): Critical Evaluation of Alternative Device Selection (LO4.D4) + Consolidation

**Session focus:** Critically evaluate the selection of an alternative programmable device in a given application and consolidate evidence across tasks.

**Miss Anu (Theory – 60–75 min)**
- Distinction-level evaluation structure (LO4.D4):
  - Define the alternative option clearly
  - Define the application requirements explicitly
  - Evaluate fit with evidence-based reasoning
  - Address limitations and mitigation strategies
  - Provide a conclusion that is defensible
- Professional discussion preparation:
  - How to structure responses
  - How to reference evidence and diagrams during discussion

**Mr Akbar (Practical – 45–60 min)**
- Evidence packaging session:
  - Gather program screenshots
  - Gather test tables
  - Ensure IO mapping and diagrams are consistent
  - Produce a final “variable/tag list” (if SCADA/HMI referenced)
- Demonstrate “variation of circuit/function due to design changes” as a PLC logic analog:
  - Version A vs Version B (timer changes, debounce changes, fault handling changes)

**In-class activity**
- Students present a 3-minute summary:
  - chosen alternative device
  - why it might be chosen
  - why it might fail in industry
  - mitigation idea

**Exit ticket / evidence**
- Completed LO4.D4 evaluation outline + conclusion paragraph.

**Homework / independent study**
- Finalize discussion notes and ensure all required evidence is present.

**Criteria mapping**
- Primary: LO4.D4

---

## Ongoing Evidence Collection (recommended each week)

Maintain an “evidence folder” containing:
- Process description drafts and IO tables
- PLC comparison table and datasheet extracts
- Program versions (zipped) and screenshots
- Test cases table (expected vs actual)
- Debug logs (fault → fix → retest)
- Architecture diagram(s) for PLC/HMI/SCADA
- Alternative devices comparison table and risk register

---

## Suggested Deliverables by Week (so students don’t fall behind)

- **End of Week 2:** Draft Task 1 selection comparison + initial justification
- **End of Week 4:** First working program + initial simulation evidence
- **End of Week 6:** Debug evidence + advanced feature evidence
- **End of Week 8:** Alternative-device evaluation + consolidated pack
