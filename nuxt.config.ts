// nuxt.config.ts
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  // Global CSS
  css: [
    '~/assets/css/main.css',
    '@fortawesome/fontawesome-free/css/all.min.css'
  ],

  // Vite ve Tailwind
  vite: {
    plugins: [tailwindcss()],
    build: {
      minify: 'esbuild',
      target: 'esnext'
    }
  },

  // Modüller (TS uyumlu)
  modules: [
    '@primevue/nuxt-module',

    // Nuxt Image modülü parametre ile
    ['@nuxt/image', {
      provider: 'static',
      presets: {
        default: {
          format: ['webp', 'avif'],
          quality: 80
        }
      }
    }]
  ],

  // Global app/head ayarları
  app: {
    head: {
      htmlAttrs: {
        lang: 'tr'
      },
      titleTemplate: "%s - Karvise",
      title: "Karvise",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "Karvise yazılım çözümleri ile işinizi büyütün. Özel yazılım ve dijital hizmetler." },
        { name: "theme-color", content: "#16a34a" }
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
        { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" }
      ]
    }
  }
});
