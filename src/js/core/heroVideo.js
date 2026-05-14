function initHeroSlider() {

    const slider = document.querySelector('.hero__slides');
    const container = document.querySelector('.hero__slider');

    if (!slider || !container) return;
    if (slider.dataset.loaded) return;

    slider.dataset.loaded = "true";

    const slides = Array.from(
        slider.querySelectorAll('picture')
    );

    if (slides.length <= 1) return;

    let index = 0;
    let slideWidth = 0;

    // ✔ solo lectura separada
    function updateWidth() {
        slideWidth = container.getBoundingClientRect().width;
    }

    function updateSliderPosition() {
        requestAnimationFrame(() => {
            slider.style.transform =
                `translate3d(-${index * slideWidth}px,0,0)`;
        });
    }

    // INIT
    requestAnimationFrame(() => {

        updateWidth(); // ✔ primero medir

        slider.classList.add('is-ready');

        updateSliderPosition();

    });

    // AUTOPLAY
    const autoplay = setInterval(() => {

        index = (index + 1) % slides.length;

        updateSliderPosition();

    }, 5000);

    // RESIZE OPTIMIZADO (sin layout thrash)
    let resizeTimer;
    let ticking = false;

    window.addEventListener('resize', () => {

        clearTimeout(resizeTimer);

        resizeTimer = setTimeout(() => {

            if (ticking) return;

            ticking = true;

            requestAnimationFrame(() => {

                updateWidth();
                updateSliderPosition();

                ticking = false;
            });

        }, 120);
    });
}