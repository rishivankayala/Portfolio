# Rishwanth Vankayala — Portfolio

Modern, interactive portfolio built with **React + Vite + Tailwind + Framer Motion**.

## ✨ Features
- Clean, responsive, dark‑mode design
- Smooth reveal animations
- Data‑driven (edit one file: `src/data_profile.ts`)
- One‑page layout: Hero, Projects, Experience, Skills, Education, Contact

## 🚀 Quick Start

```bash
# 1) Install deps
npm install

# 2) Run dev server
npm run dev

# 3) Build for production
npm run build
npm run preview
```

## 🛠 Customize
Edit your details, projects, and links in `src/data_profile.ts`. All sections render from that file.

## 🌐 Deploy
- **GitHub Pages**: Use a Pages workflow or `vite` + `gh-pages` (optional).
- **Vercel/Netlify**: Import this repo and deploy. No config needed.

## 📁 Structure
```
.
├─ public/
├─ src/
│  ├─ sections/App.tsx        # Main page layout
│  ├─ components/             # Reusable UI (chip, theme toggle)
│  ├─ data_profile.ts         # Your profile data (edit me)
│  ├─ main.tsx, main.css
├─ index.html
├─ package.json
└─ tailwind.config.js
```
