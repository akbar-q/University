# 3-to-8 Decoder - EDA Playground VHDL and Lab Bench Guide

## Purpose in the Monitoring and Control System

A 3-to-8 decoder converts a three-bit binary command into one active output line. In a monitoring and control system it can select one of eight sensors, actuator channels, display positions, or alarm paths. The one-hot output reduces ambiguity because only the selected channel should be active.

This implementation uses VHDL as required by the assignment brief and is intended for simulation in EDA Playground.

## EDA Playground Deliverables

- Select **VHDL 2008** and a VHDL simulator such as GHDL in EDA Playground.
- Paste `decoder_3_to_8` into the design pane and `tb_decoder_3_to_8` into the testbench pane.
- For GHDL, enter `--vcd=wave.vcd` in **Run options**, tick **Open EPWave after run**, then run the testbench.
- Capture a waveform showing all eight input addresses and their one-hot outputs.
- Build and test the equivalent circuit on a laboratory logic trainer.

## Truth Table

`Y` is active-high and one-hot. `Y(0)` is the least significant output.

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

## VHDL Source - `decoder_3_to_8.vhd`

```vhdl
library ieee;
use ieee.std_logic_1164.all;

entity decoder_3_to_8 is
    port (
        address : in  std_logic_vector(2 downto 0);
        Y       : out std_logic_vector(7 downto 0)
    );
end entity decoder_3_to_8;

architecture rtl of decoder_3_to_8 is
begin
    with address select
        Y <= "00000001" when "000",
             "00000010" when "001",
             "00000100" when "010",
             "00001000" when "011",
             "00010000" when "100",
             "00100000" when "101",
             "01000000" when "110",
             "10000000" when "111",
             "00000000" when others;
end architecture rtl;
```

## Simulation Testbench - `tb_decoder_3_to_8.vhd`

```vhdl
library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;

entity tb_decoder_3_to_8 is
end entity tb_decoder_3_to_8;

architecture sim of tb_decoder_3_to_8 is
    signal address : std_logic_vector(2 downto 0) := "000";
    signal Y       : std_logic_vector(7 downto 0);
begin
    dut: entity work.decoder_3_to_8(rtl)
        port map (address => address, Y => Y);

    stimulus: process
    begin
        for index in 0 to 7 loop
            case index is
                when 0 => address <= "000";
                when 1 => address <= "001";
                when 2 => address <= "010";
                when 3 => address <= "011";
                when 4 => address <= "100";
                when 5 => address <= "101";
                when 6 => address <= "110";
                when 7 => address <= "111";
            end case;
            wait for 10 ns;
            assert Y = std_logic_vector(to_unsigned(2**index, Y'length))
                report "Decoder output failed" severity error;
        end loop;
        report "3-to-8 decoder test passed" severity note;
        wait;
    end process;
end architecture sim;
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