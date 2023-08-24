// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    buildAssetsDir: '_'
  },
  modules: [
    'nuxt-simple-sitemap'
  ],
})
