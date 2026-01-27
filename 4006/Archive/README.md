# 4006 Mechatronics Coding Index  

---

## Overview

This repository documents the coding journey for the 4006 Mechatronics unit. Over the coming weeks, you will learn the programming skills required to build and control a 6 degree-of-freedom (DOF) servo robot arm using the ESP32 microcontroller.  
Each week’s coding session will be indexed here, with summaries, learning outcomes, and links to detailed examples and explanations.

---

## Coding Progression

### Week 1: Introduction to ESP32 Servo Interfacing

- **Goal:** Learn how to connect and control a single servo motor using the ESP32 and the ESP32Servo library.
- **Skills Covered:**
  - Installing and using the ESP32Servo library
  - Attaching a servo to a GPIO pin
  - Moving the servo to specific angles (0°, 90°, 180°)
  - Using variables and hardcoded values for servo control
  - Serial communication basics for debugging and feedback
- **Example Output:**  
  Servo moves to 0°, 90°, and 180° in sequence, with messages printed to the Serial Monitor.
- **Reference:**  
  [Introduction to ESP32 Servo Interfacing README](../Embedded/Embedded-Programming/Introduction%20to%20ESP32%20Servo%20Interfacing/README.md)

---

### Week 2: Introduction to Logic Flow

- **Goal:** Understand and apply logic flow statements (`if`, `else if`, `else`, `switch/case`) and variable incrementing to control servo movement and make decisions in code.
- **Skills Covered:**
  - Using conditional statements to control program flow
  - Comparison and logical operators (`==`, `>`, `<`, `>=`, `<=`, `&&`, `||`, etc.)
  - Incrementing variables with `++`, `+=`, and custom steps
  - Using `switch/case` for cleaner multi-condition logic
  - Combining `delay()` and increments for smooth servo speed control
- **Example Output:**  
  Servo moves in steps, with the angle and logic branch printed to the Serial Monitor. Demonstrates smooth sweeping and speed control.
- **Reference:**  
  [Introduction to Logic Flow README](../Embedded/Embedded-Programming/Introduction%20to%20Logic%20Flow/README.md)

---

- **Final Project:**  
  - Program and demonstrate a 6-DOF servo robot arm, using all coding concepts learned.

---

## Quick Index of Coding Topics

| Week | Topic/Folder | Key Concepts |
|------|--------------|-------------|
| 1    | [Introduction to ESP32 Servo Interfacing](../Embedded/Embedded-Programming/Introduction%20to%20ESP32%20Servo%20Interfacing/) | Servo basics, library setup, Serial |
| 2    | [Introduction to Logic Flow](../Embedded/Embedded-Programming/Introduction%20to%20Logic%20Flow/) | `if`, `else if`, `else`, `switch`, operators, incrementing, speed control |
| ...  | ...          | ...         |

---

## How to Use This Repository

- Browse each week’s folder for code examples and detailed explanations.
- Read the README in each folder for step-by-step guidance.
- Use the Serial Monitor to observe program output and debug your code.
- Experiment by changing values and logic to deepen your understanding.

---

## Resources

- [ESP32Servo Library on GitHub](https://github.com/jkb-git/ESP32Servo)
- [Arduino Reference: Control Structures](https://www.arduino.cc/reference/en/#structure)
- [Arduino Reference: Operators](https://www.arduino.cc/reference/en/#operators)

---

**Stay tuned:** This index will be updated weekly as we progress towards building and programming your own 6-DOF robot arm!

---