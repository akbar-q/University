<!--
LO4 Fault Finding & Fault Analysis on a Mechatronic System
Presentation Template (Markdown slide deck)

How to use this file:
- Each slide is separated by a line containing only: ---
- You can paste this into PowerPoint manually OR render it using a Markdown-to-slides tool (optional).
- Replace [PLACEHOLDER] text with your own work. Keep the structure unless you have a reason to change it.

Academic integrity reminder (repeated throughout on purpose):
- Do not copy/paste text from websites, manuals, or AI.
- Use sources to understand, then write in your own words.
- Cite any sources you used (datasheets, manuals, standards, papers, videos, websites).
-->

# LO4 Fault Finding & Fault Analysis
## [Module/Unit Code: 4006] • [Assignment/Task Title]
### [Student Name] • [Student ID] • [Date]

**Mechatronic system:** [System name / rig / trainer / project]

---

# Integrity & Authorship (Read First)
## This presentation must be your own work

- **Do not copy**: no copy/paste from manuals, datasheets, websites, classmates, or AI output.
- **Do use sources**: to understand concepts, pinouts, specs, test procedures, and safety requirements.
- **Do paraphrase**: read → close the page → write from memory → check accuracy.
- **Do cite**: include a small reference on relevant slides and a full list at the end.

**If you use AI/tools:** explain *how* you used them (e.g., “helped me plan a test sequence”), but the analysis and wording must be yours.

---

# What You Will Demonstrate (LO4)
## Fault finding skills + fault analysis on a mechatronic system

You are aiming to show you can:
- Understand the **original correct function** of the system
- Use **documentation** (datasheets, drawings, schematics, manuals)
- Use **instrumentation safely** (multimeter, flow/temp/pressure meters, etc.)
- Apply **methodical fault location techniques** and use control software if available
- Identify, verify, and rectify faults; test and return to service
- Work with a **safety-first culture** (risk assessment, compliance, procedures)
- Use **data collection & management** (logs, dashboards, databases) and **document control**

---

# Assessment Targets (Map Your Evidence)
## Make it obvious how you meet P5, P6, M5, D4

- **P5**: Explain the safe use of fault-finding test equipment
- **P6**: Demonstrate fault finding analysis by locating and rectifying faults
- **M5**: Apply + document safe/correct use of equipment and techniques
- **D4**: Investigate fault causes + propose design-spec amendments to improve reliability

**Tip:** Put a small label on slides (e.g., “Evidence: P5/M5”) to show assessors where to look.

---

# Integrity Reminder (Again)
## Use this template as structure, not as finished text

- The wording in [EXAMPLE] blocks is **starter phrasing**.
- Replace it with your *own* system details, *your* results, and *your* reasoning.
- You can reorder slides if your project needs a different flow.

---

# Agenda

1. System overview + normal operation
2. Safety, compliance, and risk assessment
3. Documentation used (datasheets/manuals/schematics)
4. Fault symptoms + evidence capture
5. Methodical fault location plan
6. Test equipment: safe use + settings + limitations
7. Results: measurements, logs, screenshots
8. Fault identification, cause analysis, and verification
9. Rectification steps + retest + return to service
10. Reliability improvements (design amendments)
11. Conclusion + references + appendices

---

# Slide Guidance: “What good looks like”

Your assessor should be able to answer:
- What was the system supposed to do?
- What went wrong (symptoms), and how do you know?
- What tests did you run, in what order, and why?
- How did you use instruments safely and correctly?
- How did you decide the fault cause (not just a guess)?
- What did you change to fix it?
- How did you verify it’s fixed and safe to return to service?
- What design changes would reduce recurrence?

---

# Project Context

- **System/rig:** [e.g., LEGO EV3 pick-and-place arm / conveyor + sensor + PLC / ESP32 robot arm / pneumatic actuator station]
- **Operating environment:** [lab bench / workshop / simulated]
- **Stakeholders/users:** [technician, operator, student]
- **Constraints:** [time, tools available, access restrictions, safety rules]

