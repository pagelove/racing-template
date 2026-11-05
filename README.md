# Roundabout

A single-player driving time trial: three tracks, acceleration/braking/reverse, independent touch steering, keyboard controls, pause/focus-loss recovery, local checkpoints and personal bests.

Node22+: bun install; bun run check; bun test; bun run preview. Open http://127.0.0.1:4175/. Only site/ is deployed.

Track definitions are semantic HTML in site/index.html. Numeric physics is derived transient runtime, not a competing editable track model. Private progress is local browser data; no authoritative competitive scores, multiplayer or remote writes. Checkpoints use JSON packaging for runtime state, versioned to race-2.

Controls: arrows/WASD, Space brake, Escape pause. Touch supports steering and accelerating together. Personal times are client-reported.

Uses locally bundled pagelove/design-system. Courtyard browser start-to-finish and all-track simulation pass. Physical phone, checkpoint browser recovery and performance acceptance remain pending; see REVIEW.md.

## Live fictional review

[Open this app preview](https://camel-boom-0460.onpagelove.com/template-review-20261105/racing-template/index.html) · [All app previews](https://camel-boom-0460.onpagelove.com/).

The disposable review copy contains only fictional data and is publicly accessible. Source files were staged create-only, then verified through both owner WebDAV and public reads. Browser tasks loaded the deployed app. A390×844 browser viewport was checked; this is emulation, not physical-phone acceptance.

Live Courtyard two-lap driving journey passed at22.8s. Personal progress is device-local; no shared result authority is claimed.

Pagelove native authentication has not been shown to fail. A401 on an application route with no matching write grant is not evidence that a separate identity system is required. Owner WebDAV authoring is already authenticated; browser actor/session integration and exact per-app read/write rules remain to be established before enabling protected functions. Public reading and local game play need no account by themselves.

## Slide 4 build and deploy

Use the repository URL, site hostname and private API token supplied in the generated prompt. After adapting and checking the app, run `node scripts/deploy.mjs --prepare`, then `node scripts/deploy.mjs --host YOUR-SITE.onpagelove.com`. The token is entered privately; existing records are retained. See [deployment instructions](docs/deployment.md) for verify/update commands, isolated paths and exact guarantees. No console-session handoff is required for trusted authoring deployment. Published browser code never contains the owner token.
