// ==========================
// HERO SLIDER ULTRA OPTIMIZADO
// ==========================

function initHeroSlider() {

    // ==========================
    // ELEMENTOS
    // ==========================
    const slider =
        document.querySelector(
            '.hero__slides'
        );

    const container =
        document.querySelector(
            '.hero__slider'
        );

    // salir si no existe
    if (!slider || !container) return;

    // evitar doble init
    if (slider.dataset.loaded) return;

    slider.dataset.loaded = 'true';

    // ==========================
    // TODAS LAS SLIDES
    // ==========================
    const slidesData = [

        {
            avif:
                BASE_URL +
                'build/img/header/desarollo-web.avif',

            webp:
                BASE_URL +
                'build/img/header/desarollo-web.webp',

            jpg:
                BASE_URL +
                'build/img/header/desarollo-web.jpg',

            alt:
                'Desarrollo web',

            eager: true
        },

        {
            avif:
                BASE_URL +
                'build/img/header/produccion-marketing.avif',

            webp:
                BASE_URL +
                'build/img/header/produccion-marketing.webp',

            jpg:
                BASE_URL +
                'build/img/header/produccion-marketing.jpg',

            alt:
                'Producción y marketing'
        },

        {
            avif:
                BASE_URL +
                'build/img/header/codeimpact-web.avif',

            webp:
                BASE_URL +
                'build/img/header/codeimpact-web.webp',

            jpg:
                BASE_URL +
                'build/img/header/codeimpact-web.jpg',

            alt:
                'CodeImpact web'
        }

    ];

    // ==========================
    // CREAR SLIDES
    // ==========================
    function createSlides() {

        const fragment =
            document.createDocumentFragment();

        slidesData.forEach((slide, index) => {

            const picture =
                document.createElement(
                    'picture'
                );

            picture.innerHTML =

                '<source ' +
                    'srcset="' + slide.avif + '" ' +
                    'type="image/avif">' +

                '<source ' +
                    'srcset="' + slide.webp + '" ' +
                    'type="image/webp">' +

                '<img ' +
                    'src="' + slide.jpg + '" ' +
                    'alt="' + slide.alt + '" ' +
                    'loading="' +
                    (
                        slide.eager
                            ? 'eager'
                            : 'lazy'
                    ) +
                    '" ' +
                    'fetchpriority="' +
                    (
                        slide.eager
                            ? 'high'
                            : 'low'
                    ) +
                    '" ' +
                    'decoding="async" ' +
                    'width="1920" ' +
                    'height="1080">';

            fragment.appendChild(
                picture
            );

        });

        slider.appendChild(fragment);

    }

    // ==========================
    // START
    // ==========================
    function startSlider() {

        createSlides();

        requestAnimationFrame(() => {

            slider.classList.add(
                'is-ready'
            );

        });

        const slides =
            slider.querySelectorAll(
                'picture'
            );

        let index = 0;

        // ==========================
        // RED LENTA
        // ==========================
        const connection =
            navigator.connection ||
            navigator.mozConnection ||
            navigator.webkitConnection;

        let intervalTime = 5000;

        if (
            connection &&
            (
                connection.saveData ||
                connection.effectiveType === '2g' ||
                connection.effectiveType === 'slow-2g'
            )
        ) {

            intervalTime = 8000;

        }

        // ==========================
        // GO TO
        // ==========================
       function goToSlide(i) {

    const slideWidth =
        container.clientWidth;

    slider.style.transform =
        `translate3d(-${i * slideWidth}px,0,0)`;

}

        // ==========================
        // NEXT
        // ==========================
        function nextSlide() {

            index =
                (index + 1) %
                slides.length;

            goToSlide(index);

        }

        // ==========================
        // AUTOPLAY
        // ==========================
        setInterval(
            nextSlide,
            intervalTime
        );

    }

    // ==========================
    // IDLE LOAD
    // ==========================
    if ('requestIdleCallback' in window) {

        requestIdleCallback(
            startSlider
        );

    } else {

        setTimeout(
            startSlider,
            1200
        );

    }

}

// ==========================
// INIT
// ==========================
window.addEventListener(
    'load',
    () => {

        requestAnimationFrame(() => {

            initHeroSlider();

        });

    }
);