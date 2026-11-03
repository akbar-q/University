const path = require('node:path');
const PptxGenJS = require(path.resolve(__dirname, '../../5009/02 September 2026/PPTX Builder/node_modules/pptxgenjs'));

const pptx = new PptxGenJS();
const OUT = path.join(__dirname, 'Week1_Analogue_and_Digital_Information.pptx');
const W = 13.333;
const H = 7.5;
const FONT_HEAD = 'Aptos Display';
const FONT_BODY = 'Aptos';

const C = {
  paper: 'F5F8F5',
  white: 'FFFFFF',
  ink: '172D2A',
  dark: '123B37',
  body: '344A46',
  muted: '647873',
  line: 'D6E0DC',
  teal: '168579',
  mint: 'DDF0EA',
  coral: 'DB6A52',
  coralPale: 'F9E9E4',
  gold: 'D5A63D',
  goldPale: 'F7F0DE',
  blue: '527E98',
  bluePale: 'E8F0F4',
};

pptx.layout = 'LAYOUT_WIDE';
pptx.author = 'Unit 5014 Teaching Materials';
pptx.subject = 'Week 1: analogue and digital information';
pptx.title = 'Unit 5014 - What Does a Converter Preserve?';
pptx.company = 'Unit 5014';
pptx.lang = 'en-GB';
pptx.theme = { headFontFace: FONT_HEAD, bodyFontFace: FONT_BODY, lang: 'en-GB' };

function addText(slide, text, x, y, w, h, options = {}) {
  slide.addText(text, {
    x, y, w, h,
    margin: 0,
    fontFace: FONT_BODY,
    fontSize: 15,
    color: C.body,
    breakLine: false,
    valign: 'mid',
    fit: 'shrink',
    ...options,
  });
}

function rect(slide, x, y, w, h, fill, line = fill, lineWidth = 0.8) {
  slide.addShape('rect', {
    x, y, w, h,
    line: { color: line, width: lineWidth },
    fill: { color: fill },
  });
}

function line(slide, x1, y1, x2, y2, color = C.line, width = 1.2, options = {}) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  slide.addShape('line', {
    x: Math.min(x1, x2),
    y: Math.min(y1, y2),
    w: Math.abs(dx),
    h: Math.abs(dy),
    flipH: dx < 0,
    flipV: dy < 0,
    line: { color, width, ...options },
  });
}

function dot(slide, x, y, radius, fill, lineColor = fill) {
  slide.addShape('ellipse', {
    x: x - radius, y: y - radius, w: radius * 2, h: radius * 2,
    line: { color: lineColor, width: 0.8 },
    fill: { color: fill },
  });
}

function panel(slide, label, x = 6.48, y = 1.84, w = 6.15, h = 4.93, accent = C.teal) {
  rect(slide, x, y, w, h, C.white, C.line, 0.9);
  rect(slide, x, y, 0.07, h, accent, accent, 0);
  addText(slide, label.toUpperCase(), x + 0.26, y + 0.2, w - 0.52, 0.23, {
    fontSize: 9,
    bold: true,
    charSpacing: 0.9,
    color: accent,
  });
  line(slide, x + 0.26, y + 0.57, x + w - 0.26, y + 0.57, C.line, 0.8);
}

function pointList(slide, items, accent = C.teal) {
  const top = 1.93;
  const bottom = 6.74;
  const gap = 0.13;
  const rowH = (bottom - top - gap * (items.length - 1)) / items.length;
  items.forEach((item, index) => {
    const y = top + index * (rowH + gap);
    rect(slide, 0.7, y + 0.02, 0.055, rowH - 0.04, index % 2 ? C.line : accent, index % 2 ? C.line : accent, 0);
    addText(slide, String(index + 1).padStart(2, '0'), 0.9, y + 0.09, 0.38, 0.25, {
      fontSize: 9.5, bold: true, color: accent, valign: 'top',
    });
    addText(slide, item, 1.4, y + 0.02, 4.75, rowH - 0.02, {
      fontSize: item.length > 94 ? 14.2 : item.length > 72 ? 15.2 : 16.4,
      color: C.body,
    });
  });
}

function baseSlide(number, title, time, section = 'LO3 FOUNDATIONS', accent = C.teal) {
  const slide = pptx.addSlide();
  slide.background = { color: C.paper };
  rect(slide, 0, 0, W, 0.09, accent, accent, 0);
  addText(slide, 'UNIT 5014   /   WEEK 01', 0.68, 0.25, 2.8, 0.23, {
    fontSize: 9, bold: true, charSpacing: 0.8, color: C.dark,
  });
  addText(slide, section, 3.5, 0.25, 3.2, 0.23, {
    fontSize: 9, bold: true, charSpacing: 0.75, color: accent,
  });
  addText(slide, time.toUpperCase(), 10.1, 0.24, 1.32, 0.24, {
    fontSize: 9, bold: true, color: C.muted, align: 'right',
  });
  rect(slide, 11.7, 0.2, 0.95, 0.34, C.white, accent, 1);
  addText(slide, 'LO3', 11.72, 0.24, 0.91, 0.23, {
    fontSize: 9, bold: true, color: accent, align: 'center',
  });
  addText(slide, title, 0.68, 0.72, 12.0, 0.69, {
    fontFace: FONT_HEAD,
    fontSize: title.length > 46 ? 27 : 31,
    bold: true,
    color: C.ink,
  });
  line(slide, 0.68, 1.57, 12.65, 1.57, C.line, 1);
  line(slide, 0.68, 6.96, 12.65, 6.96, C.line, 0.8);
  addText(slide, 'ANALOGUE + DIGITAL INFORMATION', 0.68, 7.07, 6.5, 0.19, {
    fontSize: 8, bold: true, charSpacing: 0.65, color: C.muted,
  });
  addText(slide, `${String(number).padStart(2, '0')} / 16`, 11.55, 7.05, 1.1, 0.22, {
    fontSize: 9, bold: true, color: C.ink, align: 'right',
  });
  return slide;
}

function addNotes(slide, number, time, content) {
  slide.addNotes(`UNIT 5014 | WEEK 1 | Slide ${number} of 16 | ${time}\n\n${content}`);
}

