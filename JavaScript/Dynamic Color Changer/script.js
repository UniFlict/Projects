const rect = document.querySelector("#center");

rect.addEventListener("mousemove", (e) => {
  const rectLocation = rect.getBoundingClientRect();
  const insideRectVal = e.clientX - rectLocation.left;

  if (insideRectVal < rectLocation.width / 2) {
    const redColor = gsap.utils.mapRange(
      0,
      rectLocation.width / 2,
      255,
      0,
      insideRectVal
    );

    gsap.to(rect, {
      backgroundColor: `rgb(${redColor}, 0, 0)`,
      ease: Power4,
    });
  } else {
    const blueColor = gsap.utils.mapRange(
      rectLocation.width / 2,
      rectLocation.width,
      0,
      255,
      insideRectVal
    );

    gsap.to(rect, {
      backgroundColor: `rgb(0, 0,${blueColor})`,
      ease: Power4,
    });
  }
});

rect.addEventListener("mouseleave", () => {
  gsap.to(rect, {
    backgroundColor: "transparent",
  });
});
