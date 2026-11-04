# Scientech 801 Oscilloscope Tutorial Script

## Production Brief

**Working title:** How to Use the Scientech 801 Oscilloscope: Front Panel, Waveforms and Manual Measurements  
**Format:** presenter-led YouTube tutorial with close-up shots of the instrument and live demonstrations  
**Target runtime:** approximately 60 minutes  
**Audience:** learners new to analogue-display oscilloscopes  
**Instrument in the supplied photograph:** Scientech 801, 30 MHz, two-channel CRO-style oscilloscope with a digital control/readout panel and an analogue CRT trace. The supplied manual is titled *Scientech 30MHz 2Channel Oscilloscope* and identifies the related model as Scientech 801C. Verify the exact model and front-panel revision on the instrument's rear/nameplate before recording.  
**Demonstration source:** an arbitrary waveform generator (AWG) producing low-voltage sine, square, and triangle waves.  
**Main skill:** make a defensible estimate by counting graticule divisions and applying the scope/probe scale.

### Presenter Note on Model and Control Labels

The manual supplied with the tutorial folder identifies the scope as an 801C, while the front-panel photograph is labelled 801. The manual specifications and the faceplate strongly match, but production revisions can differ. The script describes the controls printed on the photographed instrument. Where the button label combines modes or its exact cycling behavior is not fully described in the manual text, show the selected status on the LCD/trace and verify it on the physical scope rather than stating an unverified button sequence.

The scope has digital controls/readouts but an analogue CRT waveform display. It is not a digital storage oscilloscope: do not promise waveform capture, memory, automatic voltage readouts, or reliable capture of short one-off transients.

## Chapter Timeline

| Chapter | Time | Topic |
|---|---:|---|
| 1. What this scope is | 00:00-03:00 | Instrument type, learning goals, manual specifications |
| 2. Safety before signals | 03:00-07:00 | Earth reference, input limits, bench setup |
| 3. First look around the panel | 07:00-10:00 | Display, power, intensity, focus, trace rotation |
| 4. Every control, grouped by job | 10:00-23:00 | Vertical, display, horizontal, trigger, connectors |
| 5. Connect the AWG and get a stable trace | 23:00-29:00 | Initial setup and trigger acquisition |
| 6. Measure voltage by counting divisions | 29:00-38:00 | V/div, peak-to-peak, probe factor, offset |
| 7. Measure time and frequency | 38:00-44:00 | Time/div, period, frequency, duty cycle |
| 8. Coupling and channel display modes | 44:00-51:00 | AC/DC/GND, dual trace, add/subtract, invert, XY |
| 9. Calibrator and probe compensation | 51:00-55:00 | 1 kHz calibration output and square-wave probe check |
| 10. Viewer challenge and recap | 55:00-60:00 | Repeatable measurement checklist and close |

---

# Full Talking Script

## Chapter 1 - What This Scope Is (00:00-03:00)

### Opening Shot

**[Camera: wide view of the Scientech 801. Cut to the CRT trace, then the LCD/readout and front-panel controls.]**

**Presenter:**

“In this tutorial, we are going to learn how to use this Scientech 801 oscilloscope from the front panel all the way through to a manual voltage and frequency measurement.

“We will identify the controls, feed in known signals from an arbitrary waveform generator, stabilise the waveform, and then measure it by counting the divisions on the screen. This is a hands-on measurement lesson: the numbers on the LCD tell us the selected settings, but we will read the waveform itself from the analogue graticule.

“By the end, you should be able to estimate peak-to-peak voltage, period, frequency, and duty cycle, and explain which controls affect each measurement.”

### Set Expectations

**Presenter:**

“One important distinction: this instrument has a digital control panel and a digital readout, but the waveform is displayed on an analogue CRT. It is not a digital storage oscilloscope. It does not store a waveform for later inspection, and you should not assume it has the automatic measurement or single-event capture features of a modern digital scope.

“Think of its signal path this way: the input coupling and volts-per-division attenuator condition the signal; the vertical amplifier drives the CRT’s vertical deflection; the trigger circuit chooses a repeatable point on the signal; and the timebase drives the horizontal sweep. The control electronics select calibrated settings and report them on the LCD, while the waveform itself is drawn continuously on the CRT.”

“The model manual describes a 30 megahertz, two-channel oscilloscope. It lists a calibrated vertical range from 5 millivolts per division to 20 volts per division, a calibrated timebase from 0.5 microseconds per division to 0.2 seconds per division, and a 10-times sweep magnifier. Treat those as the manual’s instrument specifications, not as permission to connect arbitrary voltages. The probe, input, source and laboratory rules still set the safe limits.”

**On-screen callout:** “Settings are digital; waveform display is analogue.”

“The manual also quotes approximately 30 megahertz vertical bandwidth, an approximately 12 nanosecond rise time, and an 8 by 10 centimetre graticule. We will not need to operate near the bandwidth limit today. Our examples will use low-frequency, low-voltage signals that are easy to see and measure.”

