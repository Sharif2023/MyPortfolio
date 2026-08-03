# Shariful Islam — Portfolio

Personal portfolio built with **React + Vite**, deployed on **Vercel**.

## Tech Stack
- ⚛️ React 19 + Vite 8
- 🎨 Vanilla CSS (ported from original design)
- ✨ AOS (scroll animations) · Typed.js (hero typewriter) · VanillaTilt (3D cards)
- 🚀 Vercel (hosting + SPA routing)

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Production Build

```bash
npm run build
```

Output goes to `dist/` — Vercel picks this up automatically.

## Vercel Deployment

1. Push to GitHub
2. Import repo in [vercel.com](https://vercel.com)
3. Framework preset: **Vite**
4. Build command: `npm run build`
5. Output directory: `dist`
6. Hit **Deploy** ✅

> **Note:** The contact form (`/forms/contact.php`) requires a PHP-capable server. On Vercel (Node-only), wire it up via a Vercel Serverless Function or use [Resend](https://resend.com) / [Formspree](https://formspree.io) for static email delivery.

## Project Structure

```
src/
├── components/       # All React section components
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── ProjectModal.jsx
│   ├── Experience.jsx
│   ├── Resume.jsx
│   ├── Certifications.jsx
│   ├── Services.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   ├── ScrollTop.jsx
│   └── Preloader.jsx
├── data/
│   └── portfolioData.js  # All content data (projects, certs, skills)
├── styles/
│   └── main.css          # Full design system CSS
└── App.jsx               # Root component
public/
└── assets/               # Images, certifications, resume PDF
```

## ⚠️ Copyright & License

**Copyright (c) 2026 Shariful Islam. All Rights Reserved.**

This repository is **NOT** open-source. The code, design, and assets are provided for demonstration purposes only. You may view the code, but you may **NOT** copy, clone, distribute, or reuse this codebase or design for your own personal portfolio or commercial projects without explicit permission.
