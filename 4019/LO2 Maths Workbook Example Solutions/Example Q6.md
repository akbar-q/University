# LO2 — Example Q6: Series R–L Coil and Capacitor

> **Math rendering note:** Uses `$...$` (inline) and `$$...$$` (display). If it shows as plain text, your Markdown viewer doesn’t support MathJax/KaTeX.

## Question
A coil of resistance $5\,\Omega$ and inductance $120\,\mathrm{mH}$ in series with a $100\,\mu\mathrm{F}$ capacitor is connected to an AC supply.

Calculate:
(a) the current flowing,
(b) the phase difference between the supply voltage and current,
(c) the voltage across the coil, and
(d) the voltage across the capacitor.

## Updated assumption (as requested)
Although the original figure shows $300\,\mathrm{V}$ at $50\,\mathrm{Hz}$, **assume instead**:

$$
V = 120\,\mathrm{V}\ (\text{r.m.s.}),\qquad f = 60\,\mathrm{Hz}
$$

---

## Figure (image)
Store the figure image in this repo at:
`LO2 Maths Workbook Example Solutions/Images/Example Q6.png`

![Figure Q6: R–L coil in series with capacitor](./Images/Example%20Q6.png)

## Circuit diagram (ASCII)
```text
   ~ V (AC)  o----[ R=5Ω ]----[ L=120 mH ]----[ C=100 µF ]----o
             |                                              |
             o----------------------------------------------o

   Series circuit: same current I through R, L, and C
```

---

## Given
- $R = 5\,\Omega$
- $L = 120\,\mathrm{mH} = 0.12\,\mathrm{H}$
- $C = 100\,\mu\mathrm{F} = 100\times 10^{-6}\,\mathrm{F}$
- $f = 60\,\mathrm{Hz}$
- $V = 120\,\mathrm{V}$ (r.m.s.)

---

## Step 1 — Calculate reactances
Inductive reactance:

$$
X_L = 2\pi f L
$$

$$
X_L = 2\pi(60)(0.12) \approx 45.24\,\Omega
$$

Capacitive reactance:

$$
X_C = \frac{1}{2\pi f C}
$$

$$
X_C = \frac{1}{2\pi(60)(100\times 10^{-6})} \approx 26.53\,\Omega
$$

Net series reactance:

$$
X = X_L - X_C \approx 45.24 - 26.53 = 18.71\,\Omega
$$

---

## Step 2 — Impedance and current
For a series RLC circuit:

$$
Z = \sqrt{R^2 + X^2}
$$

$$
Z = \sqrt{5^2 + (18.71)^2} \approx 19.37\,\Omega
$$

### (a) Current flowing

$$
I = \frac{V}{Z} = \frac{120}{19.37} \approx 6.20\,\mathrm{A}
$$

---

## Step 3 — Phase difference
For a series circuit:

$$
\tan\phi = \frac{X}{R}
$$

$$
\phi = \tan^{-1}\left(\frac{18.71}{5}\right) \approx 75.0^\circ
$$

### (b) Phase difference statement
Since $X>0$ (net inductive), the **current lags** the supply voltage by $\phi$:

$$
\phi \approx 75.0^\circ\ \text{(current lags voltage)}
$$

---

## Step 4 — Voltages across the coil and capacitor
Here, “voltage across the coil” means the p.d. across the **series combination** of its resistance and inductance ($R + jX_L$).

### Voltage across the capacitor

$$
V_C = I X_C
$$

$$
V_C \approx (6.20)(26.53) \approx 164\,\mathrm{V}
$$

### Voltage across the coil (R and L together)
Coil impedance magnitude:

$$
|Z_{\mathrm{coil}}| = \sqrt{R^2 + X_L^2}
$$

$$
|Z_{\mathrm{coil}}| = \sqrt{5^2 + (45.24)^2} \approx 45.52\,\Omega
$$

Then:

$$
V_{\mathrm{coil}} = I|Z_{\mathrm{coil}}|
$$

$$
V_{\mathrm{coil}} \approx (6.20)(45.52) \approx 282\,\mathrm{V}
$$

### (c) and (d) Final values

$$
V_{\mathrm{coil}} \approx 282\,\mathrm{V}
$$

$$
V_C \approx 164\,\mathrm{V}
$$

Comment: In series RLC circuits, $V_{\mathrm{coil}}$ and $V_C$ can be **greater than the supply voltage** because they are largely out of phase and partially cancel in the overall phasor sum.

---

## Final answers
- (a) $I \approx 6.20\,\mathrm{A}$
- (b) $\phi \approx 75.0^\circ$ (current lags voltage)
- (c) $V_{\mathrm{coil}} \approx 282\,\mathrm{V}$
- (d) $V_C \approx 164\,\mathrm{V}$

---

## Quick self-check (optional)
Check the supply voltage magnitude from component drops.

First:

$$
V_R = IR \approx (6.20)(5) \approx 31.0\,\mathrm{V}
$$

$$
V_L = I X_L \approx (6.20)(45.24) \approx 280\,\mathrm{V}
$$

$$
V_C = I X_C \approx 164\,\mathrm{V}
$$

Net reactive component:

$$
V_X = V_L - V_C \approx 280 - 164 = 116\,\mathrm{V}
$$

Supply magnitude:

$$
V = \sqrt{V_R^2 + V_X^2} \approx \sqrt{(31.0)^2 + (116)^2} \approx 120\,\mathrm{V}
$$
