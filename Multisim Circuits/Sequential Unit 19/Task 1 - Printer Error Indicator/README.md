# Task 1: Copy-Machine Stop Indicator

This guide explains the supplied Task 1 workbook and Multisim circuits, then gives a step-by-step method to build and test the original, simplified, and NAND-only circuits.

The task brief is on page 1 of the [Unit 19 assignment appendix](../ND%20RQF%20L3%20Unit%2019%20Assignment%202%20(LA%20B)%20S1%202022-23%20Appendix.pdf). It asks for a truth table, an AND/OR/NOT circuit, Karnaugh-map minimisation, a NAND-only conversion, and a comparison of theory, simulation, and a physical prototype. The source [Task 1 workbook](Task%201.xlsx), its extracted data, and its embedded illustrations are retained here and in `Workbook Images/`.

## 1. What the circuit does

The circuit models a copy machine. Its output `S` must stop the machine and turn on the indicator when either the feeder tray is empty or both paper-path microswitches are active.

| Signal | Meaning | Logic 0 | Logic 1 |
|---|---|---|---|
| `P` | Paper present in the feeder tray | No paper | Paper present |
| `Q` | First paper-path microswitch | Not activated | Activated |
| `R` | Second paper-path microswitch | Not activated | Activated |
| `S` | Stop signal / indicator | Continue | Stop / indicator on |

In Boolean notation, a prime means NOT, `*` means AND, and `+` means OR. Therefore:

```text
S = P' + (Q * R)
```

Read this as: stop if paper is absent, OR if both microswitches are active. The phrase "both microswitches" is important: `Q` and `R` must be ANDed.

## 2. Truth table from the workbook

Three binary inputs produce `2^3 = 8` possible combinations. The workbook's `Truth Table` sheet contains:

| P | Q | R | S | Interpretation |
|---:|---:|---:|---:|---|
| 0 | 0 | 0 | 1 | No paper; stop |
| 0 | 0 | 1 | 1 | No paper; stop |
| 0 | 1 | 0 | 1 | No paper; stop |
| 0 | 1 | 1 | 1 | No paper; stop |
| 1 | 0 | 0 | 0 | Paper present; no jam indicated |
| 1 | 0 | 1 | 0 | Only one microswitch active |
| 1 | 1 | 0 | 0 | Only one microswitch active |
| 1 | 1 | 1 | 1 | Paper present and both switches active; stop |

The rows where `S = 1` are minterms `m0`, `m1`, `m2`, `m3`, and `m7` when `P` is the most significant bit and `R` the least significant bit. The corresponding canonical sum-of-products expression is:

```text
S = P'Q'R' + P'Q'R + P'QR' + P'QR + PQR
```

The larger circuit image is the supplied unsimplified implementation. It uses multiple 3-input AND gates, inverters, and a combining OR network to realise the truth-table cases. Use the truth table as the authority when checking it: the output must be high for exactly the five rows above.

![Unsimplified Multisim circuit](Multisim%20Diagrams/Unsimplified.png)

## 3. Build the original standard-gate circuit

The simplified AND/OR/NOT diagram is a convenient first circuit to build and test. It implements the same truth table with one inverter, one AND gate, and one OR gate.

### Components

- Three independent two-position switches for `P`, `Q`, and `R`.
- One logic-high source and one logic-low source. The supplied drawing labels these `1` and `0` (U1/U2 or U4/U5 in the different diagrams).
- One NOT gate, one 2-input AND gate, and one 2-input OR gate.
- One output indicator or logic probe at `S`.

Component names and browser categories vary a little between Multisim versions. Use the component search to find the corresponding digital logic sources, interactive SPDT switches, and primitive gates. The circuit symbols and gate input counts matter more than the displayed reference designators.

### Wiring steps

1. Start a new design and save it in the Task 1 folder with a clear name, such as `Task1-Standard-Gates.ms14`.
2. Place the logic-high and logic-low sources. Make shared `1` and `0` rails, as shown on the left of the supplied drawings.
3. Place three SPDT switches. Connect one fixed contact of every switch to logic `1` and the other fixed contact to logic `0`. The moving/common contact is that switch's output.
4. Label the three common-contact wires `P`, `Q`, and `R`. Operating a switch then selects whether its signal is 1 or 0.
5. Connect `P` to the input of a NOT gate. This produces `P'`.
6. Connect `Q` and `R` to the two inputs of an AND gate. Its output is `Q * R`, which is high only when both inputs are high.
7. Connect `P'` and `Q * R` to the two inputs of an OR gate. Label the OR output `S`.
8. Place the output indicator/probe on the `S` wire. Check that the gate pins meet the wires and that junction dots appear where branches are intended to connect.

