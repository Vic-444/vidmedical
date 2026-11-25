# VidMedical — Director's Desk handoff

**Desk name:** VidMedical - Director's Desk  
**Repo:** `Vic-444/vidmedical` (GitHub App — no PAT)  
**Production:** Cloudflare Pages ← this repo. Do **not** use Cursor Publish App for the live site.  
**Old desk:** keep for archive/history; no need to close yet.

## Roles

- **Director:** Waqar (Dr. Waqar · Production Lead on client-facing email)  
- **General Manager (this agent):** hands-on daily ops across strategy, clients, marketing, site, and systems — full Director’s Desk remit

## Role of this desk

One director desk for VidMedical: strategy, site, systems, and **MP Phase 1 outbound**. Not separate PP/MP rooms. Not Upwork freelance (that stays on Upwork desks).

## What’s already live

- Lander + About + thanks at https://vidmedical.com  
- Essential + Advanced YouTube showreels embedded  
- Logo lockup (Option B play+pulse)  
- Copy: physician-led QA, 24h reply, TAT in FAQ only, softer refunds + two revisions  
- Verified client feedback (3 role-labeled quotes)  
- CTAs: single-video under pricing; See pricing + Start with a single video on About  
- Equal-height pricing cards, one bottom CTA each  

## MP Phase 1 (next work)

Ops pack already in repo:

- `docs/mp-phase1.md` — beachhead, cadence, rules  
- `docs/mp-phase1-tracker.csv` — sheet headers  
- `docs/mp-phase1-emails.md` — Track 1 + FU1/FU2  

**Mode:** AI drafts; **Waqar sends**. Plain text, one link (vidmedical.com), soft single-video ask. Sign-off: Dr. Waqar · Production Lead · VidMedical Studio.

Beachhead: cosmetic/implant dentistry; US/UK/CA/AU/UAE; already posting weak talking-head Reels; skip DSOs / no video.

## Strategy source

- `docs/vidmedical-strategy.html` — refresh with current CP/PP/MP locks early on this desk  
- Site “we”; email/Payoneer use real name + Dr. for QA signal  

## Play by the rules (standing GM duty)

Director is non-technical and wants clean, rules-respecting ops — not gray-hat growth. **Before any step that could harm PC, home IP, Google/Workspace standing, social accounts, domain reputation, or legal/ToS posture, the GM must flag the risk in plain language and wait for a clear go.**

Examples to warn on (non-exhaustive): scrapers/automation farms · mass follow/like/DM tools · stuffing links into brand-new social bios · bought lists/followers · high-volume or misleading cold email · fake accounts / CAPTCHA farms.

Default bar: if a careful small-studio human would do it slowly and honestly → OK. If it needs bots, volume tricks, or hiding who we are → don’t.

Lesson already logged: early Instagram bio link likely contributed to new-account bot flags — YT website in blurb is fine; remake IG later without day-one promo links.

## Pre-flight leftovers (not blockers for desk open)

- Payoneer invoice path test (still worth doing before email #1)  
- Studio Instagram: parked (account lost to platform bots; not required for Phase 1). Personal IG may be used **view-only** for research; no clinic DMs as VidMedical. Fresh studio IG only when needed later.

## Environment / MCP expectations

- Saved Cloud Agent environment + green Build for this repo (stops save-environment loops)  
- Google Workspace MCP for `hello@vidmedical.com`: Gmail, Drive, Calendar — **Cloud** auth locked (Marketplace plugins; not Local-only)  
- Do not ask the agent to “publish app” / “deploy as Cursor app”

## First message seed (paste on new desk)

> You are **General Manager** on **VidMedical - Director's Desk**; I am the Director. Read `docs/directors-desk-handoff.md` and `docs/mp-phase1.md`. Your remit is hands-on daily ops across strategy, clients, marketing, site, and systems. Production is GitHub → Cloudflare — never Cursor Publish App. Confirm repo wiring (no PAT), then help me lock Workspace MCP before Phase 1 outbound.
