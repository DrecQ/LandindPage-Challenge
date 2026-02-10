<template>
  <section id="why" class="py-24 bg-white relative overflow-hidden">
    <!-- Animated background elements (comme heroSection) -->
    <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <!-- Animated gradient orbs -->
      <div class="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[#FF1493]/10 to-[#FF66CC]/5 rounded-full blur-[120px] animate-orb-pulse-fast opacity-50"></div>
      <div class="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-[#FF1493]/8 to-pink-200/20 rounded-full blur-[100px] animate-orb-drift-fast opacity-40"></div>
      
      <!-- Animated hearts (like heroSection) -->
      <svg v-for="n in 10" :key="'heart-bg-' + n" 
           :class="['absolute floating-heart-fast', `heart-bg-${n}`]"
           :width="20 + (n % 5) * 5" :height="20 + (n % 5) * 5" 
           viewBox="0 0 24 24" fill="none">
        <path 
          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          :class="getHeartBgColor(n)"
        />
      </svg>
      
      <!-- Enhanced rose shapes (like heroSection) -->
      <div v-for="n in 8" :key="'rose-bg-' + n" 
           :class="['absolute floating-rose-fast', `rose-bg-${n}`]">
        <div class="relative w-10 h-10">
          <div class="absolute inset-0 flex items-center justify-center animate-rose-spin-fast opacity-50">
            <div class="w-full h-full relative">
              <div v-for="i in 6" :key="i" 
                   class="absolute w-4 h-5 rounded-full origin-center opacity-40"
                   :style="{
                     transform: `rotate(${i * 60}deg) translateY(-6px)`,
                     backgroundColor: n % 2 === 0 ? 'rgba(255, 20, 147, 0.3)' : 'rgba(255, 102, 204, 0.2)',
                   }"></div>
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="w-2 h-2 rounded-full bg-gradient-to-r from-[#FF1493]/40 to-[#FF66CC]/40"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Particles -->
      <div v-for="n in 15" :key="'particle-bg-' + n" 
           :class="['absolute particle-fast', `particle-bg-${n}`]">
        <div class="w-2 h-2 rounded-full animate-particle-twinkle-fast opacity-50" 
             :style="{
               backgroundColor: getParticleBgColor(n),
               animationDelay: `${n * 0.1}s`,
             }"></div>
      </div>
    </div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Header Section -->
      <div class="text-center mb-20 reveal-section">
        <h2 class="text-4xl lg:text-6xl font-black text-gray-900 font-poppins mb-6 leading-tight">
          L'attention qu'elle 
          <span class="relative inline-block">
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#FF1493] to-[#FF66CC] italic" style="font-family: 'Harrington', cursive;">
              mérite.
            </span>
            <span class="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#FF1493] to-[#FF66CC] rounded-full"></span>
          </span>
        </h2>
        
        <p class="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto font-medium font-poppins leading-relaxed">
          Chaque détail a été pensé pour créer une expérience émotionnelle unique et mémorable.
        </p>
      </div>

      <!-- Features Grid - Style modernisé -->
      <div class="grid md:grid-cols-3 gap-8 lg:gap-12">
        <div v-for="(item, i) in reasons" :key="i" 
             :class="['relative group reveal-item', i % 2 !== 0 ? 'lg:translate-y-6' : '']"
             :style="{ animationDelay: `${i * 150}ms` }">
          
          <!-- Modern card with glass effect -->
          <div class="relative h-full p-8 lg:p-10 rounded-3xl backdrop-blur-sm bg-white/70 
                      border border-white/50 shadow-2xl hover:shadow-3xl transition-all duration-500 
                      transform hover:-translate-y-2 hover:scale-[1.02] overflow-hidden
                      group-hover:bg-white/80 group-hover:border-pink-200/30
                      text-center flex flex-col items-center before:absolute before:inset-0 
                      before:bg-gradient-to-br before:from-white/50 before:to-pink-50/30 before:-z-10">
            
            <!-- Animated gradient border -->
            <div class="absolute inset-0 rounded-3xl p-[2px] bg-gradient-to-r from-transparent via-[#FF1493]/20 to-transparent 
                        animate-gradient-border -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div class="w-full h-full bg-white rounded-3xl"></div>
            </div>
            
            <!-- Floating particles around card -->
            <div class="absolute -inset-4 -z-20 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div v-for="j in 6" :key="j" 
                   class="absolute w-1 h-1 rounded-full bg-[#FF1493]/40 animate-particle-float"
                   :style="{
                     left: `${20 + (j * 12)}%`,
                     top: `${j % 2 === 0 ? '10%' : '90%'}`,
                     animationDelay: `${j * 0.2}s`
                   }"></div>
            </div>
            
            <!-- Icon Container - Modern with glow -->
            <div class="relative inline-flex items-center justify-center w-20 h-20 lg:w-24 lg:h-24 rounded-2xl mb-6 lg:mb-8 
                        bg-gradient-to-br from-white to-pink-50 shadow-2xl 
                        group-hover:shadow-3xl transition-all duration-500
                        before:absolute before:-inset-2 before:rounded-3xl before:bg-gradient-to-r 
                        before:from-[#FF1493]/20 before:via-[#FF66CC]/10 before:to-[#FF1493]/20 
                        before:blur-md before:opacity-0 before:group-hover:opacity-100 before:transition-opacity before:duration-500
                        after:absolute after:inset-0 after:rounded-2xl after:bg-gradient-to-br 
                        after:from-white after:to-pink-50 after:-z-10">
              
              <!-- SVG Icons with gradient -->
              <div class="relative transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                <!-- Icon: Qualité -->
                <svg v-if="item.icon === 'softness'" xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 lg:w-12 lg:h-12" viewBox="0 0 24 24" fill="none">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="url(#heart-gradient)"/>
                </svg>
                <!-- Icon: Durabilité -->
                <svg v-else-if="item.icon === 'eternity'" xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 lg:w-12 lg:h-12" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm6 9.09c0 4-2.55 7.7-6 8.83-3.45-1.13-6-4.82-6-8.83V6.31l6-2.12 6 2.12v4.78z" fill="url(#heart-gradient)"/>
                  <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3z" fill="url(#shield-gradient)" opacity="0.6"/>
                </svg>
                <!-- Icon: Artisanat -->
                <svg v-else-if="item.icon === 'craft'" xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 lg:w-12 lg:h-12" viewBox="0 0 24 24" fill="none">
                  <path d="M20.41 4.94l-1.35-1.35c-.78-.78-2.05-.78-2.83 0l-9.88 9.88-2.12-2.12 1.41-1.41 1.06 1.06 8.48-8.48 1.06 1.06-1.41 1.41 2.12 2.12 1.41-1.41 1.06 1.06-8.48 8.48 1.06 1.06 9.88-9.88c.78-.78.78-2.05 0-2.83zM3 21h2v-2h-2v2zm4 0h2v-2H7v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2z" fill="url(#heart-gradient)"/>
                </svg>
              </div>
              
              <!-- Animated sparkles -->
              <div class="absolute -top-1 -right-1 w-3 h-3">
                <div class="w-full h-full bg-gradient-to-r from-[#FF1493] to-[#FF66CC] rounded-full animate-ping-fast opacity-70"></div>
              </div>
            </div>

            <!-- Content -->
            <div class="flex-grow flex flex-col justify-center">
              <h3 class="text-xl lg:text-2xl font-black font-poppins mb-4 text-gray-800 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#FF1493] group-hover:to-[#FF66CC] transition-all duration-300">
                {{ item.title }}
              </h3>
              
              <p class="text-gray-600 leading-relaxed font-medium font-poppins text-sm lg:text-base">
                {{ item.desc }}
              </p>
            </div>

            <!-- Animated underline on hover -->
            <div class="relative mt-6 pt-4 w-full">
              <div class="absolute top-0 left-1/2 transform -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF1493] to-transparent rounded-full group-hover:w-3/4 transition-all duration-500 group-hover:delay-300"></div>
              <div class="absolute top-0 left-1/2 transform -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF66CC] to-transparent rounded-full group-hover:w-1/2 transition-all duration-500 group-hover:delay-500 blur-sm"></div>
            </div>
          </div>

          <!-- Background glow effect -->
          <div class="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#FF1493]/0 via-[#FF1493]/10 to-[#FF66CC]/0 blur-xl opacity-0 group-hover:opacity-30 transition-all duration-700 -z-30 transform group-hover:scale-105"></div>
        </div>
      </div>

      <!-- Stats Section - Modernisé avec padding bottom ajouté -->
      <div class="mt-24 mb-8 pb-8 grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 reveal-section">
        <div v-for="stat in stats" :key="stat.label"
             class="group relative text-center p-4 lg:p-6 rounded-2xl backdrop-blur-sm bg-white/50 
                    border border-white/30 hover:border-[#FF1493]/30 transition-all duration-300
                    hover:shadow-xl hover:-translate-y-1 overflow-hidden">
          
          <!-- Animated background on hover -->
          <div class="absolute inset-0 bg-gradient-to-br from-[#FF1493]/0 via-[#FF66CC]/0 to-pink-100/0 
                      group-hover:from-[#FF1493]/5 group-hover:via-[#FF66CC]/3 group-hover:to-pink-100/10 
                      transition-all duration-500"></div>
          
          <div class="relative">
            <div class="text-2xl lg:text-3xl font-black text-[#FF1493] font-poppins mb-1 lg:mb-2 
                       group-hover:scale-110 transition-transform duration-300">
              {{ stat.value }}
            </div>
            <div class="text-xs lg:text-sm font-semibold text-gray-600 uppercase tracking-wider font-poppins">
              {{ stat.label }}
            </div>
          </div>
          
          <!-- SVG Icons pour les stats -->
          <div class="absolute -bottom-2 -right-2 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
            <svg v-if="stat.icon === 'france'" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="url(#stat-gradient)"/>
            </svg>
            <svg v-else-if="stat.icon === 'delivery'" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 24 24" fill="none">
              <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" fill="url(#stat-gradient)"/>
            </svg>
            <svg v-else-if="stat.icon === 'star'" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 24 24" fill="none">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" fill="url(#stat-gradient)"/>
            </svg>
            <svg v-else-if="stat.icon === 'happy'" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 24 24" fill="none">
              <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" fill="url(#stat-gradient)"/>
            </svg>
          </div>
          
          <!-- Corner accent -->
          <div class="absolute top-0 right-0 w-6 h-6 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div class="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-[#FF1493]/10 to-transparent -rotate-45 transform translate-x-2 -translate-y-2"></div>
          </div>
        </div>
      </div>

      <!-- Gradient definitions SVG (caché) -->
      <svg class="absolute w-0 h-0">
        <defs>
          <linearGradient id="heart-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#FF1493" stop-opacity="1" />
            <stop offset="100%" stop-color="#FF66CC" stop-opacity="1" />
          </linearGradient>
          <linearGradient id="shield-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#FF1493" stop-opacity="0.8" />
            <stop offset="100%" stop-color="#FF66CC" stop-opacity="0.3" />
          </linearGradient>
          <linearGradient id="stat-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#FF1493" stop-opacity="0.4" />
            <stop offset="100%" stop-color="#FF66CC" stop-opacity="0.2" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const reasons = ref([
  { 
    icon: 'softness', 
    title: 'Douceur Infinie', 
    desc: 'Un toucher velours premium, conçu pour apaiser et réconforter à chaque instant. Matière hypoallergénique certifiée Oeko-Tex.' 
  },
  { 
    icon: 'eternity', 
    title: 'Éclat Éternel', 
    desc: 'Contrairement aux fleurs, cette peluche reste un témoin vivant de votre amour. Couleurs résistantes aux UV.' 
  },
  { 
    icon: 'craft', 
    title: 'Détails Couture', 
    desc: 'Chaque nœud et chaque couture sont finis à la main dans nos ateliers français. Qualité artisanale garantie.' 
  }
])

const stats = ref([
  { value: '100%', label: 'Fabrication locale', icon: 'france' },
  { value: '24h', label: 'Livraison Express', icon: 'delivery' },
  { value: '5★', label: 'Satisfaction Client', icon: 'star' },
  { value: '+10k', label: 'Peluchés Heureux', icon: 'happy' }
])

// Helper functions for background elements
const getHeartBgColor = (n) => {
  const colors = [
    'fill-[#FF1493]/30',
    'fill-[#FF66CC]/25',
    'fill-[#FF1493]/20',
    'fill-[#FF66CC]/15'
  ]
  return colors[n % colors.length]
}

const getParticleBgColor = (n) => {
  const colors = [
    'rgba(255, 20, 147, 0.4)',
    'rgba(255, 102, 204, 0.3)',
    'rgba(255, 182, 193, 0.3)',
    'rgba(255, 105, 180, 0.3)'
  ]
  return colors[n % colors.length]
}
</script>

<style scoped>
/* Animations from heroSection */
@keyframes gradient-border {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

@keyframes particle-float {
  0%, 100% { 
    transform: translateY(0) translateX(0); 
    opacity: 0; 
  }
  10%, 90% { opacity: 0.5; }
  50% { 
    transform: translateY(-20px) translateX(10px); 
    opacity: 1; 
  }
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Apply animations */
.animate-gradient-border {
  background-size: 200% 200%;
  animation: gradient-border 3s ease infinite;
}

.animate-particle-float {
  animation: particle-float 3s ease-in-out infinite;
}

.reveal-section,
.reveal-item {
  animation: fadeInUp 0.8s ease-out forwards;
  opacity: 0;
  transform: translateY(30px);
}

/* Mobile optimizations */
@media (max-width: 768px) {
  /* Hide some background animations on mobile */
  .floating-heart-fast:nth-child(n+6),
  .floating-rose-fast:nth-child(n+5),
  .particle-fast:nth-child(n+8) {
    display: none;
  }
  
  /* Reduce padding on mobile */
  .p-8 {
    padding: 1.5rem;
  }
  
  .p-10 {
    padding: 2rem;
  }
  
  /* Adjust text sizes */
  .text-xl {
    font-size: 1.25rem;
  }
  
  .text-base {
    font-size: 0.875rem;
  }
  
  /* Adjust icon size */
  .w-20 {
    width: 4rem;
    height: 4rem;
  }
  
  /* Ajout de margin-bottom pour éviter le chevauchement avec le CTA */
  .mt-24 {
    margin-top: 4rem !important;
  }
  
  .mb-8 {
    margin-bottom: 2rem !important;
  }
  
  .pb-8 {
    padding-bottom: 2rem !important;
  }
}

/* SVG gradient fill */
.fill-gradient-to-r {
  fill: url(#heart-gradient);
}

/* Custom properties for animations */
.floating-heart-fast,
.floating-rose-fast,
.particle-fast {
  pointer-events: none;
  opacity: 0.6;
}

/* Position background elements */
.heart-bg-1 { top: 10%; left: 5%; animation-duration: 15s; animation-delay: 0s; }
.heart-bg-2 { top: 20%; right: 10%; animation-duration: 18s; animation-delay: 2s; }
.heart-bg-3 { bottom: 15%; left: 15%; animation-duration: 20s; animation-delay: 4s; }
.heart-bg-4 { bottom: 25%; right: 5%; animation-duration: 16s; animation-delay: 1s; }

.rose-bg-1 { top: 15%; right: 15%; animation-duration: 25s; animation-delay: 1s; }
.rose-bg-2 { bottom: 20%; left: 10%; animation-duration: 30s; animation-delay: 3s; }

/* Import animations from heroSection (simplified versions) */
@keyframes orb-pulse-fast {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.1); }
}

@keyframes orb-drift-fast {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(-30px, 20px); }
}

@keyframes rose-spin-fast {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes particle-twinkle-fast {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.7; transform: scale(1.2); }
}

@keyframes ping-fast {
  75%, 100% { transform: scale(1.5); opacity: 0; }
}

.animate-orb-pulse-fast { animation: orb-pulse-fast 8s ease-in-out infinite; }
.animate-orb-drift-fast { animation: orb-drift-fast 20s ease-in-out infinite; }
.animate-rose-spin-fast { animation: rose-spin-fast 25s linear infinite; }
.animate-particle-twinkle-fast { animation: particle-twinkle-fast 2s ease-in-out infinite; }
.animate-ping-fast { animation: ping-fast 1.5s cubic-bezier(0, 0, 0.2, 1) infinite; }

/* Floating animations for background elements */
@keyframes heart-float {
  0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.4; }
  50% { transform: translateY(-30px) rotate(10deg); opacity: 0.8; }
}

@keyframes rose-float {
  0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.3; }
  50% { transform: translateY(-25px) rotate(-5deg); opacity: 0.6; }
}

@keyframes particle-drift {
  0%, 100% { transform: translate(0, 0); opacity: 0.3; }
  50% { transform: translate(15px, -15px); opacity: 0.7; }
}

.floating-heart-fast {
  animation: heart-float 12s ease-in-out infinite;
}

.floating-rose-fast {
  animation: rose-float 15s ease-in-out infinite;
}

.particle-fast {
  animation: particle-drift 10s ease-in-out infinite;
}
</style>