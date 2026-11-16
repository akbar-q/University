# PLC Programs

This folder contains 16 complete PLC projects for pill-packaging and related process-control exercises. Each project README presents its supplied process diagram first, then the declared variables, followed by every ladder rung in source order with a rung image and an explanation of the logic and power flow.

## Program Index

| # | Program | Focus |
| --- | --- | --- |
| 01 | [Buffer Gate](01%20Buffer%20Gate/README.md) | Pass an input state directly to an output. |
| 02 | [NOT Gate](02%20NOT%20Gate/README.md) | Invert a bottle-present signal for no-bottle fault indication. |
| 03 | [OR Gate](03%20OR%20Gate/README.md) | Raise a common indication when either condition is active. |
| 04 | [AND Gate](04%20AND%20Gate/README.md) | Require both permissive conditions before enabling a run signal. |
| 05 | [XOR Gate](05%20XOR%20Gate/README.md) | Detect disagreement between two sensor states. |
| 06 | [Latching - Conveyor Belt](06%20Latching%20-%20Conveyor%20Belt/README.md) | Start/stop seal-in control for a conveyor motor. |
| 07 | [Blinky - Heartbeat](07%20Blinky%20-%20Heartbeat/README.md) | Timed cycle-running indication. |
| 08 | [Blinky - Fault Indicator](08%20Blinky%20-%20Fault%20Indicator/README.md) | Timed fault indication. |
| 09 | [Counter - Blister Package Target](09%20Counter%20-%20Blister%20Package%20Target/README.md) | Count packaging sensor events toward a target. |
| 10 | [Counter - Maintenance Alert](10%20Counter%20-%20Maintenance%20Alert/README.md) | Count fault events and operate a maintenance alert latch. |
| 11 | [Maths - ADC Acquisition](11%20Maths%20-%20ADC%20Acquisition/README.md) | Demonstrate analog-value arithmetic and scaling. |
| 12 | [AirCon Control](12%20AirCon%20Control/README.md) | Temperature-threshold control with a start/stop process latch. |
| 13 | [Analog Level Sensing - Oil Seperation](13%20Analog%20Level%20Sensing%20-%20Oil%20Seperation/README.md) | Compare analog level readings to control separation valves. |
| 14 | [Single Tank Control](14%20Single%20Tank%20Control/README.md) | Fill, indicate, and drain a single tank using level switches. |
| 15 | [Single Agitated Mixing Tank](15%20Single%20Agitated%20Mixing%20Tank/README.md) | Sequence tank filling, mixing, heating, and discharge. |
| 16 | [Two Tank Control - Heat and Cool](16%20Two%20Tank%20Control%20-%20Heat%20and%20Cool/README.md) | Coordinate heating and cooling processes across two tanks. |

## Documentation Notes

- The program source in each `pous/programs/main.ld` is the reference for rung logic and declared variables. Supplied diagrams and screenshots are included for context; any discovered differences are called out in the individual README.
- Image links are relative to the project folder. Most projects store captures in `Images`; `01 Buffer Gate` uses its existing `Screenshots` folder.
- Two additional folders, `08 Counter - Maintenance Alert` and `09 AirCon Control`, do not contain both a `project.json` manifest and a `pous/programs/main.ld` source file. They are not included in this index as complete programs.
- These projects are instructional examples. Their descriptions do not establish that any logic is safety-rated or suitable as the sole protection for real machinery or product.