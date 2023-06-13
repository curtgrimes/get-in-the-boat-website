<script setup lang="ts">
import { twMerge } from "tailwind-merge";

const { back } = useRouter();

const titleIsVisible = ref(false);

onKeyStroke("Escape", () => {
  back();
});
</script>

<template>
  <div class="bg-primary-1 pb-40 px-12 sm:px-text-gutter text-neutral-dark">
    <div
      class="flex items-center justify-between border-primary border-b md:max-w-lg mx-auto pt-16 md:pt-40 bg-primary-1 z-10 pb-16 mb-12 md:mb-48 sticky top-0"
    >
      <NuxtLink
        to="/#excerpt"
        class="italic flex items-center gap-x-[4px] font-semibold no-underline"
      >
        <Icon name="ph:arrow-left" /> Get in the Boat
      </NuxtLink>
      <span
        :class="
          twMerge(
            'transition-all duration-150 text-sm',
            titleIsVisible ? 'opacity-0 translate-y-16' : 'opacity-100'
          )
        "
        >Chapter One &middot; A New Normal</span
      >
    </div>
    <ExcerptText @titleVisibilityChange="titleIsVisible = $event" />
  </div>
</template>
