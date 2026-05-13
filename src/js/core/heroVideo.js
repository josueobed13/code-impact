// ==========================
// HERO SLIDER OPTIMIZADO (FIX DEFINITIVO)
// ==========================

function initHeroSlider() {

    const slider = document.querySelector('.hero__slides');
    const container = document.querySelector('.hero__slider');

    if (!slider || !container) return;

    if (slider.dataset.loaded) return;
    slider.dataset.loaded = 'true';

    const slidesData = [
    {
        avif: BASE_URL + 'build/img/header/produccion-marketing.avif',
        webp: BASE_URL + 'build/img/header/produccion-marketing.webp',
        jpg: BASE_URL + 'build/img/header/produccion-marketing.jpg',
        alt: 'Producción y marketing'
    },
    {
        avif: BASE_URL + 'build/img/header/codeimpact-web.avif',
        webp: BASE_URL + 'build/img/header/codeimpact-web.webp',
        jpg: BASE_URL + 'build/img/header/codeimpact-web.jpg',
        alt: 'CodeImpact web'
    }
];

    // ==========================
    // CREAR SLIDES
    // ==========================
    function createSlides() {

        const fragment = document.createDocumentFragment();

        slidesData.forEach((slide) => {

            const picture = document.createElement('picture');

            picture.innerHTML = `
                <source srcset="${slide.avif}" type="image/avif">
                <source srcset="${slide.webp}" type="image/webp">
                <img
                    src="${slide.jpg}"
                    alt="${slide.alt}"
                    width="1920"
                    height="1080"
                    decoding="async"
                    fetchpriority="${slide.eager ? 'high' : 'low'}"
                    loading="${slide.eager ? 'eager' : 'lazy'}"
                >
            `;

            fragment.appendChild(picture);
        });

        slider.appendChild(fragment);
    }

    // ==========================
    // SLIDER CORE
    // ==========================
    function startSlider() {

        createSlides();

        const slides = slider.querySelectorAll('picture');
        const totalSlides = slides.length;

        let index = 0;

        // 🔥 FIX CLAVE: usar width estable (NO getBoundingClientRect)
        function getSlideWidth() {
            return container.offsetWidth;
        }

        function goToSlide(i) {
            const width = getSlideWidth();

            slider.style.transform =
                `translate3d(-${i * width}px,0,0)`;
        }

        function nextSlide() {
            index = (index + 1) % totalSlides;
            goToSlide(index);
        }

        // activar transición después del primer frame
        requestAnimationFrame(() => {
            slider.classList.add('is-ready');
        });

        // autoplay
        const interval = setInterval(nextSlide, 5000);

        // mantener coherencia en resize
        window.addEventListener('resize', () => {
            goToSlide(index);
        });

        // posición inicial obligatoria
        goToSlide(0);
    }

    startSlider();
}

// ==========================
// INIT
// ==========================
document.addEventListener('DOMContentLoaded', () => {
    initHeroSlider();
});