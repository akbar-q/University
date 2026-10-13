const fs = require('node:fs');
const path = require('node:path');
const PptxGenJS = require('pptxgenjs');

const ROOT = path.resolve(__dirname, '..');
const WIDTH = 13.333;
const HEIGHT = 7.5;
const FONT_HEAD = 'Aptos Display';
const FONT_BODY = 'Aptos';

const COLORS = {
  paper: 'F6F8FA',
  ink: '1B3448',
  body: '334B5C',
  muted: '607585',
  line: 'D5E0E7',
  visual: 'E8EFF3',
  white: 'FFFFFF',
  teal: '087F8C',
  amber: 'C58B28',
  blue: '3F7394',
  coral: 'C65E4E',
};

const DECKS = [
  { week: 1, lo: 'LO1', title: 'Investigating the MedPack Application', criteria: 'P1', accent: COLORS.teal, folder: 'LO1 Theory Report', source: 'PPT-OUTLINE-WEEK-01-LO1-APPLICATION.md', output: 'Week-01-LO1-Application-Analysis.pptx' },
  { week: 2, lo: 'LO1', title: 'PLC Types, Applications, and Manufacturers', criteria: 'P2', accent: COLORS.amber, folder: 'LO1 Theory Report', source: 'PPT-OUTLINE-WEEK-02-LO1-PLC-TYPES.md', output: 'Week-02-LO1-PLC-Types-and-Manufacturers.pptx' },
  { week: 3, lo: 'LO1', title: 'PLC Specifications and I/O Modules', criteria: 'P2', accent: COLORS.blue, folder: 'LO1 Theory Report', source: 'PPT-OUTLINE-WEEK-03-LO1-SPECS-MODULES.md', output: 'Week-03-LO1-Specifications-and-Modules.pptx' },
  { week: 4, lo: 'LO1', title: 'Selecting and Evaluating a PLC', criteria: 'M1 / D1', accent: COLORS.coral, folder: 'LO1 Theory Report', source: 'PPT-OUTLINE-WEEK-04-LO1-SELECTION.md', output: 'Week-04-LO1-Selection-and-Evaluation.pptx' },
  { week: 5, lo: 'LO2', title: 'Signal Processing and Signal Integrity', criteria: 'LO2 foundations', accent: COLORS.teal, folder: 'LO2 Demo', source: 'PPT-OUTLINE-WEEK-05-LO2-SIGNALS.md', output: 'Week-05-LO2-Signal-Processing.pptx' },
  { week: 6, lo: 'LO2', title: 'Communication Links and PLC Protocols', criteria: 'P3', accent: COLORS.blue, folder: 'LO2 Demo', source: 'PPT-OUTLINE-WEEK-06-LO2-COMMS.md', output: 'Week-06-LO2-Links-and-Protocols.pptx' },
  { week: 7, lo: 'LO2', title: 'Networked Buses and HMI/SCADA Integration', criteria: 'P4 / M2', accent: COLORS.amber, folder: 'LO2 Demo', source: 'PPT-OUTLINE-WEEK-07-LO2-BUS-INTEGRATION.md', output: 'Week-07-LO2-Bus-and-Integration.pptx' },
  { week: 8, lo: 'LO2', title: 'Evaluating HMI/SCADA and Convergence', criteria: 'M3 / D2', accent: COLORS.coral, folder: 'LO2 Demo', source: 'PPT-OUTLINE-WEEK-08-LO2-EVALUATION.md', output: 'Week-08-LO2-Evaluation-and-Convergence.pptx' },
];

