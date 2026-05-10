
async function initLottie() {

    const items = document.querySelectorAll('.lottie');

    if (!items.length) return;

    // cargar script SOLO si existe lottie en la página
    const script = document.createElement('script');

    script.src =
        'https://unpkg.com/lottie-web/build/player/lottie.min.js';

    script.async = true;

    document.body.appendChild(script);

    script.onload = () => {

        const observer = new IntersectionObserver((entries) => {

            entries.forEach(entry => {

                // cargar animación SOLO al verse
                if (entry.isIntersecting && !entry.target.__loaded) {

                    entry.target.__loaded = true;

                    const name =
                        entry.target.getAttribute('data-animation');

                    const path =
                        `${BASE_URL}build/animations/${name}.json`;

                    const animation = lottie.loadAnimation({
                        container: entry.target,
                        renderer: 'svg',
                        loop: true,
                        autoplay: true,
                        path: path
                    });

                    animation.setSpeed(0.5);
                }

            });

        }, {
            threshold: 0.2
        });

        items.forEach(item => observer.observe(item));

    };

}

initLottie();