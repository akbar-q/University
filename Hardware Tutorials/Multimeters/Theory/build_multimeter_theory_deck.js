const path = require('node:path');
const PptxGenJS = require(path.resolve(__dirname, '../../../5009/02 September 2026/PPTX Builder/node_modules/pptxgenjs'));

const OUT = path.join(__dirname, 'UNI-T_Multimeter_Theory_Deep_Dive.pptx');
const pptx = new PptxGenJS();
const W = 13.333;
const HEAD = 'Aptos Display';
const BODY = 'Aptos';
const MONO = 'Consolas';
const C = {
  yellow: 'FFE500', yellowPale: 'FFF9CC', yellowInk: '655600',
  teal: '008F87', tealBright: '00A79D', tealPale: 'DDF4F1', tealDark: '07534F',
  paper: 'F7FAF9', white: 'FFFFFF', ink: '16332F', body: '344A46', muted: '647873', line: 'D2E0DC',
  red: 'B84F40', redPale: 'F8E8E3', blue: '527E98', bluePale: 'E8F0F4',
};

pptx.layout = 'LAYOUT_WIDE';
pptx.author = 'Hardware Tutorials';
pptx.subject = 'Digital multimeter theory: UT89XD and UT171A';
pptx.title = 'Digital Multimeters - Theory Deep Dive';
pptx.company = 'Mechatronics Hardware Tutorials';
pptx.lang = 'en-GB';
pptx.theme = { headFontFace: HEAD, bodyFontFace: BODY, lang: 'en-GB' };

function txt(slide, value, x, y, w, h, options = {}) {
  slide.addText(value, { x, y, w, h, margin: 0, fontFace: BODY, fontSize: 13, color: C.body, valign: 'mid', fit: 'shrink', breakLine: false, ...options });
}
function box(slide, x, y, w, h, fill, border = C.line, radius = false) {
  slide.addShape(radius ? 'roundRect' : 'rect', { x, y, w, h, rectRadius: 0.06, line: { color: border, width: 0.8 }, fill: { color: fill } });
}
function ln(slide, x1, y1, x2, y2, color = C.line, width = 1.2, options = {}) {
  const dx = x2 - x1; const dy = y2 - y1;
  slide.addShape('line', { x: Math.min(x1, x2), y: Math.min(y1, y2), w: Math.abs(dx), h: Math.abs(dy), flipH: dx < 0, flipV: dy < 0, line: { color, width, ...options } });
}
function dot(slide, x, y, r, color) {
  slide.addShape('ellipse', { x: x-r, y: y-r, w: 2*r, h: 2*r, line: { color, width: 0.6 }, fill: { color } });
}
function notes(slide, n, title, narration) {
  slide.addNotes(`THEORY EPISODE | Slide ${n} of 28 | ${title}\n\nPRESENTER NOTES\n${narration}`);
}
function header(slide, n, title, section) {
  slide.background = { color: C.paper };
  box(slide, 0, 0, W, 0.1, C.teal, C.teal);
  box(slide, 0, 0.1, W, 0.045, C.yellow, C.yellow);
  txt(slide, 'MULTIMETER THEORY   /   UT89XD + UT171A', 0.67, 0.24, 4.5, 0.2, { fontSize: 8.3, bold: true, charSpacing: 0.7, color: C.tealDark });
  txt(slide, section.toUpperCase(), 5.23, 0.24, 4.3, 0.2, { fontSize: 8.1, bold: true, charSpacing: 0.55, color: C.teal });
  box(slide, 11.7, 0.18, 0.94, 0.34, C.white, C.yellow);
  txt(slide, String(n).padStart(2, '0'), 11.72, 0.23, 0.9, 0.2, { fontSize: 8.7, bold: true, color: C.tealDark, align: 'center' });
  txt(slide, title, 0.67, 0.67, 12.0, 0.68, { fontFace: HEAD, fontSize: title.length > 49 ? 25 : title.length > 40 ? 27 : 30, bold: true, color: C.ink });
  ln(slide, 0.67, 1.52, 12.66, 1.52, C.line, 0.9);
  ln(slide, 0.67, 6.96, 12.66, 6.96, C.line, 0.7);
  txt(slide, 'THEORY EPISODE   /   METER PRINCIPLES + MODEL LIMITS', 0.67, 7.07, 8.6, 0.18, { fontSize: 7.8, bold: true, charSpacing: 0.4, color: C.muted });
  txt(slide, `${String(n).padStart(2,'0')} / 28`, 11.48, 7.05, 1.16, 0.2, { fontSize: 8.7, bold: true, color: C.ink, align: 'right' });
}
function leftBullets(slide, items) {
  const top = 1.88; const bottom = 6.72; const gap = 0.11;
  const h = (bottom-top-gap*(items.length-1))/items.length;
  const longest = Math.max(...items.map(x=>x.length));
  const fs = items.length>5 ? (longest>80?11.2:12) : (longest>85?12.4:longest>65?13.5:14.5);
  items.forEach((v,i)=>{
    const y=top+i*(h+gap);
    box(slide,0.72,y+0.03,0.055,h-0.06,i%2?C.tealBright:C.teal,i%2?C.tealBright:C.teal);
    txt(slide,String(i+1).padStart(2,'0'),0.9,y+0.1,0.34,0.18,{fontSize:8.5,bold:true,color:C.teal,valign:'top'});
    txt(slide,v,1.35,y+0.02,4.76,h-0.04,{fontSize:fs,color:C.body});
  });
}
function panel(slide, title, hint='') {
  box(slide,6.42,1.82,6.22,4.96,C.white,C.line);
  box(slide,6.42,1.82,0.065,4.96,C.teal,C.teal);
  txt(slide,title.toUpperCase(),6.73,2.02,5.55,0.22,{fontSize:8.7,bold:true,charSpacing:0.65,color:C.teal});
  ln(slide,6.73,2.37,12.33,2.37,C.line,0.8);
  if(hint) txt(slide,hint.toUpperCase(),6.75,6.51,5.55,0.15,{fontSize:7,color:C.muted,align:'right',charSpacing:0.35});
}
function node(slide,label,detail,x,y,w,h,color=C.teal,fill=C.tealPale) {
  box(slide,x,y,w,h,fill,C.line,true);
  box(slide,x,y,w,0.055,color,color);
  txt(slide,label,x+0.08,y+0.14,w-0.16,0.2,{fontSize:8.5,bold:true,color,align:'center'});
  if(detail) txt(slide,detail,x+0.09,y+0.43,w-0.18,h-0.5,{fontSize:8.5,color:C.ink,align:'center'});
}
function arrow(slide,x1,y1,x2,y2,color=C.teal) { ln(slide,x1,y1,x2,y2,color,1.5,{endArrowType:'triangle'}); }
function axes(slide,x,y,w,h,xName,yName) {
  arrow(slide,x,y+h,x+w,y+h,C.tealDark); arrow(slide,x,y+h,x,y,C.tealDark);
  txt(slide,xName,x+w-0.8,y+h+0.09,0.8,0.17,{fontSize:7.6,bold:true,color:C.muted,align:'right'});
  txt(slide,yName,x-0.02,y-0.2,1.1,0.15,{fontSize:7.5,bold:true,color:C.muted});
}
function sine(slide,x,y,w,h,amp=0.36,phase=0,color=C.tealBright,cycles=1,samples=60) {
  let prev=null;
  for(let i=0;i<=samples;i++){
    const f=i/samples; const p=[x+f*w,y+h/2-Math.sin(2*Math.PI*cycles*f+phase)*h*amp];
    if(prev) ln(slide,prev[0],prev[1],p[0],p[1],color,1.8);
    prev=p;
  }
}
function bar(slide,x,y,w,h,value,max,color=C.teal) {
  box(slide,x,y,w,h,C.paper,C.line);
  const fillW=Math.max(0,Math.min(w-0.04,(w-0.04)*value/max));
  box(slide,x+0.02,y+0.02,fillW,h-0.04,color,color);
}
function table(slide,headers,rows,x,y,widths,rowH=0.43) {
  let xx=x;
  headers.forEach((v,i)=>{const f=i===headers.length-1?C.yellow:C.teal;box(slide,xx,y,widths[i],0.42,f,f);txt(slide,v,xx+0.04,y+0.12,widths[i]-0.08,0.18,{fontSize:7.4,bold:true,color:i===headers.length-1?C.ink:C.white,align:'center'});xx+=widths[i];});
  rows.forEach((row,r)=>{xx=x;row.forEach((v,c)=>{const yy=y+0.42+r*rowH;box(slide,xx,yy,widths[c],rowH,r%2?C.paper:C.white,C.line);txt(slide,String(v),xx+0.04,yy+0.08,widths[c]-0.08,rowH-0.16,{fontSize:8,bold:c===row.length-1,color:c===row.length-1?C.tealDark:C.body,align:'center'});xx+=widths[c];});});
}
function slide(n,title,section,bullets,narration,visual) {
  const s=pptx.addSlide(); header(s,n,title,section); leftBullets(s,bullets); if(visual) visual(s); notes(s,n,title,narration); return s;
}
function cover() {
  const s=pptx.addSlide(); s.background={color:C.tealDark};
  box(s,0,0,W,0.12,C.yellow,C.yellow); box(s,0,0.12,W,0.06,C.tealBright,C.tealBright);
  txt(s,'HARDWARE TUTORIALS   /   THEORY EPISODE',0.8,0.55,5.3,0.24,{fontSize:9,bold:true,charSpacing:0.85,color:'B9E6E0'});
  txt(s,'Digital Multimeters',0.8,1.18,6.3,0.72,{fontFace:HEAD,fontSize:38,bold:true,color:C.white});
  txt(s,'How measurements work - and when readings mislead',0.83,2.08,5.75,0.66,{fontFace:HEAD,fontSize:19,bold:true,color:C.yellow});
  txt(s,'UT89XD + UT171A\nA deep theory companion to the hands-on meter tutorial',0.83,3.04,5.55,0.8,{fontSize:15,color:'E0F1EE',valign:'top'});
  node(s,'VOLTAGE','potential difference',7.05,2.13,1.45,1.05,C.yellow,C.tealDark);
  node(s,'CURRENT','charge flow',8.9,2.13,1.45,1.05,C.tealBright,'0C625D');
  node(s,'RESISTANCE','opposition',10.75,2.13,1.45,1.05,C.yellow,C.tealDark);
  txt(s,'Understand the model before trusting the number.',7.08,4.03,5.0,0.32,{fontFace:HEAD,fontSize:17,bold:true,color:C.white,align:'center'});
  txt(s,'THEORY PRESENTATION   /   DEEP DIVE',0.83,6.55,6.3,0.24,{fontSize:9,bold:true,charSpacing:0.7,color:'B9E6E0'});
  txt(s,'01 / 28',11.52,7.05,1.1,0.2,{fontSize:9,bold:true,color:C.white,align:'right'});
  notes(s,1,'Digital controls do not make measurement self-explanatory. This theory episode explains what the meter is doing internally, what its numbers mean, and why model limits matter. The follow-up practical video demonstrates each task on the UT89XD and UT171A.');
}

