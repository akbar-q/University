# 4015 – Robotics Mini Tasks Pack (Mechatronics Context)

This file lists small, manageable programming tasks students can implement in **OpenPLC Editor (Ladder)** while linking work directly to a **4-DOF excavator arm mechatronics cell**.

Tasks are ordered **easiest → hardest**.

Each task includes:
- Scenario link
- Core logic
- What to demonstrate
- OpenPLC implementation hints

---

## Task 1 — AND Gate: Motion Enable Permissive

**Scenario link:** Arm motion is only allowed when all safety conditions are healthy.

**Core logic:**
- `MOTION_ENABLE = ESTOP_HEALTHY AND GUARD_CLOSED`

**What to demonstrate:**
- If either input is false, no motor command can run.
- If both are true, motion commands are permitted.

**OpenPLC ladder hints:**
- Use two contacts in series (AND) to drive `MOTION_ENABLE` memory bit.
- Place `MOTION_ENABLE` as a master permissive contact in every motor output rung.

---

## Task 2 — OR Gate: Alarm Trigger on Fault OR Timeout

**Scenario link:** Operator must be alerted if either a fault appears or a move takes too long.

**Core logic:**
- `ALARM = FAULT_ACTIVE OR MOVE_TIMEOUT`

**What to demonstrate:**
- Alarm turns on for either condition independently.
- Alarm turns off only after fault/timeout clear and reset logic is applied.

**OpenPLC ladder hints:**
- Build OR using parallel contacts.
- Drive buzzer/lamp output directly or via `ALARM_CMD` internal bit.

---

## Task 3 — XOR Gate: Dual-Command Conflict Detection

**Scenario link:** A joystick or HMI should never command opposite directions at the same time.

**Core logic example (one axis):**
- `DIR_VALID = CMD_EXTEND XOR CMD_RETRACT`
- `DIR_CONFLICT = CMD_EXTEND AND CMD_RETRACT`

**What to demonstrate:**
- Exactly one command active → valid directional command.
- Both active together → conflict alarm.

**OpenPLC ladder hints:**
- If XOR function block is available, use it.
- Else implement: `(A AND NOT B) OR (NOT A AND B)`.
- Keep conflict detection rung separate for easy debugging.

---

## Task 4 — Timer (TON): Debounce/Anti-Chatter for Commands

**Scenario link:** Mechanical buttons or noisy signals can chatter and cause unstable motion starts.

**Core logic:**
- Command must stay ON for `200 ms` before becoming valid.

**What to demonstrate:**
- Short spikes do not move the actuator.
- Stable button press enables movement after delay.

**OpenPLC ladder hints:**
- Use `TON` with `PT = T#200ms`.
- Use `TON.Q` as filtered command (not raw input).

---

## Task 5 — Timer (TP): Fixed Jog Pulse for Precise Positioning

**Scenario link:** Operator taps a jog button; actuator should move for a short, repeatable pulse.

**Core logic:**
- Rising edge of `JOG_PB` triggers `TP` pulse of `300 ms`.

**What to demonstrate:**
- Each tap gives same travel increment.
- Holding button does not create continuous movement (if edge-gated).

**OpenPLC ladder hints:**
- Use `R_TRIG` then `TP`.
- Gate pulse with `MOTION_ENABLE`.

---

## Task 6 — Counter (CTU): Cycle and Maintenance Counter

**Scenario link:** Count completed excavation cycles for productivity and preventive maintenance.

**Core logic:**
- `CYCLE_COUNT` increments on rising edge of `CYCLE_COMPLETE`.
- When count reaches preset (e.g., `100`), set `SERVICE_DUE`.

**What to demonstrate:**
- Counter increments once per cycle only.
- Reset clears counter and service flag.

**OpenPLC ladder hints:**
- Use `R_TRIG` + `CTU`.
- Use CTU `Q` or compare `CV >= PV` to set service output.

---

