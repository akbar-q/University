# DAY 3 TEACHING PLAN (Excessively Detailed)
## Prompting as Engineering (Patterns + Templates + Reliability)

**Audience**: Engineering / STEM students

**Session length**: 60–90 minutes (casual pacing)

**Session goal**: Teach repeatable prompting patterns that produce auditable, verifiable outputs.

---

## Outcomes (Day 3)
Students will be able to:
- Use a structured prompting stack: role → task → context → constraints → output format.
- Apply clarifying-questions-first prompting.
- Use few-shot examples to pin behavior.
- Force verification checklists and structured output.
- Ground answers strictly to provided sources.

---

## Suggested flow (timing)
- 0–10 min: recap Day 2 + why prompts fail
- 10–25 min: prompting stack + “requirements block”
- 25–45 min: patterns (clarify, few-shot, decomposition)
- 45–60 min: structure + grounding + verification
- 60–90 min (optional): lab workshop

---

## 3.1 The Prompting Stack: role → task → context → constraints → output format

**Template (general)**:
- **Role**: “You are a …” (optional, but can help style)
- **Task**: what you want
- **Context**: what the model should use (data, requirements, excerpt)
- **Constraints**: length, tone, accuracy requirements, allowed assumptions
- **Output format**: bullet list, table, JSON, pseudocode, step-by-step

**Key point**: If you don’t specify output format, you will get whatever is statistically common.

---

## 3.2 Prompt pattern: Ask clarifying questions first
Use when requirements are ambiguous.

Prompt:
> Before answering, ask up to 3 clarifying questions. If you must proceed, state assumptions clearly.

Why it works:
- Forces ambiguity handling.
- Reduces “confident wrong” outputs.

---

## 3.3 Prompt pattern: Few-shot examples
You show 1–3 examples of the input/output behavior you want.

**Example (requirements → test cases)**
Instruction:
> Convert requirements into test cases.

Example 1:
Input: “Fan turns on above 30°C.”
Output:
- Given temperature = 31°C, expect fan = ON
- Given temperature = 29°C, expect fan = OFF

Now your actual requirement:
> [insert]

Teaching point:
- Few-shot reduces misinterpretation because it pins the mapping.

---

## 3.4 Prompt pattern: Decompose into subproblems
Prompt:
> Solve in 3 phases: (1) restate problem, (2) derive approach, (3) produce final output.

Why it works:
- Reduces skipped steps.
- Makes it easier to detect mistakes.

---

## 3.5 Prompt pattern: Force a verification checklist
Prompt:
> After producing the answer, include a “Verification” section with at least 5 checks.

Example checks:
- units and dimensional analysis
- boundary conditions
- compare against a known example
- test with synthetic data
- confirm constraints satisfied

---

## 3.6 Prompt pattern: Structured output (tables / JSON)
Use to eliminate ambiguity.

**Example (information extraction)**
Prompt:
> Extract the following fields from the text. Output strict JSON with keys: part_number, max_current_a, max_reverse_voltage_v, notes.
> If a field is missing, set it to null.
> Text: [paste datasheet excerpt]

Teaching point:
- Strict structure is how you turn chat into a reliable pipeline.

---

## 3.7 Prompt pattern: “Grounding” to provided sources only
Prompt:
> Answer using only the provided text. If the answer is not present, say “Not in provided text.”

This is essential for academic work.

---

## 3.8 Lab (optional, 15–30 min): Prompt debugging workshop
Students get a bad prompt such as:
> Explain PID control and give code.

They must rewrite it into a robust engineering prompt including:
- target language (e.g., Python)
- constraints (sampling rate, output limits)
- required format (code + explanation + tests)
- verification (unit tests / sanity checks)
