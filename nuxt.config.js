export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "muchWoof",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      // nfont for snippet
      {
        rel: "stylesheet",
        // href: "https://fonts.googleapis/css2?family=Bungee&family=Quattrocento+Sans&display=swapcom/css?family=Montserrat:600|Rufina:700",
        href: `https://webfonts.googleapis.com/v1/webfonts?family=Bungee&family=Quattrocento&family=Sans&key=${process.env.GOOGLE_FONTS_API_KEY}`,
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/main.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~/plugins/getdogdata.js"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/fontawesome"],
  fontawesome: {
    component: "fa",
    icons: {
      solid: ["faBone", "faCircle", "faAngleRight"],
      brands: true,
    },
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios", "@nuxtjs/auth-next"],
  auth: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
