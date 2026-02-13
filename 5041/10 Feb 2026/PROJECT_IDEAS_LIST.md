# Project Ideas List (Research + Hardware)

This file consolidates project ideas around renewables, power electronics, microgrids, EV integration, and embedded hardware builds. Each item includes research starting points, an ease/complexity estimate, and prerequisite knowledge.

---

## A) Research-Oriented MATLAB/Simulink Projects

### Solar PV & MPPT (Advanced)

1. **AI-Based MPPT (ANN / ANFIS / Deep Learning)**
   Research start: Start by building a validated PV array model (datasheet-based) and a DC-DC converter in Simulink/Simscape, then reproduce 1-2 baseline MPPT methods (P and O, IncCond) on standard irradiance profiles before adding the novel controller and benchmarking energy yield.
   Complexity: Medium
   Good prerequisites: PV I-V modeling, DC-DC converters, control basics (PI), Simulink/Simscape Electrical, efficiency/energy yield metrics

2. **Reinforcement Learning MPPT under Partial Shading**
   Research start: Start by building a validated PV array model (datasheet-based) and a DC-DC converter in Simulink/Simscape, then reproduce 1-2 baseline MPPT methods (P and O, IncCond) on standard irradiance profiles before adding the novel controller and benchmarking energy yield.
   Complexity: Medium
   Good prerequisites: PV I-V modeling, DC-DC converters, control basics (PI), Simulink/Simscape Electrical, efficiency/energy yield metrics

3. **Hybrid MPPT (PSO + Incremental Conductance)**
   Research start: Start by building a validated PV array model (datasheet-based) and a DC-DC converter in Simulink/Simscape, then reproduce 1-2 baseline MPPT methods (P and O, IncCond) on standard irradiance profiles before adding the novel controller and benchmarking energy yield. Define an objective function and constraints up front (limits, ripple/THD, stability margins) and run sensitivity studies so the optimization result is defensible.
   Complexity: Medium
   Good prerequisites: PV I-V modeling, DC-DC converters, control basics (PI), Simulink/Simscape Electrical, efficiency/energy yield metrics

4. **Fractional Order MPPT Controller**
   Research start: Start by building a validated PV array model (datasheet-based) and a DC-DC converter in Simulink/Simscape, then reproduce 1-2 baseline MPPT methods (P and O, IncCond) on standard irradiance profiles before adding the novel controller and benchmarking energy yield.
   Complexity: High
   Good prerequisites: PV I-V modeling, DC-DC converters, control basics (PI), Simulink/Simscape Electrical, efficiency/energy yield metrics

5. **Chaos-Based MPPT Optimization**
   Research start: Start by building a validated PV array model (datasheet-based) and a DC-DC converter in Simulink/Simscape, then reproduce 1-2 baseline MPPT methods (P and O, IncCond) on standard irradiance profiles before adding the novel controller and benchmarking energy yield. Define an objective function and constraints up front (limits, ripple/THD, stability margins) and run sensitivity studies so the optimization result is defensible.
   Complexity: Medium
   Good prerequisites: PV I-V modeling, DC-DC converters, control basics (PI), Simulink/Simscape Electrical, efficiency/energy yield metrics

6. **Distributed MPPT (DMPPT) for PV Arrays**
   Research start: Start by building a validated PV array model (datasheet-based) and a DC-DC converter in Simulink/Simscape, then reproduce 1-2 baseline MPPT methods (P and O, IncCond) on standard irradiance profiles before adding the novel controller and benchmarking energy yield.
   Complexity: Medium
   Good prerequisites: PV I-V modeling, DC-DC converters, control basics (PI), Simulink/Simscape Electrical, efficiency/energy yield metrics

7. **MPPT for Floating Solar Systems**
   Research start: Start by building a validated PV array model (datasheet-based) and a DC-DC converter in Simulink/Simscape, then reproduce 1-2 baseline MPPT methods (P and O, IncCond) on standard irradiance profiles before adding the novel controller and benchmarking energy yield.
   Complexity: Medium
   Good prerequisites: PV I-V modeling, DC-DC converters, control basics (PI), Simulink/Simscape Electrical, efficiency/energy yield metrics

8. **MPPT under Fast Irradiance Variations**
   Research start: Start by building a validated PV array model (datasheet-based) and a DC-DC converter in Simulink/Simscape, then reproduce 1-2 baseline MPPT methods (P and O, IncCond) on standard irradiance profiles before adding the novel controller and benchmarking energy yield.
   Complexity: Medium
   Good prerequisites: PV I-V modeling, DC-DC converters, control basics (PI), Simulink/Simscape Electrical, efficiency/energy yield metrics

9. **Comparative Study of 10 MPPT Algorithms**
   Research start: Start by building a validated PV array model (datasheet-based) and a DC-DC converter in Simulink/Simscape, then reproduce 1-2 baseline MPPT methods (P and O, IncCond) on standard irradiance profiles before adding the novel controller and benchmarking energy yield. Keep one common testbench and report the same metrics (e.g., THD, tracking efficiency, settling time, overshoot, losses) so the comparison is fair.
   Complexity: Medium
   Good prerequisites: PV I-V modeling, DC-DC converters, control basics (PI), Simulink/Simscape Electrical, efficiency/energy yield metrics

10. **FPGA-based MPPT Control (Simulink HDL workflow)**
   Research start: Start by building a validated PV array model (datasheet-based) and a DC-DC converter in Simulink/Simscape, then reproduce 1-2 baseline MPPT methods (P and O, IncCond) on standard irradiance profiles before adding the novel controller and benchmarking energy yield. Plan for fixed-point effects (scaling, overflow) and choose sampling times early; validate that the control loop meets timing/resource limits.
   Complexity: High
   Good prerequisites: PV I-V modeling, DC-DC converters, control basics (PI), Simulink/Simscape Electrical, efficiency/energy yield metrics

### PV Grid-Connected Systems

11. **Grid-Connected PV with LCL Filter Design Optimization**
   Research start: Start with a minimal grid-tied inverter model: DC link -> inverter -> L/LCL filter -> grid, then implement synchronization (PLL) and inner current control; next add the specific feature (filter optimization, FRT, reactive support) and evaluate THD, stability margins, and disturbance response. Define an objective function and constraints up front (limits, ripple/THD, stability margins) and run sensitivity studies so the optimization result is defensible.
   Complexity: High
   Good prerequisites: Three-phase fundamentals, PWM, inverter current control, PLL concepts, filters (L/LCL), power quality (THD), grid codes (high level)

12. **Single-Phase vs Three-Phase Grid-Tied Inverter Comparison**
   Research start: Start with a minimal grid-tied inverter model: DC link -> inverter -> L/LCL filter -> grid, then implement synchronization (PLL) and inner current control; next add the specific feature (filter optimization, FRT, reactive support) and evaluate THD, stability margins, and disturbance response. Keep one common testbench and report the same metrics (e.g., THD, tracking efficiency, settling time, overshoot, losses) so the comparison is fair.
   Complexity: Medium
   Good prerequisites: Three-phase fundamentals, PWM, inverter current control, PLL concepts, filters (L/LCL), power quality (THD), grid codes (high level)

13. **Harmonic Mitigation using Active Filtering**
   Research start: Start with a minimal grid-tied inverter model: DC link -> inverter -> L/LCL filter -> grid, then implement synchronization (PLL) and inner current control; next add the specific feature (filter optimization, FRT, reactive support) and evaluate THD, stability margins, and disturbance response.
   Complexity: Medium
   Good prerequisites: Three-phase fundamentals, PWM, inverter current control, PLL concepts, filters (L/LCL), power quality (THD), grid codes (high level)

