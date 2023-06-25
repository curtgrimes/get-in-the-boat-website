<script setup lang="ts">
import { twMerge } from "tailwind-merge";
/**
 * A SectionWrapper that sections can use to have a consistent appearance
 */

withDefaults(
  defineProps<{
    withTextGutter?: Boolean;
  }>(),
  {
    withTextGutter: () => true,
  }
);
</script>

<template>
  <section :class="twMerge('py-120', ($attrs.class || '') as string)">
    <div
      :class="
        twMerge(
          'mx-auto max-w-screen-xl',
          $props.withTextGutter && 'px-text-gutter'
        )
      "
    >
      <slot />
    </div>
  </section>
</template>
