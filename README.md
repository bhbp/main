# Bill Hayes — portfolio site

Static site for GitHub Pages. No build step.

## Rooms and URLs
- / — Entrance
- /about/ — About (also /#about)
- /what-drives-me/ — What drives me (also /#what-drives-me)
- /career/ — Career (also /#career)
- /range-of-work/ — Range of work (also /#range-of-work)
- /project-01/ — Project 01 (also /#project-01)
- /project-02/ — Project 02 (also /#project-02)
- /project-03/ — Project 03 (also /#project-03)
- /project-04/ — Project 04 (also /#project-04)
- /project-05/ — Project 05 (also /#project-05)
- /project-06/ — Project 06 (also /#project-06)
- /project-07/ — Project 07 (also /#project-07)
- /industries/ — Industries (also /#industries)
- /brands/ — Brands (also /#brands)
- /skillset/ — Skillset (also /#skillset)
- /in-their-words/ — In their words (also /#in-their-words)
- /whats-next/ — What's next (also /#whats-next)

## Deploy
1. Create a repo (e.g. `billhayes.github.io` or `portfolio`).
2. Upload everything in this folder to the repo root, including the hidden files `.nojekyll` and `.image-slots.state.json`.
3. Settings → Pages → Source: "Deploy from a branch", branch `main`, folder `/ (root)`.
4. Optional custom domain: add a `CNAME` file containing your domain.

Images: dropped images are exported as real files in `assets/slots/` and referenced directly from `index.html`. Icons are bundled locally in `icons/` (no CDN needed).

No files start with "_" or ".", so the site works even if GitHub runs Jekyll. `.nojekyll` is still included as a safeguard.
