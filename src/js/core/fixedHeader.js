function initHeroSlider() {

    const slider = document.querySelector('.hero__slides');
    const container = document.querySelector('.hero__slider');

    if (!slider || !container) return;
    if (slider.dataset.loaded) return;

    slider.dataset.loaded = "true";

    const slides = Array.from(slider.querySelectorAll('picture'));

    if (slides.length <= 1) return;

    let index = 0;
    let slideWidth = container.offsetWidth; // ✔ FIX CLAVE

    function updateSliderPosition() {

        requestAnimationFrame(() => {

            slider.style.transform =
                `translate3d(-${index * slideWidth}px, 0, 0)`;

        });
    }

    // INIT (IMPORTANTE: esperar layout real)
    window.addEventListener('load', () => {

        slideWidth = container.offsetWidth; // ✔ recalcular seguro

        slider.classList.add('is-ready');

        updateSliderPosition();
    });

    // AUTOPLAY
    const autoplay = setInterval(() => {

        index = (index + 1) % slides.length;

        updateSliderPosition();

    }, 5000);

    // RESIZE
    let resizeTimer;

    window.addEventListener('resize', () => {

        clearTimeout(resizeTimer);

        resizeTimer = setTimeout(() => {

            slideWidth = container.offsetWidth;

            updateSliderPosition();

        }, 120);

    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHeroSlider);
} else {
    initHeroSlider();
}