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
        imagePrompt: '',
      };
      continue;
    }

    if (current && line.startsWith('## ')) {
      slides.push(current);
      current = null;
      continue;
    }

    if (!current) continue;
    const imagePrompt = line.match(/^\*\*Image prompt:\*\*\s*(.+)$/i);
    if (imagePrompt) {
      current.imagePrompt = cleanMarkdown(imagePrompt[1]);
      continue;
    }
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
  return slide.imagePrompt || `Create an original, technically accurate visual illustrating ${slide.title} in the MedPack PLC teaching context. Use no text, labels, logos, or invented specifications.`;
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

const PANEL = { x: 8.38, y: 1.91, w: 4.29, h: 4.77 };
const IMAGE_BAY_SLIDES = {
  1: [1, 2, 9, 15],
  2: [1, 8, 15],
  3: [1, 9, 14],
  4: [1, 9, 15],
  5: [1, 9, 15],
  6: [1, 6, 15],
  7: [1, 7, 15],
  8: [1, 9, 15],
};

function addLabel(slide, text, x, y, w, h, options = {}) {
  addText(slide, text, {
    x, y, w, h,
    fontSize: 10,
    color: COLORS.ink,
    align: 'center',
    fit: 'shrink',
    ...options,
  });
}

function addDiagramPanel(slide, deck, label) {
  slide.addShape('rect', {
    x: PANEL.x, y: PANEL.y, w: PANEL.w, h: PANEL.h,
    line: { color: COLORS.line, width: 1 },
    fill: { color: COLORS.white },
  });
  addText(slide, label.toUpperCase(), {
    x: PANEL.x + 0.22, y: PANEL.y + 0.16, w: PANEL.w - 0.44, h: 0.24,
    fontSize: 9, bold: true, charSpacing: 0.8, color: deck.accent,
  });
  slide.addShape('line', {
    x: PANEL.x + 0.22, y: PANEL.y + 0.52, w: PANEL.w - 0.44, h: 0,
    line: { color: COLORS.line, width: 0.7 },
  });
}

function addArrow(slide, x1, y1, x2, y2, color = COLORS.muted, width = 1.8) {
  slide.addShape('line', {
    x: x1, y: y1, w: x2 - x1, h: y2 - y1,
    line: { color, width, endArrowType: 'triangle' },
  });
}

function addNode(slide, text, x, y, w, h, accent, options = {}) {
  slide.addShape('rect', {
    x, y, w, h,
    line: { color: options.lineColor || accent, width: options.lineWidth || 1.15 },
    fill: { color: options.fill || 'F4F8FA' },
  });
  addLabel(slide, text, x + 0.08, y + 0.06, w - 0.16, h - 0.12, {
    fontSize: options.fontSize || 10.5,
    bold: options.bold !== false,
    color: options.color || COLORS.ink,
  });
}

function addImageBay(slide, deck, item) {
  addDiagramPanel(slide, deck, 'Suggested visual');
  slide.addShape('rect', {
    x: PANEL.x + 0.24, y: PANEL.y + 0.75, w: PANEL.w - 0.48, h: PANEL.h - 1.0,
    line: { color: 'AFC1CD', width: 1.1, dash: 'dash' },
    fill: { color: COLORS.visual },
  });
  addLabel(slide, 'IMAGE SPACE', PANEL.x + 0.52, PANEL.y + 2.1, PANEL.w - 1.04, 0.42, {
    fontFace: FONT_HEAD, fontSize: 18, bold: true, color: deck.accent,
  });
  addLabel(slide, 'Insert the visual described in the speaker notes', PANEL.x + 0.62, PANEL.y + 2.6, PANEL.w - 1.24, 0.55, {
    fontSize: 10.5, color: COLORS.muted,
  });
  return 'Image bay';
}

function labelsForFlow(deck) {
  const flows = {
    1: ['Investigate', 'Specify', 'Verify', 'Record'],
    2: ['Application', 'PLC class', 'Exact model', 'Evidence'],
    3: ['Field input', 'PLC CPU', 'I/O module', 'Load'],
    4: ['Requirement', 'Datasheet', 'Trade-off', 'Decision'],
    5: ['Sensor', 'Input filter', 'PLC logic', 'Actuator'],
    6: ['Medium', 'Network', 'Protocol', 'Data map'],
    7: ['Field I/O', 'PLC control', 'HMI view', 'SCADA data'],
    8: ['Industry need', 'Shared data', 'Risk review', 'Control'],
  };
  return flows[deck.week];
}

function drawFlow(slide, deck, item) {
  let nodes = labelsForFlow(deck);
  if (/specification-to-application|traceability|justification|reconnect/i.test(item.title)) nodes = ['Application need', 'PLC feature', 'System impact', 'Evidence'];
  const x0 = PANEL.x + 0.32;
  const nodeW = 0.78;
  const gap = 0.25;
  const y = PANEL.y + 2.02;
  nodes.forEach((label, index) => {
    const x = x0 + index * (nodeW + gap);
    addNode(slide, label, x, y, nodeW, 0.72, deck.accent, { fontSize: 9.5 });
    if (index < nodes.length - 1) addArrow(slide, x + nodeW + 0.02, y + 0.36, x + nodeW + gap - 0.03, y + 0.36, deck.accent, 1.5);
  });
  addLabel(slide, 'Trace the requirement from the device to its verified result', PANEL.x + 0.42, y + 1.12, PANEL.w - 0.84, 0.62, {
    fontSize: 11.5, color: COLORS.body,
  });
}

