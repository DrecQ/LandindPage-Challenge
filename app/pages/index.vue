<template>
  <div class="bg-off-white">
        <Navbar />
        <HeroSection />
        <WhySection />
        <ProductSection />
        <PricingSection />
        <TestimonialsSection />
        <Footer />
  </div>  

</template>

<script lang="ts" setup>
import Footer from '~/components/Footer.vue';
import Navbar from '~/components/Navbar.vue'
import HeroSection from '~/components/sections/HeroSection.vue'
import PricingSection from '~/components/sections/PricingSection.vue';
import ProductSection from '~/components/sections/ProductSection.vue';
import TestimonialsSection from '~/components/sections/TestimonialsSection.vue';
import WhySection from '~/components/sections/WhySection.vue';
</script>

<style>

</style>