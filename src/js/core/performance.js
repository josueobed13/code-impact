function initLCPObserver() {
    if (!('PerformanceObserver' in window)) return;

    const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const latestEntry = entries[entries.length - 1];
        const element = latestEntry.element;

        if (element) {
            // 1. Alerta de Lazy Loading (Crítico para LCP)
            if (element.getAttribute('loading') === 'lazy') {
                console.warn('⚠️ LCP Alert: El elemento LCP tiene loading="lazy". Quítalo para mejorar la velocidad:', element);
            }

            // 2. Monitoreo específico de la sección Hero
            if (element.classList.contains('hero') || element.closest('.hero')) {
                const time = latestEntry.startTime;
                const color = time < 2500 ? '🟢' : '🔴'; // Verde si es menos de 2.5s
                
                // Detectamos qué versión está viendo el usuario según el ancho de pantalla
                const version = window.innerWidth < 768 ? 'MÓVIL' : 'DESKTOP';

                console.info(`${color} LCP [${version}]: Fondo detectado en ${time.toFixed(0)}ms`);

                if (time > 2500) {
                    console.warn(`🚀 Sugerencia: El LCP en ${version} es lento. Verifica que la imagen pese menos de 50KB y el preload sea correcto.`);
                }
            }
        }
    });

    observer.observe({ type: 'largest-contentful-paint', buffered: true });
}

// Hacerla disponible globalmente para app.js
window.initLCPObserver = initLCPObserver;
