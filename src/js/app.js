
import { initFixedHeader } from './core/fixedHeader.js';
import { initMailLinks } from './core/mail.js';
import { initHeroVideo } from './home/heroVideo.js';

// =========================
// DOM READY
// =========================
document.addEventListener('DOMContentLoaded', () => {

    // =========================
    // CRÍTICO
    // =========================
    initFixedHeader();
    initMailLinks();

    // =========================
    // HERO VIDEO
    // =========================
    initHeroVideo();
});

// =========================
// DIFERIDO
// =========================
window.addEventListener('load', async () => {

    try {

        // =========================
        // CORE
        // =========================
        const { initCookies } = await import('./core/cookies.js');

        // =========================
        // UI
        // =========================
        const { initLightbox } = await import('./ui/lightbox.js');
        const { initClients } = await import('./ui/clients.js');
        const { initCatalog } = await import('./ui/catalog.js');

        // =========================
        // HOME
        // =========================
        const { initServices } = await import('./home/services.js');
        const { initProcessMobile } = await import('./home/process.js');
        const { initPortfolioCounters } = await import('./home/portfolio.js');
        const { initContactForm } = await import('./home/contact.js');

        // =========================
        // INIT
        // =========================
        try {
            initCookies();
        } catch (e) {
            console.error('Cookies error:', e);
        }

        try {
            initLightbox();
        } catch (e) {
            console.error('Lightbox error:', e);
        }

        try {
            initClients();
        } catch (e) {
            console.error('Clients error:', e);
        }

        try {
            initCatalog();
        } catch (e) {
            console.error('Catalog error:', e);
        }

        try {
            initServices();
        } catch (e) {
            console.error('Services error:', e);
        }

        try {
            initProcessMobile();
        } catch (e) {
            console.error('Process error:', e);
        }

        try {
            console.log('CONTADORES INICIADOS');
            initPortfolioCounters();
        } catch (e) {
            console.error('Portfolio error:', e);
        }

        try {
            initContactForm();
        } catch (e) {
            console.error('Contact error:', e);
        }

    } catch (error) {
        console.error('IMPORT ERROR:', error);
    }
});