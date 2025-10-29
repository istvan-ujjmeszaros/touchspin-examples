# TouchSpin Svelte Tailwind

Svelte 5 + Vite sandbox showcasing the Tailwind renderer. It mirrors the vanilla playground but
passes Tailwind-specific core options, imports the renderer CSS bundle, and styles the layout with
utility classes.

## Getting Started

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Vite will print a local URL (default `http://localhost:5173/`). The page demonstrates the controlled
binding, the imperative handle, and event telemetry.

### Working with local packages

To test unpublished renderer or adapter bits, replace the `@touchspin/svelte` and
`@touchspin/renderer-tailwind` dependencies with `file:` references and reinstall after rebuilding
those packages.

## Scripts

- `npm run dev` – start Vite in development mode
- `npm run build` – generate the production bundle
- `npm run preview` – preview the production build
- `npm run check` – run `svelte-check`
- `npm run test` – execute Vitest
