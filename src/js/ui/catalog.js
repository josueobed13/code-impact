// ==========================
// 🔥 CATALOG SLIDER
// ==========================
function initCatalog() {

    const items = document.querySelectorAll('.catalog-item');

    if (!items.length) return;

    items.forEach((item) => {

        const track = item.querySelector('.catalog-track');

        const images =
            track ? track.querySelectorAll('picture') : [];

        const prevBtn =
            item.querySelector('.catalog-prev');

        const nextBtn =
            item.querySelector('.catalog-next');

        if (!images.length) return;

        let index = 0;

        // imagen activa
        let current = images[0];

        current.classList.add('active');

        // ==========================
        // SHOW
        // ==========================
        const show = (i) => {

            // salir si es la misma
            if (current === images[i]) return;

            // remover solo una
            current.classList.remove('active');

            // nueva activa
            current = images[i];

            // agregar solo una
            current.classList.add('active');

        };

        // ==========================
        // NEXT
        // ==========================
        const next = () => {

            index = (index + 1) % images.length;

            requestAnimationFrame(() => {

                show(index);

            });

        };

        // ==========================
        // PREV
        // ==========================
        const prev = () => {

            index =
                (index - 1 + images.length) % images.length;

            requestAnimationFrame(() => {

                show(index);

            });

        };

        // ==========================
        // BUTTONS
        // ==========================
        nextBtn?.addEventListener('click', (e) => {

            e.preventDefault();
            e.stopPropagation();

            next();

        });

        prevBtn?.addEventListener('click', (e) => {

            e.preventDefault();
            e.stopPropagation();

            prev();

        });

        // ==========================
        // SWIPE
        // ==========================
        let startX = 0;

        item.addEventListener('touchstart', (e) => {

            startX = e.touches[0].clientX;

        }, {
            passive: true
        });

        item.addEventListener('touchend', (e) => {

            const endX =
                e.changedTouches[0].clientX;

            const diff = startX - endX;

            if (Math.abs(diff) < 50) return;

            diff > 0 ? next() : prev();

        }, {
            passive: true
        });

    });

}

initCatalog();