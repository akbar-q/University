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
- Claim: “more memory means faster.” Answer: false; memory capacity and execution/response performance are different specifications with different units and purposes.
- Claim: “a relay output handles any load.” Answer: false; contact ratings depend on AC/DC, load category, inrush, switching frequency, life, channel/group limits, and suppression.
- Claim: “the fastest scan time always wins.” Answer: false; MedPack performance depends on the full sensor-to-output path and required pulse capture, not one headline number.
- Learners mark true/false/depends; accept “depends” only when they name the exact missing condition or manual field.
**Image prompt:** Original technical teaching illustration of three crossed-out misconceptions represented by a memory chip, relay contact, and timing trace beside a pill counter, no text, labels, numbers, or logos.

**2. Revisit the three candidate PLCs (5 min)**
- Put the Week 2 three-manufacturer matrix beside the Week 1 MedPack I/O list; identify which input/output claims still lack exact-model evidence.
- Typical gaps to check are pill-sensor pulse width and event rate, input filter/counter capability, actuator supply/inrush, output load category, and module power limits.
- Choose two gaps by consequence, not convenience; record the official manual or device datasheet needed to close each one.
- Debrief: an unknown that could make the design incompatible remains a shortlist gate, not a low weighted score.
**Image prompt:** Original workshop tabletop showing three generic PLC manuals beside an I/O schedule, with two blank evidence tabs pointing to a sensor input and an actuator output, no text, labels, numbers, or logos.

**3. Specification-to-application chain (5 min)**
- Teach the chain: application requirement -> exact specification field -> consequence if it fails -> verification source/test.
- Worked hypothetical: a sensor pulse shorter than a configured input filter may not be registered; compare documented pulse width, filter behaviour, and supported capture mode.
- Ask learners to finish: “If the output group limit is exceeded, the consequence is ___ and the field to verify is ___.” Expected: overload/derating risk; group current and installation conditions.
- Debrief: a number without units, operating conditions, model identity, and a MedPack consequence is not a usable selection argument.
**Image prompt:** Original technical diagram linking a pill-sensor requirement to a PLC manual specification field, a potential missed count, and a verification test setup through four visual stages, no text, labels, numbers, or logos.

### Operational characteristics | 00:15-01:05

**4. PLC scan and response timing (12 min)**
- In a common cyclic model, the controller samples inputs, executes logic, updates outputs, then repeats; task scheduling, interrupts, remote I/O, and process-image rules vary by CPU/configuration.
- Scan time is execution-cycle duration; task period is a scheduled interval; I/O refresh is data-transfer timing; end-to-end response includes sensor, input filter/update, logic, output update, and load response.
- Draw the MedPack path from pill crossing sensor to output interface energising; mark each delay and show that a long input filter can dominate a fast logic scan.
- Worked hypothetical timing: if input filtering, task wait, and output update are each nonzero, total response is their combined path; use actual manual/configuration values before claiming a response time.
**Image prompt:** Original accurate timing diagram illustration with a pill crossing an optical sensor, PLC input sampling, logic execution, output transition, and actuator movement represented by aligned traces without scales or text, no labels, numbers, or logos.

**5. Speed and pulse-event capture (13 min)**
- Compare exact manual fields: high-speed-counter/capture channel availability, maximum documented input frequency, minimum pulse width, input filter settings, task timing, remote-I/O update, and output switching limits.
- Pulse frequency sets event spacing, while pulse width sets how long the signal remains true; either can prevent ordinary sampled input logic from seeing every pill event.
- Clearly hypothetical example: at 20 Hz, events are 50 ms apart; a hypothetical 5 ms pulse filtered for 8 ms may be lost. These are teaching values, not MedPack or product ratings.
- Expected judgement: use a documented high-speed input/counter if the verified sensor signal exceeds normal input capability, then test missed/double counts at worst-case rate.
**Image prompt:** Original technical illustration of pills creating narrow optical sensor pulses entering both a standard PLC input path and a high-speed counter path, with distinct waveform shapes but no scales, labels, numbers, or logos.

**6. Voltage and current compatibility (12 min)**
- Read exact fields for CPU/module supply range, digital-input ON/OFF thresholds and input current, output voltage/current, per-point and group limits, isolation, wiring/common arrangement, and temperature derating.
- For a load, record nominal supply, steady current, inrush/pull-in current, load type, switching frequency, suppression requirement, fuse/protection, and power-supply capacity.
- Clearly hypothetical example: a 24 V DC actuator coil draws 0.4 A steady and 1.2 A at pull-in; a hypothetical channel marked 1.0 A would fail the pull-in check even before group limits and inductive-load guidance are considered.
- Debrief: do not approve from steady current alone; use actual load and exact module manuals, including ambient-temperature and wiring conditions.
**Image prompt:** Original engineering close-up of a technician comparing a generic actuator coil datasheet to a PLC output module, with separate visual cues for steady draw, inrush, wiring protection, and heat, no text, labels, numbers, or logos.

