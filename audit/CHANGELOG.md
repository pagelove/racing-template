# Change log

## BOOTSTRAP-001 — 2026-11-04T23:32:54.4501976Z
- Actor: Codex; request: Execute the approved template-app development plan.
- Plan: Initialize this application with pinned Pagelove design-system assets, semantic HTML domain sources and DOM-backed editing, app-specific behavior, documented authority/access/recovery, local fixture checks and browser tasks. Preserve any upstream source/licensing. Remote publication and private-data guarantees require separate exact-path verification. No credentials or real personal data in this public repository.
- Files: initial application, docs, tooling and tests (pending); verification pending.

## RACE-002 — 2026-11-04T23:46:02.5512205Z
- Actor: Codex; reference: BOOTSTRAP-001. Implemented three HTML-authored tracks, bounded fixed-step driving, keyboard/independent pointer controls, focus-loss pause, local checkpoints/bests and shared Pagelove styles. Four unit cases cover parsed definitions, physics, ordered checkpoint finish and stopped result. Initial neutral-input case exposed Number(undefined) causing NaN; changed to explicit booleans. All4 tests pass. Browser driving/restore/mobile tasks pending. No shared result/anti-cheat claim.


## RACE-003 — 2026-11-05T03:47:55.7879144Z
Actor: Codex. Browser QA found missing-file requests could crash the preview server because it sent 200 before reading the file, then attempted 404. Plan: read before response, handle GET/HEAD and reject other methods. Update fixture only, verify missing file followed by successful page request. Affected scripts/preview.mjs; verification pending.
RACE-003 implementation note: patch tool rejected delete-and-add on the same path; applied a minimal read-before-response replacement instead. GET-only behavior preserved; no broadened methods.

## PACKAGE-006 — 2026-11-05T04:01:46.675Z
Actor: Codex; reference approved execution / initial public candidate plan. Credential-pattern scan passed for the candidate text closure; source-sha256.json records 27 non-audit source files and hashes. Only fictional seeds and licensed assets included. Review boundaries in REVIEW.md retained. Standalone Bun dependency installation passed after the restricted temp-directory attempt failed; lifecycle scripts skipped. Initial public push to an empty main is planned, without force; runtime live acceptance remains pending. Staged review evidence follows.

## RACE-004 — 2026-11-05T04:04:04.6088806Z
Actor: Codex. Driving review: controls move/steer and pause correctly, but fixed angular steering makes sustained digital input curl too tightly, especially when off-road slows the vehicle. Initial23-second browser attempt did not complete a lap; no finish claim. Plan: adopt speed-proportional turning with an explicit HTML-authored turning radius, version rules to race-2 so old checkpoints refuse safely, test a complete continuous-input Courtyard run, then repeat browser play. Files: index.html, race.mjs, app.mjs, tests/race.test.mjs and docs; rehash before publication.

## RACE-005 — 2026-11-05T04:06:29.192Z
Actor: Codex; reference RACE-004. Added HTML turnRadius and speed-proportional steering, bumped race-2. Courtyard actual browser2-lap completion passed at20.2s; start/pause/resume and combined inputs passed. All6 tests pass, including driven simulation on all3 tracks. Initial command from parent directory could not resolve linkedom; reran within app. Orchard170 radius failed controller test,110 passed and is now authored in HTML. Read-before-response preview correction prevents missing-file crash. Exact source hashes refreshed before publication. Remaining device/checkpoint/performance review explicit in REVIEW.md.
