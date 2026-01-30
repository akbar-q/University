# Unit 5009 – LO1 Marking Scheme (Task 1: PLC Selection and Justification)

This marking scheme is for **LO1** only and is intended to guide the assessor in awarding **Pass / Merit / Distinction** based on the submitted **Task 1 technical report**.

---

## Criteria (exact)

- **LO1.P1** Investigate the key industrial application characteristics of a given industrial application.
- **LO1.P2** Compare the operational features and characteristics of PLCs from several manufacturers.
- **LO1.M1** Justify the choice of a specific PLC suitable for a given industrial application.
- **LO1.D1** Evaluate and justify the selection of a specific PLC for an industrial application.

---

## Overall Award Logic (LO1 only)

- **Pass (LO1 achieved):** LO1.P1 **and** LO1.P2 achieved.
- **Merit (LO1 achieved at Merit):** LO1.P1 + LO1.P2 **and** LO1.M1 achieved.
- **Distinction (LO1 achieved at Distinction):** LO1.P1 + LO1.P2 + LO1.M1 **and** LO1.D1 achieved.

Note: This document does not assign numeric marks. Decisions are **criterion-referenced** (Achieved / Not Achieved), based on evidence quality.

---

## Minimum Submission Components (Task 1)

To be assessable, the submission should contain the following (from Task 1 brief):

- Process Description (full automation cycle + safety/reliability + environmental/regulatory basics)
- Functional Requirements (DI/DO counts and types, relay output needs, voltage/current compatibility, panel mounting, expansion potential)
- Comparison of PLC Models (at least 3 models/manufacturers; digital IO capacity, relay outputs, expandability, programming features, UI, reliability, cost; plus practical factors)
- Selection Justification (datasheet evidence; summary IO table; system block diagram)
- Integration and Expansion (panel layout/wiring concept + future expansion)
- Critical Reflection (trade-offs + standards/safety considerations relevant to selection)

---

# Criterion-by-Criterion Marking Guidance

## LO1.P1 – Achieved / Not Achieved
**LO1.P1** Investigate the key industrial application characteristics of a given industrial application.

### Assessor checks (what to look for)
Evidence should show the student has investigated the **application** (MedPack pill counting/packaging station), not just listed generic PLC facts.

The submission should include:
- A **clear process description** of the automation cycle (step-by-step), including:
  - operator starts the count
  - pill sensor triggers relay
  - actuator packages pills
  - buzzer sounds for errors or completion
  - emergency stop and reset logic
- Identified **safety or reliability requirements** relevant to the station (e.g., emergency stop behaviour, fault handling expectations).
- Identified **environmental factors** that impact PLC selection (e.g., industrial noise/EMI, panel mounting constraints, maintainability).
- Brief mention of **regulatory basics** in context (acceptable if kept general, but must be relevant to safety/reliability).
- A structured capture of requirements (e.g., a table or bullet list of key characteristics).

### Typical acceptable evidence items
- Process flowchart/state diagram and/or block diagram
- IO list draft (inputs/outputs identified)
- Short risk/constraint list (noise, safety, uptime, maintainability)

### Not Achieved indicators
- Mostly generic PLC discussion with no clear link to the MedPack station.
- Missing emergency stop/reset logic or incomplete process cycle.
- No application characteristics captured (no IO needs, constraints, reliability/safety notes).

---

## LO1.P2 – Achieved / Not Achieved
**LO1.P2** Compare the operational features and characteristics of PLCs from several manufacturers.

### Assessor checks (what to look for)
Evidence must show a comparison of **several manufacturers** (minimum **three** PLC models/manufacturers).

The submission should include:
- At least **3 PLC models/manufacturers** identified.
- A **comparison table/matrix** that includes (minimum expected set):
  - digital IO capacity
  - relay outputs (presence/count/type)
  - expandability
  - programming features
  - user interface
  - reliability (handled carefully, evidence-based if possible)
  - cost (with cited numbers from vendors where possible)
