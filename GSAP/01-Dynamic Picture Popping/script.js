const center = document.querySelector("#center");

const throttleFunction = (func, delay) => {
  let prev = 0;
  return (...args) => {
    let now = new Date().getTime();

    // console.log(now - prev, delay);

    if (now - prev > delay) {
      prev = now;

      return func(...args);
    }
  };
};

center.addEventListener(
  "mousemove",
  throttleFunction((e) => {
    //* less code

    const div = document.createElement("div");
    div.classList.add("imagediv");

    div.style.left = e.clientX + "px";
    div.style.top = e.clientY + "px";

    const img = document.createElement("img");
    img.setAttribute(
      "src",
      "https://images.unsplash.com/photo-1491378630646-3440efa57c3b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    );

    div.appendChild(img);

    document.body.appendChild(div);

    gsap.to(img, {
      y: "0",
      ease: Power1,
      duration: 0.5,
    });

    gsap.to(img, {
      y: "100%",
      delay: 0.5,
      ease: Power2,
    });

    setTimeout(() => {
      div.remove();
    }, 700);
  }, 400)
);
