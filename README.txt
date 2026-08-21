HAYGER — Ultra Premium Gold build (visual upgrade pass)

New in this pass:
- Richer ink + brushed-gold palette (light & dark), layered ambient background glow, subtle grain texture.
- Glass-blurred header with hairline gold gradient edge.
- Day-ring now has a gradient gold stroke, soft glow, and a shimmering gold gradient day number.
- Cards (check-in, stats, goals, notes, badges, settings) upgraded to soft gradient "glass" surfaces with deeper, warmer shadows.
- Buttons get a gold sheen sweep on press; done/checked states use a gold gradient instead of flat color.
- Calendar heat-map, day dots, progress bars and week charts now use the gold gradient instead of a flat accent.
- Tab bar active state gets a soft gold highlight pill.
- Modals use a heavier blur backdrop and a gradient card surface.
- Service worker cache version bumped so the new build replaces the old one on next load.

HAYGER — Updated build

Implemented:
- Compact Check-In + one-time Feeling control. Feeling opens as an emoji popover and becomes locked after selection.
- Weekly Activity now has 8 independent tap targets. Tapping a week opens only that week’s date range, check-ins and saved feelings.
- App Lock (PIN) uses device-local SHA-256 storage with progressive retry cooldowns after repeated incorrect attempts.
- Added About HAYGER section with app purpose, features, data note, version and developer/contact fields.
- Added a subtle premium card treatment around the HAYGER header branding without making it a functional button.
- Bumped the service-worker cache version.

Developer/contact setup:
Open index.html and find ABOUT_CONFIG near the top of the main script. Replace:
  developerName: "Your Name"
  contactEmail: "your@email.com"
with the real details before publishing.

The original project files are otherwise preserved.
