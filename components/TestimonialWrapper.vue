<template>
  <div
    class="[&>*:nth-child(odd)]:self-start [&>*:nth-child(even)]:self-end flex flex-col gap-16"
  >
    <slot />
  </div>
</template>
