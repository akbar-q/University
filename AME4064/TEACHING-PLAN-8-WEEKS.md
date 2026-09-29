# AME4064 - Introduction to Mechatronics for Design Challenges

## Unit Purpose

AME4064 prepares Year 1 mechanical engineering students to contribute safely and credibly to a future mechatronics design challenge. It deliberately teaches only the electrical, electronic and control knowledge needed to understand, specify, build and test a small electromechanical subsystem. It is not an advanced electronics or embedded-systems unit.

The recurring context is a small autonomous vehicle or pipe-climber subsystem: a battery supplies a protected drive circuit; a motor produces motion; a sensor or switch changes the behaviour; and the system is tested against stated requirements.

## Delivery Assumption

- Eight teaching weeks, two sessions per week, normally one theory/design session and one supervised practical session.
- Arduino-compatible microcontroller boards may be used only as transparent teaching tools. Students must be able to explain the input, output, power and code path; no proprietary pre-programmed control module is treated as a black box.
- The final challenge brief changes annually. This unit therefore teaches transferable principles and uses a low-risk bench or floor-vehicle demonstrator rather than committing students to one competition geometry.

## Proposed Learning Outcomes

These are curriculum-planning outcomes, pending confirmation against the validated module specification.

- LO1: Explain the electrical and electronic principles relevant to a simple mechatronic product.
- LO2: Select and safely connect power, sensing and actuation components for a stated application.
- LO3: Build and program a simple microcontroller-controlled electromechanical subsystem.
- LO4: Test, evaluate and communicate the performance, safety and cost of a mechatronic prototype.

## Assessment Strategy

| Evidence | Suggested weighting | Primary evidence |
| --- | ---: | --- |
| Fundamentals workbook | 30% | Calculations, circuit sketches, RLC observations, motor and battery selection |
| Individual practical competency check | 20% | Safe wiring, multimeter use, simple input/output program, fault finding |
| Pair prototype and engineering log | 35% | Functional demonstrator, BoM, test plan/results, risk controls and evaluation |
| Short technical briefing | 15% | Explain design choices and respond to questions |

## Safety Baseline

- Begin every practical with polarity, current-limit and isolation checks.
- Use protected low-voltage DC supplies and fused battery leads only.
- Do not connect motors directly to microcontroller GPIO pins; use a suitable driver and common ground.
- Isolate moving parts before code upload, adjustment or fault finding.
- Record hazards, controls and test stop conditions in the engineering log.

## Weekly Teaching Plan

### Week 1 - What Makes a Mechanical Product Mechatronic?

**Theory/design:** Unit launch; challenge examples; energy, signal and motion paths; voltage, current, resistance, power and SI units; reading a simple block diagram.

**Practical:** Multimeter induction; measure a resistor, LED circuit and DC supply; construct an LED current-limiting circuit.

**Evidence:** Annotated system block diagram and completed basic electrical calculations.

### Week 2 - Basic Electronic Theory and DC Circuits

**Theory/design:** Ohm's law, Kirchhoff's current and voltage ideas, series/parallel resistance, power dissipation, LEDs, switches, pull-up/pull-down resistors and voltage dividers.

**Practical:** Build and test series and parallel circuits; use a switch and resistor network to produce stable logic-level input.

**Evidence:** Circuit diagram, measured-versus-calculated table and explanation of a safe LED resistor choice.

### Week 3 - R, L and C in Real Systems

**Theory/design:** Resistance, inductance and capacitance; time constants; filtering and smoothing; electromagnetic induction; motor back-EMF; why flyback protection and decoupling are needed.

**Practical:** Observe capacitor charge/discharge; compare noisy motor supply behaviour with and without decoupling; test a protected transistor or motor-driver circuit.

**Evidence:** Time-constant calculation, labelled waveform/observation and motor-protection explanation.

### Week 4 - Motors, Gearboxes and Motion

**Theory/design:** DC motor parameters, speed-torque curve, stall current, gearbox ratio, efficiency, friction, wheel/roller contact and introduction to traction.

**Practical:** Characterise a small geared motor at no load and a controlled load; measure current and speed; calculate output speed and estimated torque.

**Evidence:** Motor data sheet, measurement table and justified motor/gearbox selection.

### Week 5 - Batteries and Motor Drives

**Theory/design:** Cells, series/parallel packs, voltage, capacity, C-rate, internal resistance, energy, voltage sag, fuses, switches and H-bridge drive concepts.

**Practical:** Compare regulated bench supply and battery operation; wire a fused battery-to-driver-to-motor system; test forward, reverse and stop states using an H-bridge.

**Evidence:** Power-path schematic, battery runtime estimate and safe connection checklist.

### Week 6 - Inputs, Outputs and Basic Control

**Theory/design:** Microcontroller purpose, GPIO, digital and analogue inputs, PWM, sensors, limit switches, state machines and simple closed-loop thinking.

**Practical:** Program a microcontroller to read a switch/sensor and control an LED, buzzer and motor driver; use non-blocking timing where practical.

**Evidence:** Annotated code, wiring diagram and test cases for normal and fault states.

### Week 7 - Traction, Power and a Small Vehicle System

**Theory/design:** Translating load to force, torque and power; rolling resistance, grip, normal force, factor of safety, design margins, BoM cost and testable requirements.

**Practical:** Pair build: a small floor vehicle, winch or roller demonstrator that starts, moves a defined load and stops at a switch/marker.

**Evidence:** Requirements list, force/torque/power calculation, initial BoM and risk assessment.

### Week 8 - Test, Improve and Explain

**Theory/design:** Test planning, repeatability, measurement uncertainty, fault finding, design review and concise engineering communication.

**Practical:** Demonstrate the prototype; perform peer test and improvement cycle; individual practical competency check.

**Evidence:** Test record, evaluation, revised design action, final engineering log and three-minute technical briefing.

## Minimum Equipment Set Per Group

- Breadboard, resistor/capacitor/diode/LED kit and switches
- Digital multimeter and protected bench DC supply
- Arduino-compatible board and USB cable
- Low-voltage DC gearmotor, suitable motor driver, flyback-protected relay or transistor module
- Fused battery holder/pack, switch and basic wiring/connectors
- Limit switch and one simple analogue sensor
- Small wheel/roller, load masses and force gauge or spring balance

## Progression to AME5011

Students completing AME4064 should be able to explain power flow, select a protected motor drive, estimate motor and battery requirements, wire basic sensors and switches, and follow a test plan. AME5011 then applies those foundations to an open-ended competition vehicle, where mechanical packaging, traction, autonomy, repeatability and competition compliance become the central difficulty.
