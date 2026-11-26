# LM741 Op-Amp Circuits

This folder contains separate Multisim and CRUMB 3D projects for two LM741 closed-loop amplifiers. Each circuit README includes its schematic, breadboard layout, Multisim cursor screenshot, measured gain table, and frequency-by-frequency oscilloscope gallery.

- [Inverting amplifier](Inverting/README.md) - ideal gain: -10 V/V (`Rfeedback = 100 kOhm`, `Rin = 10 kOhm`).
- [Non-inverting amplifier](Non-Inverting/README.md) - ideal gain: +11 V/V (`Rfeedback = 100 kOhm`, `Rground = 10 kOhm`).

The ideal gains come from the resistor ratios. The hardware oscilloscope captures show different gain ratios, so the detailed READMEs preserve those readings as observations and distinguish them from the expected design gains. Check resistor values, wiring, and scope setup before treating the hardware captures as validation of the designs.

The top-level `Inverting Opamp.ms14` and `Non-Inverting Opamp.ms14` files are Multisim copies; detailed circuit files and evidence are in the respective subfolders.
