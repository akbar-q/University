# Week 8 PPT Outline: Evaluating HMI/SCADA and System Convergence

**Unit/LO:** 5009, LO2  
**Focus:** Evaluate HMI/SCADA use and justify convergence with valid controls  
**Criteria:** LO2.M3 and LO2.D2; consolidation of P3, P4, and M2  
**Duration:** 3 hours 30 minutes (210 minutes, including a 10-minute break)  
**Scenario:** MedPack station growing into a connected packaging line

## Session outcomes

Students will make a balanced, scenario-specific evaluation of HMI/SCADA, explain what convergence means and why it occurs, identify operational and cybersecurity risks, propose proportionate mitigations, and present a valid rationale.

## Resources

Weeks 5-7 evidence; LO2 marking scheme; architecture/tag map; HMI screenshots or mock-ups; evaluation matrix; risk/control worksheet; and D2 argument template.

## Run sheet

| Time | Slides | Segment | Duration |
|---|---:|---|---:|
| 00:00-00:15 | 1-3 | Retrieval and evaluation question | 15 min |
| 00:15-01:05 | 4-7 | HMI/SCADA benefits and limitations | 50 min |
| 01:05-01:40 | 8-10 | Convergence drivers and architecture | 35 min |
| 01:40-01:50 | - | Break | 10 min |
| 01:50-02:35 | 11-14 | Risk, controls, and evidence | 45 min |
| 02:35-03:15 | 15-16 | Evaluation and D2 rationale workshop | 40 min |
| 03:15-03:30 | 17-18 | LO2 audit and final exit | 15 min |
| **Total** | **18 slides** |  | **210 min** |

## Slide-by-slide outline

### Retrieval and evaluation question | 00:00-00:15

**1. The line manager's question (5 min)**
- Decision question: should a single MedPack station, and then a growing multi-station line, connect to a shared supervisory system? Separate the two operating scales before deciding.
- Have learners vote yes/no/conditional and give one measurable need such as multi-station visibility, alarm coordination, history, or remote maintenance.
- Expected opening position is conditional: the value depends on number of assets, required data/use, lifecycle cost, network/cyber controls, and what must continue locally.
**Image prompt:** Original packaging-line manager reviewing one local station and a proposed multi-station supervisory display, with screens and papers containing no text.

**2. Revisit the working architecture (5 min)**
- Reconstruct the Week 7 path from MedPack sensor and actuator through PLC/I/O, network/bus, HMI, SCADA/dashboard, and any historian or reporting service.
- Identify the actual or assumed protocol, endpoint roles, mapped tags, data direction, and where local sequencing and safety functions reside.
- Expected check: distinguish a valid PLC value from stale/unknown data and identify which services may be lost without stopping essential local control.
**Image prompt:** Original layered MedPack architecture with field devices, PLC, bus, HMI, supervisory workstation, historian, and a separate safety boundary; no text.

**3. M3 and D2 are judgements (5 min)**
- LO2.M3 requires evaluation of HMI/SCADA benefits and limitations, then a conclusion justified for the particular industrial application.
- LO2.D2 requires a valid rationale for PLC/HMI/SCADA convergence that explains drivers and balances benefits against risks and proportionate controls.
- Today’s evidence is a scenario-based comparison, an architecture showing shared and local functions, and a recommendation whose assumptions and conditions are explicit.
**Image prompt:** Original balance-scale composition with HMI/SCADA operational benefits on one side and cost, dependency, and cyber-risk symbols on the other; no labels or text.

### Benefits and limitations | 00:15-01:05

**4. Operational benefits of an HMI (12 min)**
- A local HMI can present MedPack run/idle/fault state, pill count versus target, actionable fault context, and permitted operator requests such as Start or Reset.
- A well-designed alarm should identify the condition and useful response priority; acknowledgement records operator awareness but does not clear the underlying cause or prove a safe state.
- Compare a focused station display with an overloaded screen: poor grouping, ambiguous units, or alarm flooding can increase response time and operator error.
- Evaluate usefulness by naming the operator decision, data freshness/quality needed, training requirement, and evidence that the screen supports the task.
**Image prompt:** Original operator-facing MedPack HMI concept with clear status hierarchy, count-versus-target graphic, prioritized alarm shapes, and a permitted command area; no words.

