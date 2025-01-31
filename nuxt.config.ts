// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/ui', '@nuxt/devtools', '@nuxtjs/tailwindcss'],

  runtimeConfig: {
    public: {
      OBS_API_URL: 'http://localhost:3001',
    }
  },

  devtools: {
    enabled: true
  },

  compatibilityDate: '2025-01-31'
});