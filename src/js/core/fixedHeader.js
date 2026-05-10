function initFixedHeader() {

    const header = document.querySelector('.header');
    if (!header) return;

    function update() {
        document.body.style.paddingTop = `${header.offsetHeight}px`;
    }

    update();
    window.addEventListener('resize', update);
}