const path = require('node:path');
const PptxGenJS = require('pptxgenjs');

const OUT = path.resolve(__dirname, '../LO3 Recorded PPT/OpenPLC_Ladder_Diagram_Basics_One_Hour_YouTube_Tutorial.pptx');
const pptx = new PptxGenJS();
const W = 13.333;
const HEAD = 'Aptos Display';
const BODY = 'Aptos';
const MONO = 'Consolas';

// Palette sampled from the supplied reference: bright yellow plus two teal tones.
const C = {
  yellow: 'FFE500',
  yellowPale: 'FFF9CC',
  yellowInk: '655600',
  teal: '008F87',
  tealBright: '00A79D',
  tealPale: 'DDF4F1',
  tealDark: '07534F',
  paper: 'F7FAF9',
  white: 'FFFFFF',
  ink: '16332F',
  body: '344A46',
  muted: '647873',
  line: 'D2E0DC',
  red: 'B84F40',
  redPale: 'F8E8E3',
  blue: '527E98',
};

pptx.layout = 'LAYOUT_WIDE';
pptx.author = 'Unit 5009 Teaching Materials';
pptx.subject = 'One-hour OpenPLC Ladder Diagram basics tutorial';
pptx.title = 'OpenPLC Ladder Diagram Basics - One-Hour YouTube Tutorial';
pptx.company = 'Unit 5009';
pptx.lang = 'en-GB';
pptx.theme = { headFontFace: HEAD, bodyFontFace: BODY, lang: 'en-GB' };

function text(slide, value, x, y, w, h, options = {}) {
  slide.addText(value, {
    x, y, w, h, margin: 0, fontFace: BODY, fontSize: 13, color: C.body,
    valign: 'mid', fit: 'shrink', breakLine: false, ...options,
  });
}

function rect(slide, x, y, w, h, fill, lineColor = fill, lineWidth = 0.8, rounded = false) {
  slide.addShape(rounded ? 'roundRect' : 'rect', {
    x, y, w, h, rectRadius: 0.06,
    line: { color: lineColor, width: lineWidth },
    fill: { color: fill },
  });
}

function line(slide, x1, y1, x2, y2, color = C.line, width = 1.2, options = {}) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  slide.addShape('line', {
    x: Math.min(x1, x2), y: Math.min(y1, y2), w: Math.abs(dx), h: Math.abs(dy),
    flipH: dx < 0, flipV: dy < 0,
    line: { color, width, ...options },
  });
}

function note(slide, time, narration) {
  slide.addNotes(`OpenPLC Ladder Diagram Basics | Suggested section time: ${time}\n\nYOUTUBE NARRATION / TEACHING NOTES\n${narration}`);
}

function header(slide, number, title, time, section) {
  slide.background = { color: C.paper };
  rect(slide, 0, 0, W, 0.1, C.teal, C.teal, 0);
  rect(slide, 0, 0.1, W, 0.045, C.yellow, C.yellow, 0);
  text(slide, 'OPENPLC   /   LADDER DIAGRAM BASICS', 0.66, 0.25, 4.9, 0.21, {
    fontSize: 8.5, bold: true, charSpacing: 0.8, color: C.tealDark,
  });
  text(slide, section.toUpperCase(), 5.55, 0.25, 3.8, 0.21, {
    fontSize: 8, bold: true, charSpacing: 0.55, color: C.teal,
  });
  text(slide, time, 10.1, 0.24, 1.35, 0.22, { fontSize: 8.5, bold: true, color: C.muted, align: 'right' });
  rect(slide, 11.72, 0.19, 0.92, 0.34, C.white, C.yellow, 1.1);
  text(slide, String(number).padStart(2, '0'), 11.74, 0.24, 0.88, 0.2, { fontSize: 9, bold: true, color: C.tealDark, align: 'center' });
  text(slide, title, 0.66, 0.69, 12.0, 0.67, {
    fontFace: HEAD, fontSize: title.length > 49 ? 25 : title.length > 39 ? 27 : 30,
    bold: true, color: C.ink,
  });
  line(slide, 0.66, 1.52, 12.66, 1.52, C.line, 0.9);
  line(slide, 0.66, 6.96, 12.66, 6.96, C.line, 0.7);
  text(slide, 'UNIT 5009   /   SIMULATOR-FIRST   /   YOUTUBE LESSON', 0.66, 7.07, 8.2, 0.18, {
    fontSize: 7.8, bold: true, charSpacing: 0.45, color: C.muted,
  });
  text(slide, `${String(number).padStart(2, '0')} / 25`, 11.52, 7.05, 1.12, 0.2, { fontSize: 8.8, bold: true, color: C.ink, align: 'right' });
}

function bullets(slide, items) {
  const x = 0.73;
  const top = 1.86;
  const bottom = 6.72;
  const gap = 0.1;
  const rowH = (bottom - top - gap * (items.length - 1)) / items.length;
  const longest = Math.max(...items.map((item) => item.length));
  const size = items.length > 5 ? (longest > 75 ? 11.4 : 12.2) : (longest > 85 ? 12.8 : longest > 65 ? 14 : 15.1);
  items.forEach((value, i) => {
    const y = top + i * (rowH + gap);
    rect(slide, x, y + 0.03, 0.06, rowH - 0.06, i % 2 ? C.tealBright : C.teal, C.teal, 0);
    text(slide, String(i + 1).padStart(2, '0'), x + 0.18, y + 0.08, 0.34, 0.19, { fontSize: 8.7, bold: true, color: C.teal, valign: 'top' });
    text(slide, value, x + 0.65, y + 0.03, 4.82, rowH - 0.05, { fontSize: size, color: C.body });
  });
}

function panel(slide, title, hint = '') {
  rect(slide, 6.48, 1.82, 6.16, 4.96, C.white, C.line, 0.9);
  rect(slide, 6.48, 1.82, 0.065, 4.96, C.teal, C.teal, 0);
  text(slide, title.toUpperCase(), 6.78, 2.02, 5.48, 0.22, { fontSize: 8.8, bold: true, charSpacing: 0.7, color: C.teal });
  line(slide, 6.78, 2.37, 12.33, 2.37, C.line, 0.8);
  if (hint) text(slide, hint.toUpperCase(), 6.82, 6.51, 5.42, 0.15, { fontSize: 7.1, color: C.muted, align: 'right', charSpacing: 0.4 });
}

function chip(slide, label, x, y, w, fill = C.yellowPale, ink = C.yellowInk) {
  rect(slide, x, y, w, 0.38, fill, fill, 0, true);
  text(slide, label, x + 0.1, y + 0.09, w - 0.2, 0.19, { fontSize: 8.3, bold: true, color: ink, align: 'center' });
}

