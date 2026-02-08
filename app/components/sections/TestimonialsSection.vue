<template>
  <section id="testimonials" class="py-24 bg-pink-50/20">
    <div class="container mx-auto px-6">
      <div class="grid md:grid-cols-3 gap-8">
        <div v-for="i in 3" :key="i" class="bg-white p-10 rounded-[3rem] shadow-sm hover:shadow-md transition-shadow">
          <div class="flex gap-1 mb-6">
            <span v-for="s in 5" :key="s" class="text-pink-400">★</span>
          </div>
          <p class="text-gray-700 font-medium italic mb-8 leading-relaxed">
            "Ma compagne a été bluffée par la qualité. On sent vraiment que ce n'est pas une peluche ordinaire. Le coffret est sublime !"
          </p>
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-full bg-pink-100 border-2 border-white shadow-sm"></div>
            <div>
              <p class="font-black text-gray-900 text-sm uppercase">Thomas M.</p>
              <p class="text-[10px] font-bold text-pink-500 uppercase tracking-widest">Acheteur vérifié</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>