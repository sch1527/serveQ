$(function() {
    $('.ham').click(function() {
        $('.ham_btn').toggleClass('on')
        $('.ham').toggleClass('on')
        $('.ham_btn>span').toggleClass('on')
        $('.ham_btn .background').toggleClass('on')
    })
    $('.ham_btn>span').click(function() {
        $('.ham_btn').toggleClass('on')
        $('.ham').toggleClass('on')
        $('.ham_btn>span').toggleClass('on')
        $('.ham_btn .background').toggleClass('on')
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
