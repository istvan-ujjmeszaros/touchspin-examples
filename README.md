# TouchSpin Examples

Comprehensive examples for TouchSpin v5 across all supported frameworks and configurations.

## 🚀 Quick Start

```bash
# Install all dependencies
pnpm install

# Run any framework example
pnpm run angular17-vanilla
pnpm run react-vanilla
pnpm run vue-vanilla
pnpm run svelte-vanilla
```

## 📁 Examples Structure

```
touchspin-examples/
├── angular/              # Angular examples (17, 18, 19, 20)
│   ├── angular-17/       # Angular 17 + vanilla renderer
│   ├── angular-18/       # Angular 18 + vanilla renderer
│   ├── angular-19/       # Angular 19 + vanilla renderer
│   └── angular-20/       # Angular 20 + vanilla renderer
├── react/
│   └── react-vanilla/    # React + vanilla renderer
├── vue/
│   └── vue3-vanilla/     # Vue 3 + vanilla renderer
├── svelte/
│   └── svelte-vanilla/   # Svelte + vanilla renderer
├── umd-jquery/           # jQuery UMD examples (HTML files)
│   ├── touchspin-jquery-bootstrap3.html
│   ├── touchspin-jquery-bootstrap4.html
│   ├── touchspin-jquery-bootstrap5.html
│   ├── touchspin-jquery-tailwind.html
│   └── touchspin-jquery-vanilla.html
├── umd-standalone/       # Standalone UMD examples (HTML files)
│   ├── touchspin-standalone-bootstrap3.html
│   ├── touchspin-standalone-bootstrap4.html
│   ├── touchspin-standalone-bootstrap5.html
│   ├── touchspin-standalone-tailwind.html
│   └── touchspin-standalone-vanilla.html
└── umd-webcomponent/     # Web Component UMD examples (HTML files)
    ├── touchspin-webcomponent-bootstrap3.html
    ├── touchspin-webcomponent-bootstrap4.html
    ├── touchspin-webcomponent-bootstrap5.html
    ├── touchspin-webcomponent-tailwind.html
    └── touchspin-webcomponent-vanilla.html
```

## 🛠️ Setup

### Prerequisites

- Node.js ≥18.17.0
- pnpm ≥9.12.0

### Installation

```bash
# Install pnpm if you don't have it
npm install -g pnpm

# Install all example dependencies
pnpm install

# Or install for specific examples
cd react/react-vanilla
npm install
```

## 🎯 Running Examples

### Framework Examples (with dev servers)

Run from the root directory using pnpm:

```bash
# Angular (each version demonstrates compatibility with a different major release)
pnpm run angular17-vanilla  # Angular 17 + vanilla renderer
pnpm run angular18-vanilla  # Angular 18 + vanilla renderer
pnpm run angular19-vanilla  # Angular 19 + vanilla renderer
pnpm run angular20-vanilla  # Angular 20 + vanilla renderer

# React
pnpm run react-vanilla      # React + vanilla renderer

# Vue
pnpm run vue-vanilla        # Vue 3 + vanilla renderer

# Svelte
pnpm run svelte-vanilla     # Svelte + vanilla renderer
```

Or run from the specific example directory:

```bash
cd react/react-vanilla
npm install
npm run dev
```

### UMD Examples (static HTML files)

UMD examples are standalone HTML files that can be opened directly in a browser:

```bash
# Open any HTML file in umd-jquery/, umd-standalone/, or umd-webcomponent/
# For example:
open umd-standalone/touchspin-standalone-bootstrap5.html
```

These examples demonstrate CDN-based usage with jQuery, standalone mount API, and Web Components across Bootstrap 3/4/5, Tailwind, and vanilla CSS.

## 📦 Package Usage

All examples use published npm packages:

```bash
# Framework adapters
npm install @touchspin/react
npm install @touchspin/angular
npm install @touchspin/vue
npm install @touchspin/svelte

# Core + renderers
npm install @touchspin/core @touchspin/renderer-bootstrap5

# Standalone (easiest)
npm install @touchspin/standalone

# Legacy support
npm install @touchspin/jquery
npm install @touchspin/webcomponent
```

## 🎨 Renderer Options

Currently, all framework examples use the **vanilla renderer** (framework-free CSS styling).

Additional renderer examples are planned for future versions:
- **Bootstrap 3/4/5**: Bootstrap framework integration
- **Tailwind**: Tailwind CSS integration

UMD examples already demonstrate all renderer types (Bootstrap 3/4/5, Tailwind, and Vanilla).

## 🔧 Development

### Adding New Examples

1. Create directory: `{framework}/{framework}-{renderer}/`
2. Add `package.json` with dependencies
3. Add source files and configuration
4. Update root `package.json` scripts
5. Test with `pnpm run {framework}-{renderer}`

### Example Structure

```
react/react-bootstrap5/
├── package.json          # Dependencies and scripts
├── src/
│   ├── App.jsx          # Main component
│   ├── main.jsx         # Entry point
│   └── index.html       # HTML template
├── vite.config.js       # Build configuration
└── README.md           # Example-specific docs
```

## 🤝 Contributing

Examples should demonstrate best practices for each framework and TouchSpin integration patterns.

## 📄 License

MIT - Same as TouchSpin core
