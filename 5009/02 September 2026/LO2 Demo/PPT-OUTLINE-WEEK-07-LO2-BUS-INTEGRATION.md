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
- Retrieve the selected Week 6 PLC-to-HMI or PLC-to-device example and identify the actual cable/interface, protocol, endpoint roles, and one mapped value.
- Expected response distinguishes the medium/interface from the protocol and identifies where `PillCount` or another MedPack value is sourced and displayed.
- Correct any guessed address or capability against the selected PLC, HMI, and network manuals before reusing the diagram.
**Image prompt:** Original PLC-to-HMI connection diagram showing a cable/interface, protocol exchange, endpoint devices, and one count value flowing to a screen; no text or labels.

**2. Packaging line expansion scenario (5 min)**
- Add a second MedPack station and a maintenance workstation to the starting architecture; mark new field devices, PLC/I/O, operator interface, and supervisory data needs.
- Compare a separate point-to-point wiring approach with a supported networked-I/O/bus approach; consider cable routes, expansion effort, diagnostics, and failure boundaries.
- Expected discussion: a network may reduce some home-run wiring and improve shared visibility, but introduces configuration, network, and cybersecurity dependencies that must be engineered.
**Image prompt:** Original packaging-line layout expanding from one to two stations, with local PLC panels, a maintenance workstation, and alternative field wiring paths; no text.

**3. P4/M2 outcomes (5 min)**
- LO2.P4 asks for a review of networked-bus advantages tied to industrial use, including conditions and trade-offs rather than an unconditional sales claim.
- LO2.M2 requires showing how PLC data reaches an HMI/SCADA system through a real or clearly documented architecture, protocol, and tag map.
- Today’s evidence is a labelled MedPack topology plus a verified data path or equivalent architecture, tag table, and demonstration record.
**Image prompt:** Original two-part evidence illustration with a networked PLC bus topology on one side and an HMI data-flow diagram on the other, using no text.

### Bus and distributed I/O | 00:15-01:05

**4. Point-to-point wiring versus networked I/O (12 min)**
- Central I/O brings field conductors back to the PLC panel; remote I/O places an I/O coupler nearer field devices and carries channel data over a supported network.
- In MedPack, compare the pill sensor and actuator interface cable routes, local/remote power needs, panel space, connector count, and maintenance access for each architecture.
- Networked I/O can reduce some long individual runs and provide module/channel diagnostics, but adds couplers, network configuration, update timing, and node-loss behavior to commission.
- Expected observation: draw every required component and power path; a network cable does not replace device power or the output interface to a load.
**Image prompt:** Original side-by-side wiring comparison of central PLC I/O home runs and a remote-I/O coupler mounted near a MedPack sensor bank; no text.

**5. Network topology and system boundaries (13 min)**
- Distinguish physical layouts such as star, line, ring, and a shared bus; the correct topology and termination depend on the chosen medium, protocol, devices, and manufacturer design rules.
- Map PLC, remote I/O, HMI, SCADA client, engineering access, switches/gateways, power domains, and network boundaries for the actual MedPack candidate.
- Cable limits, EMC installation, addressing, segmentation, and recovery behavior are product/design-specific; Ethernet does not become deterministic or redundant merely because a switch is present.
- Mark redundancy only when the selected devices, protocol, switch configuration, and tested recovery design support it; identify which single failure could disconnect a station.
**Image prompt:** Original industrial topology comparison showing star, line, ring, and shared-bus device arrangements with distinct switches and termination where appropriate; no text.

**6. Distributed I/O architecture (12 min)**
- Trace a remote MedPack input from sensor terminal through the remote-I/O channel and coupler, across its configured network, into the PLC tag and count logic.
- Check module/channel configuration, network update interval, diagnostics, power source, and supported data size in the actual CPU/coupler manuals.
- Define node-loss behavior from the configured system: the PLC may set bad quality, substitute configured values, enter a fault state, or take another documented action; never assume a universal fallback.
- Practical diagnosis: compare sensor/channel indications with PLC communication status and tag quality; expected result is to distinguish a field-channel fault from a lost coupler/network path.
**Image prompt:** Original remote-I/O path diagram showing a sensor, channel module, coupler, industrial network, PLC tag, and separate power feed; no text or labels.

