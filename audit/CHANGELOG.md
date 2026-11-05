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

## LIVE-REVIEW-20261105 — 2026-11-05T13:39:22.217Z
Actor: Codex. Plan before documentation: record actual disposable live preview, owner/public source readback and observed browser tasks, retain pending native browser-account/private-app acceptance, and reconcile hashes/diff before publishing documentation. No runtime permission or data change in this batch. Source: approved execution/live fixture and user auth clarification. Affected README.md, REVIEW.md, audit closure.

Result: documented the verified fictional live review and remaining boundaries without claiming authenticated application acceptance. Separate isolated capability fixtures passed valid200, invalid422, missing428, stale412, concurrent200+412, selector206 and denied reads; those fixture results are not inherited by this app. Temporary fixture PUT access was closed with explicit Deny controls and anonymous401 readback. No credential included. Code and installed records unchanged by this documentation batch.

## PROMPT-DEPLOY-20261105 — 2026-11-05T17:42:29.220Z
Actor: Codex. User reference: finish Slide4 prompt-driven repository build/deployment and end-to-end tests. Plan before implementation: add self-contained deployment module/CLI plus meaningful preservation/concurrency/secret-handling tests; prepare and verify commands, connection/deployment docs and README entry. Credential only from private terminal input or private environment, never source/output/receipt; pin onpagelove public/DAV origins, refuse redirects, preserve records on redeploy, use strong conditional updates, compare owner HTML semantically and other assets byte-for-byte. Keep public review fictional and native private-app saving gated. Existing files/data preserved; no third-party authentication. Verification, hashes and review evidence pending.

PROMPT-DEPLOY-20261105 result: self-contained scripts/deploy-lib.mjs and deploy.mjs, eleven deployment contract tests, command metadata, ignored sanitized receipts and deployment/README documentation installed. Check, full tests and prepared-payload scan passed. Nine content repositories now pass24 tests each, Racing17 and Mahjong82 (315 distinct app tests across11 repos); Mahjong deployment suite also run independently. Initial synthetic credential fixture caused8 early failures before any write; corrected fixture character set and per-resource revision model, preserving production validation. Live trusted-authoring install/readback passed in fresh isolated directories; existing fictional owner record survived redeploy, stale412 and conditional restore passed. These prove deployment, not native browser private editing. Source hashes and staged diff reconciled before commit/push.
