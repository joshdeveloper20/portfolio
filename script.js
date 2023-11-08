const navMenuBtn = document.querySelector(".navBtn3");
const navMenu = document.querySelector(".nav ul");

navMenuBtn.addEventListener("click", () => {
	navMenu.classList.toggle("active");
	navMenuBtn.classList.toggle("is-open");
});
