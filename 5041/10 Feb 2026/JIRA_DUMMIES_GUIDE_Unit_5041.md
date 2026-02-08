# Jira “Dummies Guide” (Unit 5041)

> Purpose: this is a step‑by‑step guide for **students** to use Jira as an **audit trail** for Unit 5041 (LO2 + LO3 especially): planning, monitoring, change control, risk management, and evidence linking.

This guide assumes Jira Cloud (browser). If your Jira looks slightly different, use the same ideas and search for the same menu names.

### Quick note (important)
If you’re not sure whether your Jira project is **Team-managed** or **Company-managed**: don’t worry. This guide works for both. Where the UI differs, you’ll see **“If you don’t see this…”** alternatives.

---

## 0) What Jira is doing for you (in one paragraph)
Jira is your project diary *and* proof. It shows **what you planned**, **what you actually did**, **what changed**, **what risks you managed**, and links your work to **evidence** (plots, photos, logs, test results). If it isn’t in Jira (or in your exported Jira evidence), it is difficult to prove you did it.

---

## 1) Before you start (5 minutes)

### 1.1 Decide where your Jira project will live
Pick one option:

**Option A — Your centre provides a Jira site (recommended)**
1. Your tutor gives you a Jira site link (e.g., `https://yourcollege.atlassian.net`).
2. You will be invited by email.
3. You will create a project inside that site.

**Option B — You create your own Jira Cloud site (if permitted by your centre)**
1. Go to Atlassian Jira Cloud sign‑up.
2. Create an account using your student email.
3. Create a new Jira site.

> Note: if your centre has rules about data, do not upload personal data or anything sensitive. Keep evidence technical (screenshots of boards, logs, plots).

### 1.2 Basic evidence rule
- Any work that contributes to the project must have **a Jira issue**.
- Any closed issue must have **a link or attachment** proving it was done.

---

## 2) Create your Jira project (step-by-step)

### 2.0 How to tell if your project is Team-managed or Company-managed (1 minute)
Open your Jira project, then:

1) Click **Project settings** (left side menu).
- If you see settings like **Features**, **Issue types**, **Columns**, **Access**, and it feels “simple”, it’s usually **Team-managed**.
- If you see many admin options (workflows, schemes, permissions) or you *can’t* access Project settings at all, it’s usually **Company-managed**.

2) If you’re still unsure: it doesn’t matter for marking. Use the behaviours in this guide (issues, evidence, risks/changes/decisions/status reports) and capture screenshots/exports.

### 2.1 Create a project
1. In Jira, click **Projects** → **Create project**.
2. Choose a template:
   - Choose **Kanban** (recommended for this unit; simple “To do / In progress / Done”).
   - If your tutor explicitly requires Scrum, choose **Scrum**.
3. Choose project type:
   - If you are allowed to create your own project, choose **Team‑managed** (easiest, fewer admin permissions needed).
   - If your centre’s Jira admins require it, choose **Company‑managed**.
   - If you are not given a choice, just continue (your centre has pre-set it).
4. Name your project using a consistent naming rule:
   - **Project name:** `5041 - <StudentID> - <ShortTitle>`
   - **Key:** `U5041<YourInitials>` (example: `U5041AA`)
5. Click **Create**.

### 2.2 Confirm you have the views you need
Open your project and confirm you can access:
- **Board** (Kanban board)
- **Backlog** (sometimes shown for Kanban)
- **Timeline** (if available)
- **Issues** (list view)

If you don’t see one of these views:
- **No Timeline?** That’s OK. Use Board + Issues list + due dates + dependencies.
- **No Backlog?** Use the Issues list and Epics to organise.
- **No Issues list?** Use Board + search filters.

If you cannot see one of these:
- Click **Project settings** (left menu) and explore what is enabled.
- If it’s a centre-managed Jira and views are hidden, ask your tutor what to use instead (or use screenshots of whatever views you do have).

---

## 3) Set up your project structure (the “minimum viable Jira”) 

### 3.1 Decide your issue types (two valid approaches)
Jira installations vary. Use whichever you can.

**Approach A (best): you have custom issue types available**
Use:
- Epic
- Task
- Bug
- Risk
- Change
- Decision
- Status Report

**Approach B (fallback): you only have the standard issue types**
Use:
- Epic
- Task
- Bug

