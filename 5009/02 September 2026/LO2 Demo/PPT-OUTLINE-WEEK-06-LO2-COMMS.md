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
- Reconstruct the Week 5 path: pill sensor -> PLC input -> count logic -> output interface -> actuator request; identify where a communication link is actually present.
- A local sensor wired to a PLC input has an electrical signal path, not automatically a network protocol; remote I/O or an HMI connection adds a configured communication connection.
- Expected answer: on the Week 7-style architecture, label the cable/interface separately from the protocol used to exchange PLC data.
**Image prompt:** Original MedPack signal-chain diagram with a local sensor wire and a separate PLC-to-HMI network cable highlighted in different colors; no labels or text.

**2. Link or protocol? (5 min)**
- Classify Ethernet as a family of link/physical-layer technologies, RS-485 as an electrical interface, Modbus RTU and Modbus TCP as protocol variants, and PROFINET as an industrial communication system/protocol family.
- Modbus RTU commonly runs over serial interfaces such as RS-485, while Modbus TCP commonly runs over TCP/IP on Ethernet; the cable/interface alone does not determine the application protocol.
- Expected correction: calling RS-485 a protocol or assuming every Ethernet device speaks the same PLC protocol confuses different layers.
**Image prompt:** Original five-object sorting illustration: copper Ethernet cable, RS-485 differential pair, serial frame, TCP/IP packet, and industrial PLC network device, arranged in physical-versus-protocol groups without text.

**3. P3 success criteria (5 min)**
- LO2.P3 requires an illustrated comparison of at least two communication links/interfaces and at least two PLC-relevant standards or protocols.
- For each example, learners should identify topology/distance, noise considerations, speed or bandwidth qualitatively, and a typical use case, with numeric limits sourced from the selected equipment manual.
- Evidence for today is a comparison matrix plus a labelled connection diagram; a list of names without layer distinction does not demonstrate the criterion.
**Image prompt:** Original teaching-board composition showing two side-by-side PLC communication paths and a blank comparison matrix, with diagrams only and no writing.

### Layers and links | 00:15-01:05

**4. Communication layers in practical terms (12 min)**
- Separate the cable/medium and electrical interface, network topology, addressing, transport service, and application-level data rules; each answers a different commissioning question.
- Worked MedPack path: twisted-pair copper Ethernet connects PLC and HMI through switches, IP addressing identifies endpoints, TCP transports a Modbus TCP exchange, and the Modbus data model identifies values.
- RS-485 specifies electrical signalling characteristics, not the meaning or register map of the message; Modbus RTU is one protocol that may use that interface.
- Check each device manual for supported physical interfaces, protocol roles, addressing, and services before declaring two devices compatible.
**Image prompt:** Original layered communications stack illustrated as a physical copper path, switch network, endpoint addresses, transport envelope, and PLC data table, with no text or labels.

**5. Industrial Ethernet connections (13 min)**
- Industrial Ethernet installations may use copper or fibre media and managed/unmanaged switches; exact cable category, connectors, segment limits, and environmental rating come from the installed equipment specifications.
- Star, line, and ring describe possible physical/logical arrangements; a ring provides redundancy only when devices and the configured protocol/recovery mechanism support it.
- Ethernet does not guarantee deterministic timing by itself: traffic, switch configuration, protocol, device load, and engineered QoS/redundancy affect performance and recovery.
- For MedPack, trace PLC, HMI, remote I/O, and engineering port connections, then mark the actual switch boundaries and any supported diagnostics or redundancy.
**Image prompt:** Original industrial control cabinet scene showing copper Ethernet patch leads to a switch, one fibre uplink, a PLC, HMI, and remote-I/O drop; no labels, logos, or text.

**6. Serial interfaces: RS-232 and RS-485 (12 min)**
- RS-232 is commonly used for a point-to-point serial connection; RS-485 uses differential signalling and can support multi-drop networks when transceivers, topology, and device loading are designed accordingly.
- RS-485 does not define Modbus or any other message format; a PLC and device need matching serial settings and a shared supported protocol such as Modbus RTU.
- Follow the selected transceiver/device manuals for cable, polarity, termination, biasing, node loading, segment length, and grounding; avoid adding termination or bias by guesswork.
- Commissioning procedure: verify interface and pinout, baud/parity/stop bits, node addresses, wiring polarity, and end-of-line requirements; expected result is stable replies from the intended node without unexplained retries.
**Image prompt:** Original comparison diagram showing a two-wire RS-232 point-to-point path beside a differential RS-485 trunk with correctly placed end termination and several PLC devices; no text.

