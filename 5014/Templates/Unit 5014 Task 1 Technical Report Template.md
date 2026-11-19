# Unit 5014 Task 1 - Technical Report Template

Use this template to prepare your individual LO3 technical report. Replace every square-bracketed prompt with your own researched information, calculations and evidence. Delete guidance that is not part of the final report, but do not delete required evidence. The example starting points are illustrative only: check them against your application, chosen devices and cited sources. They are not finished answers.

Submit the report as an ODT document, or another format agreed with your tutor. Submit editable DAC simulation project files and any supporting data/plots alongside it, and refer to them by filename in the report. Use Harvard in-text citations and a complete reference list.

## Report Cover

- **Report title:** Analogue and Digital Representation and Data Converters
- **Unit:** 5014 Analogue Electronic Systems
- **Task:** Task 1 - Analogue and Digital Conversion
- **Student name and ID:** [Name / ID]
- **Tutor:** [Name]
- **Submission date:** [Date]
- **Word count:** [Count, if required]
- **Simulation software and version:** [Tool / version]

## Contents

[Insert an automatically generated contents page in the final ODT.]

## Executive Summary

[In approximately 150-250 words, summarise the application, the principal analogue-versus-digital findings, the proposed ADC/DAC requirements, the devices/topologies evaluated, the most important simulation results and your final engineering recommendation. Write this after completing the report. Do not introduce results that are not presented and supported later.]

## 1. Introduction and Scope

### 1.1 Purpose and application

- What signal or measurement system are you using to make the discussion concrete?
- What information does the system need to preserve, process, store or reproduce?
- Who or what uses the measurement or output, and what happens if it is inaccurate, delayed or noisy?
- Which parts of the report address ADC requirements, DAC requirements and simulated DAC behaviour?

**Example starting point:** A low-frequency conditioned sensor voltage is acquired by an ADC, processed digitally and, in a separate output path, represented by a DAC as a slowly changing analogue control voltage. State your own application and assumptions.

### 1.2 Design brief and assumptions

Restate the given converter brief in your own words. Separate requirements stated in the brief from assumptions you introduce.

| Item | Given requirement | Assumption or interpretation | Reason / source |
| --- | --- | --- | --- |
| ADC input | 0 to 3.0 V; DC to 20 Hz; at least 100 samples/s; 12-bit nominal target | [Complete] | [Citation] |
| DAC output | 0 to 3.0 V; slowly changing; at least 100 updates/s; at least 10 effective bits | [Complete] | [Citation / justification] |
| Application and environment | [Complete] | [Complete] | [Citation / justification] |
| Supply, interface and load | [Not specified in brief] | [Complete] | [Justify] |

## 2. Analogue and Digital Representation - LO3.P4

### 2.1 Signal-chain diagram

Insert a labelled diagram for your chosen application. Show the physical quantity or source, analogue conditioning, ADC, digital processing/storage, and any DAC or actuator/output stage. Label signal types, important voltage ranges and where filtering or calibration occurs.

```text
[Physical quantity / source]
          |
          v
[Analogue sensor and conditioning] --> [ADC] --> [Digital processing / storage]
                                                   |
                                                   v
                                        [DAC, if applicable]
                                                   |
                                                   v
                                           [Analogue output]
```

**Figure [number].** [Descriptive caption, operating conditions and source if adapted.] Cite any adapted or externally sourced diagram.

### 2.2 Key terms and representation

Define the terms as you use them in this report. Distinguish nominal bit resolution from effective resolution and measurement accuracy.

| Term | Definition in this application | Why it matters |
| --- | --- | --- |
| Analogue signal | [Continuous-time and/or continuous-amplitude meaning] | [Complete] |
| Digital representation | [Samples represented by finite code values] | [Complete] |
| Sampling rate and bandwidth | [Complete] | [Complete] |
| Quantisation and code width | [Complete] | [Complete] |
| Accuracy, resolution and effective number of bits | [Complete] | [Complete] |
| Noise, SNR and linearity | [Complete] | [Complete] |