…and represent the other types using **labels**:
- label `risk`
- label `change`
- label `decision`
- label `status-report`

> Either approach is acceptable as long as your Jira evidence clearly shows risks/changes/decisions/status updates.

### 3.2 Create your Epics (WBS top level)
Epics are your big work packages. Create these first.

Recommended Epic set (copy/paste):
- `E1 - LO1 Proposal & Feasibility`
- `E2 - LO2 Plan (Jira) & KPIs`
- `E3 - Build/Model Implementation`
- `E4 - Testing / Simulation / Results`
- `E5 - Report Writing & Figures`
- `E6 - Presentation + Feedback + Reflection`

**How to create an Epic**
1. Go to **Backlog** or **Issues**.
2. Click **Create**.
3. Select **Issue type: Epic**.
4. Set **Summary** to one of the epic names above.
5. Add a short description: what “done” means for this epic.
6. Click **Create**.

### 3.3 Add a simple workflow rule (what “Done” means)
Create a consistent “Definition of Done” you will use on every issue.

Add this text to your project README issue or pin it in your notes:
- An issue can only be moved to **Done** if it has:
  1) an evidence link/attachment, and
  2) acceptance criteria ticked off or stated as met.

---

## 4) Create tasks properly (so your plan is assessable)

### 4.1 How to create a good Task (step-by-step)
1. Click **Create**.
2. Select **Issue type: Task**.
3. Write a clear summary starting with a verb:
   - Good: `Draft aims/objectives (SMART) for proposal`
   - Good: `Implement sensor read + filtering module`
   - Bad: `Work on project`
4. In **Description**, add:
   - **Context:** why this task exists
   - **Acceptance criteria:** measurable “done” statements
   - **Evidence you will attach:** what proof will exist

Copy/paste task description template:

**Description template (paste into Jira):**
- Context:
- Acceptance criteria:
  - AC1:
  - AC2:
- Evidence to attach/link:
  - (e.g., screenshot, log file, plot, test table, photo)

5. Set **Assignee** to yourself.
6. Set a **Due date** (even if rough).
7. Add **Labels**:
   - `lo1`, `lo2`, `lo3`, `lo4` (pick the LO it supports)
   - optional: `report`, `build`, `test`, `research`
8. Link it to an **Epic**.
9. Click **Create**.

### 4.2 Break work down to the right size
A good Jira plan has tasks you can finish in ~1–6 hours.
- If a task is bigger than a day of work, split it.
- If a task is smaller than 10 minutes, merge it.

---

## 5) Create your LO2 evaluation criteria (KPIs) inside Jira

### 5.1 Create KPI issues (recommended)
Create a task (or a dedicated KPI issue if your Jira has it):
- `Define KPI table v1 (10 KPIs, thresholds, method)`

Then create sub-tasks or linked tasks:
- `KPI-01 Define <metric> target + measurement method`
- `KPI-02 Define <metric> target + measurement method`

**KPI issue description template:**
- KPI name:
- Linked objective:
- Target (units):
- Measurement method:
- Evidence output (file):
- Test ID (if you use one):

### 5.2 Link KPIs to tests and evidence
Later, when you run tests/simulations, link the test execution issue to the KPI issue.

---

## 6) Dependencies (blocked work) — how to use links

### 6.1 Create a dependency link (step-by-step)
Use dependency links to prove planning quality and to explain schedule variance.

1. Open the issue that is blocked.
2. Find the **Links** section (sometimes shown as “Linked issues”).
3. Click **Add link**.
4. Choose link type:
   - `is blocked by` / `blocks` (best)
   - or `relates to` (fallback)
5. Select the issue that is blocking it.
6. Save.

### 6.2 What counts as a valid dependency (individual project)
Examples:
- “Test run” **is blocked by** “Build test harness”
- “Implementation” **is blocked by** “Parts delivered”
- “Results section” **is blocked by** “Results set frozen”
- “Control tuning” **is blocked by** “Model validated”

### 6.3 Show “blocked” clearly on the board
If your Jira has a **Blocked** status, use it.

If not:
1. Open the blocked issue.
2. Add a comment starting with `BLOCKED:` explaining what you’re waiting for.
3. Use **Flag** (if available) or add label `blocked`.

---

## 7) Risk register in Jira (step-by-step)

