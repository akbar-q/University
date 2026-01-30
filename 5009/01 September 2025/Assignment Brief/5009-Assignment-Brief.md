  # Unit 5009 - Further Programmable Logic Controllers (PLCs)
## BTEC Assignment Brief

---

### Course Information

| Field | Details |
|-------|---------|
| **Qualification** | Pearson BTEC Level 5 Higher National Diploma in Engineering |
| **Unit number and title** | 5009: Further Programmable Logic Controllers (PLCs) |
| **Assignment title** | Implementation of Smart Environmental Monitoring System |
| **Assessor** | Ms. Anu & Mr. Akbar |
| **Hand-out date** | 10/10/2025 |
| **Hand-in deadline** | 15/12/2025 |

---

### Learning Outcomes

- **LO1** Discuss the selection of a specific PLC for a given industrial application
- **LO2** Evaluate how PLCs exchange information and process signals with other devices
- **LO3** Design a PLC programme to solve an industrial process problem for a given application
- **LO4** Analyse alternative strategies for using other types of programmable control devices in industrial applications.

---

## Vocational Scenario or Context

MedPack Solutions Ltd. is launching a high-throughput automated pharmaceutical packaging line for blister packs. As a Controls Engineer, you are responsible for selecting, implementing, and evaluating PLC-based automation. You will ensure robust signal processing, real-time control, and compliance with safety standards in a regulated manufacturing environment.

---

## Task 1: PLC Selection and Justification - Technical Report

You are required to submit a technical report recommending and justifying a suitable PLC model for the pill counting and packaging station. Use diagrams, IO tables, and datasheet extracts to support your analysis. Your report should address:

### Requirements

- **Process Description:** 
  - Explain the full automation cycle: operator starts the count, pill sensor triggers relay, actuator packages pills, buzzer sounds for errors or completion, emergency stop and reset logic.
  - Highlight any safety or reliability requirements, environmental factors, and regulatory basics.

- **Functional Requirements:** 
  - Specify the number and type of digital inputs/outputs, relay output needs, voltage/current compatibility, panel mounting, and expansion potential.

- **Comparison of PLC Models:** 
  - Analyse and compare at least three PLC models/manufacturers, focusing on digital IO capacity, relay outputs, expandability, programming features, user interface, reliability, and cost.
  - Discuss practical factors: wiring, ease of installation, documentation, vendor support, and training resources.

- **Selection Justification:** 
  - Defend your chosen PLC (with datasheet evidence) based on technical suitability, reliability, ease of programming, and future maintenance.
  - Include a summary IO table and a simple block diagram of your proposed system layout.

- **Integration and Expansion:** 
  - Discuss how the PLC will be incorporated into the station (including panel layout and wiring) and suggest how it could be expanded for future needs.

- **Critical Reflection:** 
  - Briefly reflect on trade-offs (e.g., cost with specific cited numbers from vendors vs. features, support vs. flexibility) and any industry standards or safety considerations relevant to your selection.

### Checklist of Evidence Required

- Process description with automation cycle explanation
- Functional requirements specification (digital IO, relay outputs, voltage/current compatibility)
- Comparison of at least three PLC models with feature analysis
- Selection justification with datasheet evidence
- Summary IO table and system block diagram
- Integration and expansion discussion
- Critical reflection on trade-offs and standards

### Criteria Covered by This Task

| Unit/Criteria Reference | To achieve the criteria, you must show that you are able to: |
|------------------------|--------------------------------------------------------------|
| **LO1.P1** | Investigate the key industrial application characteristics of a given industrial application. |
| **LO1.P2** | Compare the operational features and characteristics of PLCs from several manufacturers. |
| **LO1.M1** | Justify the choice of a specific PLC suitable for a given industrial application. |
| **LO1.D1** | Evaluate and justify the selection of a specific PLC for an industrial application. |

---

## Task 2: PLC Signal Processing and Communication - Project Demonstration

Set up and demonstrate (live and recorded) the PLC's handling of digital signals from inputs and outputs in the pill packaging station. Your demonstration should include:

### Requirements

- **Wiring and Configuration:** 
  - Show correct wiring of switched inputs (start, reset, emergency stop, pill sensor) and relay outputs (actuator, buzzer).
  - Explain how each input is debounced (if relevant), filtered, and mapped to the PLC program.

- **Operation Cycle:** 
  - Run a typical packaging cycle: simulate operator actions, pill count detection, actuator activation, buzzer for errors or completion.
  - Demonstrate PLC logic scanning, signal processing, and output actuation.

- **Error Simulation:** 
  - Simulate common faults (e.g., sensor stuck, emergency stop pressed) and demonstrate system response, including buzzer activation and process halt.

- **Troubleshooting:** 
  - Show basic fault diagnosis: how to test for wiring errors, input misreads, relay faults, and program logic errors.
  - Discuss how signal integrity and noise could affect the system and mitigation strategies (shielded cables, input filters).

- **System Documentation:** 
  - Briefly show your wiring diagram and IO allocation table to clarify system layout and logic, document findings in a lab record.

### Checklist of Evidence Required

- Wiring diagrams with input/output connections
- IO allocation table
- Live demonstration of operation cycle (recorded)
- Error simulation results
- Troubleshooting procedures and findings
- Lab record documentation
- Discussion of signal integrity and mitigation strategies

### Criteria Covered by This Task

