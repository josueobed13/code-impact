// ==========================
// PROMOS LIGHTBOX (INDEPENDIENTE)
// ==========================
function initPromosLightbox() {

    const images =
        document.querySelectorAll('.promos__item img');

    const lightbox =
        document.querySelector('.lightbox');

    const lightboxImg =
        document.querySelector('.lightbox__img');

    if (!images.length || !lightbox || !lightboxImg) return;

    images.forEach(img => {

        if (img.dataset.lightboxReady) return;

        img.dataset.lightboxReady = 'true';

        img.addEventListener('click', () => {

            lightboxImg.src = img.src;
            lightbox.classList.add('active');

        });

    });

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
// PROMOS SLIDER (VERSIÓN FINAL ESTABLE)
// ==========================
function initPromosSlider() {

    const track = document.querySelector('.promos__track');
    if (!track) return;

    const isIOS =
        /iPad|iPhone|iPod|Macintosh/.test(navigator.userAgent) &&
        'ontouchend' in document;

    track.style.transform = 'translate3d(0,0,0)';
    track.style.willChange = 'transform';

    let position = 0;
    let halfWidth = 0;

    let speed = 0.35;
    let isPaused = false;
    let isDragging = false;
    let currentX = 0;
    let rafId = null;

    // ==========================
    // CLONADO
    // ==========================
    if (!track.dataset.cloned) {

        const items = Array.from(track.children);

        items.forEach(item => {
            track.appendChild(item.cloneNode(true));
        });

        track.dataset.cloned = 'true';

        initPromosLightbox();
    }

    // ==========================
    // CALCULO CORRECTO
    // ==========================
    function calculateWidth() {

        halfWidth = track.scrollWidth / 2;

        update();
    }

    // ==========================
    // UPDATE LOOP
    // ==========================
    function update() {

        if (!halfWidth) return;

        position = position % halfWidth;

        if (position > 0) position -= halfWidth;

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

        rafId = requestAnimationFrame(animate);
    }

    function start() {
        if (rafId) return;
        rafId = requestAnimationFrame(animate);
    }

    function stop() {
        cancelAnimationFrame(rafId);
        rafId = null;
    }

    // ==========================
    // WAIT LAYOUT REAL (🔥 FIX IMPORTANTE)
    // ==========================
    function waitReady(callback) {

        requestAnimationFrame(() => {

            requestAnimationFrame(() => {

                callback();

            });

        });
    }

    // ==========================
    // INTERSECTION OBSERVER
    // ==========================
    const observer =
        new IntersectionObserver((entries) => {

            const entry = entries[0];

            if (entry.isIntersecting) start();
            else stop();

        }, { threshold: 0.1 });

    observer.observe(track);

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
    // TOUCH
    // ==========================
    track.addEventListener('touchstart', (e) => {

        isDragging = true;
        currentX = e.touches[0].clientX;

    }, { passive: true });

    track.addEventListener('touchmove', (e) => {

        if (!isDragging) return;

        const x = e.touches[0].clientX;
        const diff = x - currentX;

        position += diff;
        currentX = x;

        update();

    }, { passive: true });

    track.addEventListener('touchend', () => {

        isDragging = false;

        isPaused = true;

        setTimeout(() => {
            isPaused = false;
        }, 2000);

    });

    // ==========================
    // iOS FIX
    // ==========================
    if (isIOS) {
        track.style.webkitTransform = 'translate3d(0,0,0)';
        track.style.backfaceVisibility = 'hidden';
    }

    // ==========================
    // INIT (🔥 FIX REAL DEL PROBLEMA DE F12)
    // ==========================
    waitReady(() => {

        calculateWidth();
        start();

    });
}


// ==========================
// INIT GLOBAL
// ==========================
window.addEventListener('load', () => {

    requestAnimationFrame(() => {

        initPromosSlider();
        initPromosLightbox();

    });

});