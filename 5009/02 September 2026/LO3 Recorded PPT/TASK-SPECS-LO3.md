# LO3 – Task Specifications (Strict) for OpenPLC Editor (Ladder)

This document defines **exact task behaviour**, **order of operations**, and **fixed I/O addressing** for LO3 practical tasks.

## Rules (students must follow)

1. **One task = one OpenPLC project** (do not combine tasks). This keeps I/O addresses simple and prevents conflicts.
2. Use **Ladder Diagram** in **OpenPLC Editor**.
3. Implement the tasks **exactly** as written here. Do not add extra features.
4. Unless a task says otherwise:
   - **E-STOP** forces all outputs OFF immediately.
   - **STOP** stops the cycle (outputs OFF) but does not clear counters/alarms unless specified.
   - **RESET** clears faults/alarms and returns to the initial state.
5. All outputs must default **OFF** on power-up.

---

# Standard operator controls (used in all tasks unless the task overrides)

## Digital inputs (DI)
- `I0.0` = `START_PB` (Start pushbutton, NO)
- `I0.1` = `RESET_PB` (Reset pushbutton, NO)
- `I0.2` = `ESTOP_HEALTHY` (Emergency stop chain healthy, NC wired; **1 = healthy**, **0 = pressed/fault**)
- `I0.6` = `STOP_PB` (Stop pushbutton, NO)

## Digital outputs (DO)
- `Q0.7` = `BUZZER` (24 V DC buzzer)

Notes:
- If you do not have physical hardware, simulate inputs in OpenPLC.
- If you do not use STOP in a task, still keep the address reserved (do not reassign it).

---

# Task 1 — Mixing of Products during the wet granulation process (With temperature control)

## Purpose
Control a **single mixing tank** that fills two materials, mixes using an agitator, heats until a setpoint is reached, then drains.

## Devices present (exact)
### Inputs (DI)
- `I0.3` = `LS_MAT_A` (Level sensor: Material A present, digital)
- `I0.4` = `LS_MAT_B` (Level sensor: Material B present, digital)
- `I0.5` = `LS_EMPTY` (Low/empty level sensor, digital; **1 = empty reached**)

### Inputs (AI)
- `AI0` = `TT_TANK_RAW` (Temperature sensor raw value, analog)

### Outputs (DO)
- `Q0.0` = `V_INLET_A` (Inlet valve 1 for Material A, ON/OFF)
- `Q0.1` = `V_INLET_B` (Inlet valve 2 for Material B, ON/OFF)
- `Q0.2` = `M_AGITATOR` (Agitator motor contactor output)
- `Q0.3` = `HEATER` (Heater ON/OFF)
- `Q0.4` = `V_OUTLET` (Outlet valve ON/OFF)

## Fixed setpoints and timings (students must use)
- `TEMP_SETPOINT_C = 60.0 °C`
- `MIX_TIME_AFTER_SETPOINT = 30 s`
- `DRAIN_TIMEOUT = 60 s`

## Order of operations (must match)

### State 0 — IDLE (power-up state)
- All outputs OFF.
- If `ESTOP_HEALTHY = 0` → remain in IDLE.
- Press `START_PB` to begin.

### State 1 — FILL MATERIAL A
- Turn ON `V_INLET_A`.
- Keep `V_INLET_B`, `M_AGITATOR`, `HEATER`, `V_OUTLET` OFF.
- Transition to next state when `LS_MAT_A = 1`.
- Then turn OFF `V_INLET_A`.

### State 2 — FILL MATERIAL B
- Turn ON `V_INLET_B`.
- Transition when `LS_MAT_B = 1`.
- Then turn OFF `V_INLET_B`.

### State 3 — HEAT + MIX UNTIL SETPOINT
- Turn ON `M_AGITATOR`.
- Turn ON `HEATER`.
- Convert `TT_TANK_RAW` to engineering temperature `TT_TANK_C` using the ADC task method (see “ADC Task” below) or a provided scale block.
- When `TT_TANK_C >= TEMP_SETPOINT_C`, transition to State 4.

### State 4 — MIX FOR EXTRA TIME
- Keep `M_AGITATOR` ON.
- Turn OFF `HEATER`.
- Run a timer for `MIX_TIME_AFTER_SETPOINT`.
- When timer done, transition to State 5.

### State 5 — DRAIN
- Turn OFF `M_AGITATOR`.
- Turn ON `V_OUTLET`.
- Wait for `LS_EMPTY = 1`.
- If `LS_EMPTY = 1` before timeout:
  - Turn OFF `V_OUTLET`
  - Turn ON `BUZZER` for 2 seconds (completion)
  - Go to State 0 (IDLE)
- If timeout occurs before `LS_EMPTY = 1`:
  - Turn OFF `V_OUTLET`
  - Set fault `FAULT_DRAIN_TIMEOUT = 1`
  - Turn ON `BUZZER` continuously until reset
  - Go to FAULT state

### FAULT state
- All outputs OFF except `BUZZER` (ON).
- `RESET_PB` clears the fault and returns to IDLE.

