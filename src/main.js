// Header에 페이지 아래로 스크롤 시, 다크 스타일링 적용
const header = document.querySelector('header');
const headerHeight = header.offsetHeight;

document.addEventListener('scroll', () => {
  if (window.scrollY > headerHeight) {
    header.classList.add('header--dark');
  } else {
    header.classList.remove('header--dark');
  }
});

// Home에 페이지 아래로 스크롤 시, 투명화 적용
const home = document.querySelector('.home__container'); // 투명도를 조절할 섹션
const homeHeight = home.offsetHeight; // 섹션의 높이

document.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  // 섹션이 화면에 나타나기 시작하는 지점부터 투명도 조절
  if (scrollPosition > home.offsetTop) {
      const opacity = 1 - scrollPosition / homeHeight;
      // 투명도가 0보다 작아지지 않도록 처리
      home.style.opacity = Math.max(0, opacity);
  } else {
        home.style.opacity = 1; // 섹션이 화면 위쪽에 있을 때는 투명도 1
  }
});