function contact(slide, x, y, tag, nc = false, half = 0.58, accent = C.teal) {
  line(slide, x - half, y, x - 0.12, y, C.tealDark, 1.5);
  line(slide, x - 0.12, y - 0.22, x - 0.12, y + 0.22, accent, 1.8);
  line(slide, x + 0.12, y - 0.22, x + 0.12, y + 0.22, accent, 1.8);
  if (nc) line(slide, x - 0.18, y + 0.2, x + 0.18, y - 0.2, C.yellowInk, 1.6);
  line(slide, x + 0.12, y, x + half, y, C.tealDark, 1.5);
  text(slide, tag, x - 0.55, y - 0.65, 1.1, 0.27, { fontSize: tag.length > 12 ? 7.5 : 8.3, bold: true, color: C.ink, align: 'center' });
}

function coil(slide, x, y, tag, half = 0.7) {
  line(slide, x - half, y, x - 0.25, y, C.tealDark, 1.5);
  text(slide, '( )', x - 0.3, y - 0.3, 0.6, 0.58, { fontFace: MONO, fontSize: 18, bold: true, color: C.yellowInk, align: 'center' });
  line(slide, x + 0.25, y, x + half, y, C.tealDark, 1.5);
  text(slide, tag, x - 0.67, y + 0.38, 1.34, 0.24, { fontSize: tag.length > 12 ? 7.4 : 8.2, bold: true, color: C.ink, align: 'center' });
}

function rungBase(slide, x = 6.98, y = 3.28, w = 5.2, title = 'LADDER RUNG') {
  panel(slide, title, 'Editable ladder diagram');
  line(slide, x, y - 0.55, x, y + 1.24, C.tealDark, 2.3);
  line(slide, x + w, y - 0.55, x + w, y + 1.24, C.tealDark, 2.3);
  text(slide, 'L', x - 0.14, y - 0.76, 0.28, 0.18, { fontSize: 8, bold: true, color: C.tealDark, align: 'center' });
  text(slide, 'R', x + w - 0.14, y - 0.76, 0.28, 0.18, { fontSize: 8, bold: true, color: C.tealDark, align: 'center' });
}

function simpleRung(slide, tags, output, opts = {}) {
  const x = opts.x || 7.02;
  const y = opts.y || 3.45;
  const w = opts.w || 5.18;
  rungBase(slide, x, y, w, opts.title || 'LADDER LOGIC');
  const centers = opts.centers || (tags.length === 1 ? [x + 1.48] : tags.length === 2 ? [x + 1.3, x + 2.65] : [x + 1.05, x + 2.2, x + 3.35]);
  const coilX = opts.coilX || x + 4.35;
  const half = opts.half || 0.59;
  line(slide, x, y, centers[0] - half, y, C.tealDark, 1.5);
  tags.forEach((item, i) => {
    contact(slide, centers[i], y, item.tag || item, Boolean(item.nc), half, item.accent || C.teal);
    if (i < tags.length - 1) line(slide, centers[i] + half, y, centers[i + 1] - half, y, C.tealDark, 1.5);
  });
  line(slide, centers[centers.length - 1] + half, y, coilX - 0.7, y, C.tealDark, 1.5);
  coil(slide, coilX, y, output, 0.7);
  line(slide, coilX + 0.7, y, x + w, y, C.tealDark, 1.5);
}

function table(slide, title, headers, rows, x = 7.05, y = 2.8, widths = [1.12, 1.12, 1.45]) {
  text(slide, title.toUpperCase(), x, y - 0.29, 5.0, 0.18, { fontSize: 8, bold: true, color: C.muted, charSpacing: 0.45 });
  let xx = x;
  headers.forEach((value, i) => {
    const fill = i === headers.length - 1 ? C.yellow : C.teal;
    rect(slide, xx, y, widths[i], 0.42, fill, fill, 0.5);
    text(slide, value, xx + 0.04, y + 0.12, widths[i] - 0.08, 0.18, { fontSize: 7.8, bold: true, color: i === headers.length - 1 ? C.ink : C.white, align: 'center' });
    xx += widths[i];
  });
  rows.forEach((row, r) => {
    xx = x;
    row.forEach((value, c) => {
      const yy = y + 0.42 + r * 0.45;
      rect(slide, xx, yy, widths[c], 0.45, r % 2 ? C.paper : C.white, C.line, 0.55);
      text(slide, String(value), xx + 0.05, yy + 0.13, widths[c] - 0.1, 0.18, { fontSize: 9.2, bold: c === row.length - 1, color: c === row.length - 1 ? C.tealDark : C.body, align: 'center' });
      xx += widths[c];
    });
  });
}

function parallelOr(slide) {
  const x = 7.02;
  const y = 3.0;
  const w = 5.17;
  rungBase(slide, x, y + 0.35, w, 'OR = PARALLEL PATHS');
  const bx = x + 1.0;
  const jx = x + 3.25;
  const top = y - 0.05;
  const bottom = y + 0.78;
  line(slide, x, y + 0.35, bx, y + 0.35, C.tealDark, 1.5);
  line(slide, bx, top, bx, bottom, C.tealDark, 1.5);
  line(slide, jx, top, jx, bottom, C.tealDark, 1.5);
  line(slide, bx, top, bx + 0.3, top, C.tealDark, 1.5);
  contact(slide, bx + 0.9, top, 'FAULT', false, 0.58);
  line(slide, bx + 1.48, top, jx, top, C.tealDark, 1.5);
  line(slide, bx, bottom, bx + 0.3, bottom, C.tealDark, 1.5);
  contact(slide, bx + 0.9, bottom, 'COMPLETE', false, 0.58);
  line(slide, bx + 1.48, bottom, jx, bottom, C.tealDark, 1.5);
  line(slide, jx, y + 0.35, x + 3.65, y + 0.35, C.tealDark, 1.5);
  coil(slide, x + 4.28, y + 0.35, 'BUZZER_CMD', 0.63);
  line(slide, x + 4.91, y + 0.35, x + w, y + 0.35, C.tealDark, 1.5);
}

