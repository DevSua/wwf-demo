//SWIPER//
const swiper = new Swiper(".swiper-container", {
  centeredSlides: true,
  loopAdditionalSlides: 1, //슬라이드 마지막에서 다음슬라이드가 보여지지않는 현상 수정
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: true, //끝난후 자동재생
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
