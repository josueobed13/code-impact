document.addEventListener('DOMContentLoaded', () => {

    const toggle = document.querySelector('.header__toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    const overlay = document.querySelector('.overlay');
    const closeBtn = document.querySelector('.mobile-nav__close');

    if (!toggle || !mobileNav || !overlay) return;

    function openMenu() {
        toggle.classList.add('active');
        mobileNav.classList.add('active');
        overlay.classList.add('active');
        document.body.classList.add('no-scroll');
    }

    function closeMenu() {
        toggle.classList.remove('active');
        mobileNav.classList.remove('active');
        overlay.classList.remove('active');
        document.body.classList.remove('no-scroll');
    }

    toggle.addEventListener('click', () => {
        const isOpen = mobileNav.classList.contains('active');
        isOpen ? closeMenu() : openMenu();
    });

    overlay.addEventListener('click', closeMenu);

    if (closeBtn) {
        closeBtn.addEventListener('click', closeMenu);
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeMenu();
    });



// ==========================
// 🔥 LOTTIE OPTIMIZADO (FINAL)
// ==========================
if (!window.__lottieLoaded) {

    window.__lottieLoaded = true;

    const items = document.querySelectorAll('.lottie');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {

            const anim = entry.target.__anim;
            if (!anim) return;

            if (entry.isIntersecting) {
                anim.play();
            } else {
                anim.pause();
            }

        });
    }, {
        threshold: 0.3
    });

    items.forEach(el => {

        const name = el.getAttribute('data-animation');
        if (!name) return;

        // 🔥 FIX REAL AQUÍ (ruta absoluta)
        const path = `${BASE_URL}build/animations/${name}.json`;

        const animation = lottie.loadAnimation({
            container: el,
            renderer: 'svg',
            loop: true,
            autoplay: false,
            path: path
        });

        animation.setSpeed(0.5);

        el.__anim = animation;

        observer.observe(el);

    });

}



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


// ==========================
// 🔥 CLIENTS SLIDER PRO
// ==========================
function initClientsSlider() {

    const track = document.querySelector('.clients__track');
    if (!track) return;

    let speed = 0.3;
    let position = 0;

    let isPaused = false;
    let isDragging = false;

    let startX = 0;
    let currentX = 0;

    const items = [...track.children];

    // duplicar items
    items.forEach(item => {
        track.appendChild(item.cloneNode(true));
    });

    const totalWidth = track.scrollWidth / 2;

    // ==========================
    // AUTO SLIDE
    // ==========================
    function animate() {

        if (!isPaused && !isDragging) {

            position -= speed;

            // loop infinito
            if (Math.abs(position) >= totalWidth) {
                position = 0;
            }

            if (position > 0) {
                position = -totalWidth;
            }

            track.style.transform = `translate3d(${position}px,0,0)`;
        }

        requestAnimationFrame(animate);
    }

    animate();

    // ==========================
    // PAUSA
    // ==========================
    let timeout;

    function pauseSlider() {

        isPaused = true;

        clearTimeout(timeout);

        timeout = setTimeout(() => {
            isPaused = false;
        }, 3000);
    }

    // ==========================
    // TOUCH START
    // ==========================
    track.addEventListener('touchstart', (e) => {

        pauseSlider();

        isDragging = true;

        startX = e.touches[0].clientX;
        currentX = startX;

    }, { passive: true });

    // ==========================
    // TOUCH MOVE
    // ==========================
    track.addEventListener('touchmove', (e) => {

        if (!isDragging) return;

        const x = e.touches[0].clientX;

        const diff = x - currentX;

        position += diff;

        // mantener loop correcto
        if (Math.abs(position) >= totalWidth) {
            position = 0;
        }

        if (position > 0) {
            position = -totalWidth;
        }

        track.style.transform = `translate3d(${position}px,0,0)`;

        currentX = x;

    }, { passive: true });

    // ==========================
    // TOUCH END
    // ==========================
    track.addEventListener('touchend', () => {

        isDragging = false;

        pauseSlider();

    });

    // ==========================
    // CLICK PAUSE
    // ==========================
    track.addEventListener('click', pauseSlider);
}

// INICIAR
initClientsSlider();


// ==========================
// CLIENTS LOGOS SCROLL
// ==========================
function initClientsArrows() {

    const wrapper = document.querySelector('.clients__logos-wrapper');
    const leftBtn = document.querySelector('.clients__arrow--left');
    const rightBtn = document.querySelector('.clients__arrow--right');

    if (!wrapper || !leftBtn || !rightBtn) return;

    function getScrollAmount() {
        return wrapper.clientWidth * 0.7;
    }

    leftBtn.addEventListener('click', () => {
        wrapper.scrollBy({
            left: -getScrollAmount(),
            behavior: 'smooth'
        });
    });

    rightBtn.addEventListener('click', () => {
        wrapper.scrollBy({
            left: getScrollAmount(),
            behavior: 'smooth'
        });
    });

}

