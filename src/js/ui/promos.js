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
// PROMOS SLIDER (INDEPENDIENTE)
// ==========================
function initPromosSlider() {

    const track = document.querySelector('.promos__track');
    if (!track) return;

    const isIOS =
        /iPad|iPhone|iPod|Macintosh/.test(navigator.userAgent) &&
        'ontouchend' in document;

    track.style.transform = 'translate3d(0,0,0)';
    track.style.willChange = 'transform';

    let items = Array.from(track.children);

    // ==========================
    // CLONADO (loop infinito)
    // ==========================
    if (!track.dataset.cloned) {

        items.forEach(item => {
            track.appendChild(item.cloneNode(true));
        });

        track.dataset.cloned = 'true';

        initPromosLightbox();
    }

    let halfWidth = 0;
    let position = 0;
    let speed = 0.35;
    let isPaused = false;
    let isDragging = false;
    let currentX = 0;
    let rafId = null;

    function calculateWidth() {

        const previousHalf = halfWidth || 1;
        halfWidth = 0;

        items = Array.from(track.children);

        items.forEach(item => {
            halfWidth += item.getBoundingClientRect().width;
        });

        position = (position / previousHalf) * halfWidth;

        update();
    }

    function update() {

        if (!halfWidth) return;

        if (position <= -halfWidth) position += halfWidth;
        if (position > 0) position -= halfWidth;

        track.style.transform =
            `translate3d(${position}px,0,0)`;
    }

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

    function pause() {

        isPaused = true;

        setTimeout(() => {
            isPaused = false;
        }, 2000);
    }

    // ==========================
    // TOUCH
    // ==========================
    track.addEventListener('touchstart', (e) => {

        pause();
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
        pause();
    });

    // ==========================
    // IOS FIX
    // ==========================
    if (isIOS) {
        track.style.webkitTransform = 'translate3d(0,0,0)';
    }

    // ==========================
    // RESIZE
    // ==========================
    window.addEventListener('resize', () => {
        calculateWidth();
    });

    // ==========================
    // INIT
    // ==========================
    calculateWidth();
    start();
}


// ==========================
// INIT GLOBAL
// ==========================
window.addEventListener('load', () => {

    initPromosSlider();
    initPromosLightbox();

});