<?php

if (!defined('BASE_URL')) {

    $host = $_SERVER['HTTP_HOST'];

    // LOCAL XAMPP
    if ($host === 'localhost') {
        define('BASE_URL', '/codeImpact/public/');
    }

    // PRODUCCIÓN
    else {
        define('BASE_URL', '/');
    }
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <title><?php echo $titulo ?? 'CodeImpact'; ?></title>
    <meta name="description" content="<?php echo $descripcion ?? 'Agencia digital en Lima'; ?>">

    <!-- FONTS -->
    <link rel="preload" href="<?= BASE_URL ?>build/fonts/Inter-Regular.woff2" as="font" type="font/woff2" crossorigin>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    
    <!-- CSS -->
        
    
    <link rel="preload" href="<?= BASE_URL; ?>build/css/app.css" as="style">
    <link rel="stylesheet" href="<?= BASE_URL; ?>build/css/app.css">


        <!-- img hero -->
    <link
        rel="preload"
        as="image"
        href="<?= BASE_URL ?>build/img/hero/hero.avif"
        fetchpriority="high"
        type="image/avif"
    >

    <!-- ICONS -->
    

    <!-- JS GLOBAL CONFIG -->
    <script>
        const BASE_URL = "<?php echo BASE_URL; ?>";
    </script>

</head>
<body>

<?php include __DIR__ . '/nav.php'; ?>