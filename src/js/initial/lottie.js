(function () {

    function initLogoLottie() {

        const el = document.querySelector('.logo-lottie');
        const wrapper = document.querySelector('.header__logo');
        const fallback = document.querySelector('.logo-fallback');

        if (!el || el.dataset.loaded === "true") return;
        if (!window.lottie) return;

        el.dataset.loaded = "true";

        el.innerHTML = '';

        const anim = window.lottie.loadAnimation({
            container: el,
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
    }

    // INIT SEGURO
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initLogoLottie);
    } else {
        initLogoLottie();
    }

    window.initLogoLottie = initLogoLottie;

})();