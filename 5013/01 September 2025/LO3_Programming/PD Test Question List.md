# PD Test Questions — Focused on LO3 (Implement Embedded System Designs by Writing Code)

Purpose
- This tutor-only list is constrained to LO3-focused prompts. Some questions reference LO2/LO4 only when directly relevant to implementation. The goal is to flexibly pick questions to fully distinguish P4/P5, M4 and especially D3 performance during the professional discussion.

Instructions for assessors
- Choose 1–2 Pass-level prompts to confirm basic competence (P4/P5).  
- Choose 1 Merit-level prompt to verify refined test planning and code quality (M4).  
- Choose 1 Distinction-level prompt aimed at D3 (deep evaluation, evidence, metrics, peer feedback).  
- Follow up with targeted technical probes based on student answers and artefacts (code, logs, screenshots, KiCad).

---

## LO3 — Pass-level (basic evidence of implementation & testing)
- P1. Explain the core code that reads the LDR and triggers the alarm (show snippets).  
- P2. Demonstrate how you debounced the curtain switch (show code and wiring).  
- P3. Show your initial test plan (P5) and the simple pass/fail cases you ran.  
- P4. Show how you generate a tone using PWM and explain frequency/duty choices.

## LO3 — Merit-level (refined testing, modularity, non-blocking behavior)
- M1. Present your refined test plan that covers edge cases and long-run tests (M4). Include a sample log or result.  
- M2. Show modularised code (classes/functions) and explain how it improves testability and maintenance.  
- M3. Explain and demonstrate non-blocking design choices (use of millis(), timers or RTOS tasks); show a scenario that previously failed and how modular/non-blocking code fixed it.  
- M4. Describe ADC filtering logic chosen (moving average, median or exponential) and why it was chosen over alternatives. Show comparative test data if available.

## LO3 — Distinction-level (deep evaluation, measurement, design improvement)
- D1. Present measured system performance: alarm-stop latency distribution, ADC noise statistics, and any timing/jitter measurements. Critically evaluate whether the system meets real requirements and where it fails.  
- D2. Show concrete evidence of peer evaluation and iterative improvement (e.g., peer review notes, issue log, before/after measurements) and explain how feedback was implemented.  
- D3. Show KiCad schematic excerpt demonstrating PCB-level choices for ADC conditioning or buzzer driver and explain how the layout improves reliability/noise immunity.  
- D4. Propose and defend at least two clear, evidence-based improvements that would be required to take the prototype toward an industrial design (e.g., external ADC, regulated analog ground, EMC mitigation, certification steps).

---

## Live offline programming test — Suggested tasks & evaluation (LO3 focus)
Core task (30–60 minutes):
1. Read ADC from LDR and map to a percentage/threshold; apply a simple filter.  
2. Toggle an LED with a button using debouncing.  
3. Create a function to play a tone for a given frequency/duration via PWM.  
4. Print a status message to an I2C LCD.

Assessment rubric (example):
- Pass (P4/P5): All four tasks work at functional level; student explains wiring and basic test plan.  
- Merit (M4): Code is modular, uses non-blocking constructs, includes basic defensive checks (ADC range checks), and student can present a refined test case or a short log.  
- Distinction (D3): Student presents measured timings and noise data; explains trade-offs; demonstrates a KiCad schematic or RTOS/task split; defends design choices quantitatively.

Time management:
- Provide 45–60 minutes. Allow student to test on hardware/simulator but forbid internet lookup in the live test. Assess problem-solving and mastery.

---

## Example quick follow-ups (to probe depth)
- "How would you measure stop latency precisely? Describe the instrumentation you would use."  
- "What filter parameter would you change if the ADC sample rate doubled, and why?"  
- "Explain how you would refactor the code to support a second sensor type without duplication."  
- "If the buzzer driver MOSFET overheats, how would your firmware detect and handle it?"

---

End of PD Test Questions LO3.