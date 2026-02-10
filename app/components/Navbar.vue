<template>
  <header 
    class="fixed top-0 z-50 w-screen max-w-full transition-all duration-700 ease-in-out"
    :class="[
      isScrolled 
        ? 'translate-y-0 opacity-100 h-16 bg-white/75 backdrop-blur-lg border-b border-pink-100 shadow-md' 
        : '-translate-y-full opacity-0 h-20 bg-transparent border-transparent lg:translate-y-0 lg:opacity-100 lg:bg-transparent'
    ]"
  >
    <nav class="w-full max-w-7xl mx-auto px-6 lg:px-12 h-full relative z-10">
      <div class="flex items-center justify-between h-full relative">
        
        <!-- Icône accueil - REPOSITIONNÉE À L'EXTRÊMITÉ GAUCHE -->
        <a href="/" 
           class="group z-50 flex-shrink-0 transition-all duration-300 hover:scale-110 active:scale-95"
           title="Retour à l'accueil">
          <div class="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-gradient-to-br from-[#FF1493]/10 to-[#FF66CC]/10 flex items-center justify-center group-hover:from-[#FF1493]/20 group-hover:to-[#FF66CC]/20 transition-all duration-300 border border-pink-100 group-hover:border-pink-200 shadow-sm group-hover:shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" 
                 class="w-5 h-5 lg:w-6 lg:h-6 text-[#FF1493] group-hover:text-[#FF66CC] transition-colors duration-300" 
                 fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" 
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </div>
        </a>

        <!-- Logo centré - AJUSTÉ POUR LAISSER DE L'ESPACE À GAUCHE -->
        <a href="#hero" 
           class="group z-50 flex-shrink-0 transition-transform duration-300 active:scale-95 
                  absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0 lg:ml-16"
        >
          <span class="text-2xl md:text-4xl italic font-bold tracking-wider valentines-title" 
                style="font-family: 'Harrington', cursive;">
            Cupidon gift
          </span>
        </a>

        <div class="hidden lg:flex items-center gap-4 ml-auto">
          <a v-for="link in navLinks" :key="link.id" :href="link.href" 
             class="brush-stroke relative text-lg font-semibold text-gray-700 transition-colors px-6 py-2 group font-poppins"
             :class="{ 'active-link': activeSection === link.id }">
            <span class="relative z-10 group-hover:text-white transition-colors duration-300">{{ link.label }}</span>
          </a>
        </div>
      </div>
    </nav>
  </header>

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
            class="w-20 h-20 rounded-full bg-gradient-to-br from-[#FF1493] to-[#FF66CC] flex items-center justify-center shadow-2xl shadow-pink-500/40 z-[100] relative active:scale-90 transition-transform duration-200 overflow-hidden">
      
      <!-- Animation de l'image en fond -->
      <div class="absolute inset-0 flex items-center justify-center overflow-hidden">
        <div class="floating-heart w-full h-full flex items-center justify-center">
          <img src="/images/image.webp" 
               alt="Cupidon" 
               class="w-16 h-16 object-contain filter drop-shadow-lg"
               style="image-rendering: crisp-edges;">
        </div>
      </div>
      
      <!-- Menu hamburger par-dessus -->
      <div class="w-6 flex flex-col items-center gap-1.5 pointer-events-none relative z-10">
        <span class="block h-0.5 bg-white rounded-full transition-all duration-300" :class="isOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'"></span>
        <span class="block w-6 h-0.5 bg-white rounded-full transition-all duration-300" :class="isOpen ? 'opacity-0' : 'opacity-100'"></span>
        <span class="block h-0.5 bg-white rounded-full transition-all duration-300" :class="isOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-6'"></span>
      </div>
      
      <div v-if="!isOpen && !isDragging" class="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full border-2 border-[#FF1493] animate-pulse z-20"></div>
    </button>

    <Transition 
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 scale-90"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-90"
    >
      <div v-if="isOpen" class="absolute z-[99] bg-white/95 backdrop-blur-xl shadow-2xl rounded-2xl border border-white/50 p-4" :style="menuStyle">
        <div class="flex flex-col gap-2 min-w-[200px]">
          <a href="/" @click="closeMenu"
             class="brush-stroke relative flex items-center justify-center py-3 px-4 w-full group transition-all bg-gradient-to-r from-[#FF1493]/5 to-[#FF66CC]/5">
            <span class="relative z-10 font-bold text-lg text-[#FF1493] group-active:text-white text-center flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Retour à l'accueil
            </span>
          </a>
          <div class="border-t border-gray-100 my-1"></div>
          <a v-for="link in navLinks" :key="link.id" :href="link.href" @click="closeMenu"
             class="brush-stroke relative flex items-center justify-center py-3 px-4 w-full group transition-all"
             :class="{ 'active-link-mobile': activeSection === link.id }">
            <span class="relative z-10 font-bold text-lg text-gray-800 group-active:text-white text-center">{{ link.label }}</span>
          </a>
        </div>
        <div class="absolute w-4 h-4 bg-white/95 backdrop-blur-xl border border-white/50" :style="arrowStyle"></div>
      </div>
    </Transition>
  </div>

  <Transition name="fade">
    <div v-if="isOpen" @click="closeMenu" class="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-[90]"></div>
  </Transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