**[Show the model label and the supplied manual cover/title.]**

“The document in our folder is titled *Scientech 30MHz 2Channel Oscilloscope* and identifies an 801C. This faceplate says 801. They appear to be from the same family, but check your own unit’s model and revision. If its layout or button behavior differs, follow the manual for that exact instrument.”

## Chapter 2 - Safety Before Signals (03:00-07:00)

### Safety Setup

**[Camera: show scope, AWG, BNC cable, optional probe. Keep the low-voltage bench setup visible.]**

**Presenter:**

“Before we connect anything, we need to understand the most important oscilloscope safety issue: the probe ground is not a floating measurement lead. On a bench oscilloscope, the BNC shells and probe grounds are commonly bonded to the instrument chassis and protective earth.

“If we clip that ground lead to the wrong point in a circuit, we can short that point to earth. That can damage the circuit or instrument, trip protection, create sparks, or expose someone to danger. We identify the circuit reference point before connecting the ground.”

“For the first demonstration, I am using an AWG and oscilloscope connected by a BNC lead. The AWG output and the scope input share a reference through the BNC shells. I have checked the equipment and the laboratory procedure, and I am using a low-voltage signal. Do not copy this setup on a different circuit until you know its grounding arrangement.”

“The 801C manual states a maximum input of 400 volts DC plus peak AC for that model. That is an instrument specification, not a practical target for this tutorial. The probe may have a lower rating, and a measurement can still be unsafe or damaging even when a number appears below the headline input limit. Today we will use a small signal from an AWG.”

“The manual also lists the channel input impedance as approximately 1 megohm in parallel with 30 picofarads. That load can affect high-impedance or high-frequency circuits. We will keep today’s source simple.”

### Demonstration Rules

“Before every measurement, answer four questions: What is the signal’s expected maximum voltage? What point is the circuit reference? What probe attenuation is being used? What are the ratings of the scope input, probe, generator, and circuit?

“A missing or unstable trace does not prove that the circuit is off or safe. This instrument is not a proof-of-dead tester. Do not open the scope case; the CRT and power supply can contain hazardous internal voltages. If a probe connection causes a spark, a supply trip, an unexpected voltage drop, smoke, or unusual heating, stop and follow the lab fault procedure.”

**On-screen callout:** “Identify ground first. Stay within every connected device’s rating.”

**Reference for recording:** [CRO Analog Display Oscilloscope Safety Operating Procedure](../../../Lab%20Documentation/Electronics%20Lab/CRO%20Analog%20Display%20Oscilloscope%20Safety%20Operating%20Procedure.md) and [Electronics Lab General Safety Rules](../../../Lab%20Documentation/Electronics%20Lab/Electronics%20Lab%20General%20Safety%20Rules.md).

## Chapter 3 - First Look Around the Panel (07:00-10:00)

**[Camera: slow pan from CRT across the controls to the two channel inputs.]**

**Presenter:**

“Let’s orient ourselves. The CRT is the large analogue display. The horizontal axis represents time in normal sweep mode; the vertical axis represents voltage. The etched or printed grid is the graticule. We count its major divisions and smaller subdivisions to make measurements.

“The supplied manual describes an 8 by 10 centimetre display. In the normal orientation that gives ten major horizontal divisions and eight major vertical divisions. Each large square is one division. Use the smaller grid marks to estimate fractions of a division, and state your estimate sensibly; do not pretend a hand-read trace supports unlimited decimal places.”

“The small LCD is the control/readout display. It helps show settings such as channel sensitivity and timebase. It does not mean the CRT waveform is digitally sampled or stored. We still read the trace manually.”

“The panel is organised by task. The left and lower-left controls adjust the visible trace. The channel sections set vertical sensitivity and coupling. The centre controls set horizontal time and position. The trigger controls decide when a sweep starts. The BNC inputs are at the bottom, one for CH1, marked Y, and one for CH2, marked X. There is also an external trigger input and a calibration output.”

“I’ll walk through every visible control group, then we’ll use only a few of them for the first signal. You do not need to press every button in every measurement.”

## Chapter 4 - Every Control, Grouped by Job (10:00-23:00)

### A. Power, CRT Display, and Trace Quality

**[Camera: close-up of power, Intensity, Focus, and TR.]**

“First, the power button, marked with the power symbol, turns the instrument on or off. Before power-up, inspect the case, mains lead, BNC connectors, controls, and probes. After power-up, give the CRT a moment to settle and use only enough brightness to see the trace clearly.”

“Intensity changes the brightness of the trace. If it is too low, the line is hard to see. If it is unnecessarily high, the trace can become a bright spot or line and may damage the CRT phosphor over time. Use the lowest comfortable intensity, especially if you are leaving a stationary trace on screen.”

