# Unit 5009 – LO2 Marking Scheme (Task 2: PLC Signal Processing and Communication)

This marking scheme is for **LO2** only and is intended to guide the assessor in awarding **Pass / Merit / Distinction** based on the submitted **Task 2 project demonstration** (live and recorded) and supporting documentation.

---

## Criteria (exact)

- **LO2.P3** Illustrate the main differences between communication links and standards used within PLC systems.
- **LO2.P4** Review the advantages of using networked bus PLC systems.
- **LO2.M2** Show how PLCs in industry integrate with HMIs and SCADA.
- **LO2.M3** Evaluate the use of SCADA and HMIs in industry.
- **LO2.D2** Provide a justified and valid rationale for the convergence of PLCs/HMIs and SCADA control systems.

---

## Overall Award Logic (LO2 only)

- **Pass (LO2 achieved):** LO2.P3 **and** LO2.P4 achieved.
- **Merit (LO2 achieved at Merit):** LO2.P3 + LO2.P4 **and** LO2.M2 + LO2.M3 achieved.
- **Distinction (LO2 achieved at Distinction):** LO2.P3 + LO2.P4 + LO2.M2 + LO2.M3 **and** LO2.D2 achieved.

Note: This document does not assign numeric marks. Decisions are **criterion-referenced** (Achieved / Not Achieved), based on evidence quality.

---

## Minimum Submission Components (Task 2)

To be assessable, the submission should contain the following (from Task 2 brief):

- Wiring and Configuration: correct wiring of switched inputs (start, reset, emergency stop, pill sensor) and relay outputs (actuator, buzzer); explanation of debounce/filtering/mapping
- Operation Cycle: run a typical packaging cycle and demonstrate PLC logic scanning, signal processing, and output actuation
- Error Simulation: simulate faults (e.g., sensor stuck, emergency stop pressed) and demonstrate system response including buzzer activation and process halt
- Troubleshooting: demonstrate basic fault diagnosis; discuss noise/signal integrity and mitigation (shielded cables, input filters)
- System Documentation: show wiring diagram and IO allocation table; record findings in a lab record

Checklist of evidence required:
- Wiring diagrams with input/output connections
- IO allocation table
- Live demonstration of operation cycle (recorded)
- Error simulation results
- Troubleshooting procedures and findings
- Lab record documentation
- Discussion of signal integrity and mitigation strategies

---

# Criterion-by-Criterion Marking Guidance

## LO2.P3 – Achieved / Not Achieved
**LO2.P3** Illustrate the main differences between communication links and standards used within PLC systems.

### Assessor checks (what to look for)
Evidence should show the student can explain differences between:
- **communication links** (e.g., Ethernet vs serial/RS-485 – physical connection types), and
- **communication standards/protocols** used within PLC systems (e.g., Modbus TCP/RTU, PROFINET, EtherNet/IP, etc. as appropriate).

The submission should include:
- Clear explanation of at least **two links** and at least **two standards/protocols**.
- A comparison that illustrates differences such as:
  - distance / topology
  - noise immunity
  - speed / bandwidth (high-level acceptable)
  - typical PLC use cases

### Typical acceptable evidence items
- A short comparison table (link vs standard/protocol)
- A diagram showing PLC connected to another device with link/protocol labelled
- Spoken explanation in the video with supporting notes

### Not Achieved indicators
- Only lists names without explaining differences.
- Confuses “link” and “standard” with no distinction.

---

## LO2.P4 – Achieved / Not Achieved
**LO2.P4** Review the advantages of using networked bus PLC systems.

### Assessor checks (what to look for)
Evidence should show a review of advantages of networked bus PLC systems, linked to industrial practice.

The submission should include:
- Clear advantages explained (not just listed), such as:
  - reduced wiring
  - easier expansion
  - improved diagnostics/maintenance
  - modularity and distributed IO
  - improved data availability for monitoring
- Must relate advantages to the station context (packaging line / IO / maintenance / uptime).

### Typical acceptable evidence items
- Short written review (paragraphs)
- Simple network/bus topology diagram

