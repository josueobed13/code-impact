(function () {

    let lottieLoaded = false;
    let lottieStarted = false;

    function loadLottieScript(callback) {

        // YA EXISTE
        if (window.lottie) {
            callback();
            return;
        }

        // EVITAR DUPLICADOS
        if (lottieLoaded) return;

        lottieLoaded = true;

        const script = document.createElement('script');

        script.src =
            'https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.12.2/lottie.min.js';

        script.defer = true;

        script.onload = callback;

        document.body.appendChild(script);
    }

    function initLottie() {

        // EVITAR DOBLE INIT
        if (lottieStarted) return;

        lottieStarted = true;

        const lazyItems =
            document.querySelectorAll('.lazy-lottie');

        if (!lazyItems.length) return;

        loadLottieScript(() => {

            const observer = new IntersectionObserver((entries, obs) => {

                entries.forEach(entry => {

                    // NO VISIBLE
                    if (!entry.isIntersecting) return;

                    // YA CARGADO
                    if (entry.target.dataset.loaded) return;

                    entry.target.dataset.loaded = 'true';

                    entry.target.innerHTML = '';

                    const name =
                        entry.target.dataset.animation;

                    window.lottie.loadAnimation({

                        name:
                            `lottie-${name}-${Date.now()}`,

                        container: entry.target,

                        renderer: 'svg',

                        loop: true,

                        autoplay: true,

                        path:
                            `${BASE_URL}build/animations/${name}.json`

                    });

                    obs.unobserve(entry.target);

                });

            }, {

                threshold: 0.15,
                rootMargin: '150px'

            });

            lazyItems.forEach(item => {

                observer.observe(item);

            });

        });
    }

    // SOLO INICIAR SI HAY SCROLL
    function startOnScroll() {

        window.removeEventListener(
            'scroll',
            startOnScroll
        );

        requestAnimationFrame(initLottie);
    }

    // ESPERAR SCROLL DEL USUARIO
    window.addEventListener(
        'scroll',
        startOnScroll,
        {
            passive: true,
            once: true
        }
    );

})();