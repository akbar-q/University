# PD Test Questions — Focused on LO4 (Alternative Automation Strategies)

Purpose
- This tutor-only list is constrained to LO4-focused prompts.
- The goal is to flexibly pick questions to distinguish performance across LO4.P7/LO4.P8 (Pass), LO4.M6 (Merit) and LO4.D4 (Distinction).

Instructions for assessors
- Choose 1–2 Pass-level prompts to confirm basic competence (LO4.P7/LO4.P8).
- Choose 1 Merit-level prompt to verify realistic industrial issues and mitigation thinking (LO4.M6).
- Choose 1 Distinction-level prompt aimed at LO4.D4 (critical evaluation, trade-offs, justification in the given application).
- Follow up with targeted technical probes based on the student’s answers and artefacts (comparison table, risk register, wiring concept, cost evidence).

Mapping to assessment criteria (LO4)
- LO4.P7 Review the different types of programmable control devices available.
- LO4.P8 Examine an industrial application to determine the required characteristics of a control device.
- LO4.M6 Review the problems faced by using alternative devices in an industrial environment.
- LO4.D4 Critically evaluate the selection of an alternative programmable device in a given application.

Scenario anchor
- MedPack Solutions Ltd. pill counting and packaging station: switched inputs (start, reset, emergency stop, pill sensor) and relay outputs (actuator, buzzer), plus expectations around robust signal processing, real-time control, and compliance with safety standards.

---

## LO4 — Pass-level (P7/P8)

### P7. Device types overview
- P7.1. Review the different types of programmable control devices available. Provide a short overview of at least:
  - Programmable Logic Device (PLD)
  - Peripheral Interface Controller (PIC)
  - Microcontrollers
  - Industrial computers.

Follow-ups:
- Which device types are most common for simple digital IO tasks?
- Which are most suitable for harsh industrial environments and why?

### P7.2. Interface methods awareness (supporting context)
- Explain typical programmable device interface methods relevant to industrial IO:
  - Relays and solid state relays
  - Opto couplers
  - Opto isolators
  - Motor driver interface integrated circuits.

Follow-ups:
- Which interfaces would you use to drive an inductive actuator safely?

### P8. Application requirements extraction
- P8.1. Examine the MedPack pill counting and packaging station and determine the required characteristics of a control device.
  - Identify required DI/DO (start/reset/e-stop/pill sensor; actuator/buzzer)
  - Identify reliability and safety expectations
  - Identify maintainability needs (fault finding, documentation)

Follow-ups:
- What is “must-have” vs “nice-to-have” for this station?
- What assumptions are you making about IO voltage and output loads?

---

## LO4 — Merit-level (M6)

### M6. Industrial problems using alternatives
- M6.1. Review the problems faced by using alternative devices in an industrial environment.
  - Discuss issues like EMI/noise, power integrity, wiring complexity, environmental robustness, maintenance support, spares, documentation, and lifecycle.
  - Link problems to at least two alternatives (e.g., microcontroller vs relay logic).

Follow-ups:
- What failure modes are most likely in a packaging line environment?
- How would you mitigate noise issues for sensor inputs on a microcontroller?
- How does troubleshooting differ between PLCs and alternatives?

---

## LO4 — Distinction-level (D4)

### D4. Critical evaluation of selecting an alternative
- D4.1. Critically evaluate the selection of an alternative programmable device in a given application.
  - Choose one alternative to PLCs for the MedPack station (e.g., microcontroller such as Nordic’s nRF52, industrial PC, relay logic panel).
  - Provide a reasoned decision with trade-offs: wiring complexity, reliability, programming difficulty, scalability, cost, suitability for simple digital IO tasks.
  - Include safety, regulatory, and maintenance considerations.

Follow-ups:
- Under what circumstances would a PLC not be the best choice for this station?
- If the alternative device is chosen, what design changes are required to reach industrial robustness?
- How would you demonstrate compliance/safety behaviour for emergency stop and safe restart?

### D4.2. Expansion and future-proofing critique
- Evaluate how the alternative choice impacts future expansion:
  - adding sensors
  - adding logging/traceability
  - integrating HMI/SCADA
  - adding safety interlocks

Follow-ups:
- Which option scales best with minimal rework?
- Which option is easiest to maintain over 5–10 years and why?

---

## Suggested artefacts to request during the PD (quick evidence)
- A comparison matrix (PLC vs at least two alternatives)
- A simple architecture diagram (how the station would be wired/controlled)
- A short risk table (risk, impact, mitigation)
- Any cost evidence used in decision-making (supplier quote screenshot/link)

---

End of PD Test Questions LO4.
