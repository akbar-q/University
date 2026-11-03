# Unit 5014 Task 2 - Project Presentation Template

Use this slide-by-slide template to build your specialist-audience presentation. Replace every bracketed prompt with your own design information and evidence. Remove prompts that do not apply, but do not omit required assessment evidence. Confirm presentation duration, file format and evidence-pack arrangements with your tutor.

Keep the main slides focused on decisions and results. Put detailed calculations, raw data, full datasheets, editable ECAD files and extra test evidence in the indexed supporting pack, and cite the relevant item on the slide.

## Presentation Details

- **Student:** [Name]
- **Project title:** [Thermistor-to-ADC temperature measurement circuit]
- **Presentation date:** [Date]
- **Circuit / ECAD revision:** [Revision ID]
- **Target audience:** [Specialist audience]
- **Measurement range:** [Minimum to maximum, with units]
- **Acceptance target:** [Metric, limit and conditions]

## Suggested Slide Sequence

### Slide 1 - Project and Design Outcome

**On-slide:**
- [Project title and student name]
- [One-sentence measurement function]
- [Key result or design recommendation]

**Visual:** [Photograph of the finished build or labelled circuit overview]

**Speaker notes:** State what is measured, the intended operating range and the main outcome. Identify this as a teaching prototype, not a certified safety or temperature-control system.

**Evidence reference:** [Build photo / project record]

### Slide 2 - Application, Requirements and Acceptance Criteria

**On-slide:**
- Application and intended measurement: [Description]
- Operating temperature range: [Range and units]
- Update rate: [Rate and units]
- ADC input range and limits: [Minimum/maximum voltage]
- Measurement acceptance target: [Error or other metric, limits and conditions]

**Visual:** [Application context or requirements table]

**Speaker notes:** Explain why the target is appropriate for the application. Distinguish required limits from assumptions and identify how acceptance will be assessed.

**Evidence reference:** [Requirements / acceptance criteria record]

### Slide 3 - Circuit Architecture and Signal Flow

**On-slide:**
- Sensor -> [conditioning stages] -> ADC input -> [measurement output]
- Key signals and interfaces: [Names, ranges and units]
- Test points: [TP names and purpose]

**Visual:** [Block diagram with signal direction and test points]

**Speaker notes:** Describe the signal flow and the purpose of each stage. State safe test limits and note any protection, buffering, filtering or indicator stage used.

**Evidence reference:** [Block diagram / schematic, revision]

### Slide 4 - Schematic and Component Selection

**On-slide:**
- Thermistor: [Manufacturer, part number, key characteristics]
- Selected components: [Reference, value/part number, tolerance and role]
- Supply and reference: [Nominal value and measured/assumed status]
- Design choices: [Brief justification]

**Visual:** [Readable schematic with component references and test points]

**Speaker notes:** Explain why the components suit the operating range and ADC interface. Identify manufacturer data and any model assumptions. Keep full component details in the component list.

**Evidence reference:** [Schematic / component list / datasheets]

### Slide 5 - Design Equations and Predicted Response

**On-slide:**
- Governing equations: [Equation(s), symbols and units]
- Selected values: [Calculation summary]
- Predicted output at key operating points: [Values with units]
- ADC conversion or code prediction: [Equation / assumptions, if applicable]

**Visual:** [Annotated calculation, response curve or compact prediction table]

**Speaker notes:** Show how the component values were selected and how the response was predicted across the operating range. State assumptions, rounding and any thermistor linearisation or calibration method. Put full working in the calculation appendix.

**Evidence reference:** [Calculation sheet / prediction data]

### Slide 6 - Nominal Simulation and Requirement Check

**On-slide:**
- ECAD tool and project revision: [Tool/version, file/revision]
- Model and simulation conditions: [Supply, temperature/input sweep, load and other settings]
- Nominal response: [Key result]
- Requirement check: [Pass/fail against stated acceptance target]

**Visual:** [Labelled nominal simulation plot or table]

**Speaker notes:** Identify selected components or justified models. Explain what the simulation verifies and what it cannot establish about the physical build.

**Evidence reference:** [Editable ECAD project / simulation output]

### Slide 7 - Design Change and Component-Tolerance Investigation

**On-slide:**
- Baseline: [Component values / reference assumption]
- Deliberate change: [Parameter changed and reason]
- Tolerance case: [Component, tolerance and case/modelled range]
- Effect on circuit function: [Measured metric and result]
- Requirement impact: [Pass/fail and trade-off]

**Visual:** [Overlay plot or comparison table with labelled series and units]

**Speaker notes:** Separate the intentional design change from the tolerance case. State simulation conditions and model assumptions, and explain how the plotted change affects the measurement function.

**Evidence reference:** [Variant ECAD files / plots / run settings]

### Slide 8 - Construction and Bench Test Method

**On-slide:**
- Build configuration and revision: [As-built description]
- Instruments and setup: [Instrument, range/resolution and connection]
- Test inputs and sequence: [Repeatable steps]
- Expected results and acceptance limits: [Values and units]
- Safety: [Approved extra-low-voltage supply and safe test limits]

**Visual:** [Bench setup diagram or annotated build photograph]

**Speaker notes:** Justify why the method can test the stated requirements. Identify controlled conditions, test points, repeats and how temperature or resistance input is established. Explain any differences between the as-built circuit and schematic.

