# LM741 Non-Inverting Amplifier

This folder contains the Multisim and CRUMB 3D designs and oscilloscope evidence for an LM741 non-inverting amplifier.

## Design

![Non-inverting LM741 Multisim schematic](Diagram.png)

![Non-inverting amplifier CRUMB 3D breadboard layout](Crumb%20Diagram.png)

The Multisim design uses `Rfeedback = 100 kOhm`, a `10 kOhm` resistor from the inverting input to ground, a `1 kOhm` load, +/-15 V supplies, and a 50 mV-peak, 1 kHz input. The signal is applied to the non-inverting input; the resistor divider feeds a fraction of the output back to the inverting input.

The ideal closed-loop gain is:

```text
Av = 1 + Rfeedback / Rground
   = 1 + 100 kOhm / 10 kOhm
   = +11 V/V
Av(dB) = 20 * log10(11) = 20.83 dB
```

The output is in phase with the input in the ideal midband model. For the schematic's 50 mV-peak input, the ideal output is 550 mV peak or 1.10 V peak-to-peak.

## Multisim result

![Non-inverting amplifier Multisim oscilloscope cursor view](Oscilloscope.png)

At the displayed cursor position, Multisim reads 16.634 mV on Channel A and 210.682 mV on Channel B at 1.410 s. Their instantaneous ratio is approximately +12.66 V/V, in the vicinity of the ideal +11 V/V. These are point readings, not peak-to-peak amplitudes; use the theoretical resistor-ratio result as the design target.

## Hardware measurements

The replacement hardware images show the Siglent measurement bar. Channel 1 is the yellow input and Channel 2 is the magenta output. The Vpp readings below are transcribed from the screen, and gain is recalculated as `Vout(pp) / Vin(pp)`. Frequencies follow the capture filenames; the scope's frequency-counter readout is noisy and unreliable at high frequencies.

| Capture frequency (filename) | Input (Vpp) | Output (Vpp) | Observed gain magnitude (V/V) |
|---:|---:|---:|---:|
| 100 Hz | 0.224 | 2.260 | 10.09 |
| 200 Hz | 0.220 | 2.260 | 10.27 |
| 500 Hz | 0.220 | 2.260 | 10.27 |
| 1 kHz | 0.220 | 2.260 | 10.27 |
| 2 kHz | 0.216 | 2.240 | 10.37 |
| 5 kHz | 0.216 | 2.240 | 10.37 |
| 10 kHz | 0.220 | 2.260 | 10.27 |
| 50 kHz | 0.212 | 1.800 | 8.49 |
| 100 kHz | 0.212 | 1.180 | 5.57 |
| 200 kHz | 0.216 | 0.660 | 3.06 |
| 500 kHz | 0.204 | 0.272 | 1.33 |
| 1 MHz | 0.208 | 0.136 | 0.65 |
| 2 MHz | 0.204 | 0.072 | 0.35 |
| 5 MHz | 0.188 | 0.036 | 0.19 |
| 10 MHz | 0.152 | 0.0096 | 0.063 |

There is no 50 Hz image in the replacement capture set. From 100 Hz through 10 kHz, the measured gain is 10.09–10.37 V/V, about 6–8% below the ideal +11 V/V. At 1 kHz, `2.260 Vpp / 0.220 Vpp = 10.27 V/V`, confirming the expected non-inverting gain closely. The measured input is about 0.22 Vpp, higher than the schematic's nominal 0.10 Vpp source setting; use the measured Channel 1 value for gain. Gain falls from about 8.49 V/V at 50 kHz as the LM741 approaches its bandwidth limit. For frequency-response interpretation, use the frequencies in the capture filenames; do not use the high-frequency scope-counter readouts, which are unreliable because of noise.

## Hardware oscilloscope captures

The replacement gallery contains 15 captures, from 100 Hz to 10 MHz. No 50 Hz capture is present.

| 100 Hz | 200 Hz | 500 Hz |
|---|---|---|
| <img src="Hardware%20Images/100Hz.png" alt="Non-inverting amplifier hardware capture at 100 Hz" width="250"> | <img src="Hardware%20Images/200Hz.png" alt="Non-inverting amplifier hardware capture at 200 Hz" width="250"> | <img src="Hardware%20Images/500Hz.png" alt="Non-inverting amplifier hardware capture at 500 Hz" width="250"> |
| 1 kHz | 2 kHz | 5 kHz |
| <img src="Hardware%20Images/1kHz.png" alt="Non-inverting amplifier hardware capture at 1 kHz" width="250"> | <img src="Hardware%20Images/2kHz.png" alt="Non-inverting amplifier hardware capture at 2 kHz" width="250"> | <img src="Hardware%20Images/5kHz.png" alt="Non-inverting amplifier hardware capture at 5 kHz" width="250"> |
| 10 kHz | 50 kHz | 100 kHz |
| <img src="Hardware%20Images/10kHz.png" alt="Non-inverting amplifier hardware capture at 10 kHz" width="250"> | <img src="Hardware%20Images/50kHz.png" alt="Non-inverting amplifier hardware capture at 50 kHz" width="250"> | <img src="Hardware%20Images/100kHz.png" alt="Non-inverting amplifier hardware capture at 100 kHz" width="250"> |
| 200 kHz | 500 kHz | 1 MHz |
| <img src="Hardware%20Images/200kHz.png" alt="Non-inverting amplifier hardware capture at 200 kHz" width="250"> | <img src="Hardware%20Images/500kHz.png" alt="Non-inverting amplifier hardware capture at 500 kHz" width="250"> | <img src="Hardware%20Images/1MHz.png" alt="Non-inverting amplifier hardware capture at 1 MHz" width="250"> |
| 2 MHz | 5 MHz | 10 MHz |
| <img src="Hardware%20Images/2MHz.png" alt="Non-inverting amplifier hardware capture at 2 MHz" width="250"> | <img src="Hardware%20Images/5MHz.png" alt="Non-inverting amplifier hardware capture at 5 MHz" width="250"> | <img src="Hardware%20Images/10MHz.png" alt="Non-inverting amplifier hardware capture at 10 MHz" width="250"> |

## Calculation and measurement notes

```text
Av = Vout(pp) / Vin(pp)
Av(dB) = 20 * log10(|Av|)
```

These gain ratios are recalculated from the values printed by the scope; they are not inferred from waveform height. The Multisim cursor readings are instantaneous samples and must not be compared directly with Vpp. For a useful hardware validation, confirm the resistor values and wiring, set a known input, measure both channels with the same probe attenuation convention, and compare the resulting gain with +11 V/V at a frequency well within the LM741's bandwidth.
