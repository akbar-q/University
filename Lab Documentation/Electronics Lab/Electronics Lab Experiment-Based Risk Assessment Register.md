# Electronics Lab Experiment-Based Risk Assessment Register

This document provides an experiment-based Electronics Lab risk assessment register using the format: **SL.NO**, **Experiment / Practical Title**, **ID**, **Activity/Hazard Source**, **Potential Risks / Hazards**, **Risk Level**, **Control Measures / Mitigation**, and **Residual Risk**.

## 1. BJT Amplifier Experiments

| SL.NO | Experiment / Practical Title | ID | Activity/Hazard Source | Potential Risks / Hazards | Risk Level | Control Measures / Mitigation | Residual Risk |
|---|---|---:|---|---|---|---|---|
| 1 | CE Amplifier | 1 | Wrong transistor pinout, bias resistor placement, or supply polarity | Transistor overheating, component failure, smoking components | High | Verify transistor pin configuration and supply polarity before power-on; use low current limit for first energisation | Low |
| 1 | CE Amplifier | 2 | Probe slip or rewiring on live biased circuit | Short circuit, damaged components, minor burn at hot resistor or transistor | Medium | Isolate supply before circuit changes; keep oscilloscope and function generator leads stable during live measurements | Low |
| 2 | BJT Voltage Amplifier | 3 | Incorrect bias point or collector resistor selection | Excess transistor dissipation, distorted results, hot resistors | Medium | Confirm design values before build; check collector current against component ratings | Low |
| 3 | BJT Current Amplifier | 4 | Excessive base drive or low load resistance | Overcurrent, transistor heating, damaged load | Medium | Start with calculated resistor values; limit supply current and monitor transistor temperature | Low |
| 4 | No Feedback BJT Amplifier | 5 | High open-loop gain with poor stability margin | Unexpected oscillation, clipped output, misleading measurements | Medium | Keep leads short; confirm wiring against circuit diagram; increase signal amplitude gradually | Low |
| 5 | Series Feedback BJT Amplifier | 6 | Feedback network connected with wrong polarity or wrong resistor values | Increased gain instead of stabilisation, overheating, distorted output | Medium | Check feedback path direction before energisation; verify resistor values with meter where needed | Low |
| 6 | Shunt Feedback BJT Amplifier | 7 | Misconnection of shunt network around active stage | Input loading, unstable operation, component stress | Medium | Build and inspect feedback network carefully; test at low input level first | Low |

## 2. Power and Multistage Amplifier Experiments

| SL.NO | Experiment / Practical Title | ID | Activity/Hazard Source | Potential Risks / Hazards | Risk Level | Control Measures / Mitigation | Residual Risk |
|---|---|---:|---|---|---|---|---|
| 1 | Class A Amplifier | 1 | Sustained transistor conduction and resistor dissipation | Hot transistor, hot load resistor, burns from touched components | High | Use correct bias and load values; do not touch transistor or power resistor during or just after operation; allow cooling time | Low |
| 2 | Class B Amplifier | 2 | Wrong complementary device wiring or bias arrangement | Cross-conduction, rapid heating, supply overload | High | Verify transistor orientation and bias network before power-on; use current-limited supply for initial test | Low |
| 3 | Two-Stage Darlington Amplifier | 3 | Very high current gain with wiring or load error | Thermal runaway, unexpectedly high current, component failure | High | Keep input signal low at first; verify load resistance and supply current limit before energisation | Low |
| 4 | BJT as Power Indicator | 4 | Incorrect LED polarity, missing series resistor, or wrong switching connection | LED failure, transistor overheating, false indication state | Medium | Confirm resistor value and device polarity before power-on; test with low supply voltage first | Low |

## 3. Op-Amp Amplifier Experiments

