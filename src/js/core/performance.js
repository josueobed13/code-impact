function initLCPObserver() {
    if (!('PerformanceObserver' in window)) return;

    const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const latestEntry = entries[entries.length - 1];
        const element = latestEntry.element;

        if (element) {
            if (element.getAttribute('loading') === 'lazy') {
                console.warn('⚠️ LCP Alert: Elemento con lazy-loading:', element);
            }
            if (element.classList.contains('hero')) {
                console.info(`ℹ️ LCP detectado: Fondo .hero en ${latestEntry.startTime.toFixed(0)}ms`);
            }
        }
    });
    observer.observe({ type: 'largest-contentful-paint', buffered: true });
}
