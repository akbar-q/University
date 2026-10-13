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
- Reopen the three exact model identities, Week 1 process/I/O baseline, and Week 3 compatibility audit; separate verified facts from unresolved requirements.
- Provisional vote: choose a candidate only after naming one cited MedPack requirement it meets and one evidence-backed weakness or unknown.
- Example challenge: a candidate with enough digital points may still be unsuitable if its documented input filter cannot capture the verified pill-sensor pulse.
- Debrief: a provisional preference is not the M1 justification; the final decision must survive evidence and alternative review.
**Image prompt:** Original engineering review scene with three unbranded PLC candidates around a pill-packaging station diagram, one provisional candidate highlighted but an open question still visible, no text, labels, numbers, or logos.

**2. From comparison to a defensible choice (5 min)**
- A specification list says what hardware offers; a selection argument explains which MedPack requirement it satisfies and the consequence of that match.
- Worked structure: requirement -> exact datasheet field/source -> pass/conditional/fail -> operational implication -> remaining condition.
- Example: “high-speed counter available” is incomplete until the exact input frequency/pulse limits are compared with the sensor’s documented signal and expected maximum rate.
- Expected answer: each key selection claim needs both source evidence and a because-therefore link to the station.
**Image prompt:** Original technical illustration of a pill sensor requirement connected by a clear evidence chain to a PLC manual field, a pass decision, and a packaging station outcome, no text, labels, numbers, or logos.

**3. Criteria ladder: P1/P2 -> M1 -> D1 (5 min)**
- P1 evidence investigates MedPack’s process, I/O, performance, environment, safety/reliability, and constraints; P2 compares operational features of at least three manufacturers’ PLCs.
- M1 moves from comparison to one clearly identified exact model/configuration and justifies its suitability with datasheet evidence, an I/O summary, and a system block diagram.
- D1 evaluates that selection with balanced trade-offs, alternatives, limitations, risks/mitigations, and a structured evidence-based rationale.
- Debrief: M1 is not a brand preference and D1 is not extra praise; each higher step adds a distinct kind of evidence while retaining the lower criteria.
**Image prompt:** Original ascending evidence-path illustration from a MedPack process map through a three-PLC comparison to one selected controller and a balanced risk/alternative review, no text, labels, numbers, or logos.

### Decision rules | 00:15-01:05

**4. Requirements traceability (12 min)**
- Give each MedPack need an ID and measurable condition, then link it to an exact candidate feature, official source/page, pass/conditional/fail status, and application consequence.
- Worked example: “count every pill event” -> verified sensor pulse limits -> candidate input/filter/counter fields -> manual citation -> acceptance test at the worst agreed event rate.
- Separate mandatory gates (safety architecture, electrical compatibility, required function) from preferences (extra spare points, familiar software) so a preference cannot hide a failure.
- Activity answer: an unverified pulse width makes the trace conditional/unknown; request the sensor datasheet or measure the signal before concluding compatibility.
**Image prompt:** Original traceability matrix concept with a pill sensor requirement connected through a PLC input feature and manual page to a test bench, using lines and blank cells without text, labels, numbers, or logos.

**5. Set up a weighted decision matrix (13 min)**
- First remove candidates that fail mandatory MedPack gates; only eligible candidates enter preference scoring.
- Agree criteria and weights before viewing final totals: for example, pulse handling, electrical fit, expansion, support, and lifecycle cost may matter differently to this station.
- Define a common score rubric with evidence thresholds (such as poor/adequate/strong) and cite the source behind each candidate score; avoid false precision from unsupported decimals.
- Debrief: explain every weight in terms of consequence, such as count integrity or safe integration; disclose who set the weights and any subjective judgement.
**Image prompt:** Original engineering decision-matrix illustration with mandatory gate symbols in front of a balanced set of criteria scales for a PLC choice, followed by three generic controller candidates, no text, labels, numbers, or logos.