## Task 7 — Latch (Set/Reset): Auto-Cycle Run Hold

**Scenario link:** Auto sequence must continue after start until stop/fault/complete.

**Core logic:**
- `AUTO_RUN` latched by `START_PB`.
- `AUTO_RUN` reset by `STOP_PB OR FAULT_ACTIVE OR CYCLE_COMPLETE`.

**What to demonstrate:**
- Start button can be momentary while cycle keeps running.
- Any reset condition drops auto mode safely.

**OpenPLC ladder hints:**
- Use explicit set/reset coils or seal-in logic with careful reset priority.
- Ensure reset rung has higher priority in scan logic.

---

## Task 8 — H-Bridge Interlock Logic per Linear Actuator (2-command pair)

**Scenario link:** Each actuator uses two control channels to H-bridge input pins; both channels must never be high simultaneously.

**4-DOF channel mapping (example):**
- `Q0.0` Boom Extend (`BOOM_A`)
- `Q0.1` Boom Retract (`BOOM_B`)
- `Q0.2` Stick Extend (`STICK_A`)
- `Q0.3` Stick Retract (`STICK_B`)
- `Q0.4` Bucket Curl (`BUCKET_A`)
- `Q0.5` Bucket Dump (`BUCKET_B`)
- `Q0.6` Swing Left (`SWING_A`)
- `Q0.7` Swing Right (`SWING_B`)

**Core logic pattern (repeat for each axis):**
- `AXIS_A_OUT = AXIS_A_CMD AND NOT AXIS_B_CMD AND MOTION_ENABLE`
- `AXIS_B_OUT = AXIS_B_CMD AND NOT AXIS_A_CMD AND MOTION_ENABLE`

**What to demonstrate:**
- Opposite direction command blocks safely.
- Only one direction output energises per axis.

**OpenPLC ladder hints:**
- Use mutual NC interlock contacts between pair outputs.
- Add optional 100–200 ms dead-time when reversing direction.

---

## Task 9 — Final Integrated Program: 4-DOF Excavator Arm Auto Sequence

**Scenario link:** Build a complete mechatronics sequence for a simple dig-and-dump demo cycle.

**Suggested sequence states:**
1. `IDLE`
2. `REACH` (boom/stick extend)
3. `DIG` (bucket curl pulse)
4. `LIFT` (boom retract)
5. `SWING_TO_DUMP`
6. `DUMP` (bucket dump pulse)
7. `RETURN_HOME`
8. `CYCLE_COMPLETE`

**Mandatory requirements:**
- Use logic gates where relevant (AND/OR/XOR checks in permissives and conflicts).
- Use timers (minimum two): one pulse timer and one timeout timer.
- Use counters: cycle count and/or fault count.
- Use latch: `AUTO_RUN` or equivalent run-hold bit.
- Enforce all H-bridge pair interlocks for all 4 DOF axes.

**What to demonstrate:**
- Complete cycle runs from Start and stops safely on Stop/E-stop.
- Any timeout/conflict sets fault and disables motion outputs.
- Reset returns to safe `IDLE`.

**OpenPLC ladder hints:**
- Implement as state bits or integer state variable.
- Keep one rung (or network) per state transition for readability.
- Keep all outputs derived from state + interlock permissives.

---

## Notes for delivery and evidence

- Use one OpenPLC project per task when teaching fundamentals.
- For the final task, students can combine all elements in one integrated project.
- Capture evidence per task:
  - Logic screenshot
  - Online variable watch (or simulation proof)
  - Short test table (Expected vs Actual)
- If hardware is unavailable, simulate all digital signals in OpenPLC Runtime.

---

## Optional extension ideas (for stronger students)

- Add soft-start/soft-stop ramp logic in ST for smoother arm motion.
- Add position windows using analog feedback (if sensors available).
- Add Node-RED dashboard indicators:
  - Axis command status
  - Fault code
  - Cycle counter
