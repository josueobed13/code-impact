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

    function initLogoLottie() {

        const el = document.querySelector('.logo-lottie');
        const wrapper = document.querySelector('.header__logo');
        const fallback = document.querySelector('.logo-fallback');

        if (!el || el.dataset.loaded === "true") return;

        loadLottieScript(() => {

            el.dataset.loaded = "true";

            el.innerHTML = '';

            const anim = window.lottie.loadAnimation({
                container: el,

                // CAMBIA SVG → CANVAS
                renderer: 'svg',

                loop: true,
                autoplay: true,
                path: BASE_URL + 'build/animations/logo.json'
            });

            anim.addEventListener('DOMLoaded', () => {

                wrapper?.classList.add('is-lottie-ready');

                if (fallback) {
                    fallback.style.opacity = '0';
                }

            });

        });
    }

    function lazyLoadLottie() {

        const logo = document.querySelector('.header__logo');

        if (!logo) return;

        const observer = new IntersectionObserver((entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    initLogoLottie();

                    observer.disconnect();
                }

            });

        }, {
            rootMargin: '150px'
        });

        observer.observe(logo);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', lazyLoadLottie);
    } else {
        lazyLoadLottie();
    }

})();