// Navlinks
const homeNav = document.querySelector(".home__nav");
const projectNav = document.querySelector(".projects__nav");
const contactNav = document.querySelector(".contact__nav");
const homeFooter = document.querySelector(".home__footer");
const projectsFooter = document.querySelector(".projects__footer");
const contactFooter = document.querySelector(".contact__footer");
const navLinks = document.querySelectorAll("#nav__link");
const navContainer = document.querySelector("#navbarSupportedContent");
const btnTrigger = document.querySelector("#navbar_toggler");

// Sections
const navPage = document.querySelector("#nav__container");
const featuresPage = document.querySelector("#features__section");
const footerPage = document.querySelector("#footer__section");

navLinks.forEach((el) => {
  el.addEventListener("click", function () {
    el.classList.add("nav-active");
    navContainer.classList.remove("show");
    btnTrigger.classList.add("collapsed");
  });
  el.addEventListener("mouseleave", function () {
    el.classList.remove("nav-active");
  });
});

// NavLinks
homeNav.addEventListener("click", function () {
  navPage.scrollIntoView({ behavior: "smooth" });
});
projectNav.addEventListener("click", function () {
  featuresPage.scrollIntoView({ behavior: "smooth" });
});
contactNav.addEventListener("click", function () {
  footerPage.scrollIntoView({ behavior: "smooth" });
});

// Footer
homeFooter.addEventListener("click", function () {
  navPage.scrollIntoView({ behavior: "smooth" });
});
projectsFooter.addEventListener("click", function () {
  featuresPage.scrollIntoView({ behavior: "smooth" });
});
contactFooter.addEventListener("click", function () {
  footerPage.scrollIntoView({ behavior: "smooth" });
});
