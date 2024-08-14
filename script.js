// let menu = document.querySelector('#menu-icon');
// let navbar = document.querySelector('.navbar');

// menu.onclick = () => {
//     menu.classList.toggle('bx-x');
//     navbar.classList.toggle('open');
// };

function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

const sr = ScrollReveal({
    distance: '40px',
    duration: 2500,
    reset: true
});

sr.reveal('.logo', { delay: 200, origin: 'left' });
sr.reveal('.navbar', { delay: 400, origin: 'top' });
sr.reveal('.menu-btn', { delay: 520, origin: 'right' });
sr.reveal('.home-text span', { delay: 600, origin: 'top' });
sr.reveal('.home-text h1', { delay: 680, origin: 'left' });
sr.reveal('.home-text p', { delay: 750, origin: 'right' });
sr.reveal('.main-btn', { delay: 860, origin: 'left' });
sr.reveal('.share p', { delay: 900, origin: 'bottom' });
sr.reveal('.social', { delay: 900, origin: 'bottom' });
sr.reveal('.home-img', { delay: 1000, origin: 'right' });



document.querySelectorAll('.project').forEach(item => {
    item.addEventListener('click', event => {
        const projectDetails = document.getElementById('project-details');
        const overlay = document.getElementById('overlay');
        const projectContent = projectDetails.querySelectorAll('.details-content');
        
        projectContent.forEach(content => {
            content.classList.remove('active');
        });

        const selectedProject = item.getAttribute('data-project');
        document.getElementById(selectedProject).classList.add('active');
        
        projectDetails.style.display = 'block';
        overlay.style.display = 'block'; // Show the overlay
        document.body.style.overflow = 'hidden'; // Disable scrolling
    });
});

document.addEventListener('click', event => {
    const projectDetails = document.getElementById('project-details');
    const overlay = document.getElementById('overlay');
    if (!projectDetails.contains(event.target) && !event.target.closest('.project')) {
        projectDetails.style.display = 'none';
        overlay.style.display = 'none'; // Hide the overlay
        document.body.style.overflow = 'auto'; // Enable scrolling
    }
});

document.getElementById('project-details').addEventListener('click', event => {
    event.stopPropagation(); // Prevent click event from propagating to the document
});



