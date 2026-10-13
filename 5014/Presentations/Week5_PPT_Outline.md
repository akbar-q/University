# Week 5 Presentation Outline - Specify and Design the ADC Temperature Monitor
## LO4.P6: requirements, circuit design, written description and component selection

**Session length:** 3 hours 45 minutes including a 10-minute break (225 minutes).
**Criteria:** LO4.P6; prepares P7, P8 and M5.
**Main outcome:** each student produces a traceable design pack for a low-voltage thermistor-to-ADC temperature monitor.

## Project Brief

Design an extra-low-voltage circuit that measures temperature using an NTC thermistor and an ADC input on a tutor-approved microcontroller. The system records/displays the measured value and indicates a configurable high-temperature warning using a low-voltage LED or simulated output. The engineering focus is the sensor interface, conversion requirements, circuit selection and testability.

**Baseline design constraints to confirm with the tutor:**
- Thermistor: nominal 10 kOhm NTC at 25 C, with its actual beta/table from the part datasheet.
- Controller ADC: use the selected board's actual input range, resolution, reference/attenuation and restrictions; do not assume nominal board supply equals ADC full scale.
- Supply: current-limited, tutor-approved extra-low voltage; no mains-powered heater or safety claim.
- Stimulus: known resistor substitution or signal source for repeatable electrical tests; safe controlled temperature stimulus if approved.
- Warning: low-voltage LED indicator or approved simulator output; never directly drive a load from an MCU pin without a suitable driver.

## Run of Show

| Time | Slides | Activity |
| --- | --- | --- |
| 00:00-00:10 | 1-2 | Project launch and requirements retrieval |
| 00:10-00:55 | 3-6 | Requirements, thermistor and ADC design teaching |
| 00:55-01:20 | 7-8 | Worked divider/ADC calculation |
| 01:20-01:30 | - | Break |
| 01:30-02:25 | 10-12 | Requirements and component design workshop |
| 02:25-03:10 | 13-14 | Schematic and written design clinic |
| 03:10-03:35 | 15 | P6 evidence review |
| 03:35-03:45 | 16 | Exit ticket and independent study |

---

## Slide 1 - Week 5: From Converter Study to Hardware Design
**Time:** 00:00-00:05

**On-slide:**
- Shared LO4 project: thermistor -> conditioning -> ADC -> temperature -> warning
- Today's question: what circuit will meet a measurable requirement?
- Deliverable: documented design that can be simulated, built and tested

**Speaker notes:** Clarify LO3 DAC simulations are a separate evidence strand. The project today is an ADC application with physical components. Explain that students must create individual schematics/calculations even if they discuss ideas together.

## Slide 2 - Project Scenario and Requirements Seed
**Time:** 00:05-00:10

**On-slide:**
- Measure a defined temperature range using a specified NTC thermistor
- Deliver a repeatable ADC code and converted temperature
- Indicate a threshold condition with a low-voltage output
- Show error, noise, response and safe input limits

**Speaker notes:** Provide the cohort with a tutor-set application range and warning threshold after checking actual component availability. Do not prescribe an accuracy target unsupported by sensor/board capability. Students will derive a realistic error budget.

## Slide 3 - Requirement Before Circuit
**Time:** 00:10-00:20

**On-slide:**
- Functional: measure, convert, display/log, warn, recover safely
- Electrical: sensor range, ADC limits, supply, source impedance and load
- Performance: accuracy, resolution, update rate, noise and settling
- Verification: test condition, metric, acceptance threshold and evidence

**Speaker notes:** Show a requirement-to-test example: “Over 20-60 C, ADC code shall increase monotonically as temperature rises; verify with resistor substitutions representing selected temperatures.” Make clear monotonicity may reverse depending on divider orientation. Require a written decision.

## Slide 4 - NTC Thermistor: Resistance Is Not Temperature
**Time:** 00:20-00:32

**On-slide:**
- NTC resistance decreases as temperature increases
- Use the manufacturer's R-T table or beta equation within its valid range
- Beta model: R(T)=R0 exp[B(1/T - 1/T0)] (T in kelvin)
- Tolerance and self-heating contribute to measurement uncertainty

**Speaker notes:** Explain nominal resistance and reference temperature. Have students identify why beta is not constant across all ranges and why the device's actual datasheet/model matters. Define self-heating qualitatively through power in the thermistor; mention mounting and thermal lag.

## Slide 5 - Divider Design and ADC Span
**Time:** 00:32-00:44

**On-slide:**
- Thermistor + fixed resistor convert resistance to voltage
- Divider orientation determines whether output rises or falls with temperature
- Choose fixed resistance for useful sensitivity over the target range
- Check worst-case voltage against ADC absolute input limits

**Speaker notes:** Draw both divider orientations, with the fixed resistor alternately high-side and low-side. Derive the voltage-divider equation from the exact circuit. Use the datasheet resistance at range endpoints to calculate ADC voltage. Discuss maximizing span versus avoiding saturation and maintaining source impedance.

## Slide 6 - ADC Interface: Range, Reference and Source Impedance
**Time:** 00:44-00:55

**On-slide:**
- ADC pin range may differ from board supply range
- ADC reference, attenuation and calibration affect code-to-voltage mapping
- Sample/hold input may require low source impedance or acquisition time
- Protect against overvoltage and define safe power-up/fault behaviour