function axes(slide, x, y, w, h, xLabel = 'TIME', yLabel = 'SIGNAL') {
  line(slide, x, y + h, x + w, y + h, C.muted, 1, { endArrowType: 'triangle' });
  line(slide, x, y + h, x, y, C.muted, 1, { endArrowType: 'triangle' });
  addText(slide, xLabel, x + w - 0.55, y + h + 0.12, 0.55, 0.18, {
    fontSize: 8, bold: true, color: C.muted, align: 'right',
  });
  addText(slide, yLabel, x - 0.02, y - 0.23, 0.82, 0.16, {
    fontSize: 8, bold: true, color: C.muted,
  });
}

function polyline(slide, points, color, width = 2) {
  for (let index = 0; index < points.length - 1; index += 1) {
    line(slide, points[index][0], points[index][1], points[index + 1][0], points[index + 1][1], color, width);
  }
}

function sinePoints(x, y, w, h, cycles = 1, phase = 0, amplitude = 0.36, samples = 72) {
  const points = [];
  for (let index = 0; index <= samples; index += 1) {
    const fraction = index / samples;
    const value = Math.sin(fraction * Math.PI * 2 * cycles + phase);
    points.push([x + fraction * w, y + h / 2 - value * h * amplitude]);
  }
  return points;
}

function drawQuantizedSteps(slide, x, y, w, h, cycles, levels, color, points = 48) {
  const mid = y + h / 2;
  const amp = h * 0.36;
  const quantize = (value) => Math.round(value * (levels - 1)) / (levels - 1);
  let prev = quantize(Math.sin(0));
  let px = x;
  let py = mid - prev * amp;
  for (let index = 1; index <= points; index += 1) {
    const fraction = index / points;
    const value = quantize(Math.sin(fraction * Math.PI * 2 * cycles));
    const nx = x + fraction * w;
    const ny = mid - value * amp;
    line(slide, px, py, nx, py, color, 1.6);
    line(slide, nx, py, nx, ny, color, 1.6);
    if (index % 4 === 0) dot(slide, nx, ny, 0.035, color);
    px = nx;
    py = ny;
  }
}

function box(slide, label, detail, x, y, w, h, accent, fill = C.paper) {
  rect(slide, x, y, w, h, fill, C.line, 0.8);
  rect(slide, x, y, w, 0.055, accent, accent, 0);
  addText(slide, label, x + 0.13, y + 0.15, w - 0.26, 0.26, {
    fontSize: 10, bold: true, color: accent, charSpacing: 0.4,
  });
  addText(slide, detail, x + 0.13, y + 0.48, w - 0.26, h - 0.58, {
    fontSize: detail.length > 75 ? 11 : 12.5,
    color: C.body,
    valign: 'top',
  });
}

function addCover() {
  const slide = pptx.addSlide();
  slide.background = { color: C.dark };
  rect(slide, 0, 0, W, 0.12, C.coral, C.coral, 0);
  addText(slide, 'UNIT 5014   /   WEEK 01   /   LO3', 0.78, 0.55, 5.4, 0.27, {
    fontSize: 10, bold: true, color: 'B8DED4', charSpacing: 1.1,
  });
  addText(slide, 'What does a\nconverter preserve?', 0.78, 1.27, 6.0, 1.75, {
    fontFace: FONT_HEAD, fontSize: 39, bold: true, color: C.white, valign: 'mid',
  });
  addText(slide, 'Analogue and digital information', 0.81, 3.24, 5.65, 0.48, {
    fontFace: FONT_HEAD, fontSize: 21, bold: true, color: 'E5B650',
  });
  addText(slide, 'From a physical signal to a sampled, coded value - and the information that can be lost along the way.', 0.82, 3.92, 4.95, 0.88, {
    fontSize: 17, color: 'E4EEEA', valign: 'top',
  });
  addText(slide, 'LO3 foundations  /  representation, limits and signal-chain choices', 0.82, 6.56, 6.3, 0.3, {
    fontSize: 10.5, bold: true, color: 'B8DED4', charSpacing: 0.35,
  });

  const gx = 7.1;
  const gy = 1.5;
  const gw = 5.3;
  const gh = 3.9;
  rect(slide, 6.85, 1.08, 5.85, 4.92, '173F3B', '38635D', 0.8);
  addText(slide, 'ONE SIGNAL, TWO REPRESENTATIONS', 7.2, 1.36, 4.75, 0.22, {
    fontSize: 9, bold: true, color: 'B8DED4', charSpacing: 0.8,
  });
  axes(slide, gx, gy + 0.38, gw, gh, 'TIME', 'VOLTAGE');
  polyline(slide, sinePoints(gx + 0.1, gy + 0.52, gw - 0.2, gh - 0.58, 1.25, 0, 0.34, 96), C.coral, 2.4);
  drawQuantizedSteps(slide, gx + 0.1, gy + 0.52, gw - 0.2, gh - 0.58, 1.25, 8, '82D2BE', 28);
  addText(slide, 'continuous input', 7.18, 5.6, 1.85, 0.21, { fontSize: 9, bold: true, color: C.coral });
  addText(slide, 'sampled + coded', 10.15, 5.6, 1.88, 0.21, { fontSize: 9, bold: true, color: '82D2BE', align: 'right' });
  addText(slide, '01 / 16', 11.55, 7.03, 1.08, 0.22, { fontSize: 9, bold: true, color: 'D1E6DF', align: 'right' });
  addNotes(slide, 1, '00:00-00:05', 'Explain that a learning outcome describes a broad capability, while assessment criteria specify the evidence used to judge it. Briefly map the eight weeks: representation and converters first, then a physical thermistor-to-ADC design. Ask students for one familiar analogue signal and one digital value representing it.');
  return slide;
}

