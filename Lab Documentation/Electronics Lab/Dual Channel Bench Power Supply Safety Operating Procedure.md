# Dual Channel Bench Power Supply Safety Operating Procedure

**Mandatory requirement.** This document applies to the dual-channel bench power supplies used in the Electronics Lab, especially units rated around **30 V, 2 A per channel**. These supplies use largely analog internal regulation architecture even if the front panel includes digital displays or indicators. They must be treated as live adjustable power sources whose voltage and current settings can directly determine whether a circuit operates safely or fails violently. No person shall use these power supplies unless they understand voltage setting, current limiting, polarity, output connection, and the consequences of adjusting settings on a live circuit.

## Core Safety Requirements

**Instrument type and limitation.** These power supplies may provide a **constant-voltage / constant-current** operating mode and may have a **CC indicator**, but they do not protect the user from incorrect setup by themselves. The presence of a CC indicator does not mean the current is automatically safe for every circuit. The user shall understand that if the current limit is set too high, a short circuit or component failure can still release enough energy to destroy components, rupture capacitors, overheat conductors, or cause resistors to smoke.

**Main hazard: live current adjustment.** The principal safety concern with these supplies is the current setting. Because the current limit often has to be set while the supply is live and because there is no separate load enable switch, it is possible to leave the current limit set much higher than intended for the circuit under test. This can turn a simple wiring mistake or component failure into a more violent event. For that reason, the current limit shall be treated as a critical safety control and not as a secondary convenience setting.

**Competence before use.** Before powering any circuit, the user shall confirm the required voltage, the maximum safe current for the circuit, the polarity of the connections, the expected behaviour of the load, and whether one or both channels are being used. The supply shall never be connected to a circuit by guesswork. If the user does not know what current the circuit can safely tolerate, the power shall not be applied until that limit has been established.

## Electrical Hazards

**Live voltage adjustment.** Because there is no dedicated load switch on these supplies, the voltage often has to be adjusted with the output effectively connected live to the circuit. This means a careless movement of the voltage control can apply too much voltage before the user reacts. The user shall therefore begin from the lowest practical voltage setting, verify the intended value before connection where possible, and increase voltage slowly while observing the circuit behaviour.

**Live current-limit adjustment.** Current limiting on these supplies may also need to be set under live conditions. This makes it possible to overshoot the intended limit or leave the current limit at a previously used high setting. A supply shall never be assumed safe merely because the voltage is correct. Before connecting a new circuit, the current control shall be deliberately returned to a low starting point and then adjusted upward only as needed for the specific circuit.

**Short-circuit and component-failure risk.** If the current limit is left too high, a short circuit or fault in the connected electronics can deliver enough energy to damage tracks, overheat wires, rupture electrolytic capacitors, destroy semiconductor devices, or cause resistors to emit smoke. The supply must therefore be regarded as a source capable of driving destructive fault current even at relatively low voltage. Protection comes primarily from correct setup and careful supervision, not from assuming the supply will always limit safely enough by itself.

**Polarity errors.** Reverse polarity can damage circuits immediately, particularly where electrolytic capacitors, integrated circuits, or semiconductors are present. Before energisation, the polarity of both the supply terminals and the circuit input shall be checked carefully. If the supply has red and black terminals, the user shall still verify the actual connection rather than relying on wire colour alone.

## Safe Operating Method

**Pre-connection setup.** Before connecting the circuit, the operator shall set the output voltage to the lowest practical starting point, return the current limit to a conservative low value, confirm channel selection, and verify the polarity of the output leads. If the supply supports independent, series, or parallel channel operation, the mode shall be checked before connection. The circuit shall only be connected once the user is satisfied that both voltage and current settings are safe for the intended load.

**Bringing the circuit up safely.** The preferred method is to start with a low current limit and low voltage, connect the circuit carefully, and then increase the output gradually while watching for abnormal signs such as unexpected current rise, heating, smell, noise, smoke, or visible distress in components. If the supply enters current limit immediately, the operator shall not simply increase the current control without first deciding whether this behaviour is expected. A circuit drawing more current than expected shall be treated as a possible fault until proven otherwise.

**Working with sensitive circuits.** Small electronic circuits, prototype boards, and student-built assemblies can fail at much lower currents than the full output capability of the supply. A current setting that is acceptable for one experiment may be excessive for another. The user shall therefore recheck the current limit for every new circuit rather than assuming the previous setting remains appropriate.

**Using both channels.** Where two channels are available, the user shall confirm whether the channels are being used independently or in a linked arrangement. The outputs, common references, and intended wiring shall be checked before power is applied. Incorrect linking or confusion between channels can expose a circuit to the wrong voltage or create unintended current paths.

