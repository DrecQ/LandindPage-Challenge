<template>
  <section 
    id="hero" 
    class="relative min-h-screen lg:h-screen flex items-center justify-center overflow-hidden bg-white pt-16 lg:pt-20 pb-8"
    @mousemove="handleParallax"
  >
    <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div class="absolute top-0 right-[-5%] w-[60%] h-[50%] bg-pink-100/40 rounded-full blur-[100px] animate-pulse-slow"></div>
      
      <div v-for="n in 30" :key="n" :class="['floating-element', n % 2 === 0 ? 'element-heart' : 'element-rose', `pos-${n}`]">
        {{ n % 2 === 0 ? '❤️' : '🌹' }}
      </div>
      
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] opacity-[0.02] -rotate-12 select-none">
        <div class="marquee-text font-black text-[10vh] lg:text-[18vh] whitespace-nowrap uppercase tracking-tighter">
          ValenPeluche • Pure Douceur • ValenPeluche • Pure Douceur •
        </div>
      </div>
    </div>

    <div class="container mx-auto px-6 lg:px-12 relative z-10">
      <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        
        <div class="lg:hidden inline-flex items-center gap-2 px-4 py-2 rounded-full bg-passion-red/10 border border-passion-red/20 animate-fade-in mx-auto mb-6">
          <span class="w-1.5 h-1.5 rounded-full bg-passion-red animate-ping"></span>
          <span class="text-[11px] font-black uppercase tracking-widest text-passion-red font-poppins">Édition spéciale</span>
        </div>
        
        <div class="order-2 lg:order-1 space-y-4 text-center lg:text-left">
          <div class="hidden lg:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-passion-red/10 border border-passion-red/20 animate-fade-in mx-auto lg:mx-0">
            <span class="w-1.5 h-1.5 rounded-full bg-passion-red animate-ping"></span>
            <span class="text-[10px] font-black uppercase tracking-widest text-passion-red font-poppins">Édition spéciale</span>
          </div>

          <div class="space-y-2">
            <h1 class="text-5xl lg:text-7xl font-black text-gray-900 leading-[1] tracking-tighter animate-fade-in-up font-poppins">
              L'amour mérite <br/>
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-passion-red to-valentine-pink">sa propre icône.</span>
            </h1>
            <p class="text-sm lg:text-lg text-gray-600 max-w-lg mx-auto lg:mx-0 font-medium leading-relaxed animate-fade-in-up delay-100 font-poppins">
              Offrez une expérience sensorielle unique avec ValenPeluche : une douceur veloutée et un design haute couture pour une émotion éternelle.
            </p>
          </div>

          <div class="pt-2 animate-fade-in-up delay-200">
            <button 
              @click="scrollToOrder"
              class="group relative inline-flex items-center gap-6 px-8 py-5 bg-[#FF1493] text-white rounded-xl font-black text-lg lg:text-xl font-poppins shadow-lg hover:bg-[#FF0099] transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden"
            >
              <span class="relative z-10">ADOPTER LA MIENNE</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                class="h-6 w-6 relative z-10 transform transition-transform group-hover:translate-x-2" 
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>

        <div class="order-1 lg:order-2 relative h-[300px] lg:h-[500px] flex items-center justify-center perspective-2000">
          <div class="absolute z-30 -bottom-2 lg:bottom-4 right-4 lg:right-8 animate-soft-bounce">
            <div class="brush-badge relative px-6 py-2 transform -rotate-3">
              <span class="relative z-10 text-white font-black text-xs lg:text-sm tracking-widest uppercase font-poppins">
                Fait main
              </span>
            </div>
          </div>

          <div 
            class="relative z-20 w-full max-w-[220px] lg:max-w-[350px] transition-transform duration-300 ease-out"
            :style="{ transform: `translate3d(${mouse.x}px, ${mouse.y}px, 0) rotateX(${mouse.rX}deg) rotateY(${mouse.rY}deg)` }"
          >
            <img 
              src="/images/image.webp" 
              alt="ValenPeluche" 
              class="w-full h-auto drop-shadow-[0_30px_50px_rgba(0,0,0,0.15)] animate-float-3d"
            />
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, onMounted, onUnmounted } from 'vue'

const mouse = reactive({ x: 0, y: 0, rX: 0, rY: 0 })

const handleParallax = (e) => {
  if (window.innerWidth < 1024) return 
  const { clientX, clientY } = e
  const { innerWidth, innerHeight } = window
  mouse.x = (clientX - innerWidth / 2) / 50
  mouse.y = (clientY - innerHeight / 2) / 50
  mouse.rY = (clientX - innerWidth / 2) / 30
  mouse.rX = -(clientY - innerHeight / 2) / 30
}