function addLearningOutcomes() {
  const slide = baseSlide(2, 'What should you be able to do today?', '00:05-00:10', 'START HERE', C.coral);
  pointList(slide, [
    'Explain in plain language what an ADC takes in and what it produces.',
    'Distinguish a continuous analogue signal from sampled, coded digital values.',
    'Compare their limits using a temperature-measurement example.',
    'State one design consequence of a signal or converter limit.',
  ], C.coral);
  panel(slide, 'The unit learning path', 6.48, 1.84, 6.15, 4.93, C.coral);
  box(slide, 'LO3  /  WEEKS 1-4', 'Assess how analogue and digital conversion works, what limits performance, and how to select converters.', 6.87, 2.67, 2.45, 1.39, C.teal, C.mint);
  box(slide, 'LO4  /  WEEKS 5-8', 'Design, simulate, build and test a physical thermistor-to-ADC circuit.', 9.74, 2.67, 2.45, 1.39, C.coral, C.coralPale);
  line(slide, 9.33, 3.36, 9.71, 3.36, C.muted, 1.3, { endArrowType: 'triangle' });
  addText(slide, 'LEARNING OUTCOME', 6.9, 4.55, 1.55, 0.2, { fontSize: 8, bold: true, color: C.muted });
  addText(slide, 'The capability you are building', 6.9, 4.81, 2.5, 0.32, { fontSize: 12, bold: true, color: C.ink });
  addText(slide, 'ASSESSMENT CRITERION', 9.73, 4.55, 2.0, 0.2, { fontSize: 8, bold: true, color: C.muted });
  addText(slide, 'The evidence that shows it', 9.73, 4.81, 2.4, 0.32, { fontSize: 12, bold: true, color: C.ink });
  rect(slide, 6.89, 5.55, 5.29, 0.68, C.goldPale, C.goldPale, 0);
  addText(slide, 'QUICK DIAGNOSTIC', 7.08, 5.68, 1.45, 0.18, { fontSize: 8, bold: true, color: C.ink });
  addText(slide, 'More bits always means more accuracy. Agree or disagree?', 8.53, 5.63, 3.42, 0.34, { fontSize: 11, bold: true, color: C.ink });
  addNotes(slide, 2, '00:05-00:10', 'Quick diagnostic: ask whether an ADC with more bits is necessarily more accurate. Take two answers, record the competing claims, and revisit them in the exit ticket. Explain that learning outcomes describe broad capabilities and assessment criteria identify the evidence for them.');
}

function addAdcBasics() {
  const slide = baseSlide(3, 'An ADC turns voltage into a number', '00:10-00:20', 'CORE IDEA', C.teal);
  pointList(slide, [
    'Input: an analogue voltage from a sensor or circuit.',
    'Sample: take a reading at a particular moment.',
    'Quantise: place the reading into one of a finite set of levels.',
    'Encode: report that level as a digital code.',
  ], C.teal);
  panel(slide, 'From physical signal to digital code', 6.48, 1.84, 6.15, 4.93, C.teal);
  const nodes = [
    ['SENSOR', 'physical quantity'],
    ['VOLTAGE', 'analogue input'],
    ['ADC', 'sample + quantise'],
    ['CODE', 'digital output'],
  ];
  const nx = [6.82, 8.28, 9.74, 11.2];
  nodes.forEach((node, index) => {
    rect(slide, nx[index], 2.73, 1.16, 0.86, index === 2 ? C.mint : C.paper, index === 2 ? C.teal : C.line, 1);
    addText(slide, node[0], nx[index] + 0.07, 2.9, 1.02, 0.21, { fontSize: 9, bold: true, color: index === 2 ? C.teal : C.ink, align: 'center' });
    addText(slide, node[1], nx[index] + 0.05, 3.2, 1.06, 0.22, { fontSize: 7.8, color: C.muted, align: 'center' });
    if (index < nodes.length - 1) line(slide, nx[index] + 1.18, 3.16, nx[index + 1] - 0.07, 3.16, C.teal, 1.5, { endArrowType: 'triangle' });
  });
  addText(slide, 'ADC INPUT', 8.27, 4.04, 1.2, 0.2, { fontSize: 8, bold: true, color: C.coral, align: 'center' });
  addText(slide, 'analogue volts', 8.22, 4.3, 1.34, 0.24, { fontSize: 10.5, color: C.body, align: 'center' });
  addText(slide, 'ADC OUTPUT', 10.99, 4.04, 1.45, 0.2, { fontSize: 8, bold: true, color: C.teal, align: 'center' });
  addText(slide, 'digital code', 10.98, 4.3, 1.45, 0.24, { fontSize: 10.5, color: C.body, align: 'center' });
  rect(slide, 6.88, 5.15, 5.29, 0.86, C.goldPale, C.goldPale, 0);
  addText(slide, 'IMPORTANT', 7.08, 5.32, 0.95, 0.2, { fontSize: 8, bold: true, color: C.ink });
  addText(slide, 'The ADC measures voltage. Calibration or a sensor model gives that code meaning, such as temperature.', 8.03, 5.28, 3.91, 0.5, { fontSize: 11.2, color: C.ink });
  addNotes(slide, 3, '00:10-00:20', 'Start with a simple example: a sensor produces 1.2 V and the ADC reports a code for that voltage. Explain each step in everyday terms: sample means take a reading at a moment; quantise means map it to one of a finite set of levels; encode means write that level as a digital number. The ADC does not know the voltage means temperature. A sensor model or calibration maps the reading to a physical quantity. Keep DACs for the later reverse-conversion discussion. Quick check: students point out the ADC input (voltage) and output (digital code) on the diagram.');
}

function addRepresentations() {
  const slide = baseSlide(4, 'Analogue and digital are different representations', '00:20-00:32', 'CORE IDEA', C.blue);
  pointList(slide, [
    'Analogue: continuous signal amplitude, within real circuit limits.',
    'Digital: values sampled in time and quantised into codes.',
    'Sampling interval sets time spacing; code width sets amplitude resolution.',
    'Digital systems are not noise-free: the signal path is still physical.',
  ], C.blue);
  panel(slide, 'Same information, different form', 6.48, 1.84, 6.15, 4.93, C.blue);
  addText(slide, 'ANALOGUE', 6.9, 2.62, 1.5, 0.24, { fontSize: 9, bold: true, color: C.coral, charSpacing: 0.6 });
  addText(slide, 'DIGITAL', 9.75, 2.62, 1.4, 0.24, { fontSize: 9, bold: true, color: C.blue, charSpacing: 0.6 });
  axes(slide, 6.98, 3.02, 2.24, 2.1, 'TIME', 'V');
  polyline(slide, sinePoints(7.03, 3.08, 2.12, 1.96, 1.25, 0, 0.38, 64), C.coral, 2.2);
  axes(slide, 9.84, 3.02, 2.25, 2.1, 'TIME', 'CODE');
  polyline(slide, sinePoints(9.9, 3.08, 2.13, 1.96, 1.25, 0, 0.38, 64), 'CFDAD5', 1);
  drawQuantizedSteps(slide, 9.9, 3.08, 2.13, 1.96, 1.25, 6, C.blue, 20);
  addText(slide, 'continues between moments', 6.93, 5.62, 2.35, 0.25, { fontSize: 9, color: C.muted, align: 'center' });
  addText(slide, 'a finite set of values', 9.82, 5.62, 2.3, 0.25, { fontSize: 9, color: C.muted, align: 'center' });
  addNotes(slide, 4, '00:20-00:32', 'Sketch a sine wave, sampled points, and quantised steps. Ask students to point to sampling error versus quantisation error. Clarify that digital is not noise-free: acquisition, clocking, references, interfaces and reconstruction remain physical.');
}

