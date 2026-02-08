<template>
  <section 
    id="hero" 
    class="relative min-h-screen lg:h-screen flex items-center justify-center overflow-hidden bg-white pt-16 lg:pt-20 pb-8"
    @mousemove="handleParallax"
  >
    <!-- Background elements with faster animations -->
    <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <!-- Animated gradient orbs - Faster -->
      <div class="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[#FF1493]/15 to-[#FF66CC]/8 rounded-full blur-[120px] animate-orb-pulse-fast"></div>
      <div class="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-[#FF1493]/10 to-pink-200/25 rounded-full blur-[100px] animate-orb-drift-fast"></div>
      <div class="absolute top-1/3 left-2/3 w-[400px] h-[400px] bg-gradient-to-bl from-[#FF66CC]/12 to-pink-100/20 rounded-full blur-[80px] animate-orb-spin-fast"></div>
      
      <!-- Design hearts (SVG) - Faster animation -->
      <svg v-for="n in 20" :key="'heart-' + n" 
           :class="['absolute floating-heart-fast', `heart-${n}`]"
           :width="40 + (n % 5) * 10" :height="40 + (n % 5) * 10" 
           viewBox="0 0 24 24" fill="none">
        <path 
          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          :class="getHeartColor(n)"
        />
      </svg>
      
      <!-- Enhanced rose shapes - Faster -->
      <div v-for="n in 15" :key="'rose-' + n" 
           :class="['absolute floating-rose-fast', `rose-${n}`]">
        <div class="relative w-16 h-16">
          <div class="absolute inset-0 flex items-center justify-center animate-rose-spin-fast">
            <div class="w-full h-full relative">
              <!-- Outer petals -->
              <div v-for="i in 8" :key="i" 
                   class="absolute w-8 h-10 rounded-full origin-center"
                   :style="{
                     transform: `rotate(${i * 45}deg) translateY(-12px)`,
                     backgroundColor: n % 2 === 0 ? 'rgba(255, 20, 147, 0.25)' : 'rgba(255, 102, 204, 0.2)',
                     animation: `petal-pulse-fast 1.5s ease-in-out infinite ${i * 0.1}s`
                   }"></div>
              <!-- Inner petals -->
              <div v-for="i in 5" :key="'inner-' + i" 
                   class="absolute w-6 h-8 rounded-full origin-center"
                   :style="{
                     transform: `rotate(${i * 72}deg) translateY(-8px)`,
                     backgroundColor: n % 2 === 0 ? 'rgba(255, 20, 147, 0.4)' : 'rgba(255, 102, 204, 0.3)',
                     animation: `petal-pulse-fast 1s ease-in-out infinite ${i * 0.2}s`
                   }"></div>
              <!-- Center -->
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="w-4 h-4 rounded-full bg-gradient-to-r from-[#FF1493] to-[#FF66CC] animate-pulse-fast"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Enhanced explosive particles - Faster -->
      <div v-for="n in 35" :key="'particle-' + n" 
           :class="['absolute particle-fast', `particle-${n}`]">
        <div class="w-3 h-3 rounded-full animate-particle-twinkle-fast" 
             :style="{
               backgroundColor: getParticleColor(n),
               animationDelay: `${n * 0.05}s`,
               boxShadow: `0 0 20px ${getParticleColor(n)}`
             }"></div>
      </div>
      
      <!-- Abstract sparkles - Faster -->
      <div v-for="n in 20" :key="'sparkle-' + n" 
           :class="['absolute sparkle-fast', `sparkle-${n}`]">
        <div class="relative w-8 h-8">
          <div class="absolute inset-0 animate-sparkle-fast">
            <div class="w-full h-full" :style="{
              background: `radial-gradient(circle, ${getSparkleColor(n)} 0%, transparent 70%)`
            }"></div>
          </div>
        </div>
      </div>
      
      <!-- Floating dots trail - Faster -->
      <div v-for="n in 12" :key="'dot-' + n" 
           :class="['absolute floating-dot-fast', `dot-${n}`]">
        <div class="w-1 h-1 rounded-full bg-gradient-to-r from-[#FF1493] to-[#FF66CC] animate-dot-trail-fast"></div>
      </div>

      <!-- Background marquee text - CORRIGÉ : emojis dans une span -->
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400%] lg:w-[200%] opacity-[0.05] lg:opacity-[0.03] -rotate-12 lg:-rotate-6 select-none pointer-events-none">
        <div class="marquee-text font-black text-[12vh] lg:text-[20vh] whitespace-nowrap uppercase tracking-tighter text-gray-900">
          <span class="inline-block">❤️</span> VALENPELUCHE <span class="inline-block">❤️</span> PURE DOUCEUR <span class="inline-block">❤️</span> VALENPELUCHE <span class="inline-block">❤️</span> PURE DOUCEUR <span class="inline-block">❤️</span>
        </div>
      </div>
      
      <!-- Animated grid overlay -->
      <div class="absolute inset-0 opacity-[0.02] animate-grid-move-fast">
        <div class="absolute inset-0 bg-gradient-to-r from-transparent via-gray-900/10 to-transparent" 
             style="background-size: 100px 100px;"></div>
      </div>
    </div>

    <div class="container mx-auto px-6 lg:px-12 relative z-10">
      <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        
        <!-- Badge mobile - PINK restored -->
        <div class="lg:hidden inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#FF1493] to-[#FF66CC] text-white animate-fade-in mx-auto mb-6 shadow-lg">
          <span class="w-1.5 h-1.5 rounded-full bg-white animate-ping-fast"></span>
          <span class="text-[11px] font-black uppercase tracking-widest font-poppins">Édition spéciale</span>
        </div>
        
        <div class="order-2 lg:order-1 space-y-4 text-center lg:text-left">
          <!-- Badge desktop - PINK restored -->
          <div class="hidden lg:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#FF1493] to-[#FF66CC] text-white animate-fade-in mx-auto lg:mx-0 shadow-lg">
            <span class="w-1.5 h-1.5 rounded-full bg-white animate-ping-fast"></span>
            <span class="text-[11px] font-black uppercase tracking-widest font-poppins">Édition spéciale</span>
          </div>

          <div class="space-y-2">
            <h1 class="text-5xl lg:text-7xl font-black text-gray-900 leading-[1] tracking-tighter animate-fade-in-up font-poppins">
              L'amour mérite <br/>
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#FF1493] to-[#FF66CC] animate-gradient-text">sa propre icône.</span>
            </h1>
            <p class="text-sm lg:text-lg text-gray-600 max-w-lg mx-auto lg:mx-0 font-medium leading-relaxed animate-fade-in-up delay-100 font-poppins">
              Offrez une expérience sensorielle unique avec ValenPeluche : une douceur veloutée et un design haute couture pour une émotion éternelle.
            </p>
          </div>

          <div class="pt-2 animate-fade-in-up delay-200">
            <button 
              @click="scrollToOrder"
              class="group relative inline-flex items-center gap-6 px-8 py-5 bg-gradient-to-r from-[#FF1493] via-[#FF66CC] to-[#FF1493] text-white rounded-xl font-black text-lg lg:text-xl font-poppins shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-[1.02] active:scale-95 overflow-hidden animate-cta-pulse"
            >
              <!-- Animated gradient background -->
              <div class="absolute inset-0 bg-gradient-to-r from-[#FF1493] via-[#FF66CC] to-[#FF1493] bg-[length:200%_100%] animate-gradient-x-fast"></div>
              <!-- Sparkle effect -->
              <div class="absolute -top-2 -right-2 w-4 h-4 bg-white rounded-full animate-ping-fast"></div>
              <span class="relative z-10 flex items-center gap-3">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
                ADOPTER LA MIENNE
              </span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                class="h-6 w-6 relative z-10 transform transition-transform group-hover:translate-x-2 group-hover:scale-110" 
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>

        <div class="order-1 lg:order-2 relative h-[300px] lg:h-[500px] flex items-center justify-center perspective-2000">
          <!-- Enhanced badge - PINK restored -->
          <div class="absolute z-30 -bottom-2 lg:bottom-4 right-4 lg:right-8 animate-soft-bounce-fast">
            <div class="relative px-6 py-2 transform -rotate-3 shadow-xl">
              <div class="absolute inset-0 bg-gradient-to-r from-[#FF1493] to-[#FF66CC] rounded-lg skew-x-[-15deg]"></div>
              <div class="absolute inset-0 bg-gradient-to-r from-[#FF1493]/80 to-[#FF66CC]/80 rounded-lg skew-x-[-15deg]"></div>
              <span class="relative z-10 text-white font-black text-xs lg:text-sm tracking-widest uppercase font-poppins flex items-center gap-2">
                <span class="text-white">❤</span>
                Fait avec amour
              </span>
            </div>
          </div>

          <!-- Product image with enhanced glow -->
          <div class="relative z-20 w-full max-w-[220px] lg:max-w-[350px]">
            <!-- Glow effect -->
            <div class="absolute -inset-4 lg:-inset-6 bg-gradient-to-r from-[#FF1493]/20 via-[#FF66CC]/15 to-[#FF1493]/20 rounded-full blur-xl animate-glow-pulse-fast"></div>
            
            <div 
              class="relative transition-transform duration-300 ease-out"
              :style="{ transform: `translate3d(${mouse.x}px, ${mouse.y}px, 0) rotateX(${mouse.rX}deg) rotateY(${mouse.rY}deg)` }"
            >
              <img 
                src="/images/image.webp" 
                alt="ValenPeluche" 
                class="w-full h-auto drop-shadow-[0_40px_60px_rgba(0,0,0,0.2)] animate-float-3d-fast"
              />
            </div>
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
  mouse.x = (clientX - innerWidth / 2) / 40
  mouse.y = (clientY - innerHeight / 2) / 40
  mouse.rY = (clientX - innerWidth / 2) / 25
  mouse.rX = -(clientY - innerHeight / 2) / 25
}