## Equipment Condition and Handling

**Inspection before use.** The power supply, mains cable, output terminals, display, knobs, indicator lamps, and output leads shall be checked before use. The supply shall not be used if the casing is damaged, the terminals are loose, the controls are erratic, the display is unreadable, the leads are frayed, or the unit shows signs of overheating, burning smell, or previous internal failure. Faulty supplies shall be removed from service immediately.

**Lead management.** Output leads shall be routed neatly and kept away from soldering irons, rotating fans, sharp edges, and adjacent live terminals. Loose leads shall not be allowed to touch each other or rest across conductive bench surfaces. The circuit under test shall be arranged so that accidental tugging of the leads does not pull the board, short the terminals, or upset probe connections.

## Fault Response

**Abnormal circuit behaviour.** If a capacitor swells, vents, or explodes, if a resistor smokes, if wiring overheats, if semiconductors crack, or if any component shows unexpected distress, the supply output shall be reduced or disconnected immediately and the cause investigated. Power shall not be reapplied until the fault has been identified and corrected. Replacing a visibly failed component without checking the current setting and supply setup is unsafe.

**Unexpected current-limit behaviour.** If the supply enters constant-current mode unexpectedly, or if the current rises rapidly beyond what the circuit should draw, this shall be treated as a warning sign. The correct response is to reduce or remove power and inspect the circuit, not to increase the current limit to force the circuit to operate.

**Abnormal power supply behaviour.** If the supply itself produces smoke, burning smell, severe display flicker, unstable regulation, unexpected noise, intermittent output, or hot terminals, it shall be switched off and removed from service. It shall not be reused until inspected and confirmed safe.

## Operating Controls

**Pre-power check.** Before every use, the operator shall confirm: the required voltage, the maximum safe current, the correct output polarity, the correct channel, the present voltage setting, the present current setting, and the expected current draw of the circuit. If any of these items are unclear, the circuit shall not be energised.

**Safe adjustment sequence.** The safest general approach is to connect the circuit with the supply set conservatively, energise carefully, increase voltage in small steps, and increase current limit only if necessary and only after deciding that the circuit behaviour is normal. Large rapid adjustments of voltage or current shall be avoided. Where the supply offers only live adjustment, the user shall work slowly and deliberately so that a control movement does not become an unintended fault event.

**After use.** When the experiment is complete, the output shall be returned to a low safe setting before disconnecting the circuit where practical. The user shall leave the current control in a conservative position for the next operator rather than leaving it at a high setting from a previous experiment. Any suspected misuse, overcurrent incident, smoking component, or unexpected power supply behaviour shall be reported.

## Common Mistakes to Avoid

**Leaving the current limit too high.** This is the most important common mistake with these supplies. A current limit suitable for one experiment may be destructive for the next. The current control shall always be reset and checked before connecting a new circuit.

**Treating the CC indicator as full protection.** The CC indicator only shows that the supply is operating in current limit. It does not mean the current is automatically safe for the connected electronics. If the set limit is too high, components may still fail violently even while the supply is technically behaving as designed.

**Raising the current limit to overcome a fault.** When a circuit does not start or the supply goes into current limit, users may be tempted to turn the current up until something happens. This is unsafe. Unexpected current limiting shall be treated as a sign to stop and inspect the circuit.

**Adjusting voltage too quickly on a live circuit.** Because there is no separate load switch, the circuit experiences changes as soon as the control is moved. Rapid adjustment can overvoltage a circuit before the user notices. Voltage shall be increased slowly and deliberately.

**Forgetting the previous user's settings.** Bench supplies are often shared. A user may assume the controls are near zero when in fact the previous operator left a high voltage or high current limit selected. Every setup shall begin with a deliberate check and reset of both controls.

**Ignoring signs of component distress.** Smoking resistors, warming wires, hot semiconductors, or swelling capacitors are not minor inconveniences. They are warning signs that the supply or circuit conditions are unsafe. Power shall be removed immediately and the cause investigated.

## Final Requirement

**Minimum standard.** This operating procedure sets the minimum safety standard for the use of dual-channel bench power supplies in the Electronics Lab. Where the work is carried out in the United Arab Emirates, this procedure should be read alongside the workspace note [UAE Safety Standards and Regulatory References](../UAE%20Safety%20Standards%20and%20Regulatory%20References.md). If local university rules, laboratory signage, supervisor instructions, the manufacturer's instructions, or applicable UAE and local authority requirements impose stricter controls than those written here, the stricter control shall apply. If the safe current limit is unknown, the polarity is unclear, the circuit tolerance is not understood, or the supply condition is questionable, the circuit shall not be energised.