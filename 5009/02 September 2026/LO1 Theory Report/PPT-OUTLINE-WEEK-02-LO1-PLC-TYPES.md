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
- Display five statements about MedPack; learners classify each as brief-stated, derived requirement, or unverified assumption.
- Reuse the corrected application baseline, not an imagined specification.

**2. Why PLCs come in different forms (5 min)**
- Ask why a small machine and a distributed process plant might need different controller architectures.
- Introduce cost, I/O layout, expansion, performance, environment, lifecycle, and support as comparison dimensions.

**3. LO1.P2 and the evidence standard (5 min)**
- State the requirement: compare at least three models/manufacturers using technical and practical evidence.
- Explain exact model numbers and current official manuals matter more than brand-level claims.

### PLC architectures and applications | 00:15-01:05

**4. Compact and micro PLCs (12 min)**
- Cover integrated CPU and I/O, small footprint, typical machine-control uses, and limits on expansion or distributed architecture.
- Compare what to verify: onboard I/O types, communication ports, expansion method, and programming environment.

**5. Modular, rack-based PLCs, and PACs (13 min)**
- Explain CPU plus selectable modules, rack/backplane concepts, distributed I/O, redundancy/motion/process options where supported, and system growth.
- Discuss engineering complexity, panel footprint, cost, and maintenance trade-offs.
- Clarify that PAC/PLC categories overlap in vendor marketing and do not replace checking the actual feature set.

**6. Safety PLCs and safety systems (12 min)**
- Explain safety-rated controllers/modules and certified safety functions at a high level; distinguish ordinary process control from safety functions.
- Compare safety relay and safety PLC architectures as design options, not as interchangeable by default.
- Ask what risk assessment, required performance level, diagnostics, validation, and reset behaviour would need to be established.

**7. Match PLC class to application (13 min)**
- Consider standalone packaging station, multi-station production line, remote pump station, and process skid.
- Teams identify the likely controller class and the requirements that could change the answer.
- Visual: application scale against I/O distribution, motion, and lifecycle needs.

### Manufacturer and engineering ecosystems | 01:05-01:40

**8. Manufacturer landscape: research candidates (10 min)**
- Introduce example families as research starting points: Siemens SIMATIC S7-1200/S7-1500; Rockwell Automation Micro800/CompactLogix; Schneider Electric Modicon M221/M241; Mitsubishi MELSEC FX; Omron CP/NX; AutomationDirect CLICK/Do-more.
- Make clear exact family variants and availability differ by region and date; no family is selected in advance.

**9. Programming and support ecosystems (15 min)**
- Compare programming tools, IEC 61131-3 language support where applicable, licensing, simulation, diagnostics, HMI integration, documentation, training, and local support.
- Consider staff familiarity and maintainability without turning them into unsupported reliability claims.
- Prompt: how can two technically similar PLCs have different lifecycle costs?

**10. Build a fair shortlist (10 min)**
- Select at least three models from different manufacturers in a comparable class.
- Apply mandatory gates first: required I/O, electrical ratings, safety architecture, communications, environment, and supportability.
- Use the Week 1 requirement list; do not shortlist based only on price or familiarity.

### Break | 01:40-01:50

### Datasheet comparison methods | 01:50-02:35

**11. Find the exact hardware identity (10 min)**
- Read the CPU and I/O part number, suffixes, supply variant, output type, included ports, firmware, and document revision.
- Explain why a product-family page is not enough to prove an individual CPU's capabilities.

**12. Compare I/O, expansion, and communications (15 min)**
- Matrix fields: DI/DO count and type; relay outputs; analogue support; expansion modules; remote I/O; Ethernet/serial ports; supported protocols; maximum system size where specified.
- Cite page/table for each number and mark unavailable information explicitly.

**13. Compare performance and user-facing features (10 min)**
- Identify scan/performance information, high-speed counter inputs, memory, timers/counters, diagnostics, display/indicators, online monitoring, simulation, and engineering workflow.
- Explain that scan-time claims need comparable conditions and may not predict complete application response.

**14. Compare practical ownership factors (10 min)**
- Evaluate installation/wiring, terminal style, panel footprint, documentation, troubleshooting, vendor lifecycle notices, training, spare availability, and dated pricing.
- Price source record: supplier, date, currency, included modules/software, and tax/shipping assumptions.

### Comparison workshop | 02:35-03:15

**15. Three-manufacturer comparison sprint (20 min)**
- Teams populate a minimum comparison matrix for three exact models from separate manufacturers.
- Required fields: I/O, relay outputs, expansion, programming, UI/diagnostics, reliability evidence, cost, and practical support.
- If data is unavailable, record the gap and how it could be resolved; do not invent a value.

**16. Defend the quality of the comparison (20 min)**
- Teams swap matrices and check whether evidence is current, comparable, and application-related.
- Each group explains one meaningful difference and one dimension that cannot yet be fairly compared.

### P2 evidence check | 03:15-03:30

**17. P2 checklist: has a real comparison been made? (7 min)**
- Check three manufacturers/models, required technical attributes, practical factors, citations, and balanced discussion.
- Point out unsupported labels such as "more reliable" or "best value" without a defined evidence basis.

**18. Exit ticket: strongest differentiator and missing fact (8 min)**
- Name one candidate difference relevant to MedPack, cite its evidence, and identify one missing fact that could affect selection.

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