# Week 5 - Integrate the Environmental Alarm (3-4h)

---

## Slide 1: From Separate Labs to One System

- We now combine inputs, decisions, outputs and feedback.
- The target is a light-triggered alarm with a curtain switch and LCD status.
- Integration must happen in small verified stages, not all at once.

---

## Slide 2: Learning Objectives

- Decompose a program into named functions.
- Integrate LDR, curtain switch, LED, buzzer and LCD.
- Use a Boolean variable to store alarm state.
- Build an initial test plan covering part functionality.
- Produce a working Wokwi/Tinkercad project with readable evidence.

---

## Slide 3: The Target System

`LDR -> readSensors() -> alarmActive -> updateOutputs()`

`Curtain switch -> readSensors() -> alarmActive -> updateDisplay()`

- LDR below/above the chosen threshold changes the alarm state.
- Curtain switch provides a second input condition.
- LED, buzzer and LCD must all report the same state.

---

## Slide 4: Pin Map and Constants

```cpp
#define LDR_PIN A0
#define SWITCH_PIN 2
#define LED_PIN 13
#define BUZZER_PIN 9

const int threshold = 400;
bool alarmActive = false;
```

- Match every named pin to the actual circuit.
- Explain the threshold using Week 3 data.
- Use `bool` for a true/false system state.

---

## Slide 5: A Readable Main Loop

```cpp
void loop() {
  readSensors();
  updateOutputs();
  updateDisplay();
}
```

- Each function has one responsibility.
- This pattern matches the code students will need to explain in the LO3 video.
- First make it work; later make it robust and non-blocking.

---

## Slide 6: Read Inputs and Decide State

```cpp
void readSensors() {
  int ldrValue = analogRead(LDR_PIN);
  bool switchPressed = digitalRead(SWITCH_PIN) == LOW;

  alarmActive = (ldrValue < threshold) || switchPressed;
  Serial.println(ldrValue);
}
```

Speaker notes:
- This is a clear first implementation, not the final robust version.
- Discuss how `||` means either condition can activate the alarm.

---

## Slide 7: Update Outputs from the State

```cpp
void updateOutputs() {
  if (alarmActive) {
    digitalWrite(LED_PIN, HIGH);
    tone(BUZZER_PIN, 1000);
  } else {
    digitalWrite(LED_PIN, LOW);
    noTone(BUZZER_PIN);
  }
}
```

- Output code should not recalculate sensor logic.
- One state variable prevents different outputs contradicting each other.

---

## Slide 8: Update the LCD

```cpp
void updateDisplay() {
  lcd.setCursor(0, 0);
  lcd.print("Alarm: ");
  lcd.print(alarmActive ? "ON " : "OFF");
}
```

- Avoid repeated `lcd.clear()` in a fast loop.
- Update display only when needed in the improved version.

---

## Slide 9: Lab L09 - Integrate LDR, LED and Buzzer (40 min)

**Build:** LDR divider, LED and passive buzzer.

**Requirements:**

- Read LDR value.
- Apply a data-supported threshold.
- Turn LED and buzzer on in the alarm condition.
- Print the LDR value and state to serial monitor.

**Evidence:** code, working simulation and three completed test cases.

---

## Slide 10: Lab L10 - Add Switch and LCD (45 min)

**Use Wokwi:** add curtain switch on D2 and I2C LCD.

**Requirements:**

- Switch uses `INPUT_PULLUP`.
- LDR alarm OR switch press activates alarm.
- LCD shows `Alarm: ON` or `Alarm: OFF`.
- Explain the code path from each input to each output.

---

## Slide 11: Initial Test Plan - LO3.P5

| Test | Scenario | Expected result |
| --- | --- | --- |
| T1 | Normal light, switch released | Alarm off |
| T2 | LDR crosses threshold | Alarm on |
| T3 | Curtain switch pressed | Alarm on |
| T4 | Alarm active | LED and buzzer operate |
| T5 | LCD updates | Correct status text |

---

## Slide 12: Integration Debugging

- Test each input alone before testing both together.
- Test LED, buzzer and LCD separately before trusting the full alarm.
- Use serial output to show LDR value, switch state and `alarmActive`.
- Record a defect and fix, not just the final successful run.

---

## Slide 13: Week 5 Evidence

- Saved simulator link/project and screenshot.
- Annotated code with named functions.
- Initial test plan and results.
- Draft issues-and-fixes table for the LO3 video.
