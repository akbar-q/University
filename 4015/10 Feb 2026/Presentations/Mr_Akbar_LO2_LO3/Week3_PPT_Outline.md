# Week 3 (Mr Akbar) Presentation Outline — Unit 4015
## LO2: PLC program implementation v0.5 + early testing discipline (P4 build)

Session length: **4 hours**.

Targets (this session):
- Implement the first working version of the PLC logic matching the design pack.
- Establish **M2 habits early**: systematic testing and debug logging (even before Week 4).

Evidence produced today:
- OpenPLC program v0.5 evidence (screenshots/exports)
- Test case list draft + first executed tests
- Debug log entries (at least one real fault + fix)

---

## Slide 1 — Title
**On-slide:**
- Unit 4015 Week 3 (Technical)
- LO2 build: OpenPLC program v0.5 + testing discipline

**Speaker notes (2 min):**
- Today is build + prove. If it runs once, you still need test evidence.

---

## Slide 2 — What you must have by end of today
**On-slide:**
- Program implements core sequence
- Start/stop/reset behaviour implemented
- Interlocks implemented
- First tests executed and recorded

**Speaker notes (5 min):**
- This prepares Week 4 integration to Node-RED.

---

## Slide 3 — Coding quality bar (OpenPLC)
**On-slide:**
- Clear tag names
- Comments only where needed
- No duplicated logic blocks without reason
- Safe defaults on startup

**Speaker notes (8–10 min):**
- Focus on readability and maintainability.

---

## Slide 4 — Sequences and interlocks: common patterns
**On-slide:**
- Step bits / state variable
- Transition conditions
- Interlock gating

**Speaker notes (10 min):**
- Explain how to avoid “stuck” states.

---

## Slide 5 — Timers/counters/latches: avoid common mistakes
**On-slide:**
- Timer enable conditions
- Reset conditions
- Counter rollover and reset
- Latch set/reset discipline

**Speaker notes (10 min):**
- Model one correct pattern in LD or ST.

---

## Slide 6 — Testing method (M2 habit)
**On-slide:**
- Test case
- Expected behaviour
- Actual behaviour
- Evidence (screenshot/log)
- Fix (if needed)

**Speaker notes (8–10 min):**
- This is the minimum structure of your test/debug log.

---

## Slide 7 — Debugging method (systematic)
**On-slide:**
- Observe symptom
- Identify likely causes
- Check inputs/outputs online
- Isolate the fault
- Apply fix
- Re-test

**Speaker notes (8–10 min):**
- Emphasise re-test after every fix.

---

## Slide 8 — Activity: implement program v0.5
**On-slide:**
- Implement:
  - start/stop
  - core sequence steps
  - interlocks
  - reset

**Speaker notes (5 min):**
- Students code; you circulate.

---

## Slide 9 — Activity: execute first tests
**On-slide:**
- Run 5 tests:
  - start works
  - stop works
  - reset works
  - interlock blocks start
  - one timer-based behaviour works

**Speaker notes (5–6 min):**
- Students must record expected vs actual.

---

## Slide 10 — Evidence capture rules
**On-slide:**
- Every test has a screenshot/log
- Every fix has “before/after” note
- Keep naming consistent

**Speaker notes (6–8 min):**
- No screenshots = weak evidence.

---

## Slide 11 — Evidence clinic checklist (Week 3)
**On-slide:**
- Program evidence exists
- Test cases exist and some executed
- At least one debug example recorded

**Speaker notes (15–20 min):**
- Fix missing items.

---

## Slide 12 — Prepare for Week 4 integration
**On-slide:**
- Decide HMI read/write variables
- Ensure core program is stable
- Know where to add comms variables

**Speaker notes (6–8 min):**
- Week 4 is comms + dashboard + D2 performance notes.

---

## Slide 13 — Between-week tasks (Week 3 → Week 4)
**On-slide:**
- Finalise program v1.0
- Expand test cases
- Draft your performance notes outline

**Speaker notes (3–5 min):**
- Bring a stable program next week.

---

## Slide 14 — Close-out
**On-slide:**
- Save v0.5
- Save tests + debug log

**Speaker notes (2–3 min):**
- Evidence is a deliverable.
