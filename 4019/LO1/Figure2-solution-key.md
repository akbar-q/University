# LO1 — Solution Key: Figure 2 (Series–Parallel)

> **Math rendering note:** Uses `$...$` (inline) and `$$...$$` (display). If it shows as plain text, your Markdown viewer doesn’t support MathJax/KaTeX.

## Problem
For the series-parallel arrangement shown in Figure 2, apply Ohm’s Law, voltage division, and current division to find:

(a) The supply current  
(b) The current flowing through each resistor  
(c) The potential difference (p.d.) across each resistor  

## Given (from Figure 2)
- Supply voltage: $V_S = 100\,\mathrm{V}$
- $R_1 = 5\,\Omega$
- $R_2 = 3\,\Omega$
- $R_3 = 4\,\Omega$
- $R_4 = 8\,\Omega$

Circuit structure: $R_1$ in series with $(R_2 \parallel R_3)$ in series with $R_4$.

---

## Step 1 — Reduce the parallel part
$$
R_{23} = R_2 \parallel R_3
= \frac{R_2 R_3}{R_2 + R_3}
= \frac{(3)(4)}{3+4}
= \frac{12}{7}
\approx 1.7143\,\Omega
$$

---

## Step 2 — Total resistance
$$
R_T = R_1 + R_{23} + R_4
= 5 + \frac{12}{7} + 8
= \frac{103}{7}
\approx 14.7143\,\Omega
$$

---

## Step 3 — (a) Supply current
$$
I_S = \frac{V_S}{R_T}
= \frac{100}{103/7}
= \frac{700}{103}
\approx 6.7961\,\mathrm{A}
$$

Series currents:
$$
I_{R1} = I_{R4} = I_S \approx 6.7961\,\mathrm{A}
$$

---

## Step 4 — (c) p.d. across each series element
$$
\begin{aligned}
V_{R1} &= I_S R_1 \approx (6.7961)(5) \approx 33.9806\,\mathrm{V} \\
V_{23} &= I_S R_{23} \approx (6.7961)\left(\frac{12}{7}\right) \approx 11.6505\,\mathrm{V} \\
V_{R4} &= I_S R_4 \approx (6.7961)(8) \approx 54.3689\,\mathrm{V}
\end{aligned}
$$

Parallel voltages:
$$
V_{R2} = V_{R3} = V_{23} \approx 11.6505\,\mathrm{V}
$$

---

## Step 5 — (b) Current through each parallel resistor
$$
\begin{aligned}
I_{R2} &= \frac{V_{R2}}{R_2} \approx \frac{11.6505}{3} \approx 3.8835\,\mathrm{A} \\
I_{R3} &= \frac{V_{R3}}{R_3} \approx \frac{11.6505}{4} \approx 2.9126\,\mathrm{A}
\end{aligned}
$$

(Equivalent current-division form, optional):
$$
\begin{aligned}
I_{R2} &= I_S\frac{R_3}{R_2+R_3} \\
I_{R3} &= I_S\frac{R_2}{R_2+R_3}
\end{aligned}
$$

---

## Final answers

### (a) Supply current
$$
\boxed{I_S \approx 6.7961\,\mathrm{A}}
$$

### (b) Current through each resistor
| Resistor | Current |
|---|---:|
| $R_1$ | $I_{R1} \approx 6.7961\,\mathrm{A}$ |
| $R_2$ | $I_{R2} \approx 3.8835\,\mathrm{A}$ |
| $R_3$ | $I_{R3} \approx 2.9126\,\mathrm{A}$ |
| $R_4$ | $I_{R4} \approx 6.7961\,\mathrm{A}$ |

### (c) p.d. across each resistor
| Resistor | p.d. |
|---|---:|
| $R_1$ | $V_{R1} \approx 33.9806\,\mathrm{V}$ |
| $R_2$ | $V_{R2} \approx 11.6505\,\mathrm{V}$ |
| $R_3$ | $V_{R3} \approx 11.6505\,\mathrm{V}$ |
| $R_4$ | $V_{R4} \approx 54.3689\,\mathrm{V}$ |

---

## Quick self-check (optional)

KCL at the split:
$$
\begin{aligned}
I_S &\approx I_{R2} + I_{R3} \\
6.7961 &\approx 3.8835 + 2.9126
\end{aligned}
$$

KVL around the loop:
$$
\begin{aligned}
V_S &\approx V_{R1} + V_{23} + V_{R4} \\
100.0 &\approx 33.9806 + 11.6505 + 54.3689
\end{aligned}
$$
