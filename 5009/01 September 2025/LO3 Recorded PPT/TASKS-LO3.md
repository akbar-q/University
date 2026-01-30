# LO3 – Mini Tasks Pack (MedPack Vocational Context)

This file lists small, manageable tasks students can implement quickly in **OpenPLC Editor (Ladder)** while still linking work to the **MedPack pill counting and packaging station** scenario.

Each task includes:
- What it represents in the scenario
- What to demonstrate
- Ladder implementation hints (OpenPLC Editor)

---

## Task A — AND Gate: Safe-to-Run Permissive

**Scenario link:** Only allow the cycle to run when safety conditions are OK.

**Core logic:**
- `RUN_PERMIT = E_STOP_HEALTHY AND GUARD_CLOSED`

**What to demonstrate:**
- If either safety input is false, `RUN_PERMIT` is false and outputs stay off.
- When both are true, cycle can start.

**OpenPLC ladder hints:**
- Use two normally-open contacts in series to represent an AND condition.
- If an input is wired NC (e.g., E-stop chain), invert in ladder by using a normally-closed contact or a NOT block (pick one consistent approach).
- Drive an internal coil `RUN_PERMIT` (a memory bit), then use `RUN_PERMIT` as a “master enable” contact in series with outputs.

---

## Task B — OR Gate: Buzzer on Fault OR Completion

**Scenario link:** Buzzer sounds for either a fault or successful completion.

**Core logic:**
- `BUZZER_ON = FAULT_ACTIVE OR CYCLE_COMPLETE`

**What to demonstrate:**
- Trigger buzzer on completion.
- Trigger buzzer on fault.

**OpenPLC ladder hints:**
- Use two contacts in parallel to represent an OR condition.
- Drive either an internal coil `BUZZER_CMD` or the output coil directly `Q0.x`.
- If you want a simple “beep” rather than continuous buzzer, gate the output with a timer-based pulse bit.

---

## Task C — XOR Gate: Two-Sensor Disagreement (Mismatch)

**Scenario link:** Two pill sensors should agree; mismatch indicates a problem.

**Core logic:**
- `SENSOR_MISMATCH = SENSOR_A XOR SENSOR_B`

**What to demonstrate:**
- When exactly one sensor is ON, mismatch goes true.
- When both are ON or both OFF, mismatch goes false.

**OpenPLC ladder hints:**
- If OpenPLC has an XOR function block: use it directly.
- If not, implement XOR using basic logic:
  - `XOR = (A AND NOT B) OR (NOT A AND B)`
  - Ladder form: build two AND branches feeding an OR:
    - Branch 1: A in series with NC(B)
    - Branch 2: NC(A) in series with B
    - Parallel the branches (OR) to drive `SENSOR_MISMATCH`.

---

## Task D — Blinky 1: Cycle-On Lamp (Heartbeat)

**Scenario link:** A blinking lamp indicates the cycle is active and the controller is running.

**Core logic:**
- If `RUN_STATE = 1`, blink `CYCLE_ON_LAMP` at ~1 Hz.

**What to demonstrate:**
- Lamp blinks only when running.
- Lamp off when idle/fault.

**OpenPLC ladder hints:**
- Use a timer (TON) to create a toggling bit:
  - Common approach: alternate between two timers or use a timer + NOT of an internal latch.
- Simple pattern:
  - Timer generates a periodic pulse bit `BLINK_TICK`.
  - Use `BLINK_TICK` to toggle a memory bit `BLINK_STATE` (SET/RESET or latch rung).
  - Output = `RUN_STATE AND BLINK_STATE`.

---

## Task E — Blinky 2: Fault Lamp + Buzzer Beep Pattern

**Scenario link:** Fault indication must be obvious to the operator.

**Core logic:**
- `FAULT_LAMP = FAULT_ACTIVE`
- If `FAULT_ACTIVE = 1`, buzzer beeps (e.g., 0.2 s ON every 1 s)

**What to demonstrate:**
- Fault lamp comes on solid.
- Buzzer beeps while fault is active.

**OpenPLC ladder hints:**
- Drive `FAULT_LAMP` directly from the fault bit.
- Create a repeating pulse for buzzer using timers:
  - Generate a 1-second cycle tick.
  - Within the cycle, energise buzzer for 0.2 s.
- If that’s too complex, accept a simple slow blink buzzer (0.5s on / 0.5s off).

---

## Task F — Counting 1: Pill Counter to Target (CTU)

**Scenario link:** Count pills and trigger packaging when the target count is reached.

**Core logic:**
- Rising edge of `PILL_SENSOR` increments counter.
- When `COUNT >= TARGET`, set `CYCLE_COMPLETE` and trigger actuator.

**What to demonstrate:**
- Counter increases by 1 per pill event.
- Actuator output triggers at target.
- Reset clears the count.

**OpenPLC ladder hints:**
- Use a rising-edge method to avoid multiple counts from one long sensor ON:
  - If you have an `R_TRIG` block: use it.
  - If not: store previous sensor state in a memory bit and detect `SensorNow AND NOT SensorPrev`.
- Use CTU:
  - CU = edge pulse
  - R = reset
  - PV = target count
  - Q = done
- Use CTU.Q to drive `CYCLE_COMPLETE` and/or start an actuator timer.

---

## Task G — Counting 2: Reject/Fault Event Counter

**Scenario link:** Count how many fault events occurred (basic traceability/troubleshooting).

**Core logic:**
- Rising edge on `FAULT_EVENT` increments `REJECT_COUNT`.

**What to demonstrate:**
- Reject count increases only once per event.
- Reset clears the count.

**OpenPLC ladder hints:**
- Use rising-edge detection on `FAULT_EVENT`.
- Use CTU with PV optionally set to a high number (or ignore PV and just display CV).
- Store CV to show on an HMI later (optional).

---

## Task H — ADC Acquisition + Maths: Raw Voltage → Temperature

**Scenario link:** Temperature monitoring for process/environmental safety.

**Example scaling (students can copy):**
- ADC raw range: 0–4095 counts
- Sensor signal: 0–10 V
- Temperature: 0–100 °C

**Maths:**
- `Voltage = (RAW / 4095) × 10.0`
- `TempC = (Voltage / 10.0) × 100.0`
- Simplified: `TempC = RAW × (100.0 / 4095)`

**What to demonstrate:**
- Show RAW value changing (real analog input or simulated value).
- Show scaled temperature changing correctly.
- Trigger a High Temperature alarm above a threshold.

**OpenPLC ladder hints:**
- Use REAL/float math blocks if available:
  - Convert integer RAW to REAL before division.
  - Keep constants as REAL (e.g., 4095.0, 100.0).
- Implement scaling in steps using intermediate variables:
  - `RAW_REAL`, `TEMP_C`
- Add clamping (optional but safe):
  - If `TEMP_C < 0` then set to 0
  - If `TEMP_C > 100` then set to 100
- Alarm rung:
  - Compare `TEMP_C` with threshold (e.g., `TEMP_C > 60`) to set `HIGH_TEMP_ALARM`.

---

## Suggested “Quick Demo” Order (for a short recording)

1) Show IO mapping (Start/Reset/E-stop/Pill sensor) and outputs (Actuator/Buzzer/Lamps)
2) Run AND gate permissive (prove safety interlock)
3) Run counting to target (CTU) to trigger actuator
4) Trigger fault → show OR gate buzzer + fault lamp
5) Show XOR mismatch behaviour (toggle sensors)
6) Show ADC raw-to-temperature scaling + high-temp alarm

