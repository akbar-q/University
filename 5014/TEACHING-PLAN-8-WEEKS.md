# Unit 5014 - LO3/LO4 Teaching Map
## Signal Conversion and Electronic Circuit Design

This map covers the supplied **LO3** and **LO4** descriptors and assessment criteria. Confirm the official unit title, cohort timetable, simulator, and submission dates against the current assignment brief before issue.

## Delivery Assumptions

- Recommended sequence: **8 weeks, one 4-hour taught/laboratory session per week**. A session may be split into a seminar and practical class without changing the evidence milestones.
- Most weeks combine a short taught input, worked examples, guided practical work, and an evidence check. Students complete calculations, simulation runs, circuit construction, and write-up between sessions.
- Practical circuits use tutor-approved extra-low-voltage supplies. Any motor/load is simulated or isolated appropriately; this work is not a safety-certified design.
- ECAD package and bench instruments are set by the centre. Use the same circuit model and named test points in calculations, simulation, and bench work wherever practical.
- Students complete an individual evidence trail, even if circuit ideas or test setups are discussed collaboratively.

## Learning Outcomes

- **LO3:** Assess techniques for the conversion of signals between analogue and digital formats.
- **LO4:** Design electronic circuits using physical components.

## Assessment Criteria Reference

### LO3
- **P4:** Assess the limitations of representing information in both analogue and digital form.
- **P5:** Specify the technical characteristics of converters in terms of meeting a given set of requirements.
- **M4:** Evaluate the characteristics and limitations of specific converter topologies and their example applications.
- **D3:** Create a given range of DAC circuit simulations to critically evaluate the implications of resolution and conversion time on accuracy and noise.

### LO4
- **P6:** Design an electronic circuit supported by a written description.
- **P7:** Simulate a working electronic circuit using a set of chosen components.
- **P8:** Construct and test the design on the bench with a justification of the testing method.
- **M5:** Critically analyse design equations, simulation, and bench test results, recording and explaining discrepancies using graphical representation.
- **D4:** Present circuit designs to specialist audiences, showing variation of circuit function in simulations resulting from design changes or component tolerances.

## Assessment and Evidence Map

| Evidence item | Criteria | Minimum evidence to retain |
| --- | --- | --- |
| Analogue/digital comparison | P4 | Comparison using range, frequency/bandwidth, accuracy, resolution, linearity, drift, noise and signal-to-noise ratio; conclusions linked to a stated application |
| Converter requirements and selection | P5 | Given specification, converter requirements table, calculations, datasheet evidence and justified device/topology selection |
| Topology evaluation | M4 | Like-for-like comparison of suitable ADC and DAC topologies, limitations, calculations/simulation and example applications |
| DAC simulation study | D3 | Multiple DAC circuit simulations, controlled resolution/conversion-time/noise variations, plots, quantitative metrics and critical conclusions |
| ADC temperature-monitor design pack | P6 | Written requirements and circuit description, thermistor divider/conditioning schematic, component selection, equations, ADC interface and test points |
| ECAD simulation | P7 | Working thermistor/ADC front-end simulation, chosen component values/models, labelled traces and evidence of expected operation |
| Bench implementation and test | P8 | Safely built low-voltage sensor interface, justified test method, equipment/setup, results and labelled build evidence |
| Analysis and presentation | M5, D4 | Equation/simulation/bench comparison with uncertainty and discrepancies graphed; specialist presentation showing simulation variations and design judgement |

## LO4 Hardware Project: ADC-Based Temperature Monitor

Students design, simulate, build and test a **low-voltage temperature-monitoring input**. A thermistor divider feeds a microcontroller ADC through any justified signal-conditioning stage; firmware reports temperature and activates a low-voltage indicator at a stated threshold. A potentiometer, precision resistors or function generator provide repeatable electrical test inputs when thermal conditions are unavailable.

