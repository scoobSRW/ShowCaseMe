function showContent(type) {
    const contentDisplay = document.getElementById('content-display');
    const skillsBtn = document.getElementById('skills-btn');
    const projectsBtn = document.getElementById('projects-btn');

    // Reset button styles
    skillsBtn.classList.remove('active');
    projectsBtn.classList.remove('active');

    if (type === 'skills') {
        skillsBtn.classList.add('active');
        contentDisplay.innerHTML = `
            <h3>My Skills</h3>
            <p>A breakdown of my technical and professional skills to meet your software needs.</p>
            <a href="skills.html" class="arrow-button">See skills <span class="arrow-right"></span></a>
        `;
    } else if (type === 'projects') {
        projectsBtn.classList.add('active');
        contentDisplay.innerHTML = `
            <h3>My Projects</h3>
            <p>Explore the projects that demonstrate my skills in real-world applications.</p>
            <a href="projects.html" class="arrow-button">Review some of my projects <span class="arrow-right"></span></a>
        `;
    }
}

function toggleMenu() {
    const menuIcon = document.querySelector('.menu-icon');
    const fullScreenMenu = document.querySelector('.full-screen-menu');

    menuIcon.classList.toggle('open');
    fullScreenMenu.style.display = fullScreenMenu.style.display === 'flex' ? 'none' : 'flex';
}


