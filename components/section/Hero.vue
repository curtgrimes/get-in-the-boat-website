<script setup lang="ts"></script>

<template>
  <SectionWrapper class="pt-0 md:pt-24 !pb-0 -mb-24">
    <div class="flex items-center justify-center flex-col md:flex-row">
      <div class="w-full md:mr-48">
        <h1 class="text-3xl lg:text-4xl text-center md:text-left mb-12">
          Get in the Boat
        </h1>
        <p
          class="h4 mb-38 leading-[42px] [text-wrap:balance] md:[text-wrap:wrap] text-center md:text-left"
        >
          A story of resilience in the face of life's most difficult encounters.
        </p>
        <div
          class="flex items-center flex-col md:flex-row justify-center md:justify-start gap-x-24 gap-y-12 flex-wrap"
        >
          <NuxtLink
            class="button button-neutral-light lg:button-lg"
            href="https://www.amazon.com/dp/B0CG7CC2VN"
            target="_blank"
          >
            Buy Now
          </NuxtLink>
          <a
            href="#formats"
            class="rounded-full bg-primary+2 px-16 py-4 lg:py-8 text-sm [text-wrap:balance] text-center max-w-[60vw] mx-auto sm:mx-[initial] flex items-center no-underline !text-neutral-light hover:bg-primary+1"
          >
            Available on Kindle, Paperback, and Hardcover Author's Edition
            <Icon
              name="material-symbols:info"
              size="1.5rem"
              class="ml-8 -my-3 -mr-8 shrink-0"
            />
          </a>
        </div>
      </div>
      <div class="md:-mb-48 -mb-80">
        <Book3d class="hidden md:block" />
        <img
          src="~/assets/img/book.jpg"
          alt=""
          class="md:hidden rounded shadow-primary-2 shadow-2xl mt-24 max-w-xs"
        />
      </div>
    </div>
  </SectionWrapper>
</template>
