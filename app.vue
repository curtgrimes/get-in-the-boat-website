<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import HeroSection from "./components/sections/HeroSection.vue";
import DescriptionSection from "./components/sections/DescriptionSection.vue";
</script>

<template>
  <div class="relative bg-primary z-0">
    <img
      class="absolute -z-10 object-cover w-full h-full mix-blend-luminosity opacity-25"
      src="~/assets/img/hero-bg.jpg"
    />
    <Navbar />
    <HeroSection />
  </div>
  <DescriptionSection />
</template>
