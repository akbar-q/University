# Professional Discussion — Focused Q&A for LO3 (Implement Embedded System Designs by Writing Code)

Purpose
- This file is focused on LO3 (implementing embedded system designs by writing code). Questions probe students' programming, simulation, testing, debugging and implementation evidence.  
- Where useful, related LO2/LO4 topics appear only to support or justify implementation choices. The emphasis is on P4/P5, M4 and especially D3.

How to use
- Tutors: use the model answers and follow-up prompts to probe depth. Start with Pass-level prompts (P4/P5), move to Merit (M4), and aim for Distinction (D3) depth questions.  
- Students: use this as revision for the professional discussion. Prepare code excerpts, test logs, simulation screenshots, and a short demo for the live programming test.

Mapping to assessment criteria (LO3)
- P4 — Implement an embedded system by writing well-structured code. (basic code functionality, correct use of APIs)
- P5 — Develop an initial test plan to demonstrate part functionality. (basic test cases)
- M4 — Produce a refined test plan covering all functions. (edge-cases, stress tests)
- D3 — Evaluate a fully working embedded system with real peripherals, in discussion with a peer group (deep analysis, measurement data, peer feedback, improvements).

---

## Structured Q&A (model answers + examiner prompts)

Question A — P4 (Basic implementation)
Q: Summarise the code you wrote that reads the LDR, decides when to trigger the alarm, and drives the buzzer and I2C LCD. Show key snippets and explain why they are organised that way.
Model answer:
- High-level structure: `setup()` configures ADC attenuation, LEDC PWM timer and channel, I2C (Wire.begin()), and pinModes. `loop()` contains a state machine (IDLE, ARMED, ALARMING, SNOOZE).
- Key function responsibilities:
  - readLDR(): reads ADC, applies moving average filter, returns calibrated value.
  - checkAlarm(): compares filtered value to threshold and time conditions; sets alarm state.
  - startAlarm()/stopAlarm(): configure PWM (frequency/duty) or call driver to turn buzzer on/off and update display.
- Rationale: separation of concerns improves testability and readability; hardware timers and PWM offload real-time generation from the CPU.
Examiner follow-ups:
- Show the exact ADC read + filter lines. Why this filter window size?
- Where do you handle ADC errors (invalid reading/noise)?
- How does your `startAlarm()` avoid blocking the main loop?

Question B — P5 (Initial test planning)
Q: What was your initial (P5) test plan for the alarm subsystem? Which unit tests did you run first?
Model answer:
- Initial tests: ADC monotonicity (cover several light conditions with known resistances), buzzer tone generation at 1kHz for 1s, verify I2C LCD prints text properly with an I2C scanner.
- Integration tests: combine ADC trigger with buzzer start/stop; ensure curtain sensor event stops buzzer.
- Expected outcomes recorded, simple pass/fail table.
Examiner follow-ups:
- Provide an example test vector and expected ADC range for "dark" vs "light".
- Show how you logged the test results (Serial logs or test spreadsheet).

Question C — M4 (Refined test plan and edge cases)
Q: How did you refine the test plan to meet M4? Show extended tests, edge cases and how you automated or documented them.
Model answer:
- Extended test cases: power-cycle recovery, repeated open/close of curtain at rapid rate (debounce stress), ADC drift test (long-running test over hours), low-voltage operation, temperature variation (if available), and stress on I2C bus (simulated collisions).
- Measurement capture: sampled ADC at 100Hz, logged to SD/Serial, performed statistical analysis (mean, std dev, peak-to-peak). Documented test steps and pass/fail criteria.
- Automation: small script to replay test inputs (if hardware-in-loop available) or use a sequence of simulated inputs in Wokwi.
Examiner follow-ups:
- Show sample log output with timestamps. How did you choose the thresholds for pass/fail?
- How did you modify code after a failed test?

Question D — D3 (Evaluation with peers, measurement & justification)
Q: Provide the deepest evaluation: show measured latency between curtain-open detection and buzzer stop, ADC noise analysis, and how peer feedback altered the implementation.
Model answer:
- Measured metrics: average stop latency (e.g., 120ms ± 30ms) measured by toggling curtain sensor and logging timestamps. ADC noise: RMS noise determined over 10,000 samples; SNR calculation vs. full-scale.
- Changes from peer review: improved ADC source impedance by lowering divider resistor values to improve S/H charging, added moving median filter to handle spikes, replaced blocking alarm loop with non-blocking state-machine to ensure display updates and button responsiveness.
- Trade-offs considered: reducing divider resistance increases power draw — documented impact on battery life and suggested trade-offs (add sample-and-hold op-amp or external ADC for improved precision).
Examiner follow-ups:
- Show code or logs that compute latency. How repeatable were these numbers? Any outliers?
- Demonstrate you can defend the design choices quantitatively (e.g., ADC averaging vs. increased supply current).

