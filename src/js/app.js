// =========================
// PERFORMANCE MONITOR (LCP)
// =========================
(function() {
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const latestEntry = entries[entries.length - 1];
            const element = latestEntry.element;

            if (element) {
                if (element.getAttribute('loading') === 'lazy') {
                    console.warn('⚠️ LCP Alert: loading="lazy" detectado.', element);
                }

                if (element.classList.contains('hero') || element.closest('.hero')) {
                    const time = latestEntry.startTime.toFixed(0);
                    const color = time < 2500 ? '🟢' : '🔴';
                    console.info(`${color} LCP detectado en .hero: ${time}ms`);
                }
            }
        });
        observer.observe({ type: 'largest-contentful-paint', buffered: true });
    }
})();

// NOTA: Se eliminan los 'import' de la parte superior para evitar el error 
// de "Unexpected token export" en tus archivos minificados .min.js

javascriptdocument.addEventListener('DOMContentLoaded', () => {
    // 1. INICIAR MONITOR DE LCP DE INMEDIATO
    if (typeof initLCPObserver === 'function') initLCPObserver();

    // 2. CRÍTICO
    if (typeof initFixedHeader === 'function') initFixedHeader();
    if (typeof initMailLinks === 'function') initMailLinks();
});

// =========================
// WINDOW LOAD
// =========================
window.addEventListener('load', () => {

    // 1. CORE (Prioridad 2)
    if (typeof initCookies === 'function') initCookies();

    // 2. UI LIGERA Y LOTTIE (Prioridad 3)
    // Cargamos Lottie aquí porque ya es lazy y no bloquea el diseño
    if (typeof initLottie === 'function') initLottie();

    // =========================
    // 🚀 OPTIMIZACIÓN: RETRASO ESTRATÉGICO
    // Retrasamos los sliders que calculan dimensiones (Layout) para 
    // eliminar el "Reprocesamiento forzado" y mejorar el LCP en móvil.
    // =========================
    setTimeout(() => {
        
        // UI PESADA (Sliders que piden offsetWidth/scrollWidth)
        if (typeof initClients === 'function') initClients();
        if (typeof initCatalog === 'function') initCatalog();

        // ELEMENTOS HOME
        if (typeof initServices === 'function') initServices();
        if (typeof initProcessMobile === 'function') initProcessMobile();
        if (typeof initPortfolioCounters === 'function') initPortfolioCounters();
        if (typeof initContactForm === 'function') initContactForm();
        
        // OTROS
        if (typeof initLightbox === 'function') initLightbox();
        
    }, 200); // 200ms libera el hilo principal para el renderizado inicial

});