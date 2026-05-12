// ==========================
// LOTTIE OPTIMIZADO
// ==========================
async function initLottie() {

    const items =
        document.querySelectorAll('.lottie');

    if (!items.length) return;

    // evitar cargar script varias veces
    if (window.lottie) {

        initAnimations();

        return;

    }

    // ==========================
    // LOAD SCRIPT
    // ==========================
    const script =
        document.createElement('script');

    script.src =
        'https://unpkg.com/lottie-web/build/player/lottie.min.js';

    script.async = true;

    script.defer = true;

    document.body.appendChild(script);

    script.onload = initAnimations;

    // ==========================
    // INIT
    // ==========================
    function initAnimations() {

        const observer =
            new IntersectionObserver((entries) => {

                entries.forEach((entry) => {

                    if (
                        !entry.isIntersecting ||
                        entry.target.dataset.loaded
                    ) return;
                    // pausar cuando sale
                    if (
                        !entry.isIntersecting &&
                        entry.target.__animation
                    ) {

                        entry.target.__animation.pause();

                    }

                    // reproducir cuando vuelve
                    if (
                        entry.isIntersecting &&
                        entry.target.__animation
                    ) {

                        entry.target.__animation.play();

                    }

                    // marcar cargado
                    entry.target.dataset.loaded = 'true';

                    const name =
                        entry.target.dataset.animation;

                    const path =
                        `${BASE_URL}build/animations/${name}.json`;

                    // cargar en frame libre
                    requestAnimationFrame(() => {

                        // crear animación
                        const animation = lottie.loadAnimation({

                            container: entry.target,

                            renderer: 'svg',

                            loop: true,

                            autoplay: true,

                            path: path

                        });

                        // guardar referencia
                        entry.target.__animation = animation;

                        // velocidad
                        animation.setSpeed(0.7);

                    });

                    // dejar de observar
                    observer.unobserve(entry.target);

                });

            }, {
                rootMargin: '120px',
                threshold: 0
            });

        items.forEach((item) => {

            observer.observe(item);

        });

    }

}

initLottie();