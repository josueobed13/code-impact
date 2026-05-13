function initHeroSlider() {

    const slider = document.querySelector('.hero__slides');
    const container = document.querySelector('.hero__slider');

    if (!slider || !container) return;

    if (slider.dataset.loaded) return;
    slider.dataset.loaded = "true";

    const slides = Array.from(slider.querySelectorAll('picture'));

    if (slides.length <= 1) return; // 🔥 IMPORTANTE

    let index = 0;

    function goTo(i) {
        const width = container.clientWidth;
        slider.style.transform = `translate3d(-${i * width}px, 0, 0)`;
    }

    requestAnimationFrame(() => {
        slider.classList.add('is-ready');
        goTo(0);
    });

    setInterval(() => {
        index = (index + 1) % slides.length;
        goTo(index);
    }, 5000);

    window.addEventListener('resize', () => goTo(index));
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHeroSlider);
} else {
    initHeroSlider();
}