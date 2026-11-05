# Racing template: Scrap League adaptation

W1–W8 / profile A6 / Document-first edition2.4. User selected wesley83/scrap-league at b777c24e317f27d4347d379863717531195ea9f8 to replace Roundabout. The original Roundabout commit12b238b09370 and source remain recoverable in Git; its localStorage keys are neither read nor deleted.

content/ HTML is the authoritative catalog, tracks, parts, cups, rivals and daily definitions. Shared model/compiler validate source, imports and Workshop test snapshots. Compact content.json, Three.js meshes and numerical fixed120Hz simulation are derived representations; never edit generated bundles as a second content source. Workshop's typed geometry command model is a documented A6 exception for analytic pieces, topology and undo; canonical HTML serialization/round-trip validation supplies portable durable authoring. IndexedDB contains local progress, presets, track drafts, results and ghost snapshots, not public shared authority.

Keep upstream ARCHITECTURE.md and IMPLEMENTATION-STATUS.md for detailed model and actual limits. Imported historical reference snapshots do not supersede the current governing guide. No backend/provider is added. Host configuration stays empty for shared boards and remote Workshop publishing. Generic CLI owner deployment is separate trusted authoring.

Adaptation contracts: per-install IndexedDB and service-worker cache/scope, relative immutable releases, retained earlier hosted assets, no old progress erasure, vendored pinned Pagelove menu/control tokens, private deployment credentials and complete served-byte offline inventory. Validated source build to site/ is the installation payload. No runtime token or production service endpoint is embedded. Verification pending in REVIEW.md.
