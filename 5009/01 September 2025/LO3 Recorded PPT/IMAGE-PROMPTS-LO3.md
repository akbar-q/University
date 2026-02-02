# LO3 – Image Generation Prompts (3 diagrams)

These prompts are designed to generate **clean, modern industrial training diagrams** in a consistent style (similar to polished PLC training/Instrumentation diagrams): crisp vector look, soft gradients, consistent iconography, readable labels, and uncluttered piping.

**Global style requirements (apply to all 3 prompts):**
- Clean **vector / infographic** style (not photorealistic)
- White background, light blue tanks/pipes with subtle gradients
- Simple, consistent valve/sensor icons
- Modern sans-serif font, high legibility
- Balanced spacing, aligned labels, no crowded text
- Output: **PNG 300 dpi** (and SVG if available)

**Negative prompt (apply to all 3 prompts):**
- No photorealism, no 3D render look, no noisy backgrounds
- No blurry text, no tiny unreadable labels
- No random watermarks, no website branding
- No messy piping tangles or overlapping labels

---

## Prompt 1 — Agitated Mixing Tank (2 materials + heater + levels)

Create a professional industrial process diagram of a **single agitated mixing tank** used in batch production. The diagram must be a clean vector-style schematic with soft gradients and crisp outlines.

Include and label these items:
- One large horizontal cylindrical tank with domed ends and 4 legs
- Top-mounted **agitator motor** with visible shaft and impeller blades inside tank
- Two inlet lines at the top:
  - Left inlet: **Material A** with **Inlet valve 1**
  - Right inlet: **Material B** with **Inlet valve 2**
- Side-mounted **heaters** on the left side (3 heater elements)
- Three level sensors on the right side:
  - **Level material B** (upper)
  - **Temperature sensor** (mid)
  - **Level material A** (lower)
- One **Empty Level** sensor near bottom-left side
- Bottom outlet pipe with **Outlet valve**

Diagram conventions:
- Use light-blue pipes with gentle bends
- Use consistent valve icons (simple butterfly/ball valve symbol)
- Put labels close to components with leader lines where needed
- Add small tag labels for sensors (e.g., LS1, LS2, TS1) but keep text readable

Composition:
- Center the tank, keep all labels outside the tank body
- Ensure the diagram looks like a modern training infographic

---

## Prompt 2 — Two-Tank Heat/Cool Transfer System (V1–V5, LH/LL, TT)

Create a clean industrial training diagram showing **two vertical process tanks** in parallel with a shared top feed line and separate outlet lines.

Include and label these items exactly:
- Left tank labeled **Tank A (Heating)**
- Right tank labeled **Tank B (Cooling)**
- A top header line labeled **Material** feeding into the system
- Valves:
  - **Inlet valve V1** on the incoming material line
  - A branch down into Tank A with a valve labeled **V2** and text **To heat**
  - A branch down into Tank B with a valve labeled **V3** and text **To cool**
  - Bottom outlet from Tank A with **Outlet valve V4** leading to **Product A**
  - Bottom outlet from Tank B with **Outlet valve V5** leading to **Product B**
- Instrumentation:
  - On Tank A: **LH1** (high level), **LL1** (low level), **TT1** (temperature transmitter)
  - On Tank B: **LH2**, **LL2**, **TT2**
- Heating on Tank A: a side-mounted **Heater** element
- Cooling on Tank B: a visible internal cooling coil path with arrows and labels:
  - **Cooling water inlet**
  - **Cooling water outlet**

Style requirements:
- Tanks are tall cylinders with soft gradient shading
- Piping is light blue with consistent thickness
- Clear readable labels: V1–V5, LH/LL/TT tags
- Minimal but professional arrows showing flow direction

---

## Prompt 3 — Simple Tank Fill/Drain with Start/Stop Panel (MV1, MV2, TLB)

Create a simple but polished industrial diagram for a **single vertical tank** with a basic operator control panel. This should look like a clean PLC training diagram.

Include and label:
- One vertical tank labeled **Tank** with a small mixer symbol near bottom (optional)
- Two level switches on the left side of the tank:
  - **TLB1** (upper)
  - **TLB2** (lower)
- One inlet pipe at the top with a motorized valve labeled **MV1**
- One outlet pipe at the bottom with a motorized valve labeled **MV2**
- An operator panel to the right with:
  - Green button labeled **START**
  - Red button labeled **STOP**
  - Indicator lights section labeled **INDICATION**
  - Green lamp labeled **Cycle on**
  - Red lamp labeled **Buzzer**

Add simple callouts (small, neat text boxes):
- “Start → fill to TLB1”
- “Stop/E-stop → close MV1, safe state”
- “Drain using MV2 (if enabled)”

