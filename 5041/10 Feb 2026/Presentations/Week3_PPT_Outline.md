# Week 3 Presentation Outline — Unit 5041
## LO2 Project Management Plan in Jira + evaluation criteria (KPIs)

Session length: **4 hours**.

Main outcome: each student has a **baselined Jira plan** with milestones, dependencies, risks, change control, and **explicit evaluation criteria/KPIs**.

---

## Slide 1 — Title
**On-slide:**
- Week 3: LO2 planning in Jira + KPIs

**Speaker notes (2 min):**
- LO2 is not “having a board”; it’s demonstrating comprehensive planning discipline.

---

## Slide 2 — LO2 criteria in plain language
**On-slide:**
- P3: plan using PM software/tools/techniques
- M2: comprehensive use of Jira features
- D2: measurable evaluation criteria (KPIs) built into the plan

**Speaker notes (5–6 min):**
- Your plan must show how you’ll measure success, not just what you’ll build.

---

## Slide 3 — Converting LO1 objectives into backlog items
**On-slide:**
- Objective → acceptance criteria → tasks/tests
- Evidence must be planned (not accidental)

**Speaker notes (6–8 min):**
- Example: objective with threshold becomes a test task with a results table.

---

## Slide 4 — Work Breakdown Structure (WBS) → Jira Epics
**On-slide:**
- Epics: Build/Model, Test/Validate, Report, Presentation
- Tasks: implement, test, analyse, write-up

**Speaker notes (6–8 min):**
- Include report-writing tasks early (don’t leave to Week 7).

---

## Slide 5 — Dependencies (individual)
**On-slide:**
- `blocks / is blocked by` for real constraints
- Examples: parts lead time, calibration access, learning prerequisites, data availability

**Speaker notes (6–8 min):**
- Dependencies must change your schedule decisions.

---

## Slide 6 — Milestones + baseline + change control
**On-slide:**
- Baseline your plan (date-stamped export/screenshot)
- If scope/time changes: create a Change issue + justification

**Speaker notes (6–8 min):**
- Distinction evidence often comes from handling change professionally.

---

## Slide 7 — Evaluation criteria (D2): what “good” looks like
**On-slide:**
- 6–10 KPIs with units + thresholds
- Mix of performance, quality, reliability/robustness

**Speaker notes (8–10 min):**
- MATLAB KPI examples: rise time, overshoot, steady-state error, RMSE, computation time.
- Hardware KPI examples: response time, accuracy, noise, power consumption, fault detection time.

---

## Slide 8 — Decision method (D2): choose one and use it
**On-slide:**
- Decision matrix / AHP / HES matrix
- Use for one major trade-off

**Speaker notes (6–8 min):**
- Show the method, the weights, and the conclusion.

---

## Slide 9 — Weekly status report discipline
**On-slide:**
- Plan vs actual
- Blockers/risks
- Changes/decisions
- Evidence links

**Speaker notes (5–6 min):**
- This becomes LO3 progress evidence automatically.

---

## Slide 10 — In-class Activity: build LO2 pack
**On-slide:**
- Build epics + tasks
- Add acceptance criteria to key tasks
- Add 6+ dependency links
- Define KPIs table
- Baseline export

**Speaker notes (45–60 min):**
- Circulate and enforce measurability and completeness.

---

## Slide 11 — Evidence clinic checklist (Week 3)
**On-slide:**
- Backlog covers full lifecycle
- KPIs are measurable and realistic
- Risks have mitigation tasks
- Baseline captured
- Change control process defined

**Speaker notes (15–20 min):**
- Fix weak KPIs now; they drive LO3 evaluation later.

---

## Slide 12 — Between-week tasks (Week 3 → Week 4)
**On-slide:**
- Start build/model work immediately
- Draft test/simulation plan v1
- Start report headings and methods section

**Speaker notes (5 min):**
- Week 4 is LO3 start: you must generate outcomes, not just setup.
# Week 3 Presentation Outline — Unit 5041
## LO2 Project Management Plan (Jira): comprehensive plan + dependencies + evaluation criteria (KPIs)

Toolchain assumption: **Arduino IDE + ESP32 (Arduino-ESP32)**.

Session length: **4 hours**.

Main outcome: by end of this session, students have a baselined **LO2 project plan** in Jira that is comprehensive (M2) and includes explicit **evaluation criteria/KPIs** (D2).

---

## Slide 1 — Title
**On-slide:**
- Week 3: LO2 planning in Jira
- Build a comprehensive plan + evaluation criteria
- Individual project planning (MATLAB or hardware)

**Speaker notes (2 min):**
- Today is about turning LO1 into an executable plan.
- You cannot “wing it” and still meet M2/D2.

