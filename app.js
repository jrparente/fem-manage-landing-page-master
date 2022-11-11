const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector("#primary-navigation");
const iconClose = document.querySelector(".icon-close");
const iconHamburguer = document.querySelector(".icon-hamburguer");
const header = document.querySelector("header");

navToggle.addEventListener("click", () => {
  primaryNav.hasAttribute("data-visible")
    ? navToggle.setAttribute("aria-expanded", false) &
      iconClose.classList.add("hide") &
      iconHamburguer.classList.remove("hide")
    : navToggle.setAttribute("aria-expanded", true) &
      iconClose.classList.remove("hide") &
      iconHamburguer.classList.add("hide");
  primaryNav.toggleAttribute("data-visible");
  header.toggleAttribute("data-overlay");
});

/* Slider */

const slider = new A11YSlider(document.querySelector(".slider"), {
  arrows: false,
  dots: true,
  centerMode: true,
});