“Focus adjusts the sharpness of the trace. A correctly focused trace is narrow enough that you can judge which graticule line it crosses. Focus is not a measurement control; it makes the line easier to read.”

“The small TR control is trace rotation. It is a fine adjustment used to make the horizontal zero trace parallel to the graticule. If the trace is visibly tilted, adjust it only as permitted by the instrument instructions. Do not confuse trace rotation with X shift or Y shift.”

### B. Vertical Controls: Volts and Position

**[Camera: highlight CH1 Volts/Div, CH2 Volts/Div, Y Shift 1, Y Shift 2.]**

“Each channel has a Volts per Division control. CH1’s is the blue control and CH2’s is the green control. This setting tells us how many volts correspond to one vertical major division. The 801C manual lists calibrated steps from 5 millivolts per division up to 20 volts per division in a 1-2-5 sequence. So you will see settings such as 0.1, 0.2, 0.5, 1, 2, and 5 volts per division, depending on range.”

“Use a smaller volts-per-division number when the signal is small, because that makes the trace taller. Use a larger number when the waveform is too tall or risks going off screen. We want the waveform to occupy a useful amount of the grid without clipping at the top or bottom.”

“Y Shift 1 moves channel 1 vertically. Y Shift 2 moves channel 2 vertically. These controls reposition the trace; they do not change the volts-per-division scale. We use them to place a zero reference or separate two traces so they are easier to compare.”

“If a trace moves when you turn Y Shift, that does not mean the signal voltage changed. We have moved its display position. Always distinguish position from sensitivity.”

### C. CH2 Invert

**[Camera: show Invert CH2 button.]**

“Invert CH2 reverses the polarity of the channel 2 display. A positive-going waveform appears negative-going, and vice versa. It can be useful when comparing signals or using the add/subtract mode. Check the indicator and the manual for the exact state convention on your revision. Remember: inverting a trace is a display/math operation; it does not reverse the physical signal at the test point.”

### D. Channel Inputs and AC / GND / DC Coupling

**[Camera: show CH1(Y) and CH2(X) BNCs and each channel’s coupling selector.]**

“CH1 is labelled Y and CH2 is labelled X. In normal timebase mode, both can be displayed as voltage channels. In XY mode, the label is literal: channel 1 drives the vertical Y axis and channel 2 drives the horizontal X axis.”

“Each channel has an AC, GND, and DC coupling selection. DC coupling shows the AC waveform plus its DC offset. Use it when the absolute voltage level matters. AC coupling inserts a capacitor in the input path, which removes the steady DC component and lets us inspect a small ripple riding on a larger DC level. It changes what we see at low frequencies, so it is not the right choice when measuring the DC level itself.”

“GND disconnects the signal from the vertical amplifier input and provides an internal ground reference so we can place the zero line. It is a display-reference setting, not a command to ground the external circuit through the signal input. After setting the reference, return to DC or AC as required.”

“The CH1 and CH2 BNC grounds are common. They are not independent floating grounds. Do not connect channel ground clips to different circuit points unless the circuit and measurement method have been assessed.”

### E. Channel Display Modes: CH1/2, Mono, Dual, Alternate, Chop, Add

**[Camera: close-up of the mode buttons and their indicators. Show the LCD/trace as each is selected.]**

“The faceplate groups the channel and display selectors under labels including CH1/2, Mono, Dual, Alt, Chop, and Add. The manual describes the operating modes as channel 1, channel 2, both channels in alternate or chopped display, XY, and add/subtract CH1 plus or minus CH2.”

“CH1/2 selects which channel is being referenced or displayed in the relevant single-channel or trigger selection mode. Confirm the selected channel on the LCD or indicator; do not rely only on memory of button presses.”

“Mono means a single trace/channel view. It is useful when you want one clean waveform and do not need a comparison channel. Dual enables both channel traces so we can compare two signals, such as a generator input and a circuit output.”

“In Alt, or alternate display, the scope draws one channel on one sweep and the other channel on the next sweep. This often works well for faster repetitive signals. In Chop, the display switches rapidly between channels during a sweep, which is often more useful for slower signals. The manual gives approximately 350 kilohertz for the chopped switching behavior. At some frequencies, alternate mode may look steadier; at others, chopped mode may be easier to see. Try both and observe the trace.”

“Add displays the algebraic combination of CH1 and CH2. With CH2 normal, the displayed result is CH1 plus CH2. If CH2 is inverted, the combination becomes CH1 minus CH2. This is useful for comparing differences, but only when both channel scales and references are appropriate. The manual specifies add/subtract capability and CH2 invert. Be explicit about the selected channel scales and polarity when explaining the result.”

“Because this panel has closely grouped selectors, the exact sequence or button action can vary by revision. In the video, show the actual LCD/trace state after each press and name the mode indicated by the instrument.”

### F. Horizontal Controls: Time, Position, Variable, and X10

**[Camera: show Time/Div, X Shift, TB Var / Cal, and X10.]**

