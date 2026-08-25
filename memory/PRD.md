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
- Marquee polish: Havells = navy "HAVELLS" wordmark, O General = red "O GENERAL" wordmark, sequence reordered for balanced color rhythm (no brand changes).

## Implemented (2026-08-25, iteration 4 — Why PayAssist section)
- Rebuilt id="why" per reference: deep navy background with subtle flowing SVG wave texture + faint brand glows; centered WHY PAYASSIST pill label, exact heading ("Technology is everywhere. Protection should be too.") and exact supporting copy.
- Exactly six white cards in 2-col × 3-row on desktop (single column on mobile), horizontal icon+text composition, lucide outline icons in soft-blue containers (invert to PayAssist blue on hover), subtle lift/border/glow micro-interactions, exact supplied card copy.
- Verified desktop/tablet/mobile renders — no overflow, readable at all sizes.

## Implemented (2026-08-25, iteration 5 — Our Solutions section)
- Page order corrected: Hero → Brands → Why PayAssist → Our Solutions → Our Approach.
- Rebuilt id="solutions" per reference: white section, centered "Our Solutions" + "Two Verticals. One Purpose. Protection." (no pill label), two large dark clickable cards linking to /z-assist and /radsafe.
- Cards match reference composition: white logo tile top-left (official zassist-logo.png / radsafe-logo.png, downloaded to /public/assets), category pill top-right (green DEVICE PROTECTION / gold RESPONSIBLE USAGE), big white heading, description, bottom-left colored CTA with arrow micro-motion; hover = lift + glow brighten + arrow shift.
- Verified: desktop side-by-side matches reference, mobile stacks vertically with single-line pills, card click navigates to /z-assist and back.

## Implemented (2026-08-25, iteration 6 — Our Approach section)
- Rebuilt id="approach" as compact dark "visual chapter": navy-950 with faint grid + soft brand glow; centered OUR APPROACH pill, "Our Approach" heading, mono "Understand → Build → Support" line.
- Three-stage connected journey: desktop = horizontal glowing beam that draws left→right with nodes igniting sequentially (01 Understand, 02 Build, 03 Support, staggered reveal); mobile = vertical sequence with animated gradient connectors. Exact supplied copy, no extra text.
- Subtle ecosystem tie-in: footnote badges "Z Assist · Device Protection" (green) and "RadSafe · Responsible Usage" (gold).
- Verified desktop beam/node animation end-state and mobile vertical layout — compact, no overflow.

