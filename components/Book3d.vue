<!--
    Source: https://scastiel.dev/3dbook

    Color: #01060f
    Rotate: 31deg
    Rotate (hover): 0deg
    Perspective: 600px
    Animation duration: 1s
    Radius: 3px
    Thickness: 35px
    Width: 200px
    Height: 300px
    Pages offset: 3px
-->
<template>
  <div>
    <div class="book-container">
      <div class="book">
        <img alt="" src="@/assets/img/book.jpg" />
      </div>
    </div>
  </div>
</template>

<style type="css" scoped>
.book-container {
  @apply flex items-center justify-center [perspective:600px] mx-auto min-w-[300px];
}

@keyframes initAnimation {
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(-31deg);
  }
}

.book {
  @apply w-[300px] h-[450px] relative transition-all duration-1000 ease-in-out;
  transform-style: preserve-3d;
  transform: rotateY(-31deg);
  animation: 1s ease 0s 1 initAnimation;
}

.book-container:hover .book,
.book-container:focus .book {
  transform: rotateY(0deg);
}

.book > :first-child {
  @apply absolute top-0 left-0 w-[300px] h-[450px] bg-primary rounded-tr-lg rounded-br-lg rounded-tl rounded-bl;
  transform: translateZ(17.5px);
  box-shadow: 0 20px 50px rgba(255, 255, 255, 0.2);
}

.book::before {
  @apply absolute left-0 top-4 w-[33px] h-[444px] bg-neutral-light;
  content: " ";
  transform: translateX(279.5px) rotateY(90deg);
}

.book::after {
  @apply absolute top-0 left-0 w-[300px] h-[450px] bg-primary+2 rounded-tr-lg rounded-br-lg rounded-tl rounded-bl;
  content: " ";
  transform: translateZ(-17.5px);
  box-shadow: -10px 0 50px 10px rgba(255, 255, 255, 0.1);
}
</style>