function addDegradation() {
  const slide = baseSlide(5, 'Where can information be degraded?', '00:32-00:44', 'LIMITS + ERRORS', C.coral);
  pointList(slide, [
    'Range: clipping, saturation, or ADC codes left unused.',
    'Bandwidth: filtering and sampling determine which changes survive.',
    'Resolution is not accuracy; a small code step does not remove other errors.',
    'Noise, drift and nonlinearity affect whether a change is believable.',
  ], C.coral);
  panel(slide, 'Four questions to ask of a signal chain', 6.48, 1.84, 6.15, 4.93, C.coral);
  const cards = [
    ['RANGE', 'Does it fit?', C.teal, C.mint],
    ['BANDWIDTH', 'Is it fast enough?', C.blue, C.bluePale],
    ['FIDELITY', 'How close?', C.coral, C.coralPale],
    ['STABILITY', 'Does it drift?', C.gold, C.goldPale],
  ];
  cards.forEach((item, index) => {
    const x = 6.87 + (index % 2) * 2.82;
    const y = 2.64 + Math.floor(index / 2) * 1.48;
    rect(slide, x, y, 2.52, 1.12, item[3], item[3], 0);
    rect(slide, x, y, 0.06, 1.12, item[2], item[2], 0);
    addText(slide, item[0], x + 0.2, y + 0.22, 2.1, 0.2, { fontSize: 9, bold: true, color: item[2], charSpacing: 0.6 });
    addText(slide, item[1], x + 0.2, y + 0.55, 2.1, 0.31, { fontFace: FONT_HEAD, fontSize: 17, bold: true, color: C.ink });
  });
  addText(slide, 'REPEATABILITY is not the same as ACCURACY', 7.05, 5.94, 4.95, 0.29, { fontSize: 11.5, bold: true, color: C.ink, align: 'center' });
  addNotes(slide, 5, '00:32-00:44', 'Define each term briefly, then connect it to a design consequence. For analogue: component tolerances, ageing, interference and storage degradation. For digital: quantisation, finite range, sampling, conversion errors and corrupted data. Contrast repeatability with accuracy.');
}

function addWorkedAdc() {
  const slide = baseSlide(6, 'A 10-bit ADC over a 0-5 V range', '00:44-00:55', 'WORKED EXAMPLE', C.gold);
  pointList(slide, [
    '10 bits provide 2^10 = 1,024 possible codes.',
    'Ideal step: 5.00 V / 1,024 = 4.88 mV per code.',
    'A 2.00 V input corresponds to about 410 ideal code steps.',
    'Sensor, reference and noise errors remain beyond quantisation.',
  ], C.gold);
  panel(slide, 'Resolution gives a step size, not a complete accuracy claim', 6.48, 1.84, 6.15, 4.93, C.gold);
  rect(slide, 6.93, 2.7, 5.22, 1.0, C.dark, C.dark, 0);
  addText(slide, 'q = VFS / 2^N', 7.22, 2.91, 2.55, 0.5, { fontFace: FONT_HEAD, fontSize: 25, bold: true, color: C.white });
  addText(slide, 'q = 5.00 V / 1,024 = 4.88 mV', 9.65, 2.94, 2.27, 0.36, { fontSize: 13, bold: true, color: '9CD6C6', align: 'center' });
  const x = 7.06;
  const y = 4.3;
  addText(slide, 'IDEAL CODE STEPS', x, y - 0.27, 1.7, 0.2, { fontSize: 8.5, bold: true, color: C.muted });
  line(slide, x + 0.1, y + 0.8, x + 4.85, y + 0.8, C.muted, 1);
  for (let index = 0; index < 9; index += 1) {
    const xx = x + 0.2 + index * 0.55;
    const height = 0.2 + index * 0.068;
    rect(slide, xx, y + 0.8 - height, 0.34, height, index === 5 ? C.coral : C.mint, index === 5 ? C.coral : C.teal, 0.7);
  }
  addText(slide, '0 V', x, y + 0.94, 0.6, 0.2, { fontSize: 8.5, color: C.muted });
  addText(slide, '5.00 V full scale', x + 3.85, y + 0.94, 1.35, 0.2, { fontSize: 8.5, color: C.muted, align: 'right' });
  addText(slide, '2.00 V -> approx. 410', x + 1.83, y + 1.29, 2.2, 0.26, { fontSize: 12, bold: true, color: C.coral, align: 'center' });
  addNotes(slide, 6, '00:44-00:55', 'Work the example slowly and state the code convention. Ask students to calculate the ideal code at 2.00 V and the ideal voltage represented by code 410. Note that endpoint and transfer-function conventions differ; datasheets determine the exact model. The number 410 is an approximate code step, not a universal rounding convention.');
}

