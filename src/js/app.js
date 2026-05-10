
import { initLottie } from './core/lottie.js';
import { initFixedHeader } from './core/fixedHeader.js';
import { initMailLinks } from './core/mail.js';
import { initCookies } from './core/cookies.js';

import { initLightbox } from './ui/lightbox.js';
import { initClients } from './ui/clients.js';
import { initCatalog } from './ui/catalog.js';

import { initServices } from './home/services.js';
import { initProcessMobile } from './home/process.js';
import { initPortfolioCounters } from './home/portfolio.js';
import { initContactForm } from './home/contact.js';

// 👉 ESTE ES EL NUEVO
import { initHeroVideo } from './core/heroVideo.js';

document.addEventListener('DOMContentLoaded', () => {

    initLottie();
    initFixedHeader();
    initMailLinks();
    initCookies();

    initLightbox();
    initClients();
    initCatalog();

    initServices();
    initProcessMobile();
    initPortfolioCounters();
    initContactForm();

    initHeroVideo(); // solo aquí
});