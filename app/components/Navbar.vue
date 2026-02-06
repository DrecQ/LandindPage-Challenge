<template>
  <header 
    class="fixed top-0 z-50 w-screen max-w-full transition-all duration-300 border-b"
    :class="isScrolled ? 'bg-white/95 backdrop-blur-md h-16 shadow-sm border-gray-100' : 'bg-transparent h-20 border-transparent'"
  >
    <nav class="w-full max-w-7xl mx-auto px-6 lg:px-12 h-full">
      <div class="flex items-center justify-between h-full relative">
        
        <a href="#hero" class="group z-50 flex-shrink-0 transition-transform duration-300" :class="isOpen ? 'translate-x-8' : 'translate-x-0'">
          <span class="text-2xl md:text-4xl italic font-bold" style="font-family: 'Harrington', cursive; color: #FF1493; letter-spacing: 0.05em;">
            Valentine's gift
          </span>
        </a>

        <div class="hidden lg:flex items-center gap-4">
          <a 
            v-for="link in navLinks" 
            :key="link.id"
            :href="link.href" 
            class="brush-stroke relative text-lg font-semibold text-gray-700 transition-colors px-6 py-2 group"
          >
            <span class="relative z-10 group-hover:text-white transition-colors duration-300">{{ link.label }}</span>
          </a>
        </div>

        <div class="flex items-center gap-4">
          <button 
            @click="scrollToCTA"
            class="hidden lg:block px-8 py-3 bg-passion-red text-white rounded-full font-semibold hover:bg-valentine-pink hover:shadow-xl transition-all duration-300"
            style="background-color: #FF1493;"
          >
            Offrir maintenant 
          </button>

          <button @click="toggleMenu" class="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-full z-50 focus:outline-none">
            <div class="w-5 flex flex-col items-end gap-1">
              <span class="block h-0.5 bg-gray-900 rounded-full transition-all" :class="isOpen ? 'w-5 rotate-45 translate-y-1.5' : 'w-5'"></span>
              <span class="block w-5 h-0.5 bg-gray-900 rounded-full transition-all" :class="isOpen ? 'opacity-0' : 'opacity-100'"></span>
              <span class="block h-0.5 bg-gray-900 rounded-full transition-all" :class="isOpen ? 'w-5 -rotate-45 -translate-y-1.5' : 'w-5'"></span>
            </div>
          </button>
        </div>
      </div>
    </nav>

    <Transition 
      enter-active-class="transition duration-400 ease-out"
      enter-from-class="opacity-0 translate-x-full"
      enter-to-class="opacity-100 translate-x-0"
      leave-active-class="transition duration-300 ease-in"
      leave-from-class="opacity-100 translate-x-0"
      leave-to-class="opacity-0 translate-x-full"
    >
      <div v-if="isOpen" class="lg:hidden fixed top-0 right-0 h-auto max-h-screen w-96 bg-white shadow-2xl z-40 flex flex-col rounded-l-3xl">
        <div class="bg-gradient-to-r from-passion-red to-valentine-pink p-5 text-white text-center">
          <span class="text-xl font-bold" style="font-family: 'Playfair Display', serif;">Menu</span>
        </div>

        <div class="flex-1 overflow-y-auto p-6 space-y-6 flex flex-col items-center justify-center">
          <a 
            v-for="link in navLinks" 
            :key="link.id"
            :href="link.href" 
            @click="closeMenu"
            class="brush-stroke relative flex items-center justify-center py-3 px-10 w-full max-w-[220px] group"
            style="font-family: 'Playfair Display', serif;"
          >
            <span class="relative z-10 font-bold text-xl text-gray-800 group-active:text-white transition-colors duration-200">
              {{ link.label }}
            </span>
          </a>
        </div>

         
      </div>
    </Transition>
  </header>
</template>

<style scoped>
/* --- Le Coup de Pinceau Rectangulaire --- */
.brush-stroke::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) skewX(-10deg); /* Inclinaison pour l'effet dynamique */
  width: 90%;
  height: 70%;
  background: #FF1493;
  opacity: 0.12; /* Léger par défaut */
  
  /* Forme rectangulaire imparfaite (coins inégaux) */
  border-radius: 4px 15px 5px 12px / 8px 4px 10px 5px;
  
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 0;
}

/* Hover Desktop : Intensification */
@media (min-width: 1024px) {
  .brush-stroke:hover::before {
    opacity: 1;
    width: 105%;
    height: 85%;
    transform: translate(-50%, -50%) skewX(-5deg) rotate(-1deg);
    background: linear-gradient(135deg, #FF1493, #ff4da6);
  }
}

/* Mobile Active : Effet de pression sur la brosse */
.brush-stroke:active::before {
  opacity: 1;
  width: 100%;
  transform: translate(-50%, -50%) skewX(-5deg) scale(0.98);
  background: #FF1493;
}

/* On s'assure que le fond natif ne gêne pas */
.brush-stroke {
  background: transparent !important;
  border: none !important;
}

.overflow-y-auto::-webkit-scrollbar { width: 4px; }
.overflow-y-auto::-webkit-scrollbar-thumb { background: #FF1493; border-radius: 10px; }
</style>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isOpen = ref(false)
const isScrolled = ref(false)

const handleScroll = () => { isScrolled.value = window.scrollY > 20 }
onMounted(() => { window.addEventListener('scroll', handleScroll) })
onUnmounted(() => { window.removeEventListener('scroll', handleScroll) })

const navLinks = [
  { id: 'product', href: '#product', label: 'La Peluche' },
  { id: 'why', href: '#why', label: 'L\'expérience' },
  { id: 'benefits', href: '#benefits', label: 'Les atouts' },
  { id: 'testimonials', href: '#testimonials', label: 'Avis clients' }
]

const toggleMenu = () => {
  isOpen.value = !isOpen.value
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