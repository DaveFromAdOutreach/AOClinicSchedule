# AdOutreach Design System

**AdOutreach** is a video-advertising marketing company — "The #1 Authority For Attracting Clients Through YouTube Ads & Video Marketing." Founded and led by **Aleric Heck** (started on YouTube 15+ years ago with AppFind, 585k+ subscribers), AdOutreach helps entrepreneurs, coaches and consultants generate leads and sales through value-driven video marketing and YouTube Ads. 8-figure company, 3× INC 5000 (60th fastest-growing company in America), ClickFunnels 2CommaClub-X award.

**Offerings** (from adoutreach.com):
- **Foundations** — program building offer/authority foundations for coaches & consultants
- **Video Ads Launchpad** — hybrid done-with-you / done-for-you YouTube Ads program
- **Ad Astra Mastermind** — scaling community for 7–8-figure industry leaders
- **Products**: YouTube Ads Kit, Omnipresent Retargeting System, Dynamic Funnel Blueprint, YouTube Channel Cheat Code
- **Media**: Marketing Minds podcast (Aleric Heck), blog, Facebook groups

## Sources

- Website: https://adoutreach.com/ (homepage + about; Elementor/WordPress site by Influex) — copy, structure and colors were taken from here. **Raw CSS/asset files were not downloadable from this environment**, so exact font names and site SVG assets could not be pulled; see Caveats.
- `uploads/AdOutreach Logo.png` — official logo (transparent PNG, 1001×211). Colors sampled from it.
- `uploads/Headshot_Aleric.JPG` — official headshot of Aleric Heck (CEO).
- No Figma, codebase, or slide decks were provided.

## Content fundamentals

**Voice**: confident, superlative, direct-response marketing. Speaks *to* the reader ("you/your") and as "we" for the company. Sells outcomes, not features.

- Authority claims: "The #1 Authority", "undisputed industry leaders", "we've cracked the code"
- Outcome-first: "reduce your ad costs, 10x your return on ad spend, or exponentially grow your revenue"
- Hand-holding assurance: "we **take you by the hand**", "our **exact blueprint**", "we'll support you every step of the way"
- Suspense ellipses: "If you're tired of diminishing results with yesterday's strategies… we'll support you every step of the way."
- Alliterative triads: "Converts. Captivates. Connects."
- Numbers as figures: "8-figure", "multiple 9 figures", "$100k month", "585k+ subscribers", "10x"
- **Bold inline emphasis** on key value phrases within body copy
- Headings: Title Case ("Master Your Video Marketing", "Thousands of Client Success Stories…")
- Buttons: short imperatives, rendered UPPERCASE ("APPLY NOW", "SCHEDULE YOUR CALL NOW", "WATCH VIDEO", "READ MY STORY")
- Testimonials everywhere: quote + first name (sometimes lowercase, e.g. "leslie") + headshot; headlines quote the result ("My First $100k Month!")
- Emoji: essentially none in UI copy (a rare 🚀 in blog titles only)
- Space motif in naming: "Ad Astra Mastermind", rocket-ship logo, "launch & scale"

## Visual foundations