### 2.3 Evidence-based comparison

Compare both forms in the context of your selected signal. Avoid claiming that either form is universally better. Distinguish limitations of the representation from limitations of a particular circuit or converter.

| Consideration | Analogue representation | Digital representation | Consequence for this application |
| --- | --- | --- | --- |
| Amplitude range and dynamic range | [Complete] | [Complete] | [Complete] |
| Frequency range and bandwidth | [Complete] | [Complete] | [Complete] |
| Noise and interference | [Complete] | [Complete] | [Complete] |
| Resolution and quantisation | [Complete] | [Complete] | [Complete] |
| Accuracy, linearity and drift | [Complete] | [Complete] | [Complete] |
| Filtering and aliasing | [Complete] | [Complete] | [Complete] |
| Processing, storage and transmission | [Complete] | [Complete] | [Complete] |
| Power, complexity and cost | [Complete] | [Complete] | [Complete] |

### 2.4 Application assessment

Use evidence and the comparison above to assess what information can be lost or degraded at each stage.

- Which signal properties must be preserved (for example, amplitude, timing, trend or transient detail)?
- What analogue noise, loading, drift or bandwidth limits affect the signal before conversion?
- What sampling, filtering and quantisation limits are introduced by conversion?
- What can digital processing or storage improve, and what cannot it recover once lost?
- Which limitations dominate in your application, and what evidence supports that judgement?

**Example starting points to investigate:**
- Sampling below twice the highest signal frequency can cause aliasing; a practical system also needs an analogue anti-alias filter and margin for its transition band.
- Increasing bit count reduces ideal quantisation step size, but does not by itself remove reference error, offset, gain error, non-linearity, noise or sensor error.
- Digital values can be copied and processed reproducibly, but the measured information remains limited by the analogue input path and conversion process.

## 3. Converter Requirements - LO3.P5

### 3.1 Initial calculations and conventions

Show each calculation with the equation, substituted values, units and a short interpretation. State the code-range convention used by the selected converter; a unipolar N-bit converter commonly has $2^N$ code intervals, so the highest code does not necessarily equal the reference voltage.

#### ADC sampling and quantisation

For a 0-3.0 V span and a 12-bit nominal converter, calculate the ideal code interval:

$$
\Delta V_{ADC} = \frac{V_{span}}{2^N} = \frac{[\text{span in V}]}{2^{[N]}} = [\text{result in V and mV}]
$$

If the ideal quantisation error is modelled as bounded by half a code interval, calculate that value and explain the assumptions. Then compare the given 20 Hz signal bandwidth with the minimum 100 samples/s requirement:

$$
f_{Nyquist} = \frac{f_s}{2} = \frac{[\text{sample rate in samples/s}]}{2} = [\text{result in Hz]}
$$

- What Nyquist margin does this provide above 20 Hz?
- What analogue anti-alias filter is needed, and what passband, transition-band and attenuation assumptions will you use?
- Is a 100 samples/s output data rate the same as the ADC's conversion time or interface throughput? Explain for your selected device.

**Illustrative check only:** $3.0/2^{12} \approx 0.000732$ V per code, or 0.732 mV/code; half a code interval is approximately 0.366 mV. A 100 samples/s rate has a 50 Hz Nyquist frequency. Explain why these ideal figures do not establish total measurement accuracy.

#### DAC resolution and update timing

Calculate ideal code interval for your chosen DAC bit count(s):

$$
\Delta V_{DAC} = \frac{V_{span}}{2^N} = \frac{[\text{span in V}]}{2^{[N]}} = [\text{result in V and mV}]
$$

For 100 updates/s, calculate the update period. Propose a settling requirement and output load, then explain why those limits suit a slowly changing signal and how they will be checked against a datasheet.

