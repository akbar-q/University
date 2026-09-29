# Week 6 - Robustness, Debouncing and Debugging (3-4h)

---

## Slide 1: Working Once Is Not Enough

- A system that works once may still fail with noisy sensor data or repeated switch presses.
- This week improves the basic alarm using evidence from controlled tests.
- Aim: predictable behaviour that students can explain and defend.

---

## Slide 2: Learning Objectives

- Explain switch bounce and software debounce.
- Compare raw and filtered analogue readings.
- Explain hysteresis for threshold stability.
- Use serial logs for systematic debugging.
- Improve the test plan to cover all functions and edge cases.

---

## Slide 3: What Is Switch Bounce?

- Mechanical contacts do not change cleanly once.
- A single press can generate many rapid `HIGH`/`LOW` transitions.
- A naïve program may interpret one press as several events.
- Debouncing accepts a new state only after it remains stable for a defined time.

---

## Slide 4: Software Debounce Pattern

```cpp
if (rawReading != lastReading) {
  lastDebounceTime = millis();
}

if (millis() - lastDebounceTime > debounceDelay) {
  if (rawReading != stableState) {
    stableState = rawReading;
  }
}
lastReading = rawReading;
```

Speaker notes:
- Do not require students to memorise this at first. Trace it with a timeline.
- Explain how this relates to the 20 ms debounce value found in the student artefact.

---

## Slide 5: Lab L11 - Debounce a Curtain Switch (35 min)

**Requirements:**

- Print raw and stable switch states to serial monitor.
- Add a 20 ms debounce window.
- Run 20 repeated presses.
- Record expected and actual behaviour.

**Pass criterion:** one intended press produces one stable state change.

---

## Slide 6: Sensor Noise and Filtering

- Real LDR readings vary because of light fluctuation, electrical noise and ADC variation.
- A moving average reduces random variation but delays response.
- A median filter is better at rejecting isolated spikes.
- Choose a technique because of measured behaviour, not fashion.

---

## Slide 7: Four-Sample Moving Average

```cpp
int readAverageLdr() {
  long total = 0;
  for (int sample = 0; sample < 4; sample++) {
    total += analogRead(LDR_PIN);
  }
  return total / 4;
}
```

- First test the raw value; only add filtering when evidence shows a need.
- Record the sample count and timing in the test plan.

---

## Slide 8: Hysteresis Prevents Chatter

- Use one threshold to turn alarm on and another to turn it off.
- Example: alarm on below 380; alarm off above 420.
- The gap prevents repeated on/off switching near a single threshold.

```text
if normal and reading < 380: alarm on
if alarming and reading > 420: alarm off
```

---

## Slide 9: Lab L12 - Filter and Stabilise LDR Behaviour (40 min)

- Produce raw and averaged readings in serial monitor.
- Create a near-threshold test condition.
- Add hysteresis and compare the output behaviour.
- Record one benefit and one trade-off.

**Evidence:** serial screenshot, before/after code and a short comparison table.

---

## Slide 10: Serial Debugging That Helps

```cpp
Serial.print("LDR=");
Serial.print(ldrValue);
Serial.print(" switch=");
Serial.print(switchPressed);
Serial.print(" alarm=");
Serial.println(alarmActive);
```

- Print labels, not just numbers.
- Log only often enough to remain readable.
- Remove excessive debugging output from a final real-time design.

---

## Slide 11: Issues-and-Fixes Table

| Symptom | Evidence | Cause found | Fix | Retest result |
| --- | --- | --- | --- | --- |
| Alarm flickers | Serial log | Threshold noise | Hysteresis | Stable for 20 tests |

- This table is central evidence for the LO3 video recording.

---

## Slide 12: Refined Test Plan - LO3.M4

Add tests for:

- repeated switch presses;
- near-threshold sensor values;
- simultaneous LDR and switch activation;
- LCD and buzzer operating together;
- power-up state and recovery from invalid input.

---

## Slide 13: Week 6 Evidence

- L11 and L12 code/simulation evidence.
- Serial log and issues-and-fixes table.
- Refined test cases with results.
- A 60-second spoken explanation of one improvement, recorded as video practice.
