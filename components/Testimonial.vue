<script setup lang="ts">
import { twMerge } from "tailwind-merge";

const props = defineProps<{
  expandedInitially?: boolean;
  /**
   * The path to an image in the /public folder.
   *
   * (Workaround for https://github.com/nuxt/nuxt/issues/14766.)
   */
  imagePath?: string;
  nameLine1: string;
  nameLine2?: string;
}>();

const slots = useSlots();

const expanded = ref(false);

watch(
  () => props.expandedInitially,
  () => (expanded.value = props.expandedInitially),
  { immediate: true },
);
</script>

<template>
  <blockquote
    class="bg-primary-3 rounded-xl p-24 md:py-38 md:px-48 md:text-lg lg:w-2/3 before:content-['“'] before:text-[16rem] md:before:text-[28rem] before:absolute before:top-[7.5rem] md:before:top-[12rem] before:left-[-2rem] md:before:left-[-3rem] before:text-primary-2 relative before:leading-[0]"
  >
    <div
      :class="
        twMerge(
          'relative',
          !expanded && 'max-h-[150px] md:max-h-[250px] overflow-hidden',
        )
      "
    >
      <slot />
      <div
        v-if="!expanded"
        class="absolute inset-x-0 bottom-0 flex h-[100px] items-end bg-gradient-to-t from-primary-3 from-20%"
      >
        <a href="javascript:void(0)" @click="expanded = !expanded">
          Read more...
        </a>
      </div>
    </div>
    <cite
      class="flex items-start gap-12 mt-12 md:mt-24 justify-end flex-col sm:flex-row"
    >
      <img
        v-if="$props.imagePath"
        :src="$props.imagePath"
        class="rounded-full h-[4rem]"
      />
      <div :class="twMerge($props.imagePath && 'mb-4')">
        <span class="h2 text-lg block">{{ $props.nameLine1 }}</span>
        <slot v-if="slots['name-line2']" name="name-line2" />
        <span v-else>
          {{ $props.nameLine2 }}
        </span>
      </div>
    </cite>
  </blockquote>
</template>
