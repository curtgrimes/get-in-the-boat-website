// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    compressPublicAssets: true,
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "nuxt-icon",
    "floating-vue/nuxt",
    "nuxt-gtag",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          "Crimson Text": {
            wght: [400, 600, 700],
            ital: [400, 600],
          },
        },
      },
    ],
  ],
  // Workaround for Netlify OOM deploy issue
  // See https://answers.netlify.com/t/javascript-heap-out-of-memory-when-trying-to-build-a-nuxt-app/93138/14
  postcss: {
    plugins: {
      "tailwindcss/nesting": {},
      tailwindcss: {},
      autoprefixer: {},
      cssnano:
        process.env.NODE_ENV === "production"
          ? { preset: ["default", { discardComments: { removeAll: true } }] }
          : false, // disable cssnano when not in production
    },
  },
  gtag: {
    id: "G-LGLGLQ1KF9",
  },
});