**6. Scoring uncertainty and sensitivity (12 min)**
- Mark each matrix input as high/medium/low confidence and trace uncertainty to missing evidence, such as a supplier quote or confirmed pulse-rate requirement.
- Clearly hypothetical exercise: if two fictional candidates score nearly alike, vary one uncertain preference weight or cost assumption and check whether the winner changes; do not present toy scores as product facts.
- If the ranking flips, report the decision as sensitive and identify the information or stakeholder decision needed before selection.
- Expected answer: a stable ranking increases confidence only within the chosen criteria; it does not compensate for an unverified mandatory gate.
**Image prompt:** Original technical sensitivity-analysis illustration showing two generic PLC candidates on a balance that shifts slightly when a criterion weight changes, with a MedPack station in the background and no text, labels, numbers, or logos.

**7. Use lifecycle cost and support evidence (13 min)**
- Build total ownership scope from exact CPU and I/O modules, interfaces, software/licensing, network equipment, engineering/commissioning, training, spares, and expected maintenance.
- For any price, record supplier/source, quote date, currency, exact configuration, quantity, included/excluded items, tax/shipping, and validity; no undated CPU-only figure proves installed cost.
- Assess reliability cautiously through documented operating conditions, diagnostics, lifecycle status, service/spares, and support evidence; state what each source cannot establish.
- MedPack debrief: a lower purchase price may be outweighed by unsupported pulse capture, extra interface hardware, training, or downtime exposure; quantify only with sourced data.
**Image prompt:** Original engineering lifecycle-cost illustration showing a generic PLC, I/O modules, software workstation, training bench, spare parts, and service visit arranged around a packaging station, no text, labels, numbers, or logos.

### Candidate evaluation | 01:05-01:40

**8. Compare the chosen PLC with alternatives (10 min)**
- Compare the selected exact CPU/configuration with at least one runner-up on digital I/O, relay/output type, expansion, timing/counters, memory/retention, communications, programming/UI, support, and sourced cost.
- Tie each difference to the MedPack baseline: pulse capture affects count integrity; output type affects actuator interface; expansion affects defined future integration.
- Explain both the alternative’s strongest advantage and the reason it was not selected, citing exact part numbers and current source pages.
- Misconception: an alternative is not “worse” overall because it loses one feature; it may be preferable if a changed requirement gives that strength higher importance.
**Image prompt:** Original side-by-side engineering comparison of a selected generic PLC and a runner-up connected to the same pill sensor and actuator, with distinct module layouts and a neutral balance, no text, labels, numbers, or logos.

**9. Risks, limitations, and mitigations (15 min)**
- Record risk, cause, consequence, evidence/likelihood, mitigation, owner, and residual concern; distinguish confirmed weakness from an uncertainty still awaiting evidence.
- MedPack examples to test: sensor pulse exceeds ordinary input capability, actuator inrush exceeds an output limit, product reaches end of support, or a partial count is lost at power failure.
- Include at least one real limitation of the selected model, then propose a proportionate mitigation such as a verified high-speed module, external driver, spare strategy, or documented restart procedure.
- Debrief: a mitigation reduces risk but may add cost/complexity; retain residual risk and state when redesign or re-selection is required.
**Image prompt:** Original risk-review illustration of a pill-packaging cell with visual hazard pathways from sensor pulse, actuator output, support lifecycle, and power loss to mitigations, using symbols only and no text, labels, numbers, or logos.

**10. Standards and safety boundaries (10 min)**
- Relevant topics may include machinery risk assessment (ISO 12100), machine electrical equipment (IEC 60204-1), and safety-related control systems (ISO 13849-1 or IEC 62061); verify current edition, jurisdiction, scope, and site/assessor requirements.
- Determine required safety performance from the machine risk assessment; a component certificate or safety PLC datasheet does not by itself establish that the complete MedPack machine complies.
- Keep E-stop/safety-energy control on the validated safety path; an ordinary PLC may display or log status but must not be the sole safety-control route.
- Pharmaceutical quality-record or validation obligations apply only if the actual site/process requires them; do not infer cleanroom, GxP, or formal validation status from the scenario name.
**Image prompt:** Original accurate machine-safety architecture diagram showing a guarded packaging actuator controlled through a distinct safety-rated path and an ordinary PLC monitoring status, with standards represented by blank reference documents and no text, labels, numbers, or logos.