| SL.NO | Experiment / Practical Title | ID | Activity/Hazard Source | Potential Risks / Hazards | Risk Level | Control Measures / Mitigation | Residual Risk |
|---|---|---:|---|---|---|---|---|
| 1 | Op-Amp Inverting Amplifier | 1 | Swapped input, feedback, or reference connections | Saturated output, misleading readings, possible component stress | Medium | Confirm pinout and feedback path before power-on; start with low input amplitude | Low |
| 2 | Op-Amp Non-Inverting Amplifier | 2 | Excessive input amplitude or incorrect gain-setting resistors | Output clipping, unstable readings, downstream overload | Medium | Set function generator to minimum practical amplitude first; verify resistor ratios before test | Low |
| 3 | Summing Op-Amp Amplifier | 3 | Multiple signal source grounds and inputs connected incorrectly | Grounding error, distorted output, source loading | Medium | Share a common reference intentionally; check each input path separately before combined operation | Low |
| 4 | General Op-Amp Amplifier Work | 4 | Reversed dual-supply rails or missing common ground | IC damage, overheating, failed experiment | High | Confirm supply rails and common ground before inserting or powering the IC; use current limiting where available | Low |

## 4. Oscillator and Modulation Experiments

| SL.NO | Experiment / Practical Title | ID | Activity/Hazard Source | Potential Risks / Hazards | Risk Level | Control Measures / Mitigation | Residual Risk |
|---|---|---:|---|---|---|---|---|
| 1 | Wien Bridge Oscillator with BJT | 1 | Incorrect feedback or amplitude-setting arrangement | No control of output amplitude, transistor overheating, distorted waveform | Medium | Verify feedback network and biasing before power-on; monitor transistor temperature during setup | Low |
| 2 | Wien Bridge Oscillator with Op-Amp | 2 | Wrong positive/negative feedback path or supply connection | Saturated output, failed oscillation, IC stress | Medium | Check the feedback branches carefully and start with correct low-voltage supply rails | Low |
| 3 | RC Phase Shift Oscillator with BJT | 3 | Incorrect RC ladder or transistor bias | Excessive gain demand, unstable operation, overheating | Medium | Confirm capacitor and resistor sequence before energisation; keep supply current limited | Low |
| 4 | RC Phase Shift Oscillator with Op-Amp | 4 | Rewiring RC network while powered | Short circuit, IC damage, misleading results | Medium | Power down before altering RC stages; verify each stage against the schematic before restart | Low |
| 5 | Modulation and Demodulation using NE555 or BJT | 5 | Incorrect carrier/modulating signal level, polarity, or timing capacitor installation | Overdriven waveform, hot components, capacitor damage, wrong output interpretation | Medium | Start with low signal levels; verify capacitor polarity and transistor orientation; inspect output on oscilloscope before extending the test | Low |

## 5. Rectifier and Regulated Power Supply Experiments

| SL.NO | Experiment / Practical Title | ID | Activity/Hazard Source | Potential Risks / Hazards | Risk Level | Control Measures / Mitigation | Residual Risk |
|---|---|---:|---|---|---|---|---|
| 1 | Half-Wave Transformer Source Rectifier | 1 | Wrong diode orientation or accidental use of non-approved source instead of isolated transformer output | Short circuit, overheated diode, unsafe energisation | High | Use only the approved isolated transformer source; verify diode orientation before power-on | Low |
| 2 | Full-Wave Rectifier | 2 | Incorrect centre-tap or diode wiring | Transformer overload, hot components, fuse operation | High | Check the circuit against the exact full-wave topology before energisation; use low current limit where possible | Low |
| 3 | Bridge Rectifier | 3 | AC and DC terminals interchanged on bridge connection | Immediate short circuit, component failure, hot wiring | High | Identify bridge pins clearly before wiring; have the build checked before first power-on | Low |
| 4 | Zener-Based Power Supply | 4 | Wrong zener orientation or undersized series resistor | Zener overheating, resistor overheating, unstable output | Medium | Confirm zener polarity and resistor wattage; measure output carefully on first energisation | Low |
| 5 | LM7805-Based Power Supply | 5 | High input-output voltage drop without thermal control | Regulator overheating, shutdown, burn hazard on package | Medium | Keep input voltage within design limits; fit suitable heat sinking where required; avoid touching regulator during operation | Low |
| 6 | LM317-Based Power Supply | 6 | Incorrect adjust network or output setting | Overvoltage to load, regulator overheating, damaged downstream circuit | High | Verify the adjustment resistor network before connection to load; set and confirm output with no load first | Low |
| 7 | Power Supply with or without Bulk Filtering Capacitor | 7 | Reversed electrolytic capacitor or charged capacitor retained after power-off | Capacitor rupture, electrolyte venting, stored-energy discharge | High | Confirm capacitor polarity and voltage rating; discharge bulk capacitors safely before handling or rewiring | Low |

