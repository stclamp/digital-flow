window.addEventListener("DOMContentLoaded", () => {
    // burger

    const openBurgerBtn = document.querySelector('.header__burger-btn');
    const closeBurgerBtn = document.querySelector('.promo__close-menu');
    const burgerMenu = document.querySelector('.promo__big-menu');

    openBurgerBtn.addEventListener('click', () => burgerMenu.classList.add('active'))
    closeBurgerBtn.addEventListener('click', () => burgerMenu.classList.remove('active'));
});