### 7.1 Create your first Risk issues
Create at least 8–12 risks across:
- safety
- technical performance
- time/schedule
- parts/tools availability
- data quality / measurement

**How to create a Risk issue**
1. Click **Create**.
2. Choose issue type **Risk** (or Task + label `risk`).
3. Summary format:
   - `R-01 <short risk name>`
4. Description template:

- Hazard / risk:
- Cause:
- Effect:
- Likelihood (1–5):
- Severity (1–5):
- Risk score (L×S):
- Mitigation (what you will do):
- Evidence you will attach:
- Residual risk (new L×S after mitigation):

5. Link the Risk to the task it affects (`relates to` is fine).

### 7.2 Update risks weekly
Every week, update:
- likelihood/severity if needed
- mitigation status
- add evidence if mitigation was implemented

---

## 8) Change control (scope/time/technical changes)

### 8.1 When you MUST log a change
Log a change issue when you:
- change scope (remove/add a feature)
- change schedule/milestones significantly
- change key components/tools (sensor, library, algorithm, platform)
- change KPI targets (because they were unrealistic)

### 8.2 Create a Change issue (step-by-step)
1. Click **Create**.
2. Issue type **Change** (or Task + label `change`).
3. Summary format:
   - `C-01 <what changed>`
4. Description template:

- What changed (before → after):
- Why it changed (root cause):
- Impact analysis:
  - schedule:
  - cost (if applicable):
  - risk:
  - KPIs/evaluation:
- Options considered (at least 2):
- Decision + justification:
- Evidence (screenshots/logs/results):

5. Link it to the impacted Epic/Tasks.

---

## 9) Decision log (trade-offs) 

### 9.1 What counts as a “decision”
Examples:
- choosing a sensor
- choosing a modelling assumption
- selecting a control strategy
- selecting sampling rate
- choosing what to cut when time is short

### 9.2 Create a Decision issue (step-by-step)
1. Click **Create**.
2. Issue type **Decision** (or Task + label `decision`).
3. Summary format:
   - `D-01 <decision topic>`
4. Description template:

- Decision statement:
- Options considered:
  - Option A (pros/cons):
  - Option B (pros/cons):
  - Option C (pros/cons) (optional):
- Criteria used (cost/time/risk/performance):
- Final choice + justification:
- Evidence (datasheet extract, test result, simulation plot):

---

## 10) Weekly Status Report issues (your LO3 progress evidence)

### 10.1 Create a Status Report issue every week
Create one per week. Name them consistently:
- `SR-W1 Status Report (date)`
- `SR-W2 Status Report (date)`
- …

**Step-by-step**
1. Click **Create**.
2. Issue type **Status Report** (or Task + label `status-report`).
3. Summary: `SR-W<week> Status Report (YYYY-MM-DD)`
4. Description template:

- Week number + date:
- Planned work (from Jira baseline):
- Completed work (issue keys):
- Evidence links added this week:
- Variance (planned vs actual):
  - what slipped:
  - why (root cause):
  - what you changed (link to Change issue if needed):
- Risks updated (risk IDs):
- Decisions made (decision IDs):
- Next week plan (top 3 issues):

5. Attach 1–3 screenshots (board, timeline, burndown if using Scrum).

### 10.2 How to “prove” progress inside normal tasks
When you work on a task:
1. Move it to **In progress**.
2. Add a comment like:
   - `Progress update: implemented X; next is Y.`
3. Attach evidence as you go (screenshots/plots/logs).
4. When done, move to **Done**.

---

## 11) Evidence linking (the most important habit)

### 11.1 What you should attach/link
Attach or link:
- photos of hardware build
- MATLAB plots
- simulation outputs
- test tables
- serial logs
- short demo videos (if allowed)
- screenshots of results

### 11.2 How to attach a file
1. Open the issue.
2. Drag and drop the file into the issue, or click **Attach**.
3. Add a comment describing what the file shows.

### 11.3 How to link to a file in OneDrive/Google Drive/GitHub
1. Ensure the link is accessible to your tutor (if required).
2. Paste the link in the issue.
3. Add a comment explaining:
   - what the link contains
   - which KPI/Test it supports

---

## 12) Filters and dashboards (easy Merit evidence)

### 12.1 Create a filter to list your risks
1. Go to **Filters** → **View all filters** → **Create filter**.
2. Use basic search:
   - Project = your project
   - Issue type = Risk (or label = risk)
