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
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">
    
    <!-- CSS -->
    <link rel="stylesheet" href="<?php echo BASE_URL; ?>build/css/app.css">

    <!-- ICONS -->
    <link
        rel="preload"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/webfonts/fa-brands-400.woff2"
        as="font"
        type="font/woff2"
        crossorigin
        >

        <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/fontawesome.min.css"
        />

        <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/brands.min.css"
        />

    <!-- JS GLOBAL CONFIG -->
    <script>
        const BASE_URL = "<?php echo BASE_URL; ?>";
    </script>

</head>
<body>

<?php include __DIR__ . '/nav.php'; ?>