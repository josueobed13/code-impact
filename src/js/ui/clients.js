function initClientsSlider() {

    const track = document.querySelector('.clients__track');
    if (!track) return;

    const isIPad = /iPad|Macintosh/.test(navigator.userAgent)
        && 'ontouchend' in document;

    track.style.willChange = 'transform';
    track.style.transform = 'translate3d(0,0,0)';

    const items = Array.from(track.children);

    // evitar duplicar varias veces si el script se reinicia
    if (!track.dataset.cloned) {

        items.forEach(item => {
            track.appendChild(item.cloneNode(true));
        });

        track.dataset.cloned = 'true';
    }

    let halfWidth = 0;
    let position = 0;

    function calculateWidth() {

        const previousHalf = halfWidth || 1;

        halfWidth = 0;

        items.forEach(item => {

            halfWidth += item.getBoundingClientRect().width;

        });

        // reajustar proporcionalmente la posición actual
        position = (position / previousHalf) * halfWidth;

        update();
    }

    calculateWidth();

    // resize optimizado
    let resizeTimer;

    window.addEventListener('resize', () => {

        clearTimeout(resizeTimer);

        resizeTimer = setTimeout(() => {

            calculateWidth();

        }, 150);

    }, { passive: true });

    // orientación móvil
    window.addEventListener('orientationchange', () => {

        setTimeout(() => {

            calculateWidth();

        }, 300);

    });

    // observer real del contenedor
    const resizeObserver = new ResizeObserver(() => {
        calculateWidth();
    });

    resizeObserver.observe(track);

    let speed = 0.3;
    let isPaused = false;
    let isDragging = false;

    let startX = 0;
    let currentX = 0;

    let rafId = null;
    let lastFrame = 0;

    function update() {

        if (Math.abs(position) >= halfWidth) {
            position = 0;
        }

        if (position > 0) {
            position = -halfWidth;
        }

        track.style.transform = `translate3d(${position}px,0,0)`;
    }

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

    function start() {

        // desactivar autoplay en iPad Safari
        if (isIPad) return;

        if (!rafId) {
            rafId = requestAnimationFrame(animate);
        }
    }

    function stop() {

        cancelAnimationFrame(rafId);

        rafId = null;
    }

    const observer = new IntersectionObserver((entries) => {

        const entry = entries[0];

        if (entry.isIntersecting) {
            start();
        } else {
            stop();
        }

    }, { threshold: 0.1 });

    observer.observe(track);

    let timeout;

    function pause() {

        isPaused = true;

        clearTimeout(timeout);

        timeout = setTimeout(() => {

            isPaused = false;

        }, 2500);
    }

    track.addEventListener('touchstart', (e) => {

        pause();

        isDragging = true;

        startX = e.touches[0].clientX;

        currentX = startX;

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

    track.addEventListener('click', pause);

    // fix render Safari iPad
    if (isIPad) {

        track.style.willChange = 'auto';

        track.style.transform = 'translateX(0)';
    }
}

function initClientsArrows() {

    const wrapper = document.querySelector('.clients__logos-wrapper');
    const leftBtn = document.querySelector('.clients__arrow--left');
    const rightBtn = document.querySelector('.clients__arrow--right');

    if (!wrapper || !leftBtn || !rightBtn) return;

    let scrollAmount = 0;

    function calculate() {

        scrollAmount = wrapper.clientWidth * 0.7;
    }

    calculate();

    let resizeTimer;

    window.addEventListener('resize', () => {

        clearTimeout(resizeTimer);

        resizeTimer = setTimeout(() => {

            calculate();

        }, 150);

    }, { passive: true });

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

window.addEventListener('load', () => {

    requestAnimationFrame(() => {

        requestAnimationFrame(() => {

            requestAnimationFrame(() => {

                initClientsSlider();
                initClientsArrows();

            });

        });

    });

});