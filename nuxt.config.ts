// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "nuxt-icon",
    "floating-vue/nuxt",
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
  // Workaround for Netlify OOM deploy issue
  // See https://answers.netlify.com/t/javascript-heap-out-of-memory-when-trying-to-build-a-nuxt-app/93138/14
  postcss: {
    plugins: {
      'tailwindcss/nesting': {},
      tailwindcss: {},
      autoprefixer: {},
      cssnano:
        process.env.NODE_ENV === 'production'
          ? { preset: ['default', { discardComments: { removeAll: true } }] }
          : false, // disable cssnano when not in production
     },
  }
});
