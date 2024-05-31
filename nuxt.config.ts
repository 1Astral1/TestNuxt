// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: "./src/",
  devtools: { enabled: false },
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ["@/assets/styles/main.css"],
  modules: [],
  app: {
    head: {},
  },
  runtimeConfig: {
    public: {
      siteUrl: "http://127.0.0.1:3000",
    },
  },
});