cover();
slide(2,'Two episodes, one measurement skill','ORIENTATION',[
  'Theory episode: understand measurement models, ranges, accuracy and limits.',
  'Practical episode: operate the UT171A and UT89XD on safe test examples.',
  'Theory does not replace the exact meter manual or laboratory SOP.',
  'Current-measurement theory is saved for the final part of this deck.',
],'Set expectations: this deck is the deep theory episode. The practical recording is separate and will show the actual front panels and safe demonstrations. The supplied photo shows the UT89XD on the left and UT171A on the right. Stress that model suffixes matter. We will discuss current concepts only at the end of the theory deck, and the hands-on current test is also last in the practical video.',s=>{
  panel(s,'Theory -> practical -> evidence');
  const a=[['THEORY','what the instrument measures'],['PRACTICAL','how to operate safely'],['RESULT','reading + uncertainty']];
  a.forEach((v,i)=>{const x=6.98+i*1.78;node(s,v[0],v[1],x,3.15,1.48,1.24,i===1?C.yellowInk:C.teal,i===1?C.yellowPale:C.tealPale);if(i<2)arrow(s,x+1.5,3.77,x+1.75,3.77);});
  txt(s,'A display value is evidence only when the setup and limits are understood.',7.12,5.25,5.05,0.42,{fontSize:10,bold:true,color:C.tealDark,align:'center'});
});

