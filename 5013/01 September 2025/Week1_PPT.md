# Week 1 - Embedded Systems and First Arduino Programs (3-4h)

This deck is a Markdown slide source. Use the existing conversion process to create the delivered PPTX/ODP.

---

## Slide 1: Unit 5013 - Embedded Systems

### Smart Environmental Monitoring System

- We will design, simulate, implement, test and explain a small environmental monitoring alarm.
- The final project is built one verified function at a time.
- No prior programming knowledge is assumed at the start of this sequence.

Speaker notes:
- Explain that the surviving student work shows the intended final system: LDR, curtain switch, LED, buzzer and LCD status.
- The first question in every lab is: what should the system sense, decide and do?

---

## Slide 2: Today's Learning Objectives

- Define an embedded system and identify input, processing and output blocks.
- Explain the role of an Arduino-compatible microcontroller.
- Create, run and alter a first Arduino sketch in Tinkercad Circuits.
- Use `setup()`, `loop()`, `pinMode()` and `digitalWrite()`.
- Capture evidence of a working simulator lab.

---

## Slide 3: What Is an Embedded System?

- A small computer built into a product to perform a dedicated job.
- It observes the world through inputs, processes information and controls outputs.
- Examples: thermostat, washing machine, vehicle parking sensor, fire alarm and smart HVAC controller.

`sensor/switch -> microcontroller -> actuator/display`

---

## Slide 4: Our Project Context

EcoSmart needs an indoor comfort-monitoring prototype.

- **Input:** light level from an LDR and a curtain switch.
- **Processing:** compare reading with an agreed threshold.
- **Outputs:** LED, buzzer and LCD status.
- **Evidence:** code, block diagram, test plans/results, debugging record and individual LO3 video.

---

## Slide 5: Arduino Uno as a Learning Platform

- Microcontroller: ATmega328P.
- Digital pins: read or write `HIGH`/`LOW` states.
- Analogue pins: measure a varying voltage with `analogRead()`.
- USB connection: uploads the sketch and provides serial debugging.
- It is simple enough for first programs and supports the project pattern directly.

Speaker notes:
- Make clear that students still compare Arduino-class boards, ESP32 and STM32 for LO1 selection. The Uno is the starting learning platform, not automatically the final recommendation.

---

## Slide 6: Tinkercad and Wokwi

| Tool | Use it for |
| --- | --- |
| Tinkercad Circuits | First circuits, Arduino Uno, LEDs, buttons, LDRs and beginner code |
| Wokwi | I2C LCD, ESP32 extensions, serial monitor and shareable advanced simulations |

- Begin every lab in the stated simulator.
- Save a named copy and take one working screenshot.
- Simulation proves logic and wiring ideas; it does not replace real-hardware testing.

---

## Slide 7: How an Arduino Sketch Runs

```cpp
void setup() {
	// Runs once when power is applied or reset.
}

void loop() {
	// Runs repeatedly forever.
}
```

- `setup()` configures hardware.
- `loop()` repeatedly reads inputs, decides, then updates outputs.

---

## Slide 8: Digital Output and Logic States

- `HIGH` supplies a logic-on output state.
- `LOW` supplies a logic-off output state.
- `pinMode(pin, OUTPUT)` configures an output pin.
- `digitalWrite(pin, HIGH)` commands the output on.

Safety note: use a resistor with an LED. Never use a microcontroller pin to power a motor, relay or high-current load directly.

---

## Slide 9: First Program - Blink

```cpp
const int ledPin = 13;

void setup() {
	pinMode(ledPin, OUTPUT);
}

void loop() {
	digitalWrite(ledPin, HIGH);
	delay(1000);
	digitalWrite(ledPin, LOW);
	delay(1000);
}
```

Speaker notes:
- Read the code in order, then predict what will happen before running it.
- Ask students to alter one number and describe the visible change.

---

## Slide 10: Lab L01 - Blink in Tinkercad (25 min)

**Build:** Arduino Uno, LED and 220 ohm resistor.

**Do:**

1. Connect the LED safely to digital pin 13 and ground.
2. Enter the Blink sketch.
3. Run the simulation.
4. Change the on/off timing to 250 ms and 750 ms.
5. Save the project as `L01_Blink_StudentName`.

**Submit:** screenshot, code and one sentence explaining `setup()` versus `loop()`.

---

## Slide 11: Variables Make Code Easier to Change

- A variable stores a value that may change while the program runs.
- A named constant makes a fixed value readable and avoids unexplained numbers.

```cpp
const int redPin = 13;
const int delayMs = 500;
```

- Use meaningful names: `ledPin`, `lightValue`, `threshold`.
- Avoid unclear names such as `x`, `a1` or `thing`.

---

## Slide 12: Lab L02 - Timed Traffic Light (35 min)

**Build:** three LEDs: red, amber and green, each with a resistor.

**Requirements:**

- Green: 5 seconds.
- Amber: 2 seconds.
- Red: 5 seconds.
- Use named pin constants and explain the sequence.

**Extension:** make amber flash three times before red.

**Evidence:** wiring screenshot, code and a flowchart with start, outputs and delays.

---

## Slide 13: Lab Review - Debug in This Order

1. Is the circuit powered and grounded correctly?
2. Does the code use the pin actually wired?
3. Is the pin configured as `OUTPUT`?
4. Is the LED direction and resistor correct?
5. Can a simpler one-LED sketch work first?

Speaker notes:
- Demonstrate a deliberate wrong pin number and show how to identify it without guessing.

---

## Slide 14: Link to the Assessment

- L01/L02 build the implementation confidence needed for **LO3.P4**.
- The platform comparison begins evidence for **LO1.P1/P2/M1/D1**.
- Saved screenshots, code and reflections are evidence, not optional decoration.

---

## Slide 15: Week 1 Exit Ticket

- Explain one difference between an input and an output.
- Identify which function runs once and which repeats.
- Submit L01 and L02 evidence.
- Begin a comparison table for Arduino Uno, ESP32 and STM32: processing, interfaces, communication, power, cost and tooling.