## 6. Digital Logic Circuit Experiments

| SL.NO | Experiment / Practical Title | ID | Activity/Hazard Source | Potential Risks / Hazards | Risk Level | Control Measures / Mitigation | Residual Risk |
|---|---|---:|---|---|---|---|---|
| 1 | Asynchronous Counter | 1 | Wrong IC orientation, clock wiring, or supply connection | IC damage, non-functioning counter, repeated live rewiring | Medium | Check pin 1 orientation and supply rails before power-on; isolate power before wiring changes | Low |
| 2 | Synchronous Counter | 2 | Incorrect common clock or reset wiring | Unexpected state changes, false results, component stress from wiring errors | Medium | Verify clock and reset paths before energisation; test one stage at a time if faults appear | Low |
| 3 | Printer Error Indicator | 3 | Miswired logic outputs, indicators, or transistor driver stage | LED or logic IC damage, false status display | Medium | Confirm truth table and output loading arrangement before energisation; use suitable current-limiting resistors | Low |
| 4 | Multiplexer | 4 | Wrong select-line or enable connection | Invalid switching behaviour, misleading measurements | Low | Verify enable and select inputs systematically; avoid changing wiring while powered | Low |
| 5 | Demultiplexer | 5 | Output load connected incorrectly | Overcurrent on output pin, damaged IC, false routing result | Medium | Confirm destination load current is within IC limits; buffer outputs where needed | Low |
| 6 | Encoder | 6 | Floating inputs or direct switch bounce during testing | Unstable outputs, confusing readings, unnecessary live adjustments | Low | Use defined logic levels and debounced switching where required; keep wiring tidy | Low |
| 7 | Decoder | 7 | Incorrect output loading or wiring to indicators | Overloaded outputs, hot resistors, failed display logic | Medium | Use proper current limiting on LEDs and check the output truth table before full test | Low |

## 7. Microcontroller Interfacing and Drive Experiments

| SL.NO | Experiment / Practical Title | ID | Activity/Hazard Source | Potential Risks / Hazards | Risk Level | Control Measures / Mitigation | Residual Risk |
|---|---|---:|---|---|---|---|---|
| 1 | Half-Bridge Motor Drive | 1 | Inductive load switching, reverse EMF, or wrong transistor sequencing | Driver failure, hot components, uncontrolled motion | High | Use proper flyback protection and verified switching logic; test at reduced voltage first | Low |
| 2 | Full-Bridge Motor Drive | 2 | Shoot-through caused by wrong code or wiring | High current surge, driver overheating, supply trip, damaged motor driver | High | Enforce dead time where required; verify the bridge state table before applying full supply | Low |
| 3 | Two Motor Control | 3 | Simultaneous motion with loose leads or unsecured mechanism | Tangled wiring, moving parts contact, unstable test rig | Medium | Secure motors and route leads away from shafts; test one channel first before simultaneous operation | Low |
| 4 | Four Motor Control | 4 | Combined stall current and multiple moving axes | Overloaded power source, hot drivers, unexpected movement in several directions | High | Calculate worst-case current before test; use staged startup and emergency stop access | Low |
| 5 | Ultrasonic Sensor Interfacing | 5 | Sensor-based control used without safe separation from moving hardware | Collision, false triggering, unexpected actuation | Medium | Validate sensing range with motion disabled first; keep people clear during active tests | Low |
| 6 | Servo Motor Interfacing | 6 | Sudden sweep to commanded position at startup | Pinch, strike, trapped fingers, linkage damage | Medium | Keep hands clear during power-up; initialise servo position safely in code before enabling motion | Low |
| 7 | LED Interfacing | 7 | Missing current-limiting resistor or wrong polarity | LED damage, hot resistor, damaged GPIO pin | Low | Confirm resistor value and polarity before upload and power-on | Low |
| 8 | Button Interfacing | 8 | Wrong pull-up or pull-down arrangement causing repeated live debugging | False triggering, short circuits from wiring errors, misleading logic behaviour | Low | Verify input configuration in code and wiring before energisation; power down before rewiring | Low |
| 9 | Keypad Interfacing | 9 | Miswired matrix connections or shorts across rows and columns | Non-functioning keypad, stressed I/O pins, repeated troubleshooting under power | Low | Check matrix wiring systematically and isolate power before pin changes | Low |
| 10 | LCD Display Interfacing | 10 | Wrong pin order, contrast setting, or supply connection | Damaged display, hot regulator pin, false display results | Medium | Confirm display pinout and supply voltage before connection; adjust contrast carefully | Low |
| 11 | Temperature Sensor Interfacing | 11 | Sensor misconnection or poor isolation from heated test items | Damaged sensor, false readings, unsafe control decision based on bad data | Low | Verify pinout and measurement range; keep sensor away from surfaces outside its rating | Low |

