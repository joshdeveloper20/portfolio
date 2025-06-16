const navMenuBtn = document.querySelector(".navBtn3");
const navMenu = document.querySelector(".nav ul");
const date = document.querySelector(".date");

navMenuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  navMenuBtn.classList.toggle("is-open");
});

// Set the current year in the footer
date.textContent = new Date().getFullYear();
