# Week 5 PPT Outline: PLC Signal Processing and Signal Integrity

**Unit/LO:** 5009, LO2  
**Focus:** How PLCs acquire, process, and act on signals from other devices  
**Assessment link:** LO2 foundations and Task 2 wiring, operation, fault-finding, and signal-integrity evidence  
**Duration:** 3 hours 30 minutes (210 minutes, including a 10-minute break)  
**Scenario:** MedPack pill sensor, operator controls, actuator, and buzzer

## Session outcomes

Students will trace digital and analogue signals through a PLC, explain scan/filter/edge behaviour, recognise pulse-loss and noise risks, and perform or simulate a documented normal/fault test.

## Resources

PLC simulator or safe training rig; MedPack I/O table and wiring diagram; multimeter demonstration where appropriate; sensor/load datasheets; lab-record template; and OpenPLC or equivalent monitoring tool.

## Run sheet

| Time | Slides | Segment | Duration |
|---|---:|---|---:|
| 00:00-00:15 | 1-3 | Scenario and outcomes | 15 min |
| 00:15-01:05 | 4-7 | Signal path, scan, filtering, and event capture | 50 min |
| 01:05-01:40 | 8-10 | Analogue signals, noise, and diagnosis | 35 min |
| 01:40-01:50 | - | Break | 10 min |
| 01:50-02:35 | 11-14 | Wiring and guided test | 45 min |
| 02:35-03:15 | 15-16 | Fault simulation and lab record | 40 min |
| 03:15-03:30 | 17-18 | Debrief and exit | 15 min |
| **Total** | **18 slides** |  | **210 min** |

## Slide-by-slide outline

### Scenario and outcomes | 00:00-00:15

**1. A false count can stop a production line (5 min)**
- A sensor pulse is the electrical representation of one detected pill; contact bounce or electrical noise can create extra transitions, while a pulse shorter than the input can register may be missed.
- Have learners follow a trace containing one clean event and one bouncing event; the expected count depends on the configured input filter, edge logic, and capture method, not on the drawing alone.
- In a clearly hypothetical case, a missed count leaves `PillCount` below target, so the PLC should not assert the target-reached request; verify the actual sequence and permissives in the project.
**Image prompt:** Original oscilloscope-style timing diagram showing a sensor voltage with one clean pulse, one bouncing pulse, and a PLC input-state trace below it; no labels or embedded text.

**2. Reconnect LO1 to LO2 (5 min)**
- Reopen the selected PLC CPU/module, sensor datasheet, I/O schedule, and load assumptions from Weeks 1-4; use those actual choices rather than inventing terminal addresses or voltage ratings.
- Trace the pill sensor from its specified output type and supply through the assigned input channel to the program tag used by the count logic.
- Check the design fit: the sensor's electrical output, module input type, filter capability, and expected event rate must all be compatible; a correct program cannot repair a mismatched electrical interface.
**Image prompt:** Original engineering desk scene with a PLC module, sensor datasheet, wiring plan, and highlighted signal path connected by a pencil line; no readable text or logos.

**3. Session outcomes and evidence (5 min)**
- By the end, learners should trace a field signal to a program value and output, explain scan/filter/edge effects, and select a suitable method for capturing fast events.
- Practical evidence is a normal-cycle check plus a controlled fault test with conditions, expected result, observed result, diagnosis, correction, and retest recorded.
- This session supports LO2 wiring, operation, fault-finding, and signal-integrity evidence; Week 6 separately develops the P3 communication-link/protocol comparison.
**Image prompt:** Clean original flow diagram linking sensor, PLC input, program state, PLC output, actuator, and a lab-record sheet with arrows but no text.

### Signal path and digital processing | 00:15-01:05

