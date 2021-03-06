// Back to top when page refreshed
window.onbeforeunload = function () {
    history.replaceState(null, null, ' ');
    window.scrollTo(0, 0);
};

// // ----------------- logo
$(".menu__logo").click(function () {
    history.replaceState(null, null, ' ');
    window.scrollTo(0, 0);
    window.location.reload(true);
});


// ------------------------ Fullpage


$("#fullpage").fullpage({
    anchors: ['1stSlide', '2ndSlide', '3rdSlide', '4thSlide', '5thSlide', '6thSlide', '7thSlide', '8thSlide', '9thSlide', '10thSlide', '11thSlide', '12thSlide', '13thSlide', '14thSlide', '15thSlide'],
    // verticalCentered: false,
    v2compatible: true,
    menu: '#detail-menu',
    css3: true,
    lockAnchors: true,
    recordHistory: true,
    touchSensitivity: 15,
    scrollingSpeed: 1000,

    onLeave: function (origin, destination, direction) {
        var leave = new TimelineMax();

        leave.fromTo($(".image1 .imagewrapper"), 1, { css: { top: "60%" } }, { css: { top: "150%" } })
            .fromTo($(".image2 .imagewrapper"), 1, { css: { top: "75%" } }, { css: { top: "-45%" } }, "-=1")
            .fromTo($(".image3 .imagewrapper"), 1, { css: { top: "27%" } }, { css: { top: "150%" } }, "-=1")
            .fromTo($(".image4 .imagewrapper"), 1, { css: { top: "35%" } }, { css: { top: "-45%" } }, "-=1")
            .to($(".slide__overlay"), 0.5, { opacity: 0 }, "-=0.5");


    },

    afterLoad: function (origin, destination, direction) {

        if (origin == "2ndSlide") {
            $.fn.fullpage.setAllowScrolling(false, 'up');
            $.fn.fullpage.setAllowScrolling(true, 'down');
            setTimeout(function () {
                $(".menu__button").addClass("gray");
            }, 500);
        } else {
            $.fn.fullpage.setAllowScrolling(true, 'up');
        }

        var load = new TimelineMax({ delay: 0.7 });

        load.to($(".slide__overlay"), 0.5, { opacity: 1 })
            .to($(".image1 .imagewrapper"), 1, { css: { top: "60%" }, ease: Power2.easeInOut }, "-=0.5")
            .to($(".image2 .imagewrapper"), 1, { css: { top: "75%" }, ease: Power2.easeInOut }, "-=1")
            .to($(".image3 .imagewrapper"), 1, { css: { top: "27%" }, ease: Power2.easeInOut }, "-=1")
            .to($(".image4 .imagewrapper"), 1, { css: { top: "35%" }, ease: Power2.easeInOut }, "-=1");
    }

});


// ------------------------ Preload

$(document).ready(function () {
    $.fn.fullpage.setAllowScrolling(false);

    $(".work__cta").click(function () {

        setTimeout(function () {
            $(".work__overlay").addClass("hide");
        }, 700);
        $(".work__overlay").addClass("fade");
        $(".menu__baogia").removeClass("mb-hide");
        $(".menu__logo").removeClass("mb-hide");
        $.fn.fullpage.setAllowScrolling(true);
    });


    // ------------------- Resize Windows
    var $window = $(window);

    function checkWidth() {
        var WindowSize = $window.width();
        if (WindowSize < 767) {
            $(".vct-wrapper").addClass("mobile");
            $(".menu__baogia").addClass("mb-hide");
            $(".menu__logo").addClass("mb-hide");
            $(".sroll-desk").addClass("hide");
            $(".scroll-mb").removeClass("hide");
        } else {
            $(".vct-wrapper").removeClass("mobile");
            $(".menu__baogia").removeClass("mb-hide");
            $(".menu__logo").removeClass("mb-hide");
            $(".sroll-desk").removeClass("hide");
            $(".scroll-mb").addClass("hide");
        }
    };
    // Execute on load
    checkWidth();
    // Bind event listener
    $(window).resize(checkWidth);

});




