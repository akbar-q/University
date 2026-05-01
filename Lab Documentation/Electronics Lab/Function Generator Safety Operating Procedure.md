# Function Generator Safety Operating Procedure

**Mandatory requirement.** This document applies to the function generators used in the Electronics Lab that have a **digital user interface** but are based on largely **analog internal architecture**. These instruments use switchable frequency ranges, selectable waveform shapes, a live frequency counter display, and manual potentiometer-style controls for frequency and amplitude. They do not provide a separate load enable switch, and they may produce a distorted waveform during startup or during unstable control transitions. No person shall use these function generators unless they understand the output terminals, amplitude setting, frequency range selection, waveform selection, output impedance, and the risks created by changing settings on a live connected circuit.

## Core Safety Requirements

**Instrument type and limitations.** Although the front panel may look digital, these function generators are not fully protected smart sources. The displayed frequency does not guarantee that the output waveform is clean, stable, or suitable for the connected circuit. At startup, the instrument may briefly produce a distorted waveform, and because the button switching is not always cleanly debounced, some controls may skip or change more than intended. The operator shall therefore treat the instrument as a manually supervised analog signal source and not assume that the displayed settings always represent a safe or stable output condition.

**Main hazards.** The main safety concerns with these generators are live output changes, accidental over-amplitude, wrong frequency range selection, wrong waveform selection, and the tendency to assume that the output is harmless because it is a signal source rather than a power supply. These assumptions are unsafe. A wrongly set function generator can overdrive a circuit input, stress components, inject the wrong waveform into a control stage, or create misleading test results that cause further unsafe adjustment elsewhere in the experiment.

**Competence before use.** Before connection, the user shall confirm the expected waveform shape, expected frequency range, maximum safe input amplitude of the circuit under test, whether DC offset is present if applicable, and whether the receiving instrument or circuit expects a 50 ohm source. The generator shall never be connected by guesswork. If the safe input level of the circuit is unknown, the signal shall not be applied until that limit has been established.

## Electrical Hazards

**50 ohm output behaviour.** The output impedance of the function generator is approximately **50 ohms**, and the user shall understand what that means before applying a signal. The amplitude seen by the load depends on the termination and connected circuit conditions. A circuit that is not expecting a low-impedance driven source may be stressed or misread if the user assumes the displayed amplitude is universally valid under all loading conditions. The output shall not be treated as an ideal harmless signal source.

**Maximum output amplitude.** The generator can produce outputs up to approximately **20 Vp**, which is large enough to damage many low-voltage electronic inputs, sensitive analogue stages, logic circuits, op-amp inputs, transistors, and measurement equipment if used carelessly. Before connection, the operator shall confirm that the intended amplitude is within the safe limit of the circuit and begin from the lowest practical setting. The amplitude shall then be increased slowly only as required.

**No load switch and live output changes.** Because there is no separate load switch, the connected circuit experiences the generator output as soon as the output is connected and the controls are active. This means that changing amplitude, changing frequency range, or changing waveform shape can affect the live circuit immediately. The operator shall therefore make adjustments deliberately and in small steps, and shall not assume there is a safe disconnected state while the leads remain attached.

**Ground reference.** Where the function generator output uses a BNC-style connector, the outer connection may be tied to chassis or earth reference depending on the instrument design. The user shall therefore understand the grounding arrangement of both the generator and the circuit under test before making the connection. The output return shall not be clipped or adapted casually onto a point that could create an unintended short or incorrect reference path.

## Output Quality and Interpretation Hazards

**Startup distortion.** These instruments may produce a distorted waveform at startup or while the controls stabilise. The circuit under test shall not be connected to a newly powered generator at full intended amplitude until the output has been verified as stable. Where the experiment is sensitive to waveform quality, the output shall first be checked on the oscilloscope before being trusted.

**Range-switch errors.** Because frequency is selected using switchable ranges as well as a manual control, it is easy to remain in the wrong decade or move to an unintended band. A user may believe the signal is in hertz when it is actually in kilohertz, or vice versa. This can overstress actuators, saturate amplifiers, confuse filters, or give misleading results. The selected range shall always be checked together with the live frequency display before the signal is applied to the circuit.

**Button skipping and overshoot.** Because the push-button switching does not always debounce cleanly, the instrument may skip over a setting or change mode more than once from a single press. Users shall not rely on a quick button press without checking the actual instrument state afterward. Every change of waveform, range, or mode shall be confirmed on the panel before continuing.

**Displayed frequency is not a full safety check.** The live frequency counter only confirms the frequency indication and does not guarantee the waveform shape, distortion level, peak amplitude, DC offset, or suitability for the circuit. The user shall not treat the frequency counter as proof that the output is safe. Where accuracy matters, the actual waveform shall be verified with appropriate measurement equipment.

## Safe Operating Method

**Pre-connection setup.** Before connecting the output to a circuit, the operator shall set the amplitude to the lowest practical value, confirm the selected waveform, confirm the correct frequency range, confirm the approximate displayed frequency, and verify the output connection and reference. If the circuit is sensitive or unknown, the output shall be checked on an oscilloscope first.

