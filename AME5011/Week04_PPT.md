# Week 4 - Power, Electronics and Autonomous Control

---

## Slide 1: A Safe Power Architecture

`Battery -> fuse -> master switch -> motor driver -> motor`

`Battery -> regulated supply -> controller, sensors, lights and buzzer`

- Calculate energy budget and peak/stall current separately.
- Keep motor power wiring physically separate from sensitive signal wiring where possible.

---

## Slide 2: Mission State Machine

`HOLD -> CLIMB -> TOP_DWELL -> DESCEND -> RELEASE -> STOP`

- Every state has entry conditions, outputs, timeout/fault response and an exit condition.
- The green light remains on throughout the run.
- TOP_DWELL energises red light and buzzer for the selected compliant duration.

---

## Slide 3: Controller Eligibility and Safety

- Vehicle logic must be authored and understood by the team.
- Confirm controller and purchased hardware eligibility with scrutineers before design freeze.
- Build a safe stop into the hardware and software design.
- Use position sensing that survives the actual pipe environment.

---

## Slide 4: Practical - Control Harness Baseline

- Build and inspect a fused low-voltage control/drive harness.
- Test indicator lights, buzzer, start, motor direction and safe stop independently.
- Implement and simulate the mission states before running on the full rig.

---

## Slide 5: Week 4 Evidence

- Schematic, wiring record and electrical inspection checklist.
- State diagram and code baseline.
- Battery, driver and fuse selection calculation.
