# HAYGER Production Architecture V3

## What changed
- Added an IndexedDB durability layer while preserving the existing localStorage compatibility cache.
- Added schema metadata and automatic mirroring of core app data into IndexedDB.
- Upgraded new PINs to PBKDF2-SHA256 with random salt and 180,000 iterations; old SHA-256 PINs migrate after a successful unlock.
- Added personal insights, personal records and comeback metrics to Stats.
- Added stronger focus-visible states and reduced-motion support.
- Upgraded reminder scheduling with Notification Triggers when the browser supports them, with a graceful foreground fallback.
- Preserved existing export/import, PWA update flow and UI direction.

## Important platform note
Web notification scheduling is platform/browser dependent. The app now uses the best available background scheduling API (`TimestampTrigger`) and falls back to an in-app timer. A truly universal background daily reminder still requires a push backend/native wrapper because browsers do not expose a universally reliable local scheduler.

## Data model
IndexedDB database: `hayger_data_v3`
Object store: `kv`
Schema: `3`

The current localStorage keys remain readable so existing users do not lose data. Every write is mirrored into IndexedDB and the existing backup/export flow remains available.

## Security note
The PIN is a privacy lock, not encryption of the underlying app database. HAYGER still keeps its UX-compatible local cache in localStorage, so users who need strong at-rest secrecy should eventually move sensitive records to IndexedDB-only encrypted storage using WebCrypto.

## Recommended next production step
Move all reads from the compatibility cache to IndexedDB transactions, then add optional encrypted cloud sync. Keep localStorage only for non-sensitive preferences such as theme.
