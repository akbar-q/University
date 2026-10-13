# Week 4 Presentation Outline - DAC Simulation Study
## LO3.D3: evaluate resolution, conversion time, accuracy and noise

**Session length:** 3 hours 45 minutes including a 10-minute break (225 minutes).
**Criteria:** LO3.D3; consolidates P5/M4.
**Main outcome:** students produce a controlled, reproducible set of DAC circuit simulations and a critical evidence-based evaluation.

## Run of Show

| Time | Slides | Activity |
| --- | --- | --- |
| 00:00-00:10 | 1-2 | Purpose, retrieval and outcomes |
| 00:10-00:55 | 3-6 | Simulation model, metrics and variables |
| 00:55-01:20 | 7-8 | Worked simulation design and error budgeting |
| 01:20-01:30 | - | Break |
| 01:30-02:25 | 10-12 | Build and run controlled DAC simulations |
| 02:25-03:10 | 13-14 | Analyse plots and compare variants |
| 03:10-03:35 | 15 | D3 evidence clinic |
| 03:35-03:45 | 16 | Exit ticket and independent study |

---

## Slide 1 - Week 4: Simulation Must Answer a Question
**Time:** 00:00-00:05

**On-slide:**
- D3: create a range of DAC circuit simulations
- Evaluate how resolution and conversion time affect accuracy and noise
- Controlled comparisons and honest model limits are required

**Speaker notes:** Distinguish “I ran a simulator” from “I designed a test that supports a conclusion.” Students should leave with source files, parameter records and exported data, not screenshots alone.

## Slide 2 - Retrieval and Hypothesis
**Time:** 00:05-00:10

**On-slide:**
- Predict what changes when resolution doubles
- Predict what changes when output update time is shortened
- Predict what changes when reference noise increases

**Speaker notes:** Students write one prediction per variable before opening the simulator. Save predictions for comparison with evidence. Ask which changes should affect ideal quantisation, dynamic settling and observed noise differently.

## Slide 3 - Define the DAC Circuit Under Test
**Time:** 00:10-00:20

**On-slide:**
- Choose a reproducible circuit: R/2R ladder plus output buffer, or tutor-approved DAC model
- Fix supply/reference, output range, load and input code sequence
- State idealisations and non-ideal elements explicitly
- Version each model and simulation run

**Speaker notes:** Recommend the same topology across resolution variants to avoid confounding architecture and bit-depth. Include switch models, resistor values/tolerances, reference source, op-amp model and load if supported. If the ECAD tool lacks a DAC block, construct the circuit from components.

## Slide 4 - Resolution and Quantisation Error
**Time:** 00:20-00:32

**On-slide:**
- Ideal step size q = Vref / 2^N for the stated unipolar convention
- Quantisation error is bounded near +/-0.5 LSB for ideal rounding assumptions
- INL/DNL, offset, gain, reference and resistor mismatch add other errors
- Code density/transfer-curve plots expose missing codes and nonlinearity

**Speaker notes:** Confirm the convention used in the model. Explain that peak error depends on definition and endpoint mapping. Do not add independent worst-case errors statistically without stating the method. Invite students to identify errors that a resistor-only ideal model cannot show.

## Slide 5 - Conversion Time, Update Rate and Settling
**Time:** 00:32-00:44

**On-slide:**
- Define DAC conversion time as the time from code initiation to a valid converted output
- Measure analogue settling time separately: enter and remain within a stated error band
- Update interval is how often new codes are requested; it is not conversion time
- Slew, RC filtering, output load and op-amp bandwidth affect settling
- Faster updates may increase dynamic error or leave incomplete settling

**Speaker notes:** Show a full-scale code transition and define the chosen conversion-time model or device parameter. Mark conversion start/valid time, analogue settling to a specified +/-1 LSB band, and the next update request separately. Link output bandwidth and load to application response. For a discrete R/2R circuit without a converter timing model, state how code switching is applied and treat measured output settling as a separate observable; do not claim an intrinsic conversion-time specification that the model does not represent.

## Slide 6 - Noise and Accuracy Metrics
**Time:** 00:44-00:55

**On-slide:**
- Measure RMS noise over a defined steady-state window
- Compare peak/RMS error, SNR or SINAD only with stated method and bandwidth
- Keep quantisation, injected noise and model noise identifiable
- More bits do not guarantee better total accuracy

**Speaker notes:** Explain that noise estimates depend on bandwidth, sampling, window length and source. If the simulator's noise model is unsupported, use a defined injected source or tolerance sweep and call it that; do not label deterministic ripple as random noise.

## Slide 7 - Worked Test Matrix
**Time:** 00:55-01:07

**On-slide:**
- Resolution: 4, 6, 8 bits (same Vref, topology and load)
- DAC conversion time: 10 us, 100 us, 1 ms (state model/source for each case)
- Update interval: hold constant for paired conversion-time comparisons
- Noise/tolerance: ideal, reference noise, resistor mismatch
- Outputs: transfer curve, step response, RMS noise and max error

