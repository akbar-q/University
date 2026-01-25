# LO2 — Example Q8: Parallel RLC Circuit

> **Math rendering note:** Uses `$...$` (inline) and `$$...$$` (display). If it shows as plain text, your Markdown viewer doesn’t support MathJax/KaTeX.

## Question
The parallel RLC circuit shown consists of a resistor, inductor, and capacitor connected across a $120\,\mathrm{V}$, $60\,\mathrm{Hz}$ sinusoidal supply.

Component values:
- $R=250\,\Omega$
- $L=0.25\,\mathrm{H}$
- $C=50\,\mu\mathrm{F}$

Find:
(a) $X_L$ and $X_C$ at $60\,\mathrm{Hz}$
(b) the total current and its phase angle relative to the supply voltage
(c) the resonant frequency
(d) the impedance and current at resonance
(e) simulate / discuss behaviour below, at, and above resonance

> Note: If your sheet literally states $C=50\,\mathrm{F}$, the same formulas apply, but the currents become unrealistically large. In most lab problems this value is intended to be $50\,\mu\mathrm{F}$, which is used here.

---

## Figure (image)
Store the figure image in this repo at:
`LO2 Maths Workbook Example Solutions/Images/Example Q8.png`

![Figure Q8: Parallel RLC](./Images/Example%20Q8.png)

## Circuit diagram (ASCII)
```text
        ~ v(t)
         o----+----[ R ]----+----o
              |             |
              +----[  L ]---+
              |             |
              +----[  C ]---+
              |             |
         o----+-------------+----o

All three components are in parallel across the same 120 V, 60 Hz supply.
```

---

## Given
- $V = 120\,\mathrm{V}$ (r.m.s.)
- $f = 60\,\mathrm{Hz}$
- $R = 250\,\Omega$
- $L = 0.25\,\mathrm{H}$
- $C = 50\,\mu\mathrm{F} = 50\times 10^{-6}\,\mathrm{F}$

---

## (a) Reactances at $60\,\mathrm{Hz}$

Inductive reactance:

$$
X_L = 2\pi f L = 2\pi(60)(0.25) \approx 94.25\,\Omega
$$

Capacitive reactance:

$$
X_C = \frac{1}{2\pi f C} = \frac{1}{2\pi(60)(50\times 10^{-6})} \approx 53.05\,\Omega
$$

---

## (b) Total current and phase angle
In a **parallel** circuit, each branch has the same voltage $V$.

Resistor branch current (in phase with $V$):

$$
I_R = \frac{V}{R} = \frac{120}{250} = 0.48\,\mathrm{A}
$$

Inductor branch current (lags $V$ by $90^\circ$):

$$
I_L = \frac{V}{X_L} = \frac{120}{94.25} \approx 1.27\,\mathrm{A}
$$

Capacitor branch current (leads $V$ by $90^\circ$):

$$
I_C = \frac{V}{X_C} = \frac{120}{53.05} \approx 2.26\,\mathrm{A}
$$

Net reactive current (positive means capacitive/leading):

$$
I_X = I_C - I_L \approx 2.26 - 1.27 = 0.99\,\mathrm{A}
$$

Total supply current magnitude:

$$
I = \sqrt{I_R^2 + I_X^2} = \sqrt{(0.48)^2 + (0.99)^2} \approx 1.10\,\mathrm{A}
$$

Phase angle of the supply current relative to the supply voltage:

$$
\theta = \tan^{-1}\left(\frac{I_X}{I_R}\right) = \tan^{-1}\left(\frac{0.99}{0.48}\right) \approx 64.1^\circ
$$

Since $I_X>0$, the circuit is net **capacitive**, so the current **leads** the voltage:

$$
\theta \approx +64.1^\circ\ \text{(current leads)}
$$

Power factor:

$$
\mathrm{pf} = \cos\theta \approx \cos(64.1^\circ) \approx 0.44\ \text{leading}
$$

---

## (c) Resonant frequency
For an ideal parallel RLC, resonance occurs when the susceptances cancel:

$$
\omega_0 C = \frac{1}{\omega_0 L}\ \Rightarrow\ \omega_0 = \frac{1}{\sqrt{LC}}
$$

So:

$$
f_0 = \frac{\omega_0}{2\pi} = \frac{1}{2\pi\sqrt{LC}}
$$

Substitute $L=0.25$ and $C=50\times 10^{-6}$:

$$
f_0 = \frac{1}{2\pi\sqrt{(0.25)(50\times 10^{-6})}} \approx 45.0\,\mathrm{Hz}
$$

---

## (d) Impedance and current at resonance
At resonance, the reactive parts cancel, so the total admittance is purely:

$$
Y = \frac{1}{R}
$$

Therefore:

$$
Z_{\mathrm{res}} = \frac{1}{Y} = R = 250\,\Omega
$$

Supply current at resonance:

$$
I_{\mathrm{res}} = \frac{V}{Z_{\mathrm{res}}} = \frac{120}{250} = 0.48\,\mathrm{A}
$$

At resonance the phase angle is:

$$
\theta_{\mathrm{res}} = 0^\circ\ \text{(purely resistive, pf = 1)}
$$

---

## (e) Simulation / behaviour below, at, and above resonance
A key feature of **parallel** resonance is that the **supply current is minimum at resonance**, because the inductor and capacitor currents largely circulate between themselves.

### Numerical comparison (same $V=120\,\mathrm{V}$)
Below resonance (example $30\,\mathrm{Hz}$):
- $X_L \approx 47.12\,\Omega$, $X_C \approx 106.10\,\Omega$
- $I_R = 0.48\,\mathrm{A}$
- $I_L \approx 2.55\,\mathrm{A}$ (lagging), $I_C \approx 1.13\,\mathrm{A}$ (leading)
- Net: $I_X \approx -1.42\,\mathrm{A}$ (inductive), $I \approx 1.50\,\mathrm{A}$
- Phase: $\theta \approx -71.3^\circ$ (current lags), pf $\approx 0.32$ lagging

At resonance ($f_0\approx 45\,\mathrm{Hz}$):
- Net reactive current $I_X\approx 0$
- $I = I_R = 0.48\,\mathrm{A}$, $\theta=0^\circ$, pf = 1

Above resonance (example $90\,\mathrm{Hz}$):
- $X_L \approx 141.37\,\Omega$, $X_C \approx 35.37\,\Omega$
- $I_R = 0.48\,\mathrm{A}$
- $I_L \approx 0.85\,\mathrm{A}$ (lagging), $I_C \approx 3.39\,\mathrm{A}$ (leading)
- Net: $I_X \approx +2.55\,\mathrm{A}$ (capacitive), $I \approx 2.59\,\mathrm{A}$
- Phase: $\theta \approx +79.3^\circ$ (current leads), pf $\approx 0.19$ leading

### How to simulate (one simple approach)
- Build the parallel RLC in any circuit simulator (e.g., LTspice).
- Run an **AC sweep** from (say) $1\,\mathrm{Hz}$ to $500\,\mathrm{Hz}$.
- Plot the supply current magnitude $|I|$ and the phase angle.

Expected behaviour:
- Below $f_0$: circuit looks net **inductive** (current lags).
- At $f_0$: circuit current is **purely resistive** (pf = 1) and **minimum magnitude**.
- Above $f_0$: circuit looks net **capacitive** (current leads).
