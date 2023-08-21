<script setup lang="ts">
import useNavbarAnchors from "../composables/useNavbarAnchors";
const navbarAnchors = useNavbarAnchors();
</script>

<template>
  <div>
    <div class="relative z-0 bg-primary text-neutral-light">
      <img
        class="absolute -z-10 h-full w-full object-cover opacity-25 mix-blend-luminosity object-top"
        src="~/assets/img/hero-bg.jpg"
        loading="lazy"
      />
      <Navbar />
      <SectionHero />
    </div>
    <SectionAbout :id="navbarAnchors.About" />
    <LazySectionTestimonials1 />
    <LazySectionExcerpt :id="navbarAnchors.Excerpt" />
    <LazySectionTestimonials2 />
    <LazySectionFormats :id="navbarAnchors.Formats" />
    <LazySectionAuthor :id="navbarAnchors.Author" />
    <LazyFooter />
    <NuxtPage />
  </div>
</template>
