# Some Dose — website

A static Astro site for Some Dose Coffee (Turners Cross, Cork Opera House, and
Hanleys on Frankfield Road). Content is stored as JSON files under
`src/content/` and editable either directly in code or through a visual admin
at `/admin`.

## Stack

- **Astro** (static output, no client framework) — HTML/CSS/vanilla TS only.
- **Content collections** (`src/content/`) as the data layer — also what the
  CMS admin reads and writes.
- **Decap CMS** (`public/admin/`) — a free, git-backed CMS UI. No database,
  no server: it commits straight to this repo.
- Self-hosted fonts (Fraunces, Caveat, Space Mono) in `public/fonts/`.
- Photos in `src/assets/photos/` — processed automatically by Astro's image
  pipeline (AVIF/WebP, responsive `srcset`).

## Editing content

### Option A — edit the JSON files directly

- `src/content/settings/general.json` — business name, tagline, email, socials.
- `src/content/locations/*.json` — the three locations (Opera House, Turners
  Cross, Hanleys). `weight` controls display order (1 = shown first/biggest).
- `src/content/menuCategories/*.json` — menu categories and items/prices.
- `src/content/timeline/*.json` — the "our story" chapters. Leave `image`
  blank to show the wave badge instead of a photo.

Commit the change, push, redeploy. Any git-based host will pick it up.

### Option B — the visual admin at `/admin`

Non-technical edits (hours, a price, a blurb) take under a minute:

1. Deploy this site to **Netlify** (any static host works for the site
   itself, but the CMS admin's zero-config login only works with Netlify).
2. In the Netlify dashboard: **Site configuration → Identity → Enable
   Identity**, then **Services → Git Gateway → Enable Git Gateway**.
3. Invite the site owner as an Identity user (Identity tab → Invite user).
4. They log in at `yoursite.com/admin`, edit hours/prices/copy in a form,
   and hit Publish — it commits straight to this repo and redeploys.

No database, no separate CMS hosting bill. `public/admin/config.yml` defines
what's editable; it maps directly to the content collections above. New
photos dropped into `src/assets/photos/` need a developer to add them (the
CMS lets editors *choose* among existing photos per location/chapter, not
upload arbitrary new ones into the optimized image pipeline).

## Development

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs to dist/
npm run preview   # serve the production build locally
```

## Where things live

- `src/components/` — one file per section (Hero, Story, Menu, Locations,
  Gallery, HoursContact, Footer) plus `ornaments/` for the hand-drawn SVG
  wave divider, underline mark, wave badge/seal, and wave mark logo.
- `src/styles/tokens.css` — every design token (colour, type scale, spacing,
  easing curves) as CSS custom properties. Change the palette or scale here.
- `src/scripts/reveal.ts` — the scroll-reveal system (IntersectionObserver,
  respects `prefers-reduced-motion`).

## Notes on the content

Menu prices are estimates sourced from public listings, not a confirmed
price list from the owner — flagged as such on the page. Opera House and
Hanleys hours are described qualitatively (foyer/stockist hours) rather than
invented, since no fixed hours for those two locations were supplied.
