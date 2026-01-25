# LO2 — Example Q2: Pure Inductance (Reactance and Current)

> **Math rendering note:** Uses `$...$` (inline) and `$$...$$` (display). If it shows as plain text, your Markdown viewer doesn’t support MathJax/KaTeX.

## Question
An e.m.f. of $100\,\mathrm{V}$ at a frequency of $5\,\mathrm{kHz}$ is applied to a coil of pure inductance $65\,\mathrm{mH}$.

Determine:
(a) the reactance of the coil, and
(b) the current flowing in the coil.

---

## Given
- $V = 100\,\mathrm{V}$
- $f = 5\,\mathrm{kHz} = 5000\,\mathrm{Hz}$
- $L = 65\,\mathrm{mH} = 0.065\,\mathrm{H}$

> Comment: In AC problems, quoted voltages/currents are usually **r.m.s. values** unless stated otherwise. This solution treats $100\,\mathrm{V}$ as r.m.s.

---

## (a) Inductive reactance
For a pure inductor:

$$
X_L = 2\pi f L
$$

Substitute values:

$$
X_L = 2\pi(5000)(0.065)
$$

Compute inside first:

$$
(5000)(0.065) = 325
$$

So:

$$
X_L = 2\pi(325) = 650\pi\,\Omega \approx 2042\,\Omega
$$

---

## (b) Current in the coil
For a pure inductor, the impedance magnitude is $|Z| = X_L$ so:

$$
I = \frac{V}{X_L}
$$

Substitute:

$$
I = \frac{100}{2042}\,\mathrm{A} \approx 0.04897\,\mathrm{A}
$$

So:

$$
I \approx 4.90\times 10^{-2}\,\mathrm{A} \approx 49.0\,\mathrm{mA}
$$

Comment: In a pure inductive circuit, current **lags** voltage by $90^\circ$.

---

## Final answers
- (a) $X_L \approx 2042\,\Omega$ (about $2.04\,\mathrm{k}\Omega$)
- (b) $I \approx 0.0490\,\mathrm{A}$ (about $49\,\mathrm{mA}$)