**7. What changes the link choice? (13 min)**
- Start with requirements: number/type of devices, cable route and distance, update needs, noise environment, topology, existing infrastructure, diagnostics, maintenance skills, and lifecycle support.
- Clearly hypothetical case: a panel 40 m from a sensor bank with eight devices is a requirements prompt, not a universal Ethernet/RS-485 distance rule; compare supported PLC interfaces and device protocol maps before choosing.
- A link decision does not establish application compatibility: confirm both endpoints support the same protocol role, data model, configuration tools, and required services.
- Expected justification names one advantage and one constraint for the proposed MedPack connection and cites the source for any numeric cable or performance limit.
**Image prompt:** Original engineering planning scene showing a PLC panel, distant sensor bank, alternative copper and serial routes, and a noise source near a motor cable; no annotations or text.

### Compare media and protocol roles | 01:05-01:40

**8. Link comparison table (10 min)**
- Fill the table with a specific Ethernet implementation and a specific serial interface (for example, copper switched Ethernet versus two-wire RS-485), not generic labels alone.
- Compare physical medium/interface, supported topology, installation/noise controls, likely PLC use, diagnostics, and maintenance; state which details depend on product design.
- Qualitative comparison is acceptable where the hardware is not yet selected; any speed, node-count, or distance figure must cite the relevant interface/device manual.
- Expected debrief: no link is universally faster, longer-range, or more noise-immune without its medium, transceivers, network design, and operating conditions being specified.
**Image prompt:** Original blank comparison chart beside a copper Ethernet switch and RS-485 terminal bus, with visual cues for topology, cable, and diagnostics but no words or numbers.

**9. Standards and protocols are not the cable (15 min)**
- One Ethernet installation can carry different protocol traffic, but each endpoint must implement the same protocol and compatible roles/configuration; shared cabling is not protocol interoperability.
- Example pairs: Modbus RTU over a supported serial interface such as RS-485; Modbus TCP over TCP/IP and Ethernet; PROFINET and EtherNet/IP use industrial Ethernet infrastructure with distinct device/configuration ecosystems.
- Distinguish a protocol from its transport and medium: changing the cable does not translate registers, device profiles, or cyclic-I/O services.
- Ask learners to identify the evidence needed before connecting a PLC and HMI: supported protocol on both devices, role, address/data map, configuration, and version/option constraints.
**Image prompt:** Original diagram showing one Ethernet switch carrying two visually distinct PLC-HMI communication paths to compatible endpoints, plus an isolated serial Modbus RTU path; no text.

**10. P3 comparison prompt (10 min)**
- Activity procedure: teams select a MedPack PLC-to-HMI requirement card, list the endpoints and needed data, and choose one supported link/interface plus one protocol pairing.
- Compare the choice with an alternative on topology/distance, noise/installation, speed or update needs, typical use, and commissioning support; label unknowns instead of inventing specifications.
- Expected response: recommend a compatible pair only after checking both endpoint manuals and the register/tag mapping, then state a limitation and one condition that could change the choice.
**Image prompt:** Original small-team engineering workshop scene with a PLC, HMI, Ethernet switch, serial gateway, and a blank requirement card being compared; no readable text.

### Break | 01:40-01:50

### PLC protocols and data mapping | 01:50-02:35

**11. Modbus RTU and Modbus TCP (10 min)**
- Modbus RTU commonly carries framed requests over serial links; Modbus TCP carries Modbus application messages over TCP/IP, commonly on Ethernet. The serial and TCP transport details differ even when the data model is familiar.
- The common data model distinguishes coils and discrete inputs (bit values) from holding and input registers (16-bit values); read/write permissions and device-specific support vary.
- Worked mapping: a MedPack `PillCount` may be represented by a documented register or tag, but the actual address, signedness, scaling, word order, and allowed function code must come from the PLC map.
- Check reference notation versus client indexing with both PLC and client documentation; a displayed `40001` reference may be represented by a zero-based software offset, but this is not universal.
**Image prompt:** Original side-by-side Modbus RTU serial frame and Modbus TCP message path, with a coil bit and 16-bit register drawn as data examples but no characters or text.

**12. PROFINET and EtherNet/IP (15 min)**
- PROFINET and EtherNet/IP are distinct industrial communication systems that use Ethernet infrastructure but have different device descriptions, configuration workflows, services, and interoperability requirements.
- At a high level, both support time-sensitive cyclic data exchange and additional configuration/diagnostic or explicit services, but the exact mechanisms and timing depend on protocol variant, device, controller, and network design.
- For a MedPack PLC/HMI/device combination, verify the CPU/module role, firmware/options, supported device profile, configuration file, data size, diagnostic coverage, and vendor compatibility in current manuals.
- Neither name is a generic synonym for Ethernet; ordinary Ethernet connectivity alone does not prove the PLC can exchange the required process data.
**Image prompt:** Original two distinct industrial PLC network diagrams, one with a controller and configured I/O device and one with a scanner/adapter pair, both connected through Ethernet switches; no text or logos.