**Illustrative check only:** a 10-bit ideal code interval over 3.0 V is approximately 2.93 mV; at 100 updates/s the interval between updates is 10 ms. One possible starting requirement is settling to a stated error band within 1 ms under a specified load, leaving time before the next update. Choose and justify your own error band, load and margin; do not assume the example is automatically suitable.

### 3.2 Proposed ADC requirements

Complete the proposed requirement and justification columns. State whether each figure is a hard requirement, target or assumption. Cite the source or show the calculation behind each chosen value.

| Characteristic | Proposed requirement / target | Justification and calculation | Verification source or method |
| --- | --- | --- | --- |
| Input range and absolute pin limits | [0-3.0 V signal; state allowable limits] | [Headroom / clipping check] | [Datasheet page/table] |
| Signal bandwidth | [DC-20 Hz] | [Application] | [Brief] |
| Reference voltage and accuracy | [Value, source, tolerance/drift] | [Range and error contribution] | [Datasheet / calculation] |
| Nominal resolution and code range | [At least 12 bits; code convention] | [Ideal step calculation] | [Datasheet] |
| Sample rate / output data rate | [At least 100 samples/s] | [Sampling and settling needs] | [Datasheet] |
| Total error / accuracy target | [Value, units, conditions] | [Error budget below] | [Calculation / acceptance method] |
| Offset, gain error, INL and DNL | [Limits or selection criteria] | [Effect on reading] | [Datasheet] |
| Noise / effective resolution | [Target or method of assessment] | [Bandwidth and filtering assumptions] | [Datasheet / simulation / measurement] |
| Conversion time / latency | [Maximum or acceptable value] | [System timing] | [Datasheet] |
| Analogue front end and source impedance | [Filter / buffer / drive assumptions] | [Settling, bandwidth and loading] | [Circuit calculation] |
| Interface and logic levels | [SPI / I2C / parallel / other] | [Controller compatibility and throughput] | [Datasheet] |
| Supply and power | [Supply range / budget] | [System constraint] | [Datasheet / calculation] |
| Calibration and temperature conditions | [Method / interval / range] | [What calibration can correct] | [Plan / source] |

#### ADC total-error budget

Define the error target over the 0-3.0 V span. Explain whether it is an absolute voltage, percentage of full scale, percentage of reading or another metric. Show how converter, reference, front-end, sensor and calibration contributions are considered.

| Error contribution | Datasheet / assumed limit | Equivalent input-referred error | Treatment (worst-case, RSS, calibrated, etc.) |
| --- | --- | --- | --- |
| ADC offset | [Value] | [V or codes] | [Explain] |
| ADC gain error | [Value] | [V or %FS] | [Explain] |
| ADC INL / DNL | [Value] | [V or codes] | [Explain] |
| Reference initial accuracy and drift | [Value] | [V or %FS] | [Explain] |
| Front-end gain, offset and loading | [Value] | [V or %FS] | [Explain] |
| Noise over stated bandwidth | [Value] | [V RMS / codes] | [Explain] |
| Sensor / conditioning contribution, if included | [Value] | [V or application units] | [Explain] |
| Combined total and margin | [Calculated result] | [Compare with target] | [Explain method and caveats] |

Explain which errors calibration can reduce (for example, system offset and gain under calibration conditions) and which it cannot reliably remove (for example, random noise, changing drift, clipping or uncharacterised non-linearity). State what must be calibrated at system level.

**Illustrative target to evaluate, not a prescribed answer:** ±0.5% of a 3.0 V full-scale span is ±15 mV. Compare any proposed target with the ideal code interval and a realistic error budget; explain whether it is achievable over the stated range and conditions.

### 3.3 Proposed DAC requirements

