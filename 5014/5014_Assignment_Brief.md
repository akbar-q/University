# BTEC Assignment Brief

## Qualification and Unit Information

| Item | Details |
| --- | --- |
| **Qualification** | Pearson BTEC Level 5 Higher National Certificate in Engineering |
| **Unit number and title** | Unit 5014: Analogue Electronic Systems |
| **Unit code** | M/651/0868 |
| **Unit level / credits** | Level 5 / 15 credits |
| **Learning outcomes assessed** | LO3 and LO4 |
| **Assignment title** | Analogue-to-Digital Conversion and Physical Circuit Design |
| **Assessor** | Mr. Akbar (confirm before issue) |
| **Hand-out date** | To be confirmed |
| **Hand-in deadline** | To be confirmed |

## Learning Outcomes

- **LO3:** Assess techniques for the conversion of signals between analogue and digital formats.
- **LO4:** Design electronic circuits using physical components.

## Vocational Scenario or Context

You are working as an electronics engineer developing measurement and signal-conversion subsystems for an instrumentation product. The product must acquire a low-frequency analogue sensor signal, process and report the measurement, and provide a controlled analogue output where required. The design team needs evidence that converter choices are appropriate and that a physical analogue circuit performs as predicted.

For the LO4 project, you will design and evaluate a low-voltage temperature-measurement input using an NTC thermistor and an ADC input. The circuit may include a resistor divider, filtering, buffering, protection or an indicator stage where justified. You will design and simulate the circuit, construct it using physical components, test it on the bench and present your engineering decisions and results to a specialist audience.

This is a teaching prototype. Use tutor-approved extra-low-voltage supplies and follow local laboratory safety instructions. Do not present the circuit as a certified safety or temperature-control system.

## Task 1 — Analogue and Digital Conversion: Theory Submission (LO3)

Submit an individual technical document assessing the limits of analogue and digital representation, converter requirements and converter topologies. Support explanations with calculations, diagrams, simulation evidence where required, commercially available examples and reliable technical sources.

### 1. Compare Analogue and Digital Representation

Using a suitable engineering signal or measurement example, assess the implications of capturing, processing and storing information in analogue and digital form. Address:

- Amplitude range, frequency range and bandwidth.
- Sampling, aliasing and filtering where relevant.
- Accuracy, resolution and quantisation; explain why resolution alone does not establish accuracy.
- Linearity, drift, noise and signal-to-noise ratio.
- The effects of these characteristics on the information retained and the suitability of each representation for the example application.

Include a labelled signal-chain diagram and an evidence-based comparison table.

### 2. Specify Converter Requirements

Use the following design brief as the basis for a converter requirements table:

- **ADC path:** measure a conditioned sensor signal over 0 to 3.0 V, with useful signal content from DC to 20 Hz. The system must provide at least 100 samples per second and target 12-bit nominal resolution. State a realistic total-error target and explain how calibration, converter limits and the analogue front end affect whether it can be met.
- **DAC path:** produce a 0 to 3.0 V output representing a slowly changing control or measurement signal, with at least 100 updates per second and a target of at least 10 effective bits. State a settling-time and load requirement and justify them for the application.

For each path, specify and justify relevant technical characteristics, including input/output range, reference, resolution, sample/update rate, accuracy, linearity, noise, conversion or settling time, interface, loading and power. Identify any assumptions. Use calculations and manufacturer datasheets to support the proposed requirements and converter examples.

### 3. Evaluate ADC and DAC Topologies

Evaluate the operating principles, characteristics, limitations and suitable applications of converter topologies. Your discussion must include:

- **DACs:** binary-weighted resistor and R/2R ladder networks; segmented configurations; and an introduction to delta-sigma DACs.
- **ADCs:** single-ramp, successive-approximation (SAR), flash/parallel-comparator and sigma-delta/delta-sigma approaches.
- At least one commercially available ADC and one commercially available DAC, or documented converter peripherals in an embedded device. Compare datasheet characteristics with your requirements.
- Calculations and/or simulation evidence that make the differences between relevant topologies clear. Discuss trade-offs such as speed, resolution, accuracy, noise, circuit complexity, component matching, power and cost.

