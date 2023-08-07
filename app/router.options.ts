import type { RouterConfig } from "@nuxt/schema";

// Workaround for same-page hash anchors not working in Nuxt.
// See https://github.com/nuxt/nuxt/issues/14033#issuecomment-1140446513

export default <RouterConfig>{
  async scrollBehavior(to, from, savedPosition) {
    if (to.path !== from.path && process.client) {
      window.scrollTo(0, 0);
    }

    await new Promise((resolve) => setTimeout(resolve, 200));

    if (to.hash) {
      const element = document.getElementById(to.hash.substring(1));
      if (element) {
        element.scrollIntoView();
      } else {
        // report element not found
      }
    }
  },
};