const isOpen = ref(false)
const isScrolled = ref(false)
const isDragging = ref(false)
const isMobile = ref(false)
const activeSection = ref('')
const dragStart = ref({ x: 0, y: 0 })
const menuPosition = ref({ x: 0, y: 0 })

const navLinks = [
  { id: 'product', href: '#product', label: 'Découvrir' },
  { id: 'benefits', href: '#why', label: 'Mes atouts' },
  { id: 'why', href: '#pricing', label: 'Me choisir' },
  { id: 'testimonials', href: '#testimonials', label: 'Avis clients' }
]

const handleScroll = () => { 
  isScrolled.value = window.scrollY > 60
  
  // Détection de la section active
  const sections = navLinks.map(link => ({
    id: link.id,
    element: document.querySelector(link.href)
  })).filter(section => section.element)
  
  const scrollPosition = window.scrollY + 100
  
  for (let section of sections) {
    const element = section.element
    const offsetTop = element.offsetTop
    const offsetBottom = offsetTop + element.offsetHeight
    
    if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
      activeSection.value = section.id
      break
    }
  }
}

const checkMobile = () => {
  isMobile.value = window.innerWidth < 1024
  if (isMobile.value && menuPosition.value.x === 0) {
    menuPosition.value = { x: window.innerWidth - 60, y: window.innerHeight - 80 }
  }
}

// Menu qui s'ouvre sur le côté opposé avec limitations de visibilité
const menuStyle = computed(() => {
  const menuWidth = 240
  const menuHeight = 270
  const btnRadius = 40
  const gap = 12
  const margin = 20
  const isAtRight = menuPosition.value.x > window.innerWidth / 2
  
  const left = isAtRight ? -(menuWidth + gap) : (btnRadius * 2 + gap)
  
  let top = -menuHeight / 2 + btnRadius
  
  const absoluteTop = menuPosition.value.y + top
  const absoluteBottom = absoluteTop + menuHeight
  
  if (absoluteTop < margin) {
    top = -menuPosition.value.y + margin
  }
  
  if (absoluteBottom > window.innerHeight - margin) {
    top = (window.innerHeight - margin - menuHeight) - menuPosition.value.y
  }
  
  return { 
    left: `${left}px`, 
    top: `${top}px`, 
    width: `${menuWidth}px`, 
    transformOrigin: isAtRight ? 'right center' : 'left center' 
  }
})

const arrowStyle = computed(() => {
  const isAtRight = menuPosition.value.x > window.innerWidth / 2
  return {
    top: '50%',
    [isAtRight ? 'right' : 'left']: '-8px',
    transform: 'translateY(-50%) rotate(45deg)',
    borderLeft: !isAtRight ? '1px solid #eee' : 'none',
    borderBottom: !isAtRight ? '1px solid #eee' : 'none',
    borderRight: isAtRight ? '1px solid #eee' : 'none',
    borderTop: isAtRight ? '1px solid #eee' : 'none',
  }
})

