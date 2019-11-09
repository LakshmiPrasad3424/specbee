$(document).ready(function () {
    // menu button code
    $('.menu-btn').click(function () {
        $('.main-header').toggleClass('open');
    });
});

$(window).scroll(function () {
    var scrolltop = $(window).scrollTop();

    if (scrolltop > 100) {
        $('header').addClass('scrolled');
    } else {
        $('header').removeClass('scrolled');
    }

    if (scrolltop > 300) {
        $('.scroll-top').addClass('active');
    } else {
        $('.scroll-top').removeClass('active');
    }
})

$("button.scroll-top").click(function () {
    $("html, body").animate({
        scrollTop: 0
    }, "slow");
    return false;
});