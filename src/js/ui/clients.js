// ==========================
// 🔥 CLIENTS SLIDER PRO (Optimizado)
// ==========================
function initClientsSlider() {
    const track = document.querySelector('.clients__track');
    if (!track) return;

    // --- MEJORA DE RENDIMIENTO ---
    // 1. LEER: Medimos antes de modificar el DOM para evitar el "Layout Thrashing"
    const totalWidth = track.scrollWidth; 
    const items = [...track.children];

    // 2. ESCRIBIR: Duplicamos items después de haber leído las medidas
    items.forEach(item => {
        track.appendChild(item.cloneNode(true));
    });
    // -----------------------------

    let speed = 0.3;
    let position = 0;
    let isPaused = false;
    let isDragging = false;
    let startX = 0;
    let currentX = 0;

    function animate() {
        if (!isPaused && !isDragging) {
            position -= speed;

            if (Math.abs(position) >= totalWidth) {
                position = 0;
            }
            if (position > 0) {
                position = -totalWidth;
            }

            track.style.transform = `translate3d(${position}px,0,0)`;
        }
        requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);

    let timeout;
    function pauseSlider() {
        isPaused = true;
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            isPaused = false;
        }, 3000);
    }

    track.addEventListener('touchstart', (e) => {
        pauseSlider();
        isDragging = true;
        startX = e.touches[0].clientX;
        currentX = startX;
    }, { passive: true });

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

        track.style.transform = `translate3d(${position}px,0,0)`;
        currentX = x;
    }, { passive: true });

    track.addEventListener('touchend', () => {
        isDragging = false;
        pauseSlider();
    });

    track.addEventListener('click', pauseSlider);
}

// INICIAR
initClientsSlider();

// ==========================
// CLIENTS LOGOS SCROLL
// ==========================
function initClientsArrows() {
    const wrapper = document.querySelector('.clients__logos-wrapper');
    const leftBtn = document.querySelector('.clients__arrow--left');
    const rightBtn = document.querySelector('.clients__arrow--right');

    if (!wrapper || !leftBtn || !rightBtn) return;

    // Optimización: Solo leemos el ancho cuando el usuario hace clic
    function getScrollAmount() {
        return wrapper.clientWidth * 0.7;
    }

    leftBtn.addEventListener('click', () => {
        wrapper.scrollBy({
            left: -getScrollAmount(),
            behavior: 'smooth'
        });
    });

    rightBtn.addEventListener('click', () => {
        wrapper.scrollBy({
            left: getScrollAmount(),
            behavior: 'smooth'
        });
    });
}

initClientsArrows();