## Implemented (2026-08-25, iteration 7 — Testimonials / Trust section)
- About/People section removed from homepage per instruction: flow is now Hero → Brands → Why PayAssist → Our Solutions → Our Approach → Testimonials → Contact. Nav center link "About" retargeted to "Trust" (#testimonials); footer "Team" link likewise.
- Rebuilt id="testimonials" on white: TRUST pill, "Trusted by People. Built for Real Life." + exact supporting line; 6 clean white cards (quote mark, neutral no-star/no-verified presentation, initials avatar, name, descriptor, understated Z Assist/RadSafe dot-label).
- Profiles: Priya Sharma (Z Assist), Ramesh Sharma (RadSafe), Meera Krishnan (retail partner), Pramod Kumar Singh (Z Assist AC service), Ananya Iyer (RadSafe), Vikram Malhotra (Z Assist laptop) — all flagged on-page as illustrative placeholders pending approved customer stories.
- Verified desktop 3-col and mobile single-column renders; about section confirmed removed.

## Implemented (2026-08-25, iteration 8 — Contact section)
- Rebuilt id="contact" as distinctive graphite section (#14181F, steel-blue ambient glows): two-column desktop (headline "Let's Build a More Protected Future." + supporting copy + clickable mailto card support.zassistcare@payassist.in | white form card), stacked mobile.
- Functional form: Name/Email/Phone/Company/Interest dropdown (Z Assist, RadSafe, Partnership, General Enquiry, Other)/Message; custom inline validation (no browser popups); Sending…/success/error states; honeypot; submits to Web3Forms API with subject "New PayAssist Website Enquiry", from_name "PayAssist Website", visitor email as Reply-To.
- Web3Forms access key stored in REACT_APP_WEB3FORMS_ACCESS_KEY (/app/frontend/.env). Footer email corrected to support.zassistcare@payassist.in.
- PENDING VERIFICATION: end-to-end email delivery could NOT be verified from this preview pod — Cloudflare issues a managed challenge for datacenter IPs at api.web3forms.com (blocks both the headless browser and curl; normal visitor browsers are unaffected). User also had not yet confirmed the Web3Forms mailbox verification email at time of build. Action needed: verify mailbox + send one test from a normal browser.

## Update (2026-08-25, iteration 9 — Contact delivery switched to FormSubmit)
- Web3Forms failed for the user too (key never activated — verification email not received) and its API Cloudflare-challenges datacenter IPs, so delivery was switched to FormSubmit AJAX endpoint (https://formsubmit.co/ajax/support.zassistcare@payassist.in) — no API key required; first submission triggers an "Activate Form" email to the mailbox.
- Confirmed from the real browser: request reaches FormSubmit with HTTP 200 and correct payload (_subject "New PayAssist Website Enquiry", _replyto = visitor email, _template table). API response: "This form needs Activation" — activation email has been sent to support.zassistcare@payassist.in.
- REMAINING USER STEP: click the "Activate Form" link in the FormSubmit email (check spam). Until then the form honestly shows the error state; after activation, submissions deliver and the success state appears. Web3Forms key removed from .env.

## Update (2026-08-25, iteration 10 — Dual-path contact delivery, VERIFIED)
- Form now submits via Web3Forms first (new key 9c0e17c1-… in REACT_APP_WEB3FORMS_ACCESS_KEY), with automatic silent fallback to FormSubmit if Web3Forms fails/is unreachable. No duplicate sends — fallback only fires on failure.
- VERIFIED WORKING: full UI submission test showed the success state; FormSubmit probe returned "The form was submitted successfully" — the mailbox is activated and a real test enquiry ("Dual-path delivery test", RadSafe interest) was delivered to support.zassistcare@payassist.in.
- Note: api.web3forms.com remains Cloudflare-challenged from this preview pod's IP, so the primary path can't be exercised here — but the fallback guarantees delivery regardless, and Web3Forms will serve visitors on networks where it's reachable.

## Update (2026-08-25, iteration 11 — delivery order swapped after user-reported failure)
- User reported error when submitting with nishantgaurav2208@gmail.com (Web3Forms-primary path). Root cause on user network undetermined (likely browser extension/ad-blocker blocking api.web3forms.com, since pod-side reproduction with the same email succeeded via fallback).
- Delivery order swapped: FormSubmit (proven activated, delivered test email user received) is now PRIMARY; Web3Forms (key 9c0e17c1-…) is the automatic fallback. Errors logged to console for future diagnosis.
- Re-verified via UI with the user's exact Gmail address: success state, delivery confirmed.

## Update (2026-08-25, iteration 12 — bulletproof same-origin relay via managed Resend)
- User still saw errors from their browser (both third-party services blocked on their network — likely ad-blocker/localhost context). FormSubmit also proved inconsistent server-side (activation heuristics flip per request fingerprint).
- Final architecture: POST /api/contact on the existing template backend relays via Emergent-managed Resend proxy (EMERGENT_EMAIL_KEY + EMAIL_FROM_NAME="PayAssist" in backend/.env; httpx added). Fixed recipient support.zassistcare@payassist.in, fixed subject, server-side escaped HTML template, visitor email as Reply-To, honeypot + 5/hour per-IP rate limit. Frontend tries relay → direct FormSubmit → Web3Forms as layered fallbacks; error banner shows per-path technical detail.
- VERIFIED: curl to /api/contact → {"success":true}; full UI submission with user's Gmail → success screen. Works identically on localhost/preview/any network since it goes to the site's own domain.

## Implemented (2026-08-25, iteration 13 — RadSafe dedicated solution page)
- /radsafe rebuilt as full product page (components/radsafe/): navy + champagne-gold (#C2A15C/#D8BC7F) identity derived from the RadSafe logo, warm ivory (#FAF8F2) benefits section; PayAssist typography/system preserved.
- Sections: Hero (white logo tile, "A PayAssist Solution Vertical" pill, masked heading "RadSafe / Anti-Radiation Chip", "Smart protection for your everyday smartphone use.", Explore Benefits scroll CTA + Back to PayAssist, framed phone+chip product visual with gold glow); Benefits (6 safe claims only: no charging/batteries, effortless application, compact/discreet, everyday connectivity, made for daily use, independently lab-tested + CE — plus "not a medical device" disclaimer strip); How It Works (Peel/Place/Go numbered steps + box packaging visual, "Stick it. Forget it."); CTA → navigates to /#contact + mailto support.zassistcare@payassist.in.
- Assets: user-supplied RadSafe imagery in /public/assets/radsafe/ (phone-chip.jpeg cropped from poster, box-front.jpeg cropped from packaging render); poster health claims deliberately NOT reproduced.
- Verified: real user flow Our Solutions → RadSafe card → /radsafe; desktop hero/benefits/how-it-works; mobile (390px) all sections stack cleanly with no overflow.

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
