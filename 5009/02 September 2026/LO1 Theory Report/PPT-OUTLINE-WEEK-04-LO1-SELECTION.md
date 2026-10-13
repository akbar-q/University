# Week 4 PPT Outline: Selecting and Evaluating a PLC

**Unit/LO:** 5009, LO1  
**Focus:** Justify and evaluate a specific PLC for the MedPack application  
**Criteria:** LO1.P1, LO1.P2, LO1.M1, LO1.D1  
**Duration:** 3 hours 30 minutes (210 minutes, including a 10-minute break)

## Session outcomes

Students will use their application baseline and manufacturer comparison to select one exact PLC model, support the selection with datasheet evidence, create an I/O summary and block diagram, and evaluate trade-offs, alternatives, risks, and standards considerations.

## Resources

Weeks 1-3 requirements and matrices; current vendor datasheets/manuals; dated supplier price evidence; decision-matrix worksheet; risk table; I/O schedule; block-diagram template; and LO1 marking scheme.

## Run sheet

| Time | Slides | Segment | Duration |
|---|---:|---|---:|
| 00:00-00:15 | 1-3 | Retrieval and selection challenge | 15 min |
| 00:15-01:05 | 4-7 | Decision rules and comparison quality | 50 min |
| 01:05-01:40 | 8-10 | Evaluate candidates and costs | 35 min |
| 01:40-01:50 | - | Break | 10 min |
| 01:50-02:35 | 11-14 | Build selection evidence | 45 min |
| 02:35-03:15 | 15-16 | Defend and stress-test the decision | 40 min |
| 03:15-03:30 | 17-18 | Criteria audit and exit | 15 min |
| **Total** | **18 slides** |  | **210 min** |

## Slide-by-slide outline

### Retrieval | 00:00-00:15

**1. Three candidates, one station (5 min)**
- Revisit the three exact candidate PLCs and the Week 1 application constraints.
- Ask learners to nominate a provisional winner and identify the strongest reason against it.

**2. From comparison to a defensible choice (5 min)**
- Contrast listing specifications with linking requirements to evidence and operational consequences.

**3. Criteria ladder: P1/P2 -> M1 -> D1 (5 min)**
- P1/P2 remain necessary; M1 adds an explicit choice; D1 adds balanced evaluation and valid justification.

### Decision rules | 00:15-01:05

**4. Requirements traceability (12 min)**
- Demonstrate a traceability chain: requirement ID -> measurable need -> candidate feature -> cited source -> pass/conditional/fail decision.
- Separate mandatory gates from scored preferences.

**5. Set up a weighted decision matrix (13 min)**
- Choose criteria and weights before scoring; explain why weights reflect MedPack consequences.
- Exclude any candidate that fails a mandatory safety/electrical/functional requirement.
- Keep scoring definitions consistent, evidence-based, and visible.

**6. Scoring uncertainty and sensitivity (12 min)**
- Label confidence and unknowns; avoid false precision in a subjective score.
- Recalculate after changing one uncertain weight or requirement.
- Ask whether the same candidate remains preferred and what that reveals.

**7. Use lifecycle cost and support evidence (13 min)**
- Compare CPU, I/O modules, software/licensing, network equipment, engineering, training, spares, and expected maintenance.
- Record dated supplier quote, currency, included hardware, shipping/tax assumptions, and source.
- Treat reliability claims carefully; use evidence and explicitly state limitations.

### Candidate evaluation | 01:05-01:40

**8. Compare the chosen PLC with alternatives (10 min)**
- Create a direct chosen-versus-runner-up table for I/O, output type, expansion, speed, memory, communications, software, support, and cost.
- Explain why an alternative's strengths do or do not outweigh its disadvantages for this station.

**9. Risks, limitations, and mitigations (15 min)**
- Populate risk, consequence, evidence/likelihood, mitigation, owner, and residual concern.
- Examples to test against evidence: output capacity, pulse handling, support lifecycle, vendor dependence, network requirements, and power-loss recovery.
- Include at least one genuine limitation of the chosen PLC.

**10. Standards and safety boundaries (10 min)**
- Identify standards/regulatory topics relevant to machinery risk, electrical design, functional safety, and pharmaceutical quality records only where applicable.
- Verify edition and applicability with assessor/site requirements; do not claim certification from a PLC datasheet as proof of machine compliance.
- Explain the separate safety architecture and the ordinary PLC's monitoring role.

### Break | 01:40-01:50

### Build selection evidence | 01:50-02:35

**11. Write the M1 justification (10 min)**
- Use: "The application requires ...; the selected model provides ... (source/page); therefore ...; this is suitable because ... ."
- Include exact part number, module configuration, evidence, and any condition/assumption.

**12. Create the I/O summary table (15 min)**
- Fields: address/tag, device, DI/DO/AI/AO, signal type, normal state/range, selected PLC terminal/module, load/interface, and notes.
- Check point count and electrical compatibility against actual manuals.
- Mark safety-related signals and avoid implying standard PLC logic provides the safety function.

**13. Draw the system block diagram (10 min)**
- Include PLC CPU, local/remote I/O if used, power, sensor, actuator/driver, buzzer, HMI/SCADA interface, and safety-system boundary.
- Label signal type and communications path; show future expansion separately.

**14. Draft the D1 evaluation paragraph (10 min)**
- Structure: decision -> strongest evidence -> trade-off -> alternative rejected -> limitation/risk -> mitigation -> condition that could change the decision.
- Require a scenario-specific conclusion, not a generic endorsement.

### Defend and stress-test | 02:35-03:15

**15. Selection panel simulation (20 min)**
- One student presents as design engineer; peers play maintenance, production, and assessor roles.
- Questions: why this PLC, what happens on the critical fault, how is expansion handled, what is the true installed cost, and why not the runner-up?
- Record answers that need better evidence.

**16. Red-team review (20 min)**
- Another group tries to invalidate the selection using a plausible changed requirement (higher pulse rate, extra I/O, different supply, discontinued part, or cost limit).
- Presenter explains whether the selection survives or what condition would trigger redesign.

### Criteria audit | 03:15-03:30

**17. LO1 submission evidence audit (7 min)**
- P1: process and requirements; P2: three-model comparison; M1: chosen PLC, datasheets, I/O table, diagram; D1: balanced trade-offs, alternatives, risks, mitigation, structured rationale.
- Identify one missing item before report submission.

**18. Exit ticket: final recommendation (8 min)**
- State exact model, two evidence-backed reasons, one trade-off, one risk/mitigation, and one fact that could change the recommendation.

## Evidence and criterion map

| Criterion | Session evidence |
|---|---|
| LO1.P1 | Reused and checked application requirements, process flow, safety/environment assumptions |
| LO1.P2 | Three-manufacturer comparison with current datasheet and supplier evidence |
| LO1.M1 | Explicit model selection, traceability, I/O summary, and system block diagram |
| LO1.D1 | Decision matrix or structured evaluation, alternatives, limitations, risks, mitigations, and sensitivity check |

## Between-session task

Assemble the LO1 report evidence pack: process description, functional requirements, comparison matrix, selected PLC evidence, I/O table, system diagram, integration/expansion discussion, references, and critical reflection.