# Professional Discussion — Focused Q&A for LO4 (Alternative Automation Strategies)

Purpose
- This file is focused on LO4: analysing alternative strategies for using other types of programmable control devices in industrial applications.
- Questions probe the student’s ability to compare alternatives to PLCs using the MedPack packaging station context.

How to use
- Students: use this as revision for the professional discussion. Prepare:
  - a comparison table (PLC vs at least two alternatives)
  - a simple architecture diagram
  - a short risk list (risk, impact, mitigation)
  - a short cost comparison (if available)
- Assessors: use follow-up probes to test depth and realism.

Mapping to LO4 assessment criteria (exact)
- LO4.P7 Review the different types of programmable control devices available.
- LO4.P8 Examine an industrial application to determine the required characteristics of a control device.
- LO4.M6 Review the problems faced by using alternative devices in an industrial environment.
- LO4.D4 Critically evaluate the selection of an alternative programmable device in a given application.

Scenario anchor
- MedPack Solutions Ltd. pill counting and packaging station with inputs (start, reset, emergency stop, pill sensor) and outputs (actuator, buzzer). The environment requires robust signal processing, real-time control, and compliance with safety standards.

---

## Question A — LO4.P7 (Device types overview)
Q: Review the different types of programmable control devices available. Give examples and what each is typically used for in control systems.

Model answer:
- Programmable Logic Device (PLD): used for hardware-logic style control where deterministic logic is needed; more common in digital design than plant control.
- Peripheral Interface Controller (PIC): microcontroller family used for embedded control, sensing, and simple automation; typically requires custom firmware and external IO interfacing.
- Microcontrollers: general category (e.g., ARM-based) used for custom embedded solutions; flexible but needs more design for industrial robustness.
- Industrial computers: PC-based control for high data/analytics workloads; often used with SCADA/soft-PLC, but needs careful engineering for reliability and maintenance.

Examiner follow-ups:
- Which of these best suits simple digital IO tasks? Why?
- Which requires the most additional hardware to interface safely with industrial sensors/actuators?

---

## Question B — LO4.P8 (Required characteristics for the MedPack station)
Q: Examine the MedPack pill counting and packaging station and determine the required characteristics of a control device.

Model answer structure (use headings):
- IO requirements: identify DI/DO count and types (start/reset/e-stop/pill sensor; actuator/buzzer).
- Output driving needs: inductive loads, relay outputs or interposing relays.
- Reliability: predictable scan/response, stable operation over long runs.
- Maintainability: clear fault finding, documentation, ease of replacement.
- Safety behaviour: emergency stop dominant behaviour; safe restart expectations.
- Expandability: ability to add sensors, logging, HMI/SCADA.

Examiner follow-ups:
- What is non-negotiable for safety?
- What is your assumed IO voltage and why?

---

## Question C — LO4.M6 (Problems using alternative devices in industrial environments)
Q: Review the problems faced by using alternative devices in an industrial environment. Use at least two alternatives and explain what can go wrong.

Model answer structure:
- Noise/EMI and signal integrity:
  - microcontroller GPIO inputs can be more sensitive; needs filtering, shielding, opto-isolation.
- Power integrity:
  - brownouts/resets; need regulated supplies, decoupling, watchdogs.
- Wiring complexity:
  - relay logic panels can become complex; error-prone modifications.
- Maintenance and diagnostics:
  - PLCs often provide clearer IO diagnostics; alternatives may require custom tools.
- Lifecycle and support:
  - availability of spares, documentation, and long-term maintenance.

Examiner follow-ups:
- What mitigation would you apply for a noisy pill sensor line?
- How would you design outputs safely for a solenoid/actuator?

---

## Question D — LO4.D4 (Critical evaluation: choose an alternative and justify it)
Q: Critically evaluate the selection of an alternative programmable device in the MedPack station. Choose one alternative and justify it, including trade-offs.

Model answer template:
1) Chosen alternative: (e.g., microcontroller such as Nordic’s nRF52 / relay logic panel / industrial PC)
2) Why it could be chosen:
- cost, availability, custom features, integration with wireless/data, etc.
3) Why it may be weaker than a PLC:
- wiring complexity, reliability under EMI, maintenance burden, safety expectations.
4) Mitigation steps required:
- interface methods (relays/SSRs, opto-isolators), enclosure practices, watchdogs, structured fault handling, documentation.
5) Final judgement:
- state where the alternative is acceptable and where a PLC remains the better choice.

Examiner follow-ups:
- When would a PLC not be the best choice for the same station?
- What changes would be required to support future expansion (HMI/SCADA integration)?

---

## Quick revision checklist (student)
- Can you name and explain PLD, PIC, microcontrollers, industrial computers?
- Can you list the required characteristics for a control device in the MedPack station?
- Can you explain realistic industrial problems (noise, power, maintenance, lifecycle) for alternatives?
- Can you defend one alternative choice with trade-offs and mitigations?

---

End of PD Sample QnA LO4.
