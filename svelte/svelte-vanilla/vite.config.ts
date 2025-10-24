import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte({
      compilerOptions: {
        runes: true,
      },
    }),
  ],
  resolve: {
    alias: {
      // Point to local touchspin packages (not yet published)
      '@touchspin/core': resolve(__dirname, '../../../touchspin/packages/core/dist'),
      '@touchspin/renderer-vanilla': resolve(__dirname, '../../../touchspin/packages/renderers/vanilla/dist'),
      '@touchspin/svelte/vanilla': resolve(__dirname, '../svelte/src/vanilla.ts'),
    },
    conditions: ['browser'],
  },
  ssr: {
    noExternal: ['svelte'],
  },
});
