const burgerBtn = document.querySelector('.nav__burger');
const mobileNav = document.querySelector('.nav__links-mobile');

const burgerHandler = () => {
  mobileNav.classList.toggle('show');
  burgerBtn.classList.toggle('open');
};

burgerBtn.addEventListener('click', burgerHandler);
mobileNav.addEventListener('click', (event) => {
  if (event.target.classList.contains('nav__link-mobile')) {
    burgerHandler();
  }
});