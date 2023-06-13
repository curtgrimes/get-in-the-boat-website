<script setup lang="ts"></script>

<template>
  <div>
    <div class="relative bg-primary z-0">
      <img
        class="absolute -z-10 object-cover w-full h-full mix-blend-luminosity opacity-25"
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
