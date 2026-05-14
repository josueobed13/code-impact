(function () {

    let started = false;

    function initLottieSystem() {

        if (started) return;

        started = true;

        const lazyItems = document.querySelectorAll('.lazy-lottie');

        if (!lazyItems.length) return;

        const script = document.createElement('script');

        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.12.2/lottie.min.js';

        script.onload = () => {

            const observer = new IntersectionObserver((entries, obs) => {

                entries.forEach(entry => {

                    if (!entry.isIntersecting) return;

                    if (entry.target.dataset.loaded) return;

                    entry.target.dataset.loaded = 'true';

                    const name = entry.target.dataset.animation;

                    window.lottie.loadAnimation({

                        container: entry.target,
                        renderer: 'svg',
                        loop: true,
                        autoplay: true,
                        path: `${BASE_URL}build/animations/${name}.json`

                    });

                    obs.unobserve(entry.target);

                });

            }, {
                threshold: 0.15,
                rootMargin: '200px'
            });

            lazyItems.forEach(item => observer.observe(item));
        };

        document.body.appendChild(script);
    }

    // =========================
    // INIT DIFERIDO (MEJORADO)
    // =========================
    setTimeout(() => {

        if (document.querySelector('.lazy-lottie')) {

            const trigger = () => initLottieSystem();

            window.addEventListener('scroll', trigger, { passive: true, once: true });
            window.addEventListener('touchstart', trigger, { passive: true, once: true });

        }

    }, 3000);

})();