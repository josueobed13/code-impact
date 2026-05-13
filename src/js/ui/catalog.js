// ==========================
// 🔥 CATALOG SLIDER (OPTIMIZADO FINAL)
// ==========================
function initCatalog() {

    const items = document.querySelectorAll(".catalog-item");
    if (!items.length) return;

    items.forEach((item) => {

        const track = item.querySelector(".catalog-track");
        const images = track ? track.querySelectorAll("picture") : [];

        const prevBtn = item.querySelector(".catalog-prev");
        const nextBtn = item.querySelector(".catalog-next");

        if (!images.length) return;

        let currentIndex = 0;
        let isAnimating = false;

        // =========================
        // CHANGE SLIDE (SAFE)
        // =========================
        const show = (newIndex) => {

            if (newIndex === currentIndex) return;
            if (isAnimating) return;

            isAnimating = true;

            const prev = images[currentIndex];
            const next = images[newIndex];

            // batch DOM updates
            requestAnimationFrame(() => {

                prev.classList.remove("active");
                next.classList.add("active");

                currentIndex = newIndex;

                // liberar lock después de frame
                requestAnimationFrame(() => {
                    isAnimating = false;
                });

            });
        };

        const next = () => {
            show((currentIndex + 1) % images.length);
        };

        const prev = () => {
            show((currentIndex - 1 + images.length) % images.length);
        };

        // =========================
        // BUTTONS
        // =========================
        nextBtn?.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            next();
        });

        prevBtn?.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            prev();
        });

        // =========================
        // SWIPE OPTIMIZADO
        // =========================
        let startX = 0;
        let moved = false;

        item.addEventListener("touchstart", (e) => {
            startX = e.touches[0].clientX;
            moved = false;
        }, { passive: true });

        item.addEventListener("touchmove", () => {
            moved = true;
        }, { passive: true });

        item.addEventListener("touchend", (e) => {

            if (!moved) return;

            const endX = e.changedTouches[0].clientX;
            const diff = startX - endX;

            if (Math.abs(diff) < 50) return;

            diff > 0 ? next() : prev();

        }, { passive: true });

        // =========================
        // INIT SAFE
        // =========================
        images.forEach(img => img.classList.remove("active"));
        images[0].classList.add("active");

    });
}

initCatalog();