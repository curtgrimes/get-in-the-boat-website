<script setup lang="ts">
withDefaults(
  defineProps<{
    showFullEmail?: Boolean;
  }>(),
  {
    showFullEmail: () => false,
  },
);
</script>

<template>
  <div
    class="flex gap-16 text-lg [&_a]:flex [&_a]:justify-center [&_a]:items-center [&_a]:p-[2px]"
  >
    <VTooltip>
      <a
        href="https://www.facebook.com/profile.php?id=100092701665994"
        alt="Get in the Boat on Facebook"
        target="_blank"
      >
        <Icon name="bi:facebook" />
      </a>
      <template #popper>
        <span class="italic">Get in the Boat</span> on Facebook
      </template>
    </VTooltip>
    <VTooltip>
      <a
        href="https://www.linkedin.com/in/darlene-fuchs-46aa7447/"
        alt="Get in the Boat on LinkedIn"
        target="_blank"
      >
        <Icon name="bi:linkedin" />
      </a>
      <template #popper>
        <span class="italic">Get in the Boat</span> on LinkedIn
      </template>
    </VTooltip>
    <VTooltip>
      <a
        href="mailto:darlene@darlenefuchs.com"
        alt="Email Darlene Fuchs"
        target="_blank"
        class="no-underline"
      >
        <Icon name="mdi:email-open-multiple" />
        <span v-if="showFullEmail" class="text-base pl-8 hidden lg:inline">
          darlene@darlenefuchs.com
        </span>
      </a>
      <template #popper> Email Darlene </template>
    </VTooltip>
  </div>
</template>
