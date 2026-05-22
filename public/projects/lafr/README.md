# LAFR — Project Page Bundle

Self-contained static page for the **LAFR** (Learning Agile Flight in the Real-world) project.
Drop this entire folder anywhere on a static HTTPS host and the page works
with no build step. Designed to be deployed as a subpath of
`https://renyunfan.github.io/` (i.e. `https://renyunfan.github.io/lafr/`).

## What's inside

```
lafr/
├── README.md                ← this file (not served)
├── .nojekyll                ← tells GitHub Pages to skip Jekyll
├── index.html               ← main landing page (title, abstract, pipeline,
│                              Rerun viewer, results table + chart, BibTeX,
│                              reproduce, acknowledgements)
├── pipeline-interactive.html← optional standalone view of just the pipeline
│                              diagram (handy for embedding elsewhere)
├── pipline-A.svg            ← Module A diagram (note: filename has the
│                              "pipline" typo on purpose; HTML references it)
├── pipeline-B.svg           ← Module B
├── pipeline-C.svg           ← Module C
├── pipeline-D.svg           ← Module D
├── pipeline-E.svg           ← Module E
├── pipeline-Continue.svg    ← Continual Learning loop
└── data/
    └── online_learning.rrd  ← Rerun recording streamed into the viewer (2.6 MB)
```

Total payload: ≈ 5 MB (≈ 2.6 MB recording + ≈ 2.4 MB vector graphics).
No build step, no dependencies — everything else (Tailwind, MathJax,
Rerun viewer) is loaded from public CDNs at runtime.

## Deploying to `renyunfan.github.io/lafr/`

1. Copy this `lafr/` folder into the root of your
   [`renyunfan.github.io`](https://github.com/RENyunfan/renyunfan.github.io)
   repository:
   ```bash
   cp -r lafr/  /path/to/renyunfan.github.io/
   ```
2. Commit and push:
   ```bash
   cd /path/to/renyunfan.github.io
   git add lafr/
   git commit -m "Publish LAFR project page"
   git push origin main
   ```
3. The user-site repo is already a GitHub Pages site, so no Pages
   configuration is needed. Within ~30 s the new page is live at:

   **<https://renyunfan.github.io/lafr/>**

4. Add a link from your personal index page (something like
   `<a href="/lafr/">LAFR · Learning Agile Flight in the Real-world</a>`)
   so visitors can discover it.

## What to verify after deployment

Open the URL in an incognito tab and check:

| ✓ | Item |
|---|---|
| Page layout | Pipeline diagram fills the section card, hovers/popups work, lap-time chart sits to the right of the iteration table. |
| Rerun status text | Reads `Streaming https://renyunfan.github.io/lafr/data/online_learning.rrd`. |
| Rerun iframe | Loads the recording within a few seconds, timeline scrub works. |
| LaTeX | `\(\alpha\)`, `\(\bm{\beta}\)`, etc. typeset correctly (MathJax SVG output). |
| Pill links | arXiv, Code (GitHub), YouTube open in new tabs. |
| BibTeX & reproduce copy buttons | Click → "Copied!". |
| DevTools Network | `online_learning.rrd` returns `200` and the six SVGs return `200`. |

## Maintenance

- **Swap the Rerun recording**: replace `data/online_learning.rrd` with a
  new recording of the same name. Nothing else to edit.
- **Re-tune the pipeline layout**: every module's `x`, `y`, and `scale`
  lives in one `:root` block at the top of `index.html`'s `<style>`.
  Search for "PIPELINE LAYOUT CONTROL PANEL".
- **Update the canvas zoom**: change the single line
  `--canvas-zoom: 1.235;` in the same control panel.
- **Update arXiv / YouTube / Code links**: search `index.html` for
  `arxiv.org/abs/`, `youtu.be/`, `github.com/RENyunfan/flightning`.

## Hosting requirements

Any HTTPS static host works (GitHub Pages, Netlify, Cloudflare Pages,
Vercel, S3+CloudFront). For the embedded Rerun viewer to fetch the
`.rrd`, the host must:

- Serve over HTTPS (`app.rerun.io` is HTTPS, so any HTTP origin fails
  with a mixed-content block).
- Return permissive CORS for the `.rrd` (every major static-page host
  does this by default).

The `.nojekyll` file is included specifically for GitHub Pages — without
it, Pages would run Jekyll over the folder and silently skip files whose
names start with `_`, which can break MathJax's chunked SVG cache files.

## Local preview

Open `lafr/` in any static HTTP server and visit `http://localhost:8000/`:

```bash
cd lafr
python3 -m http.server 8000
```

Note: app.rerun.io (HTTPS) cannot fetch the recording from
`http://localhost:…` due to mixed-content rules, so the embedded viewer
will stay empty in local HTTP preview. The diagram, popups, table,
chart, and styling all render correctly though. To preview the full
embedded viewer experience locally, run `rerun --serve-web` from the
project repo (see `flightning/tools/preview.sh`).
