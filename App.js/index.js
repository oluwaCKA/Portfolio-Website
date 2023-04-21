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

// preloader
const loader = document.querySelector(".loader")



function vanish() {
  loader.classList.add("disappear");
}

window.addEventListener("load", vanish);


// Light mode
const toggleLightMode = () => {
  lightMode = !lightMode;
  document.body.classList.toggle('light-mode', lightMode);
  localStorage.setItem('lightMode', lightMode);
};

let lightMode = JSON.parse(localStorage.getItem('lightMode')) || false;
document.body.classList.toggle('light-mode', lightMode);


// Typing animation
const text = document.querySelector(".sec-text");

const textLoad = () => {
  setTimeout(() => {
    text.textContent = "Frontend Developer";
  }, 0);
  setTimeout(() => {
    text.textContent = "Digital Artist";
  }, 4000);
  setTimeout(() => {
    text.textContent = "Freelancer";
  }, 8000);
};

textLoad();
setInterval(textLoad, 12000);