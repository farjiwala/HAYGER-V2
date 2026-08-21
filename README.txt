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
