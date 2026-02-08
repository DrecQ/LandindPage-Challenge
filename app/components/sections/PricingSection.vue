<template>
  <section id="pricing" class="py-24 bg-white">
    <div class="container mx-auto px-6 max-w-4xl text-center">
      <div class="relative bg-white rounded-[4rem] p-12 lg:p-20 
                  shadow-[0_40px_100px_rgba(255,20,147,0.1)] 
                  border border-pink-50 overflow-hidden
                  hover:shadow-[0_50px_120px_rgba(255,20,147,0.15)]
                  transition-shadow duration-300">
        
        <!-- Improved Ribbon -->
        <div class="absolute top-8 -right-8 rotate-45 z-10">
          <div class="bg-gradient-to-r from-[#FF1493] to-[#FF66CC] 
                     text-white px-16 py-3 font-black text-sm 
                     tracking-widest uppercase shadow-lg">
            -40% AUJOURD'HUI
          </div>
          <div class="absolute -bottom-2 right-1/2 translate-x-1/2 
                    w-4 h-4 bg-[#FF66CC] rotate-45"></div>
        </div>

        <!-- Background Glow -->
        <div class="absolute -inset-1 bg-gradient-to-r from-[#FF1493]/10 to-[#FF66CC]/10 
                   blur-xl opacity-0 hover:opacity-100 transition-opacity duration-500 -z-10"></div>

        <h3 class="text-2xl font-black text-gray-400 uppercase tracking-[0.2em] mb-4">
          Édition Limitée
        </h3>
        
        <h2 class="text-5xl lg:text-7xl font-black text-gray-900 font-poppins mb-8">
          La ValenPeluche
        </h2>
        
        <div class="flex items-center justify-center gap-4 mb-10">
          <span class="text-3xl text-gray-300 line-through font-bold italic">
            65€
          </span>
          <span class="text-7xl lg:text-8xl font-black 
                     bg-gradient-to-r from-[#FF1493] to-[#FF66CC] 
                     bg-clip-text text-transparent tracking-tighter">
            39€
          </span>
        </div>

        <!-- Enhanced Button -->
        <button class="group relative inline-flex items-center gap-6 
                     px-12 py-6 
                     bg-gradient-to-r from-[#FF1493] via-[#FF66CC] to-[#FF1493]
                     bg-[length:200%] animate-gradient-x
                     text-white rounded-2xl font-black text-xl lg:text-2xl 
                     hover:shadow-xl hover:shadow-pink-300/50
                     transition-all duration-300 hover:scale-105 
                     overflow-hidden">
          
          <span class="relative">Réserver mon cadeau</span>
          <span class="relative animate-pulse">🌹</span>
          
          <!-- Button Overlay -->
          <div class="absolute inset-0 bg-white/0 group-hover:bg-white/10 
                    transition-all duration-300"></div>
        </button>
        
        <p class="mt-8 text-gray-400 text-sm font-bold italic">
          Stock restant : 14 exemplaires pour la Saint-Valentin
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
@keyframes gradient-x {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.animate-gradient-x {
  animation: gradient-x 3s ease infinite;
}
</style>