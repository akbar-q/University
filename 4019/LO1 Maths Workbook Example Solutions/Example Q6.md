# LO1 — Solution Key: Figure 6 (Thevenin + Power in $8\,\Omega$)

> **Math rendering note:** Uses `$...$` (inline) and `$$...$$` (display). If it shows as plain text, your Markdown viewer doesn’t support MathJax/KaTeX.

## Problem
Use Thevenin’s Theorem to determine the current $I$ flowing through the $8\,\Omega$ resistor in Figure 6. Calculate the power dissipated in the $8\,\Omega$ resistor.

## Given (from Figure 6)
- Left source: $E_1 = 2\,\mathrm{V}$ with internal resistance $r_1 = 4\,\Omega$
- Middle source: $E_2 = 4\,\mathrm{V}$ with internal resistance $r_2 = 2\,\Omega$
- Load resistor: $R_L = 8\,\Omega$

## Circuit diagram (ASCII)
(Three branches in parallel between the same top and bottom nodes.)

```text
          o  (top node)
          |      |      |
        [E1]    [E2]   [ R_L ]
          |      |      |
        [r1]    [r2]     |
          |      |      |
          o------o------o  (bottom node)

   E1 = 2 V, r1 = 4 Ω   E2 = 4 V, r2 = 2 Ω   R_L = 8 Ω
```

## Sign convention
- Define the load current $I$ positive **downwards** through $R_L$.
- Take both sources to have their **positive terminal at the top node** (matches the figure as drawn).

---

## Step 1 — Remove the load to find $V_{th}$
Remove $R_L$ (open-circuit) and find the open-circuit voltage across the load terminals.

A convenient way is to convert each source+internal resistance to a **Norton** equivalent.

---

## Step 2 — Convert each source branch to Norton
For a voltage source $E$ in series with $r$:

$$
I_N = \frac{E}{r},\qquad R_N = r
$$

So:

$$
I_{N1} = \frac{E_1}{r_1} = \frac{2}{4} = 0.5\,\mathrm{A}
$$

$$
I_{N2} = \frac{E_2}{r_2} = \frac{4}{2} = 2\,\mathrm{A}
$$

The two Norton sources are in parallel, so the total Norton current is:

$$
I_N = I_{N1} + I_{N2} = 0.5 + 2 = 2.5\,\mathrm{A}
$$

The Norton resistance is the parallel combination:

$$
R_N = r_1 \parallel r_2 = \frac{r_1 r_2}{r_1 + r_2} = \frac{(4)(2)}{4+2} = \frac{8}{6} = \frac{4}{3}\,\Omega
$$

---

## Step 3 — Convert Norton to Thevenin
For Norton $\to$ Thevenin:

$$
R_{th} = R_N
$$

$$
V_{th} = I_N R_N
$$

So:

$$
R_{th} = \frac{4}{3}\,\Omega
$$

$$
V_{th} = (2.5)\left(\frac{4}{3}\right) = \frac{10}{3}\,\mathrm{V} \approx 3.333\,\mathrm{V}
$$

## Thevenin equivalent (ASCII)
```text
   V_th
  +  -
  ( )----[ R_th ]----[ R_L ]
   |                  |
   o------------------o

  V_th = 10/3 V,  R_th = 4/3 Ω,  R_L = 8 Ω
```

---

## Step 4 — Load current through $8\,\Omega$
Using Ohm’s Law on the Thevenin series circuit:

$$
I = \frac{V_{th}}{R_{th} + R_L}
$$

Substitute values:

$$
I = \frac{\frac{10}{3}}{\frac{4}{3} + 8}
$$

$$
I = \frac{\frac{10}{3}}{\frac{28}{3}} = \frac{10}{28} = \frac{5}{14}\,\mathrm{A} \approx 0.3571\,\mathrm{A}
$$

So the current through the $8\,\Omega$ resistor is about $0.357\,\mathrm{A}$ **downwards**.

---

## Step 5 — Power dissipated in the $8\,\Omega$ resistor

$$
P_{8\Omega} = I^2 R_L
$$

$$
P_{8\Omega} = \left(\frac{5}{14}\right)^2 (8) = \frac{25}{196}\cdot 8 = \frac{50}{49}\,\mathrm{W} \approx 1.020\,\mathrm{W}
$$

---

## Final answers

$$
I \approx 0.3571\,\mathrm{A}\ \text{(downwards through }8\,\Omega\text{)}
$$

$$
P_{8\Omega} \approx 1.020\,\mathrm{W}
$$

---

## Quick self-check (optional)
Direct KCL at the top node with the load connected (top-node voltage $V$ relative to bottom):

$$
\frac{V - E_1}{r_1} + \frac{V - E_2}{r_2} + \frac{V}{R_L} = 0
$$

$$
\frac{V - 2}{4} + \frac{V - 4}{2} + \frac{V}{8} = 0
$$

Multiply by 8:

$$
2(V-2) + 4(V-4) + V = 0
$$

$$
7V - 20 = 0\ \Rightarrow\ V = \frac{20}{7}\,\mathrm{V}
$$

Load current:

$$
I = \frac{V}{8} = \frac{20/7}{8} = \frac{5}{14}\,\mathrm{A}
$$