Style requirements:
- Clear, uncluttered layout with plenty of white space
- Consistent icon shapes for valves, sensors, lamps
- All text must be readable at A4 size

---

# Logic Gates (AND / OR / XOR) – Vocational Scenario Applications + Image Prompts

These are simple, realistic ways to implement basic logic gates using the **MedPack pill counting and packaging station** context. Each includes an image prompt to generate a clean training diagram students can paste into reports.

**Global style requirements (apply to all gate prompts):**
- Clean vector / training infographic style
- White background, blue/gray palette
- Clear logic-gate symbols (ANSI/IEC style) and readable labels
- Show signal flow left → right, with arrows
- Output: PNG 300 dpi (and SVG if available)

**Negative prompt (apply to all gate prompts):**
- No photorealism, no messy wiring, no tiny text, no watermarks

---

## AND Gate – “Safe to Run” / Start Permissive

**Application idea (MedPack):**
- Output: **RUN_PERMIT** (allows cycle to run)
- Logic: RUN_PERMIT = **E_STOP_HEALTHY AND GUARD_CLOSED**
- Meaning: The packaging cycle is only permitted when the emergency stop circuit is healthy and the safety guard/door interlock is closed.

**Implementation notes (student-friendly):**
- Use two digital inputs: `E_STOP_HEALTHY` (NC chain, true when healthy) and `GUARD_CLOSED` (NC/NO as defined, true when closed).
- The AND output drives a “Run Enable” bit used as a master interlock.

**Image prompt (generate diagram):**
Create a clean PLC training diagram showing an **AND logic gate** used for a pill packaging station safety permissive. White background, blue/gray palette, modern sans-serif font.

Left side inputs (with small switch icons):
- Input A: “E-STOP Healthy (DI)” tagged “I0.2”
- Input B: “Guard Closed (DI)” tagged “I0.4”

Center: a standard **AND gate symbol** labelled “AND”.

Right side output:
- “RUN_PERMIT (internal bit)” tagged “M0.0” leading to a small block labelled “Packaging Cycle Enabled”.

Add one neat callout box: “Cycle allowed only if both safety conditions are TRUE.”

---

## OR Gate – Alarm / Buzzer Trigger

**Application idea (MedPack):**
- Output: **BUZZER_ON**
- Logic: BUZZER_ON = **FAULT_ACTIVE OR CYCLE_COMPLETE**
- Meaning: The buzzer sounds if there is a fault OR when the cycle completes (students can add different beep patterns later, but keep this simple for now).

**Implementation notes (student-friendly):**
- `FAULT_ACTIVE` can be set when a sensor is stuck, E-stop pressed, or any abnormal condition.
- `CYCLE_COMPLETE` goes true at the end of the packaging sequence.
- OR output energises the buzzer output (or a buzzer internal coil that then drives the output).

**Image prompt (generate diagram):**
Create a clean PLC training diagram showing an **OR logic gate** controlling a buzzer for a pharmaceutical pill packaging station. White background, blue/gray palette.

Inputs:
- Input A: “FAULT_ACTIVE (internal bit)” tagged “M0.1”
- Input B: “CYCLE_COMPLETE (internal bit)” tagged “M0.2”

Center: **OR gate symbol** labelled “OR”.

Output:
- “BUZZER_ON” tagged “Q0.1 (Buzzer)” with a simple buzzer icon.

Add a note: “Buzzer sounds on fault OR completion.”

---

## XOR Gate – Mismatch / Two-Sensor Disagreement Detection

**Application idea (MedPack):**
- Output: **SENSOR_MISMATCH**
- Logic: SENSOR_MISMATCH = **SENSOR_A XOR SENSOR_B**
- Meaning: Two sensors are expected to agree (both detect a pill, or both detect no pill). XOR highlights when exactly one sensor indicates detection, which can be used as a diagnostic alarm.

**Implementation notes (student-friendly):**
- Use two digital inputs: `SENSOR_A` and `SENSOR_B`.
- XOR output sets a fault bit or triggers investigation.
- This is an easy “fault detection” add-on that demonstrates XOR clearly.

**Image prompt (generate diagram):**
Create a clean PLC training diagram showing an **XOR logic gate** used to detect a sensor disagreement in a pill counting station. White background, blue/gray palette, readable labels.

Inputs:
- Input A: “Pill Sensor A (DI)” tagged “I0.3”
- Input B: “Pill Sensor B (DI)” tagged “I0.5”

Center: **XOR gate symbol** labelled “XOR”.

Output:
- “SENSOR_MISMATCH” tagged “M0.3” leading to a small block labelled “Raise Fault / Alarm”.

