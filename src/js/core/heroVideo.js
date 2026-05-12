// ==========================
// HERO VIDEO
// ==========================
function initHeroVideo() {

    const video = document.querySelector('.hero__video');

    // salir si no existe
    if (!video) return;

    // evitar múltiples cargas
    if (video.dataset.loaded) return;

    // ==========================
    // CONFIGURACIÓN
    // ==========================
    video.muted = true;
    video.loop = true;
    video.autoplay = true;
    video.playsInline = true;
    video.preload = 'none';

    // compatibilidad iOS
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');
    video.setAttribute('autoplay', '');

    // ==========================
    // OBSERVER
    // ==========================
    const observer = new IntersectionObserver((entries) => {

        const entry = entries[0];

        // salir si no entra en viewport
        if (!entry.isIntersecting) return;

        // marcar cargado
        video.dataset.loaded = 'true';

        // crear source dinámicamente
        const source = document.createElement('source');

        source.src =
            `${BASE_URL}build/video/hero-mobil.mp4`;

        source.type = 'video/mp4';

        // insertar source
        video.appendChild(source);

        // cargar video
        video.load();

        // reproducir
        const playVideo = () => {

            setTimeout(() => {

                video.play().catch(() => {});

            }, 300);

        };

        // esperar disponibilidad
        video.addEventListener(
            'canplay',
            playVideo,
            { once: true }
        );

        // detener observer
        observer.disconnect();

    }, {
        threshold: 0.15
    });

    observer.observe(video);

}

// iniciar
document.addEventListener(
    'DOMContentLoaded',
    initHeroVideo
);