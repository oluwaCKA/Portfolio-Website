// Navbar for mobile
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navbar__menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav__links").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("is-active");
    navMenu.classList.remove("active");
  })
);

// // preloader
// let preloader = JSON.parsel(localstorage.getItem('preloader')) || false;
// window.onload = function() {
//   document.getElementById('preloader').style.display = 'none';
// };

// Light Mode
const toggleLightMode = () => {
  lightMode = !lightMode;
  document.body.classList.toggle("light-mode", lightMode);
  localStorage.setItem("lightMode", lightMode);
};

let lightMode = JSON.parse(localStorage.getItem("lightMode")) || false;
document.body.classList.toggle("light-mode", lightMode);

// Form reset
window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};
