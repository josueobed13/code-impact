<?php 
$titulo = "Producción de Eventos & Activaciones | CodeImpact";
$descripcion = "Eventos corporativos, activaciones de marca, presentadoras, transmisiones en vivo y cobertura profesional.";

require_once __DIR__ . '/../../app/includes/header.php';
?>

<main>

<!-- =========================
INTRO
========================= -->
<section class="catalog-intro catalog-intro--light">
    <div class="container">
        <h1>Eventos que conectan tu  Marca con Personas</h1>
        <p>
            Organizamos: activaciones, eventos corporativos,
            transmisiones en vivo y conducción profesional con talento especializado.
        </p>
    </div>
</section>
<?php include __DIR__ . '/../../app/includes/back-button.php'; ?>
<!-- =========================
SERVICIOS EVENTOS
========================= -->
<section class="service-catalog">

    <div class="container">

        <h2>Servicios de producción de eventos</h2>

        <div class="catalog-slider">

            <?php 
            $services = [

                ["name"=>"presentacion-marcas",
                 "title"=>"Presentación de Marcas",
                 "desc"=>"Enviamos una presentadora para crear contenido publicitario profesional enfocado en redes y campañas.",
                 "price"=>"$180",
                 "time"=>"1-2 días",
                 "features"=>[
                    "✔ Contenido publicitario profesional para redes",
                    "✔ Presentadora en campo o locación de marca",
                    "✔ Material listo para campañas digitales"
                 ]],

                ["name"=>"activaciones",
                 "title"=>"Activaciones de Marca",
                 "desc"=>"Anfitrionas en campo para generar interacción, atraer público y posicionar tu marca en zonas estratégicas.",
                 "price"=>"$150",
                 "time"=>"Evento",
                 "features"=>[
                    "✔ Interacción directa con público objetivo",
                    "✔ Generación de tráfico y visibilidad de marca",
                    "✔ Activaciones en puntos estratégicos"
                 ]],

                ["name"=>"eventos-corporativos",
                 "title"=>"Eventos Corporativos",
                 "desc"=>"Organización y cobertura de lanzamientos, aniversarios y eventos empresariales con enfoque profesional.",
                 "price"=>"$300",
                 "time"=>"Según evento",
                 "features"=>[
                    "✔ Cobertura completa del evento corporativo",
                    "✔ Registro audiovisual de momentos clave",
                    "✔ Material para marketing interno y externo"
                 ]],

                ["name"=>"streaming-eventos",
                 "title"=>"Transmisiones en Vivo",
                 "desc"=>"Streaming profesional para lanzamientos, entrevistas y eventos corporativos en múltiples plataformas.",
                 "price"=>"$200",
                 "time"=>"En vivo",
                 "features"=>[
                    "✔ Transmisión profesional multiplataforma",
                    "✔ Cobertura en tiempo real del evento",
                    "✔ Mayor alcance digital para la marca"
                 ]],

                ["name"=>"conductora-eventos",
                 "title"=>"Conductora de Eventos",
                 "desc"=>"Presentadora profesional encargada de conducir, coordinar y dar fluidez a todo el evento.",
                 "price"=>"$220",
                 "time"=>"Evento",
                 "features"=>[
                    "✔ Conducción completa del evento",
                    "✔ Coordinación de tiempos y programa",
                    "✔ Presencia escénica profesional"
                 ]]

            ];

            foreach($services as $service): ?>

            <div class="catalog-item">

                <div class="catalog-images">
                    <div class="catalog-track">

                        <?php for($i=1; $i<=3; $i++): ?>

                            <picture class="<?= $i === 1 ? 'active' : ''; ?>">

                                <source srcset="<?= BASE_URL; ?>build/img/eventos/<?= $service['name']; ?><?= $i; ?>.avif" type="image/avif">
                                <source srcset="<?= BASE_URL; ?>build/img/eventos/<?= $service['name']; ?><?= $i; ?>.webp" type="image/webp">

                                <img 
                                    class="js-lightbox"
                                    src="<?= BASE_URL; ?>build/img/eventos/<?= $service['name']; ?><?= $i; ?>.jpg"
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
                        <?php foreach($service['features'] as $feature): ?>
                            <li><?= $feature; ?></li>
                        <?php endforeach; ?>
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
TALENTO (models.php REUTILIZABLE)
========================= -->
<?php include __DIR__ . '/../../app/includes/models.php'; ?>

<!-- =========================
TRUST
========================= -->
<section class="catalog-trust catalog-trust--light">
    <div class="container">

        <h3>¿Por qué confiar tus eventos en nosotros?</h3>

        <div class="trust-grid">

            <div>
                <h4>Talento profesional</h4>
                <p>Presentadoras y anfitrionas con experiencia en eventos de marca.</p>
            </div>

            <div>
                <h4>Experiencia en vivo</h4>
                <p>Coordinación fluida para eventos corporativos y activaciones.</p>
            </div>

            <div>
                <h4>Impacto de marca</h4>
                <p>Convertimos eventos en experiencias memorables y publicitarias.</p>
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