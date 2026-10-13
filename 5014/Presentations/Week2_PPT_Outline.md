# Week 2 Presentation Outline - ADC Topologies and Requirements
## LO3: specify ADC characteristics and evaluate conversion approaches

**Session length:** 3 hours 45 minutes including a 10-minute break (225 minutes).
**Criteria:** LO3.P5, LO3.M4.
**Main outcome:** each student specifies and justifies an ADC approach for a defined measurement task using calculations and datasheet evidence.

## Run of Show

| Time | Slides | Activity |
| --- | --- | --- |
| 00:00-00:10 | 1-2 | Retrieval check and outcomes |
| 00:10-00:55 | 3-6 | ADC principles and topology teaching |
| 00:55-01:20 | 7-8 | Topology comparison and worked specification |
| 01:20-01:30 | - | Break |
| 01:30-02:25 | 10-12 | ADC topology comparison workshop |
| 02:25-03:10 | 13-14 | Datasheet and selection activity |
| 03:10-03:35 | 15 | Evidence clinic |
| 03:35-03:45 | 16 | Exit ticket and independent study |

---

## Slide 1 - Week 2: Which ADC Fits the Signal?
**Time:** 00:00-00:05

**On-slide:**
- ADC converts sampled analogue input into digital codes
- Topology affects speed, resolution, latency, complexity, power and noise
- Selection starts with application requirements

**Speaker notes:** Reconnect to last week's signal-chain matrix. Explain that a converter cannot compensate for wrong sensor range, poor grounding or aliasing. Today's outcome is a defensible specification and topology choice.

## Slide 2 - Retrieval Check
**Time:** 00:05-00:10

**On-slide:**
- Define quantisation step for an ideal N-bit ADC
- What does Nyquist tell us, and what does it not guarantee?
- Name two errors beyond quantisation

**Speaker notes:** Students answer individually, then compare with a partner. Expected: step is approximately full-scale range / 2^N; Nyquist lower bound for band-limited signals, not filter/accuracy guarantee; reference error, offset/gain, INL/DNL, noise, drift and source impedance are examples.

## Slide 3 - ADC Conversion Sequence
**Time:** 00:10-00:20

**On-slide:**
- Input conditioning -> sample/hold -> quantiser/encoder -> code/interface
- Define aperture, acquisition time, conversion time and data latency
- ADC input must remain within electrical limits at all times

**Speaker notes:** Use a block diagram. Separate analog input sampling time from conversion time and readout latency. Highlight source impedance and sample capacitor settling: a source may be within voltage limits but still fail to settle accurately.

## Slide 4 - Single-Ramp / Counter-Ramp ADC
**Time:** 00:20-00:32

**On-slide:**
- Compare input against a generated ramp or counted DAC level
- Conversion time varies with input level for a single-slope method
- Simple concept; accuracy depends on ramp/reference/timebase and comparator
- Slow conversion and drift limit many applications

**Speaker notes:** Draw ramp, input level, comparator crossing and timer count. Contrast conversion-time dependence with fixed-cycle approaches. Ask where a ramp converter might still be useful: low-speed instruments and teaching demonstrations.

## Slide 5 - Successive Approximation (SAR)
**Time:** 00:32-00:44

**On-slide:**
- Internal DAC and comparator perform a binary search
- About N decision steps for N bits, subject to acquisition/timing details
- Good balance of speed, resolution, power and cost
- Input settling and reference quality still constrain accuracy

**Speaker notes:** Work a 4-bit conversion of 0.70 V on a 1 V range. Show trial bits and compare each trial voltage to input. Distinguish a SAR ADC from a DAC topology: its internal DAC participates in conversion but does not make SAR a general DAC architecture.

## Slide 6 - Flash / Parallel Comparator ADC
**Time:** 00:44-00:55

**On-slide:**
- 2^N - 1 comparators estimate code in parallel
- Very fast conversion and low latency
- Comparator count, area, power and matching cost grow rapidly with resolution
- Common where bandwidth/speed dominate cost and power

**Speaker notes:** For 3 bits, count seven threshold comparators. Explain thermometer code and encoder. Invite students to predict why flash is practical at modest bit depth but rarely a high-resolution low-power solution.

## Slide 7 - Sigma-Delta ADC
**Time:** 00:55-01:07

**On-slide:**
- Oversampling and noise shaping move quantisation noise out of band
- Digital filtering/decimation produces lower-rate output words
- Strong resolution/noise performance over chosen bandwidth
- Latency, settling and bandwidth matter for fast events