**7. Draw a MedPack bus architecture (13 min)**
- Activity procedure: place the MedPack PLC, local I/O, optional remote-I/O node, pill sensor, actuator interface, HMI, SCADA/maintenance workstation, and network switches on one architecture diagram.
- For every connection, label medium/interface, protocol, endpoint role, data direction, and any gateway; verify device capability from the selected manuals or mark it as a design assumption.
- Draw the safety function boundary separately and mark which local sequencing must continue or stop safely if HMI, SCADA, or a supervisory network is unavailable.
- Peer debrief: another team traces `PillCount` to an HMI and identifies the PLC's response to a lost remote-I/O node and to a lost supervisory connection.
**Image prompt:** Original MedPack architecture drawing with PLC, local and remote I/O, sensor, actuator interface, HMI, SCADA workstation, engineering laptop, network boundaries, and a separate safety path; no text.

### Benefits and trade-offs | 01:05-01:40

**8. Review bus-system advantages (10 min)**
- Reduced long individual cable runs may lower installation effort when remote I/O is placed near a MedPack station, but total cost must include network devices, enclosures, power, configuration, and commissioning.
- Modular nodes can make a second station easier to add if spare capacity, compatible devices, network loading, addressing, and validated configuration are planned.
- Channel/device diagnostics and shared process data can help maintenance locate a failed sensor or compare station states, provided the protocol exposes useful diagnostics and quality is visible.
- For each claimed advantage, name the user, task, expected time/downtime or visibility improvement, and one condition that must hold for the benefit to occur.
**Image prompt:** Original maintenance technician diagnosing a distributed-I/O node beside two packaging stations, with reduced cable runs and a visible network switch; no text.

**9. Review constraints and failure modes (15 min)**
- A bus adds devices, configuration/version management, specialist skills, spare-parts planning, and possible vendor dependencies; compare lifecycle and installed cost, not cable quantity alone.
- Shared switches, power supplies, couplers, or configuration errors can create common failure domains; assess node loss, network recovery, stale data, and the effect on each station.
- Check interoperability and update timing using device profiles, PLC/module support, actual traffic/load design, and tested response requirements; never infer deterministic response from Ethernet alone.
- A simple hardwired connection may remain preferable for a small, fixed, low-data-count function when it gives clearer diagnosis or fewer dependencies; safety circuits follow their required safety design, not a cost-only choice.
**Image prompt:** Original risk map around a PLC bus showing a switch, remote-I/O coupler, power supply, multiple stations, and alternative hardwired safety path; no text.

**10. P4 claim-evidence-consequence activity (10 min)**
- Activity procedure: each team writes two claims about a proposed MedPack bus, then attaches one site-specific evidence item, an operational consequence, and a counterpoint to each.
- Example claim: remote I/O may shorten sensor cable routes for the second station; evidence should show route lengths/panel layout, consequence should identify installation or diagnosis impact, and counterpoint should include node/network cost and failure behavior.
- Expected debrief rejects “less wiring is always cheaper” unless total installed and lifecycle cost is compared; distinguish a measured fact from a design assumption.
**Image prompt:** Original claim-evidence-consequence workshop board represented by three connected blank panels beside a bus topology sketch, with no words or writing.

### Break | 01:40-01:50

### HMI/SCADA architecture and data flow | 01:50-02:35

**11. HMI and SCADA roles (10 min)**
- An HMI presents local operator status, permitted commands, alarms, and navigation; MedPack examples include run state, count/target, fault cause, and a validated Start request.
- SCADA commonly supervises multiple assets with data acquisition, alarm/event management, trends, and history; one product may combine HMI and SCADA functions, so describe capabilities and scope.
- Identify the user and decision for each screen/data item; a count is useful only with known units, freshness, quality, and correct tag mapping.
- Expected distinction: product name does not prove system role; explain what data is acquired, who acts on it, and where the control logic resides.
**Image prompt:** Original operator station showing a local MedPack HMI beside a multi-station SCADA overview and trend display, screens with abstract shapes only and no text.

**12. PLC-HMI-SCADA architecture (15 min)**
- Trace sensor/actuator signals into local PLC control, then show the supported PLC-to-HMI/SCADA protocol path, client/server roles, optional historian, and reporting path.
- Mark data direction and ownership: PLC retains sequence/permissive logic; the HMI requests bounded actions and displays status; supervisory services collect or present data according to configured permissions.
- For each network boundary, document protocol, endpoint, tag source, quality/freshness handling, and failure response; use actual product roles and maps rather than a generic “Ethernet” label.
- Expected failure review: loss of ordinary HMI/SCADA should not defeat an independent safety function or essential local control; the actual safe/continued operating state must be defined by the control design.
**Image prompt:** Original layered architecture showing field sensor and actuator, local PLC control, industrial network, HMI/SCADA clients, historian, and a separate safety system boundary; no text.

