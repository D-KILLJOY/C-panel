//Toggle mobile menu
const menuTogggleOpen = document.querySelector(".menu-toggle-open");
const menuTogggleClose = document.querySelector(".menu-toggle-close");
const navMobileElement = document.querySelector(".nav-mobile");

menuTogggleOpen.addEventListener("click", () =>
	navMobileElement.classList.add("active")
);
menuTogggleClose.addEventListener("click", () =>
	navMobileElement.classList.remove("active")
);

//Toggle theme

const bodyElement = document.body;
const themeToggleBtn = document.querySelector(".theme-toggle-btn");
const currentTheme = localStorage.getItem("currentTheme");

if (currentTheme) {
	bodyElement.classList.add("theme-light");
}

themeToggleBtn.addEventListener("click", () => {
	bodyElement.classList.toggle("theme-light");

	if (bodyElement.classList.contains("theme-light")) {
		localStorage.setItem("currentTheme", "themeActive");
	} else {
		localStorage.removeItem("currentTheme", "themeActive");
	}
});

//Show dropdown menu

document.addEventListener("click", (e) => {
	const dropdown = document.querySelector(".dropdown");

	if (e.target.classList.contains("dropdown-btn")) {
		dropdown.classList.add("active");
	} else {
		dropdown.classList.remove("active");
	}
});
