import svgLoader from "vite-svg-loader"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  css: [
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css',
    '~/assets/css/main.css'
  ],

  build: {
    transpile: ['vuetify'],
  },

  vite: {
    define: {
      'process.env.DEBUG': false,
    },
    plugins: [svgLoader({
      defaultImport: 'url',
    })]
  },

  modules: ['@pinia/nuxt'],

  runtimeConfig: {
    public: {
      appName: "OWID-Nuxt3-Template",
      appDescription: "lorem ipsum dolor sit amet",

      leftIconHref: "https://www.owid.de/plus/index.html",
      rightIconHref: "https://www.ids-mannheim.de/",

      footerContact: "mailto:ruediger@ids-mannheim.de",
      footerImpressum: "https://www.owid.de/wb/owid/impressum.html",
      footerDsgvo: "https://www.owid.de/wb/owid/privacy.html"
    }
  },

  app: {
    baseURL: "/"
  },

  compatibilityDate: "2024-12-04"
})