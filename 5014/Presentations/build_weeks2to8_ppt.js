const fs = require('node:fs');
const path = require('node:path');
const PptxGenJS = require(path.resolve(__dirname, '../../5009/02 September 2026/PPTX Builder/node_modules/pptxgenjs'));

const ROOT = __dirname;
const W = 13.333;
const H = 7.5;
const HEAD = 'Aptos Display';
const BODY = 'Aptos';
const PALETTES = {
  2: { accent: '527E98', soft: 'E8F0F4', dark: '21475A' },
  3: { accent: 'C3942E', soft: 'F7F0DE', dark: '59441C' },
  4: { accent: 'CE6951', soft: 'F9E9E4', dark: '59352F' },
  5: { accent: '168579', soft: 'DDF0EA', dark: '123B37' },
  6: { accent: '527E98', soft: 'E8F0F4', dark: '21475A' },
  7: { accent: 'CE6951', soft: 'F9E9E4', dark: '59352F' },
  8: { accent: '168579', soft: 'DDF0EA', dark: '123B37' },
};
const C = {
  paper: 'F5F8F5', white: 'FFFFFF', ink: '172D2A', body: '344A46', muted: '647873',
  line: 'D6E0DC', mint: 'DDF0EA', coral: 'DB6A52', coralPale: 'F9E9E4', gold: 'D5A63D',
  goldPale: 'F7F0DE', blue: '527E98', bluePale: 'E8F0F4', teal: '168579', dark: '123B37',
};

const OUTPUTS = {
  2: 'Week2_ADC_Topologies_and_Requirements.pptx',
  3: 'Week3_DAC_Topologies_and_Output_Requirements.pptx',
  4: 'Week4_DAC_Simulation_Study.pptx',
  5: 'Week5_ADC_Temperature_Monitor_Design.pptx',
  6: 'Week6_ADC_Temperature_Monitor_Simulation.pptx',
  7: 'Week7_ADC_Circuit_Bench_Testing.pptx',
  8: 'Week8_Circuit_Analysis_and_Presentation.pptx',
};

