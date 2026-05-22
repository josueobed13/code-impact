// ==========================
// LIGHTBOX
// ==========================
function initClientsLightbox() {

    const images =
        document.querySelectorAll('.clients__item img');

    const lightbox =
        document.querySelector('.lightbox');

    const lightboxImg =
        document.querySelector('.lightbox__img');

    if (!images.length || !lightbox || !lightboxImg) return;

    images.forEach(img => {

        // evitar listeners duplicados
        if (img.dataset.lightboxReady) return;

        img.dataset.lightboxReady = 'true';

        img.addEventListener('click', () => {

            lightboxImg.src = img.src;

            lightbox.classList.add('active');

        });

    });

    // cerrar lightbox
    if (!lightbox.dataset.listenerReady) {

        lightbox.dataset.listenerReady = 'true';

        lightbox.addEventListener('click', (e) => {

            if (
                e.target.classList.contains('lightbox') ||
                e.target.classList.contains('lightbox__close')
            ) {

                lightbox.classList.remove('active');

            }

        });

    }

}

// ==========================
// CLIENTS SLIDER
// ==========================
function initClientsSlider() {

    // CAMBIO IMPORTANTE:
    // ahora soporta múltiples sliders
    const tracks =
        document.querySelectorAll('.clients__track');

    if (!tracks.length) return;

    tracks.forEach(track => {

        // evitar doble inicialización
        if (track.dataset.sliderReady) return;

        track.dataset.sliderReady = 'true';

        // ==========================
        // DETECTAR iPAD / iOS
        // ==========================
        const isIOS =
            /iPad|iPhone|iPod|Macintosh/.test(navigator.userAgent) &&
            'ontouchend' in document;

        // ==========================
        // TRACK BASE
        // ==========================
        track.style.transform =
            'translate3d(0,0,0)';

        track.style.willChange =
            'transform';

        track.style.pointerEvents =
            'auto';

        // ==========================
        // ITEMS
        // ==========================
        const items =
            Array.from(track.children);

        // ==========================
        // EVITAR DUPLICAR CLONES
        // ==========================
        if (!track.dataset.cloned) {

            items.forEach(item => {

                track.appendChild(
                    item.cloneNode(true)
                );

            });

            track.dataset.cloned = 'true';

            // reinicializar lightbox
            initClientsLightbox();
        }

        // ==========================
        // MEDIDAS
        // ==========================
        let halfWidth = 0;

        let position = 0;

        function calculateWidth() {

            const previousHalf =
                halfWidth || 1;

            halfWidth = 0;

            items.forEach(item => {

                halfWidth +=
                    item.getBoundingClientRect().width;

            });

            // mantener proporción
            position =
                (position / previousHalf) * halfWidth;

            update();
        }

        // esperar imágenes cargadas
        function waitImages() {

            const imgs =
                track.querySelectorAll('img');

            let loaded = 0;

            if (!imgs.length) {

                calculateWidth();

                start();

                return;
            }

            imgs.forEach(img => {

                if (img.complete) {

                    loaded++;

                } else {

                    img.addEventListener('load', () => {

                        loaded++;

                        if (loaded === imgs.length) {

                            calculateWidth();

                            start();
                        }

                    });

                }

            });

            if (loaded === imgs.length) {

                calculateWidth();

                start();
            }
        }

        // ==========================
        // RESIZE
        // ==========================
        let resizeTimer;

        window.addEventListener('resize', () => {

            clearTimeout(resizeTimer);

            resizeTimer = setTimeout(() => {

                calculateWidth();

            }, 150);

        }, { passive: true });

        // ==========================
        // ORIENTATION
        // ==========================
        window.addEventListener('orientationchange', () => {

            setTimeout(() => {

                calculateWidth();

            }, 500);

        });

        // ==========================
        // RESIZE OBSERVER
        // ==========================
        const resizeObserver =
            new ResizeObserver(() => {

                calculateWidth();

            });

        resizeObserver.observe(track);

        // ==========================
        // CONFIG
        // ==========================
        let speed = 0.35;

        let isPaused = false;

        let isDragging = false;

        let currentX = 0;

        let rafId = null;

        // ==========================
        // UPDATE POSITION
        // ==========================
        function update() {

            if (!halfWidth) return;

            // LOOP CONTINUO
            if (position <= -halfWidth) {

                position += halfWidth;
            }

            if (position > 0) {

                position -= halfWidth;
            }

            track.style.transform =
                `translate3d(${position}px,0,0)`;
        }

        // ==========================
        // ANIMACIÓN
        // ==========================
        function animate() {

            if (!isPaused && !isDragging) {

                position -= speed;

                update();
            }

            rafId =
                requestAnimationFrame(animate);
        }

        // ==========================
        // START
        // ==========================
        function start() {

            if (rafId) return;

            rafId =
                requestAnimationFrame(animate);
        }

        // ==========================
        // STOP
        // ==========================
        function stop() {

            cancelAnimationFrame(rafId);

            rafId = null;
        }

        // ==========================
        // INTERSECTION OBSERVER
        // ==========================
        const observer =
            new IntersectionObserver((entries) => {

                const entry = entries[0];

                if (entry.isIntersecting) {

                    start();

                } else {

                    stop();
                }

            }, {
                threshold: 0.1
            });

        observer.observe(track);

        // ==========================
        // PAUSA
        // ==========================
        let timeout;

        function pause() {

            isPaused = true;

            clearTimeout(timeout);

            timeout = setTimeout(() => {

                isPaused = false;

            }, 2500);
        }

        // ==========================
        // TOUCH START
        // ==========================
        track.addEventListener('touchstart', (e) => {

            pause();

            isDragging = true;

            currentX =
                e.touches[0].clientX;

        }, { passive: true });

        // ==========================
        // TOUCH MOVE
        // ==========================
        track.addEventListener('touchmove', (e) => {

            if (!isDragging) return;

            const x =
                e.touches[0].clientX;

            const diff =
                x - currentX;

            position += diff;

            currentX = x;

            update();

        }, { passive: true });

        // ==========================
        // TOUCH END
        // ==========================
        track.addEventListener('touchend', () => {

            isDragging = false;

            pause();

        });

        // ==========================
        // POINTER DOWN
        // ==========================
        track.addEventListener('pointerdown', () => {

            pause();

        }, {
            passive: true
        });

        // ==========================
        // FIX iOS SAFARI
        // ==========================
        if (isIOS) {

            track.style.backfaceVisibility =
                'hidden';

            track.style.webkitBackfaceVisibility =
                'hidden';

            track.style.webkitTransform =
                'translate3d(0,0,0)';
        }

        // ==========================
        // INIT
        // ==========================
        waitImages();

    });

}

