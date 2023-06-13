<script setup lang="ts"></script>

<template>
  <div>
    <div class="relative z-0 bg-primary">
      <img
        class="absolute -z-10 h-full w-full object-cover opacity-25 mix-blend-luminosity"
        src="~/assets/img/hero-bg.jpg"
      />
      <Navbar />
      <HeroSection />
    </div>
    <DescriptionSection />
    <ExcerptSection />
    <NuxtPage />
  </div>
</template>
