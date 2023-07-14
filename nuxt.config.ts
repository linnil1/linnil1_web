export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
  runtimeConfig: {
    // using default or use local KV testing
    use_nitro_db: true && process.env.NODE_ENV === "development",
  },
  nitro: {
    devStorage: {
      // for local KV testing, also uncomment in server/api/*.ts
      db: {
        driver: "fs",
        base: "./db",
      },
    },
  },
  googleFonts: {
    families: {
      "Noto Sans TC": true,
      "Noto Serif TC": true,
    },
  },
  typescript: {
    typeCheck: true,
  },
  build: {
    transpile: ["@fortawesome"],
  },
  css: ["@fortawesome/fontawesome-svg-core/styles.css"],
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts", "@nuxtjs/i18n"],
});
