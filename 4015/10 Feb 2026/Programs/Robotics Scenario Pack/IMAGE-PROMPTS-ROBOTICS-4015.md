# 4015 – Image Generation Prompts (Robotics Programming Scenarios)

These prompts are designed to generate **clean, modern mechatronics training diagrams** in a consistent style for Unit 4015 robotics programming sessions.

**Global style requirements (apply to all prompts):**
- Clean **vector / infographic** style (not photorealistic)
- White background, blue/gray industrial palette
- Clear PLC I/O labels and signal arrows (left → right)
- Consistent icons for buttons, sensors, actuators, H-bridge blocks
- Modern sans-serif font, high legibility at A4 size
- Add branding text at the top-right corner: **University of Greater Manchester RAK**
- Output: **PNG 300 dpi** (and SVG if available)

**Negative prompt (apply to all prompts):**
- No photorealism, no 3D render style, no blurry text
- No cluttered wiring, no overlapping labels
- No watermarks or random logos (only the required top-right branding text is allowed)

---

## Prompt 1 — AND Gate: Motion Enable Permissive

Create a clean PLC training diagram showing an **AND logic gate** for robotics safety permissive on a 4-DOF excavator arm.

Include:
- Input A: `ESTOP_HEALTHY` (DI, tag `I0.2`)
- Input B: `GUARD_CLOSED` (DI, tag `I0.3`)
- Center AND gate labeled `AND`
- Output: `MOTION_ENABLE` (internal bit `M0.0`)
- A small block to the right: `All Axis Commands Enabled`

Add one callout box:
- “Arm motion allowed only if both safety inputs are TRUE.”

---

## Prompt 2 — OR Gate: Fault OR Timeout Alarm

Create a clean PLC training diagram showing an **OR logic gate** for an excavator arm alarm system.

Include:
- Input A: `FAULT_ACTIVE` (`M0.1`)
- Input B: `MOVE_TIMEOUT` (`M0.2`)
- Center OR gate labeled `OR`
- Output: `ALARM_CMD` driving `Q0.7` buzzer/lamp

Add a note:
- “Alarm activates if either fault or timeout is present.”

---

## Prompt 3 — XOR Gate: Opposite Direction Command Validation

Create a PLC training diagram showing an **XOR gate** for one actuator direction pair on a robotic arm.

Include:
- Input A: `CMD_EXTEND` (`I0.4`)
- Input B: `CMD_RETRACT` (`I0.5`)
- Center XOR gate labeled `XOR`
- Output: `DIR_VALID` (`M0.3`)
- Secondary small warning block: `CMD_CONFLICT = A AND B`

Add a mini truth table:
- 0 XOR 0 = 0
- 0 XOR 1 = 1
- 1 XOR 0 = 1
- 1 XOR 1 = 0

---

## Prompt 4 — Timer (TON): Debounced Command Input

Create a clean mechatronics PLC diagram showing command debounce using a **TON timer**.

Include:
- Raw input pushbutton `JOG_PB_RAW (I0.6)`
- TON block labeled `TON Debounce PT=200ms`
- Output bit `JOG_PB_VALID (M0.4)`
- Side annotation: `Ignore pulses < 200ms`

Layout style:
- Signal flow left to right, simple block diagram with one timing waveform below.

---

## Prompt 5 — Timer (TP): Fixed Jog Pulse Output

Create a PLC training diagram showing a **TP pulse timer** used for precise jog motion.

Include:
- Input: `JOG_EDGE` from `R_TRIG`
- TP block labeled `TP Jog Pulse PT=300ms`
- Output: `JOG_PULSE (M0.5)`
- Gating block with `MOTION_ENABLE`
- Final output block: `Axis Motor Command`

Add small waveform:
- Input edge pulse and corresponding 300 ms output pulse.

---

## Prompt 6 — Counter (CTU): Cycle Counter + Service Due Flag

Create a clean industrial infographic showing **CTU counting** for a robotic excavator cycle.

Include:
- Input pulse: `CYCLE_COMPLETE_EDGE`
- CTU block with `PV = 100`
- Display of `CV` count value
- Output flag `SERVICE_DUE` when `CV >= PV`
- Reset input `RESET_PB`

Add a simple callout:
- “Use for preventive maintenance scheduling.”

---

## Prompt 7 — Latch (Set/Reset): Auto-Run Hold Logic

Create a PLC ladder-style diagram for **Set/Reset latch** controlling auto-run mode.

Include:
- Set condition: `START_PB AND MOTION_ENABLE`
- Reset conditions in OR block: `STOP_PB OR FAULT_ACTIVE OR CYCLE_COMPLETE`
- Latched bit output: `AUTO_RUN (M0.6)`
- Small indicator lamp icon labeled `AUTO`

Style:
- Ladder-inspired rung style with clean symbols and readable tag names.

---

## Prompt 8 — 4-DOF Excavator Arm H-Bridge Mapping (8 control channels)

Create a professional mechatronics control diagram showing a **4-DOF excavator arm** with **8 H-bridge control channels** (2 per linear actuator axis).

Include and label exactly:
- Axis 1 Boom: `Q0.0 BOOM_A`, `Q0.1 BOOM_B`
- Axis 2 Stick: `Q0.2 STICK_A`, `Q0.3 STICK_B`
- Axis 3 Bucket: `Q0.4 BUCKET_A`, `Q0.5 BUCKET_B`
- Axis 4 Swing: `Q0.6 SWING_A`, `Q0.7 SWING_B`
- For each axis, show a note: `A and B must never be ON together`
- Show one interlock logic block reused for all axes:
  - `A_OUT = A_CMD AND NOT B_CMD AND MOTION_ENABLE`
  - `B_OUT = B_CMD AND NOT A_CMD AND MOTION_ENABLE`

Visual composition:
- PLC output block on left
- Four H-bridge driver blocks in center
- Simplified 4-DOF arm graphic on right

---

## Prompt 9 — Final Integrated Sequence: Dig-and-Dump Auto Cycle

Create a high-level control sequence diagram for a **4-DOF excavator arm automatic cycle**.

Include states in order with arrows:
1. `IDLE`
2. `REACH`
3. `DIG`
4. `LIFT`
5. `SWING_TO_DUMP`
6. `DUMP`
7. `RETURN_HOME`
8. `CYCLE_COMPLETE`

Also include side blocks for:
- Safety permissive (`AND` gate)
- Alarm logic (`OR` gate)
- Direction validity (`XOR` check)
- Timers (`TON/TP`)
- Counter (`CTU cycle count`)
- Latch (`AUTO_RUN`)

Add a fault path:
- Any timeout/conflict leads to `FAULT` state and disables all motion outputs.

Style requirement:
- Keep clear enough for teaching slides and student reports, with compact readable labels.
