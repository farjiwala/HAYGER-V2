HAYGER ULTRA FINAL POLISH V2.1 (BUG-FIX UPGRADE)

What changed in this upgrade (tested with an automated browser test suite
covering setup, check-in, streaks, calendar, notes, goals, awards, profile,
theme, PIN lock, backup export/import, and reset):

Bugs fixed:
- Stats > Challenge goal: the goal dropdown could silently show "7 days"
  pre-highlighted even when no goal had been set yet (the card correctly
  said "Not set", but the dropdown didn't match). Tapping SET GOAL without
  first choosing an option could set an unintended 7-day goal. The dropdown
  now shows a neutral "Choose a goal..." placeholder until you actually
  pick one, and SET GOAL now asks you to choose a goal if none is selected.
- Removed a leftover/legacy notes edit-delete script bundled at the bottom
  of the file. It used an old data format that no longer matches how notes
  are actually stored, so it never ran in this build - it was pure dead
  weight (and left a stray global variable behind). The real notes
  edit/delete UI (the one you actually use, with the styled EDIT/DELETE
  buttons) is untouched and was verified working.
- Removed a duplicate internal function definition left over from an
  earlier patch (no visible effect, just cleanup).
- Bumped the service-worker cache version again so installed users
  reliably get this update via the in-app update banner.

Verified working (no regressions): setup flow, day counting, check-in and
streak counting, mood tagging, 50-day calendar history and day-detail view,
weekly stats, notes add/edit/delete/search, custom goals, awards/badges,
profile save (name/age/gender, no duplicate gender option), profile photo,
theme cycling (system/light/dark), PIN setup + lock on a fresh app open +
wrong-PIN handling + correct unlock, data export, data import (including
graceful rejection of invalid/foreign backup files), and full reset.

Carried over from the previous polish pass:
- Home spacing between the quote/status message and check-in card.
- Subtle breathing/pulse animation on the green status dot.
- Notes Edit/Delete action UI styling.
- Polished Awards cards, badge interactions and progress presentation.
- Single (non-duplicated) profile gender option list.

Replace the repository files with all files from this folder/ZIP.

Final requirements implemented: Home hero streak + brand highlight; 50-day
history with Checked/Missed/Upcoming states; tappable weekly Stats; note
search/menu/edit/delete; simplified Awards with highlighted badge states
and image sharing; profile photo edit/remove; reminder and PIN toggle
switches; profile data included in backup/restore.
