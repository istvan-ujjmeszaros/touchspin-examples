# TouchSpin Vue Tailwind

Vite + Vue 3 playground demonstrating the Tailwind renderer. It mirrors the vanilla demo layout but
swaps in Tailwind utility classes, passes Tailwind-friendly core options, and imports the renderer
CSS bundle.

## Getting Started

Install dependencies and start Vite:

```bash
npm install
npm run dev
```

Open the printed URL (default `http://localhost:5173/`) to exercise the spinner. The page wires a
controlled `v-model`, shows the imperative API, and highlights fired events.

### Testing unpublished builds

To preview unpublished changes from the monorepo, replace the `@touchspin/vue` and
`@touchspin/renderer-tailwind` dependencies with `file:` references and reinstall after rebuilding
the corresponding packages.

## Scripts

- `npm run dev` – launch Vite in dev mode
- `npm run build` – create the production bundle
- `npm run preview` – preview the production build locally
