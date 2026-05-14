(function () {

    let lottieLoaded = false;

    function loadLottieScript(callback) {

        if (window.lottie) {
            callback();
            return;
        }

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

        const lazyItems = document.querySelectorAll('.lazy-lottie');

        if (!lazyItems.length) return;

        loadLottieScript(() => {

            const observer = new IntersectionObserver((entries, obs) => {

                entries.forEach(entry => {

                    if (!entry.isIntersecting) return;
                    if (entry.target.dataset.loaded) return;

                    entry.target.dataset.loaded = 'true';
                    entry.target.innerHTML = '';

                    const name = entry.target.dataset.animation;

                    window.lottie.loadAnimation({
                        name: `lottie-${name}-${Date.now()}`,
                        container: entry.target,
                        renderer: 'svg',
                        loop: true,
                        autoplay: true,
                        path: `${BASE_URL}build/animations/${name}.json`
                    });

                    obs.unobserve(entry.target);

                });

            }, {
                threshold: 0.15
            });

            lazyItems.forEach(item => observer.observe(item));

        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            requestAnimationFrame(initLottie);
        });
    } else {
        requestAnimationFrame(initLottie);
    }

})();