function addSampling() {
  const slide = baseSlide(7, 'Sampling: Nyquist is a starting point', '00:55-01:07', 'SAMPLING + FILTERING', C.blue);
  pointList(slide, [
    'A band-limited signal needs a sample rate above twice its highest frequency.',
    'Too-slow sampling can make a fast signal appear slower: aliasing.',
    'An analogue anti-alias filter goes before the ADC.',
    'Real systems need margin for filter roll-off and unwanted signal content.',
  ], C.blue);
  panel(slide, 'A 7 Hz input sampled at 10 samples/s can look like 3 Hz', 6.48, 1.84, 6.15, 4.93, C.blue);
  const x = 7.03;
  const y = 2.75;
  const w = 5.05;
  const h = 2.5;
  axes(slide, x, y, w, h, 'TIME', 'AMPLITUDE');
  const truePts = [];
  const aliasPts = [];
  const t0 = 0;
  const t1 = 0.5;
  for (let index = 0; index <= 90; index += 1) {
    const t = t0 + (t1 - t0) * index / 90;
    const px = x + (t / t1) * w;
    truePts.push([px, y + h / 2 - Math.sin(2 * Math.PI * 7 * t) * h * 0.36]);
    aliasPts.push([px, y + h / 2 - Math.sin(-2 * Math.PI * 3 * t) * h * 0.36]);
  }
  polyline(slide, aliasPts, C.gold, 1.7);
  polyline(slide, truePts, C.blue, 1.2);
  for (let index = 0; index <= 5; index += 1) {
    const t = index / 10;
    const px = x + (t / t1) * w;
    const py = y + h / 2 - Math.sin(2 * Math.PI * 7 * t) * h * 0.36;
    dot(slide, px, py, 0.06, C.coral);
  }
  dot(slide, 7.24, 5.79, 0.05, C.blue);
  addText(slide, '7 Hz input', 7.36, 5.68, 1.05, 0.22, { fontSize: 8.5, color: C.blue });
  dot(slide, 8.67, 5.79, 0.05, C.coral);
  addText(slide, 'sample points', 8.79, 5.68, 1.12, 0.22, { fontSize: 8.5, color: C.coral });
  dot(slide, 10.2, 5.79, 0.05, C.gold);
  addText(slide, 'apparent 3 Hz', 10.32, 5.68, 1.42, 0.22, { fontSize: 8.5, color: C.gold });
  addNotes(slide, 7, '00:55-01:07', 'Draw a 7 Hz sine sampled at 10 samples/s. The sample values can be consistent with a lower-frequency 3 Hz pattern, illustrating aliasing. Students should not treat Nyquist as a recommended exact operating point. Link sensor bandwidth and noise bandwidth to sample rate; an analogue anti-alias filter precedes the ADC.');
}

function addCaptureExercise() {
  const slide = baseSlide(8, 'Mini exercise: diagnose the capture setup', '01:07-01:20', 'PAIRS / 13 MINUTES', C.coral);
  pointList(slide, [
    'Sensor: 0.2-2.8 V with useful bandwidth from DC to 18 Hz.',
    'ADC: 0-3.3 V, 12-bit, configured for 40 samples/s.',
    'Mark range, sampling, filter, resolution and uncertainty risks.',
    'Decide what extra evidence you need before accepting the design.',
  ], C.coral);
  panel(slide, 'Capture setup at a glance', 6.48, 1.84, 6.15, 4.93, C.coral);
  addText(slide, 'ADC INPUT RANGE', 6.92, 2.62, 1.5, 0.2, { fontSize: 8.5, bold: true, color: C.muted });
  const rx = 7.02;
  const ry = 3.18;
  const rw = 5.14;
  line(slide, rx, ry, rx + rw, ry, C.line, 7);
  line(slide, rx + rw * 0.06, ry, rx + rw * 0.85, ry, C.teal, 7);
  line(slide, rx + rw * 0.85, ry - 0.13, rx + rw * 0.85, ry + 0.13, C.coral, 1.5);
  addText(slide, '0 V', rx - 0.03, ry + 0.24, 0.5, 0.2, { fontSize: 8.5, color: C.muted });
  addText(slide, '0.2 V', rx + rw * 0.06 - 0.24, ry + 0.24, 0.7, 0.2, { fontSize: 8.5, bold: true, color: C.teal, align: 'center' });
  addText(slide, '2.8 V', rx + rw * 0.85 - 0.3, ry + 0.24, 0.7, 0.2, { fontSize: 8.5, bold: true, color: C.teal, align: 'center' });
  addText(slide, '3.3 V', rx + rw - 0.4, ry + 0.24, 0.55, 0.2, { fontSize: 8.5, color: C.muted, align: 'right' });
  box(slide, 'NYQUIST MINIMUM', '36 samples/s for 18 Hz. 40 samples/s leaves little practical margin.', 6.92, 4.08, 2.42, 1.14, C.blue, C.bluePale);
  box(slide, 'IDEAL 12-BIT STEP', '3.3 V / 4,096 = about 0.806 mV. This is not total accuracy.', 9.72, 4.08, 2.42, 1.14, C.gold, C.goldPale);
  rect(slide, 6.92, 5.65, 5.22, 0.57, C.coralPale, C.coralPale, 0);
  addText(slide, 'PAIR TASK  /  7 MIN ANALYSE  +  6 MIN REPORT', 7.1, 5.83, 4.8, 0.19, { fontSize: 9, bold: true, color: C.coral, align: 'center' });
  addNotes(slide, 8, '01:07-01:20', 'Pairs get 7 minutes to mark the setup and 6 minutes to report. Expected points: range nominally fits but headroom and noise peaks matter; Nyquist minimum is 36 samples/s so 40 has little margin; anti-alias filter required; ideal LSB is about 0.806 mV; 12-bit nominal resolution does not establish absolute accuracy. Ask what evidence is still missing.');
}

function addBreak() {
  const slide = pptx.addSlide();
  slide.background = { color: C.dark };
  rect(slide, 0, 0, W, 0.1, C.gold, C.gold, 0);
  addText(slide, 'UNIT 5014   /   WEEK 01', 0.78, 0.53, 3.3, 0.25, { fontSize: 9, bold: true, charSpacing: 0.9, color: 'B8DED4' });
  addText(slide, 'Pause. Reset.\nKeep the signal chain in view.', 0.78, 1.35, 6.5, 1.38, { fontFace: FONT_HEAD, fontSize: 34, bold: true, color: C.white });
  addText(slide, '10 MINUTES', 0.82, 3.17, 2.5, 0.42, { fontFace: FONT_HEAD, fontSize: 22, bold: true, color: 'E5B650' });
  const labels = ['PHYSICAL SIGNAL', 'SENSOR', 'VOLTAGE', 'ADC', 'DIGITAL CODE'];
  const x0 = 0.9;
  labels.forEach((label, index) => {
    const x = x0 + index * 2.45;
    rect(slide, x, 5.32, 1.85, 0.62, index === 3 ? C.teal : '244E49', index === 3 ? C.teal : '537B73', 0.9);
    addText(slide, label, x + 0.08, 5.5, 1.69, 0.2, { fontSize: 8.3, bold: true, color: C.white, align: 'center' });
    if (index < labels.length - 1) line(slide, x + 1.87, 5.63, x + 2.38, 5.63, '9AC6B8', 1.5, { endArrowType: 'triangle' });
  });
  addText(slide, 'RETURN PROMPT: where does the physical quantity become a voltage?', 0.83, 6.57, 6.7, 0.25, { fontSize: 10, bold: true, color: 'B8DED4' });
  addText(slide, '09 / 16', 11.55, 7.03, 1.08, 0.22, { fontSize: 9, bold: true, color: 'D1E6DF', align: 'right' });
  addNotes(slide, 9, '01:20-01:30', 'Stretch break. Leave the signal-chain diagram visible for the return activity.');
}

