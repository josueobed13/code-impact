<?php 
$titulo = "Nosotros | CodeImpact";
$descripcion = "Conoce quiénes somos, nuestra filosofía y cómo ayudamos a marcas a crecer con estrategia, creatividad y tecnología.";

require_once __DIR__ . '/../app/includes/header.php';
?>

<main>

<!-- =========================
STATS
========================= -->
<?php include __DIR__ . '/../app/includes/portafolio-stats.php'; ?>

<?php include __DIR__ . '/../app/includes/back-button.php'; ?>
<!-- =========================
PROCESOS
========================= -->
<?php include __DIR__ . '/../app/includes/process.php'; ?>


<!-- =========================
HISTORIA
========================= -->
<section class="about-history">

    <div class="container">

        <div class="about-history__top">

            <span>NUESTRA HISTORIA</span>

            <h2>
                Transformamos ideas en
                marcas con impacto digital
            </h2>

            <p>
                CodeImpact Perú nació durante uno de los momentos
                más desafiantes para los negocios: la pandemia.
                Mientras muchas marcas intentaban adaptarse,
                entendimos que el mundo digital ya no era una opción,
                sino una necesidad.
            </p>

        </div>

        <div class="about-history__timeline">

            <!-- ITEM -->
            <div class="history-card">

                <div class="history-card__number">
                    01
                </div>

                <div class="history-card__content">

                    <h3>El inicio</h3>

                    <p>
                        Observamos cómo empresas y emprendedores
                        necesitaban nuevas formas de vender,
                        comunicar y conectar con sus clientes.
                    </p>

                </div>

            </div>

            <!-- ITEM -->
            <div class="history-card">

                <div class="history-card__number">
                    02
                </div>

                <div class="history-card__content">

                    <h3>Nuestra visión</h3>

                    <p>
                        Decidimos crear soluciones enfocadas en
                        marketing, branding, diseño web,
                        desarrollo digital y estrategias
                        orientadas a resultados reales.
                    </p>

                </div>

            </div>

            <!-- ITEM -->
            <div class="history-card">

                <div class="history-card__number">
                    03
                </div>

                <div class="history-card__content">

                    <h3>Evolución constante</h3>

                    <p>
                        Hoy ayudamos a marcas y negocios
                        a fortalecer su presencia digital
                        mediante creatividad, tecnología
                        y análisis estratégico.
                    </p>

                </div>

            </div>

        </div>

        <div class="about-history__bottom">

            <div class="about-history__quote">

                <span>CODE IMPACT PERÚ</span>

                <p>
                    “Queremos ser parte del crecimiento de tu negocio,
                    creando experiencias, estrategias y herramientas
                    que realmente generen impacto.”
                </p>

            </div>

        </div>

    </div>

</section>


<!-- =========================
PERFIL PROFESIONAL
========================= -->
<section class="about-profile">

    <div class="container">

        <div class="about-profile__card">

            <!-- FOTO -->
            <div class="about-profile__image">

                <img 
                    src="<?= BASE_URL; ?>build/img/nosotros/gerente-codeimpact.jpg" 
                    alt="Josue Obed Arizapana Alejo"
                >

            </div>

            <!-- INFO -->
            <div class="about-profile__content">

                <span>GERENTE DE CODE IMPACT PERÚ</span>

                <h2>Josue Obed Arizapana Alejo</h2>

                <p class="about-profile__text">
                    Profesional orientado al desarrollo digital,
                    marketing estratégico y soluciones tecnológicas,
                    con experiencia en creación de marcas,
                    posicionamiento comercial y desarrollo web.
                </p>

                <div class="about-profile__list">

                    <div class="about-profile__row">
                        <strong>2015</strong>
                        <p>Formación en Informática — CESCA</p>
                    </div>

                    <div class="about-profile__row">
                        <strong>2024</strong>
                        <p>Computación e Informática — CIBERTEC</p>
                    </div>

                    <div class="about-profile__row">
                        <strong>+6 años</strong>
                        <p>Experiencia como Jefe de Marketing</p>
                    </div>

                    <div class="about-profile__row">
                        <strong>+3 años</strong>
                        <p>Experiencia en Desarrollo Web</p>
                    </div>

                    <div class="about-profile__row">
                        <strong>+6 año</strong>
                        <p>Análisis de Marketing y Estrategias</p>
                    </div>

                </div>

            </div>

        </div>

    </div>

</section>

</main>

<?php require_once __DIR__ . '/../app/includes/footer.php'; ?>