14. **Transformerless PV Inverter Topologies (H5, HERIC, etc.)**
   Research start: Start with a minimal grid-tied inverter model: DC link -> inverter -> L/LCL filter -> grid, then implement synchronization (PLL) and inner current control; next add the specific feature (filter optimization, FRT, reactive support) and evaluate THD, stability margins, and disturbance response.
   Complexity: High
   Good prerequisites: Three-phase fundamentals, PWM, inverter current control, PLL concepts, filters (L/LCL), power quality (THD), grid codes (high level)

15. **PV System with Grid Fault Ride Through (FRT) Capability**
   Research start: Start with a minimal grid-tied inverter model: DC link -> inverter -> L/LCL filter -> grid, then implement synchronization (PLL) and inner current control; next add the specific feature (filter optimization, FRT, reactive support) and evaluate THD, stability margins, and disturbance response. Include standard disturbance cases (voltage sag/swell, frequency steps) and verify protection limits, current saturation handling, and recovery behavior.
   Complexity: High
   Good prerequisites: Three-phase fundamentals, PWM, inverter current control, PLL concepts, filters (L/LCL), power quality (THD), grid codes (high level)

16. **Smart Inverter with Reactive Power Support**
   Research start: Start with a minimal grid-tied inverter model: DC link -> inverter -> L/LCL filter -> grid, then implement synchronization (PLL) and inner current control; next add the specific feature (filter optimization, FRT, reactive support) and evaluate THD, stability margins, and disturbance response.
   Complexity: Medium
   Good prerequisites: Three-phase fundamentals, PWM, inverter current control, PLL concepts, filters (L/LCL), power quality (THD), grid codes (high level)

17. **PV Integration with Weak Grid Modeling**
   Research start: Start with a minimal grid-tied inverter model: DC link -> inverter -> L/LCL filter -> grid, then implement synchronization (PLL) and inner current control; next add the specific feature (filter optimization, FRT, reactive support) and evaluate THD, stability margins, and disturbance response.
   Complexity: High
   Good prerequisites: Three-phase fundamentals, PWM, inverter current control, PLL concepts, filters (L/LCL), power quality (THD), grid codes (high level)

18. **Islanding Detection Techniques Comparison**
   Research start: Start with a minimal grid-tied inverter model: DC link -> inverter -> L/LCL filter -> grid, then implement synchronization (PLL) and inner current control; next add the specific feature (filter optimization, FRT, reactive support) and evaluate THD, stability margins, and disturbance response. Keep one common testbench and report the same metrics (e.g., THD, tracking efficiency, settling time, overshoot, losses) so the comparison is fair.
   Complexity: High
   Good prerequisites: Three-phase fundamentals, PWM, inverter current control, PLL concepts, filters (L/LCL), power quality (THD), grid codes (high level)

19. **Grid Synchronization using SRF-PLL vs SOGI-PLL**
   Research start: Start with a minimal grid-tied inverter model: DC link -> inverter -> L/LCL filter -> grid, then implement synchronization (PLL) and inner current control; next add the specific feature (filter optimization, FRT, reactive support) and evaluate THD, stability margins, and disturbance response. Keep one common testbench and report the same metrics (e.g., THD, tracking efficiency, settling time, overshoot, losses) so the comparison is fair. Test with harmonics, unbalance, and frequency ramps; track phase error, lock time, and stability under noisy measurements.
   Complexity: High
   Good prerequisites: Three-phase fundamentals, PWM, inverter current control, PLL concepts, filters (L/LCL), power quality (THD), grid codes (high level)

20. **Model Predictive Control (MPC) for Grid-Tied Inverter**
   Research start: Start with a minimal grid-tied inverter model: DC link -> inverter -> L/LCL filter -> grid, then implement synchronization (PLL) and inner current control; next add the specific feature (filter optimization, FRT, reactive support) and evaluate THD, stability margins, and disturbance response.
   Complexity: High
   Good prerequisites: Three-phase fundamentals, PWM, inverter current control, PLL concepts, filters (L/LCL), power quality (THD), grid codes (high level)

### PV + Energy Storage

21. **Bidirectional DC-DC Converter for PV-Battery System**
   Research start: Start by selecting a battery model (RC equivalent circuit) and identifying parameters from literature or simple test data; implement charge/discharge profiles and validate SOC tracking, then layer in the converter control and the EMS/estimator and quantify accuracy, efficiency, and battery stress.
   Complexity: Low-Medium
   Good prerequisites: Battery equivalent circuit models, CC-CV charging, estimation basics (KF/EKF), protections, DC-DC conversion, data logging

22. **PV + Battery + Supercapacitor Hybrid Storage**
   Research start: Start by selecting a battery model (RC equivalent circuit) and identifying parameters from literature or simple test data; implement charge/discharge profiles and validate SOC tracking, then layer in the converter control and the EMS/estimator and quantify accuracy, efficiency, and battery stress.
   Complexity: Low-Medium
   Good prerequisites: Battery equivalent circuit models, CC-CV charging, estimation basics (KF/EKF), protections, DC-DC conversion, data logging

23. **Energy Management System (EMS) for PV Microgrid**
   Research start: Start by selecting a battery model (RC equivalent circuit) and identifying parameters from literature or simple test data; implement charge/discharge profiles and validate SOC tracking, then layer in the converter control and the EMS/estimator and quantify accuracy, efficiency, and battery stress.
   Complexity: Medium
   Good prerequisites: Battery equivalent circuit models, CC-CV charging, estimation basics (KF/EKF), protections, DC-DC conversion, data logging

24. **SOC Estimation using Kalman Filter**
   Research start: Start by selecting a battery model (RC equivalent circuit) and identifying parameters from literature or simple test data; implement charge/discharge profiles and validate SOC tracking, then layer in the converter control and the EMS/estimator and quantify accuracy, efficiency, and battery stress. Inject realistic sensor noise/bias and validate estimator consistency (innovation, drift) rather than only ideal simulations.
   Complexity: Medium
   Good prerequisites: Battery equivalent circuit models, CC-CV charging, estimation basics (KF/EKF), protections, DC-DC conversion, data logging

25. **Battery Thermal Modeling and Protection**
   Research start: Start by selecting a battery model (RC equivalent circuit) and identifying parameters from literature or simple test data; implement charge/discharge profiles and validate SOC tracking, then layer in the converter control and the EMS/estimator and quantify accuracy, efficiency, and battery stress.
   Complexity: Medium
   Good prerequisites: Battery equivalent circuit models, CC-CV charging, estimation basics (KF/EKF), protections, DC-DC conversion, data logging

26. **Vehicle-to-Grid (V2G) with Solar Charging**
   Research start: Start by selecting a battery model (RC equivalent circuit) and identifying parameters from literature or simple test data; implement charge/discharge profiles and validate SOC tracking, then layer in the converter control and the EMS/estimator and quantify accuracy, efficiency, and battery stress.
   Complexity: Low-Medium
   Good prerequisites: Battery equivalent circuit models, CC-CV charging, estimation basics (KF/EKF), protections, DC-DC conversion, data logging

27. **DC Microgrid with PV and Storage**
   Research start: Start by selecting a battery model (RC equivalent circuit) and identifying parameters from literature or simple test data; implement charge/discharge profiles and validate SOC tracking, then layer in the converter control and the EMS/estimator and quantify accuracy, efficiency, and battery stress.
   Complexity: Low-Medium
   Good prerequisites: Battery equivalent circuit models, CC-CV charging, estimation basics (KF/EKF), protections, DC-DC conversion, data logging

28. **PV Powered EV Charging Station**
   Research start: Start by selecting a battery model (RC equivalent circuit) and identifying parameters from literature or simple test data; implement charge/discharge profiles and validate SOC tracking, then layer in the converter control and the EMS/estimator and quantify accuracy, efficiency, and battery stress.
   Complexity: Low-Medium
   Good prerequisites: Battery equivalent circuit models, CC-CV charging, estimation basics (KF/EKF), protections, DC-DC conversion, data logging

