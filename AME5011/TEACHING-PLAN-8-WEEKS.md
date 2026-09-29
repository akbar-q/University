# AME5011 - Mechatronic Design Challenge

## Unit Purpose

AME5011 is the Year 2 practical design-and-build unit. Student teams develop, manufacture, test and present a self-contained mechatronic vehicle for the live Design Challenge brief. For 2026, the design context is the IMechE External Pipe Climber: an autonomous device that climbs a vertical commercial 22 mm copper pipe, lifts a chain, engages the upper barrier, returns, and releases the chain in the required descent zone.

The unit is designed so the annual brief can be substituted without rewriting its learning approach. A repeatable-car or internal-pipe-climber brief would retain the same workflow: requirements capture, concept selection, calculations, prototype iteration, autonomous control, verification and presentation.

## 2026 Design Constraints to Freeze at Project Launch

- Device envelope: maximum 400 mm diameter by 300 mm length, excluding the specified automatic clip.
- Pipe: commercial 22 mm copper pipe, nominal 2,200 mm climbing length; installation may not be perfectly plumb.
- Start position: top datum surface at 400 mm from the base.
- Mission: autonomous upward travel, top-barrier contact, timed red light and buzzer indication, autonomous descent, chain release after the intermediate target and before the first target, then autonomous stop or ground contact.
- Load: standard chain of 0.15 kg/m; verify the exact supplied chain and clip dimensions before final design freeze.
- Required indicators: green light throughout a run; red light and audible buzzer during top-barrier engagement.
- Cost ceiling: AED 250, including the automatic clip.
- Restrictions: no remote/wireless/GPS control; no outsourced manufacturing; self-contained throughout the run.
- Control eligibility: vehicle firmware must be authored and understood by the team. Confirm the chosen controller platform and any purchased control hardware with the organiser/scrutineer before design freeze; do not assume a teaching development board is competition-eligible.

## Proposed Learning Outcomes

These are planning outcomes pending confirmation against the validated module specification.

- LO1: Translate an annually issued competition brief into measurable engineering requirements, constraints and risks.
- LO2: Develop and justify an electromechanical vehicle concept through calculations, modelling and prototype tests.
- LO3: Manufacture, integrate and program a self-contained autonomous vehicle using safe, testable engineering practice.
- LO4: Verify vehicle performance and communicate the design, cost, risk and improvement evidence professionally.

## Assessment Strategy

| Evidence | Suggested weighting | Primary evidence |
| --- | ---: | --- |
| Design dossier and concept review | 25% | Requirement matrix, concepts, calculations, CAD, risk register, preliminary BoM |
| Individual technical contribution | 20% | Lab record, design rationale, competency check and contribution interview |
| Team vehicle verification portfolio | 35% | Functional vehicle, code, test data, final BoM/mass/cost and compliance checklist |
| Competition presentation, poster and peer review | 20% | Five-minute presentation, A1 portrait poster, peer-review response |

## Competition-Aligned Evidence

- A visible requirements and compliance matrix linked to every brief clause.
- Engineering calculations for chain load, traction/normal force, motor torque, speed, power, battery energy and factor of safety.
- Controlled test results for climb, top engagement duration, descent, release-zone timing and repeatability.
- CAD assembly showing the envelope, top datum surface, pipe contact points and clip position.
- A final BoM including cost, supplier, mass and quantity for every installed component.
- Safety sign-off material ready for local scrutineering.

## Weekly Teaching Plan

### Week 1 - Brief Deconstruction and Project Definition

**Theory/design:** Read the live brief; distinguish objective, constraint, rule, assumption and scoring opportunity; explain self-contained autonomy and scrutineering.

**Practical/studio:** Measure the rig/pipe and supplied components where available; create the team requirements matrix and initial risk register; inspect example drive arrangements.

**Evidence:** Signed project charter, requirements matrix, roles and first test strategy.

### Week 2 - Concepts, Contact Mechanics and Selection

**Theory/design:** External versus internal climbing principles; roller, belt, wheel, screw and inchworm concepts; friction, normal force, compliance, guide geometry and tolerance to pipe misalignment.

