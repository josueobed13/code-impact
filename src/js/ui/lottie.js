// ==========================
// 🔥 LOTTIE OPTIMIZADO PRO
// ==========================
function initLottie() {

    // ==========================
    // TODOS LOS LOTTIES
    // ==========================
    const items =
        document.querySelectorAll('.lottie');

    // salir si no existe
    if (!items.length) return;

    // ==========================
    // OBSERVER PRINCIPAL
    // ==========================
    const mainObserver =
        new IntersectionObserver((entries) => {

            const entry = entries[0];

            // salir si no es visible
            if (!entry.isIntersecting) return;

            // detener observer
            mainObserver.disconnect();

            // ==========================
            // SI YA EXISTE LOTTIE
            // ==========================
            if (window.lottie) {

                initAnimations();

                return;

            }

            // ==========================
            // CARGAR SCRIPT
            // ==========================
            const script =
                document.createElement('script');

            script.src =
                'https://unpkg.com/lottie-web/build/player/lottie.min.js';

            script.async = true;

            script.onload = () => {

                initAnimations();

            };

            document.body.appendChild(script);

        }, {
            threshold: 0
        });

    // observar primer lottie
    mainObserver.observe(items[0]);

    // ==========================
    // INIT ANIMATIONS
    // ==========================
    function initAnimations() {

        // ==========================
        // LOGOS
        // ==========================
        const logos =
            document.querySelectorAll('.logo-lottie');

        logos.forEach(item => {

            // evitar doble carga
            if (item.dataset.loaded) return;

            item.dataset.loaded = 'true';

            const name =
                item.dataset.animation;

            window.lottie.loadAnimation({

                container: item,

                renderer: 'svg',

                loop: true,

                autoplay: true,

                path:
                    `${BASE_URL}build/animations/${name}.json`

            });

        });

        // ==========================
        // LAZY LOTTIES
        // ==========================
        const lazyItems =
            document.querySelectorAll('.lazy-lottie');

        if (!lazyItems.length) return;

        // ==========================
        // OBSERVER
        // ==========================
        const observer =
            new IntersectionObserver((entries) => {

                entries.forEach(entry => {

                    // salir
                    if (
                        !entry.isIntersecting ||
                        entry.target.dataset.loaded
                    ) return;

                    // marcar
                    entry.target.dataset.loaded =
                        'true';

                    // nombre
                    const name =
                        entry.target.dataset.animation;

                    // ==========================
                    // LOAD
                    // ==========================
                    const animation =
                        window.lottie.loadAnimation({

                            container:
                                entry.target,

                            renderer: 'svg',

                            loop: true,

                            autoplay: true,

                            path:
                                `${BASE_URL}build/animations/${name}.json`

                        });

                    // velocidad
                    animation.setSpeed(0.5);

                });

            }, {
                threshold: 0.15
            });

        // ==========================
        // OBSERVE ITEMS
        // ==========================
        lazyItems.forEach(item => {

            observer.observe(item);

        });

    }

}

// iniciar
document.addEventListener(
    'DOMContentLoaded',
    initLottie
);