| Characteristic | Proposed requirement / target | Justification and calculation | Verification source or method |
| --- | --- | --- | --- |
| Output range and output headroom | [0-3.0 V at stated load] | [Supply / output-stage check] | [Datasheet] |
| Reference voltage and accuracy | [Value, tolerance, drift] | [Error contribution] | [Datasheet / calculation] |
| Resolution and effective resolution | [At least 10 effective bits target] | [Ideal step and noise/error check] | [Datasheet / simulation] |
| Update rate | [At least 100 updates/s] | [10 ms period and application] | [Datasheet / timing] |
| Settling time and error band | [Time to within specified band] | [Fraction of update period / response] | [Datasheet conditions] |
| Accuracy, offset, gain error and INL/DNL | [Limits or selection criteria] | [Output-error budget] | [Datasheet] |
| Noise / glitch / output ripple | [Target or evaluation method] | [Impact on load/application] | [Datasheet / simulation] |
| Interface and logic levels | [SPI / I2C / other] | [Compatibility / throughput] | [Datasheet] |
| Load and drive capability | [Resistance, capacitance, current] | [Justify load; assess buffer need] | [Datasheet / calculation] |
| Output power and supply | [Supply range / budget] | [Application constraint] | [Datasheet / calculation] |
| Calibration / output verification | [Method] | [How output accuracy is checked] | [Test plan] |

State the settling-time definition used (such as time to enter and remain within ±1 LSB or a stated percentage of final value). Record the datasheet's load, step size and error band; do not compare settling-time numbers measured under different conditions without explaining the difference.

### 3.4 Requirements summary and assumptions

Summarise the final proposed ADC and DAC choices and identify any requirement that cannot yet be verified.

| Path | Critical requirements | Main assumption or risk | How it will be resolved |
| --- | --- | --- | --- |
| ADC | [Complete] | [Complete] | [Complete] |
| DAC | [Complete] | [Complete] | [Complete] |

## 4. Converter Topologies and Commercial Examples - LO3.M4

For every topology, explain the operating principle, then evaluate its strengths, limitations and a suitable application. Support device-dependent statements with reliable sources. Avoid ranking architectures without stating the conditions being compared.

### 4.1 DAC topologies

#### 4.1.1 Binary-weighted resistor DAC

- How do binary-weighted currents or resistances contribute to the output?
- What resistor ratios and switch characteristics are required?
- How do component matching, switch resistance, bit count and loading affect accuracy and practicality?
- Where might this approach be suitable, and where does scaling become difficult?
- **Evidence / diagram / calculation:** [Insert and cite.]

#### 4.1.2 R-2R ladder DAC

- How does a repeating R-to-2R network create binary weighting?
- Why can it be easier to manufacture or match than a wide range of binary-weighted resistors?
- What errors arise from resistor-ratio mismatch, switch resistance, reference variation, output loading and amplifier behaviour?
- **Evidence / diagram / calculation:** [Insert and cite.]

#### 4.1.3 Segmented DAC

- How are the most significant bits and least significant bits implemented differently?
- How can segmentation trade decoder complexity and matching against switching glitches, monotonicity and linearity?
- Identify one application where speed, resolution, linearity or glitch energy makes segmentation useful.
- **Evidence / diagram / source:** [Insert and cite.]

#### 4.1.4 Delta-sigma DAC

- Explain, at an introductory level, oversampling, noise shaping and digital filtering/reconstruction.
- What trade-offs arise in bandwidth, latency, output filtering, noise and implementation complexity?
- Identify a suitable application and explain why it suits that application's bandwidth and signal quality needs.
- **Evidence / block diagram / source:** [Insert and cite.]

### 4.2 ADC topologies

#### 4.2.1 Single-ramp ADC

- How do a ramp, comparator and time/count measurement produce a digital result?
- How do conversion time, ramp linearity, clock accuracy and input changes during conversion affect results?
- For what low-speed or teaching applications could its simplicity be useful?
- **Evidence / timing diagram / calculation:** [Insert and cite.]

#### 4.2.2 Successive-approximation (SAR) ADC

- Explain the sample-and-hold, comparator, successive bit decisions and conversion control.
- How does conversion time scale with bit trials and clocking? What input acquisition and settling constraints apply?
- Evaluate speed, resolution, power, accuracy and complexity for your signal bandwidth.
- **Evidence / block diagram / source:** [Insert and cite.]

