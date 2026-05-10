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
    }, 4500);

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
