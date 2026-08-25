# PayAssist — PRD

## Original Problem Statement
Build a premium, modern, responsive, frontend-only website for PayAssist — the mother brand for two verticals: **Z Assist** (device protection / extended warranty) and **RadSafe** (responsible device usage + EMF-exposure awareness). Brand/marketing site, not a web app. Master brief establishes IA, positioning and technical boundaries; detailed component-by-component instructions arrive in later iterations. No backend, no DB, no auth, no CMS, no payments. Z Assist will eventually host a lightweight client-side plan calculator (logic TBD later). Contact is email-CTA only. A user-supplied 16:9 hero video and official logo will be provided later and must not be recreated.

## User Decisions So Far
- Assets (logo, video, reference screenshots) not yet supplied — placeholders in use, swappable.
- Build the structure/skeleton now; wait for component-specific instructions before final design decisions.
- Z Assist calculator: leave out until exact logic is provided (reserved module slot only).
- Motion direction (system directive): award-worthy craft — kinetic masked hero reveal, Lenis smooth scroll, framer-motion scroll reveals, editorial marquee, subtle parallax/3D tilt on hero frame.

## Architecture
- Frontend-only React (CRA/craco) + Tailwind + framer-motion + lenis + lucide-react. Backend template left untouched/unused.
- Routes: `/` (Home), `/z-assist`, `/radsafe` (react-router-dom v7).
- Design system: `/app/design_guidelines.json` — PayAssist blue #0052FF, deep navy #0B132B/#121E36/#070C1B, mist #F4F7FA; Z Assist accent #00D68F, RadSafe accent #00E5FF; Plus Jakarta Sans (display) / DM Sans (body) / JetBrains Mono (labels).
- Global: Lenis smooth scroll + hash-scroll manager in App.js; glass Navbar; dark Footer.
- Home sections (components/home/): Hero, Ecosystem marquee, WhyPayAssist, Approach (numbered manifesto), Solutions (dual vertical cards), About (team + metrics), Testimonials, Contact CTA.

## Implemented (2026-08-25)
- Full responsive skeleton + premium first pass of all 8 home sections with scroll reveals, slow partner marquee, manifesto chapters, solution cards linking to vertical pages.
- Z Assist and RadSafe dedicated page shells: branded hero (emerald/cyan), reserved module slots (calculator explicitly reserved, awaiting spec), back-to-home CTAs.
- Email-only contact (mailto: hello@payassist.com placeholder address).
- data-testid attributes on all interactive/structural elements.

## Implemented (2026-08-25, iteration 2 — Hero + Header per component instruction)
- Real assets integrated: official PayAssist logo + 16:9 brand film (1280x720 h264/aac, 10s), served locally from /public/assets.
- Hero rebuilt video-first: NO headline/copy/CTAs/overlays — video is the sole visual; autoplay muted loop playsInline + extracted poster frame fallback; desktop full-bleed cinematic, mobile complete uncropped 16:9 frame (rounded, ringed) centered in a subtle deep-navy ambient environment with faint brand glows (no black bars, no decoration).
- Header rebuilt: white premium bar — logo left, center nav (Home / Why PayAssist / Solutions / About), Contact Us dark-navy pill CTA far right (Contact removed from center nav); mobile keeps compact Contact Us + hamburger opening a clean white menu with large links + Z Assist/RadSafe quick links.
- Verified: desktop/tablet(834px)/mobile(390px) hero framing, mobile menu, video file integrity (200 OK locally). Note: headless test browser lacks h264 codecs, so playback was verified via file/poster; real browsers play it normally.

## Implemented (2026-08-25, iteration 3 — Brands section + Hero scroll choreography)
- "Protection Across 50+ Brands" section (id="brands", replaces old Ecosystem marquee): exact supplied copy, centered heading/subtitle, clean white section, infinite CSS-transform marquee of 17 brand cards (white cards, subtle border, soft shadow, edge fades), hover pause + touch pause, no page overflow, slower drift on mobile.
- Logos: official SVG marks served locally from /public/assets/brands (Simple Icons colored per brand + Haier wordmark). Voltas and O General have no reachable official asset — clean brand-colored typographic placeholders in use, flagged for replacement when official assets are supplied.
- Hero choreography: video no longer loops — on natural completion it smooth-scrolls once to Brands (only if user is still at the hero; manual scroll always wins); returning to the hero (≥50% visible) restarts the video from 0:00. Verified via synthetic ended-event dispatch (headless browser can't play h264): ended → scrolled to brands; return → currentTime reset to 0.

## Personas
- Consumer evaluating device protection (Z Assist prospect).
- Health-conscious household / parent (RadSafe prospect).
- Retail/brand partner evaluating PayAssist ecosystem.

## Backlog (awaiting user instructions)
- P0: Swap in official PayAssist logo asset + 16:9 hero video (preserve aspect ratio; mobile ambient treatment).
- P0: Component-by-component detailed design passes per upcoming instructions (Hero, Nav, each section).
- P1: Z Assist plan calculator (client-side; exact inputs/pricing TBD).
- P1: Z Assist & RadSafe full page builds (3–4 major sections each).
- P2: Final copy, legal links, real team bios, real partner logos, testimonials content.
- P2: Final polish pass — animations, transitions, responsive refinements per spec.

## Next Tasks
- Receive logo/video assets + first component-specific instruction; implement hero/video swap first.
