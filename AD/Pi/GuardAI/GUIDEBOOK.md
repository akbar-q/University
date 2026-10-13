# GuardAI Build Guide for First-Time Raspberry Pi Builders

This guide expands the GuardAI technical report into a safe, staged learning path for someone new to Raspberry Pi, Linux, sensors, and GPIO.

> **Project status:** Treat this as a design specification, not a finished safety product. The report lists 15% progress and says hardware has not been purchased. This folder currently contains documentation and the wiring diagram, not the proposed `code/` tree, trained PPE model, setup script, or tested device. No worker-safety decision should depend on an unimplemented or unvalidated prototype.

Read the [technical report](GuardAI_Technical_Report%20copy.md) with this guide. Refer to the [wiring diagram](GuardAI_Technical_Report_media/media/a9ab38b3374bd7f6a88d0813e18c30da91cfe086.png) for the planned connections, but verify each specific module's pinout and voltage requirements before wiring.

## 1. The System in Plain Language

GuardAI is intended to be a pole-mounted monitor near a worksite entry point. A visible-light camera looks for hard hats, vests, and gloves. A thermal camera estimates face/forehead surface temperature. A BME280 and a black-globe DS18B20 contribute environmental readings used to estimate heat stress. Software combines PPE, heat, and posture signals into a state—Safe, Caution, Danger, or Stop Work—and may illuminate LEDs, sound a beacon/siren, send an SMS, and record an event for a dashboard.

The intended data path is:

1. Capture a camera frame and detect people, PPE, and selected posture cues.
2. Read thermal and environmental sensors and check their freshness and validity.
3. Estimate wet-bulb temperature and WBGT; compute heat, PPE, and posture scores.
4. Combine those scores into a state and explain which inputs caused it.
5. Update the status lights and, under tested rules, the relay outputs and SMS alerts.
6. Store the result and show recent events and a daily report.

This prototype cannot diagnose heat illness, establish legal PPE compliance, or replace a trained safety officer, an approved heat-stress procedure, or emergency response. Treat every displayed score as advisory until independently validated.

## 2. Important Terms

- **GPIO:** Raspberry Pi input/output pins. The Pi uses 3.3 V logic; GPIO pins are not 5 V tolerant.
- **Physical pin number:** Position on the 40-pin header. **BCM number:** GPIO signal identifier used in software. For example, physical pin 15 is BCM GPIO22.
- **I²C:** Two shared wires, SDA and SCL, for addressed sensors. The MLX90640 and BME280 can share the bus if their addresses are distinct.
- **1-Wire:** A data bus used here by the DS18B20 temperature probe. Its data line needs a pull-up resistor.
- **UART:** A serial connection. Connect the transmitting module's TX to the Pi's RX and the module's RX to the Pi's TX, after checking logic voltage.
- **Relay:** An electrically controlled switch. The Pi controls the relay input; an appropriately rated external power circuit supplies the beacon or siren.
- **WBGT:** Wet Bulb Globe Temperature, a heat-stress environmental index. Estimating it from sensors is not the same as taking a compliant, calibrated WBGT measurement.

## 3. Safety, Privacy, and Use Limits

- Build and validate with the siren, beacon, and relay loads disconnected or replaced by low-voltage test lamps first. Power down before changing wiring.
- Never connect a 5 V signal to a Pi GPIO. Confirm the exact breakout and GSM module logic levels; some modules need level conversion even when the supply voltage is correct.
- Power the GSM module and 12 V alarm devices from their own correctly rated supplies. Join grounds only as required by the interface design, and verify relay contact ratings for the actual DC/inductive load. Do not power these loads from the Pi.
- Keep all high-current and alarm wiring inside a correctly rated enclosure. If any mains circuit is added, a licensed electrician must design and install it. The relay drawing does not make an installation safe by itself.
- Do not use the prototype to automatically discipline, exclude, or label a worker. Provide a human review and a way to challenge incorrect results. Missing or occluded PPE must not silently become a confident violation.
- Camera imagery and worker-linked events are sensitive. Set signage and an approved purpose, minimize stored images and identifiers, restrict dashboard access, choose a retention period, and secure the GSM credentials and phone numbers. Prefer storing event measurements and aggregate counts rather than raw video.
- Do not use a reported temperature or score to delay first aid or emergency response. Follow the site's established heat illness and stop-work procedures.

## 4. Hardware and Pin Reference

The report lists a Raspberry Pi 5 8 GB with its 27 W supply, cooling, and 64 GB card; Camera Module 3 with a Pi 5 cable; MLX90640; BME280; DS18B20 probe in a matte-black copper globe; opto-isolated two-channel relay; 12 V beacon and siren with a 12 V 3 A supply; SIM7600 or SIM800L GSM module with its own 5 V 2 A supply and antenna/SIM; and three LEDs with 330 Ω resistors. Module variants matter, so check each datasheet before ordering.