“Time per Division, sometimes shown as Time/Div, sets how much time one horizontal major division represents. The manual lists 18 calibrated steps from 0.5 microseconds per division to 0.2 seconds per division in a 1-2-5 sequence. Use a faster timebase, such as microseconds per division, to see a high-frequency waveform across a few cycles. Use a slower timebase, such as milliseconds per division, to inspect slow changes.”

“X Shift moves the trace left or right. Use it to place the trigger point or a feature of interest where you can count divisions conveniently. It does not change the time scale.”

“TB Var is the timebase variable control. In its calibrated detent, the selected Time/Div value is calibrated and suitable for measurement. If the variable control is moved away from its calibrated position, the actual sweep rate may no longer match the printed setting. Before measuring time or frequency, return it to Cal and confirm the setting.”

“X10 is the horizontal sweep magnifier. It expands a portion of the waveform horizontally. The manual describes magnification down to about 50 nanoseconds per division, with the variable control extending further. When X10 is active, use the displayed status and the manual’s scaling convention. Do not multiply or divide a measurement by ten from memory alone; verify whether the readout or dial already accounts for magnification.”

### G. Trigger Controls: Source, Slope, Mode, Level

**[Camera: show Trig 1/2, Alt, Ext, +/- slope, Auto Level, and Level knob.]**

“Triggering tells the horizontal sweep when to begin drawing the next trace. A good trigger makes a repetitive waveform appear stationary. A poor trigger makes the waveform drift or roll, even when the signal itself is steady.”

“The trigger source can be CH1, CH2, alternating CH1/CH2, or external. Trig 1/2 selects a channel source. Choose the channel that has the cleanest version of the signal you want to synchronise to. Alt can alternate the trigger source between channels, useful when viewing two unrelated channel waveforms in dual mode. Ext selects the external trigger input; use it only when you have a separate, suitable sync signal connected to the external trigger BNC.”

“The plus/minus control selects trigger slope. Positive slope triggers when the waveform crosses the selected level while rising. Negative slope triggers while falling. Use positive slope for a rising edge unless you have a reason to trigger on the falling edge.”

“Auto Level selects the automatic trigger behavior described by the manual’s Auto/Level modes. In automatic mode, the sweep can continue even if a clear trigger is not being found, which helps you see a trace while setting up. Level mode requires the signal to cross the chosen trigger level. The Level knob moves that threshold up or down. For a sine wave, place the trigger level near the middle of the waveform’s vertical range; for a square wave, choose a point between the low and high levels.”

“If the trace is rolling, check the source, slope, trigger mode, and level before changing the signal generator. Trigger controls stabilise the display; they do not change the waveform itself.”

### H. External Trigger and Calibration Output

**[Camera: close-up of Ext Trigger Input and Cal Out 0.2 Vpp.]**

“The Ext Trigger Input accepts an external synchronising signal. This is not the same as CH1 or CH2 measurement input. Use it when the trigger should follow a separate reference, and check its voltage and connection requirements first.”

“Cal Out provides the scope’s calibration square wave. The supplied manual specifies approximately 1 kilohertz and 0.2 volts peak-to-peak, with stated accuracy of plus or minus one percent, for probe compensation. We will use it in the calibration chapter. It is a known reference output, not the AWG input we use for the main demonstration.”

### Full Control Inventory for the Presenter

