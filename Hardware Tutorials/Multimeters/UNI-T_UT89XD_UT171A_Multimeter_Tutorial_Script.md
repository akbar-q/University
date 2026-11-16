# UNI-T UT89XD and UT171A Multimeter Tutorial Script

## Production Brief

**Working title:** Digital Multimeters from Basics to Bench Measurements: UNI-T UT89XD and UT171A  
**Format:** presenter-led YouTube tutorial with close-ups, screen overlays, test fixtures, and live demonstrations  
**Target runtime:** approximately 115 minutes; editor can trim marked optional demonstrations for a 90-minute version  
**Audience:** beginner to intermediate electronics learners  
**Meters shown:** UNI-T UT89XD manual-range demonstration meter (left in the supplied photograph) and UNI-T UT171A auto-range demonstration meter (right)  
**Measurement order:** voltage, resistance, capacitance, diode/LED/transistor, frequency/duty cycle, NCV/advanced functions, and current measurement last  
**Current-measurement rule:** the final technical chapter is current. Do not demonstrate current earlier in the video. Finish with its post-current lead-restoration ritual and safety sign-off.

### Important Model and Safety Notes

The supplied photograph identifies the meters as UT89XD and UT171A. Their functions and ratings differ. Verify the exact model suffix, manual revision, terminal labels, probe condition, fuse specification, and CAT markings on the actual instruments before recording. Never generalise a specification from one meter to the other.

UNI-T's UT89X/XD product information identifies a 6000-count True RMS family, AC/DC voltage and current, resistance, capacitance, frequency, diode, continuity, hFE, NCV, and a model-specific LED test on the UT89XD. The manual lists the UT89XD input terminals as COM, V/ohm/Hz, mA, and 20 A. Its CAT rating is CAT III 600 V / CAT II 1000 V; a 1000 V maximum input does not make it CAT III 1000 V.

UNI-T's UT171A information identifies a 40,000-count True RMS industrial meter, with AC/DC voltage/current, resistance, capacitance, frequency/duty, diode, continuity, temperature, NCV, LoZ AC voltage, VFC, and square-wave output functions. Its terminals are COM, V/ohm/Hz, mA/microamp, and 10 A. Its manual states CAT III 1000 V / CAT IV 600 V. Do not assume its display count, ranges, fuse values, or AC bandwidth are identical to the UT89XD.

The available manufacturer text confirms a UT89X/XD AC frequency response and crest-factor limits, but I could not verify a numerical crest-factor or AC bandwidth limit for the UT171A from accessible manufacturer text. Therefore the script teaches the general concepts and directs the presenter to the exact UT171A manual for its limits. Do not transfer UT89XD values to the UT171A.

**Mains demonstration condition:** the 230 V AC section is for a suitably qualified/supervised presenter using an approved, enclosed, shrouded mains test fixture or laboratory trainer. Do not ask viewers to insert loose probes into a household outlet or touch exposed live terminals. If a safe enclosed fixture and supervision are unavailable, replace the demonstration with an isolated, extra-low-voltage AC source and explain that it is a simulation of the measurement method, not a mains test.

---

## Chapter Timeline

| Chapter | Runtime | Topic |
|---|---:|---|
| 1. Welcome and meter comparison | 00:00-00:04 | What the meters can do; learning goals |
| 2. Measurement theory | 00:04-00:13 | Voltage, current, resistance, resolution, accuracy, input impedance |
| 3. Read the meters before using them | 00:13-00:27 | Selector, buttons, terminals, model differences |
| 4. The pre-measurement ritual | 00:27-00:35 | Leads, function, range, live/dead, fuse and category |
| 5. DC voltage: battery measurements | 00:35-00:43 | Polarity, range, battery under load, uncertainty |
| 6. AC voltage: line-voltage demonstration | 00:43-00:51 | Supervised enclosed fixture; AC RMS and safety |
| 7. Resistance and continuity | 00:51-00:59 | Isolation, resistance, continuity beeper, lead resistance |
| 8. Capacitance | 00:59-01:06 | Discharge, polarity, settling, in-circuit effects |
| 9. Diodes, LEDs, and transistor hFE | 01:06-01:17 | Forward drop, colors, polarity, hFE limitations |
| 10. Frequency and duty cycle | 01:17-01:25 | AWG square wave, Hz/%, signal limits |
| 11. NCV, LoZ, and VFC | 01:25-01:32 | Detection aids and their limitations |
| 12. True RMS and AC gotchas | 01:32-01:40 | Crest factor, bandwidth, waveform shape, loading |
| 13. Current measurement - final chapter | 01:40-01:55 | Series connection, fuse, burden voltage, restoration |

**90-minute edit option:** keep Chapters 1-5, 7, 9's LED section, 10, 11, and 13; shorten the AC line demonstration to a safety/fixture explanation; omit optional capacitor and transistor comparisons; retain the final current chapter in full. The 115-minute version is preferable for the requested detailed tutorial.

---

# Full Talking Script

## Chapter 1 - Welcome and Meter Comparison (00:00-00:04)

**[Camera: show both meters together, UT89XD on the left and UT171A on the right. Cut to model labels, selector dials, displays, and input terminals.]**

**Presenter:**