const startDrag = (e) => {
  if (e.target.closest('a')) return
  isDragging.value = true
  const clientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX
  const clientY = e.type.includes('touch') ? e.touches[0].clientY : e.clientY
  dragStart.value = { x: clientX - menuPosition.value.x, y: clientY - menuPosition.value.y }
}

const onDrag = (e) => {
  if (!isDragging.value) return
  const clientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX
  const clientY = e.type.includes('touch') ? e.touches[0].clientY : e.clientY
  menuPosition.value = { x: clientX - dragStart.value.x, y: clientY - dragStart.value.y }
}

const endDrag = () => {
  if (!isDragging.value) return
  isDragging.value = false
  const margin = 60
  const finalX = menuPosition.value.x < window.innerWidth / 2 ? margin : window.innerWidth - margin
  const finalY = Math.max(margin, Math.min(window.innerHeight - margin, menuPosition.value.y))
  menuPosition.value = { x: finalX, y: finalY }
}

const toggleMenu = () => { 
  if (!isDragging.value) isOpen.value = !isOpen.value 
}

const closeMenu = () => { 
  isOpen.value = false 
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('resize', checkMobile)
  window.addEventListener('mousemove', onDrag)
  window.addEventListener('mouseup', endDrag)
  window.addEventListener('touchmove', onDrag, { passive: false })
  window.addEventListener('touchend', endDrag)
  
  // Détection initiale de la section active
  setTimeout(() => {
    handleScroll()
  }, 100)
  
  checkMobile()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', checkMobile)
  window.removeEventListener('mousemove', onDrag)
  window.removeEventListener('mouseup', endDrag)
  window.removeEventListener('touchmove', onDrag)
  window.removeEventListener('touchend', endDrag)
})
</script>

<style scoped>
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

/* Animation flottante fixe et stable */
.floating-heart {
  animation: floatStable 6s ease-in-out infinite;
  transform-origin: center center;
  will-change: transform;
}

@keyframes floatStable {
  0%, 100% { 
    transform: translateY(0) scale(1);
  }
  50% { 
    transform: translateY(-8px) scale(1.05);
  }
}

/* Styles brush conservés */
.brush-stroke::before {
  content: ''; 
  position: absolute; 
  top: 50%; 
  left: 50%; 
  transform: translate(-50%, -50%) skewX(-10deg);
  width: 90%; 
  height: 70%; 
  background: #FF1493; 
  opacity: 0.12; 
  border-radius: 4px 15px 5px 12px; 
  transition: all 0.3s ease;
}

.brush-stroke:hover::before {
  background: #FF1493; 
  opacity: 1; 
  width: 100%; 
  height: 100%; 
  border-radius: 10px;
}

.brush-stroke.group-active::before {
  background: #FF1493; 
  opacity: 1; 
  width: 100%; 
  height: 100%; 
  border-radius: 10px;
}

/* Style pour les liens actifs sur desktop */
.active-link::before {
  background: #FF1493 !important; 
  opacity: 1 !important; 
  width: 100% !important; 
  height: 100% !important; 
  border-radius: 10px !important;
}

.active-link span {
  color: white !important;
}

/* Style pour les liens actifs sur mobile */
.active-link-mobile::before {
  background: #FF1493 !important; 
  opacity: 1 !important; 
  width: 100% !important; 
  height: 100% !important; 
  border-radius: 10px !important;
}

.active-link-mobile span {
  color: white !important;
}

.fade-enter-active, .fade-leave-active { 
  transition: opacity 0.3s; 
}
.fade-enter-from, .fade-leave-to { 
  opacity: 0; 
}
.draggable { 
  touch-action: none; 
  user-select: none; 
}

/* Animation pour l'icône d'accueil */
@keyframes homePulse {
  0%, 100% { 
    opacity: 0.8;
    transform: scale(1);
  }
  50% { 
    opacity: 1;
    transform: scale(1.1);
  }
}

/* Icône d'accueil avec animation subtile */
.group:hover div {
  animation: homePulse 2s ease-in-out infinite;
}
</style>