**5. Operational benefits of SCADA (13 min)**
- SCADA can aggregate state, alarms/events, trends, and production indicators across MedPack stations so a supervisor or maintenance engineer can compare performance and locate recurring interruptions.
- Example decision: a trend of repeated sensor faults may justify inspecting alignment or cable routing; the trend is useful only if timestamps, tag mapping, quality, and event context are trustworthy.
- Live PLC values, historian samples, and controlled production/quality records have different update, retention, validation, and governance requirements; do not treat them as interchangeable.
- Expected evaluation states which user acts on the information, what decision improves, and what data-quality or retention controls are needed.
**Image prompt:** Original multi-station SCADA overview with several packaging cells, alarm/event timeline, and count trends represented graphically but without text or numbers.

**6. Limits, cost, and dependency (12 min)**
- Whole-life costs include hardware, software/licensing, engineering, validation where required, commissioning, training, support, backups, upgrades, and lifecycle replacement, not only the initial workstation.
- More screens and data do not guarantee better operation: stale/mis-mapped tags, alarm floods, poor usability, or unclear ownership can reduce trust and delay action.
- One isolated MedPack station may be adequately served by a local HMI; multi-station coordination, long-term trends, or central alarm handling may justify SCADA if the added services are genuinely used.
- Compare station count, downtime impact, data/report needs, staff capability, support lifecycle, and network dependency; state when a simpler design is preferable.
**Image prompt:** Original comparison scene of a single local operator panel beside a larger multi-station SCADA room, with lifecycle cost and maintenance objects but no text.

**7. Balanced evaluation matrix (13 min)**
- Activity procedure: select one HMI function and one SCADA function, then complete columns for benefit, user/stakeholder, evidence, limitation, consequence, and mitigation.
- Worked prompt: HMI fault detail may shorten diagnosis when the fault code and remedy are accurate; test this against training, alarm quality, and stale-value risks.
- For a SCADA trend, identify the production/maintenance decision it supports and verify timestamp, sample rate, tag quality, retention, and record classification.
- Expected debrief is a conditional judgement, not a feature list: name evidence that supports the benefit and a realistic condition that would weaken it.
**Image prompt:** Original evaluation worksheet layout with six blank columns beside a MedPack HMI and SCADA trend illustration, with no writing or labels.

### Convergence drivers and architecture | 01:05-01:40

**8. Define convergence (10 min)**
- In this context, convergence means closer integration and sharing of data, networks, engineering tools, and workflows among PLC control, HMI/SCADA, and higher-level information systems.
- Convergence can use linked but segmented networks, gateways, common data models, or coordinated services; it does not require one device, one flat network, or one software product.
- MedPack example: a PLC publishes line state to SCADA for trends while local PLC sequencing remains authoritative and enterprise reporting receives approved production indicators.
- Correct misconception: shared data access does not automatically grant control authority or make distinct protocols and security zones interchangeable.
**Image prompt:** Original architecture visualization showing separate PLC, HMI/SCADA, and enterprise layers exchanging selected data through controlled interfaces, with no labels or text.

**9. Why industry converges (15 min)**
- Drivers include wider availability of compatible network infrastructure, reusable device data, cross-station visibility, reporting, remote diagnostics, lifecycle coordination, and collaboration between operations and IT teams.
- For one MedPack station, local diagnosis and a reliable operator interface may outweigh enterprise data integration; for several stations, comparing downtime and trends may support scheduling and maintenance decisions.
- Every driver has conditions: consistent tag definitions, clock/timestamp quality, network design, access control, support ownership, and clear purpose for collected data.
- Expected comparison names which stakeholder gains value and what measurable decision or operating outcome improves at each scale.
**Image prompt:** Original factory illustration with several packaging stations sharing selected status and trend data with operations and maintenance teams through controlled network paths; no text.