function latch(slide) {
  const x = 6.98;
  const y = 3.18;
  const w = 5.22;
  rungBase(slide, x, y, w, 'SEAL-IN / LATCH RUNG');
  const branch = x + 0.92;
  const join = x + 2.67;
  const stop = x + 3.36;
  const out = x + 4.39;
  const lower = y + 0.76;
  line(slide, x + 0.1, y, branch, y, C.tealDark, 1.5);
  line(slide, x + 0.1, lower, branch, lower, C.tealDark, 1.5);
  line(slide, branch, y, branch, lower, C.tealDark, 1.5);
  line(slide, join, y, join, lower, C.tealDark, 1.5);
  contact(slide, x + 1.45, y, 'START_PB', false, 0.43);
  line(slide, branch, y, x + 1.45 - 0.43, y, C.tealDark, 1.5);
  line(slide, x + 1.45 + 0.43, y, join, y, C.tealDark, 1.5);
  contact(slide, x + 1.45, lower, 'RUN_BIT', false, 0.43, C.tealBright);
  line(slide, branch, lower, x + 1.45 - 0.43, lower, C.tealDark, 1.5);
  line(slide, x + 1.45 + 0.43, lower, join, lower, C.tealDark, 1.5);
  line(slide, join, y + 0.38, stop - 0.43, y + 0.38, C.tealDark, 1.5);
  contact(slide, stop, y + 0.38, 'STOP_PB', true, 0.43, C.yellowInk);
  line(slide, stop + 0.43, y + 0.38, out - 0.5, y + 0.38, C.tealDark, 1.5);
  coil(slide, out, y + 0.38, 'RUN_BIT', 0.5);
  line(slide, out + 0.5, y + 0.38, x + w, y + 0.38, C.tealDark, 1.5);
  text(slide, 'RUN_BIT = (START_PB OR RUN_BIT) AND NOT(STOP_PB)', x + 0.12, y + 1.28, w - 0.24, 0.24, { fontSize: 8.3, bold: true, color: C.yellowInk, align: 'center' });
}

function scan(slide, x = 6.99, y = 3.0) {
  const data = [['READ', 'input states', C.teal], ['EXECUTE', 'evaluate rungs', C.yellowInk], ['UPDATE', 'output image', C.teal], ['REPEAT', 'next scan', C.yellowInk]];
  data.forEach((item, i) => {
    const xx = x + i * 1.33;
    rect(slide, xx, y, 1.08, 0.98, i % 2 ? C.yellowPale : C.tealPale, C.line, 0.8, true);
    text(slide, item[0], xx + 0.08, y + 0.2, 0.92, 0.2, { fontSize: 8.2, bold: true, color: item[2], align: 'center' });
    text(slide, item[1], xx + 0.08, y + 0.52, 0.92, 0.28, { fontSize: 8, color: C.ink, align: 'center' });
    if (i < data.length - 1) line(slide, xx + 1.09, y + 0.48, xx + 1.28, y + 0.48, C.teal, 1.35, { endArrowType: 'triangle' });
  });
}

function slide(number, title, time, section, items, narration, visual) {
  const s = pptx.addSlide();
  header(s, number, title, time, section);
  bullets(s, items);
  if (visual) visual(s);
  note(s, time, narration);
  return s;
}

function cover() {
  const s = pptx.addSlide();
  s.background = { color: C.tealDark };
  rect(s, 0, 0, W, 0.12, C.yellow, C.yellow, 0);
  rect(s, 0, 0.12, W, 0.06, C.tealBright, C.tealBright, 0);
  text(s, 'UNIT 5009   /   PRACTICAL PLC SERIES', 0.8, 0.56, 4.9, 0.23, { fontSize: 9, bold: true, charSpacing: 0.9, color: 'B9E6E0' });
  text(s, 'OpenPLC Ladder\nDiagram Basics', 0.8, 1.14, 6.2, 1.7, { fontFace: HEAD, fontSize: 39, bold: true, color: C.white });
  text(s, 'A complete one-hour beginner tutorial', 0.83, 3.12, 5.4, 0.45, { fontFace: HEAD, fontSize: 20, bold: true, color: C.yellow });
  text(s, 'Rails, rungs, contacts, coils, AND / OR / NOT logic, and a start-stop latch. Includes OpenPLC simulator labs and a test checklist.', 0.83, 3.85, 5.35, 0.96, { fontSize: 15, color: 'E1F2EF', valign: 'top' });
  chip(s, '60 MINUTES', 0.84, 5.47, 1.45, C.yellow, C.ink);
  chip(s, '4 GUIDED LABS', 2.42, 5.47, 1.72, C.tealBright, C.white);
  chip(s, 'SIMULATOR FIRST', 4.28, 5.47, 1.82, C.teal, C.white);
  rect(s, 6.77, 1.08, 5.82, 4.95, '0C625D', '36918A', 0.8);
  text(s, 'LADDER LOGIC = READABLE BOOL LOGIC', 7.13, 1.37, 4.95, 0.22, { fontSize: 8.7, bold: true, charSpacing: 0.7, color: 'B9E6E0' });
  const x = 7.22;
  const y = 3.18;
  const right = 11.98;
  line(s, x, 2.6, x, 5.25, 'B9E6E0', 2.3);
  line(s, right, 2.6, right, 5.25, 'B9E6E0', 2.3);
  line(s, x, y, 8.05, y, 'B9E6E0', 1.6);
  contact(s, 8.63, y, 'START', false, 0.58, C.yellow);
  line(s, 9.21, y, 10.43, y, 'B9E6E0', 1.6);
  coil(s, 11.02, y, 'RUN', 0.59);
  line(s, 11.61, y, right, y, 'B9E6E0', 1.6);
  text(s, 'LEFT RAIL', 6.86, 5.43, 0.96, 0.18, { fontSize: 8, bold: true, color: 'B9E6E0', align: 'center' });
  text(s, 'RUNG', 8.72, 5.43, 0.7, 0.18, { fontSize: 8, bold: true, color: C.yellow, align: 'center' });
  text(s, 'COIL', 10.68, 5.43, 0.7, 0.18, { fontSize: 8, bold: true, color: 'B9E6E0', align: 'center' });
  text(s, 'Use symbolic variables in simulation; map physical I/O only for a known target.', 0.83, 6.49, 7.8, 0.23, { fontSize: 9, color: 'B9E6E0' });
  text(s, '01 / 25', 11.55, 7.03, 1.08, 0.21, { fontSize: 9, bold: true, color: C.white, align: 'right' });
  note(s, '00:00-00:01', 'Welcome to this one-hour OpenPLC Ladder Diagram tutorial. Explain that viewers will learn the visual language, build AND, OR and NOT logic, and finish by making and testing a start-stop seal-in latch. This is a simulator-first lesson: no physical PLC is required to follow the exercises. Use symbolic variables, and map to real I/O only when the hardware target and its documentation are known.');
}

