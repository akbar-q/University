# LO1 — Solution Key: Figure 3 (KVL & KCL)

> **Math rendering note:** Uses `$...$` (inline) and `$$...$$` (display). If it shows as plain text, your Markdown viewer doesn't support MathJax/KaTeX.

## Problem
Apply Kirchhoff's Current Law (KCL) and Kirchhoff's Voltage Law (KVL) to find the current in each branch of the circuit given in Figure 3.

## Given (from Figure 3)
- Left loop source: $E_1 = 2\,\mathrm{V}$
- Left loop resistor: $R_1 = 0.25\,\Omega$
- Right loop source: $E_2 = 24\,\mathrm{V}$
- Series resistor (middle): $R_2 = 4\,\Omega$
- Right loop resistor: $R_3 = 10\,\Omega$

Circuit structure: Two loops sharing a common branch ($R_2$).
- **Loop 1 (left):** $E_1$, $R_1$, $R_2$
- **Loop 2 (right):** $E_2$, $R_2$, $R_3$

---

## Step 1 — Define branch currents and apply KCL

Define:
- $I_1$ = current through $R_1$ (left loop, downward)
- $I_2$ = current through $R_2$ (middle, downward)
- $I_3$ = current through $R_3$ (right loop, downward)

At the top node, by KCL:

$$
I_1 = I_2 + I_3
$$

---

## Step 2 — Apply KVL to Loop 1 (left loop, clockwise)

Starting from the bottom-left, going clockwise:

$$
E_1 - I_1 R_1 - I_2 R_2 = 0
$$

Rearranging:

$$
I_1 R_1 + I_2 R_2 = E_1
$$

Substituting values:

$$
I_1 (0.25) + I_2 (4) = 2
$$

$$
0.25 I_1 + 4 I_2 = 2
$$

Multiply by 4 to clear decimals:

$$
I_1 + 16 I_2 = 8
$$

This is **Equation (1)**.

---

## Step 3 — Apply KVL to Loop 2 (right loop, clockwise)

Starting from the bottom-right, going clockwise:

$$
E_2 - I_2 R_2 - I_3 R_3 = 0
$$

Rearranging:

$$
I_2 R_2 + I_3 R_3 = E_2
$$

Substituting values:

$$
I_2 (4) + I_3 (10) = 24
$$

$$
4 I_2 + 10 I_3 = 24
$$

Divide by 2:

$$
2 I_2 + 5 I_3 = 12
$$

This is **Equation (2)**.

---

## Step 4 — Solve the system of equations

We have:
- **(1)** $I_1 + 16 I_2 = 8$
- **(2)** $2 I_2 + 5 I_3 = 12$
- **(3)** $I_1 = I_2 + I_3$

Substitute (3) into (1):

$$
(I_2 + I_3) + 16 I_2 = 8
$$

$$
17 I_2 + I_3 = 8
$$

This is **Equation (4)**.

From Equation (2):

$$
2 I_2 + 5 I_3 = 12
$$

From Equation (4):

$$
I_3 = 8 - 17 I_2
$$

Substitute into Equation (2):

$$
2 I_2 + 5 (8 - 17 I_2) = 12
$$

$$
2 I_2 + 40 - 85 I_2 = 12
$$

$$
-83 I_2 = -28
$$

$$
I_2 = \frac{28}{83} \approx 0.3373\,\mathrm{A}
$$

---

## Step 5 — Find $I_3$ and $I_1$

From Equation (4):

$$
I_3 = 8 - 17 I_2 = 8 - 17 \left(\frac{28}{83}\right)
$$

$$
I_3 = 8 - \frac{476}{83} = \frac{664 - 476}{83} = \frac{188}{83} \approx 2.2651\,\mathrm{A}
$$

From Equation (3):

$$
I_1 = I_2 + I_3 = \frac{28}{83} + \frac{188}{83} = \frac{216}{83} \approx 2.6024\,\mathrm{A}
$$

---

## Final answers

### Branch currents:

$$
I_1 \approx 2.6024\,\mathrm{A}
$$

$$
I_2 \approx 0.3373\,\mathrm{A}
$$

$$
I_3 \approx 2.2651\,\mathrm{A}
$$

| Branch | Current |
|---|---:|
| Through $R_1$ | $I_1 \approx 2.6024\,\mathrm{A}$ |
| Through $R_2$ | $I_2 \approx 0.3373\,\mathrm{A}$ |
| Through $R_3$ | $I_3 \approx 2.2651\,\mathrm{A}$ |

---

## Step 6 — Voltage across each resistor

$$
V_{R1} = I_1 R_1 = (2.6024)(0.25) \approx 0.6506\,\mathrm{V}
$$

$$
V_{R2} = I_2 R_2 = (0.3373)(4) \approx 1.3494\,\mathrm{V}
$$

$$
V_{R3} = I_3 R_3 = (2.2651)(10) \approx 22.6506\,\mathrm{V}
$$

---

## Quick self-check (optional)

KCL at the top node:

$$
I_1 \approx I_2 + I_3
$$

$$
2.6024 \approx 0.3373 + 2.2651
$$

KVL around Loop 1:

$$
E_1 \approx V_{R1} + V_{R2}
$$

$$
2 \approx 0.6506 + 1.3494
$$

KVL around Loop 2:

$$
E_2 \approx V_{R2} + V_{R3}
$$

$$
24 \approx 1.3494 + 22.6506
$$