---

## Slide 2 — What LO2 requires (translate the criteria)
**On-slide:**
- P3: Create a project plan using PM software/tools/techniques
- M2: Make full use of PM software to build a comprehensive plan
- D2: Comprehensive plan **with evaluation criteria**

**Speaker notes (6–8 min):**
- P3 is “a plan exists”.
- M2 is “Jira is actually used properly” (ownership, dependencies, updates, reports).
- D2 is “you defined how success will be measured” (KPIs) and you plan to collect that data.

---

## Slide 3 — The LO2 deliverable (what you will submit)
**On-slide:**
- Planning report (PDF/DOCX)
- Jira exports/screenshots
- Evaluation criteria (KPIs) table

**Speaker notes (3–4 min):**
- Point them to DELIVERABLES.md S2.
- Clarify: screenshots are evidence, but the report explains the logic.

---

## Slide 4 — Planning discipline: why WBS + dependencies matter
**On-slide:**
- Workstreams run in parallel (design/build/test/report)
- Integration/testing is often the critical path
- Dependencies must be explicit

**Speaker notes (6–8 min):**
- If you don’t model dependencies, you can’t explain delays.
- Dependencies are also “distinction evidence” because they show you managed complexity.

---

## Slide 5 — Jira: the minimum configuration we will enforce
**On-slide:**
- One Jira project per student
- Epics: workstreams (Design/Model, Implement/Build, Test/Validate, Analysis/Report)
- Issue types: Task, Bug, Risk, Change, Decision, Status Report

**Speaker notes (5–7 min):**
- Explain: “Risk/Change/Decision” issues are how you prove engineering judgement.

---

## Slide 6 — Jira: naming conventions (prevents chaos)
**On-slide:**
- Epics: `Design/Model`, `Implement/Build`, `Test/Validate`, `Analysis/Report`
- Tasks: verb + object, e.g., `Implement START command parser`
- Labels: `OBJ-01`, `INTERFACE`, `MILESTONE-1`

**Speaker notes (6–8 min):**
- Show examples:
  - Bad: “code”
  - Good: “Implement telemetry output TEL STATE/TEMP/WLEVEL at 5 Hz”

---

## Slide 7 — Work Breakdown Structure (WBS): converting objectives into work
**On-slide:**
- Objective → Deliverable → Work packages → Jira tasks
- Each task must have acceptance criteria

**Speaker notes (8–10 min):**
- Explain acceptance criteria in Jira terms:
  - “Done when…” must be testable.
- Example mapping:
  - Objective: “Fault within 1s on low water”
  - Work: hardware sensor wiring, firmware debounce, test script, UI display

---

## Slide 8 — What “Definition of Done” means in this unit
**On-slide:**
- Not “compiled”
- Done = test evidence attached
- Done = acceptance criteria met

**Speaker notes (6–8 min):**
- Teach: a task without evidence is not done.
- Evidence can be a photo, a log excerpt, a short video, or a test table.

---

## Slide 9 — Dependencies in Jira: blocks/is-blocked-by
**On-slide:**
- Use `blocks / is blocked by`
- Every blocked task must name the dependency
- Every dependency must have an owner + due date

**Speaker notes (8–10 min):**
-- Walk through a concrete dependency chain:
  - “Calibration test” blocked by “sensor arrives”
  - “System test run” blocked by “test harness implemented”

---

## Slide 10 — Integration milestones (must be in the plan)
**On-slide:**
- Milestone 1 (Week 4): “Hello Integration”
- Milestone 2 (Week 6): “System V&V run + fault injection”
- Milestone 3 (Week 8): “Presentation-ready system”

**Speaker notes (5–7 min):**
- Explain why milestones are required: without them, projects drift.

---

## Slide 11 — Change control: baseline vs changes
**On-slide:**
- Baseline your plan today
- After baseline: changes require a Jira Change issue
- Changes need impact analysis: scope/time/risk

**Speaker notes (8–10 min):**
- Give an example:
  - “Switch from physical UI to web UI” must be a Change with reasons + impact.

---

## Slide 12 — Evaluation criteria (D2): what counts as a KPI
**On-slide:**
- KPI = measurable indicator linked to an objective
- Must include method + threshold + evidence source

**Speaker notes (10–12 min):**
- Make it explicit: without measurable thresholds, you cannot critically evaluate later (D3).

---

## Slide 13 — KPI examples (copy/paste ready)
**On-slide:**
- Response time / rise time / settling time
- Accuracy / error metric (e.g., RMSE)
- Robustness (edge-case/fault behaviour meets pass criteria)
- Stability/noise metric (if sensors/signals are used)
- Reliability metric (e.g., reset count during a test run)

