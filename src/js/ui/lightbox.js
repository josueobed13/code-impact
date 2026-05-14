function initLightbox() {

    const triggers = document.querySelectorAll('.js-lightbox');

    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.querySelector('.lightbox__img');
    const closeBtn = document.querySelector('.lightbox__close');
    const prevBtn = document.querySelector('.lightbox__prev');
    const nextBtn = document.querySelector('.lightbox__next');

    if (!triggers.length || !lightbox || !lightboxImg) return;

    let group = [];
    let index = 0;

    // =========================
    // UPDATE (solo WRITE DOM)
    // =========================
    const update = () => {
        const img = group[index];
        if (!img) return;
        lightboxImg.src = img.currentSrc || img.src;
    };

    // =========================
    // NAV
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
        if (prevBtn) prevBtn.style.display = hasMultiple ? 'block' : 'none';
        if (nextBtn) nextBtn.style.display = hasMultiple ? 'block' : 'none';
    };

    // =========================
    // CLICK HANDLER (SIN HEAVY DOM QUERIES)
    // =========================
    triggers.forEach(trigger => {

        trigger.style.cursor = 'zoom-in';

        trigger.addEventListener('click', (e) => {

            e.preventDefault();
            e.stopPropagation();

            const catalog = trigger.closest('.catalog-item');

            // =========================
            // CATALOGO
            // =========================
            if (catalog) {

                const imgs = catalog.querySelectorAll('.catalog-track picture img');

                const active = catalog.querySelector('.catalog-track picture.active img');

                let startIndex = 0;

                // evitar indexOf directo (menos costoso)
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
            // SIMPLE IMAGE
            // =========================
            open([trigger], 0);

        });
    });

    // =========================
    // CLOSE
    // =========================
    const close = () => {
        lightbox.classList.remove('active');
        lightboxImg.src = '';
        group = [];
        index = 0;
    };

    closeBtn?.addEventListener('click', close);

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) close();
    });

    nextBtn?.addEventListener('click', (e) => {
        e.stopPropagation();
        next();
    });

    prevBtn?.addEventListener('click', (e) => {
        e.stopPropagation();
        prev();
    });

    document.addEventListener('keydown', (e) => {

        if (!lightbox.classList.contains('active')) return;

        if (e.key === 'Escape') close();

        if (group.length > 1) {
            if (e.key === 'ArrowRight') next();
            if (e.key === 'ArrowLeft') prev();
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {

    const hasClients = document.querySelector('.clients');
    const hasServiceCatalog = document.querySelector('.service-catalog');

    if (hasClients || hasServiceCatalog) {
        initLightbox();
    }

});