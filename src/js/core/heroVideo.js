function initHeroSlider() {

    const slides = document.querySelector('.hero__slides');
    const slider = document.querySelector('.hero__slider');

    if (!slides || !slider) return;
    if (slides.dataset.loaded) return;

    slides.dataset.loaded = 'true';

    const items = slides.querySelectorAll('picture');

    if (items.length <= 1) return;

    let index = 0;
    let width = 0;
    let interval = null;

    function recalc() {

        width = slider.clientWidth;

        update();
    }

    function update() {

        slides.style.transform =
            `translate3d(-${index * width}px,0,0)`;
    }

    function start() {

        if (interval) clearInterval(interval);

        interval = setInterval(() => {

            index = (index + 1) % items.length;

            update();

        }, 5000);
    }

    // esperar a que las imágenes terminen de cargar
    const images = slides.querySelectorAll('img');

    Promise.all(
        [...images].map(img => {

            if (img.complete) return Promise.resolve();

            return new Promise(resolve => {

                img.onload = resolve;
                img.onerror = resolve;

            });

        })
    ).then(() => {

        requestAnimationFrame(() => {

            requestAnimationFrame(() => {

                recalc();

                slides.classList.add('is-ready');

                start();

            });

        });

    });

    let resizeTimer;

    window.addEventListener('resize', () => {

        clearTimeout(resizeTimer);

        resizeTimer = setTimeout(() => {

            recalc();

        }, 150);

    }, { passive: true });

    window.addEventListener('orientationchange', () => {

        setTimeout(() => {

            recalc();

        }, 300);

    });

    // observer del slider
    const observer = new ResizeObserver(() => {

        recalc();

    });

    observer.observe(slider);
}

/* =========================
   GLOBAL
========================= */

window.initHeroSlider = initHeroSlider;

/* =========================
   INIT
========================= */

window.addEventListener('load', () => {

    requestAnimationFrame(() => {

        requestAnimationFrame(() => {

            requestAnimationFrame(() => {

                window.initHeroSlider?.();

            });

        });

    });

});