$(function () {
  $('.ham').click(() => {
    $('.ham_btn').toggleClass('on')
    $('.ham').toggleClass('on')
    $('.ham_btn>span').toggleClass('on')
    $('.ham_btn .background').toggleClass('on')
  })
  $('.ham_btn .close').click(() => {
    $('.ham_btn').toggleClass('on')
    $('.ham').toggleClass('on')
    $('.ham_btn>span').toggleClass('on')
    $('.ham_btn .background').toggleClass('on')
    $('.ham_btn .depth2>li').removeClass('on')
  })
  $('.ham_btn .depth1>li>a').eq(0).click(() => {
    $('.ham_btn .depth2>li').removeClass('on')
    $('.ham_btn .depth2>li').eq(0).toggleClass('on')
    $('.ham_btn .depth2>li').eq(1).toggleClass('on')
  })
  $('.ham_btn .depth1>li>a').eq(2).click(() => {
    $('.ham_btn .depth2>li').removeClass('on')
    $('.ham_btn .depth2>li').eq(2).toggleClass('on')
    $('.ham_btn .depth2>li').eq(3).toggleClass('on')
    $('.ham_btn .depth2>li').eq(4).toggleClass('on')
  })
  $('.ham_btn .depth1>li>a').eq(3).click(() => {
    $('.ham_btn .depth2>li').removeClass('on')
    $('.ham_btn .depth2>li').eq(5).toggleClass('on')
    $('.ham_btn .depth2>li').eq(6).toggleClass('on')
    $('.ham_btn .depth2>li').eq(7).toggleClass('on')
    $('.ham_btn .depth2>li').eq(8).toggleClass('on')
    $('.ham_btn .depth2>li').eq(9).toggleClass('on')
    $('.ham_btn .depth2>li').eq(10).toggleClass('on')
  })
  $('.ham_btn .depth1>li>a').eq(4).click(() => {
    $('.ham_btn .depth2>li').removeClass('on')
    $('.ham_btn .depth2>li').eq(11).toggleClass('on')
    $('.ham_btn .depth2>li').eq(12).toggleClass('on')
    $('.ham_btn .depth2>li').eq(13).toggleClass('on')
  })
  $('.ham_btn .depth1>li>a').eq(5).click(() => {
    $('.ham_btn .depth2>li').removeClass('on')
    $('.ham_btn .depth2>li').eq(14).toggleClass('on')
    $('.ham_btn .depth2>li').eq(15).toggleClass('on')
    $('.ham_btn .depth2>li').eq(16).toggleClass('on')
  })
  $('footer .inner .familysite>p').click(function () {
    $('footer .inner .familysite ul').toggleClass('on')
  })
  let a = $('.sec1').height()
  console.log(a)
  $(window).scroll(() => {
    if ($(this).scrollTop() >= (a - 80)) {
      $('header').css({
        borderBottom: '1px solid rgba(0,0,0,0.2)'
      })
    }
    if ($(this).scrollTop() >= 1) {
      $('.main_txt').css({
        color: '#333333'
      })
      $('header').css({
        backgroundColor: 'white'
      })
    } else {
      $('.main_txt').css({
        color: 'white'
      })
      $('header').css({
        backgroundColor: 'transparent'
      })
    }
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
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    effect: "fade"
  });
})