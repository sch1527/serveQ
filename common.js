$(function() {
    $('.ham').click(function() {
        $('.ham_btn').toggleClass('on')
        $('.ham').toggleClass('on')
        $('.ham_btn').toggleClass('changed')
    })
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
})
