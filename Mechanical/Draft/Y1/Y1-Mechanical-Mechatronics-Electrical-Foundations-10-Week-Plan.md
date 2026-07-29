# Year 1 Mechanical Engineering: Electrical and Electronics Foundations for Mechatronics

## Ten-Week Learning Plan

**Audience:** Year 1 mechanical engineering students with little or no previous electrical knowledge.

**Purpose:** Give students the minimum practical theory, vocabulary, measurement skills, and safety awareness needed to take part confidently in electromechanical and embedded projects in Year 2. The course is deliberately motor-centred: every electrical idea is connected to moving a load, selecting a supply, or contro
lling a small DC motor.

**Delivery:** 10 weeks x 1 session/week x 2 hours/session = **20 guided learning hours**.

**Core design challenge used throughout:** A battery-powered DC motor must move a small wheeled vehicle, winch, conveyor, or similar mechanical load. Students progressively decide how to power it, measure it, calculate its demand, and control it safely.

---

## Entry Position and Teaching Approach

Students should not be assumed to know circuit symbols, units, algebraic rearrangement, or how to use a multimeter. Begin with a visible mechanical outcome, then introduce only the electrical model needed to explain it.

- Start each topic with a motor, battery, lamp, or actuator that students can see working.
- Introduce one new quantity at a time: voltage, then current, then resistance, then power.
- Use SI units consistently: volt (V), ampere (A), ohm, watt (W), ampere-hour (Ah), newton (N), metre per second (m/s), and newton metre (Nm).
- Keep practical work at extra-low voltage, normally 3-12 V DC.
- Use worked examples before independent calculations and provide an equation sheet until the final week.
- Require students to explain results in plain mechanical language, not only calculate a number.

### Essential Safety Boundaries

- No mains electricity, open high-current battery packs, or unguarded rotating machinery.
- Inspect leads, connectors, battery holders, and insulation before use.
- Disconnect power before changing wiring.
- Use a fuse or current-limited bench supply for motor practicals.
- Do not short-circuit batteries; batteries and motors can become hot during stall tests.
- Keep fingers, hair, loose clothing, and cables away from rotating shafts, wheels, gears, and belts.
- A motor stall test is a brief measured demonstration only; do not leave a stalled motor energised.

---

## End-of-Plan Capabilities

By the end of Week 10, students should be able to:

1. Read a simple DC circuit diagram and build it safely from a diagram.
2. Use a multimeter correctly to measure DC voltage, current, resistance, and continuity.
3. Apply Ohm's law, electrical power, and battery runtime calculations to a simple motor system.
4. Explain series and parallel connections, including practical implications for batteries and loads.
5. Describe capacitance, inductance, and their relevance around DC motors without advanced AC mathematics.
6. Explain DC motor parameters: rated voltage, no-load speed, rated current, stall current, torque, speed, power, and efficiency.
7. Relate force, wheel radius, speed, torque, and traction to the electrical demand of a motor-driven system.
8. Choose a sensible battery arrangement, fuse, switch, driver approach, and protection features for a low-voltage DC motor application.
9. Explain why a microcontroller cannot normally drive a motor directly and identify the role of a motor driver, MOSFET, relay, and flyback diode.
10. Produce and justify a simple Year 2 project power-and-drive concept.

---

## Recommended Two-Hour Session Pattern

- **0:00-0:15 - Retrieval and hook:** five-minute recap, then a visible mechanical or electrical problem.
- **0:15-0:40 - Teach and model:** introduce one or two essential concepts with a worked example.
- **0:40-1:25 - Guided practical or calculation activity:** students work in pairs using a structured worksheet.
- **1:25-1:45 - Apply to the motor-drive challenge:** make an explicit link to the core vehicle, winch, or conveyor scenario.
- **1:45-2:00 - Check for learning and tidy-down:** exit ticket, notebook evidence, safety shutdown.

---

## Minimum Equipment and Resources

- Extra-low-voltage bench supplies with current limit and/or AA battery holders
- Small brushed DC motors, wheels or simple gearboxes, and representative mechanical loads
- Multimeters, leads, breadboards or terminal blocks, switches, lamps/LEDs, and resistors
- Resistors, capacitors, diodes, flyback diodes, and an inductor/relay coil for demonstration
- Inline fuse holders and suitable low-value fuses
- Logic-level MOSFET motor-driver module and/or H-bridge module; relay module for comparison
- Digital scale or spring balance, ruler/tape measure, and tachometer if available
- Manufacturer datasheets for the motors, batteries, and driver modules used in class