**13. MedPack tag list and access rights (10 min)**
- Create entries for `RunState`, `PillCount`, `TargetCount`, `FaultCode`, and `ActuatorStatus`, specifying type, units, source tag/address, update expectation, quality behavior, and read-only access.
- Define `StartRequest` and `ResetRequest` as requests, not direct output writes; the PLC checks mode, permissives, process state, and reset conditions before acting.
- Keep `EStopStatusReadOnly` as status feedback only; a displayed value or HMI control is not the safety function or an authorised safety reset path.
- Expected review: every writable item has a named owner, allowed range/command semantics, role permission, and PLC-side validation.
**Image prompt:** Original access-control tag table visual with read-only MedPack status values and two guarded command requests flowing to PLC validation logic; no text.

**14. Data-quality and operator-display rules (10 min)**
- Distinguish a valid zero count from stale, disconnected, out-of-range, or unknown-quality data; represent invalidity visibly rather than leaving the last number looking current.
- Verify address offset, data type, scaling, units, update interval, and alarm state against the live PLC map; a plausible-looking display can still be mapped incorrectly.
- Design MedPack screens so operator actions, alarm acknowledgement, and process state are distinguishable, with alarm priority and recovery instructions appropriate to the actual fault.
- HMI buttons are ordinary control requests and must never serve as E-stop devices or bypass safety reset requirements.
**Image prompt:** Original HMI screen concept with clear run state, pill count, target, fault banner, and a visibly stale-data overlay, using abstract shapes and no text.

### Integration demonstration/design | 02:35-03:15

**15. PLC-to-dashboard demonstration (20 min)**
- Procedure: select the actual PLC endpoint and supported protocol, verify the live device map and access permissions, then read one safe status/count tag into the dashboard using its documented type and scaling.
- Show endpoint/role, protocol, address or symbol, update/poll interval, value quality, and the observed response to a deliberately disconnected simulator or test endpoint.
- Expected observation: a valid known PLC value is displayed with correct units; a communication failure becomes stale/invalid rather than a false zero, and no safety function depends on the dashboard.
- If no hardware is available, present a fully labelled architecture, actual or explicitly hypothetical tag mapping, step-by-step data path, and clearly marked simulated readings; never copy sample addresses without verification.
**Image prompt:** Original live demonstration scene with a PLC simulator, network connection, dashboard showing a count and a disconnected-state indicator, with all screens free of text.

**16. M2 integration design challenge (20 min)**
- Activity procedure: teams create an architecture and tag table, then trace one read value such as `PillCount` and one request such as `StartRequest` through every device, protocol, address/type, and logic boundary.
- For the command path, show where the PLC validates permissives and process state; for the read path, show scaling, units, quality, and display update behavior.
- Peer review asks what the HMI displays during connection loss, how a stale value is distinguished from zero, and which manual/map or live test proves the mapping.
- Expected submission is a readable diagram plus evidence or a transparent simulation; a screen mock-up alone does not show integration.
**Image prompt:** Original team design-review scene with an architecture diagram, tag map, PLC, HMI, and arrows tracing one read and one request; no readable text.

### P4/M2 evidence check | 03:15-03:30

**17. Criteria evidence review (7 min)**
- P4 evidence should connect reduced wiring, expansion, diagnostics, modularity/distributed I/O, and monitoring to specific MedPack installation or maintenance consequences and stated limitations.
- M2 evidence should show protocol and endpoint roles, architecture, named tags/data types, read/write direction, and a working data path or clear equivalent documentation.
- Check evidence provenance: manual/map references, tested values, quality/failure behavior, and clear distinction between measured result and hypothetical example.
- Expected gap action: name the missing artifact, owner, and test needed before the next assessment review.
**Image prompt:** Original assessor review layout showing a topology diagram, mapped tag path, manual pages, and a test evidence record arranged side by side without text.

**18. Exit ticket: one bus benefit, one integration proof (8 min)**
- State one MedPack bus advantage, the operational evidence supporting it, and one constraint or condition that could reduce the benefit.
- Name one artifact that proves PLC-HMI/SCADA integration, such as a verified architecture plus tag map and known-value test or an observed working exchange.
- Include the protocol/data-map check and one failure-quality behavior that should be visible to the operator.
**Image prompt:** Original completed engineering evidence pack with a network topology sketch, tag map, and dashboard test trace but blank/no-text pages.

## Evidence and criterion map

| Criterion | Evidence produced |
|---|---|
| LO2.P4 | Labelled topology; contextual benefits review; explicit limitations and conditions for success |
| LO2.M2 | PLC-HMI/SCADA architecture; protocol; mapped read/write tags; live demo or equivalent data-flow proof |

## Between-session task

Complete the architecture and tag list. Test or simulate one value and one command, document address/type/permissions, and capture how stale or disconnected data is represented for Week 8 evaluation.