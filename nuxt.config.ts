// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  runtimeConfig: {
    supabaseServiceRole: process.env.SUPABASE_SERVICE_ROLE_KEY,

    public: {
      supabaseUrl: process.env.NUXT_PUBLIC_SUPABASE_URL,
      supabaseAnonKey: process.env.NUXT_PUBLIC_SUPABASE_ANON,
    },
  },
  vite: {
    optimizeDeps: {
      include: [
        "@supabase/supabase-js",
        "@vue/devtools-core",
        "@vue/devtools-kit",
      ],
    },
  },
});

console.log("URL:", process.env.NUXT_PUBLIC_SUPABASE_URL);
