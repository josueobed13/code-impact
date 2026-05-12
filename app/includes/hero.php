<style>
  .hero {
    /* 1. EVITA PANTALLA BLANCA */
    background-color: #010618; 
    
    /* 2. ESPACIO INMEDIATO */
    min-height: 66vh; 
    display: flex;
    align-items: center;
    position: relative;
    overflow: hidden;

    /* 3. ESTILOS DE IMAGEN BASE */
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: scroll;
    
    /* 4. LÓGICA MÓVIL (Por defecto) */
    background-position: right center; /* Prioriza el logo/oficina en móvil */
    background-image: url("<?= BASE_URL ?>build/img/hero/hero-mobil.jpg");
  }

  /* 5. LÓGICA DESKTOP (Pantallas grandes) */
  @media (min-width: 768px) {
    .hero {
      background-position: center;
      background-image: url("<?= BASE_URL ?>build/img/hero/hero.jpg");
    }
  }

  /* SOPORTE PARA FORMATOS MODERNOS (WebP) */
  @supports (background-image: url("t.webp")) {
    .hero { background-image: url("<?= BASE_URL ?>build/img/hero/hero-mobil.webp"); }
    @media (min-width: 768px) {
      .hero { background-image: url("<?= BASE_URL ?>build/img/hero/hero.webp"); }
    }
  }

  /* SOPORTE PARA FORMATOS MODERNOS (AVIF - Máxima prioridad) */
  @supports (background-image: url("t.avif")) {
    .hero { background-image: url("<?= BASE_URL ?>build/img/hero/hero-mobil.avif"); }
    @media (min-width: 768px) {
      .hero { background-image: url("<?= BASE_URL ?>build/img/hero/hero.avif"); }
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
    class="hero__video" poster="<?= BASE_URL ?>build/img/hero/hero.avif"
    ></video>

</div>
</section>