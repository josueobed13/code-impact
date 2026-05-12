// ==========================
// 🔥 LIGHTBOX
// ==========================
function initLightbox() {

    const images = document.querySelectorAll('.js-lightbox');

    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.querySelector('.lightbox__img');
    const closeBtn = document.querySelector('.lightbox__close');
    const prevBtn = document.querySelector('.lightbox__prev');
    const nextBtn = document.querySelector('.lightbox__next');

    if (!images.length || !lightbox || !lightboxImg) return;

    let group = [];
    let index = 0;

    const updateImage = () => {
        const img = group[index];
        if (!img) return;
        lightboxImg.src = img.currentSrc;
    };

    const next = () => {
        if (!group.length) return;
        index = (index + 1) % group.length;
        updateImage();
    };

    const prev = () => {
        if (!group.length) return;
        index = (index - 1 + group.length) % group.length;
        updateImage();
    };

    const open = (imgs, i) => {
        group = imgs;
        index = i;

        lightbox.classList.add('active');
        updateImage();

        // 🔥 mostrar flechas SOLO si hay más de 1 imagen
        if (group.length > 1) {
            prevBtn.style.display = 'block';
            nextBtn.style.display = 'block';
        } else {
            prevBtn.style.display = 'none';
            nextBtn.style.display = 'none';
        }
    };

    // =========================
    // CLICK EN IMÁGENES
    // =========================
    images.forEach(img => {

        img.style.cursor = 'zoom-in';

        img.addEventListener('click', (e) => {

            e.stopPropagation();

            const catalog = img.closest('.catalog-item');

            // =========================
            // 🔥 CASO CATALOGO
            // =========================
            if (catalog) {

                const imgs = Array.from(
                    catalog.querySelectorAll('.catalog-track picture img')
                );

                const activeImg =
                    catalog.querySelector('.catalog-track picture.active img');

                const startIndex = imgs.indexOf(activeImg || img);

                open(imgs, startIndex >= 0 ? startIndex : 0);

                return;
            }

            // =========================
            // 🔥 CASO NORMAL
            // =========================
            lightbox.classList.add('active');
            lightboxImg.src = img.currentSrc;

            prevBtn.style.display = 'none';
            nextBtn.style.display = 'none';
        });

    });

    // =========================
    // CERRAR
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

    // =========================
    // BOTONES
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
    // TECLADO
    // =========================
    document.addEventListener('keydown', (e) => {

        if (!lightbox.classList.contains('active')) return;

        if (e.key === 'Escape') close();

        if (group.length > 1) {
            if (e.key === 'ArrowRight') next();
            if (e.key === 'ArrowLeft') prev();
        }
    });

}

initLightbox();
