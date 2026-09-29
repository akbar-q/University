# Week 3 - R, L and C in Real Mechatronic Circuits

---

## Slide 1: Components Beyond Resistance

- Resistor: limits current or sets a voltage.
- Capacitor: stores electrical energy; smooths supply variation and filters signals.
- Inductor: stores magnetic energy; motors and coils are inductive loads.

---

## Slide 2: Capacitor Charge and Discharge

- Time constant: $\tau = RC$.
- After one $\tau$, a charging capacitor reaches about 63% of final voltage.
- Larger $R$ or $C$ gives a slower response.
- Timing and filtering always involve a trade-off.

---

## Slide 3: Motors Create Electrical Problems Too

- A spinning motor creates back-EMF.
- Switching an inductive load can generate a voltage spike.
- Use a suitable motor driver, flyback protection where applicable and supply decoupling.
- Keep motor current away from delicate signal wiring.

---

## Slide 4: Practical - Observe and Protect

- Record capacitor voltage during charge/discharge.
- Compare motor-start supply disturbance with and without local decoupling.
- Inspect the safe motor-driver path: supply, fuse, driver, motor and common ground.

---

## Slide 5: Weekly Output

- Calculate a time constant.
- Annotate a protected motor circuit.
- Explain one reason a motor cannot be connected to a GPIO pin.
