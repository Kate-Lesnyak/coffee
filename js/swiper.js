const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    grabCursor: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    keyboard: {
        enabled: true,
    },
    loop: true,
    speed: 800,
    breakpoints: {
        320: {
            spaceBetween: 20,
        },
        768: {
            spaceBetween: 20,
        },
        1360: {
            spaceBetween: 20,
        },
    },
});