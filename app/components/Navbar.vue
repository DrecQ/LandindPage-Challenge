<template>
  <header 
    class="fixed top-0 z-50 w-screen max-w-full transition-all duration-300 border-b"
    :class="isScrolled ? 'bg-white/95 backdrop-blur-md h-16 shadow-sm border-gray-100' : 'bg-transparent h-20 border-transparent'"
  >
    <nav class="w-full max-w-7xl mx-auto px-6 lg:px-12 h-full">
      <div class="flex items-center justify-between h-full relative">
        
        <a href="#hero" class="group z-50 flex-shrink-0 transition-transform duration-300">
          <span class="text-2xl md:text-4xl italic font-bold" style="font-family: 'Harrington', cursive; color: #FF0099; letter-spacing: 0.05em;">
            Valentine's gift
          </span>
        </a>

        <div class="hidden lg:flex items-center gap-4 ml-auto">
          <a 
            v-for="link in navLinks" 
            :key="link.id"
            :href="link.href" 
            class="brush-stroke relative text-lg font-semibold text-gray-700 transition-colors px-6 py-2 group font-poppins"
          >
            <span class="relative z-10 group-hover:text-white transition-colors duration-300">{{ link.label }}</span>
          </a>
        </div>
      </div>
    </nav>

    <div v-if="isMobile" class="lg:hidden fixed z-[100] draggable" 
         :style="{
           left: `${menuPosition.x}px`,
           top: `${menuPosition.y}px`,
           transform: 'translate(-50%, -50%)',
           transition: isDragging ? 'none' : 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
         }"
         @touchstart.passive="startDrag"
         @mousedown="startDrag">
      
      <button @click="toggleMenu" 
              class="w-16 h-16 rounded-full bg-gradient-to-br from-[#FF0099] to-[#ff66cc] flex items-center justify-center shadow-2xl shadow-pink-500/40 z-[100] relative active:scale-90 transition-transform duration-200">
        
        <div class="w-6 flex flex-col items-center gap-1.5 pointer-events-none">
          <span class="block h-0.5 bg-white rounded-full transition-all duration-300" 
                :class="isOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'"></span>
          <span class="block w-6 h-0.5 bg-white rounded-full transition-all duration-300" 
                :class="isOpen ? 'opacity-0' : 'opacity-100'"></span>
          <span class="block h-0.5 bg-white rounded-full transition-all duration-300" 
                :class="isOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-6'"></span>
        </div>
        
        <div v-if="!isOpen && !isDragging" class="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full border-2 border-[#FF0099] animate-pulse"></div>
      </button>

      <Transition 
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0 scale-90"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-90"
      >
        <div v-if="isOpen" 
             class="absolute z-[99] bg-white/95 backdrop-blur-xl shadow-2xl rounded-2xl border border-white/50 p-4"
             :style="menuStyle">
          
          <div class="flex flex-col gap-2 min-w-[200px]">
            <a 
              v-for="link in navLinks" 
              :key="link.id"
              :href="link.href" 
              @click="closeMenu"
              class="brush-stroke relative flex items-center justify-center py-3 px-4 w-full group transition-all"
            >
              <span class="relative z-10 font-bold text-lg text-gray-800 group-active:text-white text-center">
                {{ link.label }}
              </span>
            </a>
          </div>
          
          <div class="absolute w-4 h-4 bg-white/95 backdrop-blur-xl border border-white/50"
               :style="arrowStyle"></div>
        </div>
      </Transition>
    </div>

    <Transition name="fade">
      <div v-if="isOpen" @click="closeMenu" class="lg:hidden fixed inset-0 bg-black/30 backdrop-blur-sm z-[90]"></div>
    </Transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

const isOpen = ref(false)
const isScrolled = ref(false)
const isDragging = ref(false)
const isMobile = ref(false)
const dragStart = ref({ x: 0, y: 0 })

// Position initiale (bas-droite)
const menuPosition = ref({ x: 0, y: 0 })

const navLinks = [
  { id: 'product', href: '#product', label: 'La Peluche' },
  { id: 'why', href: '#why', label: 'L\'expérience' },
  { id: 'benefits', href: '#benefits', label: 'Les atouts' },
  { id: 'testimonials', href: '#testimonials', label: 'Avis clients' }
]

// --- Logique d'affichage et Scroll ---
const handleScroll = () => { isScrolled.value = window.scrollY > 20 }

const checkMobile = () => {
  isMobile.value = window.innerWidth < 1024
  if (isMobile.value && menuPosition.value.x === 0) {
    menuPosition.value = { x: window.innerWidth - 60, y: window.innerHeight - 80 }
  }
}

