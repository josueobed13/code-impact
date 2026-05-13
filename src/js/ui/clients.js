// ==========================
// 🔥 CLIENTS SLIDER PRO
// Optimizado para Lighthouse
// ==========================

function initClientsSlider() {

    const track =
        document.querySelector(
            '.clients__track'
        );

    if (!track) return;

    // ==========================
    // GPU HINT
    // ==========================
    track.style.willChange =
        'transform';

    track.style.transform =
        'translate3d(0,0,0)';

    // ==========================
    // DUPLICAR ITEMS
    // ==========================
    const items =
        [...track.children];

    items.forEach(item => {

        track.appendChild(
            item.cloneNode(true)
        );

    });

    // ==========================
    // LEER DESPUÉS DE ESCRIBIR
    // ==========================
    const totalWidth =
        track.scrollWidth / 2;

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

    let lastFrame = 0;

    // ==========================
    // UPDATE POSITION
    // ==========================
    function updatePosition() {

        if (Math.abs(position) >= totalWidth) {

            position = 0;

        }

        if (position > 0) {

            position = -totalWidth;

        }

        track.style.transform =
            `translate3d(${position}px,0,0)`;

    }

    // ==========================
    // ANIMATE
    // ==========================
    function animate(timestamp) {

        // limitar fps
        if (timestamp - lastFrame > 16) {

            if (
                !isPaused &&
                !isDragging
            ) {

                position -= speed;

                updatePosition();

            }

            lastFrame = timestamp;

        }

        rafId =
            requestAnimationFrame(
                animate
            );

    }

    // ==========================
    // START ANIMATION
    // ==========================
    function startAnimation() {

        if (rafId) return;

        rafId =
            requestAnimationFrame(
                animate
            );

    }

    // ==========================
    // STOP ANIMATION
    // ==========================
    function stopAnimation() {

        cancelAnimationFrame(
            rafId
        );

        rafId = null;

    }

    // ==========================
    // INTERSECTION OBSERVER
    // ==========================
    const observer =
        new IntersectionObserver(
            (entries) => {

                const entry =
                    entries[0];

                if (
                    entry.isIntersecting
                ) {

                    startAnimation();

                } else {

                    stopAnimation();

                }

            },
            {
                threshold: 0
            }
        );

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
    track.addEventListener(
        'touchstart',
        (e) => {

            pauseSlider();

            isDragging = true;

            startX =
                e.touches[0].clientX;

            currentX = startX;

        },
        {
            passive: true
        }
    );

    // ==========================
    // TOUCH MOVE
    // ==========================
    track.addEventListener(
        'touchmove',
        (e) => {

            if (!isDragging) return;

            const x =
                e.touches[0].clientX;

            const diff =
                x - currentX;

            position += diff;

            updatePosition();

            currentX = x;

        },
        {
            passive: true
        }
    );

    // ==========================
    // TOUCH END
    // ==========================
    track.addEventListener(
        'touchend',
        () => {

            isDragging = false;

            pauseSlider();

        }
    );

    // ==========================
    // CLICK
    // ==========================
    track.addEventListener(
        'click',
        pauseSlider
    );

}

// ==========================
// INIT
// ==========================
initClientsSlider();


// ==========================
// CLIENTS ARROWS
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
    // CACHE WIDTH
    // ==========================
    let scrollAmount = 0;

    function updateScrollAmount() {

        scrollAmount =
            wrapper.offsetWidth * 0.7;

    }

    updateScrollAmount();

    window.addEventListener(
        'resize',
        updateScrollAmount,
        {
            passive: true
        }
    );

    // ==========================
    // LEFT
    // ==========================
    leftBtn.addEventListener(
        'click',
        () => {

            wrapper.scrollBy({

                left: -scrollAmount,

                behavior: 'smooth'

            });

        }
    );

    // ==========================
    // RIGHT
    // ==========================
    rightBtn.addEventListener(
        'click',
        () => {

            wrapper.scrollBy({

                left: scrollAmount,

                behavior: 'smooth'

            });

        }
    );

}

// ==========================
// INIT
// ==========================
initClientsArrows();