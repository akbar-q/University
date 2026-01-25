# LO2 — Example Q5: Series R–C Circuit (Impedance, Phase Angle, Voltages, Phasor)

> **Math rendering note:** Uses `$...$` (inline) and `$$...$$` (display). If it shows as plain text, your Markdown viewer doesn’t support MathJax/KaTeX.

## About changing values
Yes — you can change the numerical values **without making the question invalid**, as long as the new values remain physically consistent for a **series R–C** circuit.

Minimum consistency rules:
- Impedance magnitude must satisfy $Z > R$ (otherwise the capacitive reactance would be imaginary).
- The given current should match the supply voltage via $V = IZ$.
- Frequency must be $>0$.

Below is a **valid modified version** with the same method and structure.

---

## Modified question (same structure)
A capacitor $C$ is connected in series with a $30\,\Omega$ resistor across a supply of frequency $60\,\mathrm{Hz}$. A current of $2.5\,\mathrm{A}$ flows and the circuit impedance is $50\,\Omega$.

Calculate:
(a) the value of capacitance, $C$,
(b) the supply voltage,
(c) the phase angle between the supply voltage and current,
(d) the p.d. across the resistor, and
(e) the p.d. across the capacitor.

Draw the phasor diagram.

---

## Given
- $R = 30\,\Omega$
- $Z = 50\,\Omega$
- $I = 2.5\,\mathrm{A}$
- $f = 60\,\mathrm{Hz}$

> Comment: In AC circuit questions, the given $V$ and $I$ are usually **r.m.s.** values unless stated otherwise.

---

## Step 1 — Find the capacitive reactance $X_C$
For a series $R$–$C$ circuit:

$$
Z = \sqrt{R^2 + X_C^2}
$$

Rearrange:

$$
X_C = \sqrt{Z^2 - R^2}
$$

Substitute:

$$
X_C = \sqrt{50^2 - 30^2} = \sqrt{2500 - 900} = \sqrt{1600} = 40\,\Omega
$$

---

## (a) Capacitance $C$
For a capacitor:

$$
X_C = \frac{1}{2\pi f C}
$$

So:

$$
C = \frac{1}{2\pi f X_C}
$$

Substitute $f=60$ and $X_C=40$:

$$
C = \frac{1}{2\pi(60)(40)} = \frac{1}{4800\pi}\,\mathrm{F}
$$

$$
C \approx 6.63\times 10^{-5}\,\mathrm{F} \approx 66.3\,\mu\mathrm{F}
$$

---

## (b) Supply voltage
Use $V = IZ$:

$$
V = IZ = (2.5)(50) = 125\,\mathrm{V}
$$

---

## (c) Phase angle between supply voltage and current
For a series $R$–$C$ circuit:

$$
\tan |\phi| = \frac{X_C}{R}
$$

Substitute:

$$
|\phi| = \tan^{-1}\left(\frac{40}{30}\right) = \tan^{-1}\left(\frac{4}{3}\right) \approx 53.13^\circ
$$

Because it is capacitive, the current **leads** the supply voltage, so the phase angle of voltage relative to current is negative:

$$
\phi \approx -53.13^\circ
$$

---

## (d) p.d. across the resistor

$$
V_R = IR = (2.5)(30) = 75\,\mathrm{V}
$$

---

## (e) p.d. across the capacitor

$$
V_C = I X_C = (2.5)(40) = 100\,\mathrm{V}
$$

---

## Phasor diagram (ASCII)
Take current $I$ as the reference (to the right). In a capacitive circuit, $V_C$ lags $I$ by $90^\circ$ (downwards).

```text
            V (supply)
              /
             /
            /
           /|
          / |
         /  |
        /   |
       /    |
      /     |
     /      |
    o-------+---------->  I (reference), V_R
            |
            |
            |
            v
           V_C

V is the vector sum: V = V_R + (-j V_C)
```

---

## Quick self-check (optional)
The phasor magnitude should satisfy:

$$
V = \sqrt{V_R^2 + V_C^2} = \sqrt{75^2 + 100^2} = \sqrt{15625} = 125\,\mathrm{V}
$$

Matches part (b).