[EXAMPLE]
- “The system is a small pick-and-place station using a DC motor conveyor, a photoelectric sensor for part detection, and a microcontroller that drives a relay for the motor.”

[EV3-ALIGNED EXAMPLE]
- “The system is a LEGO EV3 robotic arm with three motors (base rotation, arm lift, claw open/close) and an object-detection sensor. The EV3 brick runs a block program that detects an object, closes the claw, lifts, rotates, and places the object at a target location.”

---

# Typical System Example (Optional)
## LEGO EV3 pick-and-place arm (to help you visualise LO4)

Use this slide if your project is the EV3 arm, or adapt it if you used a different system.

- **Controller:** EV3 Brick (ports + firmware + program)
- **Actuators:** 3× EV3 motors (with built-in rotation sensing/encoders)
- **Sensor:** [Touch / Ultrasonic / Color / IR] used for object detection
- **Power:** EV3 battery pack
- **Mechanics:** gears, beams, linkages, claw mechanism

Keep it open-ended:
- If your build differs (different sensor, different movement sequence, different gripper), explain your version.

---

# System Boundary & Assumptions

Define what is “inside” your investigation:
- Included subsystems: [power, sensors, actuators, controller, comms, HMI]
- Excluded items: [facility power upstream of socket, compressed air supply beyond regulator, etc.]
- Assumptions: [known-good PSU, known-good code baseline, etc.]

**Why this matters:** It makes your investigation fair, focused, and reproducible.

---

# Block Diagram (High-Level)

Insert a simple diagram:
- Inputs → processing/control → outputs
- Show energy flows (electrical / pneumatic / hydraulic / thermal)

**Include:**
- Power source(s)
- Controller(s)
- Sensors
- Actuators
- Communication links

[PLACEHOLDER: insert block diagram image]

---

# Normal Operation (Original Correct Function)
## What should happen when it is working?

Describe the intended function:
- Start-up sequence
- Normal steady-state behaviour
- Shutdown behaviour
- Typical setpoints / ranges

[EXAMPLE]
- “When enabled, the controller reads the temperature sensor every 500 ms and controls the fan to maintain 35–40°C. The display updates every second.”

[EV3-ALIGNED EXAMPLE]
- “When the program starts, the EV3 checks the sensor reading. When an object is detected, the claw closes, the arm lifts to a safe height, the base rotates to the drop-off position, the claw opens to release the object, then the arm returns to home and waits for the next object.”

---

# Acceptance Criteria (Define “Working”)

List measurable criteria:
- Output performance: [speed, position error, pressure, temperature]
- Safety behaviour: [E-stop response, interlocks]
- Electrical limits: [current draw, voltage rails]
- Software behaviour: [state transitions, alarms]

[EXAMPLE]
- “5 V rail stays between 4.85–5.15 V under load; motor current < 1.2 A; sensor output toggles cleanly; E-stop removes actuator power within 0.5 s.”

[EV3-ALIGNED EXAMPLE]
- “The arm completes pick-and-place successfully at least 8/10 attempts with the same object.”
- “Base rotation returns to the same home position within ±5° (using motor rotation feedback).”
- “Claw closes without stalling (no repeated clicking/skipping) and holds the object for the full move.”
- “Sensor consistently detects the object at the intended distance/position (stable readings, no false triggers during motion).”
- “Battery voltage is within the expected operating range and does not dip excessively when motors start.”

---

# Integrity Reminder (Again)

- You can use the acceptance criteria examples as inspiration.
- Replace all numbers with values relevant to **your** system and sources.

---

# Safety-First Culture (P5 / M5)
## Explain and apply safety procedures

Cover:
- **Hazards:** moving parts, pinch points, stored energy (spring/gravity), hot motors (after repeated runs), battery short-circuit risk, trip hazards from cables
- **Controls:** isolation, guarding, lock-out/tag-out (if applicable), PPE, safe distances
- **Human factors:** clear workspace, no loose clothing, one hand rule (where relevant), buddy checks