---

## Assessment and Evidence Strategy

Use low-stakes weekly checks rather than a theory-heavy final test. Students keep a short engineering notebook or digital portfolio containing circuit sketches, calculations, measurement tables, safety observations, and design decisions.

- Weekly exit ticket or five-question retrieval quiz
- Completed practical worksheets with units and labelled measurements
- Week 5 circuit-and-meter skills check
- Week 7 motor-characterisation data table and short interpretation
- Week 10 individual or pair design brief: battery-powered DC motor drive for a stated mechanical task

---

# Week 1 - Electricity in a Mechanical System

**Week goal:** Build confidence, establish safe extra-low-voltage working, and identify the parts of a simple battery-motor system.

**Key vocabulary:** circuit, source, load, conductor, insulator, polarity, DC, open circuit, short circuit.

**Learning intentions**
- Recognise where electricity appears in familiar mechanical systems.
- Identify the source, conductors, switch/control, load, and mechanical output in a basic motor system.
- Follow essential extra-low-voltage safety rules.

**Teach and model**
- Start with a small battery-motor-wheel system. Ask where energy starts, where it goes, and what useful mechanical result it produces.
- Introduce the energy chain: chemical energy in battery -> electrical energy in circuit -> rotational mechanical energy at motor -> motion, heat, and sound losses.
- Explain DC polarity and why reversing battery connections reverses a brushed DC motor.
- Demonstrate safe versus unsafe connections, including a short circuit using a current-limited supply only.

**Guided activity**
- In pairs, label a photograph or physical rig with source, conductors, control, load, output, and likely hazards.
- Build a battery-switch-motor circuit from a supplied pictorial diagram and record what happens when polarity is reversed.

**Motor-drive connection:** Every later decision is part of the same energy path: battery -> protection -> control -> motor -> mechanical load.

**Check for learning:** Draw the energy chain for a battery-powered vehicle and state one reason a short circuit is dangerous.

---

# Week 2 - Voltage, Current, and Safe Measurement

**Week goal:** Introduce the two quantities students must not confuse and establish correct multimeter use.

**Key vocabulary:** voltage, current, potential difference, ampere, volt, multimeter, parallel measurement, series measurement, continuity.

**Learning intentions**
- State that voltage is a potential difference and current is the rate of charge flow.
- Use a multimeter to measure DC voltage safely across a battery and motor.
- Predict how an open circuit differs from a complete circuit.

**Teach and model**
- Introduce voltage as the electrical push available between two points and current as the flow that occurs only when there is a complete path.
- Emphasise meter connection: voltage is measured in parallel; current is measured in series.
- Demonstrate the common beginner error: placing an ammeter directly across a battery creates a short circuit.
- Explain meter ranges, probe sockets, polarity, and why an unexpected result should be checked before wiring is altered.

**Guided activity**
- Measure the open-circuit voltage of an AA cell or bench supply and voltage across a running motor.
- Make and break the circuit with a switch, recording voltage and observed motor behaviour.
- Practise continuity testing on an unpowered switch and lead.

**Motor-drive connection:** A motor needs the correct voltage available across it, while the source, wiring, and driver must safely carry the current it draws.

**Check for learning:** Annotate a circuit diagram with correct meter placement for battery voltage and motor current.

---

# Week 3 - Resistance, Ohm's Law, and Electrical Power

**Week goal:** Give students the calculation tools needed to understand current limits, heating, and supply selection.

**Key vocabulary:** resistance, resistor, Ohm's law, power, watt, current limit, rated value, dissipation.

**Learning intentions**
- Explain resistance as opposition to current flow.
- Apply V = I x R and rearrange it to find an unknown voltage, current, or resistance.
- Calculate electrical power using P = V x I.
- Distinguish voltage rating from current capability.

**Teach and model**
- Use a lamp or resistor in series with a supply to show that greater resistance gives lower current at the same voltage.
- Model stepped calculations with units. An equation triangle can be a temporary memory aid, but show rearrangement too.
- Compare two loads at the same voltage but different current draw. Explain that power is the rate of energy transfer.
- Clarify that a motor is not a fixed resistor: its current changes with speed and load.
- Explain why thin wires, undersized resistors, and stalled motors can heat up. Introduce P = I squared x R only as an extension.

