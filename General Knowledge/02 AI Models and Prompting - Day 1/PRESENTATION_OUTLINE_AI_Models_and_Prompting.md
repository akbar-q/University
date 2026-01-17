# PRESENTATION OUTLINE (Excessively Detailed)
## AI Models + Prompting: How They Work, How to Use Them, and How to Get Reliable Outputs

**Audience**: Engineering / STEM students

**Format**: 4 casual sessions (Day 1–Day 4). Each session targets **60–90 minutes**.

**Teaching style**: Engineer’s mental model; verification-first; structured prompting.

**Companion files**:
- Day 1: `../02 AI Models and Prompting - Day 1/TEACHING_PLAN.md`
- Day 2: `../03 AI Models and Prompting - Day 2/TEACHING_PLAN.md`
- Day 3: `../04 AI Models and Prompting - Day 3/TEACHING_PLAN.md`
- Day 4: `../05 AI Models and Prompting - Day 4/TEACHING_PLAN.md`
- Appendix: `../02 AI Models and Prompting - Day 1/Appendix - Prompt Templates and Failure Modes.md`

---

# SESSION 1 (Day 1) — WHAT AI MODELS ARE DOING (60–90 min)

## Slide 1 — Title (0–2 min)
**Title**: AI Models + Prompting (Engineering View)
**Subtitle**: Mechanics, Failure Modes, and How to Use Them Reliably

**Speaker notes**:
- Set expectation: this is not hype, it’s systems thinking.

---

## Slide 2 — Learning outcomes (2–5 min)
**Key bullets**:
- Define tokens and context window
- Explain next-token prediction
- Understand why outputs vary

---

## Slide 3 — The one-sentence definition (5–10 min)
**Key bullets**:
- An LLM predicts the next token given previous tokens

---

## Slide 4 — Tokens (10–20 min)
**Key bullets**:
- Tokens are chunks of text
- Tokenization differs by model

---

## Slide 5 — The inference loop (20–30 min)
**Key bullets**:
1. Read context
2. Produce probability distribution
3. Choose a token
4. Append to context
5. Repeat

---

## Slide 6 — Why outputs vary (30–40 min)
**Key bullets**:
- Sampling introduces randomness
- Temperature/top-p change diversity

---

## Slide 7 — Transformer (conceptual) (40–55 min)
**Key bullets**:
- Embeddings
- Attention
- Layers

---

## Slide 8 — Good at / bad at (55–65 min)
**Key bullets**:
- Good: drafting, summarizing provided text, formatting, brainstorming
- Bad: guaranteed factual recall, perfect arithmetic, long constraint tracking

---

## Slide 9 — Optional demo + discussion (65–90 min)
**Key bullets**:
- Run prompt twice
- Compare differences

---

# SESSION 2 (Day 2) — TRAINING, ALIGNMENT, AND HALLUCINATIONS (60–90 min)

## Slide 1 — Title
**Title**: Why Models Behave This Way

## Slide 2 — Training stages
**Key bullets**:
- Pretraining
- Instruction tuning
- Fine-tuning
- Alignment

## Slide 3 — Hallucinations
**Key bullets**:
- Plausible text without grounding
- Risk factors
- Mitigations

## Slide 4 — Exercise (optional)
**Key bullets**:
- Identify errors in a sample AI answer
- Rewrite prompt to prevent them

---

# SESSION 3 (Day 3) — PROMPTING PATTERNS (60–90 min)

## Slide 1 — Title
**Title**: Prompting as Interface Design

## Slide 2 — The prompting stack
**Key bullets**:
- Role → Task → Context → Constraints → Output format

## Slide 3 — Patterns
**Key bullets**:
- Clarifying questions first
- Few-shot examples
- Decomposition

## Slide 4 — Reliability tools
**Key bullets**:
- Structured output (JSON/tables)
- Grounding to sources
- Verification checklists

---

# SESSION 4 (Day 4) — APPLIED WORKFLOWS (60–90 min)

## Slide 1 — Title
**Title**: Using AI in Real Engineering Work

## Slide 2 — Literature synthesis
## Slide 3 — Calculations + unit checks
## Slide 4 — Coding + tests
## Slide 5 — Debugging + minimal reproduction
## Slide 6 — Documentation with limitations + verification

---

# END OF OUTLINE
