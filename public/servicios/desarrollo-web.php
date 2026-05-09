<?php 
$titulo = "Desarrollo Web Profesional | CodeImpact";
$descripcion = "Creamos sitios web modernos, rápidos y enfocados en conversión.";

require_once __DIR__ . '/../../app/includes/header.php';
?>

<main>

<!-- =========================
INTRO
========================= -->
<section class="catalog-intro catalog-intro--light">
    <div class="container">
        <h1>Soluciones web y Diseños a tu Medida</h1>
        <p>
            No solo desarrollamos páginas web. Creamos herramientas digitales enfocadas en generar ventas,
            posicionamiento y crecimiento real.
        </p>
    </div>
</section>
<?php include __DIR__ . '/../../app/includes/back-button.php'; ?>
<!-- =========================
CATÁLOGO
========================= -->
<section class="service-catalog">

    <div class="container">

        <h2>Tipos de sitios que desarrollamos</h2>

        <div class="catalog-slider">

            <!-- CARD -->
            <?php 
            $services = [
                ["name"=>"landing","title"=>"Landing Pages","desc"=>"Páginas diseñadas para campañas y conversión rápida.","price"=>"$250","time"=>"7 días"],
                ["name"=>"ecommerce","title"=>"E-commerce","desc"=>"Tiendas online listas para vender 24/7.","price"=>"$500","time"=>"10-15 días"],
                ["name"=>"corporativa","title"=>"Web Corporativa","desc"=>"Presencia digital sólida para empresas.","price"=>"$400","time"=>"8-12 días"],
                ["name"=>"blog","title"=>"Blogs & SEO","desc"=>"Contenido optimizado para posicionarte en Google.","price"=>"$350","time"=>"7-10 días"],
                ["name"=>"sistema","title"=>"Sistemas Web","desc"=>"Plataformas personalizadas para tu negocio.","price"=>"$800","time"=>"15-30 días"],
                ["name"=>"portfolio","title"=>"Portafolios Web","desc"=>"Muestra tu trabajo con estilo profesional.","price"=>"$300","time"=>"7 días"],
                ["name"=>"comunidad","title"=>"Comunidades & Foros","desc"=>"Espacios digitales para interacción y crecimiento.","price"=>"$900","time"=>"20-35 días"]
            ];

            foreach($services as $service): ?>

            <div class="catalog-item">

                <div class="catalog-images">
                    <div class="catalog-track">

                        <?php for($i=1; $i<=3; $i++): ?>
                            
                            <picture class="<?= $i === 1 ? 'active' : ''; ?>">

                                <source srcset="<?= BASE_URL; ?>build/img/web/<?= $service['name']; ?><?= $i; ?>.avif" type="image/avif">
                                <source srcset="<?= BASE_URL; ?>build/img/web/<?= $service['name']; ?><?= $i; ?>.webp" type="image/webp">

                                <img 
                                    class="js-lightbox"
                                    src="<?= BASE_URL; ?>build/img/web/<?= $service['name']; ?><?= $i; ?>.jpg"
                                    alt="<?= $service['title']; ?> <?= $i; ?>"
                                    <?= $i !== 1 ? 'loading="lazy"' : ''; ?>
                                >

                            </picture>

                        <?php endfor; ?>

                    </div>

                    <button class="catalog-prev">‹</button>
                    <button class="catalog-next">›</button>
                </div>

                <div class="catalog-content">
                    <h3><?= $service['title']; ?></h3>
                    <p><?= $service['desc']; ?></p>

                    <ul class="catalog-features">
                        <li>✔ Diseño enfocado en ventas</li>
                        <li>✔ Optimización profesional</li>
                        <li>✔ Alto rendimiento</li>
                    </ul>

                    <div class="catalog-meta">
                        <span>Desde <?= $service['price']; ?></span>
                        <span><?= $service['time']; ?></span>
                    </div>

                     <!-- =========================
                    btn card
                    ========================= -->
                    <?php
                        $mensaje = urlencode(
                            "Hola CodeImpact Perú 👋\n\n" .
                            "Estoy interesado en el servicio:\n" .
                            "➡ " . $service['title']
                        );
                        ?>

                        <a 
                            href="https://wa.me/51970503691?text=<?= $mensaje; ?>"
                            target="_blank"
                            class="btn btn--primary"
                        >
                            Solicitar
                        </a>
                    <!-- =========================
                    fin btn card
                    ========================= -->
                </div>

            </div>

            <?php endforeach; ?>

        </div>

    </div>

</section>

<!-- =========================
TRUST
========================= -->
<section class="catalog-trust catalog-trust--light">
    <div class="container">

        <h3>¿Por qué elegir CodeImpact?</h3>

        <div class="trust-grid">
            <div>
                <h4>+50 proyectos</h4>
                <p>Experiencia real en múltiples industrias.</p>
            </div>

            <div>
                <h4>Enfoque en ventas</h4>
                <p>No diseñamos bonito, diseñamos para convertir.</p>
            </div>

            <div>
                <h4>Soporte continuo</h4>
                <p>Te acompañamos en todo el proceso.</p>
            </div>
        </div>

    </div>
</section>



<!-- =========================
BLOG
========================= -->

<?php include __DIR__ . '/../../app/includes/blog.php'; ?>


</main>
<?php include __DIR__ . '/../../app/includes/lightbox.php'; ?>
<?php require_once __DIR__ . '/../../app/includes/footer.php'; ?>