slide(3,'A multimeter is a measurement system','FOUNDATIONS',[
  'Input terminals and protection receive the probe signal.',
  'A function-specific front end scales or conditions the signal.',
  'An internal converter and processor create the displayed value.',
  'The display is the end of a chain, not a direct view of the quantity.',
],'Describe a simplified digital multimeter block diagram. The terminals, fuse, protection, divider/shunt, function circuitry, converter, processor, and display all contribute to the result. A failure or wrong mode anywhere in the chain can produce a misleading reading. The converter samples or integrates the conditioned signal; details differ by meter design. Do not imply that a digital display automatically makes the result accurate.',s=>{
  panel(s,'Inside the measurement chain');
  const a=[['INPUT','terminals'],['PROTECT','fuse / limits'],['CONDITION','divider / shunt'],['CONVERT','internal ADC'],['DISPLAY','digits + units']];
  a.forEach((v,i)=>{const x=6.82+i*1.08;node(s,v[0],v[1],x,3.25,0.92,1.08,i===2?C.yellowInk:C.teal,i===2?C.yellowPale:C.tealPale);if(i<4)arrow(s,x+0.93,3.78,x+1.06,3.78);});
  txt(s,'Wrong socket • wrong mode • wrong range • wrong interpretation',7.0,5.18,5.36,0.31,{fontSize:9.4,bold:true,color:C.red,align:'center'});
});

slide(4,'Voltage, current, resistance: the model','FOUNDATIONS',[
  'Voltage is potential difference between two nodes, measured in volts.',
  'Current is charge flow through a branch, measured in amperes.',
  'Resistance relates voltage and current for a component at stated conditions.',
  'Ohm’s law: V = I × R; rearrange only when the model applies.',
],'Define the quantities without conflating them. Voltage is between nodes, current is through a branch, and resistance is a component property under conditions such as temperature and operating point. Use a simple resistor to derive V=IR. Real components may be nonlinear, and sources have internal resistance. We will avoid equating a DMM reading with an ideal circuit value without considering loading and uncertainty.',s=>{
  panel(s,'Resistor model');
  const x=7.15,y=3.0;
  txt(s,'I',x,3.15,0.3,0.2,{fontSize:12,bold:true,color:C.teal,align:'center'});arrow(s,x+0.32,3.25,x+1.05,3.25);
  box(s,x+1.08,2.88,1.05,0.72,C.yellowPale,C.yellowInk);txt(s,'R',x+1.33,3.08,0.55,0.24,{fontSize:16,bold:true,color:C.yellowInk,align:'center'});
  arrow(s,x+2.17,3.25,x+2.9,3.25);txt(s,'I',x+2.94,3.15,0.3,0.2,{fontSize:12,bold:true,color:C.teal,align:'center'});
  txt(s,'V = I × R',7.32,4.35,4.76,0.58,{fontFace:HEAD,fontSize:26,bold:true,color:C.tealDark,align:'center'});
  txt(s,'A model: check linearity, temperature, tolerance and operating range.',7.07,5.38,5.17,0.3,{fontSize:9.4,color:C.muted,align:'center'});
});

slide(5,'Voltage measurement: parallel and high impedance','VOLTAGE THEORY',[
  'A voltmeter connects across two points: electrically, in parallel.',
  'High input resistance aims to minimise current drawn from the circuit.',
  'Finite input resistance still loads a high-resistance source.',
  'A lower-impedance LoZ mode intentionally loads more strongly.',
],'Use the diagram to show a voltmeter across a load. An ideal voltmeter has infinite input resistance; a real DMM has a finite value that depends on function and range. The measured node may shift if source impedance is high. LoZ can suppress some ghost voltages caused by capacitive coupling, but it can collapse a legitimate high-impedance signal. The UT171A has LoZ ACV; verify its exact conditions in the model manual.',s=>{
  panel(s,'Voltmeter across the load');
  const x=7.15,y=2.78;
  node(s,'SOURCE','Vs + Rs',x,y+0.65,1.2,0.88,C.teal,C.tealPale);
  node(s,'LOAD','Rload',x+3.45,y+0.65,1.2,0.88,C.yellowInk,C.yellowPale);
  arrow(s,x+1.22,y+1.08,x+3.4,y+1.08);
  node(s,'DMM V','high Zin',x+1.95,y+2.14,1.3,0.8,C.tealDark,C.tealPale);
  ln(s,x+2.6,y+2.12,x+2.6,y+1.08,C.teal,1.2);ln(s,x+2.6,y+2.54,x+4.05,y+2.54,C.teal,1.2);ln(s,x+4.05,y+2.54,x+4.05,y+1.55,C.teal,1.2);
  txt(s,'Vread can differ from ideal Vsource when Rs is significant.',7.02,5.87,5.26,0.22,{fontSize:8.6,color:C.muted,align:'center'});
});

slide(6,'Parallel means across the same two nodes','VOLTAGE THEORY',[
  'Both probes must touch the two nodes whose voltage difference is wanted.',
  'Reversing the leads reverses the sign on DC readings.',
  'A negative sign can indicate reversed polarity, not a failed meter.',
  'Voltage mode is the normal mode for battery and supply checks.',
],'Draw a battery and load, then the voltmeter across the battery/load nodes. Explain that this is a connection topology, not simply “touching two places.” If the two probe tips are on the same node, the ideal reading is zero. If red is at lower potential than black, a DC meter can show a negative sign. This parallel connection principle does not apply to current mode.',s=>{
  panel(s,'Same two nodes');
  const x=7.5,y=2.8;
  ln(s,x,y+0.35,x+3.8,y+0.35,C.tealDark,1.5);ln(s,x,y+2.65,x+3.8,y+2.65,C.tealDark,1.5);
  box(s,x+0.28,y+1.1,0.62,0.8,C.yellowPale,C.yellowInk);txt(s,'CELL',x+0.31,y+1.38,0.56,0.2,{fontSize:8,bold:true,color:C.yellowInk,align:'center'});
  box(s,x+3.1,y+1.1,0.62,0.8,C.tealPale,C.teal);txt(s,'LOAD',x+3.13,y+1.38,0.56,0.2,{fontSize:7.7,bold:true,color:C.tealDark,align:'center'});
  ln(s,x+0.59,y+0.35,x+0.59,y+1.08,C.tealDark,1.2);ln(s,x+0.59,y+1.91,x+0.59,y+2.65,C.tealDark,1.2);
  node(s,'V','DMM',x+1.55,y+0.89,0.88,0.8,C.teal,C.white);
  ln(s,x+0.59,y+0.35,x+1.99,y+0.35,C.teal,1.1);ln(s,x+1.99,y+0.35,x+1.99,y+0.87,C.teal,1.1);ln(s,x+1.99,y+1.71,x+1.99,y+2.65,C.teal,1.1);
  ln(s,x+1.99,y+2.65,x+3.42,y+2.65,C.teal,1.1);ln(s,x+3.42,y+2.65,x+3.42,y+1.92,C.teal,1.1);
  txt(s,'Red and black probe tips define the measured node pair.',7.05,5.95,5.2,0.2,{fontSize:8.7,bold:true,color:C.tealDark,align:'center'});
});

