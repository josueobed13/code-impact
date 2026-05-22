<?php 
$titulo = "Inicio | CodeImpact";
$descripcion = "Agencia digital en Lima especializada en desarrollo web, marketing y contenido.";

include __DIR__ . '/../app/includes/header.php'; 
?>

<main>
    <?php include __DIR__ . '/../app/includes/hero.php'; ?>
    <?php include __DIR__ . '/../app/includes/process.php'; ?>
    <?php include __DIR__ . '/../app/includes/Promociones.php'; ?>
    <?php include __DIR__ . '/../app/includes/services.php'; ?>
    <?php include __DIR__ . '/../app/includes/clients.php'; ?>
    <?php include __DIR__ . '/../app/includes/models.php'; ?>
</main>


<?php include __DIR__ . '/../app/includes/footer.php'; ?>