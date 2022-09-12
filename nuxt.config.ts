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
          Montserrat: true,
          Lato: [100, 300],
          Raleway: {
            wght: [100, 400],
            ital: [100]
          },
        }
    }
})
