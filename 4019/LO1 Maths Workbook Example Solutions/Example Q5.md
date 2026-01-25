# LO1 — Solution Key: Figure 5 (Superposition with Internal Resistances)

> **Math rendering note:** Uses `$...$` (inline) and `$$...$$` (display). If it shows as plain text, your Markdown viewer doesn’t support MathJax/KaTeX.

## Problem
For the circuit shown in Figure 5 containing two e.m.f. sources with internal resistances, use the **superposition theorem** to determine the current in each branch.

## Given (from Figure 5)
- Left source: $E_1 = 2\,\mathrm{V}$ with internal resistance $r_1 = 1\,\Omega$
- Right source: $E_2 = 4\,\mathrm{V}$ with internal resistance $r_2 = 2\,\Omega$
- Middle resistor: $R = 3\,\Omega$

## Circuit diagram (ASCII)
(Three branches in parallel between the same top and bottom nodes.)

```text
          o  (top node)
          |      |      |
        [E1]    [ R ]  [E2]
          |      |      |
        [r1]     |     [r2]
          |      |      |
          o------o------o  (bottom node)

   E1 = 2 V, r1 = 1 Ω     R = 3 Ω     E2 = 4 V, r2 = 2 Ω
```

## Assumptions / sign convention
- Define all branch currents positive **downwards** (from top node to bottom node).
- Based on the diagram, take both sources to have their **positive terminal at the top node**.
  - If your figure shows a source reversed, replace that source value by a negative emf in the equations (method is unchanged).

---

## Step 1 — Use superposition
We will find the contribution to each branch current from:
1) $E_1$ acting alone (set $E_2$ to 0 V), and
2) $E_2$ acting alone (set $E_1$ to 0 V),
then add the results.

Rule: Setting an ideal voltage source to 0 V means **replace it with a short circuit**.

---

# Part A — $E_1$ acting alone ($E_2 = 0\,\mathrm{V}$)

## Circuit diagram (ASCII)
```text
          o  (top)
          |      |      |
        [E1]    [ R ]  (short)
          |      |      |
        [r1]     |     [r2]
          |      |      |
          o------o------o  (bottom)
```

Let the top node voltage (relative to bottom) be $V_A$.

Branch currents (downwards):

$$
I_{1A} = \frac{V_A - E_1}{r_1}
$$

$$
I_{RA} = \frac{V_A}{R}
$$

$$
I_{2A} = \frac{V_A}{r_2}
$$

Apply KCL at the top node (sum of downwards currents equals 0 because there is no external connection):

$$
\frac{V_A - E_1}{r_1} + \frac{V_A}{R} + \frac{V_A}{r_2} = 0
$$

Substitute values $E_1=2$, $r_1=1$, $R=3$, $r_2=2$:

$$
(V_A - 2) + \frac{V_A}{3} + \frac{V_A}{2} = 0
$$

Solve for $V_A$:

$$
V_A = \frac{12}{11} \approx 1.0909\,\mathrm{V}
$$

Now compute the currents:

$$
I_{1A} = V_A - 2 = \frac{12}{11} - 2 = -\frac{10}{11} \approx -0.9091\,\mathrm{A}
$$

$$
I_{RA} = \frac{V_A}{3} = \frac{12/11}{3} = \frac{4}{11} \approx 0.3636\,\mathrm{A}
$$

$$
I_{2A} = \frac{V_A}{2} = \frac{12/11}{2} = \frac{6}{11} \approx 0.5455\,\mathrm{A}
$$

Interpretation: $I_{1A}$ is negative, so the actual current in the left branch flows **upwards** with magnitude $0.9091\,\mathrm{A}$.

---

# Part B — $E_2$ acting alone ($E_1 = 0\,\mathrm{V}$)

## Circuit diagram (ASCII)
```text
          o  (top)
          |      |      |
       (short)  [ R ]  [E2]
          |      |      |
        [r1]     |     [r2]
          |      |      |
          o------o------o  (bottom)
```

Let the top node voltage (relative to bottom) be $V_B$.

Branch currents (downwards):

$$
I_{1B} = \frac{V_B}{r_1}
$$

$$
I_{RB} = \frac{V_B}{R}
$$

$$
I_{2B} = \frac{V_B - E_2}{r_2}
$$

Apply KCL:

$$
\frac{V_B}{r_1} + \frac{V_B}{R} + \frac{V_B - E_2}{r_2} = 0
$$

Substitute values $r_1=1$, $R=3$, $E_2=4$, $r_2=2$:

$$
V_B + \frac{V_B}{3} + \frac{V_B - 4}{2} = 0
$$

Solve for $V_B$:

$$
V_B = \frac{12}{11} \approx 1.0909\,\mathrm{V}
$$

Now compute the currents:

$$
I_{1B} = V_B = \frac{12}{11} \approx 1.0909\,\mathrm{A}
$$

$$
I_{RB} = \frac{V_B}{3} = \frac{4}{11} \approx 0.3636\,\mathrm{A}
$$

$$
I_{2B} = \frac{V_B - 4}{2} = \frac{12/11 - 4}{2} = -\frac{16}{11} \approx -1.4545\,\mathrm{A}
$$

Interpretation: $I_{2B}$ is negative, so the actual current in the right branch flows **upwards** with magnitude $1.4545\,\mathrm{A}$.

---

# Part C — Total currents (superposition)
Add the contributions from Part A and Part B:

$$
I_1 = I_{1A} + I_{1B}
$$

$$
I_R = I_{RA} + I_{RB}
$$

$$
I_2 = I_{2A} + I_{2B}
$$

Compute:

$$
I_1 = -\frac{10}{11} + \frac{12}{11} = \frac{2}{11} \approx 0.1818\,\mathrm{A}
$$

$$
I_R = \frac{4}{11} + \frac{4}{11} = \frac{8}{11} \approx 0.7273\,\mathrm{A}
$$

$$
I_2 = \frac{6}{11} - \frac{16}{11} = -\frac{10}{11} \approx -0.9091\,\mathrm{A}
$$

---

## Final answers (branch currents)
(Positive is downwards from top node to bottom node.)

| Branch | Current | Meaning |
|---|---:|---|
| Left branch ($E_1$ + $r_1$) | $I_1 \approx 0.1818\,\mathrm{A}$ | downward |
| Middle branch ($R$) | $I_R \approx 0.7273\,\mathrm{A}$ | downward |
| Right branch ($E_2$ + $r_2$) | $I_2 \approx -0.9091\,\mathrm{A}$ | $0.9091\,\mathrm{A}$ upward |

---

## Quick self-check (optional)
KCL at the top node (algebraic sum with downwards positive):

$$
I_1 + I_R + I_2 \approx 0
$$

$$
0.1818 + 0.7273 - 0.9091 \approx 0
$$
