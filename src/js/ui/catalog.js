// ==========================
// 🔥 CATALOG SLIDER (FINAL CLEAN)
// ==========================
function initCatalog() {

    const items = document.querySelectorAll(".catalog-item");
    if (!items.length) return;

    // evita doble init global
    if (document.body.dataset.catalogInit) return;
    document.body.dataset.catalogInit = "true";

    items.forEach((item) => {

        const track = item.querySelector(".catalog-track");
        if (!track) return;

        const images = track.querySelectorAll("picture");
        if (!images.length) return;

        const prevBtn = item.querySelector(".catalog-prev");
        const nextBtn = item.querySelector(".catalog-next");

        let currentIndex = 0;
        let isAnimating = false;

        // =========================
        // CHANGE SLIDE (NO REFLOW)
        // =========================
        const show = (newIndex) => {

            if (newIndex === currentIndex) return;
            if (isAnimating) return;

            isAnimating = true;

            const prev = images[currentIndex];
            const next = images[newIndex];

            requestAnimationFrame(() => {

                prev.classList.remove("active");
                next.classList.add("active");

                currentIndex = newIndex;

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
        // SWIPE (SIMPLIFICADO)
        // =========================
        let startX = 0;

        item.addEventListener("touchstart", (e) => {
            startX = e.touches[0].clientX;
        }, { passive: true });

        item.addEventListener("touchend", (e) => {

            const endX = e.changedTouches[0].clientX;
            const diff = startX - endX;

            if (Math.abs(diff) < 50) return;

            diff > 0 ? next() : prev();

        }, { passive: true });

        // =========================
        // INIT FIRST STATE
        // =========================
        for (let i = 0; i < images.length; i++) {
            images[i].classList.remove("active");
        }

        images[0].classList.add("active");
    });
}

window.initClientsSlider = initClientsSlider;
window.initClientsArrows = initClientsArrows;