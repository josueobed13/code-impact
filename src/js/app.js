
import { initFixedHeader } from './core/fixedHeader.js';
import { initMailLinks } from './core/mail.js';
import { initHeroVideo } from './home/heroVideo.js';
import { initLottie } from './ui/lottie.js';


// =========================
// DOM READY (CRÍTICO - INMEDIATO)
// =========================
document.addEventListener('DOMContentLoaded', () => {

    console.log('🚀 DOM READY INIT');

    initFixedHeader();
    initMailLinks();
    initHeroVideo();
    initLottie();
});


// =========================
// LOAD (UI PESADA / ASYNC)
// =========================
window.addEventListener('load', async () => {

    try {

        console.log('⚡ LOAD INIT START');

        // =========================
        // CORE / SYSTEM
        // =========================
        const { initCookies } = await import('./core/cookies.js');

        // =========================
        // UI COMPONENTS
        // =========================
        const { initLightbox } = await import('./ui/lightbox.js');
        const { initClients } = await import('./ui/clients.js');
        const { initCatalog } = await import('./ui/catalog.js');

        // =========================
        // HOME FEATURES
        // =========================
        const { initServices } = await import('./home/services.js');
        const { initProcessMobile } = await import('./home/process.js');
        const { initContactForm } = await import('./home/contact.js');

        // =========================
        // PORTFOLIO COUNTERS (AQUÍ)
        // =========================
        const { initPortfolioCounters } = await import('./home/portfolio.js');

        // =========================
        // INIT EXECUTION
        // =========================
        initCookies();

        initLightbox();
        initClients();
        initCatalog();

        initServices();
        initProcessMobile();

        // 🔥 IMPORTANTE: después de todo el layout
        initPortfolioCounters();

        initContactForm();

        console.log('✅ LOAD INIT COMPLETE');

    } catch (error) {
        console.error('❌ IMPORT ERROR:', error);
    }

});