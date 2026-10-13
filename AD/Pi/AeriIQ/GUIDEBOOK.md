# AeriIQ Build Guide for First-Time Raspberry Pi Builders

This guide turns the AeriIQ technical report into a staged learning and build plan. It assumes you are new to Raspberry Pi, Linux, GPIO wiring, and sensor buses.

> **Project status:** Treat this as a design specification, not a ready-to-run kit. The source report says 15% complete and also says no hardware has been purchased. The current folder contains the reports and diagram, not the `code/` tree, setup script, trained model, or tested hardware. Do not expect the example service or commands below to work until those pieces are implemented and checked.

Read the [technical report](AeriIQ_Technical_Report%20copy.md) alongside this guide. The [wiring diagram](AeriIQ_Technical_Report_media/media/e80094a056c544a8053446ff9b2e1f717d65ba49.png) is the visual reference, but verify every board's own pinout before connecting it.

## 1. What You Are Building

AeriIQ monitors indoor air and uses the measurements to decide when ventilation should run. The intended data path is:

1. The SCD41 measures CO₂, temperature, and humidity. The PMS5003 measures particulate matter. The BME280 provides pressure and backup temperature/humidity readings.
2. A camera estimates the number of people in the room.
3. Software records the readings and estimates CO₂ about 15 minutes into the future.
4. A policy chooses whether to run the fans, move a window or damper, and sound an alarm.
5. An OLED shows the current state; a dashboard charts readings and forecasts.

This is a useful learning project, but it is not a certified ventilation controller or a substitute for a building's required ventilation and air-quality controls. A model forecast is an estimate, not a measurement.

### A few Raspberry Pi terms

- **Raspberry Pi:** A small Linux computer. It runs your program and communicates with peripherals.
- **GPIO:** The Pi's general-purpose input/output pins. These use **3.3 V logic** and are not 5 V tolerant.
- **Physical pin:** A pin's position number on the 40-pin header. **BCM GPIO number:** The signal name used by software. For example, physical pin 11 is BCM GPIO17.
- **I²C:** A two-wire shared bus. Several devices can share SDA and SCL if their addresses do not conflict.
- **UART:** A serial data link with transmit (TX) and receive (RX) wires. TX from one device normally connects to RX on the other.
- **PWM:** A timed signal used here to command the servo position. It is not a servo power source.

## 2. Safety Before Wiring

- Shut the Pi down and unplug its power before changing wiring. Check the board's pin labels and sensor breakout documentation; similar-looking modules can have different pin orders and voltage requirements.
- Never put 5 V on a Pi GPIO pin. A breakout board may accept 5 V power while still needing 3.3 V-safe data signals; check its schematic or manufacturer documentation.
- Use a separate, correctly rated 5 V supply for the MG996R servo. Connect that supply's ground to Pi ground so the signal has a shared reference. Do not power the servo from the Pi's 5 V pin; startup or stall current can reset or damage the system.
- Test the relay outputs with a low-voltage 12 V fan first. Never prototype with exposed mains wiring. Any 220 V fan installation must be designed, enclosed, and wired by a licensed electrician. A relay module is not automatically safe isolation.
- Use a resistor with each LED. If the buzzer draws more current than a GPIO can safely provide, switch it with a transistor or suitable driver rather than driving it directly.
- Keep the Pi and wiring dry and ventilated. Fans, relays, and actuators need a known safe state on startup, sensor failure, or software crash; design and test that behavior before unattended use.

## 3. Hardware and Pin Reference

Buy and test parts in stages instead of assembling everything at once. The report specifies a Raspberry Pi 5 with 8 GB RAM, a suitable Pi 5 power supply and cooling, Camera Module 3, SCD41, PMS5003 with a compatible adapter, BME280, SSD1306 OLED, two-channel relay, two fans, MG996R servo with its own 5 V 3 A supply, buzzer, red LED, and a ventilated enclosure. Confirm exact breakout-board versions before ordering.

