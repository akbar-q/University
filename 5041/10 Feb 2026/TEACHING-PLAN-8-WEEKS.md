# Unit 5041: Engineering Project (Level 5, 15 credits)
## 8-Week Teaching Plan (1 teaching day per week, 4 hours per week)

This version is designed for **one 4-hour session per week** over 8 weeks.

Key idea: the 4-hour weekly session is for **teaching, modelling, guided practice, and evidence checks**. Most **build/simulate/write** time happens **between weeks** and is tracked in Jira.

---

## Delivery model for this cohort (embedded “coffee machine” system, multi-team)
This plan assumes the cohort builds **one integrated system** (a coffee machine-style appliance controller) split across **2–4 teams** working in parallel.

- **Shared product:** one “Coffee Machine Controller” demonstrator built around **ESP32**, with optional 3D printed enclosure and safe low-voltage actuators/sensors.
- **Parallel teams:** each team owns a subsystem and publishes an **interface contract** (electrical + software) that other teams depend on.
- **Integration ownership:** one team (or a nominated Systems Integrator in each team) manages integration tasks and interface change control.
- **Jira is the backbone:** teams manage dependencies explicitly using `blocks / is blocked by`, weekly status reports, a change log, and a risk register.

### Safety scope (recommended default)
To keep the project safe and feasible in 8 weeks, treat this as a **coffee-machine-like** system (state machine, sensing, pumping/valves, UI) and avoid uncontrolled hazards.

- Use **extra-low voltage** (e.g., 5–12 V) where possible.
- If you include liquids/heat: require containment, drip trays, and strict risk controls.
- If your centre policy disallows hot water/mains power in student projects, simulate:
	- “heater” with an LED + resistor load and a temperature sensor placed near it, or
	- “boiler temperature” as a simulated sensor signal.

### Minimum viable integrated features (baseline)
By Week 8, the integrated demonstrator should achieve:
- A **state machine**: Idle → Ready → Brewing → Complete → Fault
- **User interface**: start/stop, drink selection (basic), status indication
- **Sensing**: water level and a temperature input (real or simulated)
- **Actuation**: pump/valve control (real or simulated load)
- **Fault handling**: at least 3 faults with safe shutdown + logged reason
- **Evidence**: test cases executed with results linked to objectives

## Assessment mapping (what gets produced when)
- **LO1 (P1, P2, M1, D1):** Mainly Weeks 1–2 (proposal + feasibility + legislation/ethics/risk)
- **LO2 (P3, M2, D2):** Mainly Week 3 (project plan in Jira + evaluation criteria)
- **LO3 (P4–P6, M3–M5, D3):** Weeks 4–7 (implementation, monitoring, simulation/experiments, technical report)
- **LO4 (P7–P8, M6, D4):** Weeks 7–8 (presentation, feedback, reflection + action plan)

---

## Standard weekly session template (4 hours)
Use this same structure every week to keep students on track:

- **Block A (0:00–0:40) – Teach & model:** new concepts + worked exemplar
- **Block B (0:40–1:40) – Guided build:** students apply the concept to their own project while you circulate
- **Break (1:40–1:50)**
- **Block C (1:50–2:50) – Evidence clinic:** you check evidence quality against the criteria and give targeted corrections
- **Block D (2:50–4:00) – Jira + logbook + next actions:** update plan, risks, decisions, and write up weekly log

---

## Core evidence pack (students maintain throughout)
- **Project Proposal (LO1):** brief, background, aims/objectives, constraints, standards/ethics/legislation, risk register, feasibility
- **Project Plan (LO2):** Jira plan (WBS/backlog), milestones, schedule (Gantt if used), resources/budget, evaluation criteria + KPIs
- **Project Execution Record (LO3):** logbook/diary, weekly status reports, change log, test plan + results, simulation/experiment evidence
- **Technical Engineering Report (LO3):** structured report covering all stages, outcomes, justified analysis, recommendations
- **Presentation + Feedback (LO4):** slides + Q&A + feedback capture + response plan
- **Reflection + Action Plan (LO4):** reflective practice model + critical evaluation + improvements

Additional evidence strongly recommended for this multi-team model:
- **Interface control document (ICD):** pinout + signal levels, message formats, API endpoints, timing requirements
- **Integration test report:** subsystem tests + system-level tests, including fault injection
- **Decision log:** key trade-offs (cost/time/safety/complexity) and why chosen

---

# Week 1 — Project launch + team split + architecture selection (LO1 foundations)