**Evidence reference:** [Bench test plan / setup photo]

### Slide 9 - Build Evidence and Bench Results

**On-slide:**
- Build photograph(s): [Label components and test points]
- Measured component values: [Value, unit and instrument]
- Supply/reference conditions: [Measured values]
- Analogue voltage and ADC results: [Selected results with units/codes]
- Faults, changes and retests: [Record or state none observed]

**Visual:** [Clear labelled build photo and concise results table]

**Speaker notes:** Report the circuit that was actually tested. Preserve raw readings, repeats and units in the evidence pack; do not silently omit faults or rework.

**Evidence reference:** [Build photos / raw bench data / retest record]

### Slide 10 - Predicted, Simulated and Measured Comparison

**On-slide:**
- Compared conditions: [Matched temperature/resistance, supply, reference, load]
- Main agreement or discrepancy: [Magnitude, direction and operating point]
- Uncertainty or repeatability: [Supported estimate, or state not quantified]
- Engineering interpretation: [Evidence-supported explanation]

**Visual:** [Graph comparing equation, simulation and bench data; labelled axes, units, legend and conditions]

**Speaker notes:** Compare like with like and distinguish calculated, simulated and measured results. Explain discrepancies using evidence, considering component tolerance, thermistor characteristics, loading, reference variation, noise, wiring, models and instrument limits. Avoid claiming a cause that was not tested.

**Evidence reference:** [Processed dataset / graph / uncertainty calculation]

### Slide 11 - Recommendation, Limitations and Improvements

**On-slide:**
- Recommended design or configuration: [Choice]
- Evidence supporting the recommendation: [Results]
- Limitations: [Known limits and unresolved uncertainties]
- Next improvement and verification: [Change, measurable test and expected outcome]

**Visual:** [Decision table or annotated final circuit]

**Speaker notes:** Give a reasoned recommendation based on the requirements and evidence. Identify what further work is needed before broader use; do not present the teaching prototype as a certified system.

**Evidence reference:** [Evaluation / proposed test record]

### Slide 12 - References and Evidence Pack

**On-slide:**
- [Harvard references for sources cited in the presentation]
- Evidence pack location/index: [Folder or archive name]
- ECAD and simulation files: [File names/revisions]
- Calculations, raw data, test plan and photographs: [File names]

**Speaker notes:** Use Harvard citations on relevant slides as well as a reference list here. Ensure every referenced file is included, clearly named and matches the stated circuit revision.

**Evidence reference:** [Evidence pack index]

## Optional Final Slide - Questions

**On-slide:** Questions

Be ready to explain component selection, calculations, simulation assumptions, bench method, design/tolerance variation and the reliability of the conclusions.

## Assessment Evidence Check

| Criterion | Presentation evidence to point to | Supporting evidence to include |
| --- | --- | --- |
| **LO4.P6** | Specification, architecture, schematic, component selection and written circuit explanation | Schematic, component list, datasheets and calculations |
| **LO4.P7** | Nominal simulation and requirement check | Editable ECAD project, model details and simulation outputs |
| **LO4.P8** | Build evidence, repeatable test method and bench results | Build photographs, test plan, raw readings and retest record |
| **LO4.M5** | Graphical comparison and evidence-based discrepancy analysis | Matched dataset, labelled plots and uncertainty/repeatability information |
| **LO4.D4** | Specialist recommendation showing design-change and tolerance effects | Variant simulations, settings, plots and comparison with requirements |

## Supporting Evidence Pack Index

Complete this index and use the same file names in slide references.

| ID | Evidence item | File name / location | Circuit revision or conditions |
| --- | --- | --- | --- |
| E1 | Specification and acceptance criteria | [File] | [Revision / conditions] |
| E2 | Schematic and component list | [File(s)] | [Revision] |
| E3 | Design calculations and predicted response | [File(s)] | [Revision / assumptions] |
| E4 | Editable nominal ECAD project and simulation outputs | [File(s)] | [Tool/version / run settings] |
| E5 | Design-change and tolerance simulations | [File(s)] | [Changed parameter / tolerance case] |
| E6 | Bench test plan and setup | [File(s)] | [Date / instrument setup] |
| E7 | Build photographs and as-built notes | [File(s)] | [Revision] |
| E8 | Raw bench results and retest records | [File(s)] | [Date / conditions] |
| E9 | Comparison dataset, graphs and uncertainty analysis | [File(s)] | [Processing method / conditions] |
| E10 | Harvard references and source datasheets | [File(s)] | [Access or publication details] |

## Final Review

- [ ] Each requirement has a stated acceptance target and test method.
- [ ] Equations include defined symbols, units and assumptions.
- [ ] Schematic, simulation and as-built circuit revisions are identified.
- [ ] Simulation includes a nominal case, a deliberate design change and a component-tolerance case.
- [ ] Bench method states instruments, setup, inputs, expected results and acceptance limits.
- [ ] Results distinguish calculated, simulated and measured evidence.
- [ ] Graphs show labelled axes, units, legends and relevant test conditions.
- [ ] Discrepancies, faults, changes and retests are reported and explained where evidence allows.
- [ ] Harvard citations and references are complete.
- [ ] Every supporting item is included and referenced from the presentation or evidence index.