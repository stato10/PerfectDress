import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const isDev = command === 'serve'

  return {
    plugins: [react()],
    base: isDev ? '/' : '/PerfectDress/',
    server: {
      port: 3000
    },
    // Output production build to docs/ so GitHub Pages can deploy from main branch
    build: isDev
      ? undefined
      : {
          outDir: 'docs',
          emptyOutDir: true
        }
  }
})