<?php
if (!defined('BASE_URL')) {
    $host = $_SERVER['HTTP_HOST'];
    // LOCAL XAMPP
    if ($host === 'localhost' || $host === '127.0.0.1') {
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
    
    <title><?php echo $titulo ?? 'CodeImpact | Soluciones Digitales'; ?></title>
    <meta name="description" content="<?php echo $descripcion ?? 'Agencia digital líder en Lima. Desarrollo web, marketing y estrategia enfocada en resultados.'; ?>">

    <!-- 1. JS GLOBAL CONFIG (Primero para que esté disponible de inmediato) -->
    <script>
        const BASE_URL = "<?php echo BASE_URL; ?>";
    </script>

    <!-- 2. PRELOAD DE IMAGEN HERO (Prioridad Máxima para eliminar el LCP de 3.9s) -->
    <!-- Verifica si el archivo es hero-mobil o hero-mobile. He puesto mobil por tu código anterior -->
    <link rel="preload" as="image" href="<?= BASE_URL ?>build/img/hero/hero-mobil.avif" media="(max-width: 767px)" type="image/avif" fetchpriority="high">
    <link rel="preload" as="image" href="<?= BASE_URL ?>build/img/hero/hero.avif" media="(min-width: 768px)" type="image/avif" fetchpriority="high">

    <!-- 3. CSS CRÍTICO (Añadimos ?v= para romper la caché de 0.3kb) -->
    <link rel="preload" href="<?= BASE_URL; ?>build/css/app.css?v=1.2" as="style">
    <link rel="stylesheet" href="<?= BASE_URL; ?>build/css/app.css?v=1.2">

    <!-- 4. FUENTES Y PRECONNECT -->
    <link rel="preload" href="<?= BASE_URL ?>build/fonts/Inter-Regular.woff2" as="font" type="font/woff2" crossorigin>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>


</head>
<body>

<?php include __DIR__ . '/nav.php'; ?>
