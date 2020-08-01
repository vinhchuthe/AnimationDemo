// init controler
var controller = new ScrollMagic.Controller();

$(function progressBar() {
    var progressTweem = TweenMax.fromTo('#progress', 1,
        { width: '0%' },
        { width: '100%' }
    );
    var progressScene = new ScrollMagic.Scene({
        triggerElement: '#oceanscroll',
        duration: $('body').height() - 1500
    })
        .setTween(progressTweem)
        .addTo(controller);
});

// ----------- scrollPlastic ---------------

let scrollPlastic = new TimelineMax().add([
    TweenMax.fromTo([".tablet:nth-child(even)"], 1, {
        opacity: 0,
        rotation: 0,
        scale: .6,
        y: 0,
        // background: "#000",
    }, {
        opacity: .8,
        scale: 1,
        rotation: 500,
        y: 1000,
        right: "50%",
        ease: Linear.easeNone
    }),
    TweenMax.fromTo([".tablet:nth-child(odd)"], 1, {
        opacity: .4,
        scale: .5,
        rotation: -100,
        // background: "red",
        bottom: "100%;"
    }, {
        opacity: .6,
        scale: 1,
        rotation: -1000,
        bottom: "0%",
        left: "75%",
        ease: Linear.easeNone
    }),
    TweenMax.fromTo([".tablet-alt:nth-child(even)"], 1, {
        opacity: .3,
        scale: .5,
        rotation: -100,
        y: 500,
        // background: "blue",
        x: 0,
    }, {
        opacity: .5,
        scale: 1,
        rotation: 400,
        y: -200,
        x: -1000,
        ease: Linear.easeNone
    }),


    TweenMax.fromTo([".tablet-alt:nth-child(odd)"], 1, {
        opacity: .7,
        scale: .6,
        rotation: -200,
        y: -100,
        x: 1000,
        // background: "yellow",
    }, {
        opacity: .6,
        scale: 1,
        rotation: 200,
        y: "50%",
        x: -500,
        ease: Linear.easeNone
    }),

    TweenMax.fromTo([".trash-bag-1"], 1, {
        opacity: .5,
        scale: .8,
        rotation: -100,
        y: 0
    }, {
        opacity: .7,
        scale: 1,
        rotation: -100,
        y: -100,
        ease: Linear.easeNone
    }),


    TweenMax.fromTo([".trash-1"], 1, {
        opacity: .5,
        scale: 0,
        rotation: -100,
        bottom: 50
    }, {
        opacity: .9,
        scale: 1,
        rotation: 100,
        bottom: 1200,
        y: -100,
        x: -100,
        ease: Linear.easeNone
    }),
    TweenMax.fromTo([".trash-shadow-1"], 1, {
        opacity: .5,
        scale: 0,
        rotation: -100,
        bottom: 50,
        left: 0,
        y: -100
    }, {
        opacity: 1,
        scale: 1.6,
        rotation: 100,
        bottom: 1200,
        y: 100,
        left: "50%",
        ease: Linear.easeNone
    }),

    TweenMax.fromTo([".trash-2"], 1, {
        opacity: .5,
        scale: 0,
        bottom: 0,
        // background:"red",
        right: 0,
    }, {
        opacity: 0,
        scale: 3,
        bottom: 1000,
        right: "50%",
        ease: Linear.easeOut
    }),
    TweenMax.fromTo([".trash-shadow-2"], 1, {
        opacity: "0",
        scale: 0,
        rotation: -100,
        y: 0
    }, {
        opacity: .5,
        scale: 1.6,
        rotation: 100,
        y: -500,
        ease: Linear.easeNone
    }),

    TweenMax.fromTo([".turtle"], 1, {
        opacity: .5,
        scale: .5,
        rotation: 0,
        top: 0,
        y: 0,
        right: "-700"
    }, {
        opacity: .8,
        y: "300vh",
        scale: 1,
        rotation: -100,
        right: "250%",
        bottom: "-100%",
        ease: Linear.easeOut
    }),

    TweenMax.fromTo([".trash-shadow-4"], 1, {
        opacity: .5,
        scale: 0,
        rotation: 100,
        bottom: "-1000",
        right: "0%",
        y: -100
    }, {
        opacity: 0,
        scale: 1.1,
        rotation: -100,
        y: 100,
        bottom: 800,
        right: "100%",
        ease: Linear.easeNone
    }),

    TweenMax.fromTo([".trash-3"], 1, {
        opacity: 1,
        scale: 1.4,
        scale: 0,
        rotation: -100,
        top: "300",
        opacity: 0,
        left: 500
    }, {
        opacity: 6,
        scale: 1.1,
        rotation: 100,
        top: -300,
        left: 100,
        y: -100,
        ease: Linear.easeOut
    }),
    TweenMax.fromTo([".trash-shadow-3"], 1, {
        opacity: 0,
        scale: 0,
        rotation: -100,
        top: "300",
        y: 300,
        right: 0
    }, {
        opacity: .9,
        scale: 1,
        rotation: 100,
        y: -100,
        top: -500,
        right: 500,
        ease: Linear.easeOut
    }),

    TweenMax.fromTo([".trash"], 1, {
        opacity: 0,
        scale: 0,
        rotation: 0,
        bottom: "50",
        left: "50%"
    }, {
        bottom: 1200,
        left: "40%",
        opacity: 10,
        rotation: -100,
        ease: Linear.easeNone
    }),

    TweenMax.fromTo([".trash-shadow"], .5, {
        opacity: 0,
        scale: 0,
        rotation: 0,
        bottom: 50
    }, {
        opacity: 1,
        bottom: 800,
        rotation: -100,
        x: -100,
        scale: 1.5,
        ease: Linear.easeNone
    }),

]);

