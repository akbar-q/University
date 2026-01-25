# LO2 — Example Q7: Series RLC at Resonance

> **Math rendering note:** Uses `$...$` (inline) and `$$...$$` (display). If it shows as plain text, your Markdown viewer doesn’t support MathJax/KaTeX.

## Question
The current at resonance in a series L–C–R circuit is $100\,\mu\mathrm{A}$. If the applied voltage is $3\,\mathrm{mV}$ at a frequency of $500\,\mathrm{kHz}$, and the circuit inductance is $25\,\mu\mathrm{H}$, find:

(a) the circuit resistance, and
(b) the circuit capacitance.

---

## Given
- Resonant current: $I = 100\,\mu\mathrm{A} = 100\times 10^{-6}\,\mathrm{A}$
- Applied voltage: $V = 3\,\mathrm{mV} = 3\times 10^{-3}\,\mathrm{V}$
- Resonant frequency: $f_0 = 500\,\mathrm{kHz} = 5.0\times 10^{5}\,\mathrm{Hz}$
- Inductance: $L = 25\,\mu\mathrm{H} = 25\times 10^{-6}\,\mathrm{H}$

> Comment: In AC questions, stated voltages/currents are typically **r.m.s. values** unless stated otherwise.

---

## Key resonance facts (series RLC)
At resonance:
- $X_L = X_C$ (reactive parts cancel)
- The impedance magnitude is purely resistive:

$$
Z = R
$$

Also, the resonant frequency is:

$$
f_0 = \frac{1}{2\pi\sqrt{LC}}
$$

---

## (a) Circuit resistance
At resonance $Z=R$, and by Ohm’s Law:

$$
R = \frac{V}{I}
$$

Substitute values:

$$
R = \frac{3\times 10^{-3}}{100\times 10^{-6}}\,\Omega
$$

$$
R = \frac{3\times 10^{-3}}{1\times 10^{-4}}\,\Omega = 30\,\Omega
$$

---

## (b) Circuit capacitance
Rearrange the resonance formula to make $C$ the subject.

From:

$$
f_0 = \frac{1}{2\pi\sqrt{LC}}
$$

Square both sides:

$$
f_0^2 = \frac{1}{(2\pi)^2 LC}
$$

So:

$$
C = \frac{1}{(2\pi f_0)^2 L}
$$

Substitute $f_0 = 5.0\times 10^{5}$ and $L = 25\times 10^{-6}$:

$$
C = \frac{1}{\left(2\pi\cdot 5.0\times 10^{5}\right)^2\left(25\times 10^{-6}\right)}
$$

Compute $2\pi f_0$:

$$
2\pi f_0 = 2\pi(5.0\times 10^{5}) \approx 3.1416\times 10^{6}\,\mathrm{rad\,s^{-1}}
$$

Square it:

$$
(2\pi f_0)^2 \approx (3.1416\times 10^{6})^2 \approx 9.8696\times 10^{12}
$$

Multiply by $L$:

$$
(2\pi f_0)^2 L \approx (9.8696\times 10^{12})(25\times 10^{-6}) \approx 2.4674\times 10^{8}
$$

Therefore:

$$
C \approx \frac{1}{2.4674\times 10^{8}}\,\mathrm{F} \approx 4.05\times 10^{-9}\,\mathrm{F}
$$

Convert to nanofarads:

$$
C \approx 4.05\,\mathrm{nF}
$$

---

## Final answers
- (a) $R = 30\,\Omega$
- (b) $C \approx 4.05\,\mathrm{nF}$
