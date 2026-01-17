# APPENDIX (Excessively Detailed)
## Prompt Templates and Failure Modes (Engineering Cheat Sheet)

Use this appendix as a reusable reference across all days.

---

## A. READY-TO-USE PROMPT TEMPLATES

### A1: “Reliable summary” template
> Task: Summarize the provided text.
> Constraints: 120–150 words. No new facts. Preserve numbers.
> Output: (1) Summary paragraph, (2) 5 key points, (3) What is uncertain.
> Source text:
> [paste]

### A2: “Engineering decision” template
> Decide between options A and B using the criteria below.
> Use a weighted decision matrix.
> Criteria (weight): cost(0.2), performance(0.4), safety(0.3), integration(0.1).
> Provide: matrix table + recommendation + sensitivity analysis.
> Data:
> [paste]

### A3: “Strict JSON extraction” template
> Extract fields into strict JSON. Keys: [...].
> If missing: null. No extra keys.
> Text:
> [paste]

### A4: “Verification-first” template
> Produce an answer, then produce a verification plan with at least 7 checks.

---

## B. COMMON FAILURE MODES + FIXES

- **Vague prompt → vague answer**
  - Fix: add constraints + output format
- **Invented facts/citations**
  - Fix: restrict to provided sources; require “not in text” behavior
- **Wrong units**
  - Fix: demand unit checks + show steps
- **Missed requirements**
  - Fix: require requirement list + trace each to output section
- **Overconfident tone**
  - Fix: require uncertainty + assumptions + verification

---

## C. OPTIONAL EXTENSION TOPIC (if you want a future Day 5)

### Tool-augmented workflows (RAG, embeddings, and automation)
- What embeddings are (vector meaning representations)
- Why retrieval reduces hallucinations
- How to structure notes so AI can search them
- Simple pipeline: chunk → embed → retrieve → answer with citations