- **Palette**: deep navy `#002435` + white, energized by a lime→teal gradient (`#62F107` → `#00A7B2`, running bottom-left → top-right as in the logo mark). Gradient is used for: CTA buttons, accent/highlight words in headlines, decorative polygon shapes, icon backgrounds. Navy is never pure black; neutrals are navy-tinted cool grays.
- **Sections**: white sections alternating with full-bleed deep-navy sections (dark hero, dark CTA bands). Dark sections use white headings, lime/gradient accent words, and `--text-inverse-muted` body copy.
- **Type**: one family (Poppins — see substitution note), big bold headings (700/800) with tight leading and slight negative tracking; regular 400 body at generous 1.65 line-height. Gradient-filled text (background-clip) for 1–2 accent words inside big headlines.
- **Buttons**: pill-shaped (999px), uppercase, bold, letter-spaced; primary = brand gradient with soft lime/teal glow shadow; hover = slight lift + stronger glow.
- **Cards**: white, large radius (20–28px), soft diffuse navy-tinted shadows, no borders on white; on dark sections cards use `--surface-dark-raised` with subtle white borders.
- **Imagery**: real photography of Aleric/team/clients (warm, well-lit, studio or event shots), circular avatar crops for testimonials, press/client logo strips in monochrome. No illustration style beyond the logo's space motif.
- **Decoration**: gradient triangle/polygon shapes echoing the logo mark; 4-point star sparkles; rocket + dotted flight-path motif. Used sparingly at section edges.
- **Motion**: modest — fade/slide-in on scroll, rotating headline words in hero (Converts/Captivates/Connects), hover lift on cards/buttons. Ease-out curves, 150–450ms.
- **Hover**: buttons lift 2px + glow; links shift teal; cards lift with deeper shadow.
- **Borders**: rarely used on white (shadows carry elevation); 1px `rgba(255,255,255,.14)` on dark.
- **Radii**: friendly and generous — pills for buttons, 20–28px for cards, 12px for inputs.
- **Transparency/blur**: not a motif; surfaces are opaque.

## Iconography

- The site uses **custom PNG/SVG icons** (circular gradient-background icons for section markers — message bubble, microphone, pen; bold rounded-square social buttons for YouTube/Messenger/LinkedIn/Pinterest; SVG burger menu). **These could not be downloaded from this environment** — flagged in Caveats.
- **Substitute**: [Lucide](https://lucide.dev) via CDN — rounded, 2px-stroke icons match the brand's friendly geometry. Use `stroke-width: 2.25` at 20–24px, colored `--color-navy-900` on light / white on dark, or set in a gradient circle for section markers (see `components/marketing/`).
- No icon font, no emoji-as-icons, no unicode glyph icons.
- Logo assets in `assets/logo/`: full-color on light (`adoutreach-logo.png`), white-wordmark for dark surfaces (`adoutreach-logo-white.png`, derived), mark only (`adoutreach-mark.png`, derived crop). Never redraw the mark; always use these files.

## Index

- `styles.css` — global entry; imports everything in `tokens/`
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `effects.css`, `base.css`
- `assets/logo/` — logo variants (see Iconography); `assets/photos/aleric-heck.jpg`; `assets/fonts/` — Poppins woff2
- `guidelines/cards/` — foundation specimen cards (Design System tab)
- `components/` — React primitives: `forms/` (Button, IconButton, Input, Select, Checkbox, Radio, Switch), `display/` (Card, Badge, Tag), `navigation/` (Tabs), `feedback/` (Dialog, Toast, Tooltip), `marketing/` (SectionHeading, TestimonialCard, ProgramCard, LogoStrip)
- `ui_kits/website/` — adoutreach.com marketing-site recreation (interactive, multi-page)
- `templates/` — (reserved for deck/doc templates)
- `SKILL.md` — agent skill entry point

**Intentional additions** (no component source existed, so a standard set was authored): the `forms/display/navigation/feedback` primitives above, plus `marketing/` patterns that recur on the real site (section headings with gradient accent words, testimonial cards, program cards, logo strips). Semantic status colors (warning/danger) are pragmatic defaults harmonized to the palette — the site itself only exhibits navy/teal/lime.

## Caveats / substitutions

1. **Fonts**: exact brand font unverified (site CSS not reachable). The wordmark and site headings closely match **Poppins** (single-story 'a', geometric 'O'); Poppins woff2 (300–800) is bundled. → Provide official font files/names to replace.
2. **Site SVG/PNG assets** (social buttons, section icons, gradient polygons, rocket flight-path, press & client logos, favicon) could not be downloaded. UI kit uses Lucide + CSS recreations as placeholders. → Provide exports to swap in.
3. Photography beyond the one headshot is unavailable; UI kit uses neutral placeholders where the site shows client photos/video stills.
