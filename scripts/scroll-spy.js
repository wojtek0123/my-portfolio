const headerArrowDown = document.querySelector('.header__arrow');
const sections = [...document.querySelectorAll('section')];
const desktopNavLinks = [...document.querySelectorAll('.nav__circle')];

let currentSection = 0;

const hideArrow = () => {
	currentSection = window.scrollY;
	if (currentSection < 200) {
		headerArrowDown.classList.remove('hide');
	} else {
		headerArrowDown.classList.add('hide');
	}
};

const scrollSpyHandler = () => {
	currentSection = window.scrollY;

	if (currentSection === 0) {
		desktopNavLinks[0].classList.add('active');
	}

	sections.forEach((section, index) => {
		if (section.offsetTop <= currentSection + 200) {
			desktopNavLinks[index + 1].classList.add('active');
		} else if (section.offsetTop > currentSection) {
			desktopNavLinks[index + 1].classList.remove('active');
		}
	});

	if (currentSection >= document.body.offsetHeight - window.innerHeight) {
		desktopNavLinks[desktopNavLinks.length - 1].classList.add('active');
	}
};

const checkScrollSpy = () => {
	if (currentSection === 0) {
		desktopNavLinks[0].classList.add('active');
	}
};

const scrollHandler = () => {
	hideArrow();
	scrollSpyHandler();
}

window.addEventListener('scroll', scrollHandler);
window.addEventListener('DOMContentLoaded', checkScrollSpy);
