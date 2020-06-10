//---------------- niceScroll ----------------

$(".vct-horizontal-wrapper").niceScroll(".vct-horizontal-container", {
    cursorcolor: "#101010",
    emulatetouch: true, // enable cursor-drag scrolling like touch devices in desktop computer
    cursordragontouch: false, // drag cursor in touch / touchbehavior mode also
});



// ---------------- Parallax Scrolling --------------


//---------------- preload ----------------

var tl = new TimelineMax();
tl.to(".preload", 1, { scaleX: 0, skewX: -10, transformOrigin: "right", ease: Power2.easeInOut })
    .from(".vct-wrapper", 1, { opacity: 0, autoAlpha: 0 }, "-=0.5");

$(document).ready(function () {
    tl.play();
});


//--------------- popup ------------------

$('.popup').each(function () { // the containers for all your galleries
    $(this).magnificPopup({
        type: 'image',
        mainClass: 'mfp-with-zoom', // this class is for CSS animation below

        zoom: {
            enabled: true, // By default it's false, so don't forget to enable it

            duration: 300, // duration of the effect, in milliseconds
            easing: 'ease-in-out', // CSS transition easing function

            // The "opener" function should return the element from which popup will be zoomed in
            // and to which popup will be scaled down
            // By defailt it looks for an image tag:
            opener: function (openerElement) {
                // openerElement is the element on which popup was initialized, in this case its <a> tag
                // you don't need to add "opener" option if this code matches your needs, it's defailt one.
                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        }
    });
});



//---------- init controler -------------------

var controller = new ScrollMagic.Controller({ vertical: false });

new ScrollMagic.Scene({
    triggerElement: '.s2-content-right',
})
    .setTween(TweenMax.from(".vct-s2-img", 1, { x: "+=50px", opacity: 0, autoAlpha: 0 }))
    // .addIndicators()
    .addTo(controller);

var tl1 = new TimelineMax();
tl1.from(".img-list-item.item1", 1, { x: "-=50px", opacity: 0, autoAlpha: 0 })
    .staggerFrom(".stack-img-list .img-list-item", 1, { x: "+=50px", opacity: 0, autoAlpha: 0 }, 0.1, "-=0.5");
new ScrollMagic.Scene({
    triggerElement: '.vct-s3-img-list',
})
    .setTween(tl1)
    // .addIndicators()
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: '.s4-content-right',
})
    .setTween(TweenMax.from(".vct-s4-img", 1, { x: "+=50px", opacity: 0, autoAlpha: 0 }))
    // .addIndicators()
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: '.vct-section5',
})
    .setTween(TweenMax.from(".vct-s5-img", 1, { opacity: 0, autoAlpha: 0 }))
    // .addIndicators()
    .addTo(controller);

    
// label
CSSPlugin.defaultTransformPerspective = 1500;


var flip = new TimelineMax({ paused: true });
flip.to($(".vct-info-content"), 0.85, { rotationY: -150, x: "100%", transformOrigin: "right", ease: Linear.easeNone });

$(".modal-close").click(function () {
    flip.play();
});

$(".vct-info-tag-logo").click(function () {
    flip.reverse();
});