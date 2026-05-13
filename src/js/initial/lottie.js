// ==========================
// 🔥 LOTTIE ULTRA OPTIMIZADO
// ==========================

function initLottie() {

    // ==========================
    // ELEMENTOS
    // ==========================
    const allLotties =
        document.querySelectorAll(
            '.logo-lottie, .lazy-lottie'
        );

    if (!allLotties.length) return;

    // ==========================
    // SCRIPT STATE
    // ==========================
    let lottieLoaded = false;

    let lottieLoading = false;

    // ==========================
    // LOAD LOTTIE SCRIPT
    // ==========================
    function loadLottieScript() {

        return new Promise((resolve) => {

            // ya cargado
            if (
                lottieLoaded &&
                window.lottie
            ) {

                resolve();

                return;

            }

            // evitar doble carga
            if (lottieLoading) {

                const check =
                    setInterval(() => {

                        if (
                            window.lottie
                        ) {

                            clearInterval(
                                check
                            );

                            resolve();

                        }

                    }, 100);

                return;

            }

            lottieLoading = true;

            const script =
                document.createElement(
                    'script'
                );

            script.src =
                'https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.12.2/lottie.min.js';

            script.async = true;

            script.onload = () => {

                lottieLoaded = true;

                resolve();

            };

            document.body.appendChild(
                script
            );

        });

    }

    // ==========================
    // CREATE ANIMATION
    // ==========================
    function createAnimation(
        element,
        index = 0
    ) {

        if (
            element.dataset.loaded
        ) return;

        element.dataset.loaded =
            'true';

        const name =
            element.dataset.animation;

        element.innerHTML = '';

        const animation =
            window.lottie.loadAnimation({

                name:
                    `lottie-${index}-${Date.now()}`,

                container:
                    element,

                renderer: 'svg',

                loop: true,

                autoplay: true,

                path:
                    `${BASE_URL}build/animations/${name}.json`

            });

        animation.setSpeed(0.5);

    }

    // ==========================
    // OBSERVER
    // ==========================
    const observer =
        new IntersectionObserver(
            async (entries) => {

                const visibleEntries =
                    entries.filter(
                        entry =>
                            entry.isIntersecting
                    );

                if (
                    !visibleEntries.length
                ) return;

                // ==========================
                // LOAD SCRIPT SOLO AQUÍ
                // ==========================
                await loadLottieScript();

                visibleEntries.forEach(
                    (entry, index) => {

                        createAnimation(
                            entry.target,
                            index
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }
                );

            },
            {
                threshold: 0.15
            }
        );

    // ==========================
    // OBSERVE
    // ==========================
    allLotties.forEach(item => {

        observer.observe(item);

    });

}

// ==========================
// INIT
// ==========================
document.addEventListener(
    'DOMContentLoaded',
    () => {

        requestAnimationFrame(() => {

            initLottie();

        });

    }
);