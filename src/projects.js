'use strict';

//프로젝트 필터링 관련 로직 처리
const categories = document.querySelector('.categories');
const projects = document.querySelectorAll('.project');
const projectsContainer = document.querySelector('.projects');
categories.addEventListener('click', (event) => {
    const filter = event.target.dataset.category;
    if(!filter) return;
    
    // Active 필터링
    handleActiveSelection(event.target);

    // 프로젝트 필터링
    filterProjects(filter);
});

// Active 필터링
function handleActiveSelection(target) {
    const active = document.querySelector('.category--selected');
    active.classList.remove('category--selected');
    target.classList.add('category--selected');
}

// 프로젝트 필터링
function filterProjects(filter) {
    projects.forEach((project) => {
        if (filter === 'all' || filter === project.dataset.type) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });

    projectsContainer.classList.add('anmi-out');
    setTimeout(() => {
        projectsContainer.classList.remove('anmi-out');
    }, 250);
}