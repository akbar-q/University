# Week 2 PPT Outline: PLC Types, Applications, and Manufacturers

**Unit/LO:** 5009, LO1  
**Focus:** Identify PLC architectures and compare operational features from several manufacturers  
**Criterion:** LO1.P2 foundation  
**Duration:** 3 hours 30 minutes (210 minutes, including a 10-minute break)  
**Scenario:** MedPack station requirements from Week 1

## Session outcomes

Students will distinguish common PLC form factors, match controller classes to applications, identify manufacturer ecosystems, and begin a traceable comparison of at least three exact PLC models from different manufacturers.

## Resources

Week 1 requirements and I/O draft; current official product pages, datasheets, and hardware manuals for three or more comparable PLCs; comparison-matrix worksheet; access to vendor programming-software pages.

## Run sheet

| Time | Slides | Segment | Duration |
|---|---:|---|---:|
| 00:00-00:15 | 1-3 | Retrieval and session framing | 15 min |
| 00:15-01:05 | 4-7 | PLC architectures and applications | 50 min |
| 01:05-01:40 | 8-10 | Manufacturer and engineering ecosystems | 35 min |
| 01:40-01:50 | - | Break | 10 min |
| 01:50-02:35 | 11-14 | Datasheet comparison methods | 45 min |
| 02:35-03:15 | 15-16 | Comparison workshop and peer check | 40 min |
| 03:15-03:30 | 17-18 | P2 evidence check and exit | 15 min |
| **Total** | **18 slides** |  | **210 min** |

## Slide-by-slide outline

### Retrieval and framing | 00:00-00:15

**1. Week 1 retrieval: requirement or assumption? (5 min)**
- Classify “pill sensor and actuator are in the brief” as stated, “input must capture the sensor pulse” as a derived requirement, and “sensor is 24 V DC” as unverified.
- Add two more checks: target count is a stated process need; actuator current and whether it fires per pill or per pack still require evidence.
- Expected debrief: only sourced facts become baseline requirements; unknown electrical values must become shortlist questions, not guessed PLC specs.
- Keep the revised Week 1 process diagram and I/O schedule visible as the shared MedPack reference for today.
**Image prompt:** Original engineering whiteboard scene with a pill sensor, actuator, and three visual evidence groups represented by a document, a logical arrow, and a question symbol, no text, labels, numbers, or logos.

**2. Why PLCs come in different forms (5 min)**
- A PLC architecture is the physical and functional arrangement of CPU, I/O, power, communications, and expansion; it determines how a control system is assembled and maintained.
- MedPack may suit a compact local controller if its verified I/O and timing needs are modest; a multi-station line may need distributed I/O and networked coordination.
- Compare I/O location, expansion, performance, panel space, environment, lifecycle, engineering effort, and local support rather than assuming “bigger is better.”
- Expected answer: choose architecture from requirements and interfaces; machine size alone is not enough to decide.
**Image prompt:** Original side-by-side technical illustration comparing a compact single-panel pill packaging cell with a distributed multi-station production line, accurate PLC cabinets and I/O locations, no text, labels, numbers, or logos.

**3. LO1.P2 and the evidence standard (5 min)**
- LO1.P2 requires comparison of operational features and characteristics across PLCs from several manufacturers; the assignment expects at least three exact models/manufacturers.
- The matrix must cover digital I/O, relay-output provision, expansion, programming, user interface/diagnostics, reliability evidence, cost, and practical wiring/support factors.
- A brand statement such as “brand X is more reliable” is not evidence; record the exact CPU part number, source document, revision/date, and relevant table or page.
- Debrief: if a feature or price cannot be verified, write “unknown” and state how to obtain comparable evidence.
**Image prompt:** Original technical comparison workspace with three distinct unbranded PLC controllers, open hardware manuals, a blank comparison matrix, and source markers, no text, labels, numbers, or logos.

### PLC architectures and applications | 00:15-01:05

