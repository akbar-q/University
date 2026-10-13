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
- Present a pill-sensor trace with bounce or a missed short pulse.
- Ask learners to predict the PLC count and downstream actuator behaviour.

**2. Reconnect LO1 to LO2 (5 min)**
- Reuse the selected PLC, sensor, I/O map, and load assumptions from Weeks 1-4.
- Explain that hardware selection and signal processing must agree.

**3. Session outcomes and evidence (5 min)**
- Show signal chain, scan, filtering, scaling, troubleshooting, and lab-record goals.
- Explain that this session prepares the demonstration evidence but does not replace the P3/P4 communication topics.

### Signal path and digital processing | 00:15-01:05

**4. From physical event to PLC variable (12 min)**
- Trace sensor target -> electrical output -> cable/terminal -> input circuit -> process image/task -> logic -> output circuit -> load.
- Mark voltage/current compatibility, isolation, filtering, and diagnostics.

**5. Typical scan and response timeline (13 min)**
- Explain input acquisition, logic execution, output update, communications, and variable monitoring.
- Qualify the diagram: some PLCs use tasks, interrupts, remote I/O updates, or immediate access; consult the exact manual.
- Compare input pulse duration with filter and update timing.

**6. Debounce and edge detection (12 min)**
- Distinguish contact debounce/filtering from rising-edge one-shot logic.
- Show why a held-high input should not repeatedly count and why bounce can create false counts.
- Configure a hypothetical filter only after checking sensor pulse width and required count rate.

**7. High-speed pulse capture and count integrity (13 min)**
- Explain high-speed counter/capture inputs, maximum frequency, pulse width, input filter, and event buffering.
- Work through a maximum-rate example with stated assumptions.
- Identify when standard cyclic logic may miss events and what verification test should be run.

### Analogue, noise, diagnosis | 01:05-01:40

**8. Analogue signals and scaling (10 min)**
- Introduce 0-10 V and 4-20 mA sensor signals, ADC conversion, raw value, engineering range, scaling, and update time.
- Use a hypothetical example and label all ranges; explain resolution versus accuracy.

**9. Signal integrity and wiring practice (15 min)**
- Explore EMI, common/ground issues, long cables, routing near power wiring, loose terminals, inductive loads, and poor shielding.
- Mitigate with suitable cable, routing/separation, isolation, input filter, correctly applied shield/bonding, and suppression per manufacturer/site rules.
- Avoid universal shield termination advice; follow the equipment documentation and plant EMC design.

**10. First-line troubleshooting flow (10 min)**
- Check supply/wiring -> field device indicator -> terminal signal -> PLC channel/LED -> variable/tag -> logic/filter -> output channel -> load.
- Record expected and observed values at each boundary.
- Do not force outputs or bypass safety devices on live equipment without authorised safe procedure.

### Break | 01:40-01:50

### Wiring and guided test | 01:50-02:35

**11. Read the MedPack wiring diagram (10 min)**
- Trace Start, Reset, E-stop status feedback, pill sensor, actuator, and buzzer against the I/O table.
- Mark 24 V DC/common only where the chosen hardware confirms it.
- Identify the independent safety circuit; standard PLC monitoring is not the sole E-stop function.

**12. Map terminals to program tags (15 min)**
- Demonstrate address/tag mapping, normal state, input polarity, output load, and comments.
- Confirm the wiring diagram, PLC project, and I/O schedule agree.
- Use the actual CPU/module configuration; do not reuse sample addresses without verification.

**13. Demonstrate the normal operating cycle (10 min)**
- Start the process, generate individual sensor events, observe count and status, reach target, trigger actuator/buzzer response, and reset.
- Show online monitoring and explain the PLC state change at each step.

**14. Observe, measure, and explain (10 min)**
- Learners compare physical/terminal/PLC/program/output status.
- Ask them to explain where a discrepancy first appears and what that narrows down.

### Fault simulation and lab record | 02:35-03:15

**15. Fault case A: sensor chatter or stuck input (20 min)**
- Safely simulate chatter or stuck-high/low behaviour in software/training rig.
- Predict expected event count, observe the response, apply/adjust filtering or edge logic, then repeat the test.
- Record test conditions, expected result, observed result, diagnosis, correction, and retest.

**16. Fault case B: E-stop and output response (20 min)**
- Demonstrate the safe training setup's E-stop action and verify motion/output response according to the safety design.
- Show PLC status indication and buzzer/fault handling separately from the safety function.
- Discuss reset/restart permissives and why an HMI/standard PLC must not bypass safety.

### Debrief and exit | 03:15-03:30

**17. Lab-record quality review (7 min)**
- Check date, setup/version, wiring/I/O map, test steps, expected/observed results, fault, corrective action, and retest evidence.

**18. Exit ticket: diagnose the first boundary (8 min)**
- Given a signal mismatch, identify the first test point and one likely cause.
- State one filter benefit and one possible downside.

## Evidence and assessment link

- Wiring diagram and I/O table match actual PLC tags.
- Normal operation is demonstrated with live/simulated values.
- At least one safe fault simulation and troubleshooting sequence is recorded.
- Lab record contains expected/observed results and retest.
- Noise and signal-integrity mitigations are explained in context.
- These activities support LO2, while Weeks 6-8 directly teach and evidence P3, P4, M2, M3, and D2.

## Between-session task

Submit a dated lab-record entry and one annotated timing/wiring diagram. Bring a link/protocol example from the selected PLC manual for Week 6.