![Simplified standard-gate Multisim circuit](Multisim%20Diagrams/Simplified.png)

### What the symbols mean

- The triangle with a small output bubble is a NOT gate. It reverses a logic level: 0 becomes 1 and 1 becomes 0.
- The D-shaped AND gate outputs 1 only when every input is 1.
- The curved OR gate outputs 1 when at least one input is 1.
- A small bubble on a gate pin means that signal is inverted. For example, an AND gate with an output bubble is a NAND gate.
- The open circles at the switches are contacts. The switch's common contact selects one of its two input contacts.
- The open circle at the far-right output is the indicator/probe used to observe `S`. The supplied screenshot displays `2.5 V` for a high output; treat that as the simulator's displayed logic level, not as a required physical supply voltage.
- Red and blue are drawing colours for the high and low rails in the supplied screenshots. Do not rely on wire colour to determine connectivity; follow the source, switch, and gate pins.

## 4. Minimise with the Karnaugh map

The workbook orders the columns in Gray-code order so neighbouring columns differ by one bit: `Q'R'` (00), `Q'R` (01), `QR` (11), and `QR'` (10). The rows are `P'` (P=0) and `P` (P=1).

| P row / QR column | 00 (`Q'R'`) | 01 (`Q'R`) | 11 (`QR`) | 10 (`QR'`) |
|---|---:|---:|---:|---:|
| `P'` (P=0) | 1 | 1 | 1 | 1 |
| `P` (P=1) | 0 | 0 | 1 | 0 |

Make the largest rectangular groups of 1s, using groups of 1, 2, 4, or 8 cells:

1. Group all four cells in the `P'` row. `Q` and `R` change within this group, so they cancel; the remaining term is `P'`.
2. Group the two vertically adjacent 1s in the `QR` column. `P` changes within this group, so it cancels; the remaining term is `QR`.
3. OR the two group terms: `S = P' + QR`.

