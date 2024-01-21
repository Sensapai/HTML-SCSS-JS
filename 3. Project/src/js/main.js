function burgerMenu() {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.menu');
    const body = document.querySelector('body');

    function toggleMenu() {
        const isMenuActive = menu.classList.contains('active');

        if (!isMenuActive) {
            menu.classList.add('active');
            burger.classList.add('active-burger');
            body.classList.add('locked');
        } else {
            menu.classList.remove('active');
            burger.classList.remove('active-burger');
            body.classList.remove('locked');
        }
    }

    function closeMenuOnResize() {
        if (window.innerWidth >= 670) {
            menu.classList.remove('active');
            burger.classList.remove('active-burger');
            body.classList.remove('locked');
        }
    }

    burger.addEventListener('click', toggleMenu);
    window.addEventListener('resize', closeMenuOnResize);
}

burgerMenu();

function toggleSwiper() {
    const breakPoint = 600;
    const foodSections = document.querySelectorAll('.product .container');

    function updateVisibility() {
        if (window.innerWidth <= breakPoint) {
            foodSections[0].classList.add('hide');
            foodSections[1].classList.remove('hide');
        } else {
            foodSections[0].classList.remove('hide');
            foodSections[1].classList.add('hide');
        }
    }

    updateVisibility();

    window.addEventListener('resize', updateVisibility);
}

toggleSwiper();

const swiper = new Swiper('.swiper', {

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },

    //   // Responsive breakpoints
    //   breakpoints: {
    //   // when window width is >= 320px
    //   320: {
    //     slidesPerView: 3,
    //     spaceBetween: 20
    //   },
    //   // when window width is >= 480px
    //   480: {
    //     slidesPerView: 3,
    //     spaceBetween: 30
    //   },
    // }
});