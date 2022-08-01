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
  if ($('.gnb').mouseover(() => {
      $('header nav .nav_after').css({
        display: 'block'
      })
    }))
    if ($('.gnb').mouseout(() => {
        $('header nav .nav_after').css({
          display: 'none'
        })
      }))
      // 모바일 sub 슬라이드 토글
      $('.gnb>ul>li>a').click(function () {
        if ($(this).parent().attr('class') != 'on') {
          // .gnb>ul>li>a의 부모의 클래스가 on이 아닐 때,
          $('.sub').slideUp()
          // sub가 슬라이드업 된다 (위쪽으로 사라짐)
          $(this).next().slideToggle();
          // .gnb>ul>li>a의 바로 다음 요소(.sub)가 슬라이드 토글 된다
          $(".gnb>ul>li").removeClass("on");
          // .gnb>ul>li에 있는 클래스 on을 다 제거한다
          $(this).parent().addClass("on");
          // 이것(.gnb>ul>li>a)의 부모(=.gnb>ul>li)의 클래스 on을 붙여준다
        } else {
          // 그 외에
          $(this).next().slideToggle();
          // .gnb>ul>li>a의 바로 다음 요소가(.sub) 슬라이드 토글 된다
          $(this).parent().removeClass("on");
          // .gnb>ul>li>a의 부모의 클래스 on을 제거한다
        }
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