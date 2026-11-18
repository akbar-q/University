# EEE4015 TinkerCAD Circuits

An introductory Arduino Uno R3 circuit library for EEE4015. Each numbered folder contains the supplied TinkerCAD diagram, share link, original code text, a commented Arduino sketch (`.ino`), and a guide explaining the circuit and its learning points.

## Circuit index

| # | Example | Main concepts | Guide |
|---:|---|---|---|
| 01 | LED Interfacing | GPIO output, polarity, current limiting | [README](01%20LED%20Interfacing/README.md) |
| 02 | Button Interfacing | Digital inputs, pull-ups, active-low logic, Serial | [README](02%20Button%20Interfacing/README.md) |
| 03 | Button Controlled LED | Input-to-output control, two independent channels | [README](03%20Button%20Controlled%20LED/README.md) |
| 04 | 4x4 Keypad Interfacing | Row/column scanning, library use, character input | [README](04%204x4%20Keypad%20Interfacing/README.md) |
| 05 | Buzzer Interfacing PWM | PWM duty cycle and sound output | [README](05%20Buzzer%20Interfacing%20PWM/README.md) |
| 06 | 7-Segment Display Interfacing | Segment mapping, binary patterns, display type | [README](06%207-Segment%20Display%20Interfacing/README.md) |
| 07 | Single Motor H-Bridge | H-bridge direction, enable, motor power | [README](07%20Single%20Motor%20H-Bridge/README.md) |
| 08 | Parallel 16x2 Display Interfacing | HD44780-compatible LCD, parallel 4-bit interface | [README](08%20Parallel%2016x2%20Display%20Interfacing/README.md) |
| 09 | I2C 16x2 Display Interfacing | I2C bus, backpack, display library | [README](09%20I2C%2016x2%20Display%20Interfacing/README.md) |
| 10 | Moisture Sensor Controlled Servo | Analogue reading, threshold, servo output | [README](10%20Moisture%20Sensor%20Controlled%20Servo/README.md) |
| 11 | LDR Controlled PWM | Voltage divider, ADC, PWM scaling | [README](11%20LDR%20Controlled%20PWM/README.md) |

## Suggested learning sequence

1. Start with LED output, then button input and button-controlled output.
2. Add keypad and buzzer interfaces; distinguish logic state, PWM duty cycle, and sound frequency.
3. Learn display wiring first with a seven-segment module, then a parallel LCD and an I2C LCD.
4. Finish with sensor-driven outputs: motor control through a driver, a moisture threshold and servo, and LDR-based LED dimming.

## Files and simulation

- `Diagram.png` is the supplied TinkerCAD circuit image. It is embedded in each folder's README.
- `Link.txt` preserves the supplied TinkerCAD share URL; each README also links directly to the simulation.
- `Code.txt` is retained unchanged as the original source record.
- The `.ino` file is the commented teaching version. Read its folder README before wiring: some supplied diagrams and source sketches differ, and those differences are identified explicitly.

## Safety and verification

- These examples are for low-voltage educational circuits. Disconnect power before changing breadboard wiring.
- Use one suitable series current-limiting resistor per bare LED or display segment. Calculate the value from the actual supply, LED forward voltage, and desired current, and check GPIO limits against the exact board documentation.
- Arduino Uno R3 GPIO is 5 V logic. ESP32 GPIO is generally 3.3 V logic and is not 5 V tolerant. Do not copy Uno wiring directly to an ESP32 without checking signal compatibility.
- Never power a motor from a GPIO pin. Use a suitable H-bridge or driver, a supply rated for the motor, and a shared reference ground where required. A rectangular 9 V battery is usually unsuitable for motors that need substantial current.
- Servos can draw more current than a board's regulator can safely provide. Use a suitable supply if required and connect grounds as specified by the hardware.
- TinkerCAD is a useful simulator, not proof that a physical circuit is safe. Confirm pinouts, component ratings, and wiring against manufacturer documentation before building hardware.

## Libraries

Examples 01–03, 05–08, 10, and 11 use Arduino core functions or the standard Servo/LiquidCrystal libraries as noted in their guides. Example 04 needs `Keypad`; example 09 needs the Adafruit I2C LCD library used by the TinkerCAD simulator. Library versions and constructor details may differ between simulator and physical IDE; follow the linked sketch and verify the installed library API.