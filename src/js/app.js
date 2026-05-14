window.addEventListener('load', () => {

    requestAnimationFrame(() => {
        requestAnimationFrame(() => {

            // ==========================
            // UI BASE (SIEMPRE LIVIANO)
            // ==========================
            lazyInit('.service-card', initServices);
            lazyInit('.process__step', initProcessMobile);
            lazyInit('.portfolio-counter', initPortfolioCounters);

            console.log("⚡ UI base lista");

        });
    });

    // ==========================
    // UI PESADA (VISUAL / SECOND LAYER)
    // ==========================
    setTimeout(() => {

        lazyInit('#contactForm', initCookies);
        lazyInit('.catalog-item', initCatalog);
        lazyInit('.clients__track', initClientsSlider);

        // LOTTIE
        lazyInit('.lazy-lottie', initLottieSystem);

        console.log("🎯 UI visual pesada inicializada");

    }, 300);

});