// ---------------------------- Slide

var swiper1 = new Swiper(' .swiper-container', {
    slidesPerView: 'auto',
    speed: 1000,
    loop: false,
    grabCursor: true,
    mousewheel: true,
    freeMode: true,

    breakpoints: {
        767: {
            slidesPerView: '1.15',
            grabCursor: false,
            mousewheel: false,
            freeModeSticky: true
        },
        1024: {
            slidesPerView: '1.5',
            grabCursor: false,
            mousewheel: false,
            freeModeSticky: true
        }
    }
});

// ----------------------- Tween set
TweenMax.set($(".image--text"), { opacity: 0, autoAlpha: 0 });

// ------------------------ Open slide
var animation1 = new TimelineMax();
$(".overlay-bot").click(function () {

    $.fn.fullpage.setAllowScrolling(false);

    animation1.to($(".slide__overlay-inner"), 0.75, { opacity: 0, ease: Power2.easeInOut })
        .to($(".odd .imagewrapper"), 0.75, { css: { top: "50%" }, ease: Power2.easeInOut }, "-=0.15")
        .to($(".even .imagewrapper"), 0.75, { css: { top: "50%" }, ease: Power2.easeInOut }, "-=0.75")
        .fromTo($(".image--text"), 0.75, { opacity: 0, autoAlpha: 0, ease: Power2.easeInOut }, { opacity: 1, autoAlpha: 1, ease: Power2.easeInOut }, "-=0.75")
        .to($(".image1 .imagewrapper"), 0.75, { css: { left: "50%" }, ease: Power2.easeInOut }, "-=0.75");

    setTimeout(removePosition, 1000);
});


// ------------------------ Back button
var animation2 = new TimelineMax();

$(".menu__back").click(function () {
    
    animation2.to($(".slide__overlay"), 0.5, { opacity: 1 })
        .to($(".image1 .imagewrapper"), 0.75, { css: { top: "60%" }, ease: Power2.easeInOut }, "-=0.5")
        .to($(".image2 .imagewrapper"), 0.75, { css: { top: "75%" }, ease: Power2.easeInOut }, "-=0.75")
        .to($(".image3 .imagewrapper"), 0.75, { css: { top: "27%" }, ease: Power2.easeInOut }, "-=0.75")
        .to($(".image4 .imagewrapper"), 0.75, { css: { top: "35%" }, ease: Power2.easeInOut }, "-=0.75")
        .fromTo($(".image--text"), 0.75, { opacity: 1, autoAlpha: 1, ease: Power2.easeInOut }, { opacity: 0, autoAlpha: 0, ease: Power2.easeInOut }, "-=0.75")
        .to($(".slide__overlay-inner"), 0.75, { opacity: 1, ease: Power2.easeInOut }, "-=0.25");

    swiper1[0].slideTo(0, 1000, false);
    swiper1[1].slideTo(0, 1000, false);
    swiper1[2].slideTo(0, 1000, false);
    swiper1[3].slideTo(0, 1000, false);
    swiper1[4].slideTo(0, 1000, false);
    swiper1[5].slideTo(0, 1000, false);
    swiper1[6].slideTo(0, 1000, false);
    swiper1[7].slideTo(0, 1000, false);
    swiper1[8].slideTo(0, 1000, false);
    swiper1[9].slideTo(0, 1000, false);
    swiper1[10].slideTo(0, 1000, false);
    swiper1[11].slideTo(0, 1000, false);
    swiper1[12].slideTo(0, 1000, false);
    AddPosition();
    $.fn.fullpage.setAllowScrolling(true);
});


// ---------------------- Baogia-overlay

var baogia = new TimelineMax({ paused: true });
baogia.from($(".baogia__overlay--bg"), 0.5, { scaleY: 0, transformOrigin: "50% 0%", ease: Power2.easeInOut })
    .from($(".baogia__overlay--inner"), 0.75, { opacity: 0, autoAlpha: 0, ease: Power2.easeInOut })
    .from($(".baogia__back"), 0.75, { opacity: 0, autoAlpha: 0, ease: Power2.easeInOut }, "-=0.75");

