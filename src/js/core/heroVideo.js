function initHeroSlider() {

    const slides = document.querySelector(".hero__slides");
    const slider = document.querySelector(".hero__slider");

    if (!slides || !slider) return;
    if (slides.dataset.loaded) return;

    slides.dataset.loaded = "true";

    const items = slides.querySelectorAll("picture");
    if (items.length <= 1) return;

    let index = 0;
    let width = slider.getBoundingClientRect().width;

    const update = () => {
        requestAnimationFrame(() => {
            slides.style.transform = `translate3d(-${index * width}px, 0, 0)`;
        });
    };

    const recalc = () => {
        width = slider.getBoundingClientRect().width;
    };

    recalc();
    slides.classList.add("is-ready");
    update();

    const interval = setInterval(() => {
        index = (index + 1) % items.length;
        update();
    }, 5000);

    window.addEventListener("resize", () => {
        clearTimeout(window._heroResize);

        window._heroResize = setTimeout(() => {
            recalc();
            update();
        }, 150);
    });

}