slide(7,'Resistance: the meter supplies its own test signal','RESISTANCE',[
  'Ohms mode applies a small internal stimulus and observes the response.',
  'External voltage invalidates the measurement and can damage the meter.',
  'Parallel circuit paths change the apparent resistance.',
  'Lead/contact resistance matters most on low-ohm measurements.',
],'Explain the basic ohmmeter model: a known or controlled test current/voltage is applied, then the meter infers resistance. Never measure resistance on an energised circuit. In-circuit a resistor may be in parallel with other paths, especially semiconductor paths, producing a lower or nonlinear reading. The probe leads themselves have resistance; touching probes together provides a baseline, but does not replace a proper relative/zero function for precision low-ohm work.',s=>{
  panel(s,'Ohmmeter model');
  node(s,'INTERNAL TEST','small source',7.0,3.15,1.42,0.95,C.teal,C.tealPale);
  arrow(s,8.48,3.62,9.12,3.62);
  box(s,9.15,3.22,1.05,0.8,C.yellowPale,C.yellowInk);txt(s,'Rx',9.38,3.46,0.58,0.22,{fontSize:13,bold:true,color:C.yellowInk,align:'center'});
  arrow(s,10.22,3.62,10.86,3.62);
  node(s,'MEASURE','infer R',10.91,3.15,1.22,0.95,C.tealDark,C.tealPale);
  box(s,7.15,4.75,4.85,0.75,C.redPale,C.redPale);txt(s,'External voltage present? Stop - isolate and verify first.',7.35,4.99,4.45,0.22,{fontSize:9.6,bold:true,color:C.red,align:'center'});
});

slide(8,'Continuity: a threshold test, not a current rating','RESISTANCE',[
  'The beeper sounds when measured resistance falls below a model-specific threshold.',
  'Lead resistance, contacts, switches and parallel paths affect results.',
  'A beep does not prove a wire is safe at its intended operating current.',
  'A no-beep result can come from an open circuit or an unsuitable test condition.',
],'Explain the continuity buzzer as a convenience threshold around low resistance. The threshold is defined by the particular model and may vary. A wire can beep yet have a poor joint that heats under load. A semiconductor can beep in one direction and not another. Always isolate power first. For high-current wiring, use suitable inspection and loaded tests, not only the beeper.',s=>{
  panel(s,'Continuity gives a binary-style indication');
  node(s,'PROBES','touch together',7.08,3.15,1.4,1.05,C.teal,C.tealPale);
  arrow(s,8.55,3.68,9.13,3.68);
  node(s,'DMM','R below threshold?',9.17,3.15,1.5,1.05,C.yellowInk,C.yellowPale);
  arrow(s,10.73,3.68,11.05,3.68);
  node(s,'BEEP','yes / no',11.08,3.15,1.0,1.05,C.tealDark,C.tealPale);
  txt(s,'The beeper answers “below threshold?” - not “safe under load?”',7.02,5.15,5.35,0.3,{fontSize:9.2,bold:true,color:C.red,align:'center'});
});

slide(9,'Diode test and LED forward voltage','SEMICONDUCTORS',[
  'Diode mode drives a small test current and reads junction voltage.',
  'Forward direction conducts; reverse direction typically reads OL.',
  'LED forward voltage varies with semiconductor material, color and current.',
  'Meter diode-test current is not the LED’s normal operating current.',
],'Use a junction symbol and polarity. A diode-mode reading is a low-current forward voltage under the meter’s test conditions, not a datasheet characterization at rated current. Red LEDs often have lower Vf than blue/white; green devices vary. A DMM may not light a high-Vf LED even while it shows a sensible junction voltage. UT89XD has a dedicated LED test; use its manual. Never power an LED from a supply without a current-limiting resistor.',s=>{
  panel(s,'Illustrative LED forward-voltage ranges');
  const a=[['RED',1.8,3.5,C.red],['GREEN',2.2,3.5,C.teal],['BLUE',3.0,3.5,C.blue],['WHITE',3.0,3.5,C.yellowInk]];
  a.forEach((v,i)=>{const y=2.85+i*0.68;txt(s,v[0],6.98,y,0.82,0.18,{fontSize:8,bold:true,color:v[3]});bar(s,7.82,y+0.01,3.35,0.22,v[1],3.5,v[3]);txt(s,`${v[1].toFixed(1)} V+ (illustrative)`,11.2,y,1.0,0.2,{fontSize:7.3,color:C.muted,align:'right'});});
  txt(s,'Ranges overlap and depend on LED type and test current; never grade by color alone.',7.0,5.82,5.28,0.2,{fontSize:8.3,color:C.muted,align:'center'});
});

slide(10,'Capacitance: charge, time and settling','CAPACITANCE',[
  'Capacitance describes stored charge per voltage: C = Q / V.',
  'A DMM uses a charging/timing method; large values take longer to settle.',
  'Residual charge and leakage can distort the measurement.',
  'Isolate and discharge capacitors safely before measurement.',
],'Introduce C=Q/V and the RC time constant τ=RC as useful context. Many DMM capacitance modes charge the part and infer capacitance from response time. Large capacitors can take seconds or longer. Leakage, dielectric absorption, residual voltage and in-circuit paths affect results. Do not short a large capacitor with a screwdriver; use an appropriate discharge resistor, then verify voltage safely. Respect polarity on electrolytics.',s=>{
  panel(s,'Charging curve: time is part of the measurement');
  axes(s,7.15,2.85,4.75,2.35,'TIME','VOLTAGE');
  let prev=null;for(let i=0;i<=55;i++){const f=i/55;const p=[7.18+f*4.68,5.12-(1-Math.exp(-4.5*f))*1.95];if(prev)ln(s,prev[0],prev[1],p[0],p[1],C.teal,2);prev=p;}
  txt(s,'One time constant: capacitor reaches about 63% of final voltage.',7.12,5.75,5.0,0.22,{fontSize:8.4,color:C.tealDark,align:'center'});
});

