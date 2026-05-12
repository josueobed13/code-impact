
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
        muted
        autoplay
        loop
        playsinline
        preload="metadata"
    ></video>

</div>
</section>