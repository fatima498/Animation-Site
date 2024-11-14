gsap.registerPlugin(ScrollTrigger); // Register the plugin

// simple cursor
var cursor = document.querySelector(".cursor");
var blur_cur = document.querySelector(".cursor_blur");

document.addEventListener("mousemove", function (dets) {
  cursor.style.left = dets.x + 30 + "px";
  cursor.style.top = dets.y + "px";
  blur_cur.style.left = dets.x - 250 + "px";
  blur_cur.style.top = dets.y - 250 + "px";
});

var h4all = document.querySelectorAll(".nav h4");
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    cursor.style.scale = 3;
    cursor.style.border = "0.5px solid white";
    cursor.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    cursor.style.scale = 1;
    cursor.style.border = "0px solid #11bd36";
    cursor.style.backgroundColor = "#11bd36";
  });
});

gsap.to(".nav", {
  backgroundColor: "black",
  duration: 0.5,
  height: "100px",
  scrollTrigger: {
    trigger: ".nav",
    scroller: "body",
    start: "top -10%",
    end: "top -11%",

    scrub: 1,
  },
});

gsap.to(".main", {
  backgroundColor: "black",
  scrollTrigger: {
    trigger: ".main",
    scroller: "body",
    start: "top -25%",
    end: "top 140%",
    scrub: 3,
  },
});

gsap.from(".about-us img, .about-us-in", {
  opacity: 0,
  y: 50,
  duration: 3,
  scrollTrigger: {
    trigger: ".about-us",
    scroller: "body",

    start: "top 60%",
    end: "top 58%",
    scrub: 2,
  },
});

gsap.from(".card", {
  scale: 0.8,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    start: "top 70%",
    end: "top 65%",
    scrub: 2,
  },
});

gsap.from(".coln1", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: ".green",
    scroller: "body",
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});

gsap.from(".coln2", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: ".green",
    scroller: "body",
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});

gsap.from(".page4 h1", {
  y: 50,
  scrollTrigger: {
    trigger: ".page4",
    scroller: "body",
    start: "top 70%",
    end: "top 75%",
    scrub: 3,
  },
});
