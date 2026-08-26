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

## Implemented (2026-08-25, iteration 14 — RadSafe 6-Layer Technology section + responsiveness fix)
- New RadTech section (Hero → Tech → Benefits → How It Works → CTA): "Advanced 6-Layer Protection" with CSS 3D exploded chip view (six plates: resin gloss, gold quantum grid, dark neodymium with real chip photo on top plate, acrylic glass, gumming, paper-release white) + dashed RF field rings; numbered layer list right on desktop, vertical below visual on mobile. Exact layer names/order from supplied poster; no invented layers, no health claims.
- Bug fix: 27px horizontal overflow at 834px tablet width — traced to unbroken footer email link; fixed with break-all in Footer + RadCta (independently reviewed by troubleshoot_agent subagent, which caught the second instance).
- Verified: 0px horizontal overflow at 1920/1440/1024/834/768/390/360/320px on /radsafe; exploded view, layer list, all sections screenshot-checked per breakpoint.

## Update (2026-08-25, iteration 15 — researched layer descriptions)
- Rewrote the six layer one-liners after web research on anti-radiation chip construction: descriptions now describe each layer's actual physical/material role (resin = protective coating, quantum sheet = proprietary functional layer, neodymium = magnetic core, acrylic = rigid substrate, gumming = adhesive bond, paper release = peel-away backing). No health/outcome claims.

## Update (2026-08-25, iteration 16 — chip hover interaction)
- Exploded chip view now spreads its six layers further apart on hover (tap-toggle on touch) with a smooth 0.6s settle, caption switches between "hover to expand" / "release to settle"; entrance stagger preserved; stack re-centered in its frame. Verified rest + hover states and zero overflow.

## Implemented (2026-08-25, iteration 17 — combined final corrections)
- PayAssist hero: desktop bottom-crop fixed — video now height-driven (h=100svh−72px, w auto, max-w-full, object-contain), full 16:9 composition visible at 1920/1440; mobile treatment unchanged.
- RadSafe hero: product image replaced with supplied radsafe-film.mp4 (1280x720, 8s) + poster fallback, natural aspect in gold frame, no crop any viewport.
- RadSafe How It Works: box image replaced with supplied ad-poster.png (1122x1402) at natural ratio; cream frame matches poster background.
- Brands section: background changed to cool screen-tint #F1F6FC (fades matched), brand cards got visible hover (lift + blue border + deeper shadow).
- Global navbar: hides smoothly on scroll down (>96px, 6px delta hysteresis), returns on scroll up; wired to both window and Lenis scroll events; never hides while mobile menu open; entrance animation converted from framer to CSS (framer inline transform conflict resolved). Verified with real wheel input down/up.
- Independently verified by troubleshoot_agent (no testing_agent exists in this environment): all five corrections sound, zero overflow 320–2560px, no regressions.

## Implemented (2026-08-25, iteration 18 — final hero video correction)
- Hero video box is now mathematically true 16:9 at every breakpoint: width = min(100%, (100svh−72px)×16/9) on desktop, aspect-video + object-contain everywhere; measured ratio 1.7778 at 1920/1440/1366/1280/834/390 with the full frame inside the viewport and 0px overflow.
- Hero→Brands transition now aligns Brands exactly to viewport top (offset 0): measured heroBottom=0, brandsTop=0 after video end — no sliver, no bleed-through. Video restart-on-return logic intact (independently audited).