var oceanscene = new ScrollMagic.Scene({
    triggerElement: "#oceanscroll",
    triggerHook: "onEnter",
    duration: $("#oceanscroll").height() * 4,
    offset: -300
})
    .setTween(scrollPlastic)
    // .addIndicators() // add indicators (requires plugin)
    .addTo(controller);


var seahorse = new TimelineMax().add([
    TweenMax.fromTo([".seahorse"], 1, {
        opacity: .5,
        top: "500",
        rotation: -20,
        scale: .5,
        width: 80,
        right: "-100"
    }, {
        opacity: 1,
        y: "250vh",
        bottom: "-110%",
        scale: 1,
        rotation: 0,
        width: 70,
        right: "90%",
        ease: Linear.easeOut
    }),
]);
var seahoursesene = new ScrollMagic.Scene({
    triggerElement: "#oceanscroll",
    triggerHook: "onCenter",
    duration: $("#oceanscroll").height() * 2,
    offset: 500
}).setTween(seahorse)
    // .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

if ($(window)
    .width() >= 800) {
    var text1 = new ScrollMagic.Scene({
        triggerElement: "#text1",
        duration: "30%",
        triggerHook: "onCenter"
    })
        .setPin("#text1")
        .addTo(controller);
    var
        text5 = new ScrollMagic.Scene({
            triggerElement: "#text5",
            duration: "40%",
            triggerHook: "onCenter"
        })
            .setPin("#text5")
            .addTo(controller);
    var text2 = new ScrollMagic.Scene({
        triggerElement: "#text2",
        duration: "40%",
        triggerHook: "onCenter",
    })
        .setPin("#text2")
        .addTo(controller);
    var text3 = new ScrollMagic.Scene({
        triggerElement: "#text3",
        duration: "70%",
        triggerHook: "onCenter"
    })
        .setPin("#text3")
        .addTo(controller);
    // var text4 = new ScrollMagic.Scene({
    //    triggerElement: "#text4",
    //    duration: "40%",
    //    triggerHook: "onCenter",
    //    pushFollowers: false
    // })
    //   .setPin("#text4")
    //   .addTo(controller);

    var text6 = new ScrollMagic.Scene({
        triggerElement: "#text5",
        duration: "30%",
        triggerHook: "onCenter",
    })
} else {
    var text1 = new ScrollMagic.Scene({
        triggerElement: "#text1",
        duration: "70%",
        triggerHook: "onCenter"
    })
        .setPin("#text1")
        .addTo(controller);
    var
        text5 = new ScrollMagic.Scene({
            triggerElement: "#text5",
            duration: "70%",
            triggerHook: "onCenter"
        })
            .setPin("#text5")
            .addTo(controller);
    var text2 = new ScrollMagic.Scene({
        triggerElement: "#text2",
        duration: "70%",
        triggerHook: "onCenter",
    })
        .setPin("#text2")
        .addTo(controller);
    var text3 = new ScrollMagic.Scene({
        triggerElement: "#text3",
        duration: "70%",
        triggerHook: "onCenter"
    })
        .setPin("#text3")
        .addTo(controller);
    // var text4 = new ScrollMagic.Scene({
    //    triggerElement: "#text4",
    //    duration: "70%",
    //    triggerHook: "onCenter",
    //    pushFollowers: false
    // })
    //   .setPin("#text4")
    //   .addTo(controller);

    var text6 = new ScrollMagic.Scene({
        triggerElement: "#text5",
        duration: "70%",
        triggerHook: "onCenter",
    })
};

// Timer
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 0;
setInterval(setTime, 1);
function setTime() {
    ++totalSeconds;
    secondsLabel.innerHTML = pad(totalSeconds * 3);
    // minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
};

function pad(val) {
    var valString = val + "";
    if (valString.length < 0) {
        var number = valString / 20;
        return number.toFixed(0)
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    } else {
        var number = valString / 20;
        return number.toFixed(0)
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
};

// Header
$(window).scroll(function () {
    if ($(window).scrollTop() > 10) {
        $("#header").addClass("animated");
    } else {
        $("#header").removeClass("animated");
    }
});

// info tag
$(".vct-info-tag-logo").click(function () {
    if ($(".vct-wrapper").hasClass("modal-animated")) {
        $(".vct-wrapper").removeClass("modal-animated");
    } else {
        $(".vct-wrapper").addClass("modal-animated");
    }
});
$(".modal-close").click(function () {
    $(".vct-wrapper").addClass("modal-animated");
});