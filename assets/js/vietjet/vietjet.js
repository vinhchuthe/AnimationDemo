// Swiper
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    // centeredSlides: true,
    freeMode: true,
    mousewheel: true,
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },
});

$("#slide27 .back-to-top").on("click", function () {
    console.log("back to top");
    swiper.slideTo(0, 1500, false);
});

// Text animation
var tl1 = new TimelineMax({ delay: 0.5 });

tl1.staggerFrom($(".s1-title span"), 0.75, { opacity: 0, autoAlpha: 0, skewX: 30, x: "-=50px" }, 0.25)
    .from($(".sapo"), 0.75, { opacity: 0, autoAlpha: 0, x: "-=50px" }, "-=0.3");