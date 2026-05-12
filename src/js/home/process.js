function initProcessMobile() {
    const steps = document.querySelectorAll('.process__step');
    if (!steps.length || window.innerWidth > 600) return; // Solo en móvil real

    let i = 0;
    steps[0].classList.add('active');

    const rotateProcess = () => {
        // En lugar de forEach, buscamos solo al que está activo
        const current = document.querySelector('.process__step.active');
        if (current) current.classList.remove('active');

        i = (i + 1) % steps.length;
        steps[i].classList.add('active');
    };

    // Usamos un intervalo más largo o solo cuando sea visible
    setInterval(rotateProcess, 4000); 
}