“Today we are going to learn how to use two UNI-T digital multimeters: the UT89XD and the UT171A. We will go from the basic measurement ideas through batteries, AC voltage, resistance, capacitance, diodes, LEDs, transistor gain, frequency, duty cycle, and non-contact voltage detection.

“We will use the auto-ranging meter to show how a meter can select a range for us, then use the UT89XD for the main hands-on measurements with deliberate range selection. The goal is not just to obtain a number. It is to choose the right function, terminals, and range; understand what the displayed number means; and know when a reading can be misleading.

“One rule will come up throughout the video: voltage is measured in parallel, resistance is measured on a de-energised circuit, and current is measured in series. Current measurement is deliberately our final chapter because it is the measurement most likely to go wrong if the lead is in the wrong socket.”

**[On-screen title card: “Voltage parallel / Resistance isolated / Current series - last chapter.”]**

“Please use the exact user manual for the meter in your hand. These two meters do not have identical features, input limits, CAT ratings, or current terminals. The markings on your meter and the manufacturer's manual take priority over a video.”

## Chapter 2 - Measurement Theory (00:04-00:13)

### What the Four Basic Measurements Mean

**[Graphic: circuit source, load, voltmeter in parallel, ammeter in series.]**

**Presenter:**

“Before touching the selector, let's be clear about the quantities.

“Voltage is the difference in electric potential between two points. A voltmeter is connected in parallel across those points. A digital meter's voltage input is designed to have relatively high resistance so that it draws little current from the circuit, although the exact input impedance depends on the function, range, and meter.

“Current is the rate of charge flow through a branch. An ammeter is inserted in series so the same current passes through the meter and the load. In current mode the meter uses a low-resistance shunt path. That is why connecting a current-configured meter across a voltage source can create a near short circuit and blow the fuse or cause damage.

“Resistance describes the relationship between voltage and current for a component under specified conditions. A meter measures resistance by applying a small internal test signal and measuring the response. That means resistance mode must only be used on a de-energised, isolated circuit. An external voltage interferes with the test and can damage the meter.

“Capacitance measurement also uses an internal test process, usually charging or timing the capacitor. The capacitor must be disconnected or isolated enough for the measurement and safely discharged before connection.”

### Counts, Resolution, Accuracy, and Range

“Resolution is the smallest change that the display can show on a selected range. A 40,000-count meter can display more increments than a 6,000-count meter in many ranges, but that does not automatically mean it is more accurate in every measurement.

“Accuracy describes how close the reading is to the true value under stated conditions. Accuracy is usually specified as a percentage of reading plus a number of counts or digits. It can vary by function, range, frequency, temperature, and time since calibration.

“Range selection determines the scale used to interpret the signal. Manual ranging asks you to choose the range. Auto-ranging lets the meter select a suitable range, usually trading convenience for a short settling delay or occasional range hunting near a boundary.

“Do not confuse more displayed digits with certainty. Probe contact, circuit loading, signal variation, meter accuracy, and the condition of the source all matter.”

### Meter Loading and Input Impedance

“Even voltage measurements can affect a circuit. The meter's input impedance forms a load. If we measure a high-resistance node, that load can pull the node voltage down. The UT171A has a LoZ voltage function for certain troubleshooting cases, but LoZ deliberately draws more current than a high-impedance voltage input. It can collapse phantom or capacitively coupled readings, but it can also load or disturb a sensitive circuit. We will discuss it as a special-purpose function, not as the default voltage setting.”

### Auto Range Versus Manual Range

**[Show UT171A auto-ranging. Then UT89XD range control.]**

“On the UT171A, we'll demonstrate the meter selecting a range automatically. This is convenient when the approximate signal size is unknown, but allow the display to settle and check that the reading is not switching between ranges.

“On the UT89XD, we'll deliberately select or step through the range using the range-selection control available on this unit. The exact action is printed on the meter and described in its manual. A safe workflow is to begin with a range that can accommodate the expected value, then move to a more sensitive range after the signal is understood.

“Never assume that a meter is manual-ranging or auto-ranging just by looking at its case. Verify the mode indicator on the actual display. Some meters support both modes.”

## Chapter 3 - Read the Meters Before Using Them (00:13-00:27)

### Common Language for Both Meters

“Let's do a control tour. On both meters, the rotary selector chooses the measurement family or OFF. The LCD shows the reading, units, range or mode indicators, and warnings such as low battery or overload. A flashing or changing display can be a clue that a mode is settling or that the signal is unstable.

“The input sockets are not interchangeable. COM is the black-lead reference for most measurements. The voltage, resistance, frequency, diode, and capacitance input is the normal red-lead terminal for those functions. Current uses a separate fused input. Before every measurement, look at the lead sockets, not just the selector.”

### UT171A Auto-Ranging Meter: Visible Controls

**[Camera: close-up of the UT171A panel, then point to every button and socket.]**

“On the UT171A, the selector positions include DC millivolts, DC volts, AC volts, resistance/continuity/diode/capacitance functions, frequency or duty cycle, current ranges, NCV, and OFF. The exact secondary function is selected with the labeled function button. The function indicator on the LCD is the confirmation; do not rely on remembering how many times a button was pressed.

