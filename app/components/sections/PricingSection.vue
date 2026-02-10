<template>
  <section id="pricing" class="py-24 lg:py-36 bg-gradient-to-b from-white to-pink-50/30 relative overflow-hidden">
    <!-- Enhanced background decorative elements -->
    <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <!-- Animated gradient orbs -->
      <div class="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[#FF1493]/10 to-[#FF66CC]/5 rounded-full blur-[120px] animate-orb-pulse-slow opacity-50"></div>
      <div class="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-[#FF1493]/8 to-pink-200/15 rounded-full blur-[100px] animate-orb-drift-slow opacity-40"></div>
      
      <!-- Animated hearts in background -->
      <svg v-for="n in 8" :key="'heart-pricing-' + n" 
           :class="['absolute floating-heart', `heart-pricing-${n}`]"
           :width="20 + (n % 4) * 5" :height="20 + (n % 4) * 5" 
           viewBox="0 0 24 24" fill="none">
        <path 
          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          :class="getHeartPricingColor(n)"
        />
      </svg>
      
      <!-- Floating particles -->
      <div v-for="n in 15" :key="'particle-pricing-' + n" 
           :class="['absolute pricing-particle', `particle-${n}`]">
        <div class="w-2 h-2 rounded-full animate-particle-twinkle" 
             :style="{
               backgroundColor: getParticleColor(n),
               animationDelay: `${n * 0.1}s`,
             }"></div>
      </div>
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="text-center mb-20 reveal-section">
        <h2 class="text-4xl lg:text-6xl font-black text-gray-900 font-poppins mb-6 leading-tight">
            C'est plus qu'une 
          <span class="relative inline-block">
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#FF1493] to-[#FF66CC] italic" style="font-family: 'Harrington', cursive;">
            preuve d'amour
            </span>
            <span class="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#FF1493] to-[#FF66CC] rounded-full"></span>
          </span>
        </h2>
        
        <p class="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto font-medium font-poppins leading-relaxed">
            Offrez plus qu'un cadeau, offrez lui une expérience sensorielle unique. Découvrez notre offre spéciale pour la Saint-Valentin et faites de ce moment un souvenir inoubliable.
        </p>
      </div>
      <!-- Main pricing card -->
      <div class="max-w-6xl mx-auto relative">
        <!-- Decorative floating gift -->
        <div class="absolute -top-8 -left-8 lg:-top-12 lg:-left-12 w-16 h-16 lg:w-24 lg:h-24 bg-gradient-to-br from-white to-pink-50 rounded-3xl shadow-xl flex items-center justify-center rotate-12 z-20 border border-pink-100/50 animate-soft-bounce hidden lg:flex">
          <div class="relative">
            <span class="text-3xl lg:text-4xl animate-gift-spin">🎁</span>
            <div class="absolute -top-1 -right-1 w-3 h-3">
              <div class="w-full h-full bg-gradient-to-r from-[#FF1493] to-[#FF66CC] rounded-full animate-ping-slow"></div>
            </div>
          </div>
        </div>

        <!-- Main card with glass effect -->
        <div class="relative backdrop-blur-sm bg-white/90 lg:bg-white/95 border-4 border-white/50 rounded-[3rem] lg:rounded-[4rem] shadow-[0_32px_64px_-16px_rgba(255,20,147,0.15)] overflow-hidden group hover:shadow-[0_40px_80px_-20px_rgba(255,20,147,0.2)] transition-all duration-500">
          
          <!-- Animated border effect -->
          <div class="absolute inset-0 rounded-[3rem] lg:rounded-[4rem] p-[3px] bg-gradient-to-r from-[#FF1493]/0 via-[#FF66CC]/0 to-[#FF1493]/0 group-hover:from-[#FF1493]/20 group-hover:via-[#FF66CC]/10 group-hover:to-[#FF1493]/20 transition-all duration-700 -z-10">
            <div class="w-full h-full bg-white rounded-[3rem] lg:rounded-[4rem]"></div>
          </div>

          <!-- Card content grid -->
          <div class="grid lg:grid-cols-12 items-stretch">
            
            <!-- Left column: Countdown & Features -->
            <div class="lg:col-span-7 p-8 lg:p-12 xl:p-16 border-b lg:border-b-0 lg:border-r border-pink-50/50">
              <!-- Countdown section -->
              <div class="mb-10 lg:mb-12">
                <h3 class="text-sm lg:text-base font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FF1493] to-[#FF66CC] uppercase tracking-widest mb-6 lg:mb-8 font-poppins">
                  Fin de l'offre dans :
                </h3>
                <div class="flex gap-3 lg:gap-4">
                  <div v-for="(value, label) in countdown" :key="label" class="flex-1">
                    <div class="relative bg-gradient-to-br from-gray-900 to-gray-800 aspect-square rounded-2xl lg:rounded-3xl flex flex-col items-center justify-center shadow-2xl overflow-hidden group-hover:scale-105 transition-transform duration-300">
                      <!-- Inner glow effect -->
                      <div class="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50"></div>
                      
                      <!-- Flip card numbers -->
                      <span class="text-2xl lg:text-3xl xl:text-4xl font-black text-white relative z-10 font-poppins">{{ value }}</span>
                      <span class="text-[8px] lg:text-[10px] font-bold text-pink-300 uppercase tracking-tighter mt-1 lg:mt-2 font-poppins">
                        {{ label }}
                      </span>
                      
                      <!-- Hover glow -->
                      <div class="absolute -inset-2 bg-gradient-to-r from-[#FF1493]/0 via-[#FF66CC]/0 to-[#FF1493]/0 rounded-2xl lg:rounded-3xl group-hover:from-[#FF1493]/10 group-hover:via-[#FF66CC]/5 group-hover:to-[#FF1493]/10 transition-all duration-500 blur-sm"></div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Features list -->
              <div class="space-y-3 lg:space-y-4">
                <div v-for="feature in features" :key="feature" class="flex items-center gap-3 lg:gap-4 group cursor-default">
                  <!-- Icon container -->
                  <div class="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-gradient-to-br from-pink-50 to-white flex items-center justify-center shadow-sm border border-pink-100 group-hover:bg-gradient-to-br group-hover:from-[#FF1493] group-hover:to-[#FF66CC] transition-all duration-300 group-hover:scale-110">
                    <svg class="w-4 h-4 lg:w-5 lg:h-5 text-[#FF1493] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                  </div>
                  
                  <!-- Feature text -->
                  <span class="text-gray-700 font-medium lg:font-semibold text-sm lg:text-base group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#FF1493] group-hover:to-[#FF66CC] transition-all duration-300 group-hover:translate-x-1 font-poppins">
                    {{ feature }}
                  </span>
                </div>
              </div>
            </div>

            <!-- Right column: Pricing & CTA -->
            <div class="lg:col-span-5 p-8 lg:p-12 xl:p-16 bg-gradient-to-br from-pink-50/30 via-white/50 to-pink-50/10 flex flex-col justify-center items-center text-center relative">
              <!-- Decorative corner accent -->
              <div class="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                <div class="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#FF1493]/10 to-transparent -rotate-45 transform translate-x-6 -translate-y-6"></div>
              </div>
              
              <!-- Price comparison -->
              <p class="text-gray-400 font-bold line-through text-lg lg:text-xl mb-2 font-poppins">42 500 XOF</p>
              
              <!-- Main price -->
              <div class="mb-8 lg:mb-10 relative">
                <span class="text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 tracking-tighter font-poppins">25.5</span>
                <span class="text-2xl lg:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FF1493] to-[#FF66CC] font-poppins">k XOF</span>
                
                <!-- Underline effect -->
                <div class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-[#FF1493] to-transparent rounded-full blur-sm"></div>
              </div>
              
              <!-- Delivery badge -->
              <div class="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-50 to-emerald-50 border border-green-100 mb-8">
                <svg class="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                <span class="text-sm font-bold text-green-600 font-poppins">Livraison express offerte</span>
              </div>

              <!-- CTA Button -->
              <button @click="scrollToOrder" 
                      class="w-full group relative py-4 lg:py-6 px-6 lg:px-10 bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl lg:rounded-2xl transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl active:scale-95 overflow-hidden shadow-xl">
                <!-- Animated gradient overlay -->
                <div class="absolute inset-0 bg-gradient-to-r from-[#FF1493] via-[#FF66CC] to-[#FF1493] bg-[length:200%_100%] animate-gradient-x-fast opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <!-- Sparkle effects -->
                <div class="absolute -top-1 -left-1 w-3 h-3 rounded-full bg-white/50 animate-ping-slow"></div>
                <div class="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-white/50 animate-ping-slow" style="animation-delay: 0.5s"></div>
                
                <!-- Button text -->
                <span class="relative z-10 flex items-center justify-center gap-2 lg:gap-3 text-white font-black text-base lg:text-lg font-poppins">
                  <svg class="w-5 h-5 lg:w-6 lg:h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                  JE RÉSERVE
                  <svg class="w-5 h-5 lg:w-6 lg:h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                  </svg>
                </span>
              </button>

              <!-- Customer avatars -->
              <div class="mt-8 lg:mt-10 flex flex-col items-center gap-3">
                <div class="flex -space-x-3">
                  <div v-for="i in 4" :key="i" 
                       :class="`w-8 h-8 lg:w-10 lg:h-10 rounded-full border-4 border-white shadow-sm bg-gradient-to-br from-pink-${100 + i*50} to-rose-${100 + i*50} flex items-center justify-center`">
                    <span class="text-white text-xs lg:text-sm font-bold">❤️</span>
                  </div>
                </div>
                <p class="text-xs font-black text-gray-400 uppercase tracking-widest font-poppins">
                  Déjà <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-500">128 couples</span> ont craqué
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const countdown = ref({
  jours: "00",
  heures: "00",
  minutes: "00",
  secondes: "00"
});

const features = ref([
  "Coton biologique certifié Oeko-Tex",
  "Parfum naturel longue durée (6 mois)",
  "Lavable en machine (+50 cycles)",
  "Fabrication locale artisanale",
  "Coffret luxe inclus",
  "Livraison express offerte"
]);

let timer = null;

const formatNumber = (num) => num.toString().padStart(2, '0');

const updateCountdown = () => {
  const now = new Date();
  const target = new Date(`February 14, ${now.getFullYear()} 00:00:00`);
  
  if (now > target) target.setFullYear(now.getFullYear() + 1);

  const diff = target - now;

  countdown.value.jours = formatNumber(Math.floor(diff / (1000 * 60 * 60 * 24)));
  countdown.value.heures = formatNumber(Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  countdown.value.minutes = formatNumber(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)));
  countdown.value.secondes = formatNumber(Math.floor((diff % (1000 * 60)) / 1000));
};

