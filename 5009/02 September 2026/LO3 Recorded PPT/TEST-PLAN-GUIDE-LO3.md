# LO3 — Test Plan Guide (with Examples)

This guide shows you how to write a clear **test plan** for LO3 tasks in **OpenPLC Editor (Ladder)**.

Use this to produce evidence that your program:
- follows the required **order of operations**
- handles **Stop / E‑Stop / Reset** correctly
- behaves correctly in **normal** and **fault/edge** conditions

---

## 1) What a “good” LO3 test plan looks like

A good test plan is:
- **traceable**: each test maps to a requirement (“what the program must do”)
- **repeatable**: another person can repeat it and see the same result
- **evidence-based**: includes screenshots / recording timestamps
- **balanced**: covers normal operation, edge cases, and fault handling

### Recommended test-case format (copy this table)

Use one table per task (or one big table for the whole project).

| Test ID | Requirement / Feature | Preconditions | Inputs / Steps | Expected Result | Pass/Fail | Evidence |
|---|---|---|---|---|---|---|
| T1-01 | Example: Start begins cycle | E‑Stop healthy, in IDLE | Press START | State changes to FILL |  | Screenshot / timestamp |

**Evidence** (minimum expected):
- At least 1 screenshot per major requirement
- A short screen recording is ideal; include timestamps in the table

---

## 2) How to write requirements (quick method)

For each task, turn the spec into small requirements:
- “When input X happens, output Y must do Z.”
- “The system must not do A while condition B is true.”
- “If timeout/fault occurs, it must go safe and alarm.”

Tip: Use the strict behaviour and IO mapping from TASK-SPECS-LO3.md.

---

## 3) Example Test Plan — Task 1 (Mixing Tank + Temperature Control)

Scope: prove the sequence is correct and safe.

| Test ID | Requirement / Feature | Preconditions | Inputs / Steps | Expected Result | Pass/Fail | Evidence |
|---|---|---|---|---|---|---|
| T1-01 | Power-up safe state | Program downloaded, run mode | Observe outputs at power-up | All outputs OFF |  | Screenshot |
| T1-02 | Start begins fill A | IDLE, E‑Stop healthy | Press START | V_INLET_A ON, others OFF |  | Screenshot |
| T1-03 | Fill A stops at LS_MAT_A | In FILL A | Force LS_MAT_A = 1 | V_INLET_A turns OFF; transition to FILL B |  | Screenshot |
| T1-04 | Fill B stops at LS_MAT_B | In FILL B | Force LS_MAT_B = 1 | V_INLET_B OFF; transition to HEAT+MIX |  | Screenshot |
| T1-05 | Heat+mix outputs | In HEAT+MIX | Observe outputs | Agitator ON and Heater ON |  | Screenshot |
| T1-06 | Setpoint transition | In HEAT+MIX | Increase AI0 so TT_TANK_C ≥ setpoint | Transition to MIX EXTRA TIME; heater OFF, agitator stays ON |  | Screenshot |
| T1-07 | Extra mix timer | In MIX EXTRA TIME | Wait for timer | After timer, transition to DRAIN |  | Timestamp |
| T1-08 | Drain completes on LS_EMPTY | In DRAIN | Force LS_EMPTY = 1 before timeout | V_OUTLET OFF; BUZZER ON for 2s; return to IDLE |  | Timestamp |
| T1-09 | Drain timeout fault | In DRAIN | Keep LS_EMPTY = 0 until timeout | V_OUTLET OFF; fault latched; BUZZER continuous; goes to FAULT state |  | Timestamp |
| T1-10 | Reset clears fault | In FAULT | Press RESET | BUZZER OFF; returns to IDLE |  | Screenshot |
| T1-11 | Stop behaviour | Any running state, E‑Stop healthy | Press STOP | All outputs OFF immediately; returns to IDLE (no completion) |  | Timestamp |
| T1-12 | E‑Stop behaviour | Any running state | Force ESTOP_HEALTHY = 0 | Outputs OFF immediately; fault set; buzzer ON until reset |  | Timestamp |

Notes for evidence:
- For temperature tests, show the AI raw value changing and the derived temperature variable (if available in watch).

---

## 4) Example Test Plan — Task 8 (Counting: Pill Counter to Target)

Scope: prove correct edge counting, correct output behaviour at target, and correct reset/e‑stop.

| Test ID | Requirement / Feature | Preconditions | Inputs / Steps | Expected Result | Pass/Fail | Evidence |
|---|---|---|---|---|---|---|
| C-01 | Start arms cycle | E‑Stop healthy, reset done | Press START | CYCLE_ON_LAMP ON (armed) |  | Screenshot |
| C-02 | No double-count on long ON | Armed, count=0 | Hold PILL_SENSOR ON for 3s | Count increases by 1 only |  | Screenshot |
| C-03 | Counts rising edges | Armed | Toggle PILL_SENSOR OFF→ON→OFF repeatedly | Count increments once per rising edge |  | Screenshot |
| C-04 | Target triggers actuator | Armed, count=TARGET-1 | Generate one more pill pulse | ACTUATOR_SIM ON for 2s; BUZZER ON 1s; CYCLE_COMPLETE latched |  | Timestamp |
| C-05 | No further counting after complete (if implemented) | Completed | Add more pulses | Count does not increment OR behaviour matches your spec (state clearly) |  | Screenshot |
| C-06 | Reset clears count and complete | Completed | Press RESET | Count=0; CYCLE_COMPLETE cleared; ready again |  | Screenshot |
| C-07 | E‑Stop forces outputs OFF | Actuator timing active | Force ESTOP_HEALTHY=0 | Outputs OFF immediately |  | Timestamp |

Notes:
- Make sure you show how you implemented **rising-edge detection** (R_TRIG or memory bit method).

---

## 5) Example Test Plan — Task 9 (ADC Maths: Raw Voltage → Temperature)

Scope: prove correct scaling and correct alarm threshold.

| Test ID | Requirement / Feature | Preconditions | Inputs / Steps | Expected Result | Pass/Fail | Evidence |
|---|---|---|---|---|---|---|
| A-01 | 0 counts → ~0°C | Program running | Force AI0 = 0 | TEMP_C ≈ 0; lamp OFF; buzzer OFF |  | Screenshot |
| A-02 | Mid-scale value | Program running | Force AI0 = 2048 | TEMP_C ≈ 50°C (± rounding); outputs OFF |  | Screenshot |
| A-03 | Threshold just below alarm | Program running | Force AI0 for TEMP_C = 59.9 | No alarm |  | Screenshot |
| A-04 | Threshold above alarm | Program running | Force AI0 for TEMP_C = 60.1 | HIGH_TEMP_LAMP ON and BUZZER ON |  | Screenshot |
| A-05 | Alarm clears when value drops | Alarm active | Reduce AI0 below threshold | Lamp and buzzer OFF |  | Screenshot |

Tip:
- Show your calculation steps (RAW → REAL → TEMP_C) using intermediate variables if possible.

---

## 6) Quick mini-plan (optional) — Task 6 XOR Mismatch

| Test ID | Inputs (A,B) | Expected mismatch | Evidence |
|---|---|---|---|
| X-01 | 0,0 | 0 | Screenshot |
| X-02 | 1,0 | 1 | Screenshot |
| X-03 | 0,1 | 1 | Screenshot |
| X-04 | 1,1 | 0 | Screenshot |

---

## 7) Submission tip

In your LO3 recording, narrate:
- what requirement you’re testing
- what you force/toggle
- what you expect
- what happened (pass/fail)

That makes your recording count as test evidence.