slide(11,'AC and DC: different signal components','AC THEORY',[
  'DC describes a steady component or polarity.',
  'AC changes with time and can reverse direction.',
  'A waveform can contain both AC variation and DC offset.',
  'Meter coupling/function determines which part is reported.',
],'Draw a sine wave centered at zero and a sine wave riding on a DC offset. AC voltage functions often block or reject DC according to internal design; check exact meter behavior. The reading is an RMS-like AC value within range and bandwidth. Do not assume AC mode always includes the DC component. This distinction matters for ripple measurements and generator offset.',s=>{
  panel(s,'Waveform with DC offset');
  axes(s,7.1,2.75,4.9,2.35,'TIME','V');
  sine(s,7.14,2.8,4.8,2.25,0.29,0,C.teal);
  sine(s,7.14,2.8,4.8,2.25,0.29,-0.27,C.yellowInk);
  ln(s,7.13,3.91,12.0,3.91,C.line,0.9,{dash:'dash'});
  txt(s,'Teal: zero-centered AC    Yellow: AC + DC offset',7.08,5.65,5.1,0.22,{fontSize:8.8,bold:true,color:C.tealDark,align:'center'});
});

slide(12,'RMS: an equivalent heating value','AC THEORY',[
  'RMS is the square root of the mean of the squared waveform.',
  'For a sine wave only: Vrms = Vpeak / √2.',
  'For a symmetric sine: Vpp = 2 × Vpeak.',
  'Do not use the sine conversion for every waveform.',
],'Give an intuitive explanation: RMS is the DC voltage that would produce the same heating in a resistor. For an ideal sine with no DC offset, Vrms = Vpeak/sqrt(2), and Vpp=2Vpeak. For square waves and pulses the relationship changes. A DMM may display RMS from an internal measurement process, but only within stated bandwidth and crest limits.',s=>{
  panel(s,'Sine-wave relationships');
  txt(s,'Vpeak',7.15,2.82,1.0,0.25,{fontSize:9,bold:true,color:C.teal});
  txt(s,'Vrms = Vpeak / √2',7.15,3.23,4.6,0.48,{fontFace:HEAD,fontSize:23,bold:true,color:C.tealDark});
  txt(s,'Vpp = 2 × Vpeak',7.15,4.02,4.5,0.38,{fontFace:HEAD,fontSize:20,bold:true,color:C.yellowInk});
  box(s,7.1,5.0,5.08,0.76,C.redPale,C.redPale);txt(s,'These equations assume an ideal sine wave with no DC offset.',7.3,5.25,4.68,0.22,{fontSize:9.2,bold:true,color:C.red,align:'center'});
});

slide(13,'True RMS is a method, not a promise','AC THEORY',[
  'True RMS instruments aim to compute RMS for more than pure sine waves.',
  'Accuracy still depends on bandwidth, range, crest factor and waveform.',
  'The meter’s specified AC response is part of the measurement definition.',
  'Do not transfer limits from UT89XD to UT171A or across suffixes.',
],'Explain the difference between average-responding, sine-calibrated meters and True RMS instruments. True RMS reduces one class of waveform error but it is not unlimited. The analog front end, sampling/integration method, AC coupling, frequency response, range and crest-factor limit still matter. The UT89 series specifies a 45 Hz to 1 kHz sine response and different non-sine conditions; do not assume those apply to the UT171A.',s=>{
  panel(s,'True RMS measurement chain');
  const a=[['SIGNAL','waveform'],['LIMIT','bandwidth + crest'],['RMS','compute mean-square'],['DISPLAY','conditional value']];
  a.forEach((v,i)=>{const x=6.94+i*1.33;node(s,v[0],v[1],x,3.18,1.12,1.1,i===1?C.yellowInk:C.teal,i===1?C.yellowPale:C.tealPale);if(i<3)arrow(s,x+1.13,3.73,x+1.31,3.73);});
  txt(s,'“True RMS” does not remove input limits.',7.18,5.34,4.9,0.28,{fontSize:12,bold:true,color:C.red,align:'center'});
});

slide(14,'Crest factor: peaks can fool an RMS meter','AC THEORY',[
  'Crest factor = absolute peak / RMS value.',
  'Sine ≈ 1.414; symmetrical square wave = 1.',
  'Narrow pulses have higher crest factor and demanding peak amplitude.',
  'Over-limit peaks can cause RMS error even when average looks modest.',
],'A pulse train can have low RMS relative to its peak. If peaks exceed the DMM input or crest-factor limits, the displayed RMS can be wrong or the front end can overload. UT89X documentation gives a limit up to 3 at 3000 counts, tightening to 1.5 at 6000 counts/full range; state the exact manual and conditions. The UT171A numerical crest limit was not verified here, so check its manual rather than borrowing these figures.',s=>{
  panel(s,'Equal peak, different RMS / crest behavior');
  const names=['SINE','SQUARE','NARROW PULSE'];const vals=['1.414','1.0','HIGHER'];
  names.forEach((v,i)=>{const x=6.95+i*1.8;box(s,x,2.9,1.55,1.44,i===2?C.yellowPale:C.tealPale,C.line,true);txt(s,v,x+0.08,3.12,1.39,0.22,{fontSize:8,bold:true,color:i===2?C.yellowInk:C.teal,align:'center'});txt(s,vals[i],x+0.08,3.7,1.39,0.28,{fontFace:HEAD,fontSize:16,bold:true,color:C.ink,align:'center'});});
  txt(s,'Crest factor examples are waveform ratios - not meter guarantees.',7.02,5.25,5.28,0.24,{fontSize:8.8,color:C.muted,align:'center'});
});

slide(15,'AC bandwidth and frequency response','AC THEORY',[
  'An AC accuracy specification applies only over stated frequencies/ranges.',
  'Low-frequency roll-off can under-read slow waveforms.',
  'High-frequency roll-off can attenuate fast edges and harmonics.',
  'VFC filtering deliberately suppresses higher-frequency content.',
],'A meter\'s AC conversion path has a bandwidth. For UT89X/XD, the manual states approximately 45 Hz–1 kHz for sine wave and a different 45–400 Hz non-sine response; verify exact function/range. Do not claim a UT171A numerical bandwidth without its manual. The UT171A VFC mode filters high frequency for some drive signals; it does not yield a complete waveform or harmonic analysis.',s=>{
  panel(s,'A measurement band is not infinite');
  axes(s,7.15,2.85,4.75,2.3,'FREQUENCY','RESPONSE');
  const pts=[[7.17,3.15],[7.7,3.17],[8.2,3.22],[8.8,3.28],[9.4,3.43],[10.1,3.8],[10.8,4.35],[11.3,4.86],[11.9,5.0]];
  for(let i=0;i<pts.length-1;i++)ln(s,pts[i][0],pts[i][1],pts[i+1][0],pts[i+1][1],C.teal,2);
  ln(s,7.2,3.48,11.9,3.48,C.yellowInk,1,{dash:'dash'});
  txt(s,'Illustrative response shape - not a specification curve.',7.05,5.8,5.2,0.2,{fontSize:8.2,color:C.muted,align:'center'});
});