cover();
slide(2, 'Learning goals and the one-hour route', '00:01-00:03', 'ORIENTATION', [
  'Read rails, rungs, contacts and coils as a control-logic diagram.',
  'Explain left-to-right rung evaluation and the PLC scan cycle.',
  'Build AND, OR and NOT behaviour with contacts and coils.',
  'Create, simulate and test a seal-in start-stop latch.',
], 'Read the four outcomes clearly. The goal is to predict the coil state for any input combination, not merely memorise symbols. The lesson progresses from ladder grammar to truth-table labs, then to the memory behavior of a latch. Each lab follows the same rhythm: predict, build, simulate, record.', (s) => {
  panel(s, 'One-hour teaching map');
  const a = [['FOUNDATION', 'PLC scan + ladder layout', '00-15', C.teal], ['LOGIC LABS', 'AND / OR / NOT', '15-38', C.yellowInk], ['LATCH LAB', 'start-stop memory', '38-55', C.teal], ['REVIEW', 'test + troubleshoot', '55-60', C.yellowInk]];
  a.forEach((it, i) => { const y = 2.64 + i * 0.82; rect(s, 6.94, y, 5.2, 0.62, i % 2 ? C.yellowPale : C.tealPale, C.line, 0.65); text(s, it[0], 7.1, y + 0.1, 1.23, 0.17, { fontSize: 8, bold: true, color: it[3] }); text(s, it[1], 8.44, y + 0.11, 2.65, 0.2, { fontSize: 10, bold: true, color: C.ink }); text(s, it[2], 11.18, y + 0.11, 0.75, 0.2, { fontSize: 9, bold: true, color: C.muted, align: 'right' }); });
});

slide(3, 'Roadmap: start simple, then add memory', '00:03-00:04', 'ORIENTATION', [
  'First learn the drawing: rails -> rung -> contacts -> coil.',
  'Then make truth tables visible as ladder paths.',
  'Finally reuse an output contact to hold state after Start is released.',
], 'The key conceptual jump is from combinational logic, where output follows current inputs, to a latch, where feedback preserves the state. Pause at each lab checkpoint if following along.', (s) => { panel(s, 'From symbols to working control'); scan(s, 6.99, 3.0); line(s, 11.0, 4.42, 8.0, 5.45, C.yellowInk, 1.3, { endArrowType: 'triangle' }); rect(s, 7.38, 5.46, 4.72, 0.54, C.yellowPale, C.yellowPale, 0); text(s, 'Later: the RUN contact feeds back to hold the coil ON.', 7.56, 5.63, 4.35, 0.2, { fontSize: 10, bold: true, color: C.yellowInk, align: 'center' }); });

slide(4, 'What does a PLC do?', '00:04-00:06', 'PLC BASICS', [
  'Inputs report conditions: button pressed, guard closed, sensor made.',
  'The program evaluates logic and decides which outputs should be ON.',
  'Outputs command devices: lamp, relay, buzzer, valve or motor interface.',
  'The PLC repeatedly scans the program while in RUN mode.',
], 'Use a familiar pushbutton-to-pilot-lamp example. A PLC repeatedly reads inputs, evaluates logic, updates outputs, and starts another scan. Electrical input and output interfaces are separate from the software logic. Labs use simulated Boolean variables.', (s) => { panel(s, 'Input -> decision -> output'); const a = [['INPUT', 'START_PB\nbutton state', C.teal, C.tealPale], ['PROGRAM', 'rung logic\ntrue / false', C.yellowInk, C.yellowPale], ['OUTPUT', 'LAMP_CMD\ncoil state', C.teal, C.tealPale]]; a.forEach((it, i) => { const x = 6.98 + i * 1.78; rect(s, x, 3.04, 1.45, 1.32, it[3], C.line, 0.8, true); text(s, it[0], x + 0.12, 3.26, 1.21, 0.2, { fontSize: 8.5, bold: true, color: it[2], align: 'center' }); text(s, it[1], x + 0.12, 3.68, 1.21, 0.47, { fontSize: 10.5, bold: true, color: C.ink, align: 'center' }); if (i < 2) line(s, x + 1.47, 3.7, x + 1.73, 3.7, C.teal, 1.5, { endArrowType: 'triangle' }); }); text(s, 'THE LADDER PROGRAM IS THE DECISION', 7.17, 5.18, 4.96, 0.24, { fontSize: 9, bold: true, color: C.yellowInk, align: 'center', charSpacing: 0.35 }); });

slide(5, 'OpenPLC Editor: the practical workspace', '00:06-00:08', 'PLC BASICS', [
  'Create a project and add a program written in Ladder Diagram (LD).',
  'Declare Boolean variables such as START_PB, GUARD_OK and RUN_CMD.',
  'Place contacts and coils, connect the rung, then check for errors.',
  'Use the simulator/monitor to change inputs and observe outputs.',
], 'Keep this tool orientation version-neutral: exact menu labels differ between Editor releases. During recording, show the project tree, LD worksheet, variable declaration view, build/check controls, and simulator or monitoring controls. Use symbolic tags. For physical I/O, follow target documentation.', (s) => { panel(s, 'Typical editor workflow'); const a = ['PROJECT', 'LD PROGRAM', 'VARIABLES', 'RUNG', 'SIMULATE']; a.forEach((v, i) => { const x = 6.83 + i * 1.08; rect(s, x, 3.28, 0.91, 0.73, i === 4 ? C.yellowPale : i % 2 ? C.tealPale : C.white, C.line, 0.75, true); text(s, v, x + 0.05, 3.52, 0.81, 0.22, { fontSize: 7.3, bold: true, color: i === 4 ? C.yellowInk : C.tealDark, align: 'center' }); if (i < 4) line(s, x + 0.92, 3.65, x + 1.06, 3.65, C.teal, 1.15, { endArrowType: 'triangle' }); }); rect(s, 7.05, 4.82, 5.2, 0.85, C.yellowPale, C.yellowPale, 0); text(s, 'Follow the controls shown in your installed Editor build.', 7.25, 5.09, 4.82, 0.26, { fontSize: 10, bold: true, color: C.yellowInk, align: 'center' }); });

slide(6, 'The PLC scan: why rungs keep updating', '00:08-00:10', 'PLC BASICS', [
  'Read the current input image.', 'Evaluate program rungs in configured order.',
  'Update outputs from calculated logic results.', 'Repeat continuously; simulation may also show monitored values.',
], 'Explain the read-execute-update loop. A held button may be true across many scans, so an ordinary coil can remain energised while the rung remains true. Targets differ in scheduling details, so present this as a useful beginner model rather than a universal timing guarantee.', (s) => { panel(s, 'Read -> solve -> write -> repeat'); scan(s, 7.02, 3.12); line(s, 11.62, 4.39, 7.19, 4.39, C.yellowInk, 1.35, { endArrowType: 'triangle' }); text(s, 'ONE SCAN', 8.84, 4.52, 1.0, 0.2, { fontSize: 8, bold: true, color: C.yellowInk, align: 'center' }); chip(s, 'A HELD INPUT CAN BE TRUE FOR MANY SCANS', 7.45, 5.34, 4.83, C.yellowPale, C.yellowInk); });