Question E — Debugging & instrumentation (P4 → D3)
Q: Provide a step-by-step example of a specific bug you found and fixed during integration.
Model answer:
- Symptom: alarm sometimes did not stop when curtain opened.
- Investigation: added Serial timestamps to track events; discovered the code path to stopAlarm() was inside a blocking loop that missed the interrupt flag.
- Fix: refactor to non-blocking check, move external interrupt handler to set a flag only, main loop handles the stop logic. Add software debounce and test again.
- Verification: repeated 100 trials; previously 12% failed to stop within 1s; after fix 0% failures in 1000 trials.
Examiner follow-ups:
- Show before/after code diffs. How did you define “failure”?
- How did you perform the 1000-trial test? Manual? Automated?

Question F — Code design & modularity (M4/D3)
Q: How did you structure your code for reusability and testability (classes/modules)? Provide examples.
Model answer:
- Modules: LDRSensor class (calibrate(), readFiltered()), AlarmManager (state machine), DisplayI2C class (init(), writeLine()). Each module has a small public interface and internal helpers; header files and unit-test harnesses exist for critical logic (e.g., threshold decisions) where feasible.
- Benefits: easier to run unit tests on algorithmic parts (filter logic) and reuse in other projects.
Examiner follow-ups:
- Give the class header for LDRSensor and one function body. How do you mock the ADC for unit tests?

Question G — Real-time & concurrency (M4/D3)
Q: Could you describe how you would use FreeRTOS (ESP32) or timers to make the design more robust? If you implemented any, show proof.
Model answer:
- Option 1: FreeRTOS tasks — ADC sampling task (high priority, 50 ms), display task (low priority, 1 s), network/logging (low priority). Communication via queues to avoid shared-state races.
- Option 2: Hardware timers — use LEDC PWM with timer for buzzer tone and an RTC interrupt to wake for alarm scheduling.
- Proof: sample code or task list and reasoning for chosen priorities.
Examiner follow-ups:
- How did you avoid priority inversion? Which resources are protected by semaphores?

Question H — Simulation & HIL (M4)
Q: Which parts of your system were simulated? How did simulation accelerate debugging?
Model answer:
- Used Wokwi/TinkerCAD to mock sensor inputs and verify state transitions and I2C display logic before wiring real hardware. Saved time by iterating filter parameters and debounce intervals.
- HIL: for timing-critical tests, used a logic analyzer to confirm PWM bursts and measured real latencies.
Examiner follow-ups:
- Provide a screenshot of the Wokwi simulation or the logic analyzer capture.

Question I — Safety & failsafe (M4/D3)
Q: What failsafe mechanisms did you add to the firmware and hardware? How are they tested?
Model answer:
- Software: watchdog timer to recover from hung code paths; timeout fallback for alarm toggling; input validation for ADC readings (range checks).
- Hardware: transistor driver for buzzer with current limiting and reverse-polarity protection; pull-up/pull-down choices to prevent floating inputs.
- Testing: simulated hung state and verified WDT reset; forced invalid ADC input and verified safe behaviour.
Examiner follow-ups:
- Show the WDT configuration and the reset log entry captured.
- How do you ensure failsafe doesn’t mask underlying intermittent faults?

Question J — Professional reflection (D3)
Q: If you were to claim Distinction-level evidence, what artefacts would you present today?
Model answer:
- Working prototype demo; modular source code with comments and Doxygen; full refined test plan and logs (M4); measured performance metrics (latency, ADC noise floor); KiCad schematic excerpt showing analog input conditioning and buzzer driver; a short peer-feedback log and list of implemented improvements; a concise critical appraisal (what still needs improving, trade-offs and why).
Examiner follow-ups:
- Ask for specifics: exact log files, commit IDs, peer-review notes.

---

## Quick practical prompts for the viva (short, targeted)
- "Show the code path from ADC read to alarm activation."  
- "Explain your moving-average vs median choice for filtering and show pseudo-code."  
- "How does your code ensure the LCD is updated even while alarming?"  
- "Demonstrate the live programming task you took earlier and explain a single change you'd make now."  

---

End of PD Sample QnA LO3.