// --- Logique du Menu (Positionnement Intelligent) ---
const menuStyle = computed(() => {
  const menuWidth = 240
  const menuHeight = 220
  const margin = 20
  const btnSize = 64

  let left = 0
  let top = 0
  let origin = 'center'

  // Priorité de direction selon l'espace disponible
  if (menuPosition.value.x < window.innerWidth / 2) {
    // Bouton à gauche -> Menu à droite
    left = (btnSize / 2) + margin
    top = -menuHeight / 2
    origin = 'left center'
  } else {
    // Bouton à droite -> Menu à gauche
    left = -menuWidth - margin - (btnSize / 2)
    top = -menuHeight / 2
    origin = 'right center'
  }

  // Ajustement vertical si trop haut ou trop bas
  const absoluteTop = menuPosition.value.y + top
  if (absoluteTop < margin) top = -menuPosition.value.y + margin
  if (absoluteTop + menuHeight > window.innerHeight - margin) top = (window.innerHeight - margin - menuHeight) - menuPosition.value.y

  return {
    left: `${left}px`,
    top: `${top}px`,
    width: `${menuWidth}px`,
    transformOrigin: origin
  }
})

const arrowStyle = computed(() => {
  const isLeft = menuPosition.value.x < window.innerWidth / 2
  return {
    top: '50%',
    [isLeft ? 'left' : 'right']: '-8px',
    transform: 'translateY(-50%) rotate(45deg)',
    borderLeft: isLeft ? '1px solid #eee' : 'none',
    borderBottom: isLeft ? '1px solid #eee' : 'none',
    borderRight: !isLeft ? '1px solid #eee' : 'none',
    borderTop: !isLeft ? '1px solid #eee' : 'none',
  }
})

// --- Gestion du Drag & Snap ---
const startDrag = (e) => {
  isDragging.value = true
  const clientX = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX
  const clientY = e.type === 'touchstart' ? e.touches[0].clientY : e.clientY
  
  dragStart.value = {
    x: clientX - menuPosition.value.x,
    y: clientY - menuPosition.value.y
  }

  window.addEventListener('mousemove', onDrag)
  window.addEventListener('mouseup', endDrag)
  window.addEventListener('touchmove', onDrag, { passive: false })
  window.addEventListener('touchend', endDrag)
}

const onDrag = (e) => {
  if (!isDragging.value) return
  if (e.cancelable) e.preventDefault()
  
  const clientX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX
  const clientY = e.type === 'touchmove' ? e.touches[0].clientY : e.clientY

  menuPosition.value = {
    x: clientX - dragStart.value.x,
    y: clientY - dragStart.value.y
  }
}

const endDrag = () => {
  if (!isDragging.value) return
  isDragging.value = false
  
  // LOGIQUE DE MAGNETISME (SNAP)
  const margin = 60
  const x = menuPosition.value.x
  const midX = window.innerWidth / 2

  // Snap gauche ou droite
  const finalX = x < midX ? margin : window.innerWidth - margin
  
  // Garder dans les limites verticales
  const finalY = Math.max(margin, Math.min(window.innerHeight - margin, menuPosition.value.y))

  menuPosition.value = { x: finalX, y: finalY }

  window.removeEventListener('mousemove', onDrag)
  window.removeEventListener('mouseup', endDrag)
  window.removeEventListener('touchmove', onDrag)
  window.removeEventListener('touchend', endDrag)
}

const toggleMenu = () => {
  if (isDragging.value) return
  isOpen.value = !isOpen.value
}

const closeMenu = () => { isOpen.value = false }

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('resize', checkMobile)
  checkMobile()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', checkMobile)
})
</script>

<style scoped>
.brush-stroke::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) skewX(-10deg);
  width: 90%;
  height: 70%;
  background: #FF0099;
  opacity: 0.12;
  border-radius: 4px 15px 5px 12px;
  transition: all 0.3s ease;
  z-index: 0;
}

@media (min-width: 1024px) {
  .brush-stroke:hover::before {
    opacity: 1;
    width: 105%;
    height: 85%;
    background: linear-gradient(135deg, #FF0099, #ff1f99);
  }
  .brush-stroke:hover span { color: white; }
}

.brush-stroke:active::before {
  opacity: 1;
  background: #FF0099;
  transform: translate(-50%, -50%) skewX(-5deg) scale(0.95);
}

.fade-enter-active, .fade-leave-active { transition: opacity 0.3s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

.draggable {
  touch-action: none;
  user-select: none;
}
</style>