- Discussion of **practical factors**:
  - wiring
  - ease of installation
  - documentation
  - vendor support
  - training resources

### Typical acceptable evidence items
- Comparison table with datasheet citations/screenshots in appendix
- Short narrative comparing trade-offs between models

### Not Achieved indicators
- Only one or two manufacturers.
- Comparison is superficial (e.g., only price, or only IO count).
- No comparison structure (no table/matrix) and no evidence.

---

## LO1.M1 – Achieved / Not Achieved
**LO1.M1** Justify the choice of a specific PLC suitable for a given industrial application.

### Assessor checks (what to look for)
Evidence must move from “comparison” to a **defensible chosen PLC** and justify why it is suitable.

The submission should include:
- A **clear chosen PLC** (model + manufacturer stated plainly).
- A justification that links:
  - application requirements (from LO1.P1) → PLC features/specs (from LO1.P2) → suitability for the station
- Use of **datasheet evidence** (screenshots, extracts, links) to support key claims.
- A **summary IO table** for the proposed system.
- A **simple block diagram** of the proposed system layout.

### Typical acceptable evidence items
- Requirements-to-spec “compliance” table (requirement, spec evidence, meets/notes)
- Justification paragraphs referencing exact technical characteristics

### Not Achieved indicators
- “Chosen PLC” stated without evidence-based linkage to requirements.
- Claims not supported by datasheet extracts.
- Missing IO table and/or missing system block diagram.

---

## LO1.D1 – Achieved / Not Achieved
**LO1.D1** Evaluate and justify the selection of a specific PLC for an industrial application.

### Assessor checks (what to look for)
Evidence must show evaluation (balanced judgement), not only justification.

The submission should include:
- A critical evaluation that demonstrates:
  - trade-offs (e.g., cost vs features, support vs flexibility) using specific cited numbers from vendors where possible
  - limitations/risks of the chosen PLC and mitigation strategies
  - why alternatives were not selected (comparative reasoning)
- Depth and structure expected at distinction:
  - clear decision rationale (e.g., weighted decision matrix, scored table, or structured evaluation argument)
  - evidence-based reasoning linked to the application

### Typical acceptable evidence items
- Weighted scoring decision matrix (with explained weights)
- Risk list (risk, impact, mitigation) related to the chosen PLC and environment
- Paragraph explicitly comparing “Chosen PLC vs Candidate A/B/C” with reasons

### Not Achieved indicators
- Only positive justification; no trade-offs, no limitations.
- No evaluation of alternatives.
- No vendor cost evidence when cost is discussed.

---

# Suggested Evidence Quality Checklist (quick tick sheet)

Use this as a fast moderation checklist.

## LO1.P1 checklist
- Process cycle described end-to-end (includes E-stop + reset) ☐
- Application characteristics captured (IO + constraints + environment) ☐
- Safety/reliability requirements mentioned in context ☐

## LO1.P2 checklist
- 3+ PLC manufacturers/models compared ☐
- Comparison matrix includes IO, relay outputs, expandability, programming, UI, reliability, cost ☐
- Practical factors included (wiring/installation/docs/support/training) ☐

## LO1.M1 checklist
- A single chosen PLC clearly stated ☐
- Justification links requirements → datasheet specs → selection ☐
- Datasheet evidence included ☐
- Summary IO table included ☐
- Simple block diagram included ☐

## LO1.D1 checklist
- Trade-offs discussed (cost/features/support/flexibility) ☐
- Alternatives evaluated (why not chosen) ☐
- Limitations/risks + mitigation stated ☐
- Decision rationale structured (e.g., scoring matrix) ☐

---

# Common Issues to Watch For (Assessor Notes)

- Students may copy datasheet text without linking to application requirements; require explicit “because…” reasoning.
- Cost claims without citations: if cost is used in decision-making, expect a quoted value and supplier/source.
- Missing diagrams: the brief expects diagrams/IO tables; treat missing diagrams as weakened evidence for suitability.
- Confusion between “report describing PLCs” vs “report selecting PLC for this station”: selection must be scenario-driven.