const handleDeviceMotion = (e) => {
  const acc = e.accelerationIncludingGravity
  if (acc) {
    mouse.x = acc.x * 3
    mouse.y = acc.y * 3
    mouse.rY = acc.x * 6
    mouse.rX = -acc.y * 6
  }
}

// Helper functions for colors
const getHeartColor = (n) => {
  const colors = [
    'fill-[#FF1493]/50',
    'fill-[#FF66CC]/45',
    'fill-[#FF1493]/40',
    'fill-[#FF66CC]/35',
    'fill-[#FF1493]/45'
  ]
  return colors[n % colors.length]
}

const getParticleColor = (n) => {
  const colors = [
    'rgba(255, 20, 147, 0.8)',
    'rgba(255, 102, 204, 0.7)',
    'rgba(255, 182, 193, 0.6)',
    'rgba(255, 105, 180, 0.7)'
  ]
  return colors[n % colors.length]
}

const getSparkleColor = (n) => {
  const colors = [
    'rgba(255, 20, 147, 0.9)',
    'rgba(255, 102, 204, 0.8)',
    'rgba(255, 255, 255, 1)',
    'rgba(255, 182, 193, 0.9)'
  ]
  return colors[n % colors.length]
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
/* Enhanced animations - FASTER VERSIONS */

/* Gradient text animation */
@keyframes gradient-text {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.animate-gradient-text {
  background-size: 200% 200%;
  animation: gradient-text 3s ease infinite;
}

/* Animated gradient for button - FASTER */
@keyframes gradient-x-fast {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.animate-gradient-x-fast {
  animation: gradient-x-fast 2s ease infinite;
  background-size: 200% 100%;
}

/* Faster ping animation */
@keyframes ping-fast {
  75%, 100% {
    transform: scale(1.5);
    opacity: 0;
  }
}

.animate-ping-fast {
  animation: ping-fast 1s cubic-bezier(0, 0, 0.2, 1) infinite;
}

/* CTA pulse animation - FASTER */
@keyframes cta-pulse {
  0%, 100% {
    box-shadow: 0 20px 40px rgba(255, 20, 147, 0.4);
  }
  50% {
    box-shadow: 0 20px 60px rgba(255, 20, 147, 0.7);
  }
}

.animate-cta-pulse {
  animation: cta-pulse 1.5s ease-in-out infinite;
}

/* Orb animations - FASTER */
@keyframes orb-pulse-fast {
  0%, 100% { 
    opacity: 0.8;
    transform: scale(1) rotate(0deg);
  }
  50% { 
    opacity: 1;
    transform: scale(1.2) rotate(180deg);
  }
}

@keyframes orb-drift-fast {
  0%, 100% { 
    transform: translate(0, 0) rotate(0deg);
  }
  25% { 
    transform: translate(-50px, 30px) rotate(90deg);
  }
  50% { 
    transform: translate(30px, -50px) rotate(180deg);
  }
  75% { 
    transform: translate(-30px, 50px) rotate(270deg);
  }
}

@keyframes orb-spin-fast {
  0% { transform: rotate(0deg) scale(1); }
  50% { transform: rotate(180deg) scale(1.1); }
  100% { transform: rotate(360deg) scale(1); }
}

.animate-orb-pulse-fast {
  animation: orb-pulse-fast 4s ease-in-out infinite;
}

.animate-orb-drift-fast {
  animation: orb-drift-fast 15s ease-in-out infinite;
}

.animate-orb-spin-fast {
  animation: orb-spin-fast 20s linear infinite;
}

/* Enhanced floating hearts - FASTER */
.floating-heart-fast {
  opacity: 0;
  pointer-events: none;
  filter: drop-shadow(0 4px 8px rgba(255, 20, 147, 0.4));
  animation: heart-explode-fast linear infinite;
}

@keyframes heart-explode-fast {
  0% {
    transform: translate(0, 0) scale(0) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 1;
    transform: translate(var(--tx-1), var(--ty-1)) scale(1.3) rotate(45deg);
  }
  20% {
    opacity: 0.8;
    transform: translate(var(--tx-2), var(--ty-2)) scale(1.2) rotate(90deg);
  }
  40% {
    opacity: 0.6;
    transform: translate(var(--tx-3), var(--ty-3)) scale(1) rotate(180deg);
  }
  60% {
    opacity: 0.4;
    transform: translate(var(--tx-4), var(--ty-4)) scale(0.8) rotate(270deg);
  }
  80% {
    opacity: 0.2;
    transform: translate(var(--tx-5), var(--ty-5)) scale(0.6) rotate(315deg);
  }
  100% {
    opacity: 0;
    transform: translate(var(--tx-6), var(--ty-6)) scale(0) rotate(360deg);
  }
}

/* Enhanced rose animations - FASTER */
.floating-rose-fast {
  opacity: 0;
  pointer-events: none;
  animation: rose-bloom-fast linear infinite;
}

@keyframes rose-bloom-fast {
  0% {
    transform: translate(0, 0) scale(0) rotate(0deg);
    opacity: 0;
  }
  15% {
    opacity: 1;
    transform: translate(var(--rx-1), var(--ry-1)) scale(1.4) rotate(120deg);
  }
  30% {
    opacity: 0.8;
    transform: translate(var(--rx-2), var(--ry-2)) scale(1.2) rotate(240deg);
  }
  50% {
    opacity: 0.6;
    transform: translate(var(--rx-3), var(--ry-3)) scale(1) rotate(360deg);
  }
  70% {
    opacity: 0.4;
    transform: translate(var(--rx-4), var(--ry-4)) scale(0.7) rotate(480deg);
  }
  90% {
    opacity: 0.2;
    transform: translate(var(--rx-5), var(--ry-5)) scale(0.4) rotate(600deg);
  }
  100% {
    opacity: 0;
    transform: translate(var(--rx-6), var(--ry-6)) scale(0) rotate(720deg);
  }
}

@keyframes petal-pulse-fast {
  0%, 100% {
    transform: rotate(var(--rot)) translateY(-12px) scale(1);
  }
  50% {
    transform: rotate(var(--rot)) translateY(-8px) scale(1.1);
  }
}

@keyframes rose-spin-fast {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-rose-spin-fast {
  animation: rose-spin-fast 15s linear infinite;
}

/* Enhanced particle explosion - FASTER */
.particle-fast {
  opacity: 0;
  pointer-events: none;
  animation: particle-burst-fast linear infinite;
}

@keyframes particle-burst-fast {
  0% {
    transform: translate(0, 0) scale(0);
    opacity: 0;
  }
  20% {
    opacity: 1;
    transform: translate(var(--px-1), var(--py-1)) scale(1.8);
  }
  40% {
    opacity: 0.8;
    transform: translate(var(--px-2), var(--py-2)) scale(1.4);
  }
  60% {
    opacity: 0.5;
    transform: translate(var(--px-3), var(--py-3)) scale(1);
  }
  80% {
    opacity: 0.3;
    transform: translate(var(--px-4), var(--py-4)) scale(0.6);
  }
  100% {
    opacity: 0;
    transform: translate(var(--px-5), var(--py-5)) scale(0);
  }
}

@keyframes particle-twinkle-fast {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.5;
    transform: scale(0.8);
  }
}

.animate-particle-twinkle-fast {
  animation: particle-twinkle-fast 1s ease-in-out infinite;
}

/* Sparkle animations - FASTER */
.sparkle-fast {
  opacity: 0;
  pointer-events: none;
  animation: sparkle-flow-fast linear infinite;
}

@keyframes sparkle-flow-fast {
  0% {
    transform: translate(0, 0) scale(0);
    opacity: 0;
  }
  20% {
    opacity: 1;
    transform: translate(var(--sx-1), var(--sy-1)) scale(1.5);
  }
  40% {
    opacity: 0.8;
    transform: translate(var(--sx-2), var(--sy-2)) scale(1.2);
  }
  60% {
    opacity: 0.6;
    transform: translate(var(--sx-3), var(--sy-3)) scale(0.9);
  }
  80% {
    opacity: 0.3;
    transform: translate(var(--sx-4), var(--sy-4)) scale(0.6);
  }
  100% {
    opacity: 0;
    transform: translate(var(--sx-5), var(--sy-5)) scale(0);
  }
}

@keyframes sparkle-fast {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.3;
    transform: scale(0.5);
  }
}

.animate-sparkle-fast {
  animation: sparkle-fast 1.5s ease-in-out infinite;
}

/* Dot trail animation - FASTER */
.floating-dot-fast {
  opacity: 0;
  pointer-events: none;
  animation: dot-trail-move-fast linear infinite;
}

@keyframes dot-trail-move-fast {
  0% {
    transform: translate(0, 0);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translate(var(--dx, 200px), var(--dy, 200px));
    opacity: 0;
  }
}

@keyframes dot-trail-fast {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.5);
    opacity: 0.7;
  }
}