**10. Converged MedPack architecture (10 min)**
- Procedure: draw field devices and local PLC control, HMI/SCADA services, historian/reporting, and any enterprise or remote-support connection as distinct functional layers.
- Mark each permitted data flow, protocol/interface, owner, direction, and boundary; identify where read-only monitoring is sufficient and where a command request is allowed.
- Keep essential sequence and independent safety functions local to their engineered control/safety design; ordinary supervisory availability must not be required for E-stop operation.
- Expected debrief: shared infrastructure can support visibility, while segmentation and explicit interfaces limit unnecessary access and shared failure exposure.
**Image prompt:** Original layered MedPack network architecture with field/control, supervisory, and enterprise areas, controlled data gateways, local PLC logic, and separate safety system; no text.

### Break | 01:40-01:50

### Risk, controls, and evidence | 01:50-02:35

**11. Cyber and operational risks (10 min)**
- An unauthorised write to a command/setpoint, compromised remote account, malware spread across a flat network, or unsupported endpoint can disrupt production or complicate recovery.
- A network outage or stale tag can mislead an operator; shared switch/power failure can affect multiple stations, while poor account management obscures who changed a configuration.
- For each MedPack risk, record initiating event, affected asset/data, operational consequence, detection method, and recovery need; distinguish cybersecurity from ordinary component failure while considering both.
- Expected discussion avoids claiming that a firewall, antivirus tool, or isolated subnet alone guarantees security or safe process behavior.
**Image prompt:** Original risk-path diagram showing remote access, a network switch, multiple packaging stations, stale dashboard data, and a controlled recovery boundary; no text.

**12. Select proportionate controls (15 min)**
- Define zones and controlled conduits for PLC/control, supervisory, and enterprise/remote-support traffic; allow only documented flows needed for MedPack operation and maintenance.
- Apply named accounts, least privilege, role separation, controlled time-limited remote access, configuration/change approval, event monitoring, and tested backups with a practical restore procedure.
- Plan patching and lifecycle support against production and validation constraints; include network-device configuration and PLC/HMI project backups, not just workstation files.
- Verify controls against the actual site architecture and risk assessment; maintain independent engineered safety functions and essential local control without relying on ordinary SCADA availability.
**Image prompt:** Original segmented industrial network showing PLC/control, supervisory, and enterprise zones connected through controlled gateways, plus backup and monitoring symbols; no text.

**13. Data governance and regulated context (10 min)**
- Classify MedPack counts, alarms, recipes, and records by intended use: an operational indicator is not automatically a controlled production or quality record.
- If regulated electronic records are in scope, agree requirements for validation, identity/access, audit trail, retention, time synchronization, backup, and change control with the site's responsible quality and compliance functions.
- The PLC/HMI/SCADA product label or a built-in audit feature alone does not establish pharmaceutical regulatory compliance; evidence depends on intended use, configuration, procedures, and accountable review.
- Expected response names the data owner, purpose, authoritative source, retention rule, and approval path before promising a record capability.
**Image prompt:** Original data-governance flow showing operational PLC values, alarms, and a separately controlled quality-record repository with access and retention boundaries; no text.

**14. Convergence assurance checklist (10 min)**
- Activity procedure: apply the assurance questions to the Week 7 architecture: data owner, documented tags, write permissions, stale-data indication, local-control behavior, tested recovery, and traceable changes.
- For each “yes,” identify evidence such as a tag register, configuration export, access-role test, connection-loss test, restore exercise, or approved change record.
- Expected finding: any “unknown” becomes an action with an owner and verification method; a drawn boundary alone does not prove that traffic or permissions are enforced.
- Debrief one failure path from sensor/network to display and state how the operator recognizes it and what remains under local control.
**Image prompt:** Original engineering assurance review scene with a network diagram, access-control screen, stale-data test trace, and backup media, all without readable text.

### Evaluation and D2 workshop | 02:35-03:15