“The blue SELECT button changes the secondary function in the active selector position. Read the icons around the rotary switch and the display. Hz percent selects frequency and duty-related measurements on supported functions. The UT171A manual groups this with its frequency measurement controls; verify the exact active symbol before interpreting the result.

“RANGE changes auto/manual range behavior. In auto mode, the meter chooses a range. In manual mode, repeated presses step through ranges. A long press may return to auto on this model; confirm in the exact manual and show the display indicator while recording.

“HOLD freezes the displayed reading. It does not freeze the circuit, stop current, or make a circuit safe. Use it to retain a value after you have taken a safe measurement, not to justify reaching into a live area.

“REL or delta stores a reference reading and displays a relative difference. This can be useful for comparing two similar resistors or checking change from a baseline. It can also mislead if the reference value was taken with the wrong range or function.

“MAX/MIN records extrema within the meter's supported behavior. It is not necessarily a fast transient recorder. A brief event may be too short for the meter's update rate. Check the manual for response time and capture behavior.

“STORE and RECALL relate to saving and reviewing readings on the UT171A. Use them only after checking how the model stores values, and explain whether the stored record includes units, range, and time information.

“DELETE and ESC cancel or remove a stored/setup entry according to the active menu. The Setup and OK keys are for instrument settings and confirming a selection. The multifunction key marked Hz with an arrow or percent notation is used to reach frequency/duty or a secondary function; confirm the LCD icon.

“The UT171A also has V.F.C. or VFC filtering, used to measure voltage in the presence of variable-frequency-drive noise by applying a low-pass filter. The result is not a general-purpose waveform analysis; it suppresses some higher-frequency content. LoZ AC voltage is used to reduce ghost-voltage readings by loading the circuit more heavily. Do not use LoZ on high-impedance or sensitive circuits without understanding the effect.

“The UT171A has a backlight/HOLD button, and the screen can show low battery or other status symbols. The backlight changes visibility, not the measurement function.”

**UT171A terminal tour:**

- “10A MAX is the high-current input. It is not the voltage input.”
- “The microamp/milliamp terminal is the fused low-current input.”
- “COM is the common lead terminal.”
- “V, ohm, and Hz is the normal red terminal for voltage, resistance, capacitance, diode, continuity, and frequency functions.”
- “The UT171A manual lists an F 10 A H 1000 V fuse, 10 by 38 millimetres, for the 10 amp terminal, and an FF 800 mA H 1000 V fuse, 6 by 32 millimetres, for the milliamp/microamp input. These fuse details are model-specific. Never substitute a different rating or bypass a fuse.”

### UT89XD Manual-Range Demonstration Meter: Visible Controls

**[Camera: close-up of the UT89XD panel. Show the selector markings and SEL/REL button.]**

“The UT89XD has a function/range selector with printed ranges around the dial. This is the meter we'll use for the manual-range demonstrations. Check the selected range marking carefully before connecting. The SEL/REL key selects a secondary function or relative mode according to the chosen dial position. The illumination key controls the screen backlight and flashlight feature; demonstrate its short- or long-press action only after checking the exact UT89XD manual. HOLD retains a display reading.”

“The UT89XD's dedicated LED test position is a feature of the XD model. Its transistor socket is marked for PNP/NPN hFE testing. The hFE result is a simple gain estimate under the meter's internal test conditions, not a full transistor characterization.

“The selector also covers resistance, capacitance, frequency, AC/DC voltage, current, diode/continuity, and NCV functions. The red lead goes to the socket marked for the intended current range only when measuring current. The high-current input is marked 20 A MAX; the low-current input is marked mA/microamp. The normal V/ohm/Hz socket is separate.

“The UT89XD is a 6000-count True RMS model. Its safety rating is CAT III 600 volts and CAT II 1000 volts. That distinction matters: the 1000 volt maximum does not mean CAT III 1000 volt use.”

### Compare the Two Meters on Camera

| Feature | UT89XD | UT171A |
|---|---|---|
| Display count | 6000 counts | 40,000 counts for UT171A; do not assume B/C specifications apply |
| Range style for this video | Demonstrate deliberate range selection per this unit/manual | Demonstrate auto-ranging, then show RANGE/manual behavior |
| High-current input | 20 A MAX terminal, model fuse applies | 10 A MAX terminal, model fuse applies |
| Low-current input | mA/microamp terminal | mA/microamp terminal |
| hFE transistor test | Yes, via PNP/NPN socket | Not listed in the UT171A manual reviewed |
| LED test | Yes on UT89XD | Not the highlighted UT171A feature |
| Frequency/duty | Frequency and duty functions; confirm selected mode | Frequency and duty functions; confirm LCD mode |
| Special functions | NCV, True RMS | NCV, LoZ ACV, VFC, square-wave output and additional industrial functions |
| Safety rating | CAT III 600 V / CAT II 1000 V | CAT III 1000 V / CAT IV 600 V per UT171A manual |

“Use this table as a quick comparison, but the meter in your hand and its exact manual always win. Do not transfer a range, fuse, CAT rating, or AC bandwidth from one model to the other.”

## Chapter 4 - The Pre-Measurement Ritual (00:27-00:35)

**[On-screen graphic: 1. Quantity? 2. Circuit state? 3. Lead sockets? 4. Function? 5. Range?]**

**Presenter:**