**7. Memory, retention, environment, and lifecycle (13 min)**
- Program memory stores control instructions; work/data memory supports runtime values; retentive memory preserves selected values through defined power conditions; removable storage and event logs are separate capabilities.
- MedPack question: should a partial pill count survive power loss, be discarded, or require reconciliation? The quality/process owner must define the policy before configuring retention.
- Check documented ambient range, vibration/shock, EMC, enclosure requirements, firmware support/lifecycle, backup/restore method, and replacement availability for the exact equipment.
- Misconception: “retentive” does not guarantee every value survives every power-loss duration or battery condition; verify retention rules and test recovery.
**Image prompt:** Original technical illustration of a PLC memory module beside a pill-count process paused after power loss, with a technician performing a controlled restore and environmental enclosure details, no text, labels, numbers, or logos.

### Module principles | 01:05-01:40

**8. Relay outputs (10 min)**
- A relay output switches a load through mechanical contacts; verify the exact module’s AC/DC ratings, load category, minimum load, contact life, switching frequency, isolation, and per-point/group limits.
- Inductive actuator coils can create high turn-off voltage and inrush; follow the manufacturer’s suppression and wiring guidance and assess how suppression affects release time.
- Case: MedPack’s actuator electrical details are unknown, so a relay output is only a candidate until the load datasheet and module ratings match under actual conditions.
- An interposing relay/contactor may provide an appropriate interface or load capacity, but it adds contacts, wiring, space, and its own ratings to verify.
**Image prompt:** Original cutaway illustration of a PLC mechanical relay contact switching an inductive actuator coil with a correctly placed suppression component and separate load supply, no text, labels, numbers, or logos.

**9. Triac and transistor outputs (15 min)**
- Triac outputs are semiconductor AC switches; check off-state leakage, minimum load, current/voltage limits, switching behaviour, and load compatibility. They are generally unsuitable for DC loads.
- Transistor outputs switch DC electronically; verify sourcing/sinking polarity, common wiring, leakage, per-channel/group limits, switching frequency, and whether the exact channel supports pulse output.
- MedPack example: a DC buzzer or actuator may suit a transistor interface only if its supply, current, inrush, polarity, and inductive behaviour match; an AC load requires an appropriate AC-rated interface.
- Expected comparison: relay offers mechanical isolation/contact behaviour, triac suits specified AC switching, and transistor supports suitable DC/high-speed service; no type is universally “best.”
**Image prompt:** Original side-by-side technical cutaway of a mechanical relay contact, AC triac switch, and DC transistor output driving distinct representative loads, with accurate terminal paths and no text, labels, numbers, or logos.

**10. Analogue input modules and ADC (10 min)**
- An analogue input conditions a voltage/current signal and an ADC converts it to a digital representation; configuration maps the raw range to engineering units and may apply filtering.
- Resolution is the smallest digital step; accuracy is closeness to the true value; repeatability is consistency; total uncertainty also includes sensor, wiring, conversion, and calibration effects.
- Clearly hypothetical scale: a 4-20 mA instrument representing 0-100 units would map 12 mA to 50 units using linear scaling; this is an example, not a specified MedPack instrument.
- Direction check: ADC converts analogue input to digital data; DAC/analogue output converts controller data to an analogue command.
**Image prompt:** Original technical diagram of an analogue transmitter feeding an isolated PLC input through signal conditioning and an ADC, with a smooth sensor curve becoming discrete sample steps and no text, labels, numbers, or logos.

### Break | 01:40-01:50

### Datasheets and module matching | 01:50-02:35

**11. Read the electrical ratings table (10 min)**
- Locate the exact module table and capture part number, manual revision/date, supply, signal thresholds, per-channel and group limits, load category, isolation, derating, wiring, and terminal/common details.
- Trace one MedPack candidate actuator output from the table to the device datasheet; confirm both steady/inrush conditions and any inductive suppression notes.
- Activity: students cite the exact page/table and explain one limitation in their own words, such as a group-current cap that is lower than the sum of point ratings.
- Debrief: do not transfer a rating from a similar module, product family, or different temperature condition.
**Image prompt:** Original macro technical scene of a magnifying glass over a generic PLC module electrical rating table, with adjacent module terminals and a device datasheet represented without legible writing, no text, labels, numbers, or logos.

**12. Select an output interface for stated loads (15 min)**
- Case A, infrequent AC load: consider a suitably rated relay or triac module only after AC load category, current, switching, leakage/minimum load, and protection checks.
- Case B, frequent DC switching or fast DC pulses: consider an appropriately rated transistor output; verify pulse capability, source/sink wiring, frequency, load current, and thermal/group limits.
- Case C, load exceeds any candidate channel or group limit: reject direct drive and engineer a correctly rated external interface; recheck coil/load protection and fault behaviour.
- Learners justify a module type for each case; expected debrief is conditional, because actual supply, current/inrush, frequency, environment, and manual limits determine the final interface.
**Image prompt:** Original engineering decision illustration showing three distinct loads connected through candidate relay, triac, transistor, and external driver paths, with a clearly oversized load routed away from direct PLC output, no text, labels, numbers, or logos.

