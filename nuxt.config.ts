import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', '@nuxtjs/supabase', '@nuxtjs/color-mode', '@nuxtjs/google-fonts'],
    colorMode: { 
        classSuffix: ''
    },
    googleFonts: {
        families: {
          Roboto: true,
          Poppins: true,
          Montserrat: [400, 600, 700],
          Lato: [100, 300],
          Raleway: {
            wght: [100, 400],
            ital: [100]
          },
          'Material+Symbols+Outlined': {
            opsz: [48],
            wght: [200]
          },
        }
    },
    runtimeConfig: {
      apiSecret: '', // can be overridden by NUXT_API_SECRET environment variable
      public: {
        apiBase: '', // can be overridden by NUXT_PUBLIC_API_BASE environment variable
      }
    },
})
