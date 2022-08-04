const primaryNav = document.getElementById('primary-navigation');
const navToggle = document.getElementById('nav-toggle');

navToggle.addEventListener('click', () => {
    primaryNav.classList.toggle('active');
})