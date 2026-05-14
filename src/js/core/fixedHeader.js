function initFixedHeader() {

    const header = document.querySelector('.header');

    if (!header) return;

    window.addEventListener('scroll', () => {

        if (window.scrollY > 50) {
            header.classList.add('fixed');
        } else {
            header.classList.remove('fixed');
        }

    });

}