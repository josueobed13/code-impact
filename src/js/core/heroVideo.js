// ==========================
// HERO VIDEO OPTIMIZADO
// ==========================
function initHeroVideo() {

    const video =
        document.querySelector('.hero__video');

    // salir si no existe
    if (!video) return;

    // evitar múltiples cargas
    if (video.dataset.loaded) return;

    // ==========================
    // AHORRO DE DATOS
    // ==========================
    const connection =
        navigator.connection ||
        navigator.mozConnection ||
        navigator.webkitConnection;

    // evitar video en conexiones lentas
    if (
        connection &&
        (
            connection.saveData ||
            connection.effectiveType === '2g' ||
            connection.effectiveType === 'slow-2g'
        )
    ) {
        return;
    }

    // ==========================
    // POSTER RESPONSIVE
    // ==========================
    const poster =
        window.innerWidth < 768
            ? 'hero-mobil.avif'
            : 'hero.avif';

    video.poster =
        `${BASE_URL}build/img/hero/${poster}`;

    // ==========================
    // CONFIG
    // ==========================
    video.muted = true;
    video.loop = true;
    video.playsInline = true;

    // importante para Lighthouse
    video.preload = 'none';

    // compatibilidad iOS
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');

    // ==========================
    // OBSERVER
    // ==========================
    const observer =
        new IntersectionObserver((entries) => {

            const entry = entries[0];

            // salir si no entra
            if (!entry.isIntersecting) return;

            // evitar doble carga
            if (video.dataset.loaded) return;

            // marcar cargado
            video.dataset.loaded = 'true';

            // ==========================
            // SOURCE
            // ==========================
            const source =
                document.createElement('source');

            source.src =
                `${BASE_URL}build/video/hero-mobil.mp4`;

            source.type = 'video/mp4';

            // insertar source
            video.appendChild(source);

            // cargar video
            video.load();

            // reproducir
            requestAnimationFrame(() => {

                video.play().catch(() => {});

            });

            // detener observer
            observer.disconnect();

        }, {
            threshold: 0
        });

    // observar
    observer.observe(video);

}

// ==========================
// INIT DESPUÉS DEL LOAD
// ==========================
window.addEventListener('load', () => {

    // navegador moderno
    if ('requestIdleCallback' in window) {

        requestIdleCallback(() => {

            initHeroVideo();

        });

    }

    // fallback
    else {

        setTimeout(() => {

            initHeroVideo();

        }, 800);

    }

});