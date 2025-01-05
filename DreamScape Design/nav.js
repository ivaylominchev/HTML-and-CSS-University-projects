document.addEventListener("DOMContentLoaded", () => {
	const navLinks = document.querySelectorAll(".link");
	const currentUrl = window.location.pathname;

	navLinks.forEach(link => {
		const linkPath = link.getAttribute("href");
        if (currentUrl.endsWith(linkPath)) {
            link.classList.add("active");
        }
	});
});