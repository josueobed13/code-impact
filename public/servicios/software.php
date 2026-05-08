<?php 
$titulo = "Desarrollo de Software a Medida | CodeImpact";
$descripcion = "Creamos software personalizado, automatización de procesos, integraciones y sistemas escalables para empresas.";

require_once __DIR__ . '/../../app/includes/header.php';
?>

<main>

<!-- =========================
INTRO
========================= -->
<section class="catalog-intro catalog-intro--light">
    <div class="container">
        <h1>Sistemas inteligentes para escalar tu negocio</h1>
        <p>
            Desarrollamos software a medida, automatización de procesos e integraciones
            que optimizan operaciones y hacen crecer tu empresa de forma eficiente.
        </p>
    </div>
</section>
<?php include __DIR__ . '/../../app/includes/back-button.php'; ?>
<!-- =========================
CATÁLOGO SOFTWARE
========================= -->
<section class="service-catalog">

    <div class="container">

        <h2>Soluciones de desarrollo de software</h2>

        <div class="catalog-slider">

            <?php 
            $services = [

                ["name"=>"software-medida",
                 "title"=>"Software a Medida",
                 "desc"=>"Creamos software adaptado exactamente a los procesos y necesidades de tu negocio.",
                 "cta"=>"Solicitar desarrollo",
                 "features"=>[
                    "✔ Desarrollo personalizado según tu negocio",
                    "✔ Sistemas internos (ERP / CRM básicos)",
                    "✔ Aplicaciones empresariales a medida"
                 ]],

                ["name"=>"automatizacion",
                 "title"=>"Automatización de Procesos",
                 "desc"=>"Reducimos tiempos y errores automatizando tareas repetitivas y procesos internos.",
                 "cta"=>"Automatizar negocio",
                 "features"=>[
                    "✔ Automatización de tareas repetitivas",
                    "✔ Integración entre sistemas",
                    "✔ Flujos de trabajo inteligentes"
                 ]],

                ["name"=>"integraciones",
                 "title"=>"Integraciones & APIs",
                 "desc"=>"Conectamos todas tus plataformas para que trabajen de forma sincronizada.",
                 "cta"=>"Integrar sistemas",
                 "features"=>[
                    "✔ Conexión entre plataformas (pagos, CRM, sistemas)",
                    "✔ Desarrollo de APIs personalizadas",
                    "✔ Sincronización de datos en tiempo real"
                 ]],

                ["name"=>"soporte-escalabilidad",
                 "title"=>"Escalabilidad & Soporte",
                 "desc"=>"Aseguramos que tu sistema crezca contigo sin fallos ni limitaciones técnicas.",
                 "cta"=>"Dar soporte",
                 "features"=>[
                    "✔ Mantenimiento de software",
                    "✔ Optimización de rendimiento",
                    "✔ Soporte técnico continuo"
                 ]]

            ];

            foreach($services as $service): ?>

            <div class="catalog-item">

                <div class="catalog-images">
                    <div class="catalog-track">

                        <?php for($i=1; $i<=3; $i++): ?>

                            <picture class="<?= $i === 1 ? 'active' : ''; ?>">

                                <source srcset="<?= BASE_URL; ?>build/img/software/<?= $service['name']; ?><?= $i; ?>.avif" type="image/avif">
                                <source srcset="<?= BASE_URL; ?>build/img/software/<?= $service['name']; ?><?= $i; ?>.webp" type="image/webp">

                                <img 
                                    class="js-lightbox"
                                    src="<?= BASE_URL; ?>build/img/software/<?= $service['name']; ?><?= $i; ?>.jpg"
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
                        <span>Solución empresarial</span>
                        <span>Software & Systems</span>
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

        <h3>¿Por qué nuestro software funciona?</h3>

        <div class="trust-grid">

            <div>
                <h4>Arquitectura escalable</h4>
                <p>Construimos sistemas preparados para crecer sin límites.</p>
            </div>

            <div>
                <h4>Automatización real</h4>
                <p>Reducimos trabajo manual y mejoramos eficiencia operativa.</p>
            </div>

            <div>
                <h4>Integración total</h4>
                <p>Conectamos todas tus herramientas en un solo ecosistema.</p>
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