/**
 * 🚀 máster Orquestador JS - CodeImpact
 * Maneja el rendimiento (LCP), evita Reflows y sincroniza módulos.
 */

// ==========================================
// 1. MONITOR DE RENDIMIENTO (LCP)
// ==========================================
(function() {
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const latestEntry = entries[entries.length - 1];
            if (latestEntry.element) {
                const time = latestEntry.startTime.toFixed(0);
                const color = time < 2500 ? '🟢' : '🔴';
                const device = window.innerWidth < 768 ? 'MÓVIL' : 'DESKTOP';
                console.info(`📊 LCP [${device}]: ${color} ${time}ms`);
            }
        });
        observer.observe({ type: 'largest-contentful-paint', buffered: true });
    }
})();

// ==========================================
// 2. DOM CONTENT LOADED (Interactividad inmediata)
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    // Funciones que no miden el DOM (No causan Reflow)
    if (typeof initFixedHeader === 'function') initFixedHeader();
    if (typeof initMailLinks === 'function') initMailLinks();
    if (typeof initMenu === 'function') initMenu();
});

// ==========================================
// 3. WINDOW LOAD (Carga pesada y visual)
// ==========================================
window.addEventListener('load', () => {
    
    // A. Prioridad de Red: Cookies y Lottie
    // Lanzamos Lottie rápido para que empiece a descargar la librería externa
    if (typeof initCookies === 'function') initCookies();
    if (typeof initLottie === 'function') initLottie();

    // B. 🚀 ELIMINAR REDISTRIBUCIÓN FORZADA (Técnica Double RAF)
    // Esperamos a que el navegador esté libre de tareas de renderizado
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            
            // 1. Módulos que miden offsetWidth / scrollWidth (Sliders)
            if (typeof initClients === 'function') initClients();
            if (typeof initCatalog === 'function') initCatalog();
            if (typeof initPortfolioCounters === 'function') initPortfolioCounters();

            // 2. Otros elementos de la UI
            if (typeof initServices === 'function') initServices();
            if (typeof initProcessMobile === 'function') initProcessMobile();
            if (typeof initContactForm === 'function') initContactForm();
            if (typeof initLightbox === 'function') initLightbox();
            
            console.log("⚡ UI y Sliders cargados correctamente sin Reflow.");
        });
    });
});
