// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Nuxt 4 directory structure and features
  // https://nuxt.com/docs/getting-started/upgrade#testing-nuxt-4
  future: { compatibilityVersion: 4 },
  modules: ['@nuxthub/core', '@nuxt/eslint', 'nuxt-primevue', "@sidebase/nuxt-auth"],
  runtimeConfig: {
    authSecret: process.env.NUXT_AUTH_SECRET,
    auth0Secret: process.env.NUXT_AUTH0_SECRET,
    auth0ClientId: process.env.NUXT_AUTH0_CLIENT_ID,
    auth0Issuer: process.env.NUXT_AUTH0_ISSUER,
  },
  hub: {
    database: true,
    kv: true,
    cache: true,
  },
  auth: {
    provider: {
      type: 'authjs'
    },
    globalAppMiddleware: true
  },
  // Development
  devtools: { enabled: true },
})