param(
  [string]$InputPath = "..\PROJECT_IDEAS_LIST.md"
)

Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

function Normalize-Header([string]$h) {
  if (-not $h) { return "" }
  return ($h -replace "\s+", " ").Trim()
}

function Get-Complexity([string]$domain, [string]$title) {
  $t = $title.ToLowerInvariant()
  $d = $domain.ToLowerInvariant()

  $high = @(
    'fpga','hdl','model predictive','mpc','hvdc','grid forming','grid-forming','vsg','virtual synchronous','low inertia',
    'cybersecurity','blockchain','wake','offshore','fault ride','lvrt','frt','weak grid','matrix converter',
    'dual active bridge','dab','transformerless','lcl','sogi','pll','islanding','dfiq','dfig','pmsg','resonant',
    'fractional','multi-agent','stability analysis','emt'
  )
  foreach ($k in $high) { if ($t -like "*$k*") { return "High" } }

  $medium = @(
    'comparison','comparative','optimization','ps o','pso','genetic','kalman','ekf','lstm','deep learning','reinforcement',
    'droop','active filter','power quality','energy management','dispatch','placement','forecasting','thermal'
  )
  foreach ($k in $medium) { if ($t -like "*$k*") { return "Medium" } }

  if ($d -like "*advanced*" -or $d -like "*microgrid*" -or $d -like "*grid*" -or $d -like "*power electronics*") {
    return "Medium"
  }

  return "Low-Medium"
}

function Get-Prereqs([string]$domain, [string]$title) {
  $d = $domain.ToLowerInvariant()
  $t = $title.ToLowerInvariant()

  if ($d -like "*mppt*" -or $t -like "*mppt*") {
     return "PV I-V modeling, DC-DC converters, control basics (PI), Simulink/Simscape Electrical, efficiency/energy yield metrics"
  }
  if ($d -like "*grid-connected*" -or $d -like "*grid*" -or $t -like "*pll*" -or $t -like "*lcl*" -or $t -like "*inverter*") {
    return "Three-phase fundamentals, PWM, inverter current control, PLL concepts, filters (L/LCL), power quality (THD), grid codes (high level)"
  }
  if ($d -like "*energy storage*" -or $t -like "*battery*" -or $t -like "*soc*") {
    return "Battery equivalent circuit models, CC-CV charging, estimation basics (KF/EKF), protections, DC-DC conversion, data logging"
  }
  if ($d -like "*wind*" -or $t -like "*turbine*" -or $t -like "*dfig*" -or $t -like "*pmsg*") {
    return "Wind turbine aerodynamics (Cp-lambda), generator models (DFIG/PMSG), vector control, converters, grid interconnection basics"
  }
  if ($d -like "*power electronics*" -or $t -like "*converter*" -or $t -like "*inverter*" -or $t -like "*pwm*") {
    return "Switch-mode power supply basics, device switching losses, modulation (SPWM/SVPWM), magnetics fundamentals, stability/compensation"
  }
  if ($d -like "*microgrid*" -or $d -like "*smart grid*" -or $t -like "*droop*" -or $t -like "*vsg*") {
    return "Power system basics (P-f, Q-V), inverter-based resources, droop/secondary control, stability concepts, protection/islanding overview"
  }
  if ($d -like "*ai*" -or $t -like "*learning*" -or $t -like "*forecast*" -or $t -like "*prediction*") {
    return "Python/Matlab ML workflow, feature engineering, train/val/test discipline, time-series metrics, and how predictions feed control/EMS"
  }
  if ($d -like "*ev*" -or $t -like "*charging*" -or $t -like "*v2g*") {
    return "Battery charging standards concepts, converter topologies (PFC + DC-DC), current control, load modeling, basic tariff/optimization"
  }

  # Hardware section heuristics
  if ($d -like "*hardware*" -or $domain -like "B) *") {
    if ($t -like "*bms*") { return "Li-ion safety basics, ADC sensing, balancing methods, SOC/SOH concepts, embedded firmware, comms (CAN/UART)" }
    if ($t -like "*dc-dc*" -or $t -like "*converter*") { return "Power stage design, gate driving, current sensing, control loops, PCB layout/EMI basics, protections" }
    if ($t -like "*meter*" -or $t -like "*analyzer*") { return "Signal conditioning, sampling/aliasing, RMS/THD computation, calibration, data logging, isolation/safety" }
    if ($t -like "*rtos*" ) { return "C/C++ embedded, interrupts/timers, FreeRTOS concepts, debugging, concurrency (queues/semaphores)" }
    return "Embedded basics (MCU + sensors), analog measurement, communication (UART/I2C/SPI), power supply design, testing + safety"
  }

  return "Control systems basics, modeling assumptions, simulation validation, and measurement/metrics design"
}

