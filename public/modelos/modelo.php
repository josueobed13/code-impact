<?php

$model = $model ?? '';

$models = [

    'carla' => [
        'name' => 'Carla Aragón',
        'role' => 'MODELO',
        'desc' => 'Especialista en presentaciones corporativas, eventos, imagen comercial y grabaciones.',
        'folder' => 'carla'
    ],

    'chantal' => [
        'name' => 'Chantal Flores',
        'role' => 'MODELO',
        'desc' => 'Modelo con experiencia en campañas publicitarias, eventos y producciones audiovisuales.',
        'folder' => 'chantal'
    ]

];

if (!array_key_exists($model, $models)) {
    die('Modelo no encontrado');
}

$current = $models[$model];

$titulo = $current['name'] . ' | CodeImpact';
$descripcion = $current['desc'];

require_once __DIR__ . '/../../app/includes/header.php';
?>

<!-- =========================
INTRO
========================= -->
<section class="perfil-intro catalog-intro--light">

    <div class="model-profile__header">

        <span>PERFIL PROFESIONAL</span>

        <h2>
            <?= $current['name']; ?>
        </h2>

        <p>
            Conoce el perfil profesional, experiencia y galería
            de nuestras modelos para campañas, eventos y proyectos audiovisuales.
        </p>

    </div>

</section>

<?php include __DIR__ . '/../../app/includes/back-button.php'; ?>

<!-- =========================
PERFIL
========================= -->
<section class="model-profile service-catalog">

    <div class="container-model-profile">

        <div class="model-profile-card">

            <!-- =========================
GALERÍA
========================= -->
        <div class="model-gallery catalog-item">

            <!-- IMAGEN PRINCIPAL -->
            <div class="model-gallery__main">

                <?php for($i = 1; $i <= 4; $i++): ?>

                    <img
                        class="model-slide js-lightbox <?= $i === 1 ? 'active' : ''; ?>"
                        src="<?= BASE_URL ?>build/img/perfil/<?= $current['folder'] ?>/<?= $i; ?>.jpg"
                        alt="<?= $current['name']; ?> <?= $i; ?>"
                        <?= $i !== 1 ? 'loading="lazy"' : ''; ?>
                    >

                <?php endfor; ?>

            </div>

                <!-- LIGHTBOX HIDDEN GROUP -->
                <div class="catalog-track model-lightbox-track">

                    <?php for($i = 1; $i <= 4; $i++): ?>

                        <picture class="<?= $i === 1 ? 'active' : ''; ?>">

                            <img
                                class="js-lightbox"
                                src="<?= BASE_URL ?>build/img/perfil/<?= $current['folder'] ?>/<?= $i; ?>.jpg"
                                alt="<?= $current['name']; ?> <?= $i; ?>"
                            >

                        </picture>

                    <?php endfor; ?>

                </div>

                <!-- THUMBNAILS -->
                <div class="model-gallery__thumbs">

                    <?php for($i = 1; $i <= 4; $i++): ?>

                        <img
                            class="model-thumb <?= $i === 1 ? 'active' : ''; ?>"
                            src="<?= BASE_URL ?>build/img/perfil/<?= $current['folder'] ?>/<?= $i; ?>.jpg"
                            alt="<?= $current['name']; ?> <?= $i; ?>"
                            data-index="<?= $i - 1; ?>"
                        >

                    <?php endfor; ?>

                </div>

            </div>

            <!-- =========================
            INFO
            ========================= -->
            <div class="model-info">

                <span class="model-info__tag">
                    <?= $current['role']; ?>
                </span>

                <h1>
                    <?= $current['name']; ?>
                </h1>

                <p>
                    <?= $current['desc']; ?>
                </p>

                <ul class="model-info__list">
                    <li>⭐ Presentadora</li>
                    <li>📅 Eventos corporativos</li>
                    <li>🎤 Narración</li>
                    <li>🎬 Producciones audiovisuales</li>
                </ul>

                <a
                    href="https://wa.me/51970503691"
                    class="btn btn--primary"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Contratar modelo
                </a>

            </div>

        </div>

    </div>

</section>

<?php include __DIR__ . '/../../app/includes/lightbox.php'; ?>
<?php require_once __DIR__ . '/../../app/includes/footer.php'; ?>