**13. Other PLC-relevant technologies (10 min)**
- PROFIBUS is a fieldbus family used for controller/device communication; IO-Link is a point-to-point sensor/actuator interface through an IO-Link master; OPC UA provides structured information exchange between compatible applications/devices.
- MedPack examples: a supported PROFIBUS remote-I/O segment, an IO-Link smart sensor connected to a compatible master, or OPC UA data exposure to a supervisory client are different integration points, not interchangeable cable choices.
- For each candidate, identify the master/controller/client role, device support, required gateway or module, configuration tools, data model, and security/update constraints.
- Expected response: choose the technology that matches the integration need, then verify the actual PLC module and device protocol maps before promising connectivity.
**Image prompt:** Original three-panel industrial illustration of a PROFIBUS fieldbus segment, an IO-Link master with smart sensor, and an OPC UA server-client information path; no text.

**14. Data mapping, quality, and permissions (10 min)**
- Trace one MedPack value end-to-end: PLC tag -> verified protocol address or symbol -> data type/encoding -> HMI display, documenting units and any scaling.
- Use `PillCount` as an integer read value and `StartRequest` as a bounded command request; define range, ownership, read/write permission, update expectation, and stale/quality indication for each.
- Check byte/word order for multi-register values, signedness, address offsets, and data update rate using both endpoint documentation and a known-value test.
- `EStopStatusReadOnly` may be displayed as status feedback only; HMI data mapping is not a substitute for the independent safety function.
**Image prompt:** Original tag-mapping diagram connecting a PLC variable table through a protocol data block to an HMI numeric display and a permission-controlled command button; no labels or text.

### Comparison and integration activity | 02:35-03:15

**15. Build the P3 comparison matrix (20 min)**
- Activity procedure: create two separate matrix sections, comparing a specified Ethernet/serial interface pair and Modbus TCP/RTU protocol variants; do not place protocol names in the physical-link column.
- For each option record topology, distance constraints, noise/installation considerations, bandwidth/update suitability, typical PLC use, commissioning strengths, and limits.
- Add one documented MedPack endpoint pair and cite official manuals for all numeric limits, supported functions, and product capabilities; mark unverified values as unknown.
- Expected debrief: the matrix should show that Modbus RTU and TCP differ in transport/framing while Ethernet and RS-485 describe different connection layers.
**Image prompt:** Original completed-looking but text-free comparison matrix layout beside a PLC Ethernet port and an RS-485 terminal, with visual icons for topology, noise, and use case.

**16. Draw and label an end-to-end connection (20 min)**
- Procedure: draw the selected PLC, HMI or remote-I/O endpoint, every switch/gateway, physical medium/interface, protocol, endpoint roles, addressing, and one MedPack data path.
- Label the protocol and the physical interface separately; show a `PillCount` read or `StartRequest` exchange with data type, direction, and the source manual/map.
- Peer review test: another learner should be able to identify the cable/interface, protocol, endpoint configuration, data map, and one likely failure boundary without verbal hints.
- Expected debrief: if the drawing says only “Ethernet” or “Modbus,” it is incomplete because it omits either the actual connection or the application exchange.
**Image prompt:** Original clear engineering network diagram with PLC, switch, HMI, cable types, endpoint roles, and a highlighted count-data path, with no text or labels.

### P3 evidence check | 03:15-03:30

**17. P3 common errors (7 min)**
- Correct four frequent errors: calling RS-485 a protocol, treating Ethernet as an application protocol, assuming same cable means compatibility, and presenting a speed/distance as universal.
- A complete comparison names the chosen medium/interface, topology, protocol, endpoint roles, relevant noise controls, and the source for product-specific limits.
- Ask learners to repair one weak claim: “Ethernet is deterministic and all PLCs can connect” becomes a qualified statement tied to protocol, traffic design, compatible devices, and verified timing requirements.
**Image prompt:** Original split visual contrasting an incorrect tangled PLC network sketch with a corrected layered topology drawing, using symbols only and no text.

**18. Exit ticket: compare, do not list (8 min)**
- In a short response, compare one physical link/interface pair and one protocol pair on two dimensions from topology/distance, noise, speed/bandwidth, and typical use.
- Include one MedPack use case and state one compatibility fact that must be verified in the selected PLC or HMI manual.
- Expected answer distinguishes a connection (for example, RS-485) from a message/protocol (for example, Modbus RTU) and avoids unsupported universal numeric claims.
**Image prompt:** Original exit-ticket still life showing a small PLC, two alternative communication cables, a protocol frame sketch, and a blank answer sheet; no writing or logos.

## Evidence and criterion map

| P3 requirement | Session evidence |
|---|---|
| At least two communication links | Ethernet and serial interfaces (RS-232/RS-485) compared |
| At least two standards/protocols | Modbus RTU/TCP plus industrial Ethernet protocol examples |
| Illustrate main differences | Matrix and labelled PLC network diagram |
| Compare relevant properties | Topology/distance, noise, speed/bandwidth, and typical use |

## Between-session task

Use the selected PLC manual to verify one supported link/protocol combination and prepare an annotated connection diagram for Week 7's bus and HMI/SCADA integration work.