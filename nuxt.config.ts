// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt'
  ],
  tailwindcss:{
    configPath: '~/assets/css'
  },
  css:['~/packages/@core/base/design/index.ts'],
  ssr: false,
  typescript:{
    tsConfig:{
      include:["./packages/**/*.ts"]
    }
  }
})