'use strict';

// Header에 페이지 아래로 스크롤 시, 다크 스타일링 적용
const header = document.querySelector('header');
const headerHeight = header.offsetHeight;
document.addEventListener('scroll', () => {
  if (window.scrollY > headerHeight) header.classList.add('header--dark');
  else header.classList.remove('header--dark');
});

// Home에 페이지 아래로 스크롤 시, 투명화 적용
const home = document.querySelector('.home__container'); // 투명도를 조절할 섹션
const homeHeight = home.offsetHeight; // 섹션의 높이
document.addEventListener('scroll', () => {
    // 섹션이 화면에 나타나기 시작하는 지점부터 투명도 조절
    home.style.opacity = 1 - window.scrollY / homeHeight;
});

// Arrow up버튼을 아래로 스크롤 시, 투명화 적용
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
    if(window.scrollY > homeHeight / 2) arrowUp.style.opacity = 1;
    else arrowUp.style.opacity = 0;
});

// Navbar 토글버튼 클릭 처리
const navbarMenu = document.querySelector('.header__menu');
const navbarToggle = document.querySelector('.header__toggle');
navbarToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('open');
});

// Navbar 메뉴 클릭 시, 메뉴를 자동으로 닫아줌
navbarMenu.addEventListener('click', () => {
    navbarMenu.classList.remove('open');
});