slide(7, 'Ladder layout: rails, rungs and the logic path', '00:10-00:13', 'LADDER GRAMMAR', [
  'Power rails are the two vertical boundaries of the ladder worksheet.',
  'Each horizontal rung describes one Boolean decision or action.',
  'Contacts test a Boolean state; coils write a result to a variable.',
  'The drawn path is a logic convention, not a map of mains wiring.',
], 'Point out the left and right rails, then trace one rung from left toward the coil. Rails are a relay-logic visual convention, not software supply terminals. The drawn path represents a Boolean expression; it is not physical voltage or dangerous power flow.', (s) => { panel(s, 'Anatomy of one rung'); const x = 7.18; const y = 3.48; const r = 11.98; line(s, x, 2.75, x, 5.08, C.tealDark, 2.5); line(s, r, 2.75, r, 5.08, C.tealDark, 2.5); line(s, x, y, 8.05, y, C.tealDark, 1.7); contact(s, 8.63, y, 'INPUT_BIT'); line(s, 9.21, y, 10.43, y, C.tealDark, 1.7); coil(s, 11.02, y, 'OUTPUT_BIT'); line(s, 11.61, y, r, y, C.tealDark, 1.7); text(s, 'LEFT POWER RAIL', 6.84, 5.3, 1.45, 0.2, { fontSize: 7.5, bold: true, color: C.tealDark }); text(s, 'CONTACT', 8.15, 5.3, 0.95, 0.2, { fontSize: 7.5, bold: true, color: C.tealDark, align: 'center' }); text(s, 'COIL', 10.67, 5.3, 0.7, 0.2, { fontSize: 7.5, bold: true, color: C.yellowInk, align: 'center' }); text(s, 'RIGHT RAIL', 11.35, 5.3, 1.2, 0.2, { fontSize: 7.5, bold: true, color: C.tealDark, align: 'right' }); });

slide(8, 'Read a rung from left to right', '00:13-00:15', 'LADDER GRAMMAR', [
  'Start at the left rail and evaluate the first instruction.',
  'Series contacts mean every required condition must pass.',
  'The path reaches the coil only when the complete rung is TRUE.',
  'Parallel branches offer alternative paths around a condition.',
], 'Use a pointer to trace the series contacts. If START is false, the path is false. If START and GUARD_OK are true, the path reaches RUN_CMD. “Power flow” is a teaching metaphor for logical continuity.', (s) => { simpleRung(s, [{ tag: 'START' }, { tag: 'GUARD_OK' }], 'RUN_CMD', { title: 'SERIES = BOTH CONDITIONS REQUIRED', y: 3.48, centers: [8.44, 9.9], coilX: 11.15 }); chip(s, 'TRUE  AND  TRUE  ->  COIL ON', 7.31, 5.62, 4.77, C.yellowPale, C.yellowInk); });

slide(9, 'Contacts and coils: the core symbols', '00:15-00:18', 'LADDER GRAMMAR', [
  'NO contact instruction passes when its Boolean variable is TRUE.',
  'NC contact instruction passes when its Boolean variable is FALSE.',
  'An ordinary coil writes the rung result to its Boolean variable.',
  'Symbol describes the logic test; the tag identifies the variable.',
], 'Explain NO and NC as Boolean tests: NO passes for variable 1; NC passes for variable 0. An ordinary coil is assigned the rung result each scan. Do not confuse the ladder symbol with the physical switch wiring.', (s) => { panel(s, 'Three symbols used in every lab'); const a = [{ x: 7.02, symbol: '--| |--', name: 'NO CONTACT', note: 'TRUE variable passes', color: C.teal }, { x: 8.82, symbol: '--|/|--', name: 'NC CONTACT', note: 'FALSE variable passes', color: C.yellowInk }, { x: 10.62, symbol: '--( )--', name: 'COIL', note: 'stores rung result', color: C.tealDark }]; a.forEach((it) => { rect(s, it.x, 3.05, 1.57, 1.6, C.paper, C.line, 0.8, true); text(s, it.symbol, it.x + 0.08, 3.36, 1.41, 0.4, { fontFace: MONO, fontSize: 18, bold: true, color: it.color, align: 'center' }); text(s, it.name, it.x + 0.08, 4.0, 1.41, 0.18, { fontSize: 7.7, bold: true, color: C.ink, align: 'center' }); text(s, it.note, it.x + 0.08, 4.26, 1.41, 0.22, { fontSize: 8.2, color: C.muted, align: 'center' }); }); rect(s, 7.0, 5.14, 5.32, 0.63, C.yellowPale, C.yellowPale, 0); text(s, 'Memory cue: NO tests for 1; NC tests for 0.', 7.2, 5.33, 4.9, 0.2, { fontSize: 10.5, bold: true, color: C.yellowInk, align: 'center' }); });

slide(10, 'Important distinction: instruction vs real switch', '00:18-00:21', 'LADDER GRAMMAR', [
  'A ladder NO contact does not prove a field device is physically NO.',
  'An input variable may mean “pressed”, “healthy”, or a sensor state.',
  'A ladder NC contact means NOT(variable) in the logic evaluation.',
  'Define what TRUE means for each input tag.',
], 'A physical E-stop may use normally-closed wiring while an ESTOP_HEALTHY tag is true when healthy. A NO ladder contact on that tag passes when the tag is true. Never infer physical wiring from the software instruction symbol; document signal polarity and meaning.', (s) => { panel(s, 'Two separate questions'); rect(s, 6.98, 2.76, 2.38, 2.2, C.tealPale, C.line, 0.8, true); text(s, 'FIELD DEVICE', 7.19, 3.03, 1.95, 0.21, { fontSize: 8.5, bold: true, color: C.teal, align: 'center' }); text(s, 'How is the switch\nphysically wired?', 7.18, 3.55, 1.98, 0.63, { fontFace: HEAD, fontSize: 15, bold: true, color: C.ink, align: 'center' }); rect(s, 9.75, 2.76, 2.38, 2.2, C.yellowPale, C.line, 0.8, true); text(s, 'LADDER INSTRUCTION', 9.96, 3.03, 1.96, 0.21, { fontSize: 8.2, bold: true, color: C.yellowInk, align: 'center' }); text(s, 'Does this tag equal\nTRUE or FALSE?', 9.96, 3.55, 1.95, 0.63, { fontFace: HEAD, fontSize: 15, bold: true, color: C.ink, align: 'center' }); text(s, 'NAME THE SIGNAL STATE IN PLAIN LANGUAGE', 7.1, 5.55, 5.16, 0.2, { fontSize: 8.6, bold: true, color: C.tealDark, align: 'center', charSpacing: 0.5 }); });

