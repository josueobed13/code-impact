(function () {

    function initLazyLotties() {

        const items = document.querySelectorAll('.lazy-lottie');

        if (!items.length) return;
        if (!window.lottie) return;

        const observer = new IntersectionObserver((entries, obs) => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) return;
                if (entry.target.dataset.loaded) return;

                entry.target.dataset.loaded = "true";
                entry.target.innerHTML = '';

                const name = entry.target.dataset.animation;

                window.lottie.loadAnimation({
                    container: entry.target,
                    renderer: 'svg',
                    loop: true,
                    autoplay: true,
                    path: BASE_URL + 'build/animations/' + name + '.json'
                });

                obs.unobserve(entry.target);

            });

        }, {
            threshold: 0.15
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