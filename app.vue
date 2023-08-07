<script setup lang="ts">
useSeoMeta({
  themeColor: "#eceaf4",
});

useHead({
  titleTemplate: (subpageName) => {
    const mainTitle =
      "Get in the Boat - A Memoir of Love, Loss, and the Dance with Dementia";
    return subpageName ? `${subpageName} - ${mainTitle}` : mainTitle;
  },
  link: [
    {
      rel: "icon",
      href: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🚣</text></svg>",
    },
  ],
});
</script>

<template>
  <NuxtPage />
</template>