slide(11, 'Example: a single contact controls a coil', '00:21-00:23', 'LADDER GRAMMAR', [
  'Rung: START_PB -> RUN_LAMP.',
  'START_PB=0: contact is open; coil result is FALSE.',
  'START_PB=1: contact passes; coil result is TRUE.',
  'Release button: ordinary coil turns OFF on a later scan.',
], 'Narrate both states. This simple rung is not a latch: the output follows the input. Toggle START_PB in the simulator and watch RUN_LAMP change. Releasing the button makes the rung false and the normal coil turns off on program evaluation.', (s) => { simpleRung(s, [{ tag: 'START_PB' }], 'RUN_LAMP', { title: 'ONE INPUT, ONE ORDINARY COIL', y: 3.48, centers: [9.02], coilX: 11.1 }); chip(s, 'NO MEMORY  /  OUTPUT FOLLOWS INPUT', 7.38, 5.63, 4.7, C.yellowPale, C.yellowInk); });

slide(12, 'AND logic: contacts in series', '00:23-00:25', 'LAB 1   /   AND', [
  'Use one NO contact for each required TRUE condition.',
  'A series path passes only when every contact passes.',
  'RUN_PERMIT = GUARD_OK AND AIR_OK.',
  'If either permissive is FALSE, RUN_PERMIT is FALSE.',
], 'Introduce the first lab. AND means all conditions are required. The rung is two NO contacts in series. Ask viewers to predict outputs for 00, 01, 10 and 11 before reading the table. This is a classroom Boolean exercise, not a safety-rated permissive or emergency-stop design.', (s) => { simpleRung(s, [{ tag: 'GUARD_OK' }, { tag: 'AIR_OK' }], 'RUN_PERMIT', { title: 'AND = ALL PATH CONDITIONS MUST PASS', y: 3.08, centers: [8.35, 9.7], coilX: 11.0 }); table(s, 'Truth table', ['GUARD', 'AIR', 'PERMIT'], [['0', '0', '0'], ['0', '1', '0'], ['1', '0', '0'], ['1', '1', '1']], 7.16, 4.52, [1.05, 1.05, 1.5]); });

slide(13, 'Lab 1: build an AND permissive', '00:25-00:28', 'LAB 1   /   AND', [
  'Create BOOL tags: GUARD_OK, AIR_OK and RUN_PERMIT.',
  'Add GUARD_OK and AIR_OK as NO contacts in series.',
  'Add an ordinary RUN_PERMIT coil and connect the complete rung.',
  'Name every tag before wiring; check compile/build status.',
], 'Pause for the build. Declare three BOOL variables, add one rung, place two NO contacts in series and one normal output coil. Use the actual declaration and contact-placement controls in your Editor version. Do not connect real actuators for this introductory logic exercise.', (s) => { simpleRung(s, [{ tag: 'GUARD_OK' }, { tag: 'AIR_OK' }], 'RUN_PERMIT', { title: 'BUILD THIS EXACTLY', y: 3.25, centers: [8.35, 9.75], coilX: 11.08 }); rect(s, 7.03, 5.3, 5.16, 0.68, C.yellowPale, C.yellowPale, 0); text(s, 'Build cue: declare -> place -> connect -> compile.', 7.2, 5.52, 4.8, 0.22, { fontSize: 10.4, bold: true, color: C.yellowInk, align: 'center' }); });

slide(14, 'Lab 1: test every input combination', '00:28-00:30', 'LAB 1   /   AND', [
  'Run the program in the OpenPLC simulator/monitor.',
  'Set GUARD_OK and AIR_OK to 00, 01, 10 and 11.',
  'Observe RUN_PERMIT after each change.',
  'Expected: coil is TRUE only for 11.',
], 'Demonstrate the four combinations, changing one input at a time and allowing the simulator to update. Record expected and observed result. If the editor highlights true paths, explain that the color indicates logic state, not actual voltage.', (s) => { panel(s, 'Expected AND results'); table(s, 'Fill observed column while you test', ['GUARD', 'AIR', 'EXPECTED'], [['0', '0', '0'], ['0', '1', '0'], ['1', '0', '0'], ['1', '1', '1']], 7.19, 2.88, [1.03, 1.03, 1.78]); chip(s, 'ONE PASSING CASE OUT OF FOUR', 7.36, 5.56, 4.63, C.yellowPale, C.yellowInk); });

slide(15, 'Lab 2: OR means either path can work', '00:30-00:34', 'LAB 2   /   OR', [
  'Create BOOL tags: FAULT, CYCLE_COMPLETE and BUZZER_CMD.',
  'Draw FAULT and CYCLE_COMPLETE on separate parallel branches.',
  'Join branches before one BUZZER_CMD coil.',
  'Either TRUE condition energises output; both FALSE means OFF.',
], 'Explain that the logic reaches the coil by the upper OR lower path. Both branches merge before one coil. Keep a single writer for each coil variable. Build with symbolic tags and verify all four cases.', (s) => { parallelOr(s); table(s, 'OR truth table', ['FAULT', 'DONE', 'BUZZER'], [['0', '0', '0'], ['0', '1', '1'], ['1', '0', '1'], ['1', '1', '1']], 7.18, 4.52, [0.98, 0.98, 1.46]); });

slide(16, 'Lab 3: NOT means test for FALSE', '00:34-00:38', 'LAB 3   /   NOT', [
  'Create BOOL tags: SENSOR_ACTIVE and SENSOR_INACTIVE.',
  'Use an NC ladder contact instruction for SENSOR_ACTIVE.',
  'Drive SENSOR_INACTIVE with an ordinary coil.',
  'Coil is ON only when SENSOR_ACTIVE is FALSE.',
], 'The NC instruction implements logical negation. When SENSOR_ACTIVE is zero, the contact passes; when the tag is one, it blocks. Build and test both states. This says nothing by itself about physical sensor wiring.', (s) => { simpleRung(s, [{ tag: 'SENSOR_ACTIVE', nc: true, accent: C.yellowInk }], 'SENSOR_INACTIVE', { title: 'NC INSTRUCTION = NOT THE TAG', y: 3.35, centers: [9.0], coilX: 11.1 }); table(s, 'NOT truth table', ['INPUT', 'OUTPUT'], [['0', '1'], ['1', '0']], 7.45, 4.8, [1.42, 1.65]); });

