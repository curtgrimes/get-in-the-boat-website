<script setup lang="ts">
import useNavbarAnchors from "../composables/useNavbarAnchors";
const navbarAnchors = useNavbarAnchors();
</script>

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
    <SectionAbout :id="navbarAnchors.About" />
    <SectionExcerpt :id="navbarAnchors.Excerpt" />
    <SectionFormats :id="navbarAnchors.Formats" />
    <SectionAuthor :id="navbarAnchors.Author" />
    <Footer />
    <NuxtPage />
  </div>
</template>
