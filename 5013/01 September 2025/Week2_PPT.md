# Week 2 - Digital Inputs, Decisions and Flowcharts (3-4h)

---

## Slide 1: From Output to Decision

- Last week: code made LEDs follow a fixed sequence.
- This week: code responds to an input and makes a decision.
- Project link: the curtain switch will later change the alarm state.

---

## Slide 2: Learning Objectives

- Configure and read a digital input.
- Explain `HIGH`, `LOW`, pull-up and pull-down behaviour.
- Use `if/else` to make a decision.
- Create a truth table and flowchart before writing code.
- Produce a first pin map and system block diagram.

---

## Slide 3: Digital Inputs Need a Defined State

- An input pin cannot be left electrically floating.
- A **pull-down** resistor holds it at `LOW` until a switch connects it to supply.
- A **pull-up** resistor holds it at `HIGH` until a switch connects it to ground.
- `INPUT_PULLUP` uses the Arduino's internal pull-up resistor.

Speaker notes:
- With `INPUT_PULLUP`, pressed normally reads `LOW`. Students often find this backwards at first.

---

## Slide 4: Button Truth Table

| Wiring mode | Button condition | Typical reading |
| --- | --- | --- |
| External pull-down | Not pressed | `LOW` |
| External pull-down | Pressed | `HIGH` |
| `INPUT_PULLUP` | Not pressed | `HIGH` |
| `INPUT_PULLUP` | Pressed | `LOW` |

---

## Slide 5: Read a Button

```cpp
const int switchPin = 2;

void setup() {
  pinMode(switchPin, INPUT_PULLUP);
  Serial.begin(9600);
}

void loop() {
  int switchState = digitalRead(switchPin);
  Serial.println(switchState);
  delay(100);
}
```

Speaker notes:
- Explain that the serial monitor is a window into the running program.

---

## Slide 6: Lab L03 - Read a Button in Tinkercad (25 min)

- Wire a pushbutton from pin 2 to ground.
- Configure `INPUT_PULLUP`.
- Print the reading to serial monitor.
- Press/release the button and record the readings.
- Explain why the pressed result is `LOW`.

**Evidence:** circuit screenshot, code and a two-row observation table.

---

## Slide 7: `if/else` Makes a Choice

```cpp
if (switchState == LOW) {
  // The button is pressed.
} else {
  // The button is not pressed.
}
```

- `==` compares values.
- `=` assigns a value.
- Braces show which statements belong to each condition.

---

## Slide 8: Button-Controlled LED

```cpp
if (digitalRead(switchPin) == LOW) {
  digitalWrite(ledPin, HIGH);
} else {
  digitalWrite(ledPin, LOW);
}
```

Predict before running:

- What happens when the button is held?
- What happens when it is released?
- What would change if the wiring used a pull-down resistor instead?

---

## Slide 9: Lab L04 - Button-Controlled LED (35 min)

**Requirement:** pressing the button illuminates an LED; releasing it turns the LED off.

**Challenge:** add a second LED that does the opposite.

**Record:**

- Pin map.
- Truth table.
- Flowchart.
- Screenshot showing the button pressed and code running.

---

## Slide 10: Flowchart Before Code

`START -> configure pins -> read button -> is button pressed? -> LED ON / LED OFF -> repeat`

- Flowcharts describe logic without worrying about C++ punctuation.
- They make errors easier to discuss before wiring or code is changed.
- The final project must include a flowchart of its alarm logic.

---

## Slide 11: Block Diagram and Pin Map

### Block diagram

`LDR + curtain switch -> Arduino -> LED + buzzer + LCD`

### Pin map example

| Component | Arduino connection | Function |
| --- | --- | --- |
| Curtain switch | D2 | Digital input |
| LED | D13 | Digital output |

---

## Slide 12: Debugging Clinic

- Does `Serial.println()` show a changing state?
- Is the switch connected to ground when using `INPUT_PULLUP`?
- Is the code testing for the correct logic level?
- Is every component connected to a shared ground?
- Can the input and output be proved separately before combining them?

---

## Slide 13: Assessment Link

- Clear I/O design supports **LO1.M1** and **LO2.P3**.
- Working, readable code supports **LO3.P4**.
- The truth table and test check are the beginning of **LO3.P5** evidence.

---

## Slide 14: Week 2 Exit Evidence

- Submit L03 and L04 simulator links/screenshots.
- Submit truth table, flowchart and first system block diagram.
- Update platform comparison with input/output and communication capability.
- Bring one question about analogue sensors to Week 3.