## STOP and E-STOP behaviour
- If `STOP_PB = 1`: stop the process immediately (all outputs OFF) and return to IDLE (do not clear faults; do not complete cycle).
- If `ESTOP_HEALTHY = 0`: all outputs OFF immediately and go to FAULT state with `FAULT_ESTOP = 1`.

## Diagram requirement
- Figure 1: Mixing tank schematic (insert generated diagram from LO3 prompt pack).

---

# Task 2 — Parallel Tanks Level + Temperature control during the Sterilization process

## Purpose
Control **two parallel tanks** filled from a common feed. Tank 1 heats; Tank 2 cools. Both maintain level between LL and LH and monitor temperature.

## Devices present (exact)

### Inputs (DI)
- `I0.3` = `LH1` (Tank 1 high level)
- `I0.4` = `LL1` (Tank 1 low level)
- `I0.5` = `LH2` (Tank 2 high level)
- `I0.7` = `LL2` (Tank 2 low level)

### Inputs (AI)
- `AI0` = `TT1_RAW` (Tank 1 temperature raw)
- `AI1` = `TT2_RAW` (Tank 2 temperature raw)

### Outputs (DO)
- `Q0.0` = `V1_INLET_MAIN` (Common inlet valve V1)
- `Q0.1` = `V2_FILL_T1` (Valve V2 filling Tank 1)
- `Q0.2` = `V3_FILL_T2` (Valve V3 filling Tank 2)
- `Q0.3` = `HEATER_T1` (Tank 1 heater)
- `Q0.4` = `V4_OUTLET_T1` (Outlet valve V4)
- `Q0.5` = `V5_OUTLET_T2` (Outlet valve V5)
- `Q0.6` = `COOL_WATER_VALVE_T2` (Cooling water inlet control for Tank 2)

## Fixed setpoints (students must use)
- Tank 1 temperature setpoint: `T1_SET_C = 70.0 °C`
- Tank 2 temperature setpoint: `T2_SET_C = 25.0 °C`
- Temperature deadband: `±2.0 °C`

## Level control rules (strict)

### Tank 1 fill control
- If `LL1 = 1` (low level reached) → Tank 1 needs filling.
- Fill Tank 1 by opening `V1_INLET_MAIN` AND `V2_FILL_T1`.
- Stop filling Tank 1 when `LH1 = 1`.

### Tank 2 fill control
- If `LL2 = 1` → Tank 2 needs filling.
- Fill Tank 2 by opening `V1_INLET_MAIN` AND `V3_FILL_T2`.
- Stop filling Tank 2 when `LH2 = 1`.

### Shared inlet rule
- `V1_INLET_MAIN` must be ON if either tank is requesting fill.
- If neither tank requests fill, `V1_INLET_MAIN` must be OFF.

## Temperature control rules (strict)

### Tank 1 heating
- Convert `TT1_RAW` to `TT1_C`.
- If `TT1_C < (T1_SET_C - 2.0)` → `HEATER_T1 = ON`
- If `TT1_C > (T1_SET_C + 2.0)` → `HEATER_T1 = OFF`

### Tank 2 cooling
- Convert `TT2_RAW` to `TT2_C`.
- If `TT2_C > (T2_SET_C + 2.0)` → `COOL_WATER_VALVE_T2 = ON`
- If `TT2_C < (T2_SET_C - 2.0)` → `COOL_WATER_VALVE_T2 = OFF`

## Outlet valves
- `V4_OUTLET_T1` and `V5_OUTLET_T2` are manual demo outputs:
  - In this task, **do not automatically drain**.
  - Provide two internal bits `DRAIN_T1_CMD` and `DRAIN_T2_CMD` controlled by two additional simulated inputs:
    - `I1.0` = `DRAIN_T1_PB` (NO)
    - `I1.1` = `DRAIN_T2_PB` (NO)
  - When the respective command is pressed (and `ESTOP_HEALTHY=1`), open the outlet valve for 5 seconds then close.

## Fault/alarm rules (strict)
- If `ESTOP_HEALTHY = 0` → all outputs OFF, buzzer ON, wait for reset.
- If any tank temperature exceeds 90 °C → buzzer ON continuously until reset.

## Diagram requirement
- Figure 2: Parallel tanks schematic (insert generated diagram from LO3 prompt pack).

---

# Task 3 — Water filling and Discharging control during sterilization process

## Purpose
Automatically fill a tank to high level, then discharge, with buzzer alarm at high level. Stop button stops the cycle.

## Devices present (exact)

### Inputs (DI)
- `I0.3` = `TLB1_HIGH` (High level switch)
- `I0.4` = `TLB2_LOW` (Low level switch)

### Outputs (DO)
- `Q0.0` = `MV1_FILL` (Filling valve MV1)
- `Q0.1` = `MV2_DISCHARGE` (Discharge valve MV2)

## Fixed timing (students must use)
- Buzzer duration when high level detected: `2 s`

## Order of operations (must match)

### State 0 — IDLE
- Outputs OFF.
- Press `START_PB` to enable automatic control.