[PLACEHOLDER: include photo of lab setup showing safe arrangement]

---

# Risk Assessment Summary (P5 / M5)

Provide a compact table:
- Hazard
- Who could be harmed
- Risk level (before)
- Control measures
- Risk level (after)

[EXAMPLE]
- “Live measurements on mains PSU: risk high → use isolated bench supply, insulated probes, one-hand rule → risk medium/low.”

---

# Compliance / Policies / Regulations (as relevant)

List what you followed:
- University/lab safety policy documents
- Equipment manuals and safe operating procedures
- Relevant standards/guidance (only if you actually used them)

**Write honestly:** It’s better to cite one real policy you followed than to list many you didn’t.

---

# Integrity Reminder (Again)

- Do not copy safety text from policy documents.
- Summarise the *parts you actually followed* and cite the document.

---

# Documentation Used (Show Your Sources)
## Component datasheets + drawings + manuals + fault reports

Create a list of documents you used:
- Datasheets: [sensor model], [actuator model], [driver IC]
- System drawings: wiring diagram, schematic, P&ID/flow diagram (if fluids)
- Manuals: controller, power supply, PLC, HMI
- Previous fault reports / maintenance logs (if provided)

[PLACEHOLDER: add thumbnails/screenshots of key pages you used]

---

# How to Find Good Technical Information (Student Guide)

When searching, use:
- Exact part numbers (e.g., “MPX5700 datasheet PDF”)
- Manufacturer site first (then reputable distributors)
- Keywords: “application note”, “typical circuit”, “wiring diagram”, “troubleshooting”, “calibration”, “error codes”

Search examples:
- “<[SENSOR PART NO]> output voltage vs pressure graph”
- “<[DRIVER IC]> typical application circuit”
- “<[PLC MODEL]> alarm code <code> meaning”

**Quality check:** Prefer PDFs with manufacturer branding and revision numbers.

---

# Document Control (Location, Version, Access)

Explain how you managed documents/data:
- Storage location: [OneDrive/Teams/Git folder]
- Naming convention: [YYYY-MM-DD_system_testname_v1]
- Version control method: [Git / manual versioning]
- Access/authorisation: [who can edit vs view]

[EXAMPLE]
- “All test logs stored in Teams > Module > Group X. Only group members had edit access; tutor had view access.”

---

# Data Collection Systems (Logs, Dashboards, Databases)

Describe what you used (even if simple):
- Serial logs / CSV files
- Spreadsheet tables
- Database (if used)
- Dashboard (e.g., plotted trends)

Include:
- What data points were captured
- Sampling rate (if relevant)
- Why those data help diagnose faults

---

# Integrity Reminder (Again)

- Don’t paste raw datasheet paragraphs.
- Use datasheets to justify your chosen test limits and expected values.

---

# Fault Scenario (What was “given”?)

State the fault context:
- Was the fault pre-inserted by tutor or naturally occurring?
- What was the initial symptom?
- When does it happen (startup, under load, intermittently)?

[EXAMPLE]
- “The motor sometimes fails to start; when it does start, speed is unstable and the controller reports an undervoltage warning.”

[EV3-ALIGNED EXAMPLE]
- “The arm detects the object but the claw does not close fully, causing the object to slip during lift.”
- “The base rotation overshoots and places the object in the wrong area.”
- “The program sometimes triggers ‘object detected’ when nothing is present (false positives).”
- “The arm runs once then stops because a motor stalls or the battery voltage drops under load.”

---

# Evidence Capture (Before Touching Anything)

Show that you documented the initial state:
- Photos of wiring/layout
- Short video of symptom (optional)
- Controller/HMI screenshots
- Error codes
- Initial measured values (rails, signals)

**Tip:** This supports repeatability and protects against “I changed too much at once.”

---

# Fault Symptoms → Hypotheses (Structured Thinking)

