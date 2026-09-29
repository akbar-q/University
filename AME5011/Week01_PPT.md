# Week 1 - Mechatronics Baseline, Challenge Launch and Team Formation

**Indicative session length:** 3-4 hours

**Session purpose:** establish what students already know, remove the fear around unfamiliar electrical/control terms, introduce the live challenge, and form balanced project teams.

---

## Slide 1: Welcome to AME5011

### Mechatronic Design Challenge

- You will work in a team to design, build, test and explain an autonomous competition vehicle.
- The challenge changes each year; the engineering process does not.
- You are not expected to arrive as an electronics expert.
- You are expected to ask questions, make evidence-based decisions and improve a real prototype.

Speaker notes:
- Set a calm tone: this is a design-and-build module, not an electronics memory test.
- Explain that the first session starts with a diagnostic so teaching can meet the group where it actually is.

---

## Slide 2: What We Will Do Today

1. Establish the module workflow and safe working expectations.
2. Complete a short, low-stakes mechatronics diagnostic.
3. Reset the essential mechanical, electrical and control ideas.
4. Introduce the 2026 pipe-climber challenge.
5. Form teams and identify initial roles.
6. Convert the brief into first engineering questions.

Speaker notes:
- State clearly that the diagnostic is not a graded assessment.
- Students should answer independently first; uncertainty is useful information.

---

## Slide 3: What Is Mechatronics?

Mechatronics is the deliberate integration of:

- **Mechanics:** structure, bearings, rollers, gears, fasteners and motion.
- **Electrics/electronics:** batteries, wiring, switches, motors, sensors and drivers.
- **Control:** a sequence of decisions that changes outputs using inputs.
- **Software:** the instructions that implement the control sequence.
- **Testing:** evidence that the complete system performs reliably and safely.

Speaker notes:
- Point out that the vehicle fails if any one of these elements is weak.
- Mechanical engineering remains central: it creates the contact, load path, alignment and manufacturability that make the electronics useful.

---

## Slide 4: A Plain-Language Example

### Automatic garage door

| System part | Example |
| --- | --- |
| Mechanical system | Door, track, gearbox and counterbalance |
| Input | Button, safety beam, limit switch |
| Controller | Decides whether to open, stop or reverse |
| Output | Motor, warning light and buzzer |
| Power | Mains supply or battery backup |

**Key idea:** a mechatronic system senses something, decides something, then does something.

---

## Slide 5: Diagnostic Rules

- Work individually for 15 minutes.
- Use no internet, notes or discussion.
- Write an answer or mark `I do not know` rather than guessing silently.
- Use units wherever a quantity is involved.
- This identifies what we need to teach quickly; it does not judge your potential.

Speaker notes:
- Collect responses anonymously if that gives more honest answers.
- Keep a simple tally of recurring gaps to adjust Weeks 2-4 and plan a short recap clinic.

---

## Slide 6: Diagnostic A - Electrical and Power Basics

Answer independently:

1. What is the difference between voltage and current?
2. A 12 V motor draws 2 A while running. Calculate its electrical power.
3. Why should a fuse be placed close to a battery?
4. What happens to pack voltage if two identical cells are connected in series?
5. Name one reason a motor may draw much more current when starting than when spinning freely.

Speaker notes:
- Expected calculation: $P = VI = 12 \times 2 = 24\ \mathrm{W}$.
- The aim is to distinguish conceptual gaps from calculation confidence.

---

## Slide 7: Diagnostic B - Mechanics and Motion

Answer independently:

1. Sketch a free-body diagram for a vehicle climbing vertically with a hanging load.
2. State the relationship between force, torque and roller radius.
3. What is friction needed for in a roller-driven pipe climber?
4. Give one likely consequence of a pipe that is not perfectly vertical.
5. Name one reason a gearbox may be useful between a motor and roller.

Speaker notes:
- Expected relation: $T = Fr$.
- Look for awareness that climbing needs both enough grip and enough drive torque.

---

## Slide 8: Diagnostic C - Control and Programming

Answer independently:

1. What is the purpose of a sensor or limit switch?
2. Put these in order: read a switch, decide what to do, command a motor.
3. What is a motor driver used for?
4. Describe what should happen if a vehicle cannot detect its expected position.
5. Draw a simple flowchart for: start -> move -> stop when a switch is reached.

