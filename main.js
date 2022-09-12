const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 4,
  spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
 
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is >= 7680px
    768: {
      slidesPerView: 3,
      spaceBetween: 40
    },
    800: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });