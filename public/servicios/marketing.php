<?php 
$titulo = "Estrategias de Marketing Digital | CodeImpact";
$descripcion = "Estrategia, generación de leads, optimización y analítica para crecimiento de negocios.";

require_once __DIR__ . '/../../app/includes/header.php';
?>

<main>

<!-- =========================
INTRO
========================= -->
<section class="catalog-intro catalog-intro--light">
    <div class="container">
        <h1>Las Ideas se Convierten en Ventas, Impulsa tu Negocio</h1>
        <p>
            Analisamos tu Empresa: con Métodos de Eficiencia:
            Elaboramos estratégias para Incrementar ventas y Presencia en Medios de comunicación.
        </p>
    </div>
</section>
<?php include __DIR__ . '/../../app/includes/back-button.php'; ?>
<!-- =========================
CATÁLOGO MARKETING
========================= -->
<section class="service-catalog">

    <div class="container">

        <h2>Áreas estratégicas de marketing</h2>

        <div class="catalog-slider">

            <?php 
            $services = [

                ["name"=>"estrategia",
                 "title"=>"Estrategia & Planificación",
                 "desc"=>"Definimos el rumbo de tu marca con datos, análisis y una estrategia clara para crecer.",
                 "cta"=>"Crear estrategia",
                 "features"=>[
                    "✔ Estrategia de Marketing 360°",
                    "✔ Investigación de mercado",
                    "✔ Definición de buyer persona",
                    "✔ Posicionamiento de marca"
                 ]],

                ["name"=>"leads",
                 "title"=>"Atracción & Generación de Leads",
                 "desc"=>"Atraemos clientes potenciales y los guiamos hasta convertirlos en oportunidades reales.",
                 "cta"=>"Generar leads",
                 "features"=>[
                    "✔ Plan de contenidos estratégico",
                    "✔ Embudos de conversión",
                    "✔ Customer journey optimizado"
                 ]],

                ["name"=>"optimizacion",
                 "title"=>"Optimización & Crecimiento",
                 "desc"=>"Mejoramos tus resultados para que vendas más sin aumentar costos innecesarios.",
                 "cta"=>"Optimizar resultados",
                 "features"=>[
                    "✔ CRO (optimización de conversión)",
                    "✔ Growth marketing",
                    "✔ Pricing y propuesta de valor"
                 ]],

                ["name"=>"analitica",
                 "title"=>"Análisis & Fidelización",
                 "desc"=>"Medimos, analizamos y optimizamos para que tus clientes regresen y tu negocio escale.",
                 "cta"=>"Analizar negocio",
                 "features"=>[
                    "✔ Analítica y data marketing",
                    "✔ Retención y fidelización",
                    "✔ Auditoría de marketing"
                 ]]

            ];

            foreach($services as $service): ?>

            <div class="catalog-item">

                <div class="catalog-images">
                    <div class="catalog-track">

                        <?php for($i=1; $i<=3; $i++): ?>

                            <picture class="<?= $i === 1 ? 'active' : ''; ?>">

                                <source srcset="<?= BASE_URL; ?>build/img/marketing/<?= $service['name']; ?><?= $i; ?>.avif" type="image/avif">
                                <source srcset="<?= BASE_URL; ?>build/img/marketing/<?= $service['name']; ?><?= $i; ?>.webp" type="image/webp">

                                <img 
                                    class="js-lightbox"
                                    src="<?= BASE_URL; ?>build/img/marketing/<?= $service['name']; ?><?= $i; ?>.jpg"
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
                        <span>Área estratégica</span>
                        <span>Marketing</span>
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

        <h3>¿Por qué nuestro marketing funciona?</h3>

        <div class="trust-grid">

            <div>
                <h4>Estrategia basada en datos</h4>
                <p>No improvisamos, analizamos antes de actuar.</p>
            </div>

            <div>
                <h4>Enfoque en resultados</h4>
                <p>Cada acción tiene un objetivo de crecimiento real.</p>
            </div>

            <div>
                <h4>Optimización constante</h4>
                <p>Mejoramos continuamente para escalar tu negocio.</p>
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