# ZZ Details — Website

A custom-built single-page website for **ZZ Details**, a ceramic coating and paint correction business based in Prestons, Sydney. Built with vanilla HTML, CSS, and JavaScript - no frameworks, no build tools, no monthly platform fees.

---

## Project Overview

| Detail | Info |
|---|---|
| Client | ZZ Details |
| Location | Prestons, Sydney NSW |
| Live URL | [zzdetails.com](https://zzdetails.com) (pending domain connection) |
| Staging URL | [zzdetails.netlify.app](https://zzdetails.netlify.app) |
| Hosting | Netlify (free tier) |
| Deployment | Auto-deploy from GitHub via Netlify |

---

## Tech Stack

- **HTML5** — semantic single-page structure + two product sub-pages
- **CSS3** — split into 14 organised partial files, imported via `main.css`
- **Vanilla JavaScript** — scroll animations, mobile nav, sticky call button, form handling
- **Google Fonts** — Bebas Neue, Barlow, Barlow Condensed
- **Netlify** — hosting and continuous deployment

---

## Folder Structure

```
zzdetails-website/
├── index.html                  ← Main single-page site
├── main.js                     ← JavaScript (nav, animations, form)
│
├── pages/
│   ├── brand-new-package.html  ← Brand New Car Package product page
│   └── full-correction.html   ← Full Correction & Coating product page
│
└── assets/
    ├── css/
    │   ├── main.css            ← Imports all partials
    │   ├── base.css            ← Variables, reset, buttons, typography
    │   ├── nav.css             ← Navigation bar
    │   ├── hero.css            ← Hero section
    │   ├── why.css             ← Why ZZ Details + dealer comparison
    │   ├── credentials.css     ← Magnum Ceramic Coating section
    │   ├── packages.css        ← Package preview cards + loyalty banner
    │   ├── gallery.css         ← Video gallery
    │   ├── process.css         ← How It Works (flip card steps)
    │   ├── area.css            ← Service area
    │   ├── contact.css         ← Contact section + quote form
    │   ├── footer.css          ← Footer + sticky call button
    │   ├── mobile.css          ← All responsive/mobile rules
    │   └── animations.css      ← Scroll fade-in animations
    │
    ├── images/
    │   ├── Logo-hd-icon-glow.png    ← Nav logo (pine-glow, transparent bg)
    │   ├── Logo-hd-full-glow.png    ← Footer logo (pine-glow, transparent bg)
    │   ├── Logo-hd-icon.png         ← Dark green icon version
    │   ├── Logo-hd-full.png         ← Dark green full version
    │   └── MagnumCCLogo.jpg         ← Magnum Ceramic Coating logo
    │
    ├── videos/
    │   ├── ZZDetail-whiteholden-clean.mov      ← Hero background video
    │   ├── Magnum-coat-explain.MP4             ← Credentials: explainer video
    │   ├── Mangum-vs-knownbrand-waterdrip.MP4  ← Credentials: comparison video
    │   └── Waterdrip-off-car-hood.MP4          ← Credentials: hydrophobic demo
    │
    └── favicon/
        ├── favicon.ico
        ├── favicon-32x32.png
        ├── favicon-16x16.png
        └── apple-touch-icon.png
```

---

## Sections (index.html)

| Section | ID | Description |
|---|---|---|
| Nav | — | Fixed nav with logo, links, mobile hamburger |
| Hero | `#home` | Looping video background, headline, stats bar |
| Why ZZ Details | `#why` | USPs, dealer vs ZZ Details comparison table |
| Credentials | `#credentials` | Magnum Ceramic Coating accreditation + videos |
| Packages | `#packages` | Two preview cards linking to product pages |
| Gallery | `#gallery` | Video gallery of work |
| How It Works | `#process` | 4-step process with flip-card hover animation |
| Service Area | `#area` | Prestons garage + mobile service |
| Contact | `#contact` | Contact info + quote request form |
| Footer | — | Logo, copyright, nav links, Instagram |

---

## Product Pages (pages/)

Each package has a dedicated product page with:
- Image gallery (placeholder — awaiting real photos)
- Vehicle size selector (Sedan, SUV, Ute)
- Warranty selector (5, 7, 10 year)
- Full inclusions list
- "Book Now" CTA (currently links to `#contact` — update to calendar URL when ready)
- About the package + process breakdown
- Links back to main site

---

## Branding

| Element | Value |
|---|---|
| Primary colour | Pine Glow `#4caf80` |
| Dark background | `#0d1a12` |
| Gold accent | `#c9a84c` |
| Display font | Bebas Neue |
| Body font | Barlow / Barlow Condensed |
| Coating brand | Magnum Ceramic Coating (Australian made, accredited applicator) |

---

## Outstanding Items (pre-launch)

- [ ] Connect `zzdetails.com` domain (pending Squarespace account access — contact support@squarespace.com)
- [ ] Update ABN in footer (currently shows "ABN TBC")
- [ ] Add real before/after photos to gallery cards
- [ ] Add real photos to product page image galleries
- [ ] Update "Book Now" button with Calendly (or other calendar) link
- [ ] Add About Us bio and photo in uniform
- [ ] Update loyalty program discount percentage
- [ ] Add `og:image` meta tag once a good photo is available
- [ ] Google Business Profile (client's marketing team handling)

---

## Deployment

The site auto-deploys to Netlify whenever changes are pushed to the `main` branch on GitHub.

**To update the site:**
1. Make changes locally in VS Code
2. Commit and push to GitHub
3. Netlify detects the push and redeploys automatically (usually within 30 seconds)

**To connect the custom domain (`zzdetails.com`):**

See the separate `ZZDetails-Domain-Deployment-Guide.docx` for step-by-step instructions.

Short version:
1. Log into Squarespace Domains with `zzdetails.com@zzdetails.com`
2. Go to DNS Settings for `zzdetails.com`
3. Add A record → Host: `@` → Value: `75.2.60.5`
4. Add CNAME record → Host: `www` → Value: `zzdetails.netlify.app`
5. Wait for propagation (10 min – 24 hrs)
6. Netlify will automatically provision SSL once verified

---

## Contact & Business Details

| Field | Value |
|---|---|
| Business name | ZZ Details |
| Phone | 0433 782 233 |
| Email | admin@zzdetails.com |
| Instagram | @zz.details |
| Location | Prestons, Sydney NSW |
| Hours | Monday – Sunday, 9am – 6pm |
| ABN | TBC |

---

## Developer Notes

- All CSS is split into partials under `assets/css/` — edit the relevant partial, not `main.css` (which is imports only)
- Product pages use relative paths (`../assets/css/main.css`) to reference shared styles
- Videos autoplay muted and loop for background use; the Magnum explainer video has controls enabled so users can unmute
- Logo files were processed from client-supplied JPEGs — white background removed and recoloured to pine-glow green using Python/PIL
- Favicon generated from the ZZ Details icon logo at 16×16, 32×32, and 180×180 (Apple touch icon)