// ==========================
// FLECHAS LOGOS
// ==========================
function initClientsArrows() {

    const wrapper =
        document.querySelector('.clients__logos-wrapper');

    const leftBtn =
        document.querySelector('.clients__arrow--left');

    const rightBtn =
        document.querySelector('.clients__arrow--right');

    if (!wrapper || !leftBtn || !rightBtn) return;

    let scrollAmount = 0;

    function calculate() {

        scrollAmount =
            wrapper.clientWidth * 0.7;
    }

    calculate();

    // ==========================
    // RESIZE
    // ==========================
    let resizeTimer;

    window.addEventListener('resize', () => {

        clearTimeout(resizeTimer);

        resizeTimer = setTimeout(() => {

            calculate();

        }, 150);

    }, { passive: true });

    // ==========================
    // LEFT
    // ==========================
    leftBtn.addEventListener('click', () => {

        wrapper.scrollBy({

            left: -scrollAmount,
            behavior: 'smooth'
        });

    });

    // ==========================
    // RIGHT
    // ==========================
    rightBtn.addEventListener('click', () => {

        wrapper.scrollBy({

            left: scrollAmount,
            behavior: 'smooth'
        });

    });
}

// ==========================
// LOAD
// ==========================
window.addEventListener('load', () => {

    requestAnimationFrame(() => {

        initClientsSlider();

        initClientsArrows();

        initClientsLightbox();

    });

});