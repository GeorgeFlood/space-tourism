const headerHamBurger = document.querySelector(".header__nav--hamburger");
const mobileNav = document.querySelector(".mobile-nav");

headerHamBurger.addEventListener("click", (e) => {
  mobileNav.classList.toggle("mobile-nav--active");
});

window.addEventListener("click", (e) => {
  if (e.target.classList.contains("mobile-nav__item")) {
    mobileNav.classList.remove("mobile-nav--active");
  }
});
