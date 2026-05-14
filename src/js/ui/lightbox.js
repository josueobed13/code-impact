// ==========================
// 🔥 LIGHTBOX (OPTIMIZADO + CONSISTENTE)
// ==========================
function initLightbox() {

    const triggers = document.querySelectorAll('.js-lightbox');

    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.querySelector('.lightbox__img');
    const closeBtn = document.querySelector('.lightbox__close');
    const prevBtn = document.querySelector('.lightbox__prev');
    const nextBtn = document.querySelector('.lightbox__next');

    if (!triggers.length || !lightbox || !lightboxImg) return;

    // =========================
    // STATE GLOBAL
    // =========================
    let group = [];
    let index = 0;

    // =========================
    // UPDATE IMAGE
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

        prevBtn.style.display = hasMultiple ? 'block' : 'none';
        nextBtn.style.display = hasMultiple ? 'block' : 'none';
    };

    // =========================
    // CLICK HANDLER
    // =========================
    triggers.forEach(img => {

        img.style.cursor = 'zoom-in';

        img.addEventListener('click', (e) => {

            e.preventDefault();
            e.stopPropagation();

            const catalog = img.closest('.catalog-item');

            // =========================
            // CATALOGO (SLIDER INTERNO)
            // =========================
            if (catalog) {

                const imgs = Array.from(
                    catalog.querySelectorAll('.catalog-track picture img')
                );

                const active = catalog.querySelector(
                    '.catalog-track picture.active img'
                );

                const startIndex = Math.max(
                    imgs.indexOf(active),
                    0
                );

                open(imgs, startIndex);

                return;
            }

            // =========================
            // SIMPLE IMAGE
            // =========================
            open([img], 0);

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

        if (e.target === lightbox) {
            close();
        }

    });

    // =========================
    // BUTTONS
    // =========================
    nextBtn?.addEventListener('click', (e) => {

        e.stopPropagation();

        next();
    });

    prevBtn?.addEventListener('click', (e) => {

        e.stopPropagation();

        prev();
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

// ==========================
// INIT DIFERIDO (6 SEGUNDOS)
// SOLO PARA .clients
// O .service-catalog
// ==========================
setTimeout(() => {

    const hasClients = document.querySelector('.clients');
    const hasServiceCatalog = document.querySelector('.service-catalog');

    if (hasClients || hasServiceCatalog) {
        initLightbox();
    }

}, 4000);