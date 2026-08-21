# HAYGER V4 Testing

## Logic smoke test
From the project root:

```bash
node tests/core-smoke.js
```

## Manual mobile QA
1. Start a challenge.
2. Check in and select a mood.
3. Save a daily reflection.
4. Open Stats and verify weekly/deeper signals update.
5. Open Awards and verify special achievements change as data changes.
6. Edit a historical note using the dedicated editor modal.
7. Export a backup, reset/import it, and verify check-ins, notes, reflections and profile return.
8. Turn on the PIN, reload, and verify the lock screen.
9. Turn on reminders and verify the permission/status messaging.
10. Test light/dark/system themes and reduced-motion preference.
11. Install the PWA on a supported browser and verify manifest shortcuts.