29. **Peak Shaving using Solar + Battery**
   Research start: Start by selecting a battery model (RC equivalent circuit) and identifying parameters from literature or simple test data; implement charge/discharge profiles and validate SOC tracking, then layer in the converter control and the EMS/estimator and quantify accuracy, efficiency, and battery stress.
   Complexity: Low-Medium
   Good prerequisites: Battery equivalent circuit models, CC-CV charging, estimation basics (KF/EKF), protections, DC-DC conversion, data logging

30. **Economic Optimization of PV Storage Systems**
   Research start: Start by selecting a battery model (RC equivalent circuit) and identifying parameters from literature or simple test data; implement charge/discharge profiles and validate SOC tracking, then layer in the converter control and the EMS/estimator and quantify accuracy, efficiency, and battery stress. Define an objective function and constraints up front (limits, ripple/THD, stability margins) and run sensitivity studies so the optimization result is defensible.
   Complexity: Medium
   Good prerequisites: Battery equivalent circuit models, CC-CV charging, estimation basics (KF/EKF), protections, DC-DC conversion, data logging

### Wind Energy

31. **Wind Turbine Modeling (DFIG vs PMSG Comparison)**
   Research start: Start by reproducing a standard wind turbine + generator model (Cp-lambda curve, drive-train, generator/converter) from a textbook or a well-cited paper; validate power curves, then implement the controller (vector control, pitch, LVRT) and compare performance across wind/gust and grid fault scenarios. Keep one common testbench and report the same metrics (e.g., THD, tracking efficiency, settling time, overshoot, losses) so the comparison is fair.
   Complexity: High
   Good prerequisites: Wind turbine aerodynamics (Cp-lambda), generator models (DFIG/PMSG), vector control, converters, grid interconnection basics

32. **Variable Speed Wind Turbine using Vector Control**
   Research start: Start by reproducing a standard wind turbine + generator model (Cp-lambda curve, drive-train, generator/converter) from a textbook or a well-cited paper; validate power curves, then implement the controller (vector control, pitch, LVRT) and compare performance across wind/gust and grid fault scenarios.
   Complexity: Low-Medium
   Good prerequisites: Wind turbine aerodynamics (Cp-lambda), generator models (DFIG/PMSG), vector control, converters, grid interconnection basics

33. **Pitch Angle Control Optimization**
   Research start: Start by reproducing a standard wind turbine + generator model (Cp-lambda curve, drive-train, generator/converter) from a textbook or a well-cited paper; validate power curves, then implement the controller (vector control, pitch, LVRT) and compare performance across wind/gust and grid fault scenarios. Define an objective function and constraints up front (limits, ripple/THD, stability margins) and run sensitivity studies so the optimization result is defensible.
   Complexity: Medium
   Good prerequisites: Wind turbine aerodynamics (Cp-lambda), generator models (DFIG/PMSG), vector control, converters, grid interconnection basics

34. **Grid Integration of DFIG under Fault Conditions**
   Research start: Start by reproducing a standard wind turbine + generator model (Cp-lambda curve, drive-train, generator/converter) from a textbook or a well-cited paper; validate power curves, then implement the controller (vector control, pitch, LVRT) and compare performance across wind/gust and grid fault scenarios. Include standard disturbance cases (voltage sag/swell, frequency steps) and verify protection limits, current saturation handling, and recovery behavior.
   Complexity: High
   Good prerequisites: Wind turbine aerodynamics (Cp-lambda), generator models (DFIG/PMSG), vector control, converters, grid interconnection basics

35. **Wind + Solar Hybrid System Modeling**
   Research start: Start by reproducing a standard wind turbine + generator model (Cp-lambda curve, drive-train, generator/converter) from a textbook or a well-cited paper; validate power curves, then implement the controller (vector control, pitch, LVRT) and compare performance across wind/gust and grid fault scenarios.
   Complexity: Low-Medium
   Good prerequisites: Wind turbine aerodynamics (Cp-lambda), generator models (DFIG/PMSG), vector control, converters, grid interconnection basics

36. **Wind Turbine with Battery Backup**
   Research start: Start by selecting a battery model (RC equivalent circuit) and identifying parameters from literature or simple test data; implement charge/discharge profiles and validate SOC tracking, then layer in the converter control and the EMS/estimator and quantify accuracy, efficiency, and battery stress.
   Complexity: Low-Medium
   Good prerequisites: Battery equivalent circuit models, CC-CV charging, estimation basics (KF/EKF), protections, DC-DC conversion, data logging

37. **MPPT for Wind Systems (Tip Speed Ratio Control)**
   Research start: Start by reproducing a standard wind turbine + generator model (Cp-lambda curve, drive-train, generator/converter) from a textbook or a well-cited paper; validate power curves, then implement the controller (vector control, pitch, LVRT) and compare performance across wind/gust and grid fault scenarios.
   Complexity: Low-Medium
   Good prerequisites: PV I-V modeling, DC-DC converters, control basics (PI), Simulink/Simscape Electrical, efficiency/energy yield metrics

38. **Offshore Wind Farm Modeling**
   Research start: Start by reproducing a standard wind turbine + generator model (Cp-lambda curve, drive-train, generator/converter) from a textbook or a well-cited paper; validate power curves, then implement the controller (vector control, pitch, LVRT) and compare performance across wind/gust and grid fault scenarios.
   Complexity: High
   Good prerequisites: Wind turbine aerodynamics (Cp-lambda), generator models (DFIG/PMSG), vector control, converters, grid interconnection basics

39. **Wind Farm Wake Effect Simulation**
   Research start: Start by reproducing a standard wind turbine + generator model (Cp-lambda curve, drive-train, generator/converter) from a textbook or a well-cited paper; validate power curves, then implement the controller (vector control, pitch, LVRT) and compare performance across wind/gust and grid fault scenarios.
   Complexity: High
   Good prerequisites: Wind turbine aerodynamics (Cp-lambda), generator models (DFIG/PMSG), vector control, converters, grid interconnection basics

40. **LVRT Strategy for Wind Systems**
   Research start: Start by reproducing a standard wind turbine + generator model (Cp-lambda curve, drive-train, generator/converter) from a textbook or a well-cited paper; validate power curves, then implement the controller (vector control, pitch, LVRT) and compare performance across wind/gust and grid fault scenarios. Include standard disturbance cases (voltage sag/swell, frequency steps) and verify protection limits, current saturation handling, and recovery behavior.
   Complexity: High
   Good prerequisites: Wind turbine aerodynamics (Cp-lambda), generator models (DFIG/PMSG), vector control, converters, grid interconnection basics

### Power Electronics

41. **Multi-Level Inverter (NPC, Flying Capacitor, CHB)**
   Research start: Start with a minimal grid-tied inverter model: DC link -> inverter -> L/LCL filter -> grid, then implement synchronization (PLL) and inner current control; next add the specific feature (filter optimization, FRT, reactive support) and evaluate THD, stability margins, and disturbance response.
   Complexity: Medium
   Good prerequisites: Three-phase fundamentals, PWM, inverter current control, PLL concepts, filters (L/LCL), power quality (THD), grid codes (high level)

42. **Space Vector PWM vs Sinusoidal PWM Study**
   Research start: Start by defining the specification (power, voltage range, ripple, switching frequency) and building an averaged model for control design; once stable, switch to a switching model to evaluate losses/THD/EMI-sensitive behavior, then compare topologies or modulation strategies with consistent metrics. Keep one common testbench and report the same metrics (e.g., THD, tracking efficiency, settling time, overshoot, losses) so the comparison is fair.
   Complexity: Medium
   Good prerequisites: Switch-mode power supply basics, device switching losses, modulation (SPWM/SVPWM), magnetics fundamentals, stability/compensation