Create a table:
- Symptom
- Possible causes (electrical, mechanical, software, sensor, comms)
- What test can confirm/deny

[EXAMPLE]
- Symptom: “No flow reading”
- Possible causes: sensor unplugged, no power to sensor, blocked pipe, wrong scaling, ADC fault
- Test: check sensor supply, continuity, simulate sensor signal, check ADC counts

[EV3-ALIGNED EXAMPLE]
- Symptom: “Claw closes but object slips”
- Possible causes: clutch/gear slip, wrong motor direction, low torque from low battery, mechanical binding, incorrect grip position, program timing too fast
- Tests: check battery voltage under load, inspect gears/linkages, slow the closing speed, confirm motor direction and rotation counts, try known-good object, repeatability test

---

# Fault Finding Strategy (Methodical Plan)

State the approach you followed:
- Divide-and-conquer / half-split
- Input–process–output tracing
- Known-good substitution
- Signal injection
- Step-by-step isolation

Include a simple flowchart of your diagnostic plan.

[PLACEHOLDER: insert diagnostic flowchart]

---

# Tools & Test Equipment List (P5)

List what you used:
- Multimeter (DMM): model + key functions used
- Oscilloscope (if used)
- Clamp meter (if used)
- Flow meter / temperature probe / pressure meter (if used)
- Insulation tester (if used and permitted)
- Software tools: PLC software, serial monitor, logging scripts, dashboards

[EV3-SPECIFIC EXAMPLES — include only what you actually used]
- EV3 Classroom / Mindstorms software: live sensor view, motor rotation values, screenshots of programs
- EV3 Brick menus: port view, battery level, motor/sensor connection checks
- Phone camera: video evidence of symptoms (slow-motion can help)

Also list:
- Leads/probes type (fused leads, CAT rating if relevant)
- Calibration status (if known)

---

# Safe Use: Multimeter (P5 / M5)

Cover *both safety and correctness*:
- Correct port selection (COM, VΩ, A/mA)
- Correct mode selection (VDC, VAC, Ω, continuity, diode)
- Start on highest range if manual-ranging
- Never measure voltage with leads in current port
- Use fused current inputs where possible
- De-energise before resistance/continuity tests

[EV3-SPECIFIC SAFETY NOTES]
- Avoid shorting the EV3 battery terminals; keep probes separated and steady.
- Remove/disable power before continuity checks on the build.
- Use appropriate range for battery voltage (DC V), and do not force probes into EV3 ports.

[EXAMPLE PHRASE]
- “Before measuring current, I moved the red lead to the fused A port and confirmed the meter was set to DC A. I verified the circuit was within the fuse rating.”

---

# Safe Use: Measuring Current (P5 / M5)

Explain:
- Series connection requirement
- Why accidental parallel connection is dangerous
- Alternative: clamp meter (safer for higher currents)

[EXAMPLE]
- “To avoid blowing the meter fuse, I first estimated expected current from the datasheet and used a clamp meter for the motor supply.”

---

# Safe Use: Oscilloscope / Signal Probing (if used)

Include only if you used it:
- Ground clip risks (short circuits on non-isolated systems)
- Use of differential probes or isolation (if applicable)
- Probe attenuation setting (x1/x10) matching scope setting
- Bandwidth limits and noise considerations

---

# Safe Use: Pressure / Flow / Temperature Instruments (P5 / M5)

Explain:
- Correct range selection (avoid overrange)
- Safe connection/disconnection (depressurise first)
- Leak checks
- Temperature probe placement and contact safety
- Avoiding contamination (if fluids)

[EXAMPLE]
- “I isolated the pneumatic supply and vented residual pressure before installing the pressure gauge to prevent hose whip and sudden release.”

---

# Safe Working Procedure (Step-by-step)

Write your actual procedure:
1. Prepare workspace (clear area, PPE)
2. Identify isolation points (power, air)
3. Verify isolation (try-start / measure 0 V)
4. Connect instruments safely
5. Re-energise only when ready
6. Record measurements with timestamps
7. De-energise before changing wiring

