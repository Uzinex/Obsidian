# OBSIDIAN — Forged from Fire

A multi-page React experience for Obsidian, an imaginative volcanic-forged technology brand. The site embraces luminous
violet accents, obsidian-black backgrounds, and geometric typography inspired by the brand logo.

## Stack

- [React](https://react.dev/) with [React Router](https://reactrouter.com/) for client-side routing
- [Vite](https://vitejs.dev/) for the development and build tooling
- Custom CSS crafted to deliver the obsidian aesthetic

## Available Pages

- **Home** — Hero story, brand pillars, and feature highlights
- **About** — Brand philosophy and milestone timeline
- **Products** — Showcase of flagship obsidian-forged offerings
- **News** — Recent announcements and transmissions from the forge
- **Contact** — Channels to reach the Obsidian collective

## Getting Started

```bash
npm install
npm run dev
```

The site will be available at [http://localhost:5173](http://localhost:5173).

To create a production build:

```bash
npm run build
npm run preview
```

## Project Structure

```
obsidian-app/
├── public/            # Static assets (including the obsidian logomark)
├── src/
│   ├── components/    # Shared layout components
│   ├── pages/         # Individual route views
│   ├── assets/        # SVG logomark and other brand visuals
│   ├── App.jsx        # Route map
│   ├── App.css        # Layout and component styling
│   └── index.css      # Global theme styles
└── vite.config.js     # Vite configuration
```

Feel free to expand each page with additional storytelling, product lines, and interactive experiences.