### State 1 — AUTO FILL
- If `TLB2_LOW = 1` (water below low) → `MV1_FILL = ON`.
- When `TLB1_HIGH = 1`:
  - Turn `MV1_FILL = OFF`
  - Turn `BUZZER = ON` for 2 seconds
  - Transition to State 2

### State 2 — AUTO DISCHARGE
- Turn `MV2_DISCHARGE = ON`.
- Keep discharging until `TLB2_LOW = 1` (low level reached again).
- Then turn `MV2_DISCHARGE = OFF` and go back to State 1.

## STOP and E-STOP behaviour
- If `STOP_PB = 1`: stop cycle immediately (both valves OFF) and return to IDLE.
- If `ESTOP_HEALTHY = 0`: both valves OFF immediately, buzzer ON until reset.
- `RESET_PB`: clears alarms and returns to IDLE.

## Diagram requirement
- Figure 3: Water filling/discharging schematic (insert generated diagram from LO3 prompt pack).

---

# Task 4 — AND Gate: Safe-to-Run Permissive (MedPack)

## Devices
### Inputs (DI)
- `I0.2` = `ESTOP_HEALTHY`
- `I0.3` = `GUARD_CLOSED` (NO input; **1 = guard closed**)

### Outputs
- `Q0.0` = `RUN_PERMIT_LAMP` (green lamp)

## Operation
- `RUN_PERMIT = ESTOP_HEALTHY AND GUARD_CLOSED`
- Lamp output `RUN_PERMIT_LAMP` follows `RUN_PERMIT`.

---

# Task 5 — OR Gate: Buzzer on Fault OR Completion (MedPack)

## Devices
### Inputs (DI)
- `I0.3` = `FAULT_SIM` (simulate fault)
- `I0.4` = `COMPLETE_SIM` (simulate completion)

### Outputs
- `Q0.7` = `BUZZER`

## Operation
- `BUZZER = FAULT_SIM OR COMPLETE_SIM`

---

# Task 6 — XOR Gate: Sensor Mismatch Detection (MedPack)

## Devices
### Inputs (DI)
- `I0.3` = `SENSOR_A`
- `I0.4` = `SENSOR_B`

### Outputs
- `Q0.3` = `FAULT_LAMP` (red lamp)

## Operation
- `FAULT_LAMP = SENSOR_A XOR SENSOR_B`

---

# Task 7 — Blinky: Cycle-On Lamp (1 Hz)

## Devices
### Inputs (DI)
- `I0.3` = `RUN_SIM` (simulate run state)

### Outputs
- `Q0.2` = `CYCLE_ON_LAMP` (green lamp)

## Operation
- If `RUN_SIM = 1`, blink `CYCLE_ON_LAMP` at 1 Hz (0.5s ON / 0.5s OFF).
- If `RUN_SIM = 0`, lamp OFF.

---

# Task 8 — Counting: Pill Counter to Target (CTU)

## Devices
### Inputs (DI)
- `I0.0` = `START_PB`
- `I0.1` = `RESET_PB`
- `I0.2` = `ESTOP_HEALTHY`
- `I0.3` = `PILL_SENSOR` (toggle switch / simulated pulse)

### Outputs (DO)
- `Q0.0` = `ACTUATOR_SIM` (lamp or relay)
- `Q0.2` = `CYCLE_ON_LAMP`
- `Q0.7` = `BUZZER`

## Fixed target and timing
- Target pills: `TARGET = 10`
- Actuator ON time at target: `2 s`

## Order of operations
- Press START to arm the cycle (`CYCLE_ON_LAMP = ON`).
- Each rising edge of `PILL_SENSOR` increments the counter by 1.
- When count reaches `TARGET`:
  - turn ON `ACTUATOR_SIM` for 2 seconds
  - turn ON `BUZZER` for 1 second
  - latch `CYCLE_COMPLETE` (internal)
- RESET clears the counter and `CYCLE_COMPLETE`.
- E-STOP forces outputs OFF.

---

# Task 9 — ADC Acquisition + Maths: Raw Voltage → Temperature

## Purpose
Convert an analog input to engineering temperature and generate a high-temperature alarm.

## Devices
### Inputs (AI)
- `AI0` = `ADC_RAW` (0–4095 counts)

### Outputs (DO)
- `Q0.3` = `HIGH_TEMP_LAMP` (red lamp)
- `Q0.7` = `BUZZER`

## Fixed scaling (must use)
- ADC range: 0–4095 counts
- Voltage range: 0–10 V
- Temperature range: 0–100 °C
- Temperature calculation: `TEMP_C = ADC_RAW × (100.0 / 4095.0)`

## Alarm rule (strict)
- If `TEMP_C > 60.0`:
  - `HIGH_TEMP_LAMP = ON`
  - `BUZZER = ON`
- Else outputs OFF.

---

## Notes for assessors / students
- Tank tasks correspond to Figures 1–3 and should use the matching generated diagrams.
- The non-tank tasks are short “building blocks” that students can complete quickly and demonstrate in simulation.