.animate-dot-trail-fast {
  animation: dot-trail-fast 0.8s ease-in-out infinite;
}

/* Grid animation - FASTER */
@keyframes grid-move-fast {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100px);
  }
}

.animate-grid-move-fast {
  animation: grid-move-fast 15s linear infinite;
}

/* Glow pulse - FASTER */
@keyframes glow-pulse-fast {
  0%, 100% {
    opacity: 0.3;
  }
  50% {
    opacity: 0.5;
  }
}

.animate-glow-pulse-fast {
  animation: glow-pulse-fast 2s ease-in-out infinite;
}

/* Float 3D - FASTER */
@keyframes float3d-fast {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

.animate-float-3d-fast {
  animation: float3d-fast 3s ease-in-out infinite;
}

/* Soft bounce - FASTER */
@keyframes softBounce-fast {
  0%, 100% { transform: translateY(0) rotate(-3deg); }
  50% { transform: translateY(-10px) rotate(-1deg); }
}

.animate-soft-bounce-fast {
  animation: softBounce-fast 2s ease-in-out infinite;
}

/* Marquee - FASTER */
.marquee-text { animation: marquee 30s linear infinite; }

@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

/* Generate explosive positions - Enhanced with more variations */
/* Hearts - FASTER durations */
.heart-1 { --tx-1: 150px; --ty-1: -180px; --tx-2: 250px; --ty-2: -120px; --tx-3: 350px; --ty-3: 80px; --tx-4: 300px; --ty-4: 200px; --tx-5: 200px; --ty-5: 250px; --tx-6: 100px; --ty-6: 300px; animation-duration: 12s; animation-delay: 0s; top: 15%; left: 5%; }
.heart-2 { --tx-1: -150px; --ty-1: -100px; --tx-2: -250px; --ty-2: -60px; --tx-3: -300px; --ty-3: 50px; --tx-4: -220px; --ty-4: 150px; --tx-5: -150px; --ty-5: 200px; --tx-6: -80px; --ty-6: 250px; animation-duration: 14s; animation-delay: 2s; top: 25%; right: 10%; }
.heart-3 { --tx-1: 100px; --ty-1: 150px; --tx-2: 180px; --ty-2: 220px; --tx-3: 150px; --ty-3: 280px; --tx-4: 80px; --ty-4: 320px; --tx-5: 40px; --ty-5: 350px; --tx-6: 20px; --ty-6: 380px; animation-duration: 16s; animation-delay: 4s; bottom: 20%; left: 15%; }
.heart-4 { --tx-1: -80px; --ty-1: 120px; --tx-2: -150px; --ty-2: 180px; --tx-3: -100px; --ty-3: 230px; --tx-4: -50px; --ty-4: 280px; --tx-5: -25px; --ty-5: 320px; --tx-6: -10px; --ty-6: 350px; animation-duration: 13s; animation-delay: 3s; bottom: 30%; right: 20%; }

/* Roses - FASTER durations */
.rose-1 { --rx-1: -180px; --ry-1: -120px; --rx-2: -280px; --ry-2: -80px; --rx-3: -350px; --ry-3: 100px; --rx-4: -250px; --ry-4: 220px; --rx-5: -150px; --ry-5: 280px; --rx-6: -80px; --ry-6: 320px; animation-duration: 18s; animation-delay: 1s; top: 10%; right: 20%; }
.rose-2 { --rx-1: 200px; --ry-1: -150px; --rx-2: 320px; --ry-2: -100px; --rx-3: 400px; --ry-3: 60px; --rx-4: 320px; --ry-4: 180px; --rx-5: 220px; --ry-5: 250px; --rx-6: 150px; --ry-6: 300px; animation-duration: 20s; animation-delay: 3s; bottom: 15%; left: 10%; }
.rose-3 { --rx-1: -120px; --ry-1: 150px; --rx-2: -180px; --ry-2: 220px; --rx-3: -150px; --ry-3: 280px; --rx-4: -100px; --ry-4: 320px; --rx-5: -60px; --ry-5: 350px; --rx-6: -30px; --ry-6: 380px; animation-duration: 22s; animation-delay: 5s; top: 35%; left: 30%; }

/* Existing animations */
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

.perspective-2000 { perspective: 2000px; }

/* Mobile optimizations */
@media (max-width: 1024px) {
  h1 { 
    font-size: 2.25rem; 
    line-height: 1.1;
  }
  .container { 
    padding-top: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  
  /* Background marquee more diagonal on mobile */
  .absolute.top-1\/2 {
    width: 500% !important;
    transform: translate(-50%, -50%) rotate(-20deg) !important;
    opacity: 0.04 !important;
  }
  
  /* Reduce number of elements on mobile but keep animations */
  .floating-heart-fast:nth-child(n+12),
  .floating-rose-fast:nth-child(n+10),
  .particle-fast:nth-child(n+25),
  .sparkle-fast:nth-child(n+15),
  .floating-dot-fast:nth-child(n+8) {
    display: none;
  }
  
  /* Faster animations on mobile */
  .floating-heart-fast,
  .floating-rose-fast,
  .particle-fast,
  .sparkle-fast,
  .floating-dot-fast {
    animation-duration: calc(var(--duration, 15s) * 0.7) !important;
  }
  
  /* Smaller elements on mobile */
  .floating-heart-fast {
    width: 25px !important;
    height: 25px !important;
  }
  
  .floating-rose-fast {
    width: 35px !important;
    height: 35px !important;
  }
  
  /* Increase opacity on mobile */
  .floating-heart-fast,
  .floating-rose-fast {
    opacity: 0.8;
  }
}

@media (min-width: 1024px) {
  /* Desktop specific optimizations */
  .marquee-text {
    letter-spacing: -0.02em;
  }
}
</style>