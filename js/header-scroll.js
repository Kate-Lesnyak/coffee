const nav = document.querySelector('.header.section');

const headerScrollHandler = () => {
    if (window.scrollY > 0) {
        nav.classList.add('navbar-scroll');
    } else {
        nav.classList.remove('navbar-scroll');
    }
}

window.addEventListener('scroll', headerScrollHandler);
