HAYGER V4 — ONE DAY AT A TIME

This build implements the four upgrade phases discussed for the HAYGER production roadmap.

PHASE 1 — FOUNDATION
- IndexedDB V4 durability layer with local cache compatibility
- V3 IndexedDB migration attempt + startup hydration
- Versioned HAYGER_BACKUP schema 4 with device ID/revision
- PBKDF2-SHA256 PINs with random salt and legacy migration
- Local-date-safe date handling
- Lightweight core smoke tests in tests/core-smoke.js

PHASE 2 — PREMIUM UX
- Daily reflection experience
- Dedicated note editor modal
- Install-to-home-screen flow
- Accessibility focus states + reduced-motion support
- Shareable progress card

PHASE 3 — RETENTION
- Smarter missing-check-in reminders
- Weekly consistency signals
- Deeper personal records
- Reflection-powered energy averages
- Special achievements and comeback/perfect-week mechanics

PHASE 4 — ADVANCED / SYNC-READY
- Sync-ready backup metadata
- PWA shortcuts
- V4 service-worker cache
- Local-first architecture ready for a future cloud sync provider

IMPORTANT PLATFORM NOTE
True cross-device cloud sync and guaranteed background push notifications require a server/push provider or native wrapper. This package intentionally keeps the core app account-free and local-first while preparing the data model for that future layer.

TEST
node tests/core-smoke.js
