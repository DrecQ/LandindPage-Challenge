<template>
  <footer class="bg-gradient-to-b from-white to-pink-50/30 pt-16 pb-8 relative overflow-hidden border-t border-pink-100/50">
    <!-- Background decorative elements -->
    <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <!-- Subtle gradient orbs -->
      <div class="absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-to-tr from-[#FF1493]/5 to-[#FF66CC]/3 rounded-full blur-[100px] opacity-40"></div>
      <div class="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-bl from-[#FF1493]/3 to-pink-100/10 rounded-full blur-[80px] opacity-30"></div>
      
      <!-- Small hearts in corners -->
      <svg class="absolute bottom-8 left-8 w-6 h-6 text-pink-200" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
      </svg>
      <svg class="absolute bottom-8 right-8 w-6 h-6 text-pink-200" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
      </svg>
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <!-- Main footer content -->
      <div class="flex flex-col lg:flex-row justify-between items-center gap-8 mb-12">
        <!-- Brand section -->
        <div class="text-center lg:text-left">
          <div class="flex items-center gap-3 mb-4 justify-center lg:justify-start">
            <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF1493] to-[#FF66CC] flex items-center justify-center">
              <span class="text-white text-xl">❤️</span>
            </div>
            <span class="text-2xl font-black text-gray-900 font-poppins tracking-tight">
              Valen<span class="text-transparent bg-clip-text bg-gradient-to-r from-[#FF1493] to-[#FF66CC]">Peluche</span>
            </span>
          </div>
          <p class="text-gray-600 text-sm max-w-xs font-poppins">
            Des câlins éternels, des souvenirs infinis. 
            L'amour mérite sa propre icône.
          </p>
        </div>

        <!-- Quick links -->
        <div class="flex flex-wrap justify-center gap-6 lg:gap-8">
          <a href="#hero" class="text-gray-700 hover:text-[#FF1493] font-medium text-sm transition-colors duration-300 font-poppins">
            Accueil
          </a>
          <a href="#product" class="text-gray-700 hover:text-[#FF1493] font-medium text-sm transition-colors duration-300 font-poppins">
            Produit
          </a>
          <a href="#why" class="text-gray-700 hover:text-[#FF1493] font-medium text-sm transition-colors duration-300 font-poppins">
            Pourquoi
          </a>
          <a href="#pricing" class="text-gray-700 hover:text-[#FF1493] font-medium text-sm transition-colors duration-300 font-poppins">
            Offre
          </a>
        </div>

        <!-- Social links -->
        <div class="flex gap-4">
          <a href="#" class="w-10 h-10 rounded-full bg-white border border-pink-100 flex items-center justify-center text-gray-600 hover:text-[#FF1493] hover:border-[#FF1493] hover:scale-110 transition-all duration-300 shadow-sm">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
            </svg>
          </a>
          <a href="#" class="w-10 h-10 rounded-full bg-white border border-pink-100 flex items-center justify-center text-gray-600 hover:text-[#FF1493] hover:border-[#FF1493] hover:scale-110 transition-all duration-300 shadow-sm">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a href="#" class="w-10 h-10 rounded-full bg-white border border-pink-100 flex items-center justify-center text-gray-600 hover:text-[#FF1493] hover:border-[#FF1493] hover:scale-110 transition-all duration-300 shadow-sm">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>
      </div>

      <!-- Divider -->
      <div class="w-full h-px bg-gradient-to-r from-transparent via-pink-100 to-transparent mb-8"></div>

      <!-- Bottom section -->
      <div class="flex flex-col md:flex-row justify-between items-center gap-4">
        <!-- Copyright -->
        <div class="text-center md:text-left">
          <p class="text-gray-500 text-sm font-poppins">
            © {{ new Date().getFullYear() }} ValenPeluche. Tous droits réservés.
          </p>
        </div>

        <!-- Legal links -->
        <div class="flex flex-wrap justify-center gap-4 md:gap-6">
          <a href="#" class="text-gray-500 hover:text-[#FF1493] text-xs font-medium transition-colors duration-300 font-poppins">
            Conditions générales
          </a>
          <a href="#" class="text-gray-500 hover:text-[#FF1493] text-xs font-medium transition-colors duration-300 font-poppins">
            Politique de confidentialité
          </a>
          <a href="#" class="text-gray-500 hover:text-[#FF1493] text-xs font-medium transition-colors duration-300 font-poppins">
            Mentions légales
          </a>
          <a href="#" class="text-gray-500 hover:text-[#FF1493] text-xs font-medium transition-colors duration-300 font-poppins">
            Contact
          </a>
        </div>
      </div>

      <!-- Made with love -->
      <div class="mt-8 text-center">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-50/50 border border-pink-100/50">
          <svg class="w-4 h-4 text-[#FF1493]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
          <span class="text-xs text-gray-600 font-medium font-poppins">
            Fabriqué avec amour en France
          </span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Footer doesn't need much JavaScript
// It's mainly static content
</script>

<style scoped>
/* Smooth hover transitions */
a, button {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  
  .flex-col {
    align-items: center;
    text-align: center;
  }
  
  .gap-6 {
    gap: 1.5rem;
  }
}
</style>