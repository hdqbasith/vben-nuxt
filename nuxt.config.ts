// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n', 'shadcn-nuxt'],
  css:['~/packages/@core/base/design/index.ts'],
  tailwindcss:{
    configPath: '~/packages/styles/index.ts'
  },
  ssr: false
})