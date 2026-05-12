// ==========================
// 🔥 CLIENTS SLIDER PRO (Optimizado)
// ==========================
function initClientsSlider() {

    const track = document.querySelector('.clients__track');

    if (!track) return;

    // ==========================
    // LEER ANTES DE ESCRIBIR
    // ==========================
    const totalWidth = track.scrollWidth;

    const items = [...track.children];

    // ==========================
    // DUPLICAR ITEMS
    // ==========================
    items.forEach(item => {

        track.appendChild(
            item.cloneNode(true)
        );

    });

    // ==========================
    // CONFIG
    // ==========================
    let speed = 0.3;

    let position = 0;

    let isPaused = false;

    let isDragging = false;

    let startX = 0;

    let currentX = 0;

    // ==========================
    // RAF
    // ==========================
    let rafId = null;

    // ==========================
    // ANIMATE
    // ==========================
    function animate() {

        if (!isPaused && !isDragging) {

            position -= speed;

            if (Math.abs(position) >= totalWidth) {

                position = 0;

            }

            if (position > 0) {

                position = -totalWidth;

            }

            track.style.transform =
                `translate3d(${position}px,0,0)`;

        }

        rafId = requestAnimationFrame(animate);

    }

    // ==========================
    // START ANIMATION
    // ==========================
    function startAnimation() {

        if (rafId) return;

        rafId =
            requestAnimationFrame(animate);

    }

    // ==========================
    // STOP ANIMATION
    // ==========================
    function stopAnimation() {

        cancelAnimationFrame(rafId);

        rafId = null;

    }

    // ==========================
    // OBSERVER
    // ==========================
    const observer = new IntersectionObserver((entries) => {

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
    // TOUCH START
    // ==========================
    track.addEventListener('touchstart', (e) => {

        pauseSlider();

        isDragging = true;

        startX =
            e.touches[0].clientX;

        currentX = startX;

    }, {
        passive: true
    });

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

    });

    // ==========================
    // CLICK
    // ==========================
    track.addEventListener(
        'click',
        pauseSlider
    );

}

// INICIAR
initClientsSlider();

// ==========================
// CLIENTS LOGOS SCROLL
// ==========================
function initClientsArrows() {

    const wrapper =
        document.querySelector(
            '.clients__logos-wrapper'
        );

    const leftBtn =
        document.querySelector(
            '.clients__arrow--left'
        );

    const rightBtn =
        document.querySelector(
            '.clients__arrow--right'
        );

    if (
        !wrapper ||
        !leftBtn ||
        !rightBtn
    ) return;

    // ==========================
    // GET SCROLL
    // ==========================
    function getScrollAmount() {

        return wrapper.clientWidth * 0.7;

    }

    // ==========================
    // LEFT
    // ==========================
    leftBtn.addEventListener('click', () => {

        wrapper.scrollBy({

            left: -getScrollAmount(),

            behavior: 'smooth'

        });

    });

    // ==========================
    // RIGHT
    // ==========================
    rightBtn.addEventListener('click', () => {

        wrapper.scrollBy({

            left: getScrollAmount(),

            behavior: 'smooth'

        });

    });

}

initClientsArrows();