**Practical/studio:** Produce at least three distinct concepts; score them using weighted selection against compliance, traction, manufacturability, cost, mass, safety and controllability.

**Evidence:** Sketch/CAD concepts, weighted decision matrix and selected-concept rationale.

### Week 3 - Loads, Traction, Torque and Speed

**Theory/design:** Chain load as a changing mass, free-body diagrams, friction demand, drive torque, gearbox ratio, mechanical efficiency, speed-time trade-off and safety factors.

**Practical/studio:** Bench-test roller/wheel materials on a 22 mm copper-pipe sample; characterise motor/gearbox speed and current; calculate a first motor-drive sizing.

**Evidence:** Calculation sheet and measured traction/motor data supporting component selection.

### Week 4 - Power, Electronics and Autonomous Control

**Theory/design:** Battery series/parallel selection, energy budget, peak/stall current, voltage sag, fusing, motor drivers, indicator circuits, limit sensing and finite-state-machine control.

**Practical/studio:** Build the protected drive/control harness. Implement states for hold/start, climb, top engagement, descend, release and safe stop.

**Evidence:** System block diagram, wiring schematic, state diagram, code baseline and electrical safety check.

### Week 5 - Mechanical Build and Integration

**Theory/design:** Design for manufacture, fasteners, bearings, alignment, tolerances, repairability, cable management, guarding and envelope control.

**Practical/studio:** Manufacture and assemble the first integrated vehicle; perform envelope and mass check; conduct unloaded climb and descent tests.

**Evidence:** CAD update, manufacturing record, revised BoM and initial integration test log.

### Week 6 - Top Engagement, Chain Release and Reliability

**Theory/design:** Reliable triggering, dwell timing, mechanical release mechanisms, tolerance stack-up, failure modes, repeatability and design of experiments.

**Practical/studio:** Develop and bench-test top-barrier detection and the automatic clip-release mechanism. Test release location against the intermediate and start targets.

**Evidence:** Mechanism drawings, release and dwell test data, FMEA-style risk update and revision plan.

### Week 7 - Full-Mission Verification and Competition Readiness

**Theory/design:** Acceptance criteria, timing method, test repeatability, performance optimisation without compromising compliance, scrutineering and evidence packaging.

**Practical/studio:** Run full missions under representative load. Record climb/descent time, top-engagement duration, release position, lights/buzzer behaviour and failure modes.

**Evidence:** Full test plan/results, compliance checklist, final cost/mass statement and staff safety-sign-off draft.

### Week 8 - Presentation, Poster, Peer Review and Final Iteration

**Theory/design:** Explain a technical design to mixed audiences; use plots, CAD and BoM evidence; prepare for judge questions.

**Practical/studio:** Conduct mock scrutineering and heat; finalise A1 portrait poster and five-minute presentation; peer review another team without handling its device.

**Evidence:** Final design dossier, poster, presentation, peer-review sheet and individual contribution reflection.

## Competition Performance Strategy

The 2026 maximum is 55 points per run: 30 for relative speed, 5 for unsupported pre-start holding, up to 10 for top engagement, and 10 for release in the specified descent zone. Designs should therefore prioritise a repeatable 10-15 second top engagement and reliable chain release before pursuing marginal speed gains. A failure to continue the mission can invalidate bonus points.

## Required Shared Resources

- Safe representative rig with 22 mm copper pipe, rigid top barrier and marked targets
- Copper-pipe offcut for bench traction tests
- Low-voltage motor, gearbox, roller, bearing and fastener stock
- Microcontroller boards, drivers, fuses, indicators, buzzers, limit switches and batteries
- CAD access, multimeters, bench supplies, tachometer/phone video timing and force measurement equipment
- Controlled fabrication access and workshop safety supervision

## Annual Brief Adaptation Procedure

Before the first class, replace the 2026 constraints section with the current official project specification, update the rig measurements and revise Week 6 mechanism tests to suit the mission-specific scoring action. Keep the requirement matrix, calculations, control-state approach, verification portfolio, poster and presentation workflow unchanged.
