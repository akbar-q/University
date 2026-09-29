# Week 7 - Safety, Verification and Professional Evidence (3-4h)

---

## Slide 1: Engineering Claims Need Evidence

- "It works" is not a sufficient test result.
- State the test input, expected result, observed result and pass/fail conclusion.
- Link each important requirement to a verification activity.

---

## Slide 2: Learning Objectives

- Build a refined test plan covering all alarm functions.
- Explain basic hardware and software safety controls.
- Define safe responses for incorrect or missing readings.
- Use peer feedback to evaluate a working design.
- Prepare evidence for the LO3 individual video recording.

---

## Slide 3: Safety in a Small Embedded System

| Hazard | Example control |
| --- | --- |
| Reverse polarity | Keyed connector or diode protection |
| Overcurrent | Correctly rated fuse and wiring |
| Floating input | Pull-up/pull-down resistor |
| Noisy supply | Decoupling capacitor and layout care |
| Invalid sensor data | Range check and safe state |
| Software stops responding | Watchdog/timeout strategy |

---

## Slide 4: Safe Behaviour for Sensor Faults

- Detect implausible values and log the event.
- Decide a safe response before implementation.
- For a warning alarm, a safe response may be alarm active plus a fault message.
- For a comfort monitor, it may be a defined degraded mode and local indication.
- Explain why the chosen response suits the application.

---

## Slide 5: Lab L13 - Add a Fault Response (35 min)

**Task:** simulate an invalid or disconnected sensor condition using an agreed test input.

**Requirements:**

- Detect the condition.
- Set a safe, visible state.
- Print a clear diagnostic message.
- Add a test case and result.

Speaker notes:
- In simulation, students may use a forced out-of-range value or a helper function returning an invalid sentinel value.

---

## Slide 6: What a Refined Test Plan Looks Like

| Test ID | Scenario | Procedure | Expected result | Actual result | Pass/Fail |
| --- | --- | --- | --- | --- | --- |
| T7 | 20 switch presses | Press/release at 1 s intervals | One stable response per press | | |
| T8 | LDR near threshold | Sweep light level around threshold | No output chatter | | |

- Include normal, boundary, fault and combined-function tests.

---

## Slide 7: Lab L14 - Full Alarm Acceptance Test (50 min)

Complete at least eight tests:

1. Normal light level.
2. Dark/light alarm condition.
3. Curtain switch condition.
4. LED and buzzer together.
5. LCD status.
6. Near-threshold behaviour.
7. Repeated switch operation.
8. Invalid-sensor/fault response.

**Evidence:** completed results table and one video clip or screenshot of the full system.

---

## Slide 8: Peer Review as Engineering Evidence

- A peer checks the stated requirement against observed behaviour.
- Feedback must be specific: what was observed, under which test, and why it matters.
- The owner records whether they accepted the feedback and what changed.
- Peer review supports the evaluative discussion required for LO3.D3.

---

## Slide 9: LO3 Individual Video Recording

### 5-7 minutes, individual

1. Show the system purpose and block diagram.
2. Explain one input-to-output code path.
3. Demonstrate or show evidence of a test.
4. Explain one bug, diagnosis and fix.
5. Evaluate one limitation and a justified improvement.

- Use code, simulator/hardware, test evidence and peer feedback.

---

## Slide 10: Video Evidence Checklist

- Student visible/audible and identifies their own contribution.
- Code screenshot with explanation in their own words.
- Test plan and at least one completed result.
- Simulator or hardware demonstration evidence.
- Issues-and-fixes table and improvement proposal.
- No unexplained copied code.

---

## Slide 11: Assessment Links

- Code and evidence: **LO3.P4**.
- Initial subset test plan: **LO3.P5**.
- Full refined test plan: **LO3.M4**.
- Working system evaluation with peer evidence in video: **LO3.D3**.

---

## Slide 12: Week 7 Evidence

- L13 and L14 completed.
- Refined test plan/results.
- Risk-control table.
- Peer feedback record.
- Video storyboard and 60-90 second rehearsal clip.
