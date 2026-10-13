# Week 7 PPT Outline: Networked Bus Systems and HMI/SCADA Integration

**Unit/LO:** 5009, LO2  
**Focus:** Review networked bus advantages and show PLC integration with HMI/SCADA  
**Criteria:** LO2.P4 and LO2.M2  
**Duration:** 3 hours 30 minutes (210 minutes, including a 10-minute break)  
**Scenario:** MedPack packaging station and a small production-line supervisory view

## Session outcomes

Students will draw and evaluate a networked PLC/bus architecture, explain its application-specific advantages and trade-offs, and show a PLC-HMI/SCADA data path using an architecture, tag list, or working demonstration.

## Resources

Week 6 protocol diagram; selected PLC/network manuals; topology cards; tag-mapping worksheet; Node-RED + Modbus guide; dashboard/demo PLC if available; and architecture templates.

## Run sheet

| Time | Slides | Segment | Duration |
|---|---:|---|---:|
| 00:00-00:15 | 1-3 | Retrieval and architecture problem | 15 min |
| 00:15-01:05 | 4-7 | Networked bus and distributed I/O | 50 min |
| 01:05-01:40 | 8-10 | Benefits, trade-offs, and topology | 35 min |
| 01:40-01:50 | - | Break | 10 min |
| 01:50-02:35 | 11-14 | HMI/SCADA architecture and data flow | 45 min |
| 02:35-03:15 | 15-16 | Integration demonstration/design activity | 40 min |
| 03:15-03:30 | 17-18 | P4/M2 evidence check and exit | 15 min |
| **Total** | **18 slides** |  | **210 min** |

## Slide-by-slide outline

### Retrieval and architecture problem | 00:00-00:15

**1. Rebuild last week's connection (5 min)**
- Learners label one physical link, one protocol, one endpoint, and one data value from their Week 6 diagram.

**2. Packaging line expansion scenario (5 min)**
- Add a second station and maintenance workstation to MedPack; ask how wiring, diagnosis, and data access change.

**3. P4/M2 outcomes (5 min)**
- P4 requires a contextual review of bus advantages; M2 requires showing integration, not merely defining HMI and SCADA.

### Bus and distributed I/O | 00:15-01:05

**4. Point-to-point wiring versus networked I/O (12 min)**
- Compare central PLC wiring with remote I/O or bus-connected devices.
- Identify PLC, network, remote-I/O coupler, device, power, and engineering diagnostics.

**5. Network topology and system boundaries (13 min)**
- Review line, star, ring, and bus arrangements and the role of switches, termination, addressing, and redundancy where supported.
- Discuss cable distance, EMC, segmentation, power supply, and configuration management.

**6. Distributed I/O architecture (12 min)**
- Explain how remote I/O places channels nearer field devices and sends data to the PLC over a supported network.
- Consider update time, module diagnostics, channel configuration, node loss, and local/remote fault isolation.

**7. Draw a MedPack bus architecture (13 min)**
- Teams map PLC, local I/O, remote I/O, pill sensor, actuator interface, HMI, SCADA workstation, and engineering access.
- Label each link and protocol; show the safety boundary and identify local control dependencies.

### Benefits and trade-offs | 01:05-01:40

**8. Review bus-system advantages (10 min)**
- Explain reduced point-to-point wiring, easier expansion, modularity, distributed I/O, device diagnostics, maintenance visibility, and data availability.
- Tie every advantage to line installation, downtime, or maintenance in the scenario.

**9. Review constraints and failure modes (15 min)**
- Evaluate network hardware cost, configuration skill, interoperability, vendor dependence, cyber exposure, shared failure domains, latency/update limits, and recovery planning.
- Ask when a hardwired design may remain preferable.

**10. P4 claim-evidence-consequence activity (10 min)**
- Teams make two claims about bus-system value and support each with a MedPack consequence and a counterpoint.
- Reject generic claims such as "less wiring is always cheaper" unless installed cost is demonstrated.

### Break | 01:40-01:50

### HMI/SCADA architecture and data flow | 01:50-02:35

**11. HMI and SCADA roles (10 min)**
- HMI: local operator status, commands, alarms, and process navigation.
- SCADA: supervisory acquisition, alarm/event management, trends, historian, and multiple assets; products can combine roles.
- Explain that role and system scale matter more than product label.

**12. PLC-HMI-SCADA architecture (15 min)**
- Draw field devices -> PLC local control -> industrial network -> HMI/SCADA services/client -> history/reporting.
- Mark protocols, data direction, network boundaries, ownership of logic, and failure behaviour.
- Keep essential sequencing and safety functions independent of supervisory availability.

**13. MedPack tag list and access rights (10 min)**
- Read-only examples: RunState, PillCount, TargetCount, FaultCode, ActuatorStatus, EStopStatusReadOnly.
- Requested commands: StartRequest and ResetRequest; PLC validates permissives and process state.
- Include tag type, units, address/name, update rate, alarm/quality handling, and read/write permission.

**14. Data-quality and operator-display rules (10 min)**
- Explain stale/unknown quality, scaling, address offsets, data type, units, alarm acknowledgement, and clear status indication.
- Dashboard must distinguish disconnected/stale data from a valid zero.
- Avoid using an HMI control as an E-stop or safety reset path.

### Integration demonstration/design | 02:35-03:15

**15. PLC-to-dashboard demonstration (20 min)**
- If available, use Node-RED/Modbus TCP or the actual supported protocol to read a verified PLC tag and display state/count.
- Demonstrate endpoint, protocol, address, data type, scaling, polling/update, and bad-connection indication.
- If hardware is unavailable, use a fully labelled architecture, tag mapping, and example data flow.
- The local guide's example addresses are illustrative; verify the live PLC map and zero/one-based convention.

**16. M2 integration design challenge (20 min)**
- Teams produce architecture plus tag table and explain one read value and one requested command end-to-end.
- Peer asks where the PLC validates the command, what the screen shows during connection loss, and what evidence proves the mapping.

### P4/M2 evidence check | 03:15-03:30

**17. Criteria evidence review (7 min)**
- P4: explain reduced wiring, expansion, diagnostics, modularity/distributed I/O, and monitoring data with station-specific consequences and trade-offs.
- M2: show protocol, architecture, named tags, and data flow through working evidence or clear equivalent documentation.

**18. Exit ticket: one bus benefit, one integration proof (8 min)**
- State one justified bus advantage and one limitation; name the artifact that proves PLC-HMI/SCADA integration.

## Evidence and criterion map

| Criterion | Evidence produced |
|---|---|
| LO2.P4 | Labelled topology; contextual benefits review; explicit limitations and conditions for success |
| LO2.M2 | PLC-HMI/SCADA architecture; protocol; mapped read/write tags; live demo or equivalent data-flow proof |

## Between-session task

Complete the architecture and tag list. Test or simulate one value and one command, document address/type/permissions, and capture how stale or disconnected data is represented for Week 8 evaluation.