#### 4.2.3 Flash / parallel-comparator ADC

- Explain the comparator thresholds and encoder, including why an N-bit flash architecture needs approximately $2^N-1$ comparators.
- Evaluate conversion speed against comparator count, input loading, power, area and practical resolution.
- Identify applications where its speed can justify those costs.
- **Evidence / comparator-count calculation / source:** [Insert and cite.]

#### 4.2.4 Sigma-delta / delta-sigma ADC

- Explain oversampling, feedback/noise shaping, digital filtering and output data rate at an introductory level.
- Evaluate resolution/noise, bandwidth, latency, filtering and response to changing inputs.
- Explain why nominal bit count should not be confused with noise-free resolution or accuracy.
- Identify applications where its bandwidth and conversion characteristics are suitable.
- **Evidence / block diagram / source:** [Insert and cite.]

### 4.3 Topology comparison

Use comparable sources and conditions where possible. Explain where the comparison is qualitative because specific implementations differ.

| Topology | Typical speed / bandwidth | Resolution / accuracy limits | Noise / linearity | Complexity / power / cost | Suitable application and reason |
| --- | --- | --- | --- | --- | --- |
| Binary-weighted resistor DAC | [Complete] | [Complete] | [Complete] | [Complete] | [Complete] |
| R-2R ladder DAC | [Complete] | [Complete] | [Complete] | [Complete] | [Complete] |
| Segmented DAC | [Complete] | [Complete] | [Complete] | [Complete] | [Complete] |
| Delta-sigma DAC | [Complete] | [Complete] | [Complete] | [Complete] | [Complete] |
| Single-ramp ADC | [Complete] | [Complete] | [Complete] | [Complete] | [Complete] |
| SAR ADC | [Complete] | [Complete] | [Complete] | [Complete] | [Complete] |
| Flash ADC | [Complete] | [Complete] | [Complete] | [Complete] | [Complete] |
| Sigma-delta ADC | [Complete] | [Complete] | [Complete] | [Complete] | [Complete] |

### 4.4 Terminology: SAR ADC and its internal DAC

Successive approximation is conventionally an ADC architecture, not a standalone DAC topology. Explain the role of the internal capacitive or other DAC in a SAR ADC feedback/comparison loop and distinguish it from a standalone voltage-output DAC. If a source uses a different term, quote or paraphrase it accurately, cite it and explain the context rather than treating the terms as interchangeable.

### 4.5 Commercial ADC example

Select at least one commercially available ADC, or a documented ADC peripheral in an embedded device. An example to investigate is a SAR device such as the Microchip MCP3202 or a delta-sigma device such as the Texas Instruments ADS1115. These are research leads, not recommendations; verify the exact part, revision and operating conditions from the manufacturer's datasheet.

| Datasheet characteristic | Your requirement | Selected device specification | Meets / partly meets / does not meet, and why |
| --- | --- | --- | --- |
| Architecture and part number | [Requirement] | [Verified value] | [Assessment] |
| Input range and pin limits | [Requirement] | [Verified value / condition] | [Assessment] |
| Resolution and output data rate | [Requirement] | [Verified value / condition] | [Assessment] |
| Conversion timing / latency | [Requirement] | [Verified value / condition] | [Assessment] |
| Offset, gain, INL/DNL and noise | [Error budget] | [Verified value / condition] | [Assessment] |
| Reference and analogue input drive | [Requirement] | [Verified value / condition] | [Assessment] |
| Interface, supply and power | [Requirement] | [Verified value / condition] | [Assessment] |

Identify typical versus guaranteed maximum/minimum values. Include datasheet page/table/figure references and explain any front-end, reference, filter or calibration needed for the device to meet the system-level requirement.

### 4.6 Commercial DAC example

Select at least one commercially available DAC or documented embedded DAC peripheral. Example devices to investigate include the Microchip MCP4921 or MCP4725; verify the relevant datasheet revision and operating conditions before using any figures.

