# Amit Gautam — Portfolio

A static, single-page portfolio site generated from the résumé, built with
plain HTML/CSS/JS (no build step, no framework, no dependencies).

## Structure

```
.
├── index.html          # all page content/sections
├── css/style.css        # styling (light/dark, responsive)
├── js/main.js            # nav toggle, active-link highlighting
├── assets/
│   ├── Amit_Gautam_Resume.pdf   # downloadable résumé (linked from the hero)
│   └── avatar-placeholder.svg   # monogram shown until a real photo is added
└── vercel.json           # clean URLs config for Vercel
```

## Run locally

No build step needed — just serve the folder statically, e.g.:

```bash
npx serve .
# or
python3 -m http.server 8000
```

Then open `http://localhost:3000` (or `:8000`).

## Deploy on Vercel

**Option A — Vercel dashboard (recommended)**
1. In Vercel, "Add New Project" → import this repository.
2. Framework Preset: **Other** (no build command, no output directory needed).
3. Deploy.

**Option B — Vercel CLI**
```bash
npm i -g vercel
vercel
```

## Customizing

- Edit content directly in `index.html` (each résumé section is a `<section>`).
- Colors/spacing/fonts live in `css/style.css` under the `:root` custom properties at the top.
- Swap `assets/Amit_Gautam_Resume.pdf` to update the downloadable résumé.

### Adding a real photo

The hero currently shows a monogram placeholder (`assets/avatar-placeholder.svg`). To use a real photo:

1. Add a square headshot (400×400px or larger works well) to `assets/avatar.jpg`.
2. In `index.html`, find the `<img class="avatar" ...>` tag near the top of the hero section and change its `src` from `assets/avatar-placeholder.svg` to `assets/avatar.jpg`.

The `.avatar` styling (size, rounded corners, border) in `css/style.css` applies automatically — no other changes needed.