The workbook's `K-Map Filled` and `K-Map Simplified` sheets contain the same 2-by-4 set of values. The `K-Map Sample` sheet appears to be a faulty template: it repeats `P'` for both rows and includes a cell labelled 8, although a three-variable map only has minterms `m0` through `m7`. The map above is reconstructed from the truth table and uses the correct second row `P`.

### Build and test the simplified version

The simplified circuit is the standard-gate circuit from section 3: NOT `P`, AND `Q` with `R`, then OR those two results. Build it as a separate Multisim design or duplicate the original schematic before changing it. This keeps the expanded and minimised versions available for comparison.

Run the simulation using the Run control (or the equivalent `Simulate > Run` command in your Multisim version). Click each interactive switch to step through all eight combinations in the verification table below; stop the simulation before rewiring. The simplified circuit should match the truth-table output on every row.

## 5. Convert the function to NAND gates only

The workbook includes these De Morgan relationships:

```text
(A * B)' = A' + B'
(A + B)' = A' * B'
```

The overbar applies to the whole expression in each line. A NAND gate is an AND gate with an inverted output. A small bubble on a gate diagram denotes that inversion.

![De Morgan rules from the workbook](Workbook%20Images/DeMorgan-Rules.png)

![Gate bubble equivalents from the workbook](Workbook%20Images/DeMorgan-Gate-Equivalents.jpeg)

Starting from the minimised function:

```text
S = P' + (Q * R)
  = (P * (Q * R)')'
```

The last line follows from `(A + B) = (A' * B')'`, with `A = P'` and `B = Q * R`. It maps directly to two NAND gates:

1. First NAND: inputs `Q` and `R`; output `N = (Q * R)'`.
2. Second NAND: inputs `P` and `N`; output `S = (P * N)'`.

No inverter is needed. When `P=0`, the final NAND is high. When `P=1`, it is high only if the first NAND output is 0, which happens when both `Q` and `R` are 1.

![NAND-only Multisim circuit](Multisim%20Diagrams/Demorgans.png)

### Build the NAND-only version

1. Create a separate design, for example `Task1-NAND-only.ms14`, and add the same three logic inputs and switches.
2. Place two 2-input NAND gates.
3. Connect `Q` and `R` to the first NAND. Label its output `(Q * R)'` or `N`.
4. Connect `P` and `N` to the second NAND. Label its output `S` and attach the output indicator.
5. Simulate all eight input combinations. The output must match both the truth table and the standard-gate circuit.

## 6. Simulation and comparison record

Use the switches to test each input row. Run the simulation, change the switch positions, and record the output indicator. Stop and reset the simulation if your Multisim version does not allow switch interaction while running. The expected values are identical for the expanded, standard-gate, and NAND-only designs.

| P | Q | R | Expected S | Standard gates | NAND-only | Hardware output LED 1 |
|---:|---:|---:|---:|---|---|---|
| 0 | 0 | 0 | 1 |  |  | On |
| 0 | 0 | 1 | 1 |  |  | On |
| 0 | 1 | 0 | 1 |  |  | On |
| 0 | 1 | 1 | 1 |  |  | On |
| 1 | 0 | 0 | 0 |  |  | Off |
| 1 | 0 | 1 | 0 |  |  | Off |
| 1 | 1 | 0 | 0 |  |  | Off |
| 1 | 1 | 1 | 1 |  |  | On |

### Hardware output photos

The eight photos are named for the input combination in `PQR` order. The green indicators show the input states, and the red logic-output indicator labelled `1` is interpreted as `S`. Its observed state matches the expected truth-table output for every photo.

| Inputs (`PQR`) | Observed `S` | Photo |
|---|---:|---|
| `000` | 1 (on) | <img src="Hardware%20Outputs/000.jpeg" alt="Hardware output for PQR 000; S on" width="240"> |
| `001` | 1 (on) | <img src="Hardware%20Outputs/001.jpeg" alt="Hardware output for PQR 001; S on" width="240"> |
| `010` | 1 (on) | <img src="Hardware%20Outputs/010.jpeg" alt="Hardware output for PQR 010; S on" width="240"> |
| `011` | 1 (on) | <img src="Hardware%20Outputs/011.jpeg" alt="Hardware output for PQR 011; S on" width="240"> |
| `100` | 0 (off) | <img src="Hardware%20Outputs/100.jpeg" alt="Hardware output for PQR 100; S off" width="240"> |
| `101` | 0 (off) | <img src="Hardware%20Outputs/101.jpeg" alt="Hardware output for PQR 101; S off" width="240"> |
| `110` | 0 (off) | <img src="Hardware%20Outputs/110.jpeg" alt="Hardware output for PQR 110; S off" width="240"> |
| `111` | 1 (on) | <img src="Hardware%20Outputs/111.jpeg" alt="Hardware output for PQR 111; S on" width="240"> |

For the assignment comparison, retain the theoretical value, Multisim result, and measured prototype value for each row. Use the logic family and supply specified for the physical components in your course; the 2.5 V shown by the simulation probe is not a substitute for checking the real device datasheets and lab supply requirements.

## 7. Troubleshooting

- If `S` is always high, check that the OR gate inputs are `P'` and `Q * R`, not `P` and `Q * R`.
- If the jam term is high when only one switch is high, check that `Q` and `R` enter an AND/NAND stage rather than an OR stage.
- If a switch does not change the result, check that its common contact feeds the intended signal and its two throws reach logic 1 and logic 0.
- If the output is unknown or floating, confirm that every gate input is connected and every switch selects a defined logic source.
- If only some combinations fail, compare the live values against the eight truth-table rows; this often reveals swapped inputs or a misplaced junction.
- In the NAND-only circuit, the first gate must produce `(Q * R)'`. Its output feeds the second NAND together with uncomplemented `P`.

## Extracted workbook contents

The `Task 1.xlsx` workbook contains five sheets:

- `Truth Table`: the eight input/output combinations transcribed in section 2, plus the note `2^3 = 2 * 2 * 2 = 8`.
- `K-Map Sample`: Gray-code headings for `Q'R'`, `Q'R`, `QR`, `QR'`; its template values and repeated row label are inconsistent, as noted in section 4.
- `K-Map Filled`: the map values are `1 1 1 1` for `P=0` and `0 0 1 0` for `P=1`.
- `K-Map Simplified`: the same map values and simplified expression `f = P' + Q * R`.
- `De Morgans Theorem`: the conversion to NAND form, ending with `f = [P * (Q * R)']'`, plus the two explanatory images preserved in `Workbook Images/`.

The supplied Multisim files are kept in this folder: `Task1-LogicUnsimpl.ms14` and its security copy. The three reference screenshots are in `Multisim Diagrams/`.