| Datasheet characteristic | Your requirement | Selected device specification | Meets / partly meets / does not meet, and why |
| --- | --- | --- | --- |
| Architecture and part number | [Requirement] | [Verified value] | [Assessment] |
| Output range, reference and headroom | [Requirement] | [Verified value / condition] | [Assessment] |
| Resolution and linearity | [Requirement] | [Verified value / condition] | [Assessment] |
| Settling time and glitch/noise | [Requirement] | [Verified value / condition] | [Assessment] |
| Load and output drive | [Requirement] | [Verified value / condition] | [Assessment] |
| Interface, supply and power | [Requirement] | [Verified value / condition] | [Assessment] |

Explain any need for an output amplifier, reference, filtering or calibration. Do not treat the bit count or unloaded output range as proof that the complete output path meets the requirements.

### 4.7 Topology and device selection

Which architecture and device are the best fit for the stated system and why? Compare credible alternatives against requirements, not only headline speed or resolution. State at least one compromise, limitation or unresolved verification item.

## 5. DAC Simulation Study - LO3.D3

### 5.1 Aim, tool and model boundary

- **Question being investigated:** [How do resolution and conversion/settling time affect output accuracy and noise?]
- **Simulation tool/version:** [Complete]
- **Editable project filename(s):** [Complete]
- **Model type:** [Circuit-level / behavioural / mathematical / other]
- **What is modelled:** [DAC, reference, output stage, load, noise/tolerance, etc.]
- **What is idealised or omitted:** [State limitations explicitly.]

Explain how another person can open and reproduce your project. Include the model equations, key settings, solver/time-step settings and any random seed where applicable.

### 5.2 Controlled investigation plan

Keep the input waveform, output range, update schedule, load and model assumptions fixed while changing one variable at a time. Include at least three resolution cases, a controlled update/settling-time variation and one controlled noise or component-tolerance condition.

| Run / case | Resolution | Update rate / settling model | Noise or tolerance condition | Controlled settings and purpose |
| --- | --- | --- | --- | --- |
| A - baseline | [e.g. 8-bit] | [Fixed] | [Off / nominal] | [Complete] |
| B - resolution | [e.g. 10-bit] | [Same as A] | [Same as A] | [Complete] |
| C - resolution | [e.g. 12-bit] | [Same as A] | [Same as A] | [Complete] |
| D - timing | [Keep one resolution fixed] | [Change settling/update condition] | [Same as baseline] | [Complete] |
| E - noise/tolerance | [Keep one resolution fixed] | [Same as baseline] | [Change one noise/tolerance parameter] | [Complete] |

**Possible controlled setup:** use the same slow ramp or low-frequency sine input, 0-3.0 V output span, 100 updates/s and identical load for the resolution comparison. For timing, keep resolution and waveform fixed while changing the modelled settling response. For noise/tolerance, change only one specified parameter at a time. State your actual settings and justify them.

### 5.3 Calculation before simulation

Calculate the ideal step size for every resolution case and record the convention used.

| Resolution | Calculation | Ideal step size | Ideal half-step bound, if assumed |
| --- | --- | --- | --- |
| [N1] bits | $3.0/2^{N1}$ | [V and mV] | [V and mV] |
| [N2] bits | $3.0/2^{N2}$ | [V and mV] | [V and mV] |
| [N3] bits | $3.0/2^{N3}$ | [V and mV] | [V and mV] |

**Illustrative starting cases only:** 8, 10 and 12 bits over 3.0 V give ideal steps of approximately 11.72 mV, 2.93 mV and 0.732 mV respectively. Recalculate for your chosen cases and confirm that the simulation uses the same full-scale/code convention.

Define the input waveform, amplitude, frequency, simulation duration, update frequency, output load and sampling points. For a 100 updates/s case, the update period is 10 ms; state how the waveform relates to this rate and avoid accidental aliasing in the chosen test.

### 5.4 Simulation settings and evidence