Add a small truth table box (very clean and readable):
- 0 XOR 0 = 0
- 0 XOR 1 = 1
- 1 XOR 0 = 1
- 1 XOR 1 = 0

---

# Blinky (Status Indication) – Vocational Scenario Applications + Image Prompts

These “blinky” tasks keep the workload light but still look industrial. They map directly to the MedPack station using indicator lamps and buzzer patterns.

## Blinky 1 — Cycle Running Lamp (Heartbeat / Status)

**Application idea (MedPack):**
- When the station is running, a green **Cycle On** lamp blinks at a steady rate to show the PLC is alive and the cycle is active.

**Simple logic definition:**
- If `RUN_STATE = 1` then blink `CYCLE_ON_LAMP` at 1 Hz (0.5s ON, 0.5s OFF)
- If `RUN_STATE = 0` then lamp OFF

**Image prompt (generate diagram):**
Create a clean PLC training infographic showing a “Cycle Running Blinky” for a pharmaceutical packaging station. White background, blue/gray palette.

Include:
- A small operator panel with a green lamp labeled “Cycle On (Q0.2)”
- A PLC box labeled “PLC” with an internal timer block labeled “TON/TP (Blink 1 Hz)”
- Input bit “RUN_STATE (M0.0)” feeding the blink logic
- Output arrow to the lamp

Add a small timing diagram below (very clean): square wave labeled “Cycle On Lamp” with 0.5s high / 0.5s low.

---

## Blinky 2 — Fault Lamp + Buzzer Pattern (Easy, but looks professional)

**Application idea (MedPack):**
- On any fault, turn on a red **Fault** lamp and make the buzzer beep (e.g., 0.2s ON every 1s). This is simple to implement but demonstrates industrial alarm indication.

**Simple logic definition:**
- `FAULT_LAMP = FAULT_ACTIVE`
- If `FAULT_ACTIVE = 1` then blink `BUZZER` with a slow beep pattern

**Image prompt (generate diagram):**
Create a clean PLC training diagram showing a fault indication system for a pill packaging station. White background, blue/gray palette, readable labels.

Include:
- Input/internal bit: “FAULT_ACTIVE (M0.1)”
- Output 1: “Fault Lamp (Red) Q0.3” (lamp icon)
- Output 2: “Buzzer Q0.1” (buzzer icon)
- A PLC box with two simple logic blocks:
  1) “Direct drive: FAULT_ACTIVE → Fault Lamp”
  2) “Timer-based beep generator → Buzzer”

Add a small timing diagram for the buzzer: 0.2s ON pulse every 1.0s.

---

# Counting (Pill Count / Batch Count) – Vocational Scenario Applications + Image Prompts

These counting tasks are the most directly connected to the pill packaging scenario and are easy to demonstrate in simulation.

## Counting 1 — Pill Counter to Target (CTU)

**Application idea (MedPack):**
- Each pill sensor pulse increments a counter. When the counter reaches a target (e.g., 10 pills), trigger the packaging actuator and mark the cycle complete.

**Simple logic definition:**
- Rising edge on `PILL_SENSOR` increments `PILL_COUNT`
- If `PILL_COUNT >= TARGET` then set `CYCLE_COMPLETE = 1` and energise `ACTUATOR` for a fixed time
- Reset counter on `RESET` or at end of cycle

**Image prompt (generate diagram):**---
Create a clean PLC training infographic for a “Pill Counter to Target” used in a blister-pack station. White background, blue/gray palette.

Include:
- Input: “Pill Sensor (I0.3)” with a small sensor icon
- A rising-edge block labeled “Rising Edge / One-shot”
- A counter block labeled “CTU” with:
  - “Preset (Target) = 10”
  - “Current Count” display
- Output blocks:
  - “Actuator Q0.0 (Packaging)” with actuator/valve icon
  - “Cycle Complete M0.2 / Lamp Q0.2”
- Reset input: “Reset (I0.1)” to clear the counter

Add a small mini table: “Pulse count increases by 1 per pill event.”

---

## Counting 2 — Reject Counter (Quality / Fault Counting)

**Application idea (MedPack):**
- If a sensor mismatch or fault occurs, increment a reject counter. This is a simple way to show diagnostic counting and basic traceability.

**Simple logic definition:**
- On each `FAULT_EVENT` rising edge, increment `REJECT_COUNT`
- Display count on HMI/SCADA later (optional)

**Image prompt (generate diagram):**
Create a clean PLC training diagram for a “Reject / Fault Event Counter” in a pharmaceutical packaging station. White background, blue/gray palette.

