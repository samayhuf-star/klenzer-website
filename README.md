# klenzer-website

All-apps site for klenzer.online (GitHub Pages). Home, one page per app, and shared legal pages are generated from `tools/apps.mjs`.

To add or edit an app: change `tools/apps.mjs`, then run `node tools/gen.mjs .` from the repo root and commit the result. Styles live in `s/apps.css`.

`/klenzer-app/` is a separate prebuilt site and is not touched by the generator.

`/klenzer/` redirects to `/klenzer-app/` (the prebuilt marketing site). `/riseful/` redirects to `/alarm-klock/`. GitHub Pages cannot send an HTTP 301, so these are HTML/JS redirects with a canonical tag.

After editing `tools/apps.mjs` or legal copy in `tools/gen.mjs`, run:

```
node tools/gen.mjs .
node tools/guides.mjs .
```

then commit the generated HTML.