function drawState(slide, deck) {
  const x = PANEL.x + 0.42;
  const y = PANEL.y + 1.12;
  const w = 1.34;
  const h = 0.58;
  const nodes = [
    { t: 'READY', x, y },
    { t: 'COUNT', x: x + 2.05, y },
    { t: 'PACKAGE', x: x + 2.05, y: y + 1.3 },
    { t: 'COMPLETE', x, y: y + 1.3 },
  ];
  nodes.forEach((node) => addNode(slide, node.t, node.x, node.y, w, h, deck.accent));
  addArrow(slide, x + w, y + h / 2, x + 1.93, y + h / 2, deck.accent);
  addArrow(slide, x + 2.72, y + h, x + 2.72, y + 1.2, deck.accent);
  addArrow(slide, x + 2.03, y + 1.59, x + w + 0.08, y + 1.59, deck.accent);
  addNode(slide, 'FAULT / HOLD', x + 1.03, y + 2.52, 1.5, 0.54, COLORS.coral, { fill: 'FBF2F0', color: COLORS.coral });
  addArrow(slide, x + 0.62, y + 0.65, x + 1.5, y + 2.42, COLORS.coral, 1.2);
  addLabel(slide, 'Reset returns to ready only after the defined recovery checks', x + 0.03, y + 3.05, 3.0, 0.42, { fontSize: 9.5, color: COLORS.muted });
}

function drawIo(slide, deck) {
  const y = PANEL.y + 1.85;
  addNode(slide, 'SENSOR +\nBUTTONS', PANEL.x + 0.18, y, 0.88, 0.9, deck.accent, { fontSize: 8.7 });
  addNode(slide, 'PLC\nINPUTS', PANEL.x + 1.28, y, 0.75, 0.9, deck.accent, { fontSize: 8.8 });
  addNode(slide, 'CPU\nLOGIC', PANEL.x + 2.25, y, 0.74, 0.9, deck.accent, { fontSize: 8.8, fill: 'EAF3F4' });
  addNode(slide, 'OUTPUT\nINTERFACE', PANEL.x + 3.24, y, 0.79, 0.9, deck.accent, { fontSize: 8.2 });
  addArrow(slide, PANEL.x + 1.08, y + 0.45, PANEL.x + 1.24, y + 0.45, deck.accent);
  addArrow(slide, PANEL.x + 2.05, y + 0.45, PANEL.x + 2.21, y + 0.45, deck.accent);
  addArrow(slide, PANEL.x + 3.01, y + 0.45, PANEL.x + 3.2, y + 0.45, deck.accent);
  addLabel(slide, 'ACTUATOR  /  BUZZER', PANEL.x + 0.48, y + 1.27, 3.2, 0.35, { fontSize: 10, bold: true, color: COLORS.ink });
  addLabel(slide, 'Verify voltage, polarity, load current and channel limits', PANEL.x + 0.42, y + 1.85, PANEL.w - 0.84, 0.62, { fontSize: 10.5, color: COLORS.muted });
}

function drawTiming(slide, deck, item) {
  const x = PANEL.x + 0.65;
  const y = PANEL.y + 1.5;
  const w = 3.1;
  addLabel(slide, 'RAW SENSOR: VALID EVENTS + CHATTER', x, y, w, 0.3, { align: 'left', fontSize: 8.5, bold: true, color: COLORS.muted });
  slide.addShape('line', { x, y: y + 0.9, w, h: 0, line: { color: COLORS.line, width: 1 } });
  const pulses = [0.35, 1.28, 2.35];
  pulses.forEach((offset) => {
    slide.addShape('line', { x: x + offset, y: y + 0.9, w: 0, h: -0.53, line: { color: deck.accent, width: 2.5 } });
    slide.addShape('line', { x: x + offset, y: y + 0.37, w: 0.32, h: 0, line: { color: deck.accent, width: 2.5 } });
    slide.addShape('line', { x: x + offset + 0.32, y: y + 0.37, w: 0, h: 0.53, line: { color: deck.accent, width: 2.5 } });
  });
  slide.addShape('line', { x: x + 1.72, y: y + 0.9, w: 0, h: -0.2, line: { color: COLORS.coral, width: 1.6 } });
  slide.addShape('line', { x: x + 1.72, y: y + 0.7, w: 0.1, h: 0, line: { color: COLORS.coral, width: 1.6 } });
  slide.addShape('line', { x: x + 1.82, y: y + 0.7, w: 0, h: 0.2, line: { color: COLORS.coral, width: 1.6 } });
  addLabel(slide, 'QUALIFIED INPUT / ONE-SHOT EVENTS', x, y + 1.2, w, 0.3, { align: 'left', fontSize: 8.5, bold: true, color: COLORS.muted });
  slide.addShape('line', { x, y: y + 2.0, w, h: 0, line: { color: COLORS.line, width: 1 } });
  pulses.forEach((offset) => {
    slide.addShape('line', { x: x + offset, y: y + 2.0, w: 0, h: -0.48, line: { color: COLORS.blue, width: 2.5 } });
    slide.addShape('line', { x: x + offset, y: y + 1.52, w: 0.32, h: 0, line: { color: COLORS.blue, width: 2.5 } });
    slide.addShape('line', { x: x + offset + 0.32, y: y + 1.52, w: 0, h: 0.48, line: { color: COLORS.blue, width: 2.5 } });
  });
  addLabel(slide, 'Reject the short chatter; preserve all valid pill events', x + 0.05, y + 2.48, w - 0.1, 0.5, { fontSize: 10.5, bold: true, color: deck.accent });
}

