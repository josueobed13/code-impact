function initLottie() {
    const items = document.querySelectorAll('.lottie');
    if (!items.length) return;

    const cargarScript = () => {
        if (window.lottie) return ejecutar();
        const s = document.createElement('script');
        s.src = 'https://cloudflare.com';
        s.async = true;
        s.onload = ejecutar;
        document.body.appendChild(s);
    };

    const ejecutar = () => {
        items.forEach(el => {
            if (el.dataset.loaded) return;
            const isLazy = el.classList.contains('lazy-lottie');
            
            const run = () => {
                el.dataset.loaded = 'true';
                const name = el.dataset.animation;
                
                // Intentamos cargar desde build, que es donde deberían estar tras el despliegue
                const baseUrl = (typeof BASE_URL !== 'undefined') ? BASE_URL : '/';
                const path = `${baseUrl}build/animations/${name}.json`.replace(/([^:]\/)\/+/g, "$1");

                lottie.loadAnimation({
                    container: el,
                    renderer: 'svg',
                    loop: true,
                    autoplay: true,
                    path: path
                });
            };

            if (!isLazy) {
                run();
            } else {
                const obs = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            run();
                            obs.disconnect();
                        }
                    });
                }, { rootMargin: '200px' });
                obs.observe(el);
            }
        });
    };

    cargarScript();
}
window.initLottie = initLottie;
