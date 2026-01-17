# DAY 1 TEACHING PLAN (Excessively Detailed)
## AI Models: What They Are Doing (Tokens → Next-Token Prediction → Output)

**Audience**: Engineering / STEM students

**Session length**: 60–90 minutes (casual pacing)

**Session goal**: Demystify LLMs and build a practical “block diagram” mental model.

---

## Outcomes (Day 1)
Students will be able to:
- Define **token**, **context window**, and **inference**.
- Explain (conceptually) how next-token prediction produces text.
- Describe at a high level what a transformer does (attention + layers) and why that matters.
- Name at least 3 strengths and 3 limitations of LLMs.

---

## Suggested flow (timing)
- 0–10 min: Orientation + “what the model is / isn’t”
- 10–25 min: Tokens + inference loop
- 25–45 min: Transformer concept (attention) + implications
- 45–60 min: Strengths/limits + practical rules of thumb
- 60–90 min (optional): micro-demos + short exercise + discussion

---

## 1.1 Big picture: An LLM is a “next token” predictor
**Core claim**: The model does not “look up truth.” It predicts what text is likely next, given the prior text.

**Key definitions**:
- **Token**: a chunk of text (may be a word, part of a word, punctuation, whitespace).
- **Context window**: the maximum amount of prior text the model can use at once.
- **Inference**: running the trained model to generate output.

**Mental model (block diagram)**:
1. Input text → tokenization → token IDs
2. Token IDs → embeddings (vectors)
3. Transformer layers (attention + feedforward) produce hidden states
4. Output layer produces probabilities for the next token
5. Sampling/decoding picks a token
6. Repeat until stop condition

**Important implication**:
- The output is *probabilistic* and *context-dependent*. Two runs can differ.

---

## 1.2 Tokens, probability, and why “temperature” matters
**Key concept**: The model outputs a probability distribution $P(\text{next token} \mid \text{context})$.

**Decoding controls** (high-level):
- **Greedy decoding**: always pick highest probability next token.
  - Pros: consistent
  - Cons: can be repetitive or get stuck
- **Temperature ($T$)**: flattens or sharpens probabilities.
  - Lower $T$ → more deterministic
  - Higher $T$ → more diverse but more error-prone
- **Top-p / nucleus sampling**: restrict choices to the smallest set of tokens whose cumulative probability ≥ p.

**Teaching point**: If you want reliability, you generally lower randomness and add verification.

---

## 1.3 Transformer architecture (conceptual, not math-heavy)
**What students must understand**:
- The transformer processes the entire input context using **attention**.
- Attention lets the model weigh which previous tokens matter for the next token.

**Simplified components**:
- **Embedding layer**: turns tokens into vectors.
- **Positional information**: lets the model represent order.
- **Attention**: computes relevance of each token to others.
- **Feedforward networks**: transform representations.
- **Layers**: repeated blocks deepen capability.

**Engineering analogy**:
- Attention is like an adaptive “signal routing” mechanism across the text.

**Important limitation**:
- The model does not have a persistent “memory” outside the context window unless you provide it (or use external tools).

---

## 1.4 What LLMs are good at vs bad at
**Strong at**:
- drafting text
- explaining concepts at different levels
- summarizing provided material
- generating examples, checklists, test plans
- translating between formats (bullet list ↔ narrative ↔ table)
- pattern completion (including code patterns)

**Weak at**:
- factual recall without sources (can hallucinate)
- precise arithmetic (can make small errors)
- strict compliance to complex constraints unless you enforce format
- long multi-step tasks without checkpoints

**Engineering takeaway**:
- Use the model as a *co-pilot*, not an oracle.

---

## 1.5 Micro-demos (optional, in-class)

**Demo A: Same prompt, different outputs**
Prompt:
> Explain Ohm’s law in 3 sentences.

Repeat with different settings (if available). Discuss variability.

**Demo B: Context changes behavior**
Prompt 1:
> Summarize this paragraph: [insert paragraph]
Prompt 2:
> Summarize this paragraph for a 10-year-old: [same paragraph]

Discuss how “audience constraint” steers output.

---

## 1.6 Day 1 exercise (10–20 min)
Students produce:
1. A 5-bullet explanation of “what an LLM is” for a non-technical audience.
2. A 10-bullet explanation for an engineering audience.
3. A short note on one limitation and one mitigation strategy.

**Assessment criteria (lightweight)**:
- correctness of the basic mechanism
- clarity
- identifies at least one realistic failure mode
