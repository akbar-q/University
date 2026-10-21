# Practical DC Motors and Geared Motors

**Audience:** Mechanical engineering students working on practical mechatronic systems, including the IMechE pipe-climber challenge.

**Delivery:** Two 120-minute classes. An optional extension at the end can take delivery to approximately 4.5-5 hours.

**Focus:** Brushed permanent-magnet DC motors and the geared motor assemblies commonly used in student prototypes. Brushless motors are introduced only to distinguish technologies and avoid misidentifying them.

**Teaching approach:** Connect each electrical quantity to an observable mechanical result. Use the actual motor, gearbox, driver and power supply students will use wherever possible. Insert local component photographs, manufacturer graphs, circuit diagrams, rig images and measured class data where indicated.

---

## Delivery Overview

| Class | Main question | Core evidence |
| --- | --- | --- |
| 1. Motor fundamentals | How does a brushed motor turn, and how do voltage, current, torque and speed relate? | Annotated motor, data-sheet reading, measured no-load and loaded behaviour |
| 2. Geared motors in a mechanism | How do we turn motor data into a drive choice that works safely and reliably? | Gear calculation, PWM observations, thermal plan and justified selection |
| Optional extension | How do we measure, control and diagnose a complete drive system? | Characterisation plot, fault diagnosis and design review |

### Class 1 Timing - 120 minutes

| Time | Activity |
| --- | --- |
| 0-10 min | Hook: the motor that spins freely but cannot move the vehicle |
| 10-30 min | Energy conversion, magnetism and what makes a motor turn |
| 30-50 min | Construction, brushes and commutation |
| 50-60 min | Break and retrieval prompt |
| 60-80 min | Voltage, current, back EMF and startup current |
| 80-100 min | Torque-speed and current-speed curves; read a data sheet |
| 100-115 min | Short supervised measurement demonstration or paired bench activity |
| 115-120 min | Exit check and bridge to gearboxes |

### Class 2 Timing - 120 minutes

| Time | Activity |
| --- | --- |
| 0-10 min | Retrieval and pipe-climber application |
| 10-30 min | Gearbox construction, ratio, torque and speed trade-off |
| 30-50 min | Convert mechanism requirements into output torque and speed |
| 50-60 min | Break and quick calculation check |
| 60-80 min | PWM, direction control and driver limits |
| 80-100 min | Heat, duty cycle, overdriving and failure modes |
| 100-115 min | Motor selection challenge and design review |
| 115-120 min | Exit ticket and evidence to record |

### Optional Extension Timing - 45-60 minutes

Run the extended characterisation practical, plot results, estimate an operating point and hold a short design review. Use this extension when a 3-hour or longer workshop is available, or split practical work across a later laboratory session.

---

# Class 1 - How a Brushed DC Motor Works

---

## Slide 1: Practical DC Motors and Geared Motors

### From electrical input to useful mechanical work

- Brushed permanent-magnet DC motors
- Geared motor assemblies
- Measurement, selection, control and thermal limits
- Application context: small vehicles, rollers, winches and pipe-climbers

**Suggested visual:** Exploded view or labelled photograph of the exact brushed gearmotor used in the practical.

**Speaker notes:** Begin with a real motor in hand. Ask students to identify what they can see and what they think is hidden inside. Avoid beginning with equations; return to the same motor throughout both classes.

---

## Slide 2: The Motor That Spins but Does Not Work

A motor is connected to a battery and its shaft spins freely. Once attached to the mechanism, the vehicle will not start moving.

Possible causes:

- The motor cannot provide enough torque at the required speed.
- The gear ratio or wheel radius is unsuitable.
- The mechanism is binding or the load is larger than expected.
- The supply voltage sags or a driver current limit is reached.
- The contact surface slips, so motor torque does not become useful drive force.
- The motor starts but overheats during repeated operation.

**Opening question:** What would you measure first, and what result would help distinguish these causes?

**Speaker notes:** Collect hypotheses without immediately judging them. Return to the list during the selection challenge. Emphasise that a motor is part of a drive system, not a stand-alone answer to a mechanical problem.

---

## Slide 3: Learning Outcomes

By the end of these classes, students should be able to:

1. Label the main parts of a brushed DC motor and describe how commutation sustains rotation.
2. Explain the relationships between voltage, current, back EMF, torque and speed.
3. Interpret no-load, rated and stall data without treating stall as a safe operating point.
4. Explain how a gearbox trades output speed for output torque and include efficiency.
5. Explain PWM speed control and identify why duty cycle is not a direct speed command.
6. Identify electrical, mechanical and thermal constraints when selecting a geared motor.
7. Propose a safe, measurable test for a motor-drive assembly.

---

## Slide 4: Start with the Complete Energy Path

`Battery -> fuse -> switch -> motor driver -> motor -> gearbox -> wheel/roller -> load`