slide(16,'Frequency and duty cycle are separate quantities','AC THEORY',[
  'Frequency is cycles per second: f = 1/T.',
  'Duty cycle is the high-time fraction of a periodic pulse.',
  'A DMM frequency input needs sufficient amplitude and clean transitions.',
  'Edge noise, range limits and waveform shape can destabilise readings.',
],'Define T as the period, then f=1/T. Duty ratio is high duration divided by period times 100%. A multimeter frequency function counts or detects transitions; it can fail with very low amplitude, noise, slow edges or a signal outside its specified range. UT89XD supports frequency/duty; UT171A has Hz/% selection. Confirm the selected icon and model limits.',s=>{
  panel(s,'One period and the high interval');
  const x=7.05,y=4.8,w=4.95,high=3.25;
  ln(s,x,y,x+w,y,C.tealDark,1.1);
  const pts=[[x,y],[x+0.45,y],[x+0.45,high],[x+1.7,high],[x+1.7,y],[x+2.2,y],[x+2.2,high],[x+3.45,high],[x+3.45,y],[x+w,y]];
  for(let i=0;i<pts.length-1;i++)ln(s,pts[i][0],pts[i][1],pts[i+1][0],pts[i+1][1],C.teal,2);
  txt(s,'T',x+0.45,5.08,3.0,0.18,{fontSize:8,bold:true,color:C.tealDark,align:'center'});
  txt(s,'tHIGH',x+0.45,3.03,1.25,0.18,{fontSize:8,bold:true,color:C.yellowInk,align:'center'});
  txt(s,'f = 1/T         duty = tHIGH / T × 100%',7.15,5.65,4.85,0.27,{fontSize:11,bold:true,color:C.tealDark,align:'center'});
});

slide(17,'Auto-range and manual range','RANGE THEORY',[
  'Auto-range searches for a range that can display the present signal.',
  'Manual range fixes the scale so repeated readings remain comparable.',
  'Near a boundary, auto-range may step up/down or take time to settle.',
  'Manual range can overload if the expected value is underestimated.',
],'Compare the modes conceptually. Auto-ranging is convenient for unknown but safe-to-measure values. Manual range is useful for stable repeated readings and observing small changes. Begin with a range that can safely accommodate the expected magnitude. If overload occurs, move to a higher range; never rely on auto-range to make an unsafe connection safe. The UT171A is shown auto-ranging; use the UT89XD’s range selection as intended for the tutorial and verify the actual display state.',s=>{
  panel(s,'Range choice trades convenience and stability');
  node(s,'AUTO','meter selects range',7.05,3.0,2.05,1.2,C.teal,C.tealPale);
  node(s,'MANUAL','operator selects range',9.72,3.0,2.05,1.2,C.yellowInk,C.yellowPale);
  txt(s,'Quick to begin; can hunt at boundaries.',7.05,4.46,2.05,0.4,{fontSize:9,color:C.body,align:'center'});
  txt(s,'Stable scale; requires an expected magnitude.',9.72,4.46,2.05,0.4,{fontSize:9,color:C.body,align:'center'});
  txt(s,'Neither mode removes CAT, voltage, current, fuse, or function limits.',7.0,5.55,5.3,0.24,{fontSize:8.8,bold:true,color:C.red,align:'center'});
});

slide(18,'Counts, resolution, and range','RANGE THEORY',[
  'Display counts describe available display increments, not accuracy alone.',
  'The same digit resolution can mean different volts on different ranges.',
  'Overload is a range warning, not a reason to ignore the input limits.',
  'Reading stability and update rate matter when comparing small changes.',
],'Explain counts using a simple 6000-count versus 40,000-count distinction. More counts can provide finer display resolution on a suitable range, but accuracy also depends on calibration, temperature, function, range and signal conditions. UT89XD is a 6000-count family. UT171A is 40,000 counts for the A model; do not confuse it with later B/C specifications. Counts do not tell us the CAT rating or maximum safe input.',s=>{
  panel(s,'More display increments do not guarantee truth');
  txt(s,'UT89XD',7.1,2.9,1.4,0.23,{fontSize:9,bold:true,color:C.teal});bar(s,7.1,3.25,4.8,0.35,6000,40000,C.teal);
  txt(s,'6000-count family',7.1,3.7,4.8,0.2,{fontSize:8.5,color:C.body});
  txt(s,'UT171A',7.1,4.25,1.4,0.23,{fontSize:9,bold:true,color:C.yellowInk});bar(s,7.1,4.6,4.8,0.35,40000,40000,C.yellow);
  txt(s,'40,000 counts (A model)',7.1,5.05,4.8,0.2,{fontSize:8.5,color:C.body});
  txt(s,'Display granularity ≠ total measurement accuracy',7.08,5.78,5.1,0.22,{fontSize:9,bold:true,color:C.tealDark,align:'center'});
});

slide(19,'Accuracy, precision, and uncertainty','MEASUREMENT QUALITY',[
  'Accuracy describes closeness to a reference value under stated conditions.',
  'Resolution is the smallest displayed increment for a selected range.',
  'Repeatability describes how similar repeated readings are.',
  'A useful report includes function, range, conditions, and uncertainty.',
],'Separate three ideas commonly conflated. Accuracy is closeness to truth/reference, resolution is display granularity, repeatability is spread under repeated conditions. A meter can repeat the same wrong answer. Specifications often use percent of reading plus counts/digits, and may vary by function and range. Encourage students to report a measured value with units, mode, range, test conditions, and reasonable significant figures.',s=>{
  panel(s,'Three different qualities');
  const a=[['ACCURACY','close to reference',C.teal],['RESOLUTION','smallest step',C.yellowInk],['REPEATABILITY','spread of repeats',C.tealDark]];
  a.forEach((v,i)=>{const y=2.82+i*0.92;box(s,7.0,y,5.15,0.68,i===1?C.yellowPale:C.tealPale,C.line,true);txt(s,v[0],7.18,y+0.14,1.6,0.18,{fontSize:8.2,bold:true,color:v[2]});txt(s,v[1],9.0,y+0.15,2.8,0.2,{fontSize:10,bold:true,color:C.ink});});
});

