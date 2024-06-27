// file: ~/server/api/auth/[...].ts
import { NuxtAuthHandler } from '#auth'
import Auth0Provider from 'next-auth/providers/auth0'

export default NuxtAuthHandler({
  secret: useRuntimeConfig().authSecret,
  pages: {
    signIn: '/login'
  },
  providers: [
    Auth0Provider.default({
      clientId: useRuntimeConfig().auth0ClientId,
      clientSecret: useRuntimeConfig().auth0Secret,
      issuer: useRuntimeConfig().auth0Issuer
    })
  ]
})