| Device | Raspberry Pi connection in the report | Check before use |
|---|---|---|
| Camera Module 3 | Pi 5 CAM/DISP connector | Use the correct Pi 5 22-pin-to-camera 15-pin cable. Confirm orientation and latch; connect only with Pi power off. |
| MLX90640 | 3V3 pin 1, GND pin 6, SDA pin 3, SCL pin 5 | I²C address `0x33`; verify breakout supply and logic levels. Confirm the lens/FOV can resolve the target at the intended distance. |
| BME280 | 3V3 pin 17, GND pin 9, SDA pin 3, SCL pin 5 | I²C address `0x76`; verify module pinout and address. |
| DS18B20 | VDD pin 1, GND pin 14, DATA pin 7 (BCM GPIO4) | Add a 4.7 kΩ pull-up between DATA and 3V3. Wire colors vary; use the probe datasheet, not color assumptions. |
| Relay inputs | 5 V pin 2, GND pin 20, IN1 pin 11 (BCM17), IN2 pin 13 (BCM27) | Check whether the board is active-low and whether it reliably accepts 3.3 V GPIO control. Contacts switch the separately powered 12 V alarm loads. |
| GSM module | Module TXD to Pi RX pin 10 (BCM15); module RXD to Pi TX pin 8 (BCM14); GND pin 25 | Dedicated 5 V 2 A supply as reported. Verify UART voltage levels and peak current; use a level shifter if required by the module. |
| Green/amber/red LEDs | Anodes to pins 15/16/18 (BCM22/23/24); cathodes to GND pin 30 | One 330 Ω series resistor per LED. Check polarity; the longer leg is often the anode but verify the part. |

## 5. Set Up the Pi for a First Build

1. Use Raspberry Pi Imager on another computer to install a current 64-bit Raspberry Pi OS image on the microSD card. The desktop version is friendlier for first-time setup; use a private password and configure the network. Enable SSH only if you need remote administration.
2. Boot the Pi 5 with its official or correctly rated 27 W USB-C supply and active cooling. Complete first-run setup, open a terminal, then update and reboot:

   ```bash
   sudo apt update
   sudo apt full-upgrade -y
   sudo reboot
   ```

3. Attach the camera with the Pi powered off. Check it using `rpicam-hello --list-cameras`; a desktop preview can be tested with `rpicam-hello -t 5000`. Consult the current Raspberry Pi camera documentation if commands differ on the installed OS.
4. Use `sudo raspi-config` to enable I²C, 1-Wire, and the hardware serial port. For UART, enable the port but disable the serial login shell. Reboot if requested. The serial console must not compete with the GSM modem.
5. Connect the MLX90640 and BME280 one at a time. Run `i2cdetect -y 1`; expect `33` and `76` once both are connected. If an address is missing, power down and check wiring, bus settings, supply, and the module's actual address.
6. Add the DS18B20 and confirm the 1-Wire device is detected using the method supported by the installed OS. Check the pull-up resistor connection and probe pinout before debugging software.
7. Add GSM last. Confirm the UART is free, the antenna is fitted, the SIM is provisioned for SMS, and the supply can handle transmit-current peaks before sending a test message.

## 6. Bring Up One Function at a Time

1. **Camera only:** Capture test frames and verify focus, framing, distance, lighting, and the working area. Mark a consistent worker position 1–1.5 m from the pole only after confirming both cameras' fields of view at that distance.
2. **Sensors individually:** Log raw MLX90640, BME280, and DS18B20 values with timestamps. Compare ambient and globe readings with reference instruments; test disconnected, stale, and out-of-range values.
3. **Heat calculation:** Implement units and calculation tests independently of the camera and actuators. Compare readings with a suitable reference across the intended shaded/sunlit conditions and the full environmental range.
4. **PPE model offline:** Train and evaluate a model on a laptop or approved training environment before deploying it to the Pi. Use a properly licensed dataset that represents local PPE, camera angle, lighting, occlusion, and relevant worker variation. Keep evaluation examples separate from training examples.
5. **Posture and person association:** Test whether detections from both cameras can be associated with the same person at the same time. The report does not define tracking, identity handling, confidence rules, or what happens when a sensor cannot see a person; these are required design decisions.
6. **Fusion in simulation:** Feed test cases into the score logic without driving real outputs. Cover each missing PPE item, heat levels, posture flags, low-confidence detections, sensor failures, and conflicting inputs.
7. **Lights and relay:** First test GPIO LEDs through their resistors. Then test relay logic with a low-voltage indicator load. Confirm the relay's startup state and whether it is active-low before connecting the separate 12 V beacon or siren.
8. **SMS and dashboard:** Use a test number and a short alert cooldown. Secure the dashboard to a trusted network, verify that each alert has a reason and timestamp, and make sure credentials are not committed to source control.
9. **Enclosure and supervised trial:** Check cooling, cable strain relief, sunshade, rain protection, visibility, manual disable, and safe access. Begin with a supervised, non-operational trial; do not use prototype alerts as the site's sole safety system.

## 7. Heat and Score Logic: What Must Be Validated