- Use a tutor-approved 10 kOhm NTC thermistor (or available equivalent) and controller/ADC platform. Confirm the thermistor curve and ADC input limits from manufacturer documentation.
- Define an application range and acceptance limits with the tutor. Calculate the divider and ADC mapping from the selected sensor and hardware; do not assume all boards have the same reference voltage, ADC resolution, input impedance or linearity.
- Consider an RC anti-alias/noise filter, buffer/gain stage, connector, input protection and decoupling. Include components only where calculations and requirements justify them.
- Record raw ADC codes as well as converted engineering units. Compare ideal quantisation calculations with datasheet limits, simulation and bench observations.
- Use a safe, current-limited extra-low-voltage supply. Temperature stimulus must stay within local laboratory rules; do not use mains-powered heaters or present the prototype as a safety-certified monitor.
- Keep LO3's DAC topology comparison and D3 DAC simulations as separate assessed work. The LO4 project is specifically an ADC application.

## Weekly Overview

| Week | Main focus | Criteria | Exit evidence |
| --- | --- | --- | --- |
| 1 | Analogue and digital representations; limits and measurement | P4 | Application-based comparison table and initial requirements |
| 2 | ADC architectures and converter specification | P5, M4 | ADC comparison and requirements-to-specification selection |
| 3 | DAC architectures, calculations and device selection | P5, M4 | DAC topology calculations and justified shortlist |
| 4 | DAC simulation study: resolution, timing, accuracy and noise | D3 | Reproducible simulation set, plots and critical comparison |
| 5 | ADC temperature-monitor requirements and circuit design | P6 | Written specification, thermistor interface schematic and calculations |
| 6 | ECAD simulation, ADC scaling and design/tolerance variations | P7, D4 | Working nominal simulation plus design-change/tolerance results |
| 7 | Build and bench test the ADC temperature-monitor input | P8, M5 | Constructed circuit, justified test record and measured data |
| 8 | Correlate equations, simulation and bench data; present design | M5, D4 | Graphical evaluation and specialist design presentation |

## Weekly Plan

### Week 1 - How Information Is Represented

**Goal:** Explain where analogue and digital representations differ and what is lost or altered during capture, processing, storage, and conversion.

**Teach and model**
- Continuous-time/continuous-amplitude signals versus sampled and quantised data.
- Amplitude range, frequency/bandwidth, sampling frequency, aliasing and anti-alias filtering.
- Quantisation, resolution, accuracy, linearity, offset/gain error, drift, noise and signal-to-noise ratio.
- Separate resolution from accuracy: more bits do not by themselves guarantee a more accurate measurement.
- Compare analogue conditioning/recording with ADC-based capture and digital processing/storage for a named engineering signal.

**Guided activity**
- Compare a low-frequency sensor signal and a higher-frequency waveform against two capture chains.
- Calculate ideal quantisation step and Nyquist minimum for provided ranges and bandwidths; identify why practical margin and filtering are needed.
- Annotate an analogue front end, ADC, digital processing/storage, DAC and output reconstruction path.

**Evidence clinic**
- Check that the comparison addresses every P4 characteristic and relates limitations to the chosen application, rather than presenting a glossary.

**Exit evidence / independent study**
- P4 comparison table, one labelled signal-chain diagram and initial application requirements for converter selection.

**Criteria mapping:** Primary P4; introduces P5.

### Week 2 - ADC Architectures and Specification

**Goal:** Match ADC characteristics to a stated measurement requirement and compare the main conversion approaches.

**Teach and model**
- Single-ramp conversion: counter/ramp timing, conversion-time dependence and accuracy limitations.
- Successive-approximation (SAR): binary search, conversion cycles and common applications.
- Flash/parallel comparator: parallel thresholds, speed, hardware complexity and power considerations.
- Sigma-delta/delta-sigma terminology: oversampling, noise shaping, decimation and latency; these names are generally used for the same converter family, not separate ADC topologies.
- Datasheet terms: input range/reference, resolution, sample rate, bandwidth, latency, INL/DNL, offset/gain error, ENOB/SNR, channel count, interface and power.