function drawComparison(slide, deck) {
  const x = PANEL.x + 0.28;
  const y = PANEL.y + 0.95;
  if (deck.week === 2) {
    const candidates = [
      { vendor: 'SIEMENS', family: 'S7-1200 / S7-1500' },
      { vendor: 'ROCKWELL', family: 'Micro800 / CompactLogix' },
      { vendor: 'SCHNEIDER', family: 'Modicon M2xx' },
    ];
    candidates.forEach((candidate, index) => {
      const yy = y + index * 0.94;
      slide.addShape('rect', { x, y: yy, w: 3.7, h: 0.76, line: { color: COLORS.line, width: 0.8 }, fill: { color: index === 1 ? 'EAF3F4' : 'F6F8FA' } });
      addText(slide, candidate.vendor, { x: x + 0.14, y: yy + 0.1, w: 1.03, h: 0.19, fontSize: 8.2, bold: true, charSpacing: 0.4, color: deck.accent });
      addText(slide, candidate.family, { x: x + 1.16, y: yy + 0.08, w: 2.36, h: 0.24, fontSize: 9.3, bold: true, color: COLORS.ink, fit: 'shrink' });
      addText(slide, 'Compare exact CPU, I/O variant, expansion, software and local support', { x: x + 0.14, y: yy + 0.42, w: 3.42, h: 0.22, fontSize: 8.2, color: COLORS.muted, fit: 'shrink' });
    });
    addLabel(slide, 'Families are research leads, not a preselected winner', x + 0.1, y + 3.0, 3.5, 0.47, { fontSize: 9.4, color: COLORS.muted });
    return;
  }

  const colWidths = [1.3, 1.08, 1.08];
  const rowH = 0.65;
  const headers = deck.week === 3 ? ['INTERFACE', 'BEST FIT', 'CHECK'] : deck.week === 6 ? ['LAYER', 'EXAMPLE A', 'EXAMPLE B'] : ['COMPARE', 'CANDIDATE A', 'CANDIDATE B'];
  let cursorX = x;
  headers.forEach((header, index) => {
    slide.addShape('rect', { x: cursorX, y, w: colWidths[index], h: 0.52, line: { color: deck.accent, width: 0.8 }, fill: { color: index === 0 ? deck.accent : 'EAF0F3' } });
    addLabel(slide, header, cursorX + 0.04, y + 0.04, colWidths[index] - 0.08, 0.43, { fontSize: 8.5, bold: true, color: index === 0 ? COLORS.white : COLORS.ink });
    cursorX += colWidths[index];
  });
  const rows = deck.week === 3
    ? [['Relay', 'AC / DC*', 'Load rating'], ['Triac', 'AC switching', 'Leakage'], ['Transistor', 'DC switching', 'Polarity'], ['Analogue', 'Measured value', 'Range / accuracy']]
    : deck.week === 6
      ? [['Physical', 'Ethernet', 'RS-485'], ['Protocol', 'Modbus TCP', 'Modbus RTU'], ['Topology', 'Switched LAN', 'Serial bus'], ['Evidence', 'Device manual', 'Device manual']]
      : [['I/O fit', 'Verify model', 'Verify model'], ['Expansion', 'Check limit', 'Check limit'], ['Performance', 'Match need', 'Match need'], ['Support / cost', 'Cite source', 'Cite source']];
  rows.forEach((row, rowIndex) => {
    cursorX = x;
    row.forEach((cell, columnIndex) => {
      const yPos = y + 0.52 + rowIndex * rowH;
      slide.addShape('rect', { x: cursorX, y: yPos, w: colWidths[columnIndex], h: rowH, line: { color: COLORS.line, width: 0.6 }, fill: { color: rowIndex % 2 ? 'F6F8FA' : COLORS.white } });
      addLabel(slide, cell, cursorX + 0.05, yPos + 0.05, colWidths[columnIndex] - 0.1, rowH - 0.1, { fontSize: columnIndex ? 8.7 : 9, bold: columnIndex === 0, color: columnIndex ? COLORS.body : COLORS.ink });
      cursorX += colWidths[columnIndex];
    });
  });
  addLabel(slide, deck.week === 3 ? '*Only within the exact module ratings' : 'Use exact model manuals; do not infer missing specifications', x + 0.06, y + 3.35, 3.45, 0.54, { fontSize: 9.2, color: COLORS.muted });
}

