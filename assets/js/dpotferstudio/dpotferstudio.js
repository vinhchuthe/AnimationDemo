// Fullpage
(function ($) {
    $("#fullpage").fullpage({
        anchors: ['firstSlide', 'secondSlide'],
        verticalCentered: false,
        v2compatible: true,
        css3: true,
        recordHistory: true,
        fadingEffect: true,
        scrollingSpeed: 1000,

        onLeave: function (origin, destination, direction) {
            var leave = new TimelineMax();
            leave.staggerTo($(".work__title .line"), 0.75, { y: "-=20px", opacity: 0, ease: Power2.easeInOut }, "0.15")
                .fromTo($(".odd"), 1, { css: { top: "80%" } }, { css: { top: "150%" } }, "-=0.5")
                .fromTo($(".even"), 1, { css: { top: "-25%" } }, { css: { top: "-100%" } }, "-=1")
                .to($("box"), 1, { opacity: 0 }, "-=0.5")
            // console.log(direction);
        },

        afterLoad: function (origin, destination, direction) {

            var load = new TimelineMax({ delay: 0.5 });
            load.to($(".box"), 1, { opacity: 1 })
                .to($(".odd"), 1, { css: { top: "80%" }, ease: Power2.easeInOut }, "-=0.5")
                .to($(".even"), 1, { css: { top: "-25%" }, ease: Power2.easeInOut }, "-=1")
                .staggerTo($(".work__title .line"), 0.75, { y: "0", opacity: 1, ease: Power2.easeInOut }, "0.15","-=1");

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