<template>
  <section class="text-neutral-light pb-80">
    <div class="max-w-screen-xl mx-auto px-48">
      <div class="flex items-end">
        <div>
          <h1>Get in the Boat</h1>
          <p class="mb-80 h4 leading-[42px] w-4/5">
            A story of resilience in the face of life's most difficult
            encounters.
          </p>
          <div class="flex items-center gap-24">
            <NuxtLink class="button button-lg">Pre-Order Now</NuxtLink>
            <div class="note">Available September 1, 2023</div>
          </div>
        </div>
        <img src="~/assets/img/book.png" class="mb-[-200px]" />
      </div>
    </div>
  </section>
</template>

<style type="css" scoped>
.note {
  @apply bg-primary+2 rounded-full px-16 py-8 text-sm;
}
</style>
