// ==========================
// HERO SLIDER OPTIMIZADO
// ==========================
function initHeroSlider() {

    const slider =
        document.querySelector('.hero__slides');

    const container =
        document.querySelector('.hero__slider');

    // salir si no existe
    if (!slider || !container) return;

    // evitar múltiples inicializaciones
    if (slider.dataset.loaded) return;

    // ==========================
    // AHORRO DE RECURSOS
    // ==========================
    const connection =
        navigator.connection ||
        navigator.mozConnection ||
        navigator.webkitConnection;

    // si el usuario está en red lenta, reducir animación
    let intervalTime = 5000;

    if (
        connection &&
        (
            connection.saveData ||
            connection.effectiveType === '2g' ||
            connection.effectiveType === 'slow-2g'
        )
    ) {
        intervalTime = 8000; // más lento para ahorrar datos
    }

    // ==========================
    // SLIDER STATE
    // ==========================
    const slides =
        document.querySelectorAll('.hero__slides picture');

    let index = 0;
    let interval = null;

    function goToSlide(i) {

        slider.style.transform =
            `translateX(-${i * 100}%)`;
    }

    function nextSlide() {

        index++;

        if (index >= slides.length) {
            index = 0;
        }

        goToSlide(index);
    }

    function startAutoplay() {

        interval =
            setInterval(nextSlide, intervalTime);
    }

    function stopAutoplay() {

        if (interval) clearInterval(interval);
    }

    // ==========================
    // INTERSECTION OBSERVER
    // ==========================
    const observer =
        new IntersectionObserver((entries) => {

            const entry = entries[0];

            // si no está visible, no iniciar
            if (!entry.isIntersecting) return;

            // evitar doble init
            if (slider.dataset.loaded) return;

            slider.dataset.loaded = 'true';

            // iniciar autoplay cuando entra en pantalla
            startAutoplay();

            // opcional: pausar cuando sale
            observer.disconnect();

        }, {
            threshold: 0.2
        });

    observer.observe(container);

}

// ==========================
// INIT DESPUÉS DEL LOAD
// ==========================
window.addEventListener('load', () => {

    if ('requestIdleCallback' in window) {

        requestIdleCallback(() => {

            initHeroSlider();

        });

    } else {

        setTimeout(() => {

            initHeroSlider();

        }, 800);

    }

});