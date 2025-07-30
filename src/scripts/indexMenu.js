const nav = document.querySelector('header');
const landing = document.getElementById("landing");

function setLandingDistance() {
	let height = window.getComputedStyle(nav).getPropertyValue("height").slice(0, -2);
	let landingmargin = window.getComputedStyle(landing).getPropertyValue("margin-bottom").slice(0, -2);
	landing.style.marginTop = Number(landingmargin) + Number(height) + "px";
};

setLandingDistance();
			
window.addEventListener("resize", () => {
	setLandingDistance();
});

document.querySelector('.hamburger')?.addEventListener('click', () => {
	document.querySelector('.navigation')?.classList.toggle('visible');
	setLandingDistance();
});