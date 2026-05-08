<?php 
$titulo = "Publicidad Digital & Ads | CodeImpact";
$descripcion = "Gestión de campañas publicitarias en Google Ads, Meta Ads y TikTok Ads enfocadas en resultados.";

require_once __DIR__ . '/../../app/includes/header.php';
?>

<main>

<!-- =========================
INTRO
========================= -->
<section class="catalog-intro catalog-intro--light">
    <div class="container">
        <h1>Publicidad digital que convierte inversión en resultados</h1>
        <p>
            Creamos, gestionamos y optimizamos campañas publicitarias enfocadas en ventas,
            leads y escalamiento de negocios en plataformas digitales.
        </p>
    </div>
</section>
<?php include __DIR__ . '/../../app/includes/back-button.php'; ?>
<!-- =========================
CATÁLOGO ADS
========================= -->
<section class="service-catalog">

    <div class="container">

        <h2>Gestión profesional de publicidad digital</h2>

        <div class="catalog-slider">

            <?php 
            $services = [

                ["name"=>"estrategia-campana",
                 "title"=>"Estrategia & Configuración de Campañas",
                 "desc"=>"Diseñamos campañas desde cero con base estratégica sólida para maximizar resultados.",
                 "cta"=>"Crear campaña",
                 "features"=>[
                    "✔ Definición de objetivos (ventas, leads, tráfico)",
                    "✔ Selección de plataformas (Google, Meta, TikTok)",
                    "✔ Segmentación avanzada de audiencias",
                    "✔ Configuración de píxeles y tracking"
                 ]],

                ["name"=>"gestion-ads",
                 "title"=>"Gestión & Optimización de Anuncios",
                 "desc"=>"Gestionamos y optimizamos tus campañas constantemente para mejorar el rendimiento.",
                 "cta"=>"Optimizar campañas",
                 "features"=>[
                    "✔ Creación de anuncios (copy + creatividades)",
                    "✔ Test A/B para mejorar conversiones",
                    "✔ Optimización de presupuesto",
                    "✔ Ajustes de segmentación continua"
                 ]],

                ["name"=>"escalado",
                 "title"=>"Escalado & Performance",
                 "desc"=>"Hacemos crecer tus campañas sin perder rentabilidad ni control del presupuesto.",
                 "cta"=>"Escalar resultados",
                 "features"=>[
                    "✔ Escalado de campañas rentables",
                    "✔ Estrategias de bidding avanzadas",
                    "✔ Retargeting y remarketing",
                 ]],

                ["name"=>"analitica-ads",
                 "title"=>"Analítica & Reportes",
                 "desc"=>"Medimos todo para que sepas exactamente qué funciona y cómo mejorar resultados.",
                 "cta"=>"Ver métricas",
                 "features"=>[
                    "✔ Métricas clave (CTR, CPC, ROAS, CPA)",
                    "✔ Reportes personalizados",
                    "✔ Interpretación de datos",
                    "✔ Decisiones basadas en performance"
                 ]]

            ];

            foreach($services as $service): ?>

            <div class="catalog-item">

                <div class="catalog-images">
                    <div class="catalog-track">

                        <?php for($i=1; $i<=3; $i++): ?>

                            <picture class="<?= $i === 1 ? 'active' : ''; ?>">

                                <source srcset="<?= BASE_URL; ?>build/img/ads/<?= $service['name']; ?><?= $i; ?>.avif" type="image/avif">
                                <source srcset="<?= BASE_URL; ?>build/img/ads/<?= $service['name']; ?><?= $i; ?>.webp" type="image/webp">

                                <img 
                                    class="js-lightbox"
                                    src="<?= BASE_URL; ?>build/img/ads/<?= $service['name']; ?><?= $i; ?>.jpg"
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
                        <span>Gestión profesional</span>
                        <span>Ads Performance</span>
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

        <h3>¿Por qué nuestras campañas funcionan?</h3>

        <div class="trust-grid">

            <div>
                <h4>Enfoque en rentabilidad</h4>
                <p>No gastamos presupuesto, lo optimizamos.</p>
            </div>

            <div>
                <h4>Optimización constante</h4>
                <p>Mejoramos campañas en tiempo real.</p>
            </div>

            <div>
                <h4>Decisiones basadas en datos</h4>
                <p>Todo se mide, todo se ajusta, todo se escala.</p>
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