**Terminology note:** successive approximation is conventionally an ADC architecture, not a standalone DAC topology. If discussing a DAC in the feedback loop of a SAR ADC, distinguish that internal DAC from a standalone DAC. Explain any terminology differences found in sources.

### 4. DAC Simulation Study

Create a range of DAC circuit simulations and use them to critically evaluate the implications of resolution and conversion/settling time on accuracy and noise. Include:

- At least three resolution cases, using the same input waveform, output range and stated model assumptions.
- A controlled variation in conversion/update or settling time.
- At least one controlled noise or component-tolerance condition.
- Calculated ideal step size and suitable measured simulation metrics, such as output error, settling response, noise or signal-to-noise ratio where the simulation tool supports it.
- Labelled plots, simulation settings, a comparison table and a critical conclusion explaining when additional resolution improves the output and when other limitations dominate.

Retain the editable simulation project files. Clearly identify idealised models and the limits of the simulation.

### Checklist of Evidence Required

- Technical document with headings and Harvard references.
- Analogue/digital comparison, signal-chain diagram and application consequences.
- Converter requirements table with calculations and stated assumptions.
- ADC/DAC topology evaluation and commercially available examples supported by datasheets.
- DAC simulation files, settings, calculations, plots and critical evaluation.

### Criteria Covered by This Task

| Unit/criteria reference | To achieve the criteria, you must show that you are able to: |
| --- | --- |
| **LO3.P4** | Assess the limitations of representing information in both analogue and digital form. |
| **LO3.P5** | Specify the technical characteristics of converters in terms of meeting a given set of requirements. |
| **LO3.M4** | Evaluate the characteristics and the limitations of specific converter topologies and their example applications. |
| **LO3.D3** | Create a given range of DAC circuit simulations to critically evaluate the implications of resolution and conversion time on accuracy and noise. |

## Task 2 — Physical Circuit Design and Specialist Presentation (LO4)

Design, simulate, construct and test a low-voltage thermistor-to-ADC temperature-measurement circuit. Present the design and your evaluation to a specialist audience. The presentation is the main communication deliverable; submit the supporting calculations, ECAD files and bench evidence with it so that each design criterion can be assessed.

### 1. Develop the Circuit Specification and Design

- State the intended measurement function, operating temperature range, update rate, ADC input limits and an appropriate acceptance target for the measurement.
- Identify the selected thermistor and obtain its characteristics from manufacturer documentation.
- Design the thermistor interface, including component selection and the ADC input connection. Consider a divider, filter, buffer, protection, connector, reference and indicator only where they are relevant and justified.
- Provide a schematic, block diagram, component list and written description explaining signal flow and circuit operation.
- Show the design equations and calculations used to select component values and predict voltage or ADC response over the operating range.
- Identify test points, input/output signals and safe test limits.

### 2. Simulate and Investigate Design Variation

- Simulate a working circuit using the selected components or justified component models.
- Show the nominal design response and verify it against the stated requirements.
- Investigate at least one deliberate design change and at least one relevant component-tolerance case. Examples include changing the divider resistor, filter value, buffer arrangement or reference assumption.
- Use labelled plots or tables to show how the circuit function changes. State simulation conditions, model assumptions and the parameter changed.
- Retain the editable ECAD project and simulation outputs.

### 3. Construct and Test the Circuit

- Build the circuit using physical components and an approved extra-low-voltage supply.
- Develop and justify a repeatable bench test method. Identify the instruments, setup, test inputs, expected results and acceptance limits before testing.
- Test across a suitable range using the thermistor and, where useful, measured resistor substitutions or a calibrated signal source.
- Record measured component values, supply/reference conditions, analogue voltages and ADC codes where applicable. Include units and repeat measurements where needed.
- Include clear photographs of the build and identify test points. Record faults, circuit changes and retests rather than omitting them.

### 4. Analyse and Present the Results

- Compare design-equation predictions, simulation results and bench measurements under comparable conditions.
- Use graphs to analyse the response and discrepancies. Include labelled axes, units, legends and test conditions; add error or uncertainty information where it can be supported.
- Explain differences using evidence, considering component tolerance, thermistor characteristics, loading, reference variation, noise, wiring and model or instrument limitations.
- Present the design to a specialist audience, showing how the circuit function changes with the design variation or component tolerances. Make a justified recommendation and identify limitations or improvements.
- Be prepared to answer technical questions about component selection, calculations, simulation, bench method and the reliability of your conclusions.

