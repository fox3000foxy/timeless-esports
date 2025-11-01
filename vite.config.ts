import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,avif,webp}'],
        cleanupOutdatedCaches: true,
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024 // 5 MB
      },
      manifest: {
        name: 'Timeless Esports',
        short_name: 'Timeless',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/assets/logo.avif',
            sizes: '192x192',
            type: 'image/avif',
            purpose: 'any maskable'
          }
        ],
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/',
        scope: '/'
      }
    })
  ]
})
