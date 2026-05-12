/**
 * APP.JS - OPTIMIZADO PARA FCP/LCP
 * Versión final unificada
 */

// ==========================================
// 1. MONITOR DE RENDIMIENTO (Performance)
// ==========================================
// Lo envolvemos en un pequeño retraso para que no compita con el primer pintado
setTimeout(() => {
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
}, 500);

// ==========================================
// 2. DOM CONTENT LOADED (Prioridad Alta)
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    
    // Funciones críticas que afectan la navegación o interacción inmediata
    if (typeof initFixedHeader === 'function') initFixedHeader();
    if (typeof initMailLinks === 'function') initMailLinks();
    
    // Si tienes un observador manual de LCP definido como función
    if (typeof initLCPObserver === 'function') initLCPObserver();
});

// ==========================================
// 3. WINDOW LOAD (Prioridad Media/Baja)
// ==========================================
window.addEventListener('load', () => {

    // A. CORE (Funcionalidades base tras la carga)
    if (typeof initCookies === 'function') initCookies();

    // B. LOTTIE (Cargamos el script de animaciones cuando el sitio ya es usable)
    if (typeof initLottie === 'function') {
        // requestIdleCallback da prioridad a la estabilidad del navegador
        if ('requestIdleCallback' in window) {
            requestIdleCallback(() => initLottie());
        } else {
            initLottie();
        }
    }

    // ==========================================
    // 🚀 OPTIMIZACIÓN FINAL: RETRASO ESTRATÉGICO
    // ==========================================
    // Subimos a 400ms para asegurar que el móvil terminó de renderizar el Hero
    setTimeout(() => {
        
        // UI PESADA: Elementos que requieren cálculos de dimensiones (Layout)
        if (typeof initClients === 'function') initClients();
        if (typeof initCatalog === 'function') initCatalog();

        // LÓGICA DE SECCIONES (HOME)
        if (typeof initServices === 'function') initServices();
        if (typeof initProcessMobile === 'function') initProcessMobile();
        if (typeof initPortfolioCounters === 'function') initPortfolioCounters();
        if (typeof initContactForm === 'function') initContactForm();
        
        // OTROS PLUGINS
        if (typeof initLightbox === 'function') initLightbox();
        
    }, 400); 

});