**Guided activity**
- Select a converter for a given sensor or measurement scenario using an explicit requirements-to-specification table.
- Read a manufacturer datasheet and identify typical versus guaranteed limits, operating conditions and interface constraints.
- Estimate quantisation step and conversion/data throughput for at least two candidate devices.

**Evidence clinic**
- Verify units, source quality and whether chosen resolution, sample rate, input range and accuracy can all be met simultaneously.

**Exit evidence / independent study**
- ADC topology comparison, completed converter requirements table, short datasheet-backed selection rationale.

**Criteria mapping:** P5, M4.

### Week 3 - DAC Architectures and Device Selection

**Goal:** Calculate and compare DAC circuit approaches and make a defensible choice for an output requirement.

**Teach and model**
- Binary-weighted resistor DAC: output calculation, resistor-ratio spread and scaling limitations.
- R/2R ladder: output calculation, repeated resistor values, loading and switching considerations.
- Segmented DAC: thermometer/binary partitioning, monotonicity and complexity trade-offs.
- Successive approximation is an ADC method; distinguish it from DAC topologies and from the DAC inside an ADC's SAR loop.
- Delta-sigma DAC introduction: oversampling/noise shaping, filtering, latency and where it is useful.
- DAC characteristics: resolution, reference, output range, settling/conversion time, INL/DNL, glitch energy, output drive, noise and interface.

**Guided activity**
- Calculate ideal output codes for weighted-resistor and R/2R examples, then examine loading and resistor tolerance effects.
- Compare a discrete DAC design with commercially available DAC ICs and controller-integrated analogue outputs where relevant.
- Use actual manufacturer documentation for examples; check whether a controller pin is a true DAC, PWM output, or ADC-only input.

**Evidence clinic**
- Check that selection follows the stated requirements and that topology, resolution, update/settling needs and output conditioning are not conflated.

**Exit evidence / independent study**
- DAC calculation sheet, topology comparison, candidate component/datasheet shortlist and initial D3 simulation plan.

**Criteria mapping:** P5, M4; prepares D3.

### Week 4 - DAC Simulation Study (D3)

**Goal:** Use a controlled set of circuit simulations to assess how resolution, conversion/settling time and noise affect DAC output quality.

**Teach and model**
- Build or configure a DAC model in the centre's ECAD/simulation tool; state what is idealised and what is represented by component/device models.
- Distinguish quantisation error, settling error, reference error, resistor mismatch, output-stage limitations and injected noise.
- Define repeatable metrics: step size, peak/RMS error, settling time to a stated band, output noise and SNR/SINAD where the model supports meaningful estimates.
- Acknowledge that increasing nominal resolution does not automatically improve total accuracy if noise, non-linearity, reference or settling dominate.

**Guided activity**
- Simulate a specified range of DAC resolutions, for example 4-, 8- and 12-bit models, using the same input waveform and output range.
- Vary update/settling time and introduce at least two controlled noise or tolerance conditions.
- Record code-to-output transfer curves and time-domain responses; compare calculated ideal behaviour with simulated results.

**Evidence clinic**
- Check that comparisons change one factor at a time, axes/units are labelled and claims are supported by measured simulation data.
- Require a conclusion about when additional resolution helps and when conversion time/noise or analogue errors dominate.

**Exit evidence / independent study**
- Simulation files, parameter table, plotted results, metric calculations and a critical D3 discussion with limitations of the model.

**Criteria mapping:** D3; reinforces P5/M4.

### Week 5 - ADC Temperature-Monitor Specification and Design

**Goal:** Define and design a physical thermistor-to-ADC measurement path with a clear, testable temperature-monitoring function.

