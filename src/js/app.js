import { initFixedHeader } from './core/fixedHeader.js';
import { initMailLinks } from './core/mail.js';
import { initHeroVideo } from './home/heroVideo.js';

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