Speaker notes:
- There is no requirement to know programming syntax today.
- A safe answer to Question 4 should include stopping or entering a defined fault state.

---

## Slide 9: Diagnostic Debrief - Minimum Ideas We Need

- Energy comes from a battery and is controlled before reaching the motor.
- A motor converts electrical power to rotation; a gearbox trades speed for torque.
- Rollers need enough friction and normal force to transmit drive force without slipping.
- Sensors and switches provide information about position or state.
- A controller runs a defined sequence and should fail safely when information is missing.

Speaker notes:
- Invite students to identify which answers felt least familiar.
- Do not over-teach the diagnostic. Use it as the baseline for the rapid concept reset that follows.

---

## Slide 10: Rapid Concept Reset - Voltage, Current and Power

- **Voltage $V$** is the electrical push available from a supply.
- **Current $I$** is the rate of electrical charge flowing through a circuit.
- **Power $P$** is the rate at which electrical energy is supplied or used.
- The basic relation is $P = VI$.
- Batteries, wires, fuses, drivers and motors must all tolerate the expected current.

Worked example:

$$P = 12\ \mathrm{V} \times 2\ \mathrm{A} = 24\ \mathrm{W}$$

---

## Slide 11: Rapid Concept Reset - Battery Packs

- Cells in **series** increase voltage.
- Cells in **parallel** increase capacity and available current capability.
- Battery energy can be estimated using $E \approx V \times Ah$.
- A motor system is sized for both average running current and the much higher starting/stall current.
- Every vehicle needs a correctly chosen fuse, master switch and secure wiring.

Speaker notes:
- Do not present battery chemistry as a theory lecture today.
- Emphasise that students must never improvise damaged packs, exposed conductors or unfused high-current paths.

---

## Slide 12: Rapid Concept Reset - Motor, Gearbox and Driver

- A DC motor creates rotary motion.
- A gearbox reduces output speed and increases usable output torque.
- A motor driver switches the larger motor current using a low-power control signal.
- An H-bridge allows motor direction control: forward, reverse and stop.
- Never connect a motor directly to a microcontroller output pin.

Speaker notes:
- Relate this to mechanical intuition: a gearbox is a torque-speed trade, not free extra power.

---

## Slide 13: Rapid Concept Reset - Force, Torque and Power

- Weight force is $F_g = mg$.
- Roller torque is $T = Fr$.
- Linear speed at a roller surface is $v = r\omega$.
- Mechanical power is $P = Fv$.
- Real systems lose energy through gearbox, bearing, contact and electrical losses.

Worked prompt:

> If a roller must apply 15 N and its radius is 0.015 m, what torque is required at the roller?

Speaker notes:
- Answer: $T = 15 \times 0.015 = 0.225\ \mathrm{N\,m}$.
- Explain that the actual design must include a margin and measured losses.

---

## Slide 14: Rapid Concept Reset - Grip and Normal Force

- Friction transmits drive force from roller to pipe.
- Available traction is limited by $F_{traction} \leq \mu N$.
- $\mu$ depends on pipe condition and roller material.
- $N$ is the force pressing roller and pipe together.
- Excess clamping can increase losses, damage surfaces and cause a jam.

Speaker notes:
- The 2026 pipe is commercial copper in purchased condition, so the team must test rather than assume a friction value.

---

## Slide 15: Rapid Concept Reset - Sensors, Actuators and States

- **Input:** a limit switch reports top-barrier contact.
- **Input:** a position marker/sensor identifies the release zone.
- **Output:** motor driver commands ascent or descent.
- **Output:** green/red lights and buzzer communicate mission state.
- **State machine:** a visible plan for what the vehicle does next.

Example states:

`HOLD -> CLIMB -> TOP_DWELL -> DESCEND -> RELEASE -> STOP`

---

## Slide 16: Control Must Be Safe and Observable

- Every state needs an entry condition, outputs, expected duration and exit condition.
- Every moving state needs a fault response: stop, protect the mechanism and signal the issue.
- Avoid hidden behaviour: use status indicators, labelled wiring and test logs.
- Vehicle firmware must be written and understood by the team.
- Confirm controller and purchased control-hardware eligibility with the organiser before design freeze.

