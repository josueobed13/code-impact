function initProcessMobile() {

    const steps = document.querySelectorAll('.process__step');
    if (!steps.length) return;

    let i = 0;

    setInterval(() => {

        steps.forEach(s => s.classList.remove('active'));
        steps[i].classList.add('active');

        i = (i + 1) % steps.length;

    }, 3000);
}