“Before every measurement, stop and say five things out loud: what quantity am I measuring; is the circuit energised; which sockets are the leads in; which function is selected; and what range or mode is active?

“For voltage, black goes to COM and red goes to V/ohm/Hz. Connect in parallel.

“For resistance, continuity, diode, capacitance, or transistor tests, isolate the circuit, verify it is de-energised, and discharge capacitors safely before connecting the meter.

“For current, which we will cover last, use the correct fused current input and put the meter in series. Never put a meter in current mode directly across a voltage source.”

“Inspect the meter, probe insulation, shrouds, terminals, selector and battery indicator. Do not use damaged leads or a damaged meter. Keep fingers behind probe guards. Read the meter's input and CAT category on that specific model before a live measurement.”

**Important mains wording for the presenter:**

“Do not tell viewers to probe household outlets casually. If showing line voltage, use a rated enclosed mains measurement adapter or supervised laboratory trainer, and only if you are competent and authorised. If not, use an isolated extra-low-voltage AC demonstration and explain the method without opening a mains panel.”

## Chapter 5 - DC Voltage: Battery Measurements (00:35-00:43)

### Demonstration: Single Battery

**[Camera: meter leads in COM and V/ohm/Hz. Selector on DC volts. Battery is an accessible low-voltage cell.]**

**Presenter:**

“Let's measure a battery. Black lead to COM, red lead to the voltage terminal. Select DC volts. With the UT171A, begin in auto-range and wait for the display to settle. On the UT89XD, choose a manual range above the expected battery voltage, then step to a more sensitive range if appropriate.”

“Touch red to the positive terminal and black to negative. If the sign is positive, the leads match the polarity. If it is negative, the magnitude is the same but the red and black probes are reversed. Do not treat a negative sign as a fault without considering probe orientation.”

“An unloaded battery voltage tells us its open-circuit voltage at this moment. It does not prove that the battery can deliver its rated capacity or current. A weak battery can show a reasonable open-circuit voltage and sag under load. To evaluate capacity or internal resistance, use an appropriate load test procedure and equipment, not just one voltage reading.”

### Demonstration: Battery Under a Small Load (Optional)

“If we compare open-circuit voltage with voltage under a known, safe load, the difference can reveal voltage sag. The load must be selected for the battery and rated for its power. Do not short the battery to ‘test current’. The meter remains in voltage mode and parallel with the battery/load.”

“Record the meter, function, range, probe points, polarity, and whether the battery is unloaded or under load. That makes the result repeatable.”

## Chapter 6 - AC Voltage: Line-Voltage Demonstration (00:43-00:51)

### Safety Setup - Presenter Only / Enclosed Fixture

**[Camera: show the shrouded fixture and supervision. Do not show bare mains terminals or loose probing.]**

**Presenter:**

“This chapter demonstrates the AC voltage method on a mains-rated enclosed test fixture under the laboratory's supervision. If you are new to electrical measurement, do not repeat this on a wall socket or exposed mains wiring. Use a properly rated training source and follow your local safety procedure.”

“Before measuring: confirm the meter's CAT rating and voltage limit, inspect the leads, set black to COM and red to V/ohm/Hz, select AC volts, and choose a suitable range. Confirm the fixture is intact and shrouded. Keep fingers behind the guards. The meter is connected in parallel across the measurement points.”

“For the UT89XD, remember its CAT III 600 V / CAT II 1000 V marking. For the UT171A, the manual lists CAT III 1000 V / CAT IV 600 V. These categories describe different transient environments. Do not compare only the maximum voltage number.”

### Explain the Reading

“The display reports AC voltage according to the meter's measurement method and frequency bandwidth. Both meters are described as True RMS, but True RMS does not mean accurate for every waveform at every frequency. We will explain bandwidth and crest factor in a later chapter.”

“For this demonstration, compare the measured value with the labelled nominal source value, but do not assume a building supply is exactly nominal. The reading varies with the supply and load. A standard multimeter may not reveal waveform distortion, short transients, or detailed harmonics.”

“When finished, remove probes in a controlled way and return the selector to a safe position. Do not leave a meter connected to live mains unattended.”

**If mains demonstration conditions are not available:**

“Today I will demonstrate AC voltage using an isolated, extra-low-voltage sine source. The connection method is the same, but this is not a mains test. Do not substitute an unverified source.”

## Chapter 7 - Resistance and Continuity (00:51-00:59)

### Resistance Measurement

**[Camera: low-voltage circuit disconnected, resistor removed or one leg isolated.]**

**Presenter:**

“Resistance mode injects a small test signal from the meter. The circuit must be de-energised, isolated, and proven safe before measuring. A capacitor may still be charged after power is removed, so discharge it using an appropriate method and verify the voltage has fallen to a safe level before connecting the meter.”

“Select ohms. On the auto-ranging UT171A, the meter chooses a range; allow it to settle. On the UT89XD, start on a high enough manual range and step down to improve resolution. Touch the probes together first: the display should be close to the lead resistance. This is a useful sanity check, especially when measuring low resistance.”

“Now measure this resistor. The color bands provide a nominal value and tolerance, while the DMM gives an actual measurement with its own accuracy limit. In-circuit resistance readings can be wrong because other resistors, semiconductors, and parallel paths affect the result. Lift one component leg if necessary and authorised.”

