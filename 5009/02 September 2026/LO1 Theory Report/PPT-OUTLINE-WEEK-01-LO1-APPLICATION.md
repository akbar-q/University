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
- Show a short process image and ask for failure consequences: missed pill, over-count, unexpected actuator, missed alarm.
- Capture student language; return to it when writing measurable requirements.

**2. MedPack assignment scenario (5 min)**
- Introduce operator Start/Reset, emergency stop, pill sensor, actuator, buzzer, and the packaging target.
- Separate what the brief states from details that still need confirmation.

**3. LO1.P1: what counts as investigating an application? (5 min)**
- Display process, I/O, performance, environment, safety/reliability, maintenance, and integration as investigation headings.
- Explain that generic PLC facts alone do not demonstrate P1.

### Process and requirements | 00:15-01:05

**4. Define the system boundary and stakeholders (12 min)**
- Map the station boundary, operator, production/quality roles, maintenance, upstream feed, downstream packaging, and panel.
- Mark every interface as physical, electrical, data, or procedural.
- Pair prompt: which stakeholder owns the target count and fault-reset policy?

**5. Draw the normal operating cycle (13 min)**
- Build the sequence: ready -> start accepted -> count pill events -> compare with target -> actuate/package -> completion signal -> return/await reset.
- For every transition, record its triggering input, state change, expected output, and timeout if relevant.
- Visual: state diagram or swimlane, not a paragraph-only slide.

**6. Add abnormal and recovery paths (12 min)**
- Explore E-stop during counting, sensor stuck high/low, count timeout, actuator feedback absent, power loss, and reset request.
- Clarify that the exact fault responses are requirements to agree, not undocumented design choices.
- Ask what must happen before restart is permitted.

**7. Convert needs into testable requirements (13 min)**
- Distinguish functional requirements from performance and non-functional requirements.
- Rewrite "count accurately" into questions about pulse width, event rate, target tolerance, and verification method.
- Worksheet columns: requirement, measurable acceptance condition, source/owner, priority, open question.

### Devices, constraints, safety | 01:05-01:40

**8. Identify external input and output devices (10 min)**
- Create a field-device map: pushbuttons, E-stop status feedback, pill sensor, actuator, buzzer, indicator lamps, and any confirmed feedback sensors.
- Label each signal as digital or analogue; do not assume an unmentioned temperature or process sensor is part of the required station.
- Introduce 24 V DC as a common example, then require confirmation from the actual hardware.

**9. Environment and operating conditions (15 min)**
- Investigate EMI, cable length/routing, enclosure and panel space, temperature, vibration, moisture/cleaning, service access, and production uptime.
- Use a fact/assumption/question sorting activity.
- Treat cleanroom, washdown, or hazardous-area status as questions for the site; do not invent them for MedPack.

**10. Safety and reliability are design inputs (10 min)**
- Identify hazard, consequence, safe-state expectation, fault response, and recovery conditions.
- Explain that an E-stop safety function needs an appropriate risk-assessed safety design, such as a suitable safety relay or safety-rated controller; an ordinary PLC input alone is not the safety function.
- Mention that applicable machinery, electrical, and functional-safety requirements must be verified for the actual machine and jurisdiction.

### Break | 01:40-01:50

### Build the application evidence | 01:50-02:35

**11. Draft I/O schedule: inputs (10 min)**
- Table fields: tag, device, DI/AI, signal type/range, normal state, event rate, failure consequence, and unresolved compatibility.
- Include Start, Reset, E-stop status feedback, and pill sensor as brief-based candidates; mark added devices as assumptions.

**12. Draft I/O schedule: outputs and loads (15 min)**
- Add actuator, buzzer, and indicators; record supply, current, inrush, switching frequency, and interface/load details when known.
- Distinguish a PLC command from the final load-driving device; note where a relay/contactor/driver may be needed.
- Ask students to flag any signal whose voltage/current is not yet evidenced.

**13. Prioritise requirements and open questions (10 min)**
- Teams classify requirements as mandatory, desirable, or unresolved and explain their reasoning.
- Identify which unknowns could disqualify a PLC later, such as output load rating or pulse capture capability.

**14. Sketch the station block diagram (10 min)**
- Draw field devices -> PLC I/O -> CPU/logic -> load interface -> actuator/buzzer, with operator interface and safety boundary.
- Show power and communication lines separately from process signal arrows.

### Group application review | 02:35-03:15

**15. Peer review: is the application actually investigated? (20 min)**
- Groups exchange process and I/O drafts and use the P1 checklist: full cycle, E-stop/reset, constraints, environment, reliability, and structured requirements.
- Reviewer must mark unsupported assumptions and ask one useful clarification question.

**16. Revise and defend the requirements baseline (20 min)**
- Groups revise their evidence and give a two-minute summary of the most important selection constraints.
- Presenter explains why those constraints will affect PLC selection.

### Exit | 03:15-03:30

**17. P1 knowledge check (7 min)**
- Short scenario questions: identify a missing process step, classify a signal, and turn a vague requirement into a measurable one.

**18. Exit ticket: three facts, two unknowns, one risk (8 min)**
- Submit three verified application facts, two questions for the client/assessor, and one risk with a proposed response.
- Retain the I/O schedule for Weeks 2-4.

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