<#
Simpler conversion script: Markdown -> PPTX only (uses pandoc and template.pptx)
Usage: run in LO4_PPT folder
    .\convert-to-pptx.ps1

Prereqs: pandoc on PATH, template.pptx present
#>
param(
    [string]$md = 'LO4_presentation_template.md',
    [string]$pptx = 'LO4_presentation.pptx',
    [string]$referenceDoc = 'template.pptx'
)

Write-Host "Converting $md -> $pptx using pandoc..."
if (-not (Get-Command pandoc -ErrorAction SilentlyContinue)) {
    Write-Error "pandoc not found in PATH. Install pandoc and ensure it's on PATH, then re-run this script."; exit 1
}
if (-not (Test-Path $md)) { Write-Error "Markdown source not found: $md"; exit 1 }

$pandocArgs = @($md, '-o', $pptx, '--from=markdown+smart', '-t', 'pptx')
if (Test-Path $referenceDoc) { $pandocArgs += @('--reference-doc',$referenceDoc) }

Write-Host "Running: pandoc" ($pandocArgs -join ' ')
$proc = Start-Process -FilePath pandoc -ArgumentList $pandocArgs -NoNewWindow -Wait -PassThru
if ($proc.ExitCode -ne 0) { Write-Error "pandoc failed with exit code $($proc.ExitCode)"; exit 1 }

if (Test-Path $pptx) { Write-Host "Created PPTX: $pptx" } else { Write-Error "Expected PPTX not found after pandoc."; exit 1 }