**Teach and model**
- Translate the application into temperature range, threshold, update rate, display/logging behaviour, allowed error and electrical input limits.
- Use the thermistor datasheet/model to calculate resistance at representative temperatures and select a divider resistor for useful ADC span.
- Calculate ADC code width and expected temperature sensitivity; separate quantisation from sensor tolerance, ADC error and calibration error.
- Decide whether source impedance requires a buffer; calculate an RC filter and justify its cutoff against signal bandwidth and sample rate.
- Define connector pinout, supply/reference, grounding, test points, component tolerances and safe operating limits. Add protection/decoupling where justified.

**Guided activity**
- Produce a system block diagram, circuit schematic, preliminary BOM and calculation set for thermistor -> divider/filter/conditioning -> ADC -> temperature conversion -> indicator/log.
- Define electrical test cases using known resistors or a signal source, plus safe thermal checks where available.
- Set acceptance checks before simulation: ADC pin never exceeds its allowed range, code changes monotonically over the selected temperature range, and warning output switches at the specified threshold.

**Evidence clinic**
- Check that the written description explains function and signal flow, component values trace to equations/specifications, and the circuit can be tested safely.

**Exit evidence / independent study**
- P6 design pack draft: requirements, written circuit description, schematic, component selection/BOM, thermistor/divider and ADC calculations, pin map and test plan.

**Criteria mapping:** P6; supports P7/P8.

### Week 6 - Simulate the ADC Temperature-Monitor Circuit

**Goal:** Demonstrate that the selected circuit works in simulation and investigate the effect of design changes and component tolerances.

**Teach and model**
- Configure models, source waveforms, solver settings, loads and probes; identify model assumptions and convergence limitations.
- Run DC operating-point, transient, AC/frequency-response or noise analysis as appropriate to the circuit.
- Use tolerance or Monte Carlo analysis where available; otherwise run documented low/nominal/high component cases.
- Compare at least one design change, such as divider resistor, filter corner, buffer stage, ADC reference or output load.

**Guided activity**
- Simulate the nominal circuit and verify each acceptance criterion.
- Run a controlled design-change comparison and tolerance sweep on the thermistor/divider and filter components that materially affect ADC span, response or noise.
- Save schematic revisions and export labelled plots/data with conditions and units.

**Evidence clinic**
- Check the circuit is genuinely operational in simulation, uses selected values/models and has a clear baseline against which variations can be judged.

**Exit evidence / independent study**
- P7 simulation evidence, baseline and variant schematics, temperature-to-voltage/code plots, tolerance/design-change results, updated BOM and a short D4 presentation outline.

**Criteria mapping:** P7, D4; supports M5.

### Week 7 - Build and Bench-Test the ADC Temperature Monitor

**Goal:** Build the designed circuit and obtain repeatable measurements using a justified bench method.

**Teach and model**
- Safe bench setup: current-limited supply, common reference, grounding, probe loading, instrument range and power-off wiring checks.
- Function generator, oscilloscope, DMM and logic analyser use as appropriate; avoid shorting grounded instrument references.
- Test repeatability, calibration/accuracy limits, uncertainty, measurement loading and recording actual component values.
- Compare simulated and physical circuits only under matched input, supply, load and measurement conditions.

**Guided activity**
- Construct the approved thermistor divider/conditioning and ADC interface on breadboard or the centre's prototyping platform; inspect polarity, pinout and power rails before energising.
- Test using measured resistor substitutions or a calibrated signal source to check conversion mapping, then use the thermistor where safe and practical.
- Capture analogue voltage and raw ADC code together; record temperature reference, equipment settings and actual component values.
- Record faults, modifications and retests rather than silently editing the circuit away from the design.

**Evidence clinic**
- Check every test has setup, expected result, observed result, pass/fail judgement, units and evidence reference.

**Exit evidence / independent study**
- P8 bench record, labelled build photographs, raw voltage/code/temperature data, test results and a list of observed equation/simulation/bench differences.

**Criteria mapping:** P8; begins M5.

### Week 8 - Analysis, Evaluation and Specialist Presentation

