# Week 1 — ESP32 Advanced Peripherals & Embedded Programming (3-4h)

Notes: This deck is written as a Markdown slide deck. Use a generator (Pandoc, Marp, reveal.js, or PowerPoint import) to convert into PPTX.

---

## Slide 1: Title

ESP32 Advanced Peripherals & Embedded Programming — Week 1

Speaker notes:
- Welcome the class. Today we build on basics you already learned (GPIO, ADC, I2C LCD, PWM, speaker alarm project).
- Explain outcomes: by the end of this session they should understand timers, interrupts, advanced PWM/ADC use, debouncing and produce a small in-class exercise.

---

## Slide 2: Learning Objectives

- Understand hardware timers and software timers on the ESP32
- Use interrupts (GPIO and timer-based) safely
- Advanced PWM: channels, frequency, duty, resolution
- ADC details: attenuation, multisampling, calibration
- Debounce switches and read stable inputs
- Build a small exercise: tone generator with timed snooze and safe button handling

Speaker notes:
- Read objectives aloud. Link each objective to their prior learning (digitalWrite, analogWrite, analogRead).
- Emphasise safety and determinism in embedded code.

---

## Slide 3: Recap — ESP32 functional blocks

- Dual-core Xtensa processors (brief reminder)
- GPIO matrix and routing
- Timers (hardware), RTC, watchdogs
- ADC (SAR), DAC (2 channels), PWM (LEDC), I2C, SPI, UART
- Interrupt controller & priorities

Speaker notes:
- Keep recap short. Focus on blocks we'll use: Timers, ADC, PWM, interrupts.

---

## Slide 4: Hardware Timers vs Software Timers

- Hardware timers: independent, precise, less jitter, run at peripheral level
- Software timers: built on OS (FreeRTOS) or loop, easier but less precise
- When to use which: time-critical or audio -> hardware; periodic UI refresh -> software timer

Speaker notes:
- Show common API: ESP-IDF hardware timer config or Arduino-style timer libraries.
- Give example: generating a 2 kHz square wave reliably -> hardware timer + PWM or toggle in interrupt.

---

## Slide 5: Timer Programming (example)

- Components: timer source (APB), prescaler, counter, auto-reload
- Use-cases: debouncing windows, PWM updates, periodic ADC sampling

Speaker notes:
- Outline pseudocode: configure timer; attach ISR; start; in ISR set a flag; handle in main loop.
- Warn: keep ISRs short, avoid printf or heap allocations in ISR.

---

## Slide 6: Interrupt Basics and Best Practices

- Types: level vs edge, GPIO vs peripheral
- ISR constraints: minimal work, use volatile flags, signal tasks/queues
- Priority and freeRTOS: which functions are safe (no blocking APIs) in ISR

Speaker notes:
- Show pattern: ISR -> set volatile flag or xSemaphoreGiveFromISR -> task handles processing.
- Stress race conditions & atomic operations.

---

## Slide 7: Practical: Wiring a button with interrupt

- Use hardware pull-up or pull-down
- Connect button to GPIO, configure edge detection
- Implement debounce in software or via hardware RC

Speaker notes:
- Demonstrate wiring diagram quickly: button to GPIO, 10k pull-down/up.
- Show sample debounce approach: ignore edges for N ms after first event.

---

## Slide 8: Debouncing Techniques

- Hardware: RC filter, Schmitt trigger
- Software: simple delay; timer-based state machine; counting samples
- Best: timer-based state machine with sampling every 5-10ms

Speaker notes:
- Explain why naive delay inside ISR or main loop is bad. Present robust state-machine pseudocode.

---

## Slide 9: PWM (LEDC) Advanced

- Channels vs timers vs GPIO assignment
- Frequency and resolution tradeoffs: resolution = log2(timer_clk / freq)
- Updating duty safely at runtime

Speaker notes:
- Show example: choosing 8-bit resolution at 1kHz vs 12-bit at 50Hz for motors/LEDs.
- Discuss phase-correct vs fast PWM where relevant.

