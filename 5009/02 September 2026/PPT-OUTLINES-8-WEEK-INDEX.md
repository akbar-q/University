# Unit 5009: Eight-Week LO1/LO2 PPT Outline Index

These eight documents are weekly teaching-deck outlines paired with editable PowerPoint decks. Each plan is for a 3.5-hour session (210 minutes, including a 10-minute break) and contains slide timings, substantive teaching points, worked examples, activities, and expected evidence.

| Week | Learning outcome | Weekly presentation | PowerPoint deck | Main criteria |
|---|---|---|---|---|
| 1 | LO1 | [Investigating the MedPack Application](LO1%20Theory%20Report/PPT-OUTLINE-WEEK-01-LO1-APPLICATION.md) | [Week 1 deck](LO1%20Theory%20Report/Week-01-LO1-Application-Analysis.pptx) | P1 |
| 2 | LO1 | [PLC Types and Manufacturer Comparison](LO1%20Theory%20Report/PPT-OUTLINE-WEEK-02-LO1-PLC-TYPES.md) | [Week 2 deck](LO1%20Theory%20Report/Week-02-LO1-PLC-Types-and-Manufacturers.pptx) | P2 |
| 3 | LO1 | [PLC Specifications and I/O Modules](LO1%20Theory%20Report/PPT-OUTLINE-WEEK-03-LO1-SPECS-MODULES.md) | [Week 3 deck](LO1%20Theory%20Report/Week-03-LO1-Specifications-and-Modules.pptx) | P2 |
| 4 | LO1 | [PLC Selection and Critical Evaluation](LO1%20Theory%20Report/PPT-OUTLINE-WEEK-04-LO1-SELECTION.md) | [Week 4 deck](LO1%20Theory%20Report/Week-04-LO1-Selection-and-Evaluation.pptx) | P1, P2, M1, D1 |
| 5 | LO2 | [Signal Processing and Signal Integrity](LO2%20Demo/PPT-OUTLINE-WEEK-05-LO2-SIGNALS.md) | [Week 5 deck](LO2%20Demo/Week-05-LO2-Signal-Processing.pptx) | LO2 foundations and Task 2 practical evidence |
| 6 | LO2 | [Communication Links and Protocols](LO2%20Demo/PPT-OUTLINE-WEEK-06-LO2-COMMS.md) | [Week 6 deck](LO2%20Demo/Week-06-LO2-Links-and-Protocols.pptx) | P3 |
| 7 | LO2 | [Networked Bus Systems and Integration](LO2%20Demo/PPT-OUTLINE-WEEK-07-LO2-BUS-INTEGRATION.md) | [Week 7 deck](LO2%20Demo/Week-07-LO2-Bus-and-Integration.pptx) | P4, M2 |
| 8 | LO2 | [Evaluating HMI/SCADA and Convergence](LO2%20Demo/PPT-OUTLINE-WEEK-08-LO2-EVALUATION.md) | [Week 8 deck](LO2%20Demo/Week-08-LO2-Evaluation-and-Convergence.pptx) | M3, D2; consolidation of P3/P4/M2 |

## Sequence logic

- Weeks 1-4 move from application analysis to PLC comparison, operational specification, and a defensible selection.
- Weeks 5-8 move from physical signal handling to communication, networked buses, integration, and evaluation of HMI/SCADA convergence.
- The MedPack pill-counting and packaging station is the common worked context so that I/O, network, and selection decisions remain connected.
- The assessment criteria are cumulative: later-week work does not replace missing Pass-level evidence.

## Delivery and verification notes

- Use current manufacturer manuals and datasheets for exact PLC specifications. Product examples are starting points only; exact capabilities vary by part number and revision.
- Verify protocol support, Modbus address offsets, tag types, scaling, and access permissions on the actual PLC/HMI configuration before a live demonstration.
- Safety functions must not rely on an ordinary PLC, HMI, SCADA server, or supervisory network as their sole control path.
- The assignment brief specifies Harvard referencing for submitted student work.

## Deck generation

- The PowerPoint decks contain 18 teaching slides each. Slide faces show the lesson content and editable topic diagrams; selected slides retain dedicated image bays for visuals that benefit from photography or illustration.
- Speaker notes preserve the complete teaching bullets/activity cues and contain a slide-specific optional image prompt.
- The generator and its npm project are in [`PPTX Builder`](PPTX%20Builder/).
- From that folder, run `npm install` once and then `npm run build` to regenerate the decks from the Markdown outlines.