# Professional Discussion — Sample Q&A (LO3)
This file provides a structured set of professional discussion questions with model answers and multiple perspectives to use during the assessed professional discussion for Unit 5013: Embedded Systems. Use these as prompts during the viva / professional discussion and as model answers to guide students' preparation.

Notes:
- Platform focus: ESP32 (primary), Arduino Uno (secondary), with reference to Arduino IDE, ESP-IDF (C/C++), and MicroPython.
- Project references: LDR-based alarm clock (LDR in voltage divider, ADC reading, buzzer via PWM, I2C LCD, curtains/light disable), other sensor/actuator examples, KiCad PCB design, and a live offline programming test.
- The answers below are written as model responses (students may give different but equivalent technical solutions).

---

### Question 1: Why did you choose the ESP32 (or Arduino Uno) for this project? What features made it suitable?

#### ESP32 (C/C++ via Arduino IDE or ESP-IDF)
*The ESP32 was chosen for its built-in Wi‑Fi/BLE (useful for later IoT extensions), multiple ADC channels, flexible PWM/timer channels, and ample SRAM/Flash for moderate complexity programs. It has a dual-core Xtensa CPU which can support multitasking (FreeRTOS is available by default), so background tasks (e.g., display refresh or network communication) don't block critical sensor readings. The ADC has adequate resolution (typically 12-bit in the ESP32, configurable in SDK) for our LDR alarm prototype, and PWM support lets us generate tones for the buzzer without extra hardware.*

#### Arduino Uno (AVR, C/C++ via Arduino IDE)
*Arduino Uno is simpler and educationally friendly, with clear pin mappings and stable development workflow. It has limited ADC channels (10-bit) and no built-in Wi‑Fi/BLE, so it's suitable for small standalone prototypes and for students learning fundamentals before moving to ESP32.*

---

### Question 2: Explain the ESP32 architecture briefly and how each functional block you covered is used in the alarm project.

*CPU (Xtensa LX6): runs application tasks and timers.  
Flash memory: stores program/firmware.  
SRAM: variable storage for runtime data (sensor buffers, state).  
GPIOs: read LDR digital switches, drive buzzer (via PWM), control I2C SCL/SDA lines (via GPIO matrix).  
ADC: reads the voltage from the LDR voltage divider to detect ambient light level.  
PWM (LEDC on ESP32): used to generate buzzer tones and for LED brightness control.  
I2C peripheral: communicates with the I2C LCD to display time/status.  
Timers and RTC: maintain accurate time or periodic sampling (important for alarm scheduling).  
Wi‑Fi/BLE (optional): could be used for remote control or logging.*

---

### Question 3: Describe the LDR voltage-divider ADC interface and important considerations (range, resolution, calibration).

*An LDR in a voltage divider converts light-level dependent resistance into a voltage. Connect the LDR and a fixed resistor between Vcc and GND; measure the centre node with ADC. Consider: ADC reference voltage and input range (don’t exceed ADC max); ADC resolution (ESP32 default 12-bit - 0..4095); input impedance and source resistance (keep divider low enough for ADC sample-and-hold to charge reliably); noise and averaging (use moving average or median filters); calibration — measure known light levels to map ADC counts to lux (approximate) or to set the alarm threshold. Include decoupling on the ADC input and avoid long unshielded leads to reduce noise.*

Practical tip: use an op-amp buffer if the divider resistance must be high or if you need better stability.

---

### Question 4: How did you implement the alarm tone on the speaker, and what hardware considerations are required to drive a buzzer safely from an ESP32?

*We used a PWM output (ESP32 LEDC channels) to produce square-wave tones. A small piezo buzzer can be driven directly from a GPIO via PWM for low current. For higher-power speakers or passive speakers, use a transistor or MOSFET driver and add a series resistor, and include a flyback diode for inductive loads (if using a motor-driven alarm). Use a transistor (e.g., NPN or logic-level N‑MOSFET) with a base/gate resistor and a flyback diode if the load is inductive. Ensure the power supply can source the current; avoid sourcing >20–40 mA directly from a GPIO. Use decoupling capacitors and a common ground.*

---

### Question 5: Explain the software structure you used (setup/loop, functions, state machine). Why did you prefer that structure?

*We used the standard Arduino pattern: `setup()` for initialization (configure ADC attenuation, I2C, LEDC timers, pin modes), and `loop()` contains a lightweight state machine for alarm states (IDLE, ARMED, ALARMING, SNOOZE). Time-critical operations (buzzer waveform generation) rely on hardware PWM, so `loop()` can remain responsive. Sensor sampling is done periodically using non-blocking timing (millis() or hardware timers) to avoid long `delay()` calls. Functions encapsulate tasks (readLDR(), updateDisplay(), checkAlarm(), startBuzz(), stopBuzz()), and classes or modules keep I2C LCD and sensor code separated for readability and reuse.*

