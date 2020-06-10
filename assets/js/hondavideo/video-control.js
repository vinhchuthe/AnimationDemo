var player1 = videojs("video1", {
    controls: false
});


$(document).ready(function () {

    // Button
    var video = $("#video1");
    var playbtn = $("#bottom-bar-play-button");
    var pausebtn = $("#bottom-bar-pause-button");
    var fullscreen = $("#bottom-bar-fullscreen-button");
    var playbtn_big = $("#play-button");
    var animated = $("#animated-overlay");


    // Slider
    var bar = $("#bottom-button-bar");
    var seekbar = $("#scrubber-line");

    player1.ready(function () {
        var vid = this;
        vid.on("pause", function () {
            $("#bottom-button-bar .button").removeClass("hidden");
            pausebtn.addClass("hidden");
        });
        vid.on("play", function () {
            $("#bottom-button-bar .button").removeClass("hidden");
            playbtn.addClass("hidden");
        });

        vid.on("timeupdate", function () {
            var duration = 175
            var currenttime = this.currentTime();
            // console.log(this.currentTime());
            var percentage = (currenttime / duration) * 100;
            seekbar.css("width", percentage + "%");
        })
    });

    playbtn.click(function () {
        player1.play();
    });
    pausebtn.click(function () {
        player1.pause();
    });

    playbtn_big.click(function () {
        player1.play();
        $(this).addClass("hidden");
        animated.addClass("animated");
    });

    animated.mousedown(function () {
        video.addClass("reveal-video");
    });
    animated.mouseup(function () {
        video.removeClass("reveal-video");
    });
    animated.mouseleave(function () {
        bar.addClass("moveup");
    });
    animated.mouseenter(function () {
        bar.removeClass("moveup");
    });
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



