// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nitro-cloudflare-dev'],
  routeRules: {
    '/': { prerender: true },
    '/redirect': { redirect: 'https://example.com' }
  }
});