**4. Compact and micro PLCs (12 min)**
- Compact/micro PLCs commonly combine CPU and some I/O in one housing; this can reduce wiring and panel footprint for a self-contained machine such as one MedPack station.
- Integrated I/O can constrain the mix of digital/analogue points or output types, so count the actual requirements and spare capacity before choosing a unit.
- Compare exact onboard DI/DO type and count, analogue capability, communication ports/protocols, expansion method, operating conditions, and engineering software.
- Misconception: “micro” is not a universal performance class; the manual for the exact CPU decides what it can do.
**Image prompt:** Original close-up technical photograph-style image of a compact PLC mounted in a small control panel beside pill-sensor and actuator terminal wiring, with realistic but unbranded components and no text, labels, numbers, or logos.

**5. Modular, rack-based PLCs, and PACs (13 min)**
- A modular PLC separates CPU, power, and selectable I/O/communication modules; a rack/backplane provides the local module connection, while remote I/O places modules closer to field devices.
- This architecture can fit MedPack line growth or specialised interfaces, but every module adds wiring, configuration, power demand, panel space, spares, and documentation to maintain.
- Motion, redundancy, process functions, and distributed-I/O capacity are model-specific options; verify supported modules, firmware, network limits, and system configuration in official manuals.
- “PAC” is a vendor/category label with overlapping PLC features; compare the actual functions and lifecycle factors, not the name on the product page.
**Image prompt:** Original technical cutaway illustration of a modular PLC rack with CPU, power supply, digital I/O, communication module, and remote I/O near a packaging station, no text, labels, numbers, or logos.

**6. Safety PLCs and safety systems (12 min)**
- A safety PLC/controller and its approved safety I/O implement specified safety functions only within their certified configuration, limits, and validated application; ordinary PLC logic is not a substitute.
- A safety relay may suit a simpler safety function; a safety PLC may support more complex logic/diagnostics. Risk assessment determines the needed architecture and performance, not convenience.
- For MedPack, establish hazards, required safe state, reset/restart behaviour, required PL/SIL where applicable, device compatibility, validation, and proof-test/maintenance duties with competent persons.
- Debrief: an ordinary PLC may monitor a safety-system status contact, but that status path does not perform or certify the E-stop function.
**Image prompt:** Original accurate safety-system diagram showing an emergency-stop device connected through a separate safety-rated control path to machine energy isolation, with a standard PLC monitoring status on an isolated side path, no text, labels, numbers, or logos.

**7. Match PLC class to application (13 min)**
- Case 1, one self-contained MedPack station: compact PLC is a starting hypothesis if I/O, pulse capture, safety architecture, and communications all fit.
- Case 2, multiple stations with field devices spread across a plant: modular controller and remote I/O may reduce long home-run wiring; verify network behaviour and diagnostics.
- Case 3, remote pump station or process skid: environment, analogue instrumentation, communications, and service access may outweigh physical size; no class wins without stated constraints.
- Team debrief: place each case by I/O distribution, motion/process needs, growth, and support; name one missing requirement that could change each choice.
**Image prompt:** Original engineering infographic illustration placing a single packaging station, a distributed factory line, a remote pump site, and a process skid along axes represented by physical distance and system complexity, no text, labels, numbers, or logos.

### Manufacturer and engineering ecosystems | 01:05-01:40

**8. Manufacturer landscape: research candidates (10 min)**
- Research starting points include Siemens SIMATIC S7-1200/S7-1500, Rockwell Automation Micro800/CompactLogix, Schneider Electric Modicon M221/M241, Mitsubishi MELSEC FX, Omron CP/NX, and AutomationDirect CLICK/Do-more.
- Families span different capacities and generations; select an exact current CPU part number and compatible I/O configuration before entering a claim in the MedPack matrix.
- Regional availability, firmware, model suffixes, documentation revisions, software terms, and support channels can differ; confirm each from current official sources.
- Expected practice: sample more than three candidates initially, then retain at least three genuinely comparable models from distinct manufacturers without assuming a winner.
**Image prompt:** Original tabletop product-research scene with several unbranded PLC form factors, a laptop displaying abstract product-page shapes, and official manuals, no visible brands, text, labels, numbers, or logos.

