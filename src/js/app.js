
/**
 * 🚀 máster Orquestador JS - CodeImpact
 */

// ==========================================
// 1. MONITOR LCP
// ==========================================
(function () {

    if (!('PerformanceObserver' in window)) return;

    const observer = new PerformanceObserver((list) => {

        const entries = list.getEntries();
        const latest = entries[entries.length - 1];

        if (!latest?.element) return;

        const time = latest.startTime.toFixed(0);
        const color = time < 2500 ? '🟢' : '🔴';
        const device = window.innerWidth < 768 ? 'MÓVIL' : 'DESKTOP';

        console.info(`📊 LCP [${device}]: ${color} ${time}ms`);
    });

    observer.observe({ type: 'largest-contentful-paint', buffered: true });

})();


// ==========================================
// 2. DOM READY (ligero)
// ==========================================
document.addEventListener('DOMContentLoaded', () => {

    window.initFixedHeader?.();
    window.initMailLinks?.();
    window.initMenu?.();

});


// ==========================================
// 3. WINDOW LOAD (visual pesado)
// ==========================================
window.addEventListener('load', () => {

    // PRIORIDAD ALTA
    window.initCookies?.();

    // LOTTIES

    

    // UI PESADA
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            window.initCatalog?.();
            window.initPortfolioCounters?.();

            window.initServices?.();
            window.initProcessMobile?.();

            console.log("⚡ UI cargada sin reflow");
        });
    });

});