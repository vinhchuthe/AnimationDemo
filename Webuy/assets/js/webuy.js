// Back to top when page refreshed
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

// ------------------------ Fullpage

(function ($) {
    $("#fullpage").fullpage({
        anchors: ['1stSlide', '2ndSlide', '3rdSlide', '4thSlide', '5thSlide', '6thSlide', '7thSlide', '8thSlide', '9thSlide', '10thSlide', '11thSlide', '12thSlide', '13thSlide', '14thSlide'],
        verticalCentered: false,
        v2compatible: true,
        css3: true,
        lockAnchors: true,
        recordHistory: true,
        scrollingSpeed: 1000,

        // onLeave: function (origin, destination, direction) {
        //     var leave = new TimelineMax();

        //     if (origin == 1 && direction == "down") {
        //         var delayInMilliseconds = 2000;

        //         setTimeout(function () {
        //             $(".vct-overlay").removeClass("hidden");
        //         }, delayInMilliseconds);

        //     }

        //     leave.staggerTo($(".work__title .line"), 0.75, { y: "-=20px", opacity: 0, ease: Power2.easeInOut }, "0.15")
        //         .fromTo($(".odd"), 1, { css: { top: "80%" } }, { css: { top: "150%" } }, "-=0.5")
        //         .fromTo($(".even"), 1, { css: { top: "-25%" } }, { css: { top: "-100%" } }, "-=1")
        //         .to($("box"), 1, { opacity: 0 }, "-=0.5")

        //     console.log(origin);
        // },

        afterLoad: function (origin, destination, direction) {

            if (origin == "2ndSlide") {
                $.fn.fullpage.setAllowScrolling(false, 'up');
                $.fn.fullpage.setAllowScrolling(true, 'down');

                setTimeout(function () {
                    $(".menu__button").addClass("gray");
                }, 1500);
            } else {
                $.fn.fullpage.setAllowScrolling(true, 'up');
            }

            // var load = new TimelineMax({ delay: 0.5 });
            // load.to($(".box"), 1, { opacity: 1 })
            //     .to($(".odd"), 1, { css: { top: "80%" }, ease: Power2.easeInOut }, "-=0.5")
            //     .to($(".even"), 1, { css: { top: "-25%" }, ease: Power2.easeInOut }, "-=1")
            //     .staggerTo($(".work__title .line"), 0.75, { y: "0", opacity: 1, ease: Power2.easeInOut }, "0.15", "-=1");

            console.log(origin);
        }

    });
})(jQuery);




// ------------------------ Preload

$(document).ready(function () {
    $.fn.fullpage.setAllowScrolling(false);

    $(".work__cta").click(function () {
        // alert("qwe");
        setTimeout(function () {
            $(".work__overlay").addClass("hide");
        }, 1500);
        $(".work__overlay").addClass("fade");
    });

    $('.work__content').bind('mousewheel', function (e) {
        if (e.originalEvent.wheelDelta / 120 > 0) {
            // alert('up');
        } else {
            // alert('down');
            $.fn.fullpage.setAllowScrolling(true);
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
    swiper1[2].slideTo(0, 1000, false);
    // setTimeout(AddPosition, 1000);
    AddPosition();
    $.fn.fullpage.setAllowScrolling(true);
})


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