<template>
  <section id="product" class="relative py-16 overflow-hidden bg-white">
    <div class="absolute inset-0 bg-gradient-to-b from-pink-50/10 to-white/50"></div>

    <div class="container mx-auto px-4 relative z-10">
      <!-- Simple headline -->
      <div class="text-center mb-12">
        <h2 class="text-3xl lg:text-4xl font-black text-gray-900 font-poppins mb-3">
          Votre <span class="text-[#FF1493]">câlin éternel</span>
        </h2>
        <p class="text-gray-600 font-poppins max-w-lg mx-auto">
          Cliquez sur les points pour découvrir ses secrets
        </p>
      </div>

      <!-- Interactive product display -->
      <div class="max-w-4xl mx-auto relative" v-reveal>
        <div class="flex flex-col lg:flex-row gap-8">
          <!-- Left: Interactive Image -->
          <div class="lg:w-1/2">
            <div class="relative rounded-2xl overflow-hidden shadow-2xl bg-white p-6">
              <!-- Interactive image container -->
              <div class="relative">
                <img 
                  src="/images/image.webp" 
                  alt="ValenPeluche" 
                  class="w-full h-auto rounded-xl"
                />
                
                <!-- Interactive clickable points -->
                <button 
                  v-for="(point, index) in interactivePoints" 
                  :key="index"
                  @click="activePoint = activePoint === index ? null : index"
                  @mouseenter="hoverPoint = index"
                  @mouseleave="hoverPoint = null"
                  :class="[
                    'absolute w-8 h-8 rounded-full border-2 cursor-pointer transition-all duration-300 flex items-center justify-center z-20',
                    activePoint === index 
                      ? 'bg-[#FF1493] border-white scale-125 shadow-lg' 
                      : hoverPoint === index 
                      ? 'bg-pink-300 border-pink-100 scale-110' 
                      : 'bg-white/90 border-pink-200'
                  ]"
                  :style="point.position"
                >
                  <span class="text-xs font-bold" :class="activePoint === index ? 'text-white' : 'text-[#FF1493]'">
                    {{ index + 1 }}
                  </span>
                  
                  <!-- Glow effect for active point -->
                  <div v-if="activePoint === index" class="absolute inset-0 rounded-full animate-ping bg-[#FF1493]/40"></div>
                </button>
                
                <!-- Connection lines to cards (visible on desktop) -->
                <div v-if="activePoint !== null" class="hidden lg:block">
                  <div class="absolute inset-0 pointer-events-none">
                    <svg class="w-full h-full">
                      <line 
                        :x1="interactivePoints[activePoint].lineStart.x" 
                        :y1="interactivePoints[activePoint].lineStart.y"
                        :x2="interactivePoints[activePoint].lineEnd.x" 
                        :y2="interactivePoints[activePoint].lineEnd.y"
                        stroke="#FF1493" 
                        stroke-width="2" 
                        stroke-dasharray="5,5"
                        class="animate-dash"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              
              <!-- Price badge -->
              <div class="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#FF1493] to-[#FF66CC] text-white px-6 py-2 rounded-full shadow-xl font-bold text-sm">
                89€
              </div>
            </div>
          </div>

          <!-- Right: Dynamic Info Card -->
          <div class="lg:w-1/2">
            <div class="h-full">
              <!-- Default card when no point is selected -->
              <div v-if="activePoint === null" 
                   class="bg-white rounded-2xl shadow-2xl p-6 h-full border border-pink-100">
                <div class="text-center h-full flex flex-col justify-center items-center">
                  <div class="w-16 h-16 rounded-full bg-pink-50 flex items-center justify-center mb-4">
                    <span class="text-2xl">👆</span>
                  </div>
                  <h3 class="text-xl font-bold text-gray-800 font-poppins mb-3">
                    Découvrez ses secrets
                  </h3>
                  <p class="text-gray-600 mb-6 font-poppins">
                    Cliquez sur les points numérotés pour découvrir chaque caractéristique exclusive
                  </p>
                  <div class="grid grid-cols-2 gap-3 w-full max-w-xs">
                    <div v-for="(point, index) in interactivePoints" :key="index"
                         class="flex items-center gap-2 p-2 rounded-lg bg-pink-50">
                      <div class="w-6 h-6 rounded-full bg-[#FF1493] text-white text-xs flex items-center justify-center font-bold">
                        {{ index + 1 }}
                      </div>
                      <span class="text-sm font-medium text-gray-700">{{ point.title }}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Dynamic card when a point is selected -->
              <div v-else 
                   class="bg-white rounded-2xl shadow-2xl p-6 h-full border border-pink-100 transform transition-all duration-500"
                   :class="activePoint !== null ? 'animate-card-appear' : ''">
                <div class="flex items-start gap-4 mb-4">
                  <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-100 to-rose-100 flex items-center justify-center flex-shrink-0">
                    <span class="text-xl">{{ interactivePoints[activePoint].emoji }}</span>
                  </div>
                  <div>
                    <div class="flex items-center gap-2 mb-1">
                      <div class="w-6 h-6 rounded-full bg-[#FF1493] text-white text-xs flex items-center justify-center font-bold">
                        {{ activePoint + 1 }}
                      </div>
                      <h3 class="text-xl font-bold text-gray-800 font-poppins">
                        {{ interactivePoints[activePoint].title }}
                      </h3>
                    </div>
                    <p class="text-gray-600 font-poppins">
                      {{ interactivePoints[activePoint].description }}
                    </p>
                  </div>
                </div>
                
                <!-- Additional details -->
                <div class="mt-6 p-4 rounded-lg bg-pink-50/50">
                  <h4 class="font-bold text-gray-700 text-sm mb-2 font-poppins">Pourquoi c'est important :</h4>
                  <p class="text-gray-600 text-sm font-poppins">
                    {{ interactivePoints[activePoint].benefit }}
                  </p>
                </div>
                
                <!-- Quick stats -->
                <div class="mt-6 grid grid-cols-2 gap-3">
                  <div class="text-center p-3 rounded-lg bg-white border border-pink-100">
                    <div class="text-lg font-bold text-[#FF1493] font-poppins">{{ interactivePoints[activePoint].stat1.value }}</div>
                    <div class="text-xs text-gray-600 font-poppins">{{ interactivePoints[activePoint].stat1.label }}</div>
                  </div>
                  <div class="text-center p-3 rounded-lg bg-white border border-pink-100">
                    <div class="text-lg font-bold text-[#FF1493] font-poppins">{{ interactivePoints[activePoint].stat2.value }}</div>
                    <div class="text-xs text-gray-600 font-poppins">{{ interactivePoints[activePoint].stat2.label }}</div>
                  </div>
                </div>
              </div>
              
              <!-- Key benefits (always visible) -->
              <div class="mt-6 bg-white rounded-2xl shadow-lg p-5 border border-pink-100">
                <h4 class="font-bold text-gray-800 mb-4 font-poppins">Avantages inclus :</h4>
                <div class="grid grid-cols-2 gap-3">
                  <div class="flex items-center gap-2">
                    <div class="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                      <span class="text-green-600 text-xs">✓</span>
                    </div>
                    <span class="text-sm text-gray-700">Livraison 48h</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <div class="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                      <span class="text-green-600 text-xs">✓</span>
                    </div>
                    <span class="text-sm text-gray-700">Coffret luxe</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <div class="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                      <span class="text-green-600 text-xs">✓</span>
                    </div>
                    <span class="text-sm text-gray-700">Garantie 2 ans</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <div class="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                      <span class="text-green-600 text-xs">✓</span>
                    </div>
                    <span class="text-sm text-gray-700">Retour gratuit</span>
                  </div>
                </div>
              </div>
              
              <!-- CTA Button -->
              <button 
                @click="scrollToOrder"
                class="w-full mt-6 py-4 bg-gradient-to-r from-[#FF1493] to-[#FF66CC] text-white rounded-xl font-bold text-lg font-poppins shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-95 relative overflow-hidden group"
              >
                <span class="relative z-10">Commander maintenant</span>
                <div class="absolute inset-0 bg-gradient-to-r from-[#FF66CC] to-[#FF1493] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const activePoint = ref(null)
