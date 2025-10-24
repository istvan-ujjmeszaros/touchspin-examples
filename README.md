# TouchSpin Examples

Comprehensive examples for TouchSpin v5 across all supported frameworks and configurations.

## 🚀 Quick Start

```bash
# Install all dependencies
pnpm install

# Run any example
pnpm run angular17-vanilla
pnpm run react-vanilla
pnpm run vue-bootstrap5
pnpm run svelte-vanilla
pnpm run vanilla-esm
pnpm run jquery-bootstrap5
pnpm run webcomponent-vanilla
```

## 📁 Examples Structure

```
examples/
├── angular/           # Angular examples (17, 18, 19, 20)
│   ├── vanilla/       # Basic vanilla renderer
│   ├── bootstrap3/    # Bootstrap 3 styling
│   ├── bootstrap4/    # Bootstrap 4 styling
│   ├── bootstrap5/    # Bootstrap 5 styling
│   └── tailwind/      # Tailwind CSS styling
├── react/             # React examples
│   ├── vanilla/
│   ├── bootstrap3/
│   ├── bootstrap4/
│   ├── bootstrap5/
│   └── tailwind/
├── vue/               # Vue examples
│   ├── vanilla/
│   ├── bootstrap3/
│   ├── bootstrap4/
│   ├── bootstrap5/
│   └── tailwind/
├── svelte/            # Svelte examples
│   ├── vanilla/
│   ├── bootstrap3/
│   ├── bootstrap4/
│   ├── bootstrap5/
│   └── tailwind/
├── vanilla/           # Plain JavaScript
│   ├── esm/           # ES modules
│   └── umd/           # UMD bundles (with assets)
├── jquery/            # jQuery wrapper
│   ├── vanilla/
│   ├── bootstrap3/
│   ├── bootstrap4/
│   ├── bootstrap5/
│   └── tailwind/
└── webcomponent/      # Custom elements
    ├── vanilla/
    ├── bootstrap3/
    ├── bootstrap4/
    ├── bootstrap5/
    └── tailwind/
```

## 🛠️ Setup

### Prerequisites

- Node.js ≥18.17.0
- pnpm ≥8.0.0

### Installation

```bash
# Install pnpm if you don't have it
npm install -g pnpm

# Install all example dependencies
pnpm install

# Or install for specific examples
cd examples/react/vanilla
pnpm install
```

## 🎯 Running Examples

### From Root Directory

```bash
# Angular
pnpm run angular17-vanilla
pnpm run angular18-vanilla
pnpm run angular19-vanilla
pnpm run angular20-vanilla

# React
pnpm run react-vanilla
pnpm run react-bootstrap5

# Vue
pnpm run vue-vanilla
pnpm run vue-bootstrap5

# Svelte
pnpm run svelte-vanilla
pnpm run svelte-bootstrap5

# Vanilla JS
pnpm run vanilla-esm
pnpm run vanilla-umd

# jQuery
pnpm run jquery-bootstrap5

# Web Components
pnpm run webcomponent-vanilla
```

### From Example Directory

```bash
cd examples/react/vanilla
pnpm install
pnpm dev
```

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

Each framework has examples for all renderer types:

- **Vanilla**: Framework-free CSS styling
- **Bootstrap 3/4/5**: Bootstrap framework integration
- **Tailwind**: Tailwind CSS integration

## 🔧 Development

### Adding New Examples

1. Create directory: `examples/{framework}/{renderer}/`
2. Add `package.json` with dependencies
3. Add source files and configuration
4. Update root `package.json` scripts
5. Test with `pnpm run {framework}-{renderer}`

### Example Structure

```
examples/react/bootstrap5/
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
