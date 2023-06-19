<script setup lang="ts"></script>

<template>
  <div>
    <div class="relative z-0 bg-primary text-neutral-light">
      <img
        class="absolute -z-10 h-full w-full object-cover opacity-25 mix-blend-luminosity"
        src="~/assets/img/hero-bg.jpg"
      />
      <Navbar />
      <SectionHero />
    </div>
    <SectionAbout id="about" />
    <SectionExcerpt id="excerpt" />
    <SectionFormats id="formats" />
    <NuxtPage />
  </div>
</template>
