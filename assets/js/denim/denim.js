// init controller
var controller = new ScrollMagic.Controller();

// nicescroll
$("body").niceScroll();


$(document).ready(function () {

    // video bg
    var tl = new TimelineMax({
        delay: 3
    });
    tl.to($("#video-thumb"), 1, {
            opacity: 0
        })
        .to($("#video_bg"), 0.5, {
            opacity: 1
        }, "-=0.5");

    // overlay text
    TweenMax.set($("#overlay-text1 .text-fill"), {
        y: "-=8vw",
        x: "-=6vw",
        rotation: -15
    })
    TweenMax.set($("#overlay-text1 .text-stroke"), {
        y: "-=7vw",
        x: "-=5vw",
        rotation: -15
    })
    TweenMax.set($("#overlay-text2 .text-fill"), {
        y: "+=7vw",
        x: "-=5vw",
        rotation: 10
    })
    TweenMax.set($("#overlay-text2 .text-stroke"), {
        y: "+=8vw",
        x: "-=4vw",
        rotation: 10
    })
    TweenMax.set($("#overlay-text3 .text-fill"), {
        y: "+=4vw",
        x: "+=3vw",
        rotation: -10
    })
    TweenMax.set($("#overlay-text3 .text-stroke"), {
        y: "+=5vw",
        x: "+=4vw",
        rotation: -10
    })
    TweenMax.set($("#overlay-text4 .text-fill"), {
        y: "-=15vw",
        x: "+=5vw",
        rotation: 10
    })
    TweenMax.set($("#overlay-text4 .text-stroke"), {
        y: "-=14vw",
        x: "+=6vw",
        rotation: 10
    })
    TweenMax.set($("#overlay-text5 .text-fill"), {
        y: "+=12vw",
        x: "+=7vw",
        rotation: 10
    })
    TweenMax.set($("#overlay-text5 .text-stroke"), {
        y: "+=13vw",
        x: "+=8vw",
        rotation: 10
    })

    var tl1 = new TimelineMax();
    tl1.to($("#overlay-text1 .text-fill"), 1, {
            y: 0,
            x: 0,
            rotation: 0
        })
        .to($("#overlay-text1 .text-stroke"), 1, {
            y: 0,
            x: 0,
            rotation: 0
        }, "-=0.5")
        .to($("#overlay-text2 .text-fill"), 1, {
            y: 0,
            x: 0,
            rotation: 0
        }, "-=1.25")
        .to($("#overlay-text2 .text-stroke"), 1, {
            y: 0,
            x: 0,
            rotation: 0
        }, "-=0.5")
        .to($("#overlay-text3 .text-fill"), 1, {
            y: 0,
            x: 0,
            rotation: 0
        }, "-=1.25")
        .to($("#overlay-text3 .text-stroke"), 1, {
            y: 0,
            x: 0,
            rotation: 0
        }, "-=0.5")
        .to($("#overlay-text4 .text-fill"), 1, {
            y: 0,
            x: 0,
            rotation: 0
        }, "-=1.25")
        .to($("#overlay-text4 .text-stroke"), 1, {
            y: 0,
            x: 0,
            rotation: 0
        }, "-=0.5")
        .to($("#overlay-text5 .text-fill"), 1, {
            y: 0,
            x: 0,
            rotation: 0
        }, "-=1.25")
        .to($("#overlay-text5 .text-stroke"), 1, {
            y: 0,
            x: 0,
            rotation: 0
        }, "-=0.5")
        .from($(".overlay_text-fade"), 1, {
            opacity: 0,
            autoAlpha: 0,
            y: "+=30px",
            ease: Power2.easeInOut
        }, "-=0.5")
        .from($(".banner_after-bg"), 2, {
            opacity: 0,
            autoAlpha: 0,
            ease: Power2.easeInOut
        });


    new ScrollMagic.Scene({
            duration: 420
        })
        .setTween(tl1)
        .addIndicators()
        .addTo(controller);


    //------------------- hidden logo
    new ScrollMagic.Scene({
            triggerElement: '.section2',
            offset: -300
        })
        .setClassToggle(".header-logo", "hidden")
        .addIndicators()
        .addTo(controller);

    var tl2 = new TimelineMax();
    TweenMax.set($(".content-slide img"), {
        y: "-=100vh"
    });
    TweenMax.set($(".content-slide .content-slide__text"), {
        y: "+=100vh"
    });
    TweenMax.set($("#mask text"), {
        x: "+=25%"
    });

    tl2.to($(".content-slide img"), 1, {
            y: 0,
            ease: Linear.easeNone
        }, "-=0.5")
        .to($(".content-slide .content-slide__text"), 1, {
            y: 0,
            ease: Linear.easeNone
        }, "-=0.5");

    new ScrollMagic.Scene({
            triggerElement: '.section2',
            offset: 100,
            duration: 280
        })
        .setTween(TweenMax.to($("#mask text"), 1, {
            x: "-50%",
            ease: Linear.easeNone
        }))
        .addIndicators()
        .addTo(controller);

    new ScrollMagic.Scene({
            triggerElement: '.section2',
            offset: 100,
            duration: 280
        })
        .setTween(tl2)
        .addIndicators()
        .addTo(controller);


    // ------------------- Hover reveal item
    $("#hover-list li").mouseenter(function () {
        var index = $(this).attr("data-id");
        // console.log(index);
        $("#hover-list li").removeClass("hover");
        $(this).addClass("hover");
        $(".reveal-hover-item .item").removeClass("active");
        $("#" + index).addClass("active");
    })
    $("#hover-list li").mouseleave(function () {
        $(".reveal-hover-item .item").removeClass("active");
        $("#item1").addClass("active");
        $("#hover-list li").removeClass("hover");
        $("#hover-list li").first().addClass("hover");
    })


    // --------------------- Section5
    var wipeAnimation = new TimelineMax()
        .fromTo("#wipe1 .panel.panel-text", 1, {
            x: "-10%"
        }, {
            x: "120%",
            ease: Linear.easeNone
        })

    new ScrollMagic.Scene({
            triggerElement: '.section5',
            triggerHook: "onLeave",
            duration: "200%"
        })
        .setPin(".section5")
        .setTween(wipeAnimation)
        .addIndicators()
        .addTo(controller);


    // -------------- Section7
    var wipeAnimation2 = new TimelineMax()
        .fromTo("#wipe2 .panel.panel-text", 1, {
            x: "-10%"
        }, {
            x: "120%",
            ease: Linear.easeNone
        })

    new ScrollMagic.Scene({
            triggerElement: '.section7',
            triggerHook: "onLeave",
            duration: "200%"
        })
        .setPin(".section7")
        .setTween(wipeAnimation2)
        .addIndicators()
        .addTo(controller);

    //----------------- Meme Jeans
    var wipeAnimation3 = new TimelineMax()
        .to($(".clip-path-border.border2"), 1, {
            scaleX: 0,
            transformOrigin: "left",
            ease: Linear.easeNone
        })
        .staggerTo($("#s8-featured p"), 1, {
            x: "+=40vw",
            y: "+=50vw"
        }, "0.5", "-=1")
        .to($(".clip-path-img"), 2, {
            x: "-=100%",
            ease: Linear.easeNone
        }, "-=2")


    new ScrollMagic.Scene({
            triggerElement: '.section8',
            triggerHook: "onLeave",
            duration: "200%"
        })
        .setPin(".section8")
        .setTween(wipeAnimation3)
        .addIndicators()
        .addTo(controller);


    // ----------------------- Scroll to fixed
    var s3 = $(".section3").offset().top;
    var s4 = $(".section4").offset().top;
    var s6 = $(".section6").offset().top;
    var s7 = $(".section7").offset().top;

    $(window).scroll(function (e) {
        var y = $(this).scrollTop();

        if (y >= s3) {
            $(".section3").addClass('fixed');
        } else {
            $(".section3").removeClass('fixed');
        }
        if (y > (s4 + 300)) {
            $(".section3").removeClass('fixed');
        }
        if (y >= s6) {
            $(".section6").addClass("fixed")
        } else {
            $(".section6").removeClass('fixed');
        }
        if (y > (s7 - 500)) {
            $(".section6").removeClass('fixed');
        }
    });
});