### Continuity

“Continuity mode beeps when the measured resistance is below the meter's threshold. The threshold is model-specific. A beep means the path is low resistance under the meter's test conditions; it does not prove the wire can safely carry its intended current, and no beep does not always mean a component is faulty. Long leads, switches, contacts, and semiconductor junctions can affect the result.”

“Never use resistance or continuity mode on an energised circuit. If the display behaves unexpectedly, stop and verify the circuit is isolated.”

## Chapter 8 - Capacitance (00:59-01:06)

### Safe Discharge and Measurement

**[Camera: isolated capacitor, discharge resistor, then meter connected.]**

**Presenter:**

“Before measuring capacitance, isolate the capacitor from the circuit as needed and make sure it is discharged. Do not short a large capacitor directly with a screwdriver. Use an appropriate discharge resistor, allow time for the energy to dissipate, then verify the remaining voltage with a meter on a suitable voltage range.”

“Once it is safe, select capacitance using the dial and secondary-function button as indicated on the meter. On the UT89XD, check the capacitor symbol and display icon. On the UT171A, use SELECT to reach capacitance in the relevant selector position. Confirm units: nanofarads, microfarads, or millifarads.”

“A capacitor may take time to settle, especially at larger values. The meter's test method can be affected by leakage, dielectric absorption, residual charge, and in-circuit parallel components. If the value drifts or looks implausible, recheck polarity, discharge, isolation, contact quality, and the meter's range.”

“The UT89XD manual lists a higher maximum capacitance than the UT171A, but confirm the actual limits in each manual. Do not assume a meter can measure a capacitor just because its display has a capacitance function.”

## Chapter 9 - Diodes, LEDs, and Transistor hFE (01:06-01:17)

### Diode Test

**[Camera: diode disconnected from the circuit; show symbol and band.]**

**Presenter:**

“Diode mode applies a small test current and reports the forward voltage. Isolate the diode from other circuit paths where needed. In the forward direction, red to anode and black to cathode, we expect a forward voltage. Reversing the leads should usually show OL or an out-of-range indication, depending on the meter and component.”

“A diode reading is not a direct measurement of a diode's rated current or full operating behavior. It is a low-current test at the meter's internal conditions.”

### LED Colors and Polarity

“An LED is a diode, so the same polarity principle applies. The longer lead is often anode on a new through-hole LED, and the flat edge or shorter lead often indicates cathode, but confirm the specific part marking. Red LEDs commonly have a lower forward voltage than blue or white LEDs. Green LEDs vary widely by chemistry. Treat rough ranges as examples, not pass/fail specifications.”

“This meter's diode-test voltage may or may not be enough to make every LED glow visibly. A blue or white LED can require a higher forward voltage than a red one. The UT89XD has a dedicated LED test feature; use it as instructed in the UT89XD manual. Do not assume the UT171A has the same LED-test function.”

**Suggested demo table:**

| LED | Expected observation | Notes |
|---|---|---|
| Red | Often visible with modest forward voltage | Note actual meter reading and polarity |
| Green | May be lower or higher depending on type | Do not assume all green LEDs are alike |
| Blue | Often needs a higher forward voltage | A diode mode may show a value without visible light |
| White | Often similar to blue LED junction behavior | White LED package typically includes a blue emitter and phosphor |

“Use a series resistor if powering LEDs from a supply. Do not connect an LED directly to a bench supply or assume the meter's diode-test current is a normal operating condition.”

### Transistor hFE (UT89XD)

“The UT89XD includes a PNP/NPN transistor socket marked hFE. Insert a known, de-energised transistor into the matching holes, with collector, base, and emitter in the correct positions. The pinout is not universal; consult the transistor datasheet. The display gives a rough DC current-gain estimate under the meter's internal test current and voltage.”

“hFE varies with collector current, collector-emitter voltage, temperature, device spread, and frequency. The meter's hFE number is useful for a basic comparison or sorting demonstration, but it is not a complete transistor specification. The UT171A does not list hFE in its reviewed manual, so do not claim that both meters can perform this test.”

## Chapter 10 - Frequency and Duty Cycle (01:17-01:25)

### AWG Square-Wave Demonstration

**[Camera: AWG set to a safe low-voltage square wave; scope may remain connected as an independent visual check.]**

**Presenter:**

“Set the AWG to a low-voltage square wave at a known frequency, for example 1 kilohertz, with a 50 percent duty cycle and a safe offset. Verify its output settings before connecting. Select frequency or Hz mode on the meter. On the UT171A, use the Hz percent control and confirm the display icon. On the UT89XD, use the frequency/duty selector function as marked.”

“The reading tells us the repetition rate seen by the meter. It does not describe the waveform shape or its analog amplitude. The same frequency can be present in a sine, square, or pulse train.”

“Duty cycle is the proportion of one period during which a digital-style waveform is high. A 50 percent duty square wave is high for half the period. Change the AWG duty cycle to 25 percent and observe the meter. Some meters need a minimum amplitude or frequency for reliable duty measurement; check the model manual and signal limits.”

“For frequency measurements, confirm the waveform is within the meter's frequency range and amplitude limits. Very low amplitude, noisy edges, excessive frequency, or an unsuitable waveform can cause unstable or incorrect readings.”