| Device | Raspberry Pi connection in the report | Check before use |
|---|---|---|
| Camera Module 3 | Pi 5 CAM/DISP connector | Use the correct Pi 5 22-pin-to-camera 15-pin ribbon cable. Power off before inserting it; follow the connector's orientation marks. |
| SCD41 | 3V3 pin 1, GND pin 6, SDA pin 3, SCL pin 5 | I²C address `0x62`; confirm the breakout is Pi-safe at its chosen supply voltage. |
| PMS5003 | VCC pin 2, GND pin 9, sensor TX to Pi RX pin 10 (BCM GPIO15) | UART at 9600 baud. The report only needs sensor-to-Pi data. Verify the adapter's logic level; do not connect a 5 V TX signal directly to a GPIO. |
| BME280 | 3V3 pin 17, GND pin 14, SDA pin 3, SCL pin 5 | I²C address `0x76`; confirm the module's pinout and address. |
| SSD1306 OLED | 3V3 pin 1, GND pin 20, SDA pin 3, SCL pin 5 | I²C address `0x3C`; confirm the module is 3.3 V compatible. |
| Relay inputs | 5 V pin 4, GND pin 25, IN1 pin 11 (BCM17), IN2 pin 13 (BCM27) | Confirm the input reliably switches with 3.3 V logic. Relay contacts, not Pi pins, switch fan power. |
| MG996R servo | Signal pin 12 (BCM18); external supply and ground | External regulated 5 V, 3 A supply; common ground with Pi. Check current draw and mechanical end stops. |
| Buzzer and LED | Buzzer signal pin 15 (BCM22); LED signal pin 16 (BCM23); return to GND pin 34 | LED needs a series resistor. Use a suitable buzzer driver if its current exceeds a safe GPIO load. |

The four I²C devices share physical pins 3 and 5. That is normal: each responds to its own I²C address. Do not connect two devices with the same address on the same bus without an address-changing option or I²C multiplexer.

## 4. Prepare the Raspberry Pi

1. Install **Raspberry Pi Imager** on a computer and write a current 64-bit Raspberry Pi OS image to a quality microSD card. For a first build, the desktop image makes it easier to configure Wi-Fi and inspect camera output; a headless image is also fine if you already know SSH.
2. In Imager, set a hostname such as `aeriiq-pi`, create a non-default password, configure Wi-Fi if needed, and enable SSH only if you will administer the Pi remotely. Keep credentials private.
3. Connect a keyboard, display, and network if using the desktop image. Boot, complete first-run setup, and open a terminal.
4. Update the operating system, then reboot:

   ```bash
   sudo apt update
   sudo apt full-upgrade -y
   sudo reboot
   ```

5. Enable I²C and the hardware serial port using `sudo raspi-config`. For serial, enable the hardware port but disable the serial login shell. Reboot if prompted. AeriIQ's PMS5003 uses the UART; the camera uses the dedicated camera connector.
6. With the camera attached while the Pi is off, check camera detection with `rpicam-hello --list-cameras`. On a desktop, `rpicam-hello -t 5000` should show a brief preview. Tool names can change between OS releases; consult Raspberry Pi's current camera documentation if a command is unavailable.
7. Once I²C sensors are connected one at a time, run `i2cdetect -y 1`. The eventual bus should show `3c`, `62`, and `76`. An address missing from the scan is a wiring, power, bus-enable, or module-address problem; do not continue to actuators until sensor communication is reliable.

## 5. Build in Small, Verifiable Stages

Keep a notebook of the exact board model, address, pin mapping, test result, and software change for each stage.

1. **Pi and camera:** Confirm the Pi boots reliably, stays cool, has network access, and detects the camera.
2. **I²C sensors:** Connect only the SCD41 first, identify `0x62`, and read plausible values. Repeat with the BME280 (`0x76`) and OLED (`0x3C`), then put them together on the shared bus.
3. **PMS5003:** Add the adapter and UART connection. Confirm 9600-baud frames arrive and are parsed before using particulate readings in any control decision.
4. **Logging:** Implement timestamped records in SQLite and check units, missing-value handling, and restart behavior. Add sensor warm-up and stale-reading flags rather than treating old values as current.
5. **Policy without hardware outputs:** Feed recorded or simulated data into the decision rules. Test normal conditions, threshold crossings, bad sensor values, a disconnected sensor, and process restart. Keep output commands disabled during this stage.
6. **Dashboard and OLED:** Display timestamps, units, sensor health, occupancy estimate, forecast horizon, and the reason for each decision. Bind a development dashboard to the local machine or trusted LAN only; do not expose it to the public internet without authentication and security review.
7. **Low-voltage actuators:** Test the relay with a low-voltage fan and separate supply. Confirm the contacts and default state with a multimeter before attaching a load. Test servo travel without a window attached, then install a mechanical stop so it cannot jam or pinch.
8. **Camera occupancy estimate:** Test with consented, representative scenes. Prefer aggregate counts and avoid saving identifiable frames unless there is a documented need, access control, and retention policy.
9. **Integrated operation:** Run supervised tests before enabling automatic control. Keep a manual way to stop the fans and close or disconnect the actuator.

