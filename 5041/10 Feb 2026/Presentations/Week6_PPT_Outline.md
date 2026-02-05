# Week 6 Presentation Outline — Unit 5041
## Verification/validation + planned vs actual + report quality

Session length: **4 hours**.

Main outcome: acceptance testing against objectives, and a structured report draft with evidence traceability.

---

## Slide 1 — Title
**On-slide:**
- Week 6: verify/validate + report quality

---

## Slide 2 — Acceptance testing against objectives
**On-slide:**
- Objective → metric → threshold → pass/fail
- Evidence link for each

---

## Slide 3 — Planned vs actual (variance is not failure)
**On-slide:**
- What changed?
- Why?
- What did you do about it?

---

## Slide 4 — System-level test + edge-case test (required)
**On-slide:**
- One end-to-end scenario
- One fault/edge-case scenario

---

## Slide 5 — Report clinic: coherence and traceability
**On-slide:**
- Figures/tables labelled
- Evidence index is complete
- Every claim has evidence

---

## Slide 6 — In-class Activity: build acceptance checklist
**On-slide:**
- Create table: objective vs result vs judgement vs evidence

---

## Slide 7 — Between-week tasks (Week 6 → Week 7)
**On-slide:**
- Freeze results set
- Draft Evaluation section
- Draft Recommendations list
# Week 6 Presentation Outline — Unit 5041
## LO3: Verification & Validation, acceptance testing, cost/time variance, and Integration Milestone 2 (“System V&V run + fault injection”)

Project pathways: **MATLAB simulation/model-based OR hardware**.

Session length: **4 hours**.

Main outcome: students demonstrate **Milestone 2** (full end-to-end run + fault/edge-case injection), complete an objective-linked **acceptance checklist**, and strengthen report quality with cost/time performance analysis.

---

## Slide 1 — Title
**On-slide:**
- Week 6: Verification & Validation (V&V)
- Acceptance testing + performance vs plan
- Milestone 2: System V&V run + fault injection

**Speaker notes (2 min):**
- Today is “prove it works, safely, and on purpose”.

---

## Slide 2 — LO3 focus today
**On-slide:**
- P4/M3: progress vs plan (with evidence)
- P6: planned activities generate outcomes
- M4: structured detailed report
- Prepare for D3: analysis vs original plan

**Speaker notes (5–6 min):**
- V&V is where you convert tests into credible engineering evidence.

---

## Slide 3 — Verification vs Validation (must be clear in the report)
**On-slide:**
- Verification: built the system right
- Validation: built the right system for the need

**Speaker notes (8–10 min):**
- Verification examples:
  - correct pin mapping, correct state transitions, correct messages
- Validation examples:
  - user can start brew easily, fault response is fast, status is understandable

---

## Slide 4 — Acceptance criteria and traceability
**On-slide:**
- Each objective has acceptance criteria
- Each acceptance criterion has a test
- Each test has evidence

**Speaker notes (8–10 min):**
- Teach traceability chain:
  - Objective → KPI → Test ID → Evidence file → Jira task
- This makes marking easy and supports D3 later.

---

## Slide 5 — Acceptance checklist format (what to submit)
**On-slide:**
- Objective/KPI
- Pass/Fail
- Evidence link
- Notes + limitations

**Speaker notes (6–8 min):**
- Explain limitations are not weaknesses if justified.

---

## Slide 6 — System-level V&V plan (what Milestone 2 must show)
**On-slide:**
- Full cycle: Idle → Ready → Brewing → Complete
- Telemetry and UI match system state
- At least 1 fault injection: safe shutdown + reason

**Speaker notes (6–8 min):**
- This is a system test, not a subsystem demo.

---

## Slide 7 — Fault injection: requirements and safe methods
**On-slide:**
- Choose a fault:
  - Low water
  - Overtemp (simulated)
  - Sensor disconnected
  - Comms loss (optional)
- Must log detection + shutdown + UI indication

**Speaker notes (10–12 min):**
- Clarify evidence:
  - show the moment of fault and the response time
  - show the “outputs OFF” action

---

## Slide 8 — Measuring and reporting fault response time
**On-slide:**
- log event timestamp
- log transition/output-off timestamp
- compute Δt and compare to KPI threshold

