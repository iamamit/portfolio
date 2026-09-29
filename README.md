# Portfolio — Amit Gautam

Live: https://amitgautam.vercel.app

Static site (HTML/CSS/JS, no build step) built on the open-source
[vCard template](https://github.com/codewithsadee/vcard-personal-portfolio) by codewithsadee
(MIT, see `LICENSE-vcard.txt`), with my content and a terminal-style layer.

```
index.html                 all content (About, Resume, Projects, Contact)
assets/css/style.css       vCard template styles
assets/css/amit.css        my additions: fonts, terminal cards, stats, stack list, project text
assets/js/script.js        tabs, sidebar, project filter, contact form (opens the visitor's email app)
assets/images/             avatar and terminal-style project covers (SVG)
assets/Amit_Gautam_Resume.pdf
```

Run locally: `python3 -m http.server 8000`, then open http://localhost:8000.
Photo: `assets/images/avatar.jpg` (the favicon is `assets/images/avatar.svg`). Theme colour: the variables at the top of `assets/css/amit.css`.
