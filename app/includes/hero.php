<style>
  .hero {
    /* 1. EVITA PANTALLA BLANCA: Color oscuro inmediato */
    background-color: #010618; 
    
    /* 2. ESPACIO INMEDIATO: Reserva el tamaño de la pantalla */
    min-height: 80vh; 
    display: flex;
    align-items: center;
    position: relative;
    overflow: hidden;

    /* 3. ESTILOS DE IMAGEN: Control visual total */
    background-image: url("<?= BASE_URL ?>build/img/hero/hero.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: scroll;
  }

  /* SOPORTE PARA FORMATOS MODERNOS */
  @supports (background-image: url("t.webp")) {
    .hero { background-image: url("<?= BASE_URL ?>build/img/hero/hero.webp"); }
  }

  @supports (background-image: url("t.avif")) {
    .hero { background-image: url("<?= BASE_URL ?>build/img/hero/hero.avif"); }
  }
</style>

<section class="hero">
    <div class="container hero__grid">

        <div class="hero__content">
            <h1 class="hero__title">
                Soluciones digitales que hacen crecer negocios
            </h1>

            <p class="hero__text">
                Desarrollo web, marketing y contenido enfocado en resultados reales.
            </p>

            <div class="hero__buttons">
                <a href="<?= BASE_URL ?>servicios/servicios.php" class="btn btn--primary">Ver servicios</a>
                <a href="https://wa.me/51970503691?text=Hola%20CodeImpact%20Perú,%20quiero%20hacer%20una%20consulta" class="btn btn--primary">Solicitar asesoría</a>
            </div>
        </div>


        <!-- video hero -->
<div class="hero__media">

    <video
    class="hero__video" poster="<?= BASE_URL ?>build/img/hero/hero.jpg"
    ></video>

</div>
</section>