## Implemented (2026-08-25, iteration 19 — ZAssist Care dedicated page)
- /z-assist rebuilt as full product experience (components/zassist/): near-black #070B09 + ZAssist green #22B14C identity, official logo, supplied hero film (zassist-hero.mp4, 1280x720/10s, poster fallback) in a glow-framed 16:9 window.
- Sections: Hero (masked heading "Protection for the devices you depend on.", Explore Protection Plans CTA) → Why ZAssist (7 benefit cards from poster) → Plan Calculator (frontend-only: ADLD 10%/12%/15% band logic with 1/2yr toggle, Screen 9%, Extended 5%, copay max(₹599, 5%), INR en-IN formatting, ineligibility note >₹2.5L for ADLD, result panel with summary + mailto Get Protected with prefilled plan details) → Plan Details (10 covered / 6 keep-in-mind from poster) → Depreciation table (exact 15/30/50/60/75% rows + copay + 15-day cancellation notes) → Service Request (9006825043 tel, support@zassist.co.in, retailer/reimbursement notes, 3 required documents) → CTA to /#contact.
- Verified: full navigation flow from Our Solutions card; calculator outputs correct for every band (45000→₹4,500/10%, 75000→₹9,000/12%, 2yr→₹6,750/15%, screen ₹6,750/9%, extended ₹3,750/5%, ₹3L ADLD ineligible; copay 5% cases correct); desktop/tablet(834)/mobile(390) all clean with 0px horizontal overflow.

## Update (2026-08-25, iteration 20 — hero true full-bleed)
- Hero video is now edge-to-edge: desktop/laptop = full viewport width at native 16:9 (left:0→right:viewport, ratio exactly 1.7778 at 1366–2560px, zero side strips, zero overflow); mobile/tablet = full remaining viewport height with object-cover center focal crop (no distortion, no side panels). Removed the rounded/ringed container treatment entirely.
- Boundary re-verified after the change: heroBottom=0 / brandsTop=0 on video completion — no sliver behind Brands.

## Implemented (2026-08-25, iteration 21 — solution-page branding & navigation)
- Navbar and Footer now render only on the homepage (early return on other routes) — ZAssist/RadSafe are immersive, ending cleanly after their own CTA.
- Both solution heroes: pt-[72px] navbar offset removed (hero is the true page start), floating glass "← Back to PayAssist" pill added top-left (verified: returns home, navbar/footer restore), duplicate CTA-row back buttons removed.
- Logos: auto-trimmed white margins from both PNGs (radsafe-logo-tight.png, zassist-logo-tight.png) and bumped display sizes — RadSafe logo now clearly legible inside the same white tile; Solutions cards updated to tight versions too.
- Verified: /z-assist and /radsafe have no navbar/footer, pill navigates home, homepage navbar/footer intact, 0px mobile overflow.

## Update (2026-08-25, iteration 22 — plan-specific copayment correction)
- Calculator copay is now plan-specific: ADLD unchanged (max ₹599/5%), Screen Replacement = 3%, Extended Warranty = no copay (shows "Not Applicable"). Footnote text is now plan-specific too.
- Verified live: 50k → Screen ₹4,500+₹1,500; Extended ₹2,500+"Not Applicable"; ADLD ₹5,000+₹2,500 restored; no cross-plan leakage. Independently audited by troubleshoot_agent — sound, all edge cases pass.

## Implemented (2026-08-26, iteration 23 — ZAssist contact, head office, support hours, backend audit)
- Replaced closing CTA section with ZContact: "Contact Us" (phone tel:9006825043, email mailto:support@zassist.co.in, Support Hours Mon–Fri 10:00 AM–7:00 PM IST, closed public holidays) + Head Office card with real registered address (PayAssist, H.IN.KH.NO. 293, Western Marg Saidulajab, Near Kher Singh Estate, New Delhi – 110030, India), structured as easily-editable constants.
- "Customer Support 24 × 7" benefit card replaced with "Support Hours" card (same hours).
- Google Form audit: no Google Form/embed exists anywhere in the codebase (the empty src-less iframe seen in dev is the CRA error-overlay tool, not part of the app).
- Backend audit result: /app/backend KEPT intentionally — it powers the homepage contact form's email relay (/api/contact → managed Resend). Removing it would break the form's primary delivery path. Frontend fallbacks (FormSubmit/Web3Forms) remain as backups.
- Verified: contact section desktop/mobile, tel/mailto hrefs, zero overflow; calculator untouched and working.

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
