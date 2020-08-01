var tl1 = new TimelineMax({ paused: true, delay: 1.5 });
tl1.to($("#path"), 1, { fill: "#ffffff" })
    .staggerFrom($(".intro__image"), 1, { opacity: 0 }, 1, "-=1")
    .to($(".vct-preload"), 1, { opacity: 0 });
tl1.eventCallback("onComplete", test);

function test() {
    $(".vct-preload").addClass("is__loaded");
}

$(window).on("load", function () {
    tl1.play();
});

$(document).ready(function () {
    var mySwiper = new Swiper('.swiper-container', {
        speed: 400,
        spaceBetween: 100,
        simulateTouch: false,
        // navigation: {
        //     nextEl: '.swiper-button-next',
        //     prevEl: '.swiper-button-prev',
        // },
    });
    mySwiper.on("slideChange", function () {
        console.log(mySwiper.activeIndex);
    });
    console.log(mySwiper.slides.length);

    // custom cursor
    $(document).on('mousemove', function (e) {
        $('#custom-cursor').addClass("is-active");
        $('#custom-cursor').css({
            left: e.pageX + 10,
            top: e.pageY + 10
        });
    });

    $(".swiper-slide").click(function (e) {
        var pWidth = $(this).innerWidth(); //use .outerWidth() if you want borders
        var pOffset = $(this).offset();
        var x = e.pageX - pOffset.left;
        if (pWidth / 2 > x) {
            // $(this).text('left');
            console.log("left");
        } else {
            // $(this).text('right');
            console.log("right");
        }

    });
});