const rect = document.querySelector("#center");

rect.addEventListener("mousemove", (e) => {
  const rectLocation = rect.getBoundingClientRect();
  const insideRect = e.clientX - rectLocation.left;

  if (insideRect < rectLocation.width / 2) {
    let redColor = gsap.utils.mapRange(
      0,
      rectLocation.width / 2,
      255,
      0,
      insideRect
    );

    gsap.to(rect, {
      backgroundColor: `rgb(${redColor}, 0, 0)`,
      ease: Power4,
    });
  } else {
    let blueColor = gsap.utils.mapRange(
      rectLocation.width / 2,
      rectLocation.width,
      0,
      255,
      insideRect
    );

    gsap.to(rect, {
      backgroundColor: `rgb(0, 0, ${blueColor})`,
      ease: Power4,
    });
  }
});

rect.addEventListener("mouseleave", () => {
  gsap.to(rect, {
    backgroundColor: "transparent",
  });
});