## 8. Embedded Systems, Robotics, and Mechatronics Project Work

| SL.NO | Experiment / Practical Title | ID | Activity/Hazard Source | Potential Risks / Hazards | Risk Level | Control Measures / Mitigation | Residual Risk |
|---|---|---:|---|---|---|---|---|
| 1 | Embedded System Project Work | 1 | Open-ended integration, live code changes, and custom wiring | Unexpected outputs, short circuits, moving hardware starting without warning | High | Carry out staged testing; review wiring and code before energisation; keep a clear emergency isolation method available | Low |
| 2 | Linear Motor Control for Hydraulic Actuators | 2 | Linear actuator force up to about 150 N and pressurised hydraulic movement | Crush injury, pinch points, hose leak, burst, fluid spray, equipment damage | High | Exclude hands from actuator travel; inspect hoses and fittings before operation; test with barriers and controlled force limits; stop immediately on any leak or abnormal sound | Medium |
| 3 | ESP32 Robotic Arm with MG998 Servos, with or without Sensor | 3 | High-torque servo motion and programming error | Finger pinch, impact injury, struck workpiece, unstable power causing erratic motion | High | Keep clear of arm sweep zone; secure the base firmly; power servos from a suitable supply; test code at reduced speed and range first | Medium |
| 4 | LEGO EV3 Pick-and-Place Robot, with or without Sensor | 4 | Moving gripper and mobile platform during demonstrations | Pinch at gripper, trapped fingers, collision with nearby items or people | Medium | Define a clear operating area; keep observers outside the movement path; test gripper closure force before full operation | Low |
| 5 | Online and Offline Programming in Arduino IDE and MATLAB | 5 | Uploading unverified code to connected live hardware | Unexpected motor start, sudden actuator motion, invalid control output | High | Upload new code with actuators unloaded or disabled where possible; use safe startup states and dry-run checks before full enable | Low |

## 9. Additional Similar Experiments to Add If Present

These are not confirmed as present. They are suggested for inclusion if used in the Electronics Lab.

| SL.NO | Experiment / Practical Title | ID | Activity/Hazard Source | Potential Risks / Hazards | Risk Level | Control Measures / Mitigation | Residual Risk |
|---|---|---:|---|---|---|---|---|
| A1 | Emitter Follower / Buffer Amplifier | 1 | Wiring error around transistor bias and load | Hot transistor, wrong output level, failed experiment | Medium | Verify transistor orientation and emitter resistor value before power-on | Low |
| A2 | Differential Amplifier using BJT or Op-Amp | 2 | Mismatched inputs or supply rails connected incorrectly | Output saturation, component stress, misleading measurements | Medium | Confirm supply rails, common reference, and matched input conditions before test | Low |
| A3 | Active Filter using Op-Amp | 3 | Incorrect component values or op-amp supply connection | Wrong frequency response, unstable behaviour, IC damage | Medium | Check capacitor values and supply arrangement before energisation; test with low amplitude input | Low |
| A4 | 555 Astable or Monostable Timing Circuit | 4 | Wrong capacitor polarity or output load connection | Hot IC, failed timing response, damaged output stage | Medium | Confirm timing component polarity and output load limits before power-on | Low |
| A5 | ADC/DAC or Serial Communication Interfacing | 5 | Voltage-level mismatch between modules | Damaged microcontroller pins or peripheral interface | Medium | Verify logic levels and common ground before connection; avoid hot-plugging uncertain modules | Low |

## Final Requirement

This register is an Electronics Lab experiment-based risk assessment summary and should be used alongside the Electronics Lab equipment risk assessment register, SOPs, supervision arrangements, and local institutional controls.