slide(17, 'Checkpoint: predict before you click', '00:38-00:39', 'KNOWLEDGE CHECK', [
  'Series NO contacts represent which Boolean operation?',
  'Parallel branches represent which Boolean operation?',
  'When does an NC instruction pass?',
  'Does a normal coil remember its previous state?',
], 'Pause for answers. Series is AND; parallel is OR; NC passes when its variable is false; an ordinary coil follows the rung each scan and does not remember state. The next section adds memory feedback.', (s) => { panel(s, 'Answer out loud before continuing'); const a = [['SERIES', 'AND'], ['PARALLEL', 'OR'], ['NC PASSES WHEN', 'VARIABLE = 0'], ['NORMAL COIL', 'No memory']]; a.forEach((v, i) => { const y = 2.72 + i * 0.73; rect(s, 7.0, y, 5.2, 0.52, i % 2 ? C.yellowPale : C.tealPale, C.line, 0.55); text(s, v[0], 7.18, y + 0.16, 1.75, 0.18, { fontSize: 8, bold: true, color: i % 2 ? C.yellowInk : C.teal }); text(s, v[1], 9.24, y + 0.13, 2.7, 0.22, { fontSize: 10.3, bold: true, color: C.ink }); }); });

slide(18, 'A latch adds memory to a rung', '00:39-00:42', 'LAB 4   /   LATCH', [
  'A momentary Start command turns RUN_BIT ON.',
  'A feedback contact uses RUN_BIT to keep the path true afterward.',
  'Stop breaks the path, making RUN_BIT turn OFF.',
  'This is a seal-in circuit made from ordinary logic.',
], 'Tell the story before drawing. The momentary button is released, but the control state remains active because the output’s own contact provides a parallel holding path. Stop is after the merge, so it breaks both paths. This is a teaching example, not safety-rated control.', (s) => { panel(s, 'Momentary start -> persistent run state'); const a = [['IDLE', 'RUN = 0'], ['PRESS START', 'rung becomes true'], ['HOLD', 'RUN contact closes'], ['PRESS STOP', 'path breaks']]; a.forEach((v, i) => { const x = 6.94 + i * 1.34; rect(s, x, 3.07, 1.12, 1.1, i === 2 ? C.yellowPale : C.tealPale, C.line, 0.7, true); text(s, v[0], x + 0.07, 3.3, 0.98, 0.2, { fontSize: 8, bold: true, color: i === 2 ? C.yellowInk : C.tealDark, align: 'center' }); text(s, v[1], x + 0.07, 3.68, 0.98, 0.26, { fontSize: 8, color: C.body, align: 'center' }); if (i < 3) line(s, x + 1.14, 3.63, x + 1.32, 3.63, C.teal, 1.3, { endArrowType: 'triangle' }); }); chip(s, 'START IS MOMENTARY; RUN_BIT IS THE MEMORY', 7.18, 5.26, 4.96, C.yellowPale, C.yellowInk); });

slide(19, 'Seal-in rung: draw the holding branch', '00:42-00:46', 'LAB 4   /   LATCH', [
  'START_PB and RUN_BIT feedback contacts are parallel.',
  'STOP_PB is an NC instruction in series with the joined branches.',
  'One RUN_BIT coil is driven by the completed rung.',
  'RUN_BIT = (START_PB OR RUN_BIT) AND NOT(STOP_PB).',
], 'Trace both paths: pressing Start or the already-true RUN_BIT feedback. The branches merge, then share the Stop condition. When RUN_BIT turns on, its feedback contact is true on a subsequent evaluation and maintains the path until Stop is true.', (s) => { latch(s); rect(s, 7.15, 5.72, 5.0, 0.52, C.yellowPale, C.yellowPale, 0); text(s, 'OR branch first  /  STOP condition after the merge', 7.3, 5.89, 4.7, 0.2, { fontSize: 9.4, bold: true, color: C.yellowInk, align: 'center' }); });

slide(20, 'Latch walkthrough: four moments in time', '00:46-00:48', 'LAB 4   /   LATCH', [
  'Idle: Start=0, RUN=0, Stop=0 -> rung false.',
  'Press Start: Start=1 -> rung true -> RUN becomes 1.',
  'Release Start: RUN contact now supplies the parallel path.',
  'Press Stop: NC Stop test fails -> RUN becomes 0.',
], 'Narrate the input state for each moment. Initially both branches are false. Pressing Start turns the coil on. Releasing Start leaves the feedback branch true. Pressing Stop makes the NC instruction fail, clearing RUN. Releasing Stop does not restart because Start is no longer pressed.', (s) => { panel(s, 'State trace'); table(s, 'Prior state affects next result', ['START', 'RUN OLD', 'STOP', 'RUN NEXT'], [['0', '0', '0', '0'], ['1', '0', '0', '1'], ['0', '1', '0', '1'], ['0', '1', '1', '0']], 6.94, 2.76, [0.95, 1.12, 0.95, 1.3]); chip(s, 'FEEDBACK MAKES PRIOR RUN STATE PART OF THE NEXT EVALUATION', 7.08, 5.6, 5.05, C.yellowPale, C.yellowInk); });

slide(21, 'Lab 4: build the start-stop latch', '00:48-00:53', 'LAB 4   /   LATCH', [
  'Declare BOOL tags: START_PB, STOP_PB and RUN_BIT.',
  'Draw a parallel branch: START_PB above, RUN_BIT below.',
  'Merge branches; add NC STOP_PB; finish with one RUN_BIT coil.',
  'Compile, start simulation, and observe all three Boolean states.',
], 'Pause for this longer build. Declare the tags, draw the rung left-to-right, split and rejoin the Start and feedback branches, then add the NC Stop contact and one normal coil. Use the installed Editor’s actual gestures. Compile before starting the simulator.', (s) => { latch(s); rect(s, 7.04, 5.76, 5.22, 0.54, C.tealPale, C.tealPale, 0); text(s, 'Make the branch join clearly before placing STOP_PB.', 7.22, 5.92, 4.86, 0.2, { fontSize: 9.2, bold: true, color: C.tealDark, align: 'center' }); });

