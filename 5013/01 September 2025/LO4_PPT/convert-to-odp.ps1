<#
Simple conversion script for LO4 slides:
- Converts LO4_presentation_template.md -> LO4_presentation.pptx using pandoc and template.pptx
- Converts LO4_presentation.pptx -> LO4_presentation.odp using LibreOffice (soffice)

Usage (PowerShell):
    Open PowerShell in this folder (LO4_PPT) and run: .\convert-to-odp.ps1

Prerequisites:
- pandoc installed and on PATH
- LibreOffice installed (soffice.exe available)
- template.pptx present in this folder (the repo includes one)

Note: pandoc does not automatically convert "Notes:" blocks into presenter notes unless a custom Lua filter is used.
#>

param(
    [string]$md = "LO4_presentation_template.md",
    [string]$pptx = "LO4_presentation.pptx",
    [string]$odp = "LO4_presentation.odp",
    [string]$referenceDoc = "template.pptx",
    [string]$sofficePath = "C:\Program Files\LibreOffice\program\soffice.exe"
)

Write-Host "Converting Markdown to PPTX with pandoc..."
if (-not (Get-Command pandoc -ErrorAction SilentlyContinue)) {
    Write-Error "pandoc not found in PATH. Install pandoc and ensure it's on PATH, then re-run this script."; exit 1
}

if (-not (Test-Path $md)) { Write-Error "Markdown source not found: $md"; exit 1 }
if (-not (Test-Path $referenceDoc)) { Write-Warning "Reference doc $referenceDoc not found. Pandoc will run without a template." }

$pandocArgs = @($md, '-o', $pptx, '--from=markdown+smart', '-t', 'pptx')
if (Test-Path $referenceDoc) { $pandocArgs += @('--reference-doc',$referenceDoc) }

Write-Host "Running: pandoc" ($pandocArgs -join ' ')
$proc = Start-Process -FilePath pandoc -ArgumentList $pandocArgs -NoNewWindow -Wait -PassThru
if ($proc.ExitCode -ne 0) { Write-Error "pandoc failed with exit code $($proc.ExitCode)"; exit 1 }

if (-not (Test-Path $pptx)) { Write-Error "Expected PPTX not found after pandoc."; exit 1 }
Write-Host "Created PPTX: $pptx"

Write-Host "Converting PPTX to ODP with LibreOffice (soffice)..."
if (-not (Test-Path $sofficePath)) { Write-Warning "LibreOffice not found at $sofficePath. If LibreOffice is installed in a different location, re-run script with -sofficePath 'C:\\Path\\to\\soffice.exe'"; exit 1 }

$soArgs = "--headless --convert-to odp --outdir . `"$pptx`""
Write-Host "Running: `"$sofficePath`" $soArgs"
$proc2 = Start-Process -FilePath $sofficePath -ArgumentList $soArgs -NoNewWindow -Wait -PassThru
if ($proc2.ExitCode -ne 0) { Write-Error "LibreOffice conversion failed (exit $($proc2.ExitCode))."; exit 1 }

# rename output if needed
$expectedOdp = Join-Path (Get-Location) ([System.IO.Path]::GetFileNameWithoutExtension($pptx) + '.odp')
if (Test-Path $expectedOdp) { Rename-Item -Path $expectedOdp -NewName $odp -Force; Write-Host "Created ODP: $odp" } else { Write-Warning "Conversion finished but ODP not found as expected. Check LibreOffice output." }
