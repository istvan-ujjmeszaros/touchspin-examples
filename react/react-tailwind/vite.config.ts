import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    preserveSymlinks: true,
    alias: {
      '@touchspin/react/tailwind': path.resolve(
        __dirname,
        '../../../touchspin-react/packages/react/dist/tailwind.js',
      ),
    },
  },
})