**Week goal:** students leave with a shared project definition (coffee machine controller), a high-level system architecture, and team responsibilities that enable parallel work.

**Targets this week:** LO1 setup for P1/P2/M1/D1 (no final submissions yet, but evidence must start).

### Teach (Block A, 0:00–0:40)
- What the unit assesses: pass/merit/distinction criteria in plain language
- What “engineering project” means at Level 5:
	- a defined problem + measurable objectives
	- a design/build/simulate/test cycle
	- evidence-based evaluation (not just “it works”)
- Typical project categories (choose one style and explain expectations):
	- design + prototype (hardware)
	- simulation + validation (software/model-based)
	- process improvement/engineering management (data-driven)
- “Scope triangle” and common failure modes:
	- too big to finish, too small to be Level 5, unclear user need, no measurable test plan

- System engineering basics for multi-team projects:
	- product requirements vs design decisions
	- subsystem boundaries
	- why interface contracts prevent rework
	- integration risks (the main risk in team projects)

### Guided build (Block B, 0:40–1:40)

- Activity: **Shared requirements + team architecture workshop**
- Students produce (live, as a whole cohort):
	- A one-page **Product Requirements** list (functional + non-functional)
	- A simple **system block diagram** (UI ↔ ESP32 control ↔ sensors/actuators ↔ power)
	- A shortlist of **hazards** (hot surfaces, water + electrics, moving parts) and how you will avoid/simulate
	- Team assignment (2–4 teams) and boundaries
- Students produce (live, in teams):
	- Team mission statement (what you own)
	- First draft of the **interface contract** for your boundary (even if incomplete)
	- A list of “inputs you need from other teams” and “outputs you will provide”

### Evidence clinic (Block C, 1:50–2:50)

- Quick-check each team for:
	- clear subsystem boundary and ownership
	- an interface contract draft exists (pinout/API/message formats)
	- hazards identified with a safe approach (real vs simulated)
	- at least 6 measurable requirements exist (these become objectives next week)

### Jira + logbook + next actions (Block D, 2:50–4:00)
- Jira onboarding (minimum viable setup):
	- create Jira project
	- create Epics:
		- Proposal & Compliance (LO1)
		- Planning & Jira (LO2)
		- Subsystem Build (one Epic per team)
		- Integration & System Test
		- Technical Report
		- Presentation & Reflection
	- create a **Decision** issue: “Coffee machine controller project chosen” (with scope/safety constraints)
	- create a **Risk register** (as either a spreadsheet attachment or Jira Risk issues)
- Logbook entry (minimum): what you did today + decisions + why + next steps

**Between Week 1 and Week 2 (independent work):**
- Do **secondary research** relevant to the coffee machine system (minimum 5 sources total per team):
	- embedded safety / low-voltage design practices
	- sensor/actuator selection for the subsystem
	- similar appliance state machines / UI patterns
	- 3D printing constraints (if mechanical team)
- Draft:
	- 1-page background (system) + 1-page background (your subsystem)
	- initial list of standards/regs and centre safety rules that apply
	- interface contract v0.1 (what signals/data you will exchange)
- Update Jira with research tasks and attach links

---

# Week 2 — Proposal writing, aims/objectives, feasibility, ethics/legislation/risk (LO1: P1, P2, M1, D1)

**Week goal:** students leave with a near-complete LO1 proposal pack and the skills to justify feasibility.

### Teach (Block A, 0:00–0:40)
- Proposal structure (what markers look for):
	- brief/summary, background (what is known), problem definition, user need
	- aims vs objectives (SMART)
	- deliverables and constraints
	- feasibility justification (technical/economic/schedule)
	- legislation/ethics/standards + risk (D1)
- Aims vs objectives (model examples):
	- Aim example: “Design and validate a low-cost vibration monitoring system for a small DC motor.”
	- Objective example: “Measure vibration RMS in 3 operating conditions and achieve < X threshold detection accuracy.”
- Feasibility: how to justify, not just claim
- D1 framing: show how legislation/ethics/risk actively changes your design choices

- Multi-team feasibility:
	- integration as the primary schedule risk
	- interface stability and change control
	- “definition of done” for a subsystem (test evidence, not just assembly)

### Guided build (Block B, 0:40–1:40)

