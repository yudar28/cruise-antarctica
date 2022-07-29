import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
  });
});

let navButton = document.querySelector('.page-header__toggle');
let navMain = document.querySelector('.main-nav');
let header = document.querySelector('.page-header');
let logo = document.querySelector('.page-header__logo');
let body = document.querySelector('.page-body');
let navItems = document.querySelectorAll('.main-nav__link-js');

navButton.classList.remove('page-header__toggle--nojs');
navMain.classList.remove('main-nav--nojs');
logo.classList.remove('page-header__logo--nojs');

const onMenuOpen = () => {
  navMain.classList.toggle('main-nav--open');
  navButton.classList.toggle('page-header__toggle--close');
  header.classList.toggle('page-header--open');
  logo.classList.toggle('page-header__logo--open');
  body.classList.toggle('page-body--opened-menu');
}

const onMenuClose = () => {
  navMain.classList.remove('main-nav--open');
  navButton.classList.remove('page-header__toggle--close');
  header.classList.remove('page-header--open');
  logo.classList.remove('page-header__logo--open');
  body.classList.remove('page-body--opened-menu');
}

navButton.addEventListener('click', () => {
  onMenuOpen();
})

navItems.forEach((navItem) => {
  navItem.addEventListener('click', () => {
    onMenuClose();
  })
});


// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используейтся matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