const handleDeviceMotion = (e) => {
  const acc = e.accelerationIncludingGravity
  if (acc) {
    mouse.x = acc.x * 4
    mouse.y = acc.y * 4
    mouse.rY = acc.x * 8
    mouse.rX = -acc.y * 8
  }
}

onMounted(() => {
  window.addEventListener('devicemotion', handleDeviceMotion)
})

onUnmounted(() => {
  window.removeEventListener('devicemotion', handleDeviceMotion)
})

const scrollToOrder = () => {
  const el = document.getElementById('product')
  el?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
/* --- Particules de Romance (Cœurs & Roses) --- */
.floating-element {
  position: absolute;
  z-index: 1;
  opacity: 0;
  pointer-events: none;
  font-size: 1.5rem;
  animation: float-around linear infinite;
}

@keyframes float-around {
  0% {
    transform: translate(0, 110vh) rotate(0deg) scale(0.5);
    opacity: 0;
  }
  10% { opacity: 0.6; }
  50% {
    transform: translate(100px, 50vh) rotate(180deg) scale(1.2);
    opacity: 0.4;
  }
  90% { opacity: 0.6; }
  100% {
    transform: translate(-50px, -10vh) rotate(360deg) scale(0.8);
    opacity: 0;
  }
}

/* Génération de positions et délais aléatoires */
.pos-1 { left: 5%; animation-duration: 12s; animation-delay: 0s; }
.pos-2 { left: 15%; animation-duration: 18s; animation-delay: 2s; }
.pos-3 { left: 25%; animation-duration: 15s; animation-delay: 5s; font-size: 2rem; }
.pos-4 { left: 35%; animation-duration: 20s; animation-delay: 1s; }
.pos-5 { left: 45%; animation-duration: 14s; animation-delay: 8s; }
.pos-6 { left: 55%; animation-duration: 22s; animation-delay: 3s; font-size: 1.2rem; }
.pos-7 { left: 65%; animation-duration: 16s; animation-delay: 6s; }
.pos-8 { left: 75%; animation-duration: 19s; animation-delay: 0s; }
.pos-9 { left: 85%; animation-duration: 25s; animation-delay: 4s; font-size: 1.8rem; }
.pos-10 { left: 95%; animation-duration: 13s; animation-delay: 2s; }
/* Duplication pour plus de densité */
.pos-11 { left: 8%; animation-duration: 17s; animation-delay: 9s; }
.pos-12 { left: 18%; animation-duration: 21s; animation-delay: 1s; }
.pos-13 { left: 28%; animation-duration: 15s; animation-delay: 4s; }
.pos-14 { left: 38%; animation-duration: 24s; animation-delay: 7s; }
.pos-15 { left: 48%; animation-duration: 18s; animation-delay: 2s; }
.pos-16 { left: 58%; animation-duration: 16s; animation-delay: 5s; }
.pos-17 { left: 68%; animation-duration: 20s; animation-delay: 0s; }
.pos-18 { left: 78%; animation-duration: 22s; animation-delay: 3s; }
.pos-19 { left: 88%; animation-duration: 14s; animation-delay: 6s; }
.pos-20 { left: 2%; animation-duration: 19s; animation-delay: 8s; }
/* ... jusqu'à 30 */

/* --- Styles Core --- */
button { background-color: #FF1493 !important; color: white !important; }
button:hover { background-color: #D1107A !important; }

.brush-badge::before {
  content: '';
  position: absolute; top: 50%; left: 50%;
  transform: translate(-50%, -50%) skewX(-15deg);
  width: 110%; height: 110%;
  background: #FF1493;
  border-radius: 4px 15px 5px 12px / 8px 4px 10px 5px;
  z-index: 0;
}

.marquee-text { animation: marquee 60s linear infinite; }

@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.animate-float-3d { animation: float3d 5s ease-in-out infinite; }

@keyframes float3d {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}

.animate-fade-in-up {
  opacity: 0;
  animation: fadeInUp 0.8s ease-out forwards;
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

.delay-100 { animation-delay: 0.15s; }
.delay-200 { animation-delay: 0.3s; }

.animate-soft-bounce {
  animation: softBounce 4s ease-in-out infinite;
}

@keyframes softBounce {
  0%, 100% { transform: translateY(0) rotate(-3deg); }
  50% { transform: translateY(-8px) rotate(-1deg); }
}

.perspective-2000 { perspective: 2000px; }

@media (max-width: 1024px) {
  h1 { font-size: 2.25rem; }
  .container { padding-top: 1rem; }
}
</style>