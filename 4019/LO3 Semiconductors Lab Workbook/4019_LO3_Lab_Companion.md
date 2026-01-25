# Practical Lab Companion — Semiconductor & Device Measurements (LO3 lab workbook)

Last updated: 15 January 2026  
Assessor: Akbar Qamar  
Submission: Moodle — see assignment brief for naming and packaging rules

## Important first notes (read this first)

**Academic integrity warning (repeat):** This companion is a learning aid. **Do not copy any sentences, paragraphs, tables, or “example data” directly into your submission.** You must write in your own words and present your own measurements. If you use any external sources (datasheets, websites, textbooks), **cite them in Harvard style**.

- **Safety:** Use low bench voltages (≤ 30 V unless supervised), set PSU current limits, connect oscilloscope earth properly, and follow supervisor instructions. If unsure, stop and ask.
- **Evidence formats (typical):** workbook PDF (scanned handwritten or digitally handwritten), Multisim project files, screenshots/photos/videos, raw CSV data.

## How to use this companion (training wheels)

**Academic integrity warning (repeat):** Use this document to learn *what* to do and *what to write about*. **Do not paste it into your report.** Re-phrase everything in your own style.

- Read the **Objective** and **Deliverables** for each device before you start.
- Capture raw data digitally where possible (Multisim CSV export, CRO screenshots). This speeds your write-up.
- Use the suggested **search keywords** to find *your own* explanations and diagrams; cite properly.

## Quick productivity tips (document work + faster workflow)

**Academic integrity warning (repeat):** Shortcuts help you work faster, but they do not replace understanding. Your submission must contain **original writing** and **your own results**.

### Keyboard shortcuts (Windows)
- Copy/Paste: `Ctrl+C`, `Ctrl+V`
- Paste without formatting (many apps): `Ctrl+Shift+V`
- Save: `Ctrl+S`
- Undo/Redo: `Ctrl+Z` / `Ctrl+Y`
- Find: `Ctrl+F` (search this guide quickly)
- Screenshot snip: `Win+Shift+S` (fastest way to capture CRO screens)
- Switch windows: `Alt+Tab`

### Practical time-savers (recommended)
- Make a **template** for each device section (Objective → Method → Results → Analysis → Conclusion). Duplicate it for each component.
- Save evidence immediately into a folder structure: `Photos/`, `CRO_Screenshots/`, `Multisim/`, `RawData/`.
- Name images as you capture them, e.g. `SiDiode_Forward_IV_10mA.png`.
- Export CSV from Multisim whenever possible.

## Common report structure (use for every device)

**Academic integrity warning (repeat):** This is a structure suggestion. Write the content in your own words.

1. Title block: student name, date, device, part number
2. Objective (1–2 sentences)
3. Equipment and settings (supply limits, resistor values, CRO settings)
4. Circuit diagram (hand-drawn + Multisim screenshot)
5. Measurement table(s) and raw CSV
6. Plots: I–V (label axes + units), semi-log if helpful
7. Analysis: calculations + comparison to datasheet/theory
8. Uncertainty & error sources
9. Practical implications (maintenance/troubleshooting link)
10. Conclusion: answer the lab prompts
11. Appendix: raw files list

---

# Device-by-device companion (Questions 2–7)

---

## 2) Silicon (Si) diode (e.g., 1N4148 / 1N4001)

**Academic integrity warning (repeat):** Do not copy/paste this section. Re-phrase and use your own measurements. Cite the diode datasheet.

### Objective
- Measure forward and reverse I–V curves.
- Estimate the forward “knee” voltage.
- Measure reverse leakage current.
- Compare your curve shape to theory.

### Equipment (typical)
- Silicon diode (record part number)
- Bench PSU (current limit feature)
- Multimeter
- CRO / oscilloscope with IV-plotter or X–Y mode
- Breadboard + wires
- Resistors: 100 Ω, 1 kΩ, 10 kΩ
- NI Multisim

### Multisim method (step-by-step)
1. Place DC voltage source and a **series resistor** (start 1 kΩ).
2. Place a diode model matching your part if possible.
3. Run **DC Sweep**:
   - Forward sweep: 0 → 1.2 V (small step near 0.5–0.8 V)
   - Reverse sweep: 0 → −20 V (use large resistor to limit current)
