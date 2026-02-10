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
        
        <a href="#hero" 
           class="group z-50 flex-shrink-0 transition-transform duration-300 active:scale-95 
                  absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0"
        >
          <span class="text-2xl md:text-4xl italic font-bold tracking-wider valentines-title" 
                style="font-family: 'Harrington', cursive;">
            Cupidon gift
          </span>
        </a>

        <div class="hidden lg:flex items-center gap-4 ml-auto">
          <a v-for="link in navLinks" :key="link.id" :href="link.href" 
             class="brush-stroke relative text-lg font-semibold text-gray-700 transition-colors px-6 py-2 group font-poppins">
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
            class="w-16 h-16 rounded-full bg-gradient-to-br from-[#FF1493] to-[#FF66CC] flex items-center justify-center shadow-2xl shadow-pink-500/40 z-[100] relative active:scale-90 transition-transform duration-200">
      <div class="w-6 flex flex-col items-center gap-1.5 pointer-events-none">
        <span class="block h-0.5 bg-white rounded-full transition-all duration-300" :class="isOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'"></span>
        <span class="block w-6 h-0.5 bg-white rounded-full transition-all duration-300" :class="isOpen ? 'opacity-0' : 'opacity-100'"></span>
        <span class="block h-0.5 bg-white rounded-full transition-all duration-300" :class="isOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-6'"></span>
      </div>
      <div v-if="!isOpen && !isDragging" class="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full border-2 border-[#FF1493] animate-pulse"></div>
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
          <a v-for="link in navLinks" :key="link.id" :href="link.href" @click="closeMenu"
             class="brush-stroke relative flex items-center justify-center py-3 px-4 w-full group transition-all">
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
const dragStart = ref({ x: 0, y: 0 })
const menuPosition = ref({ x: 0, y: 0 })

const navLinks = [
  { id: 'product', href: '#product', label: 'Ma Peluche' },
  { id: 'why', href: '#why', label: 'Me choisir' },
  { id: 'benefits', href: '#product', label: 'Mes atouts' },
  { id: 'testimonials', href: '#testimonials', label: 'Avis clients' }
]

const handleScroll = () => { isScrolled.value = window.scrollY > 60 }

const checkMobile = () => {
  isMobile.value = window.innerWidth < 1024
  if (isMobile.value && menuPosition.value.x === 0) {
    menuPosition.value = { x: window.innerWidth - 60, y: window.innerHeight - 80 }
  }
}

// Logique menu style (Ancrage intelligent conservé)
const menuStyle = computed(() => {
  const menuWidth = 240; const menuHeight = 220; const btnRadius = 32; const gap = 12
  const isAtRight = menuPosition.value.x > window.innerWidth / 2
  const left = isAtRight ? -(menuWidth + btnRadius + gap) : (btnRadius + gap)
  let top = -menuHeight / 2 + btnRadius
  const absoluteTop = menuPosition.value.y + top
  if (absoluteTop < 20) top = -menuPosition.value.y + 20
  if (absoluteTop + menuHeight > window.innerHeight - 20) top = (window.innerHeight - 20 - menuHeight) - menuPosition.value.y
  return { left: `${left}px`, top: `${top}px`, width: `${menuWidth}px`, transformOrigin: isAtRight ? 'right center' : 'left center' }
})

const arrowStyle = computed(() => {
  const isAtRight = menuPosition.value.x > window.innerWidth / 2
  return {
    top: '50%', [isAtRight ? 'right' : 'left']: '-8px', transform: 'translateY(-50%) rotate(45deg)',
    borderLeft: !isAtRight ? '1px solid #eee' : 'none', borderBottom: !isAtRight ? '1px solid #eee' : 'none',
    borderRight: isAtRight ? '1px solid #eee' : 'none', borderTop: isAtRight ? '1px solid #eee' : 'none',
  }
})

// Drag logic
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

const toggleMenu = () => { if (!isDragging.value) isOpen.value = !isOpen.value }
const closeMenu = () => { isOpen.value = false }

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('resize', checkMobile)
  window.addEventListener('mousemove', onDrag)
  window.addEventListener('mouseup', endDrag)
  window.addEventListener('touchmove', onDrag, { passive: false })
  window.addEventListener('touchend', endDrag)
  checkMobile()
})
</script>

<style scoped>
.valentines-title {
  background: linear-gradient(to right, #FF1493 0%, #FF66CC 25%, #FF1493 50%, #FF66CC 75%, #FF1493 100%);
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text; /* version standard */
  -webkit-text-fill-color: transparent;
  color: transparent;    /* fallback pour Firefox */
  animation: shimmer 4s linear infinite;
}


@keyframes shimmer { to { background-position: 200% center; } }

/* CHANGEMENT ICI : Rose plus foncé (#FF1493) pour desktop */
.brush-stroke::before {
  content: ''; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%) skewX(-10deg);
  width: 90%; height: 70%; background: #FF1493; opacity: 0.12; border-radius: 4px 15px 5px 12px; transition: all 0.3s ease;
}

/* CHANGEMENT ICI : Effet hover avec rose plus foncé pour desktop */
.brush-stroke:hover::before {
  background: #FF1493; opacity: 1; width: 100%; height: 100%; border-radius: 10px;
}

/* CHANGEMENT ICI : Pour le menu mobile */
.brush-stroke.group-active::before {
  background: #FF1493; opacity: 1; width: 100%; height: 100%; border-radius: 10px;
}

.fade-enter-active, .fade-leave-active { transition: opacity 0.3s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
.draggable { touch-action: none; user-select: none; }
</style>