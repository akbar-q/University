# UNI-T UT89XD and UT171A Practical Video Script

## Production Brief

**Working title:** UNI-T Multimeters in Practice: Battery, Mains, Components, LEDs, Frequency, NCV and Current  
**Episode:** Practical companion to `Theory/UNI-T_Multimeter_Theory_Deep_Dive.pptx`  
**Target runtime:** approximately 105 minutes  
**Presenter:** demonstrate the UT171A auto-ranging behavior, then make the worked measurements on the UT89XD using deliberate range selection. Confirm the range state on the actual displays; both meters may offer more than one range mode.  
**Current measurement:** final chapter only. Do not measure current earlier in the video. End the demonstration by moving the red lead back to the normal V/ohm/Hz terminal.

### Before Recording

- Check exact model suffixes and revision. The photo shows UT89XD on the left and UT171A on the right.
- Place the manufacturer's UT89X/XD and UT171A manuals beside the bench.
- Use the model printed on each meter when referring to specifications. Do not transfer a range, fuse, CAT rating, or AC bandwidth from one meter to the other.
- Prepare labelled low-voltage cells, resistors, discharged capacitors, a diode, red/green/blue/white LEDs, a known NPN and PNP transistor, an AWG, and a current-limited extra-low-voltage circuit.
- The 230 V AC section is only for a competent, authorised presenter using a rated, enclosed, shrouded mains test fixture or supervised laboratory trainer. Do not probe a household outlet with loose leads. If the safe fixture or supervision is unavailable, substitute isolated extra-low-voltage AC and clearly say it is not a mains test.
- Inspect meters, leads, probe guards, terminals, fuses and CAT markings. Remove damaged equipment from use.

## Chapter Timeline

| Chapter | Runtime | Practical focus |
|---|---:|---|
| 1. Start here and safety setup | 00:00-00:05 | Identify meters, tools, safety boundary |
| 2. Front-panel tour | 00:05-00:18 | Controls, selector, buttons, terminals |
| 3. Lead, function and range ritual | 00:18-00:25 | Auto vs manual mode, verify before contact |
| 4. DC battery measurements | 00:25-00:32 | Polarity, range, open-circuit vs loaded |
| 5. AC voltage demonstration | 00:32-00:40 | Supervised enclosed fixture or isolated AC |
| 6. Resistors and continuity | 00:40-00:48 | Isolate, measure, compare, lead baseline |
| 7. Capacitors | 00:48-00:55 | Discharge, isolate, wait for stable reading |
| 8. Diodes, LEDs, and hFE | 00:55-01:08 | Forward drop, colors, polarity, transistor socket |
| 9. Frequency and duty cycle | 01:08-01:16 | Low-voltage AWG signal |
| 10. NCV, LoZ, and VFC | 01:16-01:24 | Demonstrate limitations and indications |
| 11. Practical recap and reset | 01:24-01:28 | Review the measurement checklist before current |
| 12. Current measurement - final chapter | 01:28-01:45 | Series insertion, fuse, burden, restore lead |

**Long-form edit:** pause between tests for viewers to record their own results, explain model-specific display indicators, and repeat ambiguous readings. This can extend the episode to about 1 hour 50 minutes. The current chapter remains last in every edit.

---

# Presenter Script

## Chapter 1 - Start Here and Safety Setup (00:00-00:05)

**[Camera: both meters and test accessories. Keep mains equipment out of frame until its dedicated chapter.]**

**Presenter:**

“This is the practical companion to our multimeter theory episode. Today we will operate the UT89XD and UT171A, compare manual and automatic range behavior, and use them on a battery, resistors, capacitors, diodes, LEDs, transistors, and a low-voltage signal generator.

“We will finish with current measurement. That order is deliberate: current uses a different terminal and connection topology from voltage, so we will not put the red lead into a current socket until the final chapter.”

**[Point to labels.]**

“The UT89XD is on the left and the UT171A is on the right. Check your own suffix and manual. The UT89XD has a 20 amp maximum terminal and a transistor hFE socket. The UT171A has a 10 amp terminal, a 40,000-count display in the A model, and additional features such as LoZ ACV and VFC. Their CAT ratings and fuses are not interchangeable.”

“Before every test, we will identify the quantity, circuit state, sockets, selector function, range or mode, and expected order of magnitude. For live measurements, follow the lab rules and ask a supervisor if the reference or rating is unclear.”

## Chapter 2 - Front-Panel Tour (00:05-00:18)