slide(20,'Input impedance and circuit loading','MEASUREMENT QUALITY',[
  'Voltage measurement is not perfectly non-invasive.',
  'A finite input impedance can form a divider with source resistance.',
  'High-resistance sensors and weak sources are especially sensitive.',
  'LoZ reduces ghost readings by drawing more current - and more loading.',
],'A DMM voltage input can be represented as a resistor across the source. If source resistance and meter input resistance are comparable, the meter becomes part of a divider and changes the node. This is most relevant on high-impedance sensor nodes, leakage measurements, and capacitive pickup. UT171A LoZ can help distinguish ghost voltage but deliberately lowers input impedance; it may disturb legitimate signals.',s=>{
  panel(s,'A meter can change the circuit it measures');
  node(s,'SOURCE','Vs, Rs',7.0,3.25,1.45,1.0,C.teal,C.tealPale);
  arrow(s,8.5,3.75,9.15,3.75);
  node(s,'NODE','measure here',9.2,3.25,1.35,1.0,C.yellowInk,C.yellowPale);
  node(s,'METER','Rin to COM',10.95,3.25,1.2,1.0,C.tealDark,C.tealPale);
  ln(s,10.0,4.26,10.0,5.0,C.teal,1.2);ln(s,10.0,5.0,11.55,5.0,C.teal,1.2);ln(s,11.55,5.0,11.55,4.26,C.teal,1.2);
  txt(s,'Vnode depends on Rs and meter input impedance.',7.05,5.65,5.1,0.22,{fontSize:8.8,bold:true,color:C.tealDark,align:'center'});
});

slide(21,'Terminals, fuses, and function identity','SAFETY THEORY',[
  'COM is the reference terminal; V/ohm/Hz is the normal signal input.',
  'Current inputs are separate and fuse-protected.',
  'Terminal placement and selected function must agree before contact.',
  'Different meter models use different sockets, fuses, and limits.',
],'Conceptually map each terminal: COM, V/ohm/Hz, low-current input, high-current input. Fuses protect against certain overcurrent faults but are not substitutes for correct setup. The UT89XD has 20A MAX and mA/microamp inputs; UT171A has 10A MAX and mA/microamp. The UT171A manual lists F 10A H 1000V and FF 800mA H 1000V fuses; use exact manual replacements only. Do not infer UT89XD fuse specs from a different model.',s=>{
  panel(s,'The red lead socket changes the meter’s circuit path');
  const a=[['COM','black / common'],['V Ω Hz','voltage + passive tests'],['mA µA','fused low current'],['10A / 20A','high-current input']];
  a.forEach((v,i)=>{const x=6.93+i*1.35;node(s,v[0],v[1],x,3.05,1.15,1.18,i>1?C.yellowInk:C.teal,i>1?C.yellowPale:C.tealPale);});
  txt(s,'Socket selection is part of the circuit topology - not a cosmetic setting.',6.98,5.2,5.35,0.36,{fontSize:9,bold:true,color:C.red,align:'center'});
});

slide(22,'CAT category and maximum voltage are different','SAFETY THEORY',[
  'Maximum voltage alone does not describe transient environment or safety.',
  'CAT rating is tied to measurement location and expected transient energy.',
  'UT89XD: CAT III 600 V / CAT II 1000 V per model documentation.',
  'UT171A: CAT III 1000 V / CAT IV 600 V per its manual.',
],'Explain categories at a high level: CAT II is typically appliance/outlet loads, CAT III distribution/building wiring, CAT IV service origin, but definitions and setup must follow standards and local rules. The labels must be considered together with voltage rating, leads, accessories, and the actual circuit. UT89XD’s 1000V maximum does not make it CAT III 1000V. UT171A has different category markings. Never upgrade the use case based on the display reading.',s=>{
  panel(s,'Use only within every component rating');
  const a=[['UT89XD','CAT III 600 V','CAT II 1000 V',C.teal],['UT171A','CAT III 1000 V','CAT IV 600 V',C.yellowInk]];
  a.forEach((v,i)=>{const x=7.0+i*2.7;box(s,x,3.0,2.35,1.55,i?C.yellowPale:C.tealPale,C.line,true);txt(s,v[0],x+0.12,3.2,2.11,0.25,{fontSize:13,bold:true,color:v[3],align:'center'});txt(s,v[1],x+0.12,3.68,2.11,0.2,{fontSize:9,bold:true,color:C.ink,align:'center'});txt(s,v[2],x+0.12,4.03,2.11,0.2,{fontSize:9,bold:true,color:C.ink,align:'center'});});
  txt(s,'Verify the actual meter and lead markings before any live measurement.',7.0,5.42,5.25,0.24,{fontSize:8.8,bold:true,color:C.red,align:'center'});
});

slide(23,'Battery voltage and internal resistance','APPLICATION THEORY',[
  'Open-circuit voltage does not prove a battery can deliver its rated capacity.',
  'A source has internal resistance that causes voltage sag under load.',
  'Compare unloaded and safely loaded voltage to observe the effect.',
  'Use a rated load; never short a battery to test it.',
],'Model a battery as an ideal source plus series internal resistance. With no load current, terminal voltage is near the source emf. Under load, the internal resistance drop makes terminal voltage lower. A DMM voltage reading alone is not a capacity test. Demonstrate only with an appropriately rated resistor/load and check its power dissipation.',s=>{
  panel(s,'Battery model: ideal source + internal resistance');
  node(s,'IDEAL CELL','E',7.05,3.2,1.25,0.9,C.teal,C.tealPale);
  box(s,8.55,3.28,1.05,0.72,C.yellowPale,C.yellowInk);txt(s,'rinternal',8.62,3.5,0.91,0.2,{fontSize:9,bold:true,color:C.yellowInk,align:'center'});
  arrow(s,9.64,3.64,10.25,3.64);
  node(s,'LOAD','Rload',10.3,3.2,1.35,0.9,C.tealDark,C.tealPale);
  txt(s,'Vterminal = E - I × rinternal',7.14,4.75,4.9,0.32,{fontFace:HEAD,fontSize:18,bold:true,color:C.tealDark,align:'center'});
});

slide(24,'AC line voltage: value and context','APPLICATION THEORY',[
  'AC voltage readings are RMS-like values within the meter’s stated conditions.',
  'Mains tests require correct CAT rating, leads, fixture, and competence.',
  'An enclosed approved trainer is preferable for demonstrations.',
  'A DMM does not reveal waveform distortion or short transients in detail.',
],'The theory deck is not an invitation to probe a household socket. Live mains demonstrations belong to an authorized/supervised presenter using an enclosed, rated test fixture and correct safe system of work. Distinguish voltage magnitude from waveform quality. A DMM can provide an RMS reading within its specification but cannot replace an oscilloscope or power-quality instrument for waveform detail. If the trainer/competence is absent, use isolated extra-low-voltage AC only.',s=>{
  panel(s,'Measurement choice depends on the question');
  node(s,'DMM','RMS magnitude',7.0,3.18,1.6,1.1,C.teal,C.tealPale);
  node(s,'OSCILLOSCOPE','shape + timing',9.18,3.18,1.8,1.1,C.yellowInk,C.yellowPale);
  arrow(s,8.64,3.72,9.1,3.72);
  txt(s,'Mains connection: authorized person + rated enclosed fixture + local SOP.',7.0,5.22,5.15,0.36,{fontSize:9,bold:true,color:C.red,align:'center'});
});

