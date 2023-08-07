<script setup lang="ts">
import { useFocusTrap } from "@vueuse/integrations/useFocusTrap";

const mobileNavigationMenu = ref();
const { activate, deactivate } = useFocusTrap(mobileNavigationMenu);

const showMobileNavigationMenu = ref(false);

onKeyStroke("Escape", () => {
  showMobileNavigationMenu.value = false;
});

watch(showMobileNavigationMenu, async () => {
  await nextTick(); // https://vueuse.org/integrations/useFocusTrap/#usage
  showMobileNavigationMenu.value ? activate() : deactivate();
});
</script>

<template>
  <div class="flex items-center w-full md:hidden bg-primary p-12 mb-24">
    <button
      @click="showMobileNavigationMenu = !showMobileNavigationMenu"
      class="text-primary-2"
      alt="Menu"
      type="button"
    >
      <Icon name="material-symbols:menu" size="2.5rem" />
    </button>
    <SocialLinks
      class="ml-auto [&_a]:text-neutral-light [&_a:hover]:text-neutral-light gap-24 pr-8"
    />
  </div>
  <div class="py-12 md:py-48">
    <nav
      class="hidden md:flex mx-auto max-w-screen-xl px-text-gutter items-center gap-x-16"
    >
      <SectionLinks />
      <SocialLinks
        class="ml-auto [&_a]:text-neutral-light [&_a:hover]:text-neutral-light gap-24"
      />
    </nav>
    <transition
      enter-active-class="duration-100 ease-out"
      enter-from-class="transform opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="duration-100 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="transform opacity-0"
    >
      <div
        v-if="showMobileNavigationMenu"
        ref="mobileNavigationMenu"
        class="fixed inset-0 bg-primary-2 text-neutral-dark overflow-y-auto z-10"
      >
        <SectionLinks
          variant="dark"
          class="gap-48 flex-col !text-xl flex h-full my-0 [&_*]:font-normal"
          @click="showMobileNavigationMenu = false"
        />
        <button
          class="text-primary text-3xl fixed top-12 right-12 leading-4"
          @click="showMobileNavigationMenu = false"
        >
          <Icon name="material-symbols:cancel" />
        </button>
      </div>
    </transition>
  </div>
</template>
