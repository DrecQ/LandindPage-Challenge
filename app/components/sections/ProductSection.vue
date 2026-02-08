<template>
  <section id="product" class="relative py-16 overflow-hidden bg-white">
    <div class="absolute inset-0 bg-gradient-to-b from-pink-50/10 to-white/50"></div>

    <div class="container mx-auto px-4 relative z-10">
      <!-- Simple headline -->
      <div class="text-center mb-20 reveal-section">
        <h2 class="text-4xl lg:text-6xl font-black text-gray-900 font-poppins mb-6 leading-tight">
            Pour s'offrir des
          <span class="relative inline-block">
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#FF1493] to-[#FF66CC] italic" style="font-family: 'Harrington', cursive;">
                câlins éternels.
            </span>
            <span class="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#FF1493] to-[#FF66CC] rounded-full"></span>
          </span>
        </h2>
        
        <p class="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto font-medium font-poppins leading-relaxed">
          Cliquez sur les points clignotants pour découvrir les détails de cette peluche magique.
        </p>
      </div>

      <!-- Mobile instruction -->
      <div class="lg:hidden text-center mb-6 px-4">
        <div class="inline-flex items-center gap-2 bg-pink-50 px-4 py-2 rounded-full">
          <div class="w-3 h-3 rounded-full bg-[#FF1493] animate-pulse"></div>
          <span class="text-sm font-medium text-gray-700 font-poppins">Cliquez sur les points clignotants</span>
        </div>
      </div>

      <!-- Interactive product display -->
      <div class="max-w-5xl mx-auto relative reveal-section">
        <div class="flex flex-col lg:flex-row gap-8">
          <!-- Left: Interactive Image - Takes more space on desktop -->
          <div class="lg:w-7/12">
            <div class="relative rounded-2xl overflow-hidden shadow-2xl bg-white p-6">
              <!-- Interactive image container -->
              <div class="relative">
                <img 
                  src="/images/image.webp" 
                  alt="ValenPeluche" 
                  class="w-full h-auto rounded-xl"
                />
                
                <!-- Interactive clickable points with pulse effect on mobile -->
                <button 
                  v-for="(point, index) in interactivePoints" 
                  :key="index"
                  @click="handlePointClick(index)"
                  @mouseenter="hoverPoint = index"
                  @mouseleave="hoverPoint = null"
                  :class="[
                    'absolute w-10 h-10 lg:w-8 lg:h-8 rounded-full border-2 cursor-pointer transition-all duration-300 flex items-center justify-center z-20',
                    activePoint === index 
                      ? 'bg-[#FF1493] border-white scale-125 shadow-lg' 
                      : hoverPoint === index 
                      ? 'bg-pink-300 border-pink-100 scale-110' 
                      : 'bg-white/90 border-pink-200',
                    isMobile && activePoint !== index ? 'animate-pulse-slow' : ''
                  ]"
                  :style="point.position"
                >
                  <span class="text-sm lg:text-xs font-bold" :class="activePoint === index ? 'text-white' : 'text-[#FF1493]'">
                    {{ index + 1 }}
                  </span>
                  
                  <!-- Glow effect for active point -->
                  <div v-if="activePoint === index" class="absolute inset-0 rounded-full animate-ping bg-[#FF1493]/40"></div>
                </button>
              </div>
            </div>
          </div>

          <!-- Right: Desktop Info Card - More compact -->
          <div class="lg:w-5/12 hidden lg:block">
            <div class="h-full">
              <!-- Default card when no point is selected -->
              <div v-if="activePoint === null" 
                   class="bg-white rounded-2xl shadow-2xl p-8 h-full border border-pink-100 flex flex-col justify-center">
                <div class="text-center">
                  <div class="w-20 h-20 rounded-full bg-gradient-to-br from-pink-100 to-rose-100 flex items-center justify-center mb-6 mx-auto">
                    <span class="text-3xl">👆</span>
                  </div>
                  <h3 class="text-2xl font-bold text-gray-800 font-poppins mb-4">
                    Explorez ses secrets
                  </h3>
                  <p class="text-gray-600 mb-8 font-poppins text-lg leading-relaxed">
                    Cliquez sur les points pour découvrir chaque caractéristique exclusive de votre peluche premium
                  </p>
                  <div class="grid grid-cols-2 gap-4">
                    <div v-for="(point, index) in interactivePoints" :key="index"
                         class="flex items-center gap-3 p-3 rounded-xl bg-pink-50 hover:bg-pink-100 transition-colors">
                      <div class="w-8 h-8 rounded-full bg-[#FF1493] text-white text-sm flex items-center justify-center font-bold">
                        {{ index + 1 }}
                      </div>
                      <span class="text-base font-medium text-gray-700">{{ point.title }}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Dynamic card when a point is selected -->
              <div v-else 
                   class="bg-white rounded-2xl shadow-2xl p-8 h-full border border-pink-100 transform transition-all duration-500 animate-card-appear">
                <!-- Close button -->
                <button 
                  @click="activePoint = null"
                  class="absolute top-4 right-4 w-8 h-8 rounded-full bg-pink-100 hover:bg-pink-200 flex items-center justify-center transition-colors"
                >
                  <span class="text-gray-600 text-sm">×</span>
                </button>
                
                <div class="mb-6">
                  <div class="flex items-center gap-3 mb-4">
                    <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-pink-100 to-rose-100 flex items-center justify-center flex-shrink-0">
                      <span class="text-2xl">{{ interactivePoints[activePoint].emoji }}</span>
                    </div>
                    <div>
                      <div class="flex items-center gap-2 mb-1">
                        <div class="w-7 h-7 rounded-full bg-[#FF1493] text-white text-xs flex items-center justify-center font-bold">
                          {{ activePoint + 1 }}
                        </div>
                        <h3 class="text-xl font-bold text-gray-800 font-poppins">
                          {{ interactivePoints[activePoint].title }}
                        </h3>
                      </div>
                    </div>
                  </div>
                  
                  <p class="text-gray-700 font-poppins text-base leading-relaxed mb-6">
                    {{ interactivePoints[activePoint].description }}
                  </p>
                  
                  <!-- Benefit highlight -->
                  <div class="p-4 rounded-lg bg-gradient-to-r from-pink-50/50 to-rose-50/50 border border-pink-100">
                    <h4 class="font-bold text-gray-800 text-sm mb-2 font-poppins flex items-center gap-2">
                      <span class="text-[#FF1493]">★</span>
                      Pourquoi c'est important
                    </h4>
                    <p class="text-gray-600 text-sm font-poppins">
                      {{ interactivePoints[activePoint].benefit }}
                    </p>
                  </div>
                </div>
                
                <!-- Quick stats -->
                <div class="grid grid-cols-2 gap-4 mb-8">
                  <div class="text-center p-4 rounded-xl bg-white border border-pink-100 hover:border-pink-200 transition-colors">
                    <div class="text-xl font-black text-[#FF1493] font-poppins mb-1">{{ interactivePoints[activePoint].stat1.value }}</div>
                    <div class="text-xs text-gray-600 font-poppins uppercase tracking-wider">{{ interactivePoints[activePoint].stat1.label }}</div>
                  </div>
                  <div class="text-center p-4 rounded-xl bg-white border border-pink-100 hover:border-pink-200 transition-colors">
                    <div class="text-xl font-black text-[#FF1493] font-poppins mb-1">{{ interactivePoints[activePoint].stat2.value }}</div>
                    <div class="text-xs text-gray-600 font-poppins uppercase tracking-wider">{{ interactivePoints[activePoint].stat2.label }}</div>
                  </div>
                </div>
                
                <!-- Key benefits -->
                <div class="mb-8">
                  <h4 class="font-bold text-gray-800 mb-4 font-poppins text-sm">Tous nos avantages :</h4>
                  <div class="grid grid-cols-2 gap-3">
                    <div v-for="advantage in advantages" :key="advantage.label"
                         class="flex items-center gap-2 p-2 rounded-lg bg-pink-50/50">
                      <div class="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                        <span class="text-green-600 text-xs">✓</span>
                      </div>
                      <span class="text-sm text-gray-700">{{ advantage.label }}</span>
                    </div>
                  </div>
                </div>
                
                <!-- CTA Button -->
                <button 
                  @click="scrollToOrder"
                  class="w-full py-4 bg-gradient-to-r from-[#FF1493] to-[#FF66CC] text-white rounded-xl font-bold text-lg font-poppins shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-95 relative overflow-hidden group"
                >
                  <span class="relative z-10">Commander maintenant</span>
                  <div class="absolute inset-0 bg-gradient-to-r from-[#FF66CC] to-[#FF1493] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile Popup Modal -->
    <Transition name="modal">
      <div v-if="isMobile && activePoint !== null" 
           class="fixed inset-0 z-50 flex items-end lg:items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
           @click.self="activePoint = null">
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[80vh] overflow-hidden transform transition-all duration-300">
          <!-- Modal header -->
          <div class="sticky top-0 bg-white border-b border-pink-100 p-4 flex items-center justify-between">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-100 to-rose-100 flex items-center justify-center">
                <span class="text-xl">{{ interactivePoints[activePoint].emoji }}</span>
              </div>
              <div>
                <div class="flex items-center gap-2">
                  <div class="w-6 h-6 rounded-full bg-[#FF1493] text-white text-xs flex items-center justify-center font-bold">
                    {{ activePoint + 1 }}
                  </div>
                  <h3 class="font-bold text-gray-800 font-poppins text-lg">
                    {{ interactivePoints[activePoint].title }}
                  </h3>
                </div>
              </div>
            </div>
            <button 
              @click="activePoint = null"
              class="w-8 h-8 rounded-full bg-pink-100 hover:bg-pink-200 flex items-center justify-center transition-colors"
            >
              <span class="text-gray-600 text-lg">×</span>
            </button>
          </div>
          
          <!-- Modal content -->
          <div class="p-6 overflow-y-auto">
            <p class="text-gray-700 font-poppins mb-6 leading-relaxed">
              {{ interactivePoints[activePoint].description }}
            </p>
            
            <!-- Benefit highlight -->
            <div class="p-4 rounded-lg bg-gradient-to-r from-pink-50/50 to-rose-50/50 border border-pink-100 mb-6">
              <h4 class="font-bold text-gray-800 text-sm mb-2 font-poppins flex items-center gap-2">
                <span class="text-[#FF1493]">★</span>
                Pourquoi c'est important
              </h4>
              <p class="text-gray-600 text-sm font-poppins">
                {{ interactivePoints[activePoint].benefit }}
              </p>
            </div>
            
            <!-- Quick stats -->
            <div class="grid grid-cols-2 gap-4 mb-6">
              <div class="text-center p-4 rounded-xl bg-white border border-pink-100">
                <div class="text-xl font-black text-[#FF1493] font-poppins mb-1">{{ interactivePoints[activePoint].stat1.value }}</div>
                <div class="text-xs text-gray-600 font-poppins uppercase tracking-wider">{{ interactivePoints[activePoint].stat1.label }}</div>
              </div>
              <div class="text-center p-4 rounded-xl bg-white border border-pink-100">
                <div class="text-xl font-black text-[#FF1493] font-poppins mb-1">{{ interactivePoints[activePoint].stat2.value }}</div>
                <div class="text-xs text-gray-600 font-poppins uppercase tracking-wider">{{ interactivePoints[activePoint].stat2.label }}</div>
              </div>
            </div>
            
            <!-- Key benefits -->
            <div class="mb-6">
              <h4 class="font-bold text-gray-800 mb-4 font-poppins text-sm">Tous nos avantages :</h4>
              <div class="grid grid-cols-2 gap-3">
                <div v-for="advantage in advantages" :key="advantage.label"
                     class="flex items-center gap-2 p-2 rounded-lg bg-pink-50/50">
                  <div class="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                    <span class="text-green-600 text-xs">✓</span>
                  </div>
                  <span class="text-sm text-gray-700">{{ advantage.label }}</span>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Modal footer -->
          <div class="sticky bottom-0 bg-white border-t border-pink-100 p-4">
            <button 
              @click="scrollToOrder"
              class="w-full py-4 bg-gradient-to-r from-[#FF1493] to-[#FF66CC] text-white rounded-xl font-bold text-lg font-poppins shadow-lg transition-all duration-300 active:scale-95"
            >
              Commander maintenant
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const activePoint = ref(null)
const hoverPoint = ref(null)
const isMobile = ref(false)

