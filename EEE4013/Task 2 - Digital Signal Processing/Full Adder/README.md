# Full Adder - EDA Playground VHDL and Lab Bench Guide

## Purpose in the Monitoring and Control System

The full adder combines two one-bit digital values and a carry input. In a proposed monitoring and control system it can form part of an arithmetic logic unit used to add sensor values, calculate thresholds, increment stored measurements, or combine alarm counts. Multiple full adders can be cascaded to process multi-bit values after analogue-to-digital conversion.

This implementation uses VHDL as required by the assignment brief and is intended for simulation in EDA Playground.

## EDA Playground Deliverables

- Select **VHDL 2008** and a VHDL simulator such as GHDL in EDA Playground.
- Paste `full_adder` into the design pane and `tb_full_adder` into the testbench pane.
- For GHDL, enter `--vcd=wave.vcd` in **Run options**, tick **Open EPWave after run**, then run the testbench.
- Save a screenshot of the waveform with input and output signal names visible.
- Build the equivalent gate-level circuit on the lab bench and record the results table.

## Truth Table

| A | B | Cin | Sum | Cout |
|---|---|-----|-----|------|
| 0 | 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 1 | 0 |
| 0 | 1 | 0 | 1 | 0 |
| 0 | 1 | 1 | 0 | 1 |
| 1 | 0 | 0 | 1 | 0 |
| 1 | 0 | 1 | 0 | 1 |
| 1 | 1 | 0 | 0 | 1 |
| 1 | 1 | 1 | 1 | 1 |

The governing equations are $Sum=A\oplus B\oplus Cin$ and $Cout=AB+ACin+BCin$.

## VHDL Source - `full_adder.vhd`

```vhdl
library ieee;
use ieee.std_logic_1164.all;

entity full_adder is
    port (
        A    : in  std_logic;
        B    : in  std_logic;
        Cin  : in  std_logic;
        Sum  : out std_logic;
        Cout : out std_logic
    );
end entity full_adder;

architecture rtl of full_adder is
begin
    Sum  <= A xor B xor Cin;
    Cout <= (A and B) or (A and Cin) or (B and Cin);
end architecture rtl;
```

## Simulation Testbench - `tb_full_adder.vhd`

```vhdl
library ieee;
use ieee.std_logic_1164.all;

entity tb_full_adder is
end entity tb_full_adder;

architecture sim of tb_full_adder is
    signal A, B, Cin : std_logic := '0';
    signal Sum, Cout : std_logic;
begin
    dut: entity work.full_adder(rtl)
        port map (A => A, B => B, Cin => Cin, Sum => Sum, Cout => Cout);

    stimulus: process
    begin
        A <= '0'; B <= '0'; Cin <= '0'; wait for 10 ns;
        assert Sum = '0' and Cout = '0' report "000 failed" severity error;
        Cin <= '1'; wait for 10 ns;
        assert Sum = '1' and Cout = '0' report "001 failed" severity error;
        B <= '1'; Cin <= '0'; wait for 10 ns;
        assert Sum = '1' and Cout = '0' report "010 failed" severity error;
        Cin <= '1'; wait for 10 ns;
        assert Sum = '0' and Cout = '1' report "011 failed" severity error;
        A <= '1'; B <= '0'; Cin <= '0'; wait for 10 ns;
        assert Sum = '1' and Cout = '0' report "100 failed" severity error;
        Cin <= '1'; wait for 10 ns;
        assert Sum = '0' and Cout = '1' report "101 failed" severity error;
        B <= '1'; Cin <= '0'; wait for 10 ns;
        assert Sum = '0' and Cout = '1' report "110 failed" severity error;
        Cin <= '1'; wait for 10 ns;
        assert Sum = '1' and Cout = '1' report "111 failed" severity error;
        report "Full adder test passed" severity note;
        wait;
    end process;
end architecture sim;
```

## Expected Simulation Evidence

At each 10 ns interval, compare `Sum` and `Cout` against the truth table. The waveform should show `Cout=1` for inputs `011`, `101`, `110`, and `111`; `Sum=1` when an odd number of inputs are high. Include the waveform screenshot and a table stating whether every vector passed.

## Lab Bench Implementation and Record

Build the circuit with two XOR gates, two AND gates and one OR gate, or use a 74HC283/74LS83 adder IC if the laboratory specification permits it. Use switches or a logic trainer for `A`, `B`, and `Cin`; connect LEDs with suitable current-limiting resistors to `Sum` and `Cout`.

| A | B | Cin | Expected Sum | Expected Cout | Observed Sum | Observed Cout | Pass/Fail |
|---|---|-----|--------------|---------------|--------------|---------------|-----------|
| 0 | 0 | 0 | 0 | 0 |  |  |  |
| 0 | 0 | 1 | 1 | 0 |  |  |  |
| 0 | 1 | 0 | 1 | 0 |  |  |  |
| 0 | 1 | 1 | 0 | 1 |  |  |  |
| 1 | 0 | 0 | 1 | 0 |  |  |  |
| 1 | 0 | 1 | 0 | 1 |  |  |  |
| 1 | 1 | 0 | 0 | 1 |  |  |  |
| 1 | 1 | 1 | 1 | 1 |  |  |  |

Record the supply voltage, IC part numbers, date, equipment used, and any differences between observed LED states and the predicted outputs. Do not leave CMOS inputs floating.

## Performance and Critical Evaluation

The full adder is combinational: outputs change after propagation delay and do not require a clock. Its key constraints are logic propagation delay, fan-out, power consumption, noise margin, and glitch risk when several inputs change at slightly different times. A ripple-carry multi-bit adder accumulates carry delay, so a faster architecture may be required for high-speed processing.

Document any issues actually encountered. Common examples are a missing parenthesis in the carry expression, incorrect XOR/OR substitution, reversed LED polarity, unconnected power pins, or changing inputs too quickly to observe. State the symptom, root cause, corrective action, and the post-fix test that proves resolution.

## Reliability and Professional Engineering

Risks include an incorrect Boolean expression, wiring faults, floating inputs, inadequate test vectors, and unverified timing. Mitigate them through truth-table review, exhaustive simulation of all eight input combinations, peer code review, a documented lab test record, and independent verification against the Boolean equations. Retain version-controlled source files, waveform evidence, and circuit diagrams. Reusable, clearly named modules reduce duplicated design effort; record the ownership and licence of any third-party IP or vendor library used.