---

# Integrity Reminder (Again)

- Write procedures you *actually followed*.
- Do not claim tools/steps you didn’t use.

---

# Test Plan (What You Tested, In Order)

Provide a numbered list with rationale:
1. [Test] → [Why] → [Expected if healthy]
2. [Test] → [Why] → [Expected if faulty]

[EXAMPLE]
1. “Measure 24 V input at controller terminals” → confirm supply present → “23–25 V expected”
2. “Measure 5 V regulator output under load” → check internal rail stability → “4.85–5.15 V expected”
3. “Check sensor output while actuating” → verify signal changes → “0.5–4.5 V swing expected”

[EV3-ALIGNED EXAMPLE]
1. “Check EV3 battery voltage (no-load and during movement)” → verify power health → “Voltage should not collapse when motors start”
2. “Confirm motors are plugged into the correct ports (A/B/C or 1/2/3) and the program matches” → rule out port mismatch → “Each motor responds as intended”
3. “Use live sensor view to observe sensor readings with and without the object” → confirm detection threshold → “Clear separation between ‘no object’ and ‘object present’ values”
4. “Run each motor individually and record rotation counts/angles for the same command” → check repeatability and stalling → “Similar rotation each trial; no stalls/clicking”
5. “Inspect mechanics (gears, axles, alignment) while turning by hand (power off)” → find binding/slip → “Smooth motion with consistent resistance”

---

# Measurement Table Template (Fill This In)

| Test Point | What it is | Instrument & Range | Expected (healthy) | Measured | Pass/Fail | Notes |
|---|---|---:|---:|---:|---:|---|
| TP1 | [Battery pack voltage] | DMM VDC | [expected range from source] | [ ] | [ ] | [no-load vs under-load noted] |
| TP2 | [Motor rotation to “home”] | EV3 software/brick (degrees) | [e.g., 0° at home] | [ ] | [ ] | [repeatability across trials] |
| TP3 | [Object detect sensor reading] | EV3 live view (raw/units) | [threshold band] | [ ] | [ ] | [lighting/distance notes] |

---

# Results: Voltage Rails (Example Slide Layout)

- **What you measured:** [list rails]
- **Why:** [rail stability affects sensors/controllers]
- **Findings:** [numbers + trend]
- **Interpretation:** [what the numbers imply]

[PLACEHOLDER: insert screenshot/photo of meter + annotated diagram of test point]

---

# Results: Signals / Timing (if applicable)

Include:
- PWM duty/period (servo/motor control)
- Sensor pulse timing
- Serial/CAN messages (IDs, errors)

[PLACEHOLDER: insert scope screenshot or log snippet]

---

# Control Software Evidence (if applicable)

Show:
- Screenshots of PLC tags/online monitoring
- Trend plots
- Alarm/event logs
- State machine transitions

[EV3-ALIGNED EVIDENCE IDEAS]
- Screenshot of the EV3 block program (highlight the detection logic and movement sequence)
- Screenshot/photo of live sensor values (object present vs not present)
- Table of motor rotation values (degrees) for repeated runs
- Any EV3 on-screen error messages or “motor stalled” behaviour (document as observed)

Explain:
- What you looked for
- What the software evidence suggests

---

# Fault Isolation Decision (Explain Your Logic)

Summarise:
- Tests that ruled out certain causes
- The “turning point” observation
- Why you focused on [component/subsystem]

[EXAMPLE]
- “Because the 24 V input was stable but the 5 V rail collapsed when the sensor was connected, the issue likely involved either a shorted sensor or a failing 5 V regulator.”

---

# Identified Fault(s) (P6 / M5)

Clearly state:
- Fault description: [e.g., open circuit, short, miswire, failed sensor, software scaling error]
- Location: [connector, board, line, module]
- Evidence: [measurements/logs/photos]

