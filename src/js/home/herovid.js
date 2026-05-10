// ==========================
// HERO VIDEO OPTIMIZATION
// ==========================
function optimizeHeroVideo() {

    const video = document.querySelector('.hero__video');

    if (!video) return;

    video.play().catch(() => {});

}

optimizeHeroVideo();