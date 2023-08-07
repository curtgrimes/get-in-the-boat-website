<script setup lang="ts"></script>

<template>
  <footer class="bg-primary text-neutral-light py-56">
    <div
      class="mx-auto max-w-screen-xl px-text-gutter flex flex-col md:flex-row"
    >
      <div
        class="text-sm text-center md:text-left mb-16 w-full md:w-auto md:mr-auto md:mb-auto md:pr-48"
      >
        &copy; {{ new Date().getFullYear() }} Get in the Boat
      </div>
      <SectionLinks class="flex-col md:flex-row" />
    </div>
  </footer>
</template>