function clean(value) {
  return value
    .replace(/\*\*/g, '')
    .replace(/`/g, '')
    .replace(/\*([^*]+)\*/g, '$1')
    .replace(/\s+/g, ' ')
    .trim();
}

function parseOutline(week) {
  const file = path.join(ROOT, `Week${week}_PPT_Outline.md`);
  const markdown = fs.readFileSync(file, 'utf8');
  const title = markdown.match(/^# Week \d+ Presentation Outline - (.+)$/m)?.[1] || `Week ${week}`;
  const subtitle = markdown.match(/^## (.+)$/m)?.[1] || '';
  const criteria = clean(markdown.match(/^\*\*Criteria:\*\*\s*(.+)$/m)?.[1] || `Week ${week}`);
  const outcome = clean(markdown.match(/^\*\*Main outcome:\*\*\s*(.+)$/m)?.[1] || 'Develop and evidence the weekly learning outcome.');
  const slides = [];
  let current = null;
  let inOnSlide = false;
  let inNotes = false;

  for (const line of markdown.split(/\r?\n/)) {
    const heading = line.match(/^## Slide (\d+) - (.+)$/);
    if (heading) {
      if (current) slides.push(current);
      current = {
        number: Number(heading[1]),
        title: clean(heading[2]).replace(/^Week \d+:\s*/, ''),
        time: '', bullets: [], plainSlideText: [], noteLines: [],
      };
      inOnSlide = false;
      inNotes = false;
      continue;
    }
    if (!current) continue;
    const time = line.match(/^\*\*Time:\*\*\s*(.+)$/);
    if (time) current.time = clean(time[1]);
    if (/^\*\*On-slide:\*\*/.test(line)) {
      inOnSlide = true;
      inNotes = false;
      const after = clean(line.replace(/^\*\*On-slide:\*\*\s*/, ''));
      if (after) current.plainSlideText.push(after);
      continue;
    }
    if (/^\*\*(?:Speaker notes|Quick check|Activity|Activity steps|Tutor prompts|Independent study|Criteria mapping)/i.test(line)) {
      inOnSlide = false;
      inNotes = true;
      current.noteLines.push(line);
      continue;
    }
    if (inOnSlide) {
      const bullet = line.match(/^\s*-\s+(.+)$/);
      if (bullet) current.bullets.push(clean(bullet[1]));
      else if (line.trim() && !/^\*\*/.test(line) && !/^---+$/.test(line)) current.plainSlideText.push(clean(line));
    }
    if (inNotes) current.noteLines.push(line);
  }
  if (current) slides.push(current);

  for (const slide of slides) {
    if (!slide.bullets.length && slide.plainSlideText.length) slide.bullets = slide.plainSlideText;
    slide.bullets = slide.bullets.slice(0, 6);
    slide.notes = slide.noteLines.join('\n').replace(/^\s+|\s+$/g, '');
  }
  if (slides.length !== 16) throw new Error(`${path.basename(file)}: expected 16 slides, found ${slides.length}`);
  return { week, file, title, subtitle, criteria, outcome, slides };
}

function addText(slide, text, x, y, w, h, options = {}) {
  slide.addText(text, {
    x, y, w, h, margin: 0, fontFace: BODY, fontSize: 13, color: C.body,
    valign: 'mid', fit: 'shrink', breakLine: false, ...options,
  });
}

function shape(slide, x, y, w, h, fill, line = fill, lineWidth = 0.8, type = 'rect') {
  slide.addShape(type, { x, y, w, h, line: { color: line, width: lineWidth }, fill: { color: fill } });
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

function dot(slide, x, y, radius, fill, lineColor = fill) {
  slide.addShape('ellipse', {
    x: x - radius, y: y - radius, w: radius * 2, h: radius * 2,
    line: { color: lineColor, width: 0.75 },
    fill: { color: fill },
  });
}

function label(slide, text, x, y, w, h, options = {}) {
  addText(slide, text, { x, y, w, h, fontSize: 9, color: C.muted, align: 'center', ...options });
}

function node(slide, title, detail, x, y, w, h, accent, fill = C.paper) {
  shape(slide, x, y, w, h, fill, C.line, 0.85);
  shape(slide, x, y, w, 0.055, accent, accent, 0);
  addText(slide, title, x + 0.09, y + 0.15, w - 0.18, 0.22, { fontSize: 9.5, bold: true, color: accent, align: 'center' });
  if (detail) addText(slide, detail, x + 0.1, y + 0.43, w - 0.2, h - 0.5, { fontSize: 8.8, color: C.body, align: 'center' });
}

function addPanel(slide, title, accent, hint = '') {
  shape(slide, 6.58, 1.84, 6.05, 4.94, C.white, C.line, 0.9);
  shape(slide, 6.58, 1.84, 0.065, 4.94, accent, accent, 0);
  addText(slide, title.toUpperCase(), 6.88, 2.03, 5.4, 0.24, { fontSize: 9, bold: true, charSpacing: 0.7, color: accent });
  line(slide, 6.88, 2.39, 12.32, 2.39, C.line, 0.8);
  if (hint) addText(slide, hint.toUpperCase(), 6.92, 6.48, 5.24, 0.16, { fontSize: 7.2, color: C.muted, align: 'right', charSpacing: 0.4 });
}

function addNumberedPoints(slide, bullets, accent) {
  const items = bullets.length ? bullets : ['Use the discussion prompt and worked example in the speaker notes.'];
  const top = 1.97;
  const bottom = 6.68;
  const row = (bottom - top) / items.length;
  const maxLength = Math.max(...items.map((item) => item.length));
  const fontSize = items.length >= 5 ? (maxLength > 94 ? 11.6 : 12.6) : (maxLength > 105 ? 12 : maxLength > 78 ? 13 : 14.2);
  items.forEach((text, index) => {
    const y = top + row * index;
    shape(slide, 0.72, y + 0.07, 0.055, row - 0.13, index % 2 ? C.line : accent, index % 2 ? C.line : accent, 0);
    addText(slide, String(index + 1).padStart(2, '0'), 0.91, y + 0.13, 0.34, 0.2, { fontSize: 8.7, bold: true, color: accent, valign: 'top' });
    addText(slide, text, 1.39, y + 0.08, 4.86, row - 0.14, { fontSize, color: C.body, valign: 'mid' });
    if (index < items.length - 1) line(slide, 1.39, y + row - 0.02, 6.22, y + row - 0.02, C.line, 0.45);
  });
}

function baseSlide(deck, item, total) {
  const slide = deck.pptx.addSlide();
  const theme = PALETTES[deck.week];
  slide.background = { color: C.paper };
  shape(slide, 0, 0, W, 0.09, theme.accent, theme.accent, 0);
  addText(slide, `UNIT 5014   /   WEEK ${String(deck.week).padStart(2, '0')}`, 0.68, 0.25, 2.9, 0.2, { fontSize: 8.5, bold: true, charSpacing: 0.75, color: theme.dark });
  addText(slide, deck.criteria.toUpperCase(), 3.65, 0.25, 4.0, 0.2, { fontSize: 8.3, bold: true, charSpacing: 0.55, color: theme.accent });
  addText(slide, item.time || '', 10.1, 0.24, 1.35, 0.22, { fontSize: 8.5, bold: true, color: C.muted, align: 'right' });
  shape(slide, 11.72, 0.19, 0.92, 0.34, C.white, theme.accent, 1);
  addText(slide, `W${deck.week}`, 11.74, 0.24, 0.88, 0.2, { fontSize: 8.6, bold: true, color: theme.accent, align: 'center' });
  const titleSize = item.title.length > 49 ? 25 : item.title.length > 39 ? 27 : 30;
  addText(slide, item.title, 0.68, 0.72, 12.0, 0.68, { fontFace: HEAD, fontSize: titleSize, bold: true, color: C.ink });
  line(slide, 0.68, 1.57, 12.65, 1.57, C.line, 0.9);
  addText(slide, deck.title.toUpperCase(), 0.68, 7.07, 8.8, 0.18, { fontSize: 7.8, bold: true, charSpacing: 0.5, color: C.muted });
  line(slide, 0.68, 6.96, 12.65, 6.96, C.line, 0.7);
  addText(slide, `${String(item.number).padStart(2, '0')} / ${total}`, 11.55, 7.05, 1.1, 0.2, { fontSize: 8.8, bold: true, color: C.ink, align: 'right' });
  addNumberedPoints(slide, item.bullets, theme.accent);
  return slide;
}

function addCover(deck, item) {
  const theme = PALETTES[deck.week];
  const slide = deck.pptx.addSlide();
  slide._week = deck.week;
  slide.background = { color: theme.dark };
  shape(slide, 0, 0, W, 0.11, theme.accent, theme.accent, 0);
  addText(slide, `UNIT 5014   /   WEEK ${String(deck.week).padStart(2, '0')}   /   ${deck.criteria.toUpperCase()}`, 0.78, 0.55, 7.0, 0.24, { fontSize: 9.5, bold: true, color: 'B8DED4', charSpacing: 0.9 });
  addText(slide, item.title, 0.78, 1.18, 6.0, 1.22, { fontFace: HEAD, fontSize: item.title.length > 36 ? 31 : 37, bold: true, color: C.white, valign: 'mid' });
  addText(slide, deck.subtitle, 0.82, 2.67, 5.55, 0.58, { fontFace: HEAD, fontSize: 18, bold: true, color: 'E5B650', valign: 'top' });
  addText(slide, deck.outcome, 0.82, 3.46, 5.48, 1.15, { fontSize: 15, color: 'E4EEEA', valign: 'top' });
  addText(slide, 'TODAY', 0.83, 5.12, 0.9, 0.2, { fontSize: 8.5, bold: true, charSpacing: 0.8, color: 'B8DED4' });
  const points = item.bullets.slice(0, 3);
  points.forEach((point, index) => {
    addText(slide, `${String(index + 1).padStart(2, '0')}  ${point}`, 0.84, 5.45 + index * 0.4, 5.55, 0.32, { fontSize: 10, color: C.white, valign: 'top' });
  });
  shape(slide, 6.8, 1.08, 5.9, 5.03, '173F3B', '38635D', 0.8);
  addText(slide, 'SESSION OVERVIEW', 7.14, 1.37, 5.14, 0.22, { fontSize: 9, bold: true, charSpacing: 0.85, color: 'B8DED4' });
  drawVisual(slide, deck, item, true);
  addText(slide, `${String(item.number).padStart(2, '0')} / 16`, 11.55, 7.03, 1.08, 0.21, { fontSize: 9, bold: true, color: 'D1E6DF', align: 'right' });
  addSpeakerNotes(slide, deck, item);
  return slide;
}

function axes(slide, x, y, w, h, xLabel = 'INPUT', yLabel = 'OUTPUT', dark = false) {
  const color = dark ? 'B8DED4' : C.muted;
  line(slide, x, y + h, x + w, y + h, color, 0.9, { endArrowType: 'triangle' });
  line(slide, x, y + h, x, y, color, 0.9, { endArrowType: 'triangle' });
  label(slide, xLabel, x + w - 0.72, y + h + 0.1, 0.72, 0.16, { fontSize: 7.5, color });
  label(slide, yLabel, x - 0.02, y - 0.2, 0.84, 0.14, { fontSize: 7.5, color, align: 'left' });
}

function polyline(slide, points, color, width = 1.8) {
  for (let i = 0; i < points.length - 1; i += 1) line(slide, points[i][0], points[i][1], points[i + 1][0], points[i + 1][1], color, width);
}

function sine(x, y, w, h, cycles = 1.25, phase = 0, amp = 0.34, count = 64) {
  const points = [];
  for (let i = 0; i <= count; i += 1) {
    const f = i / count;
    points.push([x + f * w, y + h / 2 - Math.sin(f * Math.PI * 2 * cycles + phase) * h * amp]);
  }
  return points;
}

function drawWave(slide, x, y, w, h, accent, dark = false) {
  axes(slide, x, y, w, h, 'TIME', 'SIGNAL', dark);
  polyline(slide, sine(x + 0.04, y + 0.05, w - 0.08, h - 0.1), accent, 2.1);
}

function drawSteps(slide, x, y, w, h, accent, levels = 9) {
  const mid = y + h / 2;
  const amplitude = h * 0.37;
  const samples = 32;
  let previous = Math.round(Math.sin(0) * (levels - 1)) / (levels - 1);
  let px = x;
  let py = mid - previous * amplitude;
  for (let index = 1; index <= samples; index += 1) {
    const f = index / samples;
    const value = Math.round(Math.sin(f * Math.PI * 2 * 1.25) * (levels - 1)) / (levels - 1);
    const nx = x + f * w;
    const ny = mid - value * amplitude;
    line(slide, px, py, nx, py, accent, 1.6);
    line(slide, nx, py, nx, ny, accent, 1.4);
    px = nx;
    py = ny;
  }
}

function drawDACTransfer(slide, accent, highlight = false) {
  const x = 7.05;
  const y = 2.82;
  const w = 5.02;
  const h = 2.45;
  axes(slide, x, y, w, h, 'DIGITAL CODE', 'OUTPUT VOLTAGE');
  const levels = 16;
  const stepW = w / levels;
  const bottom = y + h;
  const top = y + 0.1;
  for (let code = 0; code < levels; code += 1) {
    const levelY = bottom - (code / levels) * (h - 0.2);
    const nextY = bottom - ((code + 1) / levels) * (h - 0.2);
    const color = highlight && code === 10 ? C.coral : accent;
    line(slide, x + code * stepW, levelY, x + (code + 1) * stepW, levelY, color, code === 10 && highlight ? 2.7 : 1.5);
    if (code < levels - 1) line(slide, x + (code + 1) * stepW, levelY, x + (code + 1) * stepW, nextY, C.line, 0.7);
    if (code % 3 === 0) dot(slide, x + code * stepW + stepW / 2, levelY, 0.035, color);
  }
  label(slide, '0000', x - 0.06, bottom + 0.12, 0.5, 0.18, { fontSize: 7.8, color: C.muted });
  label(slide, '1111', x + w - 0.5, bottom + 0.12, 0.5, 0.18, { fontSize: 7.8, color: C.muted });
  if (highlight) {
    const code = 10;
    const xx = x + code * stepW + stepW / 2;
    const yy = bottom - (code / levels) * (h - 0.2);
    line(slide, xx, yy - 0.04, xx, bottom, C.coral, 0.9, { dash: 'dash' });
    label(slide, '1010 = 10 -> 3.125 V (ideal 4-bit, 5 V reference)', x + 0.2, 5.82, 4.65, 0.22, { fontSize: 8.6, bold: true, color: C.coral });
  } else {
    label(slide, 'More bits add finer steps; they do not remove other errors', x + 0.25, 5.82, 4.55, 0.22, { fontSize: 8.8, color: C.muted });
  }
}

function drawResolutionError(slide, accent) {
  const x = 7.08;
  const y = 2.78;
  const w = 4.95;
  const h = 2.6;
  axes(slide, x, y, w, h, 'RESOLUTION (BITS)', 'ERROR');
  const values = [0.83, 0.6, 0.41, 0.27, 0.19, 0.145, 0.122, 0.11, 0.104, 0.1];
  const points = values.map((value, index) => [x + index / (values.length - 1) * w, y + h - value / 0.9 * h]);
  polyline(slide, points, accent, 2.1);
  points.forEach(([px, py], index) => dot(slide, px, py, 0.045, index > 6 ? C.coral : accent));
  line(slide, points[6][0], points[6][1] - 0.18, points[6][0], y + h, C.coral, 0.8, { dash: 'dash' });
  label(slide, 'ILLUSTRATIVE TREND: error can plateau when other limits dominate', 7.0, 5.8, 5.2, 0.23, { fontSize: 8.4, color: C.muted });
}

function drawResolutionSweep(slide, accent) {
  const x = 7.05;
  const y = 2.8;
  const w = 5.02;
  const h = 2.4;
  axes(slide, x, y, w, h, 'NORMALISED CODE', 'OUTPUT');
  const series = [
    { levels: 4, color: C.blue, label: '4 bit' },
    { levels: 8, color: C.coral, label: '6 bit' },
    { levels: 16, color: accent, label: '8 bit' },
  ];
  series.forEach((item, index) => {
    const dx = w / item.levels;
    for (let level = 0; level < item.levels; level += 1) {
      const yy = y + h - (level / item.levels) * h;
      line(slide, x + level * dx, yy, x + (level + 1) * dx, yy, item.color, index === 2 ? 1.4 : 1.9);
      if (level < item.levels - 1) line(slide, x + (level + 1) * dx, yy, x + (level + 1) * dx, y + h - ((level + 1) / item.levels) * h, item.color, 0.85);
    }
  });
  series.forEach((item, index) => {
    const xx = 7.22 + index * 1.55;
    line(slide, xx, 5.75, xx + 0.35, 5.75, item.color, 2);
    label(slide, item.label, xx + 0.39, 5.65, 0.65, 0.18, { fontSize: 8, color: item.color, align: 'left' });
  });
}

function drawUncertainty(slide, accent) {
  const y = 2.73;
  const x = 6.96;
  const w = 2.38;
  shape(slide, x, y, w, 0.94, C.bluePale, C.bluePale, 0);
  addText(slide, 'PREDICTED', x + 0.16, y + 0.15, w - 0.32, 0.18, { fontSize: 8.2, bold: true, color: C.blue });
  addText(slide, '1.250 V', x + 0.16, y + 0.42, w - 0.32, 0.3, { fontFace: HEAD, fontSize: 19, bold: true, color: C.ink });
  shape(slide, 9.73, y, w, 0.94, C.coralPale, C.coralPale, 0);
  addText(slide, 'MEASURED', 9.89, y + 0.15, w - 0.32, 0.18, { fontSize: 8.2, bold: true, color: C.coral });
  addText(slide, '1.231 V', 9.89, y + 0.42, w - 0.32, 0.3, { fontFace: HEAD, fontSize: 19, bold: true, color: C.ink });
  shape(slide, 6.97, 3.98, 5.14, 0.97, C.dark, C.dark, 0);
  addText(slide, 'DELTA V = MEASURED - PREDICTED', 7.18, 4.12, 2.64, 0.17, { fontSize: 7.7, bold: true, color: 'B8DED4' });
  addText(slide, '-0.019 V', 7.18, 4.39, 1.5, 0.31, { fontFace: HEAD, fontSize: 20, bold: true, color: C.white });
  addText(slide, '19 mV absolute difference  /  1.52% of predicted', 8.86, 4.37, 2.98, 0.36, { fontSize: 9.5, color: 'E4EEEA' });
  addText(slide, 'UNCERTAINTY TO CONSIDER', 7.02, 5.36, 2.5, 0.19, { fontSize: 8, bold: true, color: C.muted });
  const labels = ['Meter', 'Reference', 'Sensor', 'Repeatability'];
  labels.forEach((text, index) => {
    const xx = 7.02 + index * 1.3;
    shape(slide, xx, 5.72, 1.12, 0.42, index === 3 ? PALETTES[8].soft : C.paper, C.line, 0.65);
    label(slide, text, xx + 0.05, 5.84, 1.02, 0.16, { fontSize: 7.8, bold: true, color: C.body });
  });
  label(slide, 'Worked example from the lesson - percentage needs a non-zero reference', 6.98, 6.34, 5.2, 0.17, { fontSize: 7.6, color: C.muted });
}

function drawCorrelationTable(slide, accent) {
  const x = 6.91;
  const y = 2.73;
  const widths = [0.85, 1.05, 1.05, 1.05, 1.05];
  const headers = ['POINT', 'R INPUT', 'EQUATION', 'SIM', 'BENCH'];
  let xx = x;
  headers.forEach((text, index) => {
    shape(slide, xx, y, widths[index], 0.49, index === 0 ? accent : C.bluePale, C.white, 0.5);
    label(slide, text, xx + 0.03, y + 0.15, widths[index] - 0.06, 0.16, { fontSize: 7.1, bold: true, color: index === 0 ? C.white : C.ink });
    xx += widths[index];
  });
  for (let row = 0; row < 5; row += 1) {
    xx = x;
    const values = [`P${row + 1}`, '[value]', '[V]', '[V]', '[V]'];
    values.forEach((text, col) => {
      const yy = y + 0.49 + row * 0.5;
      shape(slide, xx, yy, widths[col], 0.5, row % 2 ? C.paper : C.white, C.line, 0.6);
      label(slide, text, xx + 0.04, yy + 0.13, widths[col] - 0.08, 0.2, { fontSize: col ? 7.8 : 8.2, bold: col === 0, color: col ? C.muted : C.ink });
      xx += widths[col];
    });
  }
  label(slide, 'Fill with five matched resistance/temperature points; preserve raw repeats separately', 6.98, 5.86, 5.25, 0.28, { fontSize: 8.4, color: C.body });
}

function drawCodeCheck(slide, accent) {
  const y = 2.85;
  const labels = [
    ['MEASURE', 'Rfixed + Rthermistor'],
    ['PREDICT', 'Vnode from divider'],
    ['CONVERT', 'ADC range -> code'],
    ['COMPARE', 'DMM volts vs raw code'],
  ];
  labels.forEach((entry, index) => {
    const x = 6.94 + index * 1.33;
    node(slide, entry[0], entry[1], x, y, 1.08, 1.08, index === 3 ? C.coral : accent, index === 3 ? C.coralPale : C.paper);
    if (index < labels.length - 1) line(slide, x + 1.1, y + 0.53, x + 1.3, y + 0.53, accent, 1.2, { endArrowType: 'triangle' });
  });
  shape(slide, 7.02, 4.57, 5.18, 0.89, PALETTES[7].soft, C.line, 0.7);
  addText(slide, 'CHECK', 7.2, 4.74, 0.7, 0.17, { fontSize: 8, bold: true, color: accent });
  addText(slide, 'Is the measured code difference explainable by quantisation alone?', 7.95, 4.7, 3.98, 0.42, { fontSize: 10, bold: true, color: C.ink });
  label(slide, 'Document ADC code convention, reference and actual input values', 7.04, 5.88, 5.15, 0.25, { fontSize: 8.7, color: C.muted });
}

function drawFlow(slide, labels, accent, dark = false) {
  const x = dark ? 7.05 : 6.9;
  const y = dark ? 3.0 : 3.05;
  const nodeW = dark ? 1.08 : 1.13;
  const gap = dark ? 0.27 : 0.24;
  labels.slice(0, 4).forEach((text, index) => {
    const xx = x + index * (nodeW + gap);
    node(slide, text, '', xx, y, nodeW, 0.9, accent, dark ? '244E49' : C.paper);
    if (index < Math.min(labels.length, 4) - 1) line(slide, xx + nodeW + 0.02, y + 0.46, xx + nodeW + gap - 0.03, y + 0.46, dark ? '9AC6B8' : accent, 1.5, { endArrowType: 'triangle' });
  });
  if (!dark) label(slide, 'Follow the signal and name what each stage changes', 7.0, 4.55, 5.25, 0.35, { fontSize: 10, color: C.body });
}

function drawCards(slide, cards, accent, dark = false) {
  const x0 = dark ? 7.05 : 6.93;
  const y0 = dark ? 2.28 : 2.7;
  const width = dark ? 2.42 : 2.42;
  const height = dark ? 1.12 : 1.03;
  const xGap = dark ? 0.36 : 0.38;
  const yGap = 0.27;
  cards.slice(0, 4).forEach((card, index) => {
    const x = x0 + (index % 2) * (width + xGap);
    const y = y0 + Math.floor(index / 2) * (height + yGap);
    const tint = index % 2 ? 'F2F6F8' : (dark ? '244E49' : PALETTES[deckWeek(slide)].soft);
    shape(slide, x, y, width, height, tint, dark ? '38635D' : tint, 0.75);
    addText(slide, card[0], x + 0.15, y + 0.16, width - 0.3, 0.23, { fontSize: 8.7, bold: true, color: dark ? '9CD6C6' : accent, charSpacing: 0.4 });
    addText(slide, card[1], x + 0.15, y + 0.48, width - 0.3, height - 0.57, { fontSize: 11, bold: true, color: dark ? C.white : C.ink });
  });
}

function deckWeek(slide) {
  return slide._week || 2;
}

function drawMatrix(slide, accent, headers = ['COMPARE', 'CASE A', 'CASE B'], rows = [['Range', 'Check limits', 'Check limits'], ['Accuracy', 'Calculate', 'Measure'], ['Latency', 'Report delay', 'Report delay']]) {
  const x = 6.91;
  const y = 2.69;
  const widths = [1.32, 1.5, 1.5];
  let xx = x;
  headers.forEach((text, index) => {
    shape(slide, xx, y, widths[index], 0.46, index === 0 ? accent : C.bluePale, C.white, 0.5);
    label(slide, text, xx + 0.04, y + 0.13, widths[index] - 0.08, 0.19, { fontSize: 7.5, bold: true, color: index === 0 ? C.white : C.ink });
    xx += widths[index];
  });
  rows.slice(0, 5).forEach((row, r) => {
    xx = x;
    row.forEach((text, c) => {
      const yy = y + 0.46 + r * 0.59;
      shape(slide, xx, yy, widths[c], 0.59, r % 2 ? C.paper : C.white, C.line, 0.6);
      label(slide, text, xx + 0.06, yy + 0.08, widths[c] - 0.12, 0.43, { fontSize: 8.3, bold: c === 0, color: c === 0 ? C.ink : C.body });
      xx += widths[c];
    });
  });
}

function drawGraph(slide, accent, mode = 'transfer', dark = false) {
  const x = dark ? 7.15 : 7.05;
  const y = dark ? 2.2 : 2.76;
  const w = dark ? 4.85 : 5.05;
  const h = dark ? 2.95 : 2.62;
  axes(slide, x, y, w, h, mode === 'step' ? 'TIME' : 'INPUT', mode === 'step' ? 'OUTPUT' : 'RESPONSE', dark);
  if (mode === 'step') {
    const mid = y + h / 2;
    const pts = [[x, mid + 0.5], [x + 0.48, mid + 0.5], [x + 0.48, mid - 0.72], [x + 1.35, mid - 0.72], [x + 1.5, mid - 0.55], [x + 1.68, mid - 0.72], [x + w - 0.03, mid - 0.72]];
    polyline(slide, pts, accent, 2.0);
    line(slide, x + 1.5, mid - 0.78, x + 1.5, mid + 0.62, C.gold, 0.9, { dash: 'dash' });
    label(slide, 'SETTLING BAND', x + 2.0, mid - 0.96, 1.6, 0.17, { fontSize: 7.3, color: C.muted, align: 'left' });
  } else if (mode === 'tolerance') {
    polyline(slide, sine(x + 0.06, y + 0.05, w - 0.12, h - 0.1, 1, 0, 0.3), C.blue, 1.4);
    polyline(slide, sine(x + 0.06, y + 0.05, w - 0.12, h - 0.1, 1, 0.18, 0.36), accent, 2.0);
    polyline(slide, sine(x + 0.06, y + 0.05, w - 0.12, h - 0.1, 1, -0.18, 0.25), C.coral, 1.4);
    label(slide, 'LOW / NOMINAL / HIGH CASES', x + 0.3, y + h + 0.26, w - 0.6, 0.18, { fontSize: 7.7, color: C.muted });
  } else if (mode === 'resolution') {
    polyline(slide, sine(x + 0.06, y + 0.05, w - 0.12, h - 0.1, 1.25, 0, 0.34), C.coral, 1.2);
    drawSteps(slide, x + 0.06, y + 0.05, w - 0.12, h - 0.1, accent, 5);
  } else {
    const points = [];
    for (let i = 0; i <= 28; i += 1) {
      const f = i / 28;
      points.push([x + f * w, y + h - f * h * 0.82 - Math.sin(f * Math.PI * 2) * 0.09]);
    }
    polyline(slide, points, accent, 2.0);
    if (mode === 'compare') {
      const second = points.map(([px, py], i) => [px, py + Math.sin(i / 28 * Math.PI * 2) * 0.18 + 0.12]);
      polyline(slide, second, C.coral, 1.5);
    }
  }
  if (!dark) label(slide, 'ILLUSTRATIVE SHAPE - replace with your measured or simulated data where applicable', 6.94, 6.13, 5.45, 0.17, { fontSize: 6.8, color: C.muted });
}

function drawSAR(slide, accent) {
  const rows = [
    ['1000', '0.500 V', 'keep MSB'],
    ['1100', '0.750 V', 'clear bit'],
    ['1010', '0.625 V', 'keep bit'],
    ['1011', '0.688 V', 'keep bit'],
  ];
  rows.forEach((row, index) => {
    const y = 2.65 + index * 0.7;
    label(slide, `TRIAL ${index + 1}`, 6.94, y + 0.12, 0.88, 0.22, { fontSize: 7.8, bold: true, color: C.muted });
    shape(slide, 7.95, y, 1.18, 0.48, index === 1 ? C.coralPale : PALETTES[2].soft, C.line, 0.7);
    label(slide, row[0], 8.02, y + 0.13, 1.04, 0.2, { fontSize: 10, bold: true, color: C.ink });
    addText(slide, row[1], 9.37, y + 0.12, 1.1, 0.2, { fontSize: 9.2, bold: true, color: C.body });
    addText(slide, row[2], 10.62, y + 0.12, 1.35, 0.2, { fontSize: 8.8, color: index === 1 ? C.coral : C.teal });
  });
  label(slide, 'Illustrative 4-bit search for 0.70 V on a 1 V range', 7.0, 5.72, 5.1, 0.22, { fontSize: 9, color: C.muted });
}

function drawRamp(slide, accent) {
  const x = 7.1;
  const y = 2.77;
  const w = 4.95;
  const h = 2.62;
  axes(slide, x, y, w, h, 'TIME / COUNT', 'VOLTAGE', false);
  line(slide, x + 0.06, y + h * 0.49, x + w - 0.08, y + h * 0.49, C.coral, 1.8);
  label(slide, 'INPUT', x + 0.13, y + h * 0.49 - 0.23, 0.58, 0.17, { fontSize: 7.5, color: C.coral });
  line(slide, x + 0.08, y + h - 0.05, x + w * 0.61, y + 0.1, accent, 2.1);
  dot(slide, x + w * 0.61, y + h * 0.49, 0.065, C.gold);
  line(slide, x + w * 0.61, y + h * 0.49, x + w * 0.61, y + h, C.gold, 0.9, { dash: 'dash' });
  label(slide, 'COMPARATOR CROSSING -> COUNT', x + 1.1, y + h + 0.25, 3.15, 0.18, { fontSize: 8, color: C.muted });
}

function drawFlash(slide, accent) {
  const x = 7.08;
  const y = 2.68;
  for (let i = 0; i < 7; i += 1) {
    const yy = y + i * 0.42;
    line(slide, x + 0.18, yy, x + 1.58, yy, C.line, 1.2);
    shape(slide, x + 1.65, yy - 0.12, 0.58, 0.24, i >= 3 ? C.mint : C.paper, C.line, 0.75);
    label(slide, 'CMP', x + 1.7, yy - 0.055, 0.48, 0.12, { fontSize: 6.6, bold: true, color: i >= 3 ? C.teal : C.muted });
    line(slide, x + 2.24, yy, x + 2.7, yy, i >= 3 ? accent : C.line, 1.0);
  }
  shape(slide, x + 2.82, y + 0.66, 1.13, 1.35, PALETTES[2].soft, C.line, 0.8);
  label(slide, 'ENCODER', x + 2.9, y + 1.16, 0.97, 0.22, { fontSize: 8.4, bold: true, color: C.ink });
  line(slide, x + 3.98, y + 1.33, x + 4.53, y + 1.33, accent, 1.5, { endArrowType: 'triangle' });
  label(slide, 'DIGITAL CODE', x + 4.1, y + 1.62, 1.0, 0.16, { fontSize: 7.2, color: C.muted });
  label(slide, '3-bit flash: 2^3 - 1 = 7 comparators', x + 0.2, 5.93, 4.9, 0.2, { fontSize: 8.8, color: C.muted });
}

function drawSigmaDelta(slide, accent) {
  const x = 6.98;
  const y = 3.08;
  node(slide, 'INPUT', 'analogue', x, y, 0.9, 0.82, accent, C.paper);
  node(slide, 'INTEGRATOR', 'accumulate error', x + 1.3, y, 1.12, 0.82, accent, PALETTES[2].soft);
  node(slide, 'QUANTISER', 'bitstream', x + 2.83, y, 1.0, 0.82, accent, C.paper);
  node(slide, 'FILTER', 'decimated code', x + 4.24, y, 1.05, 0.82, accent, C.paper);
  line(slide, x + 0.92, y + 0.41, x + 1.26, y + 0.41, accent, 1.35, { endArrowType: 'triangle' });
  line(slide, x + 2.44, y + 0.41, x + 2.79, y + 0.41, accent, 1.35, { endArrowType: 'triangle' });
  line(slide, x + 3.85, y + 0.41, x + 4.2, y + 0.41, accent, 1.35, { endArrowType: 'triangle' });
  line(slide, x + 3.32, y + 0.88, x + 3.32, y + 1.58, C.coral, 1.25);
  line(slide, x + 3.32, y + 1.58, x + 1.84, y + 1.58, C.coral, 1.25, { endArrowType: 'triangle' });
  label(slide, 'FEEDBACK', x + 2.15, y + 1.68, 1.3, 0.16, { fontSize: 7.4, color: C.coral });
  label(slide, 'Oversample -> shape noise -> filter to the required band', x + 0.15, y + 2.55, 4.95, 0.3, { fontSize: 9.5, color: C.body });
}

function drawWeighted(slide, accent) {
  const x = 7.15;
  const y = 2.78;
  const bus = x + 2.55;
  line(slide, bus, y + 0.3, bus, y + 2.62, C.muted, 1.4);
  const branchY = [y + 0.46, y + 1.0, y + 1.54, y + 2.08];
  const weights = ['R', '2R', '4R', '8R'];
  branchY.forEach((yy, i) => {
    line(slide, x + 0.35, yy, x + 0.9, yy, accent, 1.5);
    shape(slide, x + 0.9, yy - 0.13, 0.82, 0.26, C.paper, C.line, 0.8);
    label(slide, weights[i], x + 1.0, yy - 0.065, 0.62, 0.13, { fontSize: 8, bold: true, color: C.ink });
    line(slide, x + 1.74, yy, bus, yy, accent, 1.1);
    line(slide, x + 0.16, yy, x + 0.35, yy, C.muted, 1);
    label(slide, `b${3 - i}`, x - 0.04, yy - 0.09, 0.3, 0.15, { fontSize: 7, color: C.muted });
  });
  line(slide, bus, y + 1.28, x + 3.1, y + 1.28, accent, 1.4, { endArrowType: 'triangle' });
  shape(slide, x + 3.19, y + 0.8, 1.06, 0.96, PALETTES[3].soft, C.line, 0.8);
  label(slide, 'OP-AMP\nSUM', x + 3.28, y + 1.08, 0.88, 0.42, { fontSize: 8.2, bold: true, color: C.ink });
  label(slide, 'Switch each binary-weighted branch to reference or ground', x + 0.1, y + 2.8, 4.95, 0.3, { fontSize: 9, color: C.muted });
}

function drawR2R(slide, accent) {
  const x = 7.04;
  const y = 3.1;
  const count = 5;
  const step = 0.78;
  const railY = y + 0.36;
  for (let i = 0; i < count; i += 1) {
    const xx = x + i * step;
    shape(slide, xx, railY - 0.13, 0.58, 0.26, C.paper, C.line, 0.8);
    label(slide, 'R', xx + 0.06, railY - 0.06, 0.46, 0.13, { fontSize: 8, bold: true, color: C.ink });
    if (i < count - 1) line(slide, xx + 0.59, railY, xx + step - 0.02, railY, accent, 1.2);
    line(slide, xx + 0.29, railY + 0.15, xx + 0.29, railY + 0.62, C.muted, 1);
    shape(slide, xx + 0.02, railY + 0.61, 0.54, 0.23, PALETTES[3].soft, C.line, 0.7);
    label(slide, '2R', xx + 0.08, railY + 0.66, 0.42, 0.12, { fontSize: 7.4, bold: true, color: C.ink });
    line(slide, xx + 0.29, railY + 0.84, xx + 0.29, railY + 1.18, accent, 1);
    label(slide, `b${count - i - 1}`, xx + 0.05, railY + 1.22, 0.48, 0.14, { fontSize: 7.2, color: C.muted });
  }
  line(slide, x + count * step - 0.22, railY, x + count * step + 0.06, railY, accent, 1.4, { endArrowType: 'triangle' });
  label(slide, 'Repeated R : 2R ratios create binary attenuation', x + 0.15, 5.95, 4.95, 0.25, { fontSize: 9.2, color: C.muted });
}

function drawDivider(slide, accent) {
  const x = 9.15;
  const y = 2.7;
  label(slide, 'VCC', x + 0.1, y, 1.0, 0.2, { fontSize: 8.5, bold: true, color: C.ink });
  line(slide, x + 0.6, y + 0.24, x + 0.6, y + 0.48, C.ink, 1.4);
  shape(slide, x + 0.18, y + 0.48, 0.84, 0.5, C.paper, C.line, 0.85);
  label(slide, 'RFIXED', x + 0.24, y + 0.65, 0.72, 0.16, { fontSize: 7.8, bold: true, color: C.ink });
  line(slide, x + 0.6, y + 0.98, x + 0.6, y + 1.28, accent, 1.35);
  dot(slide, x + 0.6, y + 1.28, 0.055, accent);
  line(slide, x + 0.6, y + 1.28, x + 1.75, y + 1.28, accent, 1.35, { endArrowType: 'triangle' });
  label(slide, 'VOUT -> ADC', x + 1.05, y + 1.02, 1.3, 0.18, { fontSize: 7.8, bold: true, color: accent });
  line(slide, x + 0.6, y + 1.34, x + 0.6, y + 1.56, C.ink, 1.35);
  shape(slide, x + 0.18, y + 1.56, 0.84, 0.52, PALETTES[5].soft, C.line, 0.85);
  label(slide, 'NTC', x + 0.24, y + 1.74, 0.72, 0.16, { fontSize: 8.3, bold: true, color: C.ink });
  line(slide, x + 0.6, y + 2.08, x + 0.6, y + 2.36, C.ink, 1.35);
  line(slide, x + 0.26, y + 2.36, x + 0.94, y + 2.36, C.ink, 1.1);
  line(slide, x + 0.36, y + 2.44, x + 0.84, y + 2.44, C.ink, 0.9);
  line(slide, x + 0.47, y + 2.52, x + 0.73, y + 2.52, C.ink, 0.8);
  label(slide, 'divider output changes with thermistor resistance', 7.04, 5.83, 5.2, 0.25, { fontSize: 9, color: C.muted });
}

function drawThermistor(slide, accent) {
  const x = 7.08;
  const y = 2.75;
  const w = 4.95;
  const h = 2.45;
  axes(slide, x, y, w, h, 'TEMPERATURE', 'RESISTANCE', false);
  const pts = [];
  for (let i = 0; i <= 32; i += 1) {
    const f = i / 32;
    pts.push([x + f * w, y + 0.12 + h * (0.78 * (1 - f) * (1 - f) + 0.06)]);
  }
  polyline(slide, pts, accent, 2.1);
  label(slide, 'NTC: resistance falls as temperature rises', x + 0.36, y + h + 0.24, 4.5, 0.22, { fontSize: 9, color: C.body });
}

function drawBench(slide, accent) {
  const labels = [['INPUT', 'known R / source'], ['DUT', 'thermistor circuit'], ['DMM', 'node voltage'], ['ADC LOG', 'raw code + time']];
  const x = 6.91;
  labels.forEach((item, index) => {
    const xx = x + index * 1.34;
    node(slide, item[0], item[1], xx, 3.18, 1.08, 0.95, index === 1 ? C.coral : accent, index === 1 ? C.coralPale : C.paper);
    if (index < labels.length - 1) line(slide, xx + 1.1, 3.65, xx + 1.31, 3.65, accent, 1.25, { endArrowType: 'triangle' });
  });
  label(slide, 'Record actual components, reference/supply conditions and repeat count', 6.95, 4.72, 5.25, 0.4, { fontSize: 9.2, color: C.body });
}

function drawSchematic(slide, accent) {
  const x = 7.0;
  const y = 3.1;
  const parts = [
    ['SENSOR', 'NTC + Rfixed'], ['FILTER', 'RC if justified'], ['ADC', 'range + ref'], ['OUTPUT', 'log / indicate'],
  ];
  parts.forEach((item, index) => {
    const xx = x + index * 1.34;
    node(slide, item[0], item[1], xx, y, 1.08, 0.92, accent, index === 2 ? PALETTES[5].soft : C.paper);
    if (index < parts.length - 1) line(slide, xx + 1.11, y + 0.47, xx + 1.31, y + 0.47, accent, 1.25, { endArrowType: 'triangle' });
  });
  label(slide, 'Add component references, values, units, test points and interfaces', 6.93, 4.48, 5.35, 0.38, { fontSize: 9.3, color: C.body });
}

function drawToleranceBars(slide, accent) {
  const x = 7.08;
  const y = 2.86;
  const labels = ['LOW', 'NOMINAL', 'HIGH'];
  const colors = [C.blue, accent, C.coral];
  labels.forEach((text, index) => {
    const yy = y + index * 0.8;
    label(slide, text, x, yy + 0.14, 0.95, 0.2, { fontSize: 8, bold: true, color: colors[index] });
    shape(slide, x + 1.1, yy, 3.95, 0.48, index === 1 ? PALETTES[5].soft : C.paper, C.line, 0.65);
    const left = x + 1.3 + index * 0.17;
    const right = x + 4.82 - index * 0.13;
    line(slide, left, yy + 0.24, right, yy + 0.24, colors[index], 2.2);
    dot(slide, left, yy + 0.24, 0.05, colors[index]);
    dot(slide, right, yy + 0.24, 0.05, colors[index]);
  });
  label(slide, 'Tolerance cases show a range; they are not automatically a probability distribution', 6.95, 5.75, 5.35, 0.36, { fontSize: 8.9, color: C.muted });
}

function drawChecklist(slide, accent, labels) {
  const items = (labels || ['REQUIREMENT', 'METHOD', 'RESULT', 'LIMITATION']).slice(0, 5);
  items.forEach((text, index) => {
    const y = 2.72 + index * 0.65;
    shape(slide, 7.08, y + 0.06, 0.25, 0.25, C.white, accent, 1.2);
    addText(slide, String(index + 1).padStart(2, '0'), 7.48, y + 0.02, 0.35, 0.2, { fontSize: 7.8, bold: true, color: accent });
    addText(slide, text, 7.95, y, 3.95, 0.34, { fontSize: 10, bold: true, color: C.ink });
    if (index < items.length - 1) line(slide, 7.48, y + 0.47, 12.0, y + 0.47, C.line, 0.65);
  });
}

function flowLabels(week, number, title) {
  const text = title.toLowerCase();
  if (week === 2) return ['Input range', 'ADC core', 'Digital code', 'Interface'];
  if (week === 3) return ['Digital code', 'DAC network', 'Output filter', 'Analogue output'];
  if (week === 4) return ['Hypothesis', 'Change one factor', 'Measure response', 'Conclude'];
  if (week === 5) return ['Temperature', 'NTC resistance', 'Divider voltage', 'ADC code'];
  if (week === 6) return ['Baseline model', 'Run analysis', 'Change parameter', 'Compare'];
  if (week === 7) return ['Plan test', 'Build safely', 'Measure', 'Record + retest'];
  if (week === 8) return ['Requirement', 'Prediction', 'Simulation', 'Bench evidence'];
  if (/adc|signal chain|conversion/.test(text)) return ['Signal', 'Condition', 'Convert', 'Record'];
  return ['Need', 'Method', 'Evidence', 'Decision'];
}

function topologyCards(week) {
  if (week === 2) return [['SAR', 'Binary search\nbalanced speed'], ['FLASH', 'Parallel compare\nvery fast'], ['RAMP', 'Timed crossing\nsimple / slower'], ['SIGMA-DELTA', 'Oversample\nlow-band noise']];
  if (week === 3) return [['WEIGHTED R', 'Distinct bit weights'], ['R/2R', 'Repeated ratios'], ['SEGMENTED', 'Hybrid switching'], ['DELTA-SIGMA', 'Oversampling + filter']];
  if (week === 4) return [['BITS', 'Quantisation step'], ['TIMING', 'Conversion / settle'], ['NOISE', 'Defined bandwidth'], ['TOLERANCE', 'Controlled corners']];
  if (week === 5) return [['SENSOR', 'R vs temperature'], ['DIVIDER', 'R to voltage'], ['ADC', 'Voltage to code'], ['CALIBRATION', 'Code to estimate']];
  if (week === 6) return [['DC', 'Steady state'], ['TRANSIENT', 'Time response'], ['AC', 'Frequency response'], ['TOLERANCE', 'Sensitivity range']];
  if (week === 7) return [['DMM', 'Steady voltage'], ['SCOPE', 'Transient'], ['SOURCE', 'Known input'], ['ADC LOG', 'Raw code + time']];
  return [['PREDICT', 'Equation'], ['SIMULATE', 'Model result'], ['MEASURE', 'Bench result'], ['EXPLAIN', 'Evidence + limits']];
}

function drawVisual(slide, deck, item, dark = false) {
  const theme = PALETTES[deck.week];
  if (!dark) addPanel(slide, visualTitle(deck.week, item), theme.accent, 'Editable diagram - replace illustrative values with your evidence where applicable');
  const number = item.number;
  const title = item.title.toLowerCase();
  const accent = theme.accent;

  if (deck.week === 2 && number === 4) return drawRamp(slide, accent);
  if (deck.week === 2 && number === 5) return drawSAR(slide, accent);
  if (deck.week === 2 && number === 6) return drawFlash(slide, accent);
  if (deck.week === 2 && number === 7) return drawSigmaDelta(slide, accent);
  if (deck.week === 2 && number === 3) return drawFlow(slide, ['Condition', 'Sample / hold', 'Quantise', 'Report code'], accent, dark);

  if (deck.week === 3 && number === 4) return drawWeighted(slide, accent);
  if (deck.week === 3 && number === 5) return drawR2R(slide, accent);
  if (deck.week === 3 && number === 6) return drawCards(slide, topologyCards(3), accent, dark);
  if (deck.week === 3 && number === 3) return drawDACTransfer(slide, accent, false);
  if (deck.week === 3 && number === 7) return drawDACTransfer(slide, accent, true);

  if (deck.week === 4 && [5, 14].includes(number)) return drawGraph(slide, accent, 'step', dark);
  if (deck.week === 4 && number === 4) return drawDACTransfer(slide, accent, false);
  if (deck.week === 4 && number === 13) return drawResolutionError(slide, accent);
  if (deck.week === 4 && number === 11) return drawResolutionSweep(slide, accent);
  if (deck.week === 4 && [6, 12].includes(number)) return drawGraph(slide, accent, 'tolerance', dark);
  if (deck.week === 4 && number === 7) return drawMatrix(slide, accent, ['FACTOR', 'LEVELS', 'CONTROL'], [['Resolution', '4 / 6 / 8 bit', 'same Vref'], ['Timing', '10 us / 1 ms', 'same update'], ['Noise', 'model / source', 'same load']]);

  if (deck.week === 5 && [4].includes(number)) return drawThermistor(slide, accent);
  if (deck.week === 5 && [5, 7, 11].includes(number)) return drawDivider(slide, accent);
  if (deck.week === 5 && number === 8) return drawMatrix(slide, accent, ['SOURCE', 'EFFECT', 'CHECK'], [['Sensor', 'curve error', 'datasheet'], ['Rfixed', 'gain / span', 'measure'], ['ADC ref', 'code scale', 'verify'], ['Noise', 'repeatability', 'repeat']]);
  if (deck.week === 5 && [3, 6, 12, 13].includes(number)) return drawFlow(slide, flowLabels(5, number, title), accent, dark);

  if (deck.week === 6 && number === 3) return drawCards(slide, [['DC', 'Steady voltage'], ['TRANSIENT', 'Signal vs time'], ['AC', 'Gain vs frequency'], ['NOISE', 'Defined bandwidth']], accent, dark);
  if (deck.week === 6 && [5, 11, 13].includes(number)) return drawGraph(slide, accent, number === 11 ? 'transfer' : number === 5 ? 'step' : 'tolerance', dark);
  if (deck.week === 6 && [4].includes(number)) return drawThermistor(slide, accent);
  if (deck.week === 6 && [6, 7, 12].includes(number)) return drawToleranceBars(slide, accent);
  if (deck.week === 6 && [2, 8, 14, 15, 16].includes(number)) return drawChecklist(slide, accent, ['MODEL + VALUES', 'SUPPLY + REFERENCE', 'INPUT + LOAD', 'RUN ID + LIMIT']);

  if (deck.week === 7 && number === 4) return drawCards(slide, [['DMM', 'DC volts / resistance'], ['SCOPE', 'Transient / noise'], ['SOURCE', 'Known input'], ['MCU LOG', 'Code + timing']], accent, dark);
  if (deck.week === 7 && number === 7) return drawCodeCheck(slide, accent);
  if (deck.week === 7 && number === 2) return drawCards(slide, [['SUPPLY', 'Extra-low voltage'], ['CURRENT', 'Set limit'], ['WIRING', 'Power off first'], ['GROUND', 'Check reference']], accent, dark);
  if (deck.week === 7 && [5, 10, 11, 12, 14].includes(number)) return drawBench(slide, accent);
  if (deck.week === 7 && [3, 8, 13, 15, 16].includes(number)) return drawChecklist(slide, accent, ['QUESTION', 'SAFE SETUP', 'EXPECTED RESULT', 'OBSERVATION', 'RETEST / RECORD']);

  if (deck.week === 8 && [3, 6, 7, 11, 13].includes(number)) return drawGraph(slide, accent, number === 13 ? 'tolerance' : 'compare', dark);
  if (deck.week === 8 && number === 4) return drawUncertainty(slide, accent);
  if (deck.week === 8 && [5, 12].includes(number)) return drawFlow(slide, ['Difference', 'Possible cause', 'Discriminating check', 'Conclusion'], accent, dark);
  if (deck.week === 8 && number === 7) return drawCorrelationTable(slide, accent);
  if (deck.week === 8 && [8, 14].includes(number)) return drawFlow(slide, ['Requirement', 'Design', 'Evidence', 'Recommendation'], accent, dark);
  if (deck.week === 8 && [2, 10, 15, 16].includes(number)) return drawChecklist(slide, accent, ['REQUIREMENT', 'CALCULATION', 'SIMULATION', 'BENCH DATA', 'CONCLUSION']);

  if (/comparison|matrix|compare|evidence|clinic|review|checklist|quality|exit ticket|retrieval|requirements|selection|specification|decision|analysis|activity|workshop|report back|challenge/.test(title)) {
    if (number % 2 === 0) return drawMatrix(slide, accent);
    return drawCards(slide, topologyCards(deck.week), accent, dark);
  }
  if (/graph|plot|response|error|noise|resolution|sampling|transfer|frequency|settling|curve|accuracy/.test(title)) return drawGraph(slide, accent, title.includes('settling') || title.includes('time') ? 'step' : 'transfer', dark);
  if (/circuit|signal chain|sequence|flow|model|path|interface|architecture|data/.test(title)) return drawFlow(slide, flowLabels(deck.week, number, title), accent, dark);
  return drawCards(slide, topologyCards(deck.week), accent, dark);
}

function visualTitle(week, item) {
  const names = {
    2: 'ADC architecture / worked concept', 3: 'DAC topology / output behaviour', 4: 'Simulation evidence / controlled variation',
    5: 'Thermistor measurement / design choices', 6: 'ECAD model / simulation result', 7: 'Bench setup / measured evidence', 8: 'Analysis / engineering judgement',
  };
  return `${names[week]}  |  ${item.number < 10 ? 'CONCEPT' : 'WORKSHOP'}`;
}

function addSpeakerNotes(slide, deck, item) {
  const notes = [
    `UNIT 5014 | WEEK ${String(deck.week).padStart(2, '0')} | ${deck.criteria}`,
    `Slide ${item.number} of 16 | Suggested time: ${item.time || 'as scheduled'}`,
    '',
    'SPEAKER NOTES / ACTIVITY CUES',
    item.notes || 'Use the slide prompts to guide explanation, questions and discussion.',
    '',
    'EDITING NOTE',
    'All diagrams and text on this slide are native editable PowerPoint objects. Illustrative diagrams are conceptual; replace them with sourced data or your own results where required.',
  ].join('\n');
  slide.addNotes(notes);
}

async function buildWeek(week) {
  const data = parseOutline(week);
  const pptx = new PptxGenJS();
  data.pptx = pptx;
  pptx.layout = 'LAYOUT_WIDE';
  pptx.author = 'Unit 5014 Teaching Materials';
  pptx.subject = data.subtitle;
  pptx.title = `Unit 5014 - Week ${String(week).padStart(2, '0')}: ${data.title}`;
  pptx.company = 'Unit 5014';
  pptx.lang = 'en-GB';
  pptx.theme = { headFontFace: HEAD, bodyFontFace: BODY, lang: 'en-GB' };

  data.slides.forEach((item) => {
    const slide = item.number === 1 ? addCover(data, item) : baseSlide(data, item, data.slides.length);
    if (item.number !== 1) {
      slide._week = week;
      drawVisual(slide, data, item);
      addSpeakerNotes(slide, data, item);
    }
  });

  const output = path.join(ROOT, OUTPUTS[week]);
  await pptx.writeFile({ fileName: output, compression: true });
  console.log(`Created ${path.basename(output)} (${data.slides.length} slides)`);
}

async function main() {
  for (let week = 2; week <= 8; week += 1) await buildWeek(week);
}

main().catch((error) => {
  console.error(error.stack || error.message || error);
  process.exitCode = 1;
});