// Helper functions
const getHeartPricingColor = (n) => {
  const colors = [
    'fill-[#FF1493]/20',
    'fill-[#FF66CC]/15',
    'fill-[#FF1493]/15',
    'fill-[#FF66CC]/10',
    'fill-[#FF1493]/10'
  ]
  return colors[n % colors.length]
}

const getParticleColor = (n) => {
  const colors = [
    'rgba(255, 20, 147, 0.3)',
    'rgba(255, 102, 204, 0.25)',
    'rgba(255, 182, 193, 0.2)'
  ]
  return colors[n % colors.length]
}

const scrollToOrder = () => {
  const el = document.getElementById('pricing')
  if (el) {
    setTimeout(() => {
      el.scrollIntoView({ behavior: 'smooth' })
    }, 300)
  }
}

onMounted(() => {
  updateCountdown();
  timer = setInterval(updateCountdown, 1000);
});

onUnmounted(() => clearInterval(timer));
</script>

<style scoped>
/* Animations */
@keyframes orb-pulse-slow {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.05); }
}

@keyframes orb-drift-slow {
  0%, 100% { transform: translate(0, 0); }
  25% { transform: translate(-20px, 15px); }
  50% { transform: translate(15px, -20px); }
  75% { transform: translate(-15px, 20px); }
}

