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


// document.getElementById("section-btn-13").onmouseover = function () {
//     var hit01rollover = new TimelineMax();
//     hit01rollover.to(".button-13 .box-link-inner", 0.8, {
//         x: 1,
//         y: 1,
//         ease: Elastic.easeOut
//     }, 0.00);
//     hit01rollover.to(".button-13 .button13_side", 0.8, {
//         x: 3,
//         y: 3,
//         ease: Elastic.easeOut
//     }, 0.00);
// }; //bounce rollout


// document.getElementById("section-btn-13").onmouseout = function () {
//     var hit01rollover = new TimelineMax();
//     hit01rollover.to(".button-13 .box-link-inner", 0.15, {
//         x: 0,
//         y: 0,
//         ease: Power4.easeOut
//     }, 0.00);
//     hit01rollover.to(".button-13 .button13_side", 0.15, {
//         x: 0,
//         y: 0,
//         ease: Power4.easeOut
//     }, 0.00);
// };