- Electrical energy enters the motor.
- Electromagnetic forces produce shaft torque and rotation.
- The gearbox changes the output speed and torque.
- The mechanism transfers force to the load or contact surface.
- Some input energy becomes heat, sound, vibration and friction.

**Suggested visual:** System block diagram with power flow, mechanical output and loss locations on separate lines.

**Speaker notes:** Ask students to locate where a current measurement, shaft-speed measurement, temperature measurement and force measurement could be made. Note that the driver controls motor current; the controller should not directly supply motor current from a GPIO pin.

---

## Slide 5: What Does a Motor Convert?

- Electrical input power: $P_{in}=VI$.
- Rotational mechanical output power: $P_{out}=T\omega$.
- Efficiency: $\eta=P_{out}/P_{in}$.
- Loss power: $P_{loss}=P_{in}-P_{out}$.
- A motor can have high torque at zero speed but zero mechanical output power at stall because $\omega=0$.

**Check:** If the shaft is stalled while current is flowing, where is the electrical input energy going?

**Speaker notes:** Use “rate of energy transfer” as the meaning of power. At stall, electrical power is mostly dissipated as heat in the windings, brushes, driver and wiring; it is not useful rotating output power.

---

## Slide 6: The Brushed Permanent-Magnet DC Motor

Main parts:

- **Stator magnets:** provide a stationary magnetic field.
- **Armature/rotor:** rotating laminated core and windings.
- **Commutator:** segmented copper contacts connected to the windings.
- **Brushes:** stationary electrical contacts that press against the commutator.
- **Shaft and bearings/bushes:** support and transfer rotation.
- **Housing and end caps:** hold and protect the assembly.

**Suggested visual:** Labelled cutaway or exploded view. Use arrows to distinguish stationary and rotating parts.

**Speaker notes:** Small can motors typically use permanent magnets in the stator. Larger brushed motors may use wound field coils. Keep the presentation focused on the permanent-magnet type students are likely to handle.

---

## Slide 7: What Makes the Rotor Turn?

- Current through a conductor creates a magnetic field.
- A current-carrying conductor in the stator magnetic field experiences a force.
- Forces on conductors around the armature create a turning moment, or torque.
- Reversing the current reverses the force direction and motor rotation.
- Reversing both supply polarity and field polarity would leave torque direction unchanged in a separately excited motor; a permanent-magnet field does not reverse with the supply.

**Suggested visual:** Simple armature coil between north and south poles, with current and force arrows.

**Speaker notes:** Students do not need a detailed derivation of the motor force law for this session. The practical mental model is that field strength and armature current set the electromagnetic force, while the geometry sets the resulting torque.

---

## Slide 8: Why the Commutator Matters

- A single coil would experience changing torque as it rotates and could stop at a dead position.
- The commutator changes which armature coil is connected to each brush as the rotor turns.
- This reverses current in a coil at the appropriate rotor position.
- The resulting forces keep producing torque in the same overall direction.
- The brushes and commutator are therefore part of the motor's mechanical and electrical switching system.

**Suggested visual:** Three-frame rotation sequence showing coil position and current direction.

**Speaker notes:** Explain commutation as mechanical switching. Avoid implying that current in the whole motor simply reverses every half-turn; the switched coil connections produce the continuing torque.

---

## Slide 9: Brushes: Useful, Wearable, Noisy

- Brush contact makes the design simple to drive and reverse.
- Brushes and commutator wear with use; brush dust and contact condition matter.
- Switching can produce electrical noise and visible sparking.
- Contact resistance contributes to voltage drop and heating.
- Brush condition, commutator condition, speed, current and environment affect service life.

**Discussion:** Which operating conditions might make brush wear or electrical noise more troublesome in a small autonomous vehicle?

**Speaker notes:** Avoid generalising lifespan without a particular motor specification. Some small motors are designed as low-cost, limited-life components; others are serviceable. Confirm the actual product construction and rating.

---

## Slide 10: A Brushed Motor Is Not a Fixed Resistor

- Winding resistance is present, but the motor's operating current changes with speed and load.
- Rotation generates a voltage opposing the applied voltage: **back EMF**.
- Faster rotation generally produces more back EMF.
- Back EMF reduces the voltage available to drive current through the winding.
- When the motor slows under load, back EMF falls and current rises.

**Suggested visual:** Equivalent circuit with supply voltage, winding resistance, inductance and opposing back-EMF source.

**Speaker notes:** This is the key idea that connects mechanical load to electrical current. The motor is an electromechanical energy converter; its apparent electrical behaviour changes as its speed changes.

---

## Slide 11: A Useful Steady-State Motor Model

For a simplified permanent-magnet DC motor:

$$V \approx IR + k_e\omega$$

$$T \approx k_t I$$

Where:

- $V$ is motor terminal voltage in volts.
- $I$ is armature current in amperes.
- $R$ is effective armature resistance in ohms.
- $\omega$ is angular speed in radians per second.
- $k_e$ and $k_t$ are motor constants; real units depend on the chosen convention.
- $T$ is electromagnetic torque in newton metres.

**Speaker notes:** The full transient voltage equation includes winding inductance: $V=IR+L\,dI/dt+k_e\omega$. For this introductory analysis, use the steady-state form and explain that inductance affects how quickly current changes, especially during switching.

---

## Slide 12: Startup, No Load and Stall

| Condition | Speed/back EMF | Current trend | Mechanical meaning |
| --- | --- | --- | --- |
| At rest/start | Speed and back EMF initially low | Current can be high | Torque is needed to accelerate and overcome static friction/load |
| No-load running | Speed is high; back EMF is substantial | Current is relatively low, not zero | Motor supplies internal friction, windage and brush losses |
| Loaded running | Speed falls from no-load value | Current rises | Motor supplies greater torque to the load |
| Stall | Speed and back EMF are zero | Current approaches the stall value | No rotating output; rapid heating risk |

**Speaker notes:** Startup current is transient and depends on acceleration time, load, supply impedance and driver behaviour. Stall current is a specified or calculated zero-speed condition. They are related, but should not be presented as identical measurements in every system.

---

## Slide 13: Estimating Stall Current Carefully

For a simplified motor at locked rotor:

$$I_{stall}\approx\frac{V}{R}$$

- The estimate assumes the effective winding resistance is known and supply voltage is maintained.
- Brush voltage drop, wiring resistance, battery internal resistance and driver current limiting change the measured value.
- Stall current can be several times no-load current.
- Do not hold a small motor at stall to “see what happens.” Use manufacturer data or a brief, controlled, instructor-led measurement with an explicit stop limit.

**Speaker notes:** Stall current is important for driver, wiring and supply selection, but not a normal operating target. Driver modules may have different continuous and short-duration peak ratings; both must be interpreted using the manufacturer's conditions.

---

## Slide 14: Voltage, Speed and Current

At a fixed motor and load:

- Increasing voltage generally increases speed.
- At a given speed, more voltage can provide more current and torque margin.
- Stall current rises approximately with voltage in the simplified resistance model.
- Higher speed can increase friction, windage, commutation loss and mechanical stress.
- Supply voltage under load may be lower than its open-circuit value because of internal resistance, wiring drop or current limiting.

**Suggested visual:** Overlay motor speed-current data at two permitted voltages; label the curves as illustrative or use the exact motor's data.

**Speaker notes:** Do not imply that every motor follows a perfectly linear speed-voltage relationship at all loads. Use the data sheet and avoid operating above ratings unless the manufacturer provides an approved operating envelope.

---

## Slide 15: The Torque-Speed Curve

- At a fixed voltage, torque is greatest at zero speed: stall torque.
- Speed is greatest near zero external torque: no-load speed.
- Between these endpoints, the curve is often approximately linear over a useful range.
- Real operating limits, temperature and driver/supply limitations may constrain the usable region.
- Stall torque is not a safe continuous torque rating.

**Suggested visual:** Torque-speed graph with no-load speed, stall torque and a shaded continuous operating region taken from a real data sheet where possible.

**Speaker notes:** Identify both axes and units. Distinguish a manufacturer's measured curve from a theoretical straight-line approximation. If the data sheet has no continuous operating region, state that and use manufacturer guidance or testing rather than inventing one.

---

## Slide 16: Current-Torque and Current-Speed Relationships

- In the simplified model, torque is approximately proportional to armature current.
- A higher mechanical load usually means higher torque demand and higher current.
- At fixed voltage, increasing speed raises back EMF and usually reduces current.
- Compare current and speed together; either one alone can hide the reason for poor performance.
- Current is a useful indirect indicator of load, but it is not a direct torque measurement without calibration.

**Suggested visual:** A paired plot: current vs torque and current vs speed, clearly marked as fixed-voltage relationships.

**Speaker notes:** Ask what might cause high current with low speed: excessive load, a jam, unsuitable gearing, low supply voltage with a heavily loaded motor, incorrect wiring or a damaged component. Treat it as a diagnostic clue rather than a unique diagnosis.

---

## Slide 17: Electrical Input Power and Mechanical Output Power

- Electrical input estimate: $P_{in}=VI$.
- Mechanical rotational output: $P_{out}=T\omega$.
- For rpm, convert to radians per second: $\omega=2\pi n/60$.
- Efficiency: $\eta=P_{out}/P_{in}$, using measurements at the same operating point.
- Do not compare stall torque with no-load speed to estimate actual output power; they occur at opposite ends of the curve.

**Worked conversion:** At 300 rpm, $\omega=2\pi(300)/60\approx31.4\ \mathrm{rad/s}$.

