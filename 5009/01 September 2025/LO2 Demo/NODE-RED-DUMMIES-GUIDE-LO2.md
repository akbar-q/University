# LO2 Demo — Node-RED + Modbus “Dummies Guide” (Step-by-step)

This is a practical, copy/paste guide to build a simple LO2 demo UI in Node-RED using Modbus.

Outcome
- A Dashboard page that shows: `Status`, `StartState`, `Temperature`, `Connection Strength`, `Errors`
- Buttons for: `StartForce`, `StopForce`, `StartClear`
- A slider for: `Threshold`

What you will build
- Reads from PLC via Modbus → turns values into friendly text/numbers → shows on dashboard
- Dashboard controls → write coils/registers back to PLC

Assumptions
- Node-RED Dashboard installed.
- Modbus nodes installed (commonly `node-red-contrib-modbus`).
- PLC (OpenPLC or similar) reachable via Modbus TCP.

Important: Modbus address numbering
- Many PLC/SCADA docs show addresses like `00001` (coils) or `40001` (holding registers).
- In Node-RED Modbus nodes, the **Address field is commonly 0-based**.
  - Coil `00001` is often Address `0`
  - Holding register `40001` is often Address `0`
- If your data looks “one step off”, fix the address offset first.

---

## Dashboard (UI) layout

Tab: `LO2 Demo`

Group: `MedPack Station`
- `Status` (ui_text) — overall status string
- `StartState` (ui_text) — shows run/armed state
- `Temperature` (ui_gauge) — °C
- `Connection Strength` (ui_gauge) — % or Good/OK/Poor
- `Errors` (ui_text or ui_toast) — last error / alarm message

Controls
- `StartForce` (ui_button) — momentary Start
- `StopForce` (ui_button) — momentary Stop
- `StartClear` (ui_button) — clear forced start/stop
- `Threshold` (ui_slider) — setpoint (0–100 or scaled)

---

## Step 1 — Create the Modbus “Server” config (required)

In any Modbus node, click the pencil icon next to **Server** and create ONE shared server config.

Typical OpenPLC Modbus TCP values
- Name: `OpenPLC`
- Host: `127.0.0.1` (OpenPLC on same PC) OR your PLC IP (example: `192.168.1.50`)
- Port: `502`
- Unit-Id: `1`
- Timeout: `2000 ms`
- Reconnect on timeout: enabled (if available)

Use this same server config for every read/write node.

---

## Step 2 — Build the dashboard UI nodes (outputs only)

Create these nodes and place them on the right side of your flow:
- `ui_text` named `Status`
- `ui_text` named `StartState`
- `ui_gauge` named `Temperature` (units: `°C`)
- `ui_gauge` named `Connection Strength` (units: `%`)
- `ui_text` (or `ui_toast`) named `Errors`

---

## Step 3 — Add Modbus READ nodes (data in)

Create four Modbus Read nodes (one for each read signal).

Recommended defaults (demo stability)
- Unit-Id: `1`
- Poll Rate: `500 ms` or `1000 ms`
- Server: `OpenPLC` (the server config from Step 1)

Choose FC + Address + Quantity

| Signal | FC | Address (0-based) | Quantity |
|---|---|---:|---:|
| ledStatus (coil `00001`) | FC 1 Read Coils | 0 | 1 |
| RunState (coil `00002`) | FC 1 Read Coils | 1 | 1 |
| Temperature (reg `40001`) | FC 3 Read Holding Registers | 0 | 1 |
| Errors (reg `40010`) | FC 3 Read Holding Registers | 9 | 1 |

If your PLC uses different addresses, swap them here.

---

## Step 4 — Wire the reads to UI through Function nodes

This is the “shape” you must build:

```text
Modbus READ (ledStatus)  -> Function (to UI text)     -> ui_text (Status)
Modbus READ (RunState)   -> Function (run state label)-> ui_text (StartState)
Modbus READ (Temperature)-> Function (scale raw->°C)  -> ui_gauge (Temperature)
Modbus READ (Temperature)-> Function (compute quality)-> ui_gauge (Connection Strength)
Modbus READ (Errors)     -> Function (decode error)   -> ui_text/ui_toast (Errors)
```

Tip
- Add a `debug` node (set to “complete msg object”) on each Modbus read while testing.
- Once it works, you can remove debug nodes.

---

## Step 5 — Copy/paste Function node code (this is the missing piece)

Create a Function node for each block below.

Important
- Modbus nodes return different payload shapes depending on configuration.
- The helper `firstValue()` below extracts a single number from common shapes.

### A) Function node: to UI text (wire: ledStatus → this → ui_text Status)

```javascript
function firstValue(payload) {
  let v = payload;
  if (v && typeof v === "object" && Array.isArray(v.data)) v = v.data;
  if (Array.isArray(v)) v = v[0];
  if (v === true) return 1;
  if (v === false) return 0;
  const n = Number(v);
  return Number.isFinite(n) ? n : 0;
}

const n = firstValue(msg.payload);

msg.topic = "Status";
msg.payload = (n === 1)
  ? "PLC Connected / Healthy"
  : "PLC Not Ready / Disconnected";

return msg;
```

