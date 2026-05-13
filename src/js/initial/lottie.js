function initLottie() {

    const allLotties =
        document.querySelectorAll('.logo-lottie, .lazy-lottie');

    if (!allLotties.length) return;

    let lottieLoaded = false;
    let lottieLoading = false;

    // ==========================
    // 1. CARGA DIFERIDA DEL SCRIPT
    // ==========================
    function loadLottieScript() {

        return new Promise((resolve) => {

            if (lottieLoaded && window.lottie) {
                resolve();
                return;
            }

            if (lottieLoading) {
                const check = setInterval(() => {
                    if (window.lottie) {
                        clearInterval(check);
                        resolve();
                    }
                }, 50);
                return;
            }

            lottieLoading = true;

            const script = document.createElement('script');
            script.src =
                'https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.12.2/lottie.min.js';
            script.async = true;

            script.onload = () => {
                lottieLoaded = true;
                resolve();
            };

            document.head.appendChild(script);
        });
    }

    // ==========================
    // 2. CREAR ANIMACIÓN
    // ==========================
    function createAnimation(el, index = 0) {

        if (el.dataset.loaded) return;
        el.dataset.loaded = 'true';

        const name = el.dataset.animation;

        el.innerHTML = '';

        const anim = window.lottie.loadAnimation({
            container: el,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: `${BASE_URL}build/animations/${name}.json`
        });

        anim.setSpeed(0.5);
    }

    // ==========================
    // 3. OBSERVER (OPTIMIZADO)
    // ==========================
    const observer = new IntersectionObserver(async (entries) => {

        const targets = entries.filter(e => e.isIntersecting);

        if (!targets.length) return;

        // 🔥 SOLO cargar si ya terminó render inicial
        await new Promise(r => setTimeout(r, 1200));

        await loadLottieScript();

        targets.forEach((entry, i) => {
            createAnimation(entry.target, i);
            observer.unobserve(entry.target);
        });

    }, {
        threshold: 0.25,
        rootMargin: '200px' // 🔥 precarga antes de entrar
    });

    // ==========================
    // 4. OBSERVAR
    // ==========================
    allLotties.forEach(el => observer.observe(el));
}

// ==========================
// INIT (MEJOR MOMENTO)
// ==========================
window.addEventListener('load', () => {
    requestIdleCallback(() => {
        initLottie();
    });
});