"use strict";

const switcherNav = document.querySelector('.top-nav__switcher--js');

switcherNav.addEventListener('click', (e) => {
  const navigationList = document.querySelector('.top-nav__list--js');
  navigationList.classList.toggle('top-nav__list--visible');

  const navigationBar = document.querySelector('.top-nav--js');
  navigationBar.classList.toggle('top-nav--visible');

  if (navigationList.classList.contains('top-nav__list--visible')) {
      switcher.innerHTML = 'X';
  }
  else {
      switcher.innerHTML = '☰';
  }
});

const switcherSide = document.querySelector('.side-nav__button-tel--js');

switcherSide.addEventListener('click', (e) => {
  const navigationTel = document.querySelector('.side-nav__button-tel--link');
  navigationTel.classList.toggle('side-nav__button-tel--link-visible');

  const navigationBut = document.querySelector('.side-nav__button-tel--js')
  navigationBut.classList.toggle('side-nav__button-tel--visible')
});


