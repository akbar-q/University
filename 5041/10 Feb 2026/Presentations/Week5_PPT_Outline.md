# Week 5 Presentation Outline — Unit 5041
## LO3: Producing results, troubleshooting (RCA), simulation/experiments, and writing the Results/Discussion properly

Toolchain assumption: **Arduino IDE + ESP32 (Arduino-ESP32)**.

Session length: **4 hours**.

Main outcome: teams generate **real measured results** (not claims), troubleshoot at least one performance issue using a structured method (supports M5), and begin a strong **Results + Discussion** write-up.

---

## Slide 1 — Title
**On-slide:**
- Week 5: LO3 results + troubleshooting + analysis
- From “it runs” → “it’s verified and explained”

**Speaker notes (2 min):**
- Set expectation: by today, you must have measurable outputs to compare with KPIs.

---

## Slide 2 — Where we are in the unit timeline
**On-slide:**
- LO1 done (proposal)
- LO2 done (plan + KPIs)
- LO3 now: execute, test, collect evidence, write report

**Speaker notes (3–4 min):**
- Remind: LO3 is the biggest mark area and needs continuous evidence.

---

## Slide 3 — LO3 focus this week (what markers look for)
**On-slide:**
- P6: planned tests/simulations generate outcomes
- M5: solve issues using practical examples/simulation/experiments
- M4: results are justified in a structured report

**Speaker notes (5–6 min):**
- Explain: “we changed a delay and it worked” is not M5.
- M5 requires: problem → hypothesis → change → re-test → compare.

---

## Slide 4 — What counts as a “result” in embedded systems
**On-slide:**
- Timings (ms): response, fault shutdown
- Stability: variance/noise in sensor values
- Reliability: resets, missed commands, dropped messages
- Accuracy (if relevant): temperature reading vs reference

**Speaker notes (8–10 min):**
- Results must be tied to KPIs defined in Week 3.
- They must include units and test conditions.

---

## Slide 5 — Evidence rule: results must be reproducible
**On-slide:**
- Repeat tests (≥ 5 trials)
- Record test conditions
- Keep logs/screenshots/data

**Speaker notes (6–8 min):**
- Teach: one successful run is a prototype; repeated trials are engineering.

---

## Slide 6 — Test execution discipline (do it the same way every time)
**On-slide:**
- Use a test script (steps)
- Reset to known state before each trial
- Capture evidence consistently

**Speaker notes (8–10 min):**
- Suggest a “test run checklist”:
  - confirm power supply
  - confirm serial baud
  - confirm sensor connections
  - confirm test mode off/on

---

## Slide 7 — Arduino Serial Monitor as a measurement tool
**On-slide:**
- Capture serial logs
- Use timestamps (`millis()`) on every key line
- Copy logs into evidence pack

**Speaker notes (8–10 min):**
- Show students exactly what they must log:
  - boot
  - command received
  - state transition
  - fault detected
  - outputs disabled

---

## Slide 8 — Measuring response time using logs (worked example)
**On-slide:**
- Event time: when input changes / command received
- Response time: when state/output changes
- Δt computed from timestamps

**Speaker notes (10–12 min):**
- Provide a worked example:
  - `T=100000 EVENT=LOW_WATER_DETECTED`
  - `T=100450 STATE=FAULT OUTPUTS=OFF`
  - Response time = 450 ms
- Tell them: include this calculation in Results.

---

## Slide 9 — Root Cause Analysis (RCA): the process
**On-slide:**
1) Define the symptom (measurable)
2) Form hypotheses
3) Test hypotheses
4) Apply fix
5) Re-test and compare

**Speaker notes (8–10 min):**
- Stress: the symptom must be measurable.
  - “sometimes weird” is not a symptom.
  - “misses CMD START 2/10 times” is.

---

## Slide 10 — RCA tools: 5 Whys and fishbone (pick one)
**On-slide:**
- 5 Whys (fast)
- Fishbone (bigger systems)

**Speaker notes (6–8 min):**
- Use 5 Whys in class; fishbone as optional.

---

## Slide 11 — Common embedded failure causes (coffee machine context)
**On-slide:**
- Loose wiring / floating inputs
- Brownouts (power dips) causing resets
- Debounce/filtering not done
- Blocking `delay()` causing missed events
- Incorrect assumptions in ICD

