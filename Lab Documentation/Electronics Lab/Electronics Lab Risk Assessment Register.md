# Electronics Lab Risk Assessment Register

This document provides an Electronics Lab-specific risk assessment register using the format: **SL.NO**, **Equipment name**, **ID**, **Activity/Hazard Source**, **Potential Risks / Hazards**, **Risk Level**, **Control Measures / Mitigation**, and **Residual Risk**.

## 1. CRO Analog Display Oscilloscope

| SL.NO | Equipment name | ID | Activity/Hazard Source | Potential Risks / Hazards | Risk Level | Control Measures / Mitigation | Residual Risk |
|---|---|---:|---|---|---|---|---|
| 1 | CRO Analog Display Oscilloscope | 1 | Earth-referenced probe ground clip connected to wrong point | Short to earth, circuit damage, sparks, shock hazard | High | Identify circuit reference before connection; never assume probe ground is floating; supervise live measurements | Low |
| 1 | CRO Analog Display Oscilloscope | 2 | Exceeding probe or input voltage limits | Instrument damage, shock risk, unsafe failure | High | Check input rating and probe attenuation; do not connect to unknown high-energy points; verify limits before measurement | Low |
| 1 | CRO Analog Display Oscilloscope | 3 | Misinterpreting blank or unstable analog trace | False assumption that circuit is dead or safe | Medium | Confirm settings first; do not use oscilloscope as proof-of-dead instrument; verify by approved isolation methods | Low |
| 1 | CRO Analog Display Oscilloscope | 4 | Two channels grounded to different circuit points | Accidental short between test points | High | Remember both channel grounds are common; check reference arrangement before multi-channel use | Low |
| 1 | CRO Analog Display Oscilloscope | 5 | Opening the casing or internal access | Exposure to CRT and power-supply high voltage | High | Treat as sealed equipment; internal service only by authorised competent personnel | Low |
| 1 | CRO Analog Display Oscilloscope | 6 | Slipping probe on crowded live terminals | Short circuit, damaged PCB, minor arc event | Medium | Hold behind probe guards; isolate where access is poor; use stable hand position and tidy leads | Low |

## 2. Dual Channel Bench Power Supply

| SL.NO | Equipment name | ID | Activity/Hazard Source | Potential Risks / Hazards | Risk Level | Control Measures / Mitigation | Residual Risk |
|---|---|---:|---|---|---|---|---|
| 2 | Dual Channel Bench Power Supply | 1 | Current limit left too high from previous use | Component destruction, smoking resistors, capacitor rupture | High | Reset current control to low before every new circuit; verify safe current limit before energisation | Low |
| 2 | Dual Channel Bench Power Supply | 2 | No load switch, voltage adjusted live | Overvoltage applied to circuit unexpectedly | High | Start from lowest practical voltage; increase slowly while observing behaviour; verify settings before connection | Low |
| 2 | Dual Channel Bench Power Supply | 3 | Incorrect polarity connection | Reverse-bias damage to components, capacitor failure | High | Check output polarity and circuit polarity before power-on; do not rely on wire colour alone | Low |
| 2 | Dual Channel Bench Power Supply | 4 | Unexpected constant-current mode | Hidden short circuit or excessive load draw | Medium | Treat immediate CC mode as fault indicator; reduce or remove power and inspect instead of increasing current | Low |
| 2 | Dual Channel Bench Power Supply | 5 | Dual-channel series or linked mode error | Wrong voltage across circuit, unintended current path | Medium | Confirm channel arrangement before use; label outputs clearly during multi-channel setups | Low |
| 2 | Dual Channel Bench Power Supply | 6 | Faulty leads or loose terminals | Short circuit, intermittent heating, sparks | Medium | Inspect leads, terminals, and condition before use; remove damaged equipment from service | Low |

## 3. Function Generator

| SL.NO | Equipment name | ID | Activity/Hazard Source | Potential Risks / Hazards | Risk Level | Control Measures / Mitigation | Residual Risk |
|---|---|---:|---|---|---|---|---|
| 3 | Function Generator | 1 | Excessive output amplitude up to about 20 Vp | Overdriven circuit input, component damage, misleading test results | Medium | Start with minimum amplitude; confirm safe input limit of circuit; increase slowly | Low |
| 3 | Function Generator | 2 | No load switch, output changes live | Sudden signal changes affecting live circuit | Medium | Connect carefully; adjust one variable at a time; do not assume disconnected-safe state while leads are attached | Low |
| 3 | Function Generator | 3 | Wrong frequency range selected | Circuit overstress, wrong test condition, false results | Medium | Check selected range and live frequency counter together before applying signal | Low |
| 3 | Function Generator | 4 | Startup waveform distortion | Sensitive circuit upset, invalid test behaviour | Medium | Verify output stability first; check on oscilloscope where necessary before connection to sensitive circuit | Low |
| 3 | Function Generator | 5 | Poor button debounce causing skipped settings | Unintended mode or waveform change | Low | Confirm actual state after each button press; do not rely on quick repeated inputs | Low |
| 3 | Function Generator | 6 | Ground/reference misunderstanding with other instruments | Unintended short or reference loop | Medium | Understand shared grounds before simultaneous use with oscilloscope or other bench instruments | Low |

## Additional Equipment to Add If Present

These are not confirmed as present. They are suggested for inclusion if used in the Electronics Lab.

| SL.NO | Equipment name | ID | Activity/Hazard Source | Potential Risks / Hazards | Risk Level | Control Measures / Mitigation | Residual Risk |
|---|---|---:|---|---|---|---|---|
| A1 | Breadboard and Jumper Wire Assemblies | 1 | Dense temporary wiring and exposed conductors | Short circuits, miswiring, overheated components | Medium | Use tidy wiring; isolate power before changes; inspect before energisation | Low |
| A2 | Decade Resistance / Capacitance Boxes | 1 | Incorrect setting under live circuit conditions | Overcurrent, wrong operating point, component stress | Medium | Confirm range before connection; isolate where practical before adjustment | Low |
| A3 | Bench DC Motor / Demonstration Actuator | 1 | Unexpected rotation during testing | Pinch, thrown parts, entanglement of leads | Medium | Secure actuator; keep hands clear of motion; route leads away from moving parts | Low |
| A4 | Signal/Probe Leads and BNC Adapters | 1 | Loose adapters and exposed connectors | Intermittent faults, shorting, misleading readings | Low | Inspect connectors; remove damaged adapters; secure leads during testing | Low |

## Final Requirement

This register is an Electronics Lab risk assessment summary and should be used alongside the Electronics Lab SOPs, supervision arrangements, and local institutional controls.