slide(22, 'Lab 4: test start, hold and stop', '00:53-00:56', 'LAB 4   /   LATCH', [
  'Test 1: pulse Start briefly; RUN_BIT should turn ON.',
  'Test 2: release Start; RUN_BIT should remain ON.',
  'Test 3: press Stop; RUN_BIT should turn OFF.',
  'Test 4: release Stop without Start; RUN_BIT must stay OFF.',
], 'Run the sequence deliberately. Record pass or fail and capture the monitored variables. Also initialise RUN_BIT false and verify the intended idle state at startup.', (s) => { panel(s, 'Expected latch test record'); const a = [['01', 'Pulse START', 'RUN_BIT = 1'], ['02', 'Release START', 'RUN_BIT stays 1'], ['03', 'Press STOP', 'RUN_BIT = 0'], ['04', 'Release STOP', 'RUN_BIT stays 0']]; a.forEach((v, i) => { const y = 2.68 + i * 0.72; rect(s, 7.0, y, 5.15, 0.55, i % 2 ? C.yellowPale : C.tealPale, C.line, 0.6); text(s, v[0], 7.17, y + 0.17, 0.38, 0.16, { fontSize: 8, bold: true, color: C.teal }); text(s, v[1], 7.75, y + 0.15, 1.65, 0.2, { fontSize: 9.1, color: C.body }); text(s, v[2], 9.53, y + 0.15, 2.35, 0.2, { fontSize: 9.1, bold: true, color: C.ink }); }); chip(s, 'ALSO CHECK THE INITIAL / POWER-UP STATE', 7.23, 5.83, 4.76, C.yellowPale, C.yellowInk); });

slide(23, 'Run the simulator: watch logic, not just the drawing', '00:56-00:58', 'OPENPLC WORKFLOW', [
  'Build/compile the LD program and resolve errors first.',
  'Start or connect the simulator according to your Editor setup.',
  'Toggle symbolic input variables and watch coil/variable values.',
  'For every test, state input -> expected result -> observed result.',
], 'Show the actual Editor flow on screen. Runtime launch steps depend on installation: built-in simulator, integrated runtime, or separately configured runtime. Use installation documentation; do not imply one universal workflow. Demonstrate monitoring input and coil tags.', (s) => { panel(s, 'A repeatable simulator loop'); const a = [['BUILD', 'no errors'], ['RUN', 'simulation active'], ['TOGGLE', 'change one input'], ['OBSERVE', 'record the coil']]; a.forEach((v, i) => { const x = 6.96 + i * 1.34; rect(s, x, 3.15, 1.12, 1.02, i % 2 ? C.yellowPale : C.tealPale, C.line, 0.7, true); text(s, v[0], x + 0.07, 3.38, 0.98, 0.2, { fontSize: 7.8, bold: true, color: i % 2 ? C.yellowInk : C.teal, align: 'center' }); text(s, v[1], x + 0.07, 3.75, 0.98, 0.2, { fontSize: 7.8, color: C.ink, align: 'center' }); if (i < 3) line(s, x + 1.13, 3.66, x + 1.31, 3.66, C.teal, 1.2, { endArrowType: 'triangle' }); }); text(s, 'CHANGE ONE INPUT AT A TIME', 7.18, 5.3, 4.88, 0.24, { fontSize: 9, bold: true, color: C.yellowInk, align: 'center', charSpacing: 0.45 }); });

slide(24, 'Troubleshoot the rung systematically', '00:58-00:59', 'DEBUGGING', [
  'Coil never ON: check tag spelling, rung connection and input monitor.',
  'Coil stays ON: check for a parallel seal-in path or retained state.',
  'Wrong truth-table row: inspect NO/NC and the TRUE definition.',
  'Build errors: resolve undeclared variables and disconnected elements.',
], 'Model calm troubleshooting. Check input state, trace the rung left-to-right, then inspect the coil tag. If output is held, find a feedback path or latch. If NOT behavior is reversed, check NO/NC and tag meaning. Change one thing and repeat the same test.', (s) => { panel(s, 'Observation -> check -> retest'); const a = [['NO OUTPUT', 'input state / broken wire / tag', C.teal], ['STUCK ON', 'feedback branch / latch / init', C.yellowInk], ['INVERTED', 'NO vs NC / TRUE definition', C.red]]; a.forEach((v, i) => { const y = 2.78 + i * 0.9; rect(s, 7.02, y, 5.13, 0.68, i % 2 ? C.yellowPale : C.tealPale, C.line, 0.6); text(s, v[0], 7.2, y + 0.23, 1.25, 0.18, { fontSize: 8.3, bold: true, color: v[2] }); text(s, v[1], 8.72, y + 0.22, 3.16, 0.2, { fontSize: 9.1, color: C.ink }); }); chip(s, 'ONE CHANGE -> SAME TEST -> OBSERVE AGAIN', 7.2, 5.78, 4.82, C.yellowPale, C.yellowInk); });

slide(25, 'Recap + viewer challenge', '00:59-01:00', 'WRAP-UP', [
  'Series NO contacts = AND; parallel paths = OR; NC instruction = NOT.',
  'A normal coil follows rung logic; a latch holds using feedback.',
  'Challenge: build RUN = (START OR RUN) AND NOT(STOP), then prove it.',
], 'Recap the symbols, logic patterns and seal-in latch. Invite the viewer to pause and test Start pulse, held state, Stop, and release Stop. Close: these are educational examples; emergency-stop and protective functions require appropriately designed and validated safety systems.', (s) => { panel(s, 'Finish with evidence'); const a = [['DRAW', 'one rung neatly'], ['PREDICT', 'all input cases'], ['SIMULATE', 'watch the coil'], ['EXPLAIN', 'why it changed']]; a.forEach((v, i) => { const x = 6.91 + i * 1.35; rect(s, x, 3.12, 1.12, 1.12, i % 2 ? C.yellowPale : C.tealPale, C.line, 0.7, true); text(s, v[0], x + 0.07, 3.38, 0.98, 0.2, { fontSize: 7.8, bold: true, color: i % 2 ? C.yellowInk : C.teal, align: 'center' }); text(s, v[1], x + 0.07, 3.75, 0.98, 0.22, { fontSize: 8.1, color: C.ink, align: 'center' }); }); rect(s, 7.04, 5.04, 5.18, 0.87, C.redPale, C.redPale, 0); text(s, 'SAFETY NOTE', 7.22, 5.2, 1.05, 0.18, { fontSize: 8.3, bold: true, color: C.red }); text(s, 'These are learning circuits. A software latch is not a safety-rated E-stop system.', 8.33, 5.16, 3.68, 0.47, { fontSize: 9.3, bold: true, color: C.ink }); });

pptx.writeFile({ fileName: OUT, compression: true })
  .then(() => console.log(`Created ${OUT}`))
  .catch((error) => { console.error(error.stack || error.message || error); process.exitCode = 1; });