# renyunfan.github.io

Personal academic website built with [Astro](https://astro.build/) and deployed to GitHub Pages.

## Edit content

Markdown lives in `src/content/`:

- `news/` — homepage news feed
- `people/` — lab members (group: `faculty | phd-master | visiting-researcher | undergraduate-intern`)
- `profile/admin.md` — bio, social links, recruiting notice
- `projects/` — Projects page cards (category: `published | student-project`)
- `publications/` — Publications page entries

Static assets live in `public/`:

- `images/` — site images (avatar, logos)
- `papers/` — paper PDFs (`/papers/<file>.pdf`)
- `people/` — member photos (`/people/<slug>.jpg`)
- `projects/<slug>/` — self-contained project subpages (e.g. `public/projects/lafr/index.html` → `/projects/lafr/index.html`)
- `content-assets/` — per-entry images and `cite.bib` for publications

## Commands

```bash
npm install
npm run dev      # local dev server (http://localhost:4321)
npm run build    # static build → astro-dist/
npm run check    # type / schema check
```

`npm run dev` and `npm run build` run `scripts/optimize-images.mjs` first, which generates resized `.webp` variants for everything in `public/` under `public/_optimized/`.

## Deploy

Pushing to `master` triggers `.github/workflows/deploy.yml`, which builds with `npm run build` and publishes `astro-dist/` to GitHub Pages.

In repo Settings → Pages, **Source** must be set to **GitHub Actions**.

## Adding a publication

Drop the BibTeX (and optionally a `featured.png`) into `public/content-assets/publications/<slug>/`, then create `src/content/publications/<slug>.md` with the same slug. Reference assets at `/content-assets/publications/<slug>/...`.

## Adding a project subpage

Drop a self-contained static bundle (anything with an `index.html` using relative paths) into `public/projects/<slug>/`. Create `src/content/projects/<slug>.md` with `image: /projects/<slug>/feature.png` and a link with `url: /projects/<slug>/index.html`. The card appears on the Projects index automatically.
