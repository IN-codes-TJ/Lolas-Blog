document.querySelector('.hamburger')?.addEventListener('click', () => {
	document.querySelector('.navigation')?.classList.toggle('visible');
	setLandingDistance();
});