initClientsArrows();


// ==========================
// 🔥 CATALOG SLIDER
// ==========================
function initCatalog() {

    const items = document.querySelectorAll(".catalog-item");
    if (!items.length) return;

    items.forEach((item) => {

        const track = item.querySelector(".catalog-track");

        // 🔥 IMPORTANTE: ahora usamos picture
        const images = track ? track.querySelectorAll("picture") : [];

        const prevBtn = item.querySelector(".catalog-prev");
        const nextBtn = item.querySelector(".catalog-next");

        if (!images.length) return;

        let index = 0;

        const show = (i) => {
            images.forEach(el => el.classList.remove("active"));
            images[i].classList.add("active");
        };

        const next = () => {
            index = (index + 1) % images.length;
            show(index);
        };

        const prev = () => {
            index = (index - 1 + images.length) % images.length;
            show(index);
        };

        nextBtn?.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            next();
        });

        prevBtn?.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            prev();
        });

        // 🔥 swipe móvil
        let startX = 0;

        item.addEventListener("touchstart", (e) => {
            startX = e.touches[0].clientX;
        });

        item.addEventListener("touchend", (e) => {
            let endX = e.changedTouches[0].clientX;
            let diff = startX - endX;

            if (Math.abs(diff) < 50) return;

            diff > 0 ? next() : prev();
        });

        show(0);
    });

}

initCatalog();



// ==========================
// 🔥 LIGHTBOX
// ==========================
function initLightbox() {

    const images = document.querySelectorAll('.js-lightbox');

    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.querySelector('.lightbox__img');
    const closeBtn = document.querySelector('.lightbox__close');
    const prevBtn = document.querySelector('.lightbox__prev');
    const nextBtn = document.querySelector('.lightbox__next');

    if (!images.length || !lightbox || !lightboxImg) return;

    let group = [];
    let index = 0;

    const updateImage = () => {
        const img = group[index];
        if (!img) return;
        lightboxImg.src = img.currentSrc;
    };

    const next = () => {
        if (!group.length) return;
        index = (index + 1) % group.length;
        updateImage();
    };

    const prev = () => {
        if (!group.length) return;
        index = (index - 1 + group.length) % group.length;
        updateImage();
    };

    const open = (imgs, i) => {
        group = imgs;
        index = i;

        lightbox.classList.add('active');
        updateImage();

        // 🔥 mostrar flechas SOLO si hay más de 1 imagen
        if (group.length > 1) {
            prevBtn.style.display = 'block';
            nextBtn.style.display = 'block';
        } else {
            prevBtn.style.display = 'none';
            nextBtn.style.display = 'none';
        }
    };

    // =========================
    // CLICK EN IMÁGENES
    // =========================
    images.forEach(img => {

        img.style.cursor = 'zoom-in';

        img.addEventListener('click', (e) => {

            e.stopPropagation();

            const catalog = img.closest('.catalog-item');

            // =========================
            // 🔥 CASO CATALOGO
            // =========================
            if (catalog) {

                const imgs = Array.from(
                    catalog.querySelectorAll('.catalog-track picture img')
                );

                const activeImg =
                    catalog.querySelector('.catalog-track picture.active img');

                const startIndex = imgs.indexOf(activeImg || img);

                open(imgs, startIndex >= 0 ? startIndex : 0);

                return;
            }

            // =========================
            // 🔥 CASO NORMAL
            // =========================
            lightbox.classList.add('active');
            lightboxImg.src = img.currentSrc;

            prevBtn.style.display = 'none';
            nextBtn.style.display = 'none';
        });

    });

    // =========================
    // CERRAR
    // =========================
    const close = () => {
        lightbox.classList.remove('active');
        lightboxImg.src = '';
        group = [];
        index = 0;
    };

    closeBtn?.addEventListener('click', close);

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) close();
    });

    // =========================
    // BOTONES
    // =========================
    prevBtn?.addEventListener('click', (e) => {
        e.stopPropagation();
        prev();
    });

    nextBtn?.addEventListener('click', (e) => {
        e.stopPropagation();
        next();
    });

    // =========================
    // TECLADO
    // =========================
    document.addEventListener('keydown', (e) => {

        if (!lightbox.classList.contains('active')) return;

        if (e.key === 'Escape') close();

        if (group.length > 1) {
            if (e.key === 'ArrowRight') next();
            if (e.key === 'ArrowLeft') prev();
        }
    });

}

initLightbox();


