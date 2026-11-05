# Roundabout

A single-player driving time trial: three tracks, acceleration/braking/reverse, independent touch steering, keyboard controls, pause/focus-loss recovery, local checkpoints and personal bests.

Node22+: bun install; bun run check; bun test; bun run preview. Open http://127.0.0.1:4175/. Only site/ is deployed.

Track definitions are semantic HTML in site/index.html. Numeric physics is derived transient runtime, not a competing editable track model. Private progress is local browser data; no authoritative competitive scores, multiplayer or remote writes. Checkpoints use JSON packaging for runtime state, versioned to race-2.

Controls: arrows/WASD, Space brake, Escape pause. Touch supports steering and accelerating together. Personal times are client-reported.

Uses locally bundled pagelove/design-system. Courtyard browser start-to-finish and all-track simulation pass. Physical phone, checkpoint browser recovery and performance acceptance remain pending; see REVIEW.md.
