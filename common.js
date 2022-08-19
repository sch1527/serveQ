$(function () {
    // 스크롤바 위치에 맞는 페이지네이션
    $(window).scroll(function () {
        let ht = $(window).height()
        let scTop = $(window).scrollTop()

        for (let i = 0; i < 4; i++) {
            if (scTop >= ht * i && scTop < ht * (i + 1)) {
                $('.pagination span').removeClass('on')
                $('.pagination span').eq(i).addClass('on')
            }
        }
        for (let i = 1; i < 4; i++) {
            if (scTop >= ht * i && scTop < ht * (i + 1)) {
                $('#header .gnb>li').removeClass('on')
                $('#header .gnb>li').eq(i - 1).addClass('on')
                $('#header .gnb>li>a').removeClass('on')
                $('#header .gnb>li>a').eq(i - 1).addClass('on')
            } else if (scTop == 0) {
                $('#header .gnb>li').removeClass('on')
                $('#header .gnb>li>a').removeClass('on')
            }
        }
        // 두 번째 화면의 텍스트 효과
        if (scTop >= ht * 1 && scTop < ht * 2) {
            $('#about h3').addClass('on')
            $('#about .name').addClass('on')
            $('#about .birth').addClass('on')
            $('#about .life').addClass('on')
            $('#about .wrap ul').addClass('on')
        } else {
            $('#about h3').removeClass('on')
            $('#about .name').removeClass('on')
            $('#about .birth').removeClass('on')
            $('#about .life').removeClass('on')
            $('#about .wrap ul').removeClass('on')
        }
    })
    // 윈도우 크기가 변경되었을 때
    $(window).resize(function() {
        let wid = $(window).width()
        // width가 1005이하일 때 텍스트 변경
        if (wid <= 1005) {
            $('#about .skills span').text('* 이미지를 클릭해보세요!')
        } else {
            $('#about .skills span').text('* 이미지에 마우스를 올려보세요!')
        }
    })
    let elm = "section"
    $(elm).each(function (index) {
        $(this).on("mousewheel", function (e) {
            e.preventDefault()
            let delta = 0

            if (event.wheelDelta) {
                delta = event.wheelDelta
            }
            let moveTop = $(window).scrollTop()
            let elmSelecter = $(elm).eq(index)

            // 마우스 휠을 위에서 아래로 내렸을 때
            if (delta < 0) {
                if ($(elmSelecter).next('section') != undefined) {
                    try {
                        moveTop = $(elmSelecter).next('section').offset().top
                    } catch (e) {}
                }
                // 마우스 휠을 아래에서 위로 올렸을 때
            } else {
                if ($(elmSelecter).prev('section') != undefined) {
                    try {
                        moveTop = $(elmSelecter).prev('section').offset().top
                    } catch (e) {}
                }
            }
            // 화면 이동
            $('html, body').stop().animate({
                scrollTop: moveTop + 'px'
            }, 0)
        })
    })
    $('#header .ham').click(function() {
        $(this).toggleClass('on')
        $('#header .ham_menu').toggleClass('on')
    })
    $('#header .ham_menu .close').click(function() {
        $('#header .ham').toggleClass('on')
        $('#header .ham_menu').toggleClass('on')
    })
    $('#header .ham_menu a').click(function() {
        $('#header .ham').removeClass('on')
        $('#header .ham_menu').removeClass('on')
    })
    
})