---

### Question 6: Why did you use if/while loops in the alarm example, and what are the trade-offs versus event-driven or interrupt-based design?

*For the alarm logic (e.g., while(light < threshold) { buzz } ), while loops are simple and easy to understand for synchronous tasks. However, long blocking loops prevent other tasks (e.g., UI updates, button interrupts) from running. A better design uses event-driven or non-blocking polling (check condition periodically) or interrupts for urgent events (e.g., immediate stop button). Use timers/RTOS tasks to balance concurrency. Use interrupts for true asynchronous events (e.g., an external interrupt from a curtain-open sensor) but keep ISRs short—set a flag and process in the main loop.*

---

### Question 7: How do pull-up and pull-down resistors work, and which configuration did you use for the curtain/open switch? Why?

*Pull-up resistors hold an input pin at a known HIGH when the switch is open; closing the switch connects it to ground and reads LOW. Pull-down resistors hold input LOW when open and the switch connects to Vcc when closed. For the curtain/open sensor (mechanical or reed switch), we used internal pull-up with the switch to ground (active LOW), because ESP32 supports internal pull-ups and it simplifies wiring (fewer external parts). For noisy environments, external stronger pull-ups/pull-downs or RC debouncing/filtering may be used.*

---

### Question 8: Describe debouncing strategies for mechanical switches. How did you implement debouncing for the curtain switch?

*Software debouncing: sample the input and wait a small debounce period (e.g., 10–50 ms). Implementation: when a change is detected, record the time and only accept the change after the debounce interval and stable readings. Hardware debouncing: small RC filter and Schmitt trigger. For the curtain switch we implemented software debouncing with read-stability (sample multiple times) and a simple state machine to ignore bouncing events.*

---

### Question 9: What I2C issues can occur with an I2C LCD and how would you debug them?

*Common problems: wrong I2C address, bus contention (multiple devices using same address), pull-up resistors absent or incorrect, wiring errors (SDA/SCL reversed), insufficient power, or incorrect logic levels. Debugging: run an I2C scanner sketch to list addresses, check pull-up resistors (I2C needs pull-ups on SDA/SCL), use `Wire.begin()` at the correct pins, check bus speed (100kHz vs 400kHz), and use an oscilloscope or logic analyzer (Saleae/PulseView) to inspect signals. For address conflicts, use an I2C expander or change device address if possible.*

---

### Question 10: How did you structure your test plan (initial and refined)? What tests did you perform for the alarm system?

*Initial (P5): unit tests and simple integration tests — confirm ADC readings change with known light levels, confirm buzzer emits tone at set PWM frequency, verify LCD displays text via I2C.  
Refined (M4): full system tests and edge cases — power-cycle recovery, low-voltage operation, sensor noise injection, rapid open/close of curtains, debounce stress test, verify alarm stops under light threshold, measure ADC stability over temperature. Acceptance tests: alarm triggers at set time, alarm silences with curtain open, display correct status, test for memory leaks or unstable behavior after prolonged uptime. Document test steps, inputs, expected outputs, and pass/fail criteria.*

---

### Question 11: If a student’s alarm sometimes fails to stop when the curtains open, how would you debug this problem?

*Check the sensor path: confirm ADC values change reliably when curtains open. Verify the logic that stops the buzzer runs on the correct condition and is non-blocking. Add logging via `Serial.print()` to trace values and state changes. Verify pull-up/pull-down and debouncing; intermittent failures often indicate flaky connections or insufficient debouncing. Use a scope to check buzzer control signals if necessary. If the logic is in a blocking loop, refactor to non-blocking; if in an ISR ensure ISR only sets a flag and main loop handles stopping.*

---

### Question 12: What constraints and limitations does the ESP32 ADC have, and how did you mitigate them?

*ESP32 ADC nonlinearity and input attenuation behavior can affect accuracy. ADC channels have selectable attenuation (0dB..11dB) to adapt input range. Takeaway: calibrate using measured points, avoid very high source impedance, use averaging and oversampling, and apply simple linearization if necessary. For high precision, use an external ADC (e.g., 16-bit) or an op-amp front-end. Also, avoid reading ADC in critical timing ISRs because of conversion time and blocking behavior.*

---

### Question 13: Discuss power consumption considerations for a battery-powered version of this system. What changes would you make?

*Use deep sleep between alarms and wake via RTC or external interrupt. Disable unused peripherals and turn off Wi‑Fi/BLE if unused. Minimize Polling frequency and use interrupts. Use low-power components (e.g., low-power ADC or external ADC with low standby). Regulate power efficiently with switching regulators instead of linear regulators. Consider using MOSFETs to disconnect high-power peripherals when idle. Also, implement brownout and battery-voltage monitoring to safely shut down or reduce functionality as battery drops.*