function addStrategies() {
  const slide = baseSlide(10, 'Workshop: compare two capture strategies', '01:30-01:40', 'GROUP TASK', C.teal);
  pointList(slide, [
    'Scenario: monitor temperature and detect a slow over-temperature trend.',
    'A: analogue threshold / indicator with analogue recording.',
    'B: sensor -> ADC -> MCU logging and a digital threshold.',
    'Compare evidence and consequences; do not choose by slogan.',
  ], C.teal);
  panel(slide, 'Two routes from sensor to decision', 6.48, 1.84, 6.15, 4.93, C.teal);
  addText(slide, 'A  /  ANALOGUE', 6.93, 2.66, 1.58, 0.23, { fontSize: 9, bold: true, color: C.coral });
  const rowA = [['SENSOR', 6.95], ['THRESHOLD', 8.76], ['INDICATOR', 10.58]];
  rowA.forEach((node, index) => {
    rect(slide, node[1], 3.03, 1.48, 0.66, C.coralPale, C.coral, 0.8);
    addText(slide, node[0], node[1] + 0.06, 3.25, 1.36, 0.2, { fontSize: 8.5, bold: true, color: C.ink, align: 'center' });
    if (index < rowA.length - 1) line(slide, node[1] + 1.49, 3.36, node[1] + 1.76, 3.36, C.coral, 1.4, { endArrowType: 'triangle' });
  });
  addText(slide, 'B  /  DIGITAL', 6.93, 4.17, 1.58, 0.23, { fontSize: 9, bold: true, color: C.teal });
  const rowB = [['SENSOR', 6.95], ['ADC', 8.29], ['MCU + LOG', 9.63], ['THRESHOLD', 10.97]];
  rowB.forEach((node, index) => {
    rect(slide, node[1], 4.54, 1.1, 0.66, C.mint, C.teal, 0.8);
    addText(slide, node[0], node[1] + 0.04, 4.77, 1.02, 0.18, { fontSize: 7.8, bold: true, color: C.ink, align: 'center' });
    if (index < rowB.length - 1) line(slide, node[1] + 1.11, 4.87, node[1] + 1.28, 4.87, C.teal, 1.2, { endArrowType: 'triangle' });
  });
  rect(slide, 6.93, 5.69, 5.22, 0.55, C.goldPale, C.goldPale, 0);
  addText(slide, 'GROUPS OF 3-4  /  MAPPER  /  EVIDENCE CHECKER  /  CALCULATOR  /  REPORTER', 7.05, 5.86, 4.98, 0.19, { fontSize: 8, bold: true, color: C.ink, align: 'center' });
  addNotes(slide, 10, '01:30-01:40', 'Form groups of 3-4. Assign roles: signal-chain mapper, evidence checker, calculation lead and reporter. Give each group a blank matrix with the P4 criteria. Students may make explicit assumptions but must label them.');
}

function addMatrix() {
  const slide = baseSlide(11, 'Build the comparison matrix', '01:40-02:05', 'TEAM WORKSHOP', C.blue);
  pointList(slide, [
    'Compare range, bandwidth, accuracy, resolution and linearity.',
    'Add drift, noise/SNR, storage, processing and recovery.',
    'Link each limitation to a consequence in the temperature application.',
    'Label each claim as measured, datasheet-backed or assumed.',
  ], C.blue);
  panel(slide, 'Use the same criteria for both paths', 6.48, 1.84, 6.15, 4.93, C.blue);
  const x = 6.82;
  const y = 2.62;
  const widths = [1.32, 1.55, 1.55, 1.02];
  const headers = ['CRITERION', 'ANALOGUE', 'DIGITAL', 'EVIDENCE'];
  let xx = x;
  headers.forEach((header, index) => {
    rect(slide, xx, y, widths[index], 0.54, index === 0 ? C.dark : index === 1 ? C.coral : index === 2 ? C.teal : C.blue, C.white, 0.5);
    addText(slide, header, xx + 0.04, y + 0.17, widths[index] - 0.08, 0.18, { fontSize: 7.6, bold: true, color: C.white, align: 'center' });
    xx += widths[index];
  });
  const rows = [
    ['Range', 'clip / headroom', 'ADC limits', 'source'],
    ['Bandwidth', 'filter / response', 'sample / alias', 'calc'],
    ['Accuracy', 'drift / noise', 'code / ref', 'data'],
    ['Recovery', 'power / storage', 'corruption / loss', 'assume?'],
  ];
  rows.forEach((row, rowIndex) => {
    xx = x;
    row.forEach((cell, columnIndex) => {
      const yy = y + 0.54 + rowIndex * 0.68;
      rect(slide, xx, yy, widths[columnIndex], 0.68, rowIndex % 2 ? C.paper : C.white, C.line, 0.65);
      addText(slide, cell, xx + 0.06, yy + 0.14, widths[columnIndex] - 0.12, 0.38, { fontSize: columnIndex ? 8.8 : 9.2, bold: columnIndex === 0, color: columnIndex ? C.body : C.ink, align: columnIndex ? 'center' : 'left' });
      xx += widths[columnIndex];
    });
  });
  addText(slide, 'Add rows for noise, linearity, drift and application consequence.', 6.94, 5.98, 5.25, 0.3, { fontSize: 9.4, color: C.muted, align: 'center' });
  addNotes(slide, 11, '01:40-02:05', 'Activity steps: draw each signal path and label likely error sources; compare what can be filtered, calibrated, copied, compressed or reconstructed; explain one case where analogue is advantageous and one where digital is advantageous; record at least two trade-offs and one unresolved requirement. Tutor prompts: What happens after power loss? Can you recover the original waveform from sparse samples? Does averaging remove drift?');
}

