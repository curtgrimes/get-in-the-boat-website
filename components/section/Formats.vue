<script setup lang="ts">
import { twMerge } from "tailwind-merge";
import { createReusableTemplate } from "@vueuse/core";

const [FormatCardTemplate, FormatCard] = createReusableTemplate<{
  title: string;
  class?: string;
  href?: string;
}>();
</script>

<template>
  <SectionWrapper :with-text-gutter="false">
    <h2 class="text-center">Available Formats</h2>
    <p
      class="mx-auto mb-56 max-w-md text-center text-lg"
      style="text-wrap: balance"
    >
      Get your copy of "Get in the Boat" delivered in the format that best
      matches your reading preference.
    </p>
    <FormatCardTemplate v-slot="{ title, $slots, class: classNames, href }">
      <div
        :class="
          twMerge(
            'format-card flex flex-col bg-primary-2 p-32 text-center',
            classNames || ''
          )
        "
        style="text-wrap: balance"
      >
        <h3 class="text-center">{{ title }}</h3>
        <div class="h-full">
          <component v-if="$slots.default" :is="$slots.default" />
        </div>
        <NuxtLink v-if="href" class="button mt-auto">Preorder Today</NuxtLink>
      </div>
    </FormatCardTemplate>

    <div class="flex grid-cols-6 flex-col gap-24 px-24 md:grid xl:grid-cols-7">
      <FormatCard title="eBook" class="col-span-2" href=".">
        <img src="~/assets/img/kindle.png" />
        <p>
          Start reading instantly on your Amazon Kindle through the Kindle app.
        </p>
      </FormatCard>
      <FormatCard
        title="Author Edition"
        class="col-span-2 xl:col-span-3"
        href="."
      >
        <img src="~/assets/img/open-book.png" />
        <div>
          The Author's Edition of "Get in the Boat" provides an enhanced reading
          experience. Get your hardcover copy with exclusive photos and more
          delivered to your door.
        </div>
      </FormatCard>
      <FormatCard title="Hardcover" class="col-span-2" href=".">
        <img src="~/assets/img/book.png" />
        <div>
          For lovers of physical books, get a hardcover copy delivered right to
          your door.
        </div>
      </FormatCard>
    </div>
  </SectionWrapper>
</template>

<style scoped>
.format-card .button {
  @apply mx-auto mt-32 block w-full max-w-[280px] text-center;
}

.format-card img {
  @apply mx-auto max-h-[320px] py-24;
}
</style>
