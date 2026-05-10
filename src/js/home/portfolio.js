
export function initPortfolioCounters() {

    console.log('🔥 PORTFOLIO JS EJECUTADO');

    const counters = document.querySelectorAll('.counter');

    console.log('COUNTERS:', counters.length);

    counters.forEach(c => {
        console.log('COUNTER FOUND:', c);
        c.innerText = c.dataset.target;
    });

}