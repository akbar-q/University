# 4-bit Up Counter - EDA Playground VHDL and Lab Bench Guide

## Purpose in the Monitoring and Control System

A 4-bit up counter counts clock events from `0000` to `1111` and then wraps to `0000`. It can count sampled sensor events, timing pulses, production items, or alarm occurrences in a digital monitoring and control system. The reset input provides a known safe start state.

This implementation uses VHDL as required by the assignment brief and is intended for simulation in EDA Playground.

## EDA Playground Deliverables

- Select **VHDL 2008** and a VHDL simulator such as GHDL in EDA Playground.
- Paste `up_counter_4bit` into the design pane and `tb_up_counter_4bit` into the testbench pane.
- For GHDL, enter `--vcd=wave.vcd` in **Run options**, tick **Open EPWave after run**, then run the testbench.
- Simulate reset, at least 16 rising clock edges, and rollover.
- Capture a waveform showing `clk`, `reset`, and `count`.
- Build an equivalent counter on the lab bench and complete the results record.

## State Table

The reset in this design is synchronous and active-high: it is sampled on the rising edge of `clk`.

| Current count | Reset | Next count after rising clock edge |
|---------------|-------|-----------------------------------|
| Any value | 1 | 0000 |
| 0000 | 0 | 0001 |
| 0001 | 0 | 0010 |
| 0010 | 0 | 0011 |
| 0011 | 0 | 0100 |
| 0100 | 0 | 0101 |
| 0101 | 0 | 0110 |
| 0110 | 0 | 0111 |
| 0111 | 0 | 1000 |
| 1000 | 0 | 1001 |
| 1001 | 0 | 1010 |
| 1010 | 0 | 1011 |
| 1011 | 0 | 1100 |
| 1100 | 0 | 1101 |
| 1101 | 0 | 1110 |
| 1110 | 0 | 1111 |
| 1111 | 0 | 0000 |

## VHDL Source - `up_counter_4bit.vhd`

```vhdl
library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;

entity up_counter_4bit is
    port (
        clk   : in  std_logic;
        reset : in  std_logic;
        count : out std_logic_vector(3 downto 0)
    );
end entity up_counter_4bit;

architecture rtl of up_counter_4bit is
    signal count_internal : unsigned(3 downto 0) := (others => '0');
begin
    process (clk)
    begin
        if rising_edge(clk) then
            if reset = '1' then
                count_internal <= (others => '0');
            else
                count_internal <= count_internal + 1;
            end if;
        end if;
    end process;

    count <= std_logic_vector(count_internal);
end architecture rtl;
```

## Simulation Testbench - `tb_up_counter_4bit.vhd`

```vhdl
library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;

entity tb_up_counter_4bit is
end entity tb_up_counter_4bit;

architecture sim of tb_up_counter_4bit is
    signal clk   : std_logic := '0';
    signal reset : std_logic := '1';
    signal count : std_logic_vector(3 downto 0);
begin
    dut: entity work.up_counter_4bit(rtl)
        port map (clk => clk, reset => reset, count => count);

    clock_generator: process
    begin
        while now < 220 ns loop
            clk <= '0'; wait for 5 ns;
            clk <= '1'; wait for 5 ns;
        end loop;
        wait;
    end process;

    stimulus: process
    begin
        wait until rising_edge(clk);
        wait for 1 ns;
        assert count = "0000" report "Reset failed" severity error;
        reset <= '0';

        for expected_count in 1 to 16 loop
            wait until rising_edge(clk);
            wait for 1 ns;
            assert unsigned(count) = to_unsigned(expected_count mod 16, count'length)
                report "Count or rollover failed" severity error;
        end loop;

        reset <= '1';
        wait until rising_edge(clk);
        wait for 1 ns;
        assert count = "0000" report "Reset recovery failed" severity error;
        report "4-bit counter test passed" severity note;
        wait;
    end process;
end architecture sim;
```

## Expected Simulation Evidence

On the first rising edge while `reset=1`, `count` becomes `0000`. After reset is released, it increments only on rising edges: `0001`, `0010`, through `1111`, then rolls over to `0000` on the sixteenth count. The later reset pulse must return `count` to `0000` at its next rising edge. Include the waveform and annotate the reset and rollover points.

## Lab Bench Implementation and Record

Use a 74HC161/74LS161 synchronous binary counter, or construct the counter from flip-flops if required. Follow the exact device data sheet for the clock, clear/reset, enable, load, and output polarity. Use a debounced clock source rather than an unconditioned push button. Connect LEDs with current-limiting resistors to `Q0` to `Q3`.

| Test | Procedure | Expected result | Observed result | Pass/Fail |
|------|-----------|-----------------|-----------------|-----------|
| Reset | Assert reset and apply a clock edge | `0000` |  |  |
| Count | Apply 1 to 15 clock edges after reset | Binary count increments once per edge |  |  |
| Rollover | Apply the sixteenth edge | `1111` changes to `0000` |  |  |
| Reset recovery | Reset while counting, then release it | Restarts from `0000` |  |  |

Record the clock source and frequency, IC part number, supply voltage, reset wiring, and whether LEDs represent active-high or active-low outputs.

## Performance and Critical Evaluation

As a sequential circuit, performance depends on clock period, clock-to-Q delay, setup time, hold time, reset timing, fan-out, and power consumption. The minimum clock period must exceed the relevant timing path; otherwise metastability or incorrect counts may occur. A mechanical push button can create multiple edges through bounce, producing skipped counts. For a high-frequency system, use timing analysis and a clean clock distribution network.

Common faults include using a variable or combinational process incorrectly for clocked logic, failing to initialise or reset the counter, applying reset between edges while expecting an immediate change in this synchronous design, and connecting an active-low hardware clear as though it were active-high. Describe only faults actually found, their cause, correction, and rerun evidence.

## Reliability and Professional Engineering

Key risks are missed or extra clock edges, reset failure, metastability from asynchronous signals, timing violations, incomplete rollover tests, and incorrect device polarity. Improve confidence with a documented clock/reset specification, simulation of reset and rollover, assertions or self-checking testbenches where supported, static timing analysis for the target hardware, lab validation using a known-frequency source, and review of the schematic and HDL.

Treat HDL, testbenches, waveforms, schematics, and test records as controlled design documentation. Reusable modules should have explicit interfaces and version history. Verify code before release, avoid unlicensed copying of IP or vendor models, and record IP ownership and licence terms. These practices support traceable maintenance, reliable deployment, and professional accountability.