function addReportBack() {
  const slide = baseSlide(12, 'Make the comparison evidence-based', '02:05-02:25', 'DISCUSSION + FEEDBACK', C.coral);
  pointList(slide, [
    'Build each point as: claim -> mechanism -> consequence -> evidence.',
    'Avoid claims such as “digital is accurate” without conditions.',
    'Tie each limitation to the required signal and environment.',
    'Revise one weak claim into a defensible assessment.',
  ], C.coral);
  panel(slide, 'A useful engineering argument', 6.48, 1.84, 6.15, 4.93, C.coral);
  const stages = [
    ['CLAIM', 'What is the point?', C.coral, C.coralPale],
    ['MECHANISM', 'Why does it happen?', C.gold, C.goldPale],
    ['CONSEQUENCE', 'What changes in use?', C.blue, C.bluePale],
    ['EVIDENCE', 'How do we know?', C.teal, C.mint],
  ];
  stages.forEach((item, index) => {
    const x = 6.88 + index * 1.34;
    rect(slide, x, 3.0, 1.17, 1.55, item[3], item[3], 0);
    addText(slide, String(index + 1).padStart(2, '0'), x + 0.12, 3.19, 0.33, 0.22, { fontSize: 9, bold: true, color: item[2] });
    addText(slide, item[0], x + 0.1, 3.59, 0.97, 0.27, { fontSize: 8.4, bold: true, color: C.ink, align: 'center' });
    addText(slide, item[1], x + 0.09, 4.02, 0.99, 0.38, { fontSize: 8.8, color: C.body, align: 'center' });
    if (index < stages.length - 1) line(slide, x + 1.18, 3.78, x + 1.31, 3.78, C.muted, 1.2, { endArrowType: 'triangle' });
  });
  rect(slide, 6.9, 5.18, 5.28, 0.75, C.paper, C.line, 0.8);
  addText(slide, 'TRY THIS', 7.08, 5.34, 0.74, 0.18, { fontSize: 8, bold: true, color: C.coral });
  addText(slide, '“Digital is accurate” -> accurate under what range, noise and calibration conditions?', 7.93, 5.28, 4.02, 0.47, { fontSize: 10.2, bold: true, color: C.ink });
  addNotes(slide, 12, '02:05-02:25', 'Invite two groups with contrasting conclusions. Correct misconceptions: resolution is quantisation granularity; accuracy includes multiple errors; digital processing can reduce some noise but cannot recover information already clipped or aliased. Groups revise one weak claim into an assessable paragraph.');
}

function addRequirements() {
  const slide = baseSlide(13, 'From application to converter requirements', '02:25-02:50', 'SPECIFICATION ACTIVITY', C.teal);
  pointList(slide, [
    'Define the measurand, sensor range and source impedance.',
    'Set bandwidth, event/update rate and operating conditions.',
    'Specify allowable error, noise and calibration approach.',
    'Add ADC range, resolution, sample rate, interface and power.',
  ], C.teal);
  panel(slide, 'Every requirement needs a reason and a check', 6.48, 1.84, 6.15, 4.93, C.teal);
  const requirements = [
    ['WHAT?', 'measurand + range', C.teal, C.mint],
    ['HOW FAST?', 'bandwidth + update', C.blue, C.bluePale],
    ['HOW WELL?', 'error + noise', C.coral, C.coralPale],
    ['HOW PROVE?', 'test + source', C.gold, C.goldPale],
  ];
  requirements.forEach((entry, index) => {
    const x = 6.9 + (index % 2) * 2.76;
    const y = 2.63 + Math.floor(index / 2) * 1.38;
    rect(slide, x, y, 2.46, 1.03, entry[3], entry[3], 0);
    addText(slide, entry[0], x + 0.15, y + 0.15, 2.1, 0.2, { fontSize: 9, bold: true, color: entry[2], charSpacing: 0.55 });
    addText(slide, entry[1], x + 0.15, y + 0.48, 2.1, 0.26, { fontSize: 12, bold: true, color: C.ink });
  });
  addText(slide, 'FIRST specify the need. THEN select the converter.', 7.04, 5.73, 4.9, 0.31, { fontFace: FONT_HEAD, fontSize: 16, bold: true, color: C.dark, align: 'center' });
  addNotes(slide, 13, '02:25-02:50', 'Students convert the temperature scenario into a first-pass requirements table. Include a measurement range, sample/update rate, allowed error target, ADC input limits, calibration method and evidence source. Mark values as given, derived or still to confirm. Keep students from selecting a part too early: the converter requirement comes from signal and system needs. Flag that the LO4 hardware project will later use a thermistor divider feeding a selected ADC.');
}

function addWorkedRequirement() {
  const slide = baseSlide(14, 'Worked check: is the ADC setup adequate?', '02:50-03:10', 'GUIDED CALCULATION', C.gold);
  pointList(slide, [
    'Sensor range: 0-1.0 V; ADC range: 0-3.3 V.',
    'Headroom: 3.3 V - 1.0 V = 2.3 V above the signal maximum.',
    'Signal bandwidth: 5 Hz; Nyquist minimum: 10 samples/s.',
    'Choose practical margin and an anti-alias filter; explain both.',
  ], C.gold);
  panel(slide, 'Calculate first, then ask what is still missing', 6.48, 1.84, 6.15, 4.93, C.gold);
  addText(slide, 'VOLTAGE HEADROOM', 6.95, 2.55, 2.25, 0.22, { fontSize: 8.5, bold: true, color: C.muted });
  const x = 7.04;
  const y = 3.08;
  const w = 5.1;
  line(slide, x, y, x + w, y, C.line, 8);
  line(slide, x, y, x + w * (1 / 3.3), y, C.teal, 8);
  line(slide, x + w * (1 / 3.3), y - 0.18, x + w * (1 / 3.3), y + 0.18, C.coral, 1.6);
  addText(slide, '0 V', x, y + 0.23, 0.5, 0.2, { fontSize: 8.5, color: C.muted });
  addText(slide, '1.0 V signal max', x + 0.15, y + 0.49, 1.48, 0.2, { fontSize: 8.5, bold: true, color: C.teal });
  addText(slide, '3.3 V full scale', x + w - 1.35, y + 0.23, 1.35, 0.2, { fontSize: 8.5, color: C.muted, align: 'right' });
  rect(slide, 6.96, 4.08, 2.4, 1.22, C.bluePale, C.bluePale, 0);
  addText(slide, '5 Hz SIGNAL', 7.14, 4.28, 1.95, 0.2, { fontSize: 9, bold: true, color: C.blue });
  addText(slide, 'Nyquist minimum = 10 samples/s', 7.14, 4.68, 2.02, 0.39, { fontSize: 11.3, bold: true, color: C.ink });
  rect(slide, 9.7, 4.08, 2.4, 1.22, C.coralPale, C.coralPale, 0);
  addText(slide, 'PRACTICAL DESIGN', 9.88, 4.28, 2.0, 0.2, { fontSize: 9, bold: true, color: C.coral });
  addText(slide, 'Use margin + an anti-alias filter', 9.88, 4.68, 2.02, 0.39, { fontSize: 11.3, bold: true, color: C.ink });
  addText(slide, 'Nyquist is a lower bound, not a complete filter specification.', 7.05, 5.74, 5.1, 0.28, { fontSize: 10.5, color: C.muted, align: 'center' });
  addNotes(slide, 14, '02:50-03:10', 'Solve with the class: the signal uses only 1.0 V of a 3.3 V range, leaving headroom but still requiring fault/noise allowance. Nyquist minimum is 10 samples/s, but practical sampling should include margin; specify an anti-alias strategy. Invite an alternate answer and ask what assumption differs.');
}

