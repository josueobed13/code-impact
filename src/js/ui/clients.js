// ==========================
// 🔥 CLIENTS SLIDER PRO
// ==========================
function initClientsSlider() {

    const track = document.querySelector('.clients__track');

    if (!track) return;

    let speed = 0.3;
    let position = 0;

    let isPaused = false;
    let isDragging = false;
    let isVisible = false;

    let startX = 0;
    let currentX = 0;

    const items = [...track.children];

    // duplicar items SOLO una vez
    if (!track.dataset.cloned) {

        items.forEach(item => {

            track.appendChild(item.cloneNode(true));

        });

        track.dataset.cloned = 'true';
    }

    // calcular una sola vez
    let totalWidth = track.scrollWidth / 2;

    // ==========================
    // RESIZE
    // ==========================
    let resizeTimeout;

    window.addEventListener('resize', () => {

        clearTimeout(resizeTimeout);

        resizeTimeout = setTimeout(() => {

            totalWidth = track.scrollWidth / 2;

        }, 200);

    });

    // ==========================
    // OBSERVER
    // ==========================
    const observer = new IntersectionObserver((entries) => {

        isVisible = entries[0].isIntersecting;

    }, {
        threshold: 0.1
    });

    observer.observe(track);

    // ==========================
    // ANIMATE
    // ==========================
    function animate() {

        if (
            isVisible &&
            !isPaused &&
            !isDragging
        ) {

            position -= speed;

            // loop
            if (Math.abs(position) >= totalWidth) {
                position = 0;
            }

            if (position > 0) {
                position = -totalWidth;
            }

            track.style.transform =
                `translate3d(${position}px,0,0)`;

        }

        requestAnimationFrame(animate);

    }

    animate();

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
    // TOUCH START
    // ==========================
    track.addEventListener('touchstart', (e) => {

        pauseSlider();

        isDragging = true;

        startX = e.touches[0].clientX;
        currentX = startX;

    }, {
        passive: true
    });

    // ==========================
    // TOUCH MOVE
    // ==========================
    track.addEventListener('touchmove', (e) => {

        if (!isDragging) return;

        const x = e.touches[0].clientX;

        const diff = x - currentX;

        position += diff;

        if (Math.abs(position) >= totalWidth) {
            position = 0;
        }

        if (position > 0) {
            position = -totalWidth;
        }

        track.style.transform =
            `translate3d(${position}px,0,0)`;

        currentX = x;

    }, {
        passive: true
    });

    // ==========================
    // TOUCH END
    // ==========================
    track.addEventListener('touchend', () => {

        isDragging = false;

        pauseSlider();

    }, {
        passive: true
    });

    // ==========================
    // CLICK
    // ==========================
    track.addEventListener('click', pauseSlider);

}

// iniciar
initClientsSlider();