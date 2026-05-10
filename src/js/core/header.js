// ==========================
// 🔥 HEADER FIXED ON SCROLL
// ==========================
function initFixedHeader() {

    const header = document.querySelector('.header');

    if (!header) return;

    function updateHeaderHeight() {

        const headerHeight = header.offsetHeight;

        document.body.style.paddingTop = `${headerHeight}px`;
    }

    updateHeaderHeight();

    window.addEventListener('resize', updateHeaderHeight);
}

initFixedHeader();