### UT171A - Auto-Range Demonstration Meter

**[Camera: close-up of the UT171A; point to every button and socket as named.]**

**Presenter:**

“Start with the rotary selector. It selects a measurement family: DC millivolts or volts, AC volts, resistance and related component tests, frequency or duty cycle, current, NCV, or OFF. The LCD shows the active units and mode. Always check the display symbol; the selector position alone may not tell the whole story when a secondary function is available.”

“The SELECT button cycles the secondary function for the current selector position. Press it and show the actual LCD changes. Do not teach a number of button presses from memory; demonstrate the icon that confirms the wanted mode.”

“RANGE changes the range behavior. In auto-range, the meter selects a suitable scale. In manual range, repeated presses step through ranges. A long press may return to auto; check the UT171A manual and show the auto indicator on this exact meter.”

“HOLD retains the displayed value. It does not stop or freeze the circuit. The key is shared with the backlight; show the correct short- or long-press action from the manual.”

“REL or delta stores a reference and shows the difference from it. MAX/MIN captures extrema according to the meter's supported update behavior. It is not a fast transient recorder.”

“STORE and RECALL relate to saved readings. DELETE removes a stored entry or active item as described by the menu. ESC backs out of a setup action, while Setup and OK enter and confirm settings. Show the real screen response so viewers can see the exact menu and avoid guessing.”

“The Hz/% key selects frequency and duty-related functions where supported. The VFC mode applies filtering for certain variable-frequency-drive measurements; it is not a waveform analyzer. LoZ AC voltage has lower input impedance, so it can suppress some ghost-voltage readings by loading the source. It can also disturb a real high-impedance circuit.”

**UT171A terminals:**

- “COM is the common terminal, normally for the black lead.”
- “V, ohm, and Hz is the normal red terminal for voltage, resistance, continuity, diode, capacitance, and frequency.”
- “The microamp/milliamp terminal is a fused low-current input.”
- “10A MAX is the separate high-current input. It is not the voltage socket.”

“The UT171A manual specifies an F 10 A H 1000 V fuse, 10 by 38 millimetres, for the high-current input and an FF 800 mA H 1000 V fuse, 6 by 32 millimetres, for the milliamp/microamp input. These are exact model details. Do not bypass or replace a fuse with a different type.”

### UT89XD - Deliberate Range Demonstration Meter

**[Camera: close-up of the UT89XD rotary dial, SEL/REL, HOLD/light button, hFE socket, and four terminals.]**

“Now the UT89XD. Use its printed dial ranges to select the function and range you need. For this tutorial, we will make deliberate range selections. If your revision offers an auto-range state as well, confirm the active state on the display before measuring.”

“SEL/REL selects a secondary function or relative mode depending on the dial position. The HOLD key retains a reading. The illumination key controls the screen backlight and flashlight feature; demonstrate its press action according to the exact manual.”

“The PNP/NPN hFE socket is for a basic transistor gain estimate. The LED test is an UT89XD feature; we will use it only as described by the UT89XD manual. Do not assume the UT171A has the same hFE socket or LED test.”

**UT89XD terminals:**

- “COM is common.”
- “V, ohm, and Hz is the normal red terminal for voltage and passive tests.”
- “mA/microamp is the fused low-current input.”
- “20A MAX is the high-current input.”

“The UT89XD is a 6000-count True RMS meter. Its safety rating is CAT III 600 volts and CAT II 1000 volts. Maximum input voltage and CAT category are different specifications.”

### Quick Comparison Shot

| Topic | UT89XD | UT171A |
|---|---|---|
| Range demonstration today | Deliberate range selection | Auto-range first; then show RANGE if useful |
| High-current input | 20 A MAX | 10 A MAX |
| hFE transistor socket | Yes | Not listed in the UT171A manual reviewed |
| Dedicated LED test | Yes, UT89XD feature | Do not assume available |
| Special functions | NCV, LED test, hFE | NCV, LoZ ACV, VFC, square-wave output |
| Safety rating | CAT III 600 V / CAT II 1000 V | CAT III 1000 V / CAT IV 600 V |

## Chapter 3 - Lead, Function, and Range Ritual (00:18-00:25)

**[On-screen title: “Stop. Read. Connect.”]**

**Presenter:**