**Applying the signal safely.** The preferred method is to begin with a low amplitude and a known safe frequency, connect the output carefully, and then increase amplitude or adjust frequency gradually while observing the circuit behaviour. If the circuit responds abnormally, draws unexpected current, overheats, oscillates, clips, or behaves in a way that was not intended, the signal shall be reduced or removed and the cause investigated before continuing.

**Waveform changes on a live circuit.** The user shall avoid changing directly between waveform types on a sensitive live circuit unless the effect of that change is understood and acceptable. Moving from sine to square or pulse output can introduce sharper edges, higher harmonic content, and different peak behaviour that may stress the circuit under test. If waveform type is safety-critical, the circuit shall be made safe before the change is applied.

**Interaction with other bench instruments.** Particular care is required when the function generator is connected at the same time as an oscilloscope, power supply, or grounded measurement system. The reference and return paths of all connected instruments shall be understood before energisation. A function generator output shall not be connected in a way that creates an unintended short through another grounded instrument.

## Equipment Condition and Handling

**Inspection before use.** The function generator, mains lead, output connector, display, buttons, knobs, and output leads shall be checked before use. The instrument shall not be used if the controls are erratic, the output connector is loose, the display is unreadable, the output appears unstable, the leads are damaged, or the instrument shows signs of overheating, burning smell, or previous internal failure. Faulty equipment shall be removed from service immediately.

**Lead management.** Output leads shall be routed neatly and kept away from soldering irons, rotating fans, hot components, sharp edges, and adjacent live terminals. Loose leads or adapters shall not be allowed to rest across conductive surfaces or drift into neighbouring circuits. The bench shall remain tidy enough that the operator can adjust the generator without pulling on connected test leads.

## Fault Response

**Abnormal output behaviour.** If the output waveform becomes severely distorted, unstable, intermittent, noisy, or clearly inconsistent with the selected settings, the signal shall be removed and the instrument checked before reuse. The user shall not continue applying a questionable signal to the circuit merely because the frequency display still appears plausible.

**Abnormal circuit response.** If the circuit under test overheats, clips excessively, behaves erratically, produces smoke, emits smell, or fails when the generator is connected, the output amplitude shall be reduced or removed immediately and the setup reviewed. The cause may be too much amplitude, wrong frequency range, wrong waveform, wrong reference connection, or an existing circuit fault.

**Abnormal instrument behaviour.** If the generator itself produces smoke, burning smell, severe display malfunction, uncommanded switching, unstable output, or hot connectors, it shall be switched off and removed from service. It shall not be reused until inspected and confirmed safe.

## Operating Controls

**Pre-signal check.** Before every use, the operator shall confirm: the intended waveform, the selected frequency range, the displayed frequency, the amplitude setting, the safe input limit of the circuit, the output reference connection, and whether other bench instruments are sharing that circuit. If any of these items are unclear, the signal shall not be applied.

**Safe adjustment sequence.** The safest general approach is to start with minimum amplitude, select a conservative frequency range, verify the output state, connect carefully, and then change one variable at a time while observing both the circuit and the measuring instruments. Rapid large adjustments of the amplitude knob or repeated button presses without checking the resulting state shall be avoided.

**After use.** When the experiment is complete, the amplitude shall be returned to a low safe setting before disconnecting the circuit where practical. The selected range and waveform shall not be left in a misleading or extreme state for the next user. Any suspected misuse, skipped control input, distorted startup behaviour, or abnormal output event shall be reported.

## Common Mistakes to Avoid

**Starting with too much amplitude.** This is one of the most common function-generator errors. A signal source can still damage a circuit if the amplitude is high enough. The output shall always be started low and increased gradually.

**Trusting the displayed frequency without checking the range.** A correct-looking number is unsafe if the wrong decade range is selected. The displayed value and the selected range shall always be checked together.

**Applying the signal immediately after startup.** Because the generator may produce a distorted waveform during startup, a sensitive circuit shall not be exposed to the output before the signal has stabilised and, where necessary, been checked on the oscilloscope.

**Assuming one button press equals one setting change.** Poor debouncing can cause the instrument to skip settings. Every button-driven change shall be confirmed on the panel rather than assumed.

**Changing waveform type casually on a live circuit.** A square wave or pulse output can stress a circuit very differently from a sine wave. Waveform changes shall be treated as potentially significant live changes, not as harmless cosmetic adjustments.

**Ignoring grounding and return paths.** The output return connection matters. Incorrect grounding can create misleading measurements or unintended current paths through other equipment. The reference arrangement shall always be understood before connection.

## Final Requirement

**Minimum standard.** This operating procedure sets the minimum safety standard for the use of function generators in the Electronics Lab. Where the work is carried out in the United Arab Emirates, this procedure should be read alongside the workspace note [UAE Safety Standards and Regulatory References](../UAE%20Safety%20Standards%20and%20Regulatory%20References.md). If local university rules, laboratory signage, supervisor instructions, the manufacturer's instructions, or applicable UAE and local authority requirements impose stricter controls than those written here, the stricter control shall apply. If the safe input level of the circuit is unknown, the grounding arrangement is unclear, the instrument state is uncertain, or the output behaviour appears abnormal, the signal shall not be applied.