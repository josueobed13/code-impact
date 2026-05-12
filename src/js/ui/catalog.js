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

        // Mantenemos el rastro del índice actual de forma local para cada item
        let currentIndex = 0;

        const show = (newIndex) => {
            // OPTIMIZACIÓN: En lugar de un forEach a todas, 
            // solo operamos sobre la activa y la nueva.
            images[currentIndex].classList.remove("active");
            images[newIndex].classList.add("active");
            currentIndex = newIndex;
        };

        const next = () => {
            let nextIndex = (currentIndex + 1) % images.length;
            show(nextIndex);
        };

        const prev = () => {
            let prevIndex = (currentIndex - 1 + images.length) % images.length;
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

        // swipe móvil
        let startX = 0;

        // Añadimos { passive: true } para que el scroll del navegador sea fluido
        item.addEventListener("touchstart", (e) => {
            startX = e.touches[0].clientX;
        }, { passive: true });

        item.addEventListener("touchend", (e) => {
            let endX = e.changedTouches[0].clientX;
            let diff = startX - endX;

            if (Math.abs(diff) < 50) return;

            diff > 0 ? next() : prev();
        }, { passive: true });

        // Inicialización: nos aseguramos de que el primero esté activo
        // sin necesidad de llamar a la lógica pesada.
        images[0].classList.add("active");
    });

}

initCatalog();
