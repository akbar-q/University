# PD Test Questions — Focused on LO2/LO3 (Industrial Robotics + Robot Programming)

Purpose
- Tutor/assessor question bank for a professional discussion that combines:
  - **Live robot program demo** (what the student built and how it works)
  - **Oral technical questions** mapped to LO3 criteria (P6/P7/M3/D3)

Instructions for assessors
- Ask the student to run the demo first (or step through with dry-run/simulation if required).
- Select questions to cover:
  - **P6** (can they program a task using relevant commands?)
  - **P7** (do they understand tools/sensors/end effectors and applications?)
  - **M3** (can they investigate and recommend realistic improvements?)
  - **D3** (is the program complete, robust, and extensible with a clear improvement roadmap?)
- Use follow-ups to probe realism: safety, calibration, fault handling, cycle time, and data/Industry 4.0 integration.

Mapping to assessment criteria (LO3)
- P6 Using a selection of commands, program an industrial robot to perform given task.
- P7 Explain the types of robot tools, sensors, and end effectors available and their applications.
- M3 Investigate a given industrial robotic system and make recommendations for improvement.
- D3 Produce a fully working robotic program for a given industry task, with an illustrated scope for further improvements to achieve complex tasks.

---

## Demo prompts (start here)
- Walk me through the task: what the robot is meant to do, step-by-step.
- Show the program structure (main routine, subroutines, states/sequences).
- Identify the key commands used (motion, IO, waits, branching, error handling).
- Explain how you verified it works (simulation, dry-run, timing, checks).

Follow-ups:
- What assumptions are you making about tooling, payload, and workpiece position?
- What would cause a collision, and how do you prevent it?

---

## LO3 — Pass-level (P6/P7)

### P6. Commands and task programming
- P6.1. Using a selection of commands, explain how your program makes the robot complete the task.
  - Which motion types are used (joint vs linear vs circular)?
  - Where do you set speed/acceleration/blending?
  - How do you handle IO (gripper open/close, sensor inputs)?

Follow-ups:
- Why choose joint motion for some moves and linear motion for others?
- How do you ensure repeatability at the pick/place points?
- What is your safe home position and why?

### P6.2. Frames, calibration, and accuracy
- Explain how tool frames and work/object frames are set and why they matter.

Follow-ups:
- What happens if the tool centre point (TCP) is wrong?
- How do you re-teach or re-calibrate after a tool change?

### P7. Tools, sensors, end effectors
- P7.1. Explain different tool/end effector types and where they are used.
  - Pneumatic grippers, electric grippers
  - Vacuum cups
  - Magnetic grippers
  - Welding torch, dispensing, screwdriving

Follow-ups:
- What are the trade-offs between pneumatic vs electric grippers?
- How do payload, speed, and part surface affect end effector choice?

- P7.2. Explain sensors used in robotic cells and their applications.
  - Proximity sensors, photoelectric sensors, force/torque sensors
  - Vision systems (2D/3D)
  - Encoders and safety devices (light curtains, safety scanners)

Follow-ups:
- Where would you place sensors for part-present confirmation?
- How do you reduce false triggers (noise/debounce/filtering)?

---

## LO3 — Merit-level (M3)

### M3. Investigate and recommend improvements
- M3.1. Investigate the given robotic system (your demo cell) and recommend improvements.
  - Reliability: fault handling, retries, interlocks
  - Safety: safe stop, E-stop integration, safe restart
  - Performance: cycle time, smooth motion, reduced dwell
  - Quality: consistent placement, sensor confirmation
  - Maintainability: diagnostics, structured code, documentation

Follow-ups:
- If the part is missing, what should the robot do?
- What would you log to help fault finding?
- How would you measure and improve cycle time?

---

## LO3 — Distinction-level (D3)

### D3. Fully working program + extensible scope
- D3.1. Demonstrate a fully working robotic program for a defined industrial task.
  - Includes start/stop behaviour and a safe initialisation sequence
  - Includes sensor-driven checks (e.g., part present / gripper closed)
  - Includes fault handling (timeouts, alarms, safe recovery)

Follow-ups:
- Show how your program prevents unsafe motion or unexpected restart.
- What are the main failure modes and how does your program respond?

- D3.2. Illustrate a scope for further improvements to achieve more complex tasks.
  - Vision-guided picking
  - Multiple part types / recipes
  - Pallet patterns / dynamic targets
  - OEE dashboards and traceability
  - Predictive maintenance triggers

Follow-ups:
- What changes are needed to add vision: calibration steps and program changes?
- How would you integrate with PLC/SCADA/MES in an Industry 4.0 context?

---

## Industry 4.0 + documentation control probes (supporting depth)
- How would you integrate robot data into a smart factory (PLCs, MES, databases)?
- What data would you collect (counts, faults, cycle time) and in what format?
- How do you control documentation: naming, storage location, access, authorisation, versioning?

---

End of PD Test Questions LO2/LO3.