**9. Programming and support ecosystems (15 min)**
- Compare engineering software by supported languages/standards for the specific model, license and renewal terms, simulation/online functions, diagnostics, version compatibility, and HMI/network integration.
- Review maintenance evidence: manuals, wiring examples, troubleshooting tools, training availability, local technical support, spare access, and product lifecycle notices.
- MedPack example: familiar software may reduce training effort, but that does not prove hardware reliability; document the basis and separate it from technical suitability.
- Expected answer: lifecycle costs can differ through licenses, engineering time, training, commissioning, spares, downtime exposure, and support even when headline CPU features look similar.
**Image prompt:** Original engineering workstation scene showing a technician diagnosing a PLC connected to a pill-packaging line, with a laptop, paper manual, spare module, and training bench, no visible screen text, labels, numbers, or logos.

**10. Build a fair shortlist (10 min)**
- Start from the Week 1 I/O and constraints, then shortlist at least three exact models from separate manufacturers in a similar application class where possible.
- Apply mandatory pass/fail/unknown gates for required I/O type/count, sensor pulse capture, output electrical compatibility, safety-system boundary, communications, environment, and supportability.
- Exclude a candidate only for a documented failure; keep unknowns visible and assign an evidence source rather than treating them as passes.
- Debrief: price and familiarity can inform later preference scoring but cannot rescue a candidate that fails a mandatory application requirement.
**Image prompt:** Original selection funnel diagram with three different PLC candidates passing through clearly separated technical requirement gates for I/O, electrical compatibility, timing, safety, and support, using symbols only and no text, labels, numbers, or logos.

### Break | 01:40-01:50

### Datasheet comparison methods | 01:50-02:35

**11. Find the exact hardware identity (10 min)**
- Record manufacturer, complete CPU catalogue/part number, suffixes, supply variant, embedded I/O configuration, output type, ports, and supported firmware where the vendor specifies them.
- Match the data to the correct hardware manual/datasheet revision and note date, page/table, regional variant, and any required module configuration.
- Worked check: a family page describes several CPUs; a claimed relay output is valid only if the exact selected CPU or configured module explicitly lists that output type.
- Misconception: a shared family name does not mean all variants have identical I/O, communications, or performance.
**Image prompt:** Original macro technical image of a generic PLC nameplate and matching product manual page beside two visually similar CPU variants, with all markings abstracted and unreadable, no text, labels, numbers, or logos.

**12. Compare I/O, expansion, and communications (15 min)**
- Compare exact digital input/output count and electrical type, relay-output count/type, analogue I/O, built-in versus expansion points, compatible modules, and remote-I/O options.
- For communications, record physical port type, supported protocols, role/client limits, topology or node limits, and required option modules only where the official documentation states them.
- Use a source cell for every numeric or protocol claim: exact part number, document/revision, page/table; write “not specified” rather than estimating.
- MedPack check: a sufficient point count is not enough if the sensor input lacks the required event capture or the actuator output has an incompatible electrical type.
**Image prompt:** Original technical comparison graphic showing three PLCs with different digital/analogue I/O modules, relay terminals, Ethernet/serial ports, and a remote-I/O island, no text, labels, numbers, or logos.

**13. Compare performance and user-facing features (10 min)**
- Record the manufacturer’s defined performance metric and test conditions, high-speed counter/capture capability and limits, task behaviour, memory categories, timers/counters, diagnostics, and any local display/indicators.
- Compare online monitoring, simulation, fault tracing, program backup/restore, and HMI workflow as documented for the exact CPU/software versions.
- Scan-time numbers are comparable only when workload, configuration, I/O update, and measurement conditions align; they are not automatically the sensor-to-actuator response time.
- Expected conclusion for MedPack: pulse width, input filter, counter frequency, I/O update, and output response may matter more than a broad CPU speed claim.
**Image prompt:** Original timing-and-diagnostics illustration of a pill sensor pulse entering a PLC, a diagnostic laptop observing the signal, and an actuator output timeline shown as graphical traces without scales or text, no labels, numbers, or logos.

**14. Compare practical ownership factors (10 min)**
- Inspect terminal type, wiring access, module removal, footprint, heat/spacing guidance, required accessories, installation effort, documentation quality, and troubleshooting workflow.
- Record support and lifecycle evidence: regional service, training resources, spare availability, firmware/security notices where relevant, and published product status; avoid unsupported reliability rankings.
- For cost, cite a dated supplier quote with currency, exact configuration, included modules/software, quantity, tax/shipping assumptions, and whether engineering/training/spares are excluded.
- Debrief: compare like-for-like installed scope; a CPU-only price is not comparable with a complete MedPack controller configuration.
**Image prompt:** Original realistic control-panel installation scene comparing terminal access, module spacing, wiring routes, service documentation, and spare modules for two generic PLC assemblies, no text, labels, numbers, or logos.