| Unit/Criteria Reference | To achieve the criteria, you must show that you are able to: |
|------------------------|--------------------------------------------------------------|
| **LO2.P3** | Illustrate the main differences between communication links and standards used within PLC systems. |
| **LO2.P4** | Review the advantages of using networked bus PLC systems. |
| **LO2.M2** | Show how PLCs in industry integrate with HMIs and SCADA. |
| **LO2.M3** | Evaluate the use of SCADA and HMIs in industry. |
| **LO2.D2** | Provide a justified and valid rationale for the convergence of PLCs/HMIs and SCADA control systems. |

---

## Task 3: PLC Programming Implementation – Offline Programming Test

Develop programs for PLC control subtasks in the medicine packaging plant. Your programming submission should include:

### Requirements

- **Program Structure:** 
  - Implement start/stop control, pill count verification, actuator sequencing, buzzer alert logic (e.g., completion, error, emergency stop).
  - Use basic logic functions (AND, OR, NOT), timers/counters for pill counting, and program comments for clarity.

- **Advanced Features:** 
  - If supported, demonstrate use of software timers, counters, or simple memory bits for process state tracking.
  - Show program test and debug features, such as monitoring live values and forcing IO for diagnostics.

- **Live Testing:** 
  - Run the program through typical cycles, simulate input changes, and handle errors in real time and document your findings.
  - Make at least one live logic modification or fault correction during the test.

- **Rationale and Reflection:** 
  - Explain your programming approach, logic choices, and safeguards for safe operation.
  - Reflect briefly on challenges (e.g., debouncing, timing, state management), how you resolved them, and lessons learned for future programming tasks.

### Checklist of Evidence Required

- PLC program code with comments and documentation
- Program logic diagrams
- Live testing demonstration (recorded)
- Test results and findings
- Logic modifications and fault corrections
- Rationale and reflection on programming approach
- Challenges and solutions documentation

### Criteria Covered by This Task

| Unit/Criteria Reference | To achieve the criteria, you must show that you are able to: |
|------------------------|--------------------------------------------------------------|
| **LO3.P5** | Design a PLC programme to solve an industrial application problem. |
| **LO3.P6** | Demonstrate the use of PLC programming and simulation software in a given application. |
| **LO3.M4** | Demonstrate the use of test and debug software to correct PLC program faults. |
| **LO3.M5** | Explore the practical uses of PLC advanced functions. |
| **LO3.D3** | Critically evaluate a PLC programme used to solve an industrial application problem. |

---

## Task 4: Alternative Automation Strategies - Professional Discussion

Participate in a professional oral discussion (live and recorded) critically evaluating alternatives to PLCs for similar automation tasks. Your discussion should include:

### Requirements

- **Alternatives Overview:** 
  - Defend at least two alternative control devices (e.g., microcontroller such as Nordic's nRF52, traditional relay logic panel).

- **Comparison:** 
  - Discuss wiring complexity, reliability, programming difficulty, scalability, cost, and suitability for simple digital IO tasks.
  - Evaluate regulatory, safety, and maintenance considerations for each alternative.
  - Assess pros and cons for small-batch pharmaceutical automation and potential for future expansion.

- **Scenario Application:** 
  - Given a scenario (e.g., pill count and packaging, with added safety interlocks), justify which control approach is optimal and why.
  - Discuss circumstances where a PLC might not be the best choice and how alternatives could be adapted.

- **Critical Reflection:** 
  - Reflect on broader industry trends: the role of simple PLCs, microcontrollers, and relay logic in modern manufacturing.
  - Consider future skills and learning needed to adapt to changing automation technologies.

### Checklist of Evidence Required

- Overview of at least two alternative control devices
- Comparative analysis of PLC vs. alternatives (wiring, reliability, programming, scalability, cost)
- Regulatory, safety, and maintenance evaluation
- Scenario application analysis and justification
- Critical reflection on industry trends and future skills
- Live and recorded discussion evidence

### Criteria Covered by This Task

| Unit/Criteria Reference | To achieve the criteria, you must show that you are able to: |
|------------------------|--------------------------------------------------------------|
| **LO4.P7** | Review the different types of programmable control devices available. |
| **LO4.P8** | Examine an industrial application to determine the required characteristics of a control device. |
| **LO4.M6** | Review the problems faced by using alternative devices in an industrial environment. |
| **LO4.D4** | Critically evaluate the selection of an alternative programmable device in a given application. |

---

## Submission Format

- **Report:** Document to be submitted in .ODT open document format, with font preferably as open sans in size 12.
- **Code:** Project file folders in .ZIP format from OpenPLC Editor.
- **Professional Discussion Notes:** Documentation of the discussion with the assessor regarding simulation, implementation.
- **Presentation Slides:** Presentation as .ODP open document format or .PDF.
- **All references must follow the Harvard referencing style**

---

## Sources of Information to Support You with This Assignment

### Textbooks

- Bolton, W. (2015) *Programmable Logic Controllers*. 5th Ed. Newes.
- Kamel, K. and Kamel, E. (2013) *Programmable Logic Controllers: Industrial Control*. McGraw-Hill Education.
- Morton, J. (2005) *The PIC Microcontroller: Your Personal Introductory Course*. 3rd Ed. Newnes.
- Perez, E. (2012) *Introduction to PLCs: A beginner's guide to Programmable Logic Controllers*. Elvin Perez Adrover.
- Petruzella F. (2023) *Programmable Logic Controllers*. 6th Ed. McGraw Hill.
- Rehg A. R. and SARTOR J. G. (2014) *Programmable Logic Controllers*. 2nd Ed. Pearson.
- Stewart G. R. (2021) *Plc Programming for Beginners*. SIEMENS.

---

*This assignment brief has been converted from ODT format to Markdown for improved readability on GitHub.*
