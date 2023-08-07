<script setup lang="ts">
import { twMerge } from "tailwind-merge";
import useNavbarAnchors from "../composables/useNavbarAnchors";
const navbarAnchors = useNavbarAnchors();

withDefaults(
  defineProps<{
    variant?: "light" | "dark";
  }>(),
  {
    variant: "light",
  }
);

// :class="
//   twMerge(
//     'flex gap-16 text-lg [&_a]:flex [&_a]:justify-center [&_a]:items-center [&_a]:p-[2px]',
//     variant === 'light' &&
//       '[&_a]:text-neutral-light [&_a:hover]:text-neutral-light',
//     variant === 'dark' &&
//       '[&_a]:text-neutral-dark [&_a:hover]:text-neutral-dark'
//   )
// "

const links = [
  ["About the Book", navbarAnchors.About],
  ["Read an Excerpt", navbarAnchors.Excerpt],
  ["Available Formats", navbarAnchors.Formats],
  ["About the Author", navbarAnchors.Author],
];
</script>

<template>
  <ul
    class="flex items-center justify-center gap-24 lg:gap-48 my-12 md:my-0 text-sm md:text-base"
  >
    <li v-for="[linkText, anchor] in links">
      <NuxtLink
        :to="`#${anchor}`"
        :class="
          twMerge(
            'font-bold no-underline',
            variant === 'light' &&
              '!text-neutral-light !visited:text-neutral-light !hover:text-neutral-light',
            variant === 'dark' && '!text-neutral-dark !visited:text-neutral-dark !hover:text-neutral-dark'
          )
        "
        >{{ linkText }}</NuxtLink
      >
    </li>
  </ul>
</template>
