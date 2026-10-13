# Week 3 PPT Outline: PLC Operational Specifications and I/O Modules

**Unit/LO:** 5009, LO1  
**Focus:** Interpret operational characteristics and select compatible PLC interfaces  
**Criterion:** LO1.P2  
**Duration:** 3 hours 30 minutes (210 minutes, including a 10-minute break)  
**Scenario:** MedPack pill sensor, actuator, buzzer, and possible future instrumentation

## Session outcomes

Students will interpret speed, voltage/current, memory, environmental and expansion data; understand relay, triac, transistor, and analogue-to-digital modules; and use this evidence to improve their Week 2 manufacturer matrix.

## Resources

Week 2 comparison matrices; current PLC hardware manuals; sample sensor and load datasheets; calculator; module-selection worksheet; timing diagram; and example I/O wiring diagrams.

## Run sheet

| Time | Slides | Segment | Duration |
|---|---:|---|---:|
| 00:00-00:15 | 1-3 | Retrieval and specification questions | 15 min |
| 00:15-01:05 | 4-7 | Speed, electrical, memory, and environment | 50 min |
| 01:05-01:40 | 8-10 | Output and analogue module principles | 35 min |
| 01:40-01:50 | - | Break | 10 min |
| 01:50-02:35 | 11-14 | Datasheet interpretation and module matching | 45 min |
| 02:35-03:15 | 15-16 | Applied compatibility workshop | 40 min |
| 03:15-03:30 | 17-18 | Matrix revision and exit | 15 min |
| **Total** | **18 slides** |  | **210 min** |

## Slide-by-slide outline

### Retrieval | 00:00-00:15

**1. Specification myth-buster (5 min)**
- Present claims such as "more memory means faster," "relay output handles any load," and "highest scan speed always wins."
- Learners mark true/false/depends and justify the "depends" cases.

**2. Revisit the three candidate PLCs (5 min)**
- Display Week 2 matrices and identify missing electrical/performance evidence.
- Select two gaps to investigate during the session.

**3. Specification-to-application chain (5 min)**
- Frame every number as requirement -> specification -> system consequence -> verification.

### Operational characteristics | 00:15-01:05

**4. PLC scan and response timing (12 min)**
- Explain a typical input update, logic execution, output update, and communications sequence; note exact behaviour differs by architecture/configuration.
- Distinguish scan time, task period, I/O refresh, and end-to-end response time.
- Use a timing diagram for sensor transition to actuator output.

**5. Speed and pulse-event capture (13 min)**
- Compare CPU performance, worst-case/task timing, high-speed counter frequency, input filter, remote-I/O update, and output switching limits.
- Relate these to pill pulse width and maximum event rate; test whether normal input scanning can reliably see each event.
- Explain that a high-speed counter or capture input may be required if pulses are too short/fast.

**6. Voltage and current compatibility (12 min)**
- Read PLC supply range, digital input thresholds/current, output voltage/current, per-point/group limits, isolation, and temperature derating.
- Include load inrush, inductive loads, wiring/common arrangements, fusing, and power budgeting.
- Worked example: compare a hypothetical actuator coil nameplate and relay-module rating; list all missing assumptions before approval.

**7. Memory, retention, environment, and lifecycle (13 min)**
- Distinguish program memory, data/work memory, retentive memory, removable storage, and event logging.
- Check ambient temperature, vibration, EMC, enclosure, firmware lifecycle, backup/restore, and replacement availability.
- Decide what count/state should survive power loss and what reset policy applies.

### Module principles | 01:05-01:40

**8. Relay outputs (10 min)**
- Mechanical contacts; AC/DC use only within stated ratings; contact life, switching frequency, isolation details, and load category.
- Check inductive inrush and suppression guidance; a nameplate current rating alone is insufficient.
- Discuss when an interposing relay/contactor is appropriate.

**9. Triac and transistor outputs (15 min)**
- Triac: AC switching, leakage current, minimum load and off-state behaviour; generally not for DC loads.
- Transistor: DC switching, source/sink polarity, leakage, channel/group limits, and high-speed capability where rated.
- Compare switching rate, life, electrical compatibility, and likely interface for a buzzer/actuator.

**10. Analogue input modules and ADC (10 min)**
- Explain sensor signal conditioning, analogue-to-digital conversion, raw count, configured range, scaling, filtering, update time, and isolation.
- Contrast resolution with accuracy, repeatability, and total measurement uncertainty.
- Identify ADC input versus DAC/analogue output direction.

### Break | 01:40-01:50

### Datasheets and module matching | 01:50-02:35

**11. Read the electrical ratings table (10 min)**
- Locate operating conditions, per-channel/group ratings, load type, isolation, derating, and wiring limits in an official manual.
- Students cite page/table and record the exact part number and document revision.

**12. Select an output interface for stated loads (15 min)**
- Four cases: infrequent AC load, frequent DC switching, fast DC pulse output, and a load above a candidate channel rating.
- Match relay/triac/transistor/external interface and state required safeguards.
- Make clear no module choice is valid until supply, current, inrush, frequency, and environment are verified.

**13. Select an analogue input for an instrument (10 min)**
- Compare a 0-10 V device with a 4-20 mA device and the candidate module's configured range.
- Calculate engineering-unit scaling from a clearly supplied hypothetical range.
- Discuss wire fault clues, resolution, accuracy, update rate, and isolation.

**14. Expansion and system architecture (10 min)**
- Count local and remote I/O; check compatible expansion, module order, power capacity, network nodes, and spare capacity rationale.
- Add required modules and interfaces to the MedPack block diagram.

### Compatibility workshop | 02:35-03:15

**15. Candidate-by-candidate compatibility audit (20 min)**
- Teams audit all three PLC candidates against mandatory I/O and electrical requirements.
- Use pass/fail/unknown; a failed mandatory voltage/current/safety requirement cannot be hidden in a weighted average.

**16. Datasheet evidence clinic (20 min)**
- Teams exchange one claim and locate the supporting manual page.
- Correct false equivalences: resolution/accuracy, scan time/response, relay rating/load category, and output current/usable group current.

### Revision and exit | 03:15-03:30

**17. Update the P2 comparison matrix (7 min)**
- Add speed, voltage/current, memory, and module details with citations or mark unknown.
- Identify which candidate feature matters most to the station and why.

**18. Exit ticket: compatibility judgement (8 min)**
- Given one sensor and one load specification, state whether a candidate PLC is compatible, what evidence supports the judgement, and what still needs checking.

## Evidence and criterion map

| Evidence produced | P2 relevance |
|---|---|
| Updated comparison matrix | Compares operating features using model-specific evidence |
| Module compatibility worksheet | Shows relay/triac/transistor/ADC interface understanding |
| Datasheet citations | Supports current, voltage, speed, memory, expansion, and module claims |
| Compatibility audit | Demonstrates practical fit to the MedPack I/O and load requirements |

**P2 emphasis:** technical specifications must be comparable and application-linked; reliability is evaluated through evidence such as ratings, diagnostics, lifecycle and support, not unsupported claims.

## Between-session task

Finish the compatibility audit and prepare a one-page requirements-versus-candidate table. Bring one preferred PLC and one runner-up, but keep the final decision open until the Week 4 evaluation.