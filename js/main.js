!function(n){var c={};function e(t){if(c[t])return c[t].exports;var r=c[t]={i:t,l:!1,exports:{}};return n[t].call(r.exports,r,r.exports,e),r.l=!0,r.exports}e.m=n,e.c=c,e.d=function(n,c,t){e.o(n,c)||Object.defineProperty(n,c,{enumerable:!0,get:t})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,c){if(1&c&&(n=e(n)),8&c)return n;if(4&c&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(e.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&c&&"string"!=typeof n)for(var r in n)e.d(t,r,function(c){return n[c]}.bind(null,r));return t},e.n=function(n){var c=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(c,"a",c),c},e.o=function(n,c){return Object.prototype.hasOwnProperty.call(n,c)},e.p="",e(e.s=0)}([function(module,exports){eval("// \"use strict\";\r\n\r\n\r\n// Hamburger menu / slide from right side effect\r\nconst hamburgerBtn = document.querySelector('.hamburger-js');\r\n\r\nhamburgerBtn.addEventListener('click', e => {\r\n  e.preventDefault;\r\n\r\n  //Hamburger icon converting into X icon\r\n  const icon = document.querySelector('.hamburger-icon-js');\r\n  icon.classList.toggle('icon-x');\r\n\r\n  // Adding open menu class\r\n  const list = document.querySelector('.top-nav__list--js');\r\n  list.classList.toggle('hamburger-menu-open');\r\n  \r\n});\r\n\r\n\r\n//Hero section parallax effect\r\nwindow.addEventListener('scroll', e => {\r\n\r\n  const parallax = document.querySelector('.parallax');\r\n  let posY = window.pageYOffset * 0.2;\r\n\r\n  parallax.style.transform = `translateY(-${posY}px)`;\r\n\r\n});\r\n\r\n\r\n//Sticky side buttons\r\nconst stickyBtns = document.querySelector('.sticky-buttons');\r\n\r\nstickyBtns.addEventListener('click', e => {\r\n\r\n  if (e.target.tagName === 'BUTTON') {\r\n    e.target.firstElementChild.classList.toggle('slide-in');\r\n  }\r\n  \r\n});\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOzs7QUFHRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsNENBQTRDLEtBQUs7O0FBRWpELENBQUM7OztBQUdEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLENBQUMiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFwidXNlIHN0cmljdFwiO1xyXG5cclxuXHJcbi8vIEhhbWJ1cmdlciBtZW51IC8gc2xpZGUgZnJvbSByaWdodCBzaWRlIGVmZmVjdFxyXG5jb25zdCBoYW1idXJnZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGFtYnVyZ2VyLWpzJyk7XHJcblxyXG5oYW1idXJnZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICBlLnByZXZlbnREZWZhdWx0O1xyXG5cclxuICAvL0hhbWJ1cmdlciBpY29uIGNvbnZlcnRpbmcgaW50byBYIGljb25cclxuICBjb25zdCBpY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhhbWJ1cmdlci1pY29uLWpzJyk7XHJcbiAgaWNvbi5jbGFzc0xpc3QudG9nZ2xlKCdpY29uLXgnKTtcclxuXHJcbiAgLy8gQWRkaW5nIG9wZW4gbWVudSBjbGFzc1xyXG4gIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wLW5hdl9fbGlzdC0tanMnKTtcclxuICBsaXN0LmNsYXNzTGlzdC50b2dnbGUoJ2hhbWJ1cmdlci1tZW51LW9wZW4nKTtcclxuICBcclxufSk7XHJcblxyXG5cclxuLy9IZXJvIHNlY3Rpb24gcGFyYWxsYXggZWZmZWN0XHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBlID0+IHtcclxuXHJcbiAgY29uc3QgcGFyYWxsYXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFyYWxsYXgnKTtcclxuICBsZXQgcG9zWSA9IHdpbmRvdy5wYWdlWU9mZnNldCAqIDAuMjtcclxuXHJcbiAgcGFyYWxsYXguc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVkoLSR7cG9zWX1weClgO1xyXG5cclxufSk7XHJcblxyXG5cclxuLy9TdGlja3kgc2lkZSBidXR0b25zXHJcbmNvbnN0IHN0aWNreUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RpY2t5LWJ1dHRvbnMnKTtcclxuXHJcbnN0aWNreUJ0bnMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuXHJcbiAgaWYgKGUudGFyZ2V0LnRhZ05hbWUgPT09ICdCVVRUT04nKSB7XHJcbiAgICBlLnRhcmdldC5maXJzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QudG9nZ2xlKCdzbGlkZS1pbicpO1xyXG4gIH1cclxuICBcclxufSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n")}]);