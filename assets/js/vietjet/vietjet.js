// Swiper
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    centeredSlides: true,
    freeMode: true,
    mousewheel: true,
});

$("#slide27 .back-to-top").on("click", function () {
    console.log("back to top");
    swiper.slideTo(0, 1500, false);
});