43. **SiC vs IGBT Converter Performance Comparison**
   Research start: Start by defining the specification (power, voltage range, ripple, switching frequency) and building an averaged model for control design; once stable, switch to a switching model to evaluate losses/THD/EMI-sensitive behavior, then compare topologies or modulation strategies with consistent metrics. Keep one common testbench and report the same metrics (e.g., THD, tracking efficiency, settling time, overshoot, losses) so the comparison is fair.
   Complexity: Medium
   Good prerequisites: Switch-mode power supply basics, device switching losses, modulation (SPWM/SVPWM), magnetics fundamentals, stability/compensation

44. **Resonant Converters for Renewable Applications**
   Research start: Start by defining the specification (power, voltage range, ripple, switching frequency) and building an averaged model for control design; once stable, switch to a switching model to evaluate losses/THD/EMI-sensitive behavior, then compare topologies or modulation strategies with consistent metrics.
   Complexity: High
   Good prerequisites: Switch-mode power supply basics, device switching losses, modulation (SPWM/SVPWM), magnetics fundamentals, stability/compensation

45. **Soft Switching DC-DC Converter**
   Research start: Start by defining the specification (power, voltage range, ripple, switching frequency) and building an averaged model for control design; once stable, switch to a switching model to evaluate losses/THD/EMI-sensitive behavior, then compare topologies or modulation strategies with consistent metrics.
   Complexity: Medium
   Good prerequisites: Switch-mode power supply basics, device switching losses, modulation (SPWM/SVPWM), magnetics fundamentals, stability/compensation

46. **Matrix Converter Modeling**
   Research start: Start by defining the specification (power, voltage range, ripple, switching frequency) and building an averaged model for control design; once stable, switch to a switching model to evaluate losses/THD/EMI-sensitive behavior, then compare topologies or modulation strategies with consistent metrics.
   Complexity: High
   Good prerequisites: Switch-mode power supply basics, device switching losses, modulation (SPWM/SVPWM), magnetics fundamentals, stability/compensation

47. **Dual Active Bridge Converter**
   Research start: Start by defining the specification (power, voltage range, ripple, switching frequency) and building an averaged model for control design; once stable, switch to a switching model to evaluate losses/THD/EMI-sensitive behavior, then compare topologies or modulation strategies with consistent metrics.
   Complexity: High
   Good prerequisites: Switch-mode power supply basics, device switching losses, modulation (SPWM/SVPWM), magnetics fundamentals, stability/compensation

48. **High-Gain Boost Converter for PV**
   Research start: Start by defining the specification (power, voltage range, ripple, switching frequency) and building an averaged model for control design; once stable, switch to a switching model to evaluate losses/THD/EMI-sensitive behavior, then compare topologies or modulation strategies with consistent metrics.
   Complexity: Medium
   Good prerequisites: Switch-mode power supply basics, device switching losses, modulation (SPWM/SVPWM), magnetics fundamentals, stability/compensation

49. **Z-Source Inverter for PV**
   Research start: Start with a minimal grid-tied inverter model: DC link -> inverter -> L/LCL filter -> grid, then implement synchronization (PLL) and inner current control; next add the specific feature (filter optimization, FRT, reactive support) and evaluate THD, stability margins, and disturbance response.
   Complexity: Medium
   Good prerequisites: Three-phase fundamentals, PWM, inverter current control, PLL concepts, filters (L/LCL), power quality (THD), grid codes (high level)

50. **Fault-Tolerant Inverter Design**
   Research start: Start with a minimal grid-tied inverter model: DC link -> inverter -> L/LCL filter -> grid, then implement synchronization (PLL) and inner current control; next add the specific feature (filter optimization, FRT, reactive support) and evaluate THD, stability margins, and disturbance response. Include standard disturbance cases (voltage sag/swell, frequency steps) and verify protection limits, current saturation handling, and recovery behavior.
   Complexity: Medium
   Good prerequisites: Three-phase fundamentals, PWM, inverter current control, PLL concepts, filters (L/LCL), power quality (THD), grid codes (high level)

### Microgrid & Smart Grid

51. **AC Microgrid Modeling and Control**
   Research start: Start with a minimal grid-tied inverter model: DC link -> inverter -> L/LCL filter -> grid, then implement synchronization (PLL) and inner current control; next add the specific feature (filter optimization, FRT, reactive support) and evaluate THD, stability margins, and disturbance response.
   Complexity: Medium
   Good prerequisites: Three-phase fundamentals, PWM, inverter current control, PLL concepts, filters (L/LCL), power quality (THD), grid codes (high level)

52. **DC Microgrid Stability Analysis**
   Research start: Start with a minimal grid-tied inverter model: DC link -> inverter -> L/LCL filter -> grid, then implement synchronization (PLL) and inner current control; next add the specific feature (filter optimization, FRT, reactive support) and evaluate THD, stability margins, and disturbance response.
   Complexity: High
   Good prerequisites: Three-phase fundamentals, PWM, inverter current control, PLL concepts, filters (L/LCL), power quality (THD), grid codes (high level)

53. **Hybrid AC-DC Microgrid**
   Research start: Start with a minimal grid-tied inverter model: DC link -> inverter -> L/LCL filter -> grid, then implement synchronization (PLL) and inner current control; next add the specific feature (filter optimization, FRT, reactive support) and evaluate THD, stability margins, and disturbance response.
   Complexity: Medium
   Good prerequisites: Three-phase fundamentals, PWM, inverter current control, PLL concepts, filters (L/LCL), power quality (THD), grid codes (high level)

54. **Droop Control Strategy Optimization**
   Research start: Start with a minimal grid-tied inverter model: DC link -> inverter -> L/LCL filter -> grid, then implement synchronization (PLL) and inner current control; next add the specific feature (filter optimization, FRT, reactive support) and evaluate THD, stability margins, and disturbance response. Define an objective function and constraints up front (limits, ripple/THD, stability margins) and run sensitivity studies so the optimization result is defensible.
   Complexity: Medium
   Good prerequisites: Three-phase fundamentals, PWM, inverter current control, PLL concepts, filters (L/LCL), power quality (THD), grid codes (high level)

55. **Multi-Agent Energy Management System**
   Research start: Start with a minimal grid-tied inverter model: DC link -> inverter -> L/LCL filter -> grid, then implement synchronization (PLL) and inner current control; next add the specific feature (filter optimization, FRT, reactive support) and evaluate THD, stability margins, and disturbance response.
   Complexity: High
   Good prerequisites: Three-phase fundamentals, PWM, inverter current control, PLL concepts, filters (L/LCL), power quality (THD), grid codes (high level)

56. **Microgrid Black Start Strategy**
   Research start: Start with a minimal grid-tied inverter model: DC link -> inverter -> L/LCL filter -> grid, then implement synchronization (PLL) and inner current control; next add the specific feature (filter optimization, FRT, reactive support) and evaluate THD, stability margins, and disturbance response.
   Complexity: Medium
   Good prerequisites: Three-phase fundamentals, PWM, inverter current control, PLL concepts, filters (L/LCL), power quality (THD), grid codes (high level)

57. **Demand Response Modeling**
   Research start: Start with a minimal grid-tied inverter model: DC link -> inverter -> L/LCL filter -> grid, then implement synchronization (PLL) and inner current control; next add the specific feature (filter optimization, FRT, reactive support) and evaluate THD, stability margins, and disturbance response.
   Complexity: Medium
   Good prerequisites: Three-phase fundamentals, PWM, inverter current control, PLL concepts, filters (L/LCL), power quality (THD), grid codes (high level)

58. **Smart Grid with IoT Integration**
   Research start: Start with a minimal grid-tied inverter model: DC link -> inverter -> L/LCL filter -> grid, then implement synchronization (PLL) and inner current control; next add the specific feature (filter optimization, FRT, reactive support) and evaluate THD, stability margins, and disturbance response.
   Complexity: Medium
   Good prerequisites: Three-phase fundamentals, PWM, inverter current control, PLL concepts, filters (L/LCL), power quality (THD), grid codes (high level)