@keyframes gradient-x {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

@keyframes gradient-x-fast {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

@keyframes heart-float {
  0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.2; }
  50% { transform: translateY(-15px) rotate(5deg); opacity: 0.4; }
}

@keyframes particle-twinkle {
  0%, 100% { opacity: 0.2; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.1); }
}

@keyframes ping-slow {
  75%, 100% { transform: scale(1.3); opacity: 0; }
}

@keyframes soft-bounce {
  0%, 100% { transform: translateY(0) rotate(12deg); }
  50% { transform: translateY(-10px) rotate(12deg); }
}

@keyframes gift-spin {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(5deg); }
  75% { transform: rotate(-5deg); }
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Apply animations */
.animate-orb-pulse-slow {
  animation: orb-pulse-slow 6s ease-in-out infinite;
}

.animate-orb-drift-slow {
  animation: orb-drift-slow 15s ease-in-out infinite;
}

.animate-gradient-x {
  background-size: 200% 100%;
  animation: gradient-x 3s linear infinite;
}

.animate-gradient-x-fast {
  animation: gradient-x-fast 2s ease infinite;
  background-size: 200% 100%;
}

.animate-ping-slow {
  animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
}

.animate-soft-bounce {
  animation: soft-bounce 3s ease-in-out infinite;
}

