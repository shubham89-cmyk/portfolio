# Personal Portfolio

A single-page portfolio built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion. Content lives in JSON so you can update copy without touching components.

## Install

```bash
npm install
```

Use Node.js 20+.

## Scripts

```bash
npm run dev       # local development server
npm run build     # typecheck + production build
npm run preview   # preview the production build
npm run lint      # lint with oxlint
```

## Project structure

```
src/
  components/     # Navbar, Hero, About, Experience, Services, Projects, Testimonials, Footer
  data/
    portfolio.json
  hooks/
    usePortfolio.ts
  types/
    portfolio.ts
  App.tsx
  index.css
public/
  avatar.svg      # replace with your own avatar image/SVG
```

## Editing content

1. Open `src/data/portfolio.json`.
2. Update `profile`, `experience`, `projects`, `education`, and `testimonials`.
3. Leave social fields empty (`""`) to hide them in the UI.
4. Set `projects[].highlight` to `true` to pin a project first.
5. Leave `testimonials` as `[]` if you do not have real quotes yet — the section hides itself.
6. Replace `public/avatar.svg` (or point `profile.avatarSvg` at another public asset).

Services rows in `ServicesSection.tsx` are still hardcoded with a TODO to move into JSON later.

## Design tokens

- Background: `#0C0C0C`
- Chrome headline gradient: `#646973 → #BBCCD7`
- Accent gradient: purple → magenta → orange
- Font: Kanit
