<?php 
$titulo = "Proyectos & Casos de Éxito | CodeImpact";
$descripcion = "Explora algunos de los proyectos, campañas y producciones desarrolladas por CodeImpact.";

require_once __DIR__ . '/../app/includes/header.php';
?>

<main>

<!-- =========================
INTRO
========================= -->
<section class="catalog-intro catalog-intro--light">
    <div class="container">

        <h1>Proyectos que generan impacto real</h1>

        <p>
            Desde desarrollo web y branding hasta campañas publicitarias,
            producción audiovisual y eventos corporativos.
            Cada proyecto refleja creatividad, estrategia y resultados.
        </p>

    </div>
</section>
<?php include __DIR__ . '/../app/includes/back-button.php'; ?>
<!-- =========================
PORTFOLIO STATS
========================= -->
<?php include __DIR__ . '/../app/includes/portafolio-stats.php'; ?>

<!-- =========================
CLIENTS / PORTFOLIO
========================= -->

<?php include __DIR__ . '/../app/includes/clients.php'; ?>


<!-- =========================
CTA FINAL
========================= -->
<section class="portfolio-cta catalog-intro--light">

    <div class="container">

        <h2>Tu marca podría ser nuestro próximo caso de éxito</h2>

        <p>
            Trabajemos juntos en una estrategia visual, digital o publicitaria
            diseñada específicamente para tu negocio.
        </p>

        <div class="portfolio-cta__buttons">

            <a href="<?php echo BASE_URL; ?>contacto.php" class="btn btn--primary">
                Solicitar proyecto
            </a>

            <a href="<?= BASE_URL ?>servicios/servicios.php" class="btn btn--primary">
                Ver servicios
            </a>


        </div>

    </div>

</section>

<!-- =========================
BLOG
========================= -->
<?php include __DIR__ . '/../app/includes/blog.php'; ?>

</main>

<?php include __DIR__ . '/../app/includes/lightbox.php'; ?>
<?php require_once __DIR__ . '/../app/includes/footer.php'; ?>