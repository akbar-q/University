# LO1 — Solution Key: Figure 8 (Maximum Power Transfer)

> **Math rendering note:** Uses `$...$` (inline) and `$$...$$` (display). If it shows as plain text, your Markdown viewer doesn’t support MathJax/KaTeX.

## Problem
For the circuit shown in Figure 8, calculate the value of the load resistor $R_L$ that gives **maximum power dissipation** and determine the value of the **maximum power** dissipated by the resistor.

## Given (from Figure 8)
- Source: $E = 12\,\mathrm{V}$
- Resistor: $5\,\Omega$
- Series resistor with the source: $2\,\Omega$
- Load: $R_L$ (to be chosen for maximum power)

## Circuit diagram (ASCII)
(Three branches in parallel between the same top and bottom nodes.)

```text
          o  (top node)
          |      |       |
        [R_L]  [ 5Ω ]   [E=12V]
          |      |       |
          |      |      [ 2Ω ]
          |      |       |
          o------o-------o  (bottom node, 0V)
```

## Assumption about source polarity
The battery symbol indicates the **top terminal is positive**. If your diagram uses the opposite polarity, $V_{th}$ changes sign, but the **maximum power value** (which depends on $V_{th}^2$) is unchanged.

---

## Step 1 — Find the Thevenin equivalent seen by $R_L$
To use the Maximum Power Transfer Theorem, find:
- The Thevenin voltage $V_{th}$ across the load terminals (with $R_L$ removed)
- The Thevenin resistance $R_{th}$ seen into the network (with the source deactivated)

---

## Step 2 — Open-circuit voltage $V_{th}$ (remove $R_L$)
With $R_L$ open-circuit, only two branches remain: $5\,\Omega$ and $(12\,\mathrm{V}$ in series with $2\,\Omega)$.

Let the top node voltage relative to the bottom node be $V$.

Define downwards branch currents:

$$
I_5 = \frac{V}{5}
$$

For the source + series resistor branch (top-to-bottom drop is $12 + 2I_2$):

$$
V = 12 + 2 I_2 \Rightarrow I_2 = \frac{V - 12}{2}
$$

KCL at the top node (no external connection when $R_L$ is removed):

$$
I_5 + I_2 = 0
$$

Substitute:

$$
\frac{V}{5} + \frac{V - 12}{2} = 0
$$

Solve:

$$
2V + 5(V - 12) = 0
$$

$$
7V - 60 = 0 \Rightarrow V = \frac{60}{7}\,\mathrm{V} \approx 8.5714\,\mathrm{V}
$$

Therefore:

$$
V_{th} = \frac{60}{7}\,\mathrm{V} \approx 8.5714\,\mathrm{V}
$$

---

## Step 3 — Thevenin resistance $R_{th}$ (deactivate the source)
Deactivate the independent voltage source by replacing it with a short circuit.

Then the right branch becomes just $2\,\Omega$.

So seen from the load terminals:

$$
R_{th} = 5 \parallel 2 = \frac{(5)(2)}{5+2} = \frac{10}{7}\,\Omega \approx 1.4286\,\Omega
$$

---

## Step 4 — Maximum Power Transfer Theorem
For a resistive Thevenin source, maximum power to the load occurs when:

$$
R_L = R_{th}
$$

So:

$$
R_L = \frac{10}{7}\,\Omega \approx 1.43\,\Omega
$$

Maximum load power is:

$$
P_{\max} = \frac{V_{th}^2}{4 R_{th}}
$$

Substitute $V_{th}=\frac{60}{7}$ and $R_{th}=\frac{10}{7}$:

$$
P_{\max} = \frac{\left(\frac{60}{7}\right)^2}{4\left(\frac{10}{7}\right)}
$$

$$
P_{\max} = \frac{3600/49}{40/7} = \frac{3600}{49}\cdot\frac{7}{40} = \frac{25200}{1960} = \frac{90}{7}\,\mathrm{W}
$$

$$
P_{\max} \approx 12.8571\,\mathrm{W}
$$

---

## Final answers

$$
R_L\,(\text{for maximum power}) = \frac{10}{7}\,\Omega \approx 1.43\,\Omega
$$

$$
P_{\max} = \frac{90}{7}\,\mathrm{W} \approx 12.86\,\mathrm{W}
$$

---

## Quick self-check (optional)
If $R_L = R_{th}$, then the load voltage should be half of $V_{th}$:

$$
V_L = \frac{V_{th}}{2} = \frac{30}{7}\,\mathrm{V}
$$

Load power:

$$
P = \frac{V_L^2}{R_L} = \frac{\left(\frac{30}{7}\right)^2}{\frac{10}{7}} = \frac{900/49}{10/7} = \frac{900}{49}\cdot\frac{7}{10} = \frac{90}{7}\,\mathrm{W}
$$
