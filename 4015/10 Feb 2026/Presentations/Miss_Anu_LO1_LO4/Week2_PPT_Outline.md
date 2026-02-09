# Week 2 (Miss Anu) Presentation Outline — Unit 4015
## LO1: I/O devices, comms links, PLC languages, and internal architecture (P2, P3, M1, D1)

Session length: **4 hours** (recommended split: 40m teach/model, 60m guided tasks, 10m break, 60m evidence clinic, 70m write-up).

Targets (this session):
- **P2:** Determine the types of PLC input and output devices available.
- **P3:** Describe the different types of communication links used with PLCs.
- **M1:** Explain the different types of PLC programming languages available (IEC 61131-3).
- **D1:** Analyse the internal architecture of a typical PLC to determine its operational applications.

Evidence produced today:
- I/O classification table + examples, comms links description, IEC 61131-3 language comparison, PLC architecture diagram + analysis.

---

## Slide 1 — Title
**On-slide:**
- Unit 4015 Week 2 (Theory)
- LO1: I/O + comms + languages + internal architecture

**Speaker notes (2–3 min):**
- Today is where you build the strongest LO1 pack: tables + diagrams + analysis.

---

## Slide 2 — Learning goals and assessment targets
**On-slide:**
- P2: I/O devices (digital/analogue)
- P3: comms links (serial/Ethernet + industrial context)
- M1: IEC 61131-3 languages
- D1: internal architecture + operational implications

**Speaker notes (4–5 min):**
- Make D1 explicit: analysis means “what does this architecture imply for behaviour in use?”.

---

## Slide 3 — PLC signals (big picture)
**On-slide:**
- Digital signals (0/1)
- Analogue signals (range)
- Why interface requirements matter

**Speaker notes (6–8 min):**
- Keep practical: noise, sensor types, what can go wrong.

---

## Slide 4 — Inputs: types and examples (P2)
**On-slide:**
- Digital inputs: pushbuttons, limit switches, proximity sensors
- Analogue inputs: temperature, pressure, position sensors

**Speaker notes (8–10 min):**
- Explain typical use: “what does the PLC do with it?”.

---

## Slide 5 — Outputs: types and examples (P2)
**On-slide:**
- Digital outputs: relays, solenoids, indicator lamps
- Analogue outputs: speed setpoints, valve position control

**Speaker notes (8–10 min):**
- Mention voltage/current limits conceptually (don’t deep dive electronics).

---

## Slide 6 — I/O interface requirements
**On-slide:**
- Voltage/current limits
- Isolation/protection (why it matters)
- Signal conditioning (high level)

**Speaker notes (6–8 min):**
- Link to fault modes: wrong wiring, wrong voltage, noise.

---

## Slide 7 — Communications links (P3)
**On-slide:**
- Serial: RS-232/422/485 (conceptual)
- Ethernet (conceptual)
- Industrial network levels: supervisory / cell / field

**Speaker notes (8–10 min):**
- Keep it simple: “what is a link?” and “why do we use it?”

---

## Slide 8 — Centre context: USB serial to SCADA/HMI
**On-slide:**
- Our unit environment:
  - PLC ↔ Node-RED Dashboard via **USB serial**
- What “correct use” looks like:
  - correct settings
  - reliable messages
  - demonstrated read + write

**Speaker notes (6–8 min):**
- Clarify: this also supports LO2 later (Akbar will build it).

---

## Slide 9 — IEC 61131-3 languages (M1)
**On-slide:**
- LD: Ladder Diagram
- FBD: Function Block Diagram
- ST: Structured Text
- SFC: Sequential Function Chart

**Speaker notes (8–10 min):**
- Explain when each is strong (maintenance vs complex math vs sequencing).

---

## Slide 10 — Language choice: “what would you pick and why?”
**On-slide:**
- Scenario: simple interlock logic
- Scenario: sequence with steps
- Scenario: data handling

**Speaker notes (8–10 min):**
- Students should write 1–2 lines for each scenario: language + justification.

---

## Slide 11 — Internal architecture: what’s inside a PLC (D1)
**On-slide:**
- CPU
- Memory (program/data)
- I/O image table
- Comms interface
- Scan cycle

**Speaker notes (10 min):**
- Use a simple scan cycle story: read inputs → execute logic → update outputs.

---

## Slide 12 — Scan cycle implications (D1 analysis)
**On-slide:**
- Response time depends on scan + I/O update
- Fast inputs can be missed without design care
- Timing features (timers) depend on scan behaviour

**Speaker notes (8–10 min):**
- This is “operational applications”: why PLCs are good for sequences and interlocks.

---

## Slide 13 — Activity: build your LO1 tables and diagrams
**On-slide:**
- Create:
  - I/O device table (inputs + outputs)
  - comms links description
  - language comparison table
  - architecture diagram + scan cycle explanation

**Speaker notes (5 min):**
- Show a suggested structure for each (headings).

---

## Slide 14 — Guided task prompts (what to include)
**On-slide:**
- I/O table: include 6+ devices total with examples
- Comms: include serial + Ethernet, plus our centre USB serial link
- Languages: include pros/cons + “best for…”
- Architecture: diagram + 1 page analysis

**Speaker notes (10 min):**
- Encourage clarity: short sentences, no waffle.

---

## Slide 15 — Evidence clinic checklist (P2/P3/M1/D1)
**On-slide:**
- P2: Do you cover both digital and analogue I/O?
- P3: Do you describe at least 3 comms links and where they’re used?
- M1: Do you explain languages with examples?
- D1: Do you analyse implications (scan time, memory, I/O update) for operation?

**Speaker notes (15–20 min):**
- Circulate: fix missing analysis and weak justifications.

---

## Slide 16 — Common errors and upgrades
**On-slide:**
- Listing without explaining (upgrade: add “so what?”)
- No diagram (upgrade: draw architecture)
- No operational link (upgrade: tie to response time, sequencing)

**Speaker notes (6–8 min):**
- Distinction writing: clear chain of reasoning.

---

## Slide 17 — Between-week tasks (Week 2 → Week 3)
**On-slide:**
- Finalise LO1 pack draft
- Bring LO1 to Week 3 for sign-off
- Read the lab safety policy (LO4 seed)

**Speaker notes (3–5 min):**
- Set the Week 3 goal: LO1 pack ready.

---

## Slide 18 — Close-out
**On-slide:**
- Save and label tables/diagrams
- Add references
- 3-line self-check: “Have I answered P2/P3/M1/D1 explicitly?”

**Speaker notes (2–3 min):**
- Remind: markers look for explicit alignment.