**Be specific:** “Bad sensor” is too vague; state *what was wrong* and *how you verified it*.

---

# Cause Analysis (D4)
## Go beyond “what failed” to “why it failed”

Use a structured method (choose one):
- 5 Whys
- Fishbone (Ishikawa)
- FMEA-style thinking (failure mode, effect, cause)

Prompt questions:
- Was it misuse, wear, manufacturing defect, design margin, environment, vibration, heat, contamination, EMC noise?
- Was it installation/wiring error?
- Was software logic robust to sensor faults?

---

# Root Cause Summary (D4)

- **Immediate cause:** [what directly caused the symptom]
- **Contributing factors:** [what made it likely]
- **Evidence linking cause to symptom:** [measurements/tests]

[EXAMPLE]
- Immediate cause: “Loose ground connection at terminal X created intermittent reference shifts.”
- Contributing factors: “No strain relief; vibration during operation.”
- Evidence: “Ground resistance changed when cable moved; symptom correlated with vibration.”

---

# Rectification Plan (P6 / M5)

Describe how you fixed it:
- Isolation steps (power off, lockout if required)
- Tools used
- Replacement/repair procedure
- Any settings changes (software parameters, scaling, calibration)
- Post-fix checks before powering up

---

# Rectification Evidence (Photos/Logs)

Include:
- Before/after photo of wiring/component
- Part number of replacement (if replaced)
- Configuration screenshots (if software)

[PLACEHOLDER: insert before/after evidence]

---

# Verification Tests (Return to Service)

Show that the fix worked:
- Repeat the acceptance criteria tests
- Confirm no new faults introduced
- Run system under normal and worst-case (safe) conditions

[EXAMPLE]
- “After repair, the 5 V rail stayed at 5.02 V under load; the sensor output tracked expected range; the motor started reliably 10/10 trials.”

---

# Final System Test (P6)

Describe:
- Test duration
- Operating modes tested
- Any alarms observed
- Operator acceptance / sign-off (if applicable)

**Keep it factual:** If you only tested for 5 minutes, say so.

---

# Safety Check After Repair (P5 / M5)

Confirm:
- No exposed conductors
- Correct fusing
- Correct grounding
- Cables routed safely
- Guards/interlocks functional
- No leaks (if fluids)

---

# Integrity Reminder (Again)

- Your marks come from your reasoning, evidence, and documentation quality.
- A neat story with no measurements is weak.

---

# Reliability Improvements (D4)
## Suggested amendments to design specification

Propose improvements that would reduce recurrence:
- Electrical: better connectors, strain relief, shielding, pull-ups, filtering, TVS diodes, fusing
- Mechanical: better mounting, vibration isolation, alignment, wear-resistant parts
- Software: input validation, fault detection, debounce/filtering, safe states, watchdog timers
- Process: maintenance schedule, pre-use checks, clearer documentation

[EV3-ALIGNED IMPROVEMENT IDEAS]
- Mechanical: add hard stops or guides to improve repeatable home positioning; improve gear mesh/alignment to reduce slipping
- Electrical/connection: label ports and route cables with strain relief to prevent intermittent disconnects
- Software: add a homing/calibration routine at startup; add stall/time-out detection and a safe recovery state; add debounce/filtering for the sensor; slow down movements (ramps) to reduce overshoot
- Process: add a pre-run checklist (battery charged, cables seated, calibration done)

**Tie each suggestion to the observed root cause.**

---

# Reliability Improvement Proposal Template (D4)

For each proposed change:
- **Problem observed:** [e.g., intermittent ground]
- **Proposed spec change:** [e.g., “Add strain relief clamp within 50 mm of terminal”]
- **Why it helps:** [mechanism]
- **Trade-offs:** cost, complexity, maintenance
- **How to verify improvement:** test plan

---

# Example Improvements (Use as Inspiration Only)

[EXAMPLE IDEAS]
- “Add keyed connectors to prevent miswiring.”
- “Specify sensor supply filtering (RC + decoupling) to reduce noise.”
- “Add software alarm if sensor output stuck high/low for >2 s.”
- “Add mechanical guard to prevent accidental cable snag.”

