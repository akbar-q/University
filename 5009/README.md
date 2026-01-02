# Unit 5009 - Further Programmable Logic Controllers (PLCs)

## Course Information

**Qualification:** Pearson BTEC Level 5 Higher National Diploma in Mechatronics

**Unit Number and Title:** 5009: Further Programmable Logic Controllers (PLCs)

**Academic Year:** 2025-2026

**Assessor:** Akbar

**Assignment Title:** Implementation of Smart Environmental Monitoring System

**Hand-out Date:** 2nd October 2025

**Submission Deadline:** 7th December 2025

---

## Learning Outcomes

This unit covers four main learning outcomes:

### LO1: Discuss the selection of a specific PLC for a given industrial application
- Investigate the key industrial application characteristics of a given industrial application (P1)
- Compare the operational features and characteristics of PLCs from several manufacturers (P2)
- Justify the choice of a specific PLC suitable for a given industrial application (M1)
- Evaluate and justify the selection of a specific PLC for an industrial application (D1)

### LO2: Evaluate how PLCs exchange information and process signals with other devices
- Illustrate the main differences between communication links and standards used within PLC systems (P3)
- Review the advantages of using networked bus PLC systems (P4)
- Show how PLCs in industry integrate with HMIs and SCADA (M2)
- Evaluate the use of SCADA and HMIs in industry (M3)
- Provide a justified and valid rationale for the convergence of PLCs/HMIs and SCADA control systems (D2)

### LO3: Design a PLC programme to solve an industrial process problem for a given application
- Design a PLC programme to solve an industrial application problem (P5)
- Demonstrate the use of PLC programming and simulation software in a given application (P6)
- Demonstrate the use of test and debug software to correct PLC program faults (M4)
- Explore the practical uses of PLC advanced functions (M5)
- Critically evaluate a PLC programme used to solve an industrial application problem (D3)

### LO4: Analyse alternative strategies for using other types of programmable control devices in industrial applications
- Review the different types of programmable control devices available (P7)
- Examine an industrial application to determine the required characteristics of a control device (P8)
- Review the problems faced by using alternative devices in an industrial environment (M6)
- Critically evaluate the selection of an alternative programmable device in a given application (D4)

---

## Vocational Scenario

**MedPack Solutions Ltd.** is launching a high-throughput automated pharmaceutical packaging line for blister packs. As a Controls Engineer, you are responsible for:

- Selecting, implementing, and evaluating PLC-based automation
- Ensuring robust signal processing and real-time control
- Compliance with safety standards in a regulated manufacturing environment

The system includes:
- Pill counting and packaging station
- Operator control interface (start, reset, emergency stop)
- Pill sensor with relay triggering
- Actuator for packaging operations
- Buzzer for error/completion alerts
- Safety interlocks and emergency stop logic

---

## Assignment Tasks

### Task 1: PLC Selection and Justification - Technical Report
**Deliverable:** Technical report with PLC recommendation

**Key Requirements:**
- Process description and automation cycle explanation
- Functional requirements (digital IO, relay outputs, voltage/current)
- Comparison of at least three PLC models from different manufacturers
- Selection justification with datasheet evidence
- IO table and system block diagram
- Integration and expansion discussion
- Critical reflection on trade-offs and standards

**Criteria Covered:** LO1.P1, LO1.P2, LO1.M1, LO1.D1

---

### Task 2: PLC Signal Processing and Communication - Project Demonstration
**Deliverable:** Live and recorded demonstration

**Key Requirements:**
- Wiring and configuration of inputs/outputs
- Operation cycle demonstration
- Error simulation and system response
- Troubleshooting procedures
- System documentation (wiring diagrams, IO tables)
- Signal integrity and noise mitigation discussion

**Criteria Covered:** LO2.P3, LO2.P4, LO2.M2, LO2.M3, LO2.D2

---

### Task 3: PLC Programming Implementation – Offline Programming Test
**Deliverable:** PLC program with live testing demonstration

**Key Requirements:**
- Program structure (start/stop, pill count, actuator sequencing, buzzer alerts)
- Use of logic functions (AND, OR, NOT), timers, counters
- Advanced features (software timers, memory bits, state tracking)
- Live testing with error handling
- Test and debug software demonstration
- Logic modifications and fault corrections
- Rationale and reflection on approach

