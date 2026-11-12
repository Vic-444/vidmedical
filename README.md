# VidMedical

Studio site for **VidMedical** — short medical explainer videos for health practices (animated and clinician-on-camera), ready to post on social.

**Domain:** [vidmedical.com](https://vidmedical.com)  
**Email:** hello@vidmedical.com

## Stack

Same basic framework as the prior DesiFit build:

- **Astro** + **Tailwind CSS**
- **GitHub** for source
- **Cloudflare Pages** for hosting (planned)
- **Web3Forms** for the contact form → `hello@vidmedical.com` (Formsubmit retired after multi-day outage)
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
| `/` | Main sales lander — offer, Essential/Advanced pricing, process, FAQ, start form |
| `/packages` | Redirects to `/#pricing` |
| `/about` | Studio brand (no personal founder page) |
| `/contact` | Redirects to `/#start` |
| `/thanks` | Post-submit confirmation |

## Notes

- Pricing: Essential $67 · Advanced $199 · script add-ons $30 / $50 · 10% off 5+ videos.
- Payments: Payoneer invoice after scope lock (not Stripe on launch).
- No refunds once in production; start with one video.
- Product: ready-to-post 9:16 videos (client or their VA posts).