function cleanMarkdown(value) {
  return value
    .replace(/\*\*/g, '')
    .replace(/`/g, '')
    .replace(/\*([^*]+)\*/g, '$1')
    .replace(/\s+/g, ' ')
    .trim();
}

function parseSlides(markdown) {
  const slides = [];
  let current = null;
  const headingPattern = /^\*\*(\d+)\.\s*(.*?)\s+\((\d+)\s+min\)\*\*\s*$/;

  for (const line of markdown.split(/\r?\n/)) {
    const heading = line.match(headingPattern);
    if (heading) {
      if (current) slides.push(current);
      current = {
        number: Number(heading[1]),
        title: cleanMarkdown(heading[2]),
        minutes: Number(heading[3]),
        bullets: [],
      };
      continue;
    }

    if (current && line.startsWith('## ')) {
      slides.push(current);
      current = null;
      continue;
    }

    if (!current) continue;
    const bullet = line.match(/^\s*-\s+(.+)$/);
    if (bullet) current.bullets.push(cleanMarkdown(bullet[1]));
  }

  if (current) slides.push(current);
  return slides;
}

function shorten(text, maxWords = 21, maxChars = 155) {
  const words = text.split(/\s+/);
  let result = words.length > maxWords ? `${words.slice(0, maxWords).join(' ')}...` : text;
  if (result.length > maxChars) result = `${result.slice(0, maxChars - 3).trimEnd()}...`;
  return result;
}

function makeImagePrompt(deck, slide) {
  const context = slide.bullets.slice(0, 2).join(' ');
  const subject = shorten(context || slide.title, 38, 310);
  return [
    `Create an original, technically plausible landscape visual for a vocational engineering presentation about ${slide.title}.`,
    `Show: ${subject}.`,
    'Use an editorial technical-illustration style with accurate industrial components, a clean pale background, and restrained navy, teal, and muted amber accents.',
    'Compose the subject clearly for a right-side image panel. Do not include text, labels, numbers, logos, watermarks, or branded equipment.',
  ].join(' ');
}

function addText(slide, text, options) {
  slide.addText(text, {
    fontFace: FONT_BODY,
    color: COLORS.body,
    margin: 0,
    breakLine: false,
    valign: 'mid',
    ...options,
  });
}

function addBackground(slide, accent) {
  slide.addShape('rect', {
    x: 0, y: 0, w: WIDTH, h: HEIGHT,
    line: { color: COLORS.paper, transparency: 100 },
    fill: { color: COLORS.paper },
  });
  slide.addShape('rect', {
    x: 0, y: 0, w: WIDTH, h: 0.11,
    line: { color: accent, transparency: 100 },
    fill: { color: accent },
  });
}

function addHeader(slide, deck, item) {
  addText(slide, `UNIT 5009    /    WEEK ${String(deck.week).padStart(2, '0')}    /    ${deck.lo}`, {
    x: 0.66, y: 0.27, w: 6.8, h: 0.25,
    fontFace: FONT_BODY, fontSize: 10, bold: true, charSpacing: 1.0,
    color: deck.accent,
  });

  addText(slide, `${item.minutes} MIN`, {
    x: 10.63, y: 0.23, w: 0.85, h: 0.32,
    fontSize: 9.5, bold: true, color: COLORS.ink, align: 'right',
  });

  slide.addShape('rect', {
    x: 11.64, y: 0.22, w: 1.02, h: 0.34,
    line: { color: deck.accent, width: 1 },
    fill: { color: COLORS.paper },
  });
  addText(slide, deck.criteria.toUpperCase(), {
    x: 11.68, y: 0.24, w: 0.94, h: 0.28,
    fontSize: 8.5, bold: true, color: deck.accent, align: 'center',
  });

  const titleSize = item.title.length > 52 ? 25 : item.title.length > 39 ? 28 : 31;
  addText(slide, item.title, {
    x: 0.66, y: 0.77, w: 12.0, h: 0.7,
    fontFace: FONT_HEAD, fontSize: titleSize, bold: true,
    color: COLORS.ink, valign: 'mid', fit: 'shrink',
  });

  slide.addShape('line', {
    x: 0.66, y: 1.61, w: 12.0, h: 0,
    line: { color: COLORS.line, width: 1.1 },
  });
}

function addImagePlaceholder(slide, deck, item, prompt) {
  const x = 8.36;
  const y = 1.91;
  const w = 4.31;
  const h = 4.76;

  slide.addShape('rect', {
    x, y, w, h,
    line: { color: 'C8D5DE', width: 1.2 },
    fill: { color: COLORS.visual },
  });
  addText(slide, 'IMAGE PLACEHOLDER', {
    x: x + 0.22, y: y + 0.18, w: w - 0.44, h: 0.27,
    fontSize: 9, bold: true, charSpacing: 0.8, color: deck.accent,
  });
  addText(slide, 'ADD PHOTO OR DIAGRAM', {
    x: x + 0.28, y: y + 1.45, w: w - 0.56, h: 0.38,
    fontFace: FONT_HEAD, fontSize: 17, bold: true,
    color: '7A8F9D', align: 'center',
  });
  addText(slide, 'Leave this area open for the final visual', {
    x: x + 0.28, y: y + 1.88, w: w - 0.56, h: 0.33,
    fontSize: 11.5, color: COLORS.muted, align: 'center',
  });

  slide.addShape('line', {
    x: x + 0.22, y: y + 3.68, w: w - 0.44, h: 0,
    line: { color: 'C8D5DE', width: 1 },
  });
  addText(slide, `VISUAL BRIEF  /  ${shorten(item.title, 8, 56)}`, {
    x: x + 0.22, y: y + 3.82, w: w - 0.44, h: 0.42,
    fontSize: 10.5, bold: true, color: COLORS.ink,
  });
  addText(slide, 'Full image-generation prompt is in this slide\'s speaker notes.', {
    x: x + 0.22, y: y + 4.27, w: w - 0.44, h: 0.29,
    fontSize: 9, color: COLORS.muted,
  });

  return prompt;
}

function addContent(slide, deck, item) {
  addText(slide, 'KEY IDEAS', {
    x: 0.74, y: 1.88, w: 2.0, h: 0.23,
    fontSize: 9, bold: true, charSpacing: 1.0, color: deck.accent,
  });

  const bullets = item.bullets.length ? item.bullets.slice(0, 4) : ['Use the speaker notes to lead the discussion and activity.'];
  let cursorY = 2.22;

  bullets.forEach((bullet, index) => {
    const visibleText = shorten(bullet, 24, 178);
    const lines = Math.max(1, Math.min(3, Math.ceil(visibleText.length / 66)));
    const rowHeight = lines * 0.26 + 0.1;

    slide.addShape('ellipse', {
      x: 0.78, y: cursorY + 0.12, w: 0.11, h: 0.11,
      line: { color: deck.accent, transparency: 100 },
      fill: { color: deck.accent },
    });
    addText(slide, visibleText, {
      x: 1.06, y: cursorY, w: 6.92, h: rowHeight,
      fontSize: 16.5, color: COLORS.body, valign: 'top',
      breakLine: false, fit: 'shrink',
    });

    cursorY += rowHeight + 0.12;
  });

  if (item.bullets.length > bullets.length) {
    addText(slide, `+ ${item.bullets.length - bullets.length} further teaching points in speaker notes`, {
      x: 1.06, y: Math.min(cursorY + 0.02, 6.45), w: 6.85, h: 0.25,
      fontSize: 10, italic: true, color: COLORS.muted,
    });
  }
}

function addFooter(slide, deck, item, total) {
  slide.addShape('line', {
    x: 0.66, y: 6.91, w: 12.0, h: 0,
    line: { color: COLORS.line, width: 0.8 },
  });
  addText(slide, deck.title.toUpperCase(), {
    x: 0.66, y: 7.03, w: 9.0, h: 0.2,
    fontSize: 8, bold: true, charSpacing: 0.6, color: COLORS.muted,
  });
  addText(slide, `${String(item.number).padStart(2, '0')} / ${String(total).padStart(2, '0')}`, {
    x: 11.45, y: 7.02, w: 1.2, h: 0.22,
    fontSize: 9, bold: true, color: COLORS.ink, align: 'right',
  });
}

function addSpeakerNotes(slide, deck, item, imagePrompt) {
  const fullTeachingPoints = item.bullets.length
    ? item.bullets.map((bullet, index) => `${index + 1}. ${bullet}`).join('\n')
    : 'No explicit bullets were found in the outline. Use the slide title and section context to guide the discussion.';

  const notes = [
    `${deck.title} | Week ${String(deck.week).padStart(2, '0')} | ${deck.lo}`,
    `Slide ${item.number} of 18 | Suggested time: ${item.minutes} minutes | Criteria: ${deck.criteria}`,
    '',
    'TEACHING NOTES AND ACTIVITY CUES',
    fullTeachingPoints,
    '',
    'IMAGE PROMPT',
    imagePrompt,
    '',
    'IMAGE PLACEMENT',
    'Replace the labelled image placeholder on the right with the generated or selected visual. Keep the title and key ideas unobstructed.',
  ].join('\n');

  slide.addNotes(notes);
}

async function buildDeck(deck) {
  const sourcePath = path.join(ROOT, deck.folder, deck.source);
  if (!fs.existsSync(sourcePath)) throw new Error(`Missing outline: ${sourcePath}`);
  const markdown = fs.readFileSync(sourcePath, 'utf8');
  const slides = parseSlides(markdown);
  if (slides.length !== 18) {
    throw new Error(`${deck.source}: expected 18 slide outlines, found ${slides.length}`);
  }

  const presentation = new PptxGenJS();
  presentation.layout = 'LAYOUT_WIDE';
  presentation.author = 'Unit 5009 Teaching Materials';
  presentation.subject = `${deck.lo} weekly teaching presentation`;
  presentation.title = `Week ${String(deck.week).padStart(2, '0')}: ${deck.title}`;
  presentation.company = 'Unit 5009';
  presentation.lang = 'en-GB';
  presentation.theme = {
    headFontFace: FONT_HEAD,
    bodyFontFace: FONT_BODY,
    lang: 'en-GB',
  };

  slides.forEach((item) => {
    const slide = presentation.addSlide();
    addBackground(slide, deck.accent);
    addHeader(slide, deck, item);
    addContent(slide, deck, item);
    const prompt = makeImagePrompt(deck, item);
    addImagePlaceholder(slide, deck, item, prompt);
    addFooter(slide, deck, item, slides.length);
    addSpeakerNotes(slide, deck, item, prompt);
  });

  const outputPath = path.join(ROOT, deck.folder, deck.output);
  await presentation.writeFile({ fileName: outputPath, compression: true });
  console.log(`Created ${path.relative(ROOT, outputPath)} (${slides.length} slides)`);
}

async function main() {
  for (const deck of DECKS) await buildDeck(deck);
  console.log(`Built ${DECKS.length} presentations.`);
}

main().catch((error) => {
  console.error(error.stack || error.message || error);
  process.exitCode = 1;
});