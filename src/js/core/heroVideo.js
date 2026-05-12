export function initHeroVideo() {

    const video = document.querySelector('.hero__video');

    if (!video) return;

    // =========================
    // CONFIGURACIÓN
    // =========================
    video.muted = true;
    video.playsInline = true;
    video.loop = true;
    video.preload = 'none';

    // =========================
    // CARGA DIFERIDA
    // =========================
    const observer = new IntersectionObserver((entries) => {

        const entry = entries[0];

        if (!entry.isIntersecting) return;

        // cargar video recién cuando aparece
        if (!video.src) {

            video.src =
                `${BASE_URL}build/video/hero-mobile.mp4`;

        }

        // reproducir
        video.play().catch(() => {});

        observer.disconnect();

    }, {
        threshold: 0.25
    });

    observer.observe(video);

}