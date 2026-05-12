// ==========================
// 🔥 CATALOG SLIDER (Optimizado)
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

        const show = (newIndex) => {
            // Verificamos que el índice realmente haya cambiado para evitar cálculos inútiles
            if (newIndex === currentIndex) return;

            images[currentIndex].classList.remove("active");
            images[newIndex].classList.add("active");
            currentIndex = newIndex;
        };

        const next = () => {
            const nextIndex = (currentIndex + 1) % images.length;
            show(nextIndex);
        };

        const prev = () => {
            const prevIndex = (currentIndex - 1 + images.length) % images.length;
            show(prevIndex);
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

        // Swipe móvil optimizado
        let startX = 0;

        item.addEventListener("touchstart", (e) => {
            startX = e.touches[0].clientX;
        }, { passive: true });

        item.addEventListener("touchend", (e) => {
            const endX = e.changedTouches[0].clientX;
            const diff = startX - endX;

            // Umbral de 50px para evitar disparos accidentales al hacer scroll vertical
            if (Math.abs(diff) < 50) return;

            diff > 0 ? next() : prev();
        }, { passive: true });

        // Inicialización segura: solo si no hay ya uno activo
        if (!images[0].classList.contains('active')) {
            images[0].classList.add("active");
        }
    });

}

initCatalog();
