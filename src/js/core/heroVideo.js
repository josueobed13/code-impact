export function initHeroVideo() {

    const video = document.querySelector('.hero__video');

    if (!video) return;

    // =========================
    // MOBILE
    // =========================
    if (window.innerWidth <= 768) {

        video.removeAttribute('autoplay');
        video.pause();

        return;

    }

    // =========================
    // DESKTOP
    // =========================
    const observer = new IntersectionObserver((entries) => {

        const entry = entries[0];

        if (!entry.isIntersecting) return;

        // Intentar reproducir
        video.play().catch(() => {});

        observer.disconnect();

    }, {
        threshold: 0.4
    });

    observer.observe(video);

}