function drawNetwork(slide, deck, item) {
  const y = PANEL.y + 1.15;
  if (deck.week === 6 && /serial|ethernet|link|physical/i.test(item.title)) {
    addLabel(slide, 'SWITCHED ETHERNET', PANEL.x + 0.32, y, 3.6, 0.3, { fontSize: 9, bold: true, color: deck.accent });
    addNode(slide, 'PLC', PANEL.x + 0.34, y + 0.55, 0.88, 0.5, deck.accent);
    addNode(slide, 'SWITCH', PANEL.x + 1.7, y + 0.55, 0.88, 0.5, deck.accent);
    addNode(slide, 'HMI', PANEL.x + 3.0, y + 0.55, 0.88, 0.5, deck.accent);
    addArrow(slide, PANEL.x + 1.23, y + 0.8, PANEL.x + 1.65, y + 0.8, deck.accent);
    addArrow(slide, PANEL.x + 2.6, y + 0.8, PANEL.x + 2.95, y + 0.8, deck.accent);
    addLabel(slide, 'SERIAL RS-485 TRUNK', PANEL.x + 0.32, y + 1.55, 3.6, 0.3, { fontSize: 9, bold: true, color: COLORS.blue });
    slide.addShape('line', { x: PANEL.x + 0.55, y: y + 2.43, w: 3.35, h: 0, line: { color: COLORS.blue, width: 2 } });
    [0.75, 1.85, 3.1].forEach((offset, index) => {
      addNode(slide, ['PLC', 'NODE', 'NODE'][index], PANEL.x + offset, y + 2.05, 0.75, 0.6, COLORS.blue, { fontSize: 9 });
      slide.addShape('line', { x: PANEL.x + offset + 0.38, y: y + 2.65, w: 0, h: -0.2, line: { color: COLORS.blue, width: 1.4 } });
    });
    addLabel(slide, 'The link and protocol are separate choices', PANEL.x + 0.38, y + 3.15, 3.5, 0.45, { fontSize: 10.5, color: COLORS.ink });
    return;
  }

  const centerX = PANEL.x + 1.7;
  const centerY = y + 1.32;
  addNode(slide, deck.week === 7 ? 'NETWORK\nBUS' : 'PLC\nCONTROLLER', centerX, centerY, 0.95, 0.76, deck.accent, { fontSize: 9.5 });
  const nodes = [
    { t: 'LOCAL I/O', x: PANEL.x + 0.3, y: y + 0.48 },
    { t: 'REMOTE I/O', x: PANEL.x + 3.05, y: y + 0.48 },
    { t: 'HMI', x: PANEL.x + 0.3, y: y + 2.38 },
    { t: 'SCADA', x: PANEL.x + 3.05, y: y + 2.38 },
  ];
  nodes.forEach((node) => {
    addNode(slide, node.t, node.x, node.y, 0.95, 0.58, deck.accent, { fontSize: 9 });
    addArrow(slide, centerX + 0.48, centerY + 0.38, node.x + 0.47, node.y + 0.3, COLORS.muted, 1.15);
  });
  addLabel(slide, 'Label the medium and protocol on every connection', PANEL.x + 0.38, y + 3.1, 3.54, 0.42, { fontSize: 9.7, color: COLORS.muted });
}

function drawAnalog(slide, deck) {
  const x = PANEL.x + 0.62;
  const y = PANEL.y + 1.15;
  const width = 3.0;
  const height = 2.45;
  slide.addShape('line', { x, y: y + height, w: width, h: 0, line: { color: COLORS.ink, width: 1.2, endArrowType: 'triangle' } });
  slide.addShape('line', { x, y: y + height, w: 0, h: -height, line: { color: COLORS.ink, width: 1.2, endArrowType: 'triangle' } });
  slide.addShape('line', { x: x + 0.18, y: y + height - 0.25, w: width - 0.38, h: -1.85, line: { color: deck.accent, width: 2.6 } });
  addLabel(slide, 'RAW ADC', x - 0.12, y + height + 0.1, 1.0, 0.3, { fontSize: 9, color: COLORS.muted });
  addLabel(slide, 'ENGINEERING VALUE', x + 1.55, y + height + 0.1, 1.65, 0.3, { fontSize: 8.5, color: COLORS.muted });
  addLabel(slide, 'Scale using configured range; resolution is not accuracy', PANEL.x + 0.35, y + 3.05, 3.6, 0.42, { fontSize: 9.9, color: COLORS.ink });
}

function drawDecision(slide, deck) {
  const x = PANEL.x + 0.48;
  const y = PANEL.y + 1.0;
  addLabel(slide, 'FIRST: PASS / FAIL MANDATORY GATES', x, y, 3.35, 0.35, { fontSize: 9.2, bold: true, color: deck.accent });
  const gates = ['Electrical fit', 'Required I/O', 'Safety boundary'];
  gates.forEach((label, index) => {
    const yy = y + 0.56 + index * 0.7;
    addNode(slide, label, x + 0.15, yy, 1.42, 0.48, deck.accent, { fontSize: 9.2 });
    addLabel(slide, 'PASS', x + 1.85, yy + 0.08, 0.58, 0.28, { fontSize: 8.5, bold: true, color: COLORS.teal });
    addLabel(slide, 'FAIL = EXCLUDE', x + 2.43, yy + 0.08, 1.0, 0.28, { fontSize: 8, bold: true, color: COLORS.coral });
  });
  slide.addShape('line', { x: x + 0.12, y: y + 2.86, w: 3.4, h: 0, line: { color: COLORS.line, width: 1 } });
  addLabel(slide, 'THEN weigh preferences with cited evidence', x + 0.06, y + 3.0, 3.5, 0.45, { fontSize: 10.2, bold: true, color: COLORS.ink });
}

