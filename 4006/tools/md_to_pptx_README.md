# Markdown → PPTX (Slide Deck Converter)

This repo includes a simple converter that turns the LO4 Markdown slide template into a real PowerPoint file.

## What it does

- Treats each `---` separator line as a new slide
- Uses the first Markdown heading (`#`, `##`, etc.) on each slide as the slide title
- Converts remaining lines into basic bullet points

It is intentionally **simple** so students get a clean editable `.pptx` skeleton.

## Install

In your activated virtual environment:

```powershell
pip install python-pptx
```

## Run

From the repo root:

```powershell
python tools/md_to_pptx.py templates/LO4_Fault_Finding_Presentation_Template.md out/LO4_Fault_Finding_Template.pptx
```

The generated file will appear in the `out/` folder (created automatically).

## Notes

- This does not try to preserve advanced formatting (bold, tables, images). It’s meant to give a slide structure students can edit in PowerPoint.
- If you want `.odp`, see the Pandoc option below.

## Optional: ODP export (Pandoc)

If you have Pandoc installed, you can convert Markdown to OpenDocument Presentation:

```powershell
pandoc templates/LO4_Fault_Finding_Presentation_Template.md -t odp -o out/LO4_Template.odp
```

If Pandoc is not installed, you can still:
- Generate `.pptx` with the Python script, then
- Open it in LibreOffice Impress and `Save As` `.odp`
