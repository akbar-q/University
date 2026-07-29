# 3-to-8 Decoder - EasyEDA Verilog and Lab Bench Guide

## Purpose in the Monitoring and Control System

A 3-to-8 decoder converts a three-bit binary command into one active output line. In a monitoring and control system it can select one of eight sensors, actuator channels, display positions, or alarm paths. The one-hot output reduces ambiguity because only the selected channel should be active.

> **Assessment language note:** the assignment brief requests VHDL. EasyEDA's HDL workflow uses Verilog, so obtain assessor approval for this syntax or translate the verified logic into VHDL for submission.

## EasyEDA Deliverables

- Create an EasyEDA project named `EEE4013_Decoder`.
- Add `decoder_3_to_8` and simulate it using `tb_decoder_3_to_8`.
- Capture a waveform showing all eight input addresses and their one-hot outputs.
- Build and test the equivalent circuit on a laboratory logic trainer.

## Truth Table

`Y` is active-high and one-hot. `Y[0]` is the least significant output.

| A2 | A1 | A0 | Active output |
|----|----|----|---------------|
| 0 | 0 | 0 | Y0 |
| 0 | 0 | 1 | Y1 |
| 0 | 1 | 0 | Y2 |
| 0 | 1 | 1 | Y3 |
| 1 | 0 | 0 | Y4 |
| 1 | 0 | 1 | Y5 |
| 1 | 1 | 0 | Y6 |
| 1 | 1 | 1 | Y7 |

## Verilog Source - `decoder_3_to_8.v`

```verilog
module decoder_3_to_8 (
    input  wire [2:0] address,
    output reg  [7:0] Y
);
    always @(*) begin
        Y = 8'b00000000;
        case (address)
            3'b000: Y = 8'b00000001;
            3'b001: Y = 8'b00000010;
            3'b010: Y = 8'b00000100;
            3'b011: Y = 8'b00001000;
            3'b100: Y = 8'b00010000;
            3'b101: Y = 8'b00100000;
            3'b110: Y = 8'b01000000;
            3'b111: Y = 8'b10000000;
            default: Y = 8'b00000000;
        endcase
    end
endmodule
```

## Simulation Testbench - `tb_decoder_3_to_8.v`

```verilog
`timescale 1ns/1ps

module tb_decoder_3_to_8;
    reg [2:0] address;
    wire [7:0] Y;

    decoder_3_to_8 dut (.address(address), .Y(Y));

    initial begin
        address = 3'b000;
        #10 address = 3'b001;
        #10 address = 3'b010;
        #10 address = 3'b011;
        #10 address = 3'b100;
        #10 address = 3'b101;
        #10 address = 3'b110;
        #10 address = 3'b111;
        #10 $finish;
    end

    initial begin
        $monitor("t=%0t address=%b Y=%b", $time, address, Y);
    end
endmodule
```

## Expected Simulation Evidence

Each 10 ns address step must activate exactly one `Y` bit. For example, `address=101` must produce `Y=00100000`; no other bit may be high. Attach the simulation waveform and compare every row with the truth table.

## Lab Bench Implementation and Record

Use a 74HC138/74LS138 decoder where permitted. Note that this device commonly has active-low outputs and enable pins: connect enables according to the data sheet and either invert the outputs or record the active-low convention. Connect three switches to the inputs and use LEDs with current-limiting resistors on the outputs.

| A2 | A1 | A0 | Expected selected output | Observed output/LED | One output only? | Pass/Fail |
|----|----|----|--------------------------|---------------------|------------------|-----------|
| 0 | 0 | 0 | Y0 |  |  |  |
| 0 | 0 | 1 | Y1 |  |  |  |
| 0 | 1 | 0 | Y2 |  |  |  |
| 0 | 1 | 1 | Y3 |  |  |  |
| 1 | 0 | 0 | Y4 |  |  |  |
| 1 | 0 | 1 | Y5 |  |  |  |
| 1 | 1 | 0 | Y6 |  |  |  |
| 1 | 1 | 1 | Y7 |  |  |  |

## Performance and Critical Evaluation

This is combinational logic. Assess propagation delay from address input to output, fan-out, supply-voltage compatibility, power dissipation, and transient glitches when address bits change asynchronously. A decoder should not directly enable hazardous outputs without an interlock, because a changing address can briefly activate an unintended line.

Typical errors include treating a 74HC138's active-low outputs as active-high, omitting its enable wiring, mixing output bit order, or missing a default branch that leads to simulation unknowns. Report the actual error, cause, correction, and repeat test. Use exhaustive simulation for all eight addresses and verify the one-hot property.

## Reliability and Professional Engineering

Digital selection failures can choose the wrong actuator or sensor channel. Use enable interlocks, synchronise control signals where needed, debounce manual switches, and apply boundary and fault-injection tests. Maintain a reviewed truth table, schematic, source revision history, waveform captures, and lab record. Design modules should be reusable and documented with their input/output convention; third-party IP, vendor symbols, and library models must have recorded ownership, licence, version, and suitability for the intended deployment.