const handlePointClick = (index) => {
  activePoint.value = activePoint.value === index ? null : index
  if (isMobile.value && activePoint.value !== null) {
    // Prevent body scroll when modal is open on mobile
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const interactivePoints = [
  {
    position: { top: '30%', left: '40%' },
    emoji: '🧵',
    title: 'Coton Biologique',
    description: 'Notre coton 100% biologique certifié Oeko-Tex est hypoallergénique et ultra-doux, offrant un confort incomparable.',
    benefit: 'Idéal pour les peaux sensibles et les enfants, garantissant sécurité et douceur absolue sans aucun produit chimique.',
    stat1: { value: '100%', label: 'Naturel' },
    stat2: { value: 'Oeko-Tex', label: 'Certifié' }
  },
  {
    position: { top: '60%', left: '25%' },
    emoji: '🌹',
    title: 'Parfum Naturel',
    description: 'Microcapsules de parfum de rose naturelle qui diffusent une senteur délicate et persistante pendant 6 mois.',
    benefit: 'Crée une ambiance romantique et apaisante, transformant votre espace en un havre de paix parfumé.',
    stat1: { value: '6 mois', label: 'Durée' },
    stat2: { value: 'Naturel', label: 'Origine' }
  },
  {
    position: { top: '45%', right: '25%' },
    emoji: '💧',
    title: 'Lavable Machine',
    description: 'Résiste à plus de 50 cycles de lavage tout en conservant sa forme originelle et sa douceur exceptionnelle.',
    benefit: 'Entretien simplifié garantissant une hygiène parfaite et une durabilité à toute épreuve.',
    stat1: { value: '50+', label: 'Lavages' },
    stat2: { value: 'Forme', label: 'Conservée' }
  },
  {
    position: { bottom: '25%', right: '35%' },
    emoji: '🏭',
    title: 'Fabrication Locale',
    description: 'Conçue et assemblée artisanalement dans nos ateliers locaux avec un savoir-faire traditionnel.',
    benefit: 'Qualité exceptionnelle garantie par un contrôle rigoureux à chaque étape de production.',
    stat1: { value: 'Artisanat', label: 'Local' },
    stat2: { value: 'Qualité', label: 'Premium' }
  }
]

const advantages = [
  { label: 'Livraison 48h' },
  { label: 'Coffret luxe' },
  { label: 'Garantie 2 ans' },
  { label: 'Retour gratuit' }
]

const scrollToOrder = () => {
  activePoint.value = null
  document.body.style.overflow = ''
  const el = document.getElementById('pricing')
  setTimeout(() => {
    el?.scrollIntoView({ behavior: 'smooth' })
  }, 300)
}

// Check if mobile
const checkMobile = () => {
  isMobile.value = window.innerWidth < 1024
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
  document.body.style.overflow = ''
})
</script>

<style scoped>
/* Animation for card appearance */
@keyframes cardAppear {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-card-appear {
  animation: cardAppear 0.5s ease-out forwards;
}

/* Slow pulse animation for mobile points */
@keyframes pulse-slow {
  0%, 100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(255, 20, 147, 0.4);
  }
  50% {
    transform: scale(1.1);
    box-shadow: 0 0 0 10px rgba(255, 20, 147, 0);
  }
}

.animate-pulse-slow {
  animation: pulse-slow 2s infinite;
}

/* Modal animations */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .modal-content,
.modal-leave-active .modal-content {
  transition: transform 0.3s ease;
}

.modal-enter-from .modal-content {
  transform: translateY(100%);
}

.modal-leave-to .modal-content {
  transform: translateY(100%);
}

/* Simple reveal animation */
.reveal-section {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.8s ease-out forwards;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
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
  
  /* Mobile points larger */
  .w-10 {
    width: 2.5rem;
    height: 2.5rem;
  }
  
  /* Adjust text sizes for mobile */
  .text-sm {
    font-size: 0.875rem;
  }
  
  .text-xs {
    font-size: 0.75rem;
  }
}

@media (min-width: 1024px) {
  /* Desktop layout optimization */
  .lg\:w-7\/12 {
    width: 58.333333%;
  }
  
  .lg\:w-5\/12 {
    width: 41.666667%;
  }
}
</style>