---

## Slide 17: The 2026 External Pipe-Climber Mission

1. Start with the top datum in the defined starting position.
2. Start the vehicle manually; it then acts autonomously.
3. Climb a vertical 22 mm commercial copper pipe while lifting the chain.
4. Contact the top barrier using the top datum surface.
5. Remain in contact, with red light and buzzer, for a valid timed dwell.
6. Descend, release the chain in the required zone and complete the mission without operator intervention.

Speaker notes:
- The annual project specification is authoritative. Explain that this sequence will be converted into testable requirements next week.

---

## Slide 18: Constraints That Cannot Be Designed Away

- Maximum working envelope: 400 mm diameter and 300 mm length, excluding the automatic clip.
- Pipe length: 2,200 mm from the support platform; starting datum is 400 mm from the base.
- Chain mass: 0.15 kg/m; its effective lifted load changes during ascent.
- Budget limit: AED 250, including the 50 mm automatic clip.
- No remote control, wireless technology, wireless programming or GPS tracking.
- Device must remain self-contained and be manufactured by students.

---

## Slide 19: Scoring Changes Design Priorities

- Relative speed: up to 30 points.
- Unsupported holding at the start: 5 points.
- Top engagement: up to 10 points; 10-15 seconds earns the highest stated band, longer than 15 seconds earns zero.
- Chain release in the valid descent zone: 10 points.
- Maximum available per run: 55 points.

**Design principle:** a repeatable, compliant vehicle scores better than a fast vehicle that fails an important mission step.

---

## Slide 20: First Team Challenge - How Could It Climb?

In groups of three or four, sketch two different approaches:

- Opposed driven rollers with spring-loaded idlers.
- A belt/track around the pipe.
- An inchworm or clamp-and-step mechanism.
- Another idea you can explain clearly.

For each approach, annotate:

1. Where the vehicle touches the pipe.
2. How it creates enough grip.
3. How it prevents falling or uncontrolled descent.
4. How it detects the top barrier.

Speaker notes:
- Do not select a final concept today. The objective is to expose assumptions and create curiosity.

---

## Slide 21: Forming Effective Design Teams

- Teams should normally contain 3-5 students, subject to class numbers and competition rules.
- Seek a mix of strengths: CAD/mechanical design, practical fabrication, calculations, coding/electronics, organisation and communication.
- Do not build teams only from friendship groups if the skills are identical.
- Every team member must understand the complete device, even when responsibilities are divided.

Speaker notes:
- Use diagnostic responses and students' self-reported interests to form balanced groups.
- Ensure students who are less confident with electronics are not excluded from hands-on work.

---

## Slide 22: Initial Team Roles and Working Agreement

| Role | Initial responsibility |
| --- | --- |
| Project coordinator | Plan work, meetings, evidence and deadlines |
| Mechanical lead | CAD, structure, contact geometry and fabrication plan |
| Power/control lead | Wiring, motors, sensors, code and safety checks |
| Test and evidence lead | Test plan, data, risk register, BoM and version record |
| Communications lead | Poster, presentation and meeting records |

- Roles rotate or overlap; they are not permanent silos.
- Agree how decisions, costs, changes and failed tests will be recorded.

---

## Slide 23: Week 1 Studio Task and Evidence

Before leaving, each provisional team submits:

- Names, contact method and initial roles.
- One-page sketch showing two climbing concepts.
- Three questions the team needs answered about the rig or rules.
- One initial hazard and one proposed control.
- A list of parts or measurements needed before Week 2.

Speaker notes:
- This is formative evidence, not a polished design submission.
- Collect the diagnostic separately and use it to set the pace of short concept clinics in the next sessions.

---

## Slide 24: What Happens Next

- Week 2: translate the brief into measurable requirements and select concepts systematically.
- We will teach only the electrical/control theory needed to justify and test the vehicle.
- Bring a notebook or digital engineering log to every session.
- Bring questions, failed calculations and uncertainty early; they are cheaper to fix before fabrication.

### Exit question

> What is one concept from today that you understand better, and one topic you need us to teach from first principles?
