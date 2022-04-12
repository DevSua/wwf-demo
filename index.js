const swiper = new Swiper(".swiper-container", {
  centeredSlides: true,
  loopAdditionalSlides: 1, //loop를 해도 끊기지않고 부드럽게 이어줌
  autoplay: {
    loop: true,
    delay: 5000,
    disableOnInteraction: true, //두장이 끝나고 또 재생
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