3. Save it as: `My Risks (Unit 5041)`

If you can use JQL, examples:
- Risks by label:
  - `project = U5041AA AND labels = risk ORDER BY created DESC`
- Changes:
  - `project = U5041AA AND labels = change ORDER BY created DESC`
- Status reports:
  - `project = U5041AA AND labels = status-report ORDER BY created DESC`

### 12.2 Take dashboard screenshots (if available)
If Jira dashboards are available:
1. Go to **Dashboards** → **Create dashboard**.
2. Add gadgets like:
   - Filter results (risks)
   - Pie chart (issues by status)
   - Created vs resolved
3. Screenshot the dashboard for evidence.

If dashboards are not available, a saved filter screenshot is fine.

---

## 13) Baselines (how to show “plan vs actual”)
A baseline is a snapshot of your plan at an agreed point (e.g., end of Week 3).

### 13.1 How to capture a baseline (simple method)
At baseline date:
1. Screenshot:
   - backlog (show epics and key tasks)
   - board (show status distribution)
   - timeline (if available)
2. Create a Decision issue:
   - `D-00 Plan baseline frozen (Week 3)`
3. Attach the screenshots.
4. Write one sentence: “After this point, changes require a Change issue + impact analysis.”

---

## 14) Exporting Jira evidence for submission (step-by-step)

### 14.1 The “minimum export pack” you should submit
Export evidence showing:
- backlog with epics and tasks
- board showing work moved across statuses
- dependencies (at least a few examples)
- risk list (risk register)
- change log (Change issues)
- decision log (Decision issues)
- weekly status reports (SR‑W1…)

### 14.2 Export option A: screenshots (always works)
1. Open each view (Backlog/Board/Timeline/Filters).
2. Use Windows Snipping Tool (Win+Shift+S).
3. Save files with clear names:
   - `Jira_Backlog_Baseline_W3.png`
   - `Jira_Board_W5.png`
   - `Jira_Risks_List.png`

### 14.3 Export option B: CSV export (if enabled)
1. Open a saved filter (e.g., Risks).
2. Look for **Export** (often top right).
3. Choose **CSV**.
4. Save it as `Jira_Risks.csv`.

### 14.4 Export option C: Print to PDF (browser)
1. Open the filter or issue list.
2. Use browser print:
   - Press `Ctrl+P`
   - Destination: “Save as PDF”
3. Save it as `Jira_RiskRegister.pdf`.

---

## 15) Weekly routine (do this every week, 10–15 minutes)
1. Create this week’s **Status Report** issue.
2. Move tasks across the board honestly (no bulk “Done” on deadline day).
3. Update 1–2 risks.
4. If anything changed: create a **Change** issue.
5. Attach at least one evidence item to a completed issue.

---

## 16) Common mistakes (and how to avoid them)
- **Mistake:** tasks have no acceptance criteria → **Fix:** add AC bullets.
- **Mistake:** tasks closed with no evidence → **Fix:** attach/link proof before “Done”.
- **Mistake:** risks listed once and never updated → **Fix:** update weekly + link mitigation tasks.
- **Mistake:** big vague tasks → **Fix:** split into smaller tasks with measurable outputs.
- **Mistake:** no baseline → **Fix:** create baseline Decision issue + screenshot pack.

---

## 17) Quick checklist (use before submission)
- I have Epics covering the whole project lifecycle.
- I have a Week 3 baseline (screenshots + Decision issue).
- I have a risk register in Jira (issues or labels) and it was updated.
- I have a change log and decision log.
- I have weekly status report issues.
- Closed issues include evidence.
- KPIs exist and are linked to tests/results.

---

## Appendix A — Ready-to-use issue templates

### A1) Risk template
- Hazard / risk:
- Cause:
- Effect:
- Likelihood (1–5):
- Severity (1–5):
- Score (L×S):
- Mitigation:
- Residual risk (new L×S):
- Evidence:

### A2) Change template
- Before → after:
- Why (root cause):
- Impact (time/cost/risk/KPIs):
- Options considered:
- Decision + justification:
- Evidence:

### A3) Weekly status report template
- Week + date:
- Planned:
- Completed (issue keys):
- Evidence added:
- Variance + root cause:
- Risks updated:
- Changes/decisions:
- Next actions:
