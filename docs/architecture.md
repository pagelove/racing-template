# Document-first architecture

Profile A6, W1–W8, applicable R01–R12, edition2.4. Authored track documents: article[itemtype="urn:Pagelove:RaceTrack:1"] in index.html, stable track IDs, bounded radii/laps/speed, rules race-2. Parser validates before conversion to numeric runtime. No duplicated editable JSON track definitions.

Simulation uses fixed1/120s steps and bounded catch-up; canvas is derived output. Positions/speed/timing are transient. Local checkpoint JSON is justified specialized runtime packaging, not editable domain authority. It records format/rules/track identity and refuses unsupported saves. No anti-cheat or server score claims.

Local storage is device-only; failures reported. Paused state clears input and accumulator. Records persist only on this origin; no remote reads/writes or authentication. Browser/device/performance/recovery evidence in REVIEW.md.

Rules race-2 adds an explicit HTML turning radius. Heading rate is signed speed divided by that radius, scaled by left/right input; slowing down no longer tightens the turn artificially. Old rules checkpoints are refused with original bytes retained. Courtyard supports a complete continuous right-turn run; other tracks require normal steering adjustments.
