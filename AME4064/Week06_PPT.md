# Week 6 - Inputs, Outputs and Simple Control

---

## Slide 1: What a Microcontroller Does

- Reads inputs, makes a decision and commands outputs.
- GPIO handles digital signals; ADC measures a voltage range.
- PWM varies average power to LEDs or motor drivers.
- Code must respect the electrical limits of the hardware.

---

## Slide 2: From Rules to States

- Example states: `IDLE`, `MOVE`, `STOP`, `FAULT`.
- A state machine makes behaviour visible and testable.
- Every state needs a clear entry condition and safe exit condition.

---

## Slide 3: A Minimal Control Loop

```text
read switch and sensor
if fault: stop motor
else if target reached: stop motor
else: command motor
```

Speaker notes: This is deliberately simple; students should identify where a real mechanism may need debounce, timing and limit protection.

---

## Slide 4: Practical - Sense and Actuate

- Read a pushbutton or limit switch.
- Change an LED/buzzer output.
- Command a motor driver only through its safe input pins.
- Record tests for normal and unexpected inputs.

---

## Slide 5: Weekly Output

- Wiring diagram and annotated code.
- State diagram.
- Three pass/fail tests, including one safe-stop test.
