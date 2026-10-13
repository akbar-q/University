# Week 1 PPT Outline: Investigating the MedPack Application

**Unit/LO:** 5009, LO1  
**Focus:** Investigate the key characteristics of the given industrial application  
**Criterion:** LO1.P1  
**Duration:** 3 hours 30 minutes (210 minutes, including a 10-minute break)  
**Scenario:** MedPack pill-counting and blister-packaging station

## Session outcomes

Students will map the process, identify field devices and signals, distinguish stated facts from assumptions, and produce a first-pass application-requirements and I/O schedule. The aim is application investigation, not PLC brand selection yet.

## Resources

Assignment brief, LO1 marking scheme, station/process image, sticky notes or shared whiteboard, draft I/O table, risk/constraint worksheet, and a blank block-diagram template.

## Run sheet

| Time | Slides | Segment | Duration |
|---|---:|---|---:|
| 00:00-00:15 | 1-3 | Hook, scenario, outcomes | 15 min |
| 00:15-01:05 | 4-7 | Investigate process and requirements | 50 min |
| 01:05-01:40 | 8-10 | Devices, constraints, safety | 35 min |
| 01:40-01:50 | - | Break | 10 min |
| 01:50-02:35 | 11-14 | Build the application evidence | 45 min |
| 02:35-03:15 | 15-16 | Group application review | 40 min |
| 03:15-03:30 | 17-18 | Check learning and exit evidence | 15 min |
| **Total** | **18 slides** |  | **210 min** |

## Slide-by-slide outline

### Opening | 00:00-00:15

**1. What can go wrong in a pill-counting station? (5 min)**
- A missed sensor pulse can leave the pack short; a duplicate pulse can over-count; an actuator firing at the wrong time can damage a pack or expose a hazard.
- Trace one example: a pill passes the sensor but no count is registered, so the target comparison and completion signal may both be wrong.
- Quick think-pair-share: classify each outcome as product-quality, production, or personnel risk; several events can affect more than one category.
- Debrief: students should describe observable consequences, not jump straight to a PLC brand or assume the fault response.
**Image prompt:** Original close-up technical illustration of pills passing a photoelectric sensor above a blister-pack conveyor, with a separate actuator and buzzer in view, one pill visibly missed by the sensor, no text, labels, numbers, or logos.

**2. MedPack assignment scenario (5 min)**
- The brief identifies an operator Start/Reset, emergency stop, pill sensor, actuator, buzzer, and a target count; treat these as the initial application facts.
- Model the core purpose as sensing pill events, comparing the count with the target, and coordinating packaging and completion/error indication; confirm exact sequencing with the brief or assessor.
- Sort sample claims: “pill sensor is present” is stated; “sensor is 24 V DC” and “actuator fires once per pack” are unverified until documented.
- Debrief: a good investigation keeps facts, derived needs, and open questions visibly separate.
**Image prompt:** Original isometric technical illustration of a compact pill-counting and blister-packaging station showing operator buttons, pill sensor, guarded actuator, buzzer, and control panel, with no text, labels, numbers, or logos.

**3. LO1.P1: what counts as investigating an application? (5 min)**
- LO1.P1 asks for evidence about this application: its process cycle, inputs/outputs, performance needs, operating environment, safety/reliability, maintenance, and interfaces.
- A generic statement such as “PLCs control machines” is not application evidence; “the pill sensor must register each pill event before the target decision” is linked to MedPack.
- Point to the evidence trail: process/state diagram, requirements table, I/O schedule, and constraint/risk list together make the investigation checkable.
- Expected answer: explain what happens at the station and what must be verified, rather than selecting a controller before requirements are known.
**Image prompt:** Original technical infographic-style illustration with a MedPack station at the centre and seven distinct surrounding visual elements for process, signals, performance, environment, safety, maintenance, and interfaces, no text, labels, numbers, or logos.

### Process and requirements | 00:15-01:05

