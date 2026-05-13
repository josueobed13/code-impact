function initLotties() {

    // ==========================
    // 1. CARGA LOTTIE (SINGLE SOURCE)
    // ==========================
    function loadLottieScript() {

        return new Promise((resolve) => {

            if (window.lottie) return resolve();

            const script = document.createElement('script');
            script.src =
                'https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.12.2/lottie.min.js';
            script.async = true;

            script.onload = () => resolve();

            document.head.appendChild(script);
        });
    }

    // ==========================
    // 2. NAV LOTTIE (CRÍTICO + SWAP SVG)
    // ==========================
    async function initNavLottie() {

    const el = document.querySelector('.logo-lottie');
    const wrapper = document.querySelector('.header__logo');

    if (!el || el.dataset.loaded) return;

    el.dataset.loaded = "true";

    await loadLottieScript();

    const anim = window.lottie.loadAnimation({
        container: el,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: `${BASE_URL}build/animations/logo.json`
    });

    // 🔥 SOLO cuando la animación ya está lista
    anim.addEventListener('DOMLoaded', () => {
        wrapper?.classList.add('is-lottie-ready');
    });
}

    // ==========================
    // 3. ANIMACIONES LAZY (SECCIONES)
    // ==========================
    async function createAnimation(el) {

        if (el.dataset.loaded) return;
        el.dataset.loaded = "true";

        const name = el.dataset.animation;
        if (!name) return;

        el.innerHTML = '';

        await loadLottieScript();

        window.lottie.loadAnimation({
            container: el,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: `${BASE_URL}build/animations/${name}.json`
        });
    }

    // ==========================
    // 4. OBSERVER LAZY
    // ==========================
    function initLazyLotties() {

        const items = document.querySelectorAll('.lazy-lottie');
        if (!items.length) return;

        const observer = new IntersectionObserver((entries, obs) => {

            entries.forEach(async (entry) => {

                if (!entry.isIntersecting) return;

                await createAnimation(entry.target);
                obs.unobserve(entry.target);
            });

        }, {
            threshold: 0.25,
            rootMargin: '150px'
        });

        items.forEach(el => observer.observe(el));
    }

    // ==========================
    // 5. INIT PRINCIPAL
    // ==========================
    initNavLottie();
    initLazyLotties();
}


// ==========================
// 6. BOOTSTRAP
// ==========================
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLotties);
} else {
    initLotties();
}