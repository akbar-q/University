% AME4064 - Week 1: Introduction to Mechatronics
% Year 1 Mechanical Engineering
% 120-minute teaching session

# AME4064

## Week 1: Introduction to Mechatronics

**From mechanical system to mechatronic system**

- Year 1 Mechanical Engineering
- Theory, design thinking and supervised practical

---

# Today's Route

| Time | Activity |
| --- | --- |
| 0-10 min | Welcome, challenge context and learning outcomes |
| 10-35 min | What makes a product mechatronic? |
| 35-55 min | Voltage, current, resistance and power |
| 55-65 min | Worked example and readiness check |
| 65-110 min | Practical: measure before building |
| 110-120 min | Review, exit evidence and next week |

---

# Learning Outcomes

By the end of this session, you should be able to:

1. identify the mechanical, electrical, sensing, control and actuation elements in a simple product;
2. distinguish an energy path from an information path;
3. state the units for voltage, current, resistance and power;
4. calculate power using $P = VI$;
5. use a digital multimeter safely to measure voltage and resistance; and
6. build and check a low-voltage LED circuit with a current-limiting resistor.

---

# Why Mechatronics?

A mechanical product can be stronger, faster or lighter.

A **mechatronic** product can also:

- sense its condition or surroundings;
- make a decision from a rule or program;
- create controlled motion;
- respond consistently to a changing task; and
- provide useful test data.

**Question:** Which of these capabilities would be valuable in a vehicle that must follow a line or stop at an obstacle?

---

# The Recurring Challenge Context

Throughout AME4064, use this mental model:

> A small low-voltage vehicle or pipe-climber must move safely, respond to an input, and meet a stated requirement.

Possible requirements:

- move a specified distance;
- carry or pull a small load;
- stop at an end position;
- follow a contrasting line; or
- repeat the task reliably.

The exact challenge may change. The engineering principles do not.

---

# Think-Pair-Share: Spot the Systems

For one minute, consider an automatic sliding door, a cordless drill or a robot vacuum.

With a neighbour, identify:

- one structural or mechanical part;
- one source of energy;
- one input or sensor;
- one decision-making component; and
- one output or actuator.

Be ready to share one example.

---

# A Useful Definition

A **mechatronic system** combines:

- mechanical structure and motion;
- electrical energy;
- electronics;
- sensors and inputs;
- control or decision-making; and
- actuators or outputs.

It is the purposeful connection between these parts that matters, not simply putting electronics near a mechanism.

---

# From Mechanical System to Mechatronic System

| Mainly mechanical | Mechatronic extension |
| --- | --- |
| Hand-operated trolley | Powered trolley with controlled motor |
| Spring door closer | Sensor-controlled automatic door |
| Bicycle bell | Speed sensor and warning indicator |
| Manual valve | Level sensor, controller and motorised valve |

A mechatronic system can observe a condition and change its behaviour.

---

# Six System Elements

| Element | Question it answers | Vehicle example |
| --- | --- | --- |
| Structure | What holds the system together? | chassis, brackets, wheels |
| Energy source | Where does useful energy begin? | battery or bench supply |
| Sensor/input | What does the system detect? | line sensor or limit switch |
| Controller | What decides what happens next? | microcontroller or relay logic |
| Actuator/output | What creates a physical response? | motor, LED or buzzer |
| Transmission | How is motion delivered? | gearbox, shaft and wheel |

---

# The Energy Path

The energy path tells us how power reaches the part that does useful work.

`Battery -> fuse/switch -> motor driver -> motor -> gearbox -> wheel -> motion`

At each step, some energy is lost as heat, sound or friction.

**Design question:** Where would you place a fuse, and why should it be close to the battery?

---

# The Information Path

The information path tells us how the product decides what to do.

`Sensor or switch -> controller -> motor driver -> motor action`

Examples:

- a limit switch tells a vehicle it has reached an end stop;
- a light sensor tells a line follower where the track is;
- a pushbutton asks a system to start or stop.

Information usually controls energy; it does not supply the motor's power.

---

# Two Paths, One Product

| Path | Carries | Typical components | Design concern |
| --- | --- | --- | --- |
| Energy | electrical and mechanical power | battery, fuse, driver, motor, gearbox | current capacity and protection |
| Information | a signal or instruction | switch, sensor, controller | correct voltage levels and reliable readings |

**Important:** A microcontroller output pin must not power a motor directly. A motor driver sits between the controller and motor.

---

# Block Diagrams Before Circuits

A block diagram is a fast way to communicate a system before selecting every wire and component.

For each block, ask:

- What is its purpose?
- What enters the block?
- What leaves the block?
- What could fail or become unsafe?

Use arrows to show direction of energy or information.

---

# Activity: Complete the Vehicle Diagram

Draw these blocks and connect them with labelled arrows:

- battery;
- fuse and switch;
- controller;
- motor driver;
- motor and gearbox;
- wheel; and
- limit switch.

Then use two colours or line styles:

- **energy path** from battery to wheel;
- **information path** from limit switch to motor action.

Time: 5 minutes.

---

