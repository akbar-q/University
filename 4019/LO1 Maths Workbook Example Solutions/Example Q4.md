# LO1 — Solution Key: Figure 4 (Bridge Circuit using KCL)

> **Math rendering note:** Uses `$...$` (inline) and `$$...$$` (display). If it shows as plain text, your Markdown viewer doesn’t support MathJax/KaTeX.

## Problem
Apply Kirchhoff’s Current Law (KCL) to analyse the operation of the bridge circuit and determine the current flowing through each resistor.

## Given (from Figure 4)
- Supply voltage: $V_S = 54\,\mathrm{V}$
- $R_{TL} = 2\,\Omega$ (top-left)
- $R_{BL} = 11\,\Omega$ (bottom-left)
- $R_{TR} = 14\,\Omega$ (top-right)
- $R_{BR} = 3\,\Omega$ (bottom-right)
- $R_{B} = 32\,\Omega$ (bridge between the two mid-nodes)

## Circuit diagram (ASCII)
```text
		  o (top node)  V_T
		 / \
	 [2Ω]/   \[14Ω]
	    /     \
	  o---[32Ω]---o
	   \         /
	 [11Ω]\   /[3Ω]
		 \ /
		  o (bottom node) 0V

	Supply: V_S = 54 V between top and bottom nodes
```

---

## Step 1 — Label node voltages
Take the bottom node as the reference (ground):

$$
V_B = 0\,\mathrm{V}
$$

The top node is set by the source:

$$
V_T = 54\,\mathrm{V}
$$

Let:
- $V_L$ = voltage at the left mid-node (between $2\,\Omega$ and $11\,\Omega$)
- $V_R$ = voltage at the right mid-node (between $14\,\Omega$ and $3\,\Omega$)

---

## Step 2 — Write KCL at node $V_L$
Sum of currents leaving node $V_L$ equals zero:

$$
\frac{V_L - V_T}{R_{TL}} + \frac{V_L - V_B}{R_{BL}} + \frac{V_L - V_R}{R_B} = 0
$$

Substitute values ($V_T=54$, $V_B=0$):

$$
\frac{V_L - 54}{2} + \frac{V_L}{11} + \frac{V_L - V_R}{32} = 0
$$

Rearrange (expanded form):

$$
438 V_L - 22 V_R = 19008
$$

---

## Step 3 — Write KCL at node $V_R$
Sum of currents leaving node $V_R$ equals zero:

$$
\frac{V_R - V_T}{R_{TR}} + \frac{V_R - V_B}{R_{BR}} + \frac{V_R - V_L}{R_B} = 0
$$

Substitute values ($V_T=54$, $V_B=0$):

$$
\frac{V_R - 54}{14} + \frac{V_R}{3} + \frac{V_R - V_L}{32} = 0
$$

Rearrange (expanded form):

$$
-42 V_L + 586 V_R = 5184
$$

---

## Step 4 — Solve for the node voltages
Solving the two simultaneous equations gives:

$$
V_R = 12\,\mathrm{V}
$$

$$
V_L = 44\,\mathrm{V}
$$

---

## Step 5 — Currents through each resistor
Use Ohm’s Law with a clear direction convention:
- Downwards from top node to mid-node for the top resistors
- Downwards from mid-node to bottom node for the bottom resistors
- Left-to-right for the bridge resistor ($32\,\Omega$)

### Top-left resistor ($2\,\Omega$)
$$
I_{2\Omega} = \frac{V_T - V_L}{2} = \frac{54 - 44}{2} = 5\,\mathrm{A}
$$

### Bottom-left resistor ($11\,\Omega$)
$$
I_{11\Omega} = \frac{V_L - V_B}{11} = \frac{44}{11} = 4\,\mathrm{A}
$$

### Top-right resistor ($14\,\Omega$)
$$
I_{14\Omega} = \frac{V_T - V_R}{14} = \frac{54 - 12}{14} = 3\,\mathrm{A}
$$

### Bottom-right resistor ($3\,\Omega$)
$$
I_{3\Omega} = \frac{V_R - V_B}{3} = \frac{12}{3} = 4\,\mathrm{A}
$$

### Bridge resistor ($32\,\Omega$)
$$
I_{32\Omega} = \frac{V_L - V_R}{32} = \frac{44 - 12}{32} = 1\,\mathrm{A}
$$

Direction note: since $V_L > V_R$, the $1\,\mathrm{A}$ flows from **left mid-node to right mid-node**.

---

## Final answers (currents)
| Resistor | Current | Direction (as defined above) |
|---|---:|---|
| $2\,\Omega$ | $5\,\mathrm{A}$ | top node $\rightarrow$ left mid-node |
| $11\,\Omega$ | $4\,\mathrm{A}$ | left mid-node $\rightarrow$ bottom node |
| $14\,\Omega$ | $3\,\mathrm{A}$ | top node $\rightarrow$ right mid-node |
| $3\,\Omega$ | $4\,\mathrm{A}$ | right mid-node $\rightarrow$ bottom node |
| $32\,\Omega$ | $1\,\mathrm{A}$ | left mid-node $\rightarrow$ right mid-node |

---

## Quick self-check (optional)
Supply current should equal the sum of currents leaving the top node:

$$
I_S = I_{2\Omega} + I_{14\Omega}
$$

$$
I_S = 5 + 3 = 8\,\mathrm{A}
$$

KCL at the left mid-node ($5\,\mathrm{A}$ in splits into $4\,\mathrm{A}$ down and $1\,\mathrm{A}$ across):

$$
5 = 4 + 1
$$

KCL at the right mid-node ($3\,\mathrm{A}$ in from top plus $1\,\mathrm{A}$ in from bridge equals $4\,\mathrm{A}$ down):

$$
3 + 1 = 4
$$