| Setting | Value used | Why it is appropriate |
| --- | --- | --- |
| Input waveform, amplitude and frequency | [Complete] | [Complete] |
| Output range and code mapping | [Complete] | [Complete] |
| Update frequency and code sequence | [Complete] | [Complete] |
| Load resistance/capacitance | [Complete] | [Complete] |
| Settling model and parameter | [Complete] | [Complete] |
| Noise or tolerance model and value | [Complete] | [Complete] |
| Analysis duration, solver and time step | [Complete] | [Complete] |
| Random seed / repeat count, if applicable | [Complete] | [Complete] |

Insert labelled plots. Include units on both axes, a legend, the resolution/timing/noise case and enough detail to distinguish input, ideal quantised output and modelled output. Captions must state simulation conditions and refer to the editable project file.

**Figure [number].** [Input and output comparison across resolution cases, same waveform and load.]

**Figure [number].** [Settling response for controlled timing cases; mark the final value and stated settling band/time.]

**Figure [number].** [Noise or component-tolerance comparison; show nominal and varied condition.]

### 5.5 Metrics and results

Choose metrics supported by your tool and explain how they are calculated. Compare against both the ideal analogue input and the ideal quantised code where useful, so quantisation error is not confused with settling error.

Possible metrics include maximum absolute error, mean error, RMS error, settling time to a stated band, RMS noise during a held output, peak-to-peak noise or SNR over a stated bandwidth. For samples $x_i$ and simulated output $y_i$, one possible RMS error metric is:

$$
e_{RMS} = \sqrt{\frac{1}{M}\sum_{i=1}^{M}(y_i-x_i)^2}
$$

State what $x_i$ represents (original input or ideal quantised value), which samples are included, and whether startup/settling samples are excluded. If calculating SNR, define the signal and noise bands and avoid comparing results with different bandwidths. The common ideal full-scale sine approximation $SNR \approx 6.02N + 1.76$ dB assumes ideal quantisation and is not a general prediction for every waveform or real converter.

| Case | Ideal step size | Max error | RMS error | Settling time / residual | RMS noise or SNR | Key observation |
| --- | --- | --- | --- | --- | --- | --- |
| A | [Value] | [Value / units] | [Value / units] | [Value / units] | [Value / units] | [Interpret] |
| B | [Value] | [Value / units] | [Value / units] | [Value / units] | [Value / units] | [Interpret] |
| C | [Value] | [Value / units] | [Value / units] | [Value / units] | [Value / units] | [Interpret] |
| D | [Value] | [Value / units] | [Value / units] | [Value / units] | [Value / units] | [Interpret] |
| E | [Value] | [Value / units] | [Value / units] | [Value / units] | [Value / units] | [Interpret] |

### 5.6 Critical interpretation

- Does increasing resolution reduce the error metric you measured? By how much, and under what conditions?
- At what point do settling response, noise, reference error, component tolerance or model assumptions dominate the ideal quantisation step?
- Does the output settle before the next update under the chosen load and error-band definition?
- Does the noise/tolerance case obscure the benefit of the extra bit(s)? Support the answer with results, not only visual inspection.
- Which conclusions apply only to your model, and which are supported by the selected device datasheet or other sources?
- What additional circuit-level or bench test would be needed to validate the model?

## 6. Overall Discussion and Engineering Recommendation

Bring the P4, P5, M4 and D3 evidence together.

- Is the proposed converter path technically suitable for the application and why?
- Which requirement is most difficult to meet: total error, effective resolution, bandwidth, timing, loading, noise, power or cost?
- How do the chosen topologies compare with realistic alternatives for this signal?
- What is the effect of front-end design, reference quality, calibration and output loading on the system-level result?
- What would you recommend changing or verifying next, and what measurable result would confirm the improvement?

**Recommendation:** [State a concise, evidence-based recommendation and its main caveat.]

## 7. Conclusion

