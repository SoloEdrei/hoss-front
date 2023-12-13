// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts', 'nuxt-headlessui'],

  // @ts-ignore
  runtimeConfig: {
    public: {
      apiUrl: process.env.API_BASE_URL || 'http://localhost:8000/api/',
    }
  },

  // @ts-ignore
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],

  googleFonts: {
    families: {
      Lato: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      'Gideon Roman': [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
    download: true,
    display: 'swap',
  },

  tailwindcss: {
    cssPath: '~/assets/sass/general.scss',
  },

  server: {
    host: "0.0.0.0",
    port: process.env.PORT || 3000,
  },
})