Include:
- Input/internal bit: “FAULT_EVENT (M0.4)”
- A one-shot/rising edge block
- A counter block labeled “CTU Reject Count”
- Output: “Maintenance Alert (Lamp)” optional

Add a note: “Counts number of fault events for troubleshooting and reporting.”

---

# ADC Acquisition + Maths Operation – Raw Voltage → Temperature

This is a light but very “industrial” task: acquire an analog signal (or simulated analog), scale it, and convert it to an engineering unit (°C). It fits the scenario as a **temperature sensor** used for process monitoring.

## ADC Task — Temperature Scaling (Example: 0–10 V → 0–100 °C)

**Application idea (MedPack / packaging environment):**
- A temperature sensor provides a 0–10 V signal representing 0–100 °C.
- PLC reads ADC raw value and converts it into temperature for:
  - display on HMI/SCADA
  - alarm limit checks (high temperature fault)
  - logging

**Simple maths definition (students can copy):**
- Given: ADC range 0–4095 counts maps to 0–10 V
- Voltage = (RAW / 4095) × 10.0
- Temperature °C = (Voltage / 10.0) × 100.0
- Simplified: Temperature °C = RAW × (100.0 / 4095)

**Optional extension (if you want slightly more realism):**
- Add offset and scale: Temperature °C = (RAW × K) + B
- Clamp the output to 0–100 °C

**Image prompt (generate diagram):**
Create a clean PLC training infographic showing “ADC acquisition and scaling (Raw → Voltage → Temperature)” for a packaging station temperature sensor. White background, blue/gray palette, modern sans-serif font.

Include:
- A sensor icon labelled “Temperature Sensor (0–10 V)” connected to a PLC analog input labelled “AI0”
- A PLC box with three internal blocks, left-to-right:
  1) “RAW ADC (0–4095)”
  2) “Scale to Voltage: V = RAW/4095×10”
  3) “Convert to Temperature: °C = V/10×100”
- Output tags:
  - “Temperature (°C) → HMI/SCADA Tag”
  - “High Temp Alarm” (compare block threshold)

Add a small clean formula box with the simplified equation: “°C = RAW × (100/4095)”.

---

# Variables / Comparators (Start/Stop Latch + Temperature Threshold)

This diagram supports the LO3 mini task “Variables: Simple AirCon Control (Start/Stop + Threshold)”.

Target filename (place into the LO3 Images folder):
- `13 Variables AirCon Control (Start-Stop + Threshold).png`

## Variables Task — AirCon Control Diagram (Start/Stop + Threshold)

Create a clean PLC training diagram showing a **simple air conditioning control** as a functional control schematic (NOT a ladder diagram). Students should be able to look at the diagram and deduce the ladder logic themselves. White background, light grey grid, modern sans-serif font, crisp vector style.

The diagram must include TWO parts (top + bottom):

Part A (top): Variable table
- A simple table with columns: Name, Type, Initial Value
- Include these rows exactly:
  - `StartButton` (BOOL)
  - `StopButton` (BOOL)
  - `Process` (BOOL)
  - `RoomHot` (BOOL)
  - `MeasuredTemp` (INT)
  - `ThresholdTemp` (INT) initial value `21`
  - `AirCon` (BOOL)

Part B (bottom): Functional diagram (signal flow left → right)
- Left side: an operator panel with two pushbuttons:
  - Green momentary button labeled “START” tagged `StartButton`
  - Red momentary button labeled “STOP” tagged `StopButton`
- A block labeled “RUN LATCH (Start/Stop memory)” with:
  - Input: `StartButton`
  - Reset input: `StopButton`
  - Output: `Process`
- A temperature sensor icon labeled “Room Temp Sensor” feeding a value labeled `MeasuredTemp`
- A small setpoint knob / numeric box labeled “Threshold Setpoint = 21°C” tagged `ThresholdTemp`
- A compare block labeled “GT (MeasuredTemp > ThresholdTemp)” with:
  - IN1 = `MeasuredTemp`
  - IN2 = `ThresholdTemp`
  - OUT = `RoomHot`
- An AND logic block labeled “AND” combining:
  - `Process`
  - `RoomHot`
  - Output = `AirCon`
- Far right: an output icon (fan/AC unit) labeled “AirCon Output” tagged `AirCon`

Add a small neat callout box: “AirCon runs only when the process is enabled AND the room is hotter than the threshold.”

Style requirements
- Keep text readable at A4 size
- Clear alignment, straight signal arrows, no clutter
- No ladder rungs, no contact/coil symbols
- Output as PNG 300 dpi

Negative prompt
- No photorealism, no watermarks, no tiny unreadable labels, no messy wiring




