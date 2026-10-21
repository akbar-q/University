# Assessment & Outcomes Mapping

This document maps the course outcomes to assessment tasks, provides a sample offline test prompt, and a marking rubric.

## Outcomes covered

- O1: Configure and use hardware timers and interrupts on ESP32
- O2: Implement and tune PWM and DAC outputs for actuators (LEDs, speakers)
- O3: Read, calibrate, and interpret ADC inputs; handle noise and attenuation
- O4: Interface with I2C and SPI peripherals and understand bus-level constraints
- O5: Design a simple PCB schematic and layout in KiCad
- O6: Implement debounced input handling and robust state machines
- O7: Debug embedded systems with serial, GPIO toggles, and analyzers

## Mapping: Week slides -> Assessable skills

- Week 1: O1, O2, O3, O6, O7
- Week 2: O4, O5, O1 (network timers), O2 (advanced interfaces)

## Offline Test (sample)

- Conditions: 30-45 minutes, no internet, use provided ESP32 dev board and basic components
- Prompt (single task): Implement a mode-controlled light-responsive controller.
  - Sample ADC1 (LDR) every 250ms, average 4 samples
  - Map ADC value to LED PWM brightness (0-255) using a non-linear mapping (e.g., gamma or piecewise)
  - Button cycles modes: AUTO, MAX, OFF (debounced, using ISR)
  - Serial status every 1s with values and mode

## Marking Scheme (Detailed)

- Peripheral init and config (timers, ADC, PWM): 12 pts
  - Proper ADC1 usage, attenuation selection: 4 pts
  - PWM setup and correct mapping: 4 pts
  - Timer or sampling logic: 4 pts

- Button handling and debouncing: 8 pts
  - ISR minimal and flagging: 3 pts
  - Debounce implemented robustly: 3 pts
  - Mode cycling logic correct: 2 pts

- Algorithm correctness: 8 pts
  - ADC averaging and mapping: 4 pts
  - Mode behaviours implemented: 4 pts

- Code quality & README: 6 pts
  - Clear structure, comments, README describing decisions: 4 pts
  - Compilation and run instructions included: 2 pts

- Bonus / KiCad snippet: 6 pts
  - Schematic with correct symbols and power decoupling: up to 4 pts
  - PCB layout considerations or Gerbers: up to 2 pts

## Practical grading notes

- Deduct points for unsafe ISR use (blocking or print inside ISR)
- Deduct for using ADC2 while Wi‑Fi is active (if tests show instability)
- Accept use of Arduino-ESP32 or ESP-IDF; mark on correctness, not API choice

## Example short feedback checklist for TAs

- Does code compile offline? Y/N
- ADC1 used? Y/N
- Button debounce implemented? Y/N
- Serial status every 1s? Y/N
- README present? Y/N

## Next steps for instructor

- Confirm submission channel and deadlines
- Provide hardware list for students and upload sample skeleton code (optional)


---

End of assessment mapping.
