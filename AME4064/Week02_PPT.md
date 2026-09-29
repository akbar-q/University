# Week 2 - DC Circuits and Digital Inputs

---

## Slide 1: Circuit Laws for Useful Design

- Ohm's law: $V = IR$.
- Electrical power: $P = VI = I^2R = V^2/R$.
- Series: current is shared; voltage divides.
- Parallel: voltage is shared; branch currents add.

---

## Slide 2: Designing an LED Circuit

- LED requires a current-limiting resistor.
- $R = (V_{supply} - V_{LED}) / I_{LED}$.
- Example: 5 V supply, 2 V LED, 10 mA target gives $300 \Omega$; select the nearest safe standard value.
- Never connect an LED directly across a supply.

---

## Slide 3: Switches Need Defined States

- A floating input is unpredictable.
- Pull-down: resistor holds logic low until switch is pressed.
- Pull-up: resistor holds logic high until switch is pressed.
- Limit switches are simple, robust position sensors.

---

## Slide 4: Practical - Build and Verify

- Assemble series and parallel resistor circuits.
- Compare predicted and measured current/voltage.
- Wire a pushbutton with a pull resistor and observe a stable logic state.

---

## Slide 5: Weekly Output

- Circuit schematic with component values.
- Measurement table with units.
- Short explanation of why a pull resistor is needed.
