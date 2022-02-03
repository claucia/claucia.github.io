const hamburger = document.querySelector("header .hamburger");
const body = document.body;

hamburger.addEventListener("click", toggleMobileMenu);

function toggleMobileMenu() {
  body.classList.toggle("active-menu");
}