### Manual Cross-Check

“For an independent check, use the oscilloscope to measure period and calculate frequency as one divided by period. The DMM and scope use different measurement methods, so close agreement is a useful cross-check but not proof that every limitation is absent.”

## Chapter 11 - NCV, LoZ, VFC, and Other Advanced Functions (01:25-01:32)

### NCV: Non-Contact Voltage Detection

**[Camera: UT89XD NCV detection near a supervised enclosed AC cable or approved mains detector fixture. Never use as proof of absence.]**

**Presenter:**

“NCV detects an electric field near a conductor without direct metal contact. The meter may provide a tone or light intensity indication. Detection depends on distance, insulation, conductor orientation, shielding, grounding, and the signal strength. It can miss a live conductor or react to nearby coupling.”

“NCV is a screening aid, not a voltage measurement and not a proof-of-dead test. If safety depends on proving a circuit de-energised, use the approved isolation and test procedure with a correctly rated instrument. Never conclude a circuit is safe because NCV did not respond.”

### LoZ and VFC on the UT171A

“The UT171A includes LoZ AC voltage, which intentionally lowers input impedance to reduce certain ghost-voltage readings. Because it loads the circuit more heavily, it can alter a high-impedance source or sensitive signal. Use it only when you understand the circuit and the manual specifies it is suitable.”

“VFC is a low-pass-filtered voltage mode intended for certain variable-frequency-drive measurements. Filtering removes some higher-frequency content. The displayed value is not a full waveform or harmonic analysis. Verify the exact function and limits in the UT171A manual.”

### Square-Wave Output on the UT171A

“UNI-T lists a built-in square-wave output on the UT171A. This can be useful for basic control-signal troubleshooting, but it is not a precision function generator. Check the manual for amplitude, frequency, load, terminal, and duty behavior before connecting it to a circuit.”

## Chapter 12 - True RMS and AC Measurement Gotchas (01:32-01:40)

### What RMS Means

**[Graphic: sine and square wave with equal RMS heating effect.]**

**Presenter:**

“RMS means root mean square. For a varying voltage, square the instantaneous values, take their average over time, and then take the square root. RMS is useful because it relates an AC waveform to the heating effect of an equivalent DC voltage on a resistor.”

“For a clean sine wave, the relationship is `Vrms = Vpeak / square-root-of-two`. Peak-to-peak voltage is twice the peak for a symmetric sine wave. But that simple conversion does not apply to every waveform.”

### True RMS Does Not Mean Unlimited

“A True RMS meter calculates the RMS value over the waveform portions its input and processing can handle. Its accuracy still depends on frequency bandwidth, amplitude range, crest factor, waveform distortion, and the meter's specified conditions.”

“Crest factor is peak voltage divided by RMS voltage. A square wave has a crest factor of one. A sine wave is about 1.414. A narrow pulse can have a much higher crest factor. If the waveform has peaks that exceed the meter's crest-factor capability, the RMS reading can be wrong even though the meter says True RMS.”

“For the UT89X/XD family, the documentation states a sine-wave AC response of approximately 45 hertz to 1 kilohertz, with a different non-sine response specification of approximately 45 to 400 hertz. The stated crest-factor limit is up to 3 at 3000 counts, tightening to 1.5 at 6000 counts or full-range conditions. Check the exact manual revision and function/range conditions before applying those figures. Do not apply those limits to the UT171A. I could not verify a numerical UT171A crest-factor or bandwidth limit from the accessible manufacturer information, so check its exact manual and state the specified conditions before claiming a number.”

“Likewise, an AC voltage function is not automatically suitable for a high-frequency PWM waveform or a distorted variable-frequency-drive output. Use the right meter, range, bandwidth, and measurement method. If waveform shape matters, use an appropriate oscilloscope with a safe grounding setup.”

### Error Sources to Say on Camera

- “Frequency is outside the meter's specified AC bandwidth.”
- “Crest factor or peak input exceeds the meter's capability.”
- “The meter is auto-ranging or settling and the reading has not stabilised.”
- “The waveform contains DC offset; confirm whether the AC function removes it.”
- “The source impedance or meter loading changes the circuit.”
- “The probe/contact, fuse, battery, or selected function is wrong.”

## Chapter 13 - Current Measurement (Final Chapter) (01:40-01:55)

**This is intentionally the final technical chapter. No current-measurement procedure appears earlier in the tutorial.**

### Explain the Fundamental Difference

**[Camera: draw a source, load, and series ammeter on paper before connecting anything.]**

**Presenter:**

“We have reached current measurement, and it comes last for a reason. The meter is no longer connected across two points like a voltmeter. To measure current, we must open the circuit and insert the meter in series so the branch current passes through the meter.”

“Inside current mode, the meter routes current through a low-value shunt resistor and measures the voltage across that shunt. This makes the meter's path low resistance. If we accidentally place a current-configured meter directly across a voltage source, we can create a short circuit. The fuse may blow, the leads can arc, the source can be damaged, and the user can be injured.”

“The meter's fuse is not permission to be careless. Fuses have voltage, current, interrupting-capacity, and time-current ratings. A replacement must match the exact model's specification. Never bridge a fuse or substitute foil or wire.”

### Burden Voltage