The report describes a 30-second sensor cycle, camera count every fourth sample, and a minimum 5-minute fan run-time. Those are proposed settings to test, not universal recommendations.

## 6. Understand the Proposed Control Rules

The report proposes starting fans at CO₂ of 1000 ppm or a forecast of 1500 ppm, and turning on fans, opening the window/damper, and sounding an alarm at 1500 ppm. It also proposes keeping the window shut when PM2.5 is at least 35 µg/m³ or outdoor heat is high.

Before implementing those rules, resolve two gaps in the design:

- The listed parts show one PMS5003 and one BME280, but do not say which are indoors versus outdoors. A single indoor particulate reading cannot reliably determine whether outdoor air is dusty. The outdoor-heat input is also not clearly supplied by the listed sensors. Decide sensor placement and add outdoor sensing if the policy needs it.
- The report's fallback forecast of roughly 8 ppm per person per minute is an unvalidated approximation. It must not be treated as a reliable forecast or as a safety guarantee. Compare predictions with a reference meter over a representative data set before enabling predictive actuation.

Add hysteresis, sensor-validity checks, timeouts, and a documented safe state. Verify the CO₂ reading against a suitable reference instrument. Thresholds depend on occupancy, building design, sensor placement, and applicable guidance; have the final control policy reviewed by a qualified ventilation professional.

## 7. Software Layout and Running the Project

The report proposes `code/aeriiq/main.py`, sensor drivers under `code/aeriiq/sensors/`, occupancy counting under `vision/`, forecasting under `ml/`, policy and actuators under `control/`, a dashboard under `dashboard/`, settings in `code/config/settings.yaml`, and a systemd service. These paths are a planned layout; they are not present in this documentation-only folder.

When the implementation is delivered, first read its README and inspect `setup_pi.sh` before running it with administrator privileges. Confirm what packages, interfaces, files, and services it changes. Do not copy a nonexistent service file or start an unreviewed background service. Keep model files and configuration separate, and never place Wi-Fi passwords or credentials in source control.

When a tested service is available, verify it with `systemctl status aeriiq`, view logs with `journalctl -u aeriiq -f`, and check the dashboard at `http://<pi-ip>:8080` from a trusted network. Replace `<pi-ip>` with the Pi's local IP address. Confirm the display shows units and timestamps and that the reported actuator state matches the physical outputs.

After logging at least a week of good, representative data, the report proposes exporting training data and fitting a GradientBoosting model. Before using it, check data quality, train/test separation by time, forecast error (the report's target is MAE below 60 ppm), and performance under different occupancy patterns. Keep the physics fallback visibly labelled as an estimate.

## 8. Troubleshooting and Acceptance

| Symptom | First checks |
|---|---|
| An I²C address is missing | Power off; check SDA/SCL orientation, 3.3 V and ground, enabled I²C, and the breakout's actual address. Add only one device at a time. |
| PMS5003 returns no data | Check its supply and adapter, UART enablement, serial login-shell setting, baud rate, and sensor TX-to-Pi RX direction. |
| Pi reboots when servo moves | Stop using Pi power for the servo. Check the external supply rating, shared ground, and wiring for shorts. |
| Relay behaves backwards or chatters | Check the module's active-high/active-low behavior, 3.3 V trigger compatibility, policy hysteresis, and power supply. Keep the fan disconnected until understood. |
| CO₂ or PM values look implausible | Check warm-up, airflow around the sensor, location, calibration/reference comparison, units, and stale-data handling. |
| Camera is not detected | Power off and reseat the correct ribbon cable in the correct orientation; check `rpicam-hello --list-cameras` and OS camera documentation. |

Use the report's acceptance targets as test goals, not established results: CO₂ within ±50 ppm of a reference, fan response within one sample, forecast MAE below 60 ppm, window closed above the specified PM2.5 threshold, and low-CO₂ occupied time meeting the stated target. Record the reference instrument, dates, environment, software revision, and failures. Do not claim success based on a single demonstration.

## 9. Suggested Milestones

1. Read the report and resolve sensor placement, voltage compatibility, outdoor measurements, and actuator safe states.
2. Set up the Pi and demonstrate camera detection.
3. Bring up and log each sensor separately; confirm all three I²C addresses together.
4. Build dashboard and policy tests using simulated data only.
5. Add supervised 12 V fan and servo tests; no mains wiring in the hobby build.
6. Run a week of sensor logging, validate data and forecasts, then compare controlled ventilation with a documented baseline.
7. Review privacy, electrical safety, and control limits before any occupied or unattended trial.