**Speaker notes:** Check unit consistency. A common calculation error is combining a torque value from one condition with a speed value from another. Measurement of torque usually needs a defined load fixture or force-and-radius method.

---

## Slide 18: Read the Motor Data Sheet

Locate and label:

- Nominal/rated voltage and permitted range.
- No-load speed and no-load current.
- Rated/continuous torque, speed and current, if specified.
- Stall torque and stall current.
- Motor constants, efficiency curve, thermal information and duty rating.
- Gearbox ratio, output speed, output torque and maximum shaft loads for gearmotors.

**Data-sheet caution:** Some suppliers provide only typical values, use different test conditions, or omit continuous thermal ratings. Record source, model and assumptions.

**Suggested visual:** Annotated data sheet for one motor available in the lab.

**Speaker notes:** Ask students to identify which values are measured, calculated or guaranteed. Keep motor-shaft data separate from gearbox-output data. Ask whether the listed torque is continuous, intermittent or stall torque before using it in a design.

---

## Slide 19: Worked Example - One Operating Point

A motor is supplied at 6 V. At one measured operating point it draws 0.8 A, turns at 4,000 rpm and produces 0.004 Nm.

1. Electrical input power: $P_{in}=6\times0.8=4.8\ \mathrm{W}$.
2. Angular speed: $\omega=2\pi(4000)/60\approx419\ \mathrm{rad/s}$.
3. Mechanical output power: $P_{out}=0.004\times419\approx1.68\ \mathrm{W}$.
4. Estimated efficiency: $\eta\approx1.68/4.8=0.35$, or approximately 35%.

**Discussion:** What measurement uncertainties and losses could make the estimate inaccurate?

**Speaker notes:** The numbers are illustrative, not a claim about a particular motor. Explain that torque is often the hardest quantity to measure; electrical and speed measurements must correspond to the same stable operating point.

---

## Slide 20: Class 1 Bench Activity - No Load vs Controlled Load

In pairs, using the supplied motor-drive rig:

1. Inspect the motor, leads, driver, guard and supply setting before power-on.
2. Record motor model, rated voltage, supply voltage and measurement instruments.
3. Measure no-load current and output speed for a short, stable run.
4. Apply one approved, controlled load without gripping or obstructing a shaft by hand.
5. Record current, speed and any change in sound, vibration or temperature.
6. Stop if the rig binds, current reaches the agreed limit, wiring warms, or the instructor calls stop.

**Record:** Condition | voltage | current | speed | load method | observation | stop condition.

**Speaker notes:** If students cannot safely measure speed/torque in the available setup, demonstrate and provide measured class data for analysis instead. Never allow an unguarded wheel, exposed gear train or improvised finger brake.

---

## Slide 21: Class 1 Retrieval Check

Without notes, answer:

1. What is the function of the brushes and commutator?
2. Why can startup current be much greater than no-load current?
3. What happens to back EMF when a motor slows under load?
4. Why is stall torque not a continuous design value?
5. Which measurements should be recorded together to describe an operating point?

**Transition:** Tomorrow's mechanical question is how to transform high motor speed into usable output torque.

---

# Class 2 - Geared Motors, Control and Application

---

## Slide 22: Retrieval - Predict Before Calculating

A small vehicle is fitted with a faster motor but the same battery and wheels. It now struggles to start on a ramp.

- What could have changed electrically?
- What could have changed mechanically?
- What would you measure to tell the difference?

**Speaker notes:** Draw on the previous class: motor selection involves its torque-speed curve, not just maximum speed or nominal voltage. Possible causes include a changed winding/torque constant, inadequate reduction, driver limits or supply sag.

---

## Slide 23: Where a Geared Motor Fits

A gearmotor combines:

- an electric motor producing high rotational speed and relatively low shaft torque;
- gear stages reducing speed and increasing output torque;
- an output shaft and support structure coupled to the driven mechanism.

Typical uses include:

- wheels and rollers;
- small winches and lifting mechanisms;
- feed mechanisms and conveyors;
- clamps, latches and other intermittent actuators.

**Suggested visual:** Side-by-side photograph of a bare motor and a geared motor with the output shaft labelled.

---

## Slide 24: Gear Ratio - Define It Before Using It

For a reduction gearbox, define:

$$G=\frac{\omega_{motor}}{\omega_{out}}$$

If the ratio is 30:1, the motor turns approximately 30 revolutions for one output revolution.

- Ideal speed: $\omega_{out}=\omega_{motor}/G$.
- Ideal torque: $T_{out}=G T_{motor}$.
- Real gearbox torque: $T_{out}\approx\eta_gG T_{motor}$.
- Real speed may differ slightly from the ideal because of losses, tolerances and load.

**Speaker notes:** Check ratio convention. A supplier might state “30:1,” “30:1 reduction,” or a different input/output convention. Verify the actual definition and stage ratio before calculating.

