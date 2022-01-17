const hamburger = document.querySelector(".hamburger");
const navigationLink = document.querySelectorAll(".navigation-link");
const body = document.body;

// Events
hamburger.addEventListener("click", toggleMobileMenu);
navigationLink.forEach((n) => n.addEventListener("click", toggleMobileMenu));

// Functions
function toggleMobileMenu() {
  body.classList.toggle("active-menu");
}
