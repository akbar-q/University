# DAY 2 TEACHING PLAN (Excessively Detailed)
## Why Models Behave the Way They Do (Training + Alignment + Hallucinations)

**Audience**: Engineering / STEM students

**Session length**: 60–90 minutes (casual pacing)

**Session goal**: Explain how training stages shape behavior and teach a practical approach to hallucinations.

---

## Outcomes (Day 2)
Students will be able to:
- Distinguish **pretraining**, **instruction tuning**, **fine-tuning**, and **alignment**.
- Define **hallucination** and name common causes.
- Apply at least 5 mitigation strategies (grounding, assumptions, verification, structure).
- Explain why long chats degrade (context window limits).

---

## Suggested flow (timing)
- 0–10 min: recap + framing: “why it sounds confident”
- 10–30 min: training stages (pretraining → instruction → fine-tuning)
- 30–45 min: alignment and behavior shaping
- 45–60 min: hallucinations + mitigations (engineering checklist)
- 60–90 min (optional): spotting/repair exercise

---

## 2.1 Pretraining vs instruction tuning vs fine-tuning

**Pretraining**:
- Objective: predict next token over massive text corpora.
- Result: broad language competence, pattern learning.

**Instruction tuning**:
- Train on (instruction, response) pairs.
- Result: follows requests more reliably.

**Fine-tuning** (domain-specific):
- Train further on specialized data (e.g., HVAC specs, PLC code patterns).
- Result: improved domain style and vocabulary; may risk overfitting.

**Alignment (RLHF/RLAIF)**:
- Uses preference signals (human or AI feedback) to push outputs toward helpfulness and away from harmful/undesired behavior.
- Result: more polite, safer responses, sometimes overly cautious.

**Key teaching point**:
- “How you trained it” shapes the personality and reliability of the model.

---

## 2.2 Hallucinations: what they are and why they happen

**Definition**:
- A hallucination is when the model produces text that is plausible but not grounded in the provided data or reality.

**Mechanism (conceptual)**:
- The model’s job is to output likely text, not verified truth.
- If context is missing, it fills gaps with statistically plausible completions.

**Risk factors**:
- asking for precise facts without giving sources
- asking for citations the model cannot access
- high temperature / high creativity requests
- ambiguous prompts

**Mitigations**:
- provide the source material in the prompt
- ask for assumptions explicitly
- ask for uncertainty reporting
- demand a verification checklist
- keep outputs in structured formats

---

## 2.3 Calibration and confidence
**Problem**: Models often produce confident tone regardless of truth.

**Teach students to require**:
- “Assumptions” section
- “What I’m not sure about” section
- “How to verify” section

**Engineering analogy**:
- A sensor that always outputs a value even when out of range.

---

## 2.4 Context window, attention, and why long chats degrade

**Reality**:
- The model can only condition on what fits in the context window.

**Failure mode**:
- Important earlier constraints “fall out” or get diluted.

**Mitigation**:
- restate constraints
- keep a “requirements block” at the top of your prompt
- summarize and pin decisions

---

## 2.5 Exercise (optional, 15–30 min): hallucination spotting + repair
Provide students a deliberately flawed AI output (or generate one), e.g.:
- wrong unit conversion
- incorrect formula application
- invented citation

Students must:
1. Identify each error
2. Write a corrected prompt that would likely prevent it
3. Propose a verification procedure (e.g., sanity checks)
