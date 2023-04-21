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

// light mode
const toggleLightMode = () => {
  lightMode = !lightMode;
  document.body.classList.toggle('light-mode', lightMode);
  localStorage.setItem('lightMode', lightMode);
};

let lightMode = JSON.parse(localStorage.getItem('lightMode')) || false;
document.body.classList.toggle('light-mode', lightMode);


// Scroll Reveal
// const elements = document.querySelectorAll('.element-to-reveal');

// window.addEventListener('scroll', () => {
//   elements.forEach((element) => {
//     if (window.scrollY + window.innerHeight > element.offsetTop) {
//       element.style.filter = 'blur(0)';
//       element.style.transition = 'filter 0.8s ease-in-out';
//     }else {
//       element.style.filter = 'blur(10px)';
//     }
//   });
// });