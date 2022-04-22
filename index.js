//SWIPER//
new Swiper(".back .swiper-container", {
  centeredSlides: true,
  loopAdditionalSlides: 1, //슬라이드 마지막에서 다음슬라이드가 보여지지않는 현상 수정
  slidesPerView: 1,
  centeredSlides: true,
  effect: "fade",
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: true, //끝난후 자동재생
  },
  navigation: {
    nextEl: ".back .swiper-button-next",
    prevEl: ".back .swiper-button-prev",
  },
});

new Swiper(".get_involved .swiper-container", {
  centeredSlides: true,
  loopAdditionalSlides: 1, //슬라이드 마지막에서 다음슬라이드가 보여지지않는 현상 수정
  slidesPerView: 5,
  spaceBetween: 500,
  mousewheel: true,
  loop: true,
  debugger: true,
  pagination: {
    clickable: true,
  },
  navigation: {
    nextEl: ".get_involved .swiper-button-next",
    prevEl: ".get_involved .swiper-button-prev",
  },
});
//  마우스로 스크롤 할수있게 만들기
document.addEventListener("scroll", () => {
  var nav = document.querySelector("nav");
  let y = window.scrollY;
  if (y > 1300) {
    nav.style.backgroundColor = "black";
    nav.style.width = "100%";
  } else {
    nav.style.backgroundColor = "transparent";
  }
});
//https://www.nextree.co.kr/p8622/ 반응형
