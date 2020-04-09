// "use strict";


// Hamburger menu / slide from right side effect
const hamburgerBtn = document.querySelector('.hamburger-js');

hamburgerBtn.addEventListener('click', e => {
  e.preventDefault;

  //Hamburger icon converting into X icon
  const icon = document.querySelector('.hamburger-icon-js');
  icon.classList.toggle('icon-x');

  // Adding open menu class
  const list = document.querySelector('.top-nav__list--js');
  list.classList.toggle('hamburger-menu-open');
  
});


//Hero section parallax effect
window.addEventListener('scroll', e => {

  const parallax = document.querySelector('.parallax');
  let posY = window.pageYOffset * 0.2;

  parallax.style.transform = `translateY(-${posY}px)`;

});