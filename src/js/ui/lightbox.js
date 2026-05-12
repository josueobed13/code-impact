// ==========================
// 🔥 LIGHTBOX OPTIMIZADO
// ==========================
function initLightbox() {

    const images =
        document.querySelectorAll('.js-lightbox');

    const lightbox =
        document.getElementById('lightbox');

    const lightboxImg =
        document.querySelector('.lightbox__img');

    const closeBtn =
        document.querySelector('.lightbox__close');

    const prevBtn =
        document.querySelector('.lightbox__prev');

    const nextBtn =
        document.querySelector('.lightbox__next');

    if (
        !images.length ||
        !lightbox ||
        !lightboxImg
    ) return;

    let group = [];
    let index = 0;

    // =========================
    // UPDATE IMAGE
    // =========================
    const updateImage = () => {

        const img = group[index];

        if (!img) return;

        // preload
        const preload = new Image();

        preload.src = img.currentSrc || img.src;

        preload.onload = () => {

            requestAnimationFrame(() => {

                lightboxImg.src = preload.src;

            });

        };

    };

    // =========================
    // NEXT
    // =========================
    const next = () => {

        if (!group.length) return;

        index =
            (index + 1) % group.length;

        updateImage();

    };

    // =========================
    // PREV
    // =========================
    const prev = () => {

        if (!group.length) return;

        index =
            (index - 1 + group.length) % group.length;

        updateImage();

    };

    // =========================
    // OPEN
    // =========================
    const open = (imgs, i) => {

        group = imgs;
        index = i;

        requestAnimationFrame(() => {

            lightbox.classList.add('active');

        });

        updateImage();

        // mostrar flechas
        if (group.length > 1) {

            prevBtn?.classList.remove('hidden');
            nextBtn?.classList.remove('hidden');

        } else {

            prevBtn?.classList.add('hidden');
            nextBtn?.classList.add('hidden');

        }

    };

    // =========================
    // CLICK IMAGES
    // =========================
    images.forEach((img) => {

        img.style.cursor = 'zoom-in';

        img.addEventListener('click', (e) => {

            e.stopPropagation();

            const catalog =
                img.closest('.catalog-item');

            // =========================
            // CATALOGO
            // =========================
            if (catalog) {

                const imgs = Array.from(
                    catalog.querySelectorAll(
                        '.catalog-track picture img'
                    )
                );

                const activeImg =
                    catalog.querySelector(
                        '.catalog-track picture.active img'
                    );

                const startIndex =
                    imgs.indexOf(activeImg || img);

                open(
                    imgs,
                    startIndex >= 0
                        ? startIndex
                        : 0
                );

                return;

            }

            // =========================
            // NORMAL
            // =========================
            open([img], 0);

        }, {
            passive: true
        });

    });

    // =========================
    // CLOSE
    // =========================
    const close = () => {

        requestAnimationFrame(() => {

            lightbox.classList.remove('active');

        });

        lightboxImg.src = '';

        group = [];
        index = 0;

    };

    // =========================
    // CLOSE BUTTON
    // =========================
    closeBtn?.addEventListener('click', close);

    // =========================
    // BACKDROP
    // =========================
    lightbox.addEventListener('click', (e) => {

        if (e.target === lightbox) {

            close();

        }

    });

    // =========================
    // BUTTONS
    // =========================
    prevBtn?.addEventListener('click', (e) => {

        e.stopPropagation();

        prev();

    });

    nextBtn?.addEventListener('click', (e) => {

        e.stopPropagation();

        next();

    });

    // =========================
    // KEYBOARD
    // =========================
    document.addEventListener('keydown', (e) => {

        if (
            !lightbox.classList.contains('active')
        ) return;

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

// iniciar
initLightbox();