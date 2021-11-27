window.addEventListener("DOMContentLoaded", () => {
    // burger

    const openBurgerBtn = document.querySelector('.header__burger-btn img');
    const burgerMenu = document.querySelector('.promo__big-menu');



    window.addEventListener('click', (e) => {
        console.log(e.target)
        if (e.target === openBurgerBtn) {
            burgerMenu.classList.add('active');
        } else if (e.target !== burgerMenu) {
            burgerMenu.classList.remove('active');
        }
    })

});