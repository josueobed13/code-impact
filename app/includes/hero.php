<!-- 1. El estilo específico para que cargue instantáneo -->
<style>
  .hero {
    background-image: url("<?= BASE_URL ?>build/img/hero/hero.avif");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: scroll;
  }
  /* Backup por si el navegador es muy antiguo y no soporta avif */
  @supports not (background-image: url("t.avif")) {
    .hero { background-image: url("<?= BASE_URL ?>build/img/hero/hero.webp"); }
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