**Guided activity**
- Measure several resistors with the meter before connecting them to a supply.
- Build a simple resistor-and-LED circuit using a preselected safe value.
- Complete a motor input-power calculation from supplied voltage and current readings.
- Identify which of three example supplies can power a stated motor, considering voltage and available current.

**Motor-drive connection:** A 9 V supply with insufficient current capability cannot reliably drive a 9 V motor, especially under load or during startup.

**Check for learning:** Explain why a 9 V, 0.1 A supply is unsuitable for a 9 V motor that needs 1 A under load.

---

# Week 4 - Series and Parallel Circuits and Battery Packs

**Week goal:** Enable students to select and wire basic battery arrangements without confusing voltage, capacity, or current paths.

**Key vocabulary:** series, parallel, cell, battery pack, capacity, ampere-hour, internal resistance, voltage drop, balanced cells.

**Learning intentions**
- Draw and recognise series and parallel circuit arrangements.
- State the basic current and voltage rules for each arrangement.
- Explain why most vehicle or machine loads are connected in parallel.
- Estimate battery runtime from capacity and average current.

**Teach and model**
- Use two lamps first, because their brightness gives an immediate visible result.
- Series: one current path, supply voltage shared, and one open component stops the circuit.
- Parallel: more than one path, each branch receives supply voltage, and source current is the sum of branch currents.
- Transfer the idea to motors: two motors in series are difficult to control predictably because their loads are rarely identical.
- Compare a 2 x 1.5 V series holder with a parallel-cell example. Series increases voltage; parallel increases capacity/current capability when correctly matched.
- Explain runtime: runtime (hours) is approximately capacity (Ah) divided by average current (A). Explain battery voltage sag in plain language.

**Guided activity**
- Build and compare two-lamp series and parallel circuits.
- Measure branch voltage and total current using a teacher-provided data table.
- Choose a suitable battery arrangement from motor and task cards.
- Calculate approximate runtime for a 2 Ah pack at two different average currents.

**Motor-drive connection:** Vehicle motors are usually parallel loads so each receives the intended supply voltage; battery configuration is selected separately to meet voltage and runtime needs.

**Check for learning:** Correct a flawed wiring diagram for two drive motors and explain which battery connection changes voltage.

---

# Week 5 - R, L, and C Around Real Motors

**Week goal:** Introduce resistance, inductance, and capacitance as real effects in motors, wiring, relays, and embedded systems, without advanced AC mathematics.

**Key vocabulary:** capacitor, capacitance, farad, inductor, inductance, coil, magnetic field, back EMF, transient, flyback diode, noise.

**Learning intentions**
- Describe a capacitor as a component that stores charge temporarily.
- Explain that a motor and relay coil are inductive loads.
- Explain why flyback protection is used when switching inductive loads.
- Identify resistance, capacitance, and inductance in a motor-drive context.

**Teach and model**
- Demonstrate slow charge/discharge with an LED and a suitably sized capacitor. Explain that capacitors smooth short voltage dips and reduce electrical noise, but do not replace a correctly sized battery.
- Introduce electrolytic capacitor polarity and voltage rating.
- Explain that coils oppose a sudden change in current because of stored magnetic energy. When current is switched off, the collapsing magnetic field can generate a damaging voltage spike.
- Explain flyback diode purpose and orientation using a supplied low-side motor or relay circuit diagram.
- Introduce back EMF: as a motor turns, it generates a voltage that limits current; at stall there is little back EMF, so current becomes high.

**Guided activity**
- Observe an LED-capacitor discharge circuit and identify correct capacitor polarity.
- Identify motor, relay, resistor, capacitor, and diode from a component tray.
- Add a correctly orientated flyback diode and a bulk capacitor to a supplied motor-driver diagram.
- Complete a brief circuit-and-meter skills check.

**Motor-drive connection:** Capacitors help protect supply stability for a controller; flyback paths protect switching electronics; motor back EMF explains why stall current is dangerous.

**Check for learning:** Label a simple protected motor circuit and state one mistake that could damage a polarised capacitor or unprotected driver.

---

# Week 6 - The DC Motor: Datasheets, Speed, Torque, and Current

**Week goal:** Connect electrical input to speed, torque, load, and heating using motor datasheets and direct observation.

**Key vocabulary:** brushed DC motor, rated voltage, no-load speed, no-load current, rated current, stall current, stall torque, torque-speed relationship, gearbox, efficiency.

