// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nitro-cloudflare-dev'],
  routeRules: {
    '/': { prerender: true },
    '/api/time': {
      cache: {
        maxAge: 0,
        staleMaxAge: 30,
        swr: true
      }
    },
  },
  nitro: {
    preset: 'cloudflare-pages'
  }
});