---

### Question 14: Describe an example of modularising the code using classes or modules for the alarm project.

*Create modules: `class LDRSensor { read(), calibrate(), getLux() }`, `class Alarm { arm(), disarm(), start(), stop() }`, `class I2CLcd { init(), printLine(), clear() }`. Each class has clear responsibilities and hides hardware details (pin numbers, protocol initialization). This makes code testable, reusable across projects, and easier to maintain (M criterion). Use header files and a consistent naming convention; document public interfaces with short comments.*

---

### Question 15: Why is avoiding long blocking delays important? Give an example refactor.

*Long `delay()` calls block the CPU and prevent concurrent tasks like display updates or button handling. Refactor example: Replace `delay(5000)` with a non-blocking timer using `millis()`:
- track `unsigned long lastMillis;`  
- if (millis() - lastMillis >= 5000) { doTask(); lastMillis = millis(); }  
This allows the loop to keep running and process other events.*

---

### Question 16: How would you use FreeRTOS on the ESP32 to improve the design? Give a minimal task split.

*FreeRTOS allows concurrent tasks on the dual-core ESP32. Example split:
- Task A (High priority): ADC sampling & threshold detection (runs every 50 ms).
- Task B (Medium): Display update (runs every 1 s).
- Task C (Low): Logging & network communication (runs when connected).
Use queues or semaphores for inter-task communication; avoid heavy processing in ISRs. This approach increases responsiveness and determinism (M/D).*

---

### Question 17: Describe safe hardware design choices for the buzzer and motor drivers on the PCB (KiCad).

*Use a MOSFET (N-channel) or NPN transistor to drive high current buzzers/motors, with a gate/base resistor and a flyback diode for inductive loads. Include decoupling capacitors (100nF + 10μF) near the power pins, a bulk electrolytic cap near motor/buzzer supply, and a reverse-polarity protection diode or P‑MOSFET. Add test points for ADC input, I2C lines, and power rails. Provide silkscreen pin labels and mounting holes. Use ground pours and separate analog/digital ground if high noise present. Place the ADC input trace away from high-current traces.*

---

### Question 18: What PCB footprint and component selection pitfalls should students avoid in KiCad?

*Avoid mismatched footprints (check pad pitch and package), forget SMD pad thermal relief, inadequate copper pour clearance, leaving no mounting holes or mechanical clearances, and not including keep-out areas for connectors. Select regulators that handle expected current and thermal dissipation. Ensure correct pad orientation for polarized components (electrolytics, diodes). Provide decoupling next to IC power pins. Use a 2.54mm header for prototyping to match common connectors.*

---

### Question 19: How will you evaluate the live offline programming test? What tasks are typical and how are they scored?

*Typical live test (30–60 minutes): read ADC from LDR and map to a numeric scale, toggle an LED via button with debouncing, write a short function to generate a tone via PWM for a specified frequency/duration, and display a message on an I2C LCD. Assessment rubric:
- Pass (P): Basic correct functionality (reads ADC, LED toggles, buzzer emits sound, LCD prints).
- Merit (M): Code quality (modularity, comments), error handling (debounce, ADC filtering), test plan explanation, non-blocking design.
- Distinction (D): Optimization, critical analysis (discuss trade-offs/limitations), demonstrates RTOS/task approach or shows KiCad schematic or PCB considerations, defends choices technically and presents measured data.
Assessors should ask follow-ups (e.g., "how would you handle noisy ADC readings?") to differentiate between P/M/D and probe depth of understanding.*

---

### Question 20: For P/M/D, what specific evidence do students need to present during the professional discussion?

- **Pass evidence:** Can explain and demonstrate the implemented code for basic functionality, describe the ESP32/Arduino pin connections, and run the system showing alarm triggers and stops with curtain open.
- **Merit evidence:** Provides a refined test plan showing edge-case tests, demonstrates modular code (functions/classes), explains calibration and filtering methods, and discusses power considerations or design trade-offs.
- **Distinction evidence:** Critically analyses the design for reliability and safety, proposes and justifies improvements (e.g., external high-precision ADC, task-based FreeRTOS architecture, OTA strategy), demonstrates PCB-level considerations via KiCad, and evaluates broader impacts (sustainability, accessibility).

---

## Technical Implementation — Short Answer Prompts (for viva)