**Speaker notes (8–10 min):**
- Provide a template sentence for report:
  - “Fault F01 response time mean = 420 ms (n=5), meeting KPI ≤ 1000 ms.”

---

## Slide 9 — Reliability checks (simple but valuable)
**On-slide:**
- Boot count
- Reset causes (if known)
- “soak test” for 5–10 minutes

**Speaker notes (6–8 min):**
- Explain: even short reliability tests add credibility.

---

## Slide 10 — Progress vs plan: planned vs actual (P4/M3 evidence)
**On-slide:**
- Planned tasks completed?
- Schedule variance (concept)
- Why variances occurred (root cause)

**Speaker notes (8–10 min):**
- Teach how to write it in the report without excuses:
  - “We underestimated integration time because…”
  - “Mitigation applied: stubs + interface/assumptions baseline + extra integration test session.”

---

## Slide 11 — Cost/time performance analysis (simple method)
**On-slide:**
- Planned hours vs actual hours
- Planned spend vs actual spend (if applicable)
- Explain overruns and trade-offs

**Speaker notes (8–10 min):**
- If they don’t track money, track time.
- Require a table with 5–10 main work packages.

---

## Slide 12 — Report improvement checklist (M4 focus)
**On-slide:**
- Clear headings and numbering
- Figures referenced and explained
- Results linked to objectives
- Limitations stated
- Recommendations begin to form

**Speaker notes (10–12 min):**
- Walk them through what weak reports look like:
  - screenshots with no explanation
  - results with no units
  - no link back to objectives

---

## Slide 13 — Preparing for D3 (next week): analyse vs original plan
**On-slide:**
- What changed?
- Why did it change?
- What was the impact?
- What would you improve next time?

**Speaker notes (6–8 min):**
- D3 is not “we learned a lot”. It’s measured evaluation vs plan.

---

## Slide 14 — In-class Activity 1: run the system V&V test (Milestone 2)
**On-slide:**
- Run full brew cycle
- Capture:
  - video
  - serial log
  - UI evidence

**Speaker notes (activity, 35–45 min):**
- Ensure they capture both:
  - system behaviour
  - evidence outputs
- If hardware not ready, stubs allowed but must be explicitly documented.

---

## Slide 15 — In-class Activity 2: fault injection test (n=5)
**On-slide:**
- Choose 1 fault
- Run 5 trials
- Compute response time
- Compare to KPI threshold

**Speaker notes (activity, 30–35 min):**
- Enforce repeat trials.
- Require a results table before leaving.

---

## Slide 16 — In-class Activity 3: acceptance checklist completion
**On-slide:**
- Mark each objective Pass/Fail
- Add evidence links
- Add notes/limitations

**Speaker notes (activity, 20–25 min):**
- This becomes a major part of the report evaluation section.

---

## Slide 17 — In-class Activity 4: planned vs actual table + variance notes
**On-slide:**
- Create a 1-page summary table
- Add 3 key variances with reasons
- Add 3 mitigation actions

**Speaker notes (activity, 20–25 min):**
- Push them to write causes, not excuses.

---

## Slide 18 — Evidence clinic: Week 6 checklist
**On-slide:**
- Milestone 2 demo captured
- Fault injection results table (n=5)
- Acceptance checklist complete
- Planned vs actual table exists
- Jira updated (Status Report + evidence)

**Speaker notes (10–15 min):**
- Quickly inspect each student’s evidence links.

---

## Slide 19 — Between Week 6 and Week 7
**On-slide:**
- Freeze results (don’t keep changing without logging)
- Draft evaluation section (objective vs outcome)
- Start recommendations list
- Prepare slides for presentation outline

**Speaker notes (4–5 min):**
- Week 7 is D3 and presentation/reflection preparation.

---

## Slide 20 — Resources
**On-slide:**
- V&V concepts
- Writing engineering reports
- Jira change control guidance

**Resource pointers:**
- Any engineering project/report writing guidance your centre uses
- Jira docs for issue linking and change logs

---

## Slide 21 — Close
**On-slide:**
- Today: system V&V + fault injection + acceptance checklist
- Next: critical evaluation (D3) + presentation build + reflection

**Speaker notes (2 min):**
- Remind: lock evidence, then evaluate it critically.