### Break | 01:40-01:50

### Build selection evidence | 01:50-02:35

**11. Write the M1 justification (10 min)**
- Use the reasoning sequence: “MedPack requires [measurable need]; exact model [part number/configuration] provides [documented field] (source/page); therefore it meets [condition] because [operational consequence].”
- Worked generic example: if the verified sensor pulse falls within the candidate counter’s documented limits, cite both source pages and explain how this supports correct pill-count capture.
- State the module arrangement and any conditions, such as an external actuator driver or a safety-system interface, rather than implying the CPU alone completes the system.
- Debrief: replace adjectives like “powerful” or “reliable” with a requirement, sourced characteristic, and suitability explanation.
**Image prompt:** Original report-writing illustration with a student linking a pill sensor requirement, an exact generic PLC module, a highlighted manual table, and a packaging outcome using arrows, no text, labels, numbers, or logos.

**12. Create the I/O summary table (15 min)**
- Use columns for address/tag, device, DI/DO/AI/AO, signal type/range, normal state, selected terminal/module, load/interface, source, and notes/assumptions.
- Populate Start, Reset, pill sensor, actuator command, buzzer, and safety-system status only as supported by the brief and confirmed design; add optional indicators/feedback only when evidenced.
- Check total point count, signal type, voltage/current, pulse limits, output grouping, module power, and terminal assignment against actual manuals and device datasheets.
- Mark safety-related devices and show their validated safety path separately; a standard PLC status input is monitoring, not the safety function.
**Image prompt:** Original engineering drawing of a MedPack I/O schedule beside PLC terminal blocks, pill sensor, Start/Reset controls, actuator interface, buzzer, and separate safety circuit, with blank table cells and no text, labels, numbers, or logos.

**13. Draw the system block diagram (10 min)**
- Draw field devices -> selected CPU and configured local/remote I/O -> load interface -> actuator/buzzer; include sensor signal and any confirmed feedback path.
- Show control power and load power separately; identify communications only where a specified HMI/SCADA or upstream connection exists, and mark optional future expansion distinctly.
- Draw the safety system boundary and energy-isolation path independently from standard PLC logic, with any monitoring connection clearly separated.
- Review against the I/O table: every required tag and interface appears, signal direction is clear, and no unsupported device or network is shown as installed fact.
**Image prompt:** Original clean technical block diagram for a pill-counting packaging station showing sensor, PLC CPU and I/O, power supplies, actuator driver, buzzer, optional HMI as a dashed future item, and a separate safety boundary, no text, labels, numbers, or logos.

**14. Draft the D1 evaluation paragraph (10 min)**
- Structure the evaluation as decision -> strongest requirement-linked evidence -> trade-off -> alternative and why not selected -> limitation/risk -> mitigation -> condition that would change the decision.
- Example logic: a documented counter feature supports the pill sensor; extra interface hardware may increase installed cost; the runner-up offers easier expansion; confirm sensor rate before final approval.
- Balance evidence: distinguish sourced product facts, student judgement, hypothetical analysis, and unresolved site/brief questions.
- Expected D1 conclusion: recommend a specific MedPack configuration conditionally where needed, explain why it is preferable now, and state what new evidence would trigger reconsideration.
**Image prompt:** Original balanced technical evaluation illustration with a selected PLC on a scale against a runner-up, supported by a manual, a risk symbol, and a mitigation interface near the pill-packaging station, no text, labels, numbers, or logos.

### Defend and stress-test | 02:35-03:15