**Learning intentions**
- Identify essential parameters on a small DC motor datasheet.
- Explain the difference between no-load, rated, and stall conditions.
- Predict how increasing mechanical load affects motor speed and current.
- Explain why a gearbox trades speed for torque.

**Teach and model**
- Display a real motor datasheet and locate nominal voltage, no-load speed/current, maximum efficiency point if stated, stall current, and stall torque.
- Explain the approximate torque-speed relationship: high speed/low torque near no load; high torque/high current/low speed approaching stall.
- Separate continuous operating values from short-duration limits; stall values are not normal operating targets.
- Explain why a gearbox can help a motor operate away from stall.

**Guided activity**
- Datasheet scavenger hunt: students locate five values and translate each into a practical statement.
- Given two motors and one wheel-load application, choose the more suitable motor using voltage, speed, torque, and current evidence.
- Predict how motor current and speed will change when the load is increased in Week 7.

**Motor-drive connection:** Driver, battery, fuse, and wiring must tolerate motor startup and possible stall current, not only its no-load current.

**Check for learning:** Explain why a motor may draw more current climbing a slope even when battery voltage is unchanged.

---

# Week 7 - Motor Measurement, Traction, and Wheel Torque

**Week goal:** Use measured data and simple mechanics to link a real load to motor demand.

**Key vocabulary:** force, friction, traction, wheel radius, torque, gear ratio, rolling resistance, current limit.

**Learning intentions**
- Measure supply voltage and running current for a small DC motor.
- Record no-load and loaded observations safely.
- Estimate the force required to move a small vehicle or load.
- Calculate wheel torque: torque = force x wheel radius.

**Teach and model**
- Revisit current-meter series connection and current-limited supply setup.
- Demonstrate a brief controlled load test using a friction brake, pulley, or small vehicle on a slope. Set an explicit stop condition for heat/current.
- Use a spring balance to measure approximate pull force on a flat surface and explain traction as the tyre/contact ability to transmit force without slipping.
- Derive wheel torque from force at the ground multiplied by wheel radius.

**Guided activity**
- Teams measure motor voltage/current at no load and under one controlled load.
- Record speed if a tachometer is available; otherwise use timed wheel rotations or qualitative speed bands.
- Use measured or supplied pull-force data to calculate wheel torque for two wheel diameters.
- Complete a motor-characterisation table and write one observation linking load, current, and speed.

**Motor-drive connection:** A motor may be electrically powerful enough but still fail if gearing, wheel radius, or traction is unsuitable.

**Check for learning:** Explain why a larger wheel can make a vehicle harder for the same motor to start moving.

---

# Week 8 - Speed, Power, and Selecting a Motor Supply

**Week goal:** Combine electrical and mechanical power ideas to make defensible choices about a motor, battery, and safety margin.

**Key vocabulary:** linear speed, mechanical power, electrical input power, efficiency, design margin, voltage sag, fuse rating.

**Learning intentions**
- Calculate linear speed: speed = distance divided by time.
- Relate mechanical power to mechanical power = force x speed.
- Compare electrical input power and mechanical output power qualitatively to explain efficiency and losses.
- Select a battery and fuse using motor data and a stated duty cycle.

**Teach and model**
- Time a vehicle over a known distance and calculate speed.
- Compare mechanical power needed at the wheels with electrical input power from measured voltage/current data.
- Explain losses from motor winding resistance, friction, gearbox, tyre slip, and electronics.
- Be explicit that early calculations are estimates; a robust design allows margin and is tested.
- Revisit runtime and voltage sag to distinguish a battery's voltage, capacity, and current capability.

**Guided activity**
- Use Week 7 data to estimate electrical input and mechanical output power.
- Identify two likely sources of loss in the rig.
- Select from a set of battery, fuse, and motor choices for a stated wheeled-platform task, giving a short justification.

**Motor-drive connection:** A good power system matches voltage, has enough current capability and runtime, protects against faults, and avoids normal operation near motor stall.

**Check for learning:** Submit a labelled table showing selected motor, battery, expected current, approximate runtime, and one design margin.

---

# Week 9 - Switching, Direction, and Speed Control

**Week goal:** Explain the electronics between a controller and a motor, including direction, speed, protection, and limits of microcontroller pins.

**Key vocabulary:** transistor, MOSFET, low-side switch, motor driver, H-bridge, PWM, duty cycle, relay, fuse, common ground.

