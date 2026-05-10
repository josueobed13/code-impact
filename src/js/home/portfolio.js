//contador

// ==========================
// 🔥 PORTFOLIO COUNTERS
// ==========================
function initPortfolioCounters() {

    const counters = document.querySelectorAll('.counter');

    if (!counters.length) return;

    const animateCounter = (counter) => {

        const target = +counter.dataset.target;

        let current = 0;

        const increment = target / 190;

        const updateCounter = () => {

            current += increment;

            if (current < target) {

                // MILLONES
                if (target >= 1000000) {

                    counter.innerText =
                        '+' + (current / 1000000).toFixed(1) + 'M';

                } else {

                    counter.innerText =
                        '+' + Math.floor(current);
                }

                requestAnimationFrame(updateCounter);

            } else {

                // FINAL
                if (target >= 1000000) {

                    counter.innerText = '+1M';

                } else {

                    counter.innerText = '+' + target;
                }
            }
        };

        updateCounter();
    };

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                animateCounter(entry.target);

                observer.unobserve(entry.target);
            }
        });

    }, {
        threshold: 0.5
    });

    counters.forEach(counter => {
        observer.observe(counter);
    });

}

initPortfolioCounters();