### Not Achieved indicators
- Generic statements with no explanation or context.
- No clear “advantages” review.

---

## LO2.M2 – Achieved / Not Achieved
**LO2.M2** Show how PLCs in industry integrate with HMIs and SCADA.

### Assessor checks (what to look for)
Evidence must “show” integration, which can be demonstrated through:
- A working integration (preferred) OR
- A clear integration architecture + tag list + explanation of data flow (acceptable if a full SCADA build is not feasible).

The submission should include:
- An explanation of what data is exchanged (e.g., run state, faults, pill count, actuator/buzzer status).
- Identification of the integration method (e.g., Ethernet + protocol; tag mapping concept).

### Typical acceptable evidence items
- Screenshot/video of an HMI/SCADA dashboard reading PLC variables
- Architecture diagram (PLC → HMI/SCADA) and a tag list mapping

### Not Achieved indicators
- Mentions HMI/SCADA but does not show how integration works.
- No tags/variables identified.

---

## LO2.M3 – Achieved / Not Achieved
**LO2.M3** Evaluate the use of SCADA and HMIs in industry.

### Assessor checks (what to look for)
Evidence should show evaluation (balanced judgement) including:
- Benefits (e.g., monitoring, alarms, logging, traceability, troubleshooting support)
- Limitations/risks (e.g., cost, complexity, training needs, cybersecurity, network dependency)
- A conclusion appropriate for the application context.

### Typical acceptable evidence items
- A structured pros/cons evaluation with a scenario-based conclusion
- Spoken evaluation in the demo recording + brief written summary

### Not Achieved indicators
- Only states “SCADA is useful” with no evaluation.
- No mention of drawbacks or trade-offs.

---

## LO2.D2 – Achieved / Not Achieved
**LO2.D2** Provide a justified and valid rationale for the convergence of PLCs/HMIs and SCADA control systems.

### Assessor checks (what to look for)
Evidence must provide a rationale (not just description) that is:
- **justified** (claims supported with reasoning linked to industry needs), and
- **valid** (addresses both benefits and risks/controls).

The submission should include:
- What “convergence” means in context (combined platforms/data/tags/networks).
- Why convergence is happening (engineering efficiency, data availability, lifecycle management, etc.).
- At least one risk and at least one mitigation/control (e.g., network segmentation, access control, backups).
- A scenario-driven conclusion.

### Typical acceptable evidence items
- Written rationale with structure (claim → justification → counterpoint → mitigation → conclusion)
- Architecture diagram showing PLC/HMI/SCADA on shared infrastructure + a security/segmentation note

### Not Achieved indicators
- Only describes convergence with no rationale.
- No risks/mitigations.

---

# Suggested Evidence Quality Checklist (quick tick sheet)

## Task 2 deliverables checklist
- Wiring diagram/photo clearly showing Start/Reset/E-Stop/Pill sensor and Actuator/Buzzer ☐
- IO allocation table matches wiring and program tags ☐
- Recorded normal operation cycle shown end-to-end ☐
- Recorded error simulation shown (sensor stuck and/or E-stop) ☐
- Troubleshooting method demonstrated and documented ☐
- Lab record entry included ☐
- Noise/signal integrity discussion + mitigation strategies included ☐

## LO2.P3 checklist
- Distinguishes links vs standards/protocols ☐
- Illustrates key differences with examples ☐

## LO2.P4 checklist
- Explains advantages of bus systems in context ☐

## LO2.M2 checklist
- Shows integration approach (working or architecture + tag list) ☐

## LO2.M3 checklist
- Balanced evaluation with conclusion ☐

## LO2.D2 checklist
- Justified rationale + risks + mitigations + conclusion ☐

---

# Common Issues to Watch For (Assessor Notes)

- Demonstration evidence missing timestamps: ask students to provide timestamps or labelled clips.
- IO table does not match program tags: treat as weak system documentation.
- “Integration” described but not shown: require either a working dashboard screenshot or a clear tag mapping and architecture diagram.
- Communication discussion disconnected from PLC systems: require PLC-relevant examples (links/protocols used in PLC environments).
