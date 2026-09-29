# Week 3 - Analogue Sensing and Threshold Decisions (3-4h)

---

## Slide 1: Why Digital Inputs Are Not Enough

- A button gives two states: pressed or not pressed.
- Environmental sensors often produce a changing value.
- The LDR allows the system to estimate light level and decide whether an alarm condition exists.

---

## Slide 2: Learning Objectives

- Explain a voltage divider using an LDR and fixed resistor.
- Read an analogue input using `analogRead()`.
- Use serial output to collect and interpret values.
- Choose and justify a threshold.
- Build and test a light-controlled indicator.

---

## Slide 3: LDR Voltage Divider

- An LDR changes resistance with light level.
- A voltage divider converts that resistance change into a voltage the Arduino can read.
- Connect the divider midpoint to `A0`.
- Reverse the LDR/resistor positions only if you also understand how the reading direction changes.

Speaker notes:
- Use the simulator to make the relation visible. Students must record whether darkness makes their particular circuit reading rise or fall.

---

## Slide 4: Analogue-to-Digital Conversion

- `analogRead(A0)` returns a number representing input voltage.
- On Arduino Uno, the normal range is 0-1023.
- The raw number is not automatically a lux value or percentage.
- Calibration compares readings against known or repeatable conditions.

---

## Slide 5: Read and Print an LDR Value

```cpp
const int ldrPin = A0;

void setup() {
  Serial.begin(9600);
}

void loop() {
  int ldrValue = analogRead(ldrPin);
  Serial.println(ldrValue);
  delay(200);
}
```

---

## Slide 6: Lab L05 - LDR Data Collection (30 min)

1. Build the LDR voltage divider in Tinkercad.
2. Print values every 200 ms.
3. Record at least five readings for bright, medium and dark conditions.
4. State whether the reading increases or decreases with darkness.
5. Save one serial-monitor screenshot.

**Evidence:** labelled circuit, data table and a one-sentence calibration statement.

---

## Slide 7: Threshold Logic

```cpp
if (ldrValue < threshold) {
  // Alarm condition.
} else {
  // Normal condition.
}
```

- The comparison direction depends on the circuit.
- The threshold must come from observed data, not an arbitrary number.
- A threshold near noisy readings may create unstable behaviour.

---

## Slide 8: Choose a Threshold from Data

| Condition | Example reading | Intended state |
| --- | ---: | --- |
| Bright | 850 | Normal |
| Medium | 560 | Normal |
| Dark | 180 | Alarm |

- A first threshold might be 350.
- Record the reason and retest around it.
- Later we improve this with filtering and hysteresis.

---

## Slide 9: Lab L06 - Light-Controlled Alarm Indicator (35 min)

**Build:** LDR divider on `A0`, LED on D13.

**Requirement:** LED indicates the chosen alarm condition.

**Extension:** print `NORMAL` or `ALARM` with the LDR value to serial monitor.

**Test:** bright, dark and threshold-edge values.

---

## Slide 10: Range Checks and Defensive Code

```cpp
if (ldrValue < 0 || ldrValue > 1023) {
  // Record invalid reading and use a safe response.
}
```

- A simulator may not generate every real fault.
- Good engineering still defines what happens if a reading is missing, implausible or noisy.

---

## Slide 11: Initial Test Cases

| Test ID | Input condition | Expected output | Result |
| --- | --- | --- | --- |
| T1 | Bright | LED off | |
| T2 | Dark | LED on | |
| T3 | Near threshold | Stated expected behaviour | |

- This is initial subset testing for **LO3.P5**.

---

## Slide 12: Common Errors

- `A0` written as `0`, accidentally reading a digital pin.
- LDR divider has no ground reference.
- Threshold comparison points in the wrong direction.
- Serial speed differs between code and monitor.
- Students change several things at once and cannot identify the fix.

---

## Slide 13: Week 3 Evidence

- L05 and L06 simulations.
- Sensor data table and threshold rationale.
- Initial subset test plan and completed results.
- Updated project block diagram showing LDR as analogue input.
