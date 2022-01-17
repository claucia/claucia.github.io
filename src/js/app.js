const hamburger = document.querySelector(".hamburger");
const navigationMenu = document.querySelector(".navigation-menu");
const navigationLink = document.querySelectorAll(".navigation-link");
const body = document.body;

// Events
hamburger.addEventListener("click", mobileMenu);
navigationLink.forEach((n) => n.addEventListener("click", closeMenu));

// Functions
function mobileMenu() {
  hamburger.classList.toggle("active");
  navigationMenu.classList.toggle("active");
  body.classList.toggle("active-menu");
}

function closeMenu() {
  hamburger.classList.remove("active");
  navigationMenu.classList.remove("active");
  body.classList.remove("active-menu");
}