// ==========================
// 🔥 CATALOG SLIDER
// ==========================
function initCatalog() {

    const items = document.querySelectorAll(".catalog-item");
    if (!items.length) return;

    items.forEach((item) => {

        const track = item.querySelector(".catalog-track");
        const images = track ? track.querySelectorAll("picture") : [];

        const prevBtn = item.querySelector(".catalog-prev");
        const nextBtn = item.querySelector(".catalog-next");

        if (!images.length) return;

        let index = 0;

        const show = (i) => {
            images.forEach(el => el.classList.remove("active"));
            images[i].classList.add("active");
        };

        const next = () => {
            index = (index + 1) % images.length;
            show(index);
        };

        const prev = () => {
            index = (index - 1 + images.length) % images.length;
            show(index);
        };

        nextBtn?.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            next();
        });

        prevBtn?.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            prev();
        });

        // swipe móvil
        let startX = 0;

        item.addEventListener("touchstart", (e) => {
            startX = e.touches[0].clientX;
        });

        item.addEventListener("touchend", (e) => {
            let endX = e.changedTouches[0].clientX;
            let diff = startX - endX;

            if (Math.abs(diff) < 50) return;

            diff > 0 ? next() : prev();
        });

        show(0);
    });

}

initCatalog();







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



// ==========================
// 🔥 CONTACT FORM -> WHATSAPP
// ==========================
function initContactForm() {

    const form = document.getElementById('contactForm');

    if (!form) return;

    form.addEventListener('submit', (e) => {

        e.preventDefault();

        const nombre = document.getElementById('nombre')?.value || '';
        const correo = document.getElementById('correo')?.value || '';
        const empresa = document.getElementById('empresa')?.value || '';
        const servicio = document.getElementById('servicio')?.value || '';
        const mensaje = document.getElementById('mensaje')?.value || '';

        const texto = `
Hola CodeImpact Perú

Estoy interesado en sus servicios.

• Nombre: ${nombre}
• Correo: ${correo}
• Empresa: ${empresa}
• Servicio: ${servicio}

• Proyecto:
${mensaje}
        `;

        const url = `https://wa.me/51970503691?text=${encodeURIComponent(texto)}`;

        window.open(url, '_blank');

    });

}

initContactForm();


// ==========================
// MAIL LINK SMART
// ==========================
function initMailLinks() {

    const mailLinks = document.querySelectorAll('.footer__mail');

    if (!mailLinks.length) return;

    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    mailLinks.forEach(link => {

        if (!isMobile) {

            link.href =
                'https://mail.google.com/mail/?view=cm&fs=1&to=codeimpactperu@gmail.com';

            link.target = '_blank';
        }

    });

}

initMailLinks();




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


// ==========================
// 🍪 COOKIES SYSTEM
// ==========================
const cookieBanner = document.getElementById('cookieBanner');
const cookieModal = document.getElementById('cookieModal');

const acceptCookies = document.getElementById('acceptCookies');
const acceptAllCookies = document.getElementById('acceptAllCookies');

const cookieConfigBtn = document.getElementById('cookieConfigBtn');
const closeCookieModal = document.getElementById('closeCookieModal');

const saveCookieSettings = document.getElementById('saveCookieSettings');

const analyticsCookies = document.getElementById('analyticsCookies');
const marketingCookies = document.getElementById('marketingCookies');

// ==========================
// SHOW BANNER
// ==========================
const cookieSaved = localStorage.getItem('cookieConsent');

if (!cookieSaved && cookieBanner) {

    setTimeout(() => {
        cookieBanner.classList.add('show');
    }, 1200);

}

// ==========================
// ACCEPT ALL
// ==========================
const acceptAll = () => {

    const settings = {
        necessary: true,
        analytics: true,
        marketing: true
    };

    localStorage.setItem(
        'cookieConsent',
        JSON.stringify(settings)
    );

    cookieBanner?.classList.remove('show');
    cookieModal?.classList.remove('show');

};

acceptCookies?.addEventListener('click', acceptAll);

acceptAllCookies?.addEventListener('click', acceptAll);

// ==========================
// OPEN MODAL
// ==========================
cookieConfigBtn?.addEventListener('click', () => {
    cookieModal?.classList.add('show');
});

// ==========================
// CLOSE MODAL
// ==========================
closeCookieModal?.addEventListener('click', () => {
    cookieModal?.classList.remove('show');
});

// ==========================
// SAVE CUSTOM SETTINGS
// ==========================
saveCookieSettings?.addEventListener('click', () => {

    const settings = {
        necessary: true,
        analytics: analyticsCookies?.checked || false,
        marketing: marketingCookies?.checked || false
    };

    localStorage.setItem(
        'cookieConsent',
        JSON.stringify(settings)
    );

    cookieBanner?.classList.remove('show');
    cookieModal?.classList.remove('show');

});


});