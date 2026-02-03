# S4 — LO4 Team Presentation (PPT Template Outline)

\[Replace all bracketed text like \[this\].\]

Goal: a 10–15 minute technical presentation + demo + feedback/Q&A record.

Recommended format:
- 10–14 slides
- 1–2 minutes demo video if live demo is risky
- Include at least one **integration test** and one **fault response**

---

## Slide 1 — Title
- Project: ESP32 Coffee Machine Controller (multi-team)
- Team: \[Team Name\]
- Members: \[Names + IDs\]
- Date: \[DD Mon YYYY\]

Speaker notes:
- 1–2 sentences on what you built and why.

---

## Slide 2 — Problem and goals (LO1 recap)
- Problem statement (1–2 bullets)
- Aim(s) (1–2 bullets)
- Success definition (top 3 KPIs/objectives)

Speaker notes:
- Use numbers (targets), not vague claims.

---

## Slide 3 — System overview (block diagram)
\[Insert system block diagram showing boundaries and subsystems.\]

- Inputs (sensors): \[list\]
- Outputs (actuators/indicators): \[list\]
- UI/Comms: \[list\]
- Safety constraints: \[ELV only, heater simulated, etc.\]

---

## Slide 4 — Architecture and interfaces (ICD)
- Team split and interfaces
- Serial protocol / message types (if used)
- Fault codes (examples)

\[Insert: one screenshot snippet of ICD v1.0 (pinout or protocol).\]

---

## Slide 5 — Hardware implementation (evidence)
- Driver strategy (MOSFET/relay, flyback, fusing)
- Power rails (load vs logic)
- Wiring/physical build notes

\[Insert labelled photo of the build + wiring/schematic figure.\]

---

## Slide 6 — Software implementation (evidence)
- State machine summary (diagram)
- Non-blocking timing approach (how you avoided delay-based bugs)
- Logging approach (timestamps/events)

\[Insert state machine diagram.\]

---

## Slide 7 — Project management summary (LO2 evidence)
- Baseline plan vs actual (1 table or graphic)
- Top dependencies and how you controlled them
- 1 key decision and why (trade-off)

\[Insert: Jira dashboard/timeline screenshot.\]

---

## Slide 8 — Test plan highlights
- Test strategy (unit/subsystem/integration/acceptance)
- What you tested that mattered (3–5 tests)

\[Insert test case table screenshot or a clean summary table.\]

---

## Slide 9 — Results (numbers)
- KPI results with units and pass/fail
- Repeat trials (n≥5 where relevant)

\[Insert results table/graph.\]

---

## Slide 10 — Fault response demo (required)
Show one fault scenario:
- Fault injected: \[what\]
- Expected behaviour: \[what\]
- Observed behaviour: \[what\]
- Evidence: \[video/log timestamps\]

---

## Slide 11 — Practical issue resolution (M5)
Give 1–2 examples:
- Symptom → root cause → fix → evidence → KPI impact

\[Insert before/after evidence: logs/photo/graph.\]

---

## Slide 12 — Critical evaluation and improvements (D3-style thinking)
- What went well (2–3 bullets)
- What did not go to plan and why (2–3 bullets)
- Improvements (minimum 3) with expected impact

---

## Slide 13 — Conclusion
- What you achieved
- KPI/objective summary
- Next steps

---

## Slide 14 — Feedback/Q&A slide
- “Questions?”
- \[Insert QR/link to feedback form if used\]

---

## Required add-on: Feedback record
After the presentation, capture:
- Who attended
- What they asked
- What feedback they gave
- What actions you will take next

\[This can be 1–2 pages in a separate feedback record document per DELIVERABLES.\]
