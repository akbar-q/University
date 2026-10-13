# Week 7 Presentation Outline - Build and Bench-Test the ADC Circuit
## LO4.P8 and M5: physical construction, justified tests and measured evidence

**Session length:** 3 hours 45 minutes including a 10-minute break (225 minutes).
**Criteria:** LO4.P8; begins M5.
**Main outcome:** each student safely constructs the thermistor-to-ADC interface and runs a justified, traceable bench test plan.

## Run of Show

| Time | Slides | Activity |
| --- | --- | --- |
| 00:00-00:10 | 1-2 | Safety and test readiness |
| 00:10-00:55 | 3-6 | Measurement method and bench instrumentation |
| 00:55-01:20 | 7-8 | Test design and uncertainty example |
| 01:20-01:30 | - | Break |
| 01:30-02:25 | 10-12 | Build, inspect and execute tests |
| 02:25-03:10 | 13-14 | Capture, troubleshoot and compare |
| 03:10-03:35 | 15 | P8/M5 evidence clinic |
| 03:35-03:45 | 16 | Exit ticket and independent study |

---

## Slide 1 - Week 7: Does the Physical Circuit Match the Design?
**Time:** 00:00-00:05

**On-slide:**
- Build only from the reviewed, safe schematic
- Test under controlled and repeatable conditions
- Record what happened, including failed tests and changes
- Compare physical measurements to equations and simulation

**Speaker notes:** Explain that deviations are valuable evidence. Students may not hide changes by silently redrawing the circuit after testing; record as-built deviations and revision IDs.

## Slide 2 - Bench Readiness and Safe Limits
**Time:** 00:05-00:10

**On-slide:**
- Tutor-approved extra-low-voltage supply; current limit set
- Power off during wiring changes
- Confirm polarity, pinout, ground and ADC input limits
- No mains heaters; use safe resistor/signal substitution where needed

**Speaker notes:** Review local lab procedure, ESD practice and instrument grounding. Explain why many bench oscilloscope probe grounds are earth-referenced; never attach them without understanding circuit common and supply isolation. Students stop and ask if voltage domains are unclear.

## Slide 3 - Test Method: What Question Are We Answering?
**Time:** 00:10-00:20

**On-slide:**
- Verify transfer: known input resistance/voltage -> ADC code
- Verify temperature mapping: known reference points -> reported value
- Verify dynamics: step -> settling/update/threshold delay
- Verify fault bounds: open/short input response where safe

**Speaker notes:** Separate subsystem tests. First prove divider and ADC electrically with known resistors or a calibrated source. Then test temperature mapping. Fault injection should be limited to safe, current-limited conditions and never exceed absolute maximum ratings.

## Slide 4 - Instruments and Their Limits
**Time:** 00:20-00:32

**On-slide:**
- DMM: DC voltage/resistance; accuracy and input impedance
- Function generator: known waveform; amplitude/offset and output impedance
- Oscilloscope: transient/noise; probe attenuation, bandwidth and grounding
- MCU serial/log output: raw code, converted value, sample timing

**Speaker notes:** Show how to measure VADC directly while logging raw ADC code. Explain instrument resolution is not accuracy. Note that MCU ADC reads can be affected by source impedance, sampling configuration and internal calibration.

## Slide 5 - Test Inputs: Known Resistors Before Temperature
**Time:** 00:32-00:44

**On-slide:**
- Substitute known resistances representing several thermistor points
- Predict divider voltage and ideal ADC code before connecting
- Compare measured node voltage, raw code and converted temperature
- Then compare actual thermistor at safe, known conditions

**Speaker notes:** Explain why resistor substitution isolates electrical scaling from thermal uncertainty. Use a resistor decade box only if available; otherwise use measured fixed resistors. Record their actual resistance, not just colour-code nominal value.

## Slide 6 - Test Repeatability and Uncertainty
**Time:** 00:44-00:55

**On-slide:**
- Repeat readings and report mean/range or standard deviation
- Record reference instrument and stated accuracy
- Include actual resistor values and supply/reference measurement
- Keep sensor tolerance and temperature-reference uncertainty visible

**Speaker notes:** Demonstrate a small repeated-measurement table. Do not report excessive decimal places. Discuss noise versus drift by observing short-term scatter and longer-term change separately.

## Slide 7 - Worked Test Case: ADC Code Check
**Time:** 00:55-01:07

**On-slide:**
- Measure Rfixed and substituted Rthermistor
- Predict Vnode from divider equation
- Predict code from documented ADC range/resolution
- Compare measured DMM voltage and reported raw code

