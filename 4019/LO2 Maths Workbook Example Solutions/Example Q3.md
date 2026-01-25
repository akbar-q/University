# LO2 — Example Q3: Capacitor (Capacitance and Current)

> **Math rendering note:** Uses `$...$` (inline) and `$$...$$` (display). If it shows as plain text, your Markdown viewer doesn’t support MathJax/KaTeX.

## Question
A capacitor has a capacitive reactance of $200\,\Omega$ when connected to a $240\,\mathrm{V}$, $50\,\mathrm{Hz}$ supply.

Determine:
- its capacitance, and
- the current taken from the supply.

---

## Given
- $X_C = 200\,\Omega$
- $V = 240\,\mathrm{V}$
- $f = 50\,\mathrm{Hz}$

> Comment: Supply voltage is normally an **r.m.s.** value, so this solution treats $240\,\mathrm{V}$ as r.m.s.

---

## Step 1 — Find the capacitance
For a capacitor:

$$
X_C = \frac{1}{2\pi f C}
$$

Rearrange to make $C$ the subject:

$$
C = \frac{1}{2\pi f X_C}
$$

Substitute values:

$$
C = \frac{1}{2\pi(50)(200)}
$$

Compute the denominator:

$$
2\pi(50)(200) = 20000\pi
$$

So:

$$
C = \frac{1}{20000\pi}\,\mathrm{F} \approx 1.5915\times 10^{-5}\,\mathrm{F}
$$

Convert to microfarads:

$$
C \approx 15.9\,\mu\mathrm{F}
$$

---

## Step 2 — Find the current taken from the supply
For a pure capacitive circuit, the impedance magnitude is $|Z| = X_C$, so:

$$
I = \frac{V}{X_C}
$$

Substitute values:

$$
I = \frac{240}{200} = 1.2\,\mathrm{A}
$$

Comment: In a pure capacitive circuit, current **leads** voltage by $90^\circ$.

---

## Final answers
- Capacitance: $C \approx 15.9\,\mu\mathrm{F}$
- Supply current: $I = 1.2\,\mathrm{A}$
