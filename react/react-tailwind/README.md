# TouchSpin React Tailwind

Vite + React 19 demo for the Tailwind renderer. It mirrors the vanilla playground but swaps in
`@touchspin/react/tailwind`, applies the Tailwind CSS bundle, and injects the same utility classes the
Angular Tailwind showcase uses.

## Getting Started

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Visit the printed URL (default `http://localhost:5173/`) to interact with the spinner controls. The
example drives a controlled component, exercises the imperative handle, and renders event telemetry.

### Using local packages

When testing unpublished changes from the monorepo, switch the `@touchspin/react` dependency back to a
`file:` reference and rebuild the package before running `npm install`.

## Scripts

- `npm run dev` – start Vite in development mode
- `npm run build` – type-check and create the production bundle
- `npm run preview` – serve the production build locally
