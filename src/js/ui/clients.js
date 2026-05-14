function initClientsSlider() {

    const track = document.querySelector('.clients__track');
    if (!track) return;

    track.style.willChange = 'transform';
    track.style.transform = 'translate3d(0,0,0)';

    const items = Array.from(track.children);

    for (let i = 0; i < items.length; i++) {
        track.appendChild(items[i].cloneNode(true));
    }

    let halfWidth = 0;

    function calculateWidth() {
        halfWidth = track.scrollWidth / 2;
    }

    calculateWidth();

    window.addEventListener('resize', calculateWidth, { passive: true });

    let position = 0;
    let speed = 0.3;
    let paused = false;
    let dragging = false;

    let rafId = null;

    function render() {
        track.style.transform = `translate3d(${position}px,0,0)`;
    }

    function loop() {

        if (!paused && !dragging) {
            position -= speed;

            if (Math.abs(position) >= halfWidth) {
                position = 0;
            }

            render();
        }

        rafId = requestAnimationFrame(loop);
    }

    const observer = new IntersectionObserver(([entry]) => {

        if (entry.isIntersecting) {
            if (!rafId) rafId = requestAnimationFrame(loop);
        } else {
            cancelAnimationFrame(rafId);
            rafId = null;
        }

    }, { threshold: 0.1 });

    observer.observe(track);

    let timeout;

    function pause() {
        paused = true;
        clearTimeout(timeout);

        timeout = setTimeout(() => {
            paused = false;
        }, 2000);
    }

    let startX = 0;

    track.addEventListener('touchstart', (e) => {
        pause();
        dragging = true;
        startX = e.touches[0].clientX;
    }, { passive: true });

    track.addEventListener('touchend', (e) => {
        dragging = false;
        pause();
    }, { passive: true });

    track.addEventListener('click', pause);
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

    window.addEventListener('resize', calculate, { passive: true });

    leftBtn.addEventListener('click', () => {
        wrapper.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });

    rightBtn.addEventListener('click', () => {
        wrapper.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
}