<script setup lang="ts">
import useNavbarAnchors from "../composables/useNavbarAnchors";
const navbarAnchors = useNavbarAnchors();

const links = [
  ["About the Book", navbarAnchors.About],
  ["Read an Excerpt", navbarAnchors.Excerpt],
  ["Available Formats", navbarAnchors.Formats],
  ["About the Author", navbarAnchors.Author],
];
</script>

<template>
  <div class="py-38">
    <nav class="mx-auto max-w-screen-xl px-text-gutter">
      <ul class="flex gap-32">
        <li v-for="[linkText, anchor] in links">
          <NuxtLink :to="`#${anchor}`">{{ linkText }}</NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
a {
  @apply font-bold text-neutral-light no-underline visited:text-neutral-light;
}
</style>
