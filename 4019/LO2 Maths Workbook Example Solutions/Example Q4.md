# LO2 — Example Q4: R–L Coil (Reactance, Impedance, Current, Phase Angle)

> **Math rendering note:** Uses `$...$` (inline) and `$$...$$` (display). If it shows as plain text, your Markdown viewer doesn’t support MathJax/KaTeX.

## Question
A coil has a resistance of $7\,\Omega$ and an inductance of $8.55\,\mathrm{mH}$.

Calculate:
(a) the reactance,
(b) the impedance, and
(c) the current taken from a $120\,\mathrm{V}$, $60\,\mathrm{Hz}$ supply.

Determine also the phase angle between the supply voltage and current.

---

## Given
- $R = 7\,\Omega$
- $L = 8.55\,\mathrm{mH} = 0.00855\,\mathrm{H}$
- $f = 60\,\mathrm{Hz}$
- $V = 120\,\mathrm{V}$

> Comment: Supply voltage is normally given as an **r.m.s. value**. This solution treats $120\,\mathrm{V}$ as r.m.s.

---

## (a) Inductive reactance
For an inductor:

$$
X_L = 2\pi f L
$$

Substitute:

$$
X_L = 2\pi(60)(0.00855)
$$

Compute:

$$
60\times 0.00855 = 0.513
$$

So:

$$
X_L = 2\pi(0.513) \approx 3.223\,\Omega
$$

---

## (b) Impedance
For a series $R$–$L$ coil:

$$
Z = \sqrt{R^2 + X_L^2}
$$

Substitute:

$$
Z = \sqrt{7^2 + (3.223)^2}
$$

$$
Z = \sqrt{49 + 10.39} = \sqrt{59.39} \approx 7.707\,\Omega
$$

---

## (c) Current taken from the supply
Magnitude of current:

$$
I = \frac{V}{Z}
$$

Substitute:

$$
I = \frac{120}{7.707}\,\mathrm{A} \approx 15.57\,\mathrm{A}
$$

---

## Phase angle between voltage and current
For a series $R$–$L$ circuit:

$$
\tan\phi = \frac{X_L}{R}
$$

So:

$$
\phi = \tan^{-1}\left(\frac{X_L}{R}\right) = \tan^{-1}\left(\frac{3.223}{7}\right)
$$

$$
\phi \approx \tan^{-1}(0.4604) \approx 24.8^\circ
$$

Comment: In an $R$–$L$ circuit, the **current lags** the voltage by $\phi$.

---

## Final answers
- (a) Reactance: $X_L \approx 3.22\,\Omega$
- (b) Impedance: $Z \approx 7.71\,\Omega$
- (c) Current: $I \approx 15.6\,\mathrm{A}$ (r.m.s.)
- Phase angle: $\phi \approx 24.8^\circ$ (current lags voltage)