# Engineering Language and SI Units

Clear units make calculations and test data meaningful.

| Quantity | Symbol | SI unit | Unit symbol |
| --- | --- | --- |
| Voltage | $V$ | volt | V |
| Current | $I$ | ampere | A |
| Resistance | $R$ | ohm | $\Omega$ |
| Power | $P$ | watt | W |
| Energy | $E$ | joule | J |
| Time | $t$ | second | s |

Always record a number **and** its unit.

---

# Voltage: Electrical Potential Difference

Voltage is the potential difference that can push charge through a circuit.

- Measured **across** two points.
- A 6 V battery pack has approximately 6 V between its positive and negative terminals.
- Voltage is not current: a source can have voltage even when nothing is connected.

Analogy: voltage is similar to a pressure difference, but electrical circuits should be analysed with measurements and equations, not analogy alone.

---

# Current: Rate of Charge Flow

Current is the rate at which electric charge flows.

- Measured **through** a component or branch.
- Current needs a complete path around a circuit.
- A component draws current according to the applied voltage and its electrical behaviour.
- Current that is too high can overheat wires, damage components and drain a battery rapidly.

Current is measured in amperes (A), often milliamperes (mA):

$$1\ \mathrm{A} = 1000\ \mathrm{mA}$$

---

# Resistance: Opposition to Current

Resistance limits current flow.

- Measured in ohms ($\Omega$).
- A resistor converts electrical energy into heat.
- In an LED circuit, resistance is deliberately added to limit current.
- Wires have low resistance, but never zero resistance in real systems.

For a fixed voltage, increasing resistance generally reduces current.

---

# Power: Rate of Energy Transfer

Electrical power tells us how quickly energy is being transferred.

$$P = VI$$

where:

- $P$ is power in watts (W);
- $V$ is voltage in volts (V); and
- $I$ is current in amperes (A).

Power matters when choosing batteries, fuses, wires, motor drivers and resistors.

---

# Worked Example: Motor Load

A 6 V motor circuit draws 0.20 A while running under a light load.

$$P = VI$$

$$P = 6\ \mathrm{V} \times 0.20\ \mathrm{A}$$

$$P = 1.2\ \mathrm{W}$$

This is electrical input power. The useful mechanical output power will be lower because no motor or gearbox is 100% efficient.

---

# Check Your Understanding

Calculate the power for each case. Show the unit.

| Voltage | Current | Power |
| ---: | ---: | ---: |
| 5 V | 0.10 A | ? |
| 9 V | 0.05 A | ? |
| 12 V | 0.50 A | ? |

Discuss: which circuit transfers energy fastest?

Time: 3 minutes.

---

# Answers and Meaning

| Voltage | Current | Power |
| ---: | ---: | ---: |
| 5 V | 0.10 A | 0.50 W |
| 9 V | 0.05 A | 0.45 W |
| 12 V | 0.50 A | 6.0 W |

The 12 V, 0.50 A circuit has the highest power. It may need a larger power source, more robust wiring and a suitable protective device.

---

# Safety Gate: Low Voltage Still Needs Care

Today uses protected low-voltage DC supplies only. Even so:

- inspect leads and insulation before use;
- keep the bench dry, tidy and free of loose metal objects;
- turn power off before changing wiring;
- never deliberately short a supply or battery;
- use the correct meter terminals and range;
- ask the tutor if a component becomes hot, smells unusual or behaves unexpectedly.

**Stop condition:** disconnect power immediately if a wire, component or battery becomes hot.

---

# The Digital Multimeter (DMM)

A multimeter can measure several quantities. It is useful only when connected correctly.

Typical terminals:

- `COM`: common (black lead);
- `V ohm`: voltage, resistance and low-current measurements (red lead);
- `A` or `mA`: current measurement terminal (red lead when instructed).

Always check the lead position **before** making a measurement.

---

# Measuring Voltage Safely

To measure voltage:

1. insert black lead into `COM` and red lead into `V ohm`;
2. select DC voltage mode and a suitable range;
3. place probes **across** the supply or component;
4. read the value and record its unit.

Never use the current terminal to measure voltage across a supply: it can create a short circuit.

---

# Measuring Resistance Safely

To measure resistance:

1. ensure the component is disconnected from power;
2. insert black lead into `COM` and red lead into `V ohm`;
3. select resistance mode (ohms);
4. touch probes to either end of the resistor;
5. compare measured value with the colour code or labelled value.

Resistance readings in a powered circuit are not valid and may damage the meter.

---

# Measuring Current: Tutor Demonstration

Current must be measured **in series** with the circuit.

- break the circuit and insert the meter into the current path;
- move the red lead to the correct current terminal;
- start on a safe high-current range if uncertain;
- return the lead to `V ohm` after the measurement.

For today's practical, measure voltage and resistance independently. Do not measure current unless the tutor has checked the circuit and meter setup.

---

# The LED Needs Protection

An LED is a diode: it conducts mainly in one direction and emits light when current flows.