### B) Function node: run state label (wire: RunState → this → ui_text StartState)

```javascript
function firstValue(payload) {
  let v = payload;
  if (v && typeof v === "object" && Array.isArray(v.data)) v = v.data;
  if (Array.isArray(v)) v = v[0];
  if (v === true) return 1;
  if (v === false) return 0;
  const n = Number(v);
  return Number.isFinite(n) ? n : 0;
}

const n = firstValue(msg.payload);

msg.topic = "StartState";
msg.payload = (n === 1) ? "RUNNING" : "IDLE";

return msg;
```

### C) Function node: scale raw→°C (wire: Temperature → this → ui_gauge Temperature)

Use this if the PLC register is raw counts 0–4095 = 0–100°C.
If your PLC already gives °C, set `tempC = raw`.

```javascript
function firstValue(payload) {
  let v = payload;
  if (v && typeof v === "object" && Array.isArray(v.data)) v = v.data;
  if (Array.isArray(v)) v = v[0];
  const n = Number(v);
  return Number.isFinite(n) ? n : 0;
}

const raw = firstValue(msg.payload);

// Option A: raw ADC counts (0–4095) mapped to 0–100°C
let tempC = raw * (100 / 4095);

// Clamp to sane range for UI
if (tempC < 0) tempC = 0;
if (tempC > 100) tempC = 100;

msg.topic = "Temperature";
msg.payload = Number(tempC.toFixed(1));

return msg;
```

### D) Function node: compute quality (wire: Temperature read → this → ui_gauge Connection Strength)

This is a simple “demo” indicator. It produces a number 0–100.

```javascript
// If we can read temperature successfully, treat that as a good link.
// You can replace this with a true RSSI if you have one.

function isValid(payload) {
  if (payload === null || payload === undefined) return false;
  if (typeof payload === "number") return Number.isFinite(payload);
  if (typeof payload === "object" && Array.isArray(payload.data)) return payload.data.length > 0;
  if (Array.isArray(payload)) return payload.length > 0;
  return true;
}

msg.topic = "Connection Strength";
msg.payload = isValid(msg.payload) ? 100 : 0;

return msg;
```

### E) Function node: decode error (wire: Errors → this → ui_text/ui_toast Errors)

Assume the register is an integer error code.
If you use a bitmask, you can expand this mapping.

```javascript
function firstValue(payload) {
  let v = payload;
  if (v && typeof v === "object" && Array.isArray(v.data)) v = v.data;
  if (Array.isArray(v)) v = v[0];
  const n = Number(v);
  return Number.isFinite(n) ? n : 0;
}

const code = firstValue(msg.payload);

let text = "OK";
if (code === 0) text = "OK";
else if (code === 1) text = "E-Stop active";
else if (code === 2) text = "Guard open";
else if (code === 3) text = "Sensor mismatch";
else text = `Error code: ${code}`;

msg.topic = "Errors";
msg.payload = text;

return msg;
```

---

## Step 6 — Add controls (buttons/slider) and Modbus WRITEs

Create these Dashboard inputs:
- `ui_button` StartForce
- `ui_button` StopForce
- `ui_button` StartClear
- `ui_slider` Threshold

Then add Modbus Write nodes.

Suggested writes (example mapping)
- StartForce → write coil `00011` (Address 10) using FC 5
- StopForce → write coil `00012` (Address 11) using FC 5
- Threshold → write holding register `40002` (Address 1) using FC 6

### F) Function node: build coil write START=1

Wire: `ui_button StartForce → Function → Modbus WRITE (FC5 coil)`

```javascript
// For FC5 Write Single Coil, most setups accept 1/0 or true/false.
msg.payload = 1;
return msg;
```

Add a `trigger` node after this to auto-clear:
- Send `1` immediately
- Then send `0` after `200 ms`

### G) Function node: build coil write STOP=1

```javascript
msg.payload = 1;
return msg;
```

Also use a trigger to auto-clear to `0`.

### H) Function node: build coil write START=0, STOP=0 (clear)

Wire: `ui_button StartClear → Function → (two Modbus writes OR a multi-write node)`

Simplest option (recommended for beginners)
- Use TWO Modbus Write nodes:
  - Write START coil = 0
  - Write STOP coil = 0

Function code (send a single 0; you will branch the wire to both write nodes):

```javascript
msg.payload = 0;
return msg;
```

### I) Function node: scale UI → register value (Threshold)

Wire: `ui_slider Threshold → Function → Modbus WRITE (FC6 register)`

If your slider is 0–100 and you want to write that directly:

```javascript
let v = Number(msg.payload);
if (!Number.isFinite(v)) v = 0;
msg.payload = Math.round(v);
return msg;
```

---

## Step 7 — Common reasons it says “reconnecting…”

If your Modbus nodes show reconnecting, check:
- Server dropdown is set (not “none”)
- Host/IP correct and reachable
- Port `502`
- Unit-Id correct
- OpenPLC Modbus service running
- Firewall rules (Windows)
- Address offset (0-based vs 1-based)

---

## Make it match your exact PLC mapping (optional)

If you provide your exact Modbus addresses (coils/registers), you can replace the example table in Step 3 and the write addresses in Step 6.