| Visible label/control | Function | When to use it | Presenter demonstration |
|---|---|---|---|
| Power button | Turns scope on/off | Start/end of session; power down before changing to a different bench configuration | Power up, wait for the LCD and trace, power down at close |
| Intensity | CRT trace brightness | Make the trace visible without excessive brightness | Show too dim, then comfortable brightness; avoid a bright stationary spot |
| Focus | CRT trace sharpness | Make the trace line narrow enough to read against graticule | Focus on a horizontal line, then a sine wave |
| TR | Trace rotation trim | Correct slight trace tilt relative to graticule if permitted | Show a flat DC/GND trace and align with the horizontal grid |
| X10 | Horizontal sweep magnifier | Expand a short section of a fast waveform | Enable briefly; point out that time scale/readout changes and return to normal |
| XY | XY display mode | Plot CH2 as X and CH1 as Y for phase/frequency Lissajous patterns | Two same-frequency sine waves; circle when amplitudes are matched and phase is near 90 degrees |
| CH1/2 / Trig 1/2 | Channel/trigger source selection as indicated by mode/readout | Choose which channel drives trigger or single-channel view | Select CH1 then CH2; narrate the actual indicator/readout state |
| Mono | Single-channel display mode | View one trace without a second channel | Select CH1 in Mono mode |
| Dual | Display both channel traces | Compare input and circuit output | Show CH1 and CH2 with generator channels or a safe circuit input/output |
| Alt | Alternate trace/trigger behavior depending on selector bank | Dual display or alternating CH1/CH2 trigger source, as selected | Demonstrate and confirm displayed status; explain which Alt function is active |
| Chop | Chopped dual-trace mode | Often clearer for slower two-channel signals | Compare with Alt at the same slow signal frequency |
| Ext | External trigger source selection | Synchronise sweep to a separate trigger signal | Connect a low-voltage sync output to Ext Trigger Input, if available |
| Add | Algebraic channel combination | Compare or sum two signals | Show CH1+CH2; then invert CH2 for CH1-CH2 if supported by mode |
| +/- | Trigger slope or polarity selector depending on its mode group | Rising/falling trigger slope; confirm label association on revision | Show a square-wave edge and explain positive/negative slope |
| Auto Level | Automatic/level trigger mode | Auto to acquire a trace; Level for deliberate threshold triggering | Switch mode and point out status/trace stability |
| Level knob | Trigger threshold | Select where on the waveform the sweep begins | Move threshold above/below the sine midline and observe stability |
| X Shift | Horizontal position | Put trigger point or feature at a useful horizontal location | Move trace without changing Time/Div |
| TB Var / Cal | Variable timebase; Cal is calibrated detent | Fine adjustment; return to Cal for calibrated time measurements | Demonstrate the detent gently, then return to Cal before measuring |
| Time/Div | Horizontal time scale | Set visible time window and number of cycles | Set 0.2 ms/div for a 1 kHz signal |
| Y Shift 1 | CH1 vertical position | Separate/position CH1 trace; locate reference | Move CH1 trace up/down while volts/div stays fixed |
| Y Shift 2 | CH2 vertical position | Position CH2 in dual display | Move CH2 trace independently |
| Invert CH2 | Reverses CH2 display polarity | Add/subtract or polarity comparison | Invert CH2 and observe waveform flip vertically |
| CH1 Volts/Div | CH1 vertical sensitivity | Make CH1 waveform fill a useful part of screen | Change 0.5 to 0.2 V/div and note height changes |
| CH2 Volts/Div | CH2 vertical sensitivity | Set CH2 scale independently | Compare two channels and state both scales |
| CH1 AC/GND/DC | CH1 input coupling/reference selector | DC for total signal; AC to remove DC offset; GND to set reference | Show same signal in all three modes; return to DC |
| CH2 AC/GND/DC | CH2 input coupling/reference selector | Same as CH1 for second channel | Demonstrate in dual mode if time permits |
| CH1(Y) BNC | CH1 signal input; Y input in XY mode | Connect measured signal within limits | Use low-voltage AWG BNC output |
| CH2(X) BNC | CH2 signal input; X input in XY mode | Second signal or X input for XY mode | Use CH2 as phase reference |
| Ext Trigger Input | External sweep trigger input | Trigger from separate sync source | Use low-voltage sync only; do not confuse with measurement BNC |
| Cal Out 0.2 Vpp | Approx. 1 kHz calibration square-wave output | Probe compensation and known reference | Show square wave and check probe compensation |

**Presenter caution:** some compact labels span a group of selectors, especially `CH1/2`, `Trig 1/2`, `Alt`, and `+/-`. Do not claim a button is a particular mode until the camera shows its associated indicator/readout on this unit. The manual confirms operating modes, but the faceplate is the reliable guide to how this physical revision selects them.

## Chapter 5 - Connect the AWG and Get a Stable Trace (23:00-29:00)

### Safe Initial Setup

**[Camera: show AWG output disconnected, then set the controls before connecting.]**

**Presenter:**

“For our first signal, I’ll use a low-voltage sine wave. On the AWG, select a 1 kilohertz sine wave, start with a small amplitude such as 0.5 volts peak-to-peak, and set zero DC offset. Confirm the generator’s load setting. Some generators display amplitude for a 50-ohm load; if the actual load is the scope’s approximately 1-megohm input, the delivered amplitude may differ from the displayed value. We will use the oscilloscope measurement as the observed value, not assume the generator display is exact.”

“I’m using a BNC-to-BNC connection for this low-voltage bench demonstration. Before connecting, confirm the generator and scope references are compatible. With a probe instead of a BNC lead, check the probe’s x1/x10 switch, compensation, and voltage rating. The probe ground is connected to the instrument’s common reference; it is not a floating clip.”

### Start with Conservative Settings

“Set CH1 coupling to DC. Select CH1 only or Mono display. Choose a conservative vertical range first, for example 0.5 volts per division for a 0.5 volt peak-to-peak signal. Set Time/Div to 0.2 milliseconds per division. Choose CH1 as the trigger source, positive slope, Auto Level mode, and place the trigger level near zero volts. Now connect the signal and look for the trace.”

“If the signal is not visible, do not immediately increase the generator output. Check that the correct channel is selected, the coupling is not set to GND, the vertical scale is sensible, the timebase is suitable, and the trigger is set to the channel carrying the signal.”

**[Show the trace acquiring.]**

