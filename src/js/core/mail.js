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