$(".menu__baogia").click(function () {
    $(".baogia__overlay-wrapper").removeClass("hide");
    baogia.play();
    $(".menu__button").addClass("hide");
    $(".menu__baogia").addClass("hide");
    $.fn.fullpage.setAllowScrolling(false);
});

$(".baogia__back").click(function () {
    baogia.reverse();
    setTimeout(function () {
        $(".baogia__overlay-wrapper").addClass("hide");
        $(".menu__button").removeClass("hide");
        $(".menu__baogia").removeClass("hide");
        $.fn.fullpage.setAllowScrolling(true);
    }, 1500);
});


// ---------------------- Menu-list

$("#menu__grid").niceScroll({
    oneaxismousemode: true
});

var menu = new TimelineMax({ paused: true });
menu.from($(".detail-menu__overlay--inner"), 0.5, { scaleY: 0, transformOrigin: "50% 0%", ease: Power2.easeInOut })
    .from($(".detail-menu__grid"), 0.75, { opacity: 0, autoAlpha: 0, ease: Power2.easeInOut })
    .from($(".detail-menu-icon__wrapper"), 0.75, { opacity: 0, autoAlpha: 0, ease: Power2.easeInOut }, "-=0.75")
    .from($(".grid-bgicon"), 0.75, { opacity: 0, autoAlpha: 0, ease: Power2.easeInOut }, "-=0.75");

$("#hamburger").click(function () {
    $(".detail-menu__overlay").removeClass("hide");
    $(".menu__button").addClass("hide");
    menu.play();
    $(".menu__logo").addClass("hide");
    $(".menu__baogia").addClass("hide");
    $.fn.fullpage.setAllowScrolling(false);
});

$(".detail-menu-hamburger").click(function () {
    menu.reverse();
    $.fn.fullpage.setAllowScrolling(true);
    setTimeout(function () {
        $(".detail-menu__overlay").addClass("hide");
        $(".menu__logo").removeClass("hide");
        $(".menu__button").removeClass("hide");
        $(".menu__baogia").removeClass("hide");

    }, 1300);
});

//  keypress
$(document).keydown(function (e) {
    var code = e.keyCode || e.which;
    if (code == 27) {
        menu.reverse();
        $.fn.fullpage.setAllowScrolling(true);
        setTimeout(function () {
            $(".detail-menu__overlay").addClass("hide");
            $(".menu__logo").removeClass("hide");
            $(".menu__button").removeClass("hide");
            $(".menu__baogia").removeClass("hide");
        }, 1300);

        baogia.reverse();
        setTimeout(function () {
            $(".baogia__overlay-wrapper").addClass("hide");
            $(".menu__button").removeClass("hide");
            $(".menu__baogia").removeClass("hide");
        }, 1500);
    }
});
// End keypress


$(".detail-menu--link").click(function () {
    var anchor = $(this).attr("data-anchor");
    console.log(anchor);
    $.fn.fullpage.setAllowScrolling(true);
    menu.reverse();
    setTimeout(function () {
        $(".detail-menu__overlay").addClass("hide");
        $(".menu__logo").removeClass("hide");
        $(".menu__button").removeClass("hide");
        $(".menu__baogia").removeClass("hide");
        animation1.reverse();
        AddPosition();
        $.fn.fullpage.moveTo(anchor);
    }, 1300);

});

$(".detail-menu--link").mouseenter(function () {
    var num = $(this).attr("data-anchor");
    $(".grid-bgicon img").addClass("hide");
    $("." + num).removeClass("hide");
});


// ---------------------- function

function removePosition() {
    $(".section").addClass("reveal");
    $(".menu__baogia").addClass("hide");
    $(".menu__back").removeClass("hide");
    $(".swiper-wrapper").removeClass("custom-position");
}
function AddPosition() {
    $(".section").removeClass("reveal");
    $(".menu__baogia").removeClass("hide");
    $(".menu__back").addClass("hide");
    $(".swiper-wrapper").addClass("custom-position");
}