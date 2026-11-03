# Week 6 Presentation Outline - Simulate the ADC Temperature Monitor
## LO4.P7 and D4: working simulation, design changes and component tolerances

**Session length:** 3 hours 45 minutes including a 10-minute break (225 minutes).
**Criteria:** LO4.P7, LO4.D4; supports M5.
**Main outcome:** each student simulates the selected thermistor/ADC interface, verifies expected operation and shows how design changes and tolerances alter circuit function.

## Run of Show

| Time | Slides | Activity |
| --- | --- | --- |
| 00:00-00:10 | 1-2 | Retrieval, setup and criteria |
| 00:10-00:55 | 3-6 | ECAD workflow, analyses and tolerance concepts |
| 00:55-01:20 | 7-8 | Worked model and test-case design |
| 01:20-01:30 | - | Break |
| 01:30-02:25 | 10-12 | Build and run nominal/variant simulations |
| 02:25-03:10 | 13-14 | Analyse plots and design changes |
| 03:10-03:35 | 15 | P7/D4 evidence clinic |
| 03:35-03:45 | 16 | Exit ticket and independent study |

---

## Slide 1 - Week 6: Make the Circuit Behave in ECAD
**Time:** 00:00-00:05

**On-slide:**
- Build on the Week 5 design: start from its reviewed schematic and requirements
- P7: show the chosen circuit works in simulation
- D4: show how a design change or component tolerance changes its function
- Save the model, settings and results so another person can check them

**Speaker notes:** Translate the criteria: P7 is evidence of working simulated behaviour; D4 is a clear comparison showing the effect of a controlled design or tolerance change. Explain that a schematic alone is not a simulation result.

## Slide 2 - Preflight: Does the Model Match the Design?
**Time:** 00:05-00:10

**On-slide:**
- Correct component models and values?
- Correct supply, reference, thermistor curve and load?
- Correct ADC input range and signal direction?
- Named baseline revision and acceptance checks?

**Speaker notes:** Students compare simulation and design packs before opening the simulator. Start with one nominal baseline; only after it behaves as expected should they create variants. If the actual MCU model is unavailable, simulate the analogue front end and use a documented ADC transfer model/table in a spreadsheet or secondary model. State the limitation rather than inventing MCU behaviour.

## Slide 3 - What ECAD Can and Cannot Prove
**Time:** 00:10-00:20

**On-slide:**
- DC operating point: the circuit's steady voltages and currents
- Transient: how signals change over time
- AC/noise: frequency response or noise, when models support it
- Simulation is conditional on models, solver and assumptions

**Speaker notes:** Introduce one analysis type at a time and connect each to a question it can answer. Describe model fidelity in layers: ideal components, generic SPICE models, manufacturer models, then parasitics and instruments. Simulation cannot prove physical thermistor calibration, breadboard noise or firmware correctness without additional evidence.

**Quick check:** Give students three questions (steady voltage, step response, filter cutoff) and ask them to match each to DC, transient or AC analysis.

## Slide 4 - Create a Thermistor Model
**Time:** 00:20-00:32

**On-slide:**
- Use an NTC model or substitute resistance values representing temperatures
- Keep the sensor model tied to its datasheet
- Sweep temperature/resistance over application and warning range
- Plot sensor voltage and interpret ADC code separately

**Speaker notes:** If the tool cannot model the beta equation directly, use a stepped resistor or parameter sweep from a verified R-T table. Show how divider orientation determines voltage direction. Never imply that stepping resistance is a thermal simulation.

## Slide 5 - Simulation Analyses and Measurements
**Time:** 00:32-00:44

**On-slide:**
- DC sweep: Vnode/code proxy vs temperature/resistance
- Transient: step response through filter/buffer
- AC: cutoff and attenuation if filter is present
- Measurements: monotonicity, span, settling, ripple/noise proxy, margins

**Speaker notes:** Model the test plan as questions: Does the ADC node stay in range? Is the relationship monotonic? Does it settle before the required update? How does the filter attenuate interference? Distinguish actual noise analysis from an AC response or deterministic ripple.

## Slide 6 - Component Tolerance and Sensitivity
**Time:** 00:44-00:55

**On-slide:**
- Sweep fixed-resistor tolerance and thermistor tolerance separately
- Check reference/supply variation where relevant
- Use Monte Carlo only with stated distributions and sample count
- Low/nominal/high cases are acceptable when Monte Carlo is unavailable

**Speaker notes:** Demonstrate one-at-a-time sensitivity first, then combined corners. Tolerance distributions should match the part specification; worst-case corners do not necessarily represent likely yield. Identify which component has the largest effect on threshold temperature or ADC span.

