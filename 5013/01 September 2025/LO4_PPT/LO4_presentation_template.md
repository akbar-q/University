# LO4 — Applications & Impact of Embedded Systems

Presentation template (detailed skeleton). Purpose: provide a slide-by-slide skeleton covering:
- Current uses in a chosen sector
- Emerging trends and enabling technologies
- Critical appraisal of research, societal and economic implications

Notes:
- Use this Markdown as the source slide content. Each top-level H2 (##) is a slide.
- Speaker notes are included under each slide as "Notes:" and research prompts as bullets.
- Convert to a presentation (pptx/odp) using the provided conversion script or instructions in `README_CONVERT_TO_ODP.md`.

---

## Slide 1 — Title
Title: LO4 — Applications & Impact of Embedded Systems
Subtitle: [Your sector] — e.g., Smart Buildings / Healthcare / Automotive / Agriculture
Author(s), date, module: Unit 5013 — Embedded Systems

Notes:
- Keep title concise; add institution and module.
- Research step: confirm exact sector name (e.g., "Commercial HVAC systems in Office Buildings").

---

## Slide 2 — Vocational scenario recap (1 slide)
Heading: Vocational scenario & scope
Bullets:
- Short scenario statement (1–2 lines): who benefits, primary function of embedded systems in the sector.
- Scope: geographical, scale (e.g., single building, fleet-level, regional / national), key stakeholders.

Notes:
- Provide a 1-line hook to contextualise use-cases.
- Research prompts: identify 2–3 primary stakeholders and a short problem statement.

---

## Slide 3 — Learning outcomes & assessment mapping
Heading: What we’ll cover
Bullets:
- Short overview of the presentation structure (current uses, case studies, trends, research appraisal)
- How to navigate the evidence and appendices

Notes:
- This slide is optional; use it to orient the assessor/audience to the flow of the presentation.

---

## Slide 4 — Sector snapshot: current landscape (data-driven)
Heading: Current landscape (market size, adoption rate, timelines)
Bullets:
- Key metrics: market value, growth rate, installed base, adoption barriers
- Regulatory context (standards, safety requirements, data protection laws)

Notes:
- Research prompts: gather 2–3 reputable stats (industry reports, government sources) with citations.
- Tip: use a small chart (market growth) on the right-hand side.

---

## Slide 5 — Current uses: taxonomy of applications (P6)
Heading: How embedded systems are used in this sector
Bullets (each becomes a sub-point / mini-slide if needed):
- Monitoring & sensing (environmental sensors, occupancy, condition monitoring)
- Control & actuation (HVAC control, dosing systems, motor controllers)
- Connectivity & gateways (edge devices, protocol gateways)
- Safety/critical functions (interlocks, fail-safes, alarms)
- Data logging & telemetry (historic data for maintenance/analytics)

Notes:
- For each bullet, add 1 example product or vendor and 1 short use-case description.
- Research prompts: list at least one field example or vendor per category.

---

## Slide 6 — Case study A — representative deployed system (P6)
Heading: Case study — [name/location/vendor]
Structure:
- System overview diagram (block diagram): sensors → MCU → comms → cloud/local aggregator → actuator
- Key specs: MCU type, comms protocol, power source, sampling rate
- Outcomes/benefits: energy saved, downtime reduced, safety incidents avoided

Notes:
- Research: get one case study with public data (white paper, datasheet or press release). Cite.
- Add a 1-line critical note: limitations or failure modes reported.

---

## Slide 7 — Case study B — alternative scale (P6)
Heading: Case study — small/large scale comparison
Structure:
- Compare a small-scale (prototype or SME) vs enterprise deployment
- Differences: cost, reliability, support, certification

Notes:
- Use this slide to show range of applications and evaluation criteria for P6.

---

## Slide 8 — Technical enablers & typical architectures
Heading: Common architectures and their trade-offs
Bullets:
- Edge-first (local processing + summary telemetry)
- Cloud-first (thin edge + heavy cloud processing)
- Hybrid (edge ML inference + cloud training)
- Communication layers: Wi‑Fi, BLE, LoRaWAN, NB‑IoT, wired (RS485, CAN)

Notes:
- Add mini-table for trade-offs: latency, power, cost, privacy.
- Research prompts: typical MCU families used in sector (e.g., ESP32, STM32, NXP, TI) and why.

---

## Slide 9 — Evaluation criteria for current uses (P6) — checklist
Heading: How to evaluate a deployed embedded solution
Checklist / headings:
- Functional correctness & reliability
- Safety and fail-safe behaviour
- Maintainability & updateability (OTA updates)
- Security & data privacy
- Energy and cost efficiency
- Regulatory compliance & certification

Notes:
- For each checklist item, collect evidence (logs, datasheets, vendor claims, test results) for at least two systems where possible.
- Research prompts: find statements on maintenance intervals and failure rates where possible.

---

## Slide 10 — Emerging trends overview (M5)
Heading: Major trends shaping the sector
Bullets:
- IoT proliferation and ubiquitous sensing
- Edge AI / TinyML for local inference
- Sustainability-driven design (energy harvesting, low-power protocols)
- Standardisation and federated data platforms
- Security by design: secure boot, hardware root-of-trust

Notes:
- Link each trend to a short explanation of sector impact and a concrete example.
- Research prompts: cite 2–3 recent papers or industry reports per trend.

---

## Slide 11 — Trend deep-dive: IoT & connectivity (M5)
Heading: IoT platforms & connectivity choices
Bullets:
- Protocols mapped to use-cases (e.g., LoRaWAN for long-range low-power)
- Edge gateways and interoperability challenges
- Example: Integration stack for occupancy-based HVAC control

Notes:
- Provide specific advantages and limitations for 2–3 protocols.
- Research prompts: find a vendor/standard (e.g., Matter, MQTT) and note adoption status.

---

## Slide 12 — Trend deep-dive: AI at the edge (M5)
Heading: TinyML & on-device inference
Bullets:
- Typical applications: anomaly detection, predictive maintenance, occupancy detection
- Model lifecycle: training, compression/quantization, deployment, updates
- Resource constraints & evaluation metrics (latency, accuracy, power)

Notes:
- Provide a short example pipeline: sensor → feature extraction → TinyML model → action.
- Research prompts: cite a recent TinyML study or vendor SDK (TensorFlow Lite Micro, Edge Impulse).

---

## Slide 13 — Trend deep-dive: Sustainability (M5)
Heading: Sustainability & circular design for embedded systems
Bullets:
- Energy efficiency (low-power modes, duty cycling)
- Materials & repairability (modular hardware, recyclable materials)
- Lifecycle analysis: embodied carbon, EOL recycling

Notes:
- Quantify impact where possible (e.g., % energy reduction from smart control).
- Research prompt: find one lifecycle analysis or sustainability metric used in the sector.

---

## Slide 14 — Research landscape & active areas (D4)
Heading: What researchers are investigating now
Bullets:
- Robustness and interpretability for edge AI
- Secure update mechanisms for constrained devices
- Privacy-preserving telemetry (federated learning, homomorphic approaches)
- Socio-technical studies: acceptance, ethics & worker impact

Notes:
- List 4–6 contemporary papers (title + 1-line takeaway) and funding sources (Horizon Europe, NSF, etc.).
- Research prompt: summarise 2—3 research gaps.

---

## Slide 15 — Societal & economic implications (D4)
Heading: Benefits & harms — a critical appraisal
Bullets:
- Economic: cost savings, job shifts, new business models
- Social: privacy risks, surveillance concerns, unequal access
- Ethical: biases in automated control systems, accountability

Notes:
- Provide balanced viewpoints with evidence (news, white papers, policy docs).
- Research prompt: identify at least one policy/ethics guideline relevant to the sector.

---

## Slide 16 — Risks, mitigations & standards (D4)
Heading: Risk appraisal and mitigations
Bullets:
- Technical risks: device compromise, data loss, sensor drift
- Operational risks: supply chain, scalability, maintenance
- Mitigations: secure boot, redundancy, robust testing, SLAs
- Standards mapping: ISO, IEC, sector-specific standards

Notes:
- Include concrete recommendations and where to find relevant standards.

---

## Slide 17 — Cost-benefit & ROI (P6 + D4)
Heading: Quantitative comparison — typical KPIs
Bullets:
- Initial costs vs operational savings (example calculation)
- Payback period and TCO (total cost of ownership)
- Non-financial benefits (safety, compliance)

Notes:
- Show a simple worked example: e.g., smart HVAC reduces energy by X% → £Y per year saved.
- Research prompt: locate a public ROI case study or vendor ROI calculator.

---

## Slide 18 — Implementation challenges & lessons learned
Heading: Practical deployment lessons
Bullets:
- Procurement & vendor lock-in
- Integration with legacy systems
- Maintenance & OTA strategies
- Data governance and ownership

Notes:
- Pull lessons from case studies; highlight at least 3 actionable recommendations.

---

## Slide 19 — Recommendations & future roadmap (D4)
Heading: What to do next — short, medium, long term
Bullets:
- Short-term: pilot scope, acceptance criteria, test metrics
- Medium-term: scale-up plan, maintenance contracts, staff training
- Long-term: research partnerships, policy engagement, sustainability goals

Notes:
- Provide a 1-page roadmap as an appendix if needed.

---

## Slide 20 — Evidence mapping & where the criteria are met
Heading: Cross-reference
Bullets:
- Evidence mapping: list slides and appendix items that support claims, case studies and data

Notes:
- Use this slide to help assessors quickly find supporting evidence and links to the repo artifacts.

---

## Slide 21 — References
Heading: References (Harvard style)
Bullets:
- Include full citations for all stats, papers, white papers, vendor material.
- Use Harvard format and ensure every in-slide claim has a cite key.

Notes:
- If a slide includes non-free images, note the licence.

---

## Slide 22 — Appendices & supporting materials
Heading: Appendices
Bullets:
- Full code snippets (link to repo), test logs, detailed ROI calc, full case study data
- Contact details and last updated date

Notes:
- Keep appendices short and point to repo artifacts for full evidence.

---

## Speaker tips & submission checklist (last slide/handout)
Bullets:
- Keep SAQ (short answers) prepared for assessor questions on security & ethics
- Ensure each deliverable (report, slides, code) cross-references the LO criteria
- Submission checklist: report PDF, ODP slides, code listing, test logs, professional discussion notes

Notes:
- Suggest practicing the professional discussion using the slides as prompts.

---

End of template. Fill in sector-specific examples and citations before converting to a presentation file.
