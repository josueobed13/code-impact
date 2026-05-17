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
    lightbox.addEventListener('click', (e) => {

        if (
            e.target.classList.contains('lightbox') ||
            e.target.classList.contains('lightbox__close')
        ) {

            lightbox.classList.remove('active');

        }

    });

}

// ==========================
// CLIENTS SLIDER
// ==========================
function initClientsSlider() {

    const track = document.querySelector('.clients__track');

    if (!track) return;

    // ==========================
    // DETECTAR iPAD / SAFARI
    // ==========================
    const isIPad =
        /iPad|Macintosh/.test(navigator.userAgent) &&
        'ontouchend' in document;

    // ==========================
    // TRACK BASE
    // ==========================
    track.style.transform = 'translateX(0)';

    track.style.pointerEvents = 'auto';

    const items = Array.from(track.children);

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

        // IMPORTANTE:
        // reinicializar lightbox
        // para clones
        initClientsLightbox();
    }

    // ==========================
    // MEDIDAS
    // ==========================
    let halfWidth = 0;

    let position = 0;

    function calculateWidth() {

        const previousHalf = halfWidth || 1;

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

    calculateWidth();

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

        }, 300);

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
    let speed = 0.3;

    let isPaused = false;

    let isDragging = false;

    let startX = 0;

    let currentX = 0;

    let rafId = null;

    let lastFrame = 0;

    // ==========================
    // UPDATE POSITION
    // ==========================
    function update() {

        // LOOP CONTINUO
        if (position <= -halfWidth) {

            position += halfWidth;
        }

        if (position > 0) {

            position -= halfWidth;
        }

        track.style.transform =
            `translateX(${position}px)`;
    }

    // ==========================
    // ANIMACIÓN
    // ==========================
    function animate(timestamp) {

        if (timestamp - lastFrame > 16) {

            if (!isPaused && !isDragging) {

                position -= speed;

                update();
            }

            lastFrame = timestamp;
        }

        rafId = requestAnimationFrame(animate);
    }

    // ==========================
    // START
    // ==========================
    function start() {

        // desactivar autoplay iPad
        if (isIPad) return;

        if (!rafId) {

            rafId =
                requestAnimationFrame(animate);
        }
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

        startX = e.touches[0].clientX;

        currentX = startX;

    }, { passive: true });

    // ==========================
    // TOUCH MOVE
    // ==========================
    track.addEventListener('touchmove', (e) => {

        if (!isDragging) return;

        const x = e.touches[0].clientX;

        const diff = x - currentX;

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
    track.addEventListener('pointerdown', pause, {
        passive: true
    });

    // ==========================
    // FIX iPAD
    // ==========================
    if (isIPad) {

        track.style.transform =
            'translateX(0)';
    }
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

        requestAnimationFrame(() => {

            requestAnimationFrame(() => {

                initClientsSlider();

                initClientsArrows();

                initClientsLightbox();

            });

        });

    });

});