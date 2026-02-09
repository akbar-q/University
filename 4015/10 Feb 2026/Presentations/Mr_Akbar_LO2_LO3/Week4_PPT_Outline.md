# Week 4 (Mr Akbar) Presentation Outline — Unit 4015
## LO2 completion: Node-RED SCADA/HMI + USB serial comms + test/debug + performance analysis (P4, P5, M2, D2)

Session length: **4 hours**.

Targets (this session):
- **P4:** Confirm the design pack is reflected in the implementation.
- **P5:** Use communication connections correctly (USB serial link PLC ↔ Node-RED).
- **M2:** Integrate systematic testing and debugging methods (evidence-driven).
- **D2:** Produce a fully functional PLC design for the given task, with performance analysis.

Evidence produced today:
- Working PLC + Node-RED Dashboard integrated
- Read + write proven over serial
- Test cases executed + debug evidence
- Performance analysis notes (response/timing + HMI update behaviour)

---

## Slide 1 — Title
**On-slide:**
- Unit 4015 Week 4 (Technical)
- LO2 completion: PLC + Node-RED SCADA/HMI + serial + testing

**Speaker notes (2 min):**
- Today is the “integration day”: if your comms doesn’t work, you can’t pass LO2.

---

## Slide 2 — What “fully functional” means for D2
**On-slide:**
- Core task works end-to-end
- Interlocks behave correctly
- HMI shows live status
- HMI controls change PLC behaviour
- Evidence exists (not just demo)

**Speaker notes (6–8 min):**
- Explain that “fully functional” includes HMI and comms.

---

## Slide 3 — P5: comms connection used correctly
**On-slide:**
- Correct serial port selection
- Correct serial settings (centre standard)
- Correct message format
- Diagnostics and troubleshooting evidence

**Speaker notes (8–10 min):**
- Students must show proof of comms, not just “it worked once”.

---

## Slide 4 — Node-RED minimum architecture
**On-slide:**
- Serial in → parse → store state → update dashboard
- Dashboard control → build command → serial out
- Timeout handling → safe default states

**Speaker notes (10 min):**
- Highlight safety: if comms drops, dashboard must not show misleading status.

---

## Slide 5 — Dashboard minimum screens (Level 4)
**On-slide:**
- Status screen:
  - key inputs/outputs
  - current step/state
  - fault/alarm indicator
- Control screen:
  - start/stop/reset
  - mode (if used)

**Speaker notes (8–10 min):**
- Encourage simple, readable UI.

---

## Slide 6 — Serial data design: keep it robust
**On-slide:**
- Fixed message formats
- Checks for missing/invalid data
- Clear command acknowledgements (where possible)

**Speaker notes (8–10 min):**
- Keep it practical: students should implement basic robustness.

---

## Slide 7 — Testing plan for today (M2)
**On-slide:**
- Comms tests:
  - read works
  - write works
  - disconnect behaviour
- Functional tests:
  - start/stop/reset
  - interlocks
  - timer-based behaviour

**Speaker notes (8–10 min):**
- Students run the plan and record evidence.

---

## Slide 8 — Performance analysis: what to write (D2)
**On-slide:**
- Response time observations (button → PLC action)
- Sequence timing accuracy (timer behaviours)
- HMI update rate (observable)
- Limitations and improvements

**Speaker notes (8–10 min):**
- Keep Level 4 appropriate: observed timing + reasoning.

---

## Slide 9 — Activity: integrate serial read (PLC → Node-RED)
**On-slide:**
- Build serial-in flow
- Parse status
- Update dashboard indicators

**Speaker notes (5 min):**
- Students implement; you circulate.

---

## Slide 10 — Activity: integrate serial write (Node-RED → PLC)
**On-slide:**
- Dashboard buttons
- Build command messages
- Confirm PLC state changes

**Speaker notes (5 min):**
- Require read + write proof.

---

## Slide 11 — Activity: run the test plan
**On-slide:**
- Execute tests
- Record expected vs actual
- Capture evidence

**Speaker notes (5 min):**
- Students complete test log entries.

---

## Slide 12 — Evidence clinic checklist (P5/M2/D2)
**On-slide:**
- P5:
  - flow screenshot + debug proof + dashboard proof
- M2:
  - test table + debug examples
- D2:
  - end-to-end demo + performance notes

**Speaker notes (15–20 min):**
- Fix missing proof: screenshot everything important.

---

## Slide 13 — Common failures and fixes
**On-slide:**
- Wrong COM port / busy port
- Wrong baud/framing
- Parsing errors
- No timeout handling

**Speaker notes (10 min):**
- Give troubleshooting steps; insist students record fixes.

---

## Slide 14 — Write-up clinic: turn evidence into a coherent LO2 narrative
**On-slide:**
- Start with the requirement
- Show design choices
- Show comms proof
- Show test results
- Write performance notes

**Speaker notes (10–15 min):**
- Students draft 1–2 pages while evidence is fresh.

---

## Slide 15 — Between-week tasks (Week 4 → Week 5)
**On-slide:**
- Finalise LO2 pack
- Prepare for LO3 robotics:
  - read robot basics
  - collect tools/sensors/end-effector notes

**Speaker notes (3–5 min):**
- Week 5 starts robotics.

---

## Slide 16 — Close-out
**On-slide:**
- LO2 demo complete
- Evidence saved and labelled

**Speaker notes (2–3 min):**
- Remind: LO2 is now “done” if evidence is complete.
