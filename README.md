# Racing · Scrap League

A fuller Racing template based on [Scrap League](https://github.com/wesley83/scrap-league). Twelve authored circuits, four cups,81 modular car builds, six-car races, Time Trial, Daily Spec, local progress/ghosts and the integrated Track Workshop. See [actual implementation boundaries](IMPLEMENTATION-STATUS.md), [source provenance](UPSTREAM.md) and [document-first architecture](docs/architecture.md).

Install with bun install --ignore-scripts (or npm install), run node tools/build.mjs and node --test tests/*.test.mjs, then node tools/serve.mjs. The normal build validates content/ and produces site/; never rerun destructive author-content utilities as part of a build.

Slide4 combines this repo, the user's site hostname and private API token. Run node scripts/deploy.mjs --prepare, then node scripts/deploy.mjs --host YOUR-SITE.onpagelove.com. Enter the token privately. Use --path /isolated-directory/ for a separate test install and --verify for read-only verification. Existing differing entry code requires deliberate --update. See docs/deployment.md for exact semantics. No separate account/auth service is needed for owner deployment.

Gameplay, garage and Workshop drafts save on this browser. Shared boards and remote Workshop publishing are disconnected. No owner token is embedded. Old Roundabout progress is left untouched; it is not imported as a Scrap League result.

## Document-first development review

Read [the edition2.4 project record](DOCUMENT-FIRST-REVIEW.md) for source authority, operation/recovery contracts, justified runtime exceptions and current acceptance limits. Plans and verification are recorded in audit/CHANGELOG.md. Local tests do not establish live privacy, authorization or physical-device acceptance.

The collection finder searches actual names/descriptions and filters completed or unplayed content; Racing also filters available circuits without unlocking locked events. Clear filters restores the collection. View state never changes game records.
