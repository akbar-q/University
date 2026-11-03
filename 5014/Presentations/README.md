# Unit 5014 - Weekly PowerPoint Outlines

These Markdown documents are detailed slide-by-slide outlines for eight 3-4 hour teaching sessions covering the supplied LO3 and LO4 criteria.

## Files

- `Week1_PPT_Outline.md` - analogue and digital representation (P4)
- `Week2_PPT_Outline.md` - ADC topologies and specifications (P5, M4)
- `Week3_PPT_Outline.md` - DAC topologies and calculations (P5, M4)
- `Week4_PPT_Outline.md` - DAC simulation study (D3)
- `Week5_PPT_Outline.md` - ADC temperature-monitor specification and design (P6)
- `Week6_PPT_Outline.md` - ECAD simulation and design/tolerance variation (P7, D4)
- `Week7_PPT_Outline.md` - circuit construction and bench testing (P8, M5)
- `Week8_PPT_Outline.md` - graphical evaluation and specialist presentation (M5, D4)

Each outline assumes 3 hours 45 minutes including a 10-minute break. Confirm timetable, selected hardware, ECAD tool, component availability and assessment submission requirements with the module tutor before delivery.

The LO4 project uses an extra-low-voltage thermistor-to-ADC temperature monitor. It is a teaching prototype, not a certified safety system. LO3 DAC simulations remain a separate assessment activity.

## Editable PowerPoint Deck

- `Week1_Analogue_and_Digital_Information.pptx` - Week 1 foundations: analogue and digital information.
- `Week2_ADC_Topologies_and_Requirements.pptx` - ADC architectures and specifications.
- `Week3_DAC_Topologies_and_Output_Requirements.pptx` - DAC architectures and output requirements.
- `Week4_DAC_Simulation_Study.pptx` - controlled DAC simulation study.
- `Week5_ADC_Temperature_Monitor_Design.pptx` - thermistor-to-ADC design.
- `Week6_ADC_Temperature_Monitor_Simulation.pptx` - ECAD simulation, changes and tolerances.
- `Week7_ADC_Circuit_Bench_Testing.pptx` - safe construction and bench testing.
- `Week8_Circuit_Analysis_and_Presentation.pptx` - graphical evaluation and presentation.

All decks have 16 editable slides with speaker notes. Text, shapes, plots and diagrams are native PowerPoint objects; replace illustrative diagrams with your own sourced data or results where required.

- `build_week1_ppt.js` - rebuilds the Week 1 deck.
- `build_weeks2to8_ppt.js` - rebuilds the Week 2-8 decks from their Markdown outlines.

Run the relevant script from this folder with Node.js to regenerate its deck or decks. Both scripts use the workspace's shared PptxGenJS installation.