---

## Slide 10: ADC on ESP32 — Deep Dive

- SAR ADC characteristics: 12-bit nominal, non-linearities
- Attenuation settings (0dB, 2.5dB, 6dB, 11dB)
- Calibration & multisampling to reduce noise
- ADC2 caveat: shared with Wi-Fi; prefer ADC1 for reliability

Speaker notes:
- Explain effect of attenuation on input voltage range and accuracy.
- Show multisample pattern: read N samples, average, discard outliers.

---

## Slide 11: DAC (audio basics)

- Two onboard DAC channels (8-bit style output)
- Use for simple tones, envelopes, or analog reference
- Combine PWM+filter vs DAC for cleaner audio

Speaker notes:
- Suggest using DAC for simple analog ramp; for higher fidelity, use I2S + external DAC.

---

## Slide 12: Generating Tones — Options

- Toggle GPIO at target frequency (square wave)
- Use PWM/LEDC to produce variable duty cycle square waves
- Use DAC with timer/interrupt for arbitrary waveforms

Speaker notes:
- Discuss audio quality tradeoffs and CPU usage. For alarm tones, PWM or toggling is fine.
- Provide pseudocode for timer-driven toggling producing 1kHz tone.

---

## Slide 13: Combining Sensors and Actuators — Example: Light-based Alarm

- Input: LDR via voltage divider -> ADC
- Output: Speaker via PWM or DAC
- Logic: sample ADC periodically, if below threshold start tone; if curtain open (button) stop

Speaker notes:
- Walk through system flow: ADC sample timer -> evaluate -> start/stop tone via timer/LED PWM -> button interrupt to disable.
- Emphasize state machine design: IDLE, ALARMING, SNOOZE, DISABLED.

---

## Slide 14: Debugging Strategies

- Serial logging (but not in ISR), use levels and timestamps
- Use LED blink patterns for boot/error codes
- Use logic analyzer/oscilloscope for timing-sensitive issues

Speaker notes:
- Recommend turning off serial in tight loops; prefer toggling a GPIO to mark events for logic analyzer.
- Show example logs to trace ADC values and state transitions.

---

## Slide 15: In-class Exercise (45-60 minutes)

Task: Build a robust tone generator with these requirements:
- Read LDR every 200ms using hardware timer or software timer with multisampling
- If measured light < threshold, start a 1kHz tone via PWM; else stop
- Button to silence alarm: must be debounced and use ISR to set a flag
- Implement a 30-second snooze using a timer
- Submit: code file + short README describing design choices

Speaker notes:
- Provide scaffolding hints: recommend using ADC1, use LEDC for tone, use timer for sampling.
- Encourage splitting work: sensor read task, alarm task, and button handling.

---

## Slide 16: Code patterns and anti-patterns

- Keep ISRs short; avoid heap and blocking calls
- Avoid floating point in tight loops if performance matters
- Use mutexes/semaphores for shared resources

Speaker notes:
- Give quick code snippet example showing safe ISR -> task communication.

---

## Slide 17: Resources & Reference APIs

- ESP-IDF timer/ISR docs and Arduino-ESP32 equivalents
- ADC calibration notes, LEDC PWM API
- Links to sample projects (local repo or official examples)

Speaker notes:
- Point students to the exact API pages and show where to find code examples in the SDK.

---

## Slide 18: Homework & Preparation for Week 2

- Finish the in-class exercise if not done
- Read Week 2 brief: Wi-Fi, BLE, SPI, I2C deep dive, KiCad basics
- Optional: sketch a PCB for the alarm circuit in KiCad

Speaker notes:
- Explain deliverables for next week: bring code for demo and any KiCad questions.

---

## Slide 19: Q&A and Wrap

- Quick recap of what was covered
- Invite questions and check understanding

Speaker notes:
- Use small live quiz: ask 3 quick questions to assess understanding (timers, ADC attenuation, ISR rules).