**4. From physical event to PLC variable (12 min)**
- Follow one MedPack pill event through target detection, sensor electrical output, cable and terminal, input channel, PLC task/process data, count logic, output channel, and actuator interface.
- Distinguish physical state from interpreted state: a sensor LED, module input LED, program tag, and output LED are separate observation points and may disagree when a fault lies between them.
- At each boundary verify the device/module documentation for signal type, rated range, common/reference, isolation, filter, and diagnostic behaviour; do not assume every input is 24 V DC.
**Image prompt:** Original cutaway-style signal-chain diagram showing a photoelectric sensor, terminal block, isolated PLC input circuit, program memory, output module, and relay interface; no labels or text.

**5. Typical scan and response timeline (13 min)**
- In a basic cyclic model, inputs are sampled, user logic executes, and outputs are updated; communications, task scheduling, and monitoring may run on separate or overlapping schedules.
- Real controllers may use periodic tasks, interrupts, remote-I/O update cycles, or immediate I/O instructions, so use the selected CPU and module manuals to interpret the timing diagram.
- In a hypothetical timing exercise, compare a 6 ms sensor pulse with a 10 ms task period and an input filter configured longer than the pulse; learners should predict a possible missed event, then identify what hardware documentation and test would settle it.
**Image prompt:** Original layered timing diagram with sensor pulse, input sampling instants, PLC task execution blocks, output update, and network refresh shown on aligned timelines; no text.

**6. Debounce and edge detection (12 min)**
- An input filter rejects or delays short transitions at the hardware/channel level; rising-edge logic detects a false-to-true transition in the program. They address related but different causes.
- A held-high sensor represents one transition, not repeated pills; a one-shot should count once until the input returns low, while bouncing can create multiple edges if not conditioned.
- Set filter time only after checking the sensor's minimum pulse width and maximum event rate; a filter that is too long can suppress valid MedPack events.
- Test procedure: apply one clean pulse, a held-high input, and a bouncing trace in simulation; expected observation is one count for one valid rising edge, with bounce behaviour matching the configured filter and logic.
**Image prompt:** Original paired timing traces comparing contact bounce before filtering, a debounced input, and a one-shot count pulse; no labels or text.

**7. High-speed pulse capture and count integrity (13 min)**
- High-speed counter or capture functions can register events independently of ordinary cyclic logic, but only on supported channels and within documented frequency, pulse-width, voltage, and filter limits.
- Clearly hypothetical example: at 40 events/s, consecutive events are 25 ms apart; a standard 10 ms task may observe transitions depending on phase and input update behaviour, so this arithmetic alone does not prove reliable capture.
- Check the actual PLC/module manual for maximum count rate, minimum on/off time, filter setting, and buffer/overflow behaviour; use the specified high-speed input when ordinary sampling cannot be shown to meet requirements.
- Verification procedure: generate a known pulse train below the documented limit, compare source and PLC totals over a fixed test interval, then repeat at the intended operating rate and inspect overflow/diagnostic status.
**Image prompt:** Original PLC high-speed counter block connected to a pulse generator and sensor, with a stable count trace beside a missed-sample trace; no text.

### Analogue, noise, diagnosis | 01:05-01:40

**8. Analogue signals and scaling (10 min)**
- Analogue modules convert an input voltage or current to a raw digital value; the raw range, resolution, conversion time, and fault indications are specific to the module and configuration.
- Clearly hypothetical linear example: a 4-20 mA transmitter represents 0-60 packs/min; 12 mA is halfway through the 16 mA span and therefore represents 30 packs/min if the transmitter and scaling are linear.
- Scaling maps raw counts/current to engineering units; resolution is the smallest represented increment, while accuracy also includes sensor, module, wiring, and calibration error.
- For a MedPack display, verify lower/upper range, units, underrange/overrange handling, and update time before treating a displayed value as a valid process measurement.
**Image prompt:** Original analogue signal diagram showing a 4-20 mA loop entering an ADC and a straight 0-60 packs-per-minute scaling line with a midpoint marker; no numbers, labels, or text.

