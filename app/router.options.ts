import type { RouterConfig } from '@nuxt/schema';

// Workaround for same-page hash anchors not working in Nuxt.
// See https://github.com/nuxt/nuxt/issues/14033#issuecomment-1140446513

export default <RouterConfig>{
    async scrollBehavior(to, from, savedPosition) {
        await new Promise(resolve => setTimeout(resolve, 250));

        if (to.hash) {
            const element = document.getElementById(to.hash.substring(1))
            if (element) {
                element.scrollIntoView()
            } else {
                // report element not found
            }
        }
    },
};