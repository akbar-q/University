# Week 3 Presentation Outline — Unit 5041
## LO2 Project Management Plan (Jira): comprehensive plan + dependencies + evaluation criteria (KPIs)

Toolchain assumption: **Arduino IDE + ESP32 (Arduino-ESP32)**.

Session length: **4 hours**.

Main outcome: by end of this session, teams have a baselined **LO2 project plan** in Jira that is comprehensive (M2) and includes explicit **evaluation criteria/KPIs** (D2).

---

## Slide 1 — Title
**On-slide:**
- Week 3: LO2 planning in Jira
- Build a comprehensive plan + evaluation criteria
- Multi-team coffee machine controller

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

## Slide 4 — Multi-team planning: why WBS + dependencies matter
**On-slide:**
- Teams work in parallel
- Integration is the critical path
- Dependencies must be explicit

**Speaker notes (6–8 min):**
- If you don’t model dependencies, you can’t explain delays.
- Dependencies are also “distinction evidence” because they show you managed complexity.

---

## Slide 5 — Jira: the minimum configuration we will enforce
**On-slide:**
- One Jira project for the cohort
- Epics: per team + integration + reporting
- Issue types: Task, Bug, Risk, Change, Decision, Status Report

**Speaker notes (5–7 min):**
- Explain: “Risk/Change/Decision” issues are how you prove engineering judgement.

---

## Slide 6 — Jira: naming conventions (prevents chaos)
**On-slide:**
- Epics: `TEAM-A Firmware`, `TEAM-B Hardware`, `TEAM-C UI`, `TEAM-D Mechanical`, `Integration & Test`, `Report`
- Tasks: verb + object, e.g., `Implement START command parser`
- Labels: `OBJ-01`, `ICD`, `MILESTONE-1`

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
- Walk through a concrete dependency chain:
  - UI “Start button sends CMD START” blocked by firmware “command grammar defined”
  - firmware task blocked by ICD “message format freeze”

---

## Slide 10 — Integration milestones (must be in the plan)
**On-slide:**
- Milestone 1 (Week 4): “Hello Integration”
- Milestone 2 (Week 6): “System V&V run + fault injection”
- Milestone 3 (Week 8): “Presentation-ready system”

**Speaker notes (5–7 min):**
- Explain why milestones are required: without them, teams drift.

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

## Slide 13 — KPI examples for this coffee machine system (copy/paste ready)
**On-slide:**
- Fault response time (ms)
- UI response time (ms)
- Sensor stability (noise / variance)
- Brew cycle time accuracy (s)
- Uptime / reset count during demo

**Speaker notes (10–12 min):**
- Give measurement methods:
  - Fault response time: timestamp in serial log at event + timestamp at state change
  - UI response time: command send time vs telemetry reflect time
  - Reset count: count of boot logs

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

## Slide 18 — In-class Activity 1 (whole class): freeze ICD v1.0 plan baseline
**On-slide:**
- Freeze: pinout, serial protocol, fault IDs
- Create Change policy
- Record in Jira Decision issue

**Speaker notes (activity, 20–25 min):**
- You facilitate a quick negotiation.
- Rule: freeze the *minimum* needed for parallel work.

---

## Slide 19 — In-class Activity 2 (teams): build full backlog (WBS → tasks)
**On-slide:**
- Create tasks for Weeks 4–6 build/test
- Each task: owner + estimate + acceptance criteria
- Add evidence expectations

**Speaker notes (activity, 35–40 min):**
- You walk around and reject vague tasks.
- Force acceptance criteria wording.

---

## Slide 20 — In-class Activity 3 (teams): add real dependency links
**On-slide:**
- Add at least 10 cross-team `blocks` links
- Set due dates on blocker tasks

**Speaker notes (activity, 20–25 min):**
- Example dependencies to suggest:
  - UI blocked by command grammar
  - Mechanical blocked by PCB dimensions
  - Hardware blocked by selected pump current

---

## Slide 21 — In-class Activity 4 (teams): define KPIs + tests
**On-slide:**
- Produce KPI table (10 KPIs minimum)
- Each KPI → test method + threshold

**Speaker notes (activity, 30–35 min):**
- Enforce coverage:
  - 3 system KPIs
  - 3 firmware/control KPIs
  - 2 UI KPIs
  - 2 hardware/mechanical KPIs

---

## Slide 22 — Evidence clinic: LO2 readiness checklist
**On-slide:**
- Baseline plan captured (screenshots/export)
- Dependencies present and sensible
- Status report template exists
- KPI table exists with thresholds
- Change control exists

**Speaker notes (10–15 min):**
- Quickly review each team’s board.
- If something is missing, fix it before leaving.

---

## Slide 23 — Between Week 3 and Week 4 (LO3 begins)
**On-slide:**
- Start implementation immediately
- Build test harness/stubs for integration
- Capture serial logs as evidence

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