59. **Power Quality Improvement in Microgrid**
   Research start: Start with a minimal grid-tied inverter model: DC link -> inverter -> L/LCL filter -> grid, then implement synchronization (PLL) and inner current control; next add the specific feature (filter optimization, FRT, reactive support) and evaluate THD, stability margins, and disturbance response.
   Complexity: Medium
   Good prerequisites: Three-phase fundamentals, PWM, inverter current control, PLL concepts, filters (L/LCL), power quality (THD), grid codes (high level)

60. **Blockchain-Based Energy Trading Simulation**
   Research start: Start with a minimal grid-tied inverter model: DC link -> inverter -> L/LCL filter -> grid, then implement synchronization (PLL) and inner current control; next add the specific feature (filter optimization, FRT, reactive support) and evaluate THD, stability margins, and disturbance response. Treat it as a market/dispatch simulation: clearly define participants, settlement rules, and what is actually improved vs a centralized dispatcher.
   Complexity: High
   Good prerequisites: Three-phase fundamentals, PWM, inverter current control, PLL concepts, filters (L/LCL), power quality (THD), grid codes (high level)

### AI & Optimization for Renewables

61. **Load Forecasting using LSTM**
   Research start: Start by defining the dataset and target metric (MAPE/RMSE/classification F1), establish a simple baseline model, then add the ML method and perform rigorous validation (train/val/test split, ablation, sensitivity) and finally show how the prediction improves dispatch/control outcomes.
   Complexity: Medium
   Good prerequisites: Python/Matlab ML workflow, feature engineering, train/val/test discipline, time-series metrics, and how predictions feed control/EMS

62. **Solar Irradiance Prediction using ML**
   Research start: Start by defining the dataset and target metric (MAPE/RMSE/classification F1), establish a simple baseline model, then add the ML method and perform rigorous validation (train/val/test split, ablation, sensitivity) and finally show how the prediction improves dispatch/control outcomes.
   Complexity: Low-Medium
   Good prerequisites: Python/Matlab ML workflow, feature engineering, train/val/test discipline, time-series metrics, and how predictions feed control/EMS

63. **Fault Detection in PV Arrays using Deep Learning**
   Research start: Start by defining the dataset and target metric (MAPE/RMSE/classification F1), establish a simple baseline model, then add the ML method and perform rigorous validation (train/val/test split, ablation, sensitivity) and finally show how the prediction improves dispatch/control outcomes. Include standard disturbance cases (voltage sag/swell, frequency steps) and verify protection limits, current saturation handling, and recovery behavior.
   Complexity: Medium
   Good prerequisites: Python/Matlab ML workflow, feature engineering, train/val/test discipline, time-series metrics, and how predictions feed control/EMS

64. **Predictive Maintenance of Wind Turbine**
   Research start: Start by reproducing a standard wind turbine + generator model (Cp-lambda curve, drive-train, generator/converter) from a textbook or a well-cited paper; validate power curves, then implement the controller (vector control, pitch, LVRT) and compare performance across wind/gust and grid fault scenarios.
   Complexity: Low-Medium
   Good prerequisites: Wind turbine aerodynamics (Cp-lambda), generator models (DFIG/PMSG), vector control, converters, grid interconnection basics

65. **Energy Management using Genetic Algorithm**
   Research start: Start by defining the dataset and target metric (MAPE/RMSE/classification F1), establish a simple baseline model, then add the ML method and perform rigorous validation (train/val/test split, ablation, sensitivity) and finally show how the prediction improves dispatch/control outcomes. Define an objective function and constraints up front (limits, ripple/THD, stability margins) and run sensitivity studies so the optimization result is defensible.
   Complexity: Medium
   Good prerequisites: Python/Matlab ML workflow, feature engineering, train/val/test discipline, time-series metrics, and how predictions feed control/EMS

66. **Optimal Placement of Distributed Generation**
   Research start: Start by defining the dataset and target metric (MAPE/RMSE/classification F1), establish a simple baseline model, then add the ML method and perform rigorous validation (train/val/test split, ablation, sensitivity) and finally show how the prediction improves dispatch/control outcomes.
   Complexity: Medium
   Good prerequisites: Python/Matlab ML workflow, feature engineering, train/val/test discipline, time-series metrics, and how predictions feed control/EMS

67. **Economic Dispatch using PSO**
   Research start: Start by defining the dataset and target metric (MAPE/RMSE/classification F1), establish a simple baseline model, then add the ML method and perform rigorous validation (train/val/test split, ablation, sensitivity) and finally show how the prediction improves dispatch/control outcomes. Define an objective function and constraints up front (limits, ripple/THD, stability margins) and run sensitivity studies so the optimization result is defensible.
   Complexity: Medium
   Good prerequisites: Python/Matlab ML workflow, feature engineering, train/val/test discipline, time-series metrics, and how predictions feed control/EMS

68. **Real-Time Energy Trading Optimization**
   Research start: Start by defining the dataset and target metric (MAPE/RMSE/classification F1), establish a simple baseline model, then add the ML method and perform rigorous validation (train/val/test split, ablation, sensitivity) and finally show how the prediction improves dispatch/control outcomes. Define an objective function and constraints up front (limits, ripple/THD, stability margins) and run sensitivity studies so the optimization result is defensible.
   Complexity: Medium
   Good prerequisites: Python/Matlab ML workflow, feature engineering, train/val/test discipline, time-series metrics, and how predictions feed control/EMS

69. **Hybrid ML + Control for Grid Stability**
   Research start: Start by defining the dataset and target metric (MAPE/RMSE/classification F1), establish a simple baseline model, then add the ML method and perform rigorous validation (train/val/test split, ablation, sensitivity) and finally show how the prediction improves dispatch/control outcomes.
   Complexity: Low-Medium
   Good prerequisites: Python/Matlab ML workflow, feature engineering, train/val/test discipline, time-series metrics, and how predictions feed control/EMS

70. **Cybersecurity in Smart Grids**
   Research start: Start by defining the dataset and target metric (MAPE/RMSE/classification F1), establish a simple baseline model, then add the ML method and perform rigorous validation (train/val/test split, ablation, sensitivity) and finally show how the prediction improves dispatch/control outcomes.
   Complexity: High
   Good prerequisites: Python/Matlab ML workflow, feature engineering, train/val/test discipline, time-series metrics, and how predictions feed control/EMS

### EV & Renewable Integration

71. **Solar-Powered EV Charging Station**
   Research start: Start with an energy-flow model (PV/grid <-> charger <-> battery) and realistic demand profiles, validate charging constraints (CC-CV, limits), then add the control/optimization objective (cost, grid impact, V2G support) and quantify outcomes with clear scenarios.
   Complexity: Low-Medium
   Good prerequisites: Battery charging standards concepts, converter topologies (PFC + DC-DC), current control, load modeling, basic tariff/optimization

72. **Bidirectional EV Charger (V2G)**
   Research start: Start with an energy-flow model (PV/grid <-> charger <-> battery) and realistic demand profiles, validate charging constraints (CC-CV, limits), then add the control/optimization objective (cost, grid impact, V2G support) and quantify outcomes with clear scenarios.
   Complexity: Low-Medium
   Good prerequisites: Battery charging standards concepts, converter topologies (PFC + DC-DC), current control, load modeling, basic tariff/optimization

73. **Fast Charging Station Grid Impact Analysis**
   Research start: Start with an energy-flow model (PV/grid <-> charger <-> battery) and realistic demand profiles, validate charging constraints (CC-CV, limits), then add the control/optimization objective (cost, grid impact, V2G support) and quantify outcomes with clear scenarios.
   Complexity: Low-Medium
   Good prerequisites: Battery charging standards concepts, converter topologies (PFC + DC-DC), current control, load modeling, basic tariff/optimization

