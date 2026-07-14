# ELÉGANCE

A premium editorial storefront built with React, Vite, Tailwind CSS, and React Router.

## Project overview

This project is a refined fashion landing experience with:

- responsive editorial styling
- Tailwind-based premium layout and typography
- multi-page routing with `react-router-dom`
- product collection, shop, journal, and booking pages
- a dedicated product details page for individual items
- scroll blur/shadow effects and entrance animations

## Pages

- `/` — Home
- `/collection` — Collection edit
- `/shop` — Shop gallery
- `/shop/:slug` — Product details
- `/journal` — Editorial journal
- `/visit` — Studio appointment

## Key files

- `src/App.jsx` — app shell, router, navbar, footer
- `src/components/Layout/Navbar.jsx` — animated header
- `src/components/Layout/Footer.jsx` — site footer
- `src/Pages/HomePage.jsx` — landing page
- `src/Pages/CollectionPage.jsx` — curated collection
- `src/Pages/Shop.jsx` — shop grid with product links
- `src/Pages/ProductDetails.jsx` — product detail view
- `src/Pages/JournalPage.jsx` — editorial stories
- `src/Pages/VisitPage.jsx` — appointment information
- `src/data/shopItems.js` — shared shop item data and slugs

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Open the local dev server URL shown in the terminal.

## Build

```bash
npm run build
```

## Preview

```bash
npm run preview
```

## Deployment

This project can be deployed as a static site. For GitHub Pages:

1. Build the app:

```bash
npm run build
```

2. Push the `dist/` folder to the `gh-pages` branch, or use a deployment action.

3. In GitHub repository settings, enable Pages for the `gh-pages` branch.

For other static hosting providers (Netlify, Vercel, Cloudflare Pages), simply connect the repository and use the build command above.

## Notes

- Static images are loaded from the `public/` folder.
- `tailwindcss` is configured through Vite and global styles are located in `src/index.css`.
- New products can be added by editing `src/data/shopItems.js` and reusing `slug` links.