“The waveform should become stable when the trigger level crosses a repeatable point on each cycle. If it rolls, adjust trigger source, slope, mode, and level. If it is too tall, increase volts per division. If it is too short, decrease volts per division. Keep the signal within the known limits of the scope, probe, generator and circuit.”

## Chapter 6 - Measure Voltage by Counting Divisions (29:00-38:00)

### Establish the Vertical Scale

**[Camera: zoom on CRT graticule and CH1 Volts/Div LCD/readout.]**

**Presenter:**

“Now we will measure the waveform manually. The vertical scale is set by the CH1 Volts per Division control. The basic calculation is:

`Vpp = vertical divisions from peak to peak × volts per division × probe factor.`

“Count the large vertical divisions first. If the trace crosses halfway through a division, record a half division. Use the minor graticule marks to estimate fractions, but do not claim more precision than the display and line thickness allow.”

“For example, if the waveform spans 2.4 vertical divisions and the setting is 0.2 volts per division, with a direct BNC connection or x1 probe, then:

`Vpp = 2.4 × 0.2 V = 0.48 V peak-to-peak.`

“If the same trace is measured through a x10 probe and the scope channel setting does not compensate for the probe, multiply by ten: `0.48 V × 10 = 4.8 V peak-to-peak`. Always check the probe factor and channel convention. A probe-factor mismatch creates a ten-to-one error.”

### Demonstrate the Known AWG Signal

“Let’s use a 1 volt peak-to-peak sine wave and set the scale to 0.2 volts per division. The expected height is:

`1.0 Vpp ÷ 0.2 V/div = 5 vertical divisions.`

“Count from the top peak to the bottom peak. Do not count only from the centre line to one peak unless you then double the result. If it is centred around zero and symmetric, `Vpeak = Vpp / 2`, so a 1 volt peak-to-peak sine wave has a 0.5 volt peak amplitude.”

“The AWG’s set value is a useful reference, but our measured value comes from the trace and scale. The result will be limited by graticule-reading uncertainty, line thickness, channel accuracy, probe factor, generator output setting, and instrument calibration. The manual quotes vertical accuracy of approximately plus or minus 3 percent under calibrated conditions. A manual graticule measurement adds reading uncertainty on top.”

### DC Offset and Ground Reference

“Peak-to-peak voltage tells us the total height of the waveform. It does not tell us where the waveform sits relative to zero volts. To measure a DC level, use DC coupling and a known ground reference. Select GND to place the channel’s zero reference line, use Y Shift to position it on a graticule line, then return to DC and measure the vertical distance from that reference to the waveform.”

“Do not use AC coupling if you need the DC offset. AC coupling removes the steady component. Y Shift moves the trace, so keep track of the zero reference you established. Do not interpret the screen position alone as an absolute voltage if you have moved the reference.”

**On-screen worked example:**

- Measured height: 5.0 divisions peak-to-peak
- CH1 scale: 0.2 V/div
- Probe factor: x1 / direct BNC
- Result: `5.0 × 0.2 × 1 = 1.0 Vpp`

## Chapter 7 - Measure Time and Frequency (38:00-44:00)

### Time per Division

**[Camera: show Time/Div setting and one full waveform period.]**

**Presenter:**

“The horizontal axis is time in normal sweep mode. Time/Div tells us how much time each large horizontal division represents. Count from one repeating point to the next, such as peak to peak, to find the period.”

“The calculation is:

`T = horizontal divisions for one cycle × time per division.`

“For example, if one full cycle spans 5 divisions at 0.2 milliseconds per division:

`T = 5 × 0.2 ms = 1.0 ms.`

“Frequency is the reciprocal of period:

`f = 1 / T = 1 / 0.001 s = 1000 Hz = 1 kHz.`”

“This matches our AWG setting. If the trace has more than one cycle on screen, measure one cycle carefully rather than estimating from the entire screen.”

### Square-Wave Duty Cycle

“For a square wave, we can also measure the high time. Duty cycle is:

`Duty cycle = high-time divisions ÷ period divisions × 100%.`

“If the high interval spans 2.5 divisions and the complete period spans 5 divisions, the duty cycle is 50 percent. If the trigger is unstable or the waveform is clipped off-screen, correct the display before counting.”

### X10 and TB Var Reminder

“Before relying on time measurements, confirm X10 is in the intended state and TB Var is at its calibrated Cal position. X10 expands the sweep, and the TB Var control can make the sweep uncalibrated if it is not in Cal. Check the LCD/manual convention and calculate from the effective time scale shown.”

## Chapter 8 - Coupling and Channel Display Modes (44:00-51:00)

### AC, GND, and DC

“Let’s compare coupling using a sine wave with a DC offset. In DC coupling, we see the offset and the waveform. In AC coupling, the average/steady offset is removed so we can inspect the ripple. In GND, the input signal is disconnected from the vertical path and the scope gives us a zero reference. Use GND to establish a reference, then return to DC or AC for the measurement.”

