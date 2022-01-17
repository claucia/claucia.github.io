const hamburger = document.querySelector(".hamburger");
const navigationMenu = document.querySelector(".navigation-menu");
const navigationLink = document.querySelectorAll(".navigation-link");

// Events
hamburger.addEventListener("click", mobileMenu);
navigationLink.forEach((n) => n.addEventListener("click", closeMenu));

// Functions
function mobileMenu() {
  hamburger.classList.toggle("active");
  navigationMenu.classList.toggle("active");
}

function closeMenu() {
  hamburger.classList.remove("active");
  navigationMenu.classList.remove("active");
}
