# Week 8 Presentation Outline - Analyse and Present the Circuit Design
## LO4.M5 and D4: graphical evaluation and specialist communication

**Session length:** 3 hours 45 minutes including a 10-minute break (225 minutes).
**Criteria:** LO4.M5, LO4.D4; consolidates P6-P8.
**Main outcome:** students explain differences among equations, simulation and bench results using data and uncertainty, then present design variations to a specialist audience.

## Run of Show

| Time | Slides | Activity |
| --- | --- | --- |
| 00:00-00:10 | 1-2 | Outcomes and evidence retrieval |
| 00:10-00:55 | 3-6 | Comparison, uncertainty, graphing and discrepancy analysis |
| 00:55-01:20 | 7-8 | Worked comparison and presentation structure |
| 01:20-01:30 | - | Break |
| 01:30-02:25 | 10-12 | Build analysis figures and evaluation narrative |
| 02:25-03:10 | 13-14 | Specialist presentations and questions |
| 03:10-03:35 | 15 | Final evidence clinic and peer feedback |
| 03:35-03:45 | 16 | Submission check and reflection |

---

## Slide 1 - Week 8: Make the Evidence Tell the Engineering Story
**Time:** 00:00-00:05

**On-slide:**
- Compare design equations, simulation and bench measurements
- Explain discrepancies, do not hide them
- Show how design changes and tolerances vary circuit function
- Present a defensible recommendation to a specialist audience

**Speaker notes:** Frame the week as engineering judgement rather than decorating slides. The core narrative is requirement -> design -> predicted response -> simulated response -> measured response -> explanation -> decision.

## Slide 2 - Retrieve the Evidence Chain
**Time:** 00:05-00:10

**On-slide:**
- Requirements and acceptance limits
- Calculation sheet and component datasheets
- Versioned ECAD baseline, variants and tolerance runs
- Bench test plan, raw data and as-built circuit

**Speaker notes:** Students place files in order and identify missing links. A number without test condition or source is not strong evidence. A schematic must match the simulated/build revision or the difference must be documented.

## Slide 3 - Compare Like with Like
**Time:** 00:10-00:20

**On-slide:**
- Match temperature/resistance input, supply, reference, load and measurement node
- State whether each value is calculated, simulated or measured
- Use actual resistor/reference values when available
- Align units, temperature points and update/settling conditions

**Speaker notes:** Explain why comparing a nominal 3.3 V simulation with a measured 3.18 V board supply can create apparent error. Students should either normalize with a justified model or report the mismatch explicitly.

## Slide 4 - Error, Uncertainty and Useful Precision
**Time:** 00:20-00:32

**On-slide:**
- Absolute error = measured - predicted
- Relative/percentage error needs a meaningful nonzero reference
- Uncertainty includes meter, reference, sensor and repeatability contributions
- Report precision consistent with uncertainty and instrument capability

**Speaker notes:** Work a simple comparison from predicted 1.250 V and measured 1.231 V. Calculate absolute and percentage difference. Clarify that percentage error is unstable near zero. Avoid calling the entire difference “ADC error”; locate potential sources and state evidence.

## Slide 5 - Explain Discrepancies Systematically
**Time:** 00:32-00:44

**On-slide:**
- Component tolerance / thermistor curve tolerance
- Reference/supply offset and ADC nonlinearity/noise
- Source impedance, loading, filter and wiring parasitics
- Model assumptions, solver settings and instrument limitations

**Speaker notes:** Teach the sequence: observed discrepancy -> plausible causes -> discriminating check -> result -> supported explanation. If no measurement distinguishes competing causes, report uncertainty rather than overstate certainty.

## Slide 6 - Graphs That Support a Decision
**Time:** 00:44-00:55

**On-slide:**
- Temperature vs measured voltage or ADC code
- Predicted, simulated and bench series with clear legend
- Error/residual plot and component-tolerance band
- Units, test conditions, sample count and uncertainty labels

**Speaker notes:** Discuss axes and scales. An error plot often reveals trends hidden by overlapping transfer curves. Use meaningful markers and avoid 3D effects. Distinguish error bars based on measured repeatability from component tolerance bands based on model cases.

## Slide 7 - Worked Correlation Example
**Time:** 00:55-01:07

**On-slide:**
- Five thermistor-equivalent resistance points
- Equation predicts divider voltage and code
- Simulation gives nominal and tolerance range
- Bench gives repeated voltage/code readings

