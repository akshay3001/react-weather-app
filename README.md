# Weather App (Seasons)

A small React demo. It asks the browser for your location and shows the current season for your hemisphere ("let's hit beach" or "Its chilly here").

It uses the browser [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API) only. It does not call a weather API, so you do not need an API key.

Built with [Vite](https://vite.dev), [React](https://react.dev) and TypeScript. Icons and the loader come from [Semantic UI](https://semantic-ui.com) (loaded from a CDN in `index.html`).

## Requirements

- Node.js 20.19+ or 22.12+

## Run

```bash
npm install
npm run dev
```

Open the URL that Vite shows (default: http://localhost:5173) and allow the location request.

## Scripts

| Command             | What it does                                 |
| ------------------- | -------------------------------------------- |
| `npm run dev`       | Starts the dev server.                       |
| `npm run build`     | Type-checks and builds to `dist/`.           |
| `npm run preview`   | Serves the `dist/` build locally.            |
| `npm run typecheck` | Runs the TypeScript compiler only.           |
| `npm run lint`      | Lints with oxlint.                           |
| `npm test`          | Runs the unit tests with Vitest.             |
| `npm run deploy`    | Builds and publishes `dist/` to GitHub Pages. |
