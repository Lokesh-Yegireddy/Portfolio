const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav-container');

// Toggle nav on hamburger click
hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Close nav if clicked outside
document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
        nav.classList.remove('active');
    }
});
