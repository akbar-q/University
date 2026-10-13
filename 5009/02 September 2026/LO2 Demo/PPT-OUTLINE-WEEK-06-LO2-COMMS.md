# Week 6 PPT Outline: Communication Links and PLC Protocols

**Unit/LO:** 5009, LO2  
**Focus:** Illustrate differences between communication links and standards/protocols  
**Criterion:** LO2.P3  
**Duration:** 3 hours 30 minutes (210 minutes, including a 10-minute break)

## Session outcomes

Students will distinguish physical media/interfaces from communication protocols, compare Ethernet and serial links, explain PLC-relevant protocols, and produce a labelled, evidence-based comparison for a selected PLC connection.

## Resources

PLC, HMI, and network manuals for the selected candidate; Ethernet and RS-485 diagrams; Modbus RTU/TCP examples; PROFINET/EtherNet/IP overview from official vendors; comparison worksheet; optional PLC/Node-RED demonstration.

## Run sheet

| Time | Slides | Segment | Duration |
|---|---:|---|---:|
| 00:00-00:15 | 1-3 | Retrieval and vocabulary | 15 min |
| 00:15-01:05 | 4-7 | Layers, Ethernet, and serial links | 50 min |
| 01:05-01:40 | 8-10 | Compare media and protocol roles | 35 min |
| 01:40-01:50 | - | Break | 10 min |
| 01:50-02:35 | 11-14 | PLC protocol examples and data mapping | 45 min |
| 02:35-03:15 | 15-16 | Comparison and integration activity | 40 min |
| 03:15-03:30 | 17-18 | P3 evidence check and exit | 15 min |
| **Total** | **18 slides** |  | **210 min** |

## Slide-by-slide outline

### Retrieval and vocabulary | 00:00-00:15

**1. Signal processing retrieval (5 min)**
- Recall the Week 5 signal chain and ask where a network connection appears.

**2. Link or protocol? (5 min)**
- Learners classify Ethernet, RS-485, Modbus RTU, Modbus TCP, and PROFINET, then explain uncertainty.

**3. P3 success criteria (5 min)**
- Explain that students must illustrate differences with at least two links and two protocols, not just list names.

### Layers and links | 00:15-01:05

**4. Communication layers in practical terms (12 min)**
- Distinguish physical medium/electrical interface, topology, network addressing, transport, and application protocol.
- Correct misconception: RS-485 is an electrical interface; Ethernet is a family of link/network technologies; neither alone names the full application exchange.

**5. Industrial Ethernet connections (13 min)**
- Copper/fibre, switches, addressing, star/line/ring arrangements, segments, distance limits determined by equipment/medium, and EMC installation.
- Discuss network management and redundancy only where the selected hardware supports them.

**6. Serial interfaces: RS-232 and RS-485 (12 min)**
- Contrast point-to-point RS-232 and differential multi-drop-capable RS-485 arrangements.
- Discuss topology, termination/biasing where specified, node loading, distance, noise, and commissioning.
- Connect RS-485 with common Modbus RTU systems, while keeping media and protocol concepts separate.

**7. What changes the link choice? (13 min)**
- Compare device count, distance, data rate, noise, topology, installed cable, diagnostics, and legacy equipment.
- Use a hypothetical control-panel-to-sensor bank example; label assumptions and source exact numeric limits if shown.

### Compare media and protocol roles | 01:05-01:40

**8. Link comparison table (10 min)**
- Complete Ethernet-versus-serial rows for physical connection, topology, typical use, noise considerations, distance, performance, and maintenance.
- Qualitative claims are acceptable if the implementation is specified; avoid universal speed/distance statements.

**9. Standards and protocols are not the cable (15 min)**
- Explain that the same physical medium may carry distinct protocol families; compatibility depends on devices, configuration, and supported services.
- Show examples: Modbus RTU over serial; Modbus TCP over Ethernet; PROFINET and EtherNet/IP on industrial Ethernet infrastructure.
- Clarify that sharing Ethernet cabling does not make industrial protocols interchangeable.

**10. P3 comparison prompt (10 min)**
- Teams choose one link and one protocol for a PLC-to-HMI case and justify the pair from requirements.
- Required comparison dimensions: topology/distance, noise, speed/bandwidth, and typical use.

### Break | 01:40-01:50

### PLC protocols and data mapping | 01:50-02:35

**11. Modbus RTU and Modbus TCP (10 min)**
- Compare serial framing versus TCP transport, addressing, common function/data models, and typical device use.
- Explain coils, discrete inputs, input registers, and holding registers at a conceptual level.
- Verify address offsets with both PLC and client; displayed reference numbers may differ from software indexing.

**12. PROFINET and EtherNet/IP (15 min)**
- Introduce their device roles, configuration ecosystems, cyclic I/O and acyclic/explicit services at a high level, diagnostics, and vendor compatibility.
- Compare what the selected PLC CPU, communication module, HMI, and device actually support.
- Avoid treating the names as generic Ethernet synonyms.

**13. Other PLC-relevant technologies (10 min)**
- Position PROFIBUS, IO-Link, and OPC UA by typical role and integration point.
- Explain they are not direct substitutes for one another: fieldbus, sensor/actuator connection, and structured information exchange solve different needs.
- Learners add one suitable use case and one compatibility check per technology.

**14. Data mapping, quality, and permissions (10 min)**
- Trace PLC tag -> protocol address/data type -> HMI value.
- Cover Boolean/integer/real, scaling, byte/word order, update rate, stale/quality state, and read/write permissions.
- Example MedPack tags: RunState, PillCount, TargetCount, FaultCode, ActuatorStatus, EStopStatusReadOnly.

### Comparison and integration activity | 02:35-03:15

**15. Build the P3 comparison matrix (20 min)**
- Compare Ethernet and RS-485 as links, and Modbus TCP and Modbus RTU as protocol examples.
- Include topology/distance, noise, speed/bandwidth, typical use, strengths, and limits.
- Cite an official manual for any numeric limit or product capability.

**16. Draw and label an end-to-end connection (20 min)**
- Draw PLC-to-HMI or PLC-to-remote-I/O architecture with physical link and protocol labelled separately.
- Peer review asks: could a technician identify cable/interface, protocol, endpoint, and data map from the diagram?

### P3 evidence check | 03:15-03:30

**17. P3 common errors (7 min)**
- Address link/protocol conflation, unsupported speed claims, incompatible device assumptions, and missing topology/noise discussion.

**18. Exit ticket: compare, do not list (8 min)**
- In a short response, compare one link and one protocol pair on two required dimensions and name one PLC use case.

## Evidence and criterion map

| P3 requirement | Session evidence |
|---|---|
| At least two communication links | Ethernet and serial interfaces (RS-232/RS-485) compared |
| At least two standards/protocols | Modbus RTU/TCP plus industrial Ethernet protocol examples |
| Illustrate main differences | Matrix and labelled PLC network diagram |
| Compare relevant properties | Topology/distance, noise, speed/bandwidth, and typical use |

## Between-session task

Use the selected PLC manual to verify one supported link/protocol combination and prepare an annotated connection diagram for Week 7's bus and HMI/SCADA integration work.