74. **Wireless EV Charging Simulation**
   Research start: Start with an energy-flow model (PV/grid <-> charger <-> battery) and realistic demand profiles, validate charging constraints (CC-CV, limits), then add the control/optimization objective (cost, grid impact, V2G support) and quantify outcomes with clear scenarios.
   Complexity: Low-Medium
   Good prerequisites: Battery charging standards concepts, converter topologies (PFC + DC-DC), current control, load modeling, basic tariff/optimization

75. **EV Load Modeling in Smart Grid**
   Research start: Start with an energy-flow model (PV/grid <-> charger <-> battery) and realistic demand profiles, validate charging constraints (CC-CV, limits), then add the control/optimization objective (cost, grid impact, V2G support) and quantify outcomes with clear scenarios.
   Complexity: Low-Medium
   Good prerequisites: Battery charging standards concepts, converter topologies (PFC + DC-DC), current control, load modeling, basic tariff/optimization

76. **PV + EV + Battery Smart Home**
   Research start: Start by selecting a battery model (RC equivalent circuit) and identifying parameters from literature or simple test data; implement charge/discharge profiles and validate SOC tracking, then layer in the converter control and the EMS/estimator and quantify accuracy, efficiency, and battery stress.
   Complexity: Low-Medium
   Good prerequisites: Battery equivalent circuit models, CC-CV charging, estimation basics (KF/EKF), protections, DC-DC conversion, data logging

77. **Optimal Charging Scheduling**
   Research start: Start with an energy-flow model (PV/grid <-> charger <-> battery) and realistic demand profiles, validate charging constraints (CC-CV, limits), then add the control/optimization objective (cost, grid impact, V2G support) and quantify outcomes with clear scenarios.
   Complexity: Low-Medium
   Good prerequisites: Battery charging standards concepts, converter topologies (PFC + DC-DC), current control, load modeling, basic tariff/optimization

78. **DC Fast Charging Converter Design**
   Research start: Start with an energy-flow model (PV/grid <-> charger <-> battery) and realistic demand profiles, validate charging constraints (CC-CV, limits), then add the control/optimization objective (cost, grid impact, V2G support) and quantify outcomes with clear scenarios.
   Complexity: Low-Medium
   Good prerequisites: Switch-mode power supply basics, device switching losses, modulation (SPWM/SVPWM), magnetics fundamentals, stability/compensation

79. **Battery Aging Modeling**
   Research start: Start by selecting a battery model (RC equivalent circuit) and identifying parameters from literature or simple test data; implement charge/discharge profiles and validate SOC tracking, then layer in the converter control and the EMS/estimator and quantify accuracy, efficiency, and battery stress.
   Complexity: Low-Medium
   Good prerequisites: Battery equivalent circuit models, CC-CV charging, estimation basics (KF/EKF), protections, DC-DC conversion, data logging

80. **Renewable Powered Charging Microgrid**
   Research start: Start with an energy-flow model (PV/grid <-> charger <-> battery) and realistic demand profiles, validate charging constraints (CC-CV, limits), then add the control/optimization objective (cost, grid impact, V2G support) and quantify outcomes with clear scenarios.
   Complexity: Low-Medium
   Good prerequisites: Battery charging standards concepts, converter topologies (PFC + DC-DC), current control, load modeling, basic tariff/optimization

### Advanced / High-Research-Value Topics

81. **Model Predictive Control for Renewable Inverters**
   Research start: Start with a minimal grid-tied inverter model: DC link -> inverter -> L/LCL filter -> grid, then implement synchronization (PLL) and inner current control; next add the specific feature (filter optimization, FRT, reactive support) and evaluate THD, stability margins, and disturbance response.
   Complexity: High
   Good prerequisites: Three-phase fundamentals, PWM, inverter current control, PLL concepts, filters (L/LCL), power quality (THD), grid codes (high level)

82. **Fractional Order Control in Microgrid**
   Research start: Start by reproducing a credible baseline model from a textbook or top-cited paper, then add one new control/optimization element and evaluate it with a repeatable testbench and clear metrics.
   Complexity: High
   Good prerequisites: Control systems basics, modeling assumptions, simulation validation, and measurement/metrics design

83. **Stability Analysis of Inverter Dominated Grid**
   Research start: Start with a minimal grid-tied inverter model: DC link -> inverter -> L/LCL filter -> grid, then implement synchronization (PLL) and inner current control; next add the specific feature (filter optimization, FRT, reactive support) and evaluate THD, stability margins, and disturbance response.
   Complexity: High
   Good prerequisites: Three-phase fundamentals, PWM, inverter current control, PLL concepts, filters (L/LCL), power quality (THD), grid codes (high level)

84. **Grid Forming vs Grid Following Inverters**
   Research start: Start with a minimal grid-tied inverter model: DC link -> inverter -> L/LCL filter -> grid, then implement synchronization (PLL) and inner current control; next add the specific feature (filter optimization, FRT, reactive support) and evaluate THD, stability margins, and disturbance response. Keep one common testbench and report the same metrics (e.g., THD, tracking efficiency, settling time, overshoot, losses) so the comparison is fair.
   Complexity: High
   Good prerequisites: Three-phase fundamentals, PWM, inverter current control, PLL concepts, filters (L/LCL), power quality (THD), grid codes (high level)

85. **Virtual Synchronous Generator (VSG)**
   Research start: Start by reproducing a credible baseline model from a textbook or top-cited paper, then add one new control/optimization element and evaluate it with a repeatable testbench and clear metrics. Keep one common testbench and report the same metrics (e.g., THD, tracking efficiency, settling time, overshoot, losses) so the comparison is fair.
   Complexity: High
   Good prerequisites: Power system basics (P-f, Q-V), inverter-based resources, droop/secondary control, stability concepts, protection/islanding overview

86. **Low Inertia Power System Modeling**
   Research start: Start by reproducing a credible baseline model from a textbook or top-cited paper, then add one new control/optimization element and evaluate it with a repeatable testbench and clear metrics.
   Complexity: High
   Good prerequisites: Control systems basics, modeling assumptions, simulation validation, and measurement/metrics design

87. **Power System Oscillation Damping**
   Research start: Start by reproducing a credible baseline model from a textbook or top-cited paper, then add one new control/optimization element and evaluate it with a repeatable testbench and clear metrics.
   Complexity: Medium
   Good prerequisites: Control systems basics, modeling assumptions, simulation validation, and measurement/metrics design

88. **HVDC Integration of Renewables**
   Research start: Start by reproducing a credible baseline model from a textbook or top-cited paper, then add one new control/optimization element and evaluate it with a repeatable testbench and clear metrics.
   Complexity: High
   Good prerequisites: Control systems basics, modeling assumptions, simulation validation, and measurement/metrics design

89. **Renewable Integration in Weak Grids**
   Research start: Start by reproducing a credible baseline model from a textbook or top-cited paper, then add one new control/optimization element and evaluate it with a repeatable testbench and clear metrics.
   Complexity: High
   Good prerequisites: Control systems basics, modeling assumptions, simulation validation, and measurement/metrics design

90. **EMT vs Phasor Modeling Comparison**
   Research start: Start by reproducing a credible baseline model from a textbook or top-cited paper, then add one new control/optimization element and evaluate it with a repeatable testbench and clear metrics. Keep one common testbench and report the same metrics (e.g., THD, tracking efficiency, settling time, overshoot, losses) so the comparison is fair.
   Complexity: High
   Good prerequisites: Control systems basics, modeling assumptions, simulation validation, and measurement/metrics design

### Smart Home & Distributed Systems

91. **Smart Home Energy Management using PV**
   Research start: Start by reproducing a credible baseline model from a textbook or top-cited paper, then add one new control/optimization element and evaluate it with a repeatable testbench and clear metrics.
   Complexity: Medium
   Good prerequisites: Control systems basics, modeling assumptions, simulation validation, and measurement/metrics design

