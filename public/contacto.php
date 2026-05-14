<?php 
$titulo = "Contacto | CodeImpact";
$descripcion = "Contáctanos y lleva tu marca al siguiente nivel con estrategias digitales, desarrollo web y marketing.";

require_once __DIR__ . '/../app/includes/header.php';
?>

<main>

<!-- =========================
CONTACT HERO
========================= -->
<section class="contact-hero">

    <div class="container">

        <span>CONTACTO</span>

        <h1>
            Hablemos sobre tu
            próximo proyecto
        </h1>

    </div>

</section>
<?php include __DIR__ . '/../app/includes/back-button.php'; ?>
<!-- =========================
FORM
========================= -->
<section class="contact-form-section">

    <div class="container">

        <div class="contact-form-wrapper">

            <div class="contact-form__info">

                <span>TRABAJEMOS JUNTOS</span>

                <h2>
                    Cuéntanos sobre tu proyecto
                </h2>

                <p>
                    Analizamos tus objetivos para crear
                    soluciones digitales alineadas
                    a tu marca y crecimiento.
                </p>

            </div>

            <form class="contact-form" id="contactForm">

                <div class="form-group">
                    <input 
                        type="text" 
                        id="nombre"
                        placeholder="Nombre completo"
                        required
                    >
                </div>

                <div class="form-group">
                    <input 
                        type="email" 
                        id="correo"
                        placeholder="Correo electrónico"
                        required
                    >
                </div>

                <div class="form-group">
                    <input 
                        type="text" 
                        id="empresa"
                        placeholder="Empresa o negocio"
                    >
                </div>

                <div class="form-group select-wrapper">

                    <select id="servicio" required>

                        <option value="">
                            Selecciona un servicio
                        </option>

                        <option>Diseño Web</option>
                        <option>Marketing Digital</option>
                        <option>Branding</option>
                        <option>Producción Audiovisual</option>
                        <option>Desarrollo de Software</option>

                    </select>

                </div>

                <div class="form-group">
                    <textarea 
                        id="mensaje"
                        placeholder="Cuéntanos sobre tu proyecto"
                        required
                    ></textarea>
                </div>

                <button type="submit" class="btn btn--primary">
                    Enviar mensaje
                </button>

            </form>

        </div>

    </div>

</section>

</main>

<?php require_once __DIR__ . '/../app/includes/footer.php'; ?>
<?php
$jsPath = __DIR__ . '/build/js/ui.min.js';
?>

<script src="build/js/ui.min.js?v=<?= file_exists($jsPath) ? filemtime($jsPath) : time() ?>"></script>