**15. M3 evaluation clinic (20 min)**
- Procedure: write two short evaluations, one for a single MedPack station and one for a growing line, covering operational benefit, limitation/cost, risk, mitigation, and conclusion.
- Support each claim with scenario evidence such as station count, downtime consequence, user need, verified data quality, available support, or lifecycle cost; identify assumptions explicitly.
- Peer review asks whether the recommendation changes with station count, history/report needs, staff capability, network/cyber controls, or cost; reject “SCADA is always better” without evidence.
- Expected output is a conditional comparison that explains when a local HMI is sufficient and what additional need justifies SCADA.
**Image prompt:** Original peer-review workshop with two side-by-side evaluation sheets for one station and a multi-station line, plus HMI/SCADA diagrams but no writing.

**16. D2 convergence recommendation panel (20 min)**
- Procedure: present a structured recommendation: claim -> industrial need -> evidence/benefit -> counterpoint -> risk/control -> conditional conclusion, supported by one architecture drawing.
- Identify what stays local (sequencing, validated permissives, independent safety function), what data is shared (named status/trend values), and which service or user owns each boundary.
- Panel challenge: explain how the recommendation changes with uptime target, station count, record needs, cyber policy, support capability, or whole-life cost; name a measurable trigger for revisiting it.
- Expected D2 rationale justifies convergence rather than merely describing it, acknowledges a valid alternative, and pairs each material risk with a proportionate, verifiable control.
**Image prompt:** Original recommendation-panel scene with a presenter pointing to a layered PLC/HMI/SCADA architecture and a separate local safety path, with no text on displays.

### LO2 audit and final exit | 03:15-03:30

**17. Full LO2 criterion audit (7 min)**
- Audit LO2.P3 for distinct link/interface and protocol comparisons; LO2.P4 for contextual bus advantages plus trade-offs; LO2.M2 for an architecture, named tags, data path, and working or equivalent evidence.
- Audit LO2.M3 for balanced HMI/SCADA benefits, limits, and application-specific conclusion; LO2.D2 for convergence drivers, justified rationale, risks, controls, and conditional recommendation.
- Cross-check that wiring/I/O mapping, normal-cycle and safe fault records, signal-integrity findings, protocol/topology diagram, and required Harvard-style references are present in the wider evidence pack.
- For each gap, assign one concrete artifact or test, a responsible person, and a completion date; do not relabel missing evidence as achieved.
**Image prompt:** Original evidence-audit desk with five clearly separated technical evidence groups: wiring, network, integration, evaluation, and risk controls, with blank/no-text documents.

**18. Final exit: conditional recommendation (8 min)**
- State whether and how MedPack should integrate PLC, HMI, and SCADA at single-station and growing-line scale, with two evidence-based reasons.
- Name one material operational or cyber risk and a control that can be tested; state what local control and independent safety behavior must remain available.
- Give one condition that would change the recommendation, such as station count, required records, uptime need, support lifecycle, site cyber policy, or cost evidence.
**Image prompt:** Original final decision illustration with one MedPack station and an expanding line connected to a supervisory system through controlled boundaries, plus a separate safety path; no text.

## Evidence and criterion map

| Criterion | Session evidence |
|---|---|
| LO2.M3 | Balanced HMI/SCADA evaluation; benefits and limitations; station-versus-line conclusion |
| LO2.D2 | Convergence definition and drivers; shared/local architecture; scenario-driven rationale; risk and mitigation |
| P3/P4/M2 consolidation | Completed protocol comparison, bus review, integration diagram, and tag map from Weeks 6-7 |

## Final LO2 evidence pack

- Wiring diagram and I/O/tag allocation consistent with the program.
- Normal-cycle and safe fault-simulation results, with dated lab records.
- Signal-integrity discussion and troubleshooting findings.
- Link/protocol comparison and labelled network topology.
- Bus-system advantages review with limitations.
- PLC-HMI/SCADA architecture, tag mapping, and working demonstration or clear equivalent evidence.
- Balanced evaluation and convergence rationale with named risks and mitigations.
- Harvard-style references for sources used.