1. How did you configure ADC attenuation and why?
2. Explain the PWM configuration you used for producing the alarm tone (frequency, duty cycle, timer/channel).
3. Describe the I2C initialization and how you handled LCD address detection.
4. Why did you choose software debouncing and what timing did you select?
5. Show the logic/state machine for arming/disarming the alarm in pseudocode.
6. How did you protect the ADC input from over-voltage?
7. What guarding or failsafe hardware did you include on your PCB?
8. How would you measure and report system reliability (MTBF or uptime tests)?
9. What safety standards or best practices did you consider when designing the system?
10. If the ADC reading drifts over time, what firmware and hardware steps would you take to correct it?

---

## Programming Methods — Short Answer Prompts

11. Why use hardware PWM vs. software tone generation?
12. When should you use interrupts for button presses vs. polling?
13. How would you implement a moving average filter in code for ADC smoothing? Provide pseudo-code.
14. How to avoid memory fragmentation on embedded platforms when using dynamic memory?
15. How do you debug an I2C device that intermittently fails?
16. What are the trade-offs between using Arduino IDE and ESP-IDF on ESP32?

---

## Testing & Validation — Short Answer Prompts

17. Describe a unit test for a sensor-reading function.
18. How would you validate the LCD displays correct text under heavy CPU load?
19. Define acceptance criteria for the alarm stopping reliably within 1 second of curtain open.
20. Describe recovery logic when the buzzer driver fails (e.g., transistor short).

---

## Design & Professional Reflection — Prompts

21. If you re-designed the PCB for mass production, what would change?
22. How would you improve the alarm system to support accessibility (e.g., for visually impaired users)?
23. What ethical considerations arise if the device were used in medical environments?
24. What was the hardest bug you encountered and how did you find it?
25. What advice would you give another student starting this project?

---

## Sample Question List — Grouped by Learning Outcome (for assessor use)

### LO1 — Examine Embedded System Technology (P/M/D style)
- P: "Explain the main functional blocks of the ESP32 and their role in the alarm project."  
- P: "What is the ADC resolution on the ESP32 and how does it affect measurement?"  
- M: "Compare ESP32 and Arduino Uno in terms of ADC performance, communication interfaces and suitability for IoT."  
- D: "Critically analyse the ESP32 architecture and identify limitations that could affect high-precision sensing or industrial deployment. Propose mitigation strategies."

### LO2 — Design an Embedded System
- P: "Sketch a block diagram for the alarm system showing sensors, microcontroller, actuator and display."  
- P: "List the functional requirements for the alarm project (sensing, actuation, user interaction)."  
- M: "Review the chosen peripherals and justify each device selection based on performance and cost."  
- D: "Discuss design trade-offs (power, size, cost, reliability) and propose concrete improvements to the current design (e.g., external ADC, power management)."

### LO3 — Implement Embedded System Designs by Writing Code
- P: "Explain how your code reads the LDR and triggers the alarm. Show key snippets."  
- P: "Describe your initial test plan to show the alarm works."  
- M: "Show refactored code that demonstrates modular design and error handling (debounce, invalid ADC values)."  
- D: "Demonstrate and defend a full test plan, present logs or measurement data, and evaluate the implemented system with peers' feedback."

### LO4 — Evaluate Applications of Embedded Systems
- P: "Describe one real-world sector where this alarm-like embedded system could be applied."  
- M: "Explore an emerging trend (IoT or AI) and explain how it could enhance the alarm system."  
- D: "Critically appraise ongoing research or commercial products related to smart environment sensors, considering societal demands, technical constraints and economics."

---

## Example Model Answers & Pointers
- Moving average pseudo-code:
```
const int N = 8;
int idx = 0;
int buffer[N] = {0};
long sum = 0;

int readFiltered() {
  sum -= buffer[idx];
  buffer[idx] = analogRead(ADC_PIN);
  sum += buffer[idx];
  idx = (idx + 1) % N;
  return sum / N;
}
```

- Simple non-blocking alarm pseudocode:
```
setup() { initSensors(); initLCD(); initPWM(); lastSample = millis(); }
loop() {
  if (millis() - lastSample > SAMPLE_INTERVAL) {
    light = readFiltered();
    updateDisplay(light);
    lastSample = millis();
  }
  if (alarmArmed && light < THRESHOLD && millis() >= alarmTime) startAlarm();
  if (alarmActive && light >= STOP_THRESHOLD) stopAlarm();
}
```

---

## How to Use This File
- Tutors: adapt these questions to probe student understanding across P/M/D criteria. Use sample question list to ensure coverage of LO1-LO4.  
- Students: use as revision materials for the professional discussion and practice concise, technical answers with supporting evidence (code excerpts, trace logs, KiCad screenshots).  
- Assessors: ask follow-ups to probe depth and map responses to P/M/D evidence.

---

End of PD Sample QnA LO3 for Unit 5013.
