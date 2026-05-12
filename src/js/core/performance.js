function initLCPObserver() {
    if (!('PerformanceObserver' in window)) return;

    const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const latestEntry = entries[entries.length - 1];
        const element = latestEntry.element;

        if (element) {
            const time = latestEntry.startTime;
            const url = latestEntry.url || 'Sin URL (posiblemente texto)';
            const color = time < 2500 ? '🟢' : '🔴';
            const version = window.innerWidth < 768 ? 'MÓVIL' : 'DESKTOP';

            console.group('📊 Reporte LCP (Largest Contentful Paint)');
            console.info(`${color} Tiempo: ${time.toFixed(0)}ms`);
            console.info(`📱 Dispositivo: ${version}`);
            console.info(`🔗 Recurso: ${url}`);
            console.info(`🧩 Elemento:`, element);

            if (element.getAttribute('loading') === 'lazy') {
                console.warn('⚠️ ALERTA: El elemento LCP tiene loading="lazy". ¡Quítalo ya!');
            }

            if (time > 2500) {
                console.warn('🚀 SUGERENCIA: El tiempo es alto. Si el recurso es una imagen, revisa que el preload en el HTML tenga fetchpriority="high" y que el video no esté robando ancho de banda.');
            }
            console.groupEnd();
        }
    });

    observer.observe({ type: 'largest-contentful-paint', buffered: true });
}

// Iniciar observer
window.initLCPObserver = initLCPObserver;
document.addEventListener('DOMContentLoaded', window.initLCPObserver);
