/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      colors: {
        'passion-red': '#DC143C',
        'valentine-pink': '#FF0099',
        'romantic-pink': '#FFB6D9',
        'off-white': '#FAFAF8',
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
      <div class="flex items-center justify-between h-full relative">
        
        <!-- Logo -->
        <a href="#hero" class="flex items-center gap-3 group z-50">
          <div class="relative w-16 h-16 flex items-center justify-center flex-shrink-0">
            <img 
              src="/images/logo.webp" 
              alt="ValenPeluche Logo" 
              class="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500 rounded-full"
            />
          </div>
          <span class="text-2xl md:text-3xl font-bold text-gray-800 tracking-tight">
            <span class="text-passion-red">Valen</span>Peluche
          </span>
        </a>

        <!-- Navigation Desktop - Texte uniquement -->
        <div class="hidden lg:flex items-center gap-8">
          <a 
            v-for="link in navLinks" 
            :key="link.id"
            :href="link.href" 
            class="relative text-base font-medium text-gray-700 hover:text-passion-red transition-colors duration-300 py-2"
          >
            {{ link.label }}
          </a>
        </div>

        <!-- CTA Desktop -->
        <div class="flex items-center gap-4">
          <button 
            @click="scrollToCTA"
            class="hidden lg:flex items-center gap-2 px-8 py-3 bg-passion-red text-white rounded-full font-semibold hover:bg-valentine-pink hover:shadow-lg hover:shadow-valentine-pink/20 transition-all duration-300"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
            </svg>
            <span>Offrir maintenant</span>
          </button>

          <!-- Burger Menu Mobile -->
          <button 
            @click="toggleMenu"
            class="lg:hidden relative w-12 h-12 flex items-center justify-center rounded-full hover:bg-pink-50 transition-colors z-50 focus:outline-none"
            aria-label="Menu"
          >
            <div class="w-6 flex flex-col items-center gap-1.5">
              <span 
                class="block w-6 h-0.5 bg-gray-900 rounded-full transition-all duration-300"
                :class="isOpen ? 'rotate-45 translate-y-2' : ''"
              ></span>
              <span 
                class="block w-6 h-0.5 bg-gray-900 rounded-full transition-all duration-300"
                :class="isOpen ? 'opacity-0' : ''"
              ></span>
              <span 
                class="block w-6 h-0.5 bg-gray-900 rounded-full transition-all duration-300"
                :class="isOpen ? '-rotate-45 -translate-y-2' : ''"
              ></span>
            </div>
          </button>
        </div>
      </div>
    </nav>

    <!-- Menu Mobile Flottant à Droite -->
    <Transition 
      enter-active-class="transition duration-400 ease-out"
      enter-from-class="opacity-0 translate-x-full"
      enter-to-class="opacity-100 translate-x-0"
      leave-active-class="transition duration-300 ease-in"
      leave-from-class="opacity-100 translate-x-0"
      leave-to-class="opacity-0 translate-x-full"
    >
      <div 
        v-if="isOpen"
        class="lg:hidden fixed top-0 right-0 h-screen w-80 bg-white shadow-2xl z-40 flex flex-col"
      >
        <!-- Header du menu mobile -->
        <div class="bg-gradient-to-r from-passion-red to-valentine-pink p-6 text-white flex-shrink-0">
          <div class="flex items-center gap-3 mb-2">
            <div class="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <svg class="w-6 h-6 text-passion-red" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </div>
            <span class="text-xl font-bold">Menu</span>
          </div>
          <p class="text-sm text-white/90">Découvrez notre peluche</p>
        </div>

        <!-- Navigation Links - Texte uniquement avec hover subtil -->
        <div class="flex-1 overflow-y-auto p-6 space-y-2">
          <a 
            v-for="link in navLinks" 
            :key="link.id"
            :href="link.href" 
            @click="closeMenu"
            class="block px-5 py-4 text-gray-800 font-medium hover:text-passion-red hover:bg-pink-50/50 rounded-lg transition-all duration-300"
          >
            {{ link.label }}
          </a>
        </div>

        <!-- CTA Mobile - Fixé en bas -->
        <div class="flex-shrink-0 p-6 border-t border-gray-100">
          <button 
            @click="scrollToCTA"
            class="w-full flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-passion-red to-valentine-pink text-white rounded-xl font-semibold text-base shadow-lg active:scale-95 transition-transform duration-200"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
            </svg>
            <span>Offrir maintenant</span>
          </button>
        </div>
      </div>
    </Transition>

    <!-- Overlay sombre -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div 
        v-if="isOpen" 
        @click="closeMenu"
        class="lg:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-30"
      ></div>
    </Transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isOpen = ref(false)
const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

// Navigation simplifiée - Texte uniquement
const navLinks = [
  { id: 'product', href: '#product', label: 'La Peluche' },
  { id: 'why', href: '#why', label: 'Pourquoi offrir' },
  { id: 'benefits', href: '#benefits', label: 'Bénéfices' },
  { id: 'pricing', href: '#pricing', label: 'Prix & Offre' },
  { id: 'testimonials', href: '#testimonials', label: 'Avis clients' }
]

const toggleMenu = () => {
  isOpen.value = !isOpen.value
  // Bloquer le scroll du body quand le menu est ouvert
  document.body.style.overflow = isOpen.value ? 'hidden' : ''
}

const closeMenu = () => {
  isOpen.value = false
  document.body.style.overflow = ''
}

const scrollToCTA = () => {
  const ctaSection = document.getElementById('final-cta') || document.getElementById('pricing')
  ctaSection?.scrollIntoView({ behavior: 'smooth' })
  closeMenu()
}
</script>

<style scoped>
/* Scrollbar personnalisée pour le menu mobile */
.overflow-y-auto::-webkit-scrollbar {
  width: 4px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: transparent;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background: #FF0099;
  border-radius: 2px;
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background: #DC143C;
}
</style>