function addEvidenceClinic() {
  const slide = baseSlide(15, 'Evidence clinic: check the P4 comparison', '03:10-03:35', 'PEER REVIEW', C.coral);
  pointList(slide, [
    'Are all required characteristics addressed?',
    'Are both analogue and digital approaches evaluated?',
    'Are application consequences and evidence sources stated?',
    'Is resolution clearly distinguished from accuracy?',
  ], C.coral);
  panel(slide, 'Four checks before you submit the comparison', 6.48, 1.84, 6.15, 4.93, C.coral);
  const checks = [
    ['01', 'COVERAGE', 'Every required characteristic appears.'],
    ['02', 'BALANCE', 'Both approaches are assessed.'],
    ['03', 'CONSEQUENCE', 'Claims connect to this application.'],
    ['04', 'EVIDENCE', 'Sources and assumptions are visible.'],
  ];
  checks.forEach((entry, index) => {
    const y = 2.53 + index * 0.84;
    dot(slide, 7.24, y + 0.23, 0.2, index === 3 ? C.coral : C.mint, index === 3 ? C.coral : C.teal);
    addText(slide, entry[0], 7.07, y + 0.15, 0.34, 0.15, { fontSize: 7.8, bold: true, color: index === 3 ? C.white : C.dark, align: 'center' });
    addText(slide, entry[1], 7.65, y + 0.02, 1.45, 0.21, { fontSize: 9, bold: true, color: index === 3 ? C.coral : C.teal });
    addText(slide, entry[2], 9.05, y - 0.01, 3.04, 0.45, { fontSize: 10.5, color: C.ink });
    if (index < checks.length - 1) line(slide, 7.65, y + 0.59, 12.1, y + 0.59, C.line, 0.7);
  });
  rect(slide, 6.94, 6.0, 5.18, 0.44, C.goldPale, C.goldPale, 0);
  addText(slide, 'REVIEWER: leave one technical correction + one evidence question.', 7.1, 6.12, 4.87, 0.19, { fontSize: 9.2, bold: true, color: C.ink, align: 'center' });
  addNotes(slide, 15, '03:10-03:35', 'Peer-review the matrix using the four checks above. Each reviewer leaves one specific technical correction and one question that requires evidence. Tutor samples work and identifies one strong comparison for group discussion.');
}

function addExitTicket() {
  const slide = baseSlide(16, 'Exit ticket: one claim, one requirement', '03:35-03:45', 'REFLECTION + NEXT WEEK', C.teal);
  pointList(slide, [
    'Name one advantage and one limitation of digital capture for your scenario.',
    'State one ADC requirement and explain how you derived it.',
    'Bring one commercial ADC datasheet example next week.',
  ], C.teal);
  panel(slide, 'Take this sequence into Week 2', 6.48, 1.84, 6.15, 4.93, C.teal);
  const items = [
    ['SIGNAL NEED', 'range + bandwidth'],
    ['ADC REQUIREMENT', 'bits + sample rate'],
    ['DEVICE EVIDENCE', 'datasheet + limits'],
  ];
  items.forEach((entry, index) => {
    const y = 2.77 + index * 1.02;
    rect(slide, 6.95, y, 4.98, 0.76, index === 1 ? C.mint : C.paper, C.line, 0.8);
    addText(slide, entry[0], 7.15, y + 0.13, 1.75, 0.18, { fontSize: 8.5, bold: true, color: index === 1 ? C.teal : C.blue });
    addText(slide, entry[1], 9.1, y + 0.12, 2.5, 0.24, { fontSize: 12, bold: true, color: C.ink });
    if (index < items.length - 1) line(slide, 9.42, y + 0.77, 9.42, y + 0.96, C.teal, 1.4, { endArrowType: 'triangle' });
  });
  addText(slide, 'INDEPENDENT STUDY', 7.0, 6.0, 1.55, 0.2, { fontSize: 8, bold: true, color: C.muted });
  addText(slide, 'Finish the P4 matrix; record range, resolution, sample rate, accuracy/noise, interface and source link.', 8.5, 5.91, 3.48, 0.46, { fontSize: 9.5, color: C.body });
  addNotes(slide, 16, '03:35-03:45', 'Exit ticket: one advantage and one limitation of digital capture for the scenario; state one ADC requirement and how it was derived; bring one commercial ADC datasheet example next week. Independent study: finish the P4 comparison, label assumptions, and find one commercial ADC datasheet. Record input range, resolution, sample rate, accuracy/noise specification, interface and source link.');
}

addCover();
addLearningOutcomes();
addAdcBasics();
addRepresentations();
addDegradation();
addWorkedAdc();
addSampling();
addCaptureExercise();
addBreak();
addStrategies();
addMatrix();
addReportBack();
addRequirements();
addWorkedRequirement();
addEvidenceClinic();
addExitTicket();

pptx.writeFile({ fileName: OUT, compression: true })
  .then(() => console.log(`Created ${OUT}`))
  .catch((error) => {
    console.error(error.stack || error.message || error);
    process.exitCode = 1;
  });