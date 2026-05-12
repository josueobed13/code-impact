<?php
if (!defined('BASE_URL')) {
    $host = $_SERVER['HTTP_HOST'];
    // LOCAL XAMPP o PRODUCCIÓN
    if ($host === 'localhost') {
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
    
    <title><?php echo $titulo ?? 'CodeImpact'; ?></title>
    <meta name="description" content="<?php echo $descripcion ?? 'Agencia digital en Lima'; ?>">

    <!-- 1. PRELOADS CRÍTICOS (Prioridad Máxima) -->
    <!-- Imagen Hero Móvil -->
    <link rel="preload" as="image" href="<?= BASE_URL ?>build/img/hero/hero-mobil.avif" media="(max-width: 767px)" type="image/avif" fetchpriority="high">
    <!-- Imagen Hero Desktop -->
    <link rel="preload" as="image" href="<?= BASE_URL ?>build/img/hero/hero.avif" media="(min-width: 768px)" type="image/avif" fetchpriority="high">
    <!-- Fuente principal (Solo la regular que se usa en el texto inicial) -->
    <link rel="preload" href="<?= BASE_URL ?>build/fonts/Inter-Regular.woff2" as="font" type="font/woff2" crossorigin>

    <!-- 2. CSS CRÍTICO (Estilos necesarios para pintar el Hero de inmediato) -->
    <style>
        /* Estilos base para evitar el salto de contenido (CLS) y pintar el Hero */
        .hero {
            background-color: #010618; 
            display: flex;
            align-items: center;
            position: relative;
            overflow: hidden;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: right center;
            background-image: url("<?= BASE_URL ?>build/img/hero/hero-mobil.avif");
            min-height: 80vh; /* Ajusta según el tamaño real de tu hero */
        }
        @media (min-width: 768px) {
            .hero {
                background-position: center;
                background-image: url("<?= BASE_URL ?>build/img/hero/hero.avif");
            }
        }
        /* Agrega aquí también el CSS básico de tu nav.php si es pequeño */
    </style>

    <!-- 3. CARGA DE CSS NO CRÍTICO (Asíncrona) -->
    <!-- Esto evita que app.css bloquee el First Contentful Paint -->
    <link rel="preload" href="<?= BASE_URL; ?>build/css/app.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
    <noscript>
        <link rel="stylesheet" href="<?= BASE_URL; ?>build/css/app.css">
    </noscript>

    <!-- 4. CONFIGURACIÓN JS -->
    <script>
        const BASE_URL = "<?php echo BASE_URL; ?>";
    </script>
</head>
<body>

<?php include __DIR__ . '/nav.php'; ?>
