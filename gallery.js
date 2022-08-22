const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    // centeredSlides: true,
    // loop: false,
    // effect: "coverflow",
    // grabCUrsor: true,
    // speed: 800,
    // spaceBetween: 0,

    pagination: {
        el: '.swiper-pagination',
      },
    
      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    
  });
  