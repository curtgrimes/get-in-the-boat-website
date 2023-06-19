// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    'nuxt-icon',
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          "Crimson Text": {
            wght: [400, 600, 700],
            ital: [400, 600, 700],
          },
        },
      },
    ],
  ],
});
