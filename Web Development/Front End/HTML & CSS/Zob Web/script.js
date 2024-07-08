//! Sidebar
{
  let menuIcon = document.querySelector(`.menu_box_icon`);
  let sidebar = document.querySelector(`.sidebar`);

  menuIcon.onclick = function () {
    menuIcon.classList.toggle(`active`);
    sidebar.classList.toggle(`active`);
  };

  document.onclick = function (e) {
    if (!menuIcon.contains(e.target)) {
      menuIcon.classList.remove(`active`);
      sidebar.classList.remove(`active`);
    }
  };
}

//!