**13. Select an analogue input for an instrument (10 min)**
- Compare sensor output type/range and wiring against the exact PLC input’s configurable ranges, input impedance/burden, resolution, accuracy, isolation, update time, and channel wiring.
- Clearly hypothetical calculation: for a 4-20 mA instrument scaled 0-100 units, 12 mA is halfway through span, so the value is 50 units; state the linearity and range assumptions.
- 0-10 V wiring may be more sensitive to voltage drop/noise over a long route; 4-20 mA can help identify a low-current wire fault, but actual diagnostics depend on transmitter and input configuration.
- Expected conclusion: choose only after checking sensor compatibility, accuracy budget, cable conditions, fault detection, update rate, and whether MedPack needs that measurement at all.
**Image prompt:** Original accurate wiring illustration comparing a voltage sensor and a two-wire current-loop instrument connected to separate PLC analogue input channels, with a long noisy cable route shown as a risk, no text, labels, numbers, or logos.

**14. Expansion and system architecture (10 min)**
- Count required local points and any confirmed remote devices; add future points separately so current need is not confused with optional expansion.
- Check exact CPU/module compatibility, permitted module order, backplane/bus limits, power-supply capacity, network node/connection limits, mounting space, and firmware compatibility.
- Add any required high-speed input, output interface, or analogue module to the MedPack block diagram only when a documented need exists.
- Debrief: spare capacity needs a reason such as defined expansion or service replacement; arbitrary spare percentages are not a substitute for a justified design.
**Image prompt:** Original technical block diagram of a compact PLC system expanded with one compatible I/O module and a remote sensor island, showing power and network paths separately and a reserved blank expansion position, no text, labels, numbers, or logos.

### Compatibility workshop | 02:35-03:15

**15. Candidate-by-candidate compatibility audit (20 min)**
- Teams test each of the three exact candidates against mandatory sensor input type/pulse needs, digital I/O count, actuator/buzzer output compatibility, safety boundary, supply, environment, communications, and expansion needs.
- Record PASS only with exact-model evidence, FAIL when a sourced requirement conflicts, and UNKNOWN when either side lacks evidence; cite source/page for every decision.
- Example: unknown sensor pulse width plus no documented counter limit is UNKNOWN, not PASS; a documented output current below verified load demand is FAIL for direct drive.
- Debrief: hard-gate failures cannot be averaged away; a redesign/interface may address a failure, but its cost and added risks must be evaluated.
**Image prompt:** Original engineering audit table scene with three generic PLC candidates assessed beside pill sensor and actuator documents, using green check, red cross, and amber question symbols without words or numbers, no logos.

**16. Datasheet evidence clinic (20 min)**
- Exchange one numeric or capability claim and locate the exact part number, manual revision, and supporting page/table; partners verify context and operating conditions.
- Resolution is not accuracy; a smaller quantisation step does not prove a more accurate measurement without total-error evidence.
- Scan time is not end-to-end response; a relay current headline is not a load-category approval; per-point current is not automatically available simultaneously across a group.
- Debrief with a corrected claim that states the actual field, consequence for MedPack, and remaining uncertainty or test needed.
**Image prompt:** Original peer evidence-clinic scene with students comparing a PLC manual, a waveform, a relay contact, and an analogue scale using a magnifier, with all document text abstracted, no labels, numbers, or logos.

### Revision and exit | 03:15-03:30

**17. Update the P2 comparison matrix (7 min)**
- Add model-specific timing/counter fields, voltage/current limits, memory/retention, environment, and module/expansion details with citations or explicit UNKNOWN status.
- Link each row to MedPack: sensor capture affects count integrity; output limits affect actuator interface; retention affects power-loss recovery; lifecycle/support affects maintainability.
- Identify the feature that currently matters most and state the evidence threshold needed to compare candidates fairly.
- Expected result: no unsupported values remain, and new unknowns are assigned a source or owner for follow-up.
**Image prompt:** Original updated comparison matrix beside a pill-counting station, with highlighted sensor timing, output load, memory retention, and module rows represented by color blocks rather than text, no labels, numbers, or logos.

**18. Exit ticket: compatibility judgement (8 min)**
- Given a sensor’s documented output type/pulse limits and a load’s supply/current/inrush, compare those values with the exact CPU/input/output module tables and installation conditions.
- State PASS, FAIL, or UNKNOWN for each interface, cite the evidence field/page, and name any external driver, protection, safety review, or test still required.
- Example answer form: “UNKNOWN: sensor pulse width is below the ordinary-input filter setting shown in the manual; verify a supported high-speed input and test worst-case count rate.”
- Misconception to avoid: compatible nominal voltage alone does not prove correct pulse capture, load switching, or safety performance.
**Image prompt:** Original technical assessment illustration of a pill sensor and actuator datasheet being checked against an exact generic PLC input and output module, with an unresolved compatibility question shown by an amber symbol, no text, labels, numbers, or logos.

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