**Speaker notes (10–12 min):**
- Give measurement methods:
  - Timing: timestamps in logs or plot cursors
  - Accuracy: compute error metric across trials/cases
  - Robustness: define edge-case tests and pass/fail rules
  - Reliability: count resets/failures over a fixed-duration run

---

## Slide 14 — KPI table structure (what students must produce)
**On-slide:**
- KPI name
- Linked objective
- Measurement method
- Threshold/pass condition
- Test frequency (how many trials)
- Evidence (where captured)

**Speaker notes (6–8 min):**
- Insist that “measurement method” is concrete.

---

## Slide 15 — Decision matrix (D2-supporting technique)
**On-slide:**
- Criteria weights
- Options scored
- Justify one major decision

**Speaker notes (8–10 min):**
- Give a realistic decision:
  - “Physical buttons+OLED vs Web UI”
  - “Float switch vs ultrasonic level”
- Explain this becomes excellent report evidence.

---

## Slide 16 — Risk mapping (planning technique that strengthens LO2)
**On-slide:**
- Top risks: integration, wiring reliability, power stability
- Mitigation tasks must exist in Jira

**Speaker notes (6–8 min):**
- Teach: a risk without a mitigation task is just a complaint.

---

## Slide 17 — Jira dashboards/reports (M2 evidence)
**On-slide:**
- Board screenshot
- Issue list by due date
- Status summary / cumulative flow (if available)

**Speaker notes (6–8 min):**
- The goal is to show “full use” of the tool.
- If your Jira instance has limited reporting, basic evidence is still acceptable.

---

## Slide 18 — In-class Activity 1 (whole class): baseline the plan
**On-slide:**
- Baseline: plan snapshot + measurable KPIs
- Freeze: key interfaces/assumptions (if applicable)
- Create Change policy
- Record in Jira Decision issue

**Speaker notes (activity, 20–25 min):**
- You facilitate a quick baseline exercise.
- Rule: baseline the minimum needed to start building/testing with confidence.

---

## Slide 19 — In-class Activity 2: build full backlog (WBS → tasks)
**On-slide:**
- Create tasks for Weeks 4–6 build/test
- Each task: owner + estimate + acceptance criteria
- Add evidence expectations

**Speaker notes (activity, 35–40 min):**
- You walk around and reject vague tasks.
- Force acceptance criteria wording.

---

## Slide 20 — In-class Activity 3: add real dependency links
**On-slide:**
- Add at least 10 meaningful `blocks` links
- Set due dates on blocker tasks

**Speaker notes (activity, 20–25 min):**
- Example dependencies to suggest:
  - “Calibration test” blocked by “sensor arrives”
  - “System test run” blocked by “test harness implemented”
  - “Results section write-up” blocked by “results set frozen”

---

## Slide 21 — In-class Activity 4: define KPIs + tests
**On-slide:**
- Produce KPI table (10 KPIs minimum)
- Each KPI → test method + threshold

**Speaker notes (activity, 30–35 min):**
- Enforce coverage:
  - system-level KPIs (end-to-end behaviour)
  - module-level KPIs (a few key subsystems/functions)
  - at least one robustness/edge-case KPI

---

## Slide 22 — Evidence clinic: LO2 readiness checklist
**On-slide:**
- Baseline plan captured (screenshots/export)
- Dependencies present and sensible
- Status report template exists
- KPI table exists with thresholds
- Change control exists

**Speaker notes (10–15 min):**
- Quickly review each student’s board.
- If something is missing, fix it before leaving.

---

## Slide 23 — Between Week 3 and Week 4 (LO3 begins)
**On-slide:**
- Start implementation immediately
- Build test harness/stubs for integration
- Capture logs/plots/photos/videos as evidence

**Speaker notes (5 min):**
- Emphasize: Week 4 checks implementation progress.

---

## Slide 24 — Resources
**On-slide:**
- Jira docs (dependencies, dashboards)
- PM techniques (WBS, critical path concept)
- Arduino IDE docs (Serial Monitor evidence)

**Speaker notes (3–4 min):**
- Keep it focused: students need only the features used.

**Resource pointers:**
- Jira Software documentation: issue linking, boards, reports
- Atlassian docs: “Issue links” and “Dependency management”
- Any centre-provided project planning templates

---

## Slide 25 — Close
**On-slide:**
- LO2 plan baselined today
- Next week: LO3 build starts + test plan v1 + integration milestone 1

**Speaker notes (2 min):**
- Remind them: the plan is now the reference; deviating requires justification.