## Slide 7 - Worked Simulation Plan
**Time:** 00:55-01:07

**On-slide:**
- Baseline: selected thermistor, Rfixed, filter and ADC range
- Design variant: alternate Rfixed or filter cutoff
- Tolerance case: selected resistor +/- tolerance and sensor curve limits
- Same temperature sweep, supply and measurement points across runs

**Speaker notes:** Walk through a controlled A/B comparison. If changing Rfixed and filter simultaneously, students cannot attribute the effect. Make a run ID convention: BASE, RFIX_LOW, RFIX_HIGH, RC_FAST, TOL_MIN, TOL_MAX.

## Slide 8 - Acceptance and Plot Checklist
**Time:** 01:07-01:20

**On-slide:**
- ADC input remains inside recommended limits
- Response is monotonic and has sufficient useful span
- Warning threshold maps to expected ADC code/voltage
- Filter settling/noise trade-off is quantified

**Speaker notes:** Ask students to define the pass boundary before running. A warning threshold can be checked from expected voltage/code; sensor uncertainty may make a temperature threshold band more honest than a single perfect value.

## Slide 9 - Break
**Time:** 01:20-01:30

**On-slide:** Save project and run matrix before break.

## Slide 10 - Build the Nominal Simulation
**Time:** 01:30-01:40

**On-slide:**
- Enter reviewed schematic and chosen component values
- Set simulation source, solver, sweep and load
- Label Vthermistor, VADC and indicator/driver nodes
- Save baseline and capture a first valid run

**Speaker notes:** Demonstrate tool-specific steps on the installed ECAD package. Remind students to use meaningful names and save project files in their personal evidence folder. Tutor approves any circuit that may exceed ADC or supply limits before simulation.

## Slide 11 - Run the Baseline and Verify P7
**Time:** 01:40-02:05

**On-slide:**
- Sweep thermistor resistance/temperature through the defined range
- Capture VADC and calculate representative raw code
- Run transient step for filter/buffer response
- Compare results to design equations and acceptance criteria

**Activity steps:**
1. Run DC sweep across five or more operating points.
2. Check monotonicity and input headroom.
3. Run a step response and measure settling to a stated band.
4. Record the observed values and pass/fail status.
5. Export the plot with axes, units, run ID and conditions.

## Slide 12 - Run a Design Change and Tolerance Study
**Time:** 02:05-02:25

**On-slide:**
- Change one design parameter: Rfixed, filter corner or buffer choice
- Sweep one or more actual component tolerances
- Compare threshold, sensitivity, settling, noise and headroom
- State the trade-off and whether requirements remain satisfied

**Speaker notes / activity:** Students select a change likely to matter. A resistor change may improve span in one region but worsen another; a lower filter cutoff may reduce high-frequency interference while slowing response. Require baseline and variant overlays.

## Slide 13 - Read the Plots: Function Variation
**Time:** 02:25-02:50

**On-slide:**
- Transfer curve: slope/sensitivity, monotonicity and saturation margin
- Step response: overshoot, settling time and threshold delay
- Tolerance band: variation around nominal behaviour
- Explain what changed and why, supported by model and equation

**Speaker notes:** Groups annotate plots with application range, warning point and ADC limits. Ask them to distinguish signal conditioning change from ADC quantisation. Do not overclaim accuracy from a smooth simulated transfer curve.

## Slide 14 - Design Judgement: Keep, Change or Calibrate?
**Time:** 02:50-03:10

**On-slide:**
- Is the nominal design robust across component limits?
- Would calibration address systematic variation?
- Does filtering compromise response time?
- What is the highest-value next experiment on the bench?

**Speaker notes:** Students write a short decision statement: design change, calibration, component grade or accepted limitation. Include evidence and residual risk. Connect the answer to a planned bench test for Week 7.

## Slide 15 - Evidence Clinic: P7 and D4
**Time:** 03:10-03:35

**On-slide:**
- Working nominal simulation with selected components?
- At least one clear design change and tolerance case?
- Same conditions across comparisons?
- Labelled figures, run settings, explanation and limitations?

**Activity:** Peer review the saved project and one overlay figure. Reviewer should be able to identify baseline, variant, altered parameter, impact on function and pass/fail against a requirement.

## Slide 16 - Exit Ticket and Independent Study
**Time:** 03:35-03:45

**On-slide:**
- Show one measured simulation result and its acceptance criterion
- State which component variation matters most
- State the physical test that will check the model next week

**Independent study:** Finalize P7 simulation evidence and D4 variation plots. Bring the actual components/board documentation and a safe bench test plan. Record any model limitations to check physically.

**Criteria mapping:** LO4.P7 evidence produced; LO4.D4 variation evidence initiated.