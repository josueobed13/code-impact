<style>
  .hero {
    /* 1. Fondo por defecto (JPG) - Carga inmediata en navegadores antiguos */
    background-image: url("<?= BASE_URL ?>build/img/hero/hero.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: scroll;
  }

  /* 2. Si el navegador entiende WebP, sobrescribe el JPG */
  @supports (background-image: url("t.webp")) {
    .hero { 
      background-image: url("<?= BASE_URL ?>build/img/hero/hero.webp"); 
    }
  }

  /* 3. Si el navegador entiende AVIF (mejor compresión), sobrescribe todo lo anterior */
  @supports (background-image: url("t.avif")) {
    .hero { 
      background-image: url("<?= BASE_URL ?>build/img/hero/hero.avif"); 
    }
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
    class="hero__video"
    ></video>

</div>
</section>