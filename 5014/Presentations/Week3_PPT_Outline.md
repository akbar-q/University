# Week 3 Presentation Outline - DAC Topologies and Output Requirements
## LO3: calculate, compare and select digital-to-analogue conversion approaches

**Session length:** 3 hours 45 minutes including a 10-minute break (225 minutes).
**Criteria:** LO3.P5, LO3.M4; prepares D3.
**Main outcome:** students calculate and evaluate resistor DAC approaches, distinguish DAC from ADC methods, and specify a suitable output converter.

## Run of Show

| Time | Slides | Activity |
| --- | --- | --- |
| 00:00-00:10 | 1-2 | Retrieval and outcomes |
| 00:10-00:55 | 3-6 | DAC principles and topology teaching |
| 00:55-01:20 | 7-8 | Worked calculations and application check |
| 01:20-01:30 | - | Break |
| 01:30-02:25 | 10-12 | DAC calculation and comparison workshop |
| 02:25-03:10 | 13-14 | Commercial/embedded converter selection |
| 03:10-03:35 | 15 | Evidence clinic |
| 03:35-03:45 | 16 | Exit ticket and independent study |

---

## Slide 1 - Week 3: From Codes Back to Voltages
**Time:** 00:00-00:05

**On-slide:**
- DAC maps a digital code into an analogue output
- Today: binary-weighted, R/2R, segmented and delta-sigma approaches
- Output range, load, settling, accuracy and noise define suitability

**Speaker notes:** Give examples: audio, control references, waveform generation, sensor simulation and instrumentation. Clarify that a PWM output plus filter is not the same implementation as a true DAC, even if both can generate an average voltage.

## Slide 2 - Retrieval Check: ADC or DAC?
**Time:** 00:05-00:10

**On-slide:**
- Successive approximation is primarily an ADC architecture
- A SAR ADC contains an internal DAC in its comparison loop
- Name one limitation of using PWM as an analogue-output substitute

**Speaker notes:** Correct the frequent confusion between ADC architectures and DAC topologies. Elicit ripple, filter lag, load dependence and PWM carrier/noise as examples.

## Slide 3 - Ideal DAC Transfer Function
**Time:** 00:10-00:20

**On-slide:**
- N bits provide 2^N code states
- Ideal step size is approximately Vref / 2^N
- Output transfer depends on code convention and reference polarity
- Real DACs add offset, gain, INL/DNL, settling and glitch errors

**Speaker notes:** Define the assumed unipolar straight-binary model for the examples. Keep endpoint conventions explicit: the maximum code may produce one LSB below reference in a common model. Datasheets determine exact scaling.

## Slide 4 - Binary-Weighted Resistor DAC
**Time:** 00:20-00:32

**On-slide:**
- Each bit switches a weighted branch into a summing node
- Ideal branch weights scale by powers of two
- Op-amp sums current and sets output polarity/scale
- Wide resistor ratios and switch resistance complicate high resolution

**Speaker notes:** Draw a 4-bit inverting summing DAC. Work one code such as 1010 and explain MSB/LSB branch contributions. Discuss resistor matching, loading and op-amp offset/bias limitations. Do not claim a universal circuit formula without stating the exact topology.

## Slide 5 - R/2R Ladder DAC
**Time:** 00:32-00:44

**On-slide:**
- Repeated R and 2R values create binary attenuation
- Easier ratio matching and scaling than many distinct resistor values
- Switch resistance, ladder termination, loading and layout still matter
- Buffering protects the ladder transfer from load changes

**Speaker notes:** Follow current/voltage division through a 4-bit ladder, using a supplied schematic and stated output convention. Demonstrate why each bit has half the next branch's weight. Point out that a real ladder's reference and switch network must be modelled.

## Slide 6 - Segmented DAC and Delta-Sigma Output
**Time:** 00:44-00:55

**On-slide:**
- Segmentation uses thermometer-coded MSBs plus binary-coded LSBs
- Can improve monotonicity/speed while controlling circuit complexity
- Delta-sigma DAC uses oversampled switching and noise shaping
- Reconstruction filtering, idle tones, output noise and latency matter

**Speaker notes:** Use a conceptual split-bit diagram. Introduce delta-sigma as an output conversion approach, not simply “more bits”. Explain that filtering is part of the practical output chain and contributes to settling time.

## Slide 7 - Worked Example: Code and Step
**Time:** 00:55-01:07

**On-slide:**
- 4-bit ideal unipolar DAC, Vref = 5.0 V
- LSB = 5/16 = 0.3125 V under this code convention
- Code 1010 (decimal 10) -> 10 x 0.3125 = 3.125 V
- Identify where this ideal result can differ in hardware

