// ==========================
// 🔥 CATALOG SLIDER
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

        let index = 0;

        const show = (i) => {
            images.forEach(el => el.classList.remove("active"));
            images[i].classList.add("active");
        };

        const next = () => {
            index = (index + 1) % images.length;
            show(index);
        };

        const prev = () => {
            index = (index - 1 + images.length) % images.length;
            show(index);
        };

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

        // swipe móvil
        let startX = 0;

        item.addEventListener("touchstart", (e) => {
            startX = e.touches[0].clientX;
        });

        item.addEventListener("touchend", (e) => {
            let endX = e.changedTouches[0].clientX;
            let diff = startX - endX;

            if (Math.abs(diff) < 50) return;

            diff > 0 ? next() : prev();
        });

        show(0);
    });

}

initCatalog();