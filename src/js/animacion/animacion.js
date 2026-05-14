(function () {

    let lottieScriptLoading = false;

    function loadLottieScript(callback) {

        // YA EXISTE
        if (window.lottie) {
            callback();
            return;
        }

        // EVITA DUPLICADOS
        if (lottieScriptLoading) return;

        lottieScriptLoading = true;

        const script = document.createElement('script');

        script.src =
            'https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.12.2/lottie.min.js';

        script.defer = true;

        script.onload = () => {
            callback();
        };

        document.body.appendChild(script);
    }

    function initLazyLotties() {

        const items = document.querySelectorAll('.lazy-lottie');

        if (!items.length) return;

        const observer = new IntersectionObserver((entries, obs) => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) return;

                const target = entry.target;

                if (target.dataset.loaded === "true") return;

                target.dataset.loaded = "true";

                loadLottieScript(() => {

                    target.innerHTML = '';

                    const name = target.dataset.animation;

                    window.lottie.loadAnimation({
                        container: target,

                        // MEJOR RENDIMIENTO
                        renderer: 'canvas',

                        loop: true,
                        autoplay: true,
                        path: BASE_URL + 'build/animations/' + name + '.json'
                    });

                });

                obs.unobserve(target);

            });

        }, {
            threshold: 0.15,
            rootMargin: '150px'
        });

        items.forEach(el => observer.observe(el));
    }

    // INIT SEGURO
    if (document.readyState === 'loading') {

        document.addEventListener('DOMContentLoaded', () => {
            requestAnimationFrame(initLazyLotties);
        });

    } else {

        requestAnimationFrame(initLazyLotties);

    }

    window.initLazyLotties = initLazyLotties;

})();