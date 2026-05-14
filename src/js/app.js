window.addEventListener('load', () => {

    // ==========================
    // UI BASE (rápido)
    // ==========================
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {

            window.initServices?.();
            window.initProcessMobile?.();
            window.initPortfolioCounters?.();
            window.initCookies?.();

            console.log("⚡ UI base lista");
        });
    });

    // ==========================
    // UI DEPENDIENTE DE CSS / VISUAL COMPLETO
    // ==========================
    setTimeout(() => {

        
        window.initCatalog?.();
        window.initClientsSlider?.();

        // LOTTIE (solo si existe)
        if (document.querySelector('.lazy-lottie')) {
            window.initLottieSystem?.();
        }

        console.log("🎯 UI visual pesada inicializada");

    }, 300); // pequeño buffer para asegurar paint final

});