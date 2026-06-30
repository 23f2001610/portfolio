# Harmeet Kaur — Portfolio

A small Vite + React site generated from the resume, with a dark/light toggle
and a "Download résumé" button (uses the browser print dialog → Save as PDF).

## Run locally

```
npm install
npm run dev
```

Open the URL it prints (usually http://localhost:5173).

## Build for production

```
npm run build
```

This outputs a static site to `dist/`.

## Deploy

**Vercel**
1. Push this folder to a GitHub repo.
2. Import the repo at vercel.com → it auto-detects Vite, no config needed.

**Netlify**
1. Push to GitHub, or drag-and-drop the `dist/` folder after `npm run build`
   onto netlify.com/drop.
2. Build command: `npm run build`, publish directory: `dist`.

## Editing content

All resume content (education, experience, projects, skills) lives as plain
arrays/objects at the top of `src/App.jsx` — edit those directly, no need to
touch the markup. Colors live in the `themes` object at the top of the same
file.
