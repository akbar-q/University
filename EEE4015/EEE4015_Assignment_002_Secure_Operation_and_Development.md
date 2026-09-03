# Assignment Brief: EEE4015 Assessment 002

## Module and Assessment Information

| Item | Details |
| --- | --- |
| Programme | BEng (Hons) Electrical and Electronic Engineering |
| Level | HE4 (Year 1) |
| Module | EEE4015: Introductory Embedded Systems |
| Assessment | 002: Secure Operation, Teamwork, and Development Portfolio |
| Weighting | 50% of the module |
| Learning outcomes assessed | LO3, LO4, and LO5 |
| Module tutor | [To be confirmed] |
| Hand-out date | [To be confirmed] |
| Submission deadline | [To be confirmed] |
| Indicative word count | <mark>**PROVISIONAL: 1,500 words maximum for the group narrative, excluding individual logbooks, figures, tables, captions, references, and appendices. Edit before issue.**</mark> |

## Aim

Building on Assessment 001, improve the automated seedling propagation cabinet controller through proportionate security and resilience measures, full-system testing, and evidence of effective teamwork and personal development.

## Learning Outcomes

- **LO3:** Adopt a holistic and proportionate approach to the mitigation of security risks. (C10)
- **LO4:** Function effectively as an individual, and as a member or leader of a team. (C16)
- **LO5:** Plan and record self-learning and development as the foundation for lifelong learning/CPD. (C18)

## Vocational Context

Use the propagation-cabinet prototype produced for Assessment 001. The controller is a low-cost, locally operated teaching prototype. Security and resilience controls must be realistic and proportionate; the task is not to create a safety-certified or networked industrial product.

Use the board selected in Assessment 001: Arduino Uno R3, ESP32-S1, ESP32-C3, or tutor-approved equivalent. Where the project uses ESP32 wireless capability, the review must address the additional risk of wireless access and configuration. Where the Arduino Uno R3 is used, address physical programming access and configuration protection instead.

## Tasks

### Task 2.1: Security and Resilience Review

Identify realistic risks and show suitable controls. Use a likelihood score from 1 to 5 and an impact score from 1 to 5; calculate the initial and residual ratings as $R = L \times I$. Include:

- Asset list covering controller, configuration values, sensor data, source code, USB/programming access, user controls, and any ESP32 wireless credentials or transmitted data.
- At least five threats, including one sensor/data-validity threat, one physical-access threat, one power/wiring threat, one software/control failure, and, if applicable, one communication threat.
- Risk table: threat, cause, consequence, likelihood, impact, initial rating, mitigation, evidence/design choice, and residual rating.
- At least three implemented or demonstrably specified controls. At least one must be software-based and one must be hardware/procedural. Suitable examples include plausible-range checks, input validation, safe default outputs, watchdog/timer strategy, configuration limits, controlled USB access, labelled wiring, fault indication, or recovery procedure.
- Specific safe-state definition: list the state of each output when an invalid sensor reading, reset, or power recovery occurs. For example, lighting/fan output disabled, alert LED/buzzer enabled, and fault shown on the status interface.
- Fault-response flowchart covering detection, safe state, notification/logging, recovery, retest, and return to normal operation.
- Evaluation of residual risks and of controls that would be required in a real installation but fall outside the prototype scope.

### Task 2.2: Refinement and Full-System Testing

Update the prototype in response to Assessment 001 testing and Task 2.1. Keep a clear change record showing the problem, change made, reason, and retest outcome. Include:

- Updated design evidence where the hardware, software, or operating procedure changed, including a dated version number for the revised code.
- Refined test plan covering every functional requirement, normal and boundary values, manual/test mode, safe simulation of sensor fault/disconnection, program reset, power restart, and safe recovery.
- Results table with test ID, requirement ID, setup/input condition, expected result, observed result, pass/fail decision, evidence reference, and corrective action where needed.
- Demonstration record: annotated photos/screenshots and a one-page operator guide explaining start-up, normal operation, test mode, fault response, and safe shutdown.
- Evaluation against requirements and acceptance criteria, including limitations, unresolved residual risks, and two feasible improvements for a future version.

### Task 2.3: Individual Teamwork and CPD Record

Each student must complete a personal section containing:

- Dated logbook of plans, completed activities, evidence, problems, decisions, feedback received, and next actions.
- Contribution statement identifying personal technical work, such as board configuration, wiring, sensor calibration, code module, test design, debugging, documentation, or user guide, and its value to the team outcome.
- Collaboration evidence, such as meeting notes, task-board extracts, peer review, version history, agreed decisions, or handover notes.
- Reflection on communication, reliability, inclusive participation, task ownership, and how work was organised when a team member needed support or a technical problem delayed the plan.
- CPD reflection identifying two skills developed, evidence of learning, a remaining skills gap, and two SMART next actions with target dates and success measures.

## Milestone Tracker

Set the dates with the module tutor. Shade or tick the agreed task milestone as it is completed.

| Task | Week 1 / Date | Week 2 / Date | Week 3 / Date | Week 4 / Date | Week 5 / Date | Week 6 / Date |
| --- | --- | --- | --- | --- | --- | --- |
| Task 2.1: Security and resilience | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| Task 2.2: Refinement and testing | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| Task 2.3: Teamwork and CPD record | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| Portfolio review and submission | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |

## Deliverables

- **Group technical portfolio:** one PDF or Word document submitted through Moodle/Turnitin in the tutor-directed format.
- **Updated source code:** an `.ino` file or tutor-approved equivalent showing the refinements made for this assessment.
- **Updated design files:** revised circuit/wiring, pin map, flowchart, or other relevant design records, in the format directed by the tutor.
- **Individual teamwork and CPD evidence:** a dated logbook and reflective section from every team member, included in the portfolio appendix or submitted separately if directed by the tutor.

Use filenames such as `EEE4015_A2_TeamName_Portfolio.pdf` and `EEE4015_A2_TeamName_Code.ino`.

## Word Count and Research Expectations

<mark>**PROVISIONAL COURSE-DESIGN TEXT: The group narrative should contain no more than 1,500 words. Individual logbooks and CPD reflections are excluded, as are code, figure/table captions, figures, tables, references, and appendices. Edit or remove this limit before publishing the brief.**</mark>

<mark>**PROVISIONAL COURSE-DESIGN TEXT: Use at least five relevant, credible sources. Cite official documentation for technical controls and selected components, alongside appropriate security, safety, standards, academic, or professional sources. Edit the number and source mix before publishing the brief.**</mark>

## Report Structure

Organise the group technical portfolio in the following order:

1. Cover page with module, assessment, project title, student names/numbers, tutor, and submission date.
2. Updated team contribution statement.
3. Task 2.1: Security and resilience review.
4. Task 2.2: Refinement and full-system testing.
5. Task 2.3: Individual teamwork and CPD records.
6. Group conclusion.
7. Reference list.
8. Appendices: risk matrix, fault-response flowchart, updated design evidence, refined test records, demonstration record, code extracts, and individual logbooks.

## Marking Scheme

| Criterion | Marks |
| --- | ---: |
| Security/resilience risk identification and evaluation | 20 |
| Appropriate controls and safe fault-response strategy | 20 |
| Refined design, comprehensive testing, and evidence | 20 |
| Evaluation of requirements, limitations, and improvement | 10 |
| Individual contribution and effective team-working evidence | 15 |
| Individual CPD reflection and development plan | 10 |
| Portfolio presentation and referencing | 5 |
| **Total** | **100** |

## Presentation, Referencing, and Academic Integrity

- Follow current University of Greater Manchester written-assessment guidance and module-tutor formatting instructions.
- Use numbered headings, legible diagrams, correctly labelled units, and University Harvard referencing.
- Cite sources for technical, security, and safety claims; cite official data sheets for component specifications.
- All work must be the students' own. Acknowledge sources, collaboration, code libraries, software, and tools used.
- The module specification does not state a specific generative-AI category; follow current University policy and module-tutor instructions on tool use and declarations.

## Starting Sources

- Bayle, J. (2013) *C Programming for Arduino*. Packt Publishing.
- Marwedel, P. (2022) *Embedded System Design: Embedded Systems Foundations of Cyber-Physical Systems, and the Internet of Things*. 4th edn. Springer.
- Monk, S. (2023) *Programming Arduino: Getting Started with Sketches*. 3rd edn. McGraw-Hill.
- Official technical documentation for the selected controller, sensor, and interface devices.

## Indicative Grade Standard

Work at 70% and above demonstrates proportionate security judgement, complete and well-evidenced testing, thoughtful evaluation, effective collaboration, and a reflective CPD record. Work at 50-69% meets requirements with sound security and testing evidence but less depth. Work at 40-49% shows essential achievement with incomplete analysis or limited reflection. Work below 40% does not adequately meet the learning outcomes or provide credible evidence of individual contribution.