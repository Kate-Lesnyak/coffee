// Change navbar background on scroll
const nav = document.querySelector('.header.section');

const headerScrollHandler = () => {
    if (window.scrollY > 0) {
        nav.classList.add('navbar-scroll');
    } else {
        nav.classList.remove('navbar-scroll');
    }
}

window.addEventListener('scroll', headerScrollHandler);

// Toggle mobile menu
document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.navbar .mobile-menu-toggle');
    const mobileMenu = document.querySelector('.navbar .mobile-menu-items');

    toggleButton.addEventListener('click', function () {
        mobileMenu.classList.toggle('active');
    });
});
