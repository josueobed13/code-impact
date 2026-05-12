// ==========================
// 🔥 LOTTIE OPTIMIZADO
// ==========================
function initLottie() {

    // ==========================
    // ELEMENTOS
    // ==========================
    const logos =
        document.querySelectorAll('.logo-lottie');

    const lazyItems =
        document.querySelectorAll('.lazy-lottie');

    // salir si no existe nada
    if (!logos.length && !lazyItems.length) return;

    // ==========================
    // CARGAR SCRIPT
    // ==========================
    const script =
        document.createElement('script');

    script.src =
       'https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.12.2/lottie.min.js';

    script.async = true;

    // ==========================
    // ON LOAD
    // ==========================
    script.onload = () => {

        // ==========================
        // LOGOS
        // ==========================
        logos.forEach((item, index) => {

            const name =
                item.dataset.animation;

            // limpiar contenedor
            item.innerHTML = '';

            // cargar animación
            window.lottie.loadAnimation({

                // nombre único
                name:
                    `logo-${index}-${Date.now()}`,

                container:
                    item,

                renderer: 'svg',

                loop: true,

                autoplay: true,

                path:
                    `${BASE_URL}build/animations/${name}.json`

            });

        });

        // ==========================
        // salir si no hay lazy
        // ==========================
        if (!lazyItems.length) return;

        // ==========================
        // OBSERVER
        // ==========================
        const observer =
            new IntersectionObserver((entries) => {

                entries.forEach(entry => {

                    // salir
                    if (
                        !entry.isIntersecting ||
                        entry.target.dataset.loaded
                    ) return;

                    // marcar cargado
                    entry.target.dataset.loaded =
                        'true';

                    // nombre
                    const name =
                        entry.target.dataset.animation;

                    // limpiar contenedor
                    entry.target.innerHTML = '';

                    // ==========================
                    // LOAD
                    // ==========================
                    const animation =
                        window.lottie.loadAnimation({

                            // nombre único
                            name:
                                `lottie-${name}-${Date.now()}`,

                            container:
                                entry.target,

                            renderer: 'svg',

                            loop: true,

                            autoplay: true,

                            path:
                                `${BASE_URL}build/animations/${name}.json`

                        });

                    // velocidad
                    animation.setSpeed(0.5);

                    // dejar observar
                    observer.unobserve(entry.target);

                });

            }, {
                threshold: 0.15
            });

        // ==========================
        // OBSERVE
        // ==========================
        lazyItems.forEach(item => {

            observer.observe(item);

        });

    };

    // ==========================
    // APPEND SCRIPT
    // ==========================
    document.body.appendChild(script);

}

// iniciar
// Única mejora sugerida sobre tu código funcional
document.addEventListener('DOMContentLoaded', () => {
    requestAnimationFrame(() => {
        initLottie();
    });
});
