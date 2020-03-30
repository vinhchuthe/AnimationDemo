// init controller
var controller = new ScrollMagic.Controller();

// nicescroll
$("body").niceScroll();


$(document).ready(function () {

    // video bg
    var tl = new TimelineMax({ delay: 3 });
    tl.to($("#video-thumb"), 1, { opacity: 0 })
        .to($("#video_bg"), 0.5, { opacity: 1 }, "-=0.5");

    // overlay text
    TweenMax.set($("#overlay-text1 .text-fill"), { y: "-=8vw", x: "-=6vw", rotation: -15 })
    TweenMax.set($("#overlay-text1 .text-stroke"), { y: "-=7vw", x: "-=5vw", rotation: -15 })
    TweenMax.set($("#overlay-text2 .text-fill"), { y: "+=7vw", x: "-=5vw", rotation: 10 })
    TweenMax.set($("#overlay-text2 .text-stroke"), { y: "+=8vw", x: "-=4vw", rotation: 10 })
    TweenMax.set($("#overlay-text3 .text-fill"), { y: "+=4vw", x: "+=3vw", rotation: -10 })
    TweenMax.set($("#overlay-text3 .text-stroke"), { y: "+=5vw", x: "+=4vw", rotation: -10 })
    TweenMax.set($("#overlay-text4 .text-fill"), { y: "-=15vw", x: "+=5vw", rotation: 10 })
    TweenMax.set($("#overlay-text4 .text-stroke"), { y: "-=14vw", x: "+=6vw", rotation: 10 })
    TweenMax.set($("#overlay-text5 .text-fill"), { y: "+=12vw", x: "+=7vw", rotation: 10 })
    TweenMax.set($("#overlay-text5 .text-stroke"), { y: "+=13vw", x: "+=8vw", rotation: 10 })

    var tl1 = new TimelineMax();
    tl1.to($("#overlay-text1 .text-fill"), 1, { y: 0, x: 0, rotation: 0 })
        .to($("#overlay-text1 .text-stroke"), 1, { y: 0, x: 0, rotation: 0 }, "-=0.5")
        .to($("#overlay-text2 .text-fill"), 1, { y: 0, x: 0, rotation: 0 }, "-=1.25")
        .to($("#overlay-text2 .text-stroke"), 1, { y: 0, x: 0, rotation: 0 }, "-=0.5")
        .to($("#overlay-text3 .text-fill"), 1, { y: 0, x: 0, rotation: 0 }, "-=1.25")
        .to($("#overlay-text3 .text-stroke"), 1, { y: 0, x: 0, rotation: 0 }, "-=0.5")
        .to($("#overlay-text4 .text-fill"), 1, { y: 0, x: 0, rotation: 0 }, "-=1.25")
        .to($("#overlay-text4 .text-stroke"), 1, { y: 0, x: 0, rotation: 0 }, "-=0.5")
        .to($("#overlay-text5 .text-fill"), 1, { y: 0, x: 0, rotation: 0 }, "-=1.25")
        .to($("#overlay-text5 .text-stroke"), 1, { y: 0, x: 0, rotation: 0 }, "-=0.5")
        .from($(".overlay_text-fade"), 1, { opacity: 0, autoAlpha: 0, y: "+=30px", ease: Power2.easeInOut }, "-=0.5")
        .from($(".banner_after-bg"), 2, { opacity: 0, autoAlpha: 0, ease: Power2.easeInOut });

    var parenth = $(".vct-banner").outerHeight(),
        duration = parenth;


    new ScrollMagic.Scene({
        duration: 420
    })
        .setTween(tl1)
        .addIndicators()
        .addTo(controller);


    // hidden logo
    new ScrollMagic.Scene({
        triggerElement: '.section2',
        offset: -300
    })
        .setClassToggle(".header-logo", "hidden")
        .addIndicators()
        .addTo(controller);

})