### Comparison workshop | 02:35-03:15

**15. Three-manufacturer comparison sprint (20 min)**
- Teams fill three columns for exact models from distinct manufacturers and cite each source against digital I/O, relay outputs, expansion, software/programming, UI/diagnostics, reliability evidence, cost, and practical support.
- Start with a worked blank row: “pill sensor input” -> exact input type and filter/counter details -> manual page -> meets/unknown against the verified sensor requirements.
- Use “unknown” for unavailable fields and name the next evidence source, such as a hardware manual, vendor support response, or dated supplier quote.
- Teacher check: stop any unsupported numeric ratings, prices, or reliability claims; the comparison should be traceable before it is persuasive.
**Image prompt:** Original collaborative engineering workshop with three generic PLC units, official manuals, and a large blank comparison matrix being filled with source tabs, no readable text, labels, numbers, or logos.

**16. Defend the quality of the comparison (20 min)**
- Swap matrices and audit exact part-number match, source revision/date, like-for-like configuration, consistent units, and direct relevance to MedPack requirements.
- Peer test: trace one relay-output or I/O claim back to the cited table; if it describes another CPU variant, mark the comparison row unsupported.
- Each team reports one meaningful documented difference and one unfair or incomplete dimension; for example, cost cannot be compared until software and included modules align.
- Debrief: a fair comparison can conclude “not yet known”; explain what evidence would make the dimension comparable.
**Image prompt:** Original peer-review scene with two students cross-checking a generic PLC data table against open manuals and hardware modules, one unsupported row visibly flagged with a blank marker, no text, labels, numbers, or logos.

### P2 evidence check | 03:15-03:30

**17. P2 checklist: has a real comparison been made? (7 min)**
- Confirm at least three exact PLC models from distinct manufacturers and a matrix covering digital I/O, relay outputs, expansion, programming, UI/diagnostics, reliability evidence, cost, wiring, installation, documentation, support, and training.
- Check citations identify the exact hardware and current source; verify that prices include comparable configuration and a date/currency/source.
- Replace “more reliable” with evidence such as documented diagnostics, lifecycle status, operating limits, support/spare evidence, and the limits of that evidence.
- Expected P2 evidence: balanced application-linked differences, not a winner chosen from brand reputation or a single attractive feature.
**Image prompt:** Original checklist review illustration with three generic PLCs, a magnifying glass over a manual, a cost quotation sheet, and wiring/support icons, all paper blank of writing, no text, labels, numbers, or logos.

**18. Exit ticket: strongest differentiator and missing fact (8 min)**
- State one documented difference between two exact candidates and connect it to a MedPack need, for example verified high-speed input support against the pill sensor’s documented pulse limits.
- Give the exact source identity and page/table; do not report a model rating or price from memory or a family-level summary.
- Name one unresolved fact that could change the shortlist, such as actuator inrush, required safety architecture, or a current like-for-like installed quote.
- Carry the matrix and source log into Week 3, where electrical and timing compatibility will be tested in detail.
**Image prompt:** Original technical exit-ticket scene with a pill sensor, two generic PLC candidates, an open manual, and a visible unresolved-question symbol on a blank notecard, no text, labels, numbers, or logos.

## Evidence and criterion map

| Evidence produced | P2 relevance |
|---|---|
| Shortlist of exact models | Demonstrates comparison across at least three manufacturers |
| Manufacturer comparison matrix | Covers I/O, relay outputs, expansion, software, UI/diagnostics, reliability evidence, and cost |
| Source log | Enables the assessor to verify technical specifications and pricing |
| Peer-review notes | Shows comparison quality and identifies unsupported or non-comparable claims |

**P2 checklist:** three or more manufacturers; like-for-like models where possible; no hidden assumptions; datasheet citations; practical wiring, installation, documentation, support, and training considered.

## Between-session task

Complete the comparison matrix using current official documents and dated supplier prices. Bring one question about a PLC speed, current, voltage, memory, or module specification for Week 3.