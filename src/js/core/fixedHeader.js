function initFixedHeader(){
    const header = document.querySelector(".header");
    if (!header) return;

    function updatePadding(){
        const h = header.getBoundingClientRect().height;
        document.body.style.paddingTop = h + "px";
    }

    updatePadding();

    let ticking = false;

    window.addEventListener("resize", () => {
        if (ticking) return;

        ticking = true;

        requestAnimationFrame(() => {
            updatePadding();
            ticking = false;
        });
    });
}