“Before each measurement, use this ritual. First, name the quantity. Second, decide whether the circuit must be live or isolated. Third, inspect where the red lead is plugged in. Fourth, select the function. Fifth, choose a safe range or confirm auto-range. Sixth, check the meter, lead, probe, and circuit ratings. Only then make contact.”

“For voltage, black is in COM and red is in V/ohm/Hz; the meter goes in parallel. For resistance, continuity, diode, capacitance, and transistor tests, isolate the circuit and discharge stored energy. For current, use a fused current terminal and connect in series; we will demonstrate that only at the end.”

“Do not trust a blank display, NCV silence, or a remembered lead position as proof that a circuit is safe. Look at the actual instrument.”

### Demonstrate Auto Versus Manual Range

“On the UT171A, set a safe low-voltage source and select auto-range. Watch how the range changes when the input magnitude changes. Now select manual range, if the active function supports it, and step the range. The display has to be interpreted in the selected range.”

“On the UT89XD, use the deliberate range-selection method shown in its manual and on its display. Start with a range that can accommodate the expected value. Move to a more sensitive range only after the magnitude is known. If overload appears, step to a higher range; never ignore an overload indicator.”

## Chapter 4 - DC Battery Measurements (00:25-00:32)

**[Camera: one low-voltage battery and one battery under an approved small load.]**

**Presenter:**

“First test: DC voltage on a battery. Black lead to COM, red lead to V/ohm/Hz. Select DC volts. Use auto-range on the UT171A, and choose a suitable manual range on the UT89XD.”

“Connect red to the battery's positive terminal and black to negative. Record the sign, the units, the range/mode, and the condition of the battery. If the meter shows a negative sign, the leads may simply be reversed.”

“Now compare the open-circuit reading with a reading under a known, safe load. Keep the meter in voltage mode and across the battery/load. Do not short the battery to estimate current. A weak source can show a reasonable open-circuit voltage and sag under load because of internal resistance. This is a voltage comparison, not a capacity test.”

**Recording table:** model; battery type; no-load voltage; loaded voltage; load value/power; range; polarity; observation.

## Chapter 5 - AC Voltage Demonstration (00:32-00:40)

### Qualified Presenter and Enclosed Fixture Only

**[Camera: show the approved shrouded mains trainer. Never show loose probing of a wall outlet.]**

**Presenter:**

“This demonstration is for a suitably qualified and authorised presenter using a rated, enclosed mains test fixture under supervision. Do not copy this on a household outlet with loose probes. If this fixture or competence is not available, use an isolated extra-low-voltage AC source and say clearly that this is not a mains measurement.”

“Before connecting, read the meter's CAT rating and the ratings on the leads and fixture. Set black to COM and red to V/ohm/Hz. Select AC voltage and a range that accommodates the expected value. Connect in parallel only at the enclosed test points, keeping fingers behind the guards.”

“Do not compare only the maximum voltage number. UT89XD is CAT III 600 V / CAT II 1000 V; UT171A is CAT III 1000 V / CAT IV 600 V according to its manual. These are different category/rating combinations.”

“Observe the RMS reading and compare it with the fixture's stated value. Record the meter, mode, range, fixture, and result. A DMM does not show waveform shape, distortion, or brief transients in detail. Do not leave a live setup unattended.”

## Chapter 6 - Resistors and Continuity (00:40-00:48)

### Resistor Measurement

**[Camera: power is disconnected; use an isolated resistor, preferably with one lead lifted.]**

**Presenter:**

“Resistance mode injects a test signal, so the resistor or circuit must be de-energised. Isolate the part from other parallel paths where possible. If it is connected in circuit, nearby components can change the reading.”

“Select ohms. Let the UT171A auto-range settle. On the UT89XD, choose a high enough range then step down. Touch probes together and observe the lead/contact baseline. Now measure the resistor and compare with its color-band nominal value and tolerance. Do not report more precision than the meter accuracy and display justify.”

### Continuity Check

“Switch to continuity and check a known wire or closed switch. A beep means resistance is below the meter's threshold, not that the path is suitable for a rated load. Check both the sound and display. No beep might indicate an open path, poor contact, a wrong mode, or semiconductor polarity. Never use continuity on a live circuit.”

## Chapter 7 - Capacitors (00:48-00:55)

**[Camera: isolated capacitor and suitable discharge resistor.]**

**Presenter:**

“Before capacitance mode, isolate the capacitor and discharge it using an appropriate resistor. Do not short a large capacitor with a screwdriver. Verify the remaining voltage with the meter on voltage mode before switching to capacitance.”