---

## Slide 25: The Speed-Torque See-Saw Has Losses

- Increasing reduction increases available output torque but reduces output speed.
- A gearbox cannot increase power; output power is less than input power.
- Efficiency varies with gearbox type, size, lubrication, speed, load and temperature.
- Backlash, friction, noise and wear are additional practical effects.
- A large ratio may improve force capability but make a vehicle too slow or less responsive.

**Suggested visual:** Same motor curve transformed to two gearbox output curves, with efficiency loss indicated.

**Speaker notes:** Avoid presenting torque multiplication as “free torque.” State that gearbox efficiency is not necessarily a constant; use a manufacturer value or label an assumed value in a worked estimate.

---

## Slide 26: Gearbox Types and Practical Consequences

| Type | Practical strengths | Considerations |
| --- | --- | --- |
| Spur | Simple, efficient, low cost | Noise, backlash and stage packaging |
| Planetary | Compact for its torque capacity; coaxial input/output | Cost, complex construction, output bearing limits |
| Worm | High reduction in a compact package; may resist back-driving | Lower efficiency, heat; self-locking is not guaranteed |
| Bevel | Changes direction between shafts | Alignment and packaging; right-angle geometry |
| Belt/chain stage | Flexible centre distance and easy ratio changes | Tension, slip/wear, guarding and alignment |

**Speaker notes:** Not all small gearmotors use the same arrangement. The purpose is to prompt inspection and informed selection, not to memorise a catalogue of gear types. Never assume a worm gearbox is a safe holding brake unless explicitly rated for that function.

---

## Slide 27: Gearmotor Ratings - What Is the Output Shaft Allowed to Do?

Check more than ratio and output speed:

- Continuous and intermittent output torque.
- Maximum permissible radial and axial load on the output shaft.
- Shaft diameter, length, flat/key/spline and coupling method.
- Gearbox life, backlash, material and lubrication requirements.
- Mounting orientation and support against reaction torque.
- Duty cycle and thermal limits for the combined motor and gearbox.

**Speaker notes:** A motor may be strong enough while its gearbox teeth, output bearing or shaft are not. A wheel cantilevered far from a small gearbox bearing can create a large radial load.

---

## Slide 28: From Linear Force to Wheel Torque

For a wheel of radius $r$ applying tangential force $F$:

$$T_{wheel}=Fr$$

For a rolling contact at angular speed $\omega$:

$$v=r\omega$$

For rotational speed $n$ in rpm:

$$v=\frac{2\pi r n}{60}$$

- Larger wheel radius increases travel per revolution.
- For the same ground force, a larger wheel requires more axle torque.
- Include rolling resistance, acceleration, slope, contact losses and traction limits.

---

## Slide 29: Vertical Climbing and Pipe-Climber Loads

For a vertical climb, the drive system must provide sufficient upward force to support and accelerate the vehicle and any carried load.

- Static minimum force includes weight: $F=mg$.
- Add acceleration, chain/load, rolling losses and design margin as appropriate.
- Roller torque estimate: $T=Fr$ at the effective contact radius.
- Traction must be sufficient to transmit this force without slipping.
- Increasing motor torque cannot overcome inadequate normal force or friction at the pipe.

**Speaker notes:** Use the current IMechE brief and actual rig geometry for any numerical design example. The force path may involve multiple rollers and normal forces; do not assume the full vehicle weight is carried by one driven contact without checking the mechanism.

---

## Slide 30: Worked Example - First-Pass Geared Drive

A 2 kg trolley needs 3 N total drive force on level ground. It has two equally loaded drive wheels, each with radius 0.03 m, and a target speed of 1 m/s.

**Wheel torque per drive:**

$$T_{wheel}=\frac{3}{2}\times0.03=0.045\ \mathrm{Nm}$$

**Wheel speed:**

$$n=\frac{v}{2\pi r}\times60=\frac{1}{2\pi(0.03)}\times60\approx318\ \mathrm{rpm}$$

With an assumed 30:1 reduction and 70% gearbox efficiency:

- Approximate motor speed: $318\times30\approx9,540\ \mathrm{rpm}$.
- Approximate required motor torque per drive: $0.045/(30\times0.70)\approx0.00214\ \mathrm{Nm}$.

**Speaker notes:** This is a first-pass steady-state estimate. It excludes acceleration, rolling resistance, tyre deformation, transmission misalignment, unequal load sharing, battery sag and traction margin. The chosen motor must produce the required torque at the required speed on its curve, and the gearbox must tolerate the output load.

---

## Slide 31: Select an Operating Point, Not a Headline Number

For a proposed motor and gearbox:

1. Calculate required output speed and output torque.
2. Convert these to estimated motor speed and torque using ratio and efficiency.
3. Mark the required point on the motor's torque-speed curve.
4. Check current at that point against the supply, driver, wiring and battery.
5. Check gearbox continuous torque, shaft loading, duty and thermal limits.
6. Add margin for starting, variation and uncertainty, then test the assembly.

