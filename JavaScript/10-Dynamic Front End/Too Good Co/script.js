gsap.registerPlugin(ScrollTrigger);

//!

function lenis() {
  const lenis = new Lenis();

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
}
lenis();

//!

function videoContainerAnimation() {
  const playBtn = document.querySelector("#play");
  const videoContainer = document.querySelector(".video-container");

  const screenSize = window.matchMedia("(max-width: 1023px)");

  if (!screenSize.matches) {
    videoContainer.addEventListener("mousemove", (e) => {
      gsap.to(playBtn, {
        scale: 1,
        opacity: 1,
        left: e.x - 60,
        top: e.y - 60,
      });
    });

    videoContainer.addEventListener("mouseleave", () => {
      gsap.to(playBtn, {
        scale: 0,
        opacity: 0,
      });
    });
  }
}
videoContainerAnimation();

//!

function headerAnimation() {
  gsap.from(".page-1 .header-text1", {
    y: 100,
    opacity: 0,
    delay: 0.4,
    duration: 0.3,
    stagger: 0.2,
  });

  gsap.from(".page-1 .header-text2", {
    y: 100,
    opacity: 0,
    delay: 0.6,
    duration: 0.3,
    stagger: 0.2,
  });

  gsap.from(".page-1 .header-text3", {
    y: 100,
    opacity: 0,
    delay: 0.8,
    duration: 0.3,
    stagger: 0.2,
  });

  gsap.from(".page-1 .video-container", {
    opacity: 0,
    delay: 0.8,
    duration: 0.4,
  });
}
headerAnimation();

//!

function pageTwoDropDown() {
  const details = document.querySelectorAll(".elem .details");
  details.forEach((detail) => {
    detail.addEventListener("mouseenter", () => {
      gsap.to(detail, {
        height: "200px",
        // y: 60,
        duration: 0.2,
      });
    });

    detail.addEventListener("mouseleave", () => {
      gsap.to(detail, {
        height: "50px",
        // y: 0,
        duration: 0.2,
      });
    });
  });
}

pageTwoDropDown();

//!

function dynamicCursorCircle() {
  document.addEventListener("mousemove", (e) => {
    gsap.to("#cursor", {
      left: e.x,
      top: e.y,
    });
  });

  const page4Sections = document.querySelectorAll(".page-4 .section");

  page4Sections.forEach((e) => {
    e.addEventListener("mouseenter", () => {
      gsap.to("#cursor", {
        transform: "translate(-50%, -50%) scale(1)",
        duration: 0.2,
      });
    });

    e.addEventListener("mouseleave", () => {
      gsap.to("#cursor", {
        transform: "translate(-50%, -50%) scale(0)",
        duration: 0.2,
      });
    });

    document
      .querySelector(".page-4 .section3")
      .addEventListener("mouseenter", () => {
        gsap.to("#cursor", {
          transform: "translate(-50%, -50%) scale(1)",
          duration: 0.2,

          backgroundColor: "#ede6e6",
        });
      });

    document
      .querySelector(".page-4 .section3")
      .addEventListener("mouseleave", () => {
        gsap.to("#cursor", {
          transform: "translate(-50%, -50%) scale(0)",
          duration: 0.2,

          backgroundColor: "#e6e6e6",
        });
      });

    document
      .querySelector(".page-4 .section4")
      .addEventListener("mouseenter", (e) => {
        gsap.to("#cursor", {
          transform: "translate(-50%, -50%) scale(1)",
          duration: 0.2,

          backgroundColor: "#d6e0e0",
        });
      });

    document
      .querySelector(".page-4 .section4")
      .addEventListener("mouseleave", () => {
        gsap.to("#cursor", {
          transform: "translate(-50%, -50%) scale(0)",
          duration: 0.2,

          backgroundColor: "#e6e6e6",
        });
      });
  });
}
dynamicCursorCircle();

//!

function menuBtn() {
  const menuBtn = document.querySelector(".menu-btn");
  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
  });
}
menuBtn();

//!

// let logoChanged = false;

// if (!logoChanged) {
//   gsap.to(".logo img", {
//     top: "-82px",

//     duration: 0.2,

//     scrollTrigger: "#nav-animation-trigger",
//   });

//   logoChanged = true;
// } else {
//   gsap.to(".logo img", {
//     top: "82px",
//     opacity: 0,
//     duration: 0.5,

//     scrollTrigger: ".website",
//   });
// }

gsap.from(".logo img", {
  y: "-83px",
  duration: 0.2,
  scrollTrigger: {
    trigger: "#nav-animation-trigger",
    start: "top center",
    end: "bottom top",
    toggleActions: "play reverse play reverse",
    markers: false,
  },
});

gsap.from("nav section .links-section", {
  y: "-83px",
  duration: 0.2,
  scrollTrigger: {
    trigger: "#nav-animation-trigger",
    start: "top center",
    end: "bottom top",
    toggleActions: "play reverse play reverse",
    markers: false,
  },
});
