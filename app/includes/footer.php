<!-- =========================
FOOTER
========================= -->
<footer class="footer">

    <div class="container">

        <div class="footer__grid">


            <!-- BRAND -->
            <div class="footer__col footer__brand">

                <div class="footer__logo">
                    <div 
                        class="lottie logo-lottie"
                        data-animation="logo">
                    </div>
                </div>

                <p class="footer__text">
                    Soluciones digitales que combinan tecnología,
                    creatividad y estrategia para hacer crecer tu negocio.
                </p>

                <div class="footer__social">

                    <a href="https://www.facebook.com/CodeImpact.Peru" target="blank" aria-label="Facebook">
                        <i class="fa-brands fa-facebook-f"></i>
                    </a>

                    <a href="https://www.instagram.com/code.impactperu/" target="blank" aria-label="Instagram">
                        <i class="fa-brands fa-instagram"></i>
                    </a>

                    <a href="https://www.tiktok.com/@codeimpactperu" target="blank" aria-label="TikTok">
                        <i class="fa-brands fa-tiktok"></i>
                    </a>

                </div>

            </div>

            <!-- SERVICIOS -->
            <div class="footer__col">

                <h4>Servicios</h4>

                <ul>
                    <li>
                        <a href="<?= BASE_URL; ?>servicios/desarrollo-web.php">
                            Desarrollo web
                        </a>
                    </li>

                    <li>
                        <a href="<?= BASE_URL; ?>servicios/audiovisual.php">
                            Producción audiovisual
                        </a>
                    </li>

                    <li>
                        <a href="<?= BASE_URL; ?>servicios/eventos.php">
                            Eventos corporativos
                        </a>
                    </li>

                    <li>
                        <a href="<?= BASE_URL; ?>servicios/marketing.php">
                            Marketing digital
                        </a>
                    </li>

                    <li>
                        <a href="<?= BASE_URL; ?>servicios/software.php">
                            Diseño de software
                        </a>
                    </li>

                    <li>
                        <a href="<?= BASE_URL; ?>servicios/publicidad-ads.php">
                            Campañas Ads
                        </a>
                    </li>
                </ul>

            </div>

            <!-- EMPRESA -->
            <div class="footer__col">

                <h4>Empresa</h4>

                <ul>
                    <li>
                        <a href="<?= BASE_URL ?>servicios/servicios.php">
                            Servicios
                        </a>
                    </li>

                    <li>
                        <a href="<?= BASE_URL ?>proyectos.php">
                            Proyectos
                        </a>
                    </li>

                    <li>
                        <a href="<?= BASE_URL ?>nosotros.php">
                            Nosotros
                        </a>
                    </li>

                    <li>
                        <a href="<?= BASE_URL ?>contacto.php">
                            Contacto
                        </a>
                    </li>
                </ul>

            </div>

            <!-- CONTACTO -->
            <div class="footer__col">

                <h4>Contacto</h4>

                <p>
                    <a 
                        href="mailto:codeimpactperu@gmail.com"
                        class="footer__mail"
                    >
                        codeimpactperu@gmail.com
                    </a>
                </p>
                <p>+51 970 503 691</p>
                <p>Lima, Perú</p>

            </div>

        </div>

        <!-- BOTTOM -->
        <div class="footer__bottom">

            <p>
                © <?= date('Y'); ?> CodeImpact Perú. Todos los derechos reservados.
            </p>

            <div class="footer__links">

                <a href="<?= BASE_URL ?>politica-privacidad.php">
                    Política de privacidad
                </a>

                <a href="<?= BASE_URL ?>terminos-condiciones.php">
                    Términos y condiciones
                </a>

            </div>

        </div>

    </div>

</footer>


<!-- SCRIPTS -->
<script src="https://unpkg.com/lottie-web@5.12.2/build/player/lottie.min.js"></script>

<script src="<?= BASE_URL; ?>build/js/app.min.js"></script>

<?php include __DIR__ . '/whatsapp.php'; ?>





<!--cookies -->
<!-- =========================
COOKIE BANNER
========================= -->
<div class="cookie-banner hidden" id="cookieBanner">

    <div class="cookie-banner__content">

        <div class="cookie-banner__text">

            <span>COOKIES</span>

            <p>
                Usamos cookies para mejorar la experiencia,
                analizar el tráfico y optimizar campañas digitales.
                Al continuar navegando aceptas nuestra
                <a href="<?= BASE_URL; ?>cookies.php">
                    Política de Cookies
                </a>.
            </p>

        </div>

        <div class="cookie-banner__actions">

            <button
                class="cookie-btn cookie-btn--secondary"
                id="cookieConfigBtn"
            >
                Elegir cookies
            </button>

            <button
                class="cookie-btn cookie-btn--primary"
                id="acceptCookies"
            >
                Aceptar todas
            </button>

        </div>

    </div>

</div>

<!-- =========================
COOKIE MODAL
========================= -->
<div class="cookie-modal" id="cookieModal">

    <div class="cookie-modal__card">

        <div class="cookie-modal__top">

            <h3>Configuración de Cookies</h3>

            <button id="closeCookieModal">
                &times;
            </button>

        </div>

        <div class="cookie-modal__body">

            <!-- ITEM -->
            <div class="cookie-option">

                <div>

                    <h4>Cookies necesarias</h4>

                    <p>
                        Requeridas para el funcionamiento básico del sitio.
                    </p>

                </div>

                <input type="checkbox" checked disabled>

            </div>

            <!-- ITEM -->
            <div class="cookie-option">

                <div>

                    <h4>Cookies analíticas</h4>

                    <p>
                        Nos ayudan a analizar visitas y mejorar el rendimiento.
                    </p>

                </div>

                <input type="checkbox" id="analyticsCookies">

            </div>

            <!-- ITEM -->
            <div class="cookie-option">

                <div>

                    <h4>Cookies de marketing</h4>

                    <p>
                        Utilizadas para campañas publicitarias y remarketing.
                    </p>

                </div>

                <input type="checkbox" id="marketingCookies">

            </div>

        </div>

        <div class="cookie-modal__bottom">

            <button
                class="cookie-btn cookie-btn--secondary"
                id="saveCookieSettings"
            >
                Guardar preferencias
            </button>

            <button
                class="cookie-btn cookie-btn--primary"
                id="acceptAllCookies"
            >
                Aceptar todas
            </button>

        </div>

    </div>

</div>






</body>
</html>