- Activity: **Write LO1 proposal for the shared system + convert requirements into SMART objectives**
- Students produce (live drafts):
	- system project brief (problem, solution, impact)
	- subsystem briefs (1 paragraph each, owned by teams)
	- final system aims (1–2) and SMART objectives (6–10) that cover:
		- functional behaviour (state machine)
		- sensor/actuator performance
		- safety behaviours (fault handling)
		- usability (UI responsiveness/clarity)
		- integration behaviours (interfaces)
	- outline deliverables:
		- integrated demo
		- Jira plan (export/screenshots)
		- technical report
		- presentation + reflection
- Mini-activity: “Objective stress test” (applied to at least 3 objectives)
	- Is it measurable? What data proves it? What tool collects it? What’s the pass threshold?

### Evidence clinic (Block C, 1:50–2:50)
- Activity: **Feasibility and risk evidence review**
- Students must show:
	- feasibility table covering: tools/software availability, skills gap, cost/BOM estimate, time estimate, major risks
	- risk register v1 (hazards + mitigations + residual risk)
	- legislation/ethics/standards narrative (D1):
		- what applies
		- what design decision it drives
		- how compliance is evidenced

- Add an “integration feasibility” row (required):
	- how you will test subsystem integration without everything finished (stubs, simulated sensors, test harnesses)

### Jira + logbook + next actions (Block D, 2:50–4:00)
- Jira: create a “Decision” issue: team structure + subsystem boundaries + why
- Jira: create “Risk” issues linked to tasks
- Logbook: “What I changed after feedback today” (this becomes strong M/D evidence)

**Between Week 2 and Week 3 (independent work):**

- Finish LO1 pack (ready to submit/check):
	- P1: proposal brief aligned to frameworks
	- P2: aims/objectives
	- M1: feasibility study (justified)
	- D1: legislation/ethics/risk impacts (illustrated)
- Gather/attach evidence: citations, standards extracts, screenshots of risk register

- Create interface contract v0.2 (minimum):
	- electrical: pinout + voltage levels + connector assumptions
	- software: message formats/APIs + timing expectations
	- responsibility: who owns which signal/message

---

# Week 3 — Project management plan in Jira + evaluation criteria (LO2: P3, M2, D2)

**Week goal:** students leave with a comprehensive, baselined plan in Jira that includes evaluation criteria.

### Teach (Block A, 0:00–0:40)
- What LO2 requires:
	- P3: plan using PM software/tools/techniques
	- M2: comprehensive plan making full use of the software
	- D2: comprehensive plan + explicit evaluation criteria
- Translating proposal → plan:
	- deliverables → milestones
	- objectives → acceptance criteria
	- risks → mitigation tasks + contingency time
- Planning techniques to teach explicitly:
	- WBS (work packages)
	- dependencies + critical path concept (even if Jira doesn’t auto-CP)
	- change control (baseline vs changes)
	- KPIs (progress, quality, performance)
- Evaluation criteria examples (choose what fits):
	- decision matrix for design choices
	- AHP for weighted priorities
	- HES decision matrix (safety/environment)

- Jira practices for multi-team dependency management:
	- `blocks / is blocked by` for interface dependencies
	- “integration milestones” as named versions/labels
	- use of Components (Team-Firmware, Team-Hardware, Team-Mechanical, Team-UI)
	- a weekly “scrum of scrums” style status report

### Guided build (Block B, 0:40–1:40)
- Activity: **Build the plan in Jira**
- Students must implement:
	- Epics: Proposal (done), Planning (done), Build, Test/Validate, Report, Presentation
	- Issues with: description, acceptance criteria, estimate, due date, owner
	- Milestones as versions or a “Milestone” label
	- Dependencies using links (blocks/is blocked by)
	- At least 10 cross-team dependency links (real ones):
		- e.g., firmware blocked by final pinout; UI blocked by state machine messages; mechanical blocked by PCB dimensions
- If a Gantt view is available (Advanced Roadmaps/add-on): show how to export/screenshot

### Evidence clinic (Block C, 1:50–2:50)
- Checklist you enforce (this is what pushes P3 → M2 → D2):
	- backlog covers end-to-end lifecycle (initiation → planning → execution → close)
	- each objective has linked tasks + acceptance criteria
	- evaluation criteria exist and are measurable (D2)
	- risk mitigations are scheduled (not just written)
	- baseline captured (date-stamped screenshot/export)
	- evaluation criteria include both:
		- subsystem KPIs (e.g., sensor sampling rate, UI response time)
		- system KPIs (e.g., brew cycle timing accuracy, fault response time)

### Jira + logbook + next actions (Block D, 2:50–4:00)
- Set “Sprint/Week 4” goals and commit tasks
- Create a weekly “Status report” issue template:
	- plan vs actual, blockers, risks, changes, next week actions