The report proposes `WBGT = 0.7 × Tw + 0.2 × Tg + 0.1 × Ta`, where `Tw` is wet-bulb temperature, `Tg` is globe temperature, and `Ta` is ambient temperature. It proposes estimating `Tw` from air temperature and relative humidity using the Stull approximation, with thresholds at 28, 30, and 32 °C.

Those choices require expert review. The formula depends on the exposure conditions; the outdoor direct-solar WBGT equation and the indoor/no-direct-solar equation are not interchangeable. A computed wet-bulb estimate and low-cost sensor assembly are not automatically a standards-compliant WBGT instrument. Confirm the applicable method with a qualified occupational heat-safety professional and compare against a calibrated reference meter under representative site conditions.

The thermal camera reports an array of surface temperatures, not a person's core temperature. Its field of view, distance, angle, emissivity, sunlight, sweat, hair, headwear, and background can all affect readings. The proposed mean of the six hottest pixels may select a hot background object. Validate the target region and repeatability with an appropriate reference; do not call it a clinical temperature.

The report also leaves score details open: PPE score is described as 0.4 per missing item, which can exceed 1.0 with three missing items unless capped or normalized. The composite uses PPE, heat, and posture weights of 0.35, 0.45, and 0.20, but the numeric boundaries for Safe/Caution/Danger are not given. Define normalization, class confidence, temporal smoothing, unknown/occluded states, and each alert boundary before implementation. Treat sensor or model uncertainty as **unknown/manual review**, not Safe.

## 8. Software, Alerts, and Operations

The proposed code paths include `code/guardai/main.py`, vision modules for camera/PPE/pose, sensor modules for thermal/environment/WBGT, fusion score logic, SMS and beacon outputs, a dashboard, settings, calibration/training scripts, tests, and a systemd service. None of that source code is currently in this documentation folder.

When code is supplied, read its README and inspect `setup_pi.sh` before running an administrator-level installer. Confirm its packages, interface settings, model paths, network exposure, credentials handling, and service behavior. Do not train on workers' images without an approved purpose, consent/notice, access controls, and retention rules.

The report proposes camera processing at 5 fps, event storage in SQLite, status lights, beacon for Danger/Stop, siren for Stop, and an SMS cooldown of five minutes. The report's dashboard uses port 8080 and shows live state and daily totals. Treat these as proposed behavior: verify rate limits, retries, duplicate alerts, clock accuracy, power-loss recovery, database backups, and false-positive/false-negative handling before a field trial. Confirm actual dashboard and API routes in code before using them.

The GSM text explicitly says to use a separate 5 V 2 A supply and common ground. Confirm exact SIM7600/SIM800L board requirements, antenna, SIM, carrier support, UART logic levels, and SMS service before selecting a module. Never put a supervisor's phone number or modem credentials in a public repository.

## 9. Troubleshooting and Test Targets

| Symptom | First checks |
|---|---|
| Camera absent | Power off, reseat the correct ribbon cable, confirm connector orientation, then list cameras with `rpicam-hello --list-cameras`. |
| I²C scan misses `33` or `76` | Check power, ground, SDA/SCL order, I²C enablement, breakout pinout, and device address. Test one device at a time. |
| DS18B20 absent or unstable | Verify probe pinout, GPIO4 mapping, 4.7 kΩ DATA-to-3V3 pull-up, 1-Wire enablement, and cable length. |
| GSM does not respond | Check its separate supply and current capacity, antenna/SIM, UART port selection, serial login shell, TX/RX crossing, baud rate, and logic-level compatibility. |
| Relay or alarm activates at boot | Disconnect the load, determine active-high/active-low behavior, set outputs to a safe state early, and test power-up/reset states before reconnecting. |
| Thermal readings jump | Check distance, lens/FOV, reflections, direct sun, target region, sensor warm-up, and comparison with a reference instrument. |
| Worker is incorrectly flagged | Review image quality, PPE class-specific precision/recall, occlusion, person association, confidence threshold, model/site mismatch, and human-review path. |

The report's proposed targets are PPE mAP@0.5 of at least 90%, no more than 300 ms per frame, thermal agreement within ±0.5 °C of a reference after calibration, WBGT agreement within ±1 °C, Stop Work alert within 3 seconds of a simulated input, and matching dashboard/database totals. Measure each across a documented test set and conditions. These are project goals, not achieved results or proof that the device is safe for operational decisions.

## 10. Suggested Milestones

1. Resolve the WBGT method, score normalization and state thresholds, camera fields of view, uncertainty behavior, privacy plan, and output safe states with qualified reviewers.
2. Set up the Pi, verify its cooling and camera, and log each sensor individually.
3. Compare thermal/environmental readings with reference instruments; validate WBGT before connecting alarms.
4. Train and evaluate the PPE model offline on a documented, representative dataset; measure per-class errors and latency on the Pi.
5. Implement fusion tests and the human-review path using simulated inputs only.
6. Add LEDs, low-voltage relay testing, GSM test SMS, and dashboard one at a time.
7. Run a supervised, non-operational field trial, document failures and corrections, and obtain safety/privacy approval before any operational use.