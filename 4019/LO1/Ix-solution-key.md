# LO1 — Solution Key: Find \(I_x\)

## Problem
For the circuit in Figure 1, determine the current \(I_x\) (the current flowing into/through the \(R_{10}\) branch).

## Given
- Source: \(V_s = 20\,\text{V}\)
- \(R_6 = 5\,\Omega\)
- \(R_7 = 4\,\Omega\)
- \(R_8 = 2.3\,\Omega\)
- \(R_9 = 6\,\Omega\)
- \(R_{10} = 5\,\Omega\)

## Assumptions / interpretation
- Bottom rail is ground (0 V).
- The source sets the left top node to \(+20\,\text{V}\) relative to ground.
- \(I_x\) is the current from node \(B\) into the right-hand branch through \(R_{10}\), so:
  \[
  I_x = \frac{V_B}{R_{10}}
  \]

---

## Step 1 — Combine \(R_9\) and \(R_{10}\) in parallel
\(R_9\) and \(R_{10}\) share the same top node \(B\) and the same bottom node (ground), so they are in parallel:

\[
R_{p} = R_9 \parallel R_{10}
      = \frac{R_9 R_{10}}{R_9 + R_{10}}
      = \frac{6 \cdot 5}{6 + 5}
      = \frac{30}{11}
      \approx 2.7273\,\Omega
\]

---

## Step 2 — Series with \(R_8\)
From node \(A\) to ground via the right branch, the path is \(R_8\) then \(R_p\) (series):

\[
R_{\text{right}} = R_8 + R_p
= 2.3 + \frac{30}{11}
= \frac{23}{10} + \frac{30}{11}
= \frac{553}{110}
\approx 5.0273\,\Omega
\]

---

## Step 3 — Parallel with \(R_7\) (equivalent load seen from node \(A\))
Node \(A\) goes to ground through **either** \(R_7\) or the right branch \(R_{\text{right}}\), so:

\[
R_A = R_7 \parallel R_{\text{right}}
= \frac{R_7 R_{\text{right}}}{R_7 + R_{\text{right}}}
= \frac{4 \cdot \frac{553}{110}}{4 + \frac{553}{110}}
= \frac{2212}{993}
\approx 2.2276\,\Omega
\]

---

## Step 4 — Total series resistance with \(R_6\), then total current
\(R_6\) is in series with the equivalent load \(R_A\):

\[
R_T = R_6 + R_A
= 5 + \frac{2212}{993}
= \frac{7177}{993}
\approx 7.2295\,\Omega
\]

Total current through \(R_6\) (and supplied by the source):

\[
I = \frac{V_s}{R_T}
= \frac{20}{7177/993}
= \frac{20 \cdot 993}{7177}
\approx 2.767\,\text{A}
\]

---

## Step 5 — Find node \(A\) voltage, \(V_A\)
Voltage drop across \(R_6\) is \(I R_6\), so:

\[
V_A = V_s - I R_6
= 20 - (2.767)(5)
\approx 6.166\,\text{V}
\]

(Equivalent check: \(V_A = I R_A\) gives the same result.)

---

## Step 6 — Current through the right branch (through \(R_8\) into node \(B\))
Right-branch current:

\[
I_1 = \frac{V_A}{R_{\text{right}}}
= \frac{6.166}{5.0273}
\approx 1.226\,\text{A}
\]

---

## Step 7 — Find node \(B\) voltage, \(V_B\)
Node \(B\) is the top of \(R_p\). Since \(R_8\) is in series with \(R_p\), use the drop across \(R_8\):

\[
V_B = V_A - I_1 R_8
= 6.166 - (1.226)(2.3)
\approx 3.344\,\text{V}
\]

---

## Step 8 — Compute \(I_x\) (current through \(R_{10}\))
By Ohm’s Law on \(R_{10}\):

\[
I_x = \frac{V_B}{R_{10}}
= \frac{3.344}{5}
\approx 0.669\,\text{A}
\]

---

## Final Answer
\[
\boxed{I_x \approx 0.669\,\text{A}}
\]

## Quick self-check (optional)
Current through \(R_9\):
\[
I_{R9} = \frac{V_B}{R_9} \approx \frac{3.344}{6} \approx 0.557\,\text{A}
\]
Sum at node \(B\): \(I_{R9} + I_x \approx 0.557 + 0.669 = 1.226\,\text{A}\), matching \(I_1\).
