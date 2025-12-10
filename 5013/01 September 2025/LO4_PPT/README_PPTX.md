LO4_PPT — Quick convert to PPTX

This folder contains:
- `LO4_presentation_template.md` — the slide skeleton (Markdown)
- `template.pptx` — simple editable PPT template
- `convert-to-pptx.ps1` — PowerShell script: Markdown -> PPTX using pandoc
- `LO4_marking_guidelines.md` — assessor rubric and instructions

To produce a PPTX (one command)
1. Ensure pandoc is installed and on your PATH.
2. Open PowerShell in this folder and run:

```powershell
./convert-to-pptx.ps1
```

This will create `LO4_presentation.pptx` using `template.pptx` as the reference doc. Open that file in PowerPoint or LibreOffice to edit slide masters, add images, or run the presentation.

If pandoc reports missing features or you want speaker notes preserved from the Markdown 'Notes:' sections, contact me and I can add a Pandoc Lua filter to move those blocks into slide presenter notes during conversion.
