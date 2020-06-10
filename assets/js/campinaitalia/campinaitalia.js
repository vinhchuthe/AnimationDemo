(function ($) {
    // variables
    // var $isAnimatedSecond = $('.animation-2 .is-animated'),
    //     $isAnimatedSecondSingle = $('.animation-2 .is-animated__single'),
    //     $isAnimatedSecondDouble = $('.animation-2 .is-animated__double'),
    //     $isAnimatedThird = $('.animation-3 .is-animated'),
    //     $isAnimatedThirdSingle = $('.animation-3 .is-animated__single'),
    //     $isAnimatedThirdDouble = $('.animation-3 .is-animated__double'),
    //     $isAnimatedFourth = $('.animation-4 .is-animated'),
    //     $isAnimatedFourthSingle = $('.animation-4 .is-animated__single'),
    //     $isAnimatedFourthDouble = $('.animation-4 .is-animated__double'),
    //     $isAnimatedFive = $('.animation-5 .is-animated'),
    //     $isAnimatedFiveSingle = $('.animation-5 .is-animated__single'),
    //     $isAnimatedFiveDouble = $('.animation-5 .is-animated__double'),
    //     $isAnimatedSix = $('.footer .is-animated'),
    //     $isAnimatedSixSingle = $('.footer .is-animated__single'),
    //     $isAnimatedSixDouble = $('.footer .is-animated__double'),
    //     $isAnimatedSixTriple = $('.footer .is-animated__triple');
    $('#fullpage').fullpage({
        navigation: true,
        controlArrows: true,
        slidesNavigation: true,
        verticalCentered: false,
        menu: '#menu',
        v2compatible: true,
        css3: true,
        recordHistory: true,
        easingcss3: 'cubic-bezier(1.000, -0.440, 0.265, 1.385)',
        scrollingSpeed: 1600,
        paddingTop: '140px',
        anchors: ['gouda', 'formaggio-di-capra', 'bio', 'emmental-olandese',
            'edam', '100-naturale'
        ],
        // sectionSelector: 'section',
        navigationTooltips: ['gouda', 'formaggio di capra', 'bio', 'emmental olandese',
            'edam', '100% Naturale'
        ],

    });
})(jQuery);


// ------------------------
var totalElements = 0;
var elementAnimationDelay = 0;
var elementCountUp = 0;

function elementFloat(elementItem) {
    TweenMax.to(elementItem, 8, {
        delay: elementAnimationDelay,
        y: "-=20px",
        yoyo: true,
        repeat: -1,
        ease: Power2.easeInOut
    });
}

function initPhoneHovering() {
    $(".box div[id]").each(function () {
        totalElements++;
        elementAnimationDelay += 0.9;
        var targetElement = $("#float-" + totalElements); //init animation

        elementFloat(targetElement);
    });
}

initPhoneHovering();

// ------------------------
$(".overlay-close").click(function () {
    $(".overlay-item").removeClass("detail-open");
    $.fn.fullpage.setAllowScrolling(true);
    $.fn.fullpage.setKeyboardScrolling(true);
});

$(".button-9").click(function () {
    var id = $(this).attr("data-id");
    $("#" + id).addClass("detail-open");
    $.fn.fullpage.setAllowScrolling(false);
    $.fn.fullpage.setKeyboardScrolling(false);
});

$(".button-11").click(function () {
    var id = $(this).attr("data-id");
    $("#" + id).addClass("detail-open");
    $.fn.fullpage.setAllowScrolling(false);
    $.fn.fullpage.setKeyboardScrolling(false);
});

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