“If you use AC coupling at very low frequency, the coupling capacitor affects the waveform. So AC coupling is not just a prettier display; it changes what the channel passes.”

### Dual Trace, Alternate, and Chop

“With two known low-voltage signals connected to CH1 and CH2, select Dual to see both. Use the appropriate volts-per-division and Y Shift setting for each channel. State both scales on camera. Never assume that the two vertical channels have the same scale just because the traces look similar.”

“In Alt mode, the scope alternates which channel is drawn on each sweep. In Chop mode, it switches between channels rapidly within a sweep. Compare the two at a slow frequency, then at a faster frequency. The manual gives approximately 350 kilohertz for chopped switching. Select the mode that produces the clearest stable display for the signal, and confirm the LCD indication.”

### Add, Subtract, and Invert CH2

“The manual lists Add/Subtract CH1 plus or minus CH2. In Add mode with CH2 normal, the display represents the sum. Invert CH2 changes the polarity of channel 2, so the resulting combined trace can represent CH1 minus CH2. Try identical in-phase signals: adding increases the result; subtracting ideally cancels them. Real signals will not cancel perfectly because of amplitude, phase, noise, and channel mismatch.”

“This is a valuable demonstration of differential comparison, but do not confuse scope math with a differential probe. The channels still share common ground.”

### XY Mode

**[Camera: show CH1 Y and CH2 X input labels.]**

“In XY mode, the normal time sweep is replaced by one channel driving horizontal position and the other driving vertical position. On this instrument, the front-panel labels identify CH1 as Y and CH2 as X. The manual specifies a one-to-one XY input ratio and a phase shift under three degrees at 60 kilohertz.”

“Set two sine waves to the same frequency and similar amplitudes. A phase difference produces a Lissajous figure. With a quarter-cycle phase difference and matching amplitudes, we expect a circle or near-circle. If the amplitudes differ, the figure becomes elliptical. If the channels are in phase, it tends toward a diagonal line.”

“XY mode is not the mode for measuring time period from the horizontal axis, because the axis is no longer the timebase.”

## Chapter 9 - Calibrator and Probe Compensation (51:00-55:00)

**[Camera: connect the calibrator output to CH1 using the probe.]**

**Presenter:**

“The Cal Out connector provides a known square-wave reference. The supplied Scientech manual specifies approximately 1 kilohertz and 0.2 volts peak-to-peak, plus or minus 1 percent, for probe compensation. Confirm the output label on the instrument before connecting.”

“A compensated probe should show a square wave with reasonably flat tops and clean corners. Under-compensation rounds the leading edges; over-compensation creates overshoot or a peaked edge. Adjust the probe’s compensation trimmer only with the designated tool and according to its instructions. Do not adjust the oscilloscope internally.”

“This is also a good way to check that the probe attenuation, channel scale, and basic display are behaving as expected. It does not replace formal instrument calibration.”

## Chapter 10 - Viewer Challenge and Recap (55:00-60:00)

### Measurement Challenge

**[On-screen: AWG set to a square wave, 1 kHz, low amplitude, 50% duty, zero offset. Confirm load setting and safe amplitude.]**

**Presenter:**

“Here is your measurement challenge. Before I reveal the settings, pause the video and estimate three values from the display: peak-to-peak voltage, period, and duty cycle.

“Write down the CH1 volts-per-division, the time-per-division, and the probe factor. Count the vertical divisions from low to high. Count horizontal divisions from one rising edge to the next. Then count the high interval and divide by the period.”

**[Allow pause; then demonstrate.]**

“For the example settings on screen, we count [read the actual trace on the recording]. The arithmetic is: voltage divisions times volts per division times probe factor; period divisions times time per division; and high-time divisions divided by period divisions times 100 percent. Your measured answer should be close to the AWG setting, but not necessarily exactly identical. Mention the resolution of your graticule estimate and the scope’s stated accuracy.”

### Final Recap

“Let’s recap. Volts per division is vertical scale. Time per division is horizontal scale. Y Shift and X Shift move the trace but do not change scale. AC, GND, and DC coupling show different information. Trigger source, slope, mode, and level stabilise the sweep. Mono, Dual, Alt, Chop, Add/Subtract, X10, and XY change how the channels or timebase are displayed.

“The measurement rule is simple: count divisions, multiply by the calibrated scale, and apply the probe factor. Always identify ground, check input limits, and verify the mode and calibrated settings before trusting the number.

“If the trace disappears, that does not prove the circuit is safe or off. If the signal or ground reference is unknown, stop and ask for help. Thanks for watching. Next, you can practise with sine, square, and triangle waves at different amplitudes and frequencies.”

## On-Camera Control Checklist

Use this as a recording checklist; show each action close enough to read the printed label and its status indicator.

