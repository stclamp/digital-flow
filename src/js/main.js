window.addEventListener("DOMContentLoaded", () => {
    // burger

    const openBurgerBtn = document.querySelector('.header__burger-btn img');
    const burgerMenu = document.querySelector('.promo__big-menu');



    window.addEventListener('click', (e) => {
        if (e.target === openBurgerBtn) {
            burgerMenu.classList.add('active');
        } else if (e.target !== burgerMenu) {
            burgerMenu.classList.remove('active');
        }
    })

    //Smooth Scroll

    const smoothScrollElems = document.querySelectorAll('a[href^="#"]');
    smoothScrollElems.forEach(link => {
        link.addEventListener('click', (event) => {

            event.preventDefault();
            const id = link.getAttribute('href').substring(1);


            document.getElementById(id).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    //special cards hover 

    const specialEach = document.querySelectorAll('.special__offers--each');
    const circles = document.querySelectorAll('.circle');

    specialEach.forEach((item, i) => {
        item.addEventListener('mousemove', () => {
            specialEach[i].classList.add('active');
            circles.forEach((circle) => circles[i].classList.add('active'))
        });

        item.addEventListener('mouseleave', () => {
            specialEach[i].classList.remove('active');
            circles.forEach((circle) => circles[i].classList.remove('active'))
        });

    })


});