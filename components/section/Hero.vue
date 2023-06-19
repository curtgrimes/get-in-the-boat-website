<template>
  <SectionWrapper class="pb-80 pt-0">
    <div class="flex items-end">
      <div>
        <h1>Get in the Boat</h1>
        <p class="h4 mb-80 w-4/5 leading-[42px]">
          A story of resilience in the face of life's most difficult encounters.
        </p>
        <div class="flex items-center gap-24">
          <NuxtLink class="button button-lg">Pre-Order Now</NuxtLink>
          <div class="note">Available September 1, 2023</div>
        </div>
      </div>
      <img src="~/assets/img/book.png" class="mb-[-200px] w-2/5" />
    </div>
  </SectionWrapper>
</template>

<style type="css" scoped>
.note {
  @apply rounded-full bg-primary+2 px-16 py-8 text-sm;
}
</style>
