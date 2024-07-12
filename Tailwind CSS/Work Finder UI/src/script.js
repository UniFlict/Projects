const sidebar = document.querySelector("#sidebar");
const sidebarBtn = document.querySelector("#sidebar-btn");
const main = document.querySelector("main");
const nav = document.querySelector("nav");
const body = document.querySelector("body");

sidebarBtn.addEventListener("click", () => {
  if (sidebar.style.left === "0px") {
    sidebar.style.left = "-200px";
    body.style.overflowY = "visible";
    main.style.filter = "blur(0)";
    nav.style.filter = "blur(0)";
  } else {
    sidebar.style.left = "0px";
    body.style.overflowY = "hidden";
    main.style.filter = "blur(4px)";
    nav.style.filter = "blur(4px)";
  }
});

document.addEventListener("click", (e) => {
  const isClickInside =
    sidebar.contains(e.target) || sidebarBtn.contains(e.target);

  if (!isClickInside) {
    sidebar.style.left = "-200px";
    body.style.overflowY = "visible";
    main.style.filter = "blur(0)";
    nav.style.filter = "blur(0)";
  }
});