- [ ] Power button; verify normal start-up.
- [ ] Intensity, Focus, and TR trace rotation.
- [ ] CH1 and CH2 Volts/Div controls.
- [ ] Y Shift 1 and Y Shift 2.
- [ ] Invert CH2.
- [ ] CH1 and CH2 AC/GND/DC coupling selections.
- [ ] CH1(Y) and CH2(X) BNC inputs.
- [ ] CH1/2 and Trig 1/2 selection indicators.
- [ ] Mono, Dual, Alt, Chop, and Add/Subtract display modes.
- [ ] X10 magnifier and XY mode.
- [ ] Time/Div, TB Var, Cal detent, and X Shift.
- [ ] Trigger source, Alt/Ext, positive/negative slope, Auto/Level mode, and Level knob.
- [ ] External trigger BNC.
- [ ] Cal Out and probe-compensation demonstration.

## Suggested AWG Demonstration Settings

These are low-voltage teaching examples, not mandatory settings. Confirm the circuit, source, scope, probe, and lab limits before connecting. Begin at a low amplitude and adjust only after observing the result.

| Demonstration | AWG waveform | Suggested starting point | Scope setup |
|---|---|---|---|
| Basic trace | Sine | 1 kHz, 0.5-1.0 Vpp, 0 V offset | CH1 DC, 0.2 V/div or suitable scale, 0.2 ms/div |
| Amplitude counting | Sine | 1 kHz, 1.0 Vpp, 0 V offset | CH1 0.2 V/div gives about 5 divisions Vpp |
| Frequency counting | Sine | 1 kHz, 1.0 Vpp | 0.2 ms/div gives about 5 divisions per cycle |
| Duty cycle | Square | 1 kHz, low Vpp, 50% duty, 0 V offset | Trigger on rising edge; count high time and period |
| AC coupling | Sine plus safe DC offset | Low amplitude; verify source limits | Compare DC then AC coupling; explain offset removal |
| XY | Two same-frequency sines | Match amplitudes; set phase difference | CH1=Y, CH2=X; enter XY mode |
| Probe compensation | Built-in Cal Out | Approx. 1 kHz, 0.2 Vpp per manual | Use probe and suitable channel scale; adjust probe trimmer only |

**AWG load-setting reminder:** Many generators specify amplitude into 50 ohms. The scope input is approximately 1 megohm in parallel with 30 pF according to the supplied manual. Set the generator's load convention appropriately and use the observed scope measurement; do not assume the display setting equals the voltage delivered to a high-impedance input.

## Measurement Reference Card

### Peak-to-Peak Voltage

`Vpp = vertical divisions peak-to-peak × Volts/Div × probe factor`

Example: 2.4 div × 0.2 V/div × x1 = 0.48 Vpp.

### Period and Frequency

`T = horizontal divisions per cycle × Time/Div`

`f = 1/T`

Example: 5 div × 0.2 ms/div = 1.0 ms; frequency = 1 kHz.

### Duty Cycle

`Duty cycle (%) = high-time divisions / period divisions × 100`

Example: 2.5 div / 5 div × 100 = 50%.

### Measurement Caveats

- Return TB Var to Cal before calibrated time measurements.
- Confirm whether X10 is active and whether the readout already accounts for it.
- Confirm probe x1/x10 factor and the instrument channel convention.
- AC coupling hides the DC component; use DC when measuring offset.
- Y Shift changes trace position, not volts per division.
- The manual quotes approximately ±3% vertical accuracy in calibrated conditions; graticule reading, probe, signal source, and setup add uncertainty.
- A digital LCD setting display does not turn the CRT waveform into a stored digital acquisition.

## References and Supporting Files

1. Scientech. *Scientech 30MHz 2Channel Oscilloscope* ([manual supplied in this tutorial folder](Scientech%2030MHz%202Channel%20Oscilloscope.pdf)). The document identifies the related model as 801C and gives the operating modes and specifications cited in this script.
2. Electronics Lab, *CRO Analog Display Oscilloscope Safety Operating Procedure*. Available at [Lab Documentation/Electronics Lab/CRO Analog Display Oscilloscope Safety Operating Procedure.md](../../../Lab%20Documentation/Electronics%20Lab/CRO%20Analog%20Display%20Oscilloscope%20Safety%20Operating%20Procedure.md).
3. Electronics Lab, *Electronics Lab General Safety Rules*. Available at [Lab Documentation/Electronics Lab/Electronics Lab General Safety Rules.md](../../../Lab%20Documentation/Electronics%20Lab/Electronics%20Lab%20General%20Safety%20Rules.md).

**Source note:** an online copy of Scientech's 801C learning material is listed at [ManualsLib - Scientech 801C Learning Material](https://www.manualslib.com/manual/1915375/Scientech-Scientech-801c.html). Use the supplied local manual and the exact instrument's markings as the primary reference. Verify control actions on the instrument before recording, especially where labels combine channel/display and trigger functions.