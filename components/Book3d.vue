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
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 600px;
  margin: 0 auto;
  min-width: 300px;
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
  width: 300px;
  height: 450px;
  position: relative;
  transform-style: preserve-3d;
  transform: rotateY(-31deg);
  transition: 1s ease;
  animation: 1s ease 0s 1 initAnimation;
}

.book-container:hover .book,
.book-container:focus .book {
  transform: rotateY(0deg);
}

.book > :first-child {
  position: absolute;
  top: 0;
  left: 0;
  background-color: red;
  width: 300px;
  height: 450px;
  transform: translateZ(17.5px);
  background-color: #01060f;
  border-radius: 0 3px 3px 0;
  box-shadow: 0 20px 50px rgba(255, 255, 255, 0.2);
}

.book::before {
  position: absolute;
  content: " ";
  background-color: blue;
  left: 0;
  top: 3px;
  width: 33px;
  height: 444px;
  transform: translateX(279.5px) rotateY(90deg);
  background: linear-gradient(
    90deg,
    #fff 0%,
    #f9f9f9 5%,
    #fff 10%,
    #f9f9f9 15%,
    #fff 20%,
    #f9f9f9 25%,
    #fff 30%,
    #f9f9f9 35%,
    #fff 40%,
    #f9f9f9 45%,
    #fff 50%,
    #f9f9f9 55%,
    #fff 60%,
    #f9f9f9 65%,
    #fff 70%,
    #f9f9f9 75%,
    #fff 80%,
    #f9f9f9 85%,
    #fff 90%,
    #f9f9f9 95%,
    #fff 100%
  );
}

.book::after {
  position: absolute;
  top: 0;
  left: 0;
  content: " ";
  width: 300px;
  height: 450px;
  transform: translateZ(-17.5px);
  background-color: #01060f;
  border-radius: 0 3px 3px 0;
  box-shadow: -10px 0 50px 10px rgba(255, 255, 255, 0.1);
}
</style>