92. **Home DC Nanogrid**
   Research start: Start by reproducing a credible baseline model from a textbook or top-cited paper, then add one new control/optimization element and evaluate it with a repeatable testbench and clear metrics.
   Complexity: Low-Medium
   Good prerequisites: Control systems basics, modeling assumptions, simulation validation, and measurement/metrics design

93. **Rooftop Solar Optimization**
   Research start: Start by reproducing a credible baseline model from a textbook or top-cited paper, then add one new control/optimization element and evaluate it with a repeatable testbench and clear metrics. Define an objective function and constraints up front (limits, ripple/THD, stability margins) and run sensitivity studies so the optimization result is defensible.
   Complexity: Medium
   Good prerequisites: Control systems basics, modeling assumptions, simulation validation, and measurement/metrics design

94. **Net Metering Simulation**
   Research start: Start by reproducing a credible baseline model from a textbook or top-cited paper, then add one new control/optimization element and evaluate it with a repeatable testbench and clear metrics.
   Complexity: Low-Medium
   Good prerequisites: Control systems basics, modeling assumptions, simulation validation, and measurement/metrics design

95. **Hybrid Renewable Smart Building**
   Research start: Start by reproducing a credible baseline model from a textbook or top-cited paper, then add one new control/optimization element and evaluate it with a repeatable testbench and clear metrics.
   Complexity: Low-Medium
   Good prerequisites: Control systems basics, modeling assumptions, simulation validation, and measurement/metrics design

96. **HVAC Control using Renewable Energy**
   Research start: Start by reproducing a credible baseline model from a textbook or top-cited paper, then add one new control/optimization element and evaluate it with a repeatable testbench and clear metrics.
   Complexity: Low-Medium
   Good prerequisites: Control systems basics, modeling assumptions, simulation validation, and measurement/metrics design

97. **Smart Load Scheduling**
   Research start: Start by reproducing a credible baseline model from a textbook or top-cited paper, then add one new control/optimization element and evaluate it with a repeatable testbench and clear metrics.
   Complexity: Low-Medium
   Good prerequisites: Control systems basics, modeling assumptions, simulation validation, and measurement/metrics design

98. **Solar Water Pumping System**
   Research start: Start by reproducing a credible baseline model from a textbook or top-cited paper, then add one new control/optimization element and evaluate it with a repeatable testbench and clear metrics.
   Complexity: Low-Medium
   Good prerequisites: Control systems basics, modeling assumptions, simulation validation, and measurement/metrics design

99. **Agricultural Solar Microgrid**
   Research start: Start by reproducing a credible baseline model from a textbook or top-cited paper, then add one new control/optimization element and evaluate it with a repeatable testbench and clear metrics.
   Complexity: Low-Medium
   Good prerequisites: Control systems basics, modeling assumptions, simulation validation, and measurement/metrics design

100. **Rural Electrification using Hybrid Renewable**
   Research start: Start by reproducing a credible baseline model from a textbook or top-cited paper, then add one new control/optimization element and evaluate it with a repeatable testbench and clear metrics.
   Complexity: Low-Medium
   Good prerequisites: Control systems basics, modeling assumptions, simulation validation, and measurement/metrics design

---

## B) Hardware-Oriented Embedded/Electrical Projects (Buildable)

1. **Smart Li-ion Battery Management System (BMS)**
   Research start: Start by selecting a battery model (RC equivalent circuit) and identifying parameters from literature or simple test data; implement charge/discharge profiles and validate SOC tracking, then layer in the converter control and the EMS/estimator and quantify accuracy, efficiency, and battery stress.
   Complexity: Low-Medium
   Good prerequisites: Battery equivalent circuit models, CC-CV charging, estimation basics (KF/EKF), protections, DC-DC conversion, data logging

2. **Bidirectional DC-DC Converter for Battery Storage**
   Research start: Start by selecting a battery model (RC equivalent circuit) and identifying parameters from literature or simple test data; implement charge/discharge profiles and validate SOC tracking, then layer in the converter control and the EMS/estimator and quantify accuracy, efficiency, and battery stress.
   Complexity: Low-Medium
   Good prerequisites: Battery equivalent circuit models, CC-CV charging, estimation basics (KF/EKF), protections, DC-DC conversion, data logging

3. **Solar MPPT Charge Controller with IoT Monitoring**
   Research start: Start by building a validated PV array model (datasheet-based) and a DC-DC converter in Simulink/Simscape, then reproduce 1-2 baseline MPPT methods (P and O, IncCond) on standard irradiance profiles before adding the novel controller and benchmarking energy yield.
   Complexity: Low-Medium
   Good prerequisites: PV I-V modeling, DC-DC converters, control basics (PI), Simulink/Simscape Electrical, efficiency/energy yield metrics

4. **Grid-Tied Micro Inverter (Low Power Prototype)**
   Research start: Start with a minimal grid-tied inverter model: DC link -> inverter -> L/LCL filter -> grid, then implement synchronization (PLL) and inner current control; next add the specific feature (filter optimization, FRT, reactive support) and evaluate THD, stability margins, and disturbance response.
   Complexity: Low-Medium
   Good prerequisites: Three-phase fundamentals, PWM, inverter current control, PLL concepts, filters (L/LCL), power quality (THD), grid codes (high level)

5. **Portable Power Station (UPS + Solar Input)**
   Research start: Start by writing a one-page requirements/spec (inputs, outputs, safety limits, comms, accuracy), pick reference designs for the sensing/power stages, then prototype in modules (power + sensing + firmware) and validate each block with measured test cases before integrating.
   Complexity: Low-Medium
   Good prerequisites: Embedded basics (MCU + sensors), analog measurement, communication (UART/I2C/SPI), power supply design, testing + safety

6. **EV Battery Charger (Level 1 AC Charger Prototype)**
   Research start: Start by selecting a battery model (RC equivalent circuit) and identifying parameters from literature or simple test data; implement charge/discharge profiles and validate SOC tracking, then layer in the converter control and the EMS/estimator and quantify accuracy, efficiency, and battery stress.
   Complexity: Low-Medium
   Good prerequisites: Battery equivalent circuit models, CC-CV charging, estimation basics (KF/EKF), protections, DC-DC conversion, data logging

### Industrial Monitoring & Automation

7. **Cold Storage Monitoring & Control System**
   Research start: Start by reproducing a credible baseline model from a textbook or top-cited paper, then add one new control/optimization element and evaluate it with a repeatable testbench and clear metrics.
   Complexity: Low-Medium
   Good prerequisites: Control systems basics, modeling assumptions, simulation validation, and measurement/metrics design

8. **Industrial Power Quality Analyzer**
   Research start: Start by reproducing a credible baseline model from a textbook or top-cited paper, then add one new control/optimization element and evaluate it with a repeatable testbench and clear metrics.
   Complexity: Medium
   Good prerequisites: Control systems basics, modeling assumptions, simulation validation, and measurement/metrics design

9. **Three-Phase Smart Energy Meter with Web Dashboard**
   Research start: Start by reproducing a credible baseline model from a textbook or top-cited paper, then add one new control/optimization element and evaluate it with a repeatable testbench and clear metrics.
   Complexity: Low-Medium
   Good prerequisites: Control systems basics, modeling assumptions, simulation validation, and measurement/metrics design

10. **Smart Transformer Health Monitoring**
   Research start: Start by reproducing a credible baseline model from a textbook or top-cited paper, then add one new control/optimization element and evaluate it with a repeatable testbench and clear metrics.
   Complexity: Low-Medium
   Good prerequisites: Control systems basics, modeling assumptions, simulation validation, and measurement/metrics design

11. **Automatic Power Factor Correction Panel**
   Research start: Start by reproducing a credible baseline model from a textbook or top-cited paper, then add one new control/optimization element and evaluate it with a repeatable testbench and clear metrics.
   Complexity: Low-Medium
   Good prerequisites: Control systems basics, modeling assumptions, simulation validation, and measurement/metrics design