**15. Selection panel simulation (20 min)**
- Design engineer gives a concise recommendation with exact part number, one requirement-to-datasheet chain, I/O summary, and one limitation; peers take maintenance, production/quality, and assessor roles.
- Maintenance asks about terminal access, manuals, software, spares, and recovery; production asks about target-count integrity and downtime; assessor asks for source pages and criterion evidence.
- Panel challenge: explain critical fault/safety response, expansion configuration, full installed-cost basis, and why the runner-up is less suitable for this defined application.
- Debrief: record each unsupported answer as a report action with an owner and evidence source; a confident answer without evidence remains an open issue.
**Image prompt:** Original engineering selection-panel scene with a student presenting a generic PLC configuration to maintenance, production, and assessor colleagues beside a pill-packaging station, no visible text, labels, numbers, or logos.

**16. Red-team review (20 min)**
- Red team selects one changed condition: higher verified pill event rate, extra confirmed I/O, different supply, product lifecycle withdrawal, or a documented cost ceiling.
- Presenter traces the change through affected requirement, exact candidate/module limit, decision status, and likely consequence; do not defend a model that now fails a mandatory gate.
- Example answer: if new pulse evidence exceeds the documented input capability, propose a verified compatible high-speed input or re-open the shortlist and update cost/risk evidence.
- Debrief: state whether the choice survives, needs a defined interface/configuration change, or triggers redesign, and record the threshold/source for that decision.
**Image prompt:** Original red-team engineering review illustration of a pill-counting station under changed conditions represented by faster sensor pulses, added I/O modules, and a lifecycle warning symbol, with a team evaluating redesign paths, no text, labels, numbers, or logos.

### Criteria audit | 03:15-03:30

**17. LO1 submission evidence audit (7 min)**
- P1 audit: process description from operator start through pill sensing, actuator packaging, buzzer completion/error, E-stop/reset, plus functional requirements and safety/reliability/environment constraints.
- P2 audit: at least three models/manufacturers; matrix includes digital I/O, relay outputs, expansion, programming, UI, evidence-based reliability, cost, and wiring/installation/documentation/support/training factors.
- M1/D1 audit: exact chosen model with datasheet evidence, summary I/O table, system block diagram, integration/expansion discussion, alternatives, trade-offs, genuine limitations, risks/mitigations, and structured rationale.
- Expected action: identify one missing item, source or produce it, and check Harvard references and dated supplier evidence before report submission.
**Image prompt:** Original report-evidence audit scene with a process flow, three-controller matrix, selected PLC manual, I/O table, block diagram, and risk worksheet arranged around a packaging station, no readable text, labels, numbers, or logos.

**18. Exit ticket: final recommendation (8 min)**
- State manufacturer and exact CPU/module configuration; give two requirement-linked reasons with source/page rather than unsupported performance adjectives.
- Name one meaningful trade-off and one genuine risk with mitigation and residual concern, such as extra interface hardware or uncertain pulse margin.
- State one fact that could change the recommendation, identify how it will be verified, and explain the condition that would trigger a revised shortlist.
- Model response structure: “Select [exact model/configuration] for [verified needs]; evidence [sources]; trade-off [cost/complexity]; risk/mitigation [specific]; revisit if [measurable unknown is resolved differently].”
**Image prompt:** Original final recommendation scene showing a completed generic PLC selection evidence pack beside a MedPack pill-packaging station, with one selected controller and a documented alternative nearby, no text, labels, numbers, or logos.

## Evidence and criterion map

| Criterion | Session evidence |
|---|---|
| LO1.P1 | Reused and checked application requirements, process flow, safety/environment assumptions |
| LO1.P2 | Three-manufacturer comparison with current datasheet and supplier evidence |
| LO1.M1 | Explicit model selection, traceability, I/O summary, and system block diagram |
| LO1.D1 | Decision matrix or structured evaluation, alternatives, limitations, risks, mitigations, and sensitivity check |

## Between-session task

Assemble the LO1 report evidence pack: process description, functional requirements, comparison matrix, selected PLC evidence, I/O table, system diagram, integration/expansion discussion, references, and critical reflection.