“Select capacitance according to the meter's dial and secondary function, confirm the display units, and connect with polarity respected for an electrolytic if the manual requires it. Wait for the reading to settle. Large capacitance may take longer. Leakage, dielectric absorption, residual charge, and in-circuit paths can make a reading drift.”

“Record value, units, range/mode, settling time, and whether the part was isolated. Compare with the marked tolerance, not only its nominal label.”

## Chapter 8 - Diodes, LEDs, and hFE (00:55-01:08)

### Diode and LED Tests

**[Camera: diode disconnected from the circuit. Close-up on anode/cathode markings.]**

**Presenter:**

“In diode mode, the meter applies a small test current and reports the forward voltage. With red on anode and black on cathode, expect a forward reading. Reverse the leads and expect OL or an out-of-range indication for a typical diode. This is a low-current check, not a rated-current test.”

“Now compare red, green, blue, and white LEDs. Verify polarity from the part itself; long lead and flat package edge are common clues, not universal guarantees. Record color, orientation, and forward voltage. Red devices often have lower forward voltage than blue or white; green varies by chemistry. The meter's diode-test voltage may not light every LED visibly.”

“The UT89XD has a dedicated LED test feature. We will demonstrate it according to its manual. Do not claim the UT171A has the same function. If you power LEDs from a supply, use a correctly selected series resistor; do not connect them directly to a bench supply.”

### Transistor hFE - UT89XD Only

“Power is off and the transistor is removed from the circuit. Identify its part number and pinout in its datasheet. Select the correct PNP or NPN socket and place emitter, base, and collector in the marked positions. Read hFE as a rough gain estimate under the meter's internal test conditions. Gain varies with current, voltage, temperature, and device sample, so this is not a complete transistor test.”

## Chapter 9 - Frequency and Duty Cycle (01:08-01:16)

**[Camera: AWG set to a low-voltage square wave; confirm amplitude and offset before connection.]**

**Presenter:**

“Set a low-voltage square wave, for example 1 kilohertz, 50 percent duty, and zero offset. Confirm the output level is safe. Select Hz on the meter and verify the display symbol. The frequency reading is the repetition rate; it does not describe amplitude or waveform quality.”

“Change the AWG duty cycle to 25 percent and select duty measurement if available. Duty cycle is high time divided by total period. The UT171A uses its Hz/% function; the UT89XD has frequency/duty functions as marked. Check each manual's amplitude and frequency limits. Low amplitude, noisy edges, or frequency beyond range can give unstable readings.”

“Cross-check by observing one period on the oscilloscope and calculating f=1/T. Record AWG setting and both instrument readings.”

## Chapter 10 - NCV, LoZ, and VFC (01:16-01:24)

### NCV

“Use NCV only on an approved enclosed fixture. The meter senses an electric field and may sound or change indication with proximity. Response depends on conductor position, insulation, shielding, grounding, and environment. NCV is a detection aid, not a voltage measurement and never proof of absence of voltage.”

### LoZ and VFC - UT171A

“LoZ deliberately lowers input impedance to reduce some ghost-voltage readings. It also loads the circuit and can disturb a legitimate high-impedance source. VFC filters higher-frequency content for some drive measurements; it is not a waveform or harmonics analyzer. Confirm the mode icon, use only where suitable, and compare with normal voltage mode only when the circuit conditions allow.”

### Square-Wave Output - UT171A

“The UT171A includes a built-in square-wave output. Treat it as a troubleshooting source, not a precision function generator. Read the manual for output amplitude, frequency, duty, terminal, and loading before connecting it to a circuit.”

## Chapter 11 - Practical Recap Before Current (01:24-01:28)

**[On-screen checklist; do not connect an ammeter yet.]**

**Presenter:**

“We have completed voltage and passive-component tests. Before the final chapter, recap the safe configurations: voltage uses COM and V/ohm/Hz in parallel; resistance, continuity, diode and capacitance require an isolated circuit; model functions and limits are not interchangeable.”

“Take a moment to inspect the red lead. It should be in V/ohm/Hz before the current demonstration begins. If it is not, do not continue until the meter is reset to a known safe configuration.”

## Chapter 12 - Current Measurement (Final Chapter) (01:28-01:45)

**Current is the final measurement topic and the final demonstration. No measurements follow this chapter.**

### Explain the Connection

**[Camera: draw a source, load, and series ammeter on paper before touching the circuit.]**

**Presenter:**

