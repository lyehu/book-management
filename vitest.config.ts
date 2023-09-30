/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: 'src/test/setupTests'
  },
  plugins: [react()],
  resolve: {
    alias:   { find: '@mui/styled-engine', replacement: '@mui/styled-engine-sc' },
  },
});