- Logbook: plan baseline summary + what will be delivered by Week 4

**Between Week 3 and Week 4 (independent work):**
- Begin build/simulation work immediately
- Produce:
	- test plan outline (what will you measure and how)
	- initial prototype/model setup evidence
- Update Jira daily (minimum: move tasks, add comments, attach evidence)

- Publish interface contract v1.0 (freeze a baseline):
	- any changes after this must go through change control

---

# Week 4 — Executing the plan + test/simulation design + reporting standards (LO3 start: P4, P6, P5)

**Week goal:** students start real project execution with a defensible test/simulation method and correct evidence capture.

### Teach (Block A, 0:00–0:40)
- LO3 requirements overview:
	- P4: implement activities and record progress against plan
	- P6: conduct/simulate activities to generate outcomes
	- P5: coherent technical report covering each stage
- Test vs validation essentials:
	- “What are you measuring?” “What does good look like?” “What’s the baseline?”
	- repeatability, calibration/measurement considerations
- Technical report structure (minimum headings):
	- Introduction, Background, Requirements, Plan/Method, Implementation, Test/Results, Discussion, Evaluation, Conclusions, Recommendations, References, Appendices
- Avoiding weak reports:
	- no unexplained screenshots
	- no claims without data
	- link every result to an objective

- Embedded engineering specifics (teach as a mini “quality bar”):
	- state machine design + transitions
	- watchdog/timeouts (where appropriate)
	- debouncing and sensor filtering (simple, justified)
	- logging strategy (serial log + saved logs/screenshots)

### Guided build (Block B, 0:40–1:40)
- Activity: **Build test plan v1 (or simulation plan v1)**
- Students produce:
	- test cases with acceptance criteria
	- instrumentation/simulation settings list
	- data capture plan (tables, units, naming conventions)
	- risk updates for lab work

- Integration test harness plan (required):
	- how each team will test without the other team finished (stubs/mocks)

### Evidence clinic (Block C, 1:50–2:50)
- Review:
	- Jira progress vs Week 3 baseline
	- logbook quality (what was done + what changed + why)
	- test plan correctness (measurable, feasible)
- If behind: force scope control (cut features, protect evaluation quality)

- Integration checkpoint (end of Week 4):
	- teams demonstrate “hello integration” (minimum):
		- shared pinout verified or simulated
		- shared message/state interface verified via a stub

### Jira + logbook + next actions (Block D, 2:50–4:00)
- Create/confirm:
	- weekly status report issue (Week 4)
	- change control log issue (if anything changed)
	- evidence links (folder structure)

**Between Week 4 and Week 5 (independent work):**
- Execute build/sim tasks to produce first measurable results
- Start writing report sections: Introduction, Background, Plan/Method
- Capture evidence as you go (photos, screenshots, data files)

- Hold a team-to-team interface sync (30 minutes) and log decisions in Jira

---

# Week 5 — Producing results + troubleshooting + structured analysis (LO3: P6, M5, M4)

**Week goal:** students generate meaningful results and begin proper engineering analysis (not just “it worked”).

### Teach (Block A, 0:00–0:40)
- Troubleshooting and root cause analysis (RCA):
	- symptoms vs causes
	- 5 Whys, fishbone, fault trees (choose one to model)
- Simulation/experiment quality:
	- parameter control
	- validation against known/expected behaviour
	- documenting settings and assumptions
- What M5 looks like:
	- reviewing practical examples to solve structural/performance issues
	- showing you tried alternatives (simulation settings, design variants, experimental setups)

### Guided build (Block B, 0:40–1:40)
- Activity: **Run 1–2 test cases / simulation runs in a controlled way**
- Students produce:
	- results table (with units)
	- screenshot of setup/settings
	- short interpretation: “What does this mean against Objective X?”

- Integration activity (minimum):
	- integrate 1 subsystem-to-subsystem path end-to-end (even if simulated)
	- example: UI start command → firmware state change → actuator output → UI status update

### Evidence clinic (Block C, 1:50–2:50)
- Review evidence against P6/M5:
	- can someone else reproduce your run?
	- is the outcome linked to an objective?
	- did you consider alternative approaches?
- Report clinic:
	- write Results + Discussion paragraph structure
	- how to reference figures/tables properly

### Jira + logbook + next actions (Block D, 2:50–4:00)
- Weekly status report issue (Week 5) completed in-session
- Decide next week’s priority: “fix performance” vs “complete feature” vs “write-up”