4. Measure diode voltage `Vd` and current `Id` (via current probe or by measuring voltage across series resistor).
5. Plot `Id` vs `Vd`, save screenshots and **export CSV**.

### Hardware method (recommended approach)
**Idea:** Use a resistor as a current-sense shunt.
- Current is computed as $I = V_{shunt}/R_{shunt}$.

#### Step-by-step
1. Build the forward-bias circuit with a series resistor.
2. Set PSU to 0 V and set current limit low (e.g., 10 mA).
3. Increase supply slowly. Record multiple points (especially near the knee).
4. Save CRO screenshots of the I–V curve.
5. Let the diode cool, then repeat if needed.
6. Reverse bias the diode. Use a larger series resistor (e.g., 10 kΩ) and sweep reverse voltage carefully.
7. Record leakage current and note whether it stays very small.

### What to write for the lab questions (prompts)

#### Knee voltage (forward bias)
- Define what you mean by “knee” (example approach: voltage at 1 mA or 10 mA).
- Report your measured knee voltage and compare with datasheet forward voltage at the **same current**.

#### Reverse leakage
- State your reverse test voltage and the measured leakage current.
- Comment if leakage is “negligible” compared with forward current.

#### Sudden jumps
- If you see current jumps, consider:
  - instrument autoranging
  - PSU current limiting
  - thermal heating
  - poor contacts

#### Overall shape
- Describe the shape: forward exponential rise, reverse near-zero current until breakdown (for a normal diode, breakdown is usually at much higher voltages than you test).

### Analysis hints (conceptual)
- Connect the curve to the diode equation: $I = I_S\,(e^{qV/kT}-1)$.
- Mention real-world deviations:
  - internal/series resistance
  - temperature rise
  - measurement resolution

### Example “expected values” (illustration only — do not copy)
- Many Si diodes show ~0.6–0.7 V forward drop around a few mA.
- Reverse leakage can be µA-level depending on diode and temperature.

### Search keywords
- `1N4148 datasheet forward voltage`
- `diode IV curve diode equation`
- `oscilloscope XY mode IV curve`

### Deliverables checklist
- Circuit diagram, I–V plot screenshots, raw data table/CSV, comparison with datasheet, clear answers to prompts.

---

## 3) LED

**Academic integrity warning (repeat):** Do not copy/paste. Use your own LED colour, your own photos, your own measurements, and cite the datasheet if you use datasheet values.

### Objective
- Measure LED threshold (turn-on) voltage.
- Confirm the I–V curve is nonlinear.
- Identify an approximate current where brightness becomes “typical” (qualitative unless you have a lux meter).

### Equipment
- LED (record colour and any markings)
- Series resistors (e.g., 220 Ω and 1 kΩ)
- PSU + multimeter
- CRO (optional) + Multisim

### Hardware method (safe step-by-step)
1. Use a series resistor. Start large (1 kΩ) to protect the LED.
2. Start with PSU at 0 V. Set current limit (e.g., 10 mA).
3. Increase voltage slowly and record current and LED voltage.
4. Swap to smaller series resistor (e.g., 220 Ω) if you need higher currents, but stay within safe current.
5. Take labelled photos at a few currents (e.g., 2 mA, 10 mA, 20 mA).

### What to write for the lab questions
- Threshold voltage: define your method (e.g., voltage at 1 mA, or first visible light).
- Compare to datasheet Vf for that LED type (or typical values for that colour if part number unknown — cite source).
- Note any heating or damage signs.
- Explain deviations: resistor tolerance, supply limits, temperature.

### Analysis hints
- LED Vf depends on colour/material (bandgap). Mention this.
- Explain why current limiting is essential.

### Search keywords
- `LED forward voltage vs colour`
- `why LED needs current limiting resistor`

### Deliverables checklist
- I–V plot or table, photos at labelled currents, comparison to datasheet/typical values (cited), answers to prompts.

---

## 4) Zener diode

**Academic integrity warning (repeat):** Do not copy/paste. Use your own measured Vz values and cite your Zener datasheet.

