// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  routeRules: {
    '/': { prerender: true },
    '/redirect': { redirect: 'https://example.com' },
    '/**': { swr: 60 }
  }
});
