function initLightbox() {

    const triggers = document.querySelectorAll('.js-lightbox');

    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.querySelector('.lightbox__img');

    if (!triggers.length || !lightbox || !lightboxImg) return;

    const closeBtn = lightbox.querySelector('.lightbox__close');
    const prevBtn = lightbox.querySelector('.lightbox__prev');
    const nextBtn = lightbox.querySelector('.lightbox__next');

    let group = [];
    let index = 0;

    // =========================
    // UPDATE
    // =========================

    const update = () => {

        const img = group[index];

        if (!img) return;

        lightboxImg.src = img.currentSrc || img.src;
    };

    // =========================
    // NAVIGATION
    // =========================

    const next = () => {

        if (group.length <= 1) return;

        index = (index + 1) % group.length;

        update();
    };

    const prev = () => {

        if (group.length <= 1) return;

        index = (index - 1 + group.length) % group.length;

        update();
    };

    // =========================
    // OPEN
    // =========================

    const open = (imgs, startIndex = 0) => {

        group = imgs;
        index = startIndex;

        lightbox.classList.add('active');

        update();

        const hasMultiple = group.length > 1;

        if (prevBtn) {
            prevBtn.style.display = hasMultiple ? 'block' : 'none';
        }

        if (nextBtn) {
            nextBtn.style.display = hasMultiple ? 'block' : 'none';
        }
    };

    // =========================
    // CLOSE
    // =========================

    const close = () => {

        lightbox.classList.remove('active');

        lightboxImg.src = '';

        group = [];
        index = 0;
    };

    // =========================
    // GLOBAL CLICK DELEGATION
    // =========================

    document.addEventListener('click', (e) => {

        const trigger = e.target.closest('.js-lightbox');

        if (!trigger) return;

        e.preventDefault();
        e.stopPropagation();

        // cursor reusable
        trigger.style.cursor = 'zoom-in';

        const catalog = trigger.closest('.catalog-item');

        // =========================
        // CATALOG GROUP
        // =========================

        if (catalog) {

            const imgs = catalog.querySelectorAll(
                '.catalog-track picture img'
            );

            const active = catalog.querySelector(
                '.catalog-track picture.active img'
            );

            let startIndex = 0;

            if (active) {

                for (let i = 0; i < imgs.length; i++) {

                    if (imgs[i] === active) {

                        startIndex = i;

                        break;
                    }
                }
            }

            open(imgs, startIndex);

            return;
        }

        // =========================
        // SINGLE IMAGE
        // =========================

        open([trigger], 0);

    });

    // =========================
    // BUTTONS
    // =========================

    closeBtn?.addEventListener('click', close);

    nextBtn?.addEventListener('click', (e) => {

        e.stopPropagation();

        next();
    });

    prevBtn?.addEventListener('click', (e) => {

        e.stopPropagation();

        prev();
    });

    // =========================
    // BACKDROP CLOSE
    // =========================

    lightbox.addEventListener('click', (e) => {

        if (e.target === lightbox) {

            close();
        }
    });

    // =========================
    // KEYBOARD
    // =========================

    document.addEventListener('keydown', (e) => {

        if (!lightbox.classList.contains('active')) return;

        if (e.key === 'Escape') {
            close();
        }

        if (group.length > 1) {

            if (e.key === 'ArrowRight') {
                next();
            }

            if (e.key === 'ArrowLeft') {
                prev();
            }
        }
    });
}

// =========================
// INIT
// =========================

document.addEventListener('DOMContentLoaded', initLightbox);