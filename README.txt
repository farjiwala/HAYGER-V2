HAYGER ULTRA

Full app-shell redesign: fixed header, native-style bottom tab bar,
one dedicated full screen per tab (Home / History / Stats / Awards /
More), a signature progress ring around the day number, warm
gold/amber accent palette (light + dark), and Fraunces + Inter
typography.

Features: daily check-in with mood tagging, journey + streak
achievement badges, redesigned History (circular calendar, 10-week
activity heatmap, tap any day for details), Stats with accurate
check-in rate + goal progress + weekly activity chart, custom goals,
journal notes with search, share progress, optional PIN app lock,
backup export/import, theme control, optional reminder, offline PWA
support.

Keep these files together:
index.html
manifest.json
sw.js
icon-192.png
icon-512.png

Needs internet on first load to fetch the Fraunces/Inter fonts from
Google Fonts (cached afterward by the service worker for offline use).
Use HTTPS or localhost for PWA/service-worker behavior.
Reminder notifications depend on browser/device support.
PIN lock has no recovery — forgetting it means resetting the app.