function Add-TitleHints([string]$baseText, [string]$title) {
  $t = $title.ToLowerInvariant()
  $hints = New-Object System.Collections.Generic.List[string]

  if ($t -like "*compar*" -or $t -like "*vs*" ) {
    $hints.Add("Keep one common testbench and report the same metrics (e.g., THD, tracking efficiency, settling time, overshoot, losses) so the comparison is fair.")
  }
  if ($t -like "*optimi*" -or $t -like "*pso*" -or $t -like "*genetic*" ) {
    $hints.Add("Define an objective function and constraints up front (limits, ripple/THD, stability margins) and run sensitivity studies so the optimization result is defensible.")
  }
  if ($t -like "*fault*" -or $t -like "*lvrt*" -or $t -like "*frt*" -or $t -like "*ride through*" ) {
    $hints.Add("Include standard disturbance cases (voltage sag/swell, frequency steps) and verify protection limits, current saturation handling, and recovery behavior.")
  }
  if ($t -like "*pll*" ) {
    $hints.Add("Test with harmonics, unbalance, and frequency ramps; track phase error, lock time, and stability under noisy measurements.")
  }
  if ($t -like "*kalman*" ) {
    $hints.Add("Inject realistic sensor noise/bias and validate estimator consistency (innovation, drift) rather than only ideal simulations.")
  }
  if ($t -like "*fpga*" -or $t -like "*hdl*" ) {
    $hints.Add("Plan for fixed-point effects (scaling, overflow) and choose sampling times early; validate that the control loop meets timing/resource limits.")
  }
  if ($t -like "*blockchain*" ) {
    $hints.Add("Treat it as a market/dispatch simulation: clearly define participants, settlement rules, and what is actually improved vs a centralized dispatcher.")
  }

  if ($hints.Count -eq 0) { return $baseText }
  return ($baseText.TrimEnd() + " " + ($hints -join " "))
}

function Get-ResearchStart([string]$domain, [string]$title) {
  $d = $domain.ToLowerInvariant()
  $t = $title

  # Prefer specific domains first (grid/storage/wind/etc), then MPPT.

  if ($d -like "*grid-connected*" -or $d -like "*grid*" -or $t.ToLowerInvariant() -like "*inverter*" -or $t.ToLowerInvariant() -like "*pll*") {
    return (Add-TitleHints "Start with a minimal grid-tied inverter model: DC link -> inverter -> L/LCL filter -> grid, then implement synchronization (PLL) and inner current control; next add the specific feature (filter optimization, FRT, reactive support) and evaluate THD, stability margins, and disturbance response." $t)
  }
  if ($d -like "*energy storage*" -or $t.ToLowerInvariant() -like "*battery*" -or $t.ToLowerInvariant() -like "*soc*") {
    return (Add-TitleHints "Start by selecting a battery model (RC equivalent circuit) and identifying parameters from literature or simple test data; implement charge/discharge profiles and validate SOC tracking, then layer in the converter control and the EMS/estimator and quantify accuracy, efficiency, and battery stress." $t)
  }
  if ($d -like "*wind*" -or $t.ToLowerInvariant() -like "*turbine*" -or $t.ToLowerInvariant() -like "*dfig*" -or $t.ToLowerInvariant() -like "*pmsg*") {
    return (Add-TitleHints "Start by reproducing a standard wind turbine + generator model (Cp-lambda curve, drive-train, generator/converter) from a textbook or a well-cited paper; validate power curves, then implement the controller (vector control, pitch, LVRT) and compare performance across wind/gust and grid fault scenarios." $t)
  }
  if ($d -like "*power electronics*" ) {
    return (Add-TitleHints "Start by defining the specification (power, voltage range, ripple, switching frequency) and building an averaged model for control design; once stable, switch to a switching model to evaluate losses/THD/EMI-sensitive behavior, then compare topologies or modulation strategies with consistent metrics." $t)
  }
  if ($d -like "*microgrid*" -or $d -like "*smart grid*" ) {
    return (Add-TitleHints "Start with a small microgrid testbench (2 inverters + load + optional storage) and implement baseline droop/grid-following control; then introduce the research feature (secondary control, multi-agent EMS, black start, trading) and evaluate stability, power sharing, resilience, and power quality under disturbances." $t)
  }
  if ($d -like "*ai*" ) {
    return (Add-TitleHints "Start by defining the dataset and target metric (MAPE/RMSE/classification F1), establish a simple baseline model, then add the ML method and perform rigorous validation (train/val/test split, ablation, sensitivity) and finally show how the prediction improves dispatch/control outcomes." $t)
  }
  if ($d -like "*ev*" ) {
    return (Add-TitleHints "Start with an energy-flow model (PV/grid <-> charger <-> battery) and realistic demand profiles, validate charging constraints (CC-CV, limits), then add the control/optimization objective (cost, grid impact, V2G support) and quantify outcomes with clear scenarios." $t)
  }

  if ($d -like "*mppt*" -or $t.ToLowerInvariant() -like "*mppt*") {
    return (Add-TitleHints "Start by building a validated PV array model (datasheet-based) and a DC-DC converter in Simulink/Simscape, then reproduce 1-2 baseline MPPT methods (P and O, IncCond) on standard irradiance profiles before adding the novel controller and benchmarking energy yield." $t)
  }

  # Hardware
  if ($domain -like "B) *") {
    return (Add-TitleHints "Start by writing a one-page requirements/spec (inputs, outputs, safety limits, comms, accuracy), pick reference designs for the sensing/power stages, then prototype in modules (power + sensing + firmware) and validate each block with measured test cases before integrating." $t)
  }

  return (Add-TitleHints "Start by reproducing a credible baseline model from a textbook or top-cited paper, then add one new control/optimization element and evaluate it with a repeatable testbench and clear metrics." $t)
}