function drawSafety(slide, deck) {
  const x = PANEL.x + 0.38;
  const y = PANEL.y + 1.03;
  addLabel(slide, 'KEEP THE SAFETY FUNCTION DISTINCT', x, y, 3.5, 0.35, { fontSize: 9, bold: true, color: COLORS.coral });
  addNode(slide, 'E-STOP\nDEVICE', x + 0.05, y + 0.7, 0.92, 0.72, COLORS.coral, { fill: 'FBF2F0', fontSize: 9 });
  addNode(slide, 'SAFETY\nRELAY / PLC', x + 1.55, y + 0.7, 1.1, 0.72, COLORS.coral, { fill: 'FBF2F0', fontSize: 9 });
  addNode(slide, 'HAZARDOUS\nENERGY', x + 3.05, y + 0.7, 0.86, 0.72, COLORS.coral, { fill: 'FBF2F0', fontSize: 8.4 });
  addArrow(slide, x + 0.99, y + 1.06, x + 1.48, y + 1.06, COLORS.coral);
  addArrow(slide, x + 2.67, y + 1.06, x + 2.98, y + 1.06, COLORS.coral);
  addNode(slide, 'STANDARD PLC: STATUS MONITORING', x + 0.78, y + 2.2, 2.65, 0.58, deck.accent, { fontSize: 9.2 });
  addArrow(slide, x + 2.1, y + 1.48, x + 2.1, y + 2.1, deck.accent, 1.1);
  addLabel(slide, 'Risk assessment defines the required architecture and reset behaviour', x + 0.16, y + 3.04, 3.55, 0.55, { fontSize: 10.1, color: COLORS.body });
}

function drawArchitecture(slide, deck) {
  const x = PANEL.x + 0.32;
  const y = PANEL.y + 0.92;
  const layers = [
    { name: 'FIELD', detail: 'Sensors  /  actuators', fill: 'F6F8FA' },
    { name: 'CONTROL', detail: 'PLC  /  local logic', fill: 'EAF3F4' },
    { name: 'SUPERVISORY', detail: 'HMI  /  SCADA', fill: 'F8F3E8' },
    { name: 'INFORMATION', detail: 'History  /  reports', fill: 'F6F8FA' },
  ];
  layers.forEach((layer, index) => {
    const yy = y + index * 0.73;
    slide.addShape('rect', { x, y: yy, w: 3.65, h: 0.57, line: { color: index === 1 ? deck.accent : COLORS.line, width: index === 1 ? 1.5 : 0.9 }, fill: { color: layer.fill } });
    addText(slide, layer.name, { x: x + 0.14, y: yy + 0.09, w: 1.12, h: 0.18, fontSize: 8.3, bold: true, charSpacing: 0.45, color: index === 1 ? deck.accent : COLORS.muted });
    addText(slide, layer.detail, { x: x + 1.27, y: yy + 0.1, w: 2.15, h: 0.36, fontSize: 10.2, bold: true, color: COLORS.ink, align: 'center' });
  });
  addLabel(slide, 'Supervisory loss must not stop essential local control', x + 0.1, y + 3.12, 3.45, 0.55, { fontSize: 10.2, color: deck.accent, bold: true });
}

function drawChecklist(slide, deck) {
  const labelsByWeek = {
    1: ['PROCESS CYCLE', 'I/O REQUIREMENTS', 'SAFETY + CONTEXT', 'EVIDENCE / UNKNOWN'],
    2: ['EXACT MODEL', 'TECHNICAL SPECS', 'PRACTICAL SUPPORT', 'CITED EVIDENCE'],
    3: ['ELECTRICAL FIT', 'OUTPUT / INPUT TYPE', 'RATINGS + LIMITS', 'COMPATIBILITY'],
    4: ['P1: APPLICATION', 'P2: COMPARISON', 'M1: JUSTIFICATION', 'D1: EVALUATION'],
    5: ['EXPECTED STATE', 'MEASURE SIGNAL', 'FIND BOUNDARY', 'RETEST + RECORD'],
    6: ['PHYSICAL LINK', 'PROTOCOL', 'ENDPOINT MAP', 'SOURCE / LIMIT'],
    7: ['TOPOLOGY', 'DATA / TAG MAP', 'PERMISSIONS', 'LOSS-OF-LINK STATE'],
    8: ['BENEFIT', 'LIMITATION', 'RISK', 'MITIGATION'],
  };
  const labels = labelsByWeek[deck.week];
  const x = PANEL.x + 0.52;
  const y = PANEL.y + 1.0;
  labels.forEach((label, index) => {
    const yy = y + index * 0.82;
    slide.addShape('rect', { x, y: yy + 0.04, w: 0.28, h: 0.28, line: { color: deck.accent, width: 1.4 }, fill: { color: COLORS.white } });
    addText(slide, String(index + 1).padStart(2, '0'), { x: x + 0.46, y: yy, w: 0.34, h: 0.19, fontSize: 8, bold: true, color: deck.accent });
    addText(slide, label, { x: x + 0.88, y: yy - 0.01, w: 2.32, h: 0.36, fontSize: 10, bold: true, color: COLORS.ink, fit: 'shrink' });
    if (index < labels.length - 1) slide.addShape('line', { x: x + 0.46, y: yy + 0.55, w: 2.78, h: 0, line: { color: COLORS.line, width: 0.7 } });
  });
}

