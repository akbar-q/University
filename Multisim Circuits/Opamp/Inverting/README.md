# LM741 Inverting Amplifier

This folder contains the Multisim and CRUMB 3D designs and oscilloscope evidence for an LM741 inverting amplifier.

## Design

![Inverting LM741 Multisim schematic](Diagram.png)

![Inverting amplifier CRUMB 3D breadboard layout](Crumb%20Diagram.png)

The Multisim design uses `Rin = 10 kOhm`, `Rfeedback = 100 kOhm`, a `1 kOhm` load, +/-15 V supplies, and a 50 mV-peak, 1 kHz input. The non-inverting input is grounded; the input signal is applied through `Rin` to the inverting input and negative feedback is returned through `Rfeedback`.

The ideal closed-loop gain is:

```text
Av = -Rfeedback / Rin
   = -100 kOhm / 10 kOhm
   = -10 V/V
|Av| = 10 V/V = 20 dB
```

The minus sign indicates that the output is inverted. For the schematic's 50 mV-peak input, the ideal output is 500 mV peak or 1.00 V peak-to-peak.

## Multisim result

![Inverting amplifier Multisim oscilloscope cursor view](Oscilloscope.png)

At the displayed cursor position, Multisim reads 49.550 mV on Channel A and -473.605 mV on Channel B at 94.234 ms. The instantaneous ratio is approximately -9.56 V/V, close to the ideal -10 V/V. These are point readings, not peak-to-peak amplitudes. The schematic's Bode plot also shows a midband magnitude close to 20 dB, or 10 V/V.

## Hardware measurements

The channel assignment changes between capture groups. From 50 Hz through 10 kHz, CH1 (yellow, 500 mV/div) is the large output and CH2 (magenta, 50 mV/div) is the input. From 50 kHz through 10 MHz, CH1 (yellow, 5 mV/div) is the small input and CH2 (magenta, 500 mV/div, or 200 mV/div at 2 MHz) is the output. The table maps input/output accordingly for each row. Frequencies follow the filenames.

| Capture frequency | Input channel | Input (Vpp) | Output channel | Output (Vpp) | Gain magnitude (V/V) | Gain magnitude (dB) |
|---:|---:|---:|---:|---:|---:|---:|
| 50 Hz | CH2 | 0.226 | CH1 | 1.960 | 8.67 | 18.76 |
| 100 Hz | CH2 | 0.200 | CH1 | 1.900 | 9.50 | 19.55 |
| 500 Hz | CH2 | 0.194 | CH1 | 1.900 | 9.79 | 19.82 |
| 1 kHz | CH2 | 0.192 | CH1 | 1.900 | 9.90 | 19.91 |
| 2 kHz | CH2 | 0.194 | CH1 | 1.880 | 9.69 | 19.73 |
| 5 kHz | CH2 | 0.194 | CH1 | 1.920 | 9.90 | 19.91 |
| 10 kHz | CH2 | 0.198 | CH1 | 1.960 | 9.90 | 19.91 |
| 50 kHz | CH1 | 0.0212 | CH2 | 1.400 | 66.04 | 36.40 |
| 100 kHz | CH1 | 0.0210 | CH2 | 0.800 | 38.10 | 31.62 |
| 200 kHz | CH1 | 0.0210 | CH2 | 0.440 | 20.95 | 26.42 |
| 500 kHz | CH1 | 0.0210 | CH2 | 0.220 | 10.48 | 20.40 |
| 2 MHz | CH1 | 0.0206 | CH2 | 0.056 | 2.72 | 8.69 |
| 5 MHz | CH1 | 0.0200 | CH2 | 0.032 | 1.60 | 4.08 |
| 10 MHz | CH1 | 0.0208 | CH2 | 0.140 | 6.73 | 16.56 |

Gain in dB is calculated as `20 * log10(|Vout(pp) / Vin(pp)|)`; it expresses magnitude, while the inverting phase is indicated separately by the waveforms. There is no `200Hz.png` capture in the current folder. At 1 kHz, the corrected measurement is `1.900 Vpp / 0.192 Vpp = 9.90 V/V` or 19.91 dB, close to the ideal magnitude of 10 V/V (20 dB). The 50 Hz–10 kHz readings are consistently near the expected gain. Above 50 kHz, gain falls as the LM741 approaches its bandwidth limit; the non-monotonic 5 MHz and 10 MHz values are near the measurement floor and should not be used to infer a precise high-frequency response.

No `1MHz.png` capture is present in this folder.

## Hardware oscilloscope captures

The measurement overlays remain visible in each image. The table uses the displayed peak-to-peak values and identifies the input/output channel mapping for each frequency group.

| 50 Hz | 100 Hz | 500 Hz |
|---|---|---|
| <img src="Hardware%20Images/50Hz.png" alt="Inverting amplifier hardware capture at 50 Hz" width="250"> | <img src="Hardware%20Images/100Hz.png" alt="Inverting amplifier hardware capture at 100 Hz" width="250"> | <img src="Hardware%20Images/500Hz.png" alt="Inverting amplifier hardware capture at 500 Hz" width="250"> |
| 500 Hz | 1 kHz | 2 kHz |
| <img src="Hardware%20Images/500Hz.png" alt="Inverting amplifier hardware capture at 500 Hz" width="250"> | <img src="Hardware%20Images/1kHz.png" alt="Inverting amplifier hardware capture at 1 kHz" width="250"> | <img src="Hardware%20Images/2kHz.png" alt="Inverting amplifier hardware capture at 2 kHz" width="250"> |
| 5 kHz | 10 kHz | 50 kHz |
| <img src="Hardware%20Images/5kHz.png" alt="Inverting amplifier hardware capture at 5 kHz" width="250"> | <img src="Hardware%20Images/10kHz.png" alt="Inverting amplifier hardware capture at 10 kHz" width="250"> | <img src="Hardware%20Images/50kHz.png" alt="Inverting amplifier hardware capture at 50 kHz" width="250"> |
| 100 kHz | 200 kHz | 500 kHz |
| <img src="Hardware%20Images/100kHz.png" alt="Inverting amplifier hardware capture at 100 kHz" width="250"> | <img src="Hardware%20Images/200kHz.png" alt="Inverting amplifier hardware capture at 200 kHz" width="250"> | <img src="Hardware%20Images/500kHz.png" alt="Inverting amplifier hardware capture at 500 kHz" width="250"> |
| 2 MHz | 5 MHz | 10 MHz |
| <img src="Hardware%20Images/2MHz.png" alt="Inverting amplifier hardware capture at 2 MHz" width="250"> | <img src="Hardware%20Images/5MHz.png" alt="Inverting amplifier hardware capture at 5 MHz" width="250"> | <img src="Hardware%20Images/10MHz.png" alt="Inverting amplifier hardware capture at 10 MHz" width="250"> |
