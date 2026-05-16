<?php 
$titulo = "Servicios | CodeImpact";
$descripcion = "Impulsamos tu negocio con desarrollo web, marketing digital y producción audiovisual enfocada en resultados.";

require_once __DIR__ . '/../../app/includes/header.php';
?>

<main>

<!-- HERO INTERNO -->
<section class="hero-internal">
    <div class="container">
        <h1>Conoce más de lo que Podemos Lograr en tu Empresa</h1>
        <p>
            No solo ejecutamos proyectos sin objetivos:
            Globalizar tu alcance publicitario debe tener un orden, Consulta y te Orientaremos Gratis
        </p>
    </div>
</section>
<?php include __DIR__ . '/../../app/includes/back-button.php'; ?>
<!-- PROCESO -->
<?php require_once __DIR__ . '/../../app/includes/process.php'; ?>

<!-- SERVICIOS PRO -->
<section class="services-pro">

    <div class="container">

        <div class="services-pro__wrapper">

            <!-- IZQUIERDA -->
            <div class="services-pro__left">

                <span class="services-pro__tag">TÚ ELIGES</span>

                <h2 class="services-pro__title">
                    Estos Son <br> Nuestros Servicios
                </h2>

                <div class="services-pro__content">
                    <p class="services-pro__desc">
                        El marketing no se trata solo de atraer tráfico, sino de convertirlo en clientes reales.
                        Diseñamos estrategias que conectan con tu audiencia, generan confianza y transforman
                        cada interacción en oportunidades de crecimiento para tu negocio.
                    </p>
                </div>

            </div>

            <!-- DERECHA -->
            <div class="services-pro__right">

                <div class="services-pro__grid">

                    <!-- 1 -->
                    <div class="service-card service-card--image">
                        <div class="service-card__image">
                            <img src="<?php echo BASE_URL; ?>build/img/servicios/desarrollo-web.jpg" alt="desarrollo paginas Web">
                        </div>
                        <h3>Desarrollo Web</h3>
                        <p class="service-card__desc">
                            Diseñamos y desarrollamos tiendas online optimizadas para convertir visitas en clientes.
                        </p>
                        
                        <a href="<?= BASE_URL; ?>servicios/desarrollo-web.php" class="service-card__link">
                            Ver más →
                        </a>

                    </div>

                    <!-- 2 -->
                    <div class="service-card service-card--image">
                        <div class="service-card__image">
                            <img src="<?php echo BASE_URL; ?>build/img/servicios/produccion-audiovisual.jpg" alt="Producción audiovisual">
                        </div>
                        <h3>Producción audiovisual</h3>
                        <p class="service-card__desc">
                            Creamos videos corporativos que comunican tu mensaje y fortalecen tu marca.
                        </p>
                        <a href="<?= BASE_URL; ?>servicios/audiovisual.php" class="service-card__link">
                            Ver más →
                        </a>
                    </div>

                    <!-- 3 -->
                    <div class="service-card service-card--image">
                        <div class="service-card__image">
                            <img src="<?php echo BASE_URL; ?>build/img/servicios/eventos-corporativos.jpg" alt="Eventos corporativos">
                        </div>
                        <h3>Eventos corporativos</h3>
                        <p class="service-card__desc">
                            Organizamos eventos que generan conexiones, experiencias y resultados.
                        </p>
                        <a href="<?= BASE_URL; ?>servicios/eventos.php" class="service-card__link">Ver más →</a>
                    </div>

                    <!-- 4 -->
                    <div class="service-card service-card--image">
                        <div class="service-card__image">
                            <img src="<?php echo BASE_URL; ?>build/img/servicios/analisis-marketing.jpg" alt="Análisis de marketing">
                        </div>
                        <h3>Análisis de marketing</h3>
                        <p class="service-card__desc">
                            Detectamos fallas y diseñamos estrategias que hacen crecer tu negocio.
                        </p>
                        <a href="<?= BASE_URL; ?>servicios/marketing.php" class="service-card__link">Ver más →</a>
                    </div>

                    <!-- 5 -->
                    <div class="service-card service-card--image">
                        <div class="service-card__image">
                            <img src="<?php echo BASE_URL; ?>build/img/servicios/diseno-software.jpg" alt="Software a medida">
                        </div>
                        <h3>Diseño de software</h3>
                        <p class="service-card__desc">
                            Creamos sistemas de ventas y pedidos para optimizar tus procesos.
                        </p>
                        <a href="<?= BASE_URL; ?>servicios/software.php" class="service-card__link">Ver más →</a>
                    </div>

                    <!-- 6 -->
                    <div class="service-card service-card--image">
                        <div class="service-card__image">
                            <img src="<?php echo BASE_URL; ?>build/img/servicios/ads-publicidad.jpg" alt="Campañas ADS">
                        </div>
                        <h3>Campañas ADS Global</h3>
                        <p class="service-card__desc">
                            Creamos campañas efectivas que generan leads, ventas y crecimiento real.
                        </p>
                        <a href="<?= BASE_URL; ?>servicios/publicidad-ads.php" class="service-card__link">Ver más →</a>
                    </div>

                </div>

            </div>

        </div>

    </div>

</section>

<!-- CLIENTES -->
<?php require_once __DIR__ . '/../../app/includes/clients.php'; ?>

<!-- DIFERENCIAL -->
<section class="why">
    <div class="container">

        <h2>¿Por qué trabajar con CodeImpact?</h2>

        <p class="why__intro">
            No somos una agencia más. Somos un aliado estratégico enfocado en resultados.
        </p>

        <div class="why__grid">

            <div class="why__item">
                <h3>🎯 Enfoque en resultados</h3>
                <p>No trabajamos por estética, trabajamos por conversiones, ventas y crecimiento real.</p>
            </div>

            <div class="why__item">
                <h3>🚀 Estrategia + ejecución</h3>
                <p>No solo diseñamos, también pensamos el negocio detrás de cada decisión.</p>
            </div>

            <div class="why__item">
                <h3>⚡ Velocidad y calidad</h3>
                <p>Entregamos rápido sin sacrificar calidad ni detalle.</p>
            </div>

            <div class="why__item">
                <h3>🤝 Acompañamiento real</h3>
                <p>No desaparecemos. Te acompañamos en todo el proceso y crecimiento.</p>
            </div>

        </div>

    </div>
</section>

<!-- CTA FINAL -->
<section class="cta">
    <div class="container cta__content">

        <h2>¿Listo para hacer crecer tu negocio?</h2>

        <p>
            Agenda una asesoría gratuita y descubre cómo podemos ayudarte a escalar.
        </p>

        <a href="<?php echo BASE_URL; ?>contacto.php" class="btn btn--primary">
            Solicitar asesoría
        </a>

    </div>
</section>

</main>


<?php require_once __DIR__ . '/../../app/includes/lightbox.php'; ?>
<?php require_once __DIR__ . '/../../app/includes/footer.php'; ?>