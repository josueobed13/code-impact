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
                // 1. Detecta si el elemento tiene lazy loading (malo para LCP)
                if (element.getAttribute('loading') === 'lazy') {
                    console.warn('⚠️ LCP Alert: El elemento LCP tiene loading="lazy". Quítalo para mejorar la velocidad:', element);
                }

                // 2. Detecta si el LCP es tu sección .hero o algo dentro de ella
                if (element.classList.contains('hero') || element.closest('.hero')) {
                    const time = latestEntry.startTime.toFixed(0);
                    const color = time < 2500 ? '🟢' : '🔴';
                    console.info(`${color} LCP detectado en .hero: ${time}ms`);
                    
                    if (time > 2500) {
                        console.warn('Sugerencia: Revisa que el <link rel="preload"> en el header sea correcto.');
                    }
                }
            }
        });
        // buffered: true permite capturar el LCP aunque ocurra antes de cargar este JS
        observer.observe({ type: 'largest-contentful-paint', buffered: true });
    }
})();


import { initFixedHeader } from './core/fixedHeader.js';
import { initMailLinks } from './core/mail.js';






document.addEventListener('DOMContentLoaded', () => {

    // =========================
    // CRÍTICO
    // =========================
    initFixedHeader();
    initMailLinks();

});

// =========================
// WINDOW LOAD
// =========================
window.addEventListener('load', async () => {

    // =========================
    // HERO VIDEO
    // =========================


    // CORE
    const { initCookies } = await import('./core/cookies.js');

    // UI
    const { initLottie } = await import('./ui/lottie.js');
    const { initLightbox } = await import('./ui/lightbox.js');
    const { initClients } = await import('./ui/clients.js');
    const { initCatalog } = await import('./ui/catalog.js');

    // HOME
    const { initServices } = await import('./home/services.js');
    const { initProcessMobile } = await import('./home/process.js');
    const { initPortfolioCounters } = await import('./home/portfolio.js');
    const { initContactForm } = await import('./home/contact.js');

    // =========================
    // INIT
    // =========================


    initCookies();

    // UI PESADO
    initLottie();
    initLightbox();
    initClients();
    initCatalog();

    // HOME
    initServices();
    initProcessMobile();
    initPortfolioCounters();
    initContactForm();

});