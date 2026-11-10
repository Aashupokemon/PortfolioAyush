import { cloudflare } from '@cloudflare/vite-plugin'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// `--mode pages` produces a static bundle for GitHub Pages: no Worker plugin,
// the repository base path, and output in dist-pages.
const PAGES_BASE = '/PortfolioAyush/'

export default defineConfig(({ mode }) => {
  const pages = mode === 'pages'
  return {
    base: pages ? PAGES_BASE : '/',
    plugins: [react(), tailwindcss(), ...(pages ? [] : [cloudflare()])],
    server: { port: 5173, strictPort: false },
    ...(pages ? { build: { outDir: 'dist-pages' } } : {}),
  }
})