**Learning intentions**
- Explain why a microcontroller output cannot normally supply motor current directly.
- Identify roles of a MOSFET/transistor, driver module, flyback diode, and fuse.
- Explain how an H-bridge reverses motor direction.
- Explain PWM speed control as rapid switching that controls average delivered power.

**Teach and model**
- Compare typical controller-pin current capability with motor running and stall current.
- Show the control-power structure: battery -> fuse -> motor -> driver -> ground, with a small control signal commanding the driver.
- Explain common ground, correct supply polarity, and choosing a driver with margin above expected running current and suitable startup/stall tolerance.
- Compare relay and MOSFET: relay is simple on/off and mechanical; MOSFET allows efficient electronic switching and PWM.
- Use an H-bridge block diagram rather than requiring students to build one from individual transistors. Explain duty cycle using 0%, 50%, and 100% visual timelines.

**Guided activity**
- Label a motor-driver module datasheet or wiring diagram: motor supply, outputs, logic input, ground, current rating, and protection features.
- Run a motor or vehicle at three PWM duty-cycle settings using a prepared controller/module, or simulate the same operation.
- Draw a block diagram for a reversible battery-powered motor drive and add a fuse and flyback/protection feature.

**Motor-drive connection:** The microcontroller provides the decision; the driver safely delivers motor current; protection limits damage from faults or switching transients.

**Check for learning:** Name one reason a motor may fail to start at a low PWM duty cycle even though it turns at that setting once already moving.

---

# Week 10 - System Integration and Year 2 Project Readiness

**Week goal:** Consolidate concepts into a justified, safe, and testable motor-drive design concept suitable as a foundation for future embedded/mechatronics work.

**Key vocabulary:** specification, trade-off, verification, fault, protection, test plan, embedded controller, sensor, actuator.

**Learning intentions**
- Convert a simple mechanical requirement into an electrical and motor-drive concept.
- Make justified selections using voltage, current, torque, power, battery, and protection information.
- Identify assumptions and risks rather than hiding uncertainty.
- Communicate a basic electromechanical design to a non-specialist audience.

**Teach and model**
- Present a brief such as: move a 2 kg wheeled platform 5 m on level ground, with reverse capability and 15 minutes of intermittent use.
- Model the first design steps: identify motion requirement; estimate force and wheel torque; select a motor/gearbox; estimate current/power; choose a battery arrangement; choose a driver and fuse; list test conditions.
- Demonstrate how a block diagram differs from a detailed circuit diagram. At this level, a clear block diagram plus one simple power circuit is sufficient.
- Revisit the whole chain: battery -> protection -> driver -> motor -> gearbox/wheel -> traction/load.

**Guided activity and final evidence**
- Students complete and briefly present their design concept. Each submission includes:
  - mechanical requirement and stated assumptions
  - force/torque estimate
  - motor and gearbox choice
  - voltage, current, and power calculation
  - battery configuration and approximate runtime
  - driver, fuse, switch, and flyback/protection choice
  - labelled block diagram and short test plan
- Peer reviewers identify one strength, one risk, and one test that would improve confidence.
- Final retrieval quiz covers units, Ohm's law, power, series/parallel batteries, flyback protection, motor parameters, torque, and driver purpose.

**Check for learning:** Each design has a complete energy path, suitable motor-current path, and no motor current routed through a controller output pin.

---

## Tutor Reference: Core Equations for This Level

Use only where relevant, with units shown in every worked example.

- Voltage = current x resistance: V = I x R
- Electrical power = voltage x current: P = V x I
- Approximate battery runtime (hours) = capacity (Ah) divided by average current (A)
- Wheel torque = force x wheel radius: T = F x r
- Linear speed = distance divided by time
- Mechanical power = force x linear speed

For advanced or confident students only: mechanical power = torque x angular speed.

Do not assess students on deriving motor equations, AC impedance, phasors, semiconductor device physics, or battery chemistry in this introductory plan. Those topics can follow when students need them for a specific Year 2 project.

---

## Progression into Year 2

This plan leaves students ready to extend their work into embedded and mechatronics projects through:

- microcontroller inputs and outputs, ADCs, and sensor selection
- Arduino/embedded programming and PWM generation
- H-bridge driver selection and integration
- encoder feedback, speed measurement, and closed-loop control
- PID control at an applied level
- power budgeting for multiple actuators and sensors
- wiring looms, connectors, grounding, noise reduction, and fault finding
- formal design specifications, risk assessment, testing, and iterative prototype improvement