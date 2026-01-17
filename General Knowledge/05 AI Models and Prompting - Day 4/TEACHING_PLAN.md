# DAY 4 TEACHING PLAN (Excessively Detailed)
## Applied AI for Engineering Workflows (Examples + Verification)

**Audience**: Engineering / STEM students

**Session length**: 60–90 minutes (casual pacing)

**Session goal**: Apply prompting patterns to common engineering tasks with verification-first discipline.

---

## Outcomes (Day 4)
Students will be able to:
- Use AI to assist (not replace) literature synthesis, calculations, coding, debugging, and documentation.
- Add verification sections that catch common failure modes.
- Produce outputs that are auditable: assumptions, constraints, and “how to verify.”

---

## Suggested flow (timing)
- 0–10 min: recap Day 3 patterns + “verification-first” rule
- 10–25 min: literature workflow (grounded to sources)
- 25–45 min: calculations workflow (unit checks)
- 45–65 min: coding/debugging workflow (tests + minimal reproduction)
- 65–90 min (optional): mini-assessment / portfolio start

---

## 4.1 Use case: Literature review assistant (with source discipline)

**Good prompt (template)**:
> You are assisting with a literature review. Use only the provided abstracts. Produce:
> 1) a 150-word synthesis,
> 2) a table of claims vs evidence,
> 3) 5 research questions.
> If a claim is not supported by the abstracts, mark it as “unsupported.”

Teaching point:
- Students learn not to “invent citations.”

---

## 4.2 Use case: Calculation assistant (with unit checks)

**Example (engineering math)**
Prompt:
> Compute the resistor needed for an LED circuit. Provide:
> - formula used
> - numeric steps
> - unit check
> - final answer rounded to E12 series
> Given: Vs=5V, Vf=2.1V, If=15mA.

Verification strategy:
- sanity check current with chosen resistor

---

## 4.3 Use case: Coding assistant (with tests)

Prompt:
> Write a Python function that parses a CSV log of temperature readings and returns the rolling average (window=10). Provide:
> - code
> - at least 3 unit tests
> - complexity notes
> - edge cases

Teaching point:
- The model is useful, but tests are how you verify.

---

## 4.4 Use case: Debugging assistant (minimal reproduction)

Prompt:
> I will paste code and an error. First:
> 1) restate what the code is trying to do,
> 2) list possible causes,
> 3) propose a minimal reproduction,
> 4) suggest fixes in order of likelihood.

---

## 4.5 Use case: Documentation / report drafting

Prompt:
> Turn these bullet notes into a lab report section. Requirements:
> - academic tone
> - keep all numbers unchanged
> - add a limitations paragraph
> - add a verification paragraph
> Notes: [paste]

---

## 4.6 Mini-assessment (optional)

**Option A: Prompt portfolio starter**
Students draft 4 prompts (you can add more later):
- summarization grounded to text
- extraction (JSON)
- calculation with verification
- code generation with tests

**Option B: Mini case study**
Students pick a small mechatronics mini-problem and show:
- requirements
- prompts used
- outputs
- verification + corrections