**9. Signal integrity and wiring practice (15 min)**
- Noise can couple into sensor wiring through electromagnetic fields, shared impedance/reference paths, long cable runs, poor terminations, or switching inductive loads; symptoms may be intermittent counts or unstable analogue readings.
- On a MedPack panel drawing, route low-level sensor wiring separately from motor/contactor conductors where the installation rules require it, and inspect cable type, terminal tightness, grounding/reference, and load suppression against manufacturer instructions.
- Shield bonding is installation- and equipment-dependent; follow the PLC, sensor, and site EMC documentation rather than applying a universal one-end/both-ends rule.
- Debrief: a filter may reduce brief disturbances but can also hide valid short pulses; correct routing, compatible interfaces, sound terminations, and a measured diagnosis come first.
**Image prompt:** Original control-panel wiring photograph-style illustration with separated sensor and motor cable routes, a shielded sensor cable, terminal block, and inductive contactor load; no labels or text.

**10. First-line troubleshooting flow (10 min)**
- Procedure: confirm the safe test state and expected I/O map, then check supply and wiring, field-device indicator, terminal signal, input-channel indication, program tag, logic/filter, output-channel indication, and load in that order.
- At each boundary record the expected state/value beside the observed one; the first mismatch narrows the fault to the interval since the previous confirmed-good point.
- Example debrief: sensor LED changes but the PLC input LED does not, so investigate the cable, common/reference, terminal, channel configuration, and input circuit before editing count logic.
- Never force an output or bypass a safety device on live equipment; use an authorised, risk-assessed test procedure and suitable isolation.
**Image prompt:** Original technician's fault-finding path through a sensor, terminal, PLC input LED, software tag monitor, output module, and actuator, with a meter used at a safe test point; no text.

### Break | 01:40-01:50

### Wiring and guided test | 01:50-02:35

**11. Read the MedPack wiring diagram (10 min)**
- Procedure: use the selected wiring diagram and I/O table to trace Start, Reset, pill sensor, actuator command, buzzer, and any E-stop status feedback from device terminal to PLC channel/tag.
- Mark supply, common/reference, polarity, and output load type only after checking the selected sensor, CPU/module, and interface documentation; do not infer 24 V DC from a generic example.
- Expected observation: each documented field signal has one traceable terminal/channel/tag assignment, while the safety circuit and any status-only feedback are visibly distinguished.
- Ordinary HMI/SCADA or standard PLC logic must not be treated as the independent emergency-stop safety function; follow the training rig's safety design and local procedure.
**Image prompt:** Original annotated-style electrical schematic layout with start/reset devices, photoelectric sensor, PLC I/O, relay-driven actuator and buzzer, plus a visually separate safety circuit; no text or symbols that resemble labels.

**12. Map terminals to program tags (15 min)**
- Procedure: inspect the actual CPU, slot/module order, channel configuration, terminal numbers, and project hardware tree before assigning each physical point to a symbolic tag.
- For each MedPack input/output, record terminal, electrical type/polarity, normal state, tag name, logic use, and load/interface; distinguish a normally closed contact's healthy state from an asserted program bit.
- Cross-check the wiring diagram, I/O schedule, and downloaded project; expected result is a one-to-one documented mapping with no assumed sample addresses.
**Image prompt:** Original split-view diagram linking a PLC rack channel and terminal strip to a software tag table using matching colored signal paths, without visible characters or text.

**13. Demonstrate the normal operating cycle (10 min)**
- Procedure on the authorised simulator/training rig: confirm safe idle, issue Start, generate one pill-sensor event at a time, observe count and state, reach the configured target, inspect the actuator/buzzer request, then reset using the documented sequence.
- Expected observations: each valid event increments the count once; the target transition occurs at the configured value; outputs respond only when the program's permissives are true.
- Monitor the physical/module indication and program tags together, and pause at each transition to explain which input or condition changed the state.
**Image prompt:** Original training-rig scene with a pill sensor detecting individual sample tablets, PLC status LEDs, and an actuator indicator lamp during a cycle; no text or brand marks.

**14. Observe, measure, and explain (10 min)**
- Procedure: choose one sensor event and record its physical action, terminal-level signal, module indication, program tag, logic result, output indication, and load response in sequence.
- Use an approved meter or simulator monitor at the designated test points; compare like-for-like voltage/current/state values and avoid probing live circuits outside the authorised method.
- Expected debrief: if the terminal is correct but the channel/tag is not, inspect channel configuration or mapping; if the tag is correct but the output is not, inspect logic conditions and output assignment.
**Image prompt:** Original observation worksheet scene with a technician comparing a terminal meter reading, PLC input LED, software tag monitor, and output lamp; no text.

### Fault simulation and lab record | 02:35-03:15

**15. Fault case A: sensor chatter or stuck input (20 min)**
- Procedure: in simulation or the approved de-energised/training setup, select chatter, stuck-high, or stuck-low; record the initial filter/edge settings and predict the count/status before applying the fault.
- Apply the fault, observe sensor/channel/tag/count and any diagnostic, then identify the first point where behaviour differs from expectation; do not alter wiring on an energised rig unless the approved procedure allows it.
- Correct the cause using documented mapping, edge logic, filter, or sensor/wiring checks; repeat the same input sequence and compare before/after results.
- Expected debrief: chatter may create extra edges, a stuck-high may produce only one edge then no further counts, and stuck-low produces no event; final behaviour depends on the configured program and diagnostics.
**Image prompt:** Original fault-injection training diagram showing a simulated bouncing sensor input, a PLC trend monitor, and a before/after count trace; no embedded text.

**16. Fault case B: E-stop and output response (20 min)**
- Procedure: under the instructor's authorised rig procedure, verify the E-stop device and safety design before testing; actuate it and observe the designed safe response, then inspect standard PLC status feedback and alarm indication separately.
- Expected observation: the safety function reaches its specified safe state independently of ordinary HMI/SCADA availability; a standard PLC tag may report status but is not proof of a safety-rated action.
- Check reset and restart permissives: releasing/resetting the E-stop must not itself cause an unexpected automatic restart; follow the actual safety relay/controller documentation.
- Keep buzzer/fault handling distinct from the safety function, and never simulate by bypassing or defeating an E-stop circuit.
**Image prompt:** Original safety-training panel showing a mushroom emergency-stop actuator, separate safety relay path, standard PLC status input, and de-energised actuator interface; no text.

### Debrief and exit | 03:15-03:30

**17. Lab-record quality review (7 min)**
- Check the dated record identifies the rig/PLC configuration, project version, wiring diagram, I/O map, test conditions, and safe test method.
- Confirm each test has a reproducible procedure, predicted result, measured/observed result, diagnosis, corrective action, and retest outcome.
- Expected review finding: a screenshot or trend without setup, tag/address context, or expected-versus-observed comparison is not sufficient to reproduce the test.
**Image prompt:** Original close-up of a neat engineering lab notebook beside a PLC training rig and annotated signal trace, with blank pages and no readable text.

**18. Exit ticket: diagnose the first boundary (8 min)**
- Given a sensor LED that changes while the PLC input indication stays off, identify the terminal/channel boundary as the next check and give one plausible cause such as wiring, reference, configuration, or channel fault.
- State that input filtering can reject short unwanted transitions, but an excessive setting can suppress valid short pulses and delay response.
- Hand in one concise answer with the test point, expected observation, and evidence that would distinguish the likely causes.
**Image prompt:** Original simple diagnostic decision path beginning with a lit sensor indicator and an unlit PLC input indicator, ending at a terminal measurement point; no text.

## Evidence and assessment link

- Wiring diagram and I/O table match actual PLC tags.
- Normal operation is demonstrated with live/simulated values.
- At least one safe fault simulation and troubleshooting sequence is recorded.
- Lab record contains expected/observed results and retest.
- Noise and signal-integrity mitigations are explained in context.
- These activities support LO2, while Weeks 6-8 directly teach and evidence P3, P4, M2, M3, and D2.

## Between-session task

Submit a dated lab-record entry and one annotated timing/wiring diagram. Bring a link/protocol example from the selected PLC manual for Week 6.