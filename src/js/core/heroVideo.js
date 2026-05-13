function initHeroSlider() {

    const slider = document.querySelector('.hero__slides');
    const container = document.querySelector('.hero__slider');

    if (!slider || !container) return;
    if (slider.dataset.loaded) return;

    slider.dataset.loaded = "true";

    const slidesData = [
        {
            avif: BASE_URL + 'build/img/header/desarollo-web.avif',
            webp: BASE_URL + 'build/img/header/desarollo-web.webp',
            jpg: BASE_URL + 'build/img/header/desarollo-web.jpg',
            alt: 'Desarrollo web'
        },
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

    function createSlides() {

        const fragment = document.createDocumentFragment();

        slidesData.forEach((slide, index) => {

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
                    fetchpriority="${index === 0 ? 'high' : 'low'}"
                    loading="${index === 0 ? 'eager' : 'lazy'}"
                >
            `;

            fragment.appendChild(picture);
        });

        slider.appendChild(fragment);
    }

    function start() {

        createSlides();

        const slides = slider.querySelectorAll('picture');
        const total = slides.length;

        let index = 0;

        function getWidth() {
            return container.clientWidth;
        }

        function goTo(i) {
            const width = getWidth();
            slider.style.transform = `translate3d(-${i * width}px,0,0)`;
        }

        // esperar layout real (CLAVE)
        requestAnimationFrame(() => {

            slider.classList.add('is-ready');

            goTo(0);

            setInterval(() => {
                index = (index + 1) % total;
                goTo(index);
            }, 5000);

        });

        window.addEventListener('resize', () => goTo(index));
    }

    start();
}

document.addEventListener('DOMContentLoaded', initHeroSlider);