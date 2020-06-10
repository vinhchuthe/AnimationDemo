// init controler
var controller = new ScrollMagic.Controller();

// Back to top when page refreshed
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

// --------------- Parallax on mousemove (https://codepen.io/oceaniclife/pen/JJbXod?editors=0010)
$.fn.parallax = function (resistance, mouse) {
    $el = $(this);
    TweenMax.to($el, 0.2, {
        x: -((mouse.clientX - window.innerWidth / 2) / resistance),
        y: -((mouse.clientY - window.innerHeight / 2) / resistance)
    });
};



// ---------------- Parallax tilt gsap
var request = null;
var mouse = { x: 0, y: 0 };
var cx = window.innerWidth / 2;
var cy = window.innerHeight / 2;

$('.parallax-banner-inner').mousemove(function (event) {

    $("#parallax-bg").parallax(-30, event);

    mouse.x = event.pageX;
    mouse.y = event.pageY;

    cancelAnimationFrame(request);
    request = requestAnimationFrame(update);

});

function update() {

    dx = mouse.x - cx;
    dy = mouse.y - cy;

    tiltx = (dy / cy);
    tilty = - (dx / cx);
    radius = Math.sqrt(Math.pow(tiltx, 2) + Math.pow(tilty, 2));
    degree = (radius * 20);
    TweenLite.to(".foreground__rotation", 1, { transform: 'rotate3d(' + tiltx + ', ' + tilty + ', 0, ' + degree + 'deg)', ease: Power2.easeOut });
}

$(window).resize(function () {
    cx = window.innerWidth / 2;
    cy = window.innerHeight / 2;
});




// ----------------- Preload
var tl = new TimelineMax();

tl.add("start", 2)
    .to(".preload", 1, { scaleY: 0, transformOrigin: "0% 0%", ease: Power2.easeInOut }, "start")
    .to(".cover__logo", 1, { opacity: 0, ease: Power2.easeInOut }, "-=1.2")
    .to(".preload-mess", 1, { opacity: 0, ease: Power2.easeInOut }, "-=1.2");

function preload() {
    $("body").css("overflow", "auto");
}
setTimeout(preload, 2500);


// ------------------ Random text effect
$(".header__link").mouseenter(function () {
    var child = $(this).find(".scramble");
    var data = child.attr("data-id");
    if (data == 1) {
        Scrambler({
            target: '[data-title-scrambler1]',
            random: [1000, 2000],
            speed: 100,
            // text: 'Secret message',
        });
    } else if (data == 2) {
        Scrambler({
            target: '[data-title-scrambler2]',
            random: [1000, 2000],
            speed: 100,
            // text: 'Secret message',
        });
    } else if (data == 3) {
        Scrambler({
            target: '[data-title-scrambler3]',
            random: [1000, 2000],
            speed: 100,
            // text: 'Secret message',
        });
    } else { }
});




// ------------------ change iamge src on mouse move (on working)
$('.parallax-banner-inner').mousemove(function (event) {
    var listOfImages = ['http://channel.mediacdn.vn/2020/3/19/parallax-img1-1584591823738406245545.jpg', 'http://channel.mediacdn.vn/2020/3/19/parallax-img2-15845918237411390342811.jpg', 'http://channel.mediacdn.vn/2020/3/19/parallax-img3-15845918237421870661942.jpg'];
    var xPos = event.pageX;
    var width = $(this).width();
    var areaPos = 0;
    var change1 = areaPos;
    var change2 = areaPos + width / 3;
    var change3 = areaPos + 2 * width / 3;

    if (xPos > change1) {
        $(".foreground__rotaion-image-wrapper img").attr("src", listOfImages[0]);
        // console.log("change1")
    }
    if (xPos > change2) {
        $(".foreground__rotaion-image-wrapper img").attr("src", listOfImages[1]);
        // console.log("change2")
    }
    if (xPos > change3) {
        $(".foreground__rotaion-image-wrapper img").attr("src", listOfImages[2]);
        // console.log("change3")
    }
});

// ----------------- Header change color

new ScrollMagic.Scene({
    triggerElement: '.product-list-collection',
})
    .setClassToggle(".vct-header-inner", "header-pass")
    // .addIndicators()
    .addTo(controller);


// --------------------- Lookbook thumbnail image
new ScrollMagic.Scene({
    triggerElement: '.vct-lookbook-thumbnail',
    offset: -300
})

    .setClassToggle(".lookbook-thumbnail__images", "thumb-up")
    // .addIndicators()
    .addTo(controller);


// Labbel
// CSSPlugin.defaultTransformPerspective = 1500;


// var flip = new TimelineMax({ paused: true });
// flip.to($(".vct-info-content"), 1, { rotationY: -150, x: "100%", transformOrigin: "right", ease: Linear.easeNone });

// $(".modal-close").click(function () {
//     flip.play();
// });

// $(".vct-info-tag-logo").click(function () {
//     flip.reverse();
// });