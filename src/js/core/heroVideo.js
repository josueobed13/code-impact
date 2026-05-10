function initHeroVideo() {

    const video = document.querySelector('.hero__video');
    if (!video) return;

    const mobile = window.innerWidth <= 768;

    const src = mobile
        ? `${BASE_URL}build/video/hero-mobil.mp4`
        : `${BASE_URL}build/video/hero-desktop.mp4`;

    video.innerHTML = `
        <source src="${src}" type="video/mp4">
    `;

    video.load();
}

window.addEventListener('DOMContentLoaded', initHeroVideo);
window.addEventListener('resize', initHeroVideo);