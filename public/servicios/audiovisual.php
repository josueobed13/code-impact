<?php 
$titulo = "Servicios Audiovisuales | CodeImpact";
$descripcion = "Producción audiovisual profesional: videos, fotografía, diseño gráfico y edición creativa.";

require_once __DIR__ . '/../../app/includes/header.php';
?>

<main>

<!-- =========================
INTRO
========================= -->
<section class="catalog-intro catalog-intro--light">
    <div class="container">
        <h1>Destaca con Diseños únicos y Corporativos</h1>
        <p>
            Creamos Diseños Digitales y Audio Visuales: 
            Sesiones de Fotos para eventos, Filmación profesional, Diseño gráfico, Edición de Videos
        </p>
    </div>
</section>
<?php include __DIR__ . '/../../app/includes/back-button.php'; ?>
<!-- =========================
CATÁLOGO AUDIOVISUAL
========================= -->
<section class="service-catalog">

    <div class="container">

        <h2>Servicios Audio Visuales </h2>

        <div class="catalog-slider">

            <?php 
            $services = [

                ["name"=>"video-grabacion",
                 "title"=>"Grabación de Videos",
                 "desc"=>"Producción de videos publicitarios, corporativos y contenido para redes.",
                 "price"=>"$150",
                 "time"=>"1-3 días"],

                ["name"=>"logos",
                 "title"=>"Diseño de Logos",
                 "desc"=>"Identidad visual profesional para marcas modernas y memorables.",
                 "price"=>"$80",
                 "time"=>"2-4 días"],

                ["name"=>"tarjetas",
                 "title"=>"Tarjetas de Presentación",
                 "desc"=>"Diseños elegantes y profesionales para reforzar tu identidad de marca.",
                 "price"=>"$40",
                 "time"=>"1-2 días"],

                ["name"=>"post-flyer",
                 "title"=>"Posts & Flyers",
                 "desc"=>"Diseños creativos para redes sociales y campañas publicitarias.",
                 "price"=>"$25",
                 "time"=>"24-48h"],

                ["name"=>"video-edit",
                 "title"=>"Edición de Videos",
                 "desc"=>"Edición profesional con efectos, ritmo dinámico y storytelling.",
                 "price"=>"$100",
                 "time"=>"2-5 días"],

                ["name"=>"photo-edit",
                 "title"=>"Fotografía Profesional",
                 "desc"=>"Retoque fotográfico, corrección de color y edición avanzada.",
                 "price"=>"$70",
                 "time"=>"2-4 días"]

            ];

            foreach($services as $service): ?>

            <div class="catalog-item">

                <div class="catalog-images">
                    <div class="catalog-track">

                        <?php for($i=1; $i<=3; $i++): ?>

                            <picture class="<?= $i === 1 ? 'active' : ''; ?>">

                                <source srcset="<?= BASE_URL; ?>build/img/audiovisual/<?= $service['name']; ?><?= $i; ?>.avif" type="image/avif">
                                <source srcset="<?= BASE_URL; ?>build/img/audiovisual/<?= $service['name']; ?><?= $i; ?>.webp" type="image/webp">

                                <img 
                                    class="js-lightbox"
                                    src="<?= BASE_URL; ?>build/img/audiovisual/<?= $service['name']; ?><?= $i; ?>.jpg"
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
                        <li>✔ Alta calidad visual</li>
                        <li>✔ Diseño profesional</li>
                        <li>✔ Adaptado a redes y branding</li>
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
<?php include __DIR__ . '/../../app/includes/models.php'; ?>

<!-- =========================
TRUST
========================= -->
<section class="catalog-trust catalog-trust--light">
    <div class="container">

        <h3>¿Por qué confiar en nuestro contenido audiovisual?</h3>

        <div class="trust-grid">

            <div>
                <h4>Contenido profesional</h4>
                <p>Producción cuidada para marcas que quieren destacar.</p>
            </div>

            <div>
                <h4>Enfoque creativo</h4>
                <p>No solo diseñamos, construimos identidad visual.</p>
            </div>

            <div>
                <h4>Entrega rápida</h4>
                <p>Optimizado para campañas y redes sociales.</p>
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