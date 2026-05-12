// ==========================
// 🔥 CLIENTS SLIDER PRO
// ==========================
function initClientsSlider() {

    const track = document.querySelector('.clients__track');
    if (!track) return;

    // --- OPTIMIZACIÓN PARA EVITAR REPROCESAMIENTO ---
    // Medimos el ancho original ANTES de duplicar los elementos.
    // Esto evita que el navegador tenga que recalcular el layout dos veces.
    const totalWidth = track.scrollWidth; 
    const items = [...track.children];

    // Duplicar items
    items.forEach(item => {
        track.appendChild(item.cloneNode(true));
    });
    // ------------------------------------------------

    let speed = 0.3;
    let position = 0;

    let isPaused = false;
    let isDragging = false;

    let startX = 0;
    let currentX = 0;

    // ==========================
    // AUTO SLIDE
    // ==========================
    function animate() {

        if (!isPaused && !isDragging) {

            position -= speed;

            // loop infinito (usamos totalWidth que medimos al inicio)
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

    animate();

    // ==========================
    // PAUSA
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

    }, { passive: true });

    // ==========================
    // TOUCH MOVE
    // ==========================
    track.addEventListener('touchmove', (e) => {

        if (!isDragging) return;

        const x = e.touches[0].clientX;

        const diff = x - currentX;

        position += diff;

        // mantener loop correcto
        if (Math.abs(position) >= totalWidth) {
            position = 0;
        }

        if (position > 0) {
            position = -totalWidth;
        }

        track.style.transform = `translate3d(${position}px,0,0)`;

        currentX = x;

    }, { passive: true });

    // ==========================
    // TOUCH END
    // ==========================
    track.addEventListener('touchend', () => {

        isDragging = false;

        pauseSlider();

    });

    // ==========================
    // CLICK PAUSE
    // ==========================
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

    // Optimización: calculamos el scroll en base al ancho actual
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
