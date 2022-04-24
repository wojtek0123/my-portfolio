const headerArrowDown = document.querySelector('.header__arrow');
const sections = [...document.querySelectorAll('section')];
const desktopNavLinks = [...document.querySelectorAll('.nav__circle')];

const nav = document.querySelector('.nav');

let currentScrollPos = 0;
let prevScrollPos = window.screenY;

const hideNav = () => {
	currentScrollPos = window.scrollY;

	if (currentScrollPos > prevScrollPos) {
		nav.classList.add('hide');
	} else {
		nav.classList.remove('hide');
	}
	prevScrollPos = currentScrollPos;
};

const hideArrow = () => {
	currentScrollPos = window.scrollY;
	if (currentScrollPos < 200) {
		headerArrowDown.classList.remove('hide');
	} else {
		headerArrowDown.classList.add('hide');
	}
};

const scrollHandler = () => {
	hideArrow();
	hideNav();
};

window.addEventListener('scroll', scrollHandler);
