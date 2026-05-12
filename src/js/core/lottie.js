// ==========================
// 🔥 LOTTIE OPTIMIZADO
// ==========================
async function initLottie() {

    const items =
        document.querySelectorAll('.lottie');

    if (!items.length) return;

    // ==========================
    // CARGAR SCRIPT
    // ==========================
    const script =
        document.createElement('script');

    script.src =
        'https://unpkg.com/lottie-web/build/player/lottie.min.js';

    script.async = true;

    document.body.appendChild(script);

    script.onload = () => {

        // ==========================
        // LOGO DIRECTO
        // ==========================
        const logos =
            document.querySelectorAll('.logo-lottie');

        logos.forEach(item => {

            const name =
                item.dataset.animation;

            lottie.loadAnimation({

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

        const observer =
            new IntersectionObserver((entries) => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting &&
                        !entry.target.dataset.loaded
                    ) {

                        entry.target.dataset.loaded = 'true';

                        const name =
                            entry.target.dataset.animation;

                        const animation =
                            lottie.loadAnimation({

                                container: entry.target,

                                renderer: 'svg',

                                loop: true,
                                autoplay: true,

                                path:
                                    `${BASE_URL}build/animations/${name}.json`

                            });

                        animation.setSpeed(0.5);

                    }

                });

            }, {
                threshold: 0.15
            });

        lazyItems.forEach(item => {

            observer.observe(item);

        });

    };

}

initLottie();