“Current is measured in series. We open the circuit and place the meter in the current path so the same branch current flows through the meter and load. This is different from voltage, where the meter is connected across two points.”

“In current mode, the meter routes current through a low-value shunt and measures the drop across it. If the red lead is in a current socket and we place the probes across a voltage source, we make a low-resistance path. That can blow a fuse, damage equipment, create an arc, or injure someone. We explain that error; we do not demonstrate it by intentionally shorting a source.”

### Burden Voltage

“The meter adds resistance from its shunt, fuse, leads, and contacts. Current through that path creates burden voltage and can reduce the voltage available to the load. The load may behave differently, changing the current we are trying to measure.”

“For illustration only, if an effective meter path were 2 ohms and current were 100 milliamps, the drop would be 0.1 amps times 2 ohms, or 0.2 volts. Those are teaching numbers, not specifications for either UNI-T meter. Check the exact manual for published burden information; do not invent one.”

### Preflight and Demonstration

**[Camera: isolated extra-low-voltage, current-limited supply, series resistor and LED or resistive load. No mains.]**

“Use only an isolated, extra-low-voltage, current-limited demonstration circuit. Switch off before opening the circuit. Identify the expected current. Confirm the meter, probes, CAT rating, terminal, fuse, function, range, and maximum measurement duration.”

“Black lead goes in COM. Move red to the appropriate fused current socket: UT89XD mA/microamp or 20 A MAX; UT171A mA/microamp or 10 A MAX. These meter limits and fuses differ. Select AC or DC current correctly. Begin with the highest suitable current range when the expected current is not confidently known.”

“Open the circuit and insert the meter in series. Recheck the path before energising. Read and record units, range, terminal, current, source setting, load, and duration. If the display overloads, behaves unexpectedly, or the circuit changes, isolate power and investigate. Do not move a live lead between terminals.”

### Restore and End Safely

“When the reading is complete, switch off or isolate the source. Remove the meter from the series path and restore the circuit. Immediately return the red lead to V/ohm/Hz. Say it with me: red lead back to volts. Confirm the selector and leads are in the safe storage configuration.”

“Current is the final demonstration. There is no next measurement. A meter left with its lead in a current socket is a hazard for the next person.”

## Practical Results Log

| Demo | Meter | Mode/range | Lead terminals | Source/test item | Reading | Notes / pass? |
|---|---|---|---|---|---|---|
| Battery DC voltage | | | | | | |
| Enclosed/isolated AC voltage | | | | | | |
| Resistor | | | | | | |
| Continuity | | | | | | |
| Capacitor | | | | | | |
| Diode / each LED color | | | | | | |
| Transistor hFE (UT89XD only) | | | | | | |
| AWG frequency | | | | | | |
| AWG duty cycle | | | | | | |
| NCV / LoZ / VFC demo | | | | | | |
| Current (final chapter) | | | | | | |

## Shoot Checklist

- [ ] Theory episode is presented separately; do not duplicate the long theory lecture in this practical recording.
- [ ] Show each meter model label and the actual display indication for the selected mode.
- [ ] Show probe terminals before every test.
- [ ] For all resistance/capacitance/semiconductor tests, show that the part/circuit is isolated and discharged.
- [ ] Mains section uses an approved enclosed fixture and a qualified, supervised presenter, or is replaced by isolated extra-low-voltage AC.
- [ ] NCV is explicitly described as not proving absence of voltage.
- [ ] Current is the final measurement and uses only an extra-low-voltage current-limited circuit.
- [ ] At the end, show the red lead restored to V/ohm/Hz.

## References

- UNI-T. [UT89X series specifications](https://meters.uni-trend.com/product/ut89x-series/) and [UT89X/XD manual](https://meters.uni-trend.com/download/ut89x-xd-user-manual/).
- UNI-T. [UT171A product information](https://meters.uni-trend.com/product/ut171a/) and [UT171A/B/C manual](https://meters.uni-trend.com/download/ut171a-b-c-user-manual/). Use only UT171A-specific columns/data.
- Electronics Lab. [Manual Ranging Multimeter Safety Operating Procedure](../../../Lab%20Documentation/Machines%20Lab/Manual%20Ranging%20Multimeter%20Safety%20Operating%20Procedure.md).
- Electronics Lab. [Electronics Lab General Safety Rules](../../../Lab%20Documentation/Electronics%20Lab/Electronics%20Lab%20General%20Safety%20Rules.md).
