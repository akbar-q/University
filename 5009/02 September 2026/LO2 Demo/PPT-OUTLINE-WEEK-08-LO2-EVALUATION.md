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
- "Should MedPack connect every packaging station to a shared supervisory system?"
- Learners vote yes/no/conditional and state one reason.

**2. Revisit the working architecture (5 min)**
- Recall the PLC, HMI, SCADA/dashboard, bus, protocol, tags, local control, and safety boundary from Week 7.

**3. M3 and D2 are judgements (5 min)**
- M3 requires balanced evaluation and a context-based conclusion.
- D2 requires a valid rationale for convergence, including benefits, risks, and controls.

### Benefits and limitations | 00:15-01:05

**4. Operational benefits of an HMI (12 min)**
- Visibility of state, guided operation, alarms, fault messages, count/target information, and maintenance support.
- Discuss operator workload, readability, alarm priorities, and the cost of a confusing or overloaded screen.

**5. Operational benefits of SCADA (13 min)**
- Multi-station overview, trends, production data, alarms/events, history, remote supervision, and troubleshooting.
- Link each benefit to a real operational decision, user, and required data quality.
- Distinguish live PLC values from historical records and validated production records.

**6. Limits, cost, and dependency (12 min)**
- Hardware/software and engineering cost, skills/training, licensing, network reliance, data quality, alarm flood, maintenance, and vendor lifecycle.
- Ask whether one station needs a full SCADA system or a simpler local HMI; justify based on scale and need.

**7. Balanced evaluation matrix (13 min)**
- Compare benefit, stakeholder, evidence, limitation, consequence, and mitigation.
- Students evaluate one HMI function and one SCADA function for the MedPack context.

### Convergence drivers and architecture | 01:05-01:40

**8. Define convergence (10 min)**
- Explain closer sharing of networks, tags, tools, data, and workflows across PLC control, HMI/SCADA, and higher-level systems.
- Clarify that convergence is not necessarily one device, one network, or one software package.

**9. Why industry converges (15 min)**
- Drivers: common Ethernet infrastructure, reusable data, reporting, easier engineering integration, asset visibility, lifecycle management, and better coordination between operational and information technology teams.
- Evaluate which drivers matter to a single station versus an expanding line.

**10. Converged MedPack architecture (10 min)**
- Draw device/control, supervisory, and enterprise layers; identify permitted data flows and system owners.
- Mark local PLC control, HMI/SCADA clients, historian/reporting, remote support boundary, and safety system.
- Show where shared infrastructure is useful and where separation remains essential.

### Break | 01:40-01:50

### Risk, controls, and evidence | 01:50-02:35

**11. Cyber and operational risks (10 min)**
- Discuss unauthorised writes, malware spread, remote access, stale data, network outage, shared failure domains, poor account management, and unsupported devices.
- Connect each risk to a plausible consequence for production or safe recovery.

**12. Select proportionate controls (15 min)**
- Network segmentation/zones and conduits; least privilege; controlled remote access; change management; tested backups and restore; monitoring; patch/lifecycle planning; and operator procedures.
- Safety functions and essential local control must not depend on ordinary SCADA availability.
- Emphasise controls must be verified in the actual site architecture; no single measure guarantees security.

**13. Data governance and regulated context (10 min)**
- Ask whether counts, alarms, recipes, or electronic records are operational indicators or controlled quality records.
- If regulated records are in scope, confirm validation, access, audit trail, retention, and change-control needs with the responsible quality function.
- Do not assume an HMI or PLC feature alone demonstrates pharmaceutical regulatory compliance.

**14. Convergence assurance checklist (10 min)**
- Is data ownership clear? Are tags documented? Are write permissions restricted? Is stale data visible? Can local control continue? Is recovery tested? Are changes traceable?
- Teams apply the checklist to their Week 7 diagram.

### Evaluation and D2 workshop | 02:35-03:15

**15. M3 evaluation clinic (20 min)**
- Teams write a short balanced evaluation: benefits, limitations, risk, mitigation, and conclusion for a single station and for a growing line.
- Peer review checks for application-specific evidence and rejects unsupported "SCADA is always better" claims.

**16. D2 convergence recommendation panel (20 min)**
- Deliver a structured argument: claim -> industrial need -> evidence/benefit -> counterpoint -> risk/control -> conditional conclusion.
- Include one architecture diagram and explain what stays local, what is shared, and why.
- Panel asks what would change the recommendation (uptime target, number of stations, record needs, cyber policy, or cost).

### LO2 audit and final exit | 03:15-03:30

**17. Full LO2 criterion audit (7 min)**
- P3: link/protocol distinctions; P4: networked bus benefits and trade-offs; M2: shown architecture/tag mapping; M3: balanced evaluation; D2: justified convergence rationale with risks and controls.
- Identify evidence gaps and assign a concrete completion action.

**18. Final exit: conditional recommendation (8 min)**
- State whether and how MedPack should converge PLC/HMI/SCADA; give two reasons, one risk and control, and one condition that could change the decision.

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