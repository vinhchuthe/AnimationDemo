// Back to top when page refreshed
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

// // ----------------- logo
// $(".menu__logo").click(function () {
//     window.location.reload(true);
// });


// ------------------------ Fullpage

(function ($) {
    $("#fullpage").fullpage({
        anchors: ['1stSlide', '2ndSlide', '3rdSlide', '4thSlide', '5thSlide', '6thSlide', '7thSlide', '8thSlide', '9thSlide', '10thSlide', '11thSlide', '12thSlide', '13thSlide', '14thSlide', '15thSlide'],
        verticalCentered: false,
        v2compatible: true,
        menu: '#detail-menu',
        css3: true,
        lockAnchors: true,
        recordHistory: true,
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
})(jQuery);




// ------------------------ Preload

$(document).ready(function () {
    $(this).scrollTop(0);
    $.fn.fullpage.setAllowScrolling(false);

    $(".work__cta").click(function () {

        setTimeout(function () {
            $(".work__overlay").addClass("hide");
        }, 1500);
        $(".work__overlay").addClass("fade");
    });


    // --------------- Work on Chrome

    $('.work__content').bind('mousewheel', function (e) {
        if (e.originalEvent.wheelDelta / 120 > 0) {
            // alert('up');
        } else {
            // alert('down');
            $.fn.fullpage.setAllowScrolling(true);
        }
    });


    // ------------------- Work on FireFox

    $(".work__content").on("wheel", function (event) {
        // deltaY obviously records vertical scroll, deltaX and deltaZ exist too
        if (event.originalEvent.deltaY < 0) {
            // wheeled up
            console.log("Works Up");
        }
        else {
            // wheeled down
            $.fn.fullpage.setAllowScrolling(true);
            console.log("Works Down");
        }
    });

});


// ---------------------------- Slide

var swiper1 = new Swiper(' .swiper-container', {
    slidesPerView: 'auto',
    speed: 1000,
    loop: false,
    grabCursor: true,
    mousewheel: true,
    freeMode: true,
    freeModeMomentumRatio: 2,
    freeModeMinimumVelocity: 0.02,
    // freeModeMomentum: false,
});


// ----------------------- Slide animation

var animation1 = new TimelineMax({ paused: true });
animation1.to($(".slide__overlay-inner"), 0.75, { opacity: 0, ease: Power2.easeInOut })
    .to($(".odd .imagewrapper"), 1, { css: { top: "50%" }, ease: Power2.easeInOut }, "-=0.15")
    .to($(".even .imagewrapper"), 1, { css: { top: "50%" }, ease: Power2.easeInOut }, "-=1")
    .from($(".image--text"), 1, { opacity: 0, autoAlpha: 0, ease: Power2.easeInOut }, "-=1")
    .to($(".image1 .imagewrapper"), 1, { css: { left: "50%" }, ease: Power2.easeInOut }, "-=1");


// ------------------------ Open slide

$(".overlay-bot").click(function () {

    $.fn.fullpage.setAllowScrolling(false);
    if ($(".section").hasClass("active")) {
        animation1.play();
        setTimeout(removePosition, 1000);
    }
});


// ------------------------ Back button

$(".menu__back").click(function () {
    animation1.reverse();
    swiper1[0].slideTo(0, 1000, false);
    swiper1[1].slideTo(0, 1000, false);
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

});

$(".baogia__back").click(function () {
    baogia.reverse();
    setTimeout(function () {
        $(".baogia__overlay-wrapper").addClass("hide");
        $(".menu__button").removeClass("hide");
        $(".menu__baogia").removeClass("hide");

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
});

$(".detail-menu-hamburger").click(function () {
    menu.reverse();
    setTimeout(function () {
        $(".detail-menu__overlay").addClass("hide");
        $(".menu__logo").removeClass("hide");
        $(".menu__button").removeClass("hide");
        $(".menu__baogia").removeClass("hide");

    }, 1300);
});

$(".detail-menu--link").click(function () {
    var anchor = $(this).attr("data-anchor");
    console.log(anchor);

    menu.reverse();
    setTimeout(function () {
        $(".detail-menu__overlay").addClass("hide");
        $(".menu__logo").removeClass("hide");
        $(".menu__button").removeClass("hide");
        $(".menu__baogia").removeClass("hide");
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