- Long leg normally indicates the **anode** (+).
- Short leg or flat edge normally indicates the **cathode** (-).
- LEDs need a series resistor to limit current.
- Reversed polarity normally prevents light output.

Never connect an LED directly across a power supply.

---

# LED Circuit Diagram

`Positive supply -> resistor -> LED anode -> LED cathode -> negative supply`

For a 5 V supply, a typical red LED may drop about 2 V. A 330 ohm resistor gives a safe current for introductory work.

$$I \approx \frac{V_{supply} - V_{LED}}{R} = \frac{5 - 2}{330} \approx 0.009\ \mathrm{A} = 9\ \mathrm{mA}$$

This is an estimate. Real component values vary.

---

# Practical Brief: Measure Before Building

**Aim:** Use a DMM safely, verify the parts, build a protected LED circuit, and record evidence.

**In pairs:**

- Person A sets the meter and makes the measurement.
- Person B checks the meter terminals, mode and probe position.
- Swap roles after each measurement.

**Required evidence:** a completed table, a labelled sketch and one safety control.

---

# Practical Equipment and Roles

Per pair:

- protected low-voltage DC supply or battery pack;
- digital multimeter and leads;
- breadboard and jumper wires;
- 330 ohm resistor;
- red LED; and
- isolated switch lead if supplied.

Before starting, identify the tutor-approved supply voltage and maximum current limit.

---

# Practical Procedure: Inspect and Measure

1. Inspect the leads, breadboard, resistor and LED. Report damage; do not improvise a repair.
2. With power **off**, set the meter to resistance and measure the resistor.
3. Record the measured resistance in ohms or kilohms.
4. Set the meter to DC voltage and verify the supply voltage.
5. Turn power off again before placing any component on the breadboard.

Tutor checkpoint: both partners show the correct meter lead positions.

---

# Practical Procedure: Build and Check

1. Place the resistor and LED in series on separate breadboard rows.
2. Check LED polarity: anode toward the resistor and positive supply.
3. Ask your partner to trace the intended path aloud: positive -> resistor -> LED -> negative.
4. Ask the tutor for a visual check if unsure.
5. Energise the circuit for a short observation.
6. Record whether the LED lights and whether any component warms up.

If the LED does not light, turn power off before investigating.

---

# Practical Troubleshooting Ladder

If the LED does not light:

1. turn the power off;
2. check supply voltage with the meter;
3. check LED polarity;
4. check that each lead is in the intended breadboard row;
5. check the resistor value and placement;
6. check for a complete path from positive to negative; and
7. request tutor support before changing the circuit at random.

Good fault finding changes one thing at a time and records what was checked.

---

# Practical Recording Table

| Item | Expected | Measured/observed | Unit or evidence |
| --- | --- | --- | --- |
| Supply voltage | tutor-stated value |  | V |
| Resistor | 330 ohm nominal |  | ohm or kilohm |
| LED orientation | anode to positive |  | sketch/check |
| LED result | lights without heating |  | observation |
| One safety control | power off before rewiring |  | statement |

Add a labelled circuit sketch showing the supply, resistor, LED and polarity.

---

# Mid-Practical Review

Pause and compare your work against these questions:

- Can you point to the energy path in your LED circuit?
- Why is the resistor included?
- Where are voltage and resistance measured differently?
- What must happen before moving a meter lead or rewiring a breadboard?

Resolve any unanswered question with your partner or tutor before continuing.

---

# Extension: From LED to Vehicle

Use the same system-thinking approach for a small vehicle.

| LED circuit | Vehicle system |
| --- | --- |
| Supply | battery pack |
| Resistor protects LED current | fuse and driver protect motor circuit |
| LED produces visible output | motor produces motion |
| Switch can request action | sensor can request a behaviour |

The component choices differ, but safe power and clear information paths remain essential.

---

# Evidence Check: Annotate a System

Individually, draw a block diagram for a vehicle that:

- uses a battery;
- drives a motor and wheel;
- stops when a limit switch is pressed; and
- includes suitable protection.

Label:

- the energy path;
- the information path;
- the controller; and
- one safety component.

Time: 4 minutes.

---

# Exit Ticket

Complete these before leaving:

1. What is the difference between an energy path and an information path?
2. A 6 V load draws 0.20 A. Calculate its power.
3. State one reason an LED needs a resistor.
4. State one rule for safe multimeter use.
5. Name one component that must not be connected directly to a microcontroller output pin.

Hand in or photograph your annotated block diagram and measurement table as directed.

---

# Key Takeaways

- Mechatronics combines mechanics, electrical energy, sensing, control and actuation.
- Separate the energy path from the information path when thinking about a design.
- Voltage, current, resistance and power have distinct meanings and units.
- $P = VI$ links voltage, current and power.
- Measure before building, check polarity, and isolate power before rewiring.
- A systematic check is safer and faster than trial-and-error wiring.

---

# Next Session

## Week 2: DC Circuits and Digital Inputs

Next we will use:

- Ohm's law, $V = IR$;
- series and parallel circuits;
- LED resistor selection; and
- stable switch inputs using pull-up and pull-down resistors.

Bring this week's block diagram and measurement record.
