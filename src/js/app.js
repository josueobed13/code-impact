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

            // ==========================
            // CATALOG
            // ==========================

            console.log("⚡ UI base lista");
        });
    });

    // ==========================
    // UI DEPENDIENTE DE CSS / VISUAL COMPLETO
    // ==========================
    setTimeout(() => {
        // LOTTIE
        if (
            document.querySelector(
                '.lazy-lottie'
            )
        ) {

            window.initLottieSystem?.();
        }
        // ==========================
                // POPUP OFFER
                // ==========================

            setTimeout(() => {

            window.initPopupOffer?.();

                }, 8000);
        console.log(
            "🎯 UI visual pesada inicializada"
        );

    }, 300);

});