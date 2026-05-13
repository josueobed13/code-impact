<header class="header">
    <div class="container header__container">

        <div class="header__logo">
            <a href="<?= BASE_URL ?>index.php" aria-label="Ir al inicio de Code Impact Perú">
                <div 
                    class="lottie logo-lottie" data-animation="logo">
                </div>
            </a>
        </div>
        



        <nav class="header__nav">

            <div class="header__dropdown">

                <a class="header__link header__dropdown-toggle">
                    Servicios
                </a>

                <div class="header__dropdown-menu">

                    <a href="<?= BASE_URL; ?>servicios/desarrollo-web.php">
                        Desarrollo web
                    </a>

                    <a href="<?= BASE_URL; ?>servicios/audiovisual.php">
                        Producción audiovisual
                    </a>

                    <a href="<?= BASE_URL; ?>servicios/eventos.php">
                        Eventos corporativos
                    </a>

                    <a href="<?= BASE_URL; ?>servicios/marketing.php">
                        Marketing digital
                    </a>

                    <a href="<?= BASE_URL; ?>servicios/software.php">
                        Diseño de software
                    </a>

                    <a href="<?= BASE_URL; ?>servicios/publicidad-ads.php">
                        Publicidad ADS
                    </a>

                </div>

            </div>

            <a href="<?= BASE_URL ?>proyectos.php" class="header__link">
                Proyectos
            </a>

            <a href="<?= BASE_URL ?>nosotros.php" class="header__link">
                Nosotros
            </a>

            <a href="<?= BASE_URL ?>contacto.php" class="header__link">
                Contacto
            </a>

        </nav>

        <a href="<?php echo BASE_URL; ?>contacto.php" class="btn btn--primary header__cta">Empezar</a>

        <button class="header__toggle" aria-label="Abrir menú">
            <span></span>
            <span></span>
            <span></span>
        </button>

    </div>
</header>

<!-- Overlay -->
<div class="overlay"></div>

<!-- Menú mobile -->
<nav class="mobile-nav">

    <!-- BOTÓN CERRAR -->
    <button class="mobile-nav__close" aria-label="Cerrar menú">
        &times;
    </button>

    <div class="mobile-nav__content">

        <div class="mobile-nav__section">
            <p class="mobile-nav__title">Servicios</p>
            <a href="<?= BASE_URL; ?>servicios/desarrollo-web.php">Desarrollo web</a>
            <a href="<?= BASE_URL; ?>servicios/audiovisual.php">Producción audiovisual</a>
            <a href="<?= BASE_URL; ?>servicios/eventos.php">Eventos corporativos</a>
            <a href="<?= BASE_URL; ?>servicios/marketing.php">Marketing digital</a>
            <a href="<?= BASE_URL; ?>servicios/software.php">Diseño de software</a>
            <a href="<?= BASE_URL; ?>servicios/publicidad-ads.php">Publicidad ADS</a>
        </div>

        <div class="mobile-nav__section">
            <p class="mobile-nav__title">Empresa</p>
            <a href="<?= BASE_URL ?>servicios/servicios.php" class="header__link">Servicios</a>
            <a href="<?= BASE_URL ?>proyectos.php" class="header__link">Proyectos</a>
            <a href="<?= BASE_URL ?>nosotros.php" class="header__link">Nosotros</a>
            <a href="<?= BASE_URL ?>contacto.php" class="header__link">Contacto</a>
        </div>

        <div class="mobile-nav__section">
            <p class="mobile-nav__title">Contacto</p>

            <a 
                href="mailto:codeimpactperu@gmail.com"
                class="footer__mail"
                >
                codeimpactperu@gmail.com
            </a>

            <a href="https://wa.me/51970503691?text=Hola%20CodeImpact%20Perú,%20quiero%20hacer%20una%20consulta">+51 987 654 321</a>
            <a>Lima, Perú</a>
        </div>

    </div>
</nav>
