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
    if (typeof initFixedHeader === 'function') initFixedHeader();
    if (typeof initMailLinks === 'function') initMailLinks();
});

// ==========================================
// 3. WINDOW LOAD (Adiós a la Redistribución Forzada)
// ==========================================
window.addEventListener('load', () => {
    // Prioridad Media: Cookies y Lottie (No disparan reflow)
    if (typeof initCookies === 'function') initCookies();
    if (typeof initLottie === 'function') initLottie();

    // 🚀 OPTIMIZACIÓN CRÍTICA: Esperamos a que el navegador esté libre
    // requestAnimationFrame asegura que el código corra justo antes del próximo repintado
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            
            // UI PESADA: Sliders que usan offsetWidth/scrollWidth
            // Al ejecutarlos aquí, el navegador ya conoce las dimensiones reales del DOM
            if (typeof initClients === 'function') initClients();
            if (typeof initCatalog === 'function') initCatalog();

            // Elementos de la Home y otros
            if (typeof initServices === 'function') initServices();
            if (typeof initProcessMobile === 'function') initProcessMobile();
            if (typeof initPortfolioCounters === 'function') initPortfolioCounters();
            if (typeof initContactForm === 'function') initContactForm();
            if (typeof initLightbox === 'function') initLightbox();
            
            console.log("⚡ Módulos iniciados sin bloquear el renderizado.");
        });
    });
});
