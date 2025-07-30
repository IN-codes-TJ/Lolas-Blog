const nav = document.querySelector('header');
const h1 = document.querySelector("h1");

function setH1Distance() {
	let height = window.getComputedStyle(nav).getPropertyValue("height").slice(0, -2);
	let h1margin = window.getComputedStyle(h1).getPropertyValue("margin-bottom").slice(0, -2);
	console.log(h1margin);
	h1.style.marginTop = Number(h1margin) + Number(height) + "px";
};

setH1Distance();
			
window.addEventListener("resize", () => {
	setH1Distance();
});

document.querySelector('.hamburger')?.addEventListener('click', () => {
	document.querySelector('.navigation')?.classList.toggle('visible');
	setH1Distance();
});