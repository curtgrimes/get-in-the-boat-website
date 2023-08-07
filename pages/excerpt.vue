<script setup lang="ts">
import { twMerge } from "tailwind-merge";
const titleIsVisible = ref(true);

const { back } = useRouter();

onKeyStroke("Escape", () => {
  back();
});
</script>

<template>
  <div class="bg-primary-2 px-12 pb-40 text-neutral-dark sm:px-text-gutter">
    <div
      class="sticky top-0 z-10 mx-auto mb-24 flex items-center justify-between border-b border-primary bg-primary-2 pb-16 pt-16 md:mb-48 md:max-w-lg md:pt-40"
    >
      <NuxtLink
        to="/#excerpt"
        class="flex shrink-0 items-center gap-x-[4px] font-semibold italic no-underline"
      >
        <Icon name="ph:arrow-left" /> Get in the Boat
      </NuxtLink>
      <span
        :class="
          twMerge(
            'flex shrink flex-col items-end gap-x-[4px] text-right text-sm leading-4 opacity-0 transition-all duration-150 xs:flex-row xs:items-center',
            titleIsVisible ? 'translate-y-16 opacity-0' : 'opacity-100'
          )
        "
      >
        <span class="whitespace-nowrap">Chapter One</span>
        <span class="hidden xs:inline">&middot;</span>
        <span class="whitespace-nowrap">A New Normal</span>
      </span>
    </div>
    <ExcerptText @titleVisibilityChange="titleIsVisible = $event" />
  </div>
</template>
