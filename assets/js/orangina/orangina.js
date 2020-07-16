// Back to top when page refreshed
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

$(document).ready(function () {
    $('#fullpage').fullpage({
        anchors: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'],
        verticalCentered: true,
        scrollingSpeed: 500,
        v2compatible: true,
        css3: true,
        lockAnchors: true,
        recordHistory: true,
        touchSensitivity: 15,

        afterLoad: function (origin, destination, direction) {
            $(".section").removeClass("state-animated");
            $("#section" + origin).addClass("state-animated");
        },

    });

    $(".vct-info-tag-logo").click(function () {
        $(".vct-wrapper").addClass("modal-open");
    });
    $(".modal-close").click(function () {
        $(".vct-wrapper").removeClass("modal-open");
    });
});

CSSPlugin.defaultTransformPerspective = 1500;


var flip = new TimelineMax({ paused: true });
flip.to($(".vct-info-content"), 0.85, { rotationY: -150, x: "100%", transformOrigin: "right", ease: Linear.easeNone });

$(".modal-close").click(function () {
    flip.play();
});

$(".vct-info-tag-logo").click(function () {
    flip.reverse();
});