import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico}'],
        cleanupOutdatedCaches: true,
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024, // 5 MB
        skipWaiting: true,
        clientsClaim: true,
        navigateFallback: 'index.html',
        runtimeCaching: [{
          urlPattern: ({ url }) => {
            return url.pathname.match(/\.(png|jpg|jpeg|svg|gif|avif|webp)$/);
          },
          handler: 'CacheFirst',
          options: {
            cacheName: 'images-cache',
            expiration: {
              maxEntries: 50,
              maxAgeSeconds: 30 * 24 * 60 * 60 // 30 jours
            },
            matchOptions: {
              ignoreSearch: true
            }
          }
        }]
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
