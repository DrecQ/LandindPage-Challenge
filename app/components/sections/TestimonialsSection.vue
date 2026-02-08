<template>
  <section id="testimonials" class="py-20 md:py-24 bg-gradient-to-b from-white to-pink-50/30">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-16" v-reveal>
        <h2 class="text-3xl md:text-4xl font-black text-gray-900 font-poppins mb-4">
          Ils ont déjà
          <span class="relative inline-block">
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#FF1493] to-[#FF66CC] italic" style="font-family: 'Harrington', cursive;">
              succombé.
            </span>
            <span class="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-[#FF1493] to-[#FF66CC] rounded-full"></span>
          </span>
        </h2>
        <p class="text-gray-600 text-lg max-w-2xl mx-auto font-medium">
          Découvrez ce que pensent ceux qui ont déjà offert la ValenPeluche
        </p>
      </div>

      <!-- Testimonials Grid -->
      <div class="grid md:grid-cols-3 gap-6 lg:gap-8">
        <div v-for="(testimonial, i) in testimonials" :key="i" 
             class="group relative"
             :style="{ animationDelay: `${i * 150}ms` }">
          
          <!-- Card Container -->
          <div class="relative h-full bg-white p-8 lg:p-10 rounded-3xl
                      border-2 border-white hover:border-pink-200/50
                      shadow-lg hover:shadow-xl hover:shadow-pink-100/50
                      transition-all duration-500 transform hover:-translate-y-2">
            
            <!-- Decorative Corner -->
            <div class="absolute top-0 right-0 w-16 h-16 overflow-hidden">
              <div class="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#FF1493]/5 to-transparent -rotate-45 transform translate-x-4 -translate-y-4"></div>
            </div>
            
            <!-- Quote Icon -->
            <div class="absolute -top-3 -left-3 w-12 h-12 bg-gradient-to-br from-pink-100 to-rose-100 
                       rounded-full flex items-center justify-center text-2xl text-[#FF1493] border-2 border-white shadow-md">
              "
            </div>

            <!-- Rating -->
            <div class="flex gap-1 mb-6">
              <span v-for="s in 5" :key="s" class="text-xl text-[#FF66CC]">★</span>
            </div>

            <!-- Testimonial Text -->
            <p class="text-gray-700 font-medium text-base lg:text-lg leading-relaxed mb-8 italic">
              "{{ testimonial.text }}"
            </p>

            <!-- Customer Info -->
            <div class="flex items-center gap-4">
              <!-- Avatar -->
              <div class="relative">
                <div class="w-14 h-14 rounded-full bg-gradient-to-br from-pink-100 to-rose-100 
                           border-2 border-white shadow-md flex items-center justify-center">
                  <span class="text-[#FF1493] font-black text-lg">{{ testimonial.initials }}</span>
                </div>
                <!-- Verified Badge -->
                <div class="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r from-[#FF1493] to-[#FF66CC] 
                          rounded-full flex items-center justify-center border-2 border-white">
                  <span class="text-white text-xs">✓</span>
                </div>
              </div>
              
              <!-- Customer Details -->
              <div>
                <p class="font-black text-gray-900 text-base">{{ testimonial.name }}</p>
                <div class="flex items-center gap-2 mt-1">
                  <span class="text-[10px] font-bold text-[#FF1493] uppercase tracking-widest">
                    Acheteur vérifié
                  </span>
                  <span class="text-gray-400 text-xs">•</span>
                  <span class="text-gray-400 text-xs">{{ testimonial.date }}</span>
                </div>
              </div>
            </div>

            <!-- Product Tag -->
            <div class="mt-6 pt-6 border-t border-gray-100">
              <span class="inline-flex items-center gap-2 px-3 py-1 bg-pink-50 rounded-full">
                <span class="text-xs text-gray-600 font-medium">{{ testimonial.product }}</span>
                <span class="text-xs text-[#FF1493]">❤️</span>
              </span>
            </div>

            <!-- Hover Effect Line -->
            <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 
                       bg-gradient-to-r from-[#FF1493] to-[#FF66CC] rounded-full 
                       group-hover:w-3/4 transition-all duration-500"></div>
          </div>

          <!-- External Glow -->
          <div class="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#FF1493]/0 via-[#FF1493]/5 to-[#FF1493]/0 
                     blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
        </div>
      </div>

      <!-- Trust Stats -->
      <div class="mt-20 pt-12 border-t border-gray-200">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div v-for="stat in stats" :key="stat.label" class="text-center">
            <div class="text-3xl md:text-4xl font-black text-[#FF1493] font-poppins mb-2">
              {{ stat.value }}
            </div>
            <div class="text-sm font-semibold text-gray-600">
              {{ stat.label }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const testimonials = ref([
  {
    initials: 'TM',
    name: 'Thomas M.',
    date: '14 Fév 2024',
    product: 'ValenPeluche Rose',
    text: 'Ma compagne a été bluffée par la qualité. On sent vraiment que ce n\'est pas une peluche ordinaire. Le coffret est sublime et le message personnalisé a fait son effet !',
    rating: 5
  },
  {
    initials: 'SL',
    name: 'Sophie L.',
    date: '10 Fév 2024',
    product: 'ValenPeluche Cœur',
    text: 'J\'ai offert cette peluche à mon ami pour notre premier anniversaire. Il a adoré ! La douceur est incroyable et le petit nœud en satin ajoute une touche d\'élégance.',
    rating: 5
  },
  {
    initials: 'AP',
    name: 'Alexandre P.',
    date: '8 Fév 2024',
    product: 'ValenPeluche Classique',
    text: 'Livraison ultra rapide, emballage soigné. Ma petite amie ne la quitte plus depuis qu\'elle l\'a reçue. Un cadeau qui fait vraiment plaisir, bien mieux que des fleurs !',
    rating: 5
  }
])

const stats = ref([
  { value: '4.9/5', label: 'Satisfaction client' },
  { value: '98%', label: 'Recommanderait' },
  { value: '24h', label: 'Livraison moyenne' },
  { value: '500+', label: 'Cœurs conquis' }
])
</script>

<style scoped>
/* Smooth entrance animation */
[class*="group"] {
  animation: slideUp 0.6s ease-out forwards;
  opacity: 0;
  transform: translateY(30px);
}

@keyframes slideUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .grid-cols-2 {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .grid-cols-4 {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
}
</style>