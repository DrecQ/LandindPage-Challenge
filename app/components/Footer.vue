<template>
  <footer class="bg-gradient-to-b from-white to-pink-50/30 pt-8 pb-6 relative overflow-hidden border-t border-pink-100/50">
    <!-- Background decorative elements -->
    <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <!-- Subtle gradient orbs -->
      <div class="absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-to-tr from-[#FF1493]/5 to-[#FF66CC]/3 rounded-full blur-[100px] opacity-30"></div>
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <!-- Main content - desktop layout -->
      <div class="hidden lg:flex items-start justify-between mb-6">
        <!-- Brand section -->
        <div class="flex-1">
          <h2 class="text-3xl md:text-4xl italic font-bold tracking-wider mb-2 valentines-title"
              style="font-family: 'Harrington', cursive;">
            Cupidon gift
          </h2>
          <p class="text-gray-600 text-sm font-poppins max-w-md leading-tight">
            L'amour mérite sa propre icône.<br>
            Des câlins éternels, des souvenirs infinis.
          </p>
        </div>

        <!-- Social icons section -->
        <div class="flex gap-4 items-center">
          <!-- Facebook -->
          <a href="#" class="w-12 h-12 rounded-full bg-white border border-pink-100 flex items-center justify-center text-gray-600 hover:text-white hover:bg-[#1877F2] hover:border-[#1877F2] hover:scale-110 transition-all duration-300 shadow-sm group">
            <svg class="w-5 h-5 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>

          <!-- Instagram -->
          <a href="#" class="w-12 h-12 rounded-full bg-white border border-pink-100 flex items-center justify-center text-gray-600 hover:text-white hover:bg-gradient-to-r hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#FCAF45] hover:border-transparent hover:scale-110 transition-all duration-300 shadow-sm group">
            <svg class="w-5 h-5 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>

          <!-- WhatsApp -->
          <a href="#" class="w-12 h-12 rounded-full bg-white border border-pink-100 flex items-center justify-center text-gray-600 hover:text-white hover:bg-[#25D366] hover:border-[#25D366] hover:scale-110 transition-all duration-300 shadow-sm group">
            <svg class="w-5 h-5 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.76.982.998-3.675-.236-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.986 2.898a9.825 9.825 0 012.897 6.994c-.004 5.45-4.438 9.88-9.888 9.88m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.333.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.333 11.893-11.893 0-3.18-1.24-6.162-3.495-8.411"/>
            </svg>
          </a>
        </div>
      </div>

      <!-- Mobile layout (hidden on desktop) -->
      <div class="lg:hidden flex flex-col items-center justify-center gap-6 mb-6">
        <!-- Brand -->
        <div class="text-center">
          <h2 class="text-2xl md:text-3xl italic font-bold tracking-wider mb-2 valentines-title"
              style="font-family: 'Harrington', cursive;">
            Cupidon gift
          </h2>
          <p class="text-gray-600 text-sm font-poppins max-w-md">
            L'amour mérite sa propre icône. Des câlins éternels, des souvenirs infinis.
          </p>
        </div>

        <!-- Social icons -->
        <div class="flex gap-4">
          <!-- Facebook -->
          <a href="#" class="w-12 h-12 rounded-full bg-white border border-pink-100 flex items-center justify-center text-gray-600 hover:text-white hover:bg-[#1877F2] hover:border-[#1877F2] hover:scale-110 transition-all duration-300 shadow-sm group">
            <svg class="w-5 h-5 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>

          <!-- Instagram -->
          <a href="#" class="w-12 h-12 rounded-full bg-white border border-pink-100 flex items-center justify-center text-gray-600 hover:text-white hover:bg-gradient-to-r hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#FCAF45] hover:border-transparent hover:scale-110 transition-all duration-300 shadow-sm group">
            <svg class="w-5 h-5 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>

          <!-- WhatsApp -->
          <a href="#" class="w-12 h-12 rounded-full bg-white border border-pink-100 flex items-center justify-center text-gray-600 hover:text-white hover:bg-[#25D366] hover:border-[#25D366] hover:scale-110 transition-all duration-300 shadow-sm group">
            <svg class="w-5 h-5 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.76.982.998-3.675-.236-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.986 2.898a9.825 9.825 0 012.897 6.994c-.004 5.45-4.438 9.88-9.888 9.88m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.333.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.333 11.893-11.893 0-3.18-1.24-6.162-3.495-8.411"/>
            </svg>
          </a>
        </div>
      </div>

      <!-- Divider -->
      <div class="w-full h-px bg-gradient-to-r from-transparent via-pink-100 to-transparent mb-4"></div>

      <!-- Bottom line - Copyright -->
      <div class="text-center">
        <p class="text-gray-500 text-sm font-poppins">
          © {{ new Date().getFullYear() }} CupidonGift. Tous droits réservés.
        </p>
        <p class="text-gray-400 text-xs font-poppins mt-1">
          Fabriqué avec ❤️ en France
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Simple landing page footer - no complex logic needed
</script>

<style scoped>
/* Utilise la même animation que la navbar */
.valentines-title {
  background: linear-gradient(to right, #FF1493 0%, #FF66CC 25%, #FF1493 50%, #FF66CC 75%, #FF1493 100%);
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  animation: shimmer 4s linear infinite;
}

@keyframes shimmer { 
  to { background-position: 200% center; } 
}

/* Simple hover effects */
a {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Instagram gradient fix */
.group:hover svg {
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));
}

/* Responsive adjustments */
@media (max-width: 1024px) {
  .lg\:hidden {
    display: flex;
  }
  
  .hidden.lg\:flex {
    display: none;
  }
}

@media (max-width: 640px) {
  .flex.flex-col {
    gap: 1rem;
  }
  
  .text-2xl {
    font-size: 1.5rem;
  }
  
  .text-sm {
    font-size: 0.875rem;
  }
  
  .w-12.h-12 {
    width: 2.5rem;
    height: 2.5rem;
  }
}
</style>