<template>
  <section id="why" class="py-24 bg-white relative overflow-hidden">
    <!-- Background decorative elements -->
    <div class="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-pink-100/30 to-rose-100/20 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3"></div>
    <div class="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-pink-50/20 to-rose-50/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>
    
    <!-- Floating hearts - Utilisez des SVGs au lieu d'émojis -->
    <svg class="absolute top-1/4 left-10 w-8 h-8 text-pink-300 animate-float-delayed" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
    </svg>
    <svg class="absolute top-1/3 right-20 w-8 h-8 text-pink-300 animate-float" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
    </svg>
    <svg class="absolute bottom-1/4 left-20 w-8 h-8 text-pink-300 animate-float-slow" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
    </svg>
    <svg class="absolute bottom-1/3 right-10 w-8 h-8 text-pink-300 animate-float-delayed" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
    </svg>

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

      <!-- Features Grid -->
      <div class="grid md:grid-cols-3 gap-8 lg:gap-12">
        <div v-for="(item, i) in reasons" :key="i" 
             class="group relative">
          <!-- Card Container - Correction ici : fusionner les classes -->
          <div :class="['reveal-item', i % 2 !== 0 ? 'lg:translate-y-6' : '']"
               :style="{ animationDelay: `${i * 150}ms` }"
               class="relative h-full p-10 rounded-3xl border-2 border-white bg-gradient-to-b from-white to-pink-50/30 
                      shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2
                      group-hover:border-pink-200/50 group-hover:bg-gradient-to-b group-hover:from-white group-hover:to-pink-50/50
                      overflow-hidden text-center flex flex-col items-center">
            
            <!-- Background shine effect -->
            <div class="absolute inset-0 bg-gradient-to-br from-transparent via-white/0 to-pink-100/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <!-- Decorative corner accent -->
            <div class="absolute top-0 right-0 w-20 h-20 overflow-hidden">
              <div class="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#FF1493]/5 to-transparent -rotate-45 transform translate-x-6 -translate-y-6"></div>
            </div>
            
            <!-- Icon Container - Centered at top -->
            <div class="relative inline-flex items-center justify-center w-24 h-24 rounded-2xl mb-8 
                        bg-gradient-to-br from-pink-100 to-rose-100 group-hover:from-pink-200 group-hover:to-rose-200
                        shadow-lg group-hover:shadow-xl transition-all duration-500 border-2 border-white/50">
              <!-- SVG Icons -->
              <div class="text-4xl transform group-hover:scale-110 transition-transform duration-500">
                <svg v-if="item.icon === 'softness'" class="w-12 h-12 text-[#FF1493]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
                <svg v-else-if="item.icon === 'eternity'" class="w-12 h-12 text-[#FF1493]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm6 9.09c0 4-2.55 7.7-6 8.83-3.45-1.13-6-4.82-6-8.83V6.31l6-2.12 6 2.12v4.78z"/>
                </svg>
                <svg v-else-if="item.icon === 'craft'" class="w-12 h-12 text-[#FF1493]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                </svg>
              </div>
              
              <!-- Floating particles around icon -->
              <div class="absolute inset-0 overflow-hidden">
                <div class="absolute -top-2 -left-2 w-4 h-4 bg-[#FF1493]/20 rounded-full animate-float-icon"></div>
                <div class="absolute -top-2 -right-2 w-3 h-3 bg-[#FF1493]/20 rounded-full animate-float-icon" style="animation-delay: 0.5s"></div>
                <div class="absolute -bottom-2 -left-2 w-3 h-3 bg-[#FF1493]/20 rounded-full animate-float-icon" style="animation-delay: 1s"></div>
                <div class="absolute -bottom-2 -right-2 w-4 h-4 bg-[#FF1493]/20 rounded-full animate-float-icon" style="animation-delay: 1.5s"></div>
              </div>
            </div>

            <!-- Content -->
            <div class="flex-grow flex flex-col justify-center">
              <h3 class="text-2xl font-black font-poppins mb-4 text-gray-800 group-hover:text-[#FF1493] transition-colors duration-300">
                {{ item.title }}
              </h3>
              
              <p class="text-gray-600 leading-relaxed font-medium font-poppins text-base">
                {{ item.desc }}
              </p>
            </div>

            <!-- Hover effect line -->
            <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-[#FF1493] to-[#FF66CC] rounded-full group-hover:w-3/4 transition-all duration-500"></div>
          </div>

          <!-- External glow effect -->
          <div class="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#FF1493]/0 via-[#FF1493]/5 to-[#FF1493]/0 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
        </div>
      </div>

      <!-- Stats Section -->
      <div class="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 reveal-section">
        <div v-for="stat in stats" :key="stat.label"
             class="text-center p-6 rounded-2xl bg-gradient-to-b from-white to-pink-50/30 border border-pink-100/50 hover:border-pink-200/70 transition-all duration-300">
          <div class="text-3xl font-black text-[#FF1493] font-poppins mb-2">{{ stat.value }}</div>
          <div class="text-sm font-semibold text-gray-600 uppercase tracking-wider font-poppins">{{ stat.label }}</div>
        </div>
      </div>
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
  { value: '100%', label: 'Fabrication locale' },
  { value: '24h', label: 'Livraison Express' },
  { value: '5★', label: 'Satisfaction Client' },
  { value: '+10k', label: 'Peluchés Heureux' }
])
</script>

<style scoped>
/* Floating animations */
@keyframes float {
  0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.6; }
  50% { transform: translateY(-20px) rotate(5deg); opacity: 1; }
}

@keyframes float-slow {
  0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.6; }
  50% { transform: translateY(-15px) rotate(-3deg); opacity: 1; }
}

@keyframes float-delayed {
  0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.6; }
  50% { transform: translateY(-25px) rotate(2deg); opacity: 1; }
}

@keyframes float-icon {
  0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.3; }
  50% { transform: translate(5px, -5px) scale(1.2); opacity: 0.8; }
}

/* Animations optimisées - version simplifiée sans infinite */
.animate-float {
  animation: float 6s ease-in-out infinite;
  font-size: 2rem;
}

.animate-float-slow {
  animation: float-slow 8s ease-in-out infinite;
  font-size: 2rem;
}

.animate-float-delayed {
  animation: float-delayed 7s ease-in-out infinite;
  font-size: 2rem;
}

.animate-float-icon {
  animation: float-icon 2s ease-in-out infinite;
}

/* Simple reveal animations avec performance optimisée */
.reveal-section {
  animation: fadeInUp 0.8s ease-out forwards;
  opacity: 0;
  transform: translateY(30px);
}

.reveal-item {
  animation: fadeInUp 0.6s ease-out forwards;
  opacity: 0;
  transform: translateY(30px);
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Optimisations pour les mobiles */
@media (max-width: 768px) {
  .animate-float,
  .animate-float-slow,
  .animate-float-delayed {
    display: none;
  }
}

/* Option : Si vous avez toujours des problèmes de performance, 
   utilisez cette version simplifiée des animations flottantes */
@media (max-width: 1024px) {
  .animate-float,
  .animate-float-slow,
  .animate-float-delayed {
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }
}
</style>