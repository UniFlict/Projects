window.addEventListener("mousemove", (e) => {
  const xVal = gsap.utils.mapRange(
    0,
    window.innerWidth,
    100,
    window.innerWidth - 100,
    e.clientX
  );

  gsap.to("#rect", {
    left: xVal,
    ease: Power3,
  });
});

window.addEventListener("mousemove", (e) => {
  document.querySelector("#mouse-circle").style.display = "inline";
  gsap.to("#mouse-circle", {
    left: e.clientX + "px",
    top: e.clientY + "px",
    ease: Power3,
  });
});
