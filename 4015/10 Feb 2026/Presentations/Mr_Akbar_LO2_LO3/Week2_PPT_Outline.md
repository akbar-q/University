# Week 2 (Mr Akbar) Presentation Outline — Unit 4015
## LO2: Design pack v1 — requirements, signals, I/O allocation, sequencing, and comms plan (P4 start)

Session length: **4 hours**.

Targets (this session):
- **LO2 P4:** Design key elements that have to be considered in the preparation of a PLC program.
- Establish the design baseline that will be implemented in OpenPLC (Week 3–4).

Evidence produced today:
- LO2 design pack v1:
  - functional requirements
  - I/O allocation list
  - sequence definition (steps + interlocks)
  - timers/counters/latches plan
  - comms plan: what the HMI must read/write

---

## Slide 1 — Title
**On-slide:**
- Unit 4015 Week 2 (Technical)
- LO2 P4: design before code

**Speaker notes (2 min):**
- Good PLC projects are designed first. Coding without a design pack creates debugging chaos.

---

## Slide 2 — What you’re building (common brief)
**On-slide:**
- PLC controlled sequence
- Node-RED Dashboard HMI
- Serial read/write

**Speaker notes (5 min):**
- Re-state the deliverable: a functional automated task with SCADA/HMI.

---

## Slide 3 — P4: what markers are looking for
**On-slide:**
- Requirements → I/O list → sequence → logic elements
- Clarity and completeness
- Consistency with eventual code and HMI

**Speaker notes (6–8 min):**
- Show the “chain”: each design decision must be implementable.

---

## Slide 4 — Requirements: write them so you can test them
**On-slide:**
- Use “shall” statements
- Include acceptance behaviour
- Include abnormal cases (faults/interlocks)

**Speaker notes (8–10 min):**
- Example requirement:
  - “System shall prevent cycle start when guard input is open.”

---

## Slide 5 — I/O allocation list (the backbone)
**On-slide:**
- Input tags
- Output tags
- Type (DI/DO/AI/AO)
- Notes (device meaning)

**Speaker notes (8–10 min):**
- Naming discipline matters for mapping to Node-RED.

---

## Slide 6 — Sequence definition (how the machine behaves)
**On-slide:**
- States/steps
- Transitions
- Interlocks
- Reset behaviour

**Speaker notes (10 min):**
- Encourage a state-machine mindset even if coded in ladder.

---

## Slide 7 — Logic elements plan
**On-slide:**
- Timers: delays, timeouts
- Counters: cycles/parts
- Latches: hold states

**Speaker notes (8–10 min):**
- Tie each logic element to a requirement.

---

## Slide 8 — Communications plan (prepare for P5)
**On-slide:**
- HMI must **read**:
  - status indicators
  - alarms/fault states
- HMI must **write**:
  - start/stop/reset
  - mode select (if used)

**Speaker notes (8–10 min):**
- Make them specify exactly which variables will be read/written.

---

## Slide 9 — Message format planning (serial)
**On-slide:**
- Decide:
  - status message structure
  - command message structure
  - error/timeout behaviour

**Speaker notes (8–10 min):**
- Keep it simple and robust.
- Until the centre standard is fixed, students can draft a simple ASCII message idea.

---

## Slide 10 — Activity: build your design pack v1
**On-slide:**
- Write:
  - 6–10 requirements
  - I/O list
  - sequence steps
  - logic elements list
  - comms read/write list

**Speaker notes (5 min):**
- Students work; you circulate.

---

## Slide 11 — Guided prompts (to avoid weak packs)
**On-slide:**
- Start/stop behaviour is explicit
- Reset behaviour is explicit
- Interlocks prevent unsafe/invalid actions
- HMI indicators match what operators need

**Speaker notes (10–15 min):**
- Good PLC logic is designed for operators and maintainers.

---

## Slide 12 — Evidence clinic checklist (P4 draft)
**On-slide:**
- Requirements are measurable
- I/O tags are consistent
- Sequence is unambiguous
- Timers/counters/latches are justified
- HMI read/write list is complete

**Speaker notes (15–20 min):**
- Fix common issues: missing reset, unclear interlocks, random tag names.

---

## Slide 13 — Baseline the design (freeze v1)
**On-slide:**
- Save as v1
- Any changes later must be justified

**Speaker notes (6–8 min):**
- This helps later D2 performance analysis: you can explain changes.

---

## Slide 14 — Between-week tasks (Week 2 → Week 3)
**On-slide:**
- Prepare your OpenPLC project skeleton
- Start implementing core sequence
- Start test case list (expected vs actual)

**Speaker notes (3–5 min):**
- Week 3 is coding + early tests.

---

## Slide 15 — Close-out
**On-slide:**
- Save design pack v1
- Bring it next week

**Speaker notes (2–3 min):**
- Remind: your code must match your design pack.