**Speaker notes:** Explain the loop concept with a simple integrator/quantiser feedback diagram, avoiding excessive circuit detail. Clarify that sigma-delta and delta-sigma are commonly alternate names for the same broad family. Discuss why a slow temperature channel and fast transient channel may prefer different converters.

## Slide 8 - ADC Specification: Example Need
**Time:** 01:07-01:20

**On-slide:**
- Measure 0-2.5 V sensor output, useful bandwidth 0-5 Hz
- Update display at least 2 times/s; detect a sustained threshold crossing
- Maximum conversion-related contribution: 5 mV (example budget)
- List required range, resolution, rate, latency, error, interface and power

**Speaker notes:** Guide a worked budget: ideal step for 10 bits over 2.5 V is about 2.44 mV; this leaves limited margin for total converter errors if 5 mV is the budget. Discuss oversampling only when noise, correlation and filtering assumptions permit it.

## Slide 9 - Break
**Time:** 01:20-01:30

**On-slide:** Stretch break. Leave the specification checklist visible.

## Slide 10 - Workshop: Compare Four ADC Topologies
**Time:** 01:30-01:40

**On-slide:**
- Teams: single-ramp, SAR, flash and sigma-delta
- Compare speed, resolution, latency, complexity, power, noise and cost
- Use a distinct application example for each

**Speaker notes:** Assign one topology per group to investigate first, then create mixed groups to teach each other. Use the same criteria and example signal so comparisons are fair. They may consult supplied notes/datasheets, but should label generic architecture claims separately from specific device claims.

## Slide 11 - Topology Evidence Matrix
**Time:** 01:40-02:05

**On-slide:**
- For each topology: mechanism, strengths, limitations, application fit
- Add one datasheet example where a commercial device is available
- Record latency and bandwidth, not just “fast” or “slow”
- Separate architecture properties from implementation-specific specifications

**Activity steps:**
1. Complete the topology table.
2. Mark which one suits slow temperature logging, which suits high-speed capture, and why.
3. Identify one case where the initial choice would fail a requirement.
4. Write a short M4 comparison paragraph using claim -> evidence -> application consequence.

## Slide 12 - Jigsaw Review and Challenge Questions
**Time:** 02:05-02:25

**On-slide:**
- Which topology has variable conversion time?
- Which topology trades hardware scale for extreme speed?
- Which architecture offers good low-frequency noise performance but adds latency?
- Which common embedded application uses a SAR ADC?

**Speaker notes:** Ask mixed groups to defend their rankings. Correct oversimplifications: SAR time is typically bounded but not universally exactly N clocks; flash speed and latency depend on implementation; sigma-delta bandwidth/latency depend on digital filter and decimation settings.

## Slide 13 - Datasheet Scavenger Hunt
**Time:** 02:25-02:50

**On-slide:**
- Find: input range, reference, resolution, sample rate, conversion latency
- Find: offset/gain, INL/DNL, SNR/ENOB and operating conditions
- Find interface, supply/current and input-source requirements
- Capture page/table and distinguish typical from guaranteed values

**Activity:** Each student selects an official datasheet for a discrete ADC or controller ADC. Complete a one-page record with device, topology, supply, resolution, input range, sample rate, accuracy/noise evidence, interface and limitations. Cite the exact table/conditions.

## Slide 14 - Make a Requirements-Based Selection
**Time:** 02:50-03:10

**On-slide:**
- Reject candidates that fail hard limits first
- Rank remaining options by error, latency, power, complexity and cost
- State assumptions, margins and any external conditioning needed

**Speaker notes / activity:** Students apply a simple weighted matrix to the temperature example. For embedded MCU ADCs, investigate reference variation, input attenuation/range, effective resolution, source impedance and calibration. A headline bit count alone is not a decision.

## Slide 15 - Evidence Clinic: P5 and M4
**Time:** 03:10-03:35

**On-slide:**
- P5: are specifications numeric, sourced and tied to requirements?
- M4: are topology characteristics evaluated for real applications?
- Does evidence state operating conditions and limitations?

**Activity:** Peer review one datasheet selection and one topology comparison. Reviewer marks: met / gap / evidence needed. Tutor samples for unit mistakes and unsupported claims.

## Slide 16 - Exit Ticket and Independent Study
**Time:** 03:35-03:45

**On-slide:**
- Name the selected ADC/topology and two matched requirements
- Name its most consequential limitation for your application
- Bring one DAC example or data sheet next week

**Independent study:** Complete the P5 requirements-to-specification table and add a second candidate. Prepare a short source-backed note comparing SAR, flash and sigma-delta for one application.

**Criteria mapping:** LO3.P5 and LO3.M4 evidence initiated.