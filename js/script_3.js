// Инициализация слайдера
const slidesCount = document.querySelectorAll('.swiper-slide').length;
const loopMode = slidesCount > 3;
const swiper = new Swiper('.swiper-container', {
  loop: loopMode,
  slidesPerView: 1,
  spaceBetween: 32,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
}); 