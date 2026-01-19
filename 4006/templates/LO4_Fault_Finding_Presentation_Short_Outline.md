<!--
LO4 Fault Finding & Fault Analysis (SHORT OUTLINE TEMPLATE)

Purpose:
- A short slide-by-slide skeleton students can fill in.
- Works with tools/md_to_pptx.py (slides split by ---).

How to use:
- Replace [PLACEHOLDER] text with your own content.
- Keep headings short (they become slide titles).
- Add your own images/tables later directly in PowerPoint.

Academic integrity:
- Do not copy/paste from manuals/websites/AI.
- Use sources to understand, then write in your own words.
- Cite sources you used (datasheets, manuals, standards, papers).
-->

# LO4 Fault Finding & Fault Analysis
## [Module Code: 4006] • [Assessment Title]
### [Student Name] • [Student ID] • [Date]

**System investigated:** [System/rig name]

---

# What This Deck Is

- This is a *template* for your evidence and analysis
- Leave no slide blank: write something (even if brief)
- Keep claims measurable: voltages, currents, timings, logs, screenshots

---

# Learning Outcome + Assessment Mapping

- **LO4 focus:** locate faults and analyse causes on a mechatronic system
- Evidence targets (edit to match your brief):
  - **P5:** safe use of fault-finding test equipment
  - **P6:** locate + rectify faults using analysis
  - **M5:** apply + document safe/correct techniques
  - **D4:** investigate causes + propose reliability improvements

---

# System Overview (What It Is)

- System purpose: [What job does it do?]
- Main subsystems: [Power] / [Control] / [Sensors] / [Actuators] / [Mechanical]
- Users/stakeholders: [Operator/technician/student]
- Constraints: [Tools available, time, access limits]

[PLACEHOLDER: 1 photo of your setup OR a simple block diagram]

---

# Normal Operation (What “Good” Looks Like)

- Start-up sequence: [Step-by-step, 3–6 steps]
- Normal behaviour: [Key states/modes]
- Shutdown behaviour: [How it stops safely]

[HINT]
- Include at least one *measurable* expected value (e.g., "5 V rail within 4.85–5.15 V" / "servo reaches 90° ±5°")

---

# Acceptance Criteria (Definition of “Fixed”)

- Performance criteria: [speed/position/temperature/pressure/etc.]
- Electrical criteria: [rails, current draw, noise, brownouts]
- Software/logic criteria: [state transitions, alarms, error handling]
- Safety criteria: [E-stop, interlocks, limits]

[PLACEHOLDER: list 4–8 pass/fail checks you will use later]

---

# Safety & Risk Controls (P5/M5)

- Key hazards: [moving parts / pinch points / stored energy / hot surfaces / electrical]
- Controls used: [isolation, PPE, guarding, safe workspace, one-hand rule, etc.]
- What you did *before measuring*: [inspection, power-down, discharge, permissions]

[PLACEHOLDER: short risk table in PowerPoint later]

---

# Documentation & Sources Used

- Schematics/wiring diagram used: [name/version/link]
- Datasheets/manuals used: [sensor, actuator, controller]
- Code/logic reference: [baseline program version]

[HINT]
- For each source: write *what you extracted from it* (pinout, limits, test method)

---

# Fault 1: Symptom Description

- Fault label: [Fault 1 short name]
- Observable symptoms: [what you saw/heard/measured]
- When it happens: [conditions, triggers]
- Evidence captured: [photo/log/screenshot/measurement table]

[PLACEHOLDER: 1 screenshot/photo + 2–5 bullet observations]

---

# Fault 1: Fault-Finding Plan (Method)

- Hypothesis list (start broad, then narrow):
  - H1: [power issue]
  - H2: [sensor issue]
  - H3: [actuator/mechanics issue]
  - H4: [software/logic issue]
- Planned test order (justify briefly):
  1. [quick non-invasive checks]
  2. [power checks]
  3. [I/O checks]
  4. [component swap / substitution if allowed]

[HINT]
- Explain why your test order minimises risk and wasted time

---

# Fault 1: Test Equipment (P5/M5)

For each item you used, fill:
- Instrument: [multimeter / scope / power supply / laptop logs / pressure gauge]
- Why used: [what question it answers]
- Settings/range: [VDC range, continuity mode, sampling, etc.]
- Safety notes: [probe placement, isolation, current limits]
- Limitations: [accuracy, loading, bandwidth, user error risks]

---

# Fault 1: Results (Evidence)

- Test results (in order):
  - Test A → result: [value] → interpretation: [what it implies]
  - Test B → result: [value] → interpretation: [what it rules in/out]
- Decision point: “Based on results, the most likely cause is … because …”

[PLACEHOLDER]
- Add a simple results table in PowerPoint later

---

# Fault 1: Root Cause + Rectification (P6)

- Confirmed fault location: [component/connection/code section]
- Root cause mechanism: [why it failed, not just what failed]
- Fix applied: [repair/replace/reseat/reprogram]
- Verification (retest vs acceptance criteria): [pass/fail + evidence]
- Return-to-service checks: [final safety checks]

---

# Fault 2 (Optional)

If you investigated a second fault, duplicate the Fault 1 structure:
- Symptom → Plan → Equipment → Results → Cause → Fix → Verification

[HINT]
- A “fault” can be electrical, mechanical, software, or integration-related

---

# Reliability Improvements (D4)

- What made the fault likely? [design choice, environment, tolerance, user steps]
- Proposed amendments (choose 2–5):
  - Hardware: [fuse, strain relief, connectors, filtering, shielding]
  - Software: [timeouts, debouncing, sanity checks, logging]
  - Process: [checklists, calibration schedule, inspection points]
- Trade-offs: [cost, complexity, performance impact]

---

# Conclusion

- What fault(s) were found and fixed? [1–3 bullets]
- What evidence proves the fix? [tests tied to acceptance criteria]
- What would you do next with more time? [further tests, redesign, monitoring]

---

# References

- [1] [Author/Org], [Title], [Date], [URL or document ID]
- [2] ...

[HINT]
- Reference every datasheet/manual/standard you relied on

---

# Appendix (Optional)

- Extra photos/screenshots
- Raw measurements/log excerpts
- Full risk assessment
- Wiring diagram / annotated schematic
