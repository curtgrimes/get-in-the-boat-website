<script setup></script>

<template>
  <div class="bg-primary-1 sm:hidden">
    <img
      src="~/assets/img/journal-page-less-fade.jpg"
      alt=""
      class="mix-blend-multiply w-full h-[30vh] object-cover object-right-top pointer-events-none"
    />
  </div>
  <SectionWrapper class="bg-primary-2 pt-48 sm:py-80 relative">
    <img
      src="~/assets/img/journal-page.jpg"
      alt=""
      class="hidden sm:block mix-blend-darken absolute object-cover object-right-top w-3/4 h-full top-0 bottom-0 left-1/4 right-0 opacity-20 md:opacity-40 xl:opacity-50 pointer-events-none"
    />
    <ExcerptText showContinueReadingButton />
  </SectionWrapper>
</template>