function drawPlcClasses(slide, deck) {
  const rows = [
    ['MICRO / COMPACT', 'Integrated CPU and I/O; often suits a stand-alone machine'],
    ['MODULAR', 'Selectable I/O and communication modules; grows with the application'],
    ['RACK / PAC', 'Larger modular systems; may suit distributed or complex control'],
    ['SAFETY PLC', 'Safety-rated functions require risk assessment and validation'],
  ];
  const x = PANEL.x + 0.3;
  const y = PANEL.y + 0.91;
  rows.forEach((row, index) => {
    const yy = y + index * 0.88;
    slide.addShape('rect', { x, y: yy, w: 3.7, h: 0.69, line: { color: index === 3 ? COLORS.coral : COLORS.line, width: index === 3 ? 1.1 : 0.8 }, fill: { color: index === 3 ? 'FBF2F0' : index % 2 ? 'F6F8FA' : 'EAF3F4' } });
    addText(slide, row[0], { x: x + 0.12, y: yy + 0.1, w: 1.15, h: 0.2, fontSize: 8.2, bold: true, color: index === 3 ? COLORS.coral : deck.accent });
    addText(slide, row[1], { x: x + 1.3, y: yy + 0.07, w: 2.25, h: 0.53, fontSize: 8.5, color: COLORS.body, fit: 'shrink' });
  });
  addLabel(slide, 'Form factor is a starting point; verify exact CPU and module features', x + 0.1, y + 3.3, 3.5, 0.4, { fontSize: 8.8, color: COLORS.muted });
}

function drawRisk(slide, deck) {
  const labels = ['Initiating event', 'Process effect', 'Detection', 'Response / recovery'];
  const x = PANEL.x + 0.35;
  const y = PANEL.y + 1.08;
  labels.forEach((label, index) => {
    const yy = y + index * 0.77;
    addNode(slide, label, x + 0.12, yy, 1.52, 0.53, index === 3 ? COLORS.teal : deck.accent, { fill: index === 3 ? 'EAF3F0' : 'F6F8FA', fontSize: 9.3 });
    if (index < labels.length - 1) addArrow(slide, x + 1.83, yy + 0.27, x + 3.15, yy + 0.27, index === 2 ? COLORS.teal : COLORS.muted, 1.3);
  });
  addLabel(slide, 'Estimate likelihood and severity from evidence, not guesswork', x + 0.06, y + 3.12, 3.65, 0.42, { fontSize: 9.2, color: COLORS.ink });
}

function drawTechnologyRoles(slide, deck) {
  const technologies = [
    ['PROFIBUS', 'Fieldbus\ncontroller / device'],
    ['IO-LINK', 'Sensor / actuator\nvia a master'],
    ['OPC UA', 'Structured\ninformation exchange'],
  ];
  const x = PANEL.x + 0.27;
  const y = PANEL.y + 1.37;
  technologies.forEach((entry, index) => {
    const xx = x + index * 1.27;
    slide.addShape('rect', { x: xx, y, w: 1.17, h: 1.72, line: { color: COLORS.line, width: 0.9 }, fill: { color: index === 1 ? 'EAF3F4' : 'F6F8FA' } });
    addText(slide, entry[0], { x: xx + 0.06, y: y + 0.2, w: 1.05, h: 0.28, fontSize: 8.8, bold: true, color: deck.accent, align: 'center' });
    addText(slide, entry[1], { x: xx + 0.08, y: y + 0.65, w: 1.01, h: 0.75, fontSize: 9.2, color: COLORS.ink, align: 'center', fit: 'shrink' });
  });
  addLabel(slide, 'Different roles: verify device support, module and data model', PANEL.x + 0.35, y + 2.24, 3.6, 0.58, { fontSize: 9.7, color: COLORS.muted });
}

function drawSecurityZones(slide, deck) {
  const zones = [
    { name: 'CELL / CONTROL', detail: 'PLC + local HMI', fill: 'EAF3F4' },
    { name: 'SUPERVISORY', detail: 'SCADA + history', fill: 'F8F3E8' },
    { name: 'BUSINESS', detail: 'Approved reports', fill: 'F2F6F8' },
  ];
  const x = PANEL.x + 0.28;
  const y = PANEL.y + 1.0;
  zones.forEach((zone, index) => {
    const xx = x + index * 1.28;
    slide.addShape('rect', { x: xx, y, w: 1.12, h: 1.23, line: { color: index ? COLORS.line : deck.accent, width: index ? 0.9 : 1.4 }, fill: { color: zone.fill } });
    addText(slide, zone.name, { x: xx + 0.05, y: y + 0.15, w: 1.02, h: 0.34, fontSize: 7.8, bold: true, color: index ? COLORS.ink : deck.accent, align: 'center', fit: 'shrink' });
    addText(slide, zone.detail, { x: xx + 0.06, y: y + 0.62, w: 1.0, h: 0.4, fontSize: 8.5, color: COLORS.body, align: 'center', fit: 'shrink' });
    if (index < zones.length - 1) addArrow(slide, xx + 1.14, y + 0.62, xx + 1.25, y + 0.62, deck.accent, 1.2);
  });
  addLabel(slide, 'CONTROL THE BOUNDARIES', x + 0.1, y + 1.62, 3.5, 0.28, { fontSize: 8.5, bold: true, color: deck.accent });
  const controls = ['Segmentation', 'Least privilege', 'Controlled remote access', 'Tested backups'];
  controls.forEach((control, index) => {
    const xx = x + (index % 2) * 1.88;
    const yy = y + 2.07 + Math.floor(index / 2) * 0.63;
    addNode(slide, control, xx, yy, 1.68, 0.45, deck.accent, { fontSize: 8.4, fill: COLORS.white });
  });
  addLabel(slide, 'Local control remains available if supervisory links fail', x + 0.08, y + 3.25, 3.55, 0.38, { fontSize: 8.9, color: COLORS.ink });
}

