# Full Adder - EasyEDA Verilog and Lab Bench Guide

## Purpose in the Monitoring and Control System

The full adder combines two one-bit digital values and a carry input. In a proposed monitoring and control system it can form part of an arithmetic logic unit used to add sensor values, calculate thresholds, increment stored measurements, or combine alarm counts. Multiple full adders can be cascaded to process multi-bit values after analogue-to-digital conversion.

> **Assessment language note:** the assignment brief specifies VHDL, whereas EasyEDA uses Verilog for its HDL simulation flow. Confirm with the assessor that an EasyEDA Verilog implementation is acceptable. The logic and verification evidence below remain applicable; only the HDL syntax differs.

## EasyEDA Deliverables

- Create an EasyEDA project named `EEE4013_Full_Adder`.
- Add a Verilog module named `full_adder`.
- Add the testbench named `tb_full_adder` and run the simulation.
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

## Verilog Source - `full_adder.v`

```verilog
module full_adder (
    input  wire A,
    input  wire B,
    input  wire Cin,
    output wire Sum,
    output wire Cout
);
    assign Sum = A ^ B ^ Cin;
    assign Cout = (A & B) | (A & Cin) | (B & Cin);
endmodule
```

## Simulation Testbench - `tb_full_adder.v`

```verilog
`timescale 1ns/1ps

module tb_full_adder;
    reg A;
    reg B;
    reg Cin;
    wire Sum;
    wire Cout;

    full_adder dut (.A(A), .B(B), .Cin(Cin), .Sum(Sum), .Cout(Cout));

    initial begin
        A = 0; B = 0; Cin = 0;
        #10 Cin = 1;
        #10 B = 1; Cin = 0;
        #10 Cin = 1;
        #10 A = 1; B = 0; Cin = 0;
        #10 Cin = 1;
        #10 B = 1; Cin = 0;
        #10 Cin = 1;
        #10 $finish;
    end

    initial begin
        $monitor("t=%0t A=%b B=%b Cin=%b Sum=%b Cout=%b", $time, A, B, Cin, Sum, Cout);
    end
endmodule
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