import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Deployed to GitHub Pages as a project site: https://zwekhant2.github.io/Portfolio/
export default defineConfig({
  base: '/Portfolio/',
  plugins: [react()],
})
