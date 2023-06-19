<script setup>
import { twMerge } from "tailwind-merge";
/**
 * A SectionWrapper that sections can use to have a consistent appearance
 */
</script>

<template>
  <section :class="twMerge('py-120', $attrs.class)">
    <div class="mx-auto max-w-screen-xl px-text-gutter">
      <slot />
    </div>
  </section>
</template>