[EV3-ALIGNED EXAMPLE IDEAS]
- “Specify port labelling (A/B/C) on the build and in the program documentation to prevent motor-port mismatch.”
- “Add a calibration step: move arm to a known home stop at low speed and reset motor rotation to 0° before starting.”
- “Add a ‘stall detected’ branch: stop motors, open claw, and alert the operator to prevent damage.”
- “Add cable strain relief and route cables away from rotating joints to reduce intermittent disconnects.”

**Reminder:** Do not copy these verbatim; make them specific to your system.

---

# Reflection: What You Learned

Answer briefly:
- What diagnostic technique was most effective and why?
- What would you do earlier next time?
- What documentation helped most?

---

# Common Mistakes (Avoid These)

- Changing multiple things at once (loses traceability)
- No baseline “normal operation” definition
- No safety/risk section or vague safety claims
- Measurements without units, ranges, or instrument settings
- Conclusions without evidence linking cause → symptom
- No post-fix verification or acceptance criteria

---

# Optional Branch Slide: If Your Fault Was Software

Include if relevant:
- Code/version used
- Inputs assumed vs actual
- Parameter scaling (engineering units)
- State machine logic
- Logging added to prove behaviour

[PLACEHOLDER: include key code snippets ONLY if allowed and relevant]

---

# Optional Branch Slide: If Your Fault Was Mechanical

Include if relevant:
- Wear, friction, backlash, misalignment
- Fasteners torque/loosening
- Material/thermal expansion
- Visual inspection evidence

[PLACEHOLDER: include close-up photos and measurements]

---

# Optional Branch Slide: If Your Fault Was Pneumatic/Hydraulic

Include if relevant:
- Pressure/flow expectations
- Regulator settings
- Valve operation evidence
- Leak test method and results

---

# Conclusion (Tie Back to LO4)

- **Normal function defined:** [1 sentence]
- **Fault symptoms captured:** [1 sentence]
- **Methodical tests applied:** [1 sentence]
- **Fault(s) located and rectified:** [1 sentence]
- **Verification completed:** [1 sentence]
- **Reliability improvements proposed:** [1 sentence]

---

# References (Minimum Expectation)

Provide full references for:
- Datasheets (manufacturer, title, revision/date, URL)
- Manuals (title, version, URL)
- Standards/guidance (if used)
- Any academic sources

[REFERENCE FORMAT EXAMPLE]
- Manufacturer, “Part XYZ Datasheet,” Rev. B, 2024. URL: https://...

---

# Integrity Reminder (Final)

- This deck should reflect your investigation, your data, and your reasoning.
- Use sources ethically: **understand → paraphrase → cite**.

---

# Appendix A — Full Measurement Log (Optional)

Include extra tables, raw logs, screenshots.

---

# Appendix B — Wiring/Schematic Extracts (Optional)

Include annotated extracts (highlight test points, connectors).

---

# Appendix C — Fault Report Template (Optional)

**Fault Report ID:** [ ]  **Date:** [ ]  **System:** [ ]

- Reported by: [ ]
- Symptom description: [ ]
- Operational conditions: [ ]
- Safety actions taken: [ ]
- Initial measurements: [ ]
- Diagnostic steps performed: [ ]
- Fault identified: [ ]
- Root cause analysis: [ ]
- Rectification steps: [ ]
- Verification tests: [ ]
- Return to service decision: [ ]
- Recommended design/process improvements: [ ]

---

# Appendix D — Slide Checklist (Before Submitting)

- P5 covered: safe use of each instrument you used
- P6 covered: fault found, fixed, and verified
- M5 covered: documented method + safe/correct technique details
- D4 covered: cause analysis + specific design-spec improvement proposals
- Evidence included: photos/logs/tables/plots with units
- References included and consistent
- Wording is your own; no copied text
