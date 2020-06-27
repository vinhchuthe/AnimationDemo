const slides = document.querySelectorAll("section");
const container = document.querySelector("#panelWrap");
let dur = 0.5;
let offsets = [];
let oldSlide = 0;
let activeSlide = 0;
let dots = document.querySelector(".dots");
let navDots = [];
let iw = window.innerWidth;
// const mouseAnim = TweenMax.timeline({ repeat: -1, repeatDelay: 1 });
// const handAnim = TweenMax.timeline({ repeat: -1, repeatDelay: 1 });
// const cursorAnim = TweenMax.timeline({ repeat: -1, repeatDelay: 1 });
// const arrowAnim = TweenMax.timeline({ repeat: -1, repeatDelay: 1 });

// document.querySelector("#leftArrow").addEventListener("click", slideAnim);
// document.querySelector("#rightArrow").addEventListener("click", slideAnim);

// set slides background colors and create the nav dots
// for (let i = 0; i < slides.length; i++) {
//     TweenMax.set(slides[i], { backgroundColor: colorArray[i] });
//     let newDot = document.createElement("div");
//     newDot.className = "dot";
//     newDot.index = i;
//     navDots.push(newDot);
//     newDot.addEventListener("click", slideAnim);
//     dots.appendChild(newDot);
// }

// icon animations for slide 1
// mouseAnim.fromTo(
//     "#mouseRings circle",
//     { attr: { r: 10 } },
//     { attr: { r: 40 }, duration: 0.8, stagger: 0.25 }
// );
// mouseAnim.fromTo(
//     "#mouseRings circle",
//     { opacity: 0 },
//     { opacity: 1, duration: 0.4, stagger: 0.25 },
//     0
// );
// mouseAnim.fromTo(
//     "#mouseRings circle",
//     { opacity: 1 },
//     { opacity: 0, duration: 0.4, stagger: 0.25 },
//     0.4
// );

// handAnim.to("#hand", { duration: 0.75, rotation: -10, transformOrigin: "center bottom" });
// handAnim.to("#hand", { duration: 0.5, rotation: 14, ease: "power3.inOut" });
// handAnim.to("#hand", { duration: 1, rotation: 0, transformOrigin: "center bottom" });

// cursorAnim.to("#cursor", { duration: 0.25, x: -22 });
// cursorAnim.to(
//     "#iconCircles circle",
//     0.5,
//     { duration: 0.5, attr: { r: 6 }, stagger: 0.15 },
//     "expand"
// );
// cursorAnim.to("#cursor", { duration: 1.1, x: 40 }, "expand");
// cursorAnim.to("#cursor", { duration: 0.75, x: 0 }, "contract");
// cursorAnim.to("#iconCircles circle", { duration: 0.5, attr: { r: 4 } }, "contract");

// arrowAnim.to("#caret", {
//     duration: 0.5,
//     attr: { points: "60 30, 35 50, 60 70" },
//     repeat: 3,
//     yoyo: true,
//     ease: "power2.inOut",
//     repeatDelay: 0.25
// });

// get elements positioned
// TweenMax.set(".dots, .titleWrap", { xPercent: -50 });
// TweenMax.set(".arrow", { yPercent: -50 });
// TweenMax.set(".title", { y: 30 });

// lower screen animation with nav dots and rotating titles
// const dotAnim = TweenMax.timeline({ paused: true });
// dotAnim.to(
//     ".dot",
//     {
//         stagger: { each: 1, yoyo: true, repeat: 1 },
//         scale: 2.1,
//         rotation: 0.1,
//         ease: "none"
//     },
//     0.5
// );
// dotAnim.to(
//     ".title",
//     slides.length + 1,
//     { y: -(slides.length * 30), rotation: 0.01, ease: "none" },
//     0
// );
// dotAnim.time(1);

// make the whole thing draggable
let dragMe = Draggable.create(container, {
    type: "x",
    edgeResistance: 1,
    snap: offsets,
    inertia: true,
    bounds: "#masterWrap",
    // onDrag: tweenDot,
    // onThrowUpdate: tweenDot,
    onDragEnd: slideAnim,
    allowNativeTouchScrolling: false,
    zIndexBoost: false
});

dragMe[0].id = "dragger";
sizeIt();

// main action check which of the 4 types of interaction called the function
function slideAnim(e) {
    oldSlide = activeSlide;
    // dragging the panels
    if (this.id === "dragger") {
        activeSlide = offsets.indexOf(this.endX);
    } else {
        if (TweenMax.isTweening(container)) {
            return;
        }
        // arrow clicks
        if (this.id === "leftArrow" || this.id === "rightArrow") {
            activeSlide =
                this.id === "rightArrow" ? (activeSlide += 1) : (activeSlide -= 1);
            // click on a dot
        } else if (this.className === "dot") {
            activeSlide = this.index;
            // scrollwheel
        } else {
            activeSlide = e.deltaY > 0 ? (activeSlide += 1) : (activeSlide -= 1);
        }
    }
    // make sure we're not past the end or beginning slide
    activeSlide = activeSlide < 0 ? 0 : activeSlide;
    activeSlide = activeSlide > slides.length - 1 ? slides.length - 1 : activeSlide;
    if (oldSlide === activeSlide) {
        return;
    }
    // if we're dragging we don't animate the container
    if (this.id != "dragger") {
        TweenMax.to(container, dur, { x: offsets[activeSlide] });
    }
}

// update the draggable element snap points
function sizeIt() {
    offsets = [];
    iw = window.innerWidth;
    TweenMax.set("#panelWrap", { width: slides.length * iw });
    TweenMax.set(slides, { width: iw });
    for (let i = 0; i < slides.length; i++) {
        offsets.push(-slides[i].offsetLeft);
    }
    TweenMax.set(container, { x: offsets[activeSlide] });
    dragMe[0].vars.snap = offsets;
}

TweenMax.set(".hideMe", { opacity: 1 });
window.addEventListener("wheel", slideAnim);
window.addEventListener("resize", sizeIt);

// update dot animation when dragger moves
// function tweenDot() {
//     TweenMax.set(dotAnim, {
//         time: Math.abs(TweenMax.getProperty(container, "x") / iw) + 1
//     });
// }