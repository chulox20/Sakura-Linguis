(function () {
    document.addEventListener('click', (e) => {
        const openBtn = e.target.closest('.nav__menu');
        const closeBtn = e.target.closest('.nav__close');
        const linkBtn = e.target.closest('.nav__links');

        if (openBtn) {
            const nav = openBtn.closest('.nav');
            const menu = nav ? nav.querySelector('.nav__link') : null;
            if (menu) menu.classList.add('nav__link--show');
        }

        if (closeBtn) {
            const menu = closeBtn.closest('.nav__link');
            if (menu) menu.classList.remove('nav__link--show');
        }

        if (linkBtn) {
            const menu = linkBtn.closest('.nav__link');
            if (menu) menu.classList.remove('nav__link--show');
        }
    });
})();