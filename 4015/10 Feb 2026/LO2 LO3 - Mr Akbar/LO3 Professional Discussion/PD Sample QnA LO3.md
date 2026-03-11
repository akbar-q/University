# Professional Discussion — Focused Q&A for LO2/LO3 (Industrial Robotics + Robot Programming)

Purpose
- Revision-style Q&A to prepare for a **live robot program demo** plus **oral questions**.
- Focus is LO3 criteria: P6/P7/M3/D3, with broader LO2/element knowledge to support explanations.

How to use (student)
- Prepare 3 artefacts to show during the discussion:
  - A one-page program overview (state/sequence diagram or flowchart)
  - An IO list (inputs/outputs used: sensors, gripper, safety signals)
  - A short improvement roadmap (3–6 bullet items with justification)

Mapping to assessment criteria (LO3)
- P6 Using a selection of commands, program an industrial robot to perform given task.
- P7 Explain the types of robot tools, sensors, and end effectors available and their applications.
- M3 Investigate a given industrial robotic system and make recommendations for improvement.
- D3 Produce a fully working robotic program for a given industry task, with an illustrated scope for further improvements to achieve complex tasks.

---

## Question A — LO3.P6 (Explain how your program works)
Q: Using a selection of commands, explain how your robot program performs the given task.

Model answer (structure you can reuse):
- Task summary: The robot performs a defined sequence (e.g., pick part, confirm grip, move to place, release, return home).
- Program structure: I use a main routine with clear steps/states (INIT → WAIT_START → PICK → PLACE → COMPLETE/LOOP → FAULT).
- Motion commands:
  - Joint moves for fast/safe travel between waypoints (reduce collision risk and optimise time).
  - Linear moves for approach/withdraw and accurate placement (maintain tool orientation).
  - Speed/acceleration settings based on payload and process risk.
- IO + synchronisation:
  - Output commands for end effector (open/close/vacuum).
  - Waits/conditions for sensors (part present, gripper closed, vacuum OK) with timeouts.
- Safety and reliability:
  - Safe home and clear start-up behaviour.
  - Fault handling: timeouts trigger safe stop, alarm, and require operator reset.

Examiner follow-ups you should be ready for:
- Why did you choose joint vs linear moves at specific points?
- How do you prevent collisions and singularities?
- How did you verify the program (simulation, dry-run, speed limits)?

---

## Question B — Frames, calibration, and repeatability
Q: How do calibration and coordinate frames affect accuracy in your program?

Model answer:
- Tool Centre Point (TCP): Defines the tool tip position; if TCP is wrong, pick/place points will be offset.
- Work/object frame: Defines the job reference (e.g., conveyor/pallet origin). Using a work frame helps when the cell shifts or fixtures change.
- Calibration steps:
  - Set/verify TCP with a calibration method (e.g., 4-point).
  - Teach/verify the work frame relative to fixtures.
  - Validate with test moves at low speed.
- Repeatability controls:
  - Use consistent approach points, linear approach, and sensor confirmation.
  - Minimise compliance (tool flex) and manage payload.

---

## Question C — LO3.P7 (Tools, sensors, end effectors)
Q: Explain the types of robot tools, sensors, and end effectors available and their applications.

Model answer (examples + application):
- End effectors/tools:
  - Pneumatic gripper: simple, fast, good for repetitive handling; needs air supply and valves.
  - Electric gripper: precise control and feedback; easier force control but higher cost.
  - Vacuum: good for flat, non-porous parts; needs vacuum generation and vacuum sensing.
  - Magnetic: good for ferrous parts; consider residual magnetism and safety.
  - Process tools: welding, dispensing, screwdriving, deburring.
- Sensors in robotic cells:
  - Proximity/photoelectric sensors: part present, position confirmation.
  - Force/torque: compliant insertion, collision detection, quality checks.
  - Vision (2D/3D): locating randomly oriented parts, inspection, guidance.
  - Safety devices: E-stop, light curtains, safety scanners, enabling switches.
- Selection considerations:
  - Part material/geometry, surface, weight, required speed, accuracy, environment.

---

## Question D — LO3.M3 (Investigate and recommend improvements)
Q: Investigate the given industrial robotic system (your cell) and recommend improvements.

Model answer:
- Reliability improvements:
  - Add sensor timeouts and clear alarms to prevent indefinite waits.
  - Add retries for intermittent pick failures (with a safe limit).
  - Add interlocks: don’t move to place unless grip/vacuum confirmed.
- Performance improvements:
  - Reduce unnecessary dwell time (optimise waits, use blending where safe).
  - Use faster travel moves in free space, slower near fixtures.
  - Measure cycle time and identify bottlenecks.
- Maintainability improvements:
  - Structured program (named routines, consistent naming for IO/points).
  - Add diagnostic messages/counters.
  - Provide a commissioning checklist and change log.
- Safety improvements:
  - Confirm safe restart behaviour (no unexpected motion).
  - Validate E-stop integration and recovery.

Industry 4.0 angle:
- Log counts, cycle time, and faults for OEE; publish to PLC/SCADA/MES.
- Use preventive maintenance triggers (e.g., gripper cycles).

---

## Question E — LO3.D3 (Fully working program + scope for complex tasks)
Q: Explain what makes your program “fully working”, and show a realistic scope for further improvements.

Model answer:
- Fully working means:
  - The robot reliably completes the task end-to-end with safe start/stop behaviour.
  - IO is integrated (gripper + sensors) with confirmation and timeouts.
  - Faults are handled safely with operator acknowledgement/reset.
  - The program is readable, documented, and repeatable.
- Scope for improvement (examples):
  - Vision-guided pick (camera calibration + dynamic target offsets).
  - Multiple recipes for different parts/pallet patterns.
  - Tool change support with automatic TCP selection.
  - Better diagnostics: fault codes, timestamps, trend data.
  - Simulation/digital twin for offline testing and faster changeover.

---

## Quick revision checklist
- Can you name robot types (articulated/SCARA/delta/cartesian/cobot/mobile) and a typical application?
- Can you explain the key commands you used (motion + IO + waits + branching + fault handling)?
- Can you justify end effector and sensor choices for the task?
- Can you propose 3+ improvements covering safety, performance, and maintainability?
- Can you explain how Industry 4.0 data/logging improves operations?

---

End of PD Sample QnA LO2/LO3.