“A current meter also changes the circuit. Current through the shunt, fuse, leads, and contacts produces a voltage drop called burden voltage. The load no longer sees exactly the same voltage it had before the meter was inserted.”

“For a simplified illustration only, if the effective meter path were 2 ohms and the measured current were 100 milliamps, the burden would be 0.1 amps times 2 ohms, or 0.2 volts. Those are teaching numbers, not specifications for either UNI-T meter. The real path includes shunt, fuse, leads, and contacts and changes with range/function. Always check a manufacturer's published burden specification where available; I could not verify one for these two models from the accessible manufacturer text.”

“A practical observation is to compare the load voltage before and during a current measurement, using a safe setup and suitable separate measurements. If the circuit changes substantially when the meter is inserted, burden voltage and meter loading may be part of the explanation.”

### Current Measurement Preflight

“Before connecting, stop and read every label. Identify the expected current and whether it is AC or DC. Confirm the meter and leads are rated for the circuit category and current. Put the black lead in COM. Put the red lead in the correct fused current terminal: the UT89XD's low-current mA/microamp input or 20 A input as appropriate; the UT171A's mA/microamp input or 10 A input as appropriate. Never assume the terminals or fuse ratings are the same.”

“Select the correct AC or DC current function. If using a manual range, start on the highest suitable current range and move down only after you know the current is within the meter's limits. Follow the manufacturer's time limits: high-current inputs may only be rated for short measurements, and the case may become warm if used too long.”

“De-energise the circuit before opening it and inserting the meter in series, unless an approved procedure explicitly requires a different method. Recheck the intended current path before energising. Do not exceed the meter's CAT rating, terminal rating, fuse rating, or measurement duration.”

### Demonstration with a Low-Voltage Current-Limited Circuit

**[Camera: use a current-limited extra-low-voltage supply, series resistor, and LED or resistive load. Do not use mains.]**

“For the demonstration, I am using an isolated extra-low-voltage, current-limited supply and a simple load. I switch off the supply, open one side of the circuit, and insert the meter in series. I check the input socket, function, range, and expected current before re-energising.”

“Now the same current flows through the meter and the load. Read the display and note whether it is microamps, milliamps, or amps. If it shows overload, zero unexpectedly, or an unstable value, switch off and check the circuit and fuse; do not move a live lead between terminals.”

“When finished, switch off or isolate the source, remove the meter from the series path, and restore the circuit. Then immediately move the red lead back to the normal V/ohm/Hz socket. Say that out loud: red lead back to volts.”

### The Fuse-Blowing Mistake - Explain, Do Not Perform

“Here is the mistake we never demonstrate by actually doing it: leaving the red lead in a current socket, selecting current, and placing the probes across a voltage source. That is the wrong topology. It creates a low-resistance path across the source and can blow the fuse or cause a dangerous fault. We explain it with this diagram only; we do not intentionally short a supply to prove the point.”

“Before returning the meter to the bench, check the lead sockets again. The meter should be back in its normal voltage configuration, selector safe, probes intact, and any abnormal event reported. That concludes the tutorial.”

## On-Camera Control and Function Checklist

### UT89XD

- [ ] Confirm UT89XD model label and CAT marking.
- [ ] Selector positions: AC/DC voltage, resistance, capacitance, frequency/duty, current, diode/continuity, NCV, LED test.
- [ ] SEL/REL key and secondary-function icons.
- [ ] Backlight/flashlight key and HOLD.
- [ ] PNP/NPN hFE socket and pin arrangement.
- [ ] COM, V/ohm/Hz, mA/microamp, and 20 A MAX terminals.
- [ ] Demonstrate manual range selection on the exact meter; show active range.
- [ ] State CAT III 600 V / CAT II 1000 V correctly.
- [ ] Verify manual fuse specification before discussing replacement.

### UT171A

- [ ] Confirm UT171A model label, 40,000-count display, and CAT marking.
- [ ] Rotary positions for DC mV/V, AC V, ohms/continuity/diode/capacitance, Hz/duty, current, NCV, and OFF.
- [ ] SELECT, RANGE, HOLD/backlight, REL/delta, MAX/MIN, STORE, RECALL, DELETE, ESC, Setup, and OK.
- [ ] Demonstrate auto-range; then demonstrate RANGE/manual mode if supported by the displayed state.
- [ ] VFC/low-pass and LoZ voltage functions; explain loading/limits.
- [ ] COM, V/ohm/Hz, mA/microamp, and 10 A MAX terminals.
- [ ] State CAT III 1000 V / CAT IV 600 V correctly.
- [ ] Manual fuse ratings: F 10 A H 1000 V (10 x 38 mm) and FF 800 mA H 1000 V (6 x 32 mm). Confirm the exact model/manual before service; never bypass or substitute a fuse.

## Demonstration Plan and Results Log