**Between Week 5 and Week 6 (independent work):**
- Produce the main body of results (enough to evaluate objectives)
- Write report: Implementation + Results sections draft
- Update risk register and log any changes with justification

---

# Week 6 — Verification/validation + cost/time performance + improving report quality (LO3: M3, M4)

**Week goal:** students have verified outcomes, can explain variances, and have a structured, detailed report draft.

### Teach (Block A, 0:00–0:40)
- Verification vs validation (teach with an example):
	- verification: built it right
	- validation: built the right thing for the need
- Progress monitoring techniques:
	- planned vs actual hours
	- schedule variance (SV) and cost variance (CV) conceptually
	- why “we ran out of time” is not analysis
- What M3 looks like:
	- full range of activities + consistent progress recording

### Guided build (Block B, 0:40–1:40)
- Activity: **Acceptance testing against objectives**
- Students produce:
	- acceptance checklist per objective (pass/fail + evidence link)
	- revised test plan (if needed) and justification
	- time/cost summary table (planned vs actual)

- System-level V&V (required):
	- run at least 1 full brew cycle end-to-end and record timings
	- fault injection test (choose 1): low water, overtemp, stuck button, comms loss

### Evidence clinic (Block C, 1:50–2:50)
- Report clinic:
	- improve structure (headings, numbering, signposting)
	- ensure each stage of project is covered
	- ensure outcomes are justified with evidence
- Jira clinic:
	- check tasks are closed with evidence
	- check changes are logged (scope/schedule/risk)

### Jira + logbook + next actions (Block D, 2:50–4:00)
- Weekly status report issue (Week 6)
- Identify remaining gaps to reach D3 (critical analysis + recommendations)

**Between Week 6 and Week 7 (independent work):**
- Finalise build/simulation and freeze results
- Draft evaluation section: compare outcomes vs original plan/objectives
- Draft recommendations for improvements and future work

---

# Week 7 — Critical evaluation + presentation build + reflective practice (LO3 D3 + LO4 prep)

**Week goal:** students move from “results” to “critical evaluation and communication”.

### Teach (Block A, 0:00–0:40)
- D3: how to critically analyse outcomes against the original plan:
	- what you said you’d do vs what happened
	- why variances occurred (root cause, not excuses)
	- trade-offs and constraints
	- justified recommendations (specific, feasible)
- Presentation skills (P7):
	- technical narrative: problem → method → results → evaluation → next steps
	- slide discipline: one message per slide, evidence visuals, avoid “busy” slides
- Reflective practice options (teach one model clearly, mention others):
	- Gibbs or Kolb (choose one for a worked example)

### Guided build (Block B, 0:40–1:40)
- Activity: **Write the D3 evaluation section live**
- Students produce:
	- evaluation table: objective vs result vs evidence vs judgement
	- recommendations list (ranked by impact/effort)
	- limitations statement (honest + technical)

### Evidence clinic (Block C, 1:50–2:50)
- Presentation clinic:
	- build a 8–12 slide deck outline
	- map slides to marking criteria
- Reflection clinic:
	- start reflective log + action plan (M6/D4)
	- incorporate third-party feedback plan (who will give feedback next week?)

- Multi-team evaluation prompt (for D3):
	- “Which dependency caused the biggest impact and how did you manage it?”
	- “What interface change caused rework and what would you do next time?”

### Jira + logbook + next actions (Block D, 2:50–4:00)
- Create Week 8 presentation issues + rehearsal tasks
- Set “Definition of Done for final submission” checklist issue

**Between Week 7 and Week 8 (independent work):**
- Finalise report (full draft ready)
- Create slides and rehearse (time your talk)
- Collect at least one third-party feedback point (peer/technician/employer/tutor) and record it

---

# Week 8 — Presentation + feedback + final reflection/action plan (LO4: P7, P8, M6, D4)

**Week goal:** students deliver the project presentation, record feedback, and complete critical reflection with an action plan.

### Teach (Block A, 0:00–0:25)
- How to handle Q&A:
	- repeat the question, answer with evidence, admit limits, propose next test
- What “good reflection” looks like (D4):
	- critical evaluation of your own delivery and practice
	- specific actions (skills, process, time management, technical depth)

### Guided build (Block B, 0:25–1:55)
- Activity: **Presentations (round 1)**
- Minimum expectation:
	- technically literate delivery
	- evidence shown (results, evaluation)
	- questions logged

- Team presentation requirement:
	- show system architecture + subsystem boundaries
	- show at least 1 integration test and 1 fault response

