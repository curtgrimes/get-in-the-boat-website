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
});
</script>

<template>
  <NuxtPage />
</template>