**Goal:** Explain differences among design equations, simulation and bench behaviour, then present design judgement to a technical audience.

**Teach and model**
- Build an equation/simulation/bench comparison with percentage or absolute error and stated uncertainty.
- Explain discrepancies using evidence: tolerance, non-ideal op-amp behaviour, loading, wiring/parasitics, instrument limits, reference error, noise, model assumptions or setup differences.
- Graph results with units, legends, test conditions and uncertainty/tolerance bands where justified.
- Structure a specialist technical presentation: requirements, circuit, calculations, simulation, build/test evidence, variants, limitations and design recommendation.

**Guided activity**
- Produce at least one graph comparing predicted, simulated and measured temperature-to-voltage or temperature-to-code response; include error or uncertainty where supportable.
- Present the ADC project baseline and design-change/tolerance simulations; explain the impact on circuit function and whether acceptance criteria remain met.
- Conduct peer questions focused on component choice, converter limitations, measurement validity, and justified next improvements.

**Evidence clinic**
- Check that discrepancies are analysed rather than hidden, all conclusions point to evidence, and the presentation distinguishes measured data from simulated or ideal results.

**Exit evidence / independent study**
- Final M5 analysis, D4 presentation, complete evidence index and individual reflection on design limitations and possible improvements.

**Criteria mapping:** M5, D4; consolidates P4-P8 and M4.

## Core Evidence Pack

Students should retain one clearly indexed evidence pack containing:

- **LO3 representation and converter selection:** P4 comparison, P5 requirements table, calculations, topology evaluation, datasheets and device/application rationale.
- **LO3 DAC simulation study:** source project files, model assumptions, run settings, data, plots and D3 analysis.
- **LO4 design record:** temperature-monitor requirements, written function/specification, block diagram, thermistor/ADC schematic, BOM, component datasheets and design calculations.
- **LO4 ECAD evidence:** working nominal ADC front-end simulation, design variants, thermistor/resistor tolerance cases, plots and saved project files.
- **LO4 build and test record:** build photographs, test-point map, equipment/setup, resistor-substitution or signal-source test plan, raw voltage/code/temperature data and results.
- **LO4 analysis and communication:** equation/simulation/bench comparison, graphical discrepancy analysis and specialist presentation.

Use consistent revision labels for calculations, schematics, simulation runs and bench records so the evidence chain remains traceable.

## Tutor Checkpoints

- **End of Week 1:** P4 analysis is application-based and covers the specified analogue/digital characteristics.
- **End of Week 3:** P5 specifications are quantitative; M4 compares actual topologies and supported device examples, not only generic descriptions.
- **End of Week 4:** D3 simulation range and metrics are sufficient to support a critical conclusion about resolution, timing, accuracy and noise.
- **End of Week 5:** P6 thermistor-to-ADC design is complete enough to simulate and construct, with ADC limits and test criteria defined.
- **End of Week 6:** P7 nominal simulation works; D4 has at least a design-change comparison and a component-variation case.
- **End of Week 7:** P8 includes justified and repeatable bench testing with recorded actual values.
- **End of Week 8:** M5 explains material discrepancies graphically; D4 presentation is technically accurate and evidence-led.

## Technical and Safety Notes

- Teach sampling and quantisation as distinct mechanisms. Nyquist is a lower-bound sampling condition for a band-limited signal, not a guarantee of faithful conversion without appropriate analogue filtering and system margin.
- Distinguish nominal bit resolution, effective resolution and absolute accuracy. Use datasheet conditions when comparing commercial converters.
- Treat sigma-delta and delta-sigma as common naming variants for the same broad conversion approach unless a source explicitly defines a narrower distinction.
- Build only within the centre's approved voltage/current limits. Do not connect student circuits directly to mains or claim a prototype is a certified safety device.
- Follow local laboratory rules for current limiting, stored energy, hot components, ESD-sensitive parts, and instrument grounding.