**Speaker notes:** If the point lies near stall or outside the manufacturer's rated range, the design is not made acceptable by selecting a larger driver alone. Reconsider ratio, wheel size, load path, friction or motor choice.

---

## Slide 32: Speed Control with PWM

- PWM rapidly switches the driver between on and off states.
- Duty cycle is the fraction of a switching period spent on: 0%, 25%, 50%, 75%, 100%.
- At fixed supply voltage, changing duty cycle changes the motor's average applied voltage/current behaviour.
- The motor's inductance and mechanical inertia smooth some switching effects.
- PWM frequency, driver decay mode and motor characteristics affect ripple, sound and heating.

**Suggested visual:** Three voltage-time pulse trains at 25%, 50% and 75% duty cycle.

**Speaker notes:** Explain average voltage as a useful first model, not a guarantee that speed equals duty cycle times full speed. In many drives, winding current continues during the PWM off-time through a recirculation path.

---

## Slide 33: PWM Duty Is Not the Same as Speed

At the same duty cycle, motor speed can differ because of:

- mechanical load and friction;
- static friction and gearbox stiction at startup;
- supply voltage and battery sag;
- driver voltage drop and current limiting;
- motor temperature and winding resistance;
- different motor units and gearbox efficiency.

**Key distinction:** Open-loop PWM requests a drive level. Feedback control measures speed or position and adjusts drive to meet a target.

---

## Slide 34: Why a Motor May Not Start at Low PWM

- At rest, the motor has no back EMF, but it still needs starting torque.
- The current/torque available at low duty may be insufficient to overcome static friction and load.
- A mechanism may need a brief higher starting command before settling to a lower running command.
- Repeated start attempts can create heat and high current.
- Test a start reliably under the worst expected load; do not assume a free-running bench result will transfer to the vehicle.

**Speaker notes:** “Kick-start” control can be useful but must be bounded, tested and compatible with the driver and motor ratings. It does not excuse an undersized motor or a jammed mechanism.

---

## Slide 35: Direction, Coast and Brake

- A brushed DC motor reverses direction when the polarity across its terminals is reversed.
- An H-bridge can command forward, reverse, coast and, depending on design, dynamic braking.
- **Coast:** driver output is high impedance or otherwise allows the motor to slow naturally.
- **Dynamic brake:** motor terminals are connected through a controlled current path, producing braking torque.
- Braking current and returned energy can stress the driver or supply; check the module design.

**Suggested visual:** H-bridge block diagram and a state table for forward, reverse, coast and brake.

---

## Slide 36: Choose the Driver for the Motor, Not the Label

Verify:

- Motor supply voltage range and transient limits.
- Continuous current rating under the actual cooling conditions.
- Peak current rating and permitted duration.
- Whether the driver can start the expected load without current limiting.
- PWM frequency, direction, braking and fault behaviour.
- Thermal shutdown, overcurrent protection and wiring requirements.

**Speaker notes:** A module advertised with a large peak-current number may not sustain that current on a small board without cooling. Read the full manufacturer data sheet and distinguish absolute maximum, peak, and continuous ratings.

---

## Slide 37: Where the Heat Comes From

- Winding copper loss: $P_{cu}=I^2R$.
- Brush and commutator contact losses.
- Magnetic/core losses, especially at speed and with switching.
- Bearing, gear mesh and lubricant friction.
- Driver conduction and switching losses.
- Poor connectors, undersized wires and high-resistance joints.

**Key implication:** Doubling current can produce approximately four times the winding copper loss if resistance is unchanged.

**Speaker notes:** This relationship explains why modest overloads can cause disproportionate heating. Actual winding temperature is not always directly visible from the case temperature; use manufacturer thermal information and safe measurement methods.

---

## Slide 38: Duty Cycle and Thermal Equilibrium

- Continuous running allows heat generation and heat loss to approach a steady condition.
- Intermittent duty has starts, runs, stops and cooling intervals; peak and average loads both matter.
- Repeated starts can keep average heating high even if each run is short.
- Enclosures, mounting, airflow and nearby hot components change cooling.
- Gearbox temperature and lubricant limits may be more restrictive than motor winding limits.
- Do not infer safe duty from “it survived one run.”

**Suggested visual:** Temperature-vs-time curves for continuous load and intermittent bursts, clearly labelled as illustrative.

---

## Slide 39: Overdriving Above the Rating

Operating above a motor's rated voltage may increase:

- no-load speed and mechanical stress;
- stall/start current and supply demand;
- commutation difficulty, brush wear, vibration and noise;
- motor, driver and gearbox temperature;
- risk of gear damage or unsafe failure.