**Speaker notes:** Demonstrate one row of the test matrix and explain which variables remain fixed. Conversion time must be an explicit device/model or controlled code-transition parameter; if it cannot be varied in the selected ECAD model, students document that limit and simulate a clearly identified timing model alongside the physical DAC circuit. Keep update interval fixed while conversion time changes, then run a separate update-rate/settling comparison. Explain the reproducible input sequence and steady-state interval.

## Slide 8 - Pre-Run Checks and Error Budget
**Time:** 01:07-01:20

**On-slide:**
- Verify reference, polarity, code mapping and expected endpoints
- Choose timestep/sample interval fine enough for the fastest transient
- Define settling band and measurement window before running
- Separate expected ideal error from simulator and component effects

**Speaker notes / prompt:** Ask students how they would know a waveform is under-sampled by the simulator. Require a pilot run and a timestep refinement check. Each student writes a one-sentence hypothesis for one resolution and one timing comparison.

## Slide 9 - Break
**Time:** 01:20-01:30

**On-slide:** Stretch break. Save the test matrix and hypotheses before leaving.

## Slide 10 - Lab Brief: Create the Baseline DAC
**Time:** 01:30-01:40

**On-slide:**
- Open the approved ECAD tool and create a baseline circuit
- Label reference, code inputs, output, load and measurement nodes
- Save a versioned project before changing parameters
- Capture circuit assumptions and model versions

**Speaker notes:** Demonstrate the tool workflow using the centre's actual ECAD package. Do not assume a specific vendor. Set the baseline with a mid-code and a major code transition; confirm signs and output range before batch runs.

## Slide 11 - Run the Resolution Sweep
**Time:** 01:40-02:05

**On-slide:**
- Simulate at least three bit depths using the same circuit family
- Apply identical code points or normalized input sequence
- Export code/output data and plot transfer curves together
- Calculate LSB and measured step/error for each case

**Activity steps:**
1. Run ideal or nominal circuit variants at three resolutions.
2. Compare low, mid and near-full-scale codes.
3. Record ideal LSB, measured step, maximum deviation and missing/non-monotonic steps.
4. Save project copies as resolution-labelled versions.

## Slide 12 - Run Timing and Noise/Tolerance Cases
**Time:** 02:05-02:25

**On-slide:**
- Apply the same full-scale or representative code step
- Vary DAC conversion time with update interval held fixed
- Measure analogue settling separately; then test a faster update interval
- Add a defined noise source or component/reference tolerance case
- Record exactly what changed and what remained fixed

**Speaker notes / activity:** Students run conversion-time cases first, with one explicit timing parameter changed and the code sequence, update interval and circuit fixed. Then measure analogue settling and run a separate update-interval case. If the simulator does not model DAC conversion time, identify the limitation and use a documented converter model or explicit behavioral timing model; do not relabel settling time as conversion time. For noise/tolerance cases, encourage a small, controlled set rather than an untraceable Monte Carlo screenshot.

## Slide 13 - Analyse: Resolution vs Accuracy
**Time:** 02:25-02:50

**On-slide:**
- Plot maximum error and RMS noise against resolution
- Identify where improvement follows ideal LSB and where it plateaus
- Explain error floor using reference, resistor, buffer or model limits
- State whether extra bits improve the application outcome

**Speaker notes:** Ask students to compare predicted and simulated step. A plateau with rising nominal resolution is a useful result, not a failure. Require a defensible explanation supported by model parameters or additional runs.

## Slide 14 - Analyse: Conversion Time vs Dynamic Error
**Time:** 02:50-03:10

**On-slide:**
- Plot DAC conversion interval and output settling band on the same time axis
- Report conversion time, settling time, peak error and residual noise/ripple separately
- Relate conversion time and update interval to the required signal rate
- State which timing behaviour the simulation model actually represents

**Speaker notes:** Have students present a concise before/after finding. Challenge whether the chosen timestep can resolve the transient and whether the model includes the relevant converter timing. Ask what happens if a new code is requested before conversion completes or before the output settles; these are distinct constraints.

## Slide 15 - Evidence Clinic: D3 Critical Evaluation
**Time:** 03:10-03:35

**On-slide:**
- Multiple actual DAC circuit simulations?
- Controlled resolution, conversion-time and noise conditions?
- Quantitative plots/metrics and reproducible settings?
- Critical conclusion and model limitation stated?

**Activity:** Students exchange one plot and its run record. Reviewer attempts to reproduce the conclusion and flags missing axes, units, conditions, noise definition or confounding variables. Tutor checks that “accuracy” and “noise” are operationally defined.

## Slide 16 - Exit Ticket and Independent Study
**Time:** 03:35-03:45

**On-slide:**
- Which variable most limited output accuracy in your model?
- What result changed your original prediction?
- What simulation limitation must appear in the report?

**Independent study:** Finish simulation runs, export source data and plots, complete the D3 evaluation, and retain model files. State what further bench measurement would be needed to validate the simulation.

**Criteria mapping:** LO3.D3 evidence produced; P5/M4 concepts applied.