[Answer the report's purpose directly. Summarise the most important limits of analogue and digital representation, whether the proposed requirements are achievable, the topology/device selection, and what the DAC simulation demonstrates about resolution versus timing/noise. Do not introduce new evidence here.]

## References

List every source cited in the report using the Harvard format required by your course. Check the exact institutional Harvard guidance. Include manufacturer, full device number, datasheet title/revision/date and page or table for specifications. Include access dates for web sources where required.

**Reference prompts:**
- Manufacturer datasheets and application notes for the selected ADC, DAC, references, amplifiers and other relevant components.
- Reliable electronics/data-conversion textbooks or academic/professional sources for topology principles and trade-offs.
- Official simulation-tool documentation for model and analysis methods.
- Standards or technical guidance where relevant to sampling, measurement, safety or terminology.
- Cite figures, tables, adapted diagrams, data and externally sourced claims where they appear; do not rely on a bibliography entry alone to show which claim it supports.

**Harvard format examples to adapt to local guidance:**

- Book: [Author surname], [Initial(s)]. ([Year]) *[Book title]*. [Edition]. [Place]: [Publisher].
- Datasheet: [Manufacturer] ([Year or revision date]) *[Exact device number: datasheet title]*, [document number/revision], p. [page]. Available at: [URL] (Accessed: [date]).
- Web technical page: [Author/organisation] ([Year or n.d.]) *[Page title]*. Available at: [URL] (Accessed: [date]).

## Appendices

Use appendices for supporting detail and clearly refer to each appendix in the main report.

### Appendix A - Full calculations

[Show equations, substituted values, units, rounding and assumptions for the ADC/DAC requirements and error budget.]

### Appendix B - Datasheet evidence

[List selected device part numbers, datasheet revisions, relevant pages/tables and operating conditions. Attach or link to lawful source copies as directed by your tutor.]

### Appendix C - DAC simulation project and settings

| File | Purpose | Tool/version | Case / settings |
| --- | --- | --- | --- |
| [Filename] | [Editable project / model] | [Version] | [Complete] |
| [Filename] | [Raw data / plot] | [Version] | [Complete] |

### Appendix D - Additional plots and raw data

[Include data needed to reproduce metrics, additional labelled plots and processing steps. Preserve units and explain any omitted or filtered samples.]

## Evidence Coverage Check

Complete this table before submission. The report should point to actual evidence, not just mention a topic.

| Criterion | Required evidence | Report section / figure / appendix |
| --- | --- | --- |
| **LO3.P4** | Assess limitations of analogue and digital representation; application consequences; labelled signal chain and comparison | [Complete] |
| **LO3.P5** | Justified ADC and DAC requirements, calculations, assumptions, error/timing/loading considerations and datasheet comparison | [Complete] |
| **LO3.M4** | Operating principles, strengths, limitations and applications of all required ADC/DAC topologies; commercial examples; terminology note; supported trade-offs | [Complete] |
| **LO3.D3** | At least three controlled resolution cases; timing variation; noise or tolerance condition; calculations, labelled plots, settings, metrics, comparison and critical conclusion; editable project files | [Complete] |

### Final submission checklist

- [ ] Report is individual, clearly structured and saved in the agreed format.
- [ ] Every prompt has been replaced or removed, and example values have not been presented as measured results.
- [ ] Calculations show working, units, code convention and assumptions.
- [ ] Tables and plots have titles/captions, labelled axes, units, legends and stated conditions.
- [ ] Datasheet values are cited with the exact part number, revision and relevant operating conditions.
- [ ] Typical values are distinguished from guaranteed limits.
- [ ] The topology discussion covers all required architectures and applications.
- [ ] The SAR terminology note distinguishes an ADC architecture from its internal DAC and from a standalone DAC.
- [ ] Simulation comparisons change one controlled variable at a time and include at least three resolutions, timing, and noise or tolerance.
- [ ] Simulation limitations are stated and editable project files are included.
- [ ] Harvard citations in the text match the reference list.
- [ ] Evidence coverage table points to the relevant report sections and appendices.