**Criteria Covered:** LO3.P5, LO3.P6, LO3.M4, LO3.M5, LO3.D3

---

### Task 4: Alternative Automation Strategies - Professional Discussion
**Deliverable:** Live and recorded professional discussion

**Key Requirements:**
- Overview of at least two alternative control devices (e.g., microcontrollers, relay logic)
- Comparative analysis (wiring, reliability, programming, scalability, cost)
- Regulatory, safety, and maintenance evaluation
- Scenario application analysis
- Critical reflection on industry trends
- Future skills assessment

**Criteria Covered:** LO4.P7, LO4.P8, LO4.M6, LO4.D4

---

## Submission Format

- **Report:** .ODT open document format, Open Sans font size 12
- **Code:** Project file folders in .ZIP format from OpenPLC Editor
- **Professional Discussion Notes:** Documentation of assessor discussion
- **Presentation Slides:** .ODP open document format or .PDF
- **References:** Harvard referencing style

---

## Transferable Skills and Competencies Developed

- PLC hardware selection and documentation
- PLC programming and testing (OpenPLC Editor)
- Sensor/actuator interfacing
- Signal processing and communication protocols
- Technical oral and written communication
- Critical analysis of automation strategies
- Safety and regulatory compliance awareness

---

## Key Topics Covered

### Alternative Programmable Control Devices
- Programmable Logic Device (PLD)
- Peripheral Interface Controller (PIC)
- Microcontrollers
- Industrial computers

### Programmable Device Interface Methods
- Relays and solid state relays
- Opto couplers
- Opto isolators
- Motor driver interface integrated circuits

### Communication and Integration
- Communication links and standards in PLC systems
- Networked bus PLC systems
- HMI (Human Machine Interface) integration
- SCADA (Supervisory Control and Data Acquisition) systems
- Convergence of PLCs/HMIs and SCADA control systems

---

## Recommended Resources

### Books
- Bolton, W. (2015) *Programmable Logic Controllers*. 5th Ed. Newes.
- Kamel, K. and Kamel, E. (2013) *Programmable Logic Controllers: Industrial Control*. McGraw-Hill Education.
- Morton, J. (2005) *The PIC Microcontroller: Your Personal Introductory Course*. 3rd Ed. Newnes.
- Perez, E. (2012) *Introduction to PLCs: A beginner's guide to Programmable Logic Controllers*. Elvin Perez Adrover.
- Petruzella F. (2023) *Programmable Logic Controllers*. 6th Ed. McGraw Hill.
- Rehg A. R. and SARTOR J. G. (2014) *Programmable Logic Controllers*. 2nd Ed. Pearson.
- Stewart G. R. (2021) *Plc Programming for Beginners*. SIEMENS.

### Online Resources
- Science and Engineering Publishing Company - International Journal of Information and Computer Science
- AIRCC Publishing Corporation - International Journal of Computer Science, Engineering and Information Technology (IJCSEIT)

---

## Repository Structure

```
5009/
├── 01 September 2025/          # Initial learning period materials
│   ├── SCADA-NodeRED-Notes     # SCADA and Node-RED learning materials
│   └── Assignment Brief/        # Assignment documentation
│       ├── 5009 Assignment-Breif.odt        # Original ODT format
│       └── 5009-Assignment-Brief.md         # Markdown version (GitHub-friendly)
├── README.md                    # This file
└── [Additional folders as course progresses]
```

---

## Notes

- Teaching was delivered in collaboration between **Miss Anu** (theory) and **Mr Akbar** (simulation software)
- Software used: OpenPLC Editor
- Focus on pharmaceutical industry automation standards
- Emphasis on safety, reliability, and regulatory compliance
- Real-world application: MedPack Solutions Ltd. packaging line

---

## Assessment Grading Criteria

### Pass Criteria
P1, P2, P3, P4, P5, P6, P7, P8

### Merit Criteria
M1, M2, M3, M4, M5, M6

### Distinction Criteria
D1, D2, D3, D4

---

*Last Updated: January 2026*
