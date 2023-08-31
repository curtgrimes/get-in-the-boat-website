<script setup lang="ts">
defineProps<{
  href: string;
  imageHref: string;
  title: string;
  subtitle?: string;
}>();
</script>

<template>
  <a
    :href="href"
    class="bg-primary-2 rounded-lg p-16 w-full text-center my-[60px] md:my-48 no-underline group hover:bg-primary-1 hover:shadow-2xl transition-all flex flex-col md:basis-1/3 xl:basis-auto mx-24 md:mx-0"
  >
    <div
      class="border-b border-primary-1 lg:mx-32 group-hover:border-primary relative"
    >
      <img :src="imageHref" class="-mt-[100px] max-h-[280px] mx-auto" />
    </div>
    <div class="my-24 lg:h-full flex justify-center flex-col">
      <div
        class="h4 text-lg xl:text-xl flex items-center justify-center group-hover:underline -mr-16 font-bold xl:font-normal"
      >
        <div class="shrink grow-0">{{ title }}</div>
        <Icon name="ion:chevron-forward-outline" />
      </div>
      <p v-if="subtitle" class="mt-8 text-base [text-wrap:balance] not-italic">
        {{ subtitle }}
      </p>
    </div>
  </a>
</template>