const hoverPoint = ref(null)

const interactivePoints = [
  {
    position: { top: '30%', left: '40%' },
    lineStart: { x: '40%', y: '30%' },
    lineEnd: { x: '100%', y: '50%' },
    emoji: '🧵',
    title: 'Coton Biologique',
    description: 'Notre coton 100% biologique certifié Oeko-Tex est hypoallergénique et ultra-doux.',
    benefit: 'Parfait pour les peaux sensibles et les enfants, sans produits chimiques nocifs.',
    stat1: { value: '100%', label: 'Naturel' },
    stat2: { value: 'Oeko-Tex', label: 'Certifié' }
  },
  {
    position: { top: '60%', left: '25%' },
    lineStart: { x: '25%', y: '60%' },
    lineEnd: { x: '100%', y: '60%' },
    emoji: '🌹',
    title: 'Parfum Naturel',
    description: 'Microcapsules de parfum de rose naturelle qui diffusent une senteur délicate pendant 6 mois.',
    benefit: 'Crée une ambiance romantique et apaisante dans votre espace.',
    stat1: { value: '6 mois', label: 'Durée' },
    stat2: { value: 'Naturel', label: 'Origine' }
  },
  {
    position: { top: '45%', right: '25%' },
    lineStart: { x: '75%', y: '45%' },
    lineEnd: { x: '100%', y: '30%' },
    emoji: '💧',
    title: 'Lavable Machine',
    description: 'Résiste à plus de 50 cycles de lavage sans perdre sa forme ni sa douceur.',
    benefit: 'Facile à entretenir et reste comme neuve pendant des années.',
    stat1: { value: '50+', label: 'Lavages' },
    stat2: { value: 'Forme', label: 'Conservée' }
  },
  {
    position: { bottom: '25%', right: '35%' },
    lineStart: { x: '65%', y: '75%' },
    lineEnd: { x: '100%', y: '75%' },
    emoji: '🇫🇷',
    title: 'Fabriqué en France',
    description: 'Conçue et assemblée artisanalement dans nos ateliers français.',
    benefit: 'Soutien à l\'économie locale et contrôle qualité exceptionnel.',
    stat1: { value: '100%', label: 'Made in FR' },
    stat2: { value: 'Artisanal', label: 'Fabrication' }
  }
]

const scrollToOrder = () => {
  const el = document.getElementById('pricing')
  el?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
/* Animation for card appearance */
@keyframes cardAppear {
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-card-appear {
  animation: cardAppear 0.5s ease-out forwards;
}

/* Animation for dashed line */
@keyframes dash {
  to {
    stroke-dashoffset: -20;
  }
}

.animate-dash {
  animation: dash 1s linear infinite;
}

/* Simple reveal animation */
[data-reveal] {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease-out;
}

[data-reveal].visible {
  opacity: 1;
  transform: translateY(0);
}

/* Hover effects for interactive points */
button:hover {
  transform: scale(1.1);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  
  /* Hide connecting lines on mobile */
  .hidden {
    display: none;
  }
  
  /* Adjust point sizes for mobile */
  .w-8 {
    width: 1.5rem;
    height: 1.5rem;
  }
  
  /* Adjust text sizes */
  .text-sm {
    font-size: 0.75rem;
  }
  
  .text-xs {
    font-size: 0.7rem;
  }
}
</style>