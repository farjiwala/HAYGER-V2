# HAYGER V4 — Production Upgrade

## Phase 1 — Foundation
- IndexedDB V4 is the durability layer with localStorage write-through compatibility.
- Startup hydration restores data from IndexedDB when the local cache is empty.
- Previous `hayger_data_v3` data is migrated forward when possible.
- Backup format is versioned (`HAYGER_BACKUP`, schema 4) with device ID + revision metadata.
- PINs use PBKDF2-SHA256 with a random salt; older SHA-256 records migrate after successful unlock.
- Local date parsing avoids UTC date-string rollover bugs.

## Phase 2 — Premium UX
- Daily reflection card with energy, small win and tomorrow intention.
- Dedicated note editor modal instead of relying on browser prompts.
- Install-to-home-screen flow when the browser exposes `beforeinstallprompt`.
- Focus-visible states and reduced-motion support.
- Shareable progress-card image generation.

## Phase 3 — Retention
- Smarter reminder messaging: only prompts when today's check-in is still missing.
- Weekly consistency view and deeper signals.
- Personal records: streaks, total check-ins, comebacks, longest gap, monthly rate and average energy.
- Special achievements: comeback, perfect week, reflection streak, consistency, 100 check-ins and weekday rhythm.
- Reflection data feeds the insight layer.

## Phase 4 — Advanced / Sync-ready
- Export/import contains device ID and revision metadata so a future sync service can reconcile records.
- PWA manifest shortcuts for Today, History and Stats.
- Service-worker cache is versioned V4.
- Core app remains account-free and local-first.

### Platform limitation
True cross-device cloud sync and guaranteed background push notifications require a server/push provider or a native wrapper. HAYGER V4 is structured so those can be added without replacing the local data model.