### Presentation and Supporting Evidence

Your presentation should communicate the engineering decisions clearly. Include:

- Application, requirements and acceptance criteria.
- Circuit architecture, schematic, selected components and written design explanation.
- Key equations and predicted circuit behaviour.
- Nominal simulation and design-change/tolerance results.
- Construction and justified bench test method.
- Graphical comparison of predicted, simulated and measured results, with discrepancies explained.
- Conclusion, limitations and proposed improvements.

Submit the presentation together with the supporting design and evidence pack. The pack may be organised as appendices or separate files as directed by the tutor, but every item must be clearly referenced from the presentation or its accompanying design record.

### Checklist of Evidence Required

- Circuit specification, written description, schematic, component selection and calculations.
- Working ECAD simulation with selected components and retained editable project files.
- Design-change and component-tolerance simulation evidence with plots.
- Physical circuit build evidence and a justified bench test plan/results.
- Graphical analysis of equations, simulation and bench results, including explained discrepancies.
- Specialist-audience presentation with Harvard citations and references.

### Criteria Covered by This Task

| Unit/criteria reference | To achieve the criteria, you must show that you are able to: |
| --- | --- |
| **LO4.P6** | Design an electronic circuit supported by a written description. |
| **LO4.P7** | Simulate a working electronic circuit using a set of chosen components. |
| **LO4.P8** | Construct and test the design on the bench with a justification of the testing method. |
| **LO4.M5** | Critically analyse design equations, simulation, and bench test results, ensuring discrepancies are recorded and explained using graphical representation. |
| **LO4.D4** | Present circuit designs to specialist audiences, showing the variation of circuit function in simulations as a result of design changes or component tolerances. |

## Sources of Information

Use relevant, reliable sources and reference them using Harvard style. Suitable sources include:

- The Pearson BTEC Higher Nationals Engineering unit descriptor for Unit 5014.
- Manufacturer datasheets and application notes for thermistors, ADCs, DACs, operational amplifiers and other selected components.
- Textbooks and academic or professional sources on analogue electronics, data conversion, measurement and circuit design.
- Official ECAD/simulation tool documentation and relevant laboratory measurement guidance.

Use sources to support technical claims, calculations, component characteristics, diagrams and any data or images. Distinguish measured results from calculated values, simulated results and assumptions.

## Submission Format

### A) LO3 Theory Submission

- **File type:** `.odt` (OpenDocument) or another format agreed with the tutor.
- **Content:** Task 1, including the converter comparison, calculations, topology evaluation and D3 simulation findings.
- **Supporting files:** editable simulation projects and any data/plots not embedded in the document.

### B) LO4 Project Presentation and Evidence Pack

- **Presentation:** `.odp` or `.pdf`.
- **Supporting evidence:** schematic/design files, calculations, editable ECAD project, simulation results, bench test plan and results, build photographs and graphical analysis. Submit as an indexed evidence pack or as directed by the tutor.
- Presentation duration and delivery arrangements: to be confirmed by the tutor.

### Referencing and File Naming

- Use Harvard referencing throughout both tasks. Cite datasheets, standards/guidance, books, websites, simulation models and any figures or graphs used.
- Suggested filenames:
  - `5014_LO3_Theory_Lastname_Firstname.odt`
  - `5014_LO3_DAC_Simulations_Lastname_Firstname.zip`
  - `5014_LO4_Presentation_Lastname_Firstname.odp`
  - `5014_LO4_Design_Evidence_Lastname_Firstname.zip`

## Submission Checklist

- Both tasks are clearly identified and all relevant evidence is cross-referenced.
- Calculations show working, units and assumptions.
- Simulation settings, component values and test conditions are recorded.
- Bench evidence identifies the actual circuit tested and any deviations from the schematic.
- Graphs are legible, correctly labelled and discussed in the text or presentation.
- All external sources and borrowed material are acknowledged using Harvard referencing.
- Editable design and simulation files are included where requested.