<!-- =========================
FOOTER
========================= -->
<footer class="footer">

    <div class="container">

        <div class="footer__grid">

            <!-- BRAND -->
            <div class="footer__col footer__brand">

                <div class="footer__logo">
                    <img 
                        src="<?= BASE_URL; ?>build/img/logos/logo.svg" 
                        alt="CodeImpact"
                    >
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

</body>
</html>