.animate-gift-spin {
  animation: gift-spin 5s ease-in-out infinite;
}

.floating-heart {
  animation: heart-float 12s ease-in-out infinite;
  pointer-events: none;
  z-index: 0;
}

.pricing-particle {
  pointer-events: none;
  z-index: 0;
}

.animate-particle-twinkle {
  animation: particle-twinkle 2s ease-in-out infinite;
}

.reveal-section {
  animation: fadeInUp 0.8s ease-out forwards;
  opacity: 0;
}

/* Heart positions */
.heart-pricing-1 { top: 15%; left: 5%; animation-delay: 0s; }
.heart-pricing-2 { top: 20%; right: 10%; animation-delay: 2s; }
.heart-pricing-3 { bottom: 25%; left: 8%; animation-delay: 4s; }
.heart-pricing-4 { bottom: 30%; right: 5%; animation-delay: 1s; }
.heart-pricing-5 { top: 35%; left: 25%; animation-delay: 3s; }
.heart-pricing-6 { top: 40%; right: 30%; animation-delay: 5s; }

/* Responsive optimizations */
@media (max-width: 768px) {
  /* Reduce number of decorative elements on mobile */
  .floating-heart:nth-child(n+5),
  .pricing-particle:nth-child(n+8) {
    display: none;
  }
  
  /* Adjust card padding */
  .p-8 {
    padding: 1.5rem;
  }
  
  /* Adjust countdown size */
  .text-2xl {
    font-size: 1.5rem;
  }
  
  /* Adjust price size */
  .text-5xl {
    font-size: 3rem;
  }
}

@media (max-width: 480px) {
  /* Further mobile optimizations */
  .gap-3 {
    gap: 0.5rem;
  }
  
  .w-8.h-8 {
    width: 2rem;
    height: 2rem;
  }
  
  .text-sm {
    font-size: 0.875rem;
  }
  
  .rounded-\[3rem\] {
    border-radius: 2rem !important;
  }
}

/* Smooth transitions */
* {
  transition-property: color, background-color, border-color, transform, opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}
</style>