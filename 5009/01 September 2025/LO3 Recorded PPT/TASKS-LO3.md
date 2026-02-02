# LO3 – Mini Tasks Pack (MedPack Vocational Context)

This file lists small, manageable tasks students can implement quickly in **OpenPLC Editor (Ladder)** while still linking work to the **MedPack pill counting and packaging station** scenario.

Each task includes:
- What it represents in the scenario
- What to demonstrate
- Ladder implementation hints (OpenPLC Editor)

---

## Tank Control Tasks — Constraints (Industrial Process Context)

These process tasks are the main “industrial style” exercises. Implement them using Ladder in OpenPLC.

Important
- Use the strict IO addresses, timings, and order-of-operations in `TASK-SPECS-LO3.md`.
- The constraints below describe the plant and the *expected behaviour* (to reduce interpretation).

---

### Tank Task 1 — Wet Granulation Mixing (With Temperature Control)

![Agitated mixing tank diagram](Images/01%20Agitated%20Mixing%20Tank%20(2%20materials%20%2B%20heater%20%2B%20levels).png)

Task description (constraints)
- Two ON/OFF valves regulate the flow of liquid binder and powder.
- Two separate level sensors detect the presence/level of liquid binder and powder.
- One low-level sensor detects when the tank has discharged (low level after drain).
- An agitator (motor) mixes the materials.
- A heater and a temperature sensor are installed inside the tank.
- Materials are mixed until the temperature reaches the setpoint.
- After mixing completes, the outlet/drain valve turns ON to drain the mixed product.

What you must demonstrate
- A clear automatic sequence: fill (both materials) → mix with temperature control → drain.
- Temperature reaches setpoint before the process allows draining.
- Safe stop behaviour (Stop/E-stop dominate and bring outputs to safe state).

---

### Tank Task 2 — Parallel Tanks Level + Temperature Control (Sterilisation Support)

![Two-tank heat/cool transfer system diagram](Images/02%20Two-Tank%20Heat%20Cool%20Transfer%20System%20(V1%E2%80%93V5%2C%20LHLL%2C%20TT).png)

Task description (constraints)
- Two tanks are connected in parallel.
- Both tanks use the same inlet supply (Valve-1).
- Tank-1 is filled through Valve-2; Tank-2 is filled through Valve-3.
- Level and temperature are controlled in both tanks simultaneously.
- Both tanks use sensors for low level and high level.
- Tank-1 uses a heater to heat the fluid.
- Tank-2 uses a cooling method (cold water circuit) to cool the liquid.
- Outlet valves V4 and V5 (bottom of tanks) drain material for the next process stage.
- Two temperature sensors monitor temperature in each tank.

What you must demonstrate
- Independent level control for both tanks (no overflow, refill on low level).
- Temperature control actions are correct for each tank (heat vs cool).
- Sensible coordination so the inlet supply is managed (no contradictory commands).

### Tank Task 3 — Oil Separation Tank (Level Control)

![Oil separation tank diagram](Images/03%20Oil%20Seperation%20Tank.png)

Task description (constraints)
- A single inlet valve (MV1) controls inflow into a separation tank.
- Two level sensors are used:
  - `LS1` (upper level)
  - `LS2` (lower level)
- The process goal is to keep the tank within a safe operating band and demonstrate a simple automatic sequence suitable for separation/settling applications.

What you must demonstrate
- Automatic fill behaviour:
  - When level is below the lower sensor, MV1 turns ON (fill).
  - When level reaches the upper sensor, MV1 turns OFF (stop filling).
- Safe behaviour:
  - Stop/E-stop forces outputs OFF (MV1 OFF).
- Clear explanation in your recording of what LS1/LS2 represent.

Notes
- This is an extra process task. If your `TASK-SPECS-LO3.md` does not define IO for it, choose a sensible IO map and write it clearly in your recording/report.

OpenPLC ladder hints
- Implement MV1 control using a latch (set when `LS2` indicates low, reset when `LS1` indicates high).
- If your sensors are “active at level” (1 when wet), confirm which state means “low” vs “high” in your simulation and keep it consistent.

---

### Tank Task 4 — Water Filling and Discharging Control (Sterilisation Feed Tank)

