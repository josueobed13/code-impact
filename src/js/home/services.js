// ==========================
// 🔥 SERVICES INTERACTION (FINAL CLEAN)
// ==========================
function initServices() {

    const cards = document.querySelectorAll('.service-card');
    if (!cards.length) return;

    let index = 0;
    let interval = null;
    let userInteracted = false;

    function isMobile() {
        return window.innerWidth <= 768;
    }

    function startLoop() {

        if (interval) clearInterval(interval);

        interval = setInterval(() => {

            if (!isMobile() || userInteracted) return;

            cards.forEach(card => card.classList.remove('active'));

            cards[index].classList.add('active');

            index = (index + 1) % cards.length;

        }, 3000);
    }

    function resetCards() {
        cards.forEach(card => {
            card.classList.remove('active');
            card.classList.remove('touched');
        });
    }

    cards.forEach(card => {

        card.addEventListener('click', (e) => {

            if (e.target.closest('a')) return;

            const url = card.getAttribute('data-url');

            if (!isMobile()) {
                if (url) window.open(url, '_blank');
                return;
            }

            userInteracted = true;

            if (interval) clearInterval(interval);

            if (card.classList.contains('touched')) {
                if (url) window.open(url, '_blank');
                return;
            }

            resetCards();
            card.classList.add('touched');

        });

    });

    window.addEventListener('resize', () => {
        userInteracted = false;
        resetCards();
        startLoop();
    });

    startLoop();
}

initServices();



// ==========================
// 🔥 PROCESS MOBILE TEXT LOOP
// ==========================
function initProcessMobile() {

    const steps = document.querySelectorAll('.process__step');
    if (!steps.length) return;

    let index = 0;
    let interval = null;

    function isMobile() {
        return window.innerWidth <= 600;
    }

    function startLoop() {

        if (interval) clearInterval(interval);

        interval = setInterval(() => {

            if (!isMobile()) {
                steps.forEach(step => step.classList.remove('active'));
                return;
            }

            steps.forEach(step => step.classList.remove('active'));

            steps[index].classList.add('active');

            index = (index + 1) % steps.length;

        }, 3000);
    }

    window.addEventListener('resize', () => {
        steps.forEach(step => step.classList.remove('active'));
        startLoop();
    });

    startLoop();
}

initProcessMobile();