Before considering any overdrive, verify the manufacturer's permitted voltage/speed envelope, load, duty, cooling, driver and gearbox ratings. A successful short test does not establish a safe continuous operating point.

**Speaker notes:** Treat operation above rated voltage as a risk assessment and evidence question, not a tuning trick. For competition hardware, also check rules and scrutineering requirements.

---

## Slide 40: Common Failure Modes and What They Suggest

| Observation | Possible causes to investigate |
| --- | --- |
| High current, little/no motion | Jam, binding, short circuit, stalled shaft, wrong wiring or current-limit behaviour |
| Low speed under load | Insufficient torque/speed match, battery sag, driver limiting, friction or excess load |
| Motor runs hot | Excess current, high duty, repeated starts, poor cooling, excessive speed or damaged winding |
| Gearbox clicks or slips | Gear damage, excessive torque, misalignment, loose coupling or unsuitable mounting |
| Vehicle moves but slips | Insufficient traction, poor contact geometry/material, load distribution or inadequate normal force |
| Performance changes between runs | Battery state, temperature, loose connections, intermittent brushes, changing friction or test setup |

**Speaker notes:** These are hypotheses, not one-to-one diagnoses. Use a controlled test that changes one factor at a time and compare voltage, current, speed, temperature and mechanical condition.

---

## Slide 41: Class 2 Motor Selection Challenge

In teams, select a motor and gearbox for a stated mechanism, using a supplied data sheet and measured class data.

Include:

- application, load, target speed and duty;
- estimated required output torque and speed;
- ratio and gearbox efficiency assumptions;
- motor operating point and expected current;
- driver, supply and wiring checks;
- thermal and mechanical constraints;
- one test that could falsify the selection.

**Deliverable:** One-page decision record with a calculation, selected data-sheet evidence and named assumptions.

---

## Slide 42: Design Review - Challenge the Assumptions

Peer review the selection:

1. Are motor speed and torque values taken at the same operating point?
2. Is gearbox ratio defined correctly, and is efficiency included?
3. Is stall torque being mistaken for continuous torque?
4. Can the battery and driver support startup and operating current?
5. Can the shaft, gearbox and mounting support the real mechanical loads?
6. Does the design have a safe test and a defined stop condition?

**Speaker notes:** Ask reviewers to identify one calculation they trust, one assumption with the greatest consequence, and one practical test that reduces uncertainty.

---

## Slide 43: Exit Ticket

Answer in a few sentences:

1. Explain why current rises when a brushed motor slows under load.
2. A gearbox has ratio 20:1. What happens to ideal output speed and torque?
3. Why might a motor not start at 20% PWM but continue running at 20% once moving?
4. Give two causes of motor/gearbox heating.
5. State one check you would make before increasing voltage above the motor rating.

**Evidence to retain:** Data-sheet annotation, motor measurements, calculation sheet and design decision record.

---

# Optional Extension - Characterisation and Design Evidence

---

## Slide 44: Extended Practical - Characterise the Geared Motor

### Equipment

- Low-voltage brushed gearmotor with its data sheet.
- Current-limited bench supply or approved protected battery system.
- Motor driver suitable for the motor and test current.
- Guarded load rig, tachometer/encoder or timed revolution marker.
- Multimeter/current sensor and safe temperature measurement method.
- Emergency stop or clearly accessible isolation switch.

### Test controls

- Agree a maximum voltage, current and test duration before power-on.
- Secure the motor and guard the shaft, gears and rotating load.
- Isolate power before altering wiring or the mechanical fixture.
- Do not create a prolonged stall; stop on binding, unexpected noise, current limit or heating.

---

## Slide 45: Extended Practical - Test Procedure

1. Inspect the motor, gearbox, coupling, guard, leads, driver and supply.
2. Record motor model, rated voltage, gearbox ratio and source of each rating.
3. Measure supply voltage at the motor terminals where practical.
4. Record no-load output speed and current after a short stable run.
5. Increase the controlled load in agreed increments; do not exceed the test limit.
6. At each point, record voltage, current, speed, load/torque estimate and elapsed time.
7. Stop, isolate and inspect; record temperature and any unusual sound or vibration.
8. Repeat a selected point to assess repeatability.

**Suggested results table:** Test point | supply voltage | motor-terminal voltage | current | output rpm | output torque/load | temperature | notes.

---

## Slide 46: Plot and Interpret the Results

Plot, where measurements allow:

- Output speed against output torque/load.
- Current against output torque/load.
- Output power against load, if torque and speed are measured reliably.
- Temperature against time for a fixed load and duty pattern.

For every graph:

- label axes, units, test conditions and motor/gearbox model;
- show measured data points, not only a smoothed trend;
- identify uncertainty or limitations in the load and speed measurements;
- distinguish the tested region from the manufacturer's rated envelope.

**Discussion:** Which trend supports the simple motor model, and which result is explained by an unmodelled effect?

---

