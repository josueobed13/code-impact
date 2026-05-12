// ==========================
// 🔥 CLIENTS SLIDER PRO (Optimizado)
// ==========================
function initClientsSlider() {

    const track =
        document.querySelector('.clients__track');

    if (!track) return;

    // ==========================
    // DUPLICAR ITEMS (ANTES DE MEDIR)
    // ==========================
    const items =
        Array.from(track.children);

    items.forEach(item => {
        track.appendChild(item.cloneNode(true));
    });

    // ==========================
    // MEDIR DESPUÉS DE MUTAR DOM
    // ==========================
    const totalWidth =
        track.scrollWidth;

    // ==========================
    // CONFIG
    // ==========================
    let speed = 0.3;
    let position = 0;

    let isPaused = false;
    let isDragging = false;

    let startX = 0;
    let currentX = 0;

    let rafId = null;

    // cache (evita recalcular en loop)
    const resetPoint = totalWidth;

    // ==========================
    // ANIMATE (RAF OPTIMIZADO)
    // ==========================
    function animate() {

        if (!isPaused && !isDragging) {

            position -= speed;

            if (Math.abs(position) >= resetPoint) {
                position = 0;
            }

            if (position > 0) {
                position = -resetPoint;
            }

            track.style.transform =
                `translate3d(${position}px,0,0)`;
        }

        rafId =
            requestAnimationFrame(animate);
    }

    function startAnimation() {

        if (rafId) return;

        rafId =
            requestAnimationFrame(animate);
    }

    function stopAnimation() {

        cancelAnimationFrame(rafId);

        rafId = null;
    }

    // ==========================
    // OBSERVER
    // ==========================
    const observer =
        new IntersectionObserver((entries) => {

            const entry = entries[0];

            if (entry.isIntersecting) {
                startAnimation();
            } else {
                stopAnimation();
            }

        }, {
            threshold: 0
        });

    observer.observe(track);

    // ==========================
    // PAUSE
    // ==========================
    let timeout;

    function pauseSlider() {

        isPaused = true;

        clearTimeout(timeout);

        timeout = setTimeout(() => {
            isPaused = false;
        }, 3000);
    }

    // ==========================
    // TOUCH (THROTTLE FIX)
    // ==========================
    let lastMove = 0;

    track.addEventListener('touchstart', (e) => {

        pauseSlider();

        isDragging = true;

        startX = e.touches[0].clientX;
        currentX = startX;

    }, { passive: true });

    track.addEventListener('touchmove', (e) => {

        if (!isDragging) return;

        // throttle manual (evita reflow continuo)
        const now = performance.now();
        if (now - lastMove < 16) return; // ~60fps
        lastMove = now;

        const x = e.touches[0].clientX;
        const diff = x - currentX;

        position += diff;

        if (Math.abs(position) >= resetPoint) {
            position = 0;
        }

        if (position > 0) {
            position = -resetPoint;
        }

        track.style.transform =
            `translate3d(${position}px,0,0)`;

        currentX = x;

    }, { passive: true });

    track.addEventListener('touchend', () => {

        isDragging = false;
        pauseSlider();

    });

    track.addEventListener('click', pauseSlider);

}

// ==========================
// INIT
// ==========================
initClientsSlider();