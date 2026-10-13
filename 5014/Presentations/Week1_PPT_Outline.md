# Week 1 Presentation Outline - Analogue and Digital Information
## LO3 foundations: representation, limitations, and signal-chain choices

**Session length:** 3 hours 45 minutes including a 10-minute break (225 minutes).
**Criteria:** LO3.P4; introduces P5.
**Main outcome:** each student can compare analogue and digital representation for a real signal and produce an initial converter requirement.

## Run of Show

| Time | Slides | Activity |
| --- | --- | --- |
| 00:00-00:10 | 1-2 | Welcome, diagnostic and outcomes |
| 00:10-00:55 | 3-6 | Taught concepts and worked signal-chain example |
| 00:55-01:20 | 7-8 | Guided calculations and misconception check |
| 01:20-01:30 | - | Break |
| 01:30-02:25 | 10-12 | Analogue/digital comparison workshop |
| 02:25-03:10 | 13-14 | Application and converter requirements activity |
| 03:10-03:35 | 15 | Evidence clinic and peer check |
| 03:35-03:45 | 16 | Exit ticket and independent study |

---

## Slide 1 - Unit and Week 1: What Does a Converter Preserve?
**Time:** 00:00-00:05

**On-slide:**
- LO3: assess conversion between analogue and digital formats
- Today: what is represented, what is lost, and what must be measured?
- Case signal: a slowly changing temperature measurement

**Speaker notes:** Ask students to give one analogue and one digital representation they use. Preview that the unit is not a list of ADC/DAC names: converter choice must follow signal requirements and evidence.

## Slide 2 - Starting Point and Success Criteria
**Time:** 00:05-00:10

**On-slide:**
- By the end: compare analogue vs digital limits using a real application
- Identify range, bandwidth, resolution, accuracy, linearity, drift and noise
- State an initial sampling and input-range requirement

**Speaker notes / prompt:** Quick diagnostic: “If an ADC has more bits, is the measurement necessarily more accurate?” Take two answers, record the competing claims, and revisit them in the exit ticket.

## Slide 3 - Signal, Information, and Measurement Chain
**Time:** 00:10-00:20

**On-slide:**
- Physical quantity -> sensor -> analogue voltage/current -> conditioning
- ADC -> digital code -> processing/storage/communication
- Optional reverse path: DAC -> reconstruction/filter -> physical output
- Every stage has range, bandwidth, noise and failure limits

**Speaker notes:** Distinguish the physical quantity from its electrical representation and from the stored number. Have students identify where sensor calibration, grounding and units enter the chain. Emphasise that a numerical value without calibration metadata may be precise-looking but misleading.

## Slide 4 - Analogue and Digital Are Different Representations
**Time:** 00:20-00:32

**On-slide:**
- Analogue: continuous amplitude in time (within real circuit limits)
- Digital: sampled in time, quantised in amplitude, encoded as bits
- Sampling interval sets time resolution; code width sets amplitude resolution
- Digital storage is robust to small noise only while logic margins are maintained

**Speaker notes:** Sketch a sine wave, sampled points, and quantised steps. Ask students to point to sampling error versus quantisation error. Clarify that “digital is noise-free” is false: acquisition, clocking, references, interfaces and reconstruction remain physical.

## Slide 5 - What Can Degrade the Information?
**Time:** 00:32-00:44

**On-slide:**
- Amplitude range: clipping, saturation and unused codes
- Frequency range: bandwidth, sampling, aliasing and filtering
- Accuracy/resolution: code step is not total measurement uncertainty
- Linearity, drift, noise and SNR affect whether changes are believable

**Speaker notes:** Define each term briefly, then connect each to a design consequence. For analogue: component tolerances, ageing, interference and storage degradation. For digital: quantisation, finite range, sampling, conversion errors and corrupted data. Contrast repeatability with accuracy.

## Slide 6 - Worked Example: 10-bit ADC Range
**Time:** 00:44-00:55

**On-slide:**
- Example: 0-5.00 V input, 10-bit codes 0...1023
- Ideal LSB = 5.00 V / 1024 = 4.88 mV
- A 2.00 V signal uses about 410 codes
- Sensor error, reference error and noise remain in addition to quantisation

**Speaker notes:** Work the example slowly and state the code convention. Ask students to calculate the ideal code at 2.00 V and the ideal voltage represented by code 410. Note endpoint/transfer-function conventions differ; datasheets determine the exact model.

## Slide 7 - Frequency and Sampling: Why Nyquist Is Not the Whole Answer
**Time:** 00:55-01:07

**On-slide:**
- Band-limited signal: sample rate must exceed twice the highest frequency component
- Aliasing makes out-of-band content appear as false low-frequency content
- Analogue anti-alias filter precedes the ADC
- Practical systems need transition-band margin and adequate filter attenuation

**Speaker notes:** Draw a 7 Hz sine sampled at 10 samples/s and describe how a false lower-frequency pattern can result. Students should not treat the Nyquist limit as a recommended exact operating point. Link sensor bandwidth and noise bandwidth to sample rate.