| Demo | Setup | Expected observation | Record on camera |
|---|---|---|---|
| Battery DC V | Battery in voltage mode; red to positive | Positive DC reading; sign reverses with leads | Meter, range, polarity, open-circuit/load condition |
| AC line V | Approved enclosed mains fixture and qualified supervision only | AC RMS reading appropriate to source | Meter model, CAT rating, AC mode, safe fixture, reading |
| Resistor | Isolated resistor, resistance mode | Reading near nominal/tolerance | Nominal code/value, range, measured value |
| Continuity | Isolated wire/contact | Beeper for path below threshold | Probe short baseline; path state |
| Capacitor | Discharged, isolated capacitor | Value settles after charging/test interval | Polarity, discharge check, settling time, value |
| Diode | Isolated silicon diode | Forward drop one way; OL/reverse indication opposite way | Direction, display, meter model |
| LEDs | Red, green, blue, white, isolated | Different forward drops; some may not visibly light in meter test | Color, polarity, measured Vf, LED-test vs diode mode |
| Transistor hFE | UT89XD socket, known pinout | Approximate gain value | Part ID, NPN/PNP, pinout, hFE; label as rough test |
| Frequency | Low-voltage AWG sine/square | Reading near generator setting within meter limits | Waveform, amplitude, frequency, mode, meter |
| Duty cycle | Low-voltage square wave | Reading follows AWG duty setting | Frequency, amplitude, duty, selected mode |
| NCV | Approved enclosed live conductor/fixture | Audible/visual proximity indication | Distance/orientation; state not a proof-of-dead test |
| Current (last) | Current-limited extra-low-voltage load, meter in series | Current reading; load may respond to burden | Terminal, mode, range, duration, observed load voltage |

## Measurement Theory Reference Card

### Ohm's Law

`V = I × R`   `I = V / R`   `R = V / I`

Use the equation to estimate order of magnitude and choose a safe range. It does not replace checking component ratings or meter limits.

### Sine-Wave RMS

For an ideal sine wave with no DC offset:

`Vrms = Vpeak / sqrt(2)`

`Vpp = 2 × Vpeak`

Therefore `Vrms = Vpp / (2 × sqrt(2))` for that specific waveform only. Do not apply this conversion to square, pulse, distorted, or offset signals without the appropriate waveform mathematics.

### Crest Factor

`Crest factor = absolute peak value / RMS value`

A sine wave has crest factor approximately 1.414; a symmetric square wave is 1. Narrow pulses can have much higher crest factor. True RMS accuracy is still limited by the meter's specified crest factor, frequency bandwidth, range, and waveform conditions. UT89XD specifications and UT171A specifications must be treated separately.

### Current and Burden Voltage

`Vburden = Imeter × Rinternal_path` as a simplified model.

The actual meter path includes shunt, fuse, leads, and contacts and can change with range/function. Use the manufacturer's burden specification where available. Do not assume the meter has zero resistance in current mode.

## Model-Specific Specifications to Verify Before Recording

| Specification | UT89XD | UT171A | Recording instruction |
|---|---|---|---|
| Display count | 6000-count family | 40,000 counts for A model | Do not substitute B/C details for UT171A |
| AC RMS | True RMS; UT89 documentation states response/crest conditions | True RMS; exact numeric AC bandwidth/crest limit not verified here | Read exact model manual; avoid unsupported numeric claims |
| Maximum current input | 20 A terminal | 10 A terminal | Observe duty/time limits printed in the manual/case |
| Low-current terminal | mA/microamp | mA/microamp | Check fuse and current ceiling per exact model |
| Fuse values | Verify exact UT89XD manual/case marking | 10 A and 800 mA high-breaking-capacity 1000 V types per UT171A manual | Never improvise replacement; do not teach fuse repair as a user procedure |
| Fuse values | Verify exact UT89XD manual/case marking | F 10 A H 1000 V and FF 800 mA H 1000 V per UT171A manual | Never improvise replacement; do not teach fuse repair as a user procedure |
| CAT rating | CAT III 600 V / CAT II 1000 V | CAT III 1000 V / CAT IV 600 V | Read actual unit marking before each mains demonstration |
| hFE | Yes, UT89XD socket | Not listed for UT171A | Keep hFE demo on UT89XD |
| LED test | Yes, UT89XD feature | Not claimed here | Use UT89XD manual for LED-test procedure |
| NCV | Yes | Yes | Detection only, not absence-of-voltage proof |
| LoZ/VFC | Not listed as equivalent features | UT171A includes LoZ and VFC functions | Explain that LoZ loads the circuit and VFC filters signal content |

## Sources and Supporting Documents

1. UNI-T. [UT89X series product specifications](https://meters.uni-trend.com/product/ut89x-series/).
2. UNI-T. [UT89X/XD user manual](https://meters.uni-trend.com/download/ut89x-xd-user-manual/).
3. UNI-T. [UT171A product information](https://meters.uni-trend.com/product/ut171a/).
4. UNI-T. [UT171A/B/C user manual](https://meters.uni-trend.com/download/ut171a-b-c-user-manual/). Use the A-model columns for the UT171A; do not use B/C count or specifications.
5. Electronics Lab. [Manual Ranging Multimeter Safety Operating Procedure](../../Lab%20Documentation/Machines%20Lab/Manual%20Ranging%20Multimeter%20Safety%20Operating%20Procedure.md).
6. Electronics Lab. [Electronics Lab General Safety Rules](../../Lab%20Documentation/Electronics%20Lab/Electronics%20Lab%20General%20Safety%20Rules.md).

**Production note:** film the current-measurement chapter last, and leave the meter with the red lead restored to the V/ohm/Hz terminal. Do not end the video with the meter in a current socket.
*** End Patch