**Speaker notes:** State assumptions and distinguish output equation conventions. Ask students to calculate codes 0001 and 1111. Expected maximum is one LSB below 5 V for this model. Name reference error, resistor mismatch, load, op-amp swing and noise.

## Slide 8 - Application Fit: What Is the Output Asked to Do?
**Time:** 01:07-01:20

**On-slide:**
- Static control reference: accuracy and low drift may dominate
- Waveform generation: update rate, settling and glitches matter
- Audio: noise/distortion and reconstruction response matter
- Actuator command: load drive, isolation and fail-safe state matter

**Speaker notes:** Ask groups to rank requirements for four example uses. Reinforce that “resolution” is not a substitute for bandwidth, settling time or output drive. For actuator interfaces, a DAC is not a power stage.

## Slide 9 - Break
**Time:** 01:20-01:30

**On-slide:** Stretch break. Leave the four topology diagrams displayed.

## Slide 10 - Workshop: Calculate a 4-bit DAC
**Time:** 01:30-01:40

**On-slide:**
- Each group receives the same 4-bit R/2R schematic and reference
- Calculate outputs for 0000, 0001, 0101, 1010 and 1111
- Record polarity, full-scale convention and assumed ideal components

**Speaker notes:** Assign calculator and checker roles. Hand out the exact ladder circuit and transfer convention. Emphasise that results cannot be compared across groups if sign or termination assumptions differ.

## Slide 11 - Calculate, Then Challenge the Ideal Model
**Time:** 01:40-02:05

**On-slide:**
- Add 1% resistor tolerances to selected branches
- Add finite output load and non-ideal buffer limits
- Predict which codes are most sensitive and why
- Keep ideal, perturbed and measured/simulated values separate

**Activity steps:**
1. Complete the ideal code table.
2. Estimate the effect of one branch resistor at its tolerance limit.
3. Explain how loading or buffer output swing changes the result.
4. List the parameters that an ECAD simulation should vary next week.

## Slide 12 - Topology Comparison: Choose by Evidence
**Time:** 02:05-02:25

**On-slide:**
- Weighted resistor: simple concept, demanding resistor ratios
- R/2R: repeated values, still sensitive to matching/loading
- Segmented: improved practical trade-offs with more design complexity
- Delta-sigma: strong in-band performance with filtering/latency trade-offs

**Speaker notes:** Groups make a short M4 recommendation for one stated application. Require at least one limitation and a reason an alternative loses. Correct the notion that one topology is universally best.

## Slide 13 - Commercial DACs and Embedded Output Ports
**Time:** 02:25-02:50

**On-slide:**
- Compare resolution, INL/DNL, settling, output range, reference and interface
- Check output buffer/current limits and load requirements
- Confirm MCU pin is a true DAC, not merely PWM
- Use official datasheets and note guaranteed test conditions

**Activity:** Students compare one commercial DAC IC with either another DAC IC or a controller-integrated DAC/PWM implementation. Capture part/model, topology, bits, output range, update/settling information, interface, output drive, power and one relevant limitation.

## Slide 14 - Converter Specification Exercise
**Time:** 02:50-03:10

**On-slide:**
- Application: output 0-2.5 V control reference, 0-20 Hz updates
- Define resolution/error target, settling band, load and interface
- Explain which requirements need external buffer/filter components

**Speaker notes:** Students write a mini P5 specification and topology choice. Tutor challenge: ask whether 12 bits is enough without reference, INL and noise evidence; ask whether an output must source current directly into a load.

## Slide 15 - Evidence Clinic: P5 / M4
**Time:** 03:10-03:35

**On-slide:**
- Calculations state topology, reference and code convention
- Comparison is quantitative where possible and application-linked
- Datasheet limits are interpreted under stated conditions
- Decision includes rejected alternative and trade-off

**Activity:** Peer-check calculation table and selection rationale. Reviewers flag one unchecked assumption and one unsupported device claim. Tutor collects a common issue list for next week's simulation setup.

## Slide 16 - Exit Ticket and Independent Study
**Time:** 03:35-03:45

**On-slide:**
- Which DAC approach are you most ready to simulate and why?
- Which non-ideality could dominate the ideal LSB error?
- Bring a simulation plan with controlled variables next week

**Independent study:** Finish the topology comparison and prepare a DAC simulation matrix with at least three resolutions, two timing cases and two noise/tolerance cases. Keep the circuit topology and output range controlled.

**Criteria mapping:** LO3.P5 and LO3.M4 strengthened; D3 simulation study prepared.