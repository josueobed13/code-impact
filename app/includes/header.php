<?php

if (!defined('BASE_URL')) {

    $host = $_SERVER['HTTP_HOST'] ?? '';

    // Detectar local
    $isLocal = in_array($host, ['localhost', '127.0.0.1']);

    if ($isLocal) {
        define('BASE_URL', '/codeImpact/public/');
    } else {
        define('BASE_URL', '/');
    }
}

?>

<!DOCTYPE html>
<html lang="es">

<head>

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>
        <?php echo $titulo ?? 'CodeImpact'; ?>
    </title>

    <meta name="description"
        content="<?php echo $descripcion ?? 'Agencia digital en Lima'; ?>"
    >

    <!-- =========================================
         JS GLOBAL CONFIG
    ========================================== -->
    <script>
        const BASE_URL = "<?php echo BASE_URL; ?>";
    </script>

    <!-- =========================================
         CSS
    ========================================== -->
    <link
        rel="preload"
        href="<?= BASE_URL; ?>build/css/app.css"
        as="style"
    >

    <link
        rel="stylesheet"
        href="<?= BASE_URL; ?>build/css/app.css"
    >

    <!-- =========================================
         FONTS
    ========================================== -->

    <link
        rel="preload"
        href="<?= BASE_URL ?>build/fonts/Inter-Regular.woff2"
        as="font"
        type="font/woff2"
        crossorigin
    >

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

    <!-- =========================================
         HERO IMAGE PRELOAD (SOLO HOME)
    ========================================== -->

    <?php if (($titulo ?? '') === 'Inicio | CodeImpact'): ?>

        <!-- LCP OPTIMIZED PRELOAD (multi-format safe) -->
        <link
            rel="preload"
            as="image"
            href="<?= BASE_URL; ?>build/img/header/desarollo-web.jpg"
            imagesrcset="
                <?= BASE_URL; ?>build/img/header/desarollo-web.avif 1x,
                <?= BASE_URL; ?>build/img/header/desarollo-web.webp 1x,
                <?= BASE_URL; ?>build/img/header/desarollo-web.jpg 1x
            "
            imagesizes="100vw"
        >

    <?php endif; ?>

    <!-- =========================================
         FAVICON
    ========================================== -->

    <link rel="icon" href="<?= BASE_URL ?>build/img/favicon/favicon.ico">

    <link rel="icon" type="image/svg+xml" href="<?= BASE_URL ?>build/img/favicon/favicon.svg">

    <link rel="icon" type="image/png" sizes="96x96"
        href="<?= BASE_URL ?>build/img/favicon/favicon-96x96.png">

</head>

<body>

<?php include __DIR__ . '/nav.php'; ?>