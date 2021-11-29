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

    //Smooth Scroll

    const smoothScrollElems = document.querySelectorAll('a[href^="#"]:not(a[href="#"])');
    smoothScrollElems.forEach(link => {
        link.addEventListener('click', (event) => {

            event.preventDefault();
            const id = link.getAttribute('href').substring(1);
            

            document.getElementById(id).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

});