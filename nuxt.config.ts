import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ['./assets/css/main.css'], // Chez corrigé (sans /app)
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  modules: ['@nuxt/image'],
  app: {
    head: {
      title: 'Ma Peluche de Saint-Valentin',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Une peluche unique pour déclarer votre amour. Offrez un cadeau émotionnel et mémorable pour la Saint-Valentin.' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@300;400;500;600;700&family=Harrington&display=swap', rel: 'stylesheet' }
      ]
    }
  }
})