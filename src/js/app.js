// ==========================================
// 1. PERFORMANCE MONITOR (LCP) - Auto-ejecutable
// ==========================================
(function() {
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const latestEntry = entries[entries.length - 1];
            const element = latestEntry.element;

            if (element) {
                const time = latestEntry.startTime.toFixed(0);
                const url = latestEntry.url || 'Texto/Inline';
                const color = time < 2500 ? '🟢' : '🔴';
                const version = window.innerWidth < 768 ? 'MÓVIL' : 'DESKTOP';

                console.group(`📊 LCP Report [${version}]`);
                console.info(`${color} Tiempo: ${time}ms`);
                console.info(`🔗 Recurso: ${url}`);
                console.info(`🧩 Elemento:`, element);
                
                if (element.getAttribute('loading') === 'lazy') {
                    console.warn('⚠️ LCP Alert: El elemento LCP tiene loading="lazy".');
                }
                console.groupEnd();
            }
        });
        observer.observe({ type: 'largest-contentful-paint', buffered: true });
    }
})();

// ==========================================
// 2. DOM CONTENT LOADED (Interactividad Rápida)
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    // Iniciamos funciones que no afectan el layout inicial
    if (typeof initFixedHeader === 'function') initFixedHeader();
    if (typeof initMailLinks === 'function') initMailLinks();
    
    // Si tienes el observer como función externa, la llamamos (opcional si usas la de arriba)
    if (typeof initLCPObserver === 'function') initLCPObserver();
});

// ==========================================
// 3. WINDOW LOAD (Recursos Pesados)
// ==========================================
window.addEventListener('load', () => {
    // Prioridad Media
    if (typeof initCookies === 'function') initCookies();
    if (typeof initLottie === 'function') initLottie();

    // Prioridad Baja: Retraso para evitar el bloqueo del hilo principal (Main Thread)
    setTimeout(() => {
        // Sliders y UI pesada
        if (typeof initClients === 'function') initClients();
        if (typeof initCatalog === 'function') initCatalog();

        // Elementos Home y otros
        if (typeof initServices === 'function') initServices();
        if (typeof initProcessMobile === 'function') initProcessMobile();
        if (typeof initPortfolioCounters === 'function') initPortfolioCounters();
        if (typeof initContactForm === 'function') initContactForm();
        if (typeof initLightbox === 'function') initLightbox();
        
        console.log("🚀 Módulos pesados cargados con éxito.");
    }, 300); // Subido a 300ms para asegurar que el LCP ya se haya disparado
});