## Slide 47: Estimating Torque with a Force Measurement

If a tangential force is applied at a known perpendicular radius:

$$T=Fr$$

If a hanging mass creates force through a pulley:

$$F\approx mg$$

Then:

$$T\approx mgr$$

- Use the effective radius where the force acts.
- Account for pulley friction, changing radius and fixture losses.
- Secure the mass and keep people clear of its fall path.
- Use a fixture designed for measurement; do not wrap line around an exposed shaft by hand.

---

## Slide 48: Open-Loop and Closed-Loop Speed Control

- **Open-loop:** command a PWM duty cycle and assume the resulting speed is adequate.
- **Closed-loop:** measure actual speed, compare it with a target, and adjust drive.
- An encoder or tachometer provides speed/position information.
- Feedback can compensate for changing load and battery voltage within system limits.
- Feedback cannot create missing torque, traction, voltage or thermal capacity.
- Poorly tuned feedback can cause oscillation, noise or excessive current.

**Suggested visual:** Block diagram: speed target -> controller -> driver/motor/gearbox -> measured speed -> feedback.

---

## Slide 49: Brushed DC vs Brushless DC - A Practical Distinction

| Brushed DC | Brushless DC (BLDC) |
| --- | --- |
| Mechanical commutation by brushes and commutator | Electronic commutation by a controller |
| Simple polarity reversal for direction | Requires suitable electronic drive and commutation strategy |
| Brushes wear and create contact noise | No brushes, but controller and sensing/commutation are required |
| Often convenient for simple low-cost prototypes | Often chosen for efficiency, speed or service-life needs |

**Speaker notes:** “Brushless” does not mean the motor can be connected directly to a battery for controlled operation. The electronic speed controller is part of the drive system. The rest of this deck remains focused on brushed motors.

---

## Slide 50: Final Design Review - From Requirement to Test

Trace the chain:

`Requirement -> force/speed estimate -> motor curve -> gearbox -> driver/supply -> mechanism -> test`

Before sign-off, confirm:

- The mechanism's force and speed requirements are stated with assumptions.
- The motor has a plausible operating point, not merely an attractive maximum speed.
- Gearbox output torque, speed, shaft load and duty are acceptable.
- Current demand, voltage sag, driver limits, wiring and protection are considered.
- Thermal risk and operating duty are defined.
- Tests are repeatable, guarded and have stop conditions.
- Results and deviations are documented for the IMechE design evidence.

---

# Tutor Reference and Worked Relations

---

## Slide 51: Equation Reference

| Quantity | Relation | Notes |
| --- | --- | --- |
| Electrical input power | $P_{in}=VI$ | Use voltage and current from the same operating condition |
| Mechanical rotational power | $P_{out}=T\omega$ | Torque in Nm, angular speed in rad/s, power in W |
| RPM conversion | $\omega=2\pi n/60$ | $n$ in revolutions per minute |
| Motor steady-state voltage | $V\approx IR+k_e\omega$ | Simplified; excludes transient inductance and other effects |
| Motor torque relation | $T\approx k_tI$ | Simplified; distinguish electromagnetic from useful shaft torque |
| Stall current estimate | $I_{stall}\approx V/R$ | Idealised; use motor data and do not sustain stall |
| Gear ratio | $G=\omega_{motor}/\omega_{out}$ | Confirm manufacturer's ratio convention |
| Gearbox output speed | $\omega_{out}\approx\omega_{motor}/G$ | Approximate for a reduction gearbox |
| Gearbox output torque | $T_{out}\approx\eta_gGT_{motor}$ | Verify torque is within continuous/intermittent gearbox rating |
| Wheel torque | $T=Fr$ | Use perpendicular force and effective radius |
| Linear speed | $v=r\omega$ | Rolling without slip |
| Copper loss | $P_{cu}=I^2R$ | Current increases can sharply increase heating |
| Efficiency | $\eta=P_{out}/P_{in}$ | Use same operating point; motor and gearbox efficiencies multiply in series |

---

## Slide 52: Tutor Reference - Safety and Scope

- Keep student practicals at extra-low voltage, typically within the locally approved 3-12 V DC range for the supplied equipment.
- Use a current-limited supply or protected battery system and appropriately selected fusing.
- Do not connect a motor directly to a microcontroller GPIO pin.
- Isolate power before wiring changes, mechanical adjustment or fault finding.
- Guard rotating shafts, wheels, gears, belts and test loads; secure the motor and rig.
- Keep hands, hair, clothing and cables clear of moving parts.
- Do not run a prolonged stall test or intentionally exceed component ratings as a routine demonstration.
- Use exact local equipment limits, risk assessments and workshop procedures where they are more restrictive.

**Scope note:** These classes teach practical selection and test reasoning. They do not replace manufacturer data sheets, formal risk assessment, competition rules or supervised workshop procedures.
