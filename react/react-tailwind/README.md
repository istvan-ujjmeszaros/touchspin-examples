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

## Tailwind renderer options

The Tailwind renderer now applies **replace semantics** for every styling slot. Any class string you
provide through `coreOptions` replaces the defaults instead of concatenating with them; structural
markers such as `ts-wrapper`, `ts-addon`, and `tailwind-btn` are injected automatically. Use the new
`prefix_classes_override` and `postfix_classes_override` fields when you need to restyle addons, and
pass `buttonup_class` / `buttondown_class` for buttons. The example component demonstrates how to
provide richer utility stacks while relying on the renderer to keep the mandatory hooks in place.

### Using local packages

When testing unpublished changes from the monorepo, switch the `@touchspin/react` dependency back to a
`file:` reference and rebuild the package before running `npm install`.

## Scripts

- `npm run dev` – start Vite in development mode
- `npm run build` – type-check and create the production bundle
- `npm run preview` – serve the production build locally