### Evidence clinic (Block C, 2:05–3:05)
- Feedback capture:
	- what feedback was given (quote/summarise)
	- what you will do about it (action plan)
	- what you will not do (and why)

### Jira + logbook + next actions (Block D, 3:05–4:00)
- Close-out:
	- final Jira status report
	- final risk register update
	- archive evidence links
- Final reflective log:
	- chosen reflective model applied
	- action plan (short-term + long-term)

---

## Weekly progress tracking (built in)
- **Every week in-session:** Jira status report + logbook entry + risk register update + evidence check
- **Every week between sessions:** minimum 3 Jira updates per person (comments/moves/attachments)
- **Change control rule:** any scope/schedule/cost change must have a Jira “Change” issue with justification

---

## Evidence checklist aligned to assessment criteria
- **P1:** project brief aligned to engineering regulatory/ethical frameworks
- **P2:** aims and SMART objectives
- **M1:** feasibility study (justified)
- **D1:** illustrated effects of legislation/ethics/risk on proposal/design decisions
- **P3:** project plan using PM software/tools/techniques (Jira + supporting artefacts)
- **M2:** comprehensive plan making full use of Jira features (workflow, links, reports, ownership, updates)
- **D2:** comprehensive plan + evaluation criteria/KPIs (explicitly stated and measurable)
- **P4:** implemented activities + recorded progress against original plan
- **M3:** full range of activities + consistent progress evidence
- **P5/M4:** coherent, structured, detailed technical report covering all stages with justified outcomes
- **P6/M5:** conducted/simulated planned activities + reviewed practical examples to resolve issues
- **D3:** critical analysis of outcomes against plan + justified recommendations
- **P7:** presentation to technically literate audience + feedback session
- **P8/M6/D4:** reflection + end-to-end evaluation + action plan responding to third-party feedback

---

## Jira setup (suggested minimum for this delivery pattern)
- **Issue types:** Epic, Task, Bug, Risk, Change, Decision, Status Report
- **Workflow:** Backlog → To Do → In Progress → Review → Done
- **Cadence:** 1-week sprint matching teaching weeks (Week 4–Week 8 typically)
- **Required fields/discipline:** acceptance criteria, evidence link, due date, owner, estimate, objective tag
- **Dashboards/reports:** sprint burndown (or simple status count), cumulative flow, issue list by due date

---

## Assumptions to confirm (so the plan matches your centre constraints)
If any of these are different, tell me and I will adjust Week 1–2 proposal/risk content and Week 4–6 build/testing content.

- **Liquids/heat policy:** are students allowed to use water and/or heated elements, or must these be simulated?
- **Power policy:** is mains power strictly prohibited in student builds? (recommended: yes)
- **Connectivity policy:** can ESP32 use Wi‑Fi in the lab (for a web UI), or should all comms be wired serial only?
- **Assessment approach:** group product with **individual** logbooks/reflections (recommended), or a purely team submission?
- **Team count:** 2, 3, or 4 teams (plan supports all)

---

## P/M/D coverage check (are we on track?)
This project structure meets all criteria if the evidence rules below are enforced.

### LO1
- **P1/P2:** achieved via the system proposal + subsystem briefs + SMART objectives.
- **M1:** achieved via the feasibility study including integration feasibility and safety constraints.
- **D1:** achieved when students explicitly show how safety/ethics/legislation changes design (e.g., simulating heat, low-voltage actuation, containment features).

### LO2
- **P3:** achieved via a Jira plan with lifecycle stages, milestones, and tasks.
- **M2:** achieved when Jira is used fully: ownership, dependencies, reports, consistent updates, and a baseline.
- **D2:** achieved when evaluation criteria/KPIs are explicit and measurable at subsystem and system level.

### LO3
- **P4/M3:** achieved via weekly status reports + logbooks + evidence-linked Jira closure.
- **P6/M5:** achieved via planned tests/simulations and showing practical troubleshooting examples/variants.
- **P5/M4:** achieved via a structured report covering each stage and justifying outcomes with data.
- **D3:** achieved via critical analysis against the original plan, with justified recommendations and change impacts.

### LO4
- **P7:** achieved via an integrated demo + technically literate presentation + logged Q&A.
- **P8/M6/D4:** achieved via reflective practice model + third-party feedback + action plan.

### Evidence rule that makes group work assessable
Even with a shared system, require each student to produce:
- their own weekly logbook entries
- at least one owned Jira workstream (tasks with evidence)
- an individual reflection and action plan