![Simple tank fill/drain diagram](Images/04%20Simple%20Tank%20Fill%20Drain%20with%20Start%20Stop%20Panel%20(MV1%2C%20MV2%2C%20TLB).png)

Task description (constraints)
- TLB-2 monitors low level and TLB-1 monitors high level.
- MV1 is the filling valve; MV2 is the discharge valve.
- Valves are controlled according to the level sensor signals.
- When water level drops below low level, MV1 turns ON automatically.
- When water level reaches high level, MV2 turns ON to discharge.
- When high level is detected, a buzzer turns ON for alarm.
- The cycle stops if the user presses Stop on the control panel.

What you must demonstrate
- Automatic fill and discharge behaviour based on TLB-1/TLB-2.
- High-level alarm buzzer.
- Stop button halts the cycle.

---

## Task A — AND Gate: Safe-to-Run Permissive

![AND gate safe-to-run permissive diagram](Images/05%20AND%20Gate%20%E2%80%93%20%E2%80%9CSafe%20to%20Run%E2%80%9D.png)

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

![OR gate buzzer on fault or completion diagram](Images/06%20OR%20Gate%20%E2%80%93%20Alarm.png)

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

![XOR gate two-sensor mismatch diagram](Images/07%20XOR%20Gate%20%E2%80%93%20Mismatch%20Two-Sensor%20Disagreement%20Detection.png)

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

![Blinky cycle running lamp (heartbeat) diagram](Images/08%20Blinky%201%20%E2%80%94%20Cycle%20Running%20Lamp%20(Heartbeat%20%20Status).png)

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

![Blinky fault lamp + buzzer beep pattern diagram](Images/09%20Blinky%202%20Fault%20Lamp%20Buzzer%20Beep%20Pattern.png)

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

![Counting pill counter to target (CTU) diagram](Images/10%20Counting%201%20Pill%20Counter%20to%20Target%20(CTU).jpeg)

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

![Counting reject/fault event counter diagram](Images/11%20Counting%202%20Reject%20Fault%20Event%20Counter.jpg)

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

![ADC acquisition and scaling diagram](Images/12%20ADC%20Acquisition%20Maths%20Raw%20Voltage%20-%20Temperature.jpg)

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

## Task I — Variables: Simple AirCon Control (Start/Stop + Threshold)

![AirCon control variables task diagram](Images/13%20Variables%20Task%20%E2%80%94%20AirCon%20Control.png)

**Scenario link:** A small temperature-controlled enclosure (or room) in a production area. When the process is running, the air conditioning should turn on if the measured temperature is above a threshold.

**Core logic (matches the example ladder style):**
- `Process` (BOOL) is a latched run bit controlled by Start/Stop.
- `RoomHot` (BOOL) = (`MeasuredTemp` > `ThresholdTemp`).
- `AirCon` (BOOL) = `Process AND RoomHot`.

**What to demonstrate:**
- Start latches `Process` ON until Stop.
- When `MeasuredTemp` rises above `ThresholdTemp`, `RoomHot` goes true.
- `AirCon` turns ON only when the process is running *and* the room is hot.
- Changing `ThresholdTemp` changes when `RoomHot` and `AirCon` activate.

**OpenPLC ladder hints:**
- Use a seal-in (latch) rung:
  - NO contact `StartButton` in parallel with NO contact `Process`
  - In series with NC contact `StopButton`
  - Coil = `Process`
- Use a compare block:
  - `GT` block with `MeasuredTemp` as IN1 and `ThresholdTemp` as IN2
  - Output drives `RoomHot`
- Final rung:
  - `Process` AND `RoomHot` → coil `AirCon`

**Image note:**
- Generate the diagram using the prompt in `IMAGE-PROMPTS-LO3.md` and save it to the Images folder as:
  - `13 Variables Task — AirCon Control.png`

---

## Suggested “Quick Demo” Order (for a short recording)

1) Show IO mapping (Start/Reset/E-stop/Pill sensor) and outputs (Actuator/Buzzer/Lamps)
2) Run AND gate permissive (prove safety interlock)
3) Run counting to target (CTU) to trigger actuator
4) Trigger fault → show OR gate buzzer + fault lamp
5) Show XOR mismatch behaviour (toggle sensors)
6) Show ADC raw-to-temperature scaling + high-temp alarm
7) Show Variables/AirCon control (Start/Stop latch + threshold compare)