**Speaker notes:** Bring up the actual development board documentation selected by the centre. Check absolute maximum, recommended range, channel restrictions, input capacitance/impedance guidance and calibration. Warn that some MCU ADCs have nonlinearity and noisy reference behaviour. Never infer accuracy from bit count alone.

## Slide 7 - Worked Design: Choose a Divider Resistor
**Time:** 00:55-01:07

**On-slide:**
- Example thermistor values at target low/mid/high temperatures
- Calculate divider voltage at each point for candidate fixed resistors
- Convert expected voltage to ideal ADC code and LSB
- Compare span, monotonicity, power and distance from ADC rails

**Speaker notes:** Use supplied/example datasheet values, explicitly labelled illustrative if not the selected part. Work one candidate resistor. Let students calculate the high and low temperature endpoint voltages. Select a value based on the desired range rather than assuming Rfixed equals nominal thermistor resistance is always optimal.

## Slide 8 - Build an Error Budget Before Adding Parts
**Time:** 01:07-01:20

**On-slide:**
- Sensor tolerance and curve fit
- Fixed-resistor tolerance and reference variation
- ADC quantisation, offset, gain, INL and noise
- Filter, loading, calibration and thermal effects

**Speaker notes:** Introduce a simple budget table with source, datasheet/spec, estimated contribution, mitigation and verification. Explain worst-case addition versus RSS combination; require students to state which they use. Calibration can remove some systematic error but not all noise/drift or nonlinearity.

## Slide 9 - Break
**Time:** 01:20-01:30

**On-slide:** Stretch break. Keep the project block diagram and error-budget prompt displayed.

## Slide 10 - Workshop: Write a Measurable Specification
**Time:** 01:30-01:40

**On-slide:**
- Define temperature range and high-temperature threshold
- Set sampling/update interval and allowed measurement error
- State supply, ADC board/channel, input constraints and output behaviour
- Give each requirement an ID and verification method

**Speaker notes:** Students work individually; pairs can challenge requirements. Provide a template with columns ID, requirement, rationale, priority, acceptance threshold, verification and source. They must distinguish tutor-provided values from student-derived targets.

## Slide 11 - Calculate Sensor and ADC Values
**Time:** 01:40-02:05

**On-slide:**
- Populate Rthermistor at range endpoints and warning point
- Compare at least two Rfixed choices
- Calculate VADC, expected code, divider current and thermistor power
- Check ADC input range and source impedance

**Activity steps:**
1. Obtain actual thermistor datasheet/model values.
2. Calculate divider voltage at minimum, midpoint, warning and maximum temperature.
3. Convert voltage to ideal code using the selected ADC's documented range and resolution.
4. Choose Rfixed and justify sensitivity, headroom, current and power trade-offs.
5. Record assumptions and any calibration requirement.

**Tutor prompts:** “What if the ADC reference is 3% low?” “Does the thermistor self-heat?” “Are your resistor values from an available series?”

## Slide 12 - Choose Signal Conditioning Components
**Time:** 02:05-02:25

**On-slide:**
- RC low-pass: select cutoff against signal bandwidth and sample rate
- Buffer: justify from source impedance, ADC acquisition and load
- Protection/decoupling: use only with a stated fault/noise mechanism
- Output indicator: select current limiting and driver from load requirements

**Speaker notes:** Derive a first-order RC corner frequency and discuss its effect on response time. Make students quantify the time-constant consequence for the temperature monitor. Avoid indiscriminate capacitors or op-amps: component selection must trace to a requirement and calculation.

## Slide 13 - Draft the Circuit Schematic and Interfaces
**Time:** 02:25-02:50

**On-slide:**
- Label thermistor, fixed resistor, filter/buffer, ADC pin and common reference
- Label values, tolerances, connector pinout and supply rails
- Mark test points for sensor voltage, ADC input and output indicator
- Add a block diagram and state signal direction/units

**Activity:** Students draft schematic in ECAD or a clear schematic tool. The schematic must be readable, have component references and values, and identify board interface boundaries. Add a separate software/data-flow block for raw code -> calibrated voltage/resistance -> temperature -> threshold decision.

## Slide 14 - Write the Design Description
**Time:** 02:50-03:10

**On-slide:**
- Purpose and operating sequence
- Why each selected component/value is present
- How signal is scaled and protected
- How the circuit will be simulated and tested

**Speaker notes:** Model a concise engineering description using “The thermistor and Rfixed form... The ADC node is... The RC network is intended to... Acceptance is checked by...” Students should explain trade-offs and avoid claiming simulation/bench results before they exist.

## Slide 15 - P6 Evidence Clinic
**Time:** 03:10-03:35

**On-slide:**
- Requirement table complete and testable?
- Written function description agrees with schematic?
- Values trace to equations and data sheets?
- ADC limits, safe supply and named test points shown?

**Activity:** Pair-review schematic and calculations against this checklist. Reviewer asks one interface/safety question and one performance question. Tutor checks that the chosen ADC board's real input characteristics are documented.

## Slide 16 - Exit Ticket and Independent Study
**Time:** 03:35-03:45

**On-slide:**
- Submit draft requirements, schematic and one worked design calculation
- Identify one design risk to check in simulation
- Bring chosen ECAD project file next week

**Independent study:** Finalize P6 design pack. Obtain thermistor and MCU/ADC datasheets. Calculate transfer values at five temperatures and select a realistic error budget, update rate and threshold. Do not build before the schematic is checked against the tutor's safety rules.

**Criteria mapping:** LO4.P6 evidence drafted; P7 simulation prepared.