### Automotive & Vehicle Systems

12. **Smart Trailer Anti-Theft + GPS Tracking**
   Research start: Start by reproducing a credible baseline model from a textbook or top-cited paper, then add one new control/optimization element and evaluate it with a repeatable testbench and clear metrics.
   Complexity: Low-Medium
   Good prerequisites: Control systems basics, modeling assumptions, simulation validation, and measurement/metrics design

13. **Vehicle Data Logger (OBD-II Based)**
   Research start: Start by reproducing a credible baseline model from a textbook or top-cited paper, then add one new control/optimization element and evaluate it with a repeatable testbench and clear metrics.
   Complexity: Low-Medium
   Good prerequisites: Control systems basics, modeling assumptions, simulation validation, and measurement/metrics design

14. **Battery Health Analyzer for EV Packs**
   Research start: Start by selecting a battery model (RC equivalent circuit) and identifying parameters from literature or simple test data; implement charge/discharge profiles and validate SOC tracking, then layer in the converter control and the EMS/estimator and quantify accuracy, efficiency, and battery stress.
   Complexity: Low-Medium
   Good prerequisites: Battery equivalent circuit models, CC-CV charging, estimation basics (KF/EKF), protections, DC-DC conversion, data logging

15. **Solar-Assisted EV Charging Dock**
   Research start: Start by reproducing a credible baseline model from a textbook or top-cited paper, then add one new control/optimization element and evaluate it with a repeatable testbench and clear metrics.
   Complexity: Low-Medium
   Good prerequisites: Battery charging standards concepts, converter topologies (PFC + DC-DC), current control, load modeling, basic tariff/optimization

### Smart Systems

16. **Smart Distribution Board**
   Research start: Start by reproducing a credible baseline model from a textbook or top-cited paper, then add one new control/optimization element and evaluate it with a repeatable testbench and clear metrics.
   Complexity: Low-Medium
   Good prerequisites: Control systems basics, modeling assumptions, simulation validation, and measurement/metrics design

17. **AI-Based Smart Energy Manager**
   Research start: Start by reproducing a credible baseline model from a textbook or top-cited paper, then add one new control/optimization element and evaluate it with a repeatable testbench and clear metrics.
   Complexity: Low-Medium
   Good prerequisites: Control systems basics, modeling assumptions, simulation validation, and measurement/metrics design

18. **Home DC Microgrid Prototype**
   Research start: Start by reproducing a credible baseline model from a textbook or top-cited paper, then add one new control/optimization element and evaluate it with a repeatable testbench and clear metrics.
   Complexity: Low-Medium
   Good prerequisites: Control systems basics, modeling assumptions, simulation validation, and measurement/metrics design

19. **Smart Water Pump Controller**
   Research start: Start by reproducing a credible baseline model from a textbook or top-cited paper, then add one new control/optimization element and evaluate it with a repeatable testbench and clear metrics.
   Complexity: Low-Medium
   Good prerequisites: Control systems basics, modeling assumptions, simulation validation, and measurement/metrics design

### Security & Surveillance

20. **AI-Based Intrusion Detection System**
   Research start: Start by reproducing a credible baseline model from a textbook or top-cited paper, then add one new control/optimization element and evaluate it with a repeatable testbench and clear metrics.
   Complexity: Low-Medium
   Good prerequisites: Control systems basics, modeling assumptions, simulation validation, and measurement/metrics design

21. **Industrial Access Control with Face Recognition**
   Research start: Start by reproducing a credible baseline model from a textbook or top-cited paper, then add one new control/optimization element and evaluate it with a repeatable testbench and clear metrics.
   Complexity: Low-Medium
   Good prerequisites: Control systems basics, modeling assumptions, simulation validation, and measurement/metrics design

22. **Smart Locker System with Cloud Logging**
   Research start: Start by reproducing a credible baseline model from a textbook or top-cited paper, then add one new control/optimization element and evaluate it with a repeatable testbench and clear metrics.
   Complexity: Low-Medium
   Good prerequisites: Control systems basics, modeling assumptions, simulation validation, and measurement/metrics design

### Embedded Systems

23. **RTOS-Based Smart Controller (FreeRTOS)**
   Research start: Start by reproducing a credible baseline model from a textbook or top-cited paper, then add one new control/optimization element and evaluate it with a repeatable testbench and clear metrics.
   Complexity: Low-Medium
   Good prerequisites: Control systems basics, modeling assumptions, simulation validation, and measurement/metrics design

24. **Industrial IoT Gateway (Modbus to MQTT)**
   Research start: Start by reproducing a credible baseline model from a textbook or top-cited paper, then add one new control/optimization element and evaluate it with a repeatable testbench and clear metrics.
   Complexity: Low-Medium
   Good prerequisites: Control systems basics, modeling assumptions, simulation validation, and measurement/metrics design

25. **High-Precision Data Acquisition System (16–24 bit ADC)**
   Research start: Start by reproducing a credible baseline model from a textbook or top-cited paper, then add one new control/optimization element and evaluate it with a repeatable testbench and clear metrics.
   Complexity: Low-Medium
   Good prerequisites: Control systems basics, modeling assumptions, simulation validation, and measurement/metrics design

### Thermal & Environmental Systems

26. **Smart Refrigeration System with Energy Optimization**
   Research start: Start by reproducing a credible baseline model from a textbook or top-cited paper, then add one new control/optimization element and evaluate it with a repeatable testbench and clear metrics. Define an objective function and constraints up front (limits, ripple/THD, stability margins) and run sensitivity studies so the optimization result is defensible.
   Complexity: Medium
   Good prerequisites: Control systems basics, modeling assumptions, simulation validation, and measurement/metrics design

27. **Greenhouse Automation with Climate Modeling**
   Research start: Start by reproducing a credible baseline model from a textbook or top-cited paper, then add one new control/optimization element and evaluate it with a repeatable testbench and clear metrics.
   Complexity: Low-Medium
   Good prerequisites: Control systems basics, modeling assumptions, simulation validation, and measurement/metrics design

28. **Battery Thermal Management System**
   Research start: Start by selecting a battery model (RC equivalent circuit) and identifying parameters from literature or simple test data; implement charge/discharge profiles and validate SOC tracking, then layer in the converter control and the EMS/estimator and quantify accuracy, efficiency, and battery stress.
   Complexity: Medium
   Good prerequisites: Battery equivalent circuit models, CC-CV charging, estimation basics (KF/EKF), protections, DC-DC conversion, data logging

### Advanced Control

29. **Digital PID Controller (Hardware Tunable)**
   Research start: Start by reproducing a credible baseline model from a textbook or top-cited paper, then add one new control/optimization element and evaluate it with a repeatable testbench and clear metrics.
   Complexity: Medium
   Good prerequisites: Control systems basics, modeling assumptions, simulation validation, and measurement/metrics design

30. **Motor Control System (BLDC / PMSM)**
   Research start: Start by reproducing a credible baseline model from a textbook or top-cited paper, then add one new control/optimization element and evaluate it with a repeatable testbench and clear metrics.
   Complexity: Medium
   Good prerequisites: Control systems basics, modeling assumptions, simulation validation, and measurement/metrics design

31. **Sensorless BLDC Control**
   Research start: Start by reproducing a credible baseline model from a textbook or top-cited paper, then add one new control/optimization element and evaluate it with a repeatable testbench and clear metrics.
   Complexity: Medium
   Good prerequisites: Control systems basics, modeling assumptions, simulation validation, and measurement/metrics design

32. **Elevator Prototype with Intelligent Control**
   Research start: Start by reproducing a credible baseline model from a textbook or top-cited paper, then add one new control/optimization element and evaluate it with a repeatable testbench and clear metrics.
   Complexity: Medium
   Good prerequisites: Control systems basics, modeling assumptions, simulation validation, and measurement/metrics design

