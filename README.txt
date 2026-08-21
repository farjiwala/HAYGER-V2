HAYGER PRODUCTION V3

This build keeps the existing HAYGER visual direction and adds a production-focused foundation.

Highlights:
- IndexedDB durability layer (hayger_data_v3) with localStorage compatibility cache and automatic mirroring.
- Schema metadata for future migrations.
- PBKDF2-SHA256 + random salt for new 4-digit PINs; old SHA-256 PINs migrate after successful unlock.
- Personal Insights, Personal Records and Comeback metrics in Stats.
- Better focus-visible states and reduced-motion support.
- Notification Trigger scheduling when supported, with a graceful foreground fallback.
- Improved PWA cache/versioning and notification click behavior.
- Existing backup/restore remains compatible; exports are now marked schema/version 3.

Important:
- Browser background notification scheduling is platform-dependent. Universal reliable daily reminders require a push backend or native wrapper.
- The current localStorage compatibility cache is not encrypted. For high-security at-rest privacy, the next architecture step is IndexedDB-only encrypted storage using WebCrypto.

Recommended next step:
- Move sensitive reads fully to IndexedDB transactions, then add optional encrypted cloud sync and automated unit/e2e tests.
