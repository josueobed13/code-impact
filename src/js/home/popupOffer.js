// ==========================
// 🔥 POPUP OFFER
// ==========================

(function () {

    function initPopupOffer() {

        const popup =
            document.querySelector(
                '#popupOffer'
            );

        const closeBtn =
            document.querySelector(
                '#popupOfferClose'
            );

        // salir si no existe
        if (!popup) return;

        // evitar doble init
        if (
            popup.dataset.initialized
        ) return;

        popup.dataset.initialized =
            'true';

        // ==========================
        // CLOSE FUNCTION
        // ==========================

        function closePopup() {

            // evita warning aria-hidden
            document.activeElement?.blur();

            popup.classList.remove(
                'active'
            );

            popup.setAttribute(
                'aria-hidden',
                'true'
            );
        }

        // ==========================
        // OPEN AFTER 8s
        // ==========================

        setTimeout(() => {

            popup.classList.add(
                'active'
            );

            popup.setAttribute(
                'aria-hidden',
                'false'
            );

        }, 8000);

        // ==========================
        // CLOSE BUTTON
        // ==========================

        closeBtn?.addEventListener(
            'click',
            closePopup
        );

        // ==========================
        // OVERLAY CLOSE
        // ==========================

        popup.addEventListener(
            'click',
            (e) => {

                if (
                    e.target.classList.contains(
                        'popup-offer__overlay'
                    )
                ) {

                    closePopup();
                }
            }
        );
    }

    // ==========================
    // AUTO INIT
    // ==========================

    if (
        document.readyState === 'loading'
    ) {

        document.addEventListener(
            'DOMContentLoaded',
            initPopupOffer
        );

    } else {

        initPopupOffer();
    }

})();