function Format-DetailBlock([string]$domain, [string]$title) {
  $complexity = Get-Complexity $domain $title
  $prereqs = Get-Prereqs $domain $title
  $researchStart = Get-ResearchStart $domain $title

  return @(
    "   Research start: $researchStart",
    "   Complexity: $complexity",
    "   Good prerequisites: $prereqs"
  )
}

$resolvedInput = Resolve-Path -Path $InputPath
$lines = Get-Content -Path $resolvedInput -Encoding UTF8

$currentDomain = ""
$out = New-Object System.Collections.Generic.List[string]

for ($i = 0; $i -lt $lines.Count; $i++) {
  $line = $lines[$i]
  $trim = $line.Trim()

  if ($line -like '*Each item includes a short description*') {
    $out.Add('This file consolidates project ideas around renewables, power electronics, microgrids, EV integration, and embedded hardware builds. Each item includes research starting points, an ease/complexity estimate, and prerequisite knowledge.')
    continue
  }

  if ($trim -match '^###\s+(.*)$') {
    $currentDomain = Normalize-Header $Matches[1]
    $out.Add($line)
    continue
  }
  if ($trim -match '^##\s+(.*)$') {
    $currentDomain = Normalize-Header $Matches[1]
    $out.Add($line)
    continue
  }

  # Original format: 12. **Title** — ...
  if ($trim -match '^(\d+)\.\s+\*\*(.+?)\*\*\s+\p{Pd}\s+(.+)$') {
    $num = $Matches[1]
    $title = $Matches[2].Trim()

    $out.Add("$num. **$title**")
    $detail = Format-DetailBlock $currentDomain $title
    foreach ($dline in $detail) { $out.Add($dline) }
    $out.Add("")
    continue
  }

  # Expanded format (already detailed):
  # 12. **Title**
  #    Research start: ...
  #    Complexity: ...
  #    Good prerequisites: ...
  if ($trim -match '^(\d+)\.\s+\*\*(.+?)\*\*\s*$') {
    $num = $Matches[1]
    $title = $Matches[2].Trim()

    $out.Add("$num. **$title**")
    $detail = Format-DetailBlock $currentDomain $title
    foreach ($dline in $detail) { $out.Add($dline) }
    $out.Add("")

    # Skip any existing detail lines following this header
    $j = $i + 1
    while ($j -lt $lines.Count) {
      $nextTrim = $lines[$j].Trim()
      if ($nextTrim -match '^(Research start:|Complexity:|Good prerequisites:)' -or $nextTrim -eq '') {
        $j++
        continue
      }
      break
    }
    $i = $j - 1
    continue
  }

  $out.Add($line)
}

Set-Content -Path $resolvedInput -Value $out -Encoding UTF8
Write-Host "Rewrote: $resolvedInput"