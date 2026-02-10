import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ['./assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  
  // Configuration de @nuxt/image
  image: {
    format: ['webp'],
    quality: 80
  },
  
  modules: ['@nuxt/image'],
  
  app: {
    head: {
      htmlAttrs: { lang: 'fr' },
      title: 'Ma Peluche de Saint-Valentin',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Une peluche unique pour déclarer votre amour. Offrez un cadeau émotionnel et mémorable pour la Saint-Valentin.' },
        { name: 'theme-color', content: '#FF1493' },
      ],
      
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { 
          href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@300;400;500;600;700&family=Poppins:wght@600;700&family=Harrington&display=swap', 
          rel: 'stylesheet'
        }
      ],
      
      bodyAttrs: {
        class: 'min-h-screen bg-white text-gray-900'
      }
    }
  }
})