**Speaker notes:** Work an example with a made-up but clearly labelled ADC range. Show absolute difference in volts and codes. Ask whether the discrepancy is consistent with ideal quantisation alone; list possible reference, gain, nonlinearity, source and wiring factors.

## Slide 8 - Test Plan Quality Bar
**Time:** 01:07-01:20

**On-slide:**
- Test ID and requirement link
- Setup, instruments, calibration and input condition
- Expected result, acceptance limit and procedure
- Observed data, pass/fail, evidence file and corrective action

**Speaker notes:** Review a weak test (“check it works”) and rewrite it into a reproducible case. Students must define a quantitative acceptance limit before test, with rationale and uncertainty.

## Slide 9 - Break
**Time:** 01:20-01:30

**On-slide:** De-energise bench supply before break; leave wiring unchanged and labelled.

## Slide 10 - Assemble and Inspect the Circuit
**Time:** 01:30-01:40

**On-slide:**
- Follow the approved schematic and pin map
- Check rail/ground continuity and component orientation
- Inspect ADC connection, filter capacitor and indicator polarity
- Photograph the unpowered build and mark test points

**Speaker notes:** Tutor demonstration of breadboard rail breaks and common ground. Students build one stage at a time. The microcontroller pin is a measurement input, not a power output. Keep LED current limiting and any driver stage correctly specified.

## Slide 11 - Commission One Stage at a Time
**Time:** 01:40-02:05

**On-slide:**
- Stage 1: verify supply and divider output with DMM
- Stage 2: connect ADC and confirm raw code changes monotonically
- Stage 3: apply conversion/calibration and check display/log
- Stage 4: test threshold indicator and safe fault cases

**Activity steps:**
1. Power with current limit and verify supply rails.
2. Measure divider output at known resistor points.
3. Connect ADC and log raw code plus timestamp.
4. Compare predicted voltage/code with observed readings.
5. Test warning threshold and safe open/short input behaviour.
6. Record any deviation before changing the circuit.

## Slide 12 - Execute the Test Matrix
**Time:** 02:05-02:25

**On-slide:**
- At least five known resistance points across range
- Repeat selected points for noise/repeatability
- One step/filter response test
- One safe fault or boundary test and recovery check

**Speaker notes:** Teams with limited hardware can share a signal source in rotations while each student retains individual records. Any simulated reading must be labelled as simulated. Capture raw voltages and raw codes, not only converted temperature.

## Slide 13 - Troubleshoot with Evidence
**Time:** 02:25-02:50

**On-slide:**
- No change: inspect sensor wiring, pin selection, ADC channel and ground
- Saturation: verify divider orientation, reference, attenuation and input limits
- Noisy code: inspect source impedance, grounding, filtering and sampling
- Wrong scale: verify code convention, calibration constants, units and curve

**Speaker notes:** Model a disciplined sequence: observation -> hypothesis -> one controlled check -> result -> correction -> retest. Avoid changing several components simultaneously. Record initial fault, evidence and the measured improvement.

## Slide 14 - Compare the Build to the Simulation
**Time:** 02:50-03:10

**On-slide:**
- Same source condition, supply, load and measurement node?
- Same component values or actual measured values entered?
- Compare VADC, code, settling and noise under matched conditions
- List plausible causes; do not select a cause without evidence

**Speaker notes:** Students make a first comparison table. Explain common causes: tolerance, parasitic capacitance, breadboard wiring, reference, ADC nonlinearity, probe loading, thermistor self-heating and inaccurate temperature reference. Save conclusions for Week 8.

## Slide 15 - Evidence Clinic: P8 and M5 Readiness
**Time:** 03:10-03:35

**On-slide:**
- As-built circuit matches or documents deviations from design?
- Test method justified for each requirement?
- Raw data, units, equipment and conditions recorded?
- Faults, changes and retests retained?

**Activity:** Peer review test record and photos. Reviewer should be able to reproduce one test. Tutor checks safe wiring, justified method, measurement traceability and meaningful pass/fail decisions.

## Slide 16 - Exit Ticket and Independent Study
**Time:** 03:35-03:45

**On-slide:**
- One measured result that agrees with prediction
- One discrepancy and the evidence needed to explain it
- One plot required for the final analysis

**Independent study:** Clean raw data, enter actual component values into the model and prepare an equation/simulation/bench comparison. Finish test notes and preserve before/after evidence of corrections.

**Criteria mapping:** LO4.P8 evidence completed; M5 comparison data collected.