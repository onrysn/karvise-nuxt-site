// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  modules: [
    '@primevue/nuxt-module'
  ],
  app: {
    head: {
      titleTemplate: "%s - Karvise",
      title: "Karvise",
      meta: [
        {
          name: "description",
          content: "Karvise yazılım çözümleri ile işinizi büyütün. Özel yazılım ve dijital hizmetler."
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1"
        },
        {
          charset: "utf-8"
        }
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
      ],
      htmlAttrs: {
        lang: 'tr' // Sayfanın dili
      },
    },
  }
});