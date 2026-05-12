// ==========================
// 🔥 LOTTIE OPTIMIZADO
// ==========================
async function initLottie() {
    const items = document.querySelectorAll('.lottie');
    if (!items.length) return;

    // ==========================
    // 1. CARGAR SCRIPT (Evitar duplicados)
    // ==========================
    // Verificamos si el script ya existe para no cargarlo 2 veces
    if (document.querySelector('script[src*="lottie"]')) return;

    const script = document.createElement('script');
    // Tip: Si descargas este archivo a tu servidor, el FCP mejorará más
    script.src = 'https://unpkg.com/lottie-web/build/player/lottie.min.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
        // ==========================
        // 2. LOGO DIRECTO
        // ==========================
        const logos = document.querySelectorAll('.logo-lottie');
        logos.forEach(item => {
            const name = item.dataset.animation;
            if(!name) return; // Seguridad

            lottie.loadAnimation({
                container: item,
                renderer: 'svg',
                loop: true,
                autoplay: true,
                path: `${BASE_URL}build/animations/${name}.json`
            });
        });

        // ==========================
        // 3. LAZY LOTTIES
        // ==========================
        const lazyItems = document.querySelectorAll('.lazy-lottie');
        if (!lazyItems.length) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.dataset.loaded) {
                    entry.target.dataset.loaded = 'true';
                    const name = entry.target.dataset.animation;

                    const animation = lottie.loadAnimation({
                        container: entry.target,
                        renderer: 'svg',
                        loop: true,
                        autoplay: true,
                        path: `${BASE_URL}build/animations/${name}.json`
                    });

                    animation.setSpeed(0.5);
                    // Una vez cargado, dejamos de observar este elemento
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        lazyItems.forEach(item => observer.observe(item));
    };
}

// IMPORTANTE: Elimina el "initLottie();" de aquí si ya lo estás 
// llamando desde tu app.js en el window.addEventListener('load')