**Speaker notes (8–10 min):**
- Give quick checks for each:
  - floating input → add pull-up/pull-down
  - brownout → better supply, add capacitance, reduce load spikes

---

## Slide 12 — Practical example (M5): debounce strategy comparison
**On-slide:**
- Approach A: simple delay debounce
- Approach B: time-based stable window (`millis()`)
- Compare: false triggers per 10 trials

**Speaker notes (10–12 min):**
- Explain how to write this as M5 evidence:
  - show test data before and after
  - justify why chosen

---

## Slide 13 — Practical example (M5): sensor filtering options
**On-slide:**
- Raw value
- Moving average
- Median filter
- Compare variance and response delay

**Speaker notes (8–10 min):**
- Keep it simple; don’t overcomplicate.
- Document trade-offs.

---

## Slide 14 — Simulation counts (when hardware isn’t ready)
**On-slide:**
- Simulate sensor values in code
- Simulate faults deterministically
- Use simulation to verify logic and timing

**Speaker notes (6–8 min):**
- Emphasize: simulation is valid if assumptions are documented.

---

## Slide 15 — Integration check (minimum today)
**On-slide:**
- Integrate 1 end-to-end path with real telemetry
- UI reflects state changes
- Capture demo video + logs

**Speaker notes (6–8 min):**
- State explicitly: today must show a path that’s not purely theoretical.

---

## Slide 16 — Writing the Results section (P5/M4)
**On-slide:**
- Tables, figures, and logs
- State conditions and units
- Pass/fail against KPIs

**Speaker notes (10–12 min):**
- Teach a structure:
  - “Test setup” (short)
  - “Results table” (with units)
  - “KPI comparison” (pass/fail)

---

## Slide 17 — Writing the Discussion section (P5/M4)
**On-slide:**
- Explain why results look like they do
- Link to design decisions
- Acknowledge limitations

**Speaker notes (10–12 min):**
- Discussion is not repeating results.
- It’s interpreting: noise sources, timing trade-offs, constraints.

---

## Slide 18 — In-class Activity 1: run 3 KPI tests (teams)
**On-slide:**
- Choose 3 KPIs
- Run ≥ 5 trials each
- Capture logs and compute Δt/variance

**Speaker notes (activity, 35–40 min):**
- Enforce repeat trials.
- Teams must produce a results table before leaving the activity.

---

## Slide 19 — In-class Activity 2: RCA mini-case (teams)
**On-slide:**
- Pick 1 failing KPI
- Apply 5 Whys
- Implement 1 fix
- Re-test and compare

**Speaker notes (activity, 35–40 min):**
- If nothing is failing, pick a stretch KPI to improve.
- The goal is to generate M5 evidence (before/after).

---

## Slide 20 — In-class Activity 3: write Results + Discussion draft paragraph
**On-slide:**
- 1 results table
- 1 discussion paragraph explaining it
- Link to objective/KPI

**Speaker notes (activity, 20–25 min):**
- Walk around and correct weak writing.
- Require units and thresholds.

---

## Slide 21 — Evidence clinic: Week 5 checklist
**On-slide:**
- 3 KPIs tested with repeat trials
- At least 1 RCA cycle documented (before/after)
- Evidence stored + linked in Jira
- Report draft has Results + Discussion started

**Speaker notes (10–15 min):**
- Quickly inspect: Jira closures must include evidence links.

---

## Slide 22 — Between Week 5 and Week 6
**On-slide:**
- Expand testing to full objective coverage
- Prepare for system V&V run (Milestone 2)
- Add cost/time actuals vs plan
- Improve report structure

**Speaker notes (4–5 min):**
- Week 6 requires end-to-end cycle + fault injection evidence.

---

## Slide 23 — Resources
**On-slide:**
- Arduino timing patterns (`millis()`)
- Basic filtering/debounce references
- Jira evidence linking guidance

**Resource pointers:**
- Arduino reference: `millis()`, serial
- Any reputable embedded debounce/filtering note (centre library)
- Sensor/actuator datasheets

---

## Slide 24 — Close
**On-slide:**
- This week: results + RCA + write-up
- Next: verification/validation + Milestone 2 system V&V run

**Speaker notes (2 min):**
- Encourage: “measure, improve, explain”.
