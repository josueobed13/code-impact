// ==========================
// 🔥 CATALOG SLIDER (Optimizado)
// ==========================

(function () {

    function initCatalog() {

        const items =
            document.querySelectorAll(
                ".catalog-item"
            );

        if (!items.length) return;

        items.forEach((item) => {

            const track =
                item.querySelector(
                    ".catalog-track"
                );

            const images =
                track
                    ? track.querySelectorAll(
                        "picture"
                    )
                    : [];

            const prevBtn =
                item.querySelector(
                    ".catalog-prev"
                );

            const nextBtn =
                item.querySelector(
                    ".catalog-next"
                );

            if (!images.length) return;

            let currentIndex = 0;

            // ==========================
            // SHOW
            // ==========================

            const show = (newIndex) => {

                if (
                    newIndex === currentIndex
                ) return;

                images[currentIndex]
                    .classList.remove(
                        "active"
                    );

                images[newIndex]
                    .classList.add(
                        "active"
                    );

                currentIndex = newIndex;
            };

            // ==========================
            // NEXT
            // ==========================

            const next = () => {

                const nextIndex =
                    (
                        currentIndex + 1
                    ) % images.length;

                show(nextIndex);
            };

            // ==========================
            // PREV
            // ==========================

            const prev = () => {

                const prevIndex =
                    (
                        currentIndex - 1
                        + images.length
                    ) % images.length;

                show(prevIndex);
            };

            // ==========================
            // BUTTONS
            // ==========================

            nextBtn?.addEventListener(
                "click",
                (e) => {

                    e.preventDefault();
                    e.stopPropagation();

                    next();
                }
            );

            prevBtn?.addEventListener(
                "click",
                (e) => {

                    e.preventDefault();
                    e.stopPropagation();

                    prev();
                }
            );

            // ==========================
            // SWIPE
            // ==========================

            let startX = 0;

            item.addEventListener(
                "touchstart",
                (e) => {

                    startX =
                        e.touches[0].clientX;

                },
                { passive: true }
            );

            item.addEventListener(
                "touchend",
                (e) => {

                    const endX =
                        e.changedTouches[0].clientX;

                    const diff =
                        startX - endX;

                    if (
                        Math.abs(diff) < 50
                    ) return;

                    diff > 0
                        ? next()
                        : prev();

                },
                { passive: true }
            );

            // ==========================
            // INIT
            // ==========================

            if (
                !images[0].classList.contains(
                    'active'
                )
            ) {

                images[0].classList.add(
                    "active"
                );
            }

        });
    }

    // ==========================
    // AUTO INIT
    // ==========================

    if (
        document.readyState === 'loading'
    ) {

        document.addEventListener(
            'DOMContentLoaded',
            initCatalog
        );

    } else {

        initCatalog();
    }

})();