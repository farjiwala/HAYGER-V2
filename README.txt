HAYGER ULTRA

App-shell redesign: fixed header, native-style bottom tab bar, one
dedicated full screen per tab (Home / History / Stats / Awards /
More), a signature progress ring around the day number, warm
gold/amber accent palette (light + dark), Fraunces + Inter
typography, mood tagging, journey + streak badges, circular History
calendar with a 10-week activity heatmap and tap-to-view day detail,
Stats with check-in rate + goal progress + weekly chart, custom
goals, searchable notes, share progress, optional PIN app lock,
backup export/import, optional reminder, offline PWA support.

Keep these files together:
index.html
manifest.json
sw.js
icon-192.png
icon-512.png

------------------------------------------------------------
HOW TO PUSH UPDATES (no reinstall needed)
------------------------------------------------------------
This app now shows a real "New version available" popup — like a
professional app — whenever you deploy a change. No one needs to
delete and reinstall anything.

Every time you edit these files and re-upload them to your hosting:

1. Open sw.js and change the CACHE_NAME line to a new value, e.g.
   const CACHE_NAME="hayger-ultra-v8";
   (any new value works — just make it different from before)

2. Upload the updated files to your host, overwriting the old ones.

That's it. Here's what happens automatically on users' phones:
- Their browser/PWA checks for a new sw.js in the background
  (it checks whenever they reopen the app or bring it to the
  foreground).
- If the file changed, it silently downloads and prepares the new
  version.
- A popup slides up from the bottom: "New version available" with
  an UPDATE button.
- Tapping UPDATE swaps in the new version and reloads instantly —
  their check-ins, streaks, notes, everything stays intact, because
  that data lives in the browser's storage, not in the app files.
- If they ignore the popup, the app keeps working on the old
  version until they tap UPDATE or close and reopen the app.

Important: always bump CACHE_NAME on every release. If you forget,
some browsers may not notice the files changed, and the popup won't
appear.

Use HTTPS or localhost — service workers (and this update flow)
don't run over plain HTTP on other hosts.
Reminder notifications depend on browser/device support.
PIN lock has no recovery — forgetting it means resetting the app.
