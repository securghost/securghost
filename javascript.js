window.onload = function () {
    window.addEventListener('scroll', function (e) {
        if (window.scrollY > 100) {
            document.querySelector("header").classList.add('is-scrolling');
        } else {
            document.querySelector("header").classList.remove('is-scrolling');
        }
    });
}

    const menu_btn = document.querySelector('.hamburger');
    const mobile_menu = document.querySelector('.mobile-nav');

    menu_btn.addEventListener('click', function () {
        menu_btn.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');

        // Toggle the class for the close button as well
    const close_btn = document.querySelector('.close');
    close_btn.classList.toggle('is-active');
});