## Slide 8 - Mini Exercise: Diagnose the Capture Setup
**Time:** 01:07-01:20

**On-slide:**
- Sensor signal: 0.2-2.8 V, useful bandwidth 0-18 Hz
- ADC: 0-3.3 V, 12-bit, configured for 40 samples/s
- Identify range, sampling, filtering, resolution and uncertainty risks

**Speaker notes / activity:** Pairs get 7 minutes to mark the setup and 6 minutes to report. Expected points: range nominally fits but headroom/noise peaks matter; Nyquist minimum is 36 samples/s so 40 has little margin; anti-alias filter required; ideal LSB is about 0.806 mV; 12-bit nominal resolution does not establish absolute accuracy. Ask what evidence is still missing.

## Slide 9 - Break
**Time:** 01:20-01:30

**On-slide:** Stretch break. Leave the signal-chain diagram visible for the return activity.

## Slide 10 - Workshop Brief: Compare Two Capture Strategies
**Time:** 01:30-01:40

**On-slide:**
- Scenario: monitor temperature and detect a slow over-temperature trend
- Strategy A: analogue threshold/indicator and analogue recording
- Strategy B: sensor -> ADC -> MCU logging and digital threshold
- Deliverable: evidence-based comparison, not a winner by slogan

**Speaker notes:** Form groups of 3-4. Assign roles: signal-chain mapper, evidence checker, calculation lead and reporter. Give each group a blank matrix with the P4 criteria. Students may make explicit assumptions but must label them.

## Slide 11 - Build the P4 Comparison Matrix
**Time:** 01:40-02:05

**On-slide:**
- Rows: amplitude range, frequency range, accuracy, resolution, linearity
- Add: drift, noise/SNR, storage, processing and failure/recovery
- Columns: analogue path, digital path, application consequence
- Mark each claim as measured, datasheet-backed or assumed

**Activity steps:**
1. Draw each signal path and label likely error sources.
2. Compare what can be filtered, calibrated, copied, compressed or reconstructed.
3. Explain one case where analogue is advantageous and one where digital is advantageous.
4. Record at least two trade-offs and one unresolved requirement.

**Tutor prompts:** “What happens after power loss?” “Can you recover the original waveform from sparse samples?” “Does averaging remove drift?”

## Slide 12 - Report Back: Turn Comparison into Assessment
**Time:** 02:05-02:25

**On-slide:**
- Claim -> mechanism -> consequence -> evidence
- Avoid “analogue is noisy” / “digital is accurate” without conditions
- Tie the limitation to the required signal and operating environment

**Speaker notes:** Invite two groups with contrasting conclusions. Correct misconceptions: resolution is quantisation granularity; accuracy includes multiple errors; digital processing can reduce some noise but cannot recover information already clipped or aliased. Groups revise one weak claim into an assessable paragraph.

## Slide 13 - From Application to Converter Requirements
**Time:** 02:25-02:50

**On-slide:**
- Define measurand, sensor output range and source impedance
- Define bandwidth and event/update-rate need
- Set allowable error/noise and environmental conditions
- Add ADC range, resolution, sample rate, interface and power

**Activity:** Students convert the temperature scenario into a first-pass requirements table. Include a measurement range, sample/update rate, allowed error target, ADC input limits, calibration method and evidence source. Mark values as given, derived or still to confirm.

**Speaker notes:** Keep students from selecting a part too early. The converter requirement comes from signal and system needs. Flag that the LO4 hardware project will later use a thermistor divider feeding a selected ADC.

## Slide 14 - Worked Requirement Check
**Time:** 02:50-03:10

**On-slide:**
- If sensor output is 0-1.0 V and ADC range is 0-3.3 V, what is the headroom?
- If sensor bandwidth is 5 Hz, what is the Nyquist minimum?
- What additional margin/filter evidence should be required?

**Speaker notes:** Solve with the class: range has unused headroom but still needs fault/noise allowance; Nyquist minimum is 10 samples/s, but practical sampling should include margin; specify an anti-alias strategy. Invite an alternate answer and ask what assumption differs.

## Slide 15 - Evidence Clinic: P4 Quality Check
**Time:** 03:10-03:35

**On-slide:**
- All required characteristics addressed?
- Analogue and digital both evaluated?
- Application consequences and evidence sources stated?
- Resolution distinguished from accuracy?

**Activity:** Peer-review the matrix using four checks above. Each reviewer leaves one specific technical correction and one question that requires evidence. Tutor samples work and identifies one strong comparison for group discussion.

## Slide 16 - Exit Ticket and Independent Study
**Time:** 03:35-03:45

**On-slide:**
- One advantage and one limitation of digital capture for your scenario
- State one ADC requirement and how you derived it
- Bring one converter datasheet example next week

**Independent study:** Finish the P4 comparison, label assumptions, and find one commercial ADC datasheet. Record input range, resolution, sample rate, accuracy/noise specification, interface and source link.

**Criteria mapping:** LO3.P4 evidence initiated; P5 requirements prepared.