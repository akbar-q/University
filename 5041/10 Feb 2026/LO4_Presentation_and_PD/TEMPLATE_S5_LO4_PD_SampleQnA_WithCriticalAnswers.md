# S5 — LO4 Professional Discussion (PD)
## Sample Q&A with Detailed, Critical Answers

\[This is a *model* document to show what strong answers look like. Students should not memorise it word-for-word.\]

Context assumed for examples:
- Project: individual engineering project (hardware or MATLAB)
- Key KPIs: response time/accuracy/robustness (example)
- Constraints: safety policy; time constraints; tool availability

---

## How to use this document
- For each question:
  - Read the sample answer structure
  - Replace the example details with your own evidence (Jira issues, logs, tests)
  - Ensure you include a trade-off + limitation + mitigation where relevant

---

## Q1) “What was your role and what did you deliver?” (Pass baseline)
### Strong answer (example)
“I delivered the core implementation of my project: \[e.g., a control algorithm and a validation script / a sensor acquisition module and a fault handler\]. I also defined the test/validation method and captured results in \[plots/logs/results tables\]. My contribution is evidenced by Jira issues \[keys\], versioned code/model exports \[where\], and test evidence \[test IDs + evidence refs\].”

### Why this is strong
- Specific deliverables (not vague)
- Mentions evidence sources

Follow-up-ready evidence list:
- Jira issue keys: \[e.g., 5041-12, 5041-18\]
- Evidence: \[serial log file name, screenshot, video timestamp\]

---

## Q2) “Explain the system end-to-end.” (Pass)
### Strong answer (example)
“Inputs include \[water level\] and \[temperature simulated\]. The controller runs a state machine: Idle → Ready → Brewing → Complete, with Fault overriding any state. In Brewing, the controller energises the pump output through a MOSFET driver while sampling sensors at \[rate\]. If LowWater occurs, it immediately transitions to Fault, de-energises the pump, logs the event with a timestamp, and requires Reset only when safe conditions are true. The UI reads the serial log messages and displays state/fault codes.”

### Critical add-on (Merit/Distinction flavour)
“A limitation is that serial logs are only as accurate as `millis()` timing; to reduce ambiguity we logged both event time and state transition time and repeated the test across n=5 trials to avoid cherry-picking.”

---

## Q3) “Which KPI mattered most and how did you measure it?” (Pass → Merit)
### Strong answer (example)
“The most safety-critical KPI was fault response time: entering Fault and turning outputs OFF within \[target\] after detecting LowWater. We measured it using timestamped serial logs: the detection event and the state transition were both logged, then we computed the time difference across n=5 trials. The mean was \[value\] ms and max was \[value\] ms, which \[met/did not meet\] the target.”

### Critical depth (Distinction)
“The KPI target was chosen because a longer delay increases the chance of dry-running the pump and overheating. If we were to improve this further, we would move the safety-critical checks to a higher-priority loop and reduce debounce latency, then re-run the same test to show the improvement is real rather than assumed.”

---

## Q4) “Give an example of feedback you received and what you changed.” (Merit)
### Strong answer (example)
“Feedback from the Week \[x\] demo/review was that \[a result/plot/behaviour\] was unclear and the system did not distinguish between \[two cases\]. I responded by standardising the output format and adding \[a clearer metric/log field/plot annotation\]. The change is recorded as a Jira Decision \[ID\] and implemented in \[issue key\]. I verified it by re-running the same test/validation cases and showing the outputs are now unambiguous.”

### Critical add-on
“A trade-off was extra protocol complexity; to manage this we kept the protocol key-value and newline-delimited so parsing remained simple and robust.”

---

## Q5) “Describe a real technical issue you hit and how you solved it.” (Merit)
### Strong answer (example)
“We had intermittent resets when the pump switched on. Root cause analysis suggested supply dip / ground bounce: the ESP32 shared ground with the high-current load and the supply was marginal. We tested this by logging resets and measuring voltage dip \[if measured\]. We fixed it by separating load supply wiring, improving decoupling, and ensuring the driver stage had proper flyback protection. Evidence is the before/after reset frequency and the stable operation during a 10-cycle run.”

### Critical add-on
“A limitation is that we did not have a scope in every session, so we triangulated using repeated trial runs and power supply current readings. If repeated in industry, I would confirm with an oscilloscope capture to quantify the transient.”

---

## Q6) “What was your biggest trade-off and why?” (Distinction probe)
### Strong answer (example)
“The biggest trade-off was simulating the heater rather than controlling a real heating element. The alternative would have increased realism but introduced unacceptable safety and policy risk (mains voltage / burn hazard) within the time constraints. We mitigated the realism gap by implementing the same control logic and fault conditions using a simulated temperature input, then validating timing and state behaviour with tests. This preserved safety while still demonstrating control, fault handling, and verification.”

What makes it Distinction-level:
- Considers alternatives
- Justifies decision using constraints and risk
- Provides mitigation plan and evidence approach

---

## Q7) “Critically evaluate outcomes vs the original plan and objectives.” (Distinction)
### Strong answer (example)
“Against the original plan, I achieved \[X/Y\] KPIs and delivered \[the demo/results\] on \[date\], but I missed \[one KPI\] due to \[root cause\]. The variance was caused by \[dependency or technical limitation\]. I responded by \[change in plan\] and recorded it as a Jira Change \[ID\]. In hindsight, I should have \[re-sequenced work earlier / built the test harness sooner / ordered parts earlier\] to reduce blocking and improve evidence quality. Evidence for this is the Jira timeline showing blocked work and the change log showing the mitigation.”

### Improvement recommendations (minimum 3) (Distinction)
1) Technical: \[e.g., add hardware current sensing\] → improves safety KPI.
2) Testing/quality: \[automated log parsing + test harness\] → improves measurement repeatability.
3) Process: \[earlier baseline + early test harness + staged integration\] → reduces dependency risk.

---

## Q8) “If you had 2 more weeks, what would you do and why?” (Distinction)
### Strong answer (example)
“I would prioritise improvements with measurable impact: (1) strengthen safety verification by adding additional fault injection tests and documenting residual risk changes; (2) improve robustness by decoupling supplies and adding protective components; (3) improve maintainability by standardising logs and adding a calibration routine. I would justify each by linking to the KPI it improves and the evidence I would collect.”

---

## Quick checklist for critical answers
A critical answer usually contains:
- what happened (fact)
- why it happened (analysis)
- what you did (action)
- what the evidence shows (proof)
- what you’d improve next (justified recommendation)