### Objective
- Measure forward behaviour (like a normal diode) and reverse breakdown behaviour.
- Measure Zener voltage $V_Z$ and discuss regulation behaviour.

### Safety note (important)
- Zeners can overheat in breakdown if current is too high.
- Control current using a series resistor and PSU current limit.

### Hardware method (step-by-step)
1. Forward bias test (quick): record knee voltage.
2. Reverse test:
   - Choose a safe test current (e.g., 1–5 mA to start).
   - Pick series resistor: $R = (V_{supply} - V_Z)/I_Z$.
3. Sweep reverse voltage and record V and I around the breakdown knee.
4. Record $V_Z$ at multiple currents (e.g., 1 mA, 5 mA, 10 mA) if safe.

### What to write for the lab questions
- Forward knee: is it similar to a standard diode?
- Reverse leakage: before breakdown, is current small?
- Zener voltage: what is $V_Z$ at a stated current?
- Compare measured $V_Z$ with datasheet tolerance.
- Comment on whether current increases sharply around $V_Z$.

### Analysis hints
- Discuss dynamic resistance in breakdown: $r_z \approx \Delta V/\Delta I$.
- Discuss power: $P = V_Z I_Z$.

### Search keywords
- `Zener diode datasheet Vz tolerance dynamic resistance`
- `Zener IV curve breakdown knee`

### Deliverables checklist
- Reverse I–V plot, Vz measurement and comparison with datasheet, safety/power comment.

---

## 5) 100 Ω resistor

**Academic integrity warning (repeat):** Do not copy/paste. Use your own resistor and compute your own slope.

### Objective
- Confirm linear I–V behaviour.
- Check measured resistance from slope.
- Note any heating effects.

### Hardware method
1. Keep power safe: start with small voltage (0–5 V).
2. Record (V, I) points; plot I vs V.
3. Compute resistance from slope: $R = \Delta V/\Delta I$.
4. If you go to higher currents, check if it warms (and mention resistor power rating).

### What to write
- Is the curve linear? If not, why?
- Does the slope correspond to 100 Ω?
- Any deviations due to heating or measurement error?

### Search keywords
- `Ohm's law linear IV curve`
- `resistor power rating heating effect resistance change`

### Deliverables checklist
- Plot + slope calculation + % error.

---

## 6) LDR

**Academic integrity warning (repeat):** Do not copy/paste. Use your own lighting conditions and describe your own observations.

### Objective
- Compare I–V or resistance behaviour under light vs shade.
- Show that resistance decreases when light increases.

### Hardware method (simple and reliable)
1. Measure resistance in bright light and in shade using a multimeter.
2. For I–V, put LDR in series with a known resistor and sweep a small voltage.
3. Repeat for two conditions: illuminated and shaded.
4. Note if readings fluctuate due to ambient light changes.

### What to write
- How does the curve change in light vs dark?
- Is behaviour nonlinear?
- Any noise/jumps due to ambient changes?

### Search keywords
- `LDR resistance vs lux`
- `LDR physics photoconductivity`

### Deliverables checklist
- Two sets of results (light/dark) and explanation.

---

## 7) Potentiometer

**Academic integrity warning (repeat):** Do not copy/paste. Use your own potentiometer values and your own plots.

### Objective
- Show how knob position changes resistance (slope of I–V).
- Check linearity at each setting.
- Identify discontinuities/erratic readings.

### Hardware method
1. Measure total resistance across the end terminals.
2. Set the knob to several positions (e.g., 0%, 25%, 50%, 75%, 100%).
3. At each position, record I–V points (small voltage sweep).
4. Look for instability at extremes.

### What to write
- How does slope change with position?
- Any discontinuities? (worn track/contact)
- Any heating/damage? (should be minimal at low power)

### Search keywords
- `potentiometer linear taper vs log taper`
- `potentiometer wiper noise erratic readings`

### Deliverables checklist
- Multiple plots for different positions + discussion.

---

# Final submission checklist (Moodle)

**Academic integrity warning (final repeat):** Ensure your workbook is your own writing and your own measurements.

- Lab workbook PDF (scanned or digital handwriting)
- Multisim project files (zipped)
- CRO screenshots + photos (labelled)
- Raw data CSV files
- Optional short videos demonstrating measurements
