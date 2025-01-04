// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    'nuxt-security',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/i18n'
  ],
  tailwindcss: {
    configPath: '~/assets/css'
  },
  css: ['~/packages/@core/base/design/index.ts'],
  ssr: false,
  runtimeConfig: {
    public: {
      apiBase: 'http://127.0.0.1',
      apiPrefix: '/api/v2'
    }
  },
  security: {
    enabled: true,
    nonce: true,
    headers: {
      crossOriginEmbedderPolicy: false,
      crossOriginOpenerPolicy: 'same-origin-allow-popups',
      contentSecurityPolicy: {
        "img-src": ["'self'", "data:", "https://*", process.env.API_URL || 'http://127.0.0.1:*'],
        'script-src': ["'self'", "'nonce-{{nonce}}'", "'strict-dynamic'"],
      },
    },
  },
  piniaPluginPersistedstate:{
    storage:'localStorage',
    key:'nidhoma-%id',
  },
})