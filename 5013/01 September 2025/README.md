# Unit 5013: Embedded Systems - Detailed Learning Plan

---

## Table of Contents

- [Learning Outcomes (LOs) and Assessment Criteria](#learning-outcomes-and-assessment-criteria)
- [Assignment Breakdown](#assignment-breakdown)
- [Weekly Teaching Plan](#weekly-teaching-plan)
  - [Week 1: Embedded System Introduction](#week-1-embedded-system-introduction)
  - [Week 2: Digital I/O - LEDs, Switches, Push Buttons](#week-2-digital-io---leds-switches-push-buttons)
  - [Week 3: Sensor and Actuator Interfacing](#week-3-sensor-and-actuator-interfacing)
  - [Week 4: Understanding Communication Protocols](#week-4-understanding-communication-protocols)
  - [Week 5: Full-System Debugging and Testing](#week-5-full-system-debugging-and-testing)
  - [Week 6: System Integration and Advanced Features](#week-6-system-integration-and-advanced-features)
  - [Week 7: Evaluation of Applications and Trends](#week-7-evaluation-of-applications-and-trends)
  - [Week 8: Presentations, Feedback, and Reflection](#week-8-presentations-feedback-and-reflection)
- [Supplementary Resources](#supplementary-resources)
- [Teaching Tools and Platforms](#teaching-tools-and-platforms)

---

## Learning Outcomes and Assessment Criteria

This unit consists of **four Learning Outcomes (LOs)**, each assessed by a range of Pass (P), Merit (M), and Distinction (D) criteria.

### **LO1: Examine Embedded System Technology**
- **P1:** Examine the main architecture of a selected microcontroller.
- **P2:** Explain the function of the main microcontroller elements.
- **M1:** Analyze methods by which controllers communicate with the external environment.
- **D1:** Critically analyze the microcontroller architecture selected in terms of its limitations and suitability for various applications.

---

### **LO2: Design an Embedded System Using Available Interfaces**
- **P3:** For a given application, design an embedded system to meet the specified functional requirements.
- **M2:** Review selected devices in terms of their functionality for a given design task.
- **M3:** Discuss the trade-offs for the choices made in terms of performance, power, cost, etc., to meet the given design objectives.
- **D2:** Critically appraise the functionality of the entire embedded system, including further design improvements.

---

### **LO3: Implement Embedded System Designs by Writing Code**
- **P4:** Implement an embedded system by writing well-structured code to perform a selection of functions as per the design.
- **P5:** Develop an initial test plan to demonstrate a subset of functionality of the proposed system.
- **M4:** Produce a refined test plan to test all functions of the given system.
- **D3:** Evaluate a fully working embedded system with real peripherals, in discussion with a peer group of developers.

---

### **LO4: Evaluate Applications of Embedded Systems**
- **P6:** Evaluate current uses of embedded systems in a chosen sector.
- **M5:** Explore emerging trends in developing embedded systems, for example, artificial intelligence, the Internet of Things (IoT), or sustainability.
- **D4:** Critically appraise ongoing research on future applications of embedded systems, clearly identifying societal demands, technical challenges, and economic considerations.

---

## Assignment Breakdown

### Deliverables:
1. **Technical Report:** (.ODT format) Detailed analysis and justifications for microcontroller and system design choices.
2. **Source Code File:** (.INO file for Arduino IDE) Fully commented implementation file.
3. **Professional Discussion Notes:** Documented summary of the simulation and testing process.
4. **Presentation Slides:** (.ODP or .PDF format) Evaluating the impact and trends in embedded systems.

---

## Weekly Teaching Plan

### Week 1: **Embedded System Introduction**
- **Lecture Topics:**  
  - Definition, architecture, and components of embedded systems.
  - Introduction to Arduino Uno, ESP32, and alternative microcontrollers.
  - Embedded system design process.
- **Activities:**  
  - Simulate a simple LED toggle program in TinkerCAD.
  - Explore ESP32 pinout and IDE setup.
- **Resources:**  
  [Arduino IDE Guide](https://www.arduino.cc/en/software), [ESP32 Datasheet](https://www.espressif.com/en/products/socs/esp32).

---

### Week 2: **Digital I/O - LEDs, Switches, Push Buttons**
- **Lecture Topics:**  
  - Digital inputs and outputs; GPIO configuration.
  - Programming basics: `digitalWrite()`, `digitalRead()`.
- **Activities:**  
  - Create a traffic light simulation using three LEDs and two switches in Wokwi.
- **Key Learning Resources:**  
  - Arduino Digital I/O Guide.

---

### Week 3: **Sensor and Actuator Interfacing**
- **Lecture Topics:**  
  - Analog-to-digital conversion (ADC), Pulse Width Modulation (PWM).
  - Integration of motors, fans, and basic environmental sensors.
- **Activities:**  
  - Use a temperature sensor to control a DC fan with PWM output (Wokwi simulation).  
  - Generate values using `analogRead()` and adjust PWM duty cycle.  
- **Resources:**  
  - Library: ESP32 PWM.

---

### Week 4: **Understanding Communication Protocols**
- **Lecture Topics:**  
  - Serial communication: UART, SPI, and I2C basics.
  - IoT integration using MQTT and ThingSpeak.
- **Activities:**  
  - Simulate I2C communication with an OLED display.
  - Transmit data from a sensor over Wi-Fi to a cloud platform.
- **Resources:**  
  - Read: "IoT Cloud Usage with ESP32."  
  - TinkerCAD IoT Simulation Tutorials.

---

### Week 5: **Full-System Debugging and Testing**
- **Lecture Topics:**  
  - Implementation of debugging tools: Serial Monitor, print statements.  
  - Test plan creation: Edge cases, integration issues, validation.  
- **Activities:**  
  - Develop a testing workflow for a multi-component IoT system.

---

### Week 6: **System Integration and Advanced Features**
- **Lecture Topics:**  
  - Watchdog timers, failsafe protocols, error handling.
  - System reliability and modularity.
- **Activities:**  
  - Integrate subsystems (sensor, display, actuator) into one cohesive program.

---

### Week 7: **Evaluation of Applications and Trends**
- **Lecture Topics:**  
  - Industry 4.0/5.0: Role of embedded systems.
  - Sustainability, energy efficiency, accessibility in IoT.
- **Activities:**  
  - Group research on cutting-edge advancements like AI and machine learning in embedded systems.

---

### Week 8: **Presentations, Feedback, and Reflection**
- **Lecture Topics:**  
  - Stakeholder communication, presenting technical results.
  - Reflection on technical implementation vs. societal needs.
- **Activities:**  
  - Deliver a formal stakeholder presentation on project outcomes.  

---

## Supplementary Resources

- **Simulation Platforms:**  
  [TinkerCAD](https://www.tinkercad.com/), [Wokwi](https://wokwi.com/).

- **Datasheets and Guides:**  
  - Arduino Uno and ESP32 pinout diagrams.
  - Communication protocol references (I2C, SPI).

---

## Teaching Tools and Platforms

1. **Arduino IDE and ESP-IDF.**
2. **Wokwi and TinkerCAD Simulations.**
3. **Cloud IoT platforms like MQTT.**

---
For more information, you can refer to the [official assignment template](./Unit%205013%20assignment-brief.odt).