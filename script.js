const swiper = new Swiper(".mySwiper", {
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 1,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  loop: true,
});

const missaoSwiper = new Swiper(".missaoSwiper",{
    loop: true,
    effect: "fade",

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    
    autoplay:{
        delay:5000,
    }
});