function drawProtocolModels(slide, deck, item) {
  const x = PANEL.x + 0.28;
  const y = PANEL.y + 1.04;
  const isModbus = /modbus/i.test(item.title);
  const columns = isModbus
    ? [
      { title: 'MODBUS RTU', rows: ['Serial message framing', 'Device/node address', 'Commonly over serial'] },
      { title: 'MODBUS TCP', rows: ['TCP/IP transport', 'IP endpoint', 'Commonly over Ethernet'] },
    ]
    : [
      { title: 'PROFINET', rows: ['Industrial Ethernet family', 'Device/configuration model', 'Verify controller role'] },
      { title: 'EtherNet/IP', rows: ['Industrial Ethernet family', 'Distinct configuration model', 'Verify scanner/adapter role'] },
    ];
  columns.forEach((column, index) => {
    const xx = x + index * 1.91;
    slide.addShape('rect', { x: xx, y, w: 1.78, h: 2.62, line: { color: index ? COLORS.blue : deck.accent, width: 1.2 }, fill: { color: index ? 'F2F6F8' : 'EAF3F4' } });
    addLabel(slide, column.title, xx + 0.08, y + 0.15, 1.62, 0.4, { fontSize: 10, bold: true, color: index ? COLORS.blue : deck.accent });
    column.rows.forEach((row, rowIndex) => {
      const yy = y + 0.77 + rowIndex * 0.53;
      slide.addShape('ellipse', { x: xx + 0.16, y: yy + 0.08, w: 0.1, h: 0.1, line: { color: index ? COLORS.blue : deck.accent, transparency: 100 }, fill: { color: index ? COLORS.blue : deck.accent } });
      addText(slide, row, { x: xx + 0.36, y: yy, w: 1.28, h: 0.37, fontSize: 8.7, color: COLORS.body, fit: 'shrink' });
    });
  });
  addLabel(slide, isModbus ? 'Same familiar data concepts; transport and addressing differ' : 'Ethernet cabling does not make the protocol families interchangeable', x + 0.1, y + 2.98, 3.55, 0.63, { fontSize: 9.5, color: COLORS.ink });
}

function drawConcept(slide, deck, item) {
  const words = item.bullets.slice(0, 4).map((bullet) => shorten(bullet, 5, 36));
  const x = PANEL.x + 0.38;
  const y = PANEL.y + 1.0;
  const positions = [
    [x, y], [x + 1.88, y], [x, y + 1.52], [x + 1.88, y + 1.52],
  ];
  words.forEach((word, index) => {
    const [xx, yy] = positions[index];
    addNode(slide, word, xx, yy, 1.65, 0.88, deck.accent, { fontSize: 9.2, fill: index % 2 ? 'F6F8FA' : 'EAF3F4' });
  });
  addArrow(slide, x + 0.8, y + 0.94, x + 2.55, y + 1.38, deck.accent, 1.1);
  addArrow(slide, x + 2.55, y + 0.94, x + 0.8, y + 1.38, deck.accent, 1.1);
  addLabel(slide, 'Connect the ideas; use the evidence on the left to explain each link', x + 0.1, y + 2.75, 3.42, 0.68, { fontSize: 10, color: COLORS.muted });
}

function visualTypeFor(deck, item) {
  const title = item.title.toLowerCase();
  if (/knowledge check|exit ticket|evidence review|quality review|common errors|checklist|criteria audit|submission audit|evidence audit|\baudit\b|defend the quality|red-team|red team|assessment|success criteria|outcomes|criteria evidence|evidence standard|claim-evidence|\bactivity\b/.test(title)) return 'checklist';
  if (deck.week === 8 && /proportionate controls/.test(title)) return 'security';
  if (deck.week === 2 && /compact|micro plc|modular|rack|forms|plc class/.test(title)) return 'plcClasses';
  if (deck.week === 6 && /other plc-relevant technologies/.test(title)) return 'technology';
  if (deck.week === 6 && /modbus|profinet|ethernet\/ip|standards and protocols/.test(title)) return 'protocols';
  if (/boundary|stakeholder/.test(title)) return 'flow';
  if (/block diagram|i\/o schedule|map terminals|data mapping|tag list|wiring diagram/.test(title)) return 'io';
  if (/safety|emergency stop|e-stop/.test(title)) return 'safety';
  if (/fault|recovery|risk|failure mode/.test(title)) return 'risk';
  if (/specification-to-application|traceability|justification|reconnect|defensible choice|application chain/.test(title)) return 'flow';
  if (/relay|triac|transistor|output interface|candidate|hardware identity|ratings table|comparison|compare|matrix|manufacturer|ownership|shortlist|ecosystem|uncertainty|lifecycle|retention/.test(title)) return 'comparison';
  if (/physical event|plc variable|data governance/.test(title)) return /governance/.test(title) ? 'architecture' : 'io';
  if (/choice|conditional recommendation|judgement|evaluation|sensitivity|priorit|requirements|proportionate|criteria ladder/.test(title)) return 'decision';
  if (/\bstate\b|\bcycle\b|\bsequence\b|\bprocess\b/.test(title)) return 'state';
  if (/scan|response|timing|pulse|debounce|filter|measure/.test(title)) return 'timing';
  if (/analogue|scaling|adc|resolution/.test(title)) return 'analog';
  if (/communication|protocol|ethernet|serial|topology|network|bus|distributed i\/o|technology|expansion scenario|end-to-end connection|link choice|\blink\b/.test(title)) return 'network';
  if (/hmi|scada|integration|architecture|convergence|data flow/.test(title)) return 'architecture';
  if (/i\/o|input|output|signal|tag|mapping|interface|wiring/.test(title)) return 'io';
  if (/selection|decision|evaluate|cost|requirement|criteria|evidence/.test(title)) return 'decision';
  if (/\bcycle\b|flow|step|revise|traceability|reconnect/.test(title)) return 'flow';
  return 'checklist';
}

function addTeachingVisual(slide, deck, item) {
  if ((IMAGE_BAY_SLIDES[deck.week] || []).includes(item.number)) {
    return addImageBay(slide, deck, item);
  }

  const kind = visualTypeFor(deck, item);
  const labels = {
    state: 'PROCESS STATE MODEL', safety: 'SAFE RESPONSE PATH', timing: 'SIGNAL TIMING',
    analog: 'ANALOGUE SCALING', comparison: 'COMPARISON FRAMEWORK', network: 'COMMUNICATION ARCHITECTURE',
    architecture: 'CONTROL SYSTEM LAYERS', io: 'SIGNAL PATH', decision: 'DECISION METHOD', flow: 'APPLICATION WORKFLOW', checklist: 'FORMATIVE CHECK',
    plcClasses: 'PLC ARCHITECTURE CLASSES', risk: 'FAULT AND RISK PATH', technology: 'TECHNOLOGY ROLES', protocols: 'PROTOCOL COMPARISON', security: 'NETWORK SECURITY ZONES',
  };
  addDiagramPanel(slide, deck, labels[kind]);
  if (kind === 'state') drawState(slide, deck);
  else if (kind === 'safety') drawSafety(slide, deck);
  else if (kind === 'timing') drawTiming(slide, deck, item);
  else if (kind === 'analog') drawAnalog(slide, deck);
  else if (kind === 'comparison') drawComparison(slide, deck);
  else if (kind === 'network') drawNetwork(slide, deck, item);
  else if (kind === 'architecture') drawArchitecture(slide, deck);
  else if (kind === 'io') drawIo(slide, deck);
  else if (kind === 'decision') drawDecision(slide, deck);
  else if (kind === 'flow') drawFlow(slide, deck, item);
  else if (kind === 'checklist') drawChecklist(slide, deck);
  else if (kind === 'plcClasses') drawPlcClasses(slide, deck);
  else if (kind === 'risk') drawRisk(slide, deck);
  else if (kind === 'technology') drawTechnologyRoles(slide, deck);
  else if (kind === 'protocols') drawProtocolModels(slide, deck, item);
  else if (kind === 'security') drawSecurityZones(slide, deck);
  return labels[kind];
}

function addContent(slide, deck, item) {
  addText(slide, 'TEACHING POINTS', {
    x: 0.73, y: 1.87, w: 3.0, h: 0.23,
    fontSize: 9, bold: true, charSpacing: 1.0, color: deck.accent,
  });

  const bullets = item.bullets.length ? item.bullets : ['Develop this point using the worked example and discussion prompts in the speaker notes.'];
  const top = 2.18;
  const bottom = 6.72;
  const gap = 0.09;
  const rowHeight = (bottom - top - gap * (bullets.length - 1)) / bullets.length;
  const fontSize = bullets.some((bullet) => bullet.length > 260) ? 12.4 : bullets.some((bullet) => bullet.length > 205) ? 13.1 : 14.1;

  bullets.forEach((bullet, index) => {
    const y = top + index * (rowHeight + gap);
    slide.addShape('rect', {
      x: 0.7, y, w: 7.35, h: rowHeight,
      line: { color: index === 0 ? COLORS.line : 'E7EDF1', width: 0.7 },
      fill: { color: COLORS.white },
    });
    slide.addShape('rect', {
      x: 0.7, y, w: 0.055, h: rowHeight,
      line: { color: deck.accent, transparency: 100 },
      fill: { color: deck.accent },
    });
    addText(slide, String(index + 1).padStart(2, '0'), {
      x: 0.86, y: y + 0.1, w: 0.38, h: 0.24,
      fontSize: 9.5, bold: true, color: deck.accent, valign: 'top',
    });
    addText(slide, bullet, {
      x: 1.31, y: y + 0.09, w: 6.55, h: rowHeight - 0.17,
      fontSize, color: COLORS.body, valign: 'mid', fit: 'shrink',
      breakLine: false, paraSpaceAfterPt: 0,
    });
  });
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

function addSpeakerNotes(slide, deck, item, visualLabel, imagePrompt) {
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
    'TEACHING VISUAL',
    visualLabel === 'Image bay'
      ? 'This slide has a reserved image bay. Add the image described below.'
      : `The slide uses an editable ${visualLabel.toLowerCase()} diagram. Keep it unless the prompted image communicates the idea more clearly.`,
    '',
    'OPTIONAL IMAGE PROMPT',
    imagePrompt,
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
    const visualLabel = addTeachingVisual(slide, deck, item);
    addFooter(slide, deck, item, slides.length);
    addSpeakerNotes(slide, deck, item, visualLabel, prompt);
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