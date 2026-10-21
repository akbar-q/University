# Unit 5013 - Practical Lab Book

## Student Evidence Rule

For every lab, save the simulator link or project, a screenshot of the circuit/code running, the final code, and a 2-4 sentence reflection. Record each test using: test ID, condition, expected result, actual result and pass/fail.

## L01 - Blink an LED

**Tool:** Tinkercad Circuits. **Build:** Uno, LED, 220 ohm resistor. **Outcome:** LED blinks with two different delays. **Check:** explain `setup()` and `loop()`.

## L02 - Traffic Light Sequence

**Tool:** Tinkercad Circuits. **Build:** Uno, red/amber/green LEDs and resistors. **Outcome:** correct green-amber-red sequence. **Check:** use named pin constants and a flowchart.

## L03 - Read a Button

**Tool:** Tinkercad Circuits. **Build:** Uno and button wired to ground on D2. **Outcome:** serial monitor shows `HIGH` released and `LOW` pressed using `INPUT_PULLUP`. **Check:** explain why logic is inverted.

## L04 - Button-Controlled LED

**Tool:** Tinkercad Circuits. **Build:** L03 plus LED. **Outcome:** button controls LED through `if/else`. **Check:** submit truth table and pin map.

## L05 - Read an LDR

**Tool:** Tinkercad Circuits. **Build:** LDR voltage divider to A0. **Outcome:** serial monitor shows changing readings under simulated light conditions. **Check:** record bright, medium and dark data.

## L06 - Threshold Indicator

**Tool:** Tinkercad Circuits. **Build:** L05 plus LED. **Outcome:** LED changes state at a justified threshold. **Check:** run bright, dark and near-threshold tests.

## L07 - Non-Blocking Blink

**Tool:** Tinkercad Circuits. **Build:** one LED. **Outcome:** LED toggles with `millis()` while serial output continues. **Check:** explain why a long `delay()` is unsuitable for an integrated alarm.

## L08 - Buzzer and I2C LCD

**Tool:** Wokwi. **Build:** Uno, passive buzzer and 16 x 2 I2C LCD. **Outcome:** Boolean alarm state changes tone and LCD text. **Check:** identify SDA/SCL and LCD address.

## L09 - LDR Alarm

**Tool:** Tinkercad or Wokwi. **Build:** LDR, LED and buzzer. **Outcome:** threshold drives both outputs. **Check:** serial output labels reading and state.

## L10 - Full Environmental Alarm

**Tool:** Wokwi. **Build:** LDR, curtain switch, LED, buzzer and I2C LCD. **Outcome:** either LDR condition or switch condition activates all alarm outputs. **Check:** organise code as input, output and display functions.

## L11 - Debounce a Switch

**Tool:** Wokwi or hardware. **Build:** L10 switch. **Outcome:** stable state changes after 20 ms debounce period. **Check:** perform 20 repeated presses and log results.

## L12 - Filter and Hysteresis

**Tool:** Wokwi. **Build:** L10 LDR. **Outcome:** moving average plus separate on/off thresholds prevents output chatter. **Check:** compare raw/filtered serial data and state trade-offs.

## L13 - Sensor Fault Response

**Tool:** Wokwi. **Build:** L10 with a helper that injects an invalid test reading. **Outcome:** clear diagnostic and safe output state. **Check:** write a test case and explain why the response is safe.

## L14 - Full Acceptance Test

**Tool:** Wokwi or hardware. **Build:** full alarm. **Outcome:** complete at least eight normal, boundary, combined and fault tests. **Check:** submit refined test plan and results.

## L15 - Timed Blank-Sketch Rehearsal

**Tool:** Arduino IDE or Wokwi offline-equivalent practice. **Build:** LDR, LED and button mode controller. **Outcome:** individual program fulfils input, processing, output and fault-handling requirements. **Check:** save code and test evidence under timed conditions.

## L16 - Peer Review and Video Rehearsal

**Tool:** simulator or hardware. **Build:** final alarm. **Outcome:** explain design, code, tests, one fix and one improvement in a two-minute trial recording. **Check:** peer feedback is recorded and addressed.

## Test-Record Template

| Test ID | Condition/procedure | Expected result | Actual result | Pass/Fail | Evidence link |
| --- | --- | --- | --- | --- | --- |
| T1 | | | | | |
