# LO1 — Solution Key: Figure 7 (Norton’s Theorem)

> **Math rendering note:** Uses `$...$` (inline) and `$$...$$` (display). If it shows as plain text, your Markdown viewer doesn’t support MathJax/KaTeX.

## Problem
Use Norton’s Theorem to determine the current flowing through the $10\,\Omega$ resistor in Figure 7.

## Important note (Figure 7 ambiguity)
The provided Figure 7 image shows **two** resistors labelled $10\,\Omega$:
- a **middle vertical** $10\,\Omega$ from the top node to the bottom node
- a **top horizontal** $10\,\Omega$ from the top node to the right node (feeding the $8\,\Omega$)

To be safe, this solution gives the current through **both** $10\,\Omega$ resistors:
- $I_{10\Omega,\,\text{middle}}$
- $I_{10\Omega,\,\text{top}}$

If your question intended only one of them, use the corresponding final answer.

## Given (from Figure 7)
- Source: $E = 2\,\mathrm{V}$
- Series resistor: $2\,\Omega$
- Middle resistor: $10\,\Omega$
- Top resistor: $10\,\Omega$
- Right resistor: $8\,\Omega$

## Circuit diagram (ASCII)
```text
          o  A (top node)
          |\
        [E] \----[10Ω (top)]----o C
          |   \                 |
        [2Ω]  [10Ω (middle)]   [8Ω]
          |     \               |
          o------o---------------o  (bottom node, 0V)
```

## Sign convention
- Take the bottom node as $0\,\mathrm{V}$.
- Assume the source makes node $A$ positive relative to the bottom node.
- Currents are reported with a stated direction.

---

# Part 1 — Current through the **middle** $10\,\Omega$ (between $A$ and bottom)
Treat the middle $10\,\Omega$ as the load $R_L$ connected between node $A$ and the bottom node.

## Step 1.1 — Find $R_N$ seen at the load terminals
Deactivate the source (replace the $2\,\mathrm{V}$ source with a short).

Then node $A$ sees $2\,\Omega$ in parallel with the right branch $(10+8)\,\Omega = 18\,\Omega$:

$$
R_N = 2 \parallel 18 = \frac{(2)(18)}{2+18} = \frac{36}{20} = 1.8\,\Omega
$$

## Step 1.2 — Find Norton current $I_N$ (short-circuit current)
Short the load terminals (short node $A$ to the bottom node).

- The right branch has $0\,\mathrm{V}$ across it, so it carries $0\,\mathrm{A}$.
- The left branch becomes a $2\,\mathrm{V}$ source in series with $2\,\Omega$ feeding a short.

So the short-circuit current is:

$$
I_N = \frac{E}{2} = \frac{2}{2} = 1\,\mathrm{A}
$$

(Direction: from node $A$ down to the bottom node.)

## Step 1.3 — Load current by current division
With Norton equivalent $(I_N \parallel R_N)$ in parallel with $R_L=10\,\Omega$:

$$
I_{10\Omega,\,\text{middle}} = I_N\,\frac{R_N}{R_N + R_L}
$$

$$
I_{10\Omega,\,\text{middle}} = 1\cdot \frac{1.8}{1.8+10} = \frac{1.8}{11.8} \approx 0.1525\,\mathrm{A}
$$

(Direction: downwards from node $A$ to the bottom node.)

---

# Part 2 — Current through the **top** $10\,\Omega$ (between $A$ and $C$)
Treat the top $10\,\Omega$ as the load $R_L$ connected between node $A$ and node $C$.

## Step 2.1 — Find $R_N$ seen between nodes $A$ and $C$
Remove the top $10\,\Omega$ (open-circuit at the load).
Deactivate the source (replace it with a short).

With the source off:
- From node $A$ to bottom: $2\,\Omega \parallel 10\,\Omega$

$$
R_{A\to 0} = 2 \parallel 10 = \frac{(2)(10)}{2+10} = \frac{20}{12} = \frac{5}{3}\,\Omega
$$

- From node $C$ to bottom: $8\,\Omega$

The only path between $A$ and $C$ is via the bottom node, so:

$$
R_N = R_{A\to 0} + 8 = \frac{5}{3} + 8 = \frac{29}{3}\,\Omega \approx 9.6667\,\Omega
$$

## Step 2.2 — Find open-circuit voltage $V_{OC}=V_{AC}$
With the top $10\,\Omega$ removed:
- node $C$ is connected only to the bottom node through $8\,\Omega$, so $V_C = 0\,\mathrm{V}$.
- node $A$ is a divider fed by the $2\,\mathrm{V}$ source with series $2\,\Omega$ into the $10\,\Omega$ shunt.

So:

$$
V_A = E\,\frac{10}{2+10} = 2\cdot\frac{10}{12} = \frac{5}{3}\,\mathrm{V} \approx 1.6667\,\mathrm{V}
$$

Therefore:

$$
V_{OC} = V_{AC} = V_A - V_C = \frac{5}{3} - 0 = \frac{5}{3}\,\mathrm{V}
$$

## Step 2.3 — Norton current and load current
Norton current:

$$
I_N = \frac{V_{OC}}{R_N} = \frac{\frac{5}{3}}{\frac{29}{3}} = \frac{5}{29}\,\mathrm{A} \approx 0.1724\,\mathrm{A}
$$

Load current through the top $10\,\Omega$:

$$
I_{10\Omega,\,\text{top}} = I_N\,\frac{R_N}{R_N + R_L}
$$

$$
I_{10\Omega,\,\text{top}} = \frac{5}{29}\cdot\frac{\frac{29}{3}}{\frac{29}{3}+10}
$$

$$
I_{10\Omega,\,\text{top}} = \frac{5}{59}\,\mathrm{A} \approx 0.08475\,\mathrm{A}
$$

(Direction: from node $A$ to node $C$.)

---

## Final answers
- Current through the **middle** $10\,\Omega$:

$$
I_{10\Omega,\,\text{middle}} \approx 0.1525\,\mathrm{A}\ \text{(downwards)}
$$

- Current through the **top** $10\,\Omega$:

$$
I_{10\Omega,\,\text{top}} \approx 0.08475\,\mathrm{A}\ \text{(from }A\text{ to }C\text{)}
$$

## Quick self-check (optional)
Nodal check at node $A$ for the full circuit (both $10\,\Omega$ resistors present):

The right-hand branch is series:

$$
R_{\mathrm{right}} = 10 + 8 = 18\,\Omega
$$

KCL at node $A$ (downwards currents positive):

$$
\frac{V_A - 2}{2} + \frac{V_A}{10} + \frac{V_A}{18} = 0
$$

Solve:

$$
45(V_A - 2) + 9V_A + 5V_A = 0
$$

$$
59V_A = 90 \Rightarrow V_A = \frac{90}{59}\,\mathrm{V} \approx 1.5254\,\mathrm{V}
$$

Then:

$$
I_{10\Omega,\,\text{middle}} = \frac{V_A}{10} = \frac{9}{59}\,\mathrm{A} \approx 0.1525\,\mathrm{A}
$$

$$
I_{10\Omega,\,\text{top}} = \frac{V_A}{10+8} = \frac{5}{59}\,\mathrm{A} \approx 0.08475\,\mathrm{A}
$$