**Speaker notes:** Build a small table on screen. At each point calculate predicted Vnode, simulated Vnode, measured Vnode and raw code. Explain that comparing code to voltage helps isolate ADC mapping from analogue front-end error.

## Slide 8 - Specialist Presentation: A 6-Minute Technical Narrative
**Time:** 01:07-01:20

**On-slide:**
- Requirement and application
- Circuit architecture and key equations
- Simulation baseline and controlled variation
- Bench results, discrepancy explanation and recommendation

**Speaker notes:** Even if the formal presentation duration differs, teach a concise technical narrative. Every figure must be legible and referenced in speech. Audience is technically capable: define only necessary terms and spend time on design judgement.

## Slide 9 - Break
**Time:** 01:20-01:30

**On-slide:** Save figures and presentation draft before the break.

## Slide 10 - Workshop: Build the Comparison Dataset
**Time:** 01:30-01:40

**On-slide:**
- Select matched operating points across the temperature range
- Record equation, simulation nominal/range and bench repeats
- Calculate code and voltage errors with declared sign convention
- Preserve raw data separately from processed figures

**Speaker notes:** Students use a shared template but individual data. In groups, peers can check arithmetic and graphing, but each student identifies their own component values, run IDs and bench conditions.

## Slide 11 - Produce the M5 Graphs
**Time:** 01:40-02:05

**On-slide:**
- Figure 1: temperature -> ADC input voltage / raw code
- Figure 2: absolute or percentage residual across operating range
- Show simulation tolerance envelope if available
- Caption includes supply, reference, component values and test conditions

**Activity steps:**
1. Plot calculated, simulated and bench series on shared axes.
2. Add a residual plot or error bars.
3. Label uncertainty sources and repeat count.
4. Check that plots do not join unrelated points misleadingly.
5. Write one evidence-based conclusion per figure.

## Slide 12 - Write the Critical Analysis
**Time:** 02:05-02:25

**On-slide:**
- What matched the prediction and within what uncertainty?
- Where did response differ, and how large was the discrepancy?
- Which cause is supported by evidence; which remain possible?
- What design or test change is justified next?

**Speaker notes:** Model an analytical paragraph: “The measured node was lower by... This is consistent with... A check using... showed... Therefore... The remaining uncertainty is...” Avoid ungrounded statements such as “breadboard noise caused it” without a test.

## Slide 13 - D4: Show Circuit Function Changing
**Time:** 02:25-02:50

**On-slide:**
- Baseline vs design change: Rfixed, filter, buffer or reference
- Tolerance effect: thermistor curve, resistor or reference limits
- Show resulting transfer curve, threshold or settling changes
- Explain whether requirement still passes and why the trade-off is acceptable

**Speaker notes:** Require at least one direct visual comparison. A changed component value must be named and its effect tied to a metric. Include a tolerance case; distinguish component-tolerance variation from an intentional redesign.

## Slide 14 - Specialist Presentations and Questions
**Time:** 02:50-03:10

**On-slide:**
- 4-6 minute design briefing per student or selected representatives
- Questions: ADC limits, accuracy budget, tolerance, safety and next test
- Peer feedback records one strength and one technical question

**Speaker notes:** Adjust presenter count to cohort size: parallel small groups can deliver while tutor samples. Require every student to rehearse their own evidence and answer questions on individual design decisions. Give feedback on technical evidence, not visual polish alone.

## Slide 15 - Final Evidence Clinic
**Time:** 03:10-03:35

**On-slide:**
- P6: written function, specification, schematic and selection
- P7: working simulation with chosen components
- P8: constructed circuit and justified, repeatable bench tests
- M5: graphical equation/simulation/bench analysis and explained discrepancies
- D4: specialist presentation with design/tolerance variation

**Activity:** Students audit the evidence pack against all five criteria. Partner checks one result back to source data and one simulation variant back to the changed parameter. Tutor resolves missing evidence and records outstanding submissions.

## Slide 16 - Submission Check and Reflection
**Time:** 03:35-03:45

**On-slide:**
- Include project files, schematics, calculations, tests and raw data
- Use revision IDs and label measured vs simulated evidence
- Reflect: which assumption most affected the result?
- State one improvement that has a measurable verification plan

**Independent study:** Submit the indexed design/evidence pack in the centre's required format. Retain editable ECAD and raw data files. Complete a brief individual reflection on design limits, test quality and next engineering improvement.

**Criteria mapping:** LO4.M5 and LO4.D4 consolidated; P6-P8 evidence checked.