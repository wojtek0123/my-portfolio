const burgerBtn = document.querySelector('.nav__burger');
const mobileNav = document.querySelector('.nav__links');

const burgerHandler = () => {
	mobileNav.classList.toggle('show');
	burgerBtn.classList.toggle('open');

	if (mobileNav.classList.contains('show')) {
		document.body.classList.add('no-scroll');
	} else {
		document.body.classList.remove('no-scroll');
	}
};

burgerBtn.addEventListener('click', burgerHandler);
mobileNav.addEventListener('click', (event) => {
	if (event.target.classList.contains('nav__link')) {
		burgerHandler();
	}
});