slide(25,'NCV, LoZ, and VFC are special-purpose tools','ADVANCED FUNCTIONS',[
  'NCV senses an electric field; it is not a voltage measurement or proof of dead.',
  'LoZ lowers input impedance and can suppress ghost voltage by loading the source.',
  'VFC applies filtering; the result is not full waveform analysis.',
  'Special modes change what the meter observes - read the active display icon.',
],'Distinguish these three functions. NCV detection varies with coupling, orientation, insulation, and environment; false negatives and positives occur. LoZ draws more current, useful in some ghost-voltage diagnosis, but can disturb a legitimate high-impedance circuit. VFC filters higher-frequency content for some drive measurements. Always explain to the audience that active mode changes the measurement interpretation.',s=>{
  panel(s,'Useful aids - never substitutes for safe verification');
  const a=[['NCV','field detection',C.teal],['LoZ','intentional loading',C.yellowInk],['VFC','low-pass filtering',C.tealDark]];
  a.forEach((v,i)=>{const x=6.98+i*1.79;node(s,v[0],v[1],x,3.08,1.5,1.2,v[2],i===1?C.yellowPale:C.tealPale);});
  txt(s,'No NCV indication ≠ safe. LoZ/VFC readings are mode-dependent.',7.03,5.23,5.3,0.32,{fontSize:9.2,bold:true,color:C.red,align:'center'});
});

slide(26,'Current measurement: an ammeter enters the branch','CURRENT THEORY',[
  'An ammeter is inserted in series so branch current passes through its shunt.',
  'Current mode creates a low-resistance path - never place it across a source.',
  'The red lead must use the correct fused current terminal.',
  'The practical demonstration and lead restoration are in the final video chapter.',
],'This is the beginning of the final theory chapter. Show the series topology conceptually, not as instructions to measure current yet. The ammeter shunt produces a small voltage proportional to current; electronics infer I. Placing the meter across a source in current mode can cause a high fault current. In the practical video this is demonstrated only with an extra-low-voltage current-limited source and a series load; never intentionally short a supply.',s=>{
  panel(s,'Ammeter becomes part of the current path');
  node(s,'SOURCE','Vs',7.0,3.25,1.15,0.9,C.teal,C.tealPale);
  node(s,'METER','shunt path',8.73,3.25,1.35,0.9,C.yellowInk,C.yellowPale);
  node(s,'LOAD','Rload',10.72,3.25,1.25,0.9,C.tealDark,C.tealPale);
  arrow(s,8.18,3.7,8.68,3.7);arrow(s,10.1,3.7,10.67,3.7);
  txt(s,'Series: same branch current flows through meter and load.',7.0,5.13,5.2,0.28,{fontSize:9,bold:true,color:C.tealDark,align:'center'});
});

slide(27,'Burden voltage: the meter changes the circuit','CURRENT THEORY',[
  'Shunt, fuse, leads, and contacts create series resistance in current mode.',
  'Burden voltage is the drop across that effective meter path.',
  'Burden can reduce load voltage and change the measured current.',
  'Use manufacturer data; the illustrative example is not a UNI-T specification.',
],'Give a hypothetical worked example: if effective meter path were 2 ohms and current 0.1 A, Vburden=I×R=0.2 V. Explicitly say these are teaching numbers, not actual UT89XD or UT171A specs. Explain higher burden is often more noticeable on low-current ranges with larger shunts or sensitive circuits. Use published burden specs when available. The practical video should compare circuit behavior before/while measuring only on a safe current-limited low-voltage circuit.',s=>{
  panel(s,'Illustrative calculation only');
  txt(s,'Vburden = I × Rmeter-path',7.05,2.84,5.15,0.42,{fontFace:HEAD,fontSize:21,bold:true,color:C.tealDark,align:'center'});
  txt(s,'0.10 A × 2 Ω = 0.20 V',7.05,3.55,5.15,0.38,{fontFace:HEAD,fontSize:19,bold:true,color:C.yellowInk,align:'center'});
  box(s,7.14,4.38,4.98,0.8,C.redPale,C.redPale);txt(s,'Hypothetical values - not either meter’s published specification.',7.34,4.66,4.58,0.22,{fontSize:9.1,bold:true,color:C.red,align:'center'});
});

slide(28,'Current ranges, fuses, and final theory checkpoint','CURRENT THEORY',[
  'High-current and mA/µA inputs use separate terminal and fuse paths.',
  'Range, fuse, CAT rating, duration and lead rating all constrain the test.',
  'UT89XD: 20 A MAX; UT171A: 10 A MAX - confirm exact manual/time limits.',
  'The practical video ends with series measurement and red-lead restoration.',
],'Close the theory episode with the safety architecture rather than a live procedure. Identify that the meters have separate low-current and high-current paths and their own fuse ratings. UT89XD has 20A MAX; UT171A has 10A MAX. Never infer the actual duration or fuse from the maximum number; read the exact manual and instrument markings. In the practical video, current measurement is the final chapter. Afterward the red lead returns immediately to V/ohm/Hz and the meter is left safe.',s=>{
  panel(s,'Current theory ends here; practical current test comes last');
  const a=[['EXPECT','estimate magnitude'],['SELECT','function + fused terminal'],['INSERT','series path only'],['RESTORE','red lead to V socket']];
  a.forEach((v,i)=>{const x=6.9+i*1.35;node(s,v[0],v[1],x,3.04,1.16,1.18,i===3?C.yellowInk:C.teal,i===3?C.yellowPale:C.tealPale);if(i<3)arrow(s,x+1.17,3.63,x+1.32,3.63);});
  box(s,7.0,5.0,5.2,0.76,C.redPale,C.redPale);txt(s,'Never put a current-configured meter across a voltage source.',7.2,5.25,4.8,0.22,{fontSize:9.2,bold:true,color:C.red,align:'center'});
});

pptx.writeFile({ fileName: OUT, compression: true })
  .then(() => console.log(`Created ${OUT}`))
  .catch((error) => { console.error(error.stack || error.message || error); process.exitCode = 1; });
