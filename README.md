# VidMedical

Studio site for **VidMedical** — short medical explainer videos for health practices (animated and clinician-on-camera), ready to post on social.

**Domain:** [vidmedical.com](https://vidmedical.com)  
**Email:** hello@vidmedical.com

## Stack

Same basic framework as the prior DesiFit build:

- **Astro** + **Tailwind CSS**
- **GitHub** for source
- **Cloudflare Pages** for hosting (planned)
- **Formsubmit.co** for the contact form → `hello@vidmedical.com`
- **Google Workspace** for branded email (`hello@vidmedical.com`)
- **Google Analytics 4** (`G-1ZKJXMZMG1`) + Search Console
- **Sitemap** at `/sitemap-index.xml` (via `@astrojs/sitemap`)

## Local development

```bash
npm install
npm run dev
```

Dev server defaults to **http://127.0.0.1:4721**.

```bash
npm run build
npm run preview
```

## Site map (v1)

| Path | Purpose |
| --- | --- |
| `/` | Brand homepage |
| `/packages` | Single / Core (4) / Growth (8) anchors — interactive builder next |
| `/about` | Studio brand (no personal founder page) |
| `/contact` | Email intake via Formsubmit |

## Notes

- Payments: Payoneer invoice / payment link (not Stripe on launch).
- Retainers: prepaid month, non-refundable; cancel stops next cycle.
- Product: videos only for v1 (client or their VA posts).
