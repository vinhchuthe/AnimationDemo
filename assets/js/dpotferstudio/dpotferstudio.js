// ------------------------ Preload

$(document).ready(function () {
    $.fn.fullpage.setAllowScrolling(false);

    setTimeout(function () {
        $(".loader__scroll").removeClass("hidden");
    }, 2500);

    $('#section1').bind('mousewheel', function (e) {
        if (e.originalEvent.wheelDelta / 120 > 0) {
            // alert('up');
        } else {
            // alert('down');
            var hidtext = new TimelineMax();
            hidtext.staggerTo($(".line .word"), 1, { y: "+=20px", opacity: 0 }, "0.09")
                .to($(".loader__scroll"), 1, { opacity: 0 }, "-=1");
            $.fn.fullpage.setAllowScrolling(true);
        }
    });

    var line1 = TweenMax.staggerFrom($(".line1 .word"), 1, { x: "-=40px", autoAlpha: 0 }, "0.3");
    var line2 = TweenMax.staggerFrom($(".line2 .word"), 1, { x: "-=40px", autoAlpha: 0 }, "0.3");
    var line3 = TweenMax.staggerFrom($(".line3 .word"), 1, { x: "-=40px", autoAlpha: 0 }, "0.35");
    var line4 = TweenMax.staggerFrom($(".line4 .word"), 1, { x: "-=40px", autoAlpha: 0 }, "0.3");
    var line5 = TweenMax.staggerFrom($(".line5 .word"), 1, { x: "-=40px", autoAlpha: 0 }, "0.35");
    var line6 = TweenMax.staggerFrom($(".line6 .word"), 1, { x: "-=40px", autoAlpha: 0 }, "0.3");
    var preload = new TimelineMax();
    preload.add([line1, line2, line3, line4, line5, line6], "+=0.5", "sequence", -1);
});

// ------------------------ Fullpage

(function ($) {
    $("#fullpage").fullpage({
        anchors: ['firstSlide', 'secondSlide', 'thirdSlide'],
        verticalCentered: false,
        v2compatible: true,
        css3: true,
        lockAnchors: true,
        recordHistory: true,
        scrollingSpeed: 1000,

        onLeave: function (origin, destination, direction) {
            var leave = new TimelineMax();

            if (origin == 1 && direction == "down") {
                var delayInMilliseconds = 2000;

                setTimeout(function () {
                    $(".vct-overlay").removeClass("hidden");
                }, delayInMilliseconds);

            }

            leave.staggerTo($(".work__title .line"), 0.75, { y: "-=20px", opacity: 0, ease: Power2.easeInOut }, "0.15")
                .fromTo($(".odd"), 1, { css: { top: "80%" } }, { css: { top: "150%" } }, "-=0.5")
                .fromTo($(".even"), 1, { css: { top: "-25%" } }, { css: { top: "-100%" } }, "-=1")
                .to($("box"), 1, { opacity: 0 }, "-=0.5")

            console.log(origin);
        },

        afterLoad: function (origin, destination, direction) {

            if (origin == "secondSlide") {
                $.fn.fullpage.setAllowScrolling(false, 'up');
            } else {
                $.fn.fullpage.setAllowScrolling(true, 'up');
            }

            var load = new TimelineMax({ delay: 0.5 });
            load.to($(".box"), 1, { opacity: 1 })
                .to($(".odd"), 1, { css: { top: "80%" }, ease: Power2.easeInOut }, "-=0.5")
                .to($(".even"), 1, { css: { top: "-25%" }, ease: Power2.easeInOut }, "-=1")
                .staggerTo($(".work__title .line"), 0.75, { y: "0", opacity: 1, ease: Power2.easeInOut }, "0.15", "-=1");

            console.log(origin);
        }

    });
})(jQuery);



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

// var swiper2 = new Swiper('#section2 .swiper-container', {
//     slidesPerView: 'auto',
//     speed: 1000,
//     // spaceBetween: 30,
//     // centeredSlides: true,
//     grabCursor: true,
//     // mousewheel: true,
//     freeMode: true,
// });



// ----------------------- Slide animation

var animation1 = new TimelineMax({ paused: true });
animation1.staggerTo($(".work__title .line"), 0.75, { y: "-=20px", opacity: 0, ease: Power2.easeInOut }, "0.15")
    .to($(".imagewrapper"), 1, { css: { top: "80%", ease: Power2.easeInOut } }, "-=0.5")
    .to($(".work__image--down .imagewrapper"), 1, { css: { top: "40%" } }, "-=1")
    .to($(".first-slide .imagewrapper"), 1, { css: { left: "50%" } }, "-=1");




// ------------------------ Open slide

$(".work__discover").click(function () {

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
    setTimeout(AddPosition, 1000);
    AddPosition();
    $.fn.fullpage.setAllowScrolling(true);
})


// ---------------------- function

function removePosition() {
    $(".section").addClass("reveal");
    $(".menu__list").addClass("hidden");
    $(".menu__back").removeClass("hidden");
    $(".swiper-wrapper").removeClass("custom-position");
}
function AddPosition() {
    $(".section").removeClass("reveal");
    $(".menu__list").removeClass("hidden");
    $(".menu__back").addClass("hidden");
    $(".swiper-wrapper").addClass("custom-position");
}