**4. Define the system boundary and stakeholders (12 min)**
- Draw the boundary around the pill sensor, controller panel, actuator, buzzer, and operator controls; show upstream pill feed and downstream pack handling as interfaces until the brief confirms ownership.
- Label an interface by what crosses it: pills/packaging are physical, sensor and actuator wiring is electrical, count/status exchange is data if specified, and reset approval is procedural.
- Pair activity: assign target-count and quality-tolerance approval to the production/quality owner, while maintenance confirms service access and the assessor/client confirms unspecified behaviour.
- Debrief with the boundary test: if removing an external item changes the station’s required behaviour, record it as an interface or dependency rather than silently omitting it.
**Image prompt:** Original engineering block-diagram illustration of a pill packaging cell bounded by a clear enclosure outline, with operator, upstream feeder, downstream packaging, maintenance access, and control panel represented by distinct icons, no text, labels, numbers, or logos.

**5. Draw the normal operating cycle (13 min)**
- Teach a draft state model: Ready -> Counting -> Target reached -> Packaging/confirmation -> Complete; include Fault as a separate path and confirm whether reset is needed between packs.
- Worked example: if the target is an illustrative 20 pills, the count advances only on a validated sensor event; at 20, the controller requests the specified packaging action, not an assumed one.
- For each transition, annotate trigger, state change, output, and any agreed timeout; distinguish “actuator command issued” from “packaging action confirmed” if feedback exists.
- Expected diagram: arrows show sensor/start conditions and outputs; students flag whether actuation is per pill or per completed count as an unresolved requirement.
**Image prompt:** Original clean state-machine-inspired technical illustration showing a pill-counting sequence from ready through sensing, target reached, packaging, completion, and a separate fault return path, using shapes and arrows only with no text, labels, numbers, or logos.

**6. Add abnormal and recovery paths (12 min)**
- For each fault, identify detection and consequence: stuck-high sensor may create repeated counts, stuck-low may hide pills, and absent actuator feedback matters only if that feedback device is confirmed.
- Scenario: an E-stop is pressed during counting; the safety design must bring hazardous motion to its risk-assessed state, while count retention and pack disposition require a defined procedure.
- Activity: teams propose a safe response, operator indication, and recovery condition for sensor timeout, power loss, or E-stop; do not invent automatic restart behaviour.
- Debrief: restart should require the safety condition to be restored and a deliberate reset under the validated procedure; reset alone must not initiate motion.
**Image prompt:** Original technical illustration of a guarded pill packaging cell paused safely after an emergency stop, with an operator inspecting a sensor fault and a separate reset control, no text, labels, numbers, or logos.

**7. Convert needs into testable requirements (13 min)**
- Functional requirements state what the system does; performance requirements quantify speed/accuracy; operational requirements cover environment, availability, maintenance, and recovery.
- Rewrite “count accurately” as: register one valid event per passing pill over the agreed speed range, meet the approved count tolerance, and demonstrate it with a defined test method.
- Worked row: “Pill sensor count” | acceptance: pulse width/event rate and allowed count error to be confirmed | source: sensor/brief/quality owner | priority: mandatory | open question: how will missed or double counts be detected?
- Expected answer: a requirement is testable only when its threshold, conditions, and verification method are agreed; do not make up a tolerance.
**Image prompt:** Original engineering worksheet scene beside a pill sensor and counter, with visual columns represented by blank boxes and a test setup checking individual pill events, no readable text, labels, numbers, or logos.

### Devices, constraints, safety | 01:05-01:40

**8. Identify external input and output devices (10 min)**
- Candidate inputs are Start, Reset, pill-sensor events, and safety-system status feedback; candidate outputs are the actuator command and buzzer, with lamps or feedback devices included only if specified.
- A digital signal represents discrete states/events; an analogue signal represents a varying measured value. The stated pill-counting function is event-based, so an analogue channel is not automatically needed.
- Map device -> signal -> controller terminal type, and mark voltage, polarity, normal state, pulse width, and rate as “to verify” until the actual device documentation is available.
- Misconception check: 24 V DC is common in control panels, not a confirmed MedPack rating; E-stop status into a standard PLC is monitoring, not the safety function.
**Image prompt:** Original wiring-concept illustration of a pill sensor and Start/Reset buttons entering a PLC input section, with an actuator and buzzer on outputs and a separate safety circuit boundary, no text, labels, numbers, or logos.

**9. Environment and operating conditions (15 min)**
- Check panel location and space, ambient temperature, vibration, electromagnetic interference, cable route/length, cleaning or moisture exposure, access for service, and required production availability.
- Sorting activity: classify “motor cables share a tray with sensor wiring” as a site fact only if observed; otherwise it is a question. Classify “EMI can disturb signals” as engineering knowledge, not proof of a MedPack fault.
- For each condition, record the evidence source and consequence: noisy routing may require separation/shielding practices; heat may affect component ratings and derating.
- Debrief: cleanroom, washdown, hazardous-area, or pharmaceutical validation requirements are not assumed; obtain the applicable site specification.
**Image prompt:** Original realistic engineering photograph-style view inside a compact industrial control panel beside a pill packaging line, showing segregated power and sensor cable routes and accessible service space, no text, labels, numbers, or logos.

**10. Safety and reliability are design inputs (10 min)**
- Start a hazard record with hazard, initiating event, harm, required safe state, detection, recovery, and owner; assess access to the actuator and moving packaging mechanism.
- An E-stop is a safety function designed from risk assessment; a suitable safety relay or safety-rated controller may implement it, while an ordinary PLC input can at most provide status monitoring.
- Reliability is application availability plus controlled failure/recovery: sensor diagnostics, fault indication, spare/replacement strategy, and documented reset behaviour are evidence to investigate.
- Expected response: identify standards and legal requirements for the actual machine and jurisdiction with the assessor/site; a PLC datasheet alone does not prove machine safety compliance.
**Image prompt:** Original safety engineering illustration of a guarded blister-packaging actuator, emergency-stop button, independent safety relay/controller path, and standard PLC monitoring path shown separately, no text, labels, numbers, or logos.

### Break | 01:40-01:50

### Build the application evidence | 01:50-02:35

**11. Draft I/O schedule: inputs (10 min)**
- Use columns for tag, device, DI/AI, signal/range, normal state, pulse/event rate, failure consequence, source, and compatibility question.
- Example entries: Start and Reset are candidate digital inputs; the pill sensor is a digital event input whose pulse width/rate may require high-speed capture; safety-system feedback is monitoring only.
- Mark every assumed extra input, such as actuator-position feedback, as “confirm device exists”; do not convert a useful idea into a claimed brief requirement.
- Debrief: leave electrical levels blank or “unknown” until the sensor/button datasheet and safety interface documentation are checked.
**Image prompt:** Original close-up of an engineering notebook with a blank I/O schedule beside a pill sensor, pushbuttons, and PLC input terminals, using empty cells rather than writing, no text, labels, numbers, or logos.

**12. Draft I/O schedule: outputs and loads (15 min)**
- Record the actuator command and buzzer as candidate outputs; for each load capture AC/DC supply, steady and inrush current, switching frequency, load type, and required interface from its documentation.
- A PLC output is a switching channel, not automatically a load supply: an interposing relay, contactor, transistor driver, or protected interface may be required after compatibility review.
- Worked question: if a hypothetical actuator coil draws more at energisation than its steady current, which rating and inductive-load guidance must be checked before choosing a relay output?
- Expected answer: flag unknown ratings, suppression, per-channel/group limits, and safe de-energised behaviour; never approve a load based on output label alone.
**Image prompt:** Original technical cutaway illustration tracing a PLC output through an appropriately sized interface device to a guarded packaging actuator and buzzer, with separate supply paths and no text, labels, numbers, or logos.

**13. Prioritise requirements and open questions (10 min)**
- Sort needs into mandatory gates, desirable preferences, and unresolved questions; safety, required pulse capture, and electrical compatibility are potential gates, not weighted preferences.
- MedPack examples: sensor event rate and actuator load ratings could disqualify a candidate; spare I/O may be desirable unless future expansion is specified as mandatory.
- Team activity: rank three unknowns by consequence and name an owner/source for each, such as sensor datasheet, site panel drawing, or quality-approved target tolerance.
- Debrief: unknown is an honest evidence status, not a pass; carry high-impact unknowns forward to Week 2 comparisons.
**Image prompt:** Original engineering decision board with three visual zones for hard requirements, preferences, and open questions, surrounded by a PLC, sensor, actuator, and safety device, no text, labels, numbers, or logos.

**14. Sketch the station block diagram (10 min)**
- Draw pill flow separately from control signals: sensor and buttons -> PLC inputs/logic -> output interface -> actuator and buzzer; include completion feedback only if confirmed.
- Draw the safety function as its own risk-assessed path to hazardous energy control; show any PLC status-monitoring connection as a separate signal, not the safety path.
- Use distinct line styles for device power, process/signal wiring, and communications; identify the operator and panel boundary without inventing an HMI or network requirement.
- Expected diagram review: every listed I/O tag appears once, arrows have clear direction, and unknown interfaces are marked for confirmation.
**Image prompt:** Original clean industrial block-diagram illustration of pill flow, sensor wiring, PLC logic, load interface, actuator, buzzer, operator buttons, power feeds, and separate safety path, using shapes and arrows without text, labels, numbers, or logos.

### Group application review | 02:35-03:15

**15. Peer review: is the application actually investigated? (20 min)**
- Exchange process and I/O drafts; check that the normal cycle, fault/recovery path, E-stop/reset, environment, reliability, and measurable needs are represented.
- Reviewer marks each statement as evidence-backed, derived, or unknown; example challenge: “24 V sensor” needs a source, while “sensor voltage must be verified” is a valid open item.
- Require one actionable question, such as “What maximum pill event rate and pulse width must the counter accept?” rather than “Can you explain more?”
- Debrief: return drafts with one strong requirement and one gap that could change the later PLC shortlist.
**Image prompt:** Original realistic classroom engineering workshop scene with two student groups comparing a station process sketch and an I/O table against a small pill-packaging model, no readable text, labels, numbers, or logos.

**16. Revise and defend the requirements baseline (20 min)**
- Revise the process map and I/O table using peer comments, keeping each change traceable to a brief statement, observation, or explicitly labelled assumption.
- Two-minute defence: state the process purpose, two hard PLC constraints, one safety boundary, and the highest-impact unresolved question.
- Example defence: “Pulse capture may be decisive because every pill event must be counted; we need the sensor pulse width and maximum rate before choosing an input module.”
- Audience debrief: challenge the evidence or consequence, not the student’s preferred brand; capture any answer that changes the baseline.
**Image prompt:** Original technical presentation scene showing a student pointing from a pill sensor and actuator on a station diagram to a requirements table and PLC shortlist, no text, labels, numbers, or logos.

### Exit | 03:15-03:30

**17. P1 knowledge check (7 min)**
- Question 1: a draft sequence counts pills and signals completion but omits packaging; expected answer is to add the agreed actuator/package step and its trigger/confirmation.
- Question 2: classify pill-sensor pulses as a likely digital event input; classify sensor supply voltage and event rate as unverified until documented.
- Question 3: improve “count accurately” by specifying allowed count error, operating rate/pulse conditions, and a repeatable verification test with the owner-defined limits.
- Misconception to correct: naming a fast PLC does not establish correct counting unless the complete sensor-to-output response is verified.
**Image prompt:** Original assessment-style technical illustration with three distinct scenes: an incomplete pill-packaging sequence, a sensor signal entering a PLC, and a counted-pill verification test, no text, labels, numbers, or logos.

**18. Exit ticket: three facts, two unknowns, one risk (8 min)**
- Submit three facts with sources, two unresolved questions with likely owners, and one risk paired with a practical response; keep assumptions visibly separate.
- Model response: facts include the brief-listed pill sensor and actuator; unknowns include sensor event limits and actuator load ratings; a missed pulse risk prompts verification and a suitable input strategy.
- Check that each risk response is specific and does not claim an unverified feature or safety measure is already installed.
- Carry the revised I/O schedule, process/state diagram, and open-question log into the Week 2 PLC shortlist.
**Image prompt:** Original flat-lay engineering evidence pack showing a process sketch, blank I/O table, sensor datasheet pages, and risk worksheet beside a small pill-packaging device, no readable text, labels, numbers, or logos.

## Evidence and criterion map

| Evidence produced | P1 relevance |
|---|---|
| Process/state diagram | Demonstrates the actual MedPack operating cycle and abnormal paths |
| Application requirements table | Captures measurable functional, performance, and operational characteristics |
| Draft I/O schedule | Identifies external digital/analogue inputs and outputs and known electrical needs |
| Constraint/risk list | Shows safety, reliability, environment, maintainability, and unresolved assumptions |

**P1 checklist:** process end-to-end; emergency stop and reset included; I/O needs captured; safety/reliability/environment investigated; assumptions identified rather than presented as facts.

## Between-session task

Confirm the I/O list and operating requirements against the assignment brief. Bring one candidate sensor/actuator datasheet or wiring diagram and record which PLC interface requirements it creates.