function initClientsSlider() {

    const track = document.querySelector('.clients__track');

    if (!track) return;

    track.style.willChange = 'transform';

    // =========================
    // DUPLICAR ITEMS
    // =========================

    const fragment = document.createDocumentFragment();

    [...track.children].forEach(item => {
        fragment.appendChild(item.cloneNode(true));
    });

    track.appendChild(fragment);

    // =========================
    // VARIABLES
    // =========================

    let halfWidth = track.scrollWidth / 2;
    let position = 0;

    let isPaused = false;
    let isDragging = false;

    let currentX = 0;

    let rafId = null;
    let timeout = null;

    // =========================
    // RECALCULAR WIDTH
    // =========================

    const calculateWidth = () => {
        halfWidth = track.scrollWidth / 2;
    };

    window.addEventListener('resize', calculateWidth, {
        passive: true
    });

    // =========================
    // UPDATE POSITION
    // =========================

    const update = () => {

        if (Math.abs(position) >= halfWidth) {
            position = 0;
        }

        if (position > 0) {
            position = -halfWidth;
        }

        track.style.transform = `translateX(${position}px)`;
    };

    // =========================
    // ANIMATION
    // =========================

    const animate = () => {

        if (!isPaused && !isDragging) {

            position -= 0.3;

            update();
        }

        rafId = requestAnimationFrame(animate);
    };

    const start = () => {

        if (!rafId) {
            rafId = requestAnimationFrame(animate);
        }
    };

    const stop = () => {

        cancelAnimationFrame(rafId);

        rafId = null;
    };

    // =========================
    // VISIBILITY
    // =========================

    const observer = new IntersectionObserver(([entry]) => {

        if (entry.isIntersecting) {
            start();
        } else {
            stop();
        }

    }, {
        threshold: 0.1
    });

    observer.observe(track);

    // =========================
    // PAUSE
    // =========================

    const pause = () => {

        isPaused = true;

        clearTimeout(timeout);

        timeout = setTimeout(() => {
            isPaused = false;
        }, 2500);
    };

    // =========================
    // TOUCH
    // =========================

    track.addEventListener('touchstart', e => {

        pause();

        isDragging = true;

        currentX = e.touches[0].clientX;

    }, {
        passive: true
    });

    track.addEventListener('touchmove', e => {

        if (!isDragging) return;

        const x = e.touches[0].clientX;

        position += x - currentX;

        currentX = x;

        update();

    }, {
        passive: true
    });

    track.addEventListener('touchend', () => {

        isDragging = false;

        pause();

    });

    track.addEventListener('click', pause);
}

// ========================================
// GENERIC HORIZONTAL SCROLLER
// ========================================

function initClientsArrows(root = document) {

    const wrapper = root.querySelector('.clients__logos-wrapper');

    const leftBtn = root.querySelector('.clients__arrow--left');

    const rightBtn = root.querySelector('.clients__arrow--right');

    if (!wrapper || !leftBtn || !rightBtn) return;

    let scrollAmount = wrapper.clientWidth * 0.7;

    const calculate = () => {
        scrollAmount = wrapper.clientWidth * 0.7;
    };

    window.addEventListener('resize', calculate, {
        passive: true
    });

    leftBtn.addEventListener('click', () => {

        wrapper.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });

    });

    rightBtn.addEventListener('click', () => {

        wrapper.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });

    });
}

// ========================================
// INIT
// ========================================

document.addEventListener('DOMContentLoaded', () => {

    // slider infinito
    if (document.querySelector('.clients__track')) {
        initClientsSlider();
    }

    // arrows reutilizables
    if (
        document.querySelector('.clients__logos-wrapper') &